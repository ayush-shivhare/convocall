import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Snackbar,
  Tabs,
  Tab,
  Paper,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB"
    }
  }
});

export default function Authentication() {

  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {

      if (formState === 0) {
        await handleLogin(username, password);
      }

      if (formState === 1) {
        let result = await handleRegister(name, username, password);

        setUsername("");
        setPassword("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
      }

    } catch (err) {
      let message = err.response?.data?.message || "Something went wrong";
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#1E3A8A,#1E293B)"
        }}
      >

        <Paper
          elevation={8}
          sx={{
            width: 420,
            p: 5,
            borderRadius: 3,
            textAlign: "center"
          }}
        >

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              margin: "auto",
              width: 56,
              height: 56
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            Convo Video Call
          </Typography>

          <Typography sx={{ opacity: 0.6, mb: 3 }}>
            Secure meetings made simple
          </Typography>


          {/* SIGN IN / SIGN UP */}

          <Tabs
            value={formState}
            onChange={(e, v) => setFormState(v)}
            centered
          >
            <Tab label="SIGN IN" />
            <Tab label="SIGN UP" />
          </Tabs>


          {/* FORM */}

          {formState === 1 && (
            <TextField
              margin="normal"
              fullWidth
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <TextField
            margin="normal"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            margin="normal"
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>


          {/* BUTTON */}

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: 2
            }}
            onClick={handleAuth}
          >
            {formState === 0 ? "Login" : "Register"}
          </Button>


          {/* LANDING PAGE OPTION */}

          <Typography sx={{ mt: 3, fontSize: 14 }}>
            Want to explore first?{" "}
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="hover"
            >
              Go to Landing Page
            </Link>
          </Typography>

        </Paper>

      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
      />

    </ThemeProvider>
  );
}