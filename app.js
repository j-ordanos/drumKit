const drumParts = {
    A: "crash",
    S: "rack-tom",
    D: "bass",
    F: "hi-hat",
    G: "snare",
    H: "china-cymbal",
    J: "ride",
    K: "floor-tom",
    L: "splash",
  };
  
  function playSound(key) {
    const sounds = {
      A: "assets/sounds/crash.wav",
      S: "assets/sounds/rock-tom.wav",
      D: "assets/sounds/kick.wav",
      F: "assets/sounds/hihat.wav",
      G: "assets/sounds/snare.wav",
      H: "assets/sounds/china-cymbal.wav",
      J: "assets/sounds/ride.wav",
      K: "assets/sounds/tom.wav",
      L: "assets/sounds/splash.wav",
    };
  
    if (!sounds[key]) return; // Exit if key is not mapped
  
    const audio = new Audio(sounds[key]);
    audio.play();
  
    highlightDrumPart(key);
  }
  
  function highlightDrumPart(key) {
    // Remove previous highlights
    document.querySelectorAll(".label").forEach((label) => label.classList.remove("active"));
    document.querySelectorAll("path").forEach((path) => path.setAttribute("fill", "transparent"));
  
    const partId = drumParts[key];
    if (partId) {
      const label = document.getElementById(partId);
      const path = document.getElementById(partId);
  
      if (label) label.classList.add("active");
      if (path) {
        path.setAttribute("fill", "rgba(255, 0, 0, 0.5)"); // Semi-transparent red
        path.style.filter = "drop-shadow(0 0 15px rgba(255, 255, 0, 1))"; // Glowing effect
      }
  
      // Remove highlight after 200ms
      setTimeout(() => {
        if (label) label.classList.remove("active");
        if (path) {
          path.setAttribute("fill", "transparent");
          path.style.filter = "none"; // Remove glow effect
        }
      }, 200);
    }
  }
  
  // Event listeners for key press
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    playSound(key);
  });
  
  // Event listeners for mouse clicks
  document.querySelectorAll(".label").forEach((label) => {
    label.addEventListener("click", () => {
      const key = label.getAttribute("data-key");
      playSound(key);
    });
  });
  