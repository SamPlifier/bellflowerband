import React from 'react';
import axios from 'axios';


class Calendar extends React.Component {
    state = {
        calendarEvents: [],
    }

    componentDidMount() {
        axios.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8')
            .then(res => {
                let events = res.data.items;
                events = events.sort((a, b) => (Date.parse(a.start.dateTime.toString()) > Date.parse(b.start.dateTime.toString()) ? 1: -1));
                console.log(events);
                this.setState({ calendarEvents: events });
            })
    }
    date(utcDate, type) {
        let date = new Date(utcDate);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
        const dateMaker = {
            get day() {return days[date.getDay()]},
            get dayNum() {return date.getDate()},
            get month() {return months[date.getMonth()]},
            get year() {return date.getFullYear()},
            get hour() {return date.getHours()},
            get minute() {return date.getMinutes()},
            get localTime() {return date.toLocaleTimeString().slice(0, -6).concat(date.toLocaleTimeString().slice(-3));}
        }
        let formattedDate;
        switch (type) {
            case 'day':
                formattedDate = dateMaker.day;
                break;
            case 'dayNum':
                formattedDate = dateMaker.dayNum;
                break;
            case 'month':
                formattedDate = dateMaker.month;
                break;
            case 'year':
                formattedDate = dateMaker.year;
                break;
            case 'hour':
                formattedDate = dateMaker.hour;
                break;
            case 'minute':
                formattedDate = dateMaker.minute;
                break;
            case 'localTime':
                formattedDate = dateMaker.localTime;
                break;
            default:
                break;

        }
        return formattedDate;
    }

    render() {
        const eventsList = (
            this.state.calendarEvents.map((calEvent, i) => {
                return  <div className="eventCard" key={i}>
                        <div className="dayNameNum"></div>
                            <p>{this.date(calEvent.start.dateTime, 'day')}, {this.date(calEvent.start.dateTime, 'month')} {this.date(calEvent.start.dateTime, 'dayNum')}</p>
                            <p>{this.date(calEvent.start.dateTime, 'localTime')} - {this.date(calEvent.end.dateTime, 'localTime')}</p>
                            <p>{calEvent.summary}</p>
                            <p>{calEvent.location}</p>
                        </div>
            })
        )
        return (
            <section className="calendarPageContainer">
                <div className="calendarPage">
                <div className="eventListContainer">{eventsList}</div>
                </div>
            </section>
        )
    }
}

export default Calendar;
