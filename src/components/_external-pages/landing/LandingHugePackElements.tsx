import { useRef } from "react";
import Slider from "react-slick";
import { Link as RouterLink } from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography } from "@mui/material";
// routes
import { PATH_PAGE } from "../../../routes/paths";
import mockData from "../../../utils/mock-data";
//
import { CarouselControlsArrowsBasic2 } from "../../carousel";
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const MOCK_APPS = [...Array(3)].map((_, index) => ({
  appName: mockData.appName(index),
  appBrief: mockData.text.appBrief(index),
  tasbeeh: mockData.tasbeeh(index),
  digitalQuran: mockData.digitalQuran(index)
}));
// ----------------------------------------------------------------------

type AppCardProps = {
  apps: {
    appName: string;
    appBrief: string;
    tasbeeh: string;
    digitalQuran: string;
  };
};

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none"
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0
  }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  [theme.breakpoints.up("sm")]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  "& img": {
    borderRadius: 8,
    [theme.breakpoints.up("sm")]: {
      borderRadius: 12
    }
  }
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: "-50%", translateY: 40, opacity: 1 }
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: "50%", translateY: -40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const carouselRef = useRef<Slider>(null);
  //const theme = useTheme();

  const settings = {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0 80px",
    arrows: false
    //rtl: Boolean(theme.direction === 'rtl')
  };
  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isRTL = theme.direction === "rtl";

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  Interface Project
                </Typography>
              </MotionInView>

              {/* <MotionInView variants={varFadeInUp}> */}
              <Box sx={{ position: "relative" }}>
                <Slider ref={carouselRef} {...settings}>
                  {MOCK_APPS.map((apps, index) => (
                    <MotionInView key={index} variants={varFadeInUp}>
                      <Typography variant="h2" sx={{ mb: 3 }}>
                        {apps.appName}
                      </Typography>
                      <Typography
                        sx={{
                          mb: 5,
                          color: isLight ? "text.secondary" : "common.white"
                        }}
                      >
                        {apps.appBrief}
                      </Typography>
                    </MotionInView>
                  ))}
                </Slider>
              </Box>

              {/* <Typography variant="h2" sx={{ mb: 3 }}>
                Tasbeeh App
              </Typography> */}
              {/* </MotionInView> */}
              {/* <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white"
                  }}
                > */}
              {/* {apps.appBrief} */}
              {/* A digital platform to track all of your tasbeeh count
                      stored in this user friendly application. */}

              <MotionInView variants={varFadeInUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  // component={RouterLink}
                  // to={PATH_PAGE.components}
                >
                  See More
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                justifyContent: "center"
              }}
            >
              {[...Array(3)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  threshold={0.72}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate)
                  }}
                  transition={{ duration: 0.72, ease: "easeOut" }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: "absolute"
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: "absolute",
                      boxShadow: "none"
                    })
                  }}
                >
                  {/* {MOCK_APPS.map((data) => {
                    // console.log("data", <img src={data.tasbeeh} />);
                    return <img alt={`screen ${index + 1}`} src={data.digitalQuran} />;
                  })} */}
                  <img alt={`screen ${index + 1}`} src={`/static/home/Screen${index + 1}.png`} />

                  {/* <img alt={`screen ${index + 1}`} src={`/static/home/Screen${index + 1}.png`} />; */}
                  {/* _${isLight ? "light" : "_${isLight ? "light" : "dark"}_dark"}_ */}
                </ScreenStyle>
              ))}
              <CarouselControlsArrowsBasic2
                onNext={handleNext}
                onPrevious={handlePrevious}
                sx={{ transform: "translateY(-64px)" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
