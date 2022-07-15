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
    contract_nft,
}) {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const [reward, setReward] = useState(0);

    const getNftDetail = async () => {
        const uri = await contract_nft?.tokenURI(tokenId);
        await fetch(uri)
            .then(resp =>
                resp.json()
            ).catch((e) => {
                console.log(e);
            }).then((json) => {
                setImage(json?.image)
            });

    }

    const getReward = async () => {
        const now = new Date().getTime() / 1000;
        const rate = parseFloat(await contract.getRewardRate()) / Math.pow(10, 18);
        const data = await contract.viewStake(id);
        const reward = (now - parseFloat(data.releaseTime)) * rate / (24 * 60 * 60) / 25;
        setReward(reward);
    }

    const showReward = () => {
        getReward();
        setInterval(() => {
            getReward();
        }, 10000);
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
        showReward();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="nft-card">
            <div className="reward">
                <p>Reward:</p>
                <span>{parseFloat(reward).toLocaleString()} DUNK</span>
            </div>
            {loading &&
                <div className="card-loading">
                    <PageLoading />
                </div>
            }
            <div className="media">
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
                <button className="btn-primary" onClick={onUnStake}>UNSTAKE</button>
                <button className="btn-primary" onClick={onClaim}>CLAIM</button>
            </div>
        </div>
    )
}
//after
