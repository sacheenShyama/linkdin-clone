import { Typography, Container, Card, Button } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
// import Box from '@material-ui/core/Box';

export const Job = () => {
  return (
    <Container>
      <Typography variant="h6">Suggested Job Searches</Typography>
      <Card style={{ padding: "20px" }}>
        <div>
          <Button
            style={{ borderRadius: "20px", marginLeft: "30px" }}
            variant="outlined"
            color="primary"
          >
            hr
          </Button>
          <Button
            style={{ borderRadius: "20px", marginLeft: "30px" }}
            variant="outlined"
            color="primary"
          >
            marketing manager
          </Button>
        </div>
        <div>
          <Button
            style={{ borderRadius: "20px", marginLeft: "30px" }}
            variant="outlined"
            color="primary"
          >
            legal
          </Button>
          <Button
            style={{ borderRadius: "20px", marginLeft: "10px" }}
            variant="outlined"
            color="primary"
          >
            sales
          </Button>
          <Button
            style={{ borderRadius: "20px", marginLeft: "10px" }}
            variant="outlined"
            color="primary"
          >
            amazon
          </Button>
        </div>
      </Card>
      <br />
      <br />
      <br />

      <Card>
        <Typography variant="h6">Remote Opportunities</Typography>
        <Typography variant="p" paragraph>
          Because you expressed interest in remote work
        </Typography>
        <hr />
        {/* ------------------------------------------- */}
        <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C560BAQF7CWWChJdrJA/company-logo_100_100/0/1618663913654?e=1657152000&v=beta&t=Ux8EM7YXQtIc4cdae0sk70YsUB3MIyJJvCftjLN1-jU"
              alt=""
            />
            <div>
                 <a href="https://www.mavoix.com">
              <Typography variant="h6">Full Stack Developer (MERN)</Typography>
              <Typography variant="p">
                Mavoix Solutions Private Limited India Remote
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
        {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEC3n4yU_w6bQ/company-logo_100_100/0/1630047631002?e=1657152000&v=beta&t=R_m9GvftznQdUtj4jxpPUWsB8YD2MN26wEawoJFzVpI"
              alt=""
            />
            <div>
                 <a href="https://www.walmart.com">
              <Typography variant="h6">Software Engineer</Typography>
              <Typography variant="p">
              Walmart Global tech India 
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C560BAQHeI98W_ChFpQ/company-logo_100_100/0/1638523317434?e=1657152000&v=beta&t=cYOyos8FYEGyZiI9CMQdK4W--8ocUOLzpxKKZwGUTbw"
              alt=""
            />
            <div>
                <a href="https://www.archies.in">
              <Typography variant="h6">Web Developer</Typography>
              <Typography variant="p">
                archies.in
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQHda-o9KT2w5Q/company-logo_100_100/0/1625689676984?e=1657152000&v=beta&t=hSBGlG4x06xdeSxC1a4AfJkb1eKLluMsBoxcAjZrOQs"
              alt=""
            />
            <div>
                <a href="https://www.Deloitte.in">
              <Typography variant="h6">Frontend Engineer</Typography>
              <Typography variant="p">
                Deloitte
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQF8xMG7OxfliQ/company-logo_100_100/0/1648791167452?e=1657152000&v=beta&t=yhqoy2YtJA1CH0DRJtaiuCh2PvIC29quh_GVGg9kFV4"
              alt=""
            />
            <div>
                <a href="https://www.swiggy.in">
              <Typography variant="h6">Frontend Engineer</Typography>
              <Typography variant="p">
                swiggy
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
        {/* ------------------------------ */}

        <Typography variant="h6">Similar to a job you applied 3 days ago</Typography>
        <Typography variant="p" paragraph>
          Because you expressed interest in remote work
        </Typography>
        <hr />
        <br/>
         {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQHda-o9KT2w5Q/company-logo_100_100/0/1625689676984?e=1657152000&v=beta&t=hSBGlG4x06xdeSxC1a4AfJkb1eKLluMsBoxcAjZrOQs"
              alt=""
            />
            <div>
                <a href="https://www.Deloitte.in">
              <Typography variant="h6">Frontend Engineer</Typography>
              <Typography variant="p">
                Deloitte
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}
         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C560BAQF7CWWChJdrJA/company-logo_100_100/0/1618663913654?e=1657152000&v=beta&t=Ux8EM7YXQtIc4cdae0sk70YsUB3MIyJJvCftjLN1-jU"
              alt=""
            />
            <div>
                <a href="https://www.swiggy.in">
              <Typography variant="h6">Frontend Engineer</Typography>
              <Typography variant="p">
                swiggy
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
        {/* ------------------------------ */}

         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEC3n4yU_w6bQ/company-logo_100_100/0/1630047631002?e=1657152000&v=beta&t=R_m9GvftznQdUtj4jxpPUWsB8YD2MN26wEawoJFzVpI"
              alt=""
            />
            <div>
                 <a href="https://www.walmart.com">
              <Typography variant="h6">Software Engineer</Typography>
              <Typography variant="p">
              Walmart Global tech India 
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}

         <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQF8xMG7OxfliQ/company-logo_100_100/0/1648791167452?e=1657152000&v=beta&t=yhqoy2YtJA1CH0DRJtaiuCh2PvIC29quh_GVGg9kFV4"
              alt=""
            />
            <div>
                <a href="https://www.swiggy.in">
              <Typography variant="h6">Frontend Engineer</Typography>
              <Typography variant="p">
                swiggy
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
        {/* ------------------------------ */}

        <div style={{display:"flex",justifyContent:"space-between" , marginBottom:"20px"}}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              style={{ width: "50px", height: "60px" }}
              src="https://media-exp1.licdn.com/dms/image/C560BAQHeI98W_ChFpQ/company-logo_100_100/0/1638523317434?e=1657152000&v=beta&t=cYOyos8FYEGyZiI9CMQdK4W--8ocUOLzpxKKZwGUTbw"
              alt=""
            />
            <div>
                <a href="https://www.archies.in">
              <Typography variant="h6">Web Developer</Typography>
              <Typography variant="p">
                archies.in
              </Typography>
              </a>
            </div>
          </div>
          <BookmarkIcon fontSize="large" />
        </div>
        <hr/>
         {/* ----------------------------------------- */}

      </Card>
    </Container>
  );
};
