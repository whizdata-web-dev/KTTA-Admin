import { Box, Button as MuiButton } from "@mui/material";

const Button = ({ id, variant, content, onClick, inProgress }) => {
  return (
    <Box sx={{ margin: "1rem auto" }}>
      <MuiButton
        id={id}
        variant={variant}
        onClick={onClick}
        disabled={inProgress}
      >
        {content}
      </MuiButton>
    </Box>
  );
};

export default Button;
