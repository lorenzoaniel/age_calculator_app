import { m } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

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
  ${theme.font.m_label}
	color: ${isValid ? theme.colors.grey : theme.colors.err};
`
);

export default LabelInput;
