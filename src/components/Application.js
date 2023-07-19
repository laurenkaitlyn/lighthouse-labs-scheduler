import React from "react";

import DayList from "components/DayList";
import Appointment from "./Appointment/index";
import useApplicationData from "hooks/useApplicationData";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import "components/Application.scss";

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });

  // const setDay = (day) => setState({ ...state, day });

  // useEffect(() => {
  //   const daysUrl = `http://localhost:8001/api/days`;
  //   const appointmentsURL = `http://localhost:8001/api/appointments`;
  //   const interviewers = `http://localhost:8001/api/interviewers`;

  //   Promise.all([
  //     axios.get(daysUrl),
  //     axios.get(appointmentsURL),
  //     axios.get(interviewers),
  //   ]).then((all) => {
  //     // console.log(all[0]);
  //     // console.log(all[1]);
  //     console.log("-------interviewers",all[2]);
  //     setState((prev) => ({
  //       ...prev,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data,
  //     }));
  //   });
  // }, []);


  // function bookInterview(id, interview) {
  //   console.log("--------bookInterview", id, interview);

  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: {...interview}
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   const url = `http://localhost:8001/api/appointments/${id}`;
    
  //   let req = {
  //     url, 
  //     method: 'PUT',
  //     data: appointment
  //   }
  //   return axios(req).then(res => {
  //     console.log(res.data)
  //     setState({
  //       ...state,
  //       appointments
  //     })
  //   })
   
  // }

  // function cancelInterview(id) {
  //   console.log("--------cancelInterview", id);

  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   }

  //   const appointments = {
  //     ...state.appointments,
  //    [id]: appointment
  //   }

  //   const url = `http://localhost:8001/api/appointments/${id}`;

  //   let req = {
  //     url,
  //     method: 'DELETE',
  //     data: appointment
  //   }
  //   return axios(req).then(res => {
  //     console.log(res)
  //     setState({...state, appointments})
  //   });

  // }

  let dailyAppointments = getAppointmentsForDay(state, state.day);

  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);
    console.log("--------schedule interviewers: ",interviewers);
    console.log("--------schedule interview: ",interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  })

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
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
