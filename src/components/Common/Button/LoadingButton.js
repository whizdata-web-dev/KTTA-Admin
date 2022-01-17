import { Box } from "@mui/material";
import { LoadingButton as MuiLoadingButton } from "@mui/lab";

const LoadingButton = ({ loading, disabled, onClick, variant, buttonName }) => {
  return (
    <Box sx={{ margin: "2rem 1rem" }}>
      <MuiLoadingButton
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        variant={variant}
        sx={{ width: "100%" }}
      >
        {buttonName}
      </MuiLoadingButton>
    </Box>
  );
};

export default LoadingButton;
