import { createBrowserRouter } from "react-router-dom";

import CenterBoxLayout from "./pages/CenterBoxLayout/CenterBoxLayout";
import WithProtection from "./hoc/withProtection/WithProtection";
import { ABOUT, AUTH, HOME } from "./constants/routeNames";
import WithOnlyPublic from "./hoc/withOnlyPublic/WithOnlyPublic";

// const ProtectedCenterBoxLayout = WithProtection(CenterBoxLayout);
const PublicOnlyCenterBoxLayout = WithOnlyPublic(CenterBoxLayout);

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <>Home</>,
    children: [{ path: "", element: <p>Hello world qwdwddfe2</p> }],
  },
  {
    path: AUTH,
    element: <PublicOnlyCenterBoxLayout />,
    // children: [{ path: "", element: <p>Hello world qwdwddfe2</p> }],
  },
  {
    path: ABOUT,
    element: <>About page!</>,
    // children: [{ path: "", element: <p>Hello world qwdwddfe2</p> }],
  },
]);
