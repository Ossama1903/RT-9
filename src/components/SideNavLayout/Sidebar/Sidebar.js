import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Button, Typography, useTheme } from "@mui/material";
import { useCustomizable } from "../../../useCustomizable";
import logo from "../../../static/logo1500.png";
import { sidebarItems } from "../SidebarLinks";
import { Link } from "react-router-dom";

function ResponsiveDrawer(props) {
  const { window } = props;
  const {
    primaryBackgroundMain,
    scrollbarColorMain,
    drawerWidth,
    navbarHeight,
    sideBarExtended,
    toggleSidebarExtension,
  } = useCustomizable();

  const drawer = (
    <Box>
      {sidebarItems.map(({ heading, items }) => (
        <Box>
          <Typography
            variant="p"
            sx={{
              ml: 3,
              display: sideBarExtended ? "block" : "none",
              fontWeight: "bold",
            }}
          >
            {heading}
          </Typography>
          <List
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {items.map((itemLevel1) => (
              <Link
                style={{
                  width: "85%",
                  textTransform: "capitalize",
                  mx: "auto",
                }}
                to={itemLevel1.to}
              >
                <Button
                  sx={{
                    width: "100%",
                  }}
                  color="customGrey"
                >
                  {itemLevel1.icon}
                  <ListItemText
                    sx={{
                      ml: -5,
                      display: sideBarExtended ? "inline" : "none",
                    }}
                    primary={itemLevel1.items ? "extended" : itemLevel1.name}
                  />
                </Button>
              </Link>
            ))}
          </List>
        </Box>
      ))}
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
          <img src={logo} style={{ width: "35px" }} />
          <Typography
            variant="h6"
            sx={{
              ml: sideBarExtended ? 1.5 : 0,
              display: sideBarExtended ? "inline" : "none",
            }}
          >
            RT-9
          </Typography>
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
            minHeight: `${navbarHeight + 10}px`,
          }}
        >
          <img src={logo} style={{ width: "35px" }} />
          <Typography
            variant="h6"
            sx={{
              ml: sideBarExtended ? 1.5 : 0,
              display: sideBarExtended ? "inline" : "none",
            }}
          >
            RT-9
          </Typography>
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
        </Box>
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
