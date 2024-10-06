**Defi Buddy: Your 3D NFT Virtual Companion**

**Introduction**

Defi Puppy introduces a captivating concept: a 3D NFT virtual companion! This project breathes life into the NFT space by allowing you to mint a unique, adorable Defi puppy. Your furry friend roams your virtual space, interacts with you, and joins you on various adventures.

**Features**

- **Minting:** Own your one-of-a-kind Defi puppy through the 3D NFT minting process.
- **3D Interaction:** Witness your puppy come to life in 3D, exploring its digital environment.
- **Interactive Gameplay:** Engage with your Defi puppy, fostering a virtual bond.
- **Future Potential:** Planned features include customizable pets, unique animations, a feeding mechanic, a leveling system, and temporary/permanent ownership transfers.

**Requirements**

Before embarking on your Defi Puppy journey, ensure you have the following tools installed:

- Node.js (version >= 18.17)
- Yarn (version 1 or 2+)
- Git

**Getting Started**

1. **Clone the Repository:**
   bash
   git clone https://github.com/Kaustubh-404/DEFI-Puppy
   
2. **Navigate and Install Dependencies:**
   bash
   cd Defi_Puppy
   yarn install
   
3. **Run a Local Network (First Terminal):**
   bash
   yarn chain
   
   This starts a local Ethereum network for testing and development using Hardhat. You can customize network settings in `hardhat.config.ts`.
4. **Deploy the Test Contract (Second Terminal):**
   bash
   yarn deploy
   
   This deploys a test smart contract to the local network. You'll find it in `packages/hardhat/contracts`, allowing modification for your needs. The `deploy` script facilitates deployment.
5. **Start the NextJS App (Third Terminal):**
   bash
   yarn start
   
   Visit `http://localhost:3000` to access your app and interact with the smart contract through the "Debug Contracts" page. The app configuration resides in `packages/nextjs/scaffold.config.ts`.

**Future Ideas**

- **Diverse Pet Options:** Introduce customizable features for a menagerie of virtual companions.
- **Animation Enhancements:** Design unique animations for each pet, boosting user engagement.
- **Hunger Mechanic:** Integrate a feeding system with consequences for neglected pets, creating a sense of responsibility.
- **Leveling System:** Implement a system where pets evolve through stages (e.g., from puppy to adult).
- **Ownership Transfer:** Enable temporary or permanent ownership transfers for collaborative pet care.
