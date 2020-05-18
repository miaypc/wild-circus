import React from "react";
import styled from "styled-components";

import Nav from "../Components/Nav";
import BookingForm from "../Components/BookingForm";

const BookingTitle = styled.h2`
  margin-top: 4em;
  margin-bottom: 2em;
  text-align: center;
`;

function BookingPage() {
  return (
    <div>
      <Nav />
      <BookingTitle>Book Your Tickets</BookingTitle>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
