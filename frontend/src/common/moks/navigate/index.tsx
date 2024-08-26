import {
  HomeOutlined,
  BookmarkBorder,
  Newspaper,
  SettingsOutlined,
} from "@mui/icons-material";

export const navMenu = [
  {
    name: "Главная",
    icon: <HomeOutlined />,
    path: "/",
    id: 1,
  },
  {
    name: "Избранное",
    icon: <BookmarkBorder />,
    path: "/watchlist",
    id: 2,
  },
  {
    name: "Новости",
    icon: <Newspaper />,
    path: "/news",
    id: 3,
  },
  {
    name: "Настройки",
    icon: <SettingsOutlined />,
    path: "/settings",
    id: 4,
  },
];
