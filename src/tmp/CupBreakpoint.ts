export class CupBreakpoint {
    constructor(public readonly x: number, public readonly y: number) { }

    static fromAbsoluteValues = (x: number, y: number, maxX: number, maxY: number) => new CupBreakpoint(x / maxX, y / maxY);
}