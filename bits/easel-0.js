'use strict';

class BDayEasel extends HTMLElement {
	connectedCallback() {
		console.log("element connected");
	}

	constructor() {
		super();
	}
};

customElements.define("bday-easel", BDayEasel);
