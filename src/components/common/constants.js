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
    image: "/images/landing/currencyopt.JPG",
    // image:
    //   "https://ik.imagekit.io/oilm06bg9/currency.jpg?updatedAt=1757754646131",
    title: "Currency Services",
    description:
      "Empowering businesses with solutions that foster financial inclusion and economic growth.",
    link: "/businesses/currency",
  },
  {
    image: "/images/landing/fintechopt.JPG",
    // image:
    //   "https://ik.imagekit.io/oilm06bg9/fintech.jpg?updatedAt=1757754647189",
    title: "Financial Technology",
    description:
      "Driving Africa’s digital transformation through innovative tech solutions.",
    link: "/businesses/fintech",
  },
  {
    image: "/images/landing/travelsopt.JPG",
    // image:
    //   "https://ik.imagekit.io/oilm06bg9/travels.jpg?updatedAt=1757754652140",
    title: "Travel, Tourism & Hospitality Services",
    description:
      "Creating seamless travel experiences and luxurious stays for clients locally and across the globe.",
    link: "/businesses/travels",
  },
  {
    image: "/images/landing/miningopt.JPG",
    // image:
    //   "https://ik.imagekit.io/oilm06bg9/mining.jpg?updatedAt=1757754648411",
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
        id: "KamsiOkafor",
        name: "Kamsi Okafor",
        title: "Founder & CEO",
        img: "/images/about/el_kamsiopt.JPG",
        // img: "https://ik.imagekit.io/oilm06bg9/el_kamsi.jpg?updatedAt=1757756751564",
        description: ` Kamsi Okafor is a visionary leader with over a decade of expertise spanning finance, business administration, and the global capital market. 
        As the Founder and CEO of Transalliance Group, he drives the company’s strategic direction, ensuring seamless alignment of investments, business plans, and 
        financial operations across its diverse sectors.
        </br> </br>
        With a strong foundation in accounting, corporate finance, and financial consulting, Kamsi’s career trajectory reflects his strategic acumen and entrepreneurial foresight. 
        From managing financial operations at the Nigerian Army HQ to driving sales growth at Jook Corporation and contributing to revenue expansion at Keystone Bank, he has consistently 
        delivered impactful results.
        </br> </br>
        As the founder of Transalliance Group, he has successfully integrated Transalliance Minerals and other subsidiaries, expanding the Group’s 
        reach and influence. His leadership is defined by innovation, integrity, and a commitment to building long-term stakeholder value.`,
      },
      {
        id: "AnthonyNwosu",
        name: "Anthony Nwosu",
        title: "Chief Treasury & Operations Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/el_anthony.jpg?updatedAt=1757756751277",
        img: "/images/about/el_anthonyopt.JPG",
        description: `Anthony Nwosu is the Chief Treasury and Operations Officer at Transalliance Group. He holds an MBA from the University of Leicester, UK, and a BSc from the University of Ibadan, Nigeria. 
        An associate member of the Nigerian Institute of Management, Anthony is also a key contributor to the Nigerian Economic Summit Group (NESG) and serves on the faculty of the prestigious Rome Business School, 
        which operates in over 120 countries worldwide. 
        </br> </br>
        With over two decades of experience in banking and finance, Anthony has held senior management roles at Access Bank (formerly Diamond Bank) 
        and Keystone Bank (formerly Bank PHB). His expertise spans banking operations, treasury, asset and liability management, trade finance, financial institutions and correspondent banking, 
        retail and commercial banking, and internal control. At Transalliance Group, he oversees liquidity management, economic and financial analysis, operations processing, and investor relations.`,
      },
      {
        id: "LovelynMark",
        name: "Lovelyn Mark",
        title: "Chief Legal, Compliance & Admin Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/el_lovelyn.jpg?updatedAt=1757756751603",
        img: "/images/about/el_lovelynopt.JPG",
        description: `Lovelyn currently serves as the Chief Legal, Compliance & Admin Officer at Transalliance Group. With an LLB in law and over 12 years of extensive experience in banking, legal services, 
        and compliance across diverse sectors, she brings a wealth of knowledge to her role. In her capacity, she provides expert legal advice to the Company and its Subsidiaries on a wide range of both 
        contentious and non-contentious issues. Additionally, she oversees the crucial task of ensuring corporate compliance with regulatory and statutory laws and regulations. Lovelyn is a highly skilled 
        professional driven by a passion for developing strategic business ventures within legal boundaries, demonstrating a strong commitment to excellence at every level.`,
      },
      {
        id: "OlufemiAdedipe",
        name: "Olufemi Adedipe",
        title: "Chief Financial Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/el_olufemi.jpg?updatedAt=1757756751588",
        img: "/images/about/el_olufemiopt.JPG",
        description: `Oluwafemi Adedipe, Chief Financial Officer at Transalliance Group, brings over 13 years of experience in corporate finance, spanning both public and private sectors. 
        She has held senior roles in structured accounting and audit organizations, including Scotia Bank Canada, the Central Bank of Nigeria, and UHY, where she served as Senior Supervisor, Audit. 
        </br> </br>
        A certified Chartered Accountant and an alumnus of Trent University, Canada, Oluwafemi graduated with distinction in Business Administration and Information Systems. In her role as CFO, she leverages 
        advanced financial tools to address complex challenges, employing forensic auditing, data-driven financial forecasting, and innovative accounting strategies to drive effective project 
        execution and daily operations in dynamic market conditions.`,
      },
      {
        id: "OlufemiOjo-Omoniyi",
        name: "Olufemi Ojo-Omoniyi",
        title: "Chief Risk & Internal Control Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/el_olufemi.jpg?updatedAt=1757756751588",
        img: "/images/about/el_ojoopt.JPG",
        description: `Olufemi is the Chief Risk and Internal Control Officer at Transalliance Group. A seasoned Governance, Risk, and Compliance Professional (GRCP), he is a Certified Risk Manager (CRM) 
        and an ISO 22301-certified Business Continuity Management System (BCMS) Lead Implementer. With a B.Eng in Production Engineering and a second   degree in Process Engineering, Olufemi brings over 
        20 years of multidisciplinary experience spanning enterprise risk management, internal control, business continuity, capital markets, banking, venture capital, environmental sustainability, and 
        process engineering.
        </br> </br>
        A recognized expert in risk management and internal control, Olufemi oversees enterprise risk management, mitigates global exposures, and establishes robust control environments to support Transalliance Group’s 
        business success.`,
      },
      {
        id: "AfamObodozie",
        name: "Afam Obodozie",
        title: "Chief Strategy, Research & Business Intelligence Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/el_afam1.png?updatedAt=1757756749449",
        img: "/images/about/el_afam1opt.JPG",
        description: `Afam serves as the Chief Strategy, Research & Business Intelligence Officer at Transalliance Group, bringing over a decade of experience in business development, strategy, and innovative thinking. 
        He has worked with leading organizations like Jumia Nigeria, Sujimoto, CeLD, and Household Max (HHM), and has consulted for businesses such as STERN Projects, Adiba, and VC Premium Limited.
        </br> </br>
        These experiences have honed Afam's ability to identify unique business challenges and opportunities while equipping him with the expertise to drive growth and success across industries. At Transalliance Group, 
        he leads growth and expansion initiatives using data-driven strategies, critical thinking, and strategic partnerships. He also supports the team with research insights and plays a pivotal role in creating and 
        executing expansion plans, partnerships, and organizational policies.`,
      },
      {
        id: "MayowaIgunbor",
        name: "Mayowa Igunbor",
        title: "Chief People & Communications Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/default.png?updatedAt=1757756748197",
        img: "/images/about/el_mayowaopt.JPG",
        description: `Mayowa is the Chief People and Communications Officer at Transalliance Group, with nearly 20 years of experience in Human Resource Management within the financial services industry. 
        A certified professional with credentials from the Human Resource Certification Institute (PHRi) and the Chartered Institute of Personnel Management, Mayowa specializes in organizational change, 
        talent management, and stakeholder engagement. She has held key roles, including HR Consultant at Pan African Capital Holding Limited and Business Analyst at Franoft Consulting. 
        </br> </br>
        At Transalliance, Mayowa spearheads HR transformation and brand management, fostering exceptional talent and driving organizational effectiveness. She holds a degree in Geology from the University 
        of Benin and a Master's in Managerial Psychology from the University of Lagos.`,
      },
      {
        id: "AnselmFowel",
        name: "Anselm Fowel",
        title: "Chief Technology &Innovation Officer",
        // img: "https://ik.imagekit.io/oilm06bg9/default.png?updatedAt=1757756748197",
        img: "/images/about/el_anselmopt.JPG",
        description: `Anselm is the Chief Technology and Innovation Officer at Transalliance Group, bringing extensive expertise in fintech, banking, insurance, and software development. Specializing in enterprise software, 
        digital transformation, and product strategy, he focuses on leveraging technology to drive business growth and operational excellence. With a career spanning roles at organizations such as CloudBridge, Fidelity Bank, 
        AXA, Global Accelerex, and BluePrint, Anselm has honed his skills in software engineering, project delivery, and product management. Proficient in programming languages like C#, PHP, and Java, he employs AWS and 
        DevOps practices for seamless deployments. 
        </br> </br>
        At Transalliance, he leads technology strategy and digital transformation initiatives using Agile and Scrum methodologies. Anselm holds certifications in digital transformation from IBMI Berlin, underscoring his 
        dedication to innovation and continuous learning.`,
      },
    ],
  },
  // {
  //   group: "Managing Directors",
  //   members: [
  //     {
  //       id: 13,
  //       name: "Mayowa Igunbor",
  //       title: "Managing Director of Fazo Travels and Hospitality Limited",
  //       img: "https://ik.imagekit.io/oilm06bg9/default.png?updatedAt=1757756748197",
  //       // img: "/images/about/charles.png",
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
  //       id: 14,
  //       name: "Ngozi Udoka-Abazie",
  //       title: "Managing Director of Transalliance Capital Ltd",
  //       img: "/images/about/default.png",
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
  //       id: 16,
  //       name: "Amamife Okafor",
  //       title: "Managing Director of Transalliance Capital Ltd",
  //       img: "https://ik.imagekit.io/oilm06bg9/default.png?updatedAt=1757756748197",
  //       // img: "/images/about/default.png",
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
  //       id: 17,
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
  //       id: 18,
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
  //       id: 19,
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
  //       id: 20,
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
  // },

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
