import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({dataPoint ,maxValue}) => {
  return (
    <div className="chart">
      {dataPoint.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
