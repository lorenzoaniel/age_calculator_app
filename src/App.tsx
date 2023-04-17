import { m } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "./styles/breakpoints";
import LabelInput from "./components/label/LabelInput";
import Input from "./components/input/Input";
import Divider from "./components/divider/Divider";
import LabelOutput from "./components/label/LabelOutput";
import { isValidDate } from "./lib/isValidDate";
import LabelError from "./components/label/LabelError";
import { calculateAge } from "./lib/calculateAge";

interface Data {
	day: number;
	month: number;
	year: number;
}

interface Validation {
	validDay: boolean;
	validMonth: boolean;
	validYear: boolean;
}

const App: React.FC = () => {
	const [overAllValidation, setOverAllValidation] = useState(false);

	const [isValid, setIsValid] = useState<Validation>({
		validDay: false,
		validMonth: false,
		validYear: false,
	});

	const [data, setData] = useState<Data>({
		day: 0,
		month: 0,
		year: 0,
	});

	const [age, setAge] = useState<Data>({
		day: 0,
		month: 0,
		year: 0,
	});

	const checkOverAllValidation = (data: Validation) => {
		return data.validDay && data.validMonth && data.validYear;
	};

	const changeData = (value: number, valueType: string) => {
		const newData: Data = {
			...data,
			[valueType]: value,
		};

		const newIsValid = isValidDate(newData);
		setData(newData);
		setIsValid(newIsValid);
		setOverAllValidation(checkOverAllValidation(newIsValid));
	};

	useEffect(() => {
		setAge(calculateAge(data));
	}, [overAllValidation]);

	return (
		<Main>
			<InputSection>
				<LabelWithInput className="day">
					<LabelInput title={"day"} forLabel={"day-input"} isValid={overAllValidation} />
					<Input
						id={"day-input"}
						name={"day"}
						onChange={(event) => changeData(parseInt(event.target.value), "day")}
						isValid={overAllValidation}
						placeholder={"DD"}
					/>
					<LabelError errMessage={"Must be a valid day"} isValid={isValid.validDay} />
				</LabelWithInput>
				<LabelWithInput className="month">
					<LabelInput title={"month"} forLabel={"month-input"} isValid={overAllValidation} />
					<Input
						id={"month-input"}
						name={"month"}
						onChange={(event) => changeData(parseInt(event.target.value), "month")}
						isValid={overAllValidation}
						placeholder={"MM"}
					/>
					<LabelError errMessage={"Must be a valid month"} isValid={isValid.validMonth} />
				</LabelWithInput>
				<LabelWithInput className="year">
					<LabelInput title={"year"} forLabel={"year-input"} isValid={overAllValidation} />
					<Input
						id={"year-input"}
						name={"year"}
						onChange={(event) => changeData(parseInt(event.target.value), "year")}
						isValid={overAllValidation}
						placeholder={"YYYY"}
					/>
					<LabelError errMessage={"Must be in the past"} isValid={isValid.validYear} />
				</LabelWithInput>
			</InputSection>
			<Divider />
			<OutputSection>
				<LabelOutput value={age.year} title={"years"} isValid={overAllValidation} />
				<LabelOutput value={age.month} title={"months"} isValid={overAllValidation} />
				<LabelOutput value={age.day} title={"days"} isValid={overAllValidation} />
			</OutputSection>
		</Main>
	);
};

const Main = styled(m.main)(
	({ theme }) => `
  background: ${theme.background.secondary};
  height: 48.6rem;
  width: 34.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.2rem;


  margin-top: 8.8rem;
  border-radius: 2.4rem 2.4rem 10rem 2.4rem;

  @media ${device.laptop} {
    width: 84rem;
    height: 68rem;
    margin-top: 17.1rem;
    border-radius: 2.4rem 2.4rem 20rem 2.4rem;
  }
`
);

const InputSection = styled(m.section)(
	({ theme }) => `
  // background: red;
  height: fit-content;
  width: 29.5rem;
  display: flex;
  column-gap: 1.6rem;
`
);

const LabelWithInput = styled(m.div)(
	({ theme }) => `
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`
);

const OutputSection = styled(m.section)(
	({ theme }) => `
  // background: green;
  height: 19rem;
  width: 29.5rem;
`
);

export default App;
