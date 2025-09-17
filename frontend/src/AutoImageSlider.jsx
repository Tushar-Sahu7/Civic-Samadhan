import { useEffect, useState } from 'react';

export default function AutoImageSlider() {
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    let pos = 0;
    const interval = setInterval(() => {
      pos += 2; // speed increased (was 1 before)
      if (pos > 100) pos = 0; // loop back
      setSliderPosition(pos);
    }, 50); // faster refresh (was 100ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="relative w-full h-[540px]">
        {/* Base (Before - named.png) */}
        <img
          src="/named.png"
          alt="Before"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />

        {/* Overlay (After - unnamed.png) with clipping */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`, // reveal from left to right
          }}
        >
          <img
            src="/unnamed.png"
            alt="After"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-md"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Moving label */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 text-white bg-black/60 px-2 py-1 rounded whitespace-nowrap">
            Your 30 Seconds
          </div>
        </div>
      </div>
    </div>
  );
}
