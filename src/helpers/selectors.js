// returns an array of appointments for the given day.
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((d) => d.name === day);

  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const appointmentsForDays = filteredDays[0].appointments;
  let filteredAppointments = [];

  for (let appointment of appointmentsForDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}

//returns a new object containing the interview data when we pass it an object that contains the interviewer
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const filteredInterviews = {};

  filteredInterviews.student = interview.student;
  filteredInterviews.interviewer = state.interviewers[interview.interviewer];

  return filteredInterviews;
}

//takes a state object and a day string as arguments and returns an array of interviewers for the specified day from the state object.
export function getInterviewersForDay(state, day) {
  const interviewersForDay = [];

  state.days.forEach((d) => {
    if (d.name === day) {
      d.appointments.forEach((interviewerId) => {
        interviewersForDay.push(state.appointments[interviewerId]);
      });
    }
  });
  /*
  checks if the interviewersForDay array has any elements
  if it does, it returns the array containing the interviewers for the specified day
  otherwise, it returns an empty array
  */
  return interviewersForDay.length ? interviewersForDay : [];
}
