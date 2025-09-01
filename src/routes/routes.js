import { lazy } from "react";
import WithSuspense from "../components/loader/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";



const { HOME, ABOUT, BUSINESSES, SUSTAINABILITY, MEDIA, CAREERES, CONTACT_US, MEMBER_DETAILS, CURRENCY, FINTECH, TRAVEL_HOSPITALITY, MINING_MINERALS } =
  PATHS;

const Home = WithSuspense(lazy(() => import("../pages/Home")));
const AboutUs = WithSuspense(lazy(() => import("../pages/AboutUs")));
const Businesses = WithSuspense(lazy(() => import("../pages/Businesses")));
const Currency = WithSuspense(lazy(() => import("../components/data/Business/Currency")));
const Fintech = WithSuspense(lazy(() => import("../components/data/Business/Fintech")));
const Hospitality = WithSuspense(lazy(() => import("../components/data/Business/Hospitality")));
const EthicalMining = WithSuspense(lazy(() => import("../components/data/Business/EthicalMining")));
const Media = WithSuspense(lazy(() => import("../pages/Media")));
const Careeres = WithSuspense(lazy(() => import("../pages/Careeres")));
const Sustainability = WithSuspense(lazy(() => import("../pages/Sustainability")));
const ContactUs = WithSuspense(lazy(() => import("../pages/ContactUs")));
const MemberDetails = WithSuspense(lazy(() => import("../components/data/About/MemberDetails")));



export const ROUTES = [
  { path: HOME, element: <Home /> },
  { path: ABOUT, element: <AboutUs /> },
  { path: BUSINESSES, element: <Businesses /> },
  { path: CURRENCY, element: <Currency /> },
  { path: FINTECH, element: <Fintech /> },
  { path: TRAVEL_HOSPITALITY, element: <Hospitality /> },
  { path: MINING_MINERALS, element: <EthicalMining /> },
  { path: SUSTAINABILITY, element: <Sustainability /> },
  { path: MEDIA, element: <Media /> },
  { path: CAREERES, element: <Careeres /> },
  { path: CONTACT_US, element: <ContactUs /> },
  { path: MEMBER_DETAILS, element: <MemberDetails /> },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
