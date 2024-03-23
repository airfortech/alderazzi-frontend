import { QueryKey } from "./types/QueryKey";

import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { plPL as corePlPl } from "@mui/material/locale";
import { plPL } from "@mui/x-date-pickers/locales";

import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Toast } from "./components/Toast/Toast";
import { queryClient } from "./api/queryClient";
import { Submenu } from "./components/Submenu/Submenu";
import { Routes } from "./components/Routes/Routes";
import { dropsLinks } from "./components/Navigation/dropsLinks";
import { itemsLinks } from "./components/Navigation/itemsLinks";
import { itemsWeaponsLinks } from "./components/Navigation/itemsWeaponsLinks";
import { itemsArmorsLinks } from "./components/Navigation/itemsArmorsLinks";
import classes from "./App.module.css";

const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      common: {
        white: "#796969",
      },
      primary: {
        main: "hsl(240, 100%, 76%)",
        dark: "hsl(240, 100%, 70%)",
      },
      background: {
        default: "#00001a",
      },
    },
  },
  plPL,
  corePlPl
);

export const App = () => {
  useEffect(() => {
    queryClient.fetchQuery([QueryKey.auth]);
  }, []);

  return (
    <div className={classes.App}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Background />
        <Toast />
        <Header />
        <Navigation />
        <Submenu level={2} links={dropsLinks} />
        <Submenu level={2} links={itemsLinks} />
        <Submenu level={3} links={itemsWeaponsLinks} />
        <Submenu level={3} links={itemsArmorsLinks} />
        <section className={classes.section}>
          <Routes />
        </section>
      </ThemeProvider>
    </div>
  );
};
