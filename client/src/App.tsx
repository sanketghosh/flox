import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Kanban, SingleBoardSettings, OnBoarding } from "./pages";
import UsersLayout from "./layouts/users-layout";

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
      </Routes>
    </Router>
  );
}
