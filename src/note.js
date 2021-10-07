class Note {
  constructor(title = '', body = '') {
    this.title = title;
    this.body = body;
    this.dateTime = this.getDateTime();
  }

  getDateTime() {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    let time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date + ' ' + time;
  }
}
