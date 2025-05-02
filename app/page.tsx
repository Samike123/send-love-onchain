'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎁 Send Love Onchain</h1>
      <p>Connect your wallet to get started.</p>
      <ConnectButton />
    </main>
  );
}
