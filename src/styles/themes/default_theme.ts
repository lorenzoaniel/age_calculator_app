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
		font: {
			m_label: string;
			m_input: string;
			m_input_placeholder: string;
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
	font: {
		m_label: `
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    `,
		m_input: `
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: 0.01em;

      color: ${colors_mixins.black};
    `,
		m_input_placeholder: `
			font-weight: 700;
			font-size: 2rem;
			line-height: 3rem;
			letter-spacing: 0.01em;
			opacity: 0.5;
			color: ${colors_mixins.black};
		`,
	},
};
