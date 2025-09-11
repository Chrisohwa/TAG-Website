import { icon } from "leaflet";
import { GoPeople } from "react-icons/go";
import { GoMilestone } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { GrCurrency } from "react-icons/gr";
import { MdFlight } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";


export const headers = [
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
    sub: [
      {
        name: "About Us",
        path: "about-us",
        icon: <GoPeople size="20px" color="#2563EB" />,
        details: `Our mission is to consistently deliver superior value to all our stakeholders across the globe.`,
      },
      {
        name: "Team",
        path: "team",
        icon: <RiTeamLine size="20px" color="#2563EB" />,
        details: `We are a dynamic group shaping the future of businesses in emerging economies`,
      },
      {
        name: "Our Milestones",
        path: "milestones",
        icon: <GoMilestone size="20px" color="#2563EB" />,
        details: `Transalliance Group is poised to explore new frontiers, leveraging  innovation and strategic investments to redefine industry standards across its diverse business verticals.`,
      },
    ],
  },
  {
    id: 3,
    name: "Businesses",
    path: "/businesses",
    sub: [
      {
        name: "Currency Sevices",
        path: "currency",
        icon: <GrCurrency size="20px" color="#2563EB" />,
        details: `Empowering businesses with solutions that foster financial inclusion and economic growth.`,
      },
      {
        name: "Travel & Hospitality",
        path: "hospitality",
        icon: <MdFlight size="20px" color="#2563EB" />,
        details:
          "Creating seamless travel experiences and luxurious stays for clients locally and across the globe.",
      },
      {
        name: "Mining & Minerals Production",
        path: "MineralsProduction",
        icon: <GiMining size="20px" color="#2563EB" />,
        details:
          "Driving Africa’s digital transformation through innovative tech solutions. ",
      },
      {
        name: "Financial Technology",
        path: "financial-technology",
        icon: <GrTechnology size="20px" color="#2563EB" />,
        details:
          "Harnessing Africa’s resources responsibly to power industries and communities sustainably. ",
      },
    ],
  },
  {
    id: 4,
    name: "Sustainability",
    path: "/sustainability",
    sub: [
      {
        name: "Our Pillars",
        path: "pillars",
        icon: <RiTeamLine size="20px" color="#2563EB" />,
        details: `From empowering communities to championing ethical mining & minerals production, sustainability is at the heart of everything we do`,
      },
      {
        name: "Our Strategies",
        path: "strategies",
        icon: <GoMilestone size="20px" color="#2563EB" />,
        details: `Our initiatives reflect our unwavering commitment to social and environmental responsibility.`,
      },
    ],
  },
  {
    id: 5,
    name: "Careers",
    path: "/careers",
    sub: [
      {
        name: "Our Core Values",
        path: "core-values",
      },
      {
        name: "Life at Tag",
        path: "life",
      },
      {
        name: "Our Benefits",
        path: "benefits",
      },
      {
        name: "Open Vacancies",
        path: "vacancies",
      },
    ],
  },
  {
    id: 6,
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const footerList = [
  {
    id: 1,
    name: "Our Businesses",
    path: "/businesses",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    name: "Sustainability",
    path: "/sustainability",
  },

  {
    id: 5,
    name: " Career",
    path: "/career",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact-us",
  },
];

export const possibilityData = [
  {
    image: "/images/landing/currency.jpg",
    title: "Currency Services",
    description:
      "Empowering businesses with solutions that foster financial inclusion and economic growth.",
    link: "/businesses/currency",
  },
  {
    image: "/images/landing/fintech.jpg",
    title: "Financial Technology",
    description:
      "Driving Africa’s digital transformation through innovative tech solutions.",
    link: "/businesses/fintech",
  },
  {
    image: "/images/landing/travels.jpg",
    title: "Travel, Tourism & Hospitality Services",
    description:
      "Creating seamless travel experiences and luxurious stays for clients locally and across the globe.",
    link: "/businesses/travels",
  },
  {
    image: "/images/landing/mining.jpg",
    title: "Mining & Minerals Production",
    description:
      "Harnessing Africa’s resources responsibly to power industries and communities sustainably.",
    link: "/businesses/ethical-mining",
  },
];

export const teamData = [
  {
    group: "Executive Leadership",
    members: [
      {
        id: 1,
        name: "Kamsi Okafor",
        title: "Founder & CEO",
        img: "/images/about/el_kamsi.jpg",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 2,
        name: "Anthony Nwosi",
        title: "Chief Treasury & Operations Officer",
        img: "/images/about/el_anthony.jpg",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 3,
        name: "Lovelyn Mark",
        title: "Chief Legal, Compliance & Admin Officer",
        img: "/images/about/el_lovelyn.jpg",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 4,
        name: "Olufemi Adedipe",
        title: "Chief Financial Officer",
        img: "/images/about/el_olufemi.jpg",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 5,
        name: "Olufemi Ojo-Omoniyi",
        title: "Chief Risk & Internal Control Officer",
        img: "/images/about/team1.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 6,
        name: "Afam Obodozie",
        title: "Chief Strategy, Research & Business Intelligence Officer",
        img: "/images/about/el_afam.jpg",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 7,
        name: "Mayowa Igunbor",
        title: "Chief People & Communications Officer",
        img: "/images/about/team3.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 8,
        name: "Anselm Fowel",
        title: "Chief Technology &Innovation Officer",
        img: "/images/about/team4.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
    ],
  },
  {
    group: "Managing Directors",
    members: [
      {
        id: 13,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team1.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 14,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team2.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 15,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team3.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 16,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team4.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 17,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team1.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 18,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team2.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 19,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team3.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
      {
        id: 20,
        name: "Nikolaos Baziotis",
        title: "Director",
        img: "/images/about/team4.png",
        description: `At Transalliance Group, we enable businesses navigate
  the complexities of global trade with seamless currency exchange, 
  liquidity management, and cross-border trade solutions. Our currency 
  services are designed to optimize cash flow, mitigate currency risks, 
  and ensure compliance with international financial regulations. Whether 
  foreign currency inflows, structured FX transactions, or offshore trade 
  payments, we provide the expertise and infrastructure to facilitate smooth
  and secure transactions. For businesses seeking reliable financial solutions,
  our member company, Transalliance Capital Limited (TransCap), offers 
  bespoke services to support international trade, investment, and treasury
  operations. With a focus on efficiency, compliance, and strategic financial 
  management, Transalliance Capital is your trusted partner in navigating the 
  global financial landscape.`,
      },
    ],
  },

  //   group: "Management Team",
  //   members: [
  //     {
  //       id: 21,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team1.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 22,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team2.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 23,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team3.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 24,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team4.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 25,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team1.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 26,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team2.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 27,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team3.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //     {
  //       id: 28,
  //       name: "Nikolaos Baziotis",
  //       title: "Director",
  //       img: "/images/about/team4.png",
  //       description: `At Transalliance Group, we enable businesses navigate
  // the complexities of global trade with seamless currency exchange,
  // liquidity management, and cross-border trade solutions. Our currency
  // services are designed to optimize cash flow, mitigate currency risks,
  // and ensure compliance with international financial regulations. Whether
  // foreign currency inflows, structured FX transactions, or offshore trade
  // payments, we provide the expertise and infrastructure to facilitate smooth
  // and secure transactions. For businesses seeking reliable financial solutions,
  // our member company, Transalliance Capital Limited (TransCap), offers
  // bespoke services to support international trade, investment, and treasury
  // operations. With a focus on efficiency, compliance, and strategic financial
  // management, Transalliance Capital is your trusted partner in navigating the
  // global financial landscape.`,
  //     },
  //   ],
];
