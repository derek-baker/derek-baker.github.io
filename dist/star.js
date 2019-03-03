"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Star {
    constructor(commonName, rightAscension, declination, distance) {
        this.name = commonName;
        const cartesians = this._convertToCartesian(rightAscension, declination, distance);
        this.x = cartesians.x;
        this.y = cartesians.y;
        this.z = cartesians.z;
        this.rightAscension = rightAscension;
        this.declination = declination;
        this.distance = distance;
    }
    _convertDegreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    _convertToCartesian(rightAscension, declinationDegrees, distance) {
        const a = this._convertDegreesToRadians(rightAscension * 15);
        const b = this._convertDegreesToRadians(Math.abs(declinationDegrees) * Math.sign(declinationDegrees));
        const c = distance;
        return {
            x: (c * Math.cos(b)) * Math.cos(a),
            y: (c * Math.cos(b)) * Math.sin(a),
            z: (c * Math.sin(b))
        };
    }
}
exports.Star = Star;
