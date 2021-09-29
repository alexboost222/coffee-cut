import LiquidTypes from "./LiquidTypes";

export class LiquidLayer {
  constructor(
    public readonly type: string,
    public readonly volumePercent: number
  ) {}

  get color() {
    // @ts-expect-error
    return LiquidTypes[this.type].color;
  }
}
