import { Point } from "./Point";

export class Polygon {
    private readonly _points: Point[] = [];

    addPoints = (...point: Point[]) => (this._points.push(...point), this);

    toSVGPolygonPoints = (width: number, height: number) => this._points.map((point) => `${point.x * width},${point.y * height}`).join(" ");
}