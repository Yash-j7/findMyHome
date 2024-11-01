import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ListPages from "./Pages/ListPages";
import SinglePage from "./Pages/SinglePage";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listpage" element={<ListPages />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
