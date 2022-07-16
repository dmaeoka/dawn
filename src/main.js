/**
 * imports
 */
import "./css/main.scss"
import Alpine from "alpinejs"
import Header from "./header"

Alpine.data("announcement", () => ({
	init() {
		console.log("announcement");
	},
}));

Alpine.data("header", Header);

Alpine.data("login", () => ({
	login: true,

	init() {
		console.log("Alpine Header");
	},

	toggleLogin(e) {
		try {
			this.login = !this.login;
		} catch (error) {
			console.warn(error);
		}
	},
}));

window.Alpine = Alpine;

Alpine.start();
