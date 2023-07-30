import InboxIcon from "@mui/icons-material/MoveToInbox";

export const sidebarItems = [
  {
    heading: "Dashboard",
    items: [
      {
        name: "Home",
        icon: <InboxIcon />,
        to: "/",
      },
      {
        name: "Profile",
        icon: <InboxIcon />,
        to: "/profile",
      },
      {
        name: "Routine",
        icon: <InboxIcon />,
        to: "/routines",
      },
      {
        name: "Tasks",
        icon: <InboxIcon />,
        to: "/tasks",
      },
    ],
  },
];
