import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import fleekStorage from "@fleekhq/fleek-storage-js";
import axios from "axios";
import CircularIndeterminate from "../../loader/loader";
import SimpleAlerts from "../../alert/alert";
import Grid from "@material-ui/core/Grid";
import "../questionPage.css";
import { port } from "../../../config/config";
import { useRecoilValue } from "recoil";
import { username as usernameAtom} from "../../../recoil/atoms";

export default function WorkplanSubmit(props) {
  const [open, setOpen] = useState(props.open);
  const [buffer, setBuffer] = useState("");
  const username = useRecoilValue(usernameAtom);
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    errorMessage: "",
    severity: "error",
  });
  const handleClose = () => {
    setOpen(false);
    props.handleDialogClose(false);
  };
  const captureFile = (e) => {
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  const handleSubmit = async () => {
    setLoader(true);
    const timestamp = new Date().getTime();
    if (!buffer) {
      setAlert((prevState) => ({
        ...prevState,
        open: true,
        errorMessage: "No file selected",
      }));
      setLoader(false);
    }
    const uploadedFile = await fleekStorage.upload({
      apiKey: process.env.REACT_APP_API_KEY,
      apiSecret: process.env.REACT_APP_API_SECRET,
      key: username + timestamp,
      data: buffer,
    });
    axios
      .post(port + "workplan/save", {
        githubId: username,
        workplan: uploadedFile.hash,
        questionId: props.questionId,
      })
      .then((response) => {
        if (response.status === 201) {
          props.handleFetch();
          setOpen(false);
          setLoader(false);
          props.handleDialogClose(false);
        }
      })
      .catch((err) => {
        setAlert((prevState) => ({
          ...prevState,
          open: true,
          errorMessage: "Workplan already exists. Submit a different workplan",
        }));
        setLoader(false);
      });
  };

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" maxWidth="md" className="workplan-dialog" open={open}>
        <p class="dialog-title">Submit Workplan</p>
        <input type="file" onChange={(e) => captureFile(e)} />
        <Grid container className="workplan-dialog-button-grid "
        >
          <Grid item md={6}>
            <Button class="dialog-button" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
          <Grid item md={6}>
            <Button class="dialog-button" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>

        {alert.open ? (
          <SimpleAlerts
            severity={alert.severity}
            message={alert.errorMessage}
          />
        ) : null}
      </Dialog>
      {/* {loader ? <LinearIndeterminate /> : null}  */}
    </>
  );
}
