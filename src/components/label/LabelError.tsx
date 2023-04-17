import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	errMessage: string;
	isValid: boolean;
}

const LabelError: React.FC<Props> = ({ errMessage, isValid }) => {
	return <Main>{isValid ? "" : errMessage}</Main>;
};

const Main = styled(m.span)(
	({ theme }) => `
  color: ${theme.colors.err};
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.1rem;
`
);

export default LabelError;
