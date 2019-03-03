"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Star = (function () {
    function Star(star, rightAscension, descension, distance) {
        this.star = star;
        this.cartesian = this.convertSpehericalToCartesianWithRA(rightAscension, descension, distance);
    }
    Star.prototype.convertDegreesToRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    Star.prototype.convertSpehericalToCartesianWithRA = function (rightAscension, descension, distance) {
        var phi;
        var theta;
        var rho;
        var rVector;
        phi = this.convertDegreesToRadians(rightAscension * 15);
        theta = this.convertDegreesToRadians(descension);
        rho = distance;
        rVector = rho * Math.cos(theta);
        var cartesianPoints = {
            x: rVector * Math.cos(phi),
            y: rVector * Math.sin(phi),
            z: rho * Math.sin(theta)
        };
        return cartesianPoints;
    };
    return Star;
}());
exports.Star = Star;
