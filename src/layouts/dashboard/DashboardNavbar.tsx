// import { Icon } from '@iconify/react';
// import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// // material
// import { alpha, styled } from '@mui/material/styles';
// import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// // hooks
// import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// // components
// // import { MHidden } from '../../components/@material-extend';
// // import Searchbar from './Searchbar';
// // import AccountPopover from './AccountPopover';
// // import LanguagePopover from './LanguagePopover';
// // import ContactsPopover from './ContactsPopover';
// // import NotificationsPopover from './NotificationsPopover';

// // ----------------------------------------------------------------------

// // const DRAWER_WIDTH = 280;
// // const COLLAPSE_WIDTH = 102;

// // const APPBAR_MOBILE = 64;
// // const APPBAR_DESKTOP = 92;

// const RootStyle = styled(AppBar)(({ theme }) => ({
//   // boxShadow: 'none',
//   // backdropFilter: 'blur(6px)',
//   // WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   // backgroundColor: alpha(theme.palette.background.default, 0.72),
//   // [theme.breakpoints.up('lg')]: {
//   //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
//   // }
// }));

// // const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
// //   minHeight: APPBAR_MOBILE,
// //   [theme.breakpoints.up('lg')]: {
// //     minHeight: APPBAR_DESKTOP,
// //     padding: theme.spacing(0, 5)
// //   }
// // }));

// // ----------------------------------------------------------------------

// type DashboardNavbarProps = {
//   onOpenSidebar: VoidFunction;
// };

// export default function DashboardNavbar({ onOpenSidebar }: DashboardNavbarProps) {
//   const { isCollapse } = useCollapseDrawer();

//   return (
//     <RootStyle
//       // sx={{
//       //   ...(isCollapse && {
//       //     width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
//       //   })
//       // }}
//     >
//       {/* <ToolbarStyle>
//         <MHidden width="lgUp">
//           <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
//             <Icon icon={menu2Fill} />
//           </IconButton>
//         </MHidden> */}

//         {/* <Searchbar />
//         <Box sx={{ flexGrow: 1 }} />

//         <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
//           <LanguagePopover />
//           <NotificationsPopover />
//           <ContactsPopover />
//           <AccountPopover />
//         </Stack> */}
//       {/* </ToolbarStyle> */}
//     </RootStyle>
//   );
// }

// //---------------------------------------------------------------------------------------------

// // export type MenuItemProps = {
// //   title: string;
// //   path: string;
// //   icon?: JSX.Element;
// //   to?: string;
// //   children?: {
// //     subheader: string;
// //     items: {
// //       title: string;
// //       path: string;
// //     }[];
// //   }[];
// // };

// // export type MenuProps = {
// //   isOffset: boolean;
// //   isHome: boolean;
// //   navConfig: MenuItemProps[];
// // };

// // export default function MainNavbar() {
// //   const isOffset = useOffSetTop(100);
// //   const { pathname } = useLocation();
// //   const isHome = pathname === '/';

// //   return (
// //     <RootStyle
// //       <ToolbarStyle
// //         disableGutters
// //         sx={{
// //           ...(isOffset && {
// //             bgcolor: 'background.default',
// //             height: { md: APP_BAR_DESKTOP - 16 }
// //           })
// //         }}
// //       >
// //         <Container
// //           maxWidth="lg"
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'space-between'
// //           }}
// //         >
// //           <RouterLink to="/">
// //             <Logo />
// //           </RouterLink>
// //           <Label color="info" sx={{ ml: 1 }}>
// //             Smile Tech
// //           </Label>
// //           <Box sx={{ flexGrow: 1 }} />

// //           <MHidden width="mdDown">
// //             <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
// //           </MHidden>

// //           <Button
// //             variant="contained"
// //             target="_blank"
// //             href="https://material-ui.com/store/items/minimal-dashboard/"
// //           >
// //             Start Discussion
// //           </Button>

// //           <MHidden width="mdUp">
// //             <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
// //           </MHidden>
// //         </Container>
// //       </ToolbarStyle>

// //       {isOffset && <ToolbarShadowStyle />}
// //     </RootStyle>
// //   );
// // }

import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import Label from "../../components/Label";
import { MHidden } from "../../components/@material-extend";
//
import MenuDesktop from "../main/MenuDesktop";
import MenuMobile from "../main/MenuMobile";
import navConfig from "../main/MenuConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  to?: string;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: "background.default",
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Label color="info" sx={{ ml: 1 }}>
            Smile Tech
          </Label>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          <Button
            variant="contained"
            target="_blank"
            href="https://material-ui.com/store/items/minimal-dashboard/"
          >
            Start Discussion
          </Button>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
