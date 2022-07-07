import React, { useState } from "react";
import axios from "axios";

export default function PublicApi() {
  // default state for both the sensor mean PM10 values
  const [sensor1, settSensor1] = useState(0);
  const [sensor2, settSensor2] = useState(0);

  // Public API endpoint
  const publicApi_Url =
    "https://my-json-server.typicode.com/fynn-atmo/dummy-data/sensors";

  // get request peformed on Publci API endpoint using axios
  async function fetchData() {
    try {
      const response = await axios.get(`${publicApi_Url}`); // retrieve data form the the Public API endpoint

      // sensor 1 data mean PM10 value
      console.log(response.data[0].time_series);
      const sensor1data = response.data[0].time_series;
      // All sensor 1 values added into a empty array
      const newSensor1data = [];
      sensor1data.map((data) => {
        console.log(data.value);
        newSensor1data.push(data.value);
      });
      console.log(newSensor1data);
      // Sum of sensor 1 values
      const totalSensor1 = newSensor1data.reduce((total, item) => {
        return total + item;
      }, 0);
      console.log(totalSensor1);
      settSensor1(totalSensor1 / newSensor1data.length); // sensor 1 mean PM10 calulation

      // sensor 2 data mean PM10 value
      console.log(response.data[1].time_series);
      const sensor2data = response.data[1].time_series;
      // All sensor 2 values added into a empty array
      const newSensor2data = [];
      sensor2data.map((data) => {
        console.log(data.value);
        newSensor2data.push(data.value);
      });
      console.log(newSensor2data);
      // Sum of sensor 2 values
      const totalSensor2 = newSensor2data.reduce((total, item) => {
        return total + item;
      }, 0);
      console.log(totalSensor2);
      settSensor2(totalSensor2 / newSensor2data.length); // sensor 2 mean PM10 calulation
    } catch (err) {
      console.error(err);
    }
  }

  fetchData();

  return (
    <div className="flex flex-col flex-wrap sm:items-start smUp:items-center mt-20 max-w-full sm:pl-20 smUp:pl-0 sm:text-left smUp:text-center">
      <p>
        Sensor1 mean PM10 value:{" "}
        <span className="text-[#1A75BC]">{sensor1}</span>
      </p>
      <p>
        Sensor2 mean PM10 value:{" "}
        <span className="text-[#1A75BC]">{sensor2}</span>
      </p>
      <p>
        Sensor 2's 1 hour mean PM10 value is higher than Sensor 1's 1 hour mean
        PM10 value{" "}
      </p>
    </div>
  );
}
