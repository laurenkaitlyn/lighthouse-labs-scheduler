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
        selected={d.name === props.value}
        setDay={props.onChange}
        days={days}
        day={props.value}
      />
    );
  });

  return <ul>{dayListData}</ul>;
}
