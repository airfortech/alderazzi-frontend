import { UserRole } from "./types/UserRole";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { UnauthorizedView } from "./views/UnauthorizedView/UnauthorizedView";
import { EnemiesView } from "./views/EnemiesView/EnemiesView";
import { HomeView } from "./views/HomeView/HomeView";
import { KeysView } from "./views/KeysView/KeysView";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Background } from "./components/Background/Background";
import { Toast } from "./components/Toast/Toast";
import classes from "./App.module.css";

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
        <Toast />
        <Header />
        <Navigation />
        <section className={classes.section}>
          <Routes>
            <Route index element={<HomeView />} />
            <Route
              element={
                <RequireAuth
                  allowedRoles={[
                    UserRole.caporegime,
                    UserRole.consigliore,
                    UserRole.soldato,
                  ]}
                />
              }
            >
              <Route path="/wrogowie" element={<EnemiesView />} />
              <Route path="/klucze" element={<KeysView />} />
            </Route>
            <Route
              element={<RequireAuth allowedRoles={[UserRole.consigliore]} />}
            >
              <Route path="/ustawienia" element={<KeysView />} />
            </Route>
            <Route path="/unauthorized" element={<UnauthorizedView />} />
            <Route path="*" element={<h2>Nie znaleziono podstrony.</h2>} />
          </Routes>
        </section>
      </ThemeProvider>
    </div>
  );
};
