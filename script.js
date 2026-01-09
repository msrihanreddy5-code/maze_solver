const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileSize = 40;

const maze = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,1],
  [1,0,1,0,1,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

const player = { x: 1, y: 1 };
const goal = { x: 8, y: 8 };

function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "#00ffcc";
      } else {
        ctx.fillStyle = "#222";
      }
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function drawGoal() {
  ctx.fillStyle = "red";
  ctx.fillRect(goal.x * tileSize, goal.y * tileSize, tileSize, tileSize);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawGoal();
  drawPlayer();
}

document.addEventListener("keydown", (e) => {
  let nx = player.x;
  let ny = player.y;

  if (e.key === "ArrowUp") ny--;
  if (e.key === "ArrowDown") ny++;
  if (e.key === "ArrowLeft") nx--;
  if (e.key === "ArrowRight") nx++;

  if (maze[ny][nx] === 0) {
    player.x = nx;
    player.y = ny;
  }

  if (player.x === goal.x && player.y === goal.y) {
    alert("🎉 You escaped the maze!");
    player.x = 1;
    player.y = 1;
  }

  draw();
});

draw();
