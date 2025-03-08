document.addEventListener("DOMContentLoaded", function () {
    // Music controls
    const music = document.getElementById("bgMusic");
    const playMusicBtn = document.getElementById("playMusicBtn");

    // Function to toggle music play/pause
    function toggleMusic() {
        if (music.paused) {
            music.play()
                .then(() => { 
                    playMusicBtn.textContent = "Pause Music 🎵"; 
                })
                .catch(error => { 
                    console.error("Audio playback failed:", error); 
                });
        } else {
            music.pause();
            playMusicBtn.textContent = "Play Music 🎶";
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get target element using href attribute
            const target = document.querySelector(this.getAttribute('href'));

            // Ensure the target exists before attempting to scroll
            if (target) {
                const yOffset = -80;  // Adjust this for desired offset
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            } else {
                console.error("Target not found for href:", this.getAttribute('href'));
            }
        });
    });

    // Event listener for music button
    playMusicBtn.addEventListener("click", toggleMusic);
});
