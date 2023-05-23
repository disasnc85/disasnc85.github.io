export default undefined;

function fetch(): any {
	return {};
}

function betterFetch(isSuccess: boolean): unknown {
	return isSuccess ? { data: "user x" } : { error: "errore" };
}

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

const apiFetch = (): Response => {
	const rand = Math.round(Math.random() * 10) % 2;
	return betterFetch(rand === 1) as Response;
};

function isSuccessResponse(apif: Response): apif is SuccessResponse {
	// Fondamentale l'uso di is
	return "data" in apif;
}

const getUser = () => {
	const apif = apiFetch();
	if (isSuccessResponse(apif)) {
		console.log(`SuccessResponse: ${apif.data}`);
	} else {
		console.log(`Error response: ${apif.error}`);
	}
};

getUser();
getUser();
getUser();
getUser();
