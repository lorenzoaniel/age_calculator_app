import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

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
	
  font-style: normal;
	font-weight: 700;
	font-size: 2rem;
	line-height: 3rem;
	letter-spacing: 0.01em;
	color: ${theme.colors.black};

	&::placeholder {
  	font-weight: 700;
		font-size: 2rem;
		line-height: 3rem;
		letter-spacing: 0.01em;
		opacity: 0.5;
		color: ${theme.colors.black};
	}

	/* Disable the spinner arrows for the input element */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide the spinner arrows for input elements in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

	@media ${device.laptop} {
		height: 7.2rem;
		width: 16rem;
		
		font-size: 3.2rem;
		line-height: 4.8rem;

		&::placeholder {
  		font-size: 3.2rem;
			line-height: 4.8rem;	
		}
	}
`
);

export default Input;
