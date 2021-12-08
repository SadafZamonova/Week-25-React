import './App.css';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function App() {

  const chartdata = {
    labels: ["Newly Added", "Edited", "Deleted"],
    datasets: [
      {
        label: "Markets Monitored",
        backgroundColor: [
          "#83ce83",
          "#959595",
          "#f96a5d",
          "#00A6B4",
          "#6800B4",
        ],
        data: [9, 5, 3],
       
      },
    ],
   
  };

  return (
    <div className="App">
     <Pie
  options={{
    legend: { display: true, position: "right" },

    datalabels: {
      display: true,
      color: "white",
    },
    tooltips: {
      backgroundColor: "#5a6e7f",
    },
  }}
  data={chartdata}
  height={20}
  width={30}
/>
    </div>
  );
}

export default App;
