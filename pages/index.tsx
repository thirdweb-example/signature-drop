import {
  useAddress,
  useDisconnect,
  useMetamask,
  useSignatureDrop,
} from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const signatureDrop = useSignatureDrop(
    "0xb90a18e9270d44F6e7D06e5Eac32C6Ea881CCaB2"
  );

  async function claim() {
    if (address) {
      const tx = await signatureDrop?.claimTo(address, 1);
      console.log(tx);
    }
  }

  async function claimWithSignature() {
    const signedPayloadReq = await fetch(`/api/generate-mint-signature`, {
      method: "POST",
      body: JSON.stringify({
        address: address,
      }),
    });

    const signedPayload =
      (await signedPayloadReq.json()) as SignedPayload721WithQuantitySignature;

    console.log(signedPayload);

    const nft = await signatureDrop?.signature.mint(signedPayload);

    return nft;

    // if (signedPayloadReq.status === 400) {
    //   alert("Looks like you don't own an early access NFT :(");
    //   return;
    // }
  }

  return (
    <div>
      {address ? (
        <>
          <p>Your address: {address}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <button onClick={() => claim()}>Claim</button>
          <button onClick={() => claimWithSignature()}>
            Claim with signature
          </button>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
};

export default Home;
