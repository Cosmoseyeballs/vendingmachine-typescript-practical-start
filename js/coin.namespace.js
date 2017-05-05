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
//# sourceMappingURL=coin.namespace.js.map