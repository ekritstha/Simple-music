window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelectorAll(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ];

  //Sounds
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function() {
      sounds[i].currentTime = 0;
      sounds[i].play();
      createBubbles(i);
    });
  });

  //bubbles
  const createBubbles = i => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
