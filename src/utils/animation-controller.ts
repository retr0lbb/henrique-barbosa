export class AnimationController {
  private _animation: number | null = null;
  private callbackFn: () => void;
  private lastFrameTimeStamp = -1;
  private animationFrameRateinMs = 1000 / 30; //30fps

  constructor(callbackFn: () => void, fps = 30) {
    this.callbackFn = callbackFn;
    this.animationFrameRateinMs = 1000 / fps;
  }

  start() {
    if (this._animation != null) {
      return;
    }
    this._animation = requestAnimationFrame(this.update);
  }

  pause() {
    if (this._animation == null) {
      return;
    }
    this.lastFrameTimeStamp = -1;
    cancelAnimationFrame(this._animation);
    this._animation = null;
  }

  private update = (time: number) => {
    const lastFrameTimeStamp = this.lastFrameTimeStamp;
    let delta = time - lastFrameTimeStamp;

    if (this.lastFrameTimeStamp === -1) {
      this.lastFrameTimeStamp = time;
    } else {
      while (delta >= this.animationFrameRateinMs) {
        this.callbackFn();
        delta -= this.animationFrameRateinMs;
        this.lastFrameTimeStamp += this.animationFrameRateinMs;
      }
    }
    this._animation = requestAnimationFrame(this.update);
  };
}
