import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {
  //modes for appointment
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);

    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    });
  }

  function remove() {
    transition(SAVING);

    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          interview={props.interview}
          onCancel={() => back()}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewer={props.interviewer}
          interviewers={[props.interviewers]}
          onSave={save}
          onCancel={() => back()}
          bookInterview={props.bookInterview}
        />
      )}
      {mode === SAVING && (
        <Status/>
      )}
      {mode === CONFIRM && (
        <Confirm
        onConfirm={remove}
        onCancel={back}
        />
      )}
    </article>
  );
}
