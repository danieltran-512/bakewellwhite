import { createTheme } from "@mui/material";
import { breakpointValues } from "./breakpointValues";
import typography from "./typography";

//Customise MUI theme
const theme = createTheme(
    {
        typography: typography,
        breakpoints: {values: breakpointValues},
    }
)

export default theme