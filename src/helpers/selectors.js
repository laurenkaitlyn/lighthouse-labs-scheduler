// returns an array of appointments for the given day.
export function getAppointmentsForDay(state, day) {
  const appointmentsThatDay = [];

  state.days.forEach((dayOfWeek) => {
    if (dayOfWeek.name === day) {
      dayOfWeek.appointments.forEach((apptId) => {
        appointmentsThatDay.push(state.appointments[apptId]);
      });
    }
  });

  return appointmentsThatDay.length ? appointmentsThatDay : [];
}

//returns a new object containing the interview data when we pass it an object that contains the interviewer
export function getInterview(state, interview) {
  const { interviewers } = state;
  
  if(!interview) {
    return null;
  } else {
    const interviewer = interviewers[interview.interviewer];
    return {...interview, interviewer }
  }
}

//takes a state object and a day string as arguments and returns an array of interviewers for the specified day from the state object.
export function getInterviewersForDay(state, day) {

  const filteredDays = state.days.filter(d => d.name === day);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  //get interviwers for the days
  const interviewersFromDays = filteredDays[0].interviewers;
 
  let filteredInterviewers = [];

  for(let interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers;
}
