import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { EnemiesView } from "./views/EnemiesView/EnemiesView";
import classes from "./App.module.css";
import { HomeView } from "./views/HomeView/HomeView";
import { Background } from "./components/Background/Background";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    common: {
      white: "#796969",
    },
    primary: {
      // main: "#6666ff",
      main: "hsl(240, 100%, 76%)",
      dark: "hsl(240, 100%, 70%)",
    },
    background: {
      default: "#00001a",
    },
  },
});

export const App = () => {
  return (
    <div className={classes.App}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Background />
        <Header />
        <Navigation />
        <section className={classes.section}>
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="/wrogowie" element={<EnemiesView />} />
            <Route path="*" element={<h2>Nie znaleziono podstrony.</h2>} />
          </Routes>
        </section>
      </ThemeProvider>
    </div>
  );
};
