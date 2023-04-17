import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	value: number;
	title: string;
	isValid: boolean;
}

const LabelOutput: React.FC<Props> = ({ value, title, isValid }) => {
	return (
		<Main>
			<Value>{isValid ? value : "--"}</Value>
			<Title>{title}</Title>
		</Main>
	);
};

const Main = styled(m.div)(
	({ theme }) => `
  height: 6.4rem;
  width: 29.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.8rem;
`
);

const Value = styled(m.span)(
	({ theme }) => `
  color: ${theme.colors.purple};
  font-style: italic;
  font-weight: 800;
  font-size: 5.6rem;
  line-height: 110%;
  letter-spacing: -0.02em;
`
);

const Title = styled(m.span)(
	({ theme }) => `
  color: ${theme.colors.black};
  font-style: italic;
  font-weight: 800;
  font-size: 56px;
  line-height: 110%;
  letter-spacing: -0.02em;
`
);

export default LabelOutput;
