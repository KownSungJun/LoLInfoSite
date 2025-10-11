import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    //날 마다 url 변경됨으로 설정해줘야 함
    //임시 도메인임
    fetch("https://verbose-happiness-pw9xppwr4663q57-3001.app.github.dev/api/data")
      .then((res) => res.json())
      .then((data) => {
        setChartData({
          labels: Object.keys(data),
          datasets: [
            {
              label: "Value",
              data: Object.values(data),
              backgroundColor: "rgba(75,192,192,0.6)",
            },
          ],
        });
      });
  }, []);

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h1>Python 데이터 분석 시각화</h1>
      {chartData && <Bar data={chartData} />}
    </div>
  );
}

export default App;
