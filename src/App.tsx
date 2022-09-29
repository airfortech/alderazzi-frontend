import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { EnemiesView } from "./views/EnemiesView/EnemiesView";
import classes from "./App.module.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  return (
    <div className={classes.App}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Navigation />
        <section className={classes.section}>
          <Routes>
            <Route index element={<p>index</p>} />
            <Route path="/wrogowie" element={<EnemiesView />} />
            <Route path="*" element={<p>not found</p>} />
          </Routes>
        </section>
      </ThemeProvider>
    </div>
  );
};
