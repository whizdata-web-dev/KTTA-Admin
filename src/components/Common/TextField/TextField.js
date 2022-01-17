import { Box, TextField as MuiTextField } from "@mui/material";

const TextField = ({
  id = "",
  type = "text",
  value = "",
  label = "",
  variant = "standard",
  onChangeHandler,
}) => {
  return (
    <Box sx={{ margin: "1rem" }} noValidate autoComplete='off'>
      <MuiTextField
        id={id}
        sx={{ width: "100%" }}
        type={type}
        value={value}
        className='form-control'
        label={label}
        variant={variant}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </Box>
  );
};

export default TextField;
