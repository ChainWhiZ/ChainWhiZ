import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./profilePageCss.css";
import axios from "axios";
import { port } from "../../config/config";
import { useRecoilValue } from "recoil";
import { walletAddress as walletAddressAtom } from "../../recoil/atoms";
import { Tooltip } from "@material-ui/core";
import { checkLength, shortenLength, copyTextToClipboard } from "../helper";
import Avatar from "../avatar/avatar";
import Background1 from "../../assets/backgrounds-01.jpg";
import Background2 from "../../assets/backgrounds-02.jpg";
import Background3 from "../../assets/backgrounds-03.jpg";
import CopyIcon from "../../assets/baseline_content_copy_white_24dp.png";

export default function Heading(props) {
  const walletAddress = useRecoilValue(walletAddressAtom);
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({
    open: false,
    errorMessage: "",
    severity: "error",
  });
  const randomBgNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  const Background = [Background1, Background2, Background3];
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    axios
      .post(port + "user/user-details", {
        address: walletAddress,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        setAlert((prevState) => ({
          ...prevState,
          open: true,
          errorMessage:
            "Couldn't fetch questions! Server-side issue. Sorry for the inconvenience",
        }));
      });
  }, []);

  const handleCopyClick = () => {
    copyTextToClipboard(walletAddress)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Grid item md={12} xs={12} className="profile-heading-grid">
        <img
          src={Background[randomBgNum]}
          alt="01"
          className="profile-heading-grid-img"
        />
      </Grid>
      <Grid item md={3}>
        <Avatar
          className="profile-account-icon"
          seed={walletAddress}
          scale={16}
          color="#003153"
        />
      </Grid>
      {data && Object.keys(data).length ? (
        <>
          <Grid item md={3} className="profile-details-bounty-heading-grid">
            <Tooltip
              title={data.bountyCount}
              disableHoverListener={!checkLength(data.bountyCount, 6)}
            >
              <p className="profile-details-bounty">{data.bountyCount}</p>
            </Tooltip>
            <p className="profile-details-bounty-heading">Bounties Posted</p>
          </Grid>
          <Grid item md={3} className="profile-details-bounty-heading-grid">
            <Tooltip
              title={data.solCount}
              disableHoverListener={!checkLength(data.solCount, 6)}
            >
              <p className="profile-details-bounty">
                {shortenLength(data.solCount, 6)}
              </p>
            </Tooltip>
            <p className="profile-details-bounty-heading">Bounties Solved</p>
          </Grid>
          <Grid item md={3} className="profile-details-bounty-heading-grid">
            {data.voterWeightage ? (
              <Tooltip
                title={data.voterWeightage}
                disableHoverListener={!checkLength(data.voterWeightage, 6)}
              >
                <p className="profile-details-bounty">
                  {shortenLength(data.voterWeightage, 6)}
                </p>
              </Tooltip>
            ) : (
              <p className="profile-details-bounty">0</p>
            )}

            <p className="profile-details-bounty-heading">Voter Weightage</p>
          </Grid>
        </>
      ) : null}
      <Grid
        item
        md={12}
        xs={12}
        className="profile-content-style profile-sub-info profile-bounty-username"
      >
        <p>
          {walletAddress}{" "}
          <span style={{fontSize:"0.8rem", cursor:"pointer"}}>
            {isCopied ? "Copied!" : <img onClick={handleCopyClick} src={CopyIcon} alt="copy" />}
          </span>
        </p>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        className="profile-content-style profile-sub-info"
      >
        <p>
          Chainwhiz is an open-source bounty marketplace connecting Web3
          protocols with contributors and communities. Solve bounties. Earn
          Crypto.
        </p>
      </Grid>
    </>
  );
}
