// returns an array of appointments for the given day.
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day)

  if (state.days.length === 0 || filteredDays.length === 0) {
    return []
  };

  const appointmentsFromDays = filteredDays[0].appointments;
  let filteredAppointments = [];

  for(let appointment of appointmentsFromDays) {
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