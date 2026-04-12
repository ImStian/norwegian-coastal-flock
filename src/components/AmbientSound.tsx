import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ChevronUp } from "lucide-react";

const AmbientSound = () => {
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [expanded, setExpanded] = useState(false);
  const [isMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return /Mobi|Android/i.test(navigator.userAgent) || 
           ("getBattery" in navigator);
  });

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass rounded-xl p-4 mb-2 w-48"
          >
            <p className="text-xs text-muted-foreground mb-3 font-medium">
              Ambient Soundscape
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="flex-1 h-1 accent-primary bg-secondary rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
              />
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3 italic">
              🎧 Coastal wind & waves
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="glass-subtle p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronUp
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
        <button
          onClick={toggleMute}
          className="glass p-3 rounded-full text-foreground hover:bg-primary/20 transition-all duration-300 shadow-lg"
          aria-label={muted ? "Unmute ambient sound" : "Mute ambient sound"}
        >
          {muted ? (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default AmbientSound;
