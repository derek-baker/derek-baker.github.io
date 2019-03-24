"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
exports.vueInstance = new vue_1.default({
    el: '#Questions',
    data: {
        questions: [
            {
                question: 'Stars in belt of Orion? Name two stars not in the belt?',
                answer: 'Alnitak, Alnilam, Mintaka (Others not in belt: Saiph, Rigel)'
            },
            {
                question: 'Alpha star in Cepheus?',
                answer: 'Alderamin/Cephei'
            },
            {
                question: '5 stars in aphorism of Big Dipper/Ursa-Major?',
                answer: 'Pointers are: Merak, Dubhe. Others are: Alkaid, Mizar, Alioth'
            },
            {
                question: 'Alpha star in Scorpius? What type of star is it?',
                answer: 'Antares/Scorpii (which is a super giant red star)'
            },
            {
                question: 'Two stars from Gemini? Which was immortal? Who fathered the twins?',
                answer: 'Castor and Pollux(mythical character was immortal) (Zeus fathered both twins)'
            },
            {
                question: 'Two stars from Perseus? Who did he rescue? What was his magic horse\'s name? Name of monster he killed?',
                answer: 'Mirfak, Algol(winking demon). Andromeda, Pegasus, Cetus'
            },
            {
                question: 'Alpha star in Cygnus?',
                answer: 'Deneb'
            },
            {
                question: '3 stars in Leo Major?',
                answer: 'Regulus(heart of the lion), Denebola(tail), Algiebra'
            },
            {
                question: 'Brightest star in Virgo?',
                answer: 'Spica'
            },
            {
                question: '2 stars from Taurus? What is M45?',
                answer: 'Aldebaran, Elnath, Pleides(The Seven Sisters and Subaru'
            },
            {
                question: 'Alpha star in Bootes? What does Bootes mean?',
                answer: 'Arcturus. It means: herdsman.'
            },
            {
                question: 'Name alpha star in Lyra? What does lyra mean?',
                answer: 'Vega. It means harp'
            }
        ]
    }
});
