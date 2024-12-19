import logo from './logo.svg';
import './App.css';
import RequestUtils from './Utils/RequestUtils';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card, Col, DatePicker, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import ReactDOM from "react-dom";
import moment from 'moment';

function App() {

  const daysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');

  let [date, setDate] = useState(daysAgo);

  let [results, setResults] = useState([]);

  useEffect(() => {
    
    findResults(daysAgo);
   }, []
  );

  useEffect(() => {
   }, [results]
  );

  function findResults(val) {
    RequestUtils.get("/search?date=" + val, "Bearer token").then((response) => response.json())
    .then((data) => {
      console.log(data);
      setResults(data);
    }
    );
  }

  const onChange = (date, dateString) => {
    console.log(dateString);
    findResults(dateString);
  };



  

  return (
    <div className="App mx-2">
   
      <Row
          className="mx-2 my-2"
          justify="start"
          align="middle"
          gutter={[16, 16]}
        >
          <Col>
            <DatePicker onChange={onChange} className="pr-10" />
          </Col>
          {/* <Col>
            <Button type="primary" onClick={findResults}>
              Search
            </Button>
            <button>Click Me</button>
          </Col> */}
        </Row>
      <Row gutter={[16, 16]}>
      {results.map((result, index) => (
        <Col
          key={index}
          xs={24}    // 1 column on extra small screens
          sm={12}    // 2 columns on small screens
          md={8}     // 3 columns on medium screens
          lg={6}     // 4 columns on large screens
          xl={6}     // 4 columns on extra large screens
        >
          <Card
            hoverable
            style={{ width: '100%' }}
            onClick={() => window.open(result.link, '_blank')}
          >
            <Meta
              avatar={<Avatar src={result.favicon} />}
              title={result.title}
              description={<div style={{ textAlign: 'left' }}>{result.description}</div>}
            />
          </Card>
        </Col>
      ))}
    </Row>

       

    </div>
  );
}

export default App;
