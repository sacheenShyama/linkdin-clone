// import {
//   GroupSharpIcon,
//   PermContactCalendarSharpIcon,
//   DuoSharpIcon,
//   EventAvailableSharpIcon,
//   PostAddSharpIcon,
//   SubtitlesSharpIcon,
// } from "@material-ui/icons";


// import FourKIcon from '@material-ui/icons/FourK';

import "./style.css";
import GroupSharpIcon from "@material-ui/icons/GroupSharp"
import PermContactCalendarSharpIcon  from "@material-ui/icons/PermContactCalendarSharp"
import DuoSharpIcon  from "@material-ui/icons/DuoSharp"
import EventAvailableSharpIcon from "@material-ui/icons/EventAvailableSharp"
import PostAddSharpIcon from "@material-ui/icons/PostAddSharp"
import SubtitlesSharpIcon from "@material-ui/icons/SubtitlesSharp"
import { Container,Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { FaUsers } from "react-icons/fa";


const useStyles = makeStyles({
 conta: {
   border:"1 px solid #fff",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 2px 4px;",
    maxHeight:"600px",
    marginTop:"30px",
    borderRadius:"10px",
 },
 manage:{
  marginTop:"15px",
 },
 user:{
   height:"25px",
   width:"25px",
 }
});



export const ManageNetwork = () => {
  const classes = useStyles();
  return (
  
    <Container className={classes.conta}>
      <Typography variant="h6" paragraph className={classes.manage}>Manage my network</Typography>

      <div className="sideBar">
     <GroupSharpIcon fontSize="medium" />
     <Typography>Connection</Typography>
      </div>

      <div className="sideBar">
     <PermContactCalendarSharpIcon fontSize="medium" />
     <Typography>Contacts</Typography>
      </div>

      <div className="sideBar">
     <DuoSharpIcon  fontSize="medium" />
     <Typography>People | Follow</Typography>
      </div>

      <div className="sideBar">
     <FaUsers className={classes.user} />
     <Typography>People | Follow</Typography>
      </div>

      <div className="sideBar">
     <EventAvailableSharpIcon fontSize="medium" />
     <Typography>Event</Typography>
      </div>

      <div className="sideBar">
     <PostAddSharpIcon fontSize="medium" />
     <Typography>Pages</Typography>
      </div>

      <div className="sideBar">
     <SubtitlesSharpIcon fontSize="medium" />
     <Typography>News Letter</Typography>
      </div>

    </Container>
  );
};
