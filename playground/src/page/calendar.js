import { useState } from "react";
import styled from "styled-components";


function Calendar() {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState();

  return (
    <>
      <Section>
        <MonthWrap>
          <Ul>
            <li>&lt;</li>
            <li>2023.{date.getMonth() + 1}</li>
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
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
              <td>31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
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