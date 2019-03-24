"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const star_1 = require("./star");
const data_1 = require("./data");
const vue_questions_1 = require("./index/vue.questions");
console.log(vue_questions_1.vueInstance);
const convertData = (starData) => {
    let stars = [];
    starData.forEach((item) => {
        stars.push(new star_1.Star(item.commonName, item.rightAscension, item.descension, item.distance));
    });
    return stars;
};
const stars = convertData(data_1.starData);
window.stars = stars;
