"use client";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const VideoCard = forwardRef(function VideoCard(
  { src, poster, title = "", subtitle = "", index = 0, isActive = false },
  ref
) {
  const internalRef = useRef(null);

  const getVideoEl = () => (ref && ref.current ? ref.current : internalRef.current);

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
    if (!v.paused) v.play().catch(() => {}); // keep playing if toggled while playing
  }, []);

  // Fullscreen handler (robust with fallbacks)
  const openFullscreen = useCallback(
    (e) => {
      // stop click from bubbling to the video (which toggles play)
      if (e && e.stopPropagation) e.stopPropagation();

      const v = getVideoEl();
      if (!v) return;

      // Try video element first
      const request =
        v.requestFullscreen ||
        v.webkitRequestFullscreen ||
        v.mozRequestFullScreen ||
        v.msRequestFullscreen;

      if (request) {
        try {
          // Optional: unmute when entering fullscreen (comment out if undesired)
          // v.muted = false;

          request.call(v);
          return;
        } catch (err) {
          // fall through to parent fallback
        }
      }

      // Fallback: try parent container (some browsers prefer container)
      const parent = v.parentElement || v;
      const parentRequest =
        parent.requestFullscreen ||
        parent.webkitRequestFullscreen ||
        parent.mozRequestFullScreen ||
        parent.msRequestFullscreen;

      if (parentRequest) {
        try {
          // parent may contain controls/overlay
          parentRequest.call(parent);
        } catch (err) {
          // last resort: open source in new tab
          window.open(src, "_blank");
        }
      } else {
        // last resort: open source in new tab
        window.open(src, "_blank");
      }
    },
    [src, ref]
  );

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
          <div className="text-sm text-gray-600 mt-1 leading-snug">{subtitle}</div>
        )}
      </div>

      {/* VIDEO */}
      <div className="relative w-full rounded-xl overflow-hidden">
        {/* Fullscreen button - top right */}
        <button
          onClick={openFullscreen}
          aria-label="Fullscreen"
          title="Fullscreen"
          className="absolute z-30 right-3 top-3 bg-white/90 hover:bg-white px-2 py-1 rounded-md shadow-sm"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M9 3H5a2 2 0 0 0-2 2v4"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 21h4a2 2 0 0 0 2-2v-4"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 7V5a2 2 0 0 0-2-2h-2"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17v2a2 2 0 0 0 2 2h2"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* pointer-events-none on wrapper but button inside handles clicks */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="pointer-events-auto w-[120px] h-[70px] rounded-md flex items-center justify-center"
            style={{ cursor: "pointer" }}
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
