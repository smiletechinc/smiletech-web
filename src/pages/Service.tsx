// material
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
// components
import Page from "../components/Page";
import { ServiceHero, ServiceReact, ServiceVision } from "../components/_external-pages/services";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Serivce() {
  return (
    <RootStyle title="Service | Smile Tech">
      <ServiceHero />
      <ServiceVision />
      <Divider orientation="vertical" sx={{ mb: "0", mx: "auto", width: 2, height: 40 }} />
      <ServiceReact />
    </RootStyle>
  );
}
