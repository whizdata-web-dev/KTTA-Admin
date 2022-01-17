import { Alert as MuiAlert, Box } from "@mui/material";

const Alert = ({ id, severity, message }) => {
  return (
    <Box sx={{ margin: "1rem 0" }}>
      <MuiAlert id={id} severity={severity}>
        {message}
      </MuiAlert>
    </Box>
  );
};

export default Alert;
