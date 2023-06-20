import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const {days, setDay, day} = props;
  const dayListData = days.map(d => {
    return <DayListItem key={d.id} name={d.name} spots={d.spots} selected={d.name === day} setDay={setDay} days={days} day={day}/>
    });

  return (
    <ul>
      {dayListData}
    </ul>
  );
}