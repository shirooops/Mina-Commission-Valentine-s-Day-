const messages = [
  "Sure ka na ba dyan?",
  "Sige na pls🥺",
  "Payag ka na, ako na'to eh.",
  "Sige, bigyan kita time.",
  "Okay na ba?",
  "Sige na BB.",
  "kaiyak, sino ba naman ako diba?",
  "'Di ka ba maaawa sa'kin?",
  "Ako na lang kase BB, plssss.",
  "Ayieee, papayag na'yan."
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes-page.html";
}