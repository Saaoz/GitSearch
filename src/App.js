import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import './css/App.css';
import './css/reset.css';
import './css/helpers.css';

import Home from './Pages/Home';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isActive, setIsActive] = useState(isDarkMode);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		setIsActive(!isActive);
	};

	const toggleLightMode = () => {
		setIsDarkMode(false);
		setIsActive(false);
	};

	const theme = isDarkMode ? 'dark' : 'light';

	return (
		<Router>
			<ThemeContext.Provider value={{ theme, toggleDarkMode, toggleLightMode }}>
				<div className={`App-${isDarkMode ? 'dark' : 'light'}`}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</ThemeContext.Provider>
		</Router>
	);
}
	export default App;
