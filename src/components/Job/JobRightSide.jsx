import { Typography, Container, Card } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const JobRightSide = () => {
  return (
    <Container style={{textAlign:"center"}}>
      <Card>
        <Typography variant="h5">Job seeker guidance</Typography>
        <Typography variant="p" paragraph>
          Recommended based on your activity
        </Typography>

        <Typography variant="p" paragraph>
          I want to improve my resume
        </Typography>

        <img
          style={{ width: "100%", height: "70px" }}
          src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQLSkgz-aEw_kAAAAX_oy4l_viZUeiNv88_fplbXcmELGekBSmygRj9tvA&e=1648964527&v=beta&t=71qr1BPHG1mtbbCZjot37nPm9ciVjXcdgDofvMh1T_Q"
          alt=""
        />
        <Typography variant="p" paragraph>
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </Typography>
    <a style={{color:"gray"}} href="#">
        <span >show</span>
        <ArrowForwardIcon style={{marginLeft:"60%"}}  />
    </a>
      </Card> 
    </Container>
  );
};
