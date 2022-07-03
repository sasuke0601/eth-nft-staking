import React from "react";
import { Container, Button } from "@mui/material";
export default function Header({
  connected,
  signerAddress,
  connectWallet
}) {

  return (
    <header>
      <Container maxWidth="lg">
        <div className="header-content">
          <a href="#">
            {/* eslint-disable-next-line */}
            <img src="./logo.png" alt="logo" className="logo" />
          </a>
          <Button variant="contained" color="secondary" className="wallet-button" onClick={() => connectWallet()}>
            {!connected ?
              <>
                Wallet connect
              </>
              :
              <span className="wallet-address">
                {`0x${signerAddress.slice(2, 5)}...${signerAddress.slice(-5)}`}
              </span>
            }
          </Button>
        </div>
      </Container>
    </header>
  )
}
