import PropTypes from 'prop-types';

class Months extends Date {
    static getFirstDay(date = new Date()) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    static getLastDay(date = new Date()) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    static getDayName(date = new Date()) {
        const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return weekDays[date.getDay()];
    }

    static getMonthName(date = new Date()) {
        const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return monthName[date.getMonth()];
    }

    static getMonthNameGenitive(date = new Date()) {
        const monthNameGenitive = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        return monthNameGenitive[date.getMonth()];
    }

    static getWeekNumber(date = new Date()) {
        let oneJan = new Date(date.getFullYear(),0,1);
        let numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
        return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    }
}


Months.propTypes = {
    date: PropTypes.instanceOf(Date),
}

export default Months;