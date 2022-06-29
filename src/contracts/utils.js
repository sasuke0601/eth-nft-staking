import WalletConnectProvider from "@walletconnect/web3-provider"

export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad"

export const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID, // required
        },
    },
}