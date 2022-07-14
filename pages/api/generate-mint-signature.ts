import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function generateMintSignature(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // De-construct body from request
  let { address } = JSON.parse(req.body);

  // Now use the SDK on Goerli to get the signature drop
  const goerliSDK = ThirdwebSDK.fromPrivateKey(
    process.env.PRIVATE_KEY as string,
    "goerli"
  );
  const signatureDrop = goerliSDK.getSignatureDrop(
    "0xb90a18e9270d44F6e7D06e5Eac32C6Ea881CCaB2"
  );

  const mintSignature = await signatureDrop.signature.generate({
    to: address, // Can only be minted by the address we checked earlier
  });

  res.status(200).json(mintSignature);
}
