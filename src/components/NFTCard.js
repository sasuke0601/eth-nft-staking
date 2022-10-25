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
        // QmaKBC7tJPtgnYn3C5p8GRQcY9pRhxG3vrkto8N5kW5svA
        // QmeQPsbhb3wRX7XVD54yJcfGM4SnmeFaiaXLLESuyccpiE
        // above parametes are hardcoded it is more proper to take them from contract as uri
        // but contract uri  has to be reformatted to fetch data (add https and ipfs )
        // and image url too
        const url = `https://ipfs.io/ipfs/QmaKBC7tJPtgnYn3C5p8GRQcY9pRhxG3vrkto8N5kW5svA/${tokenId}.json`
        const imageUrl = `https://ipfs.io/ipfs/QmeQPsbhb3wRX7XVD54yJcfGM4SnmeFaiaXLLESuyccpiE/${tokenId}.png`
        setImage(imageUrl)
        //    await fetch(url)
        //    .then(resp =>
        //        resp.json()
        //    ).catch((e) => {
        //        console.log(e);
        //    }).then((json) => {
        //        console.log('response',json);
        //        setImage(json?.image) // image property is not suitable for img to, it should contains https
        //    })
    }

    const onStake = async () => {
        setLoading(true);
        try {
            const approved = await contract_nft.isApprovedForAll(signerAddress, StakingContract_Address);
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
            console.log(error.message)
        }
        setLoading(false)
    }
    useEffect(() => {
        getNftDetail()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="nft-card">
            <div className="media">
                {loading &&
                    <div className="card-loading">
                        <PageLoading />
                    </div>
                }
                {image === "" ?
                    <span className="empty-image empty-image-skeleton"></span>
                    :
                    // eslint-disable-next-line
                    <img
                        src={image}
                        alt=""
                        style={{ opacity: loading ? 0 : 1 }}
                    />
                }
            </div>
            <div className={loading ? "card-action is-loading" : "card-action"}>
                <button className="btn-primary" onClick={onStake}>STAKE</button>
            </div>
        </div>
    )
}
//after
