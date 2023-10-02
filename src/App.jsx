import Content from './components/Content/Content';
import { Col, Row } from 'antd';
import './App.css';

function App() {
  return (
    <div className="main_wrapper">
      <Row>
        <Col span={3} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}></Col>
        <Col span={18} xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 2 }} lg={{ order: 2 }}>
          <Content />
        </Col>
        <Col span={3} xs={{ order: 3 }} sm={{ order: 3 }} md={{ order: 3 }} lg={{ order: 3 }}></Col>
      </Row>
    </div>
  );
}

export default App;
