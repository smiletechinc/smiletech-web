import { useRef } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import roundArrowRightAlt from "@iconify/icons-ic/round-arrow-right-alt";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// material
//import { useTheme } from '@mui/material/styles';
import { Box, Card, Button, Container, Typography, IconButton } from "@mui/material";
// utils
import mockData from "../../../utils/mock-data";
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from "../../animate";
import { CarouselControlsArrowsBasic2 } from "../../carousel";
import { socialInstagram, socialLinkedin } from "utils/mock-data/socialLink";

// ----------------------------------------------------------------------

//  const Social = [
//   { link:'https://www.facebook.com/hfshan247'},
//   {link:'https://twitter.com/hfshan247'}
//   { name:'instagram', icon:'instagramFilled', link:'https://www.instagram.com/hfshan247/' },
//   { name:'twitter', icon:'twitterFill', link:'https://twitter.com/hfshan247' },
//   { name:'linkedin', icon:'linkedinFill', link:'https://www.linkedin.com/in/hfshan247/ '}
//]

// ----------------------------------------------------------------------

const MOCK_MEMBERS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  role: mockData.role(index),
  avatar: mockData.image.avatar(index),
  socialFacebook: mockData.socialLink.socialFacebook(index),
  socialTwitter: mockData.socialLink.socialTwitter(index),
  socialInstagram: mockData.socialLink.socialInstagram(index),
  socialLinkedin: mockData.socialLink.socialLinkedin(index)
  //socialName: mockData.socialName(index)
  //link : Social.link(index)
}));

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    id: string;
    name: string;
    role: string | undefined;
    avatar: string;
    socialFacebook: string;
    socialTwitter: string;
    socialInstagram: string;
    socialLinkedin: string;
    //socialName: string;
    // link : string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { name, role, avatar, socialFacebook, socialTwitter, socialInstagram, socialLinkedin } =
    member;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {role}
      </Typography>
      <Box component="img" src={avatar} sx={{ width: "100%", borderRadius: 1.5 }} />
      <Box sx={{ mt: 2, mb: 1 }}>
        {[
          { icon: facebookFill, url: socialFacebook },
          { icon: twitterFill, url: socialTwitter },
          { icon: instagramFilled, url: socialInstagram },
          { icon: linkedinFill, url: socialLinkedin }
        ].map((social, index) => (
          <IconButton key={index} href={social.url} target={"_blank"}>
            <Icon icon={social.icon} width={20} height={20} />
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}

export default function AboutTeam() {
  const carouselRef = useRef<Slider>(null);
  //const theme = useTheme();

  const settings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0 80px",
    //rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, infinite: true }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: "center" }}>
      <MotionInView variants={varFadeInDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: "text.secondary" }}>
          Dream team
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Great team is the key
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: "auto",
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === "light" ? "text.secondary" : "common.white")
          }}
        >
          Smile Tech will provide you support if you have any problems, our support team will reply
          within a day and we also have detailed documentation.
        </Typography>
      </MotionInView>

      <Box sx={{ position: "relative" }}>
        <Slider ref={carouselRef} {...settings}>
          {MOCK_MEMBERS.map((member) => (
            <MotionInView key={member.id} variants={varFadeIn}>
              <MemberCard member={member} />
            </MotionInView>
          ))}
        </Slider>

        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: "translateY(-64px)" }}
        />
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
        sx={{ mx: "auto" }}
      >
        View all team members
      </Button>
    </Container>
  );
}
