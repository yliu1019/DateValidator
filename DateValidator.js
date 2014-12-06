function DateValidator(mm, dd, yy) {
	this.mm = mm;
	this.dd = dd;
	this.yy = yy;
}

DateValidator.prototype.show = function {
	alert(this.yy + '-' + this.mm + '-' + this.dd);
}
