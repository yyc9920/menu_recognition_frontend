import * as React from 'react';
import { differenceInCalendarDays } from 'date-fns';
import Calendar from 'react-calendar';

import restaurants from './RestaurantList'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const datesWithExtraContent = restaurants.map(res => {
    let date = res.recent.split('.');
    return(new Date(date[0], date[1]-1, date[2]));
});

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function MyCalendar() {
    function tileContent({ date, view }) {
        if (
            view === 'month' &&
            datesWithExtraContent.find((dDate) => isSameDay(dDate, date))
        ) {
            const d = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
            const restaurant = restaurants.find(r => r.recent === d);
            return <img alt={restaurant.name} src={restaurant.imgUrl} className="tileContent" />;
        }
    }

    return(
        <div className="calendar">
            <Calendar
                calendarType="US"
                tileContent={tileContent}
            />
        </div>
    );
}

export default MyCalendar;
