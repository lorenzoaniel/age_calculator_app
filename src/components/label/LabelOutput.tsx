import { m, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

interface Props {
	value: number;
	title: string;
	isValid: boolean;
}

const LabelOutput: React.FC<Props> = ({ value, title, isValid }) => {
	const valControls = useAnimation();
	const prevValue = useRef<number | null>(null); //prevents aniamting twice

	// useEffect(() => {
	// 	if (!isValid) {
	// 		valControls.start({
	// 			opacity: [0, 1],
	// 			rotateX: 0,
	// 			transition: {
	// 				type: "spring",
	// 				stiffness: 300,
	// 				damping: 10,
	// 			},
	// 		});
	// 	} else {
	// 		valControls.start({
	// 			opacity: [0, 1],
	// 			rotateX: 360,
	// 			transition: {
	// 				type: "spring",
	// 				stiffness: 300,
	// 				damping: 10,
	// 			},
	// 		});
	// 	}
	// }, [isValid, valControls, value]);

	useEffect(() => {
		const animateValue = async () => {
			// Animate to 0 opacity and reset rotation
			await valControls.start({
				// opacity: 0,
				rotateX: 0,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 10,
				},
			});

			// Animate back to 1 opacity and rotate
			valControls.start({
				// opacity: 1,
				rotateX: 360,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 10,
				},
			});
		};

		if (isValid && prevValue.current !== value) {
			animateValue();
			prevValue.current = value;
		}
	}, [isValid, value]);

	return (
		<Main>
			<Value animate={valControls}>{isValid ? value : "--"}</Value>
			<Title>{title}</Title>
		</Main>
	);
};

const Main = styled(m.div)(
	({ theme }) => `
  height: fit-content;
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

  @media ${device.laptop} {
		font-size: 10.4rem;
	}
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

  @media ${device.laptop} {
		font-size: 10.4rem;
	}
`
);

export default LabelOutput;
