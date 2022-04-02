import { Typography, Container  } from "@material-ui/core";

// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
// import axios from "axios";


const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    textAlign: "center",
    // boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:hover": {
      boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
    },
    lineHeight: "0px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  con: {
    borderRadius: 30,
    width: 150,
  },
  prof: {
    borderRadius: 100,
    width: 100,
  },
  topBar:{
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 2px 4px;",
    width:"97.5%",
    marginLeft:"25px",
    marginBottom:"30px",
    marginTop:"30px",
    textAlign:"center"
  }
});
export const Network = () => {
  const [details, setDetails] = useState([]);
  const classes = useStyles();

  const getData = async() => {
    // axios
    //   .get("http://localhost:8080/network")
    //   .then(({ data }) => setDetails(data));
    let res= await fetch(`http://localhost:8080/network`)
    let data=await res.json();
    console.log('data:', data)
    setDetails(data)
  };
  console.log(details);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container className={classes.topBar} style={{ display: "flex",justifyContent: "space-between",}}>
        <Typography variant="h6" gutterBottom>
          No pending invitations
        </Typography>
        <Typography variant="h6" paragraph>manage</Typography>
      </Container>
      <Container
        className={classes.cont}
        style={{
          borderRadius: "25%",
          display: "grid",
          gridTemplateColumns: "24% 24% 24% 24%",
          gap: "20px",
        }}
      >
        {details.map((e,id) => {
          return (
            <Card key={id} className={classes.root} variant="outlined">
              <CardContent>
                <img className={classes.prof} src={e.imgUrl} alt="" />
                <Typography variant="h6" component="h2" paragraph>
                  {e.name} {/*put the name should be placed here */}
                </Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  paragraph
                >
                  {/* Qualifaication  */}
                  {e.qualification}
                </Typography>
                <Button
                  className={classes.con}
                  variant="outlined"
                  color="primary"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          );
        })}
        {/* ---------------------------------------------------- */}
      </Container>
    </div>
  );
};
