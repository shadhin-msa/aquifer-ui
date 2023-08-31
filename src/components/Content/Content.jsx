import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import "./Content.css";

const Content = () => {
  return (
    <div className="components">
      <Header />
      <div className="main_content">
        <Cards />
        <Chart />
      </div>
    </div>
  );
};

export default Content;
