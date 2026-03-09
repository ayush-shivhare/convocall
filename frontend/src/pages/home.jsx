import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { AuthContext } from "../contexts/AuthContext";
import { motion } from "framer-motion";

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    const createMeeting = async () => {
        const code = Math.random().toString(36).substring(2, 8);
        await addToUserHistory(code);
        navigate(`/${code}`);
    }

    return (

        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(120deg,#0f172a,#1e293b,#334155)",
            fontFamily: "Inter, sans-serif",
            color: "white"
        }}>

            {/* NAVBAR */}

            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 60px",
                    backdropFilter: "blur(12px)",
                    background: "rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
            >

                <h2 style={{ margin: 0, fontWeight: 600 }}>
                    Convo Meet
                </h2>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"
                }}>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        onClick={() => navigate("/history")}
                    >
                        <IconButton sx={{ color: "white" }}>
                            <RestoreIcon />
                        </IconButton>
                        <p style={{ margin: 0 }}>History</p>
                    </div>

                    <Button
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "white"
                        }}
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                    >
                        Logout
                    </Button>

                </div>

            </motion.div>



            {/* HERO SECTION */}

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "80px 10%",
                flexWrap: "wrap"
            }}>


                {/* LEFT PANEL */}

                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: "520px" }}
                >

                    <h1 style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        marginBottom: "20px"
                    }}>
                        Modern Video Meetings
                        <br />
                        Made Simple
                    </h1>

                    <p style={{
                        fontSize: "18px",
                        opacity: 0.8,
                        marginBottom: "35px"
                    }}>
                        Create or join meetings instantly with secure
                        and high-quality video collaboration.
                    </p>


                    {/* CREATE MEETING */}

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ marginBottom: "25px" }}
                    >
                        <Button
                            variant="contained"
                            startIcon={<VideoCallIcon />}
                            onClick={createMeeting}
                            sx={{
                                background:
                                    "linear-gradient(45deg,#2563eb,#06b6d4)",
                                borderRadius: "8px",
                                padding: "10px 22px",
                                fontSize: "15px",
                                textTransform: "none"
                            }}
                        >
                            Create Meeting
                        </Button>
                    </motion.div>



                    {/* JOIN BOX */}

                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "flex",
                            gap: "12px",
                            background: "rgba(255,255,255,0.08)",
                            padding: "14px",
                            borderRadius: "12px",
                            backdropFilter: "blur(12px)"
                        }}
                    >

                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            label="Enter Meeting Code"
                            variant="outlined"
                            fullWidth
                            sx={{
                                background: "white",
                                borderRadius: "8px"
                            }}
                        />

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={handleJoinVideoCall}
                                variant="contained"
                                sx={{
                                    background: "#06b6d4",
                                    borderRadius: "8px",
                                    padding: "10px 22px",
                                    textTransform: "none"
                                }}
                            >
                                Join
                            </Button>
                        </motion.div>

                    </motion.div>

                </motion.div>



                {/* RIGHT PANEL */}

                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                >

                    <motion.img
                        src="/logo3.png.svg"
                        alt="video meeting"
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4
                        }}
                        style={{
                            width: "420px",
                            maxWidth: "100%",
                            filter:
                                "drop-shadow(0px 15px 30px rgba(0,0,0,0.4))"
                        }}
                    />

                </motion.div>

            </div>



            {/* FOOTER */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1 }}
                style={{
                    textAlign: "center",
                    paddingBottom: "25px"
                }}
            >
                <p>Secure • Fast • Modern Meetings</p>
            </motion.div>

        </div>
    )
}

export default withAuth(HomeComponent)