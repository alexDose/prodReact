import {render} from 'react-dom';
import App from 'app/App';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import {WindowError} from "widgets/WindowError";

render(
	<BrowserRouter>
		<ErrorBoundary fallback={<WindowError/>}>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root')
);
