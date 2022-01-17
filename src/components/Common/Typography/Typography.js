import { Box, Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant, style, content }) => {
  let transformStyle;

  switch (style) {
    case "title":
      transformStyle = "uppercase";
      break;
    case "heading":
      transformStyle = "capitalize";
      break;
    default:
      transformStyle = "lowercase";
      break;
  }

  return (
    <Box
      sx={{
        margin: "1rem 0",
        textTransform: transformStyle,
      }}
    >
      <MuiTypography variant={variant}>{content}</MuiTypography>
    </Box>
  );
};

export default Typography;
