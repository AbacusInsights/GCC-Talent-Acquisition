"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroStats() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { label: "Trained and Placed", value: 3000, suffix: "+" },
    { label: "Hiring Partners", value: 7, suffix: "+" },
    { label: "University Partners", value: 20, suffix: "+" },
  ];

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounting();
            setHasAnimated(true);
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".count-number");

    elements.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const duration = 1500;
      const interval = 20;
      const steps = Math.max(1, Math.floor(duration / interval));
      const increment = Math.max(1, Math.ceil(target / steps));

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toString();
      }, interval);
    });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#0E1525", // Dark strip like screenshot
        padding: "100x 20px",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "80px",
          padding: "20px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              backgroundColor: "#121A29",
              borderRadius: "12px",
              padding: "1px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span
                className="count-number"
                data-target={item.value}
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "#5285f2ff", // your original blue
                }}
              >
                0
              </span>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#5285f2ff",
                }}
              >
                {item.suffix}
              </span>
            </div>

            <p
              style={{
                marginTop: "12px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {item.label}
            </p>

            <div
              style={{
                marginTop: "12px",
                height: "4px",
                width: "64px",
                borderRadius: "4px",
                backgroundColor: "#AED57A", // green line (kept original)
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}