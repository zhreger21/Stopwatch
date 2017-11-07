class StopWatch {

  constructor(time) {
    this._hundredths = 0;
    this._seconds = 0;
    this._minutes = 0;
    this._hours = 0;
    this._timeoutID;
    this._time = time;
  }

  addTime() {
    this._hundredths++;
    if (this._hundredths >= 100) {
      this._hundredths = 0;
      this._seconds++;
      if (this._seconds >= 60) {
        this._seconds = 0;
        this._minutes++;
        if (this._minutes >= 60) {
          this._minutes = 0;
          this._hours++;
        }
      }
    }

    let trueHundredths = "0" + this._hundredths;
    if (this._hundredths > 9) {
      trueHundredths = this._hundredths;
    }

    let trueSeconds = "0" + this._seconds;
    if (this._seconds > 9) {
      trueSeconds = this._seconds;
    }

    let trueMinutes = "0" + this._minutes;
    if (this._minutes > 9) {
      trueMinutes = this._minutes;
    }

    let trueHours = "0" + this._hours;
    if (this._hours > 9) {
      trueHours = this._hours;
    }

    this._time.textContent = trueHours + ":" + trueMinutes + ":" + trueSeconds + "." + trueHundredths;

    this.delay();
  }

  delay() {
    let that = this;
    this._timeoutID = setTimeout(function () {that.addTime()}, 10);
  }

  reset() {
    this._time.textContent = "00:00:00.00";
    this._hundredths = 0;
    this._seconds = 0;
    this._minutes = 0;
    this._hours = 0;
  }

  get timeoutID() {
    return this._timeoutID;
  }
}
