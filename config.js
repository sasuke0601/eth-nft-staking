export const CHAIN_ID = 56;
export const StakingContract_Address = '0xb7ff9fff8af755470146c675ceb255a569c82f5a';
export const StakingContract_Address_NFT = '0x89bd6e2304e431B5BF9a999f99D7912e68a9f5ec';
export const SMARTCONTRACT_ADDRESS_ERC20 = '0x6A73A99fAC60c265863307c5A40abf32F0a040aC';
export const NETWORK = "Smart Chain";

export const SITE_ERROR = [
	"The wrong network, please switch to the Ethereum Rinkeby network.",
	"You need MetaMask to interact with this site!"
]

export const StakingContract_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "_tokenID",
				"type": "uint256[]"
			}
		],
		"name": "callStakeToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakingId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "staker",
				"type": "address"
			}
		],
		"name": "checkStake",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "staker",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "releaseTime",
						"type": "uint256"
					},
					{
						"internalType": "enum StakeNFT.StakingStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "StakingId",
						"type": "uint256"
					}
				],
				"internalType": "struct StakeNFT.Staking",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "stakingId",
				"type": "uint256[]"
			}
		],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdd",
				"type": "address"
			}
		],
		"name": "setNewAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "setRewardRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "token_id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "enum StakeNFT.StakingStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StakingId",
				"type": "uint256"
			}
		],
		"name": "tokenCancelComplete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "token_id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "enum StakeNFT.StakingStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StakingId",
				"type": "uint256"
			}
		],
		"name": "tokenClaimComplete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "token_id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "enum StakeNFT.StakingStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StakingId",
				"type": "uint256"
			}
		],
		"name": "tokenClaimStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "staker",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "token_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum StakeNFT.StakingStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StakingId",
				"type": "uint256"
			}
		],
		"name": "tokenStaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "stakingId",
				"type": "uint256[]"
			}
		],
		"name": "unStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakingId",
				"type": "uint256"
			}
		],
		"name": "viewStake",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "staker",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "releaseTime",
						"type": "uint256"
					},
					{
						"internalType": "enum StakeNFT.StakingStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "StakingId",
						"type": "uint256"
					}
				],
				"internalType": "struct StakeNFT.Staking",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const SMARCONTRACT_INI_ABI = [
	{
	  "inputs": [],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "approved",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "bool",
		  "name": "approved",
		  "type": "bool"
		}
	  ],
	  "name": "ApprovalForAll",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "previousOwner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "OwnershipTransferred",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "cost",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "getApproved",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "hiddenMetadataUri",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		}
	  ],
	  "name": "isApprovedForAll",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "maxMintAmountPerTx",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "maxSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_mintAmount",
		  "type": "uint256"
		}
	  ],
	  "name": "mint",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_mintAmount",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "_receiver",
		  "type": "address"
		}
	  ],
	  "name": "mintForAddress",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "name",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "owner",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "ownerOf",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "paused",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "revealed",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		},
		{
		  "internalType": "bytes",
		  "name": "_data",
		  "type": "bytes"
		}
	  ],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "internalType": "bool",
		  "name": "approved",
		  "type": "bool"
		}
	  ],
	  "name": "setApprovalForAll",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_cost",
		  "type": "uint256"
		}
	  ],
	  "name": "setCost",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_hiddenMetadataUri",
		  "type": "string"
		}
	  ],
	  "name": "setHiddenMetadataUri",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_maxMintAmountPerTx",
		  "type": "uint256"
		}
	  ],
	  "name": "setMaxMintAmountPerTx",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "bool",
		  "name": "_state",
		  "type": "bool"
		}
	  ],
	  "name": "setPaused",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "bool",
		  "name": "_state",
		  "type": "bool"
		}
	  ],
	  "name": "setRevealed",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_uriPrefix",
		  "type": "string"
		}
	  ],
	  "name": "setUriPrefix",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_uriSuffix",
		  "type": "string"
		}
	  ],
	  "name": "setUriSuffix",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "bytes4",
		  "name": "interfaceId",
		  "type": "bytes4"
		}
	  ],
	  "name": "supportsInterface",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "tokenURI",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "tokenId",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "uriPrefix",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "uriSuffix",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_owner",
		  "type": "address"
		}
	  ],
	  "name": "walletOfOwner",
	  "outputs": [
		{
		  "internalType": "uint256[]",
		  "name": "",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "withdraw",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]

export const SMARTCONTRACT_ABI_ERC20 = [
	{
	  "inputs": [],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "bool",
		  "name": "isExcluded",
		  "type": "bool"
		}
	  ],
	  "name": "ExcludeFromFees",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address[]",
		  "name": "accounts",
		  "type": "address[]"
		},
		{
		  "indexed": false,
		  "internalType": "bool",
		  "name": "isExcluded",
		  "type": "bool"
		}
	  ],
	  "name": "ExcludeMultipleAccountsFromFees",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "uint256",
		  "name": "newValue",
		  "type": "uint256"
		},
		{
		  "indexed": true,
		  "internalType": "uint256",
		  "name": "oldValue",
		  "type": "uint256"
		}
	  ],
	  "name": "GasForProcessingUpdated",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newLiquidityWallet",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "oldLiquidityWallet",
		  "type": "address"
		}
	  ],
	  "name": "LiquidityWalletUpdated",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "previousOwner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "OwnershipTransferred",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "iterations",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "claims",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "lastProcessedIndex",
		  "type": "uint256"
		},
		{
		  "indexed": true,
		  "internalType": "bool",
		  "name": "automatic",
		  "type": "bool"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "gas",
		  "type": "uint256"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "processor",
		  "type": "address"
		}
	  ],
	  "name": "ProcessedDividendTracker",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "tokensSwapped",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "SendDividends",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "pair",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "bool",
		  "name": "value",
		  "type": "bool"
		}
	  ],
	  "name": "SetAutomatedMarketMakerPair",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "tokensSwapped",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "ethReceived",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "tokensIntoLiqudity",
		  "type": "uint256"
		}
	  ],
	  "name": "SwapAndLiquify",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newAddress",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "oldAddress",
		  "type": "address"
		}
	  ],
	  "name": "UpdateDividendTracker",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newAddress",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "oldAddress",
		  "type": "address"
		}
	  ],
	  "name": "UpdateUniswapV2Router",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "_isBlacklisted",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "_marketingWalletAddress",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		}
	  ],
	  "name": "allowance",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "automatedMarketMakerPairs",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "internalType": "bool",
		  "name": "value",
		  "type": "bool"
		}
	  ],
	  "name": "blacklistAddress",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "claim",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "decimals",
	  "outputs": [
		{
		  "internalType": "uint8",
		  "name": "",
		  "type": "uint8"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "subtractedValue",
		  "type": "uint256"
		}
	  ],
	  "name": "decreaseAllowance",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "dividendTokenBalanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "dividendTracker",
	  "outputs": [
		{
		  "internalType": "contract BABYTOKENDividendTracker",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "excludeFromDividends",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "internalType": "bool",
		  "name": "excluded",
		  "type": "bool"
		}
	  ],
	  "name": "excludeFromFees",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address[]",
		  "name": "accounts",
		  "type": "address[]"
		},
		{
		  "internalType": "bool",
		  "name": "excluded",
		  "type": "bool"
		}
	  ],
	  "name": "excludeMultipleAccountsFromFees",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "gasForProcessing",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "getAccountDividendsInfo",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		},
		{
		  "internalType": "int256",
		  "name": "",
		  "type": "int256"
		},
		{
		  "internalType": "int256",
		  "name": "",
		  "type": "int256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "index",
		  "type": "uint256"
		}
	  ],
	  "name": "getAccountDividendsInfoAtIndex",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		},
		{
		  "internalType": "int256",
		  "name": "",
		  "type": "int256"
		},
		{
		  "internalType": "int256",
		  "name": "",
		  "type": "int256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getClaimWait",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getLastProcessedIndex",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getNumberOfDividendTokenHolders",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getTotalDividendsDistributed",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "implementation",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "addedValue",
		  "type": "uint256"
		}
	  ],
	  "name": "increaseAllowance",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address[4]",
		  "name": "addrs",
		  "type": "address[4]"
		},
		{
		  "internalType": "string",
		  "name": "name_",
		  "type": "string"
		},
		{
		  "internalType": "string",
		  "name": "symbol_",
		  "type": "string"
		},
		{
		  "internalType": "uint256",
		  "name": "totalSupply_",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "tokenRewardsFee_",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "liquidityFee_",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "marketingFee_",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "minimumTokenBalanceForDividends_",
		  "type": "uint256"
		}
	  ],
	  "name": "initialize",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "isExcludedFromFees",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "liquidityFee",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "marketingFee",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "name",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "owner",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "gas",
		  "type": "uint256"
		}
	  ],
	  "name": "processDividendTracker",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "rewardToken",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "pair",
		  "type": "address"
		},
		{
		  "internalType": "bool",
		  "name": "value",
		  "type": "bool"
		}
	  ],
	  "name": "setAutomatedMarketMakerPair",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "setLiquiditFee",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "setMarketingFee",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address payable",
		  "name": "wallet",
		  "type": "address"
		}
	  ],
	  "name": "setMarketingWallet",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "setSwapTokensAtAmount",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "setTokenRewardsFee",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "swapTokensAtAmount",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "tokenRewardsFee",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "totalFees",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "recipient",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "transfer",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "sender",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "recipient",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "uniswapV2Pair",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "uniswapV2Router",
	  "outputs": [
		{
		  "internalType": "contract IUniswapV2Router02",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "claimWait",
		  "type": "uint256"
		}
	  ],
	  "name": "updateClaimWait",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newAddress",
		  "type": "address"
		}
	  ],
	  "name": "updateDividendTracker",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "newValue",
		  "type": "uint256"
		}
	  ],
	  "name": "updateGasForProcessing",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newAddress",
		  "type": "address"
		}
	  ],
	  "name": "updateUniswapV2Router",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		}
	  ],
	  "name": "withdrawableDividendOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "stateMutability": "payable",
	  "type": "receive"
	}
  ]
