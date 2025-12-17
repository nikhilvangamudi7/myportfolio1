// src/components/FluidCursor.jsx
import React, { useEffect, useRef } from 'react';

/**
 * FluidCursor.jsx
 * Canvas + fragment shader fluid background. Pointer-events: none.
 * Place this inside the same container (.home-section) as your content.
 */
export default function FluidCursor() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const startRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log('[FluidCursor] mount, canvas:', canvas);
    if (!canvas) return;

    // try WebGL context
    const gl = canvas.getContext('webgl', { antialias: true });
    console.log('[FluidCursor] gl context available:', !!gl);
    if (!gl) {
      canvas.style.background = 'rgba(255,0,0,0.04)'; // visual fallback tint
      console.warn('[FluidCursor] WebGL not available. Fallback visible.');
      return;
    }

    // helper: compile shader
    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    // helper: create program
    function createProgram(vsSrc, fsSrc) {
      const vs = compile(gl.VERTEX_SHADER, vsSrc);
      const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    }

    // simple fullscreen vertex shader
    const vertexSrc = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // fragment shader: fluid-like blobs + mouse + time
    const fragmentSrc = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
      float noise(vec2 p){
        vec2 i=floor(p); vec2 f=fract(p);
        float a=hash(i), b=hash(i+vec2(1.0,0.0));
        float c=hash(i+vec2(0.0,1.0)), d=hash(i+vec2(1.0,1.0));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
      }
      float blob(vec2 p, vec2 c, float r, float f){
        float d=length(p-c);
        return smoothstep(r+f, r-f, d);
      }

      void main(){
        vec2 uv=v_uv;
        float t=u_time*0.6;

        vec2 mouse = u_mouse;
        // flip y because canvas client coord and uv differ
        mouse.y = 1.0 - mouse.y;

        float accum = 0.0;

        // background slow orbit
        vec2 m1 = vec2(0.5 + 0.18 * sin(t*0.5), 0.5 + 0.18 * cos(t*0.4));
        accum += 0.25 * blob(uv, m1, 0.42, 0.18);

        // mouse-following main blob
        accum += 1.05 * blob(uv, mouse, 0.18 + 0.03*sin(t*1.6), 0.12);

        // secondary moving blobs
        vec2 m2 = vec2(0.2 + 0.18 * cos(t*0.8), 0.75 + 0.12 * sin(t*0.9));
        accum += 0.35 * blob(uv, m2, 0.20 + 0.03*sin(t*0.8), 0.12);
        vec2 m3 = vec2(0.85 + 0.10 * sin(t*0.7), 0.22 + 0.08 * cos(t*0.6));
        accum += 0.38 * blob(uv, m3, 0.24 + 0.03*cos(t*0.6), 0.14);

        float n = noise(uv * 6.0 + t * 0.12);
        accum += 0.25 * (n - 0.5) * 0.6;

        vec3 teal = vec3(0.07,0.85,0.7);
        vec3 purple = vec3(0.38,0.30,0.92);
        vec3 orange = vec3(1.00,0.52,0.20);
        vec3 col = vec3(0.02,0.02,0.03) * 0.25;
        col += teal * smoothstep(0.0, 0.9, accum * 0.9);
        col += purple * smoothstep(0.2, 0.9, accum * 0.6) * 0.6;
        col += orange * smoothstep(0.5, 0.95, accum) * 0.25;

        float dist = distance(uv, vec2(0.5));
        col *= 1.0 - smoothstep(0.6, 1.0, dist * 1.2);
        col = pow(col, vec3(0.92));
        gl_FragColor = vec4(col, clamp(accum * 1.05, 0.0, 1.0) * 0.95);
      }
    `;

    const program = createProgram(vertexSrc, fragmentSrc);
    console.log('[FluidCursor] program created:', !!program);
    if (!program) {
      canvas.style.background = 'rgba(255,0,0,0.04)';
      return;
    }
    gl.useProgram(program);

    // quad
    const posLoc = gl.getAttribLocation(program, 'a_position');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const verts = new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // uniforms
    const u_resolution = gl.getUniformLocation(program, 'u_resolution');
    const u_mouse = gl.getUniformLocation(program, 'u_mouse');
    const u_time = gl.getUniformLocation(program, 'u_time');

    // resize
    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u_resolution, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    // render loop
    function render() {
      const t = (Date.now() - startRef.current) / 1000;
      gl.uniform1f(u_time, t);
      gl.uniform2f(u_mouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    // mouse listeners (global for convenience)
    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.x = Math.min(1, Math.max(0, x));
      mouseRef.current.y = Math.min(1, Math.max(0, y));
    }
    function handleLeave() {
      mouseRef.current.x = 0.5;
      mouseRef.current.y = 0.5;
    }
    window.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      try { gl.deleteProgram(program); } catch(e){/* ignore */ }
    };
  }, []);

  // inline style includes a faint tint so you can confirm canvas presence initially
  return (
    <canvas
      ref={canvasRef}
      className="fluid-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1,
        // TEMP VISUAL HELPER — remove after you confirm effect
        background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.01))',
      }}
    />
  );
}
