import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const yearDate = new Date();
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<span>Текущий год: {yearDate.getFullYear()}</span>
	// 		</header>
	// 	</div>
	// ); // вся функция является декларативным стилем
	const app = createElement(
		'div',
		{ className: 'app' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js<'),
				'and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('span', null, `Текущий год: ${yearDate.getFullYear()}`),
		),
	);

	return app;
};
