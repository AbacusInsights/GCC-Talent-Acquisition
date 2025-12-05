"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import VideoCard from "../Cards/VideoCard";

export default function VideoSlider({ videos = [] }) {
  const GAP = 24; // px gap between cards
  const containerRef = useRef(null);

  const [visible, setVisible] = useState(3);
  const [cardW, setCardW] = useState(360);
  const [startIdx, setStartIdx] = useState(0);

  // store actual players { [index]: { type: "html5" | "youtube", el } }
  const playersRef = useRef({});

  // center index
  const centerIdx = Math.min(
    startIdx + Math.floor(visible / 2),
    Math.max(0, videos.length - 1)
  );

  // responsive visible setting
  useEffect(() => {
    const updateVisible = () => {
      const w =
        typeof window !== "undefined" ? window.innerWidth : 1200;
      if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // compute sizes and clamp startIdx
  useLayoutEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const viewport = el.clientWidth;
      const totalGap = GAP * (visible - 1);
      const w = Math.max(
        160,
        Math.floor((viewport - totalGap) / visible)
      );
      setCardW(w);

      setStartIdx((s) =>
        Math.min(s, Math.max(0, Math.max(0, videos.length - visible)))
      );
    };

    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [visible, videos.length]);

  // register player from VideoCard
  const registerPlayer = useCallback((index, player) => {
    if (!player || !player.el) return;
    playersRef.current[index] = player;
  }, []);

  // helper: play only center video (HTML5); pause all others (HTML5 + YouTube)
  const playCenterOnly = useCallback(
    (center) => {
      const players = playersRef.current;
      Object.entries(players).forEach(([key, player]) => {
        const i = Number(key);
        if (!player || !player.el) return;

        if (player.type === "html5") {
          // normal <video>
          try {
            if (i === center) {
              player.el.muted = true;
              player.el.playsInline = true;
              player.el.play().catch(() => {});
            } else {
              player.el.pause();
            }
          } catch (e) {}
        } else if (player.type === "youtube") {
          // pause all YouTube videos except center
          if (i !== center && player.el.contentWindow) {
            player.el.contentWindow.postMessage(
              JSON.stringify({
                event: "command",
                func: "pauseVideo",
                args: [],
              }),
              "*"
            );
          }
        }
      });
    },
    []
  );

  // autoplay initial center when videos/visible changes
  useEffect(() => {
    setStartIdx((s) =>
      Math.min(s, Math.max(0, videos.length - visible))
    );
    const t = setTimeout(() => playCenterOnly(centerIdx), 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos.length, visible]);

  // re-play center when startIdx changes
  useEffect(() => {
    playCenterOnly(centerIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIdx]);

  // called when a specific video starts playing
  const handlePlay = useCallback(
    (i) => {
      const players = playersRef.current;

      // pause others
      Object.entries(players).forEach(([key, player]) => {
        const idx = Number(key);
        if (!player || !player.el || idx === i) return;

        if (player.type === "html5") {
          try {
            player.el.pause();
          } catch (e) {}
        } else if (player.type === "youtube") {
          try {
            player.el.contentWindow?.postMessage(
              JSON.stringify({
                event: "command",
                func: "pauseVideo",
                args: [],
              }),
              "*"
            );
          } catch (e) {}
        }
      });

      // recenter
      let newStart = i - Math.floor(visible / 2);
      newStart = Math.max(
        0,
        Math.min(newStart, Math.max(0, videos.length - visible))
      );
      setStartIdx(newStart);
    },
    [visible, videos.length]
  );

  // navigation
  const maxStart = Math.max(0, videos.length - visible);
  const prev = () => setStartIdx((s) => Math.max(0, s - 1));
  const next = () => setStartIdx((s) => Math.min(s + 1, maxStart));

  // compute widths & translate
  const viewportWidth = containerRef.current
    ? containerRef.current.clientWidth
    : 0;
  const trackWidth =
    videos.length * cardW + Math.max(0, videos.length - 1) * GAP;
  const desiredTranslate = -Math.round(startIdx * (cardW + GAP));
  const minTranslate = Math.min(0, viewportWidth - trackWidth);
  const translateX = Math.max(
    minTranslate,
    Math.min(0, desiredTranslate)
  );

  return (
    <section className="w-full py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-4xl font-Roboto-semibold text-[#0ea5e9] text-center">
            Work in Actions
          </h3>
          <p
            className="mt-2 mb-6 mx-auto"
            style={{
              maxWidth: 720,
              textAlign: "center",
              color: "rgba(34,34,34,0.75)",
            }}
          >
            Explore our work in action through quick demo videos,
            showcasing the features, workflows, and user experience in
            real-time.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden mx-auto relative"
            style={{ width: "100%", boxSizing: "border-box", padding: 0 }}
          >
            {/* left control */}
            <button
              onClick={prev}
              disabled={startIdx === 0}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm disabled:opacity-40"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 10,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* right control */}
            <button
              onClick={next}
              disabled={startIdx >= maxStart}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm disabled:opacity-40"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 10,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* track */}
            <div
              className="flex items-stretch"
              style={{
                gap: GAP,
                width: trackWidth,
                transform: `translateX(${translateX}px)`,
                transition:
                  "transform 360ms cubic-bezier(.22,.9,.33,1)",
                padding: "8px 0",
                boxSizing: "content-box",
              }}
            >
              {videos.map((v, i) => (
                <div
                  key={v.id ?? i}
                  style={{ width: cardW, flex: `0 0 ${cardW}px` }}
                >
                  <VideoCard
                    src={v.src}
                    poster={v.poster}
                    title={v.title}
                    subtitle={v.subtitle}
                    index={i}
                    isActive={i === centerIdx}
                    onPlay={handlePlay}
                    registerPlayer={registerPlayer}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
