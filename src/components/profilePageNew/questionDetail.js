import React from "react";
import Grid from "@material-ui/core/Grid";
import GithubIcon from "../../assets/githubIcon.png";
import "./profilePageCss.css";

export default function QuestionDetail(props) {
  return (
    <>
      <Grid container className="profile-question-detail-grid">
        <Grid item md={12}>
          <p className="profile-text-style">Title</p>
          <p className="profile-content-style">{props.questionTitle}</p>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item md={12}>
            <p className="profile-text-style">Categories</p>
          </Grid>
          {props.questionCategories &&
            props.questionCategories.length &&
            props.questionCategories.map((category) => (
              <Grid item md={3} >
                <p
                  className="profile-content-style"
                  style={{ marginTop: "1%" }}
                >
                  {category}
                </p>
              </Grid>
            ))}
        </Grid>
        <Grid item md={12}>
          <p className="profile-text-style">Resources/Links</p>
        </Grid>
        <Grid item md={2}>
          <img class="icon" src={GithubIcon} alt="git" style={{marginTop:"-2%"}} />
        </Grid>
        <Grid item md={10}>
          <a
            href={props.githubIssueUrl}
            target="_blank"
            rel="noreferrer"
            className="profile-content-style profile-pae-github"
          >
            Github Repo
          </a>
        </Grid>
      </Grid>
    </>
  );
}