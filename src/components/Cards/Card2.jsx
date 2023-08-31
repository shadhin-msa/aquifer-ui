import { Button, Card, Input } from "antd";
import { ReactComponent as Dollar } from "../../assets/dollar.svg";
import { ReactComponent as Sparkle } from "../../assets/sparkle.svg";

import "./Cards.css";
const Card2 = () => {
  const inputPrefix = (
    <div className="prefix">
      <Dollar />
      USDC
    </div>
  );
  return (
    <Card className="card2">
      <div className="card_02_content">
        <h1 className="title">Contribute USDC</h1>
        <p className="text">
          Select an amount of USDC to contribute to the liquidity Pool
        </p>
        <div className="input_button">
          <Input className="input" prefix={inputPrefix} />
          <Button className="contribute_btn">
            Contribute <Sparkle />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Card2;
