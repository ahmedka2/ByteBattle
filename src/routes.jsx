// ByteBattle Routes Configuration

// ByteBattle layouts
import Dashboard from "layouts/dashboard";
import Challenges from "layouts/challenges";
import Leaderboard from "layouts/leaderboard";
import Battles from "layouts/battles";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// React icons
import { IoHome, IoCodeSlash, IoTrophy, IoGameController, IoPerson } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Challenges",
    key: "challenges",
    route: "/challenges",
    icon: <IoCodeSlash size="15px" color="inherit" />,
    component: Challenges,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Battles",
    key: "battles",
    route: "/battles",
    icon: <IoGameController size="15px" color="inherit" />,
    component: Battles,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Leaderboard",
    key: "leaderboard",
    route: "/leaderboard",
    icon: <IoTrophy size="15px" color="inherit" />,
    component: Leaderboard,
    noCollapse: true,
  },
  { type: "title", title: "Account", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <IoPerson size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <IoIosDocument size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <IoRocketSharp size="15px" color="inherit" />,
    component: SignUp,
    noCollapse: true,
  },
];

export default routes;
