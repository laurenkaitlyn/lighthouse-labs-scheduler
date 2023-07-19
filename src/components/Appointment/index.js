import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {
  //modes for appointment
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const DELETE = "DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => {
        console.log("--------ERROR_SAVE");
        transition(ERROR_SAVE);
      });
  }

  function remove() {
    transition(DELETE);

    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => {
        console.log("-------------ERROR_DELETE");
        transition(ERROR_DELETE);
      });
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          interview={props.interview}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
          bookInterview={props.bookInterview}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm onConfirm={remove} onCancel={back} />}
      {mode === EDIT && (
        <Form
          onCancel={back}
          onSave={save}
          interviewers={props.interviewers}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not delete your appointment" onClose={back} />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save your appointment" onClose={back} />
      )}
    </article>
  );
}
