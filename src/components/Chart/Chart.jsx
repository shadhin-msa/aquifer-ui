import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ReactComponent as Dot } from "../../assets/dot.svg";

import "./Chart.css";
import { getOsmosisData } from "../../../services/api.service";

const Chart = () => {
  const [priceList, setPriceList] = useState([]);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "area",
    },
    title: {
      text: "Liquidity Chart",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#FF8517"],
    xaxis: {
      type: "datetime",
      categories: [
        "2023-08-04T00:00:00.000Z",
        "2023-08-11T01:30:00.000Z",
        "2023-08-18T02:30:00.000Z",
        "2023-08-25T03:30:00.000Z",
        "2023-09-01T04:30:00.000Z",
        "2023-09-08T05:30:00.000Z",
        "2023-09-15T06:30:00.000Z",
      ],
    },
    yaxis: {
      min: 0,
      max: 60,
      tickAmount: 6,
      labels: {
        formatter: (val) => `${val}m USD`,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
        fillSeriesColor: "#0000",
      },
      marker: {
        show: true,
      },
    },
  };
  const fetchData = async () => {
    const apiData = await getOsmosisData();
    if (apiData) {
      // const graphData = apiData.map((data) => ({
      //   amount: data.amount,
      //   liquidity: data.liquidity,
      //   price: data.price_24h_change,
      // }));
      const priceList = apiData.map((prices) => {
        return Math.abs(prices.price_24h_change) * 10;
      });
      setPriceList(priceList);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chart">
      <h4 className="title_02">
        <Dot />
        TVL {new Date().toLocaleString()}
      </h4>
      <ReactApexChart
        options={options}
        series={[{ name: "series1", data: priceList }]}
        type="area"
        height={350}
      />
    </div>
  );
};

export default Chart;
