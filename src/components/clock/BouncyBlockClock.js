import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const ClockContainer = styled.div`
* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--hue: 223;
	--bg: hsla(var(--hue), 90%, 90%, 0.8);
	--fg: hsl(var(--hue), 10%, 10%);
	--primary: hsl(var(--hue), 90%, 55%);
	--trans-dur: 0.3s;
	font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
}

body {
	background-color: var(--bg);
	color: var(--fg);
	font: 1em/1.5 "DM Sans", sans-serif;
	height: 100vh;
	display: grid;
	place-items: center;
	transition:
		background-color var(--trans-dur),
		color var(--trans-dur);
}

.clock {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
}

.clock__block {
	background-color: hsl(var(--hue), 10%, 90%, 0.8);
	border-radius: 0.5rem;
	box-shadow: 0 1rem 2rem hsla(var(--hue), 90%, 50%, 0.3);
	font-size: 3em;
	line-height: 2;
	margin: 0.75rem;
	overflow: hidden;
	text-align: center;
	width: 6rem;
	height: 6rem;
	transition:
		background-color var(--trans-dur),
		box-shadow var(--trans-dur);
}

.clock__block--small {
	border-radius: 0.25rem;
	box-shadow: 0 0.5rem 2rem hsla(var(--hue), 90%, 50%, 0.3);
	font-size: 1em;
	line-height: 3;
	width: 3rem;
	height: 3rem;
}

.clock__colon {
	display: none;
	font-size: 2em;
	opacity: 0.5;
	position: relative;
}

.clock__colon:before,
.clock__colon:after {
	background-color: currentColor;
	border-radius: 50%;
	content: "";
	display: block;
	position: absolute;
	top: -0.05em;
	left: -0.05em;
	width: 0.1em;
	height: 0.1em;
	transition: background-color var(--trans-dur);
}

.clock__colon:before {
	transform: translateY(-200%);
}

.clock__colon:after {
	transform: translateY(200%);	
}

.clock__digit-group {
	display: flex;
	flex-direction: column-reverse;
}

.clock__digits {
	width: 100%;
	height: 100%;
}

.clock__block--bounce {
	animation: bounce 0.75s; 
}

.clock__block--bounce .clock__digit-group {
	animation: roll 0.75s ease-in-out forwards; 
	transform: translateY(-50%);
}

.clock__block--delay1,
.clock__block--delay1 .clock__digit-group {
	animation-delay: 0.1s;
}

.clock__block--delay2,
.clock__block--delay2 .clock__digit-group {
	animation-delay: 0.2s;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue), 10%, 10%, 0.8);
		--fg: hsl(var(--hue), 10%, 90%);
	}
	.clock__block {
		background-color: hsla(0, 100%, 55%, 0.8); /* #ff014f with 0.8 alpha */
		box-shadow: 0 1rem 2rem hsla(0, 100%, 55%, 0.4); /* #ff014f with 0.4 alpha */
	}
	.clock__block--small {
		box-shadow: 0 0.5rem 2rem hsla(0, 100%, 55%, 0.4); /* #ff014f with 0.4 alpha */
	}
}

/* Beyond mobile */
@media (min-width: 768px) {
    .clock {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .clock__block {
      margin: 0;
    }
    .clock__colon {
      display: inherit;
    }
  }

/* Animations */
@keyframes bounce {
	from,
	to {
		animation-timing-function: ease-in;
		transform: translateY(0);
	}
	50% {
		animation-timing-function: ease-out;
		transform: translateY(15%);
	}
}

@keyframes roll {
	from {
		transform: translateY(-50%);
	}
	to {
		transform: translateY(0);
	}
}
`;

const bounceAnimation = keyframes`
  from, to {
    animation-timing-function: ease-in;
    transform: translateY(0);
  }
  50% {
    animation-timing-function: ease-out;
    transform: translateY(15%);
  }
`;

const ClockBlock = styled.div`
  /* Additional CSS styles for clock blocks */
  ${props =>
        props.isBouncing &&
        css`
      animation: ${bounceAnimation} 0.75s;
    `}
    /* Update CSS for horizontal layout */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BouncyBlockClock = () => {
    const [time, setTime] = useState({ a: [], b: [] });
    const [isBouncing, setIsBouncing] = useState([false, false, false]);

    useEffect(() => {
        const updateClock = () => {
            const rawDate = new Date();
            const date = new Date(Math.ceil(rawDate.getTime() / 1000) * 1000);
            let h = date.getHours();
            const m = date.getMinutes();
            const s = date.getSeconds();
            const ap = h < 12 ? "AM" : "PM";

            if (h === 0) h = 12;
            if (h > 12) h -= 12;

            setTime({
                a: [...time.b],
                b: [
                    h < 10 ? `0${h}` : `${h}`,
                    m < 10 ? `0${m}` : `${m}`,
                    s < 10 ? `0${s}` : `${s}`,
                    ap
                ]
            });
        };

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const animateDigits = () => {
        setIsBouncing(prev => [true, true, true]);

        setTimeout(() => {
            setIsBouncing(prev => [false, false, false]);
        }, 900);
    };

    useEffect(() => {
        animateDigits();
    }, [time]);

    return (
        <ClockContainer className="clock" aria-label="00:00:00 AM">
            <ClockBlock
                className="clock__block clock__block--delay2"
                aria-hidden="true"
                data-time-group
                isBouncing={isBouncing[0]}
            >
                <div className="clock__digit-group">
                    <div className="clock__digits" data-time="a">
                        {time.b[0]}
                    </div>
                    <div className="clock__digits" data-time="b">
                        {time.a[0]}
                    </div>
                </div>
            </ClockBlock>
            <div className="clock__colon"></div>
            <ClockBlock
                className="clock__block clock__block--delay1"
                aria-hidden="true"
                data-time-group
                isBouncing={isBouncing[1]}
            >
                <div className="clock__digit-group">
                    <div className="clock__digits" data-time="a">
                        {time.b[1]}
                    </div>
                    <div className="clock__digits" data-time="b">
                        {time.a[1]}
                    </div>
                </div>
            </ClockBlock>
            <div className="clock__colon"></div>
            <ClockBlock
                className="clock__block"
                aria-hidden="true"
                data-time-group
                isBouncing={isBouncing[2]}
            >
                <div className="clock__digit-group">
                    <div className="clock__digits" data-time="a">
                        {time.b[2]}
                    </div>
                    <div className="clock__digits" data-time="b">
                        {time.a[2]}
                    </div>
                </div>
            </ClockBlock>
            <div className="clock__block clock__block--delay2 clock__block--small" aria-hidden="true" data-time-group>
                <div className="clock__digit-group">
                    <div className="clock__digits" data-time="a">{time.b[3]}</div>
                    <div className="clock__digits" data-time="b">{time.a[3]}</div>
                </div>
            </div>
        </ClockContainer>
    );
};

export default BouncyBlockClock;