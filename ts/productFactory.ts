// /// <reference path="product.ts" />
import * as p from "./product"


export default function GetProduct(): p.IProduct {
    let random = Math.floor(Math.random() * 4);
    console.log(random);
    switch (random) {
        case 0: return new p.CocaCola()
        case 1: return new p.MilkyWay()
        case 2: return new p.Gummies()
        case 3: return new p.Hersey()
    }
}
