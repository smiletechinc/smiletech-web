import { Icon } from "@iconify/react";
import roundArrowRightAlt from "@iconify/icons-ic/round-arrow-right-alt";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography, LinearProgress } from "@mui/material";
// utils
import { fPercent } from "../../../utils/formatNumber";
import mockData from "../../../utils/mock-data";
//
import { MHidden } from "../../@material-extend";
import { varFadeInUp, varFadeInRight, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const LABEL = ["AI", "React", "Nodejs"];

const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
  label: LABEL[index],
  value: mockData.number.percent(index)
}));

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left"
  }
}));

// ----------------------------------------------------------------------

type ProgressItemProps = {
  progress: {
    label: string;
    value: number;
  };
};

function ProgressItem({ progress }: ProgressItemProps) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" }
        }}
      />
    </Box>
  );
}

export default function ServiceReact() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/about/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                MERN
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "text.secondary" : "common.white"
                }}
              >
                Our theme is the most advanced and user-friendly theme you will find on the market,
                we have documentation and video to help set your site really easily, pre-installed
                demos you can import in one click and everything from the theme options to page
                content can be edited from the front-end. This is the theme you are looking for.
              </Typography>
            </MotionInView>

            <Box sx={{ my: 5 }}>
              {MOCK_SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box>

            {/* <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
              >
                Check out our work
              </Button>
            </MotionInView> */}
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src="/static/about/what-1.jpg"
                    sx={{
                      mt: 10,
                      borderRadius: 2,
                      boxShadow: shadow
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInRight}>
                    <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5} sx={{ mt: 10 }}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                React Native
              </Typography>
            </MotionInView>
            <Box sx={{ my: 5 }}>
              <MotionInView variants={varFadeInRight}>
                <Typography
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "text.secondary" : "common.white"
                  }}
                >
                  Phontinent Technologies hold all the amazing features of React Native development,
                  which provides help in developing a great cross-platform mobile application. We
                  are renowned for having expertise in different areas such as e-commerce,
                  educational apps, booking apps, finance app, portal apps, and many more using
                  React Native. React Native helps in reducing the time used in the development
                  cycle, which helps in delivering our services quickly to our clients.
                </Typography>
              </MotionInView>
            </Box>
            {/* <Box sx={{ my: 5 }}>
              {MOCK_SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box> */}

            <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
              >
                Check out our work
              </Button>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
