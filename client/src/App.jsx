import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ListPages from "./Pages/ListPages";
import SinglePage from "./Pages/SinglePage";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UpdatePage from "./Pages/UpdatePage";
import NewPost from "./Pages/NewPost";
import { listPageLoader, singlePageLoader } from "./../../lib/loaders.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/listpage",
    element: <ListPages />,
    loader: listPageLoader,
  },
  { path: "/:id", element: <SinglePage />, loader: singlePageLoader },
  { path: "/profile", element: <Profile /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/update", element: <UpdatePage /> },
  { path: "/newPost", element: <NewPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
