import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Clubs from "./pages/clubs";
import About from "./pages/about";

export default function App() {
	return (
		<BrowserRouter>
			<main>
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/clubs" element={<Clubs />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</main>
		</BrowserRouter>
	);
}
