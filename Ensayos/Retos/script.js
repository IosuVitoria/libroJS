
const API_KEY = ""; // Mete aquí tu clave de API
const API_URL = "https://api.pexels.com/v1/search";


let isWork = true; 
let timeLeft = 25 * 60; 
let timerInterval;


const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const statusText = document.getElementById("status-text");
const body = document.body;


function updateTimerDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}


async function switchMode() {
  isWork = !isWork;
  timeLeft = isWork ? 25 * 60 : 5 * 60; 
  statusText.textContent = `Estado: ${isWork ? "Trabajo" : "Descanso"}`;
  await fetchBackgroundImage(isWork ? "work" : "relax");
  updateTimerDisplay();
}


function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        switchMode();
      }
    }, 1000);
  }
}


function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  isWork = true;
  updateTimerDisplay();
  statusText.textContent = "Estado: Trabajo";
  fetchBackgroundImage("work");
}


async function fetchBackgroundImage(query) {
  try {
    const response = await fetch(`${API_URL}?query=${query}&per_page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    const imageUrl = data.photos[0]?.src?.large || "";
    if (imageUrl) {
      body.style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${imageUrl})`;
    }
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
  }
}


startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);


updateTimerDisplay();
fetchBackgroundImage("work");
