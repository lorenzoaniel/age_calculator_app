import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Divider: React.FC = () => {
	return (
		<Main>
			<Icon>
				<img src="../svg/arrow.svg" />
			</Icon>
			<Line />
		</Main>
	);
};

const Main = styled(m.div)(
	({ theme }) => `
  height: 6.4rem;
  width: 29.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
);

const Icon = styled(m.div)(
	({ theme }) => `
  background: ${theme.colors.purple};
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
);

const Line = styled(m.div)(
	({ theme }) => `
  position: absolute;
  background: ${theme.colors.line};
  height: 0.1rem;
  width: 29.5rem;
  z-index: 1;
`
);

export default Divider;
