import { useState } from "react";
import { StakingContract_Address, StakingContract_Address_NFT } from "../../config";
import { ScaleLoader } from "react-spinners";
import { successAlert } from "./toastGroup";
import { Button, Grid } from "@mui/material";

export default function UnNFTCard({
    id,
    nftName,
    tokenId,
    signerAddress,
    updatePage,
    contract,
    contract_nft
}) {
    const [loading, setLoading] = useState(false)

    const onStake = async () => {
        setLoading(false)
        try {
            const approve = await contract_nft.approve(StakingContract_Address, id)
            await approve.wait();
            const stake = await contract.callStakeToken(StakingContract_Address_NFT, id)
            await stake.wait();
            successAlert("Staking is successful.")
            updatePage(signerAddress)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="nft-card">
            <div className="media">
                {/* eslint-disable-next-line */}
                <img
                    src="https://lh3.googleusercontent.com/CUw9Pm2OdYAAUJuqIyKwOEOJKZL11Ui8jC2oqYFEBIj6OhJwi3ayI0kzKA4tZ6mhUQvAkFyov1xxG-ju0PnRNQQVG_eYG3Y8tn-mmlQ=w600"
                    alt=""
                />
            </div>
            <div className="card-action">
                <button className="btn-primary">UNSTAKE</button>
                <button className="btn-primary">CLAIM</button>
            </div>
        </div>
    )
}
//after 
