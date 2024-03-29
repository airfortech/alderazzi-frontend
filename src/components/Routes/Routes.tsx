import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { UserRole } from "../../types/UserRole";
import { ArmorsView } from "../../views/ItemsView/ArmorsView/ArmorsView";
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
import { WeaponsView } from "../../views/ItemsView/WeaponsView/WeaponsView";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { weaponsListOptions } from "../ItemsList/WeaponsList/dataWeaponsList";
import { armorsListOptions } from "../ItemsList/ArmorsList/dataArmorsList";
import { ShieldsView } from "../../views/ItemsView/ShieldsView/ShieldsView";
import { othersListOptions } from "../ItemsList/OthersList/dataOthersList";
import { OthersView } from "../../views/ItemsView/OthersView/OthersView";

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
            key={options.path}
            path={`/przedmioty/bronie/${options.path}`}
            element={<WeaponsView {...options} />}
          />
        ))}
        <Route
          path="/przedmioty/zbroje"
          element={<Navigate to="/przedmioty/zbroje/ciezkie" />}
        />
        {armorsListOptions.map(options => (
          <Route
            key={options.path}
            path={`/przedmioty/zbroje/${options.path}`}
            element={<ArmorsView {...options} />}
          />
        ))}
        {othersListOptions.map(options => (
          <Route
            key={options.path}
            path={`/przedmioty/${options.path}`}
            element={<OthersView {...options} />}
          />
        ))}
        <Route path="/przedmioty/tarcze" element={<ShieldsView />} />
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
