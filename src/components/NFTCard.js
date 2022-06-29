import { Button } from "@material-ui/core"
import { useState } from "react"
import { StakingContract_Address, StakingContract_Address_NFT } from "../../config"
import { ScaleLoader } from "react-spinners"
import { successAlert } from "./toastGroup"

export default function NFTCard({
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
            <div className="card-content">
                <p>{`${nftName} #${tokenId}`}</p>
                <Button className="btn-stake" onClick={() => onStake()}>
                    Stake
                </Button>
            </div>
            {loading &&
                <div className="card-loading">
                    <ScaleLoader size={40} color="#394529" />
                </div>
            }
        </div>
    )
}
//after 
