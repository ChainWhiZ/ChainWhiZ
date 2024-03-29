import Web3 from "web3";
import { chainwhiz, erc20 } from "../artifacts/chainwhizAbi";

let web3;

export const initiliaseWeb3 = async () => {
  if (window.ethereum) {
    // Modern DApp browsers
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access
      alert("User denied");
    }
  } else if (window.web3) {
    // Legacy dapp browsers
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // Non-dapp browsers
    alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
  // web3.eth.handleRevert = true
};

export const checkChain = async () => {
  if (!(web3.givenProvider.networkVersion == process.env.REACT_APP_CHAIN_ID)) {
    window.alert("Please switch to Polygon Mainnet");
    return false
  }

  return true;
}

export const fetchAccount = async (callback) => {
  // web3.eth.handleRevert = true
  web3.eth.getAccounts((error, result) => {
    if (error) {
      alert("Can't fetch account");
    } else {
      callback(result);
    }
  });
};

export const fetchBalance =  async (walletAddress) => {
  initiliaseWeb3();
  const balance = await web3.eth.getBalance(walletAddress);
  return (web3.utils.fromWei(balance.toString(), 'ether'));
};

export const initiliaseContract = async () => {
  let contract = new web3.eth.Contract(
    chainwhiz,
    //"0x842Edf7aB0086c3B96Deb9f461F7DD5635841e69" //testnet
    process.env.REACT_APP_CHAINWHIZ_CORE_ADDRESS//prod mainnet
  );
  return contract;
};
export const initiliaseDevContract = async () => {
  let contract = new web3.eth.Contract(
    erc20,
    process.env.REACT_APP_DEV_TOKEN_ADDRESS
  );

  return contract;
};
export const initiliaseBetsContract = async () => {
  let contract = new web3.eth.Contract(
    erc20,
    process.env.REACT_APP_BETS_TOKEN_ADDRESS
  );

  return contract;
};

export const generateAndVerifyBountySignature = async (title, bountyUrl, evalutionCriteria, bountyDescription, walletAddress) => {
  // await fetchAccount(async function (result) {
    // console.log(result)
    const data = {
      "walletAddress": walletAddress,
      "title": title,
      "evalution criteria": evalutionCriteria,
      "bounty url": bountyUrl,
      "bounty description": bountyDescription
    }
    const signature = await web3.eth.personal.sign(web3.utils.sha3(data.toString()), walletAddress);
    const signer = await web3.eth.personal.ecRecover(web3.utils.sha3(data.toString()), signature);
    console.log(signer)
    console.log(walletAddress)
    if(signer.toLowerCase() == walletAddress.toLowerCase())
      return {status:true, signature};
    else
      return {status:false, signature};
  // })


}

export const generateAndVerifySolutionSignature = async (publisherAddress, bountyUrl,solutionLink, walletAddress) => {
  // await fetchAccount(async function (result) {
    // console.log(result)
    const data = {
      "Wallet Address": walletAddress,
      "Publisher Address": publisherAddress,
      "Bounty url": bountyUrl,
      "Solution link": solutionLink
    }
    const signature = await web3.eth.personal.sign(web3.utils.sha3(data.toString()), walletAddress);
    const signer = await web3.eth.personal.ecRecover(web3.utils.sha3(data.toString()), signature);
    console.log(signer)
    console.log(walletAddress)
    if(signer.toLowerCase() == walletAddress.toLowerCase())
      return {status:true, signature};
    else
      return {status:false, signature};
  // })


}

export const generateAndVerifyBountyEndSignature = async (bountyUrl, walletAddress) => {

    const data = {
      "walletAddress": walletAddress,
      "bounty url": bountyUrl,
      "message":"end",
    }
    const signature = await web3.eth.personal.sign(web3.utils.sha3(data.toString()), walletAddress);
    const signer = await web3.eth.personal.ecRecover(web3.utils.sha3(data.toString()), signature);
    console.log(signer)
    console.log(walletAddress)
    if(signer.toLowerCase() == walletAddress.toLowerCase())
      return {status:true, signature};
    else
      return {status:false, signature};

}

export const generateAndVerifySolutionSelectionSignature = async (solverAddress, questionId, walletAddress,solutionLink) => {
    const data = {
      "Wallet Address": walletAddress,
      "Question Id": questionId,
      "Solution Link": solutionLink,
      "Solver Address": solverAddress,
    }
    const signature = await web3.eth.personal.sign(web3.utils.sha3(data.toString()), walletAddress);
    const signer = await web3.eth.personal.ecRecover(web3.utils.sha3(data.toString()), signature);
    console.log(signer)
    console.log(walletAddress)
    if(signer.toLowerCase() == walletAddress.toLowerCase())
      return {status:true, signature};
    else
      return {status:false, signature};

}

