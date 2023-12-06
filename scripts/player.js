import { PlayerSprite } from "./sprite.js";

export const player = new PlayerSprite({
  position:
  {
    x: 0,
    y: 1080 - 150
  },
  velocity: {
    x: 0,
    y: 0
  },
  width: 50,
  height: 150,
  color: 'blue'
});
