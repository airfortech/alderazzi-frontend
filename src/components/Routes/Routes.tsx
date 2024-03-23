import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { UserRole } from "../../types/UserRole";
import { EditableKeyGiverDropsView } from "../../views/EditableKeyGiverDropsView/EditableKeyGiverDropsView";
import { EnemiesView } from "../../views/EnemiesView/EnemiesView";
import { HomeView } from "../../views/HomeView/HomeView";
import { KeyGiverDropsStatsView } from "../../views/KeyGiverDropsStatsView/KeyGiverDropsStatsView";
import { KeyGiverDropsView } from "../../views/KeyGiverDropsView/KeyGiverDropsView";
import { KeyGiversView } from "../../views/KeyGiversView/KeyGiversView";
import { KeysView } from "../../views/KeysView/KeysView";
import { LastKeyGiverDropsView } from "../../views/LastKeyGiverDropsView/LastKeyGiverDropsView";
import { LocationsView } from "../../views/LocationsView/LocationsView";
import { SettingsView } from "../../views/SettingsView/SettingsView";
import { UnauthorizedView } from "../../views/UnauthorizedView/UnauthorizedView";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { weaponsListOptions } from "../ItemsList/WeaponsList/dataWeaponsList";
import { WeaponsView } from "../../views/ItemsView/WeaponsView/WeaponsView";

export const Routes = () => {
  return (
    <RoutesWrapper>
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
        <Route
          path="/dropy"
          element={<Navigate to="/dropy/najblisze-respawny" />}
        />
        <Route
          path="/dropy/najblisze-respawny"
          element={<KeyGiverDropsView />}
        />
        <Route path="/dropy/ostatnie" element={<LastKeyGiverDropsView />} />
        <Route path="/dropy/statystyki" element={<KeyGiverDropsStatsView />} />
        <Route path="/dropy/edycja" element={<EditableKeyGiverDropsView />} />
        <Route path="/klucze" element={<KeysView />} />
        <Route path="/klucznicy" element={<KeyGiversView />} />
        <Route
          path="/przedmioty"
          element={<Navigate to="/przedmioty/bronie" />}
        />
        <Route
          path="/przedmioty/bronie"
          element={<Navigate to="/przedmioty/bronie/miecze" />}
        />
        {weaponsListOptions.map(options => (
          <Route
            path={`/przedmioty/bronie/${options.path}`}
            element={<WeaponsView {...options} />}
          />
        ))}
        <Route path="/lokacje" element={<LocationsView />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[UserRole.consigliore]} />}>
        <Route path="/ustawienia" element={<SettingsView />} />
      </Route>
      <Route path="/unauthorized" element={<UnauthorizedView />} />
      <Route path="*" element={<h2>Nie znaleziono podstrony.</h2>} />
    </RoutesWrapper>
  );
};