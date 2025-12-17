import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Why I Teach Cybersecurity as ‘Tech Made Easy’",
      text: "A lot of people think cybersecurity is only for hackers and experts in hoodies. On my channel Skillvana, I break that myth every day. If a student understands how a simple login form can be attacked, they suddenly ‘get’ why security matters. My goal is to turn complex topics like firewalls, VPNs, and OWASP risks into simple, practical lessons that anyone can apply to protect themselves online.",
    },
    {
      id: 2,
      title: "From Packet Tracer Labs to Real-World Networks",
      text: "I started with basic Packet Tracer labs: creating VLANs, configuring DHCP, and simulating routing protocols. Today, I work on real backend systems and secure university websites. The jump wasn’t magic—it was consistency. Every lab I did as a student became a mental building block for troubleshooting real DNS issues, firewall rules, and access control in production environments.",
    },
    {
      id: 3,
      title: "Making Advanced Tech Feel Friendly, Not Intimidating",
      text: "Whether it’s cloud, networking, or cybersecurity, most beginners get scared the moment they see acronyms: TCP, STP, VPN, NAT, EC2. I like to treat each concept as a character in a story. TCP is the reliable friend that double-checks everything. DNS is the contact list in your phone. When tech feels human, people stop fearing it—and start using it to build and secure cool things.",
    },
    {
      id: 4,
      title: "Why ‘Secure by Design’ Is My Favorite Mindset",
      text: "I’ve seen too many projects where security is an afterthought: app is built first, then people start asking, ‘Can we add security now?’. That mindset is dangerous. When I design a system or teach a concept on Skillvana, I always ask: if this were attacked today, where would it break? Thinking like both a developer and a defender makes tech not just powerful, but trustworthy.",
    },
    {
      id: 5,
      title: "Teaching on YouTube Made Me a Better Engineer",
      text: "Recording Skillvana videos forced me to simplify what I know. If I can’t explain VPNs, NAT or risk assessment in under 10 minutes, I probably don’t understand it deeply enough. Teaching ‘Tech Made Easy’ has sharpened my fundamentals, improved my communication, and connected me with learners around the world who are just one clear explanation away from loving tech.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📝 Tech Made Easy – Blog
      </motion.h2>
      <p className="blog-sub">
        Thoughts from my journey in cybersecurity, networking, and teaching tech on Skillvana.
        React, agree, disagree – let’s learn together.
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
