var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("coin", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Coin, Quarter, Dime, Dollar, Half;
    return {
        setters: [],
        execute: function () {
            Coin = (function () {
                // private value:number;
                function Coin(value) {
                    this.value = value;
                    this.value = value;
                }
                return Coin;
            }());
            exports_1("Coin", Coin);
            Quarter = (function (_super) {
                __extends(Quarter, _super);
                function Quarter() {
                    return _super.call(this, .25) || this;
                }
                Quarter.prototype.getImageUrl = function () {
                    return "img/quarter.jpg";
                };
                return Quarter;
            }(Coin));
            exports_1("Quarter", Quarter);
            Dime = (function (_super) {
                __extends(Dime, _super);
                // private value = .10;
                // get Value(){
                //     return this.value;
                // }
                function Dime() {
                    return _super.call(this, .10) || this;
                }
                Dime.prototype.getImageUrl = function () {
                    return "img/dime.jpg";
                };
                return Dime;
            }(Coin));
            exports_1("Dime", Dime);
            Dollar = (function (_super) {
                __extends(Dollar, _super);
                // private value = .10;
                // get Value(){
                //     return this.value;
                // }
                function Dollar() {
                    return _super.call(this, 1) || this;
                }
                Dollar.prototype.getImageUrl = function () {
                    return "img/dollar.jpg";
                };
                return Dollar;
            }(Coin));
            exports_1("Dollar", Dollar);
            Half = (function (_super) {
                __extends(Half, _super);
                // private value = .10;
                // get Value(){
                //     return super.value;
                // }
                function Half() {
                    return _super.call(this, .50) || this;
                }
                Half.prototype.getImageUrl = function () {
                    return "img/half.jpg";
                };
                return Half;
            }(Coin));
            exports_1("Half", Half);
        }
    };
});
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "sodacan.png";
    };
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Potato chips";
        return _this;
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "chips.jpg";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy";
        return _this;
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "candy.jpg";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy bar";
        return _this;
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + "candybar.jpg";
    };
    return CandyBarCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
