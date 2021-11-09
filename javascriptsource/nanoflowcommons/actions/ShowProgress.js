// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Shows default progress bar
 * @param {string} message - The text to show while loading.
 * @param {boolean} blocking - Block the user interface immediately.
 * @returns {Promise.<Big>}
 */
export async function ShowProgress(message, blocking) {
	// BEGIN USER CODE
    const id = mx.ui.showProgress(message, blocking);
    if (id !== undefined) {
        return Promise.resolve(new Big(id));
    }
    return Promise.reject(new Error("Could not open the loading dialog"));
	// END USER CODE
}
