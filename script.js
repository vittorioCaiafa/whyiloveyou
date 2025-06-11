import razones from './reasons.js';

const reasonsContainer = document.getElementById('reasonsContainer');

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
    razones.forEach((reason, index) => {
        const card = createReasonCard(reason, index);
        reasonsContainer.appendChild(card);
    });
}

// Iniciar la visualización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', displayReasons); 