import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from './Components/Grid';
import Login from './Components/Login';
import Players from './Components/Players';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />}></Route>
				<Route
					path="/game"
					element={
						<div className="App">
							<br></br>
							<h1 class="ui center aligned header">Number Game !!!</h1>
							<Players />
							<Grid />
						</div>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
