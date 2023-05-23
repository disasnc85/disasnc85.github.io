type Person = {
	name: string;
	livesIn?: string;
	greet(greeting: string): string;
	age: string | number;
};

const p: Person = {
	name: "Claus",
	livesIn: "milano",
	greet(greeting: string): string {
		return `${greeting} ${this.name}`;
	},
	age: 0,
};

const e: Readonly<Person> = p;

function doSomething(person: Readonly<Person>) {
	// person.name = "Antonio";
}

doSomething(p);

//Readonly <T>
type AllBoolean<T> = {
	[Property in keyof T]: boolean;
};

const c: AllBoolean<Person> = {
	name: true,
	livesIn: false,
	greet: true,
	age: true,
};

const f: Readonly<Person> = p; // ok
// const g: AllBoolean<Person> = p; // ko
