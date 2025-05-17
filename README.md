
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
https://docs.sui.io/guides/developer/getting-started/sui-install

### Step 2: Install Walrus CLI
https://seal-io.github.io/docs/cli
## Quick Start Guide

### Step 3: Build Your Website
Walrus Sites can host any static website, not just Next.js projects. Prepare your static files:

```bash
# For plain HTML/CSS/JS sites
# Just use your files directly - no build step needed!

# For Next.js projects
npm run build
# Make sure output is set to 'export' in next.config.js

# For React (Create React App)
npm run build
# Output will be in the 'build' directory

# For Vue.js
npm run build
# Output will be in the 'dist' directory

# For Angular
ng build --prod
# Output will be in the 'dist' directory

# For static site generators (Hugo, Jekyll, etc.)
# Follow the build instructions for your generator
```

The key requirement is having a directory of static files (HTML, CSS, JS, images) that can be served directly.
### Step 4: Install site-builder
```bash
# Download the right version for your system
curl https://storage.googleapis.com/mysten-walrus-binaries/site-builder-mainnet-latest-macos-arm64 -o site-builder
chmod +x site-builder
```

### Step 5: Set Up site-builder Configuration
```bash
mkdir -p ~/.config/walrus
curl https://raw.githubusercontent.com/MystenLabs/walrus-sites/refs/heads/mainnet/sites-config.yaml -o ~/.config/walrus/sites-config.yaml
```

### Step 6: Check Your Wallet
You need some wal and sui 
Check with: `sui client gas`

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
Your site is would be live at:
```
https://yourdomainname.wal.app 
```
I.e your domain name with a "wal.app" at the back

