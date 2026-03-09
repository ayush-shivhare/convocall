import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {

  const router = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background:
          "linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >

      {/* NAVBAR */}

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 80px",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}
      >

        <h2 style={{ margin: 0, fontWeight: 600 }}>
          Convo Video Call
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}
        >

          <p
            style={{ cursor: "pointer", opacity: 0.9 }}
            onClick={() => router("/aljk23")}
          >
            Join as Guest
          </p>

          <p
            style={{ cursor: "pointer", opacity: 0.9 }}
            onClick={() => router("/auth")}
          >
            Register
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(45deg,#2563EB,#06B6D4)",
              padding: "8px 20px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            onClick={() => router("/auth")}
          >
            Login
          </motion.div>

        </div>

      </motion.nav>



      {/* HERO SECTION */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 10%",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT SIDE */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "520px" }}
        >

          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.1",
              marginBottom: "20px",
              fontWeight: "700"
            }}
          >
            Conversations that feel
            <br />
            <span
              style={{
                background: "linear-gradient(45deg,#38BDF8,#22C55E)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              natural and real
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.85,
              marginBottom: "35px",
              lineHeight: "1.6"
            }}
          >
            Convo Video Call lets you connect instantly with
            crystal clear video, secure meetings and seamless
            collaboration — from anywhere in the world.
          </p>



          {/* CTA BUTTON */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: "linear-gradient(45deg,#2563EB,#06B6D4)",
              padding: "14px 32px",
              borderRadius: "10px",
              fontWeight: "500"
            }}
          >

            <Link
              to={"/auth"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px"
              }}
            >
              Get Started
            </Link>

          </motion.div>

        </motion.div>



        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >

          <motion.img
            src="/mobile.png"
            alt="video meeting"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            style={{
              width: "430px",
              maxWidth: "100%",
              filter:
                "drop-shadow(0px 20px 40px rgba(0,0,0,0.5))"
            }}
          />

        </motion.div>

      </div>



      {/* FEATURES */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          padding: "40px 10%",
          flexWrap: "wrap",
          textAlign: "center"
        }}
      >

        <motion.div whileHover={{ y: -8 }}>
          <h3>HD Video</h3>
          <p style={{ opacity: 0.7 }}>
            Crystal clear video quality for meetings.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -8 }}>
          <h3>Instant Meetings</h3>
          <p style={{ opacity: 0.7 }}>
            Start meetings instantly in seconds.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -8 }}>
          <h3>Secure Calls</h3>
          <p style={{ opacity: 0.7 }}>
            Safe and encrypted video communication.
          </p>
        </motion.div>

      </div>



      {/* FOOTER */}

      <div
        style={{
          textAlign: "center",
          padding: "25px",
          opacity: 0.6
        }}
      >
        <p>© 2026 Convo Video Call • Built for seamless conversations</p>
      </div>

    </div>
  );
}