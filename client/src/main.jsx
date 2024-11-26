import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home';
import FoodDetails from './pages/details/FoodDetails';
import PlacesDetails from './pages/details/PlacesDetails';
import SearchList from './pages/SearchList';
import SearchListFiltered from './pages/SearchListFiltered';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/food/:id", element: <FoodDetails /> },
      { path: "/details/place/:city", element: <PlacesDetails /> },
      { path: "/list", element: <SearchList /> },
      { path: "/list/:city", element: <SearchListFiltered /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
