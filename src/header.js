export default () => ({
	open: false,

	init() {
		console.log("Alpine Header");
	},

	toggleMenu(e) {
		try {
			this.open = !this.open;
		} catch (error) {
			console.warn(error);
		}
	},
});
