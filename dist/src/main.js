"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var star_1 = require("./star");
var data_1 = require("./data");
var convertData = function (starData) {
    var stars = [];
    starData.forEach(function (item) {
        stars.push(new star_1.Star(item.commonName, item.rightAscension, item.descension, item.distance));
    });
    return stars;
};
var stars = convertData(data_1.starData);
console.log(stars);
