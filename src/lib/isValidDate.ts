interface Validation {
	validDay: boolean;
	validMonth: boolean;
	validYear: boolean;
}

type DateObject = {
	day: number;
	month: number;
	year: number;
};

export const isValidDate = (dateObj: DateObject): Validation => {
	const { day, month, year } = dateObj;
	const date = new Date();

	let validDay = !isNaN(day);
	let validMonth = !isNaN(month) && month >= 1 && month <= 12;
	let validYear = !isNaN(year) && year >= 1000 && year <= date.getFullYear();

	if (validYear && validMonth) {
		let daysInMonth: number;
		if (month === 2) {
			const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
			daysInMonth = isLeapYear ? 29 : 28;
		} else if ([4, 6, 9, 11].includes(month)) {
			daysInMonth = 30;
		} else {
			daysInMonth = 31;
		}

		validDay = validDay && day >= 1 && day <= daysInMonth;
	}

	return {
		validDay: validDay,
		validMonth: validMonth,
		validYear: validYear,
	};
};
