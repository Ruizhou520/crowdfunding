"use client";

import { sepolia } from "thirdweb/chains";

import {
  ThirdwebProvider,
  walletConnect,
  metamaskWallet,
  safeWallet,
  ConnectWallet,
} from "@thirdweb-dev/react";

export function Providers({ children }) {
  return (
    <ThirdwebProvider
      activeChain={sepolia.id}
      supportedWallets={[metamaskWallet(), walletConnect({}), safeWallet()]}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      autoConnect={false}
    >
      {children}
    </ThirdwebProvider>
  );
}
