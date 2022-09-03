import type { NextPage } from 'next'
import ReactQueryPage from "../../src/components/pages/reactQuery/ReactQuery";
import ReactDatePicker from "react-datepicker";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";

const reactQuery: NextPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePickerWrap>
        <ReactDatePicker  selected={startDate} onChange={() => console.log('a')} />
      </DatePickerWrap>
      <ReactQueryPage />
    </div>

  )
}

export default reactQuery;

const DatePickerWrap = styled.div`
  margin-bottom: 160px; 
  .react-datepicker__month-container {
    border: 3px solid red;
    border-radius: 16px;
    overflow: hidden;
  }
  .react-datepicker__header {
    background-color: #222222;
  }
  .react-datepicker__current-month {
    color: #fff;
  }
`

