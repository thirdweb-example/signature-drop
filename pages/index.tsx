import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { SIGNATURE_DROP_ADDRESS } from "../consts";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract: signatureDrop } = useContract(
    SIGNATURE_DROP_ADDRESS,
    "signature-drop"
  );

  async function claim() {
    try {
      await signatureDrop?.claim(1);
      alert(`Succesfully minted NFT!`);
    } catch (error: any) {
      alert(error?.message);
    }
  }

  async function claimWithSignature() {
    const signedPayloadReq = await fetch("/api/generate-mint-signature", {
      method: "POST",
      body: JSON.stringify({
        address: address,
      }),
    });

    if (signedPayloadReq.status === 400) {
      return alert(
        "Looks like you don't own an early access NFT :( You don't qualify for the free mint."
      );
    } else {
      try {
        const signedPayload =
          (await signedPayloadReq.json()) as SignedPayload721WithQuantitySignature;

        await signatureDrop?.signature.mint(signedPayload);

        alert(`Succesfully minted NFT!`);
      } catch (error: any) {
        alert(error?.message);
      }
    }
  }

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Signature Drop</h1>

      <p className={styles.describe}>
        In this example, users who own one of our{" "}
        <a href="https://opensea.io/collection/thirdweb-community">
          Early Access NFTs
        </a>{" "}
        can mint for free using the{" "}
        <a href="https://portal.thirdweb.com/pre-built-contracts/signature-drop#signature-minting">
          Signature Mint
        </a>
        . However, for those who don&apos;t own an Early Access NFT, they can
        still claim using the regular claim function.
      </p>

      <div className={styles.nftBoxGrid}>
        <div className={styles.optionSelectBox}>
          <Image
            src="/icons/drop.webp"
            alt="drop"
            className={styles.cardImg}
            height={42}
            width={42}
          />
          <h2 className={styles.selectBoxTitle}>Claim NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use the normal <code>claim</code> function to mint an NFT under the
            conditions of the claim phase.
          </p>

          <Web3Button
            contractAddress={SIGNATURE_DROP_ADDRESS}
            action={() => claim()}
            theme="dark"
          >
            Claim
          </Web3Button>
        </div>

        <div className={styles.optionSelectBox}>
          <Image
            width={42}
            height={42}
            src="/icons/analytics.png"
            alt="signature-mint"
            className={styles.cardImg}
          />
          <h2 className={styles.selectBoxTitle}>Mint with Signature</h2>
          <p className={styles.selectBoxDescription}>
            Check if you are eligible to mint an NFT for free, by using
            signature-based minting.
          </p>

          <Web3Button
            contractAddress={SIGNATURE_DROP_ADDRESS}
            action={() => claimWithSignature()}
            theme="dark"
          >
            Claim With Signature
          </Web3Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
