import './App.css';
import {
  Pie
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {

  const chartdata = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday", "Sunday", ],
    datasets: [{
      backgroundColor: [
        "#83ce83",
        "#959595",
        "#f96a5d",
        "#00A6B4",
        "#6800B4",
        "#FFFF00",
        "#0000FF"
      ],
      data: [9, 5, 3, 10, 4, 9, 13],

    }, ],

  };

  return (

    <
    Pie options = {
      {
        maintainAspectRatio: false,

        datalabels: {
          display: true,
          color: "black",
        },
      }
    }
    data = {
      chartdata
    }
    height = {
      600
    }
    width = {
      500
    }
    />

  );
}

export default App;