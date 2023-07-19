import React from "react";
import PropTypes from 'prop-types';
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function interviewerList(props) {
  const {interviewers} = props;
  const interviewersListData = interviewers.map(interviewer =>{
    return <InterviewerListItem
     key={interviewer.id}
     name={interviewer.name}
     avatar={interviewer.avatar}
     selected={props.value===interviewer.id}
     setInterviewer={()=>{props.onChange(interviewer.id)}}
     />
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListData}</ul>
    </section>
  )
}

interviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

