import razones from '/whyiloveyou/reasons.js';

const reasonsContainer = document.getElementById('reasonsContainer');
const searchInput = document.getElementById('searchInput');
let allCards = [];

function createReasonCard(reason, index) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add background image if available
    const imageNumber = (index % 5) + 1; // This will cycle through images 1-5
    card.style.setProperty('--bg-image', `url('images/image${imageNumber}.jpg')`);
    
    const text = document.createElement('p');
    text.className = 'reason-text';
    text.textContent = reason;
    
    card.appendChild(text);
    return card;
}

function displayReasons() {
    reasonsContainer.innerHTML = ''; // Clear container
    allCards = []; // Reset cards array
    
    razones.forEach((reason, index) => {
        const card = createReasonCard(reason, index);
        reasonsContainer.appendChild(card);
        allCards.push(card);
    });
}

function filterCards(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    
    allCards.forEach(card => {
        const text = card.querySelector('.reason-text').textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'flex';
            card.style.animation = 'slideUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for search input
searchInput.addEventListener('input', (e) => {
    filterCards(e.target.value);
});

// Iniciar la visualización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', displayReasons); 