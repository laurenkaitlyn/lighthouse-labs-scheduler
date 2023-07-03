import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days } = props;
  const dayListData = days.map((d) => {
    return (
      <DayListItem
        key={d.id}
        name={d.name}
        spots={d.spots}
        selected={d.name === props.day}
        setDay={props.setDay}
        days={days}
        day={props.day}
      />
    );
  });

  return <ul>{dayListData}</ul>;
}
