document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("quote");
    const newQuoteBtn = document.getElementById("newQuoteBtn");
    
    const quotes = [
        "Well-behaved women seldom make history. — Laurel Thatcher Ulrich",
        "A woman is like a tea bag—you can’t tell how strong she is until you put her in hot water. — Eleanor Roosevelt",
        "The most courageous act is still to think for yourself. Aloud. — Coco Chanel",
        "There is no limit to what we, as women, can accomplish. — Michelle Obama",
        "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
        "I raise up my voice—not so I can shout, but so that those without a voice can be heard. — Malala Yousafzai",
        "Women belong in all places where decisions are being made. — Ruth Bader Ginsburg",
        "Do not live someone else’s life and someone else’s idea of what womanhood is. Womanhood is you. — Viola Davis",
        "If you obey all the rules, you miss all the fun. — Katharine Hepburn",
        "A strong woman looks a challenge dead in the eye and gives it a wink. — Gina Carey",
        "You don’t have to play masculine to be a strong woman. — Mary Elizabeth Winstead",
        "She wasn't looking for a knight. She was looking for a sword. — Atticus Poetry",
        "Above all, be the heroine of your life, not the victim. — Nora Ephron",
        "You must do the thing you think you cannot do. — Eleanor Roosevelt",
        "One is not born, but rather becomes, a woman. — Simone de Beauvoir",
        "When the whole world is silent, even one voice becomes powerful. — Malala Yousafzai",
        "I am no bird, and no net ensnares me: I am a free human being with an independent will. — Charlotte Brontë",
        "There is nothing stronger than a broken woman who has rebuilt herself. — Hannah Gadsby",
        "To tell a woman everything she cannot do is to tell her what she can. — Spanish Proverb",
        "Courage is like a muscle. We strengthen it by use. — Ruth Gordo",
        "Feminism is the radical notion that women are people. — Marie Shear",
        "Each time a woman stands up for herself, she stands up for all women. — Maya Angelou",
        "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
        "You should never let your fears prevent you from doing what you know is right. — Aung San Suu Kyi",
        "A feminist is anyone who recognizes the equality and full humanity of women and men. — Gloria Steinem",
        "Power is not given to you. You have to take it. — Beyoncé",
        "Success is getting what you want. Happiness is wanting what you get. — Ingrid Bergman",
        "When women support each other, incredible things happen. — Unknown",
        "Be a first-rate version of yourself, not a second-rate version of someone else. — Judy Garland",
        "Nothing can dim the light that shines from within. — Maya Angelou"
    ];

    function launchConfetti() {
        const confettiCanvas = document.createElement("canvas");
        document.body.appendChild(confettiCanvas);
        const confetti = confettiCanvas.confetti || window.confetti;
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => document.body.removeChild(confettiCanvas), 1000);
    }

    function generateQuote() {
        quoteElement.style.animation = 'none';
        void quoteElement.offsetWidth;
        quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.style.animation = 'typewriter 2s steps(40)';
        launchConfetti();
    }

    newQuoteBtn.addEventListener("click", generateQuote);
    generateQuote();
});
