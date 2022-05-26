// material
import { Box, Container, Typography, Grid } from "@mui/material";
//
import { varFadeInUp, varFadeInRight, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

export default function ServiceVision() {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        {/* <img src="/static/about/vision.jpg" alt="about-vision" />

        <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center"
          }}
        > */}
        {/* {['logo_amazon', 'logo_hbo', 'logo_ibm', 'logo_lya', 'logo_spotify', 'logo_netflix'].map(
            (logo) => (
              <MotionInView key={logo} variants={varFadeIn}>
                <Box
                  component="img"
                  src={`/static/about/${logo}.svg`}
                  sx={{
                    m: { xs: 1.5, md: 3 },
                    height: { xs: 24, md: 32 }
                  }}
                />
              </MotionInView>
            )
          )} */}
        {/* </Box> */}
      </Box>

      <Grid item xs={12} md={6} lg={12}>
        <Grid container justifyContent="center">
          {/* <Grid item xs={12} sm={8}> */}
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Web App Development
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInRight}>
            <Typography sx={{ textAlign: "left" }}>
              We, at Smile Tech, are a team of young software developers with experience in
              developing web and mobile applications. We, Development Company in Islamabd can
              provide creative, functionally-rich and user-centric applications for you customers to
              have rich in-app experience. Our developers are specialized in developing Apps and
              Websites for varied category. Our unmatched energy to deliver innovative solutions to
              your app idea make us best in the app development industry.
            </Typography>
          </MotionInView>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}
