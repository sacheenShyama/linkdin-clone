import BookmarkIcon from "@material-ui/icons/Bookmark";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoneyIcon from "@material-ui/icons/Money";
import { BsCash } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import { GrDocument } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  conta: {
    border: "1 px solid #fff",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 2px 4px;",
    minHeight: "500px",
    marginBottom: "30px",
    borderRadius: "10px",
  },
  manage: {
    marginTop: "15px",
  },
  user: {
    height: "25px",
    width: "25px",
  },
  con:{
      width: "100%",
      borderRadius: "20px",
      marginTop: "20px"
  }
});

export const JobLeftSide = () => {
  const classes = useStyles();
  return (
   
      <Container className={classes.conta}>
       
        <div className="sideBar">
          <BookmarkIcon fontSize="medium" />
          <Typography>My Jobs</Typography>
        </div>

        <div className="sideBar">
          <NotificationsIcon fontSize="medium" />
          <Typography>Job Alerts</Typography>
        </div>

        <div className="sideBar">
          <MoneyIcon fontSize="medium" />
          <Typography>Salary</Typography>
        </div>

        <div className="sideBar">
          <BsCash className={classes.user} />
          <Typography>Skill Assessment</Typography>
        </div>

        <div className="sideBar">
          <IoDocumentTextSharp className={classes.user} />
          <Typography>Interview Prep</Typography>
        </div>

        <div className="sideBar">
          <GrDocument className={classes.user} />
          <Typography>Resume Builder</Typography>
        </div>

        <div className="sideBar">
          <BsYoutube className={classes.user} />
          <Typography>News Letter</Typography>
        </div>

        <div className="sideBar">
          <AssignmentTurnedInIcon fontSize="medium" />
          <Typography>job Seeker Guidance</Typography>
        </div>

        <div className="sideBar">
          <SettingsIcon fontSize="medium" />
          <Typography>Application Settings</Typography>
        </div>
      </Container>
     
  );
};
