import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendGift = async () => {
    if (!recipient || !message) {
      setStatus('⚠️ Please fill in both fields.');
      return;
    }

    try {
      setStatus('🎁 Sending your gift...');
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('✅ Gift sent successfully!');
    } catch (err) {
      setStatus('❌ Failed to send gift.');
    }
  };

  return (
    <>
      <Head>
        <title>Zawadi — Send Love Onchain</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">💌 Zawadi</h1>
        <p className="text-lg mb-6 text-center">Send a little joy, onchain.</p>

        <div className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Recipient address"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendGift}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Send Gift 🎁
          </button>
          {status && <p className="text-center mt-2">{status}</p>}
        </div>

        <footer className="absolute bottom-4 text-sm text-gray-400">
          Built with ❤️ on Base using MiniKit
        </footer>
      </main>
    </>
  );
}
