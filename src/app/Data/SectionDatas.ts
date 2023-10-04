import MdSpaceDashboard from "../../../public/Icons/MdSpaceDashboard";
import Tracksvg from "../../../public/Icons/Tracksvg";
import Api from "../../../public/Icons/Api";
import DeliveryIcon from "../../../public/Icons/DeliveryIcon";

export type ServicesType = {
  icon: any;
  title: string;
  body: string;
};
export type GetStartedType = {
  image: string;
  title: string;
  body: string;
};
export type ForAllType = {
  title: string;
  body: string;
  href: string;
  pb?: string;
};

export const SERVICES: ServicesType[] = [
  {
    icon: DeliveryIcon,
    title: "On Time Pickup",
    body: " Our experts use cutting-edge technology and industry best practices to enhance your logistics operations, saving you time and money through streamlined processes.",
  },
  {
    icon: Api,
    title: "APIs",
    body: " Our APIs allow easy integration with your ERP, CRM, and other software, facilitating data exchange and process automation for time and resource savings.",
  },
  {
    icon: MdSpaceDashboard,
    title: "Dashboard",
    body: "Enjoy the insight of actionable data all in one place for easy monitoring of carrier performance",
  },
  {
    icon: Tracksvg,
    title: "Real Time Tracking",
    body: "Monitor and know every movement of your package in real time anywhere and anytime like a boss",
  },
];
export const GETSTARTED: GetStartedType[] = [
  {
    image: "/Asset/icon1.svg",
    title: "Create / Log into your account",
    body: " Join best delivery service by signing up with your email and name",
  },
  {
    image: "/Asset/icon2.svg",
    title: "Schedule a pickup / delivery",
    body: "Select either a one-off order or regular subscription, whichever one fits your business",
  },
  {
    image: "/Asset/icon3.svg",
    title: "Send and track your package",
    body: "Hand over your parcel to our delivery service and conveniently monitor its progress.",
  },
];

export const FORALL: ForAllType[] = [
  {
    title: "We manage logistics services for individuals and businesses",
    href: "",
    body: " Whether you're an individual or a business, our reliable and efficient services ensure that your packages are delivered with ease.  We understand that not all deliveries are the same. That's why we offer both subscription-based services and one-off delivery options. Whether you need a single package delivered or require regular logistics support, Sendeet has got you covered.",
  },
  {
    title: "One-Off Deliveries Made Easy",
    href: "",
    pb: "2rem",
    body: "With Sendeet Logistics, you can enjoy the convenience of one-off deliveries. No matter the size or urgency of your shipment, our team is dedicated to providing efficient and cost-effective solutions to meet your needs.",
  },
  {
    title: "Save Money with Our Subscription Plan",
    href: "",
    pb: "2rem",
    body: "With our subscription plan, you can enjoy subsidized rates on all your deliveries. Say goodbye to hefty shipping fees and hello to cost-effective logistics solutions. Choose the plan that suits your needs and start saving today!",
  },
];
export const FAQS_DATA = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur ",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
  },
];
