export default undefined;

// Matisse, Monet, Birra, Vicky, Katty

type CatName = "Matisse" | "Monet" | "Birra" | "Vicky" | "Katty";
type Cat = {
	name: CatName;
	neow(): void;
};

type CatWithTopSpeed = Cat & {
	topSpeed: number;
};

const matisse: Cat = {
	name: "Matisse",
	neow() {
		console.log("neow");
	},
};

const monet: Cat = {
	name: "Monet",
	neow() {
		console.log("neow");
	},
};

const vicky: CatWithTopSpeed = {
	name: "Vicky",
	neow() {
		console.log("neow");
	},
	topSpeed: 50,
};

function runCat(cat: Cat | CatWithTopSpeed) {
	if ("topSpeed" in cat) {
		console.log(`${cat.name} is a fast cat ${cat.topSpeed} `);
	} else {
		console.log(`${cat.name} is a slow cat`);
	}
}

const cats = [matisse, monet, vicky];

cats.forEach((cat) => runCat(cat));
