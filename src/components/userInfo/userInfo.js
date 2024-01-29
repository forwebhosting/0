import React, { useEffect, useState } from "react";
import axios from "axios";
import "./userInfo.css";

const UserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [publicIP, setPublicIP] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [renderTime, setRenderTime] = useState(0);
  const [dataConsumed, setDataConsumed] = useState(0);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const startTime = performance.now();

        // Fetch public IP
        const userIPResponse = await axios.get(
          "https://api64.ipify.org?format=json"
        );
        const fetchedPublicIP = userIPResponse.data.ip;
        setPublicIP(fetchedPublicIP);

        // Fetch location based on IP
        const locationResponse = await axios.get(
          `https://ipapi.co/${fetchedPublicIP}/json/`
        );
        const { region, country_name } = locationResponse.data;
        setUserLocation(`${region}, ${country_name}`);

        // Simulating additional asynchronous task (replace with actual async task)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Measure the ending network information
        const finalDataSize = performance
          .getEntriesByType("resource")
          .reduce((acc, entry) => acc + entry.transferSize, 0);
        const dataSpent = finalDataSize - initialDataSize;
        setDataConsumed(dataSpent);

        const endTime = performance.now();
        const timeTaken = (endTime - startTime) / 1000; // Convert milliseconds to seconds
        setRenderTime(timeTaken);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user information:", error);
        setError("Error fetching user information");
        setLoading(false);
      }
    };

    const initialDataSize = performance
      .getEntriesByType("resource")
      .reduce((acc, entry) => acc + entry.transferSize, 0);
    fetchUserInfo();
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div className="w-full py-10 border-b-[1px] border-b-black">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="text-center text-gray-500 text-base flex flex-wrap justify-center ">
          <p className="mr-4">User IP: {publicIP}</p>
          <p className="mr-4">User Location: {userLocation}</p>
          <p className="mr-4">
            Page render time: {renderTime.toFixed(2)} seconds
          </p>
          <p>Data consumed: {(dataConsumed / (1024 * 1024)).toFixed(2)} MB</p>
          {/* Add additional user information here */}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
