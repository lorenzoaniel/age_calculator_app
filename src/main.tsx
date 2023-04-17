import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { default_theme } from "./styles/themes/default_theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={default_theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
