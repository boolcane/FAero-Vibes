document.addEventListener("DOMContentLoaded", () => {
  const fishSize = 250;
  const fishes = [];

 
  function createFish(src) {
    let fish = document.createElement("img");
    fish.src = src;
    fish.style.position = "absolute";
    fish.style.width = fishSize + "px";
    fish.style.height = fishSize + "px";

    fish.style.left = Math.random() * (window.innerWidth - fishSize) + "px";
    fish.style.top = Math.random() * (window.innerHeight - fishSize) + "px";

    document.body.appendChild(fish);

    return {
      el: fish,
      x: parseFloat(fish.style.left),
      y: parseFloat(fish.style.top),
      baseY: parseFloat(fish.style.top),
      vx: (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1),
      phase: Math.random() * 2 * Math.PI,
    };
  }

  
  for (let i = 0; i < 5; i++) {
    fishes.push(createFish("./assets/fishy.png"));
  }

  
  fishes.push(createFish("./assets/bigfish.png"));

  function animate(time = 0) {
    for (const fish of fishes) {
      fish.x += fish.vx;
      fish.y = fish.baseY + Math.sin(time * 0.005 + fish.phase) * 10;

     
      if (fish.x <= 0) {
        fish.x = 0;
        fish.vx *= -1;
        fish.el.style.transform = "scaleX(1)";
      }
      else if (fish.x >= window.innerWidth - fishSize) {
        fish.x = window.innerWidth - fishSize;
        fish.vx *= -1;
        fish.el.style.transform = "scaleX(-1)";
      }

     
      if (fish.y < 0) fish.y = 0;
      if (fish.y > window.innerHeight - fishSize) fish.y = window.innerHeight - fishSize;

      fish.el.style.left = fish.x + "px";
      fish.el.style.top = fish.y + "px";
    }

    requestAnimationFrame(animate);
  }

  animate();
});
