document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    messageInput.value = '';

    if (message) {
        addMessageToChat('User', message);
        // Use generateResponse to get a more sophisticated response
        const chatbotResponse = generateResponse(message);
        setTimeout(function() {
            addMessageToChat('Chatbot', chatbotResponse);
        }, 1000);
    }
});

function addMessageToChat(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Define response rules and generateResponse function
const responseRules = {
    greetings: ["hello", "hi", "hey", "greetings"],
    affirmations: ["thank you", "thanks", "appreciate it", "good job"],
    inquiries: ["how are you", "how do you feel", "what's up"],
    // Add more rules as needed
};

function generateResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (responseRules.greetings.some(word => lowerCaseMessage.includes(word))) {
        return "Hello! How can I assist you today?";
    } else if (responseRules.affirmations.some(word => lowerCaseMessage.includes(word))) {
        return "You're welcome! If you have any questions or need help, feel free to ask.";
    } else if (responseRules.inquiries.some(word => lowerCaseMessage.includes(word))) {
        return "I'm here to help you with your therapy needs. How can I assist you further?";
    } else {
        return "Your mental health is just as important as your physical health. It is often the small steps, not the giant leaps, that bring about the most lasting change";
    }
}