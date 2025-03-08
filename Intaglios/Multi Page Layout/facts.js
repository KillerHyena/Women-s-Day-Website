document.addEventListener("DOMContentLoaded", function () {
    const factElement = document.getElementById("fact");
    const newFactBtn = document.getElementById("newFactBtn");
    
    const facts = [
        "Marie Curie was the first woman to win a Nobel Prize.",
        "Women were not allowed to run in marathons until 1972.",
        "Valentina Tereshkova was the first woman in space in 1963.",
        "Women make up over 60% of college graduates in many countries.",
        "The world's first computer programmer was a woman, Ada Lovelace.",
        "Hedy Lamarr, a Hollywood actress, helped invent Wi-Fi technology.",
        "Emmeline Pankhurst led the women's suffrage movement in the UK.",
        "Women couldn’t open bank accounts without a man until the 1960s.",
        "The first female doctor in the U.S. was Elizabeth Blackwell in 1849.",
        "Over 100 countries celebrate International Women's Day officially.",
        "Rosa Parks' refusal to give up her bus seat sparked the Civil Rights Movement.",
        "Malala Yousafzai, a Pakistani activist, won the Nobel Peace Prize at age 17.",
        "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean.",
        "Kathrine Switzer was the first woman to officially run the Boston Marathon in 1967.",
        "The first woman to serve as U.S. Secretary of State was Madeleine Albright.",
        "Sirimavo Bandaranaike was the world's first female prime minister in 1960.",
        "Junko Tabei was the first woman to climb Mount Everest in 1975.",
        "The first woman to win an Olympic gold medal was Hélène de Pourtalès in 1900.",
        "The first female Supreme Court Justice in the U.S. was Sandra Day O'Connor.",
        "Marie Curie remains the only person to win Nobel Prizes in two different sciences.",
        "Frida Kahlo, a Mexican artist, is known for her self-portraits and surrealist art.",
        "Oprah Winfrey was the first Black woman to own a television production company.",
        "The first female pilot in the U.S. was Harriet Quimby in 1911.",
        "The first woman to win the Fields Medal in Mathematics was Maryam Mirzakhani in 2014.",
        "Women in Saudi Arabia were only granted the right to drive in 2018.",
        "NASA's Apollo 11 mission relied on software developed by Margaret Hamilton.",
        "The first female president in Africa was Ellen Johnson Sirleaf of Liberia.",
        "The first woman to travel to space from India was Kalpana Chawla in 1997.",
        "The first female Vice President of the U.S. is Kamala Harris.",
        "In 2021, Ngozi Okonjo-Iweala became the first woman to lead the World Trade Organization."
    ];

    // Confetti effect
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

    function generateFact() {
        factElement.style.animation = 'none';
        void factElement.offsetWidth; // Trigger reflow
        factElement.textContent = facts[Math.floor(Math.random() * facts.length)];
        factElement.style.animation = 'typewriter 2s steps(40)';
        launchConfetti();
    }

    // Initial fact load
    generateFact();
    
    // Event listeners
    newFactBtn.addEventListener("click", generateFact);
});
