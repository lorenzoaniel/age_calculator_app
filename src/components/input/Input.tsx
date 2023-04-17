import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	id: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isValid: boolean;
	placeholder: string;
}

const Input: React.FC<Props> = ({ id, name, onChange, isValid, placeholder }) => {
	return (
		<Main
			isValid={isValid}
			placeholder={placeholder}
			id={id}
			name={name}
			type="number"
			onChange={onChange}
			required
		/>
	);
};

interface Main {
	isValid: boolean;
}

const Main = styled(m.input)<Main>(
	({ theme, isValid }) => `
  width: 8.767rem;
  height: 5.4rem;

  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${isValid ? theme.colors.grey : theme.colors.err};
	
  ${theme.font.m_input}

	&::placeholder {
  	${theme.font.m_input_placeholder}
	}
`
);

export default Input;
