import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Clubs from "./pages/clubs";
import About from "./pages/about";
import ClubDetail from "./pages/clubDetail";
import NotFound from "./pages/notfound";

export default function App() {
	return (
		<main>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clubs" element={<Clubs />} />
				<Route path="/clubs/:id" element={<ClubDetail />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</main>
	);
}
