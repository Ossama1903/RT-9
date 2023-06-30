import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Button, Typography, useTheme } from "@mui/material";
import useCustomizable from "../../../useCustomizable";

function ResponsiveDrawer(props) {
  const { window } = props;
  const {
    primaryBackgroundMain,
    scrollbarColorMain,
    drawerWidth,
    navbarHeight,
  } = useCustomizable();

  const drawer = (
    <Box>
      <Typography variant="p" sx={{ ml: 3 }}>
        Dashboard
      </Typography>
      <List
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <Button
            sx={{
              width: "85%",
              textTransform: "capitalize",
              mx: "auto",
            }}
            color="customGrey"
          >
            <InboxIcon sx={{ ml: 2 }} />
            <ListItemText sx={{ ml: -1 }} primary={text} />
          </Button>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        position="relative"
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: `${navbarHeight}px`,
          }}
        >
          <p>logo</p>
        </Box>
        <Box
          sx={{
            mt: 3,
            mr: 1,
            overflowY: "auto",
            listStyle: "none",
            height: "100%",
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "100px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: scrollbarColorMain,
              borderRadius: "200px",
            },
          }}
        >
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
        </Box>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "none",
            backgroundColor: primaryBackgroundMain,
          },
        }}
        open
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: `${navbarHeight}px`,
          }}
        >
          <p>logo</p>
        </Box>
        <Box
          sx={{
            mt: 3,
            mr: 1,
            overflowY: "auto",
            listStyle: "none",
            height: "100%",
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "100px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: scrollbarColorMain,
              borderRadius: "200px",
            },
          }}
        >
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
          {drawer}
        </Box>
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
