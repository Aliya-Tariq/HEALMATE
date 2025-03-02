
// Chatbot logic
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const emergencyAlert = document.getElementById('emergencyAlert');

// Add message to chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle emergency symptoms
function checkForEmergency(text) {
    const emergencies = ['chest pain', 'difficulty breathing', 'severe bleeding'];
    return emergencies.some(emergency => text.toLowerCase().includes(emergency));
}

// Send message to backend (simulated)
function sendToBackend(message) {
    // In real implementation, replace with fetch() to your backend
    return new Promise(resolve => {
        setTimeout(() => {
            let response;
            if (checkForEmergency(message)) {
                response = "❗ This could be serious. Please seek emergency care immediately.";
            } else {
                response = "Based on your symptoms, I recommend: Rest and consult a doctor if symptoms persist.";
            }
            resolve(response);
        }, 1000);
    });
}

// Handle user input
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = '';

    // Show emergency alert if needed
    if (checkForEmergency(message)) {
        emergencyAlert.style.display = 'block';
    }

    // Get bot response
    const response = await sendToBackend(message);
    addMessage(response);
}

// Handle Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
