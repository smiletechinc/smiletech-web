import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import roundGrain from "@iconify/icons-ic/round-grain";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from "../../routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: "Home",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: "/"
  },
  {
    title: "Services",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.services
  },
  {
    title: "Blog",
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.blog
  },
  {
    title: "Projects",
    path: "/pages",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Services",
        items: [
          { title: "MERN Stack", path: "#" }, //PATH_PAGE.faqs },
          { title: "React", path: "#" }, //PATH_PAGE.pricing },
          { title: "Nodejs", path: "#" } //PATH_PAGE.payment }
          // { title: "Maintenance", path: PATH_PAGE.maintenance },
          // { title: "Coming Soon", path: PATH_PAGE.comingSoon }
        ]
      },
      {
        subheader: "Products",
        items: [
          { title: "Tasbee App", path: "#" }, //PATH_AUTH.loginUnprotected
          { title: "Digital Quran", path: "#" } //PATH_AUTH.registerUnprotected }
          // { title: "Reset password", path: PATH_AUTH.resetPassword },
          // { title: "Verify code", path: PATH_AUTH.verify }
        ]
      },
      {
        subheader: "Ongoing",
        items: [
          { title: "Page 404", path: PATH_PAGE.page404 },
          { title: "Page 500", path: PATH_PAGE.page500 }
        ]
      },
      {
        subheader: "Featured",
        items: [{ title: "Featured", path: PATH_DASHBOARD.root }]
      }
    ]
  },

  {
    title: "About us",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },

  {
    title: "Contact us",
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.contact
  }

  // {
  //   title: 'Components',
  //   icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
  //   path: PATH_PAGE.components
  // },
];

export default menuConfig;
