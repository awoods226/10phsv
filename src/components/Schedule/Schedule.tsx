import * as React from "react";
import * as Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./schedule.css";
import * as moment from "moment";
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

interface ScheduleProps {}
interface ScheduleState {
  events: any;
}

export default class Schedule extends React.Component<
  ScheduleProps,
  ScheduleState
> {
  constructor(props: ScheduleProps) {
    super(props);
    this.state = {
      events: []
    };
  }
  getEventSchedule = (
    title: string,
    days: string[],
    startHour: number,
    startMin: number,
    endHour: number,
    endMin: number
  ) => {
    let daysWithTimes = days.map(v => {
      return moment().day(v);
    });
    return daysWithTimes.map(v => {
      return {
        title: title,
        start: v
          .hours(startHour)
          .minutes(startMin)
          .toDate(),
        end: v
          .hours(endHour)
          .minutes(endMin)
          .toDate()
      };
    });
  };
  getFundamentalsEvents = () => {
    return this.getEventSchedule(
      "BJJ Fundamentals",
      ["Tuesday", "Wednesday", "Thursday", "Friday"],
      17,
      0,
      18,
      30
    );
  };
  getAllLevelsEvents = () => {
    return this.getEventSchedule("All Levels BJJ", ["Monday"], 17, 30, 19, 0);
  };
  getEvents = () => {
    let events = [];
    let allLevels = this.getAllLevelsEvents();
    events.push(...allLevels);
    let fundamentals = this.getFundamentalsEvents();
    events.push(...fundamentals);
    let openMat = this.getOpenMatEvents();
    events.push(...openMat);
    let muayThai = this.getMuayThaiEvents();
    events.push(...muayThai);
    return events;
  };
  getOpenMatEvents = () => {
    return this.getEventSchedule("Open Mat", ["Saturday"], 10, 0, 12, 0);
  };
  getMuayThaiEvents = () => {
    return this.getEventSchedule("Muay Thai", ["Wednesday"], 16, 0, 17, 0);
  };
  componentDidMount() {
    let schedule = this.getEvents();
    let events = [];
    schedule.map(s => {
      events.push(s);
    });
    this.setState({ events: events });
  }
  public render() {
    return (
      <div>
        <Calendar
          defaultDate={new Date()}
          defaultView="week"
          toolbar={false}
          step={60}
          showMultiDayTimes
          min={new Date(2017, 10, 0, 10, 0, 0)}
          max={new Date(2017, 10, 0, 20, 0, 0)}
          events={this.state.events}
          selectable={false}
          style={{ height: "40vh" }}
        />
      </div>
    );
  }
}
