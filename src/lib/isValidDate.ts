// Defining the Validation interface
interface Validation {
	validDay: boolean;
	validMonth: boolean;
	validYear: boolean;
}

// Defining the DateObject type
type DateObject = {
	day: number;
	month: number;
	year: number;
};

// Defining the isValidDate function
export const isValidDate = (dateObj: DateObject): Validation => {
	// Extracting the day, month, and year from the date object
	const { day, month, year } = dateObj;

	// Creating a new Date object with the current date and time
	const date = new Date();

	// Checking if the year is valid
	let validYear = !isNaN(year) && year >= 1000 && year <= date.getFullYear();

	// Checking if the month is valid
	let validMonth = validYear && !isNaN(month) && month >= 1 && month <= 12;

	// Checking if the day is valid
	let validDay = validMonth && !isNaN(day) && day >= 1;

	// Checking if the day is valid for the given month and year
	if (validYear && validMonth) {
		let daysInMonth: number;
		if (month === 2) {
			// Checking if the year is a leap year to get the number of days in February
			const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
			daysInMonth = isLeapYear ? 29 : 28;
		} else if ([4, 6, 9, 11].includes(month)) {
			// April, June, September, November have 30 days
			daysInMonth = 30;
		} else {
			// January, March, May, July, August, October, December have 31 days
			daysInMonth = 31;
		}

		// Checking if the day is valid for the given month and year
		validDay = validDay && day >= 1 && day <= daysInMonth;

		// Checking if the month and day are valid for the current year
		if (year === date.getFullYear()) {
			if (month > date.getMonth() + 1) {
				validMonth = false;
			} else if (month === date.getMonth() + 1) {
				validDay = validDay && day <= date.getDate();
			}
		}
	}

	// Returning an object containing the validity of the day, month, and year
	return {
		validDay: validDay,
		validMonth: validMonth,
		validYear: validYear,
	};
};
