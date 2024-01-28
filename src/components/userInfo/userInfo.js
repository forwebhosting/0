import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios
import "./userInfo.css";

const UserInfo = () => {
  const [publicIP, setPublicIP] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [renderTime, setRenderTime] = useState(0);
  const [lastSeen, setLastSeen] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Fetch user information or perform any other asynchronous tasks here

        // Fetch public IP
        const userIPResponse = await axios.get("https://api64.ipify.org?format=json");
        const fetchedPublicIP = userIPResponse.data.ip;
        setPublicIP(fetchedPublicIP);

        // You may use another API for more detailed location information
        const locationResponse = await axios.get(`https://ipapi.co/${fetchedPublicIP}/json/`);
        setUserLocation(`${locationResponse.data.city}, ${locationResponse.data.region}`);

        // Simulating additional asynchronous task (replace with actual async task)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const endTime = performance.now();
        const timeTaken = (endTime - startTime) / 1000; // Convert milliseconds to seconds
        setRenderTime(timeTaken);

        // Get the last seen time from localStorage
        const lastSeenTimestamp = localStorage.getItem("lastSeen");
        setLastSeen(formatLastSeen(lastSeenTimestamp));
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    const formatLastSeen = (timestamp) => {
      // Format the timestamp to a human-readable format
      if (timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Adjust the format as needed
      }
      return "Not available";
    };

    const startTime = performance.now();
    fetchUserInfo();
  }, [publicIP]); // Include publicIP in the dependency array

  return (
    <div className="w-full py-10 relative border-b-[1px] border-b-black">
      <div className="text-center text-gray-500 text-base flex flex-wrap justify-center">
        <p className="mr-4">Your IP: {publicIP}</p>
        <p className="mr-4">Your Location: {userLocation}</p>
        <p className="mr-4">Last Seen: {lastSeen}</p>
        <p>Page render time: {renderTime.toFixed(2)} seconds</p>
        {/* Add additional user information here */}
      </div>
    </div>
  );
};

export default UserInfo;
