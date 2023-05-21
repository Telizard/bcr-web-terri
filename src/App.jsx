import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Search, SearchResult } from "./pages";
import Detail from "./pages/Detail/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/SearchResult",
    element: <SearchResult />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
