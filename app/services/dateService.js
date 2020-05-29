const jmoment = require("jalali-moment");

exports.toPersianDate = (date,format='YYYY/MM/DD') => {
    return jmoment(date).locale("fa").format(format);
};
