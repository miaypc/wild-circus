import React, { useState } from "react";
import styled from "styled-components";

import _TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import _Button from "@material-ui/core/Button";

const types = [
  {
    value: "Mollys Gallery",
  },
  {
    value: "Red Beans Gallery",
  },
  {
    value: "Tofus Gallery",
  },
];
const Form = styled.form`
  width: 60%;
  margin: 0 auto;
`;
const TextField = styled(_TextField)`
  margin-bottom: 2em;
  margin-right: 2em;
`;

const Button = styled(_Button)`
  margin-top: 2em;
`;

function BookingForm() {
  const [type, setType] = useState("Mollys Gallery");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <Form>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Number of Tickets" />
      <TextField
        select
        fullWidth
        id="standard-select-type"
        label="Choose the Gallery"
        value={type}
        onChange={handleChange}
      >
        {types.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Button color="secondary" variant="contained">
        Submit
      </Button>
    </Form>
  );
}

export default BookingForm;
