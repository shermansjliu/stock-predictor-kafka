import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function Stock(props) {
  const [stock_data, setStockData] = useState([]);
  const BASE_URL = `http://localhost:3001/Time-Series-Daily`;
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // stock_data
  console.log();

  const data = Object.entries(stock_data).map((el) => {
    const date = el[[0]];
    const adjusted_close = el[1]["5. adjusted close"];
    return {
      date,
      adjusted_close,
    };
  });
  console.log(data);
  const test_data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 500, pv: 122, amt: 2400 },
    { name: "Page C", uv: 600, pv: 3000, amt: 2400 },
  ];
  const renderLineChart = (
    <LineChart width={800} height={400} data={data}>
      <XAxis dataKey="date" />
      <YAxis dateKey="adjusted_close" />
      <Line type="monotone" dataKey="adjusted_close" stroke="#8884d8" />
    </LineChart>
  );
  return (
    <div>
      {renderLineChart}
      Hwllo
    </div>
  );
}
