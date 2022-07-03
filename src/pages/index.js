import React, { useEffect, useState } from "react";
import Head from "next/head"
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Web3 from "web3"
import Web3Modal from "web3modal"
import { ethers, providers } from "ethers"
import { providerOptions } from "../contracts/utils"
import { CHAIN_ID, NETWORK, SITE_ERROR, SMARCONTRACT_INI_ABI, SMARTCONTRACT_ABI_ERC20, SMARTCONTRACT_ADDRESS_ERC20, StakingContract_ABI, StakingContract_Address, StakingContract_Address_NFT } from "../../config"
import NFTCard from "../components/NFTCard";
import { errorAlertCenter } from "../components/toastGroup";
import { Container, Grid } from "@mui/material";
import UnNFTCard from "../components/UnNFTCard";

let web3Modal = undefined
let contract = undefined
let contract_20 = undefined
let contract_nft = undefined

export default function Home() {

    const [connected, setConnected] = useState(false)
    const [signerAddress, setSignerAddress] = useState("")
    const [unstakedNFTs, setUnstakedNFTs] = useState()
    const [stakedNFTs, setStakedNFTs] = useState()
    const [loading, setLoading] = useState(false)
    const [tab, setTab] = useState("unstaked")
    const [totalStaked, setTotalStaked] = useState(0)
    const [totalValueLocked, setTotalValueLocked] = useState(0)
    const [nftName, setNftName] = useState("")

    const connectWallet = async () => {
        if (await checkNetwork()) {
            // setLoading(true)
            web3Modal = new Web3Modal({
                network: NETWORK, // optional
                cacheProvider: true,
                providerOptions, // required
            })
            const provider = await web3Modal.connect()
            const web3Provider = new providers.Web3Provider(provider)

            // const signer = web3Provider.getSigner()
            // const address = await signer.getAddress()

            // setConnected(true)
            // setSignerAddress(address)

            // contract = new ethers.Contract(
            //   StakingContract_Address,
            //   StakingContract_ABI,
            //   signer
            // )

            // contract_nft = new ethers.Contract(
            //   StakingContract_Address_NFT,
            //   SMARCONTRACT_INI_ABI,
            //   signer
            // )

            // const name = await contract_nft.name()
            // setNftName(name)

            // contract_20 = new ethers.Contract(
            //   SMARTCONTRACT_ADDRESS_ERC20,
            //   SMARTCONTRACT_ABI_ERC20,
            //   signer
            // )

            /////////////////
            // updatePage(address)
            /////////////////

            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                console.log(accounts[0], '--------------')
            })
        }
    }

    const updatePage = async (address) => {
        setLoading(true)
        let unstaked = []
        let staked = []
        const balance = await contract_nft.balanceOf(address)
        const totalSupply = await contract.getTotalStaked()
        let total = 0
        const valueLocked = await contract_20.balanceOf(StakingContract_Address)
        setTotalValueLocked(valueLocked / Math.pow(10, 18))
        try {
            let promise_index = [];
            for (let i = 0; i < parseInt(balance); i++) {
                promise_index.push(contract_nft.tokenOfOwnerByIndex(address, i))
            }
            const indexData = await Promise.all(promise_index);
            for (let i = 0; i < indexData.length; i++) {
                unstaked.push(
                    {
                        id: parseInt(indexData[i]),
                        tokenId: parseInt(indexData[i])
                    }
                )
            }

            let promise = [];
            for (let i = 0; i < parseInt(totalSupply); i++) {
                promise.push(contract.viewStake(i))
            }
            const data = await Promise.all(promise)
            for (let i = 0; i < data.length; i++) {
                if (data[i].status === 1) {
                    console.log(i, "pool ID--------------------------");
                }
                if (data[i].status === 0) {
                    total++
                    if (data[i].staker.toLowerCase() === address.toLowerCase()) {
                        staked.push(
                            {
                                id: i,
                                tokenId: data[i].tokenId.toNumber(),
                                status: data[i].status
                            }
                        )
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
        setUnstakedNFTs(unstaked)
        setStakedNFTs(staked)
        setTotalStaked(total)
        setLoading(false)
    }

    const checkNetwork = async () => {
        const web3 = new Web3(Web3.givenProvider)
        const chainId = await web3.eth.getChainId()
        if (chainId === CHAIN_ID) {
            return true
        } else {
            errorAlertCenter(SITE_ERROR[0])
            return false
        }
    }

    useEffect(() => {
        async function fetchData() {
            if (typeof window.ethereum !== 'undefined') {
                if (await checkNetwork()) {
                    await connectWallet()
                    ethereum.on('accountsChanged', function (accounts) {
                        window.location.reload()
                    })
                    if (ethereum.selectedAddress !== null) {
                        setSignerAddress(ethereum.selectedAddress)
                        setConnected(true)
                    }
                    ethereum.on('chainChanged', (chainId) => {
                        checkNetwork()
                    })
                }
            } else {
                errorAlertCenter(SITE_ERROR[1])
            }
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Head>
                <title>Seattle SuperKongs Staking</title>
                <meta name="description" content="Seattle SuperKongs Staking" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header
                    signerAddress={signerAddress}
                    connectWallet={() => connectWallet()}
                    connected={connected}
                />
                <div className="">
                    <Container maxWidth="lg">
                        <h1 className="title">
                            Stake Your NFT
                        </h1>
                    </Container>
                </div>
                <Container>
                    <div className="main-page">
                        <div className="title-bar">
                            <h2>Total staked NFT: {totalStaked}</h2>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div className="nft-box">
                                    <div className="box-header">
                                        <h3>Your NFT (3)</h3>
                                        <div className="box-control">
                                            <button className="btn-second">
                                                STAKE ALL
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-content">
                                            <NFTCard />
                                            <NFTCard />
                                            <NFTCard />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="nft-box">
                                    <div className="box-header">
                                        <h3>Staked NFT (3)</h3>
                                        <div className="box-control">
                                            <button className="btn-second">
                                                UNSTAKE ALL
                                            </button>
                                            <button className="btn-second">
                                                CLAIM ALL
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-content">
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                            <UnNFTCard />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>
            {/* eslint-disable-next-line */}
            <img
                src="/kongbackground.gif"
                className="background"
                alt=""
            />
        </>
    )
}
