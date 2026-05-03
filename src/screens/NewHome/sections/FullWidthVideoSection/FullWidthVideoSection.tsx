import React from "react";

export const FullWidthVideoSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] md:h-auto md:aspect-video min-h-[500px] bg-[#020018] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/impulse-video-new.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

