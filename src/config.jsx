import { createBrowserRouter } from "react-router-dom";

import About from "./containers/About/About";
import CenterBoxLayout from "./pages/CenterBoxLayout/CenterBoxLayout";
import Home from "./containers/Home/Home";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Login from "./containers/Login/Login";
import WithOnlyPublic from "./hoc/withOnlyPublic/WithOnlyPublic";
import WithProtection from "./hoc/withProtection/WithProtection";
import { ABOUT, AUTH, HOME } from "./constants/routeNames";

const ProtectedHomeLayout = WithProtection(HomeLayout);
const PublicOnlyCenterBoxLayout = WithOnlyPublic(CenterBoxLayout);

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <ProtectedHomeLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: AUTH,
    element: <PublicOnlyCenterBoxLayout />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: ABOUT,
    element: <HomeLayout />,
    children: [{ path: "", element: <About /> }],
  },
]);
