import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import './index.scss';
import {AboutPageAsync} from './pages/About/AboutPage.async';
import {HomePageAsync} from './pages/Home/HomePage.async';

const App = () => {
	return (
		<div className="app">
			<Link to="/" className="link">
				Home
			</Link>
			<Link to="/about" className="link">
				About
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePageAsync />}></Route>
					<Route path="/about" element={<AboutPageAsync />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
