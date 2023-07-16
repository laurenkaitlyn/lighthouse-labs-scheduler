import React from "react";
import PropTypes from 'prop-types';
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const { interviewers } = props;
  const interviewerListData = interviewers.map((i) => {
    return (
      <InterviewerListItem
        key={i.id}
        name={i.name}
        avatar={i.avatar}
        selected={i.id === props.value}
        setInterviewer={() => props.onChange(i.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListData}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;
