import { useEffect, useState } from "react";
import { StakingContract_Address, StakingContract_Address_NFT } from "../../config";
import { ScaleLoader } from "react-spinners";
import { successAlert } from "./toastGroup";
import { PageLoading } from "./Loading";

export default function UnNFTCard({
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
        await fetch(uri)
            .then(resp =>
                resp.json()
            ).catch((e) => {
                console.log(e);
            }).then((json) => {
                setImage(json?.image)
            })
    }

    const onUnStake = async () => {
        setLoading(true);
        try {
            const unstake = await contract.unStake([id])
            await unstake.wait();
            successAlert("Unstaking is successful.")
            updatePage(signerAddress)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
    }

    const onClaim = async () => {
        setLoading(true);
        try {
            const unstake = await contract.claimReward([id])
            await unstake.wait();
            successAlert("Claiming is successful.")
            updatePage(signerAddress)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getNftDetail();
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
                        <button className="btn-primary" onClick={onUnStake}>UNSTAKE</button>
                        <button className="btn-primary" onClick={onClaim}>CLAIM</button>
                    </div>
                </>
            }
        </div>
    )
}
//after 
