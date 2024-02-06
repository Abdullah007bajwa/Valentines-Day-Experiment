function handleYesClick() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
      <span class="close">&times;</span>
      <p>Ok yayyyyyy!!!</p>
    `;
  
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    const closeButton = modalContent.querySelector('.close');
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
  }
  

let noCount = 0;
function handleNoClick() {
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  const noButtonText = phrases[Math.min(noCount, phrases.length - 1)];
  document.querySelector('.no-button').textContent = noButtonText;
  noCount++;
}
