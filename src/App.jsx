import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ListPages from "./Pages/ListPages";
import SinglePage from "./Pages/SinglePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listpage" element={<ListPages />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
