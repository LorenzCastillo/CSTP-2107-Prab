import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css"

// function App() {
// 	return (
// 		<h1>Hello world</h1>
// 	)
// }

// Header - Component
// Banner Section - Component
// Footer Section - Component

const App = () => {
	return (
		<div>
			<Header />
			<Banner />
			<h1 className="container">Hello world</h1>
			<Footer />
		</div>
	)
}

export default App;