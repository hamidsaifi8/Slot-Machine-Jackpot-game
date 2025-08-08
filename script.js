const symbols = ["🍒", "🍋", "🍇", "🍉", "⭐", "🔔"];

const random = () => {
  const slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  const slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  const slot3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("slot1").textContent = slot1;
  document.getElementById("slot2").textContent = slot2;
  document.getElementById("slot3").textContent = slot3;

  if (slot1 === slot2 && slot2 === slot3 && slot1 === slot3) {
    document.getElementById("spin").textContent = "🎉 Jackpot Win!";
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
    document.getElementById("spin").textContent = "😊 Small Win!";
  } else {
    document.getElementById("spin").textContent = "💔 Try Again!";
  }
};
