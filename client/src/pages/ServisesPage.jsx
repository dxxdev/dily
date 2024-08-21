import React from "react";
import ServisesCta from "../components/ServisesCta";
import ServisesCosts from "../components/ServisesCosts";
import ServisesMalfunctions from "../components/ServisesMalfunctions";
import ServisesRepair from "../components/ServisesRepair";

const ServisesPage = () => {
  return (
    <div>
      <ServisesCta />
      <ServisesRepair />
      <ServisesCosts />
      <ServisesMalfunctions />
    </div>
  );
};

export default ServisesPage;
