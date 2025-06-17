import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from './helpers/classNames/classNames';

import {AboutPageAsync} from './pages/About/AboutPage.async';
import {HomePageAsync} from './pages/Home/HomePage.async';
import './styles/index.scss';
import {useTheme} from './theme/useTheme';

const App = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<div>
				<button onClick={toggleTheme}>Toggle mode</button>
			</div>
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
