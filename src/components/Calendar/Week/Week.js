import React from 'react';
import PropTypes from 'prop-types';

function Week(props) {
    const {date, days, weekNumber} = props;
    let currentDay = date.getDate();

  return (
    <tr>
      {days.slice(weekNumber * 7 , (weekNumber + 1)*7).map((item) => 
        <td key={item.id}
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
