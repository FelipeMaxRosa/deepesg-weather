const helpers = {
  getDateTimeNow: function () {
    let dateTime = '';
    const date = new Date().getDate().toString();
    const month = new Date().getMonth().toString();
    const year = new Date().getFullYear().toString();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

  
    dateTime = date + '/';
    dateTime += month + 1 + '/';
    dateTime += year + ', ';
    dateTime += hours + ':';
    dateTime += minutes;

  
    return dateTime;
  }
}

export default helpers;