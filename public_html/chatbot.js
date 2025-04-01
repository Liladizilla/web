const API_KEY = ProcessingInstruction.env.OPENAI_API_KEY;  // Replace with your actual OpenAI API key

document.getElementById("send-btn").addEventListener("click", sendMessage);

async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let chatOutput = document.getElementById("chat-output");
    let userMessage = inputField.value.trim();

    if (!userMessage) return;

    chatOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    inputField.value = "";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        });

        if (!response.ok) throw new Error("Failed to fetch response");

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        chatOutput.innerHTML += `<p><strong>Cyberzilla AI:</strong> ${botMessage}</p>`;
    } catch (error) {
        chatOutput.innerHTML += `<p><strong>Error:</strong> Something went wrong!</p>`;
        console.error("Chatbot error:", error);
    }
}