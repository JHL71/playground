import { useEffect, useState } from "react";
import styled from "styled-components";


function Calendar() {
  const date = new Date();
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ly = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const makeDays = (date) => {
    let firstDay = (7 - (date.getDate() % 7 - 1) + date.getDay()) % 7;
    
    let lenp, lenc
    if (date.getFullYear() % 4 === 0) {
      lenp = ly[(date.getMonth() + 11) % 12];
      lenc = ly[date.getMonth()];
    } else {
      lenp = monthLength[(date.getMonth() + 11) % 12];
      lenc = monthLength[date.getMonth()];
    }
    let prev = Array.from({length: firstDay}, (_, i) => lenp - firstDay + i + 1);
    let cur = Array.from({length: lenc}, (_, i) => i + 1);
    let next = Array.from({length: (7 - (firstDay + lenc) % 7) % 7}, (_, i) => i + 1);
    let temp = [...prev, ...cur, ...next];
    let result = [];
    
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
          <Thead>
            <Tr>
              <Th>일</Th>
              <Th>월</Th>
              <Th>화</Th>
              <Th>수</Th>
              <Th>목</Th>
              <Th>금</Th>
              <Th>토</Th>
            </Tr>
          </Thead>
          <tbody>
            {
              days.map((el, i) => {
                return (
                  <Tr key={i}>
                    {el.map((num, j) => {
                      return (
                        Math.abs(i * 7 + j - num) < 10 
                        ? <Td key={j*10}>
                            <DivDate>
                              <DivNum check={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` === `${year}-${month}-${num}`}>{num}
                              </DivNum>
                            </DivDate>
                          </Td>
                        : <Td className='pon' key={j*10}><DivDate><DivNum>{num}</DivNum></DivDate></Td>
                      )
                    })
                    }
                  </Tr>
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
  background-color: #ffffff;
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
  border-collapse: collapse;
`

const Thead = styled.thead`
  background-color: #e5e5e5;
  height: 60px;
`

const Tr = styled.tr`
  border-bottom: 1px solid #e5e5e5;
`

const Th = styled.th`
  padding: 0 1px 0 0;
  text-align: center;
`

const Td = styled.td`
  font-size: 16px;
  color: black;
  &.pon {
    color: #e5e5e5;
  }
`

const DivDate = styled.div`
  min-height: 140px;
  padding: 10px 0px;
  &:hover {
    background-color: #e5e5e5;
  }
`

const DivNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 7px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  background-color: ${(props) => props.check ? '#FDB5CB' : 'inherit'};

`

export default Calendar;