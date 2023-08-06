import { useEffect, useState } from "react";
import styled from "styled-components";


function Calendar() {
  const date = new Date();
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ly = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const makeDays = (date) => {
    console.log(0, date);
    console.log('x', date.getDay());
    let firstDay = (7 - (date.getDate() % 7 - 1) + date.getDay()) % 7;
    console.log('y', firstDay);
    let lenp, lenc
    if (date.getFullYear() % 4 === 0) {
      lenp = ly[(date.getMonth() + 11) % 12];
      lenc = ly[date.getMonth()];
      // lenn = ly[(date.getMonth() + 1) % 12];
    } else {
      lenp = monthLength[(date.getMonth() + 11) % 12];
      lenc = monthLength[date.getMonth()];
      // lenn = monthLength[(date.getMonth() + 1) % 12];
    }
    let prev = Array.from({length: firstDay}, (_, i) => lenp - firstDay + i + 1);
    let cur = Array.from({length: lenc}, (_, i) => i + 1);
    let next = Array.from({length: (7 - (firstDay + lenc) % 7) % 7}, (_, i) => i + 1);
    let temp = [...prev, ...cur, ...next];
    let result = [];
    console.log(date);
    for (let i = 0; i < temp.length / 7; i++) {
      result.push([...temp.slice(i*7, i*7 + 7)]);
    }
    return result;
  }
  

  const [days, setDays] = useState(makeDays(date));

  const increaseMonth = () => {
    let ny = year;
    let nm = month;
    if (month < 11) {
      nm += 1;
    } else {
      nm = 0;
      ny +=1 ;
    }
    setMonth(nm);
    if (ny !== year) setYear(ny);
    let temp = new Date(`${ny}-${nm + 1}-01`);
    setDays(makeDays(temp));
  }

  const decreaseMonth = () => {
    let nm = month;
    let ny = year;
    if (month > 0) {
      nm -= 1;
    } else {
      nm = 11;
      ny -= 1;
    }
    setMonth(nm);
    if (ny !== year) setYear(ny);
    let temp = new Date(`${ny}-${nm + 1}-01`);
    setDays(makeDays(temp));
  }

  useEffect(() => {
    console.log(1);
  })

  return (
    <>
      <Section>
        <MonthWrap>
          <Ul>
            <Li className='button' onClick={decreaseMonth}>&lt;</Li>
            <Li>{year}.{month + 1}</Li>
            <Li className='button' onClick={increaseMonth}>&gt;</Li>
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
                    {el.map((num, j) => {
                      return (
                        Math.abs(i * 7 + j - num) < 10 
                        ? <Td key={j*10}>{num}</Td>
                        : <Td className='pon' key={j*10}>{num}</Td>
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
  height: 100px;
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

const Li = styled.li`
  width: 100px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  &.button {
    cursor: pointer;
  }
`


const Table = styled.table`
  width: 100%;
  height: 80vh;
`

const Td = styled.td`
  color: black;
  &.pon {
    color: gray;
  }
`

export default Calendar;