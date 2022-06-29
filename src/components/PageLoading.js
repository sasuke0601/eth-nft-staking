import HashLoader from "react-spinners/HashLoader"

export default function PageLoading() {
    return (
        <div className="page-loading">
            <div className="loading-box">
                <HashLoader size={32} color="#394529" />
            </div>
        </div>
    )
}