import * as React from "react";
import styled from "styled-components";

import moment from "moment";

import IconButton from "./IconButton";

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const Wrapper = styled.div`
  display: flex;
  width: 400px;
`;

function Actions({ name, id, updateHandler }) {
  const [calendarIsOpen, setCalendarIsOpen] = React.useState(false);
  const [selectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    updateHandler({ id, newTimeStamp: moment(date).valueOf() });
    setCalendarIsOpen(false);
  };

  return (
    <Wrapper>
      <IconButton
        type="file"
        clickHandler={() => console.log(`${name} CSV button was clicked!`)}
      />
      <IconButton
        type="report"
        clickHandler={() => console.log(`${name} Report button was clicked!`)}
      />
      {updateHandler && (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            value={selectedDate}
            open={calendarIsOpen}
            onChange={handleDateChange}
            style={{ display: "none" }}
          />
          <IconButton
            type="calendar"
            clickHandler={() => setCalendarIsOpen((isOpen) => !isOpen)}
          />
        </MuiPickersUtilsProvider>
      )}
    </Wrapper>
  );
}

export default Actions;
