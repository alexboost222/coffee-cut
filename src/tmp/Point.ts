import { CupBreakpoint } from "./CupBreakpoint";

export class Point {
    static fromCupBreakpoint = (breakpoint: CupBreakpoint) => new Point(breakpoint.x, breakpoint.y);
    
    constructor(public readonly x: number, public readonly y: number) { }
}