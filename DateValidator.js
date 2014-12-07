function DateValidator(mm, dd, yy) {
	this.mm = parseInt(mm);
	this.dd = parseInt(dd);
	this.yy = parseInt(yy);

	this.is_mm_empty = (mm == '' || isNaN(mm)) ? true : false;
	this.is_dd_empty = (dd == '' || isNaN(dd)) ? true : false;
	this.is_yy_empty = (yy == '' || isNaN(yy)) ? true : false;

	this.isLeapYear = yy % 4 == 0 ? true : false;
}

DateValidator.prototype.previousMonth = function() {
	
}

DateValidator.prototype.nextMonth = function() {
	
}

DateValidator.prototype.previousDay = function() {
	
}

DateValidator.prototype.nextDay = function() {
	
}

DateValidator.prototype.previousYear = function() {
	
}

DateValidator.prototype.nextYear = function() {
	
}

DateValidator.prototype.isValid = function() {
	if(this.is_mm_empty || this.is_dd_empty || this.is_yy_empty
		|| this.mm < 1 || this.mm > 12 || this.dd < 1) {
		return false;
	} else if (this.mm == 1 || this.mm == 3 || this.mm == 5
		|| this.mm == 7 || this.mm == 8 || this.mm == 10
		|| this.mm == 12 ) {
		if (this.dd <= 31)
			return true;
		else
			return false;
	} else if (this.mm == 4 || this.mm == 6 || this.mm == 9
		|| this.mm == 11) {
		if (this.dd <= 30)
			return true;
		else
			return false;
	} else if (this.isLeapYear) {
		if (this.dd <= 29)
			return true;
		else
			return false;
	} else {
		if (this.dd <= 28)
			return true;
		else
			return false;
	}
}
