import * as React from "react";
import * as Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
      events: [
        {
          title: "All Levels BJJ",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
        },
        {
          title: "BJJ Fundamentals",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
        },
        {
          title: "Open Mat",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
        }
      ]
    };
  }
  public render() {
    return (
      <div>
        <Calendar
          defaultDate={new Date()}
          defaultView="week"
          toolbar={false}
          timeslots={6}
          step={30}
          events={this.state.events}
          selectable={false}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
