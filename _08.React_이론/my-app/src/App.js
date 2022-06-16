import './App.css';
import Header from './components/Header';
import Welcome from "./components/Welcome";

function App() {
	const info = {
		firstName: 'Yeji',
		lastName: 'Lee',
		withImg: true,
	}
	return (
		<div className="App">
			<Header />
			<Welcome {...info} />
		</div>
	);
}

export default App;
