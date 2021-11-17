import React, { useState, useEffect, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { port } from "../../../../config/config";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import "../../profilePageCss.css";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { useRecoilValue } from "recoil";
import { contract as contractAtom,walletAddress as walletAddressAtom} from "../../../../recoil/atoms";
export default function ResultsDialog(props) {
  const [open, setOpen] = useState(props.open);
  // const [solutions, setSolutions] = useState([]);
  const [ disable,setDisable] = useState(false);
  const contractPromise = useRecoilValue(contractAtom);
  let contract;
  var promise = Promise.resolve(contractPromise);
  promise.then(function (v) {
    contract = v;
  });
  const walletAddress = useRecoilValue(walletAddressAtom);
  const [hasEscrowInitiated, setHasEscrowInitiated] = useState(false);
  const solutions = [
    {
      githubLink: "https://github.com/avolabs-io/nft-auction",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeicw3tw2kfe4ojz3yfs5o543gpd2y42p2gbe2frzeice57c6rjk63u",
      workplanGithubId: "mishramonalisha76",
    },

    {
      githubLink: "https://github.com/reactjs/react-basic",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeicw3tw2kfe4ojz3yfs5o543gpd2y42p2gbe2frzeice57c6rjk63u",
      workplanGithubId: "mishramonalisha76",
    },
    {
      githubLink: "https://github.com/recrsn/http-basket",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeieymslgq4t7ub7owklx4xyuootoodp7oykyj5lvzpiqd5w2lpvzea",
      workplanGithubId: "mishramonalisha76",
    },
    {
      githubLink: "https://github.com/recrsn/http-basket",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeieymslgq4t7ub7owklx4xyuootoodp7oykyj5lvzpiqd5w2lpvzea",
      workplanGithubId: "mishramonalisha76",
    },
    {
      githubLink: "https://github.com/recrsn/http-basket",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeieymslgq4t7ub7owklx4xyuootoodp7oykyj5lvzpiqd5w2lpvzea",
      workplanGithubId: "mishramonalisha76",
    },
    {
      githubLink: "https://github.com/recrsn/http-basket",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeieymslgq4t7ub7owklx4xyuootoodp7oykyj5lvzpiqd5w2lpvzea",
      workplanGithubId: "mishramonalisha76",
    },

    {
      githubLink: "https://github.com/recrsn/http-basket",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeieymslgq4t7ub7owklx4xyuootoodp7oykyj5lvzpiqd5w2lpvzea",
      workplanGithubId: "mishramonalisha76",
    },

    {
      githubLink: "https://github.com/Tejaaswini/Pragma",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeicw3tw2kfe4ojz3yfs5o543gpd2y42p2gbe2frzeice57c6rjk63u",
      workplanGithubId: "mishramonalisha76",
    },

    {
      githubLink: "https://github.com/Tejaaswini/covid_tracker",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeicw3tw2kfe4ojz3yfs5o543gpd2y42p2gbe2frzeice57c6rjk63u",
      workplanGithubId: "mishramonalisha76",
      escrowId: "882jsj",
    },

    {
      githubLink: "https://github.com/Tejaaswini/artfolio",
      finalVoteScore: 0,
      solverGithubId: "rajashree23",
      workplan: "bafybeicw3tw2kfe4ojz3yfs5o543gpd2y42p2gbe2frzeice57c6rjk63u",
      workplanGithubId: "mishramonalisha76",
    },
  ];
  useEffect(() => {
    //   axios.post(port + "user/view-results", { _id: props._id}).then((response) => {
    //     setSolutions(response.data);
    // if (solutions.some(e => e.escrowId)) {
    //   setHasEscrowInitiated(true);
    // }
    //   });
  });

  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const handleClose = () => {
    setOpen(false);
    props.handleDialogClose(false);
  };
  const handleSelectedSolution = (index) => {
    setSelectedSolutionIndex(index);
    console.log(selectedSolutionIndex);
  };
  console.log(props.publicAddress)
  //change selected solver github id
  const handleEscrowInitiation = () => {
    // setDisable(true);
    // return Promise.resolve()
    //   .then(async function () {
    //     return await contract.methods
    //       .initEscrow(walletAddress,props.questionUrl,solutions[selectedSolutionIndex].solverGithubId) 
    //       .send({ from: walletAddress }); //questionhash and solver address from props
    //   })
    //   .then(async function () {
    //     return axios
    //       .post(port + "escrow/init", {
    //         _id: solutions[selectedSolutionIndex].githubLink,
    //         _id:props._id,
    //         userId:solutions[selectedSolutionIndex].solverGithubId
    //       })
    //       .then((response) => {
    //         console.log(response.status);
    //         handleClose(false);
    //         props.handleDialogClose(false);
    //       })
    //       .catch((err) => {
    //         setAlert((prevState) => ({
    //           ...prevState,
    //           open: true,
    //           errorMessage: "Error",
    //         }));
    //         handleClose(false);
    //         props.handleDialogClose(false);
    //       });
    //   });
  };
 
  return (
    <>
      <Dialog
        aria-labelledby="simple-dialog-title"
        maxWidth="lg"
        className="results-dialog"
        open={open}
        BackdropProps={{
          classes: {
            root: "dialog-blur",
          },
        }}
        onBackdropClick={handleClose}
      >
        <ClearRoundedIcon
          style={{
            color: "white",
            marginLeft: "64vw",
            marginTop: "3vh",
            cursor: "pointer",
          }}
          onClick={() => {
            handleClose();
          }}
        />

        <Grid container>
          <Grid item md={4} xs={12}>
            <LeftSide
              solutions={solutions}
              handleSelectedSolution={(index) => handleSelectedSolution(index)}
              selectedSolutionIndex={selectedSolutionIndex}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <RightSide
              selectedSolution={solutions[selectedSolutionIndex]}
              handleEscrowInitiation={handleEscrowInitiation}
              isCommunityApprovedSolution={props.isCommunityApprovedSolution}
              hasEscrowInitiated={hasEscrowInitiated}
              publicAddress={props.publicAddress}
              disable = {disable}
            />
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
