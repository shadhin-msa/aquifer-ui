import { Row } from "antd";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="cards_wrapper">
      <Row className="cards_row">
        <Card1 />
        <Card2 />
      </Row>
    </div>
  );
};

export default Cards;
