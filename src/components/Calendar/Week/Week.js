import React from 'react';
import PropTypes from 'prop-types';

function Week(props) {
    const {date, days, weekNumber} = props;
    let currentDay = date.getDate();
    let weekArray = days.slice(weekNumber * 7 , (weekNumber + 1)*7);

  return (
    <tr>
      {weekArray.map((item, index) => 
        <td key={index}
        className={

          ((item.month === 0) ? null: 'ui-datepicker-other-month') ||
          ((item.day === currentDay) ? 'ui-datepicker-today' : null)
          }
        >{item.day}</td>
      )}
    </tr>
  )
}

Week.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    days: PropTypes.instanceOf(Array).isRequired,
    weekNumber: PropTypes.number.isRequired,
}

export default Week
