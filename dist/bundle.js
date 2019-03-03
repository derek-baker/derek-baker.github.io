!function(e){var n={};function s(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(o,i,function(n){return e[n]}.bind(null,i));return o},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s(s.s=0)}([function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=s(1),i=(e=>{let n=[];return e.forEach(e=>{n.push(new o.Star(e.commonName,e.rightAscension,e.descension,e.distance))}),n})(s(2).starData);window.stars=i},function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.Star=class{constructor(e,n,s,o){this.name=e;const i=this._convertToCartesian(n,s,o);this.x=i.x,this.y=i.y,this.z=i.z,this.rightAscension=n,this.declination=s,this.distance=o}_convertDegreesToRadians(e){return e*(Math.PI/180)}_convertToCartesian(e,n,s){const o=this._convertDegreesToRadians(15*e),i=this._convertDegreesToRadians(Math.abs(n)*Math.sign(n)),t=s;return{x:t*Math.cos(i)*Math.cos(o),y:t*Math.cos(i)*Math.sin(o),z:t*Math.sin(i)}}}},function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.starData=[{commonName:"Earth",rightAscension:0,descension:0,distance:0},{commonName:"Deneb: Cygnus",rightAscension:20.66,descension:45,distance:802},{commonName:"Castor: Gemini",rightAscension:7.5,descension:31,distance:15.6},{commonName:"Capella: Auriga",rightAscension:5.25,descension:45,distance:13.12},{commonName:"Arcturus: Bootes",rightAscension:14.25,descension:7.36,distance:11.26},{commonName:"Antares: Scorpius",rightAscension:16.5,descension:-26,distance:170},{commonName:"Spica: Virgo",rightAscension:13.5,descension:-11,distance:77},{commonName:"Regulus: Leo",rightAscension:10,descension:11,distance:24},{commonName:"Polaris: Ursa Minor",rightAscension:2.5,descension:89,distance:110},{commonName:"Algol: Perseus",rightAscension:3,descension:40,distance:28},{commonName:"Alpheratz: Andromeda",rightAscension:0,descension:29,distance:29.7},{commonName:"Altair: Aquila",rightAscension:19,descension:8,distance:5.13},{commonName:"Betelgeuse: Orion",rightAscension:6,descension:7,distance:222},{commonName:"Aldebaran: Taurus",rightAscension:4.5,descension:16,distance:65},{commonName:"Alderamin: Cepheus",rightAscension:21,descension:62,distance:15},{commonName:"Belletrix: Orion",rightAscension:11,descension:61,distance:37},{commonName:"Dubhe: Ursa Major",rightAscension:5.5,descension:6,distance:77},{commonName:"Pollux: Gemini",rightAscension:7.75,descension:28,distance:10.36},{commonName:"Denebola: Leo",rightAscension:12,descension:14.5,distance:11},{commonName:"Rigel: Orion",rightAscension:5.25,descension:-8,distance:260},{commonName:"Merak: Ursa Major",rightAscension:11,descension:56,distance:24},{commonName:"Tau Ceti",rightAscension:1.75,descension:-15,distance:11.9},{commonName:"By Draconis",rightAscension:18.5,descension:51,distance:53.6}]}]);