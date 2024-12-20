import { PhHeadset, PhHeart, PhInfo, PhLightning, PhSignOut, PhTicket, PhUpload, PhWallet } from "@phosphor-icons/vue";

import lc1 from "/images/lottery/lc1.png";
import lc3 from "/images/lottery/lc3.png";
import lc4 from "/images/lottery/lc4.png";
import lc5 from "/images/lottery/lc5.png";

export const sidebarItems = [
  {
    id: 1343,
    href: "/user-panel",
    icon: PhTicket,
    iconClasses: "ph-bold ph-ticket fs-five",
    text: "My Tickets",
  },
  {
    id: 3434652,
    href: "/personal-info",
    icon: PhInfo,
    iconClasses: "ph-bold ph-info fs-five",
    text: "Personal Information",
  },
  {
    id: 334221,
    href: "/transaction",
    icon: PhUpload,
    iconClasses: "ph-bold ph-upload fs-five",
    text: "Transactions",
  },
  {
    id: 4212,
    href: "/referal-program",
    icon: PhLightning,
    iconClasses: "ph-bold ph-lightning fs-five",
    text: "Referral Program",
  },
  {
    id: 51212,
    href: "/wish-list",
    icon: PhHeart,
    iconClasses: "ph-bold ph-heart fs-five",
    text: "Wishlist",
  },
  {
    id: 62342,
    href: "/payment",
    icon: PhWallet,
    iconClasses: "ph-bold ph-wallet fs-five",
    text: "Payment Methods",
  },
  {
    id: 4447,
    href: "/#",
    icon: PhHeadset,
    iconClasses: "ph-bold ph-headset fs-five",
    text: "Help Center",
  },
  {
    id: 84342,
    href: "/#",
    icon: PhSignOut,
    iconClasses: "ph-bold ph-sign-out fs-five",
    text: "Log Out",
  },
];

export const tickets = [
    {
      id: 1,
      ticketNumber: "01",
      contestNumber: "R10F",
      ticketNo: "11",
      answer: "Aisa",
      order: "41340",
    },
    {
      id: 2,
      ticketNumber: "02",
      contestNumber: "S11P",
      ticketNo: "71",
      answer: "Aisa",
      order: "41372",
    },
    {
      id: 3,
      ticketNumber: "03",
      contestNumber: "S11P",
      ticketNo: "71",
      answer: "Aisa",
      order: "41340",
    },
    {
      id: 4,
      ticketNumber: "04",
      contestNumber: "S11P",
      ticketNo: "71",
      answer: "Aisa",
      order: "41341",
    },
    {
      id: 5,
      ticketNumber: "05",
      contestNumber: "S11P",
      ticketNo: "71",
      answer: "Aisa",
      order: "41347",
    },
    {
      id: 6,
      ticketNumber: "06",
      contestNumber: "S11P",
      ticketNo: "71",
      answer: "Aisa",
      order: "41302",
    },
  ];

  export const tableData = [
    {
      date: "01 April",
      level: "Level_01",
      name: "Ronald Richards",
      email: "tanya.hill@example.com",
    },
    {
      date: "02 April",
      level: "Level_02",
      name: "Ralph Edward",
      email: "nathan.roberts@example.com",
    },
    {
      date: "03 April",
      level: "Level_03",
      name: "Jerome Bell",
      email: "debbie.baker@example.com",
    },
    {
      date: "04 April",
      level: "Level_04",
      name: "Arlene McCoy",
      email: "dolores.chambers@example.com",
    },
    {
      date: "05 April",
      level: "Level_05",
      name: "Savannah Nguyen",
      email: "tanya.hill@example.com",
    },
    {
      date: "01 April",
      level: "Level_01",
      name: "Ronald Richards",
      email: "felicia.reid@example.com",
    },
    {
      date: "06 April",
      level: "Level_06",
      name: "Brooklyn Simmons",
      email: "willie.jennings@example.com",
    },
    {
      date: "07 April",
      level: "Level_07",
      name: "Darrell Steward",
      email: "deanna.curtis@example.com",
    },
    {
      date: "08 April",
      level: "Level_08",
      name: "Kathryn Murphy",
      email: "willie.jennings@example.com",
    },
    {
      date: "09 April",
      level: "Level_09",
      name: "Guy Hawkins",
      email: "dolores.chambers@example.com",
    },
    {
      date: "10 April",
      level: "Level_10",
      name: "Jacob Jones",
      email: "jessica.hanson@example.com",
    },
  ];
  
export const transactions = [
  {
    date: "01 April",
    description: "Withdraw",
    method: "Visa",
    amount: "$760 (USD)",
    actions: [
      { label: "Action", link: "#" },
      { label: "$545", link: "#" },
      { label: "$874", link: "#" },
    ],
  },
  {
    date: "02 April",
    description: "Lottery Purchase",
    method: "PayPal",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "03 April",
    description: "Deposit",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "04 April",
    description: "Withdraw",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "05 April",
    description: "Lottery Purchase",
    method: "PayPal",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "06 April",
    description: "Deposit",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "07 April",
    description: "Withdraw",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "08 April",
    description: "Lottery Purchase",
    method: "PayPal",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "09 April",
    description: "Deposit",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
  {
    date: "10 April",
    description: "Withdraw",
    method: "Visa",
    amount: "$760 (USD)",
    checkbox: true,
  },
];


export const wishListLotteryItems = [
  {
    id: 1,
    drawStatus: "Draw Today",
    soldPercentage: "25%",
    title: "The Fabia Magnum",
    reviews: "0.95",
    daysRemaining: "05",
    itemsRemaining: "1550",
    price: "$17.00",
    perEntry: "PER ENTRY",
    imageSrc: lc4,
    aosDuration: "1600",
    soldStatus: "25% Sold",
  },
  {
    id: 2,
    drawStatus: "Draw Today",
    soldPercentage: "75%",
    title: "Porsche 917 Carrera",
    reviews: "0.90",
    daysRemaining: "01",
    itemsRemaining: "1000",
    price: "$5.00",
    perEntry: "PER ENTRY",
    imageSrc: lc5,
    aosDuration: "1800",
    soldStatus: "75% Sold",
  },
  {
    id: 3,
    drawStatus: "Draw Today",
    soldPercentage: "22%",
    title: "Mini Cooper",
    reviews: "0.75",
    daysRemaining: "07",
    itemsRemaining: "2750",
    price: "$4.00",
    perEntry: "PER ENTRY",
    imageSrc: lc1,
    aosDuration: "2000",
    soldStatus: "22% Sold",
  },
  {
    id: 4,
    drawStatus: "Draw Today",
    soldPercentage: "20%",
    title: "Shelby Cobra",
    reviews: "0.97",
    daysRemaining: "02",
    itemsRemaining: "1200",
    price: "$3.00",
    perEntry: "PER ENTRY",
    imageSrc: lc3,
    aosDuration: "1400",
    soldStatus: "20% Sold",
  },
];