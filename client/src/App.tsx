// PACKAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import {
  Landing,
  Kanban,
  SingleBoardSettings,
  OnBoarding,
  Profile,
} from "@/pages";
import UsersLayout from "@/layouts/users-layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/kanban/:id"
          element={
            <UsersLayout>
              <Kanban />
            </UsersLayout>
          }
        />
        <Route
          path="/kanban/:id/settings"
          element={
            <UsersLayout>
              <SingleBoardSettings />
            </UsersLayout>
          }
        />
        <Route
          path="/on-boarding"
          element={
            <UsersLayout>
              <OnBoarding />
            </UsersLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <UsersLayout>
              <Profile />
            </UsersLayout>
          }
        />
      </Routes>
    </Router>
  );
}
