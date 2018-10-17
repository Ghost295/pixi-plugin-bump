/// <reference types="pixi.js" />
declare namespace PIXI.extras.Bump {
  let renderer: string;
}

declare module "pixi-plugin-bump" {
  export = PIXI.extras.Bump;
  function addCollisionProperties(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
  function hitTestPoint(point: { x: number; y: number }, sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
  function hitTestCircle(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean = false): void;
  function circleCollision(c1: PIXI.Circle, c2: PIXI.Circle, bounce: boolean = false, global: boolean = false): void;
  function movingCircleCollision(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean = false): void;
  function multipleCircleCollision(circlesArr: PIXI.Circle[], global: boolean = false): void;
  function rectangleCollision(r1: PIXI.Rectangle, r2, bounce: boolean = false, global: boolean = true): void;
  function hitTestRectangle(r1: PIXI.Rectangle, r2, global: boolean = false): void;
  function hitTestCircleRectangle(c1: PIXI.Circle, r1: PIXI.Rectangle, global: boolean = false): void;
  function hitTestCirclePoint(c1: PIXI.Circle, point: { x: number; y: number }, global: boolean = false): void;
  function circleRectangleCollision(
    c1: PIXI.Circle,
    r1: PIXI.Rectangle,
    bounce: boolean = false,
    global: boolean = false,
  ): void;
  function circlePointCollision(
    c1: PIXI.Circle,
    point: { x: number; y: number },
    bounce: boolean = false,
    global: boolean = false,
  ): void;
  function bounceOffSurface(o, s): void;
  function contain(
    sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
    container: PIXI.Container,
    bounce: boolean = false,
    extra: Function,
  ): void;
  function outsideBounds(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite, bounds, extra: Function): void;
  function _getCenter(o, dimension, axis): void;
  function hit(
    sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
    spritesArr: PIXI.Sprite[] | PIXI.extras.AnimatedSprite[],
    react: boolean = false,
    bounce: boolean = false,
    global: boolean = false,
    extra: Function,
  ): void;
}
