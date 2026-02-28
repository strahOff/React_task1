import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const yearDate = new Date();
	return (
		<div className="App">
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
				<span>Текущий год: {yearDate.getFullYear()}</span>
			</header>
		</div>
	); // вся функция является декларативным стилем
};
