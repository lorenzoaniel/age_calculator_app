import { DefaultTheme } from "styled-components";
import { colors_mixins } from "../mixins/colors_mixins";

declare module "styled-components" {
	export interface DefaultTheme {
		background: {
			primary: string;
			secondary: string;
		};
		colors: {
			line: string;
			purple: string;
			black: string;
			err: string;
			grey: string;
		};
	}
}

export const default_theme: DefaultTheme = {
	background: {
		primary: colors_mixins.lightgrey,
		secondary: colors_mixins.white,
	},
	colors: {
		line: colors_mixins.line,
		purple: colors_mixins.purple,
		black: colors_mixins.black,
		err: colors_mixins.red,
		grey: colors_mixins.grey,
	},
};
