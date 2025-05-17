# Sui Tools Explorer

A modern, minimalist black and white tech-themed web application that educates users about Sui blockchain tools: Walrus (decentralized storage), Seal (secrets management), and Nautilus (secure off-chain computation).

## About This Project

This project showcases the power of Sui blockchain tools through an educational web application with a sleek, modern design. The application is built with Next.js and deployed on Walrus Sites, demonstrating the capabilities of decentralized hosting.

## Deployment on Walrus Sites: A Step-by-Step Tutorial

### What is Walrus Sites?
Walrus Sites is a decentralized hosting platform on the Sui blockchain that lets you host websites without traditional servers.

### Advantages of Deploying on Walrus
- **Censorship Resistance**: Your site can't be taken down by any central authority
- **High Availability**: Content remains accessible even if up to 2/3 of storage nodes fail
- **True Ownership**: You own your site through blockchain-verified ownership
- **Cost-Effective Storage**: Advanced erasure coding makes storage more efficient than traditional solutions
- **Immutable Records**: Content integrity is verified and secured by the blockchain
- **No Single Point of Failure**: Distributed across a network of nodes
- **Seamless Integration**: Works with the Sui blockchain ecosystem

## Prerequisites

### Step 1: Install Sui CLI
```bash
# Install Sui CLI
cargo install --locked sui

# Create a new wallet if you don't have one
sui client new-address ed25519
```

### Step 2: Install Walrus CLI
```bash
# For macOS
brew tap mystenlabs/tap
brew install mystenlabs/tap/walrus

# For other platforms
cargo install walrus-cli

# Verify installation
walrus --version
```

### Step 3: Configure Walrus
```bash
# Create configuration directory
mkdir -p ~/.config/walrus

# Create a basic configuration file
cat > ~/.config/walrus/client_config.yaml << EOL
contexts:
  mainnet:
    rpc_url: https://fullnode.mainnet.sui.io:443
    publisher_endpoint: https://publisher.mainnet.wal.app
    aggregator_endpoint: https://aggregator.mainnet.wal.app
    wallet_env: mainnet

default_context: mainnet
EOL
```

## Quick Start Guide

### Step 4: Build Your Website
```bash
# For Next.js projects
npm run build
# Make sure output is set to 'export' in next.config.js
```

### Step 5: Install site-builder
```bash
# Download the right version for your system
curl https://storage.googleapis.com/mysten-walrus-binaries/site-builder-mainnet-latest-macos-arm64 -o site-builder
chmod +x site-builder
```

### Step 6: Set Up site-builder Configuration
```bash
mkdir -p ~/.config/walrus
curl https://raw.githubusercontent.com/MystenLabs/walrus-sites/refs/heads/mainnet/sites-config.yaml -o ~/.config/walrus/sites-config.yaml
```

### Step 7: Check Your Wallet
You need:
- At least 1.5 SUI for gas
- About 5.5 WAL tokens for storage

Check with: `sui client gas`

To get WAL tokens:
```bash
# Exchange SUI for WAL
walrus get-wal --amount 1.0
```

### Step 8: Deploy Your Site
```bash
./site-builder publish ./out --epochs 50
```
Wait for deployment to complete. You'll get a site object ID like:
`0xd155e7f74e033a93a26bc31cb7892945a1406a1f0d672c17ea0ee69d28718a89`

### Step 9: Link Your SuiNS Domain
1. Go to [suins.io/account/my-names](https://suins.io/account/my-names)
2. Find your domain
3. Click the three dots → "Link To Walrus Site"
4. Paste your site object ID
5. Approve the transaction

### Step 10: Visit Your Site
Your site is now live at:
```
https://yourdomainname.wal.app
```

## Troubleshooting
- **Not enough WAL**: Get WAL tokens using `walrus get-wal --amount <amount-in-sui>`
- **Not enough SUI**: Add more SUI to your wallet
- **Deployment fails**: Try with fewer epochs (e.g., `--epochs 10`)
- **Walrus CLI errors**: Check your configuration in `~/.config/walrus/client_config.yaml`

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
