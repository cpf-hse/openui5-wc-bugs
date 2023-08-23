import Dialog from "sap/ui/webc/main/Dialog";
import BaseController from "./BaseController";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	public openDialog(): void {
		const dialog = this.getView().byId("helloDialog") as Dialog;
		dialog.show(true);
	}
}
