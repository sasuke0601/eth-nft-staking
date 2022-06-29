import { Button } from "@material-ui/core"
import { useState } from "react"
import { ScaleLoader } from "react-spinners"
import { successAlert } from "./toastGroup"

export default function UnStakeCard({
    id,
    tokenId,
    nftName,
    signerAddress,
    contract,
    status,
    updatePage
}) {
    const [loading, setLoading] = useState(false)

    const unStake = async () => {
        setLoading(false)
        try {
            const unstake = await contract.cancelStake(id)
            await unstake.wait();
            successAlert("Unstaking is successful.")
            updatePage(signerAddress)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        setLoading(false)
    }

    const claim = async () => {
        setLoading(true)
        try {
            const check = await contract.checkStake(id, signerAddress)
            await check.wait()
            const claim = await contract.claimStake(id)
            await claim.wait()
            successAlert("Claiming is successful.")
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
                <div className="card-content-action">
                    <Button className="btn-claim" onClick={() => claim()}>
                        Claim
                    </Button>
                    <Button className="btn-unstake" onClick={() => unStake()}>
                        Unstake
                    </Button>
                </div>
            </div>
            {loading &&
                <div className="card-loading">
                    <ScaleLoader size={40} color="#394529" />
                </div>
            }
        </div>
    )
}
