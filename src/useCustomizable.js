import { useTheme } from "@mui/material";

const useCustomizable = () => {
  const theme = useTheme();

  return {
    loginHeading: "Enter RT-9",
    loginSubHeading: "We're glad to see you come back!",
    primaryBackground: "white",
    primaryBackgroundMain: theme.palette.white.main,
    secondaryBackground: "lightGrey",
    secondaryBackgroundMain: theme.palette.lightGrey.main,
    drawerWidth: 240,
    navbarHeight: 60,
    scrollbarColor: "darkGrey",
    scrollbarColorMain: theme.palette.darkGrey.main,
  };
};

export default useCustomizable;
