import { QueryKey } from "./types/QueryKey";
import { UserRole } from "./types/UserRole";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { plPL as corePlPl } from "@mui/material/locale";
import { plPL } from "@mui/x-date-pickers/locales";

import { UnauthorizedView } from "./views/UnauthorizedView/UnauthorizedView";
import { EnemiesView } from "./views/EnemiesView/EnemiesView";
import { HomeView } from "./views/HomeView/HomeView";
import { KeyGiversView } from "./views/KeyGiversView/KeyGiversView";
import { KeysView } from "./views/KeysView/KeysView";
import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Toast } from "./components/Toast/Toast";
import { queryClient } from "./api/queryClient";
import classes from "./App.module.css";
import { SettingsView } from "./views/SettingsView/SettingsView";
import { KeyGiverDropsView } from "./views/KeyGiverDropsView/KeyGiverDropsView";
import { LocationsView } from "./views/LocationsView/LocationsView";
import { EditableKeyGiverDropsView } from "./views/EditableKeyGiverDropsView/EditableKeyGiverDropsView";
import { Submenu } from "./components/Submenu/Submenu";
import { LastKeyGiverDropsView } from "./views/LastKeyGiverDropsView/LastKeyGiverDropsView";
import { dropsLinks } from "./components/Navigation/dropsLinks";
import { KeyGiverDropsStatsView } from "./views/KeyGiverDropsStatsView/KeyGiverDropsStatsView";

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
        <Submenu links={dropsLinks} />
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
              <Route path="/dropy" element={<KeyGiverDropsView />} />
              <Route
                path="/dropy/ostatnie"
                element={<LastKeyGiverDropsView />}
              />
              <Route
                path="/dropy/statystyki"
                element={<KeyGiverDropsStatsView />}
              />
              <Route
                path="/dropy/edycja"
                element={<EditableKeyGiverDropsView />}
              />
              <Route path="/klucze" element={<KeysView />} />
              <Route path="/klucznicy" element={<KeyGiversView />} />
              <Route path="/lokacje" element={<LocationsView />} />
            </Route>
            <Route
              element={<RequireAuth allowedRoles={[UserRole.consigliore]} />}
            >
              <Route path="/ustawienia" element={<SettingsView />} />
            </Route>
            <Route path="/unauthorized" element={<UnauthorizedView />} />
            <Route path="*" element={<h2>Nie znaleziono podstrony.</h2>} />
          </Routes>
        </section>
      </ThemeProvider>
    </div>
  );
};
