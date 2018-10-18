/// <reference types="pixi.js" />
declare namespace PIXI.extras {
  class Bump {
    public renderer: string;
    constructor();
    addCollisionProperties(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
    hitTestPoint(point: { x: number; y: number }, sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite): void;
    hitTestCircle(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean): void;
    circleCollision(c1: PIXI.Circle, c2: PIXI.Circle, bounce: boolean, global: boolean): void;
    movingCircleCollision(c1: PIXI.Circle, c2: PIXI.Circle, global: boolean): void;
    multipleCircleCollision(circlesArr: PIXI.Circle[], global: boolean): void;
    rectangleCollision(r1: PIXI.Rectangle, r2, bounce: boolean, global: boolean): void;
    hitTestRectangle(r1: PIXI.Rectangle, r2, global: boolean): void;
    hitTestCircleRectangle(c1: PIXI.Circle, r1: PIXI.Rectangle, global: boolean): void;
    hitTestCirclePoint(c1: PIXI.Circle, point: { x: number; y: number }, global: boolean): void;
    circleRectangleCollision(c1: PIXI.Circle, r1: PIXI.Rectangle, bounce: boolean, global: boolean): void;
    circlePointCollision(c1: PIXI.Circle, point: { x: number; y: number }, bounce: boolean, global: boolean): void;
    bounceOffSurface(o, s): void;
    contain(
      sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
      container: PIXI.Container,
      bounce: boolean,
      extra: Function,
    ): void;
    outsideBounds(sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite, bounds, extra: Function): void;
    _getCenter(o, dimension, axis): void;
    hit(
      sprite: PIXI.Sprite | PIXI.extras.AnimatedSprite,
      spritesArr: PIXI.Sprite[] | PIXI.extras.AnimatedSprite[],
      react: boolean,
      bounce: boolean,
      global: boolean,
      extra: Function,
    ): void;
  }
}

declare module "pixi-plugin-bump" {
  export = PIXI.extras.Bump;
}
