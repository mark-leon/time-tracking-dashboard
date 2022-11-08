import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconWork from "../../assets/icon-work.svg";

const useStyles = makeStyles({
  root: {
    width: "14.5rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ borderRadius: "12px" }}
    >
      <CardContent style={{ backgroundColor: "#FF8A64", height: "10px" }}>
        <div style={{ textAlign: "right" }}>
          <img
            src={IconWork}
            style={{
              height: "20px",
              width: "40px",
            }}
          ></img>
        </div>
      </CardContent>
      <div
        style={{
          backgroundColor: "#1E204C",
          color: "white",
          //borderRadius: "0.8rem",
        }}
      >
        <div style={{ marginLeft: "1.5rem" }}>
          <Typography
            className={classes.title}
            //color="textSecondary"
            style={{ paddingTop: "1.5rem" }}
            gutterBottom
          >
            Work
          </Typography>
          <Typography variant="h4" component="h1" style={{ marginTop: "1rem" }}>
            32 hrs
          </Typography>
          <Typography variant="body2" component="p">
            Last week 8 Hours
          </Typography>
        </div>

        <CardActions style={{ marginTop: "1rem" }}></CardActions>
      </div>
    </Card>
  );
}
