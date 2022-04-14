import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../profilePageCss.css";
import BlackInfoIcon from "../../../../assets/black_info.png";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Tooltip } from "@material-ui/core";
import { checkLength, shortenLength } from "../../../helper";

export default function RightSide(props) {
  const [cloneconfirmation, setCloneconfirmation] = useState(false);

  return (
    <>
      <Grid container className="results-dialog-right-grid">
        <Grid container className="results-dialog-right-grid-warning">
          <Grid item md={1} xs={12} className="results-dialog-right-grid-info">
            <img src={BlackInfoIcon} alt="info" />
          </Grid>
          <Grid item md={11}>
            <p>Make a copy of the repo before completing the escrow</p>
          </Grid>
        </Grid>
        <Grid container className="results-dialog-right-grid-content">
          <Grid item md={12}>
            <p className="results-dialog-heading">Submission Link</p>
            <a
              href={props.selectedSolution.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <p className="results-dialog-right-grid-content-value">
                {props.selectedSolution.githubLink}
              </p>
            </a>
          </Grid>
          {props.question.isCommunityApprovedSolution ? (
            <>
              <Grid item md={6}>
                <p className="results-dialog-heading">Voting Score</p>
                <Tooltip
                  title={props.selectedSolution.finalVoteScore}
                  disableHoverListener={
                    !checkLength(props.selectedSolution.finalVoteScore)
                  }
                >
                  <p className="results-dialog-right-grid-content-score">
                    {shortenLength(props.selectedSolution.finalVoteScore)}
                  </p>
                </Tooltip>
              </Grid>
            </>
          ) : null}
        </Grid>

        {props.question.escrowStatus ? (
          props.question.selectedSolution ===
          props.selectedSolution.githubLink ? (
            <>
              <Button
                className="profile-button results-dialog-right-grid-button"
                disabled
              >
                {props.question.escrowStatus}
              </Button>
            </>
          ) : (
            <p>Escrow already initiated for other solution</p>
          )
        ) : (
          <>
            <Grid item md={12} xs={12} style={{ margin: "-4% 0% 2% 12%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="cloneconfirmation"
                    checked={cloneconfirmation}
                    onChange={(e) => setCloneconfirmation(e.target.checked)}
                    style={{ color: "white" }}
                  />
                }
              />
              <span className="terms-text">
                I have already taken a clone of the solution github link.
              </span>
            </Grid>
            <Button
              onClick={props.handleEscrowInitiation}
              className="profile-button results-dialog-right-grid-button"
            >
              Initiate Escrow
            </Button>
          </>
        )}
      </Grid>
    </>
  );
}
