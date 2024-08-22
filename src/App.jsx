import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ListPages from "./Pages/ListPages";
import SinglePage from "./Pages/SinglePage";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listpage" element={<ListPages />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
