import React from "react";
import Chart from "react-apexcharts";

export default function Graph() {
  const [options, setOptions] = React.useState({
    chart: {
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 5,
        opacity: 0.2,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 600,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 300,
        },
      },
      id: "basic-bar",
    },
    colors: ["#060D2A"],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  const [series, setSeries] = React.useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="500" />
        </div>
      </div>
    </div>
  );
}
