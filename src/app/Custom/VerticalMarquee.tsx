import React from "react";

const images = [
  { src: "https://placehold.co/488x415", link: "https://example.com/1", width: 488, height: 415 },
  { src: "https://placehold.co/488x315", link: "https://example.com/2", width: 488, height: 315 },
  { src: "https://placehold.co/488x455", link: "https://example.com/3", width: 488, height: 455 },
  { src: "https://placehold.co/488x315", link: "https://example.com/4", width: 488, height: 315 },
  { src: "https://placehold.co/488x625", link: "https://example.com/5", width: 488, height: 625 },
];

const images2 = [
  { src: "https://placehold.co/488x315", link: "https://example.com/1", width: 488, height: 315 },
  { src: "https://placehold.co/488x605", link: "https://example.com/2", width: 488, height: 605 },
  { src: "https://placehold.co/488x315", link: "https://example.com/3", width: 488, height: 315 },
  { src: "https://placehold.co/488x405", link: "https://example.com/4", width: 488, height: 405 },
  { src: "https://placehold.co/488x515", link: "https://example.com/5", width: 488, height: 515 },
];

const VerticalMarquee: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-hidden h-screen">
      {/* Upward Scrolling Marquee */}
      <div className="relative w-full overflow-visible">
        <div className="marquee-scroll marquee-up">
          {[...images, ...images].map((item, index) => (
            <a
              key={`up-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item block"
              style={{ width: `${item.width}px`, height: `${item.height}px` }}
            >
              <img
                src={item.src}
                alt={`scrolling-up-${index}`}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Downward Scrolling Marquee */}
      <div className="relative w-full overflow-visible">
        <div className="marquee-scroll marquee-down">
          {[...images2, ...images2].map((item, index) => (
            <a
              key={`down-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item block"
              style={{ width: `${item.width}px`, height: `${item.height}px` }}
            >
              <img
                src={item.src}
                alt={`scrolling-down-${index}`}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
