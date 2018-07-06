import * as React from "react";

export interface ScheduleProps {}

export default class Schedule extends React.Component<ScheduleProps, any> {
  public render() {
    return (
      <div>
        <iframe
          src="https://trial-2E517811.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true"
          id="idZenPlannerFrame"
        />
      </div>
    );
  }
}
