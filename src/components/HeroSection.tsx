import { useRef, useEffect, useState } from "react";
import appuntoLogo from "@/assets/appunto-logo.png";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_URL = "https://holderway.s3.us-east-2.amazonaws.com/Appunto/Video+landing+Appunto_1_1.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait a few seconds to buffer, then play with sound
    video.muted = false;
    video.volume = 1;

    const playWithSound = () => {
      video.muted = false;
      video.play().catch(() => {
        // Browser blocked unmuted autoplay - fallback to muted
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    };

    // Give 5 seconds to buffer before playing
    const bufferTimer = setTimeout(() => {
      playWithSound();
    }, 5000);

    // If video is ready sooner (canplaythrough), also try
    const handleCanPlayThrough = () => {
      clearTimeout(bufferTimer);
      playWithSound();
    };

    const handleStalled = () => {
      setTimeout(() => {
        if (video.paused || video.readyState < 3) {
          video.play().catch(() => {});
        }
      }, 1000);
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("stalled", handleStalled);

    return () => {
      clearTimeout(bufferTimer);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("stalled", handleStalled);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center gap-8">
        <img
          src={appuntoLogo}
          alt="Appunto logo"
          className="h-10 md:h-14 w-auto"
        />
        <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full object-cover"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            <span className="text-primary">Automatiza</span> la gestión de citas en tu negocio
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Mientras tú cortas cabello o prestas tus servicios, nuestro asistente virtual <span className="font-bold">responde mensajes, confirma citas y llena tu agenda</span>. Sin perder clientes, sin esfuerzo.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://appunto.com.co/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Prueba gratis 14 días
            </a>
            <a
              href="https://appunto.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-muted transition-colors"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
