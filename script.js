body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.game-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    margin: 20px 0;
}

.hole {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    position: relative;
}

.hole.active img.default {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hole img.default {
    display: none;
}

.hole img.clicked {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hole.hit img.clicked {
    display: block;
}

@keyframes hitAnimation {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}

.hole.hit img.clicked {
    animation: hitAnimation 0.3s ease-in-out;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
