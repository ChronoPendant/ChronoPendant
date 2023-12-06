import { player } from "./player.js";

// 게임 화면 설정
export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
export const gravity = 0.5;

canvas.width = 1920;
canvas.height = 1080;

// 배경 그리기
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 키보드 입력
const keys = [];
window.addEventListener('keydown', e => keys[e.keyCode] = true);
window.addEventListener('keyup', e => keys[e.keyCode] = false);

// 키보드 입력에 따른 플레이어 캐릭터 이동
window.addEventListener('keydown', e =>
{
  if (keys[37]) player.velocity.x = -5;
  if (keys[39]) player.velocity.x = 5;
  if (keys[38]) player.velocity.y = -15;
});

window.addEventListener('keyup', e =>
{
  if (!keys[37] && !keys[39]) player.velocity.x = 0;
}
);

// 게임 루프
function gameLoop()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 캐릭터 그리기
  player.update();

  requestAnimationFrame(gameLoop);
}

// 게임 시작
gameLoop();
