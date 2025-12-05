"use client";

import React, { useMemo, useRef, useEffect } from "react";

// Detect YouTube URLs
function isYouTubeUrl(url = "") {
  return /youtube\.com|youtu\.be/.test(url);
}

// Convert any YouTube URL -> embed URL with enablejsapi=1
function getYouTubeEmbedUrl(url) {
  if (!isYouTubeUrl(url)) return url;

  try {
    const u = new URL(url);

    // Short URL: https://youtu.be/VIDEO_ID
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}?enablejsapi=1`;
    }

    // Normal URL: https://www.youtube.com/watch?v=VIDEO_ID
    const v = u.searchParams.get("v");
    if (v) {
      return `https://www.youtube.com/embed/${v}?enablejsapi=1`;
    }

    // Already /embed/ path
    if (u.pathname.startsWith("/embed/")) {
      const hasQuery = u.search && u.search.length > 0;
      return hasQuery
        ? `${url}&enablejsapi=1`
        : `${url}?enablejsapi=1`;
    }

    return url;
  } catch (e) {
    return url;
  }
}

export default function VideoCard({
  src,
  poster,
  title = "",
  subtitle = "",
  index = 0,
  isActive = false,
  onPlay,          // called when this video starts playing
  registerPlayer,  // lets parent store refs to DOM elements
}) {
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  const isYouTube = useMemo(() => isYouTubeUrl(src), [src]);
  const embedSrc = useMemo(
    () => (isYouTube ? getYouTubeEmbedUrl(src) : src),
    [src, isYouTube]
  );

  // Register HTML5 or YouTube element with parent slider
  useEffect(() => {
    if (!registerPlayer) return;

    if (isYouTube && iframeRef.current) {
      registerPlayer(index, { type: "youtube", el: iframeRef.current });
    } else if (!isYouTube && videoRef.current) {
      registerPlayer(index, { type: "html5", el: videoRef.current });
    }
  }, [index, isYouTube, registerPlayer]);

  return (
    <div className="flex flex-col gap-2 rounded-xl overflow-hidden bg-white shadow-md">
      <div className="relative aspect-video w-full">
        {isYouTube ? (
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={title || `Video ${index + 1}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            // Treat click as "intent to play"
            onClick={() => onPlay && onPlay(index)}
          />
        ) : (
          <video
            ref={videoRef}
            src={embedSrc}
            poster={poster}
            controls
            className="w-full h-full"
            onPlay={() => onPlay && onPlay(index)}
          />
        )}
      </div>

      {(title || subtitle) && (
        <div className="px-3 pb-3">
          {title && (
            <h3 className="text-base font-semibold leading-snug">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
