import {useTheme} from 'app/providers/ThemeProvider';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';
import {AppRouter} from 'app/providers/router';
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
			<AppRouter />
		</div>
	);
};

export default App;
