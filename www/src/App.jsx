import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/ui/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<header class="sticky top-0 z-50">
				<NavBar />
			</header>

			<div style={{ width: "500px", height: "1000px", background: "blue" }} />
		</div>
	);
}

export default App;
