import {useTheme} from 'app/providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';

import './styles/index.scss';

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
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
