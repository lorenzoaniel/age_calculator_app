import { m } from "framer-motion";
import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { device } from "../../styles/breakpoints";
import arrowSvg from "../../assets/svg/arrow.svg";

interface Props {
	isValid: boolean; //overallvalidation
}

const Divider: React.FC<Props> = ({ isValid }) => {
	const theme = useTheme();

	return (
		<Main>
			<Icon variants={_MotionVariants(theme).Icon} initial="initial" whileHover="whileHover">
				<img src={arrowSvg} />
			</Icon>
			<Line />
		</Main>
	);
};

const Main = styled.div(
	({ theme }) => `
  height: 6.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    height: 9.6rem;
    justify-content: flex-end;
	}
`
);

const Icon = styled(m.div)(
	({ theme }) => `
  
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  img {
    width: 50%;
    height: 50%;
  }

  @media ${device.laptop} {
    width: 9.6rem;
    height: 9.6rem;
	}
`
);

const Line = styled.div(
	({ theme }) => `
  position: absolute;
  background: ${theme.colors.line};
  height: 0.1rem;
  width: 29.5rem;
  z-index: 1;

  @media ${device.laptop} {
		width: 72.8rem;
	}
`
);

const _MotionVariants = (theme: DefaultTheme) => {
	return {
		Icon: {
			initial: {
				background: theme.colors.purple,
			},
			whileHover: {
				background: theme.colors.black,
			},
		},
	};
};

export default Divider;
