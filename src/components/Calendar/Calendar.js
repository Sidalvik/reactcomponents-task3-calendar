import React from 'react';
import PropTypes from 'prop-types';
import Week from './Week/Week';
import Months from '../../models/Months';

function Calendar(props) {
    const {date} = props;
      
    const daysArray = [];
    { 
      let previousMonthDays = (6 + Months.getFirstDay(date).getDay()) % 7;
      let nextMonthDays = (7 - Months.getLastDay(date).getDay()) % 7;
      
      //  month: -1 - previous; 0 - current; 1 - next
      for (let [i, month, id]  = [-previousMonthDays, -1, 0]; i < (Months.getLastDay(date).getDate() + nextMonthDays); i++, id++) {
        if (i === 0 || i === Months.getLastDay(date).getDate()) {
          month++;
        }

        daysArray.push({
          day: new Date(date.getFullYear(), date.getMonth(), i + 1).getDate(),
          month,
          id});
      }
    }
    
    const weeksArray = [];
    for (let i = 0; i  < (daysArray.length / 7); i++) {
      weeksArray.push(<Week date = {date} days = {daysArray} weekNumber = {i} key = {i}/>);
    }
    
    return (
        <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{Months.getDayName(date)}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
            <div className="ui-datepicker-material-month">{Months.getMonthNameGenitive(date)}</div>
            <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{Months.getMonthName(date)}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            {weeksArray}
          </tbody>
        </table>
      </div>
    )
}


Calendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}

export default Calendar;
