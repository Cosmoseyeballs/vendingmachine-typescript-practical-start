// /// <reference path="coin.ts" />
// /// <reference path="product.ts" /> 
// /// <reference path="productFactory.ts" />
//import coins = Money.Coins; 
import * as coins from "./coin";
import * as p from "./product";
import GetProduct from "./productFactory"

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: p.IProduct) {

    }
    stock = ko.observable(3)
    sold = ko.observable(false)
}

export class VendingMachine {
    private paid = ko.observable(0);
    cells = ko.observableArray([])
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0)
    selectedCell = ko.observable(new Cell(new p.Initial()));
    acceptedCoins: coins.Coin[] = [new coins.Dime, new coins.Quarter(), new coins.Half(), new coins.Dollar()]


    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (var index = 0; index < givenSize; index++) {
            let product = GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I´m sorry, we´re out of them!");
            return
        }
        let currentPaid = this.paid()
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100)) / 100)
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }

    acceptCoin = (coin: coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
}