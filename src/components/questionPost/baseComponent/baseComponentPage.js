import React from "react";
import Grid from "@material-ui/core/Grid";
import "./baseComponentCss.css";
import RightSideText from "./rightSideText";
import DaysInputComponent from "../daysInputPage/daysInput";
import OptionComponent from "../optionPage/optionPage";
import InputComponent from "../inputFieldPage/inputField";
import ChipInputComponent from "../chipInputFieldPage/chipInputFieldPage";
export default function BaseComponent(props) {
  
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <hr className="horizontal-line" style={{ marginTop: "8%" }} />
        </Grid>
        <Grid item md={4}>
          <RightSideText {...props} communityOption={props.communityOption} className="margin-top-8" />
        </Grid>
        <Grid item md={6} style={{ marginTop: "6%" }}>
          {props.pageState === 1 ? (
            <InputComponent
              handleIssueTitle={props.handleIssueTitle}
              pageState={props.pageState}
              issueTitle={props.issueTitle}
              alert={props.alert}
            />
          ) : props.pageState === 2 ? (
            <ChipInputComponent
              handleChipData={props.handleChipData}
              pageState={props.pageState}
              chipData={props.chipData}
              alert={props.alert}
            />
          ) : props.pageState === 3 ? (
            <ChipInputComponent
              handleChipData={props.handleChipData}
              pageState={props.pageState}
              chipData={props.chipData}
              alert={props.alert}
            />
          ) : props.pageState === 4 ? (
            <InputComponent
              handleEvaluationCriteria={props.handleEvaluationCriteria}
              pageState={props.pageState}
              evaluationCriteria={props.evaluationCriteria}
              alert={props.alert}
            />
          ) : props.pageState === 5 ? (
            <DaysInputComponent
              handleTime={props.handleTime}
              pageState={props.pageState}
              time={props.time}
              alert={props.alert}
            />
          ) : props.pageState === 6 ? (
            <InputComponent
              handleIssueURL={props.handleIssueURL}
              pageState={props.pageState}
              issueURL={props.issueURL}
              alert={props.alert}
            />
          ) : props.pageState === 7 ? (
            <InputComponent
              handleReward={props.handleReward}
              pageState={props.pageState}
              reward={props.reward}
              handleCurrency={props.handleCurrency}
              currency={props.currency}
              alert={props.alert}
            />
          ) : props.pageState === 8 ? (
            <OptionComponent
              handleCommunityChoice={props.handleCommunityChoice}
              pageState={props.pageState}
              communityOption={props.communityOption}
              alert={props.alert}
            />
          ) : props.pageState === 9 ? (
            <InputComponent
              handleCommunityReward={props.handleCommunityReward}
              pageState={props.pageState}
              communityOption={props.communityOption}
              communityReward={props.communityReward}
              handleCurrency={props.handleCurrency}
              currency={props.currency}
              alert={props.alert}
            />
          ) : props.pageState === 10 ? (
            <InputComponent
              handleTerms={props.handleTerms}
              pageState={props.pageState}
              terms={props.terms}
              walletAddress={props.walletAddress}
              alert={props.alert}
            />
          ) : props.pageState === 8 ? (
            <DaysInputComponent
              handleTime={props.handleTime}
              pageState={props.pageState}
              time={props.time}
              alert={props.alert}
            />
          ) : null}
        </Grid>
      </Grid>

    </>
  );
}
