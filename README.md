# Signature Drop

This example shows how you can use the [Signature Drop Pre-Built Contract](https://portal.thirdweb.com/pre-built-contracts/signature-drop) to
utilize both the [claim](https://portal.thirdweb.com/pre-built-contracts/signature-drop#minting--claiming-nfts) function to claim NFTs under the criteria
of a claim condition, as well as the [Signature-based minting](https://portal.thirdweb.com/advanced-features/on-demand-minting) feature to
offer free NFT mints to specific users simultaneously.

![demo](demo.png)

We allow users who hold one of our [Early Access NFTs](https://opensea.io/collection/thirdweb-community) to mint the NFT for free, by generating a mint signature from the admin wallet on the server-side. Whereas users who _don't_ hold one of the NFTs do not qualify for the mint signature, but can still mint an NFT from the drop using the regular claim.

## Installation

Install the template with [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
npx thirdweb create --template signature-drop
```

## Set up

- Create your own [Signature Drop](https://thirdweb.com/thirdweb.eth/SignatureDrop) and[Edition Drop](https://thirdweb.com/thirdweb.eth/DropERC1155) via the [thirdweb dashboard](https://thirdweb.com/dashboard).

- Add your contract addresses to the [`consts.ts`](/consts.ts) file.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```bash
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=
TW_SECRET_KEY=
WALLET_PRIVATE_KEY=
```

- Generate your `TW_SECRET_KEY` and `NEXT_PUBLIC_TEMPLATE_CLIENT_ID` via thirdweb's [dashboard](https://thirdweb.com/create-api-key).
- For `WALLET_PRIVATE_KEY` export your wallet private key from your wallet.

### Run Locally

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn start
```

## Additional Resources

- [Documentation](https://portal.thirdweb.com)
- [Templates](https://thirdweb.com/templates)
- [Video Tutorials](https://youtube.com/thirdweb_)
- [Blog](https://blog.thirdweb.com)

## Contributing

Contributions and [feedback](https://feedback.thirdweb.com) are always welcome!

Please visit our [open source page](https://thirdweb.com/open-source) for more information.

## Need help?

For help, join the [discord](https://discord.gg/thirdweb) or visit our [support page](https://support.thirdweb.com).
