function saveToDatabase(name1, name2, percentage, message) {
    fetch("save_love_result.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}&percentage=${percentage}&message=${encodeURIComponent(message)}`
    });
}

function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const calculateBtn = document.getElementById('calculate-btn');
    const calculateText = document.getElementById('calculate-text');
    const loadingIcon = document.getElementById('loading-icon');

    if (name1 === "" || name2 === "") return alert("Please enter both names!");

    loadingIcon.classList.remove('hidden');
    calculateText.classList.add('hidden');

    setTimeout(() => {
        let percentage = getLovePercentage(name1, name2);
        let message = getLoveMessage(percentage);

        document.getElementById('name1-result').textContent = capitalize(name1);
        document.getElementById('name2-result').textContent = capitalize(name2);
        document.getElementById('percentage-result').textContent = `❤️ ${percentage}`;
        document.getElementById('message-result').textContent = message;
        document.getElementById('result').classList.remove('hidden');
        
        loadingIcon.classList.add('hidden');
        calculateText.classList.remove('hidden');

        saveToDatabase(name1, name2, percentage, message);
    }, 1000);
}

function getLovePercentage(name1, name2) {
    const cleanName1 = name1.replace(/[^a-z]/g, '');
    const cleanName2 = name2.replace(/[^a-z]/g, '');
    let sum1 = 0, sum2 = 0;
    for (let char of cleanName1) sum1 += char.charCodeAt(0);
    for (let char of cleanName2) sum2 += char.charCodeAt(0);
    let loveScore = Math.sqrt(sum1 * sum2) % 100;
    let variation = Math.floor(Math.random() * 15) - 5;
    return Math.min(Math.max(Math.floor(loveScore + variation), 1), 100) + "% ❤️";
}

function getLoveMessage(percentage) {
    // Extract the numeric part of the percentage
    const numericPercentage = parseInt(percentage);
    if (numericPercentage >= 90) return "💖 Perfect match! You're soulmates! 💖";
    if (numericPercentage >= 80) return "💞 Amazing love! You're a great couple! 💞";
    if (numericPercentage >= 70) return "💕 Good match! You have strong potential. 💕";
    if (numericPercentage >= 60) return "💓 Decent match. Worth exploring! 💓";
    if (numericPercentage >= 50) return "💘 Average match. Could go either way. 💘";
    if (numericPercentage >= 40) return "💔 Below average. Might need work. 💔";
    if (numericPercentage >= 30) return "💢 Low compatibility. Challenging. 💢";
    return "💀 Very low score. Maybe just friends? 💀";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

