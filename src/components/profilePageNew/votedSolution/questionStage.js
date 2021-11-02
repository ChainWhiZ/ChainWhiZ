import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { port } from "../../../config/config";
import GithubIcon from "../../../assets/githubIcon.png";
import SimpleAlerts from "../../alert/alert";
import "../profilePageCss.css";

export default function QuestionStage(props) {
  console.log(props);
  const [alert, setAlert] = useState({
    open: false,
    errorMessage: "",
    severity: "error",
  });

  const handleUnstake = () => {
    // setLoader(true);
    // return Promise.resolve()
    //   .then(async function () {
    //     await contract.methods.unStake(props.solutionVotedOn.questionDetails.publicAddress,
    //       props.solutionVotedOn.questionDetails.githubIssueUrl,
    //       props.solutionVotedOn.solutionId.publicAddress,
    //       (props.solutionVotedOn.amountToBeReturned * (Math.pow(10, 18))).toString()).send({ from: walletAddress })
    //   })
    //   .then(async function () {
    //     axios
    //       .post(port + "vote/updatereward", {
    //         voterId: props.solutionVotedOn.voterId,
    //         solutionId: props.solutionVotedOn.solutionId._id,
    //       })
    //       .then((response) => {
    //         console.log(response.status)
    //         props.fetchVotedSolutions();
    //         setLoader(false);
    //       })
    //       .catch((err) => {
    //         setAlert(prevState => ({
    //           ...prevState,
    //           open: true,
    //           errorMessage: "Error while unstaking reward"
    //         }));
    //         setLoader(false);
    //       });
    //   })
  };

  return (
    <>
      <Grid container className="profile-question-stage-grid">
        <Grid item md={12}>
          <p className="profile-text-style profile-text-center">Status</p>
          {props.questionDetails.questionStage === "vote" ? (
            <>
              <p className="profile-content-style profile-text-center">
                Voting Phase In Progress
              </p>
            </>
          ) : props.claimed ? (
            <p className="profile-content-style profile-text-center">
              Bounty Completed
            </p>
          ) : (
            <p className="profile-content-style profile-text-center">
              Voting Phase Completed
            </p>
          )}
        </Grid>
        <Grid item md={6}>
          <p className="profile-text-style profile-text-center">
            Voted On
          </p>
          <p className="profile-content-style profile-text-center">
            {props.amountStaked}
          </p>
        </Grid>
        <Grid item md={6}>
          <p className="profile-text-style profile-text-center">
            Unstake Amount
          </p>
          <p className="profile-content-style profile-text-center">
            {props.amountToBeReturned}
          </p>
        </Grid>
        <Grid item md={12} style={{ textAlign: "center" }}>
          {props.amountToBeReturned ? (
            <Button className="profile-button" onClick={handleUnstake}>
              Unstake
            </Button>
          ) : (
            <Link to={`/bounty/${props._id}`}>
              <Button className="profile-button">Go to Bounty Page</Button>
            </Link>
          )}
        </Grid>
      </Grid>
      {alert.open ? (
        <SimpleAlerts severity={alert.severity} message={alert.errorMessage} />
      ) : null}
    </>
  );
}
