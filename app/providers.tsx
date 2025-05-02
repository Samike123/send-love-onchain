'use client';

import { WagmiConfig, createConfig } from 'wagmi';
import { baseGoerli } from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const config = getDefaultConfig({
  appName: 'Zawadi',
  projectId: '4d9e7d15ae21a80a2af9b96c624c6e85',
  chains: [baseGoerli],
  ssr: true,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
