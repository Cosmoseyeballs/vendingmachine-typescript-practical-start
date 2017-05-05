// /// <reference path="VendingMachine.ts" />

import {VendingMachine,VendingMachineSize} from "./VendingMachine"

var mashine = new VendingMachine();
mashine.size = VendingMachineSize.medium;
ko.applyBindings(mashine)