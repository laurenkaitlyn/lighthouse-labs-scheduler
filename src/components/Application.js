import React from "react";
import DayList from "components/DayList";
import Appointment from "./Appointment/index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    const daysUrl = `http://localhost:8001/api/days`;
    const appointmentsURL = `http://localhost:8001/api/appointments`;
    const interviewers = `http://localhost:8001/api/interviewers`;

    Promise.all([
      axios.get(daysUrl),
      axios.get(appointmentsURL),
      axios.get(interviewers),
    ]).then((all) => {
      console.log(all[0]);
      console.log(all[1]);
      console.log(all[2]);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} setDay={setDay} day={state.day} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => {
          const interview = getInterview(state, dailyAppointments.interview);
          return (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              interview={appointment.interview}
            />
          );
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
