export const chainwhiz = [{"inputs":[{"internalType":"address","name":"_ChainwhizAdmin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"ActivateContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"publisher","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"},{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"string","name":"evaluationCriteria","type":"string"}],"name":"AdditionalBountyDetail","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"publisher","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"},{"indexed":false,"internalType":"string","name":"bountyTitle","type":"string"},{"indexed":false,"internalType":"string[]","name":"tags","type":"string[]"}],"name":"BountyPosted","type":"event"},{"anonymous":false,"inputs":[],"name":"DeactivateContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"ETHGateWayAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"publisher","type":"address"},{"indexed":false,"internalType":"address","name":"solver","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"},{"indexed":false,"internalType":"string","name":"solutionLink","type":"string"}],"name":"EscorwInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"publisher","type":"address"},{"indexed":false,"internalType":"address","name":"solver","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"},{"indexed":false,"internalType":"string","name":"solutionLink","type":"string"}],"name":"EscrowTransferOwnership","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolProviderAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"solutionLink","type":"string"},{"indexed":false,"internalType":"address","name":"publisherAddress","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"}],"name":"SolutionSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"publisher","type":"address"},{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"}],"name":"UnstakeAmountSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"bountyUrl","type":"string"},{"indexed":false,"internalType":"string","name":"solutionLink","type":"string"},{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"VoteStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"solutionLink","type":"string"},{"indexed":false,"internalType":"address","name":"voter","type":"address"}],"name":"VoterUnstaked","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ChainwhizAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ChainwhizTreasary","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_COMMUNITY_REWARD_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_REWARD_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAKE_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_COMMUNITY_REWARD_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_REWARD_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_STAKING_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aMaticAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aaveIncentiveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"bountyDetail","outputs":[{"internalType":"address","name":"publisher","type":"address"},{"internalType":"uint256","name":"solverRewardAmount","type":"uint256"},{"internalType":"uint256","name":"communityVoterRewardAmount","type":"uint256"},{"internalType":"uint256","name":"startSolveTime","type":"uint256"},{"internalType":"uint256","name":"endSolveTime","type":"uint256"},{"internalType":"uint256","name":"startVoteTime","type":"uint256"},{"internalType":"uint256","name":"endVoteTime","type":"uint256"},{"internalType":"bool","name":"isCommunityVote","type":"bool"},{"internalType":"enum ChainwhizCore.QuestionStatus","name":"questionStatus","type":"uint8"},{"internalType":"bool","name":"isUnstakeSet","type":"bool"},{"components":[{"internalType":"address","name":"solver","type":"address"},{"internalType":"string","name":"solutionLink","type":"string"},{"internalType":"uint256","name":"timeOfPosting","type":"uint256"},{"internalType":"address[]","name":"voterAddress","type":"address[]"},{"internalType":"uint256","name":"totalStakedAmount","type":"uint256"},{"internalType":"enum ChainwhizCore.EscrowStatus","name":"escrowStatus","type":"uint8"}],"internalType":"struct ChainwhizCore.Solution","name":"choosenSolution","type":"tuple"},{"internalType":"string","name":"tokenName","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"}],"name":"claimInterest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_publisher","type":"address"},{"internalType":"string","name":"_bountyUrl","type":"string"}],"name":"claimRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deactivateContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ethGateWayAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"publisher","type":"address"},{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"string","name":"_solutionLink","type":"string"}],"name":"initiateEscrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isContractActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lendingPoolProviderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_publisherAddress","type":"address"},{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"payBackPublisher","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bountyTitle","type":"string"},{"internalType":"string[]","name":"_tags","type":"string[]"},{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_evaluationCriteria","type":"string"},{"internalType":"uint256","name":"_solverRewardAmount","type":"uint256"},{"internalType":"uint256","name":"_communityVoterRewardAmount","type":"uint256"},{"internalType":"uint256","name":"_endSolverTime","type":"uint256"},{"internalType":"uint256","name":"_startVoteTime","type":"uint256"},{"internalType":"uint256","name":"_endVoteTime","type":"uint256"},{"internalType":"string","name":"_tokenName","type":"string"}],"name":"postBounty","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_solutionLink","type":"string"},{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"address","name":"_publisherAddress","type":"address"}],"name":"postSolution","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aaveIncentiveAddress","type":"address"}],"name":"setAaveIncentiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_approvalAmount","type":"uint256"}],"name":"setApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newChainwhizAdmin","type":"address"}],"name":"setChainwhizAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ethGateWayAddress","type":"address"}],"name":"setETHGatewayAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lendingPoolProviderAddress","type":"address"}],"name":"setLendingPoolProviderAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCommunityRewardAmount","type":"uint256"}],"name":"setMaximumCommunityRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRewardAmount","type":"uint256"}],"name":"setMaximumRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCommunityRewardAmount","type":"uint256"}],"name":"setMinimumCommunityRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRewardAmount","type":"uint256"}],"name":"setMinimumRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStakeAmount","type":"uint256"}],"name":"setMinimumStakeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardAddress","type":"address"}],"name":"setReawrdArrayAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setTokenDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"address","name":"_publisher","type":"address"},{"internalType":"string[]","name":"_solutionLinks","type":"string[]"},{"internalType":"address[]","name":"_voterAddress","type":"address[]"},{"internalType":"uint256[]","name":"_baseAmount","type":"uint256[]"},{"internalType":"uint256[]","name":"_rewardAmount","type":"uint256[]"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"setUnstakeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_aMaticAddress","type":"address"}],"name":"setaMaticAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"name":"solutionDetails","outputs":[{"internalType":"address","name":"solver","type":"address"},{"internalType":"string","name":"solutionLink","type":"string"},{"internalType":"uint256","name":"timeOfPosting","type":"uint256"},{"internalType":"uint256","name":"totalStakedAmount","type":"uint256"},{"internalType":"enum ChainwhizCore.EscrowStatus","name":"escrowStatus","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_bountyUrl","type":"string"},{"internalType":"address","name":"_publisherAddress","type":"address"},{"internalType":"string","name":"_solutionLink","type":"string"}],"name":"stakeVote","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenDetails","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_solutionLink","type":"string"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"name":"voteDetails","outputs":[{"internalType":"address","name":"voter","type":"address"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"uint256","name":"returnRewardAmount","type":"uint256"},{"internalType":"uint256","name":"returnBaseAmount","type":"uint256"},{"internalType":"string","name":"rewardToken","type":"string"},{"internalType":"bool","name":"isUnstake","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"withdrawFromTreasery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

export const erc20 = [
   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
         },
         {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
         },
         {
            indexed: false,
            internalType: "uint256",
            name: "_value",
            type: "uint256",
         },
      ],
      name: "Approval",
      type: "event",
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
         },
         { indexed: true, internalType: "address", name: "_to", type: "address" },
         {
            indexed: false,
            internalType: "uint256",
            name: "_value",
            type: "uint256",
         },
      ],
      name: "Transfer",
      type: "event",
   },
   {
      inputs: [
         { internalType: "address", name: "", type: "address" },
         { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [
         { internalType: "address", name: "_spender", type: "address" },
         { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
   },
   {
      inputs: [
         { internalType: "address", name: "_to", type: "address" },
         { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
   },
   {
      inputs: [
         { internalType: "address", name: "_from", type: "address" },
         { internalType: "address", name: "_to", type: "address" },
         { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
   },
];
