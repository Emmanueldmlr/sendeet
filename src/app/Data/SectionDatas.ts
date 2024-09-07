export type ServicesType = {
  src: string;
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
    src: "/Icons/Dashboard.png",
    title: "Dashboard",
    body: "Enjoy the insight of actionable data all in one place for easy monitoring of carrier performance",
  },
  {
    src: "/Icons/Track.png",
    title: "Real Time Tracking",
    body: "Monitor and know every movement of your package in real time anywhere and anytime like a boss",
  },
  {
    src: "/Icons/DeliveryIcon.png",
    title: "On Time Pickup",
    body: "Our experts use cutting-edge technology and industry best practices to enhance your logistics operations, saving you time and money through streamlined processes.",
  },
];
export const GETSTARTED: GetStartedType[] = [
  {
    image: "/Asset/getStartedIcons/schedule.svg",
    title: "Schedule a pickup / delivery",
    body: "Select your pickup and end location to begin your package journey with Sendeet",
  },
  {
    image: "/Asset/getStartedIcons/payment.svg",
    title: "Make payment and get started",
    body: "Hand over your parcel to your preferred delivery service and conveniently monitor its progress",
  },
  {
    image: "/Asset/getStartedIcons/receive.svg",
    title: "Receive your package",
    body: "Your receiver will receive their package in due time",
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
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
  }
];
