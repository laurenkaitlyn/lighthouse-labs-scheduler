import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
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
      // console.log(all[0]);
      // console.log(all[1]);
      console.log("-------interviewers", all[2]);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    console.log("--------bookInterview", id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const url = `http://localhost:8001/api/appointments/${id}`;

    let req = {
      url,
      method: "PUT",
      data: appointment,
    };
    return axios(req).then((res) => {
      console.log(res.data);
      setState({
        ...state,
        appointments,
      });
    });
  }

  function cancelInterview(id) {
    console.log("--------cancelInterview", id);

    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const url = `http://localhost:8001/api/appointments/${id}`;

    let req = {
      url,
      method: "DELETE",
      data: appointment,
    };
    return axios(req).then((res) => {
      console.log(res);
      setState({ ...state, appointments });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
