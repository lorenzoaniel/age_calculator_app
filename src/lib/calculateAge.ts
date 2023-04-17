type DateObject = {
	day: number;
	month: number;
	year: number;
};

export const calculateAge = (birthDateObj: DateObject): DateObject => {
	const { day, month, year } = birthDateObj;
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth() + 1; // Months are 0-based in JavaScript Date
	const currentDay = currentDate.getDate();

	let ageYears = currentYear - year;
	let ageMonths = currentMonth - month;
	let ageDays = currentDay - day;

	if (ageDays < 0) {
		ageMonths -= 1;
		const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
		ageDays += daysInPreviousMonth;
	}

	if (ageMonths < 0) {
		ageYears -= 1;
		ageMonths += 12;
	}

	return {
		day: ageDays,
		month: ageMonths,
		year: ageYears,
	};
};
