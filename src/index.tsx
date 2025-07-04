import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { LanguageProvider } from 'app/providers/LanguageProvider/ui/LanguageProvider';

render(
	<BrowserRouter>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
