import { useEffect, useState } from "react";
import { StakingContract_Address, StakingContract_Address_NFT } from "../../config";
import { ScaleLoader } from "react-spinners";
import { successAlert } from "./toastGroup";
import { Button, Grid } from "@mui/material";
import { PageLoading } from "./Loading";

export default function NFTCard({
    id,
    nftName,
    tokenId,
    signerAddress,
    updatePage,
    contract,
    contract_nft
}) {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const getNftDetail = async () => {
        const uri = await contract_nft?.tokenURI(tokenId);
        console.log(uri);
        await fetch(uri)
            .then(resp =>
                resp.json()
            ).catch((e) => {
                console.log(e);
            }).then((json) => {
                setImage(json?.image)
            })
    }
    const onStake = async () => {
        setLoading(true);
        try {
            const approved = await contract_nft.isApprovedForAll(signerAddress, StakingContract_Address);
            console.log(approved, "approved")
            if (!approved) {
                const approve = await contract_nft.setApprovalForAll(StakingContract_Address, true)
                await approve.wait();
            }
            const stake = await contract.callStakeToken(StakingContract_Address_NFT, [id])
            await stake.wait();
            successAlert("Staking is successful.")
            updatePage(signerAddress)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getNftDetail()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="nft-card">
            {loading ?
                <div className="card-loading">
                    <PageLoading />
                </div>
                :
                <>
                    <div className="media">
                        {image === "" ?
                            <span className="empty-image empty-image-skeleton"></span>
                            :
                            // eslint-disable-next-line
                            <img
                                src={image}
                                alt=""
                            />
                        }
                    </div>
                    <div className="card-action">
                        <button className="btn-primary" onClick={onStake}>STAKE</button>
                    </div>
                </>
            }
        </div>
    )
}
//after 
