document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const startButton = document.getElementById('startButton');
    const uploadDefaultImageInput = document.getElementById('uploadDefaultImage');
    const uploadClickedImageInput = document.getElementById('uploadClickedImage');
    let score = 0;
    let timeLeft = 30;
    let timerId;
    let moleTimerId;
    let defaultMoleImage = '';
    let clickedMoleImage = '';

    // Use a simple beep sound for the click event
    const clickSound = new Audio('https://www.soundjay.com/button/beep-07.wav');

    function randomHole() {
        holes.forEach(hole => {
            hole.classList.remove('active');
            hole.classList.remove('hit');
            const imgDefault = hole.querySelector('img.default');
            const imgClicked = hole.querySelector('img.clicked');
            if (imgDefault) {
                hole.removeChild(imgDefault);
            }
            if (imgClicked) {
                hole.removeChild(imgClicked);
            }
        });
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        randomHole.classList.add('active');

        if (defaultMoleImage) {
            const imgDefault = document.createElement('img');
            imgDefault.src = defaultMoleImage;
            imgDefault.classList.add('default');
            randomHole.appendChild(imgDefault);

            const imgClicked = document.createElement('img');
            imgClicked.src = clickedMoleImage;
            imgClicked.classList.add('clicked');
            randomHole.appendChild(imgClicked);
        }
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        scoreDisplay.textContent = score;
        timeLeftDisplay.textContent = timeLeft;
        timerId = setInterval(countDown, 1000);
        moleTimerId = setInterval(randomHole, 800);
    }

    function countDown() {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerId);
            clearInterval(moleTimerId);
            alert('Game over! Your score is ' + score);
        }
    }

    holes.forEach(hole => {
        const hitMole = () => {
            if (hole.classList.contains('active')) {
                score++;
                scoreDisplay.textContent = score;
                hole.classList.remove('active');
                hole.classList.add('hit');
                clickSound.play(); // Play sound on click

                // Delay the removal of the hit state by 0.5 seconds
                setTimeout(() => {
                    hole.classList.remove('hit');
                }, 500);
            }
        };

        hole.addEventListener('click', hitMole);
        hole.addEventListener('touchstart', hitMole);
    });

    startButton.addEventListener('click', startGame);

    uploadDefaultImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                defaultMoleImage = e.target.result;
                console.log('Default Mole Image Loaded:', defaultMoleImage); // Debugging
            };
            reader.readAsDataURL(file);
        }
    });

    uploadClickedImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                clickedMoleImage = e.target.result;
                console.log('Clicked Mole Image Loaded:', clickedMoleImage); // Debugging
            };
            reader.readAsDataURL(file);
        }
    });
});
