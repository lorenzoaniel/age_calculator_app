import { m } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

interface Props {
	title: string;
	forLabel: string;
	isValid: boolean;
}

const LabelInput: React.FC<Props> = ({ title, forLabel, isValid }) => {
	return (
		<Main isValid={isValid} htmlFor={forLabel}>
			{title}
		</Main>
	);
};

interface Main {
	isValid: boolean;
}

const Main = styled(m.label)<Main>(
	({ theme, isValid }) => `
  font-style: normal;
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.8rem;
	letter-spacing: 0.25em;
	text-transform: uppercase;
	color: ${isValid ? theme.colors.grey : theme.colors.err};

	@media ${device.laptop} {
		font-size: 1.4rem;
    line-height: 2.1rem;
	}
`
);

export default LabelInput;