System.register("product", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Initial, CocaCola, Gummies, Hersey, MilkyWay;
    return {
        setters: [],
        execute: function () {/// <reference path="productCategory.ts" />
            Initial = (function () {
                function Initial() {
                    this.name = "Please select a product";
                    this.price = 0;
                }
                return Initial;
            }());
            exports_2("Initial", Initial);
            CocaCola = (function () {
                function CocaCola() {
                    this.name = "Coca-Cola";
                    this.price = 2.30;
                    this.category = new SodaCategory();
                }
                return CocaCola;
            }());
            exports_2("CocaCola", CocaCola);
            Gummies = (function () {
                function Gummies() {
                    this.name = "Gummies";
                    this.price = 1.90;
                    this.category = new CandyCategory();
                }
                return Gummies;
            }());
            exports_2("Gummies", Gummies);
            Hersey = (function () {
                function Hersey() {
                    this.name = "Hersey´s";
                    this.price = 1.30;
                    this.category = new CandyBarCategory();
                }
                return Hersey;
            }());
            exports_2("Hersey", Hersey);
            MilkyWay = (function () {
                function MilkyWay() {
                    this.name = "Milky Way";
                    this.price = 1.80;
                    this.category = new CandyBarCategory();
                }
                return MilkyWay;
            }());
            exports_2("MilkyWay", MilkyWay);
        }
    };
});
System.register("productFactory", ["product"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
    exports_3("default", GetProduct);
    var p;
    return {
        setters: [
            function (p_1) {
                p = p_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("VendingMachine", ["coin", "product", "productFactory"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var coins, p, productFactory_1, VendingMachineSize, Cell, VendingMachine;
    return {
        setters: [
            function (coins_1) {
                coins = coins_1;
            },
            function (p_2) {
                p = p_2;
            },
            function (productFactory_1_1) {
                productFactory_1 = productFactory_1_1;
            }
        ],
        execute: function () {
            (function (VendingMachineSize) {
                VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
                VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
                VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
            })(VendingMachineSize || (VendingMachineSize = {}));
            exports_4("VendingMachineSize", VendingMachineSize);
            Cell = (function () {
                function Cell(product) {
                    this.product = product;
                    this.stock = ko.observable(3);
                    this.sold = ko.observable(false);
                }
                return Cell;
            }());
            VendingMachine = (function () {
                function VendingMachine() {
                    var _this = this;
                    this.paid = ko.observable(0);
                    this.cells = ko.observableArray([]);
                    this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
                    this.selectedCell = ko.observable(new Cell(new p.Initial()));
                    this.acceptedCoins = [new coins.Dime, new coins.Quarter(), new coins.Half(), new coins.Dollar()];
                    this.select = function (cell) {
                        cell.sold(false);
                        _this.selectedCell(cell);
                    };
                    this.pay = function () {
                        if (_this.selectedCell().stock() < 1) {
                            alert("I´m sorry, we´re out of them!");
                            return;
                        }
                        var currentPaid = _this.paid();
                        _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
                        var currentStock = _this.selectedCell().stock();
                        _this.selectedCell().stock(currentStock - 1);
                        _this.selectedCell().sold(true);
                    };
                    this.acceptCoin = function (coin) {
                        var oldTotal = _this.paid();
                        _this.paid(oldTotal + coin.value);
                    };
                }
                Object.defineProperty(VendingMachine.prototype, "size", {
                    set: function (givenSize) {
                        this.cells([]);
                        for (var index = 0; index < givenSize; index++) {
                            var product = productFactory_1.default();
                            this.cells.push(new Cell(product));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return VendingMachine;
            }());
            exports_4("VendingMachine", VendingMachine);
        }
    };
});
// /// <reference path="VendingMachine.ts" />
System.register("bootstrapper", ["VendingMachine"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var VendingMachine_1, mashine;
    return {
        setters: [
            function (VendingMachine_1_1) {
                VendingMachine_1 = VendingMachine_1_1;
            }
        ],
        execute: function () {// /// <reference path="VendingMachine.ts" />
            mashine = new VendingMachine_1.VendingMachine();
            mashine.size = VendingMachine_1.VendingMachineSize.medium;
            ko.applyBindings(mashine);
        }
    };
});
var Moneyxxx;
(function (Moneyxxx) {
    var Coins;
    (function (Coins) {
        var imgPath = "img/";
        var Coin = (function () {
            // private value:number;
            function Coin(value) {
                this.value = value;
                this.value = value;
            }
            return Coin;
        }());
        Coins.Coin = Coin;
        var Quarter = (function (_super) {
            __extends(Quarter, _super);
            function Quarter() {
                return _super.call(this, .25) || this;
            }
            Quarter.prototype.getImageUrl = function () {
                return imgPath + "quarter.jpg";
            };
            return Quarter;
        }(Coin));
        Coins.Quarter = Quarter;
        var Dime = (function (_super) {
            __extends(Dime, _super);
            // private value = .10;
            // get Value(){
            //     return this.value;
            // }
            function Dime() {
                return _super.call(this, .10) || this;
            }
            Dime.prototype.getImageUrl = function () {
                return imgPath + "dime.jpg";
            };
            return Dime;
        }(Coin));
        Coins.Dime = Dime;
        var Dollar = (function (_super) {
            __extends(Dollar, _super);
            // private value = .10;
            // get Value(){
            //     return this.value;
            // }
            function Dollar() {
                return _super.call(this, 1) || this;
            }
            Dollar.prototype.getImageUrl = function () {
                return imgPath + "dollar.jpg";
            };
            return Dollar;
        }(Coin));
        Coins.Dollar = Dollar;
        var Half = (function (_super) {
            __extends(Half, _super);
            // private value = .10;
            // get Value(){
            //     return super.value;
            // }
            function Half() {
                return _super.call(this, .50) || this;
            }
            Half.prototype.getImageUrl = function () {
                return imgPath + "half.jpg";
            };
            return Half;
        }(Coin));
        Coins.Half = Half;
    })(Coins = Moneyxxx.Coins || (Moneyxxx.Coins = {}));
})(Moneyxxx || (Moneyxxx = {}));
//# sourceMappingURL=app.js.map