define(["require", "exports", "./product"], function (require, exports, p) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function GetProduct() {
        var random = Math.floor(Math.random() * 4);
        console.log(random);
        switch (random) {
            case 0: return new p.CocaCola();
            case 1: return new p.MilkyWay();
            case 2: return new p.Gummies();
            case 3: return new p.Hersey();
        }
    }
    exports.default = GetProduct;
});
//# sourceMappingURL=productFactory.js.map