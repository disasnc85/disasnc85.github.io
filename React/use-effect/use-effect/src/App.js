import logo from "./logo.svg";
import "./App.css";
import { StarRating } from "./StarRating";
import { Clock } from "./Clock";
import { UserStorage } from "./UserStorage";

function App() {
	return (
		<div className="App">
			<StarRating totalStars={5} />
			<Clock />
			<UserStorage />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
