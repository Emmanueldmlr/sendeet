import { MdDeveloperBoard } from "react-icons/md";
import Track from "../../../public/Icons/Track";
import Delivery from "../../../public/Icons/Delivery";
import Profile from "../../../public/dashicon/Profile";
import Wallet from "../../../public/dashicon/Wallet";
import Apis from "../../../public/dashicon/APIS";
import ColouredDelivery from "../../../public/Icons/ColouredDelivery";
import Callgreen from "../../../public/Icons/Callgreen";

export const DashboardNavData = [
  {
    label: "Home",
    route: "/dashboard",
    icon: MdDeveloperBoard,
  },
  {
    label: "Wallet",
    route: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    label: "Track",
    route: "/dashboard/track",
    icon: Track,
  },
  {
    label: "Schedule Pickup",
    route: "/dashboard/schedulepickup",
    icon: Delivery,
  },
  {
    label: "Profile",
    route: "/dashboard/profile",
    icon: Profile,
  },
  {
    label: "APIs",
    route: "/dashboard/api",
    icon: Apis,
  },
];

export const DashHomeData = [
  {
    title: "Schedule Pickup / Delivery",
    route: "",
    icon: ColouredDelivery,
    btn: "Book Now",
    body: "Request a delivery / pickup and secure a rider within a day.",
    color: "#FF8C1A",
  },
  {
    title: "Wallet Top Up",
    route: "",
    icon: Wallet,
    btn: "Top Up",
    body: "Top up your wallet in a hassle-free way to cover your upcoming deliveries.",
    color: "#4BA1FF",
  },
  {
    title: "Request Call or Chat",
    route: "",
    icon: Callgreen,
    btn: "Call Me",
    body: "We call in 30 mins or chat with our customer care below.",
    color: "#47B881",
  },
];
