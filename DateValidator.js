function DateValidator(yyyy, mm, dd) {
	this.yyyy = yyyy;
	this.mm = mm;
	this.dd = dd;

	var tmp_yyyy = parseInt(this.yyyy);
	if(tmp_yyyy >= 1000 && tmp_yyyy <= 9999)
		this.isCurrentYearValid = true;
	else
		this.isCurrentYearValid = false;

	var tmp_mm = parseInt(this.mm);
	if(tmp_mm <= 12 && tmp_mm >= 1)
		this.isCurrentMonthValid = true;
	else
		this.isCurrentMonthValid = false;

	var tmp_dd = parseInt(this.dd);
	if(tmp_dd >= 1 && tmp_dd <= 31) {
        if(this.isCurrentMonthValid) {
            if(tmp_mm == 4 || tmp_mm == 6 || tmp_mm == 9 || tmp_mm == 11) {
                if(tmp_dd <= 30)
                    this.isCurrentDayValid = true;
                else
                    this.isCurrentDayValid = false;
            } else if(tmp_mm == 2) {
                if(this.isCurrentYearValid) {
                    if((this.isCurrentYearALeapYear && tmp_dd <= 29) || (this.isCurrentYearALeapYear == false && tmp_dd <= 28))
                        this.isCurrentDayValid = true;
                    else
                        this.isCurrentDayValid = false;
                } else if (tmp_dd <= 29) {
                    this.isCurrentDayValid = true;
                } else {
                    this.isCurrentDayValid = false;
                }
            } else  {
                this.isCurrentDayValid = true;
            }
        } else {
            this.isCurrentDayValid = true;
        }
    } else {
        this.isCurrentDayValid = false;
    }

	this.currentYear = function() {
		if(this.isCurrentYearValid)
			return tmp_yyyy;
		else
			return undefined;
	}

	this.isCurrentYearALeapYear = function() {
		if(this.isCurrentYearValid)
			return this.tmp_yyyy % 4 == 0 ? true : false;
		else
			return undefined;
	}

	this.previousYear = function() {
		if(this.isCurrentYearValid) {
			if(tmp_yyyy > 1000)
				return DateValidator(tmp_yyyy - 1, mm, dd);
			else
				return undefined;
		} else {
			return undefined;
		}
	}

	this.nextYear = function() {
		if(this.isCurrentYearValid) {
			if(tmp_yyyy < 9999)
				return DateValidator(tmp_yyyy + 1, mm, dd);
			else
				return undefined;
		} else {
			return undefined;
		}
	}

	this.currentMonth = function() {
		if(this.isCurrentMonthValid)
			return tmp_mm;
		else
			return undefined;
	}

	this.previousMonth = function() {
		if(this.isCurrentMonthValid) {
			if(tmp_mm > 1)
				return DateValidator(yyyy, tmp_mm - 1, dd);
			else 
				return DateValidator(this.previousYear(), 12, dd);
		} else {
			return undefined;
		}
	}

	this.nextMonth = function() {
		if(this.isCurrentMonthValid) {
			if(tmp_mm < 12)
				return DateValidator(yyyy, tmp_mm + 1, dd);
			else 
				return DateValidator(this.nextYear(), 1, dd);
		} else {
			return undefined;
		}
	}

	this.currentDay = function() {
		if(this.isCurrentDayValid)
			return tmp_dd;
		else
			return undefined;
	}

	this.previousDay = function() {
		if(this.isCurrentDayValid) {
			if(tmp_dd > 1)
				return DateValidator(yyyy, mm, tmp_dd - 1);
			else 
				return undefined;
		} else {
			return undefined;
		}
	}

	this.nextDay = function() {
		if(this.isCurrentDayValid) {
			if(this.isCurrentMonthValid) {
				var upper_b = 31;
				if(this.currentMonth == 4 || this.currentMonth == 6 || this.currentMonth == 9 || this.currentMonth == 11) {
					upper_b = 30;
				} else if (this.currentMonth == 2) {
					if(this.isCurrentYearValid == false || this.isCurrentYearALeapYear)
						upper_b = 29;
					else
						upper_b = 28;
				}

				if(tmp_dd < upper_b)
					return DateValidator(yyyy, mm, tmp_dd + 1);
				else {
					var nm = this.nextMonth();
					return DateValidator(nm.yy, nm.mm, 1);
				}
			} else if(tmp_dd == 31) {
				return this;
			} else {
				return DateValidator(yyyy, mm, tmp_dd + 1);
			}
		} else {
			return undefined;
		}
	}

	this.nicePrint = function() {
		console.log("Year: " + this.yyyy);
		console.log("Month: " + this.mm);
		console.log("Day: " + this.dd);
	}
}
