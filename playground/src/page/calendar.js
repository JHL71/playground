import { useState } from "react";
import styled from "styled-components";


function Calendar() {
  const date = new Date();
  let lp = 0;
  if (date.getFullYear() % 4 === 0) lp = 1;
  const monthLength = [31, 28 + lp, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let cdate = new Date(`${date.getFullYear()}-0${date.getMonth() + 1}-01`);
  let first = cdate.getDay();
  let cm = cdate.getMonth();
  let arr = Array.from({length: monthLength[cm]}, (_, i) => i + 1);
  let dummy1 = Array.from({length: first}, (_, i) => monthLength[cm - 1] - first + i + 1);
  let dummy2 = Array.from({length: 7 - (first + monthLength[cm]) % 7}, (_, i) => i + 1);
  let temp = dummy1.concat(arr, dummy2);
  console.log(temp.length);
  let dayArr = [];
  for (let i = 0; i < Math.floor(temp.length / 7); i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      week.push(temp[i * 7 + j]);
    }
    dayArr.push(week);
  }
  console.log(dayArr);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [days, setDays] = useState(dayArr);
  
  return (
    <>
      <Section>
        <MonthWrap>
          <Ul>
            <li>&lt;</li>
            <li>{year}.{month + 1}</li>
            <li>&gt;</li>
          </Ul>
        </MonthWrap>
        <Table>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {
              days.map((el, i) => {
                return (
                  <tr key={i}>
                    {el.map((num, idx) => {
                      return (
                        <td key={idx*10}>{num}</td>
                      )
                    })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Section>
    </>
  )
}

const Section = styled.div`
  top: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background-color: lightsalmon;
`

const MonthWrap = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  margin: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
`


const Table = styled.table`
  width: 100%;
  height: 80vh;
`

export default Calendar;