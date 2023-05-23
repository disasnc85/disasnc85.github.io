export default undefined;
type Lingue = "it" | "de" | "fr";
type Messaggio = {
	lingua: Lingue;
	parole: string[];
};

function greet(greeting: string | Messaggio) {
	// Type guard
	if (typeof greeting === "string") {
		console.log(`Ciao ${greeting}`);
	} else {
		if (greeting.lingua === "it") {
			console.log(`Ciao ${greeting.parole.join(" ")}`);
		}
		if (greeting.lingua === "fr") {
			console.log(`Bonjouor ${greeting.parole.join(" ")}`);
		}
		if (greeting.lingua === "de") {
			console.log(`Hallo ${greeting.parole.join(" ")}`);
		} 
	}
}
greet("Claus");
greet({ lingua: "fr", parole: ["Antonio"] });
greet({ lingua: "it", parole: ["Antonio"] });
greet({ lingua: "de", parole: ["Antonio"] });
