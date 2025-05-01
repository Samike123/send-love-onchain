const form = document.getElementById('giftForm') as HTMLFormElement | null;
const receipt = document.getElementById('receipt') as HTMLElement | null;

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('recipient') as HTMLInputElement | null;
    const messageInput = document.getElementById('message') as HTMLInputElement | null;
    const amountInput = document.getElementById('amount') as HTMLInputElement | null;
    const walletInput = document.getElementById('wallet') as HTMLInputElement | null;

    if (!nameInput || !messageInput || !amountInput || !walletInput) return;

    const name = nameInput.value;
    const message = messageInput.value;
    const amount = amountInput.value;
    const wallet = walletInput.value;

    const txHash = '0x' + Math.random().toString(16).substr(2, 8);

    const toName = document.getElementById('toName');
    const giftMsg = document.getElementById('giftMsg');
    const giftAmt = document.getElementById('giftAmt');
    const txHashEl = document.getElementById('txHash');

    if (toName) toName.textContent = name;
    if (giftMsg) giftMsg.textContent = message;
    if (giftAmt) giftAmt.textContent = amount;
    if (txHashEl) txHashEl.textContent = txHash;
    if (receipt) receipt.classList.remove('hidden');

    const newGift = {
      name,
      message,
      amount,
      wallet,
      txHash,
      timestamp: new Date().toLocaleString(),
    };

    const giftFeed = JSON.parse(localStorage.getItem('giftFeed') || '[]');
    giftFeed.unshift(newGift);
    localStorage.setItem('giftFeed', JSON.stringify(giftFeed));

    renderFeed();
    form.reset();

    const shareMessage = `🎁 I just sent ${amount} Zawadi to ${name}! Check it out on Zawadi Mini App. TxHash: ${txHash}`;

    const shareX = document.getElementById('shareX');
    const shareWA = document.getElementById('shareWA');

    if (shareX) {
      shareX.onclick = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
        window.open(url, '_blank');
      };
    }

    if (shareWA) {
      shareWA.onclick = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
        window.open(url, '_blank');
      };
    }
  });
}

function renderFeed() {
  const feedList = document.getElementById('giftFeed');
  if (!feedList) return;

  const giftFeed = JSON.parse(localStorage.getItem('giftFeed') || '[]');
  feedList.innerHTML = '';

  giftFeed.forEach((gift: any) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <strong>${gift.name}</strong> received <strong>${gift.amount}</strong> Zawadi<br>
      💌 "${gift.message}"<br>
      🧾 Tx: ${gift.txHash}<br>
      ⏰ ${gift.timestamp}
      <hr/>
    `;
    feedList.appendChild(item);
  });
}

// Load feed on page load
renderFeed(); 