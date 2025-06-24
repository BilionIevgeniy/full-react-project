import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames';
import {Navbar} from 'widgets/Navbar';
import './styles/index.scss';

const App = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div>
				<button onClick={toggleTheme}>Toggle mode</button>
			</div>
			<AppRouter />
		</div>
	);
};

export default App;
