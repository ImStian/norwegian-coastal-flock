import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import { MapPin, Calendar, Camera, Aperture } from "lucide-react";
import { birdPhotos, allCategories, type BirdCategory } from "@/data/birds";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const createIcon = (color: string) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: 32px; height: 32px; border-radius: 50% 50% 50% 0;
      background: ${color}; transform: rotate(-45deg);
      border: 2px solid rgba(255,255,255,0.3);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      display: flex; align-items: center; justify-content: center;
    "><div style="width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.8);transform:rotate(45deg)"></div></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

const categoryColors: Record<BirdCategory, string> = {
  seabirds: "hsl(185, 45%, 45%)",
  raptors: "hsl(35, 80%, 50%)",
  waterfowl: "hsl(220, 50%, 55%)",
  waders: "hsl(150, 40%, 40%)",
  forest_birds: "hsl(100, 40%, 40%)",
  mountain_birds: "hsl(270, 30%, 50%)",
  songbirds: "hsl(340, 50%, 55%)",
};

const BirdMap = () => {
  const [filter, setFilter] = useState<BirdCategory | "all">("all");

  // Only show categories that have at least one photo
  const activeCategories = useMemo(() => {
    const usedCategories = new Set(birdPhotos.flatMap((b) => b.categories));
    return allCategories.filter((cat) => usedCategories.has(cat.value));
  }, []);

  const filtered = useMemo(
    () => filter === "all" ? birdPhotos : birdPhotos.filter((b) => b.categories.includes(filter)),
    [filter]
  );

  return (
    <section className="section-padding min-h-screen" id="map">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
          Explore Locations
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          Discover where each photograph was taken across the Norwegian coast.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "all"
              ? "bg-primary text-primary-foreground"
              : "glass text-muted-foreground hover:text-foreground"
          }`}
        >
          All Species
        </button>
        {activeCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat.value
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden border border-border h-[500px] md:h-[600px]"
      >
        <MapContainer
          center={[64, 12]}
          zoom={5}
          className="h-full w-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          {filtered.map((bird) => (
            <Marker
              key={bird.id}
              position={[bird.lat, bird.lng]}
              icon={createIcon(categoryColors[bird.categories[0]])}
            >
              <Popup maxWidth={320} minWidth={280}>
                <div className="flex gap-3">
                  <img
                    src={bird.image}
                    alt={bird.species}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: "hsl(210,20%,92%)" }}>
                      {bird.species}
                    </h4>
                    <p className="text-xs italic mb-2" style={{ color: "hsl(210,10%,55%)" }}>
                      {bird.scientificName}
                    </p>
                    <div className="space-y-1 text-xs" style={{ color: "hsl(210,10%,65%)" }}>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" style={{ color: "hsl(185,45%,45%)" }} />
                        {bird.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" style={{ color: "hsl(185,45%,45%)" }} />
                        {bird.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Camera className="w-3 h-3" style={{ color: "hsl(185,45%,45%)" }} />
                        {bird.camera}
                      </div>
                      <div className="flex items-center gap-1">
                        <Aperture className="w-3 h-3" style={{ color: "hsl(185,45%,45%)" }} />
                        {bird.settings}
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default BirdMap;
