import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 My Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 NIKHIL VANGAMUDI
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              M.S. Cybersecurity | Graduate Assistant @ Eastern Illinois University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Charleston, IL 61920
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ nikhilvangamudi7@gmail.com | 📞 +1 (217) 819-0494
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ▶️ YouTube: <a href="http://www.youtube.com/@skillvana-7" target="_blank" rel="noreferrer" style={{ color: "#00b4ff" }}>skillvana-7</a>
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ▶️ LinkedIn: <a href="https://www.linkedin.com/in/nikhilvangamudi-info" target="_blank" rel="noreferrer" style={{ color: "#00b4ff" }}>nikhilvangamudi-info</a>
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Graduate Assistant at Eastern Illinois University’s School of Extended Learning,
              managing backend infrastructure and ensuring cybersecurity compliance for
              university websites. Currently pursuing an M.S. in Cybersecurity (GPA: 4.0) with
              hands-on experience in network support, system security, troubleshooting, and
              technical customer service. Skilled with Cisco technologies, Packet Tracer,
              Wireshark, VLANs, VPNs, TCP/IP, DHCP, and Linux systems. Passionate about
              collaboration, instruction, and learning in fast-paced environments, and eager
              to contribute to impactful security and networking projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Master of Science in Cybersecurity</strong> — Eastern Illinois University, Charleston, IL <br />
              <span style={{ color: "#aaa" }}>GPA: 4.0 | Expected Graduation: August 2026</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>B.Tech in Electronics and Computer Engineering</strong> — Vignan’s Institute of Information Technology, Vizag, India <br />
              <span style={{ color: "#aaa" }}>GPA: 3.58/4.0 | Graduation: August 2024</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Professional Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Graduate Assistant – Backend & Web Security</strong> — School of Extended Learning, Eastern Illinois University<br />
              <span style={{ color: "#aaa" }}>Jan 2025 – Present</span>
              <ul style={{ marginTop: 6, marginLeft: 18, fontSize: 14, color: "#ccc" }}>
                <li>Maintain backend services and security layers for university websites.</li>
                <li>Configure secure login, perform risk scans, and apply firewall rules.</li>
                <li>Collaborate with IT staff on DNS, server monitoring, and access control.</li>
              </ul>
            </li>

            <li style={{ marginBottom: 12 }}>
              <strong>Lab Assistant – Computer Networks</strong> — Vignan’s Institute of Information Technology<br />
              <span style={{ color: "#aaa" }}>May 2021 – Aug 2024</span>
              <ul style={{ marginTop: 6, marginLeft: 18, fontSize: 14, color: "#ccc" }}>
                <li>Guided students in Packet Tracer and labs on VLAN, NAT, and VPNs.</li>
                <li>Instructed on troubleshooting LAN/WLAN setups and OSI model functionality.</li>
                <li>Delivered instruction on TCP, DHCP, STP, and routing protocols.</li>
              </ul>
            </li>

            <li style={{ marginBottom: 12 }}>
              <strong>AWS Cloud Intern</strong> — Tech Mahindra Smart Academy<br />
              <span style={{ color: "#aaa" }}>Dec 2023 – Mar 2024</span>
              <ul style={{ marginTop: 6, marginLeft: 18, fontSize: 14, color: "#ccc" }}>
                <li>Developed automation scripts for EC2 and S3 tasks using Python.</li>
                <li>Improved Linux server maintenance, saving 25% manual effort.</li>
                <li>Contributed to cloud-based NAT/firewall testing environments.</li>
              </ul>
            </li>

            <li style={{ marginBottom: 12 }}>
              <strong>Web Developer Intern</strong> — Slash Mark<br />
              <span style={{ color: "#aaa" }}>Dec 2023 – Mar 2024</span>
              <ul style={{ marginTop: 6, marginLeft: 18, fontSize: 14, color: "#ccc" }}>
                <li>Delivered secure static websites with encrypted login systems.</li>
                <li>Reduced average page load by 50% and enhanced user engagement by 35%.</li>
                <li>Collaborated in a fast-paced team delivering 5+ projects using HTML, CSS, PHP.</li>
              </ul>
            </li>

            <li>
              <strong>Python Developer Intern</strong> — InternPE<br />
              <span style={{ color: "#aaa" }}>May 2023 – Jun 2023</span>
              <ul style={{ marginTop: 6, marginLeft: 18, fontSize: 14, color: "#ccc" }}>
                <li>Built Python-based automation tools for data parsing and analysis.</li>
                <li>Developed scalable OOP modules increasing efficiency by 20%.</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>📜 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#ccc" }}>
            <li>Networking Essentials – Cisco Networking Academy</li>
            <li>Introduction to Cybersecurity – Cisco & Infosys Springboard</li>
            <li>Networking and Web Technology – Infosys Springboard</li>
            <li>Python Programming – Kaggle</li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🧩 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#ccc" }}>
            <li>
              <strong>OWASP Risk Calculator – Risk analysis tool for developers</strong>
              <br />
              Delivered a fully automated scoring engine for application risks, improving security
              evaluation speed by 20%.
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Secure Web Authentication System – PHP/MySQL Web Security</strong>
              <br />
              Built secure admin/user login using 256-bit encryption and SQLi mitigation with
              authentication-based access control.
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Smart Home Automation using ESP8266 – IoT project</strong>
              <br />
              Enabled wireless voice control via Alexa/Google Assistant, cutting device response
              latency by 30% through optimized routing logic.
            </li>
          </ul>
        </motion.div>

        {/* Leadership & Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏅 Leadership & Campus Involvement</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#ccc" }}>
            <li>
              <strong>Lead – OWASP VIIT Chapter</strong> <br />
              Organized cybersecurity workshops on Wireshark, penetration testing, and risk modeling;
              mentored 30+ students on secure coding and open-source tools.
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Event Organizer – Vista VIIT 2023</strong> <br />
              Directed a technical event with 200+ attendees, increasing turnout by 30%.
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Project Team Lead – IoT Solar Project (2021–2024)</strong> <br />
              Guided a team of 4 in energy-efficient wireless charging design and was recognized for
              technical execution and deadline compliance.
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Core Competencies & Technical Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              // Core Competencies
              "Network Support & Troubleshooting",
              "TCP/IP",
              "DHCP",
              "VPN",
              "NAT",
              "VLAN",
              "Customer Support & Communication",
              "Collaboration & Instruction",
              "Backend Security",
              "Web Administration",
              // Technical
              "DNS",
              "OSI Model",
              "STP",
              "ARP",
              "Wireshark",
              "Packet Tracer",
              "Cisco Devices",
              "Wireless Access Points",
              "AWS (EC2, S3)",
              "Git",
              "Python",
              "PHP",
              "HTML",
              "CSS",
              "Java",
              "Linux (Ubuntu/CentOS)",
              "Windows",
              "Firewall Configuration",
              "Risk Assessment",
              "Penetration Testing",
              "MySQL",
              "DBMS",
              "IoT",
              "Web Development",
              "OOP",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "🔗 LinkedIn", link: "http://www.linkedin.com/in/nikhilvangamudi-info" },
            { name: "▶️ YouTube", link: "http://www.youtube.com/@skillvana-7" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf" // update this path if your PDF is named differently
            title="Nikhil Vangamudi Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf" // update if needed
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
