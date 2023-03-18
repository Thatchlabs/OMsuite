import { WalletAdapterNetwork,WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {GlowWalletAdapter,PhantomWalletAdapter,SlopeWalletAdapter,SolflareWalletAdapter,TorusWalletAdapter,LedgerWalletAdapter,SolletExtensionWalletAdapter,SolletWalletAdapter,} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL, PublicKeyInitData } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback } from 'react';

require('@solana/wallet-adapter-react-ui/styles.css');

export const Context: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
          new GlowWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolflareWalletAdapter({ network }),
          new TorusWalletAdapter(),
          new LedgerWalletAdapter(),
          new SolletExtensionWalletAdapter(),
          new SolletWalletAdapter(),
      ],
      [network]
  );

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};