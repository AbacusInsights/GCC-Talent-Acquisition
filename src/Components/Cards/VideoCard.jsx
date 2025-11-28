"use client";
import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";

const VideoCard = forwardRef(function VideoCard(
  { src, poster, title = "", subtitle = "", index = 0, isActive = false },
  ref
) {
  const internalRef = useRef(null);

  const getVideoEl = () =>
    ref && ref.current ? ref.current : internalRef.current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Track play/pause/mute state
  useEffect(() => {
    const v = getVideoEl();
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(v.muted);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    v.addEventListener("volumechange", onVolume);

    setIsPlaying(!v.paused && !v.ended);
    setIsMuted(v.muted);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("volumechange", onVolume);
    };
  }, [src]);

  const togglePlay = useCallback(() => {
    const v = getVideoEl();
    if (!v) return;

    if (v.paused || v.ended) v.play().catch(() => {});
    else v.pause();
  }, []);

  const toggleMute = useCallback(() => {
    const v = getVideoEl();
    if (!v) return;

    v.muted = !v.muted;
    if (!v.paused) v.play().catch(() => {});
  }, []);

  return (
    <div
      className={
        "rounded-xl shadow-md transition-transform flex flex-col gap-3 " +
        (isActive ? "scale-100" : "scale-95 opacity-90")
      }
      style={{ width: 360 }}
    >
      {/* TITLE + SUBTITLE ABOVE VIDEO */}
      <div className="px-1">
        <div className="text-lg font-semibold text-black">{title}</div>
        {subtitle && (
          <div className="text-sm text-gray-600 mt-1 leading-snug">
            {subtitle}
          </div>
        )}
      </div>

      {/* VIDEO */}
      <div className="relative w-full rounded-xl overflow-hidden">
        <video
          ref={(el) => {
            internalRef.current = el;
            if (ref && typeof ref === "object") ref.current = el;
          }}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          muted={isMuted}
          className="w-full h-[200px] object-cover bg-gray-200 cursor-pointer"
          onClick={togglePlay}
        />

        {/* PLAY/PAUSE Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="w-[120px] h-[70px] rounded-md flex items-center justify-center"
            style={{  cursor: "pointer" }}
          >
            {isPlaying ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
            )}
          </button>
        </div>

        {/* ACTIVE BADGE */}
        <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-0.5 rounded-md">
          {isActive ? "Active" : ``}
        </div>

        {/* MUTE BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="absolute right-3 bottom-3 bg-white/80 rounded-full p-1.5"
        >
          {isMuted ? "🔈" : "🔊"}
        </button>
      </div>
    </div>
  );
});

export default VideoCard;
