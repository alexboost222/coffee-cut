import { CupBreakpoint } from "./CupBreakpoint";
import { LiquidLayer } from "./LiquidLayer";
import { Point } from "./Point";
import { Polygon } from "./Polygon";

export class Cup {
    static flatWhite = () => new Cup()
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(150, 68, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(151, 74, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(163, 110, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(191, 238, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(193, 272, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(193, 278, 193, 310))
        .addBreakpoint(CupBreakpoint.fromAbsoluteValues(193, 310, 193, 310));

    private readonly _breakpoints: CupBreakpoint[] = [];
    private readonly _liquidLayers: LiquidLayer[] = [];

    addBreakpoint = (breakpoint: CupBreakpoint) => (this._breakpoints.push(breakpoint), this);

    addLiquidLayer = (liquidLayer: LiquidLayer) => (this._liquidLayers.push(liquidLayer), this);

    generatePolygons = () => {
        const polygons: Polygon[] = [];
        let currentVolumePercent = 0;
        let prevBreakpoint = undefined;

        for (const liquidLayer of this._liquidLayers) {
            console.log("liquid layer", liquidLayer);
            const nextVolumePercent = currentVolumePercent + liquidLayer.volumePercent;
            const breakpoints = this._breakpoints.filter(({ y }) => y >= currentVolumePercent && y <= nextVolumePercent);

            if (prevBreakpoint) {
                breakpoints.unshift(prevBreakpoint);
            }

            const layerPoints = [];

            for (const breakpoint of breakpoints) {
                layerPoints.push(Point.fromCupBreakpoint(breakpoint));
            }

            const mirrorPoints = [];

            for (const layerPoint of [...layerPoints].reverse()) {
                mirrorPoints.push(new Point(-layerPoint.x, layerPoint.y));
            }

            layerPoints.push(...mirrorPoints);

            console.log("layer points", layerPoints);
            polygons.push(new Polygon().addPoints(...layerPoints.map((point) => new Point(point.x, 1 - point.y))));

            prevBreakpoint = breakpoints[breakpoints.length - 1];
            currentVolumePercent = nextVolumePercent;
        }

        return polygons;
    }
}