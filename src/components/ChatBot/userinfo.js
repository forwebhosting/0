import bowser from 'bowser';

const fetchUserInfo = async () => {
    try {
        // Fetch the user's IP address and location using ipinfo.io
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();

        const userIpAddress = data.ip || "Unable to retrieve IP";
        const userLocation = `${data.city}, ${data.region}, ${data.country}`;
        const ispName = data.org || "Unknown ISP";

        // Extract user agent information using bowser
        const userAgent = navigator.userAgent || "User agent information not available";
        const parsedUserAgent = bowser.parse(userAgent);

        const device = parsedUserAgent.platform.type || "Unknown Device";
        const os = parsedUserAgent.os.name || "Unknown OS";
        const browser = parsedUserAgent.browser.name || "Unknown Browser";

        // Return an array of messages
        return [
            `You are located in: ${userLocation}`,
            `Your IP address is: ${userIpAddress}`,
            `ISP: ${ispName}`,
            `Device: ${device}`,
            `Operating System: ${os}`,
            `Browser: ${browser}`,
            // Add more information as needed
        ];
    } catch (error) {
        console.error("Error fetching user information:", error);
        // Handle errors appropriately
        return null;
    }
};

// eslint-disable-next-line
export default fetchUserInfo;
