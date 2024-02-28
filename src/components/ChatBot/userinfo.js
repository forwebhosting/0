import bowser from 'bowser';

const fetchUserInfo = async () => {
    try {
        // Fetch the user's public IP address using ipinfo.io
        const publicIpResponse = await fetch("https://ipinfo.io/ip");
        const publicIpAddress = await publicIpResponse.text();

        // Fetch the user's detailed IP information using ipinfo.io
        const detailedIpResponse = await fetch(`https://ipinfo.io/${publicIpAddress}/json`);
        const data = await detailedIpResponse.json();

        const userIpAddress = data.ip || "Unable to retrieve IP";
        const userLocation = `${data.city}, ${data.region}, ${data.country}`;
        const ispName = data.org || "Unknown ISP";
        const isVpn = data.bogon || "VPN status unknown";
        const latitude = data.loc ? data.loc.split(',')[0] : "Latitude not available";
        const longitude = data.loc ? data.loc.split(',')[1] : "Longitude not available";

        // Extract user agent information using bowser
        const userAgent = navigator.userAgent || "User agent information not available";
        const parsedUserAgent = bowser.parse(userAgent);

        const device = parsedUserAgent.platform.type || "Unknown Device";
        const os = parsedUserAgent.os.name || "Unknown OS";
        const browser = parsedUserAgent.browser.name || "Unknown Browser";

        // Additional information
        const screenWidth = window.screen.width || "Screen width not available";
        const screenHeight = window.screen.height || "Screen height not available";
        const colorDepth = window.screen.colorDepth || "Color depth not available";
        const pixelDensity = window.devicePixelRatio || "Pixel density not available";
        const language = navigator.language || "Language not available";
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Time zone not available";
        const deviceResolution = `${window.innerWidth}x${window.innerHeight}` || "Device resolution not available";
        const connectionType = navigator.connection ? navigator.connection.effectiveType : "Connection type not available";
        const isMobile = parsedUserAgent.platform.model || "Not a mobile device";
        const cpuArchitecture = navigator.hardwareConcurrency || "CPU architecture not available";
        const availableMemory = navigator.deviceMemory || "Memory information not available";
        const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? "Yes" : "No";
        const hasCookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
        const hasJsEnabled = "on" in document ? "Yes" : "No";
        const hasWebAssemblySupport = typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function' ? "Yes" : "No";
        const isIncognitoMode = window.chrome && window.chrome.extension ? document.hidden === true : false;
        const localStorageCapacity = 'localStorage' in window && window['localStorage'] !== null ? `${(JSON.stringify(window.localStorage).length / 1024).toFixed(2)} KB` : "Local Storage not available";
        const sessionStorageCapacity = 'sessionStorage' in window && window['sessionStorage'] !== null ? `${(JSON.stringify(window.sessionStorage).length / 1024).toFixed(2)} KB` : "Session Storage not available";

        // Return an array of messages
        return [
            `Public IP address: ${publicIpAddress}`,
            `You are located in: ${userLocation}`,
            `Your IP address is: ${userIpAddress}`,
            `ISP: ${ispName}`,
            `VPN: ${isVpn}`,
            `Latitude: ${latitude}`,
            `Longitude: ${longitude}`,
            `Device: ${device}`,
            `Operating System: ${os}`,
            `Browser: ${browser}`,
            `Screen Resolution: ${screenWidth}x${screenHeight}`,
            `Color Depth: ${colorDepth} bits`,
            `Pixel Density: ${pixelDensity}`,
            `Language: ${language}`,
            `Time Zone: ${timeZone}`,
            `Device Resolution: ${deviceResolution}`,
            `Connection Type: ${connectionType}`,
            `Mobile Device: ${isMobile}`,
            `CPU Architecture: ${cpuArchitecture}`,
            `Available Memory: ${availableMemory} GB`,
            `Touch Support: ${hasTouchSupport}`,
            `Cookies Enabled: ${hasCookiesEnabled}`,
            `JavaScript Enabled: ${hasJsEnabled}`,
            `WebAssembly Support: ${hasWebAssemblySupport}`,
            `Incognito Mode: ${isIncognitoMode}`,
            `Local Storage Capacity: ${localStorageCapacity}`,
            `Session Storage Capacity: ${sessionStorageCapacity}`,
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
