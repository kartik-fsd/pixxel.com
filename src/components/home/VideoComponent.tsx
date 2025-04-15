import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoHeroProps {
  videoSrc: string;
  posterImage: string;
  alt: string;
}

export function VideoHero({ videoSrc, posterImage, alt }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Preload the video
    videoElement.preload = "auto";

    // Set up event listeners
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handleEnded = () => {
      // Ensure seamless looping
      videoElement.currentTime = 0;
      videoElement
        .play()
        .catch((e) => console.error("Video playback error:", e));
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("ended", handleEnded);

    // Start loading the video
    videoElement.load();

    // Auto-play when possible
    const attemptAutoplay = () => {
      videoElement.muted = true; // Mute to help with autoplay restrictions
      videoElement.play().catch((e) => {
        console.log("Autoplay prevented:", e);
        // We'll keep the poster image visible until user interaction
      });
    };

    // Attempt autoplay after a short delay to allow loading
    const autoplayTimeout = setTimeout(attemptAutoplay, 1000);

    return () => {
      clearTimeout(autoplayTimeout);
      if (videoElement) {
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <div className="relative aspect-[4/2] mb-4 rounded-lg overflow-hidden shadow-xl">
      {/* Poster image shown until video is ready */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-10"
        >
          <img
            src={posterImage}
            alt={alt}
            className="w-full h-full object-cover"
          />

          {isLoaded && !isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current
                      .play()
                      .catch((e) => console.error("Play error:", e));
                  }
                }}
                className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Play video"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        loop
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
    </div>
  );
}
