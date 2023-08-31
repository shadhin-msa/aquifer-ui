import { Card } from "antd";
import { ReactComponent as Link } from "../../assets/open-new-window.svg";
import "./Cards.css";
const Card1 = () => {
  return (
    <Card className="card1">
      <div className="card_01_content">
        <h1 className="heading"> Aquifer</h1>
        <p className="text">
          Contribute usdc to the liquidity pool on osmosis and recieve Qwoyn
          tokens at a discount
        </p>
        <div className="links">
          <a href="#" target="_blank">
            <div className="link">
              Read FAQ <Link />
            </div>
          </a>
          <a href="#" target="_blank">
            <div className="link">
              Discord support <Link />
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Card1;
