let bg = new Image();
bg.src = "assets/background/bg_back_A.png";

function initCanvas() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let canvasWidth = ctx.canvas.width;
  let canvasHeight = ctx.canvas.height;

  function Background() {
    (this.x = 0), (this.y = 0), (this.w = bg.width), (this.h = bg.height);

    this.render = () => {
      ctx.drawImage(bg, (this.x -= 3), 0);
      if (this.x <= -479) {
        this.x = 0;
      }
    };
  }

  let background = new Background();

  function animate() {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    background.render();
    ctx.restore();
  }
  let animateInterval = setInterval(animate, 30);
}
window.addEventListener("load", function(event) {
  initCanvas();
});
