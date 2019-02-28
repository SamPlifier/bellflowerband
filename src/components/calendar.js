import '../styles/calendar.css';
import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Calendar extends React.Component {
    state = {
        calendarEvents: [],
    }

    componentDidMount() {
        let now = new Date();
        let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        let endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
        axios.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8')
            .then(res => {
                let allEvents = res.data.items;
                // console.log(allEvents);
                allEvents = allEvents.sort((a, b) => (Date.parse(a.start.dateTime.toString()) > Date.parse(b.start.dateTime.toString()) ? 1: -1));
                let futureEvents = [];
                allEvents.map((calEvent, i) => {
                    let eventTime = new Date(calEvent.start.dateTime);
                    if (eventTime > startOfToday && eventTime < endOfDayOneMonthOut) {
                        futureEvents.push(calEvent);
                    }
                    return true;
                })
                this.setState({ calendarEvents: futureEvents });
            })
            .catch(err => {
                console.log(err);
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
    formatMapsUrl(address) {
        let firstPart = 'https://www.google.com/maps/search/?api=1&query=';
        let secondPart = encodeURIComponent(address);
        return firstPart+secondPart;
    }

    render() {
        const eventsList = (
            this.state.calendarEvents.map((calEvent, i) => {
                return  <div className="eventCard" key={i}>
                            <h3>{calEvent.summary}</h3>
                            <div className="detailsContainer">
                                <div className="details">
                                    <p className="hasIcon"><i className="material-icons">access_time</i>{this.date(calEvent.start.dateTime, 'day')}, {this.date(calEvent.start.dateTime, 'month')} {this.date(calEvent.start.dateTime, 'dayNum')} {String.fromCharCode(183)} {this.date(calEvent.start.dateTime, 'localTime')} - {this.date(calEvent.end.dateTime, 'localTime')}</p>
                                    <p className="hasIcon"><i className="material-icons">location_on</i><a className="directions" alt="directions link" href={this.formatMapsUrl(calEvent.location)}>{calEvent.location}</a></p>
                                    <p className="hasIcon"><i className="material-icons">description</i>{calEvent.description}</p>
                                    <p className="hasIcon"><i className="material-icons">calendar_today</i><a className="openInCalendar" href={calEvent.htmlLink}>View in Google Calendar</a></p>
                                </div>
                            </div>
                        </div>
            })
        )
        return (
            <section className="calendarPageContainer">
                <div className="calendarPage">
                    <Paper elevation={0} className="numOfEvents">
                        <Typography className="title">There are {this.state.calendarEvents.length} upcoming events this month.</Typography>
                    </Paper>
                <div className="eventListContainer">{eventsList}</div>
                </div>
            </section>
        )
    }
}

export default Calendar;
