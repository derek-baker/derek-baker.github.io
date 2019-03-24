import { Star } from "./star";
import { starData } from "./data";

// import { vueInstance } from "./index/vue.questions";
// console.log(vueInstance);

const convertData = (starData: any): Star[] => {
    let stars: Star[] = [];
    starData.forEach( (item: any) => {
        stars.push(new Star(item.commonName, item.rightAscension, item.descension, item.distance));
    });
    return stars
};

const stars = convertData(starData);

// export { stars };

// We'll just assume that window will exist because I couldn't get the export/import of stars to work
declare let window: any;
window.stars = stars;


