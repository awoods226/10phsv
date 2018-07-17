import * as React from "react";
import * as Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./schedule.css";
import * as moment from "moment";
import { List } from "semantic-ui-react";
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
      18,
      0,
      19,
      30
    );
  };
  getAllLevelsEvents = () => {
    return this.getEventSchedule("All Levels BJJ", ["Monday"], 19, 30, 21, 0);
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
    return this.getEventSchedule("Muay Thai", ["Wednesday"], 20, 0, 21, 0);
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
        <div className="calendar-container">
          <Calendar
            defaultDate={new Date()}
            defaultView="week"
            toolbar={false}
            step={60}
            showMultiDayTimes
            min={new Date(2017, 10, 0, 10, 0, 0)}
            max={new Date(2017, 10, 0, 22, 0, 0)}
            events={this.state.events}
            selectable={false}
            style={{ height: "70vh" }}
          />
        </div>
        <div className="mobile-schedule-container">
          <List
            divided
            animated
            relaxed
            size="large"
            verticalAlign="middle"
            className="mobile-schedule"
          >
            <List.Item>
              <List.Content>
                <List.Header>All Levels BJJ</List.Header>
                <List.Description>Monday 7:30pm - 9:00pm</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>BJJ Fundamentals</List.Header>
                <List.Description>
                  Monday - Friday 6:00pm - 7:30pm
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Muay Thai</List.Header>
                <List.Description>Tuesday 8:00pm - 9:00pm</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Open Mat</List.Header>
                <List.Description>Saturday 10:00am - 12:00am</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}
