import { ctx, canvas, gravity } from './main.js';

class Sprite
{
  constructor({ position, width, height, color })
  {
    this.position = position;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // 그리기
  draw()
  {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // 업데이트
  update()
  {
    this.draw();
  }
}

class PlayerSprite extends Sprite
{
  constructor({ position, velocity, width, height, color })
  {
    super({ position, width, height, color });
    this.velocity = velocity;
  }

  draw()
  {
    super.draw();
  }

  update()
  {
    super.update();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // 중력
    if (this.position.y + this.height + this.velocity.y >= canvas.height)
    {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}

export { Sprite, PlayerSprite };