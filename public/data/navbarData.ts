let idCounter = 0;

function generateId() {
  return (++idCounter).toString();
}

export const navbarData = [
  {
    id: generateId(),
    menuTitle: "Winners",
    path: "winners",
  },
  {
    id: generateId(),
    menuTitle: "Features",
    path: "features",
  },
  {
    id: generateId(),
    menuTitle: "News",
    path: "#",
    menuItems: [
      {
        id: generateId(),
        title: "Blog V-1",
        menuItemPath: "/blog1",
      },
      {
        id: generateId(),
        title: "Blog V-2",
        menuItemPath: "/blog2",
      },
      {
        id: generateId(),
        title: "Blog Details",
        menuItemPath: "/blog-details",
      },
    ],
  },
  {
    id: generateId(),
    menuTitle: "Lotteries",
    path: "#",
    menuItems: [
      {
        id: generateId(),
        title: "Contest",
        menuItemPath: "/contest",
      },
      {
        id: generateId(),
        title: "Contest Details",
        menuItemPath: "/contest-details",
      },
    ],
  },
  {
    id: generateId(),
    menuTitle: "Pages",
    path: "#",
    menuItems: [
      {
        id: generateId(),
        title: "Multiproduct One",
        menuItemPath: "/multiproduct-one",
      },
      {
        id: generateId(),
        title: "Multiproduct Two",
        menuItemPath: "/multiproduct-two",
      },
      {
        id: generateId(),
        title: "About Us",
        menuItemPath: "/about",
      },
      {
        id: generateId(),
        title: "User Panel",
        menuItemPath: "/user-panel",
      },
      {
        id: generateId(),
        title: "Basket",
        menuItemPath: "/basket",
      },
      {
        id: generateId(),
        title: "Checkout",
        menuItemPath: "/checkout",
      },
      {
        id: generateId(),
        title: "Login",
        menuItemPath: "/login",
      },
      {
        id: generateId(),
        title: "Register",
        menuItemPath: "/register",
      },
      {
        id: generateId(),
        title: "Forgot Password",
        menuItemPath: "/forgot-password",
      },
      {
        id: generateId(),
        title: "New Password",
        menuItemPath: "/new-password",
      },
      {
        id: generateId(),
        title: "Verify Password",
        menuItemPath: "/verify-password",
      },

      {
        id: generateId(),
        title: "Affiliate",
        menuItemPath: "/affiliate",
      },
      {
        id: generateId(),
        title: "How To Play",
        menuItemPath: "/howtoplay",
      },
      {
        id: generateId(),
        title: "Faq",
        menuItemPath: "/faq",
      },
      {
        id: generateId(),
        title: "Contact",
        menuItemPath: "/contact",
      },
      {
        id: generateId(),
        title: "Terms & Condition",
        menuItemPath: "/terms-condition",
      },
      {
        id: generateId(),
        title: "Error 404",
        menuItemPath: "/error",
      },
    ],
  },
  {
    id: generateId(),
    menuTitle: "Contact Us",
    path: "contact",
  },
];
