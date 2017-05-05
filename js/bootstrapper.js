// /// <reference path="VendingMachine.ts" />
define(["require", "exports", "./VendingMachine"], function (require, exports, VendingMachine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mashine = new VendingMachine_1.VendingMachine();
    mashine.size = VendingMachine_1.VendingMachineSize.medium;
    ko.applyBindings(mashine);
});
//# sourceMappingURL=bootstrapper.js.map