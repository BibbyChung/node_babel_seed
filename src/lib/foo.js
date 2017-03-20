export class Foo {
	constructor(name) {

		this.name = name;
		this.age = 18;

	}

	get info() {
		return `I'm ${this.name}, my age is ${this.age}`;
	}

	getFullInfo() {
		return this.info;
	}
	async getFullInfoAsync() {

		let p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.info);
			}, 1000);
		})

		let r = await p;
		return r;

	}
}