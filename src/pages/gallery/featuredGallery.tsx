import React, { useEffect, useRef, useState } from "react";

// Define types
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: string;
  size?: "large" | "medium" | "small";
  category?: string;
}

interface FeaturedGalleryProps {
  featuredSets: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  }[];
  galleryImages: GalleryImage[];
}

const FeaturedGallery: React.FC<FeaturedGalleryProps> = ({ featuredSets }) => {
  const [showPlane, setShowPlane] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowPlane(true);
        }
      },
      { threshold: 0.5 }
    );

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mt-12 mb-16">
      {/* Enhanced decorative background with animated path */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {showPlane && (
          <div className="w-full h-full">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Beautiful flowing curved path for the animation */}
              <path
                d="M100,300 C150,200 250,100 350,150 C450,200 500,250 600,200 C700,150 800,100 900,300 C950,400 850,500 750,450 C650,400 550,450 450,400 C350,350 250,400 150,350 C50,300 50,400 100,300"
                id="flowingPath"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="5,8"
                className="opacity-30"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Animated decorative elements along the path */}
              <circle r="5" fill="var(--color-primary)" opacity="0.6">
                <animateMotion
                  path="M100,300 C150,200 250,100 350,150 C450,200 500,250 600,200 C700,150 800,100 900,300 C950,400 850,500 750,450 C650,400 550,450 450,400 C350,350 250,400 150,350 C50,300 50,400 100,300"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="3" fill="var(--color-primary)" opacity="0.4">
                <animateMotion
                  path="M100,300 C150,200 250,100 350,150 C450,200 500,250 600,200 C700,150 800,100 900,300 C950,400 850,500 750,450 C650,400 550,450 450,400 C350,350 250,400 150,350 C50,300 50,400 100,300"
                  dur="25s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Elegant paper airplane */}
              <g id="paperAirplane">
                <path
                  d="M0,0 L10,-5 L0,5 L0,0"
                  fill="var(--color-primary)"
                  className="opacity-90"
                />
                <path
                  d="M0,0 L10,-5 L20,0 L0,0"
                  fill="var(--color-primary)"
                  className="opacity-70"
                />
                <animateMotion
                  path="M100,300 C150,200 250,100 350,150 C450,200 500,250 600,200 C700,150 800,100 900,300 C950,400 850,500 750,450 C650,400 550,450 450,400 C350,350 250,400 150,350 C50,300 50,400 100,300"
                  dur="12s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>

              {/* Beautiful light bursts with randomized positions */}
              {[...Array(15)].map((_, i) => (
                <g key={i}>
                  <circle
                    cx={100 + i * 60}
                    cy={100 + (i % 5) * 80}
                    r="2"
                    fill="var(--color-primary)"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0.7;0"
                      dur={`${2 + (i % 3)}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    />
                    <animate
                      attributeName="r"
                      values="2;4;2"
                      dur={`${2 + (i % 3)}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    />
                  </circle>
                </g>
              ))}
            </svg>
          </div>
        )}
      </div>

      {/* Featured Sets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {featuredSets.map((set, index) => (
          <div
            key={set.id}
            ref={index === featuredSets.length - 1 ? lastCardRef : null}
            className="group relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            style={{
              transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
              transformOrigin: "center",
              transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="overflow-hidden rounded-lg shadow-inner">
              <img
                src={set.imageUrl}
                alt={set.title}
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Beautiful overlay effect when hovering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-bold text-lg">
                    {set.title}
                  </div>
                  <div className="text-white/80 text-sm">{set.category}</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold">{set.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{set.description}</p>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-primary/30 rounded-sm"></div>

            {/* Beautiful heart icon with pulse animation */}
            <div className="absolute -top-2 -right-2 transform rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                <animate
                  attributeName="opacity"
                  values="0.4;0.8;0.4"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={hoverIndex === index ? "0s" : "indefinite"}
                />
              </svg>
            </div>

            {/* Subtle corner shine effect */}
            <div className="absolute -bottom-1 -right-1 w-12 h-12 overflow-hidden">
              <div
                className="absolute transform rotate-45 translate-x-6 -translate-y-6 w-8 h-8 bg-gradient-to-br from-white via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 15px 2px rgba(255,255,255,0.5)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced decorative corner element with more sophisticated SVG designs */}
      <div className="hidden lg:block absolute right-0 -bottom-24 transform translate-x-1/4">
        <div className="relative">
          {/* Mesmerizing orbit system with rotating circles */}
          <div className="absolute transform rotate-12 -right-4 -top-20 w-60 h-60">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer orbit */}
              <circle
                cx="100"
                cy="100"
                r="98"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="1, 6"
                className="animate-spin-slow"
              />

              {/* Middle orbit */}
              <circle
                cx="100"
                cy="100"
                r="75"
                stroke="var(--color-primary)"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="1, 8"
                className="animate-reverse-spin"
              />

              {/* Inner orbit */}
              <circle
                cx="100"
                cy="100"
                r="50"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3, 5"
                className="animate-spin-slow"
              />

              {/* Orbiting elements */}
              {[...Array(3)].map((_, i) => (
                <g key={`orbit-${i}`}>
                  <circle
                    cx="100"
                    cy="100"
                    r={98 - i * 24}
                    fill="none"
                    stroke="none"
                  >
                    {/* Orbiting planet */}
                    <g>
                      <circle
                        r={4 - i * 0.8}
                        fill="var(--color-primary)"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur={`${6 + i * 3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      {/* Small moon */}
                      <circle
                        r={1.5 - i * 0.3}
                        fill="white"
                        opacity="0.6"
                        cx={8 - i}
                        cy={0}
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 0 0"
                          to="360 0 0"
                          dur={`${4 - i}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 100 100"
                      to={`${i % 2 === 0 ? 360 : -360} 100 100`}
                      dur={`${20 - i * 4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}

              {/* Decorative stars in the background */}
              {[...Array(20)].map((_, i) => (
                <circle
                  key={`star-${i}`}
                  cx={50 + Math.random() * 100}
                  cy={50 + Math.random() * 100}
                  r={0.5 + Math.random() * 1.5}
                  fill="white"
                  opacity={0.3 + Math.random() * 0.5}
                >
                  <animate
                    attributeName="opacity"
                    values={`${0.3 + Math.random() * 0.3};${
                      0.7 + Math.random() * 0.3
                    };${0.3 + Math.random() * 0.3}`}
                    dur={`${2 + Math.random() * 4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </div>

          {/* Stunning detailed camera SVG with animations */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 right-20 h-32 w-32 text-primary/70"
            viewBox="0 0 24 24"
            fill="none"
          >
            {/* Camera body with gradient */}
            <linearGradient
              id="cameraGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--color-primary-dark)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
            <rect
              x="2"
              y="6"
              width="20"
              height="12"
              rx="2"
              fill="url(#cameraGradient)"
              opacity="0.6"
            />

            {/* Camera lens with detailed elements */}
            <circle cx="12" cy="12" r="5.5" fill="black" opacity="0.7" />
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="var(--color-primary-dark)"
              strokeWidth="0.3"
              fill="none"
            />
            <circle cx="12" cy="12" r="4" fill="#111" />
            <circle cx="12" cy="12" r="3" fill="#222" />
            <circle cx="12" cy="12" r="2" fill="#333" />

            {/* Lens details */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`lens-detail-${i}`}
                x1={12 + 4 * Math.cos((Math.PI * i) / 4)}
                y1={12 + 4 * Math.sin((Math.PI * i) / 4)}
                x2={12 + 5 * Math.cos((Math.PI * i) / 4)}
                y2={12 + 5 * Math.sin((Math.PI * i) / 4)}
                stroke="var(--color-primary-dark)"
                strokeWidth="0.2"
              />
            ))}

            {/* Lens flare and reflections */}
            <circle cx="10.5" cy="10.5" r="0.8" fill="white" opacity="0.7" />
            <circle cx="10.8" cy="10.8" r="0.3" fill="white" opacity="0.9" />

            {/* Animated aperture */}
            <circle cx="12" cy="12" r="1.5" fill="black">
              <animate
                attributeName="r"
                values="1.5;1;1.5"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Camera top details */}
            <rect
              x="7"
              y="2"
              width="10"
              height="4"
              rx="1"
              fill="var(--color-primary-dark)"
              opacity="0.8"
            />
            <rect
              x="9"
              y="3"
              width="6"
              height="2"
              rx="0.5"
              fill="black"
              opacity="0.7"
            />
            <circle cx="8.5" cy="4" r="0.7" fill="black" opacity="0.8" />

            {/* Camera button */}
            <circle cx="8.5" cy="4" r="0.4" fill="var(--color-primary)">
              <animate
                attributeName="fill"
                values="var(--color-primary);white;var(--color-primary)"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Flash */}
            <rect
              x="16"
              y="7.5"
              width="2.5"
              height="2"
              rx="0.5"
              fill="white"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Flash animation - light burst */}
            <filter
              id="flashGlow"
              height="300%"
              width="300%"
              x="-100%"
              y="-100%"
            >
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <circle
              cx="17.25"
              cy="8.5"
              r="0"
              fill="white"
              filter="url(#flashGlow)"
            >
              <animate
                attributeName="r"
                values="0;5;0"
                dur="5s"
                repeatCount="indefinite"
                begin="2s"
              />
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="5s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>
          </svg>

          {/* Beautiful glowing photography-themed elements */}
          <div className="absolute top-16 right-8 w-8 h-8 animate-float">
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <filter id="glowFilter">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <path
                d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"
                fill="var(--color-primary)"
                opacity="0.7"
                filter="url(#glowFilter)"
              />
            </svg>
          </div>

          <div className="absolute top-10 right-40 w-6 h-6 animate-pulse">
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <filter id="glowFilter2">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="var(--color-primary)"
                opacity="0.6"
                filter="url(#glowFilter2)"
              />
              <circle cx="12" cy="12" r="4" fill="white" opacity="0.4" />
            </svg>
          </div>

          <div
            className="absolute top-28 right-36 w-9 h-9 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <filter id="glowFilter3">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <path
                d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
                fill="var(--color-primary)"
                opacity="0.6"
                filter="url(#glowFilter3)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;
