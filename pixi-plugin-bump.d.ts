/// <reference types="pixi.js" />
declare namespace PIXI.extras {
  class Bump {
    public renderer: string;
    constructor(displayObject: PIXI.DisplayObject);
    addCollisionProperties(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
    hitTestPoint(point: { x: number; y: number }, sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
    hitTestCircle(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean = false): void;
    circleCollision(c1: PIXI.Circle, c2: PIXI.Circle, bounce: boolean = false, global: boolean = false): void;
    movingCircleCollision(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean = false): void;
    multipleCircleCollision(circlesArr: PIXI.Circle[], global: boolean = false): void;
    rectangleCollision(r1: PIXI.Rectangle, r2, bounce: boolean = false, global: boolean = true): void;
    hitTestRectangle(r1: PIXI.Rectangle, r2, global: boolean = false): void;
    hitTestCircleRectangle(c1: PIXI.Circle, r1: PIXI.Rectangle, global: boolean = false): void;
    hitTestCirclePoint(c1: PIXI.Circle, point: { x: number; y: number }, global: boolean = false): void;
    circleRectangleCollision(
      c1: PIXI.Circle,
      r1: PIXI.Rectangle,
      bounce: boolean = false,
      global: boolean = false,
    ): void;
    circlePointCollision(
      c1: PIXI.Circle,
      point: { x: number; y: number },
      bounce: boolean = false,
      global: boolean = false,
    ): void;
    bounceOffSurface(o, s): void;
    contain(
      sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
      container: PIXI.Container,
      bounce: boolean = false,
      extra: Function,
    ): void;
    outsideBounds(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite, bounds, extra: Function): void;
    _getCenter(o, dimension, axis): void;
    hit(
      sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
      spritesArr: PIXI.Sprite[] | PIXI.extras.AnimatedSprite[],
      react: boolean = false,
      bounce: boolean = false,
      global: boolean = false,
      extra: Function,
    ): void;
  }
}

declare module "pixi-plugin-bump" {
  export = PIXI.extras.Bump;
}
