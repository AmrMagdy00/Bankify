
import { DOM } from "../elements.js";
import { UI } from "../ui/displayMovements.js";
import { accounts } from "../data/accounts.js";

export let currentUser = null;
export const login = function () {

    if (DOM.inputs.loginUsername.value == "" || DOM.inputs.loginPin.value == "") return;

    const userName = DOM.inputs.loginUsername.value;
    const pin = Number(DOM.inputs.loginPin.value);

    const loginUser = accounts.find(s => s.owner === userName && s.pin === pin)
    if (loginUser) {
        currentUser = loginUser;
        UI.Update(currentUser.movements);
    }
    else {
        console.log("USER DOESN'T EXIST");
    }

}