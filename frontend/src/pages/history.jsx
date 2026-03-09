import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import { IconButton } from '@mui/material'

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext)

    const [meetings, setMeetings] = useState([])

    const routeTo = useNavigate()

    useEffect(() => {

        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser()
                setMeetings(history)
            } catch {
                // Snackbar can be added here
            }
        }

        fetchHistory()

    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, "0")
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear()

        return `${day}/${month}/${year}`

    }

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#1E293B,#0F172A)",
                padding: "40px"
            }}
        >

            {/* HEADER */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px"
                }}
            >

                <IconButton
                    onClick={() => {
                        routeTo("/home")
                    }}
                    style={{ color: "white" }}
                >
                    <HomeIcon />
                </IconButton>

                <Typography
                    variant="h4"
                    style={{
                        color: "white",
                        marginLeft: "10px",
                        fontWeight: "600"
                    }}
                >
                    Meeting History
                </Typography>

            </div>



            {/* MEETING CARDS */}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
                    gap: 3
                }}
            >

                {meetings.length !== 0 ?

                    meetings.map((e, i) => {

                        return (

                            <Card
                                key={i}
                                sx={{
                                    borderRadius: 3,
                                    background: "#111827",
                                    color: "white",
                                    transition: "0.3s",
                                    ":hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.6)"
                                    }
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            color: "#9CA3AF"
                                        }}
                                    >
                                        Meeting Code
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: "600",
                                            color: "#60A5FA",
                                            mb: 2
                                        }}
                                    >
                                        {e.meetingCode}
                                    </Typography>


                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            color: "#9CA3AF"
                                        }}
                                    >
                                        Date
                                    </Typography>

                                    <Typography>
                                        {formatDate(e.date)}
                                    </Typography>

                                </CardContent>

                            </Card>

                        )

                    })

                    :

                    <Typography
                        style={{
                            color: "white",
                            fontSize: "18px"
                        }}
                    >
                        No meeting history found
                    </Typography>

                }

            </Box>

        </div>

    )

}