import React from "react";
import CardTrend from "./CardTrend";
import { useTrendsQuery } from "../api";
import { useSelector } from "react-redux";

const Trends = () => {
  const { data: trends, isLoading, isError } = useTrendsQuery();

  const darkMode = useSelector((state) => state.darkMode);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }


  return (
    <div className="w-100 d-flex flex-column align-items-lg-start align-items-center mb-3">
      <h6 className={darkMode ? "text-white" : ""}>Tendencias</h6>
      <div className="d-flex gap-4 justify-content-lg-between justify-content-center flex-wrap">
        {trends.map((trend) => (
          <CardTrend key={trend.created_utc} trend={trend} />
        ))}
      </div>
    </div>
  );
};

export default Trends;
