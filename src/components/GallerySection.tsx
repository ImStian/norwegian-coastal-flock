import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Camera, Aperture } from "lucide-react";
import { birdPhotos, categories, type BirdPhoto, type BirdCategory } from "@/data/birds";

const GallerySection = () => {
  const [filter, setFilter] = useState<BirdCategory | "all">("all");
  const [selected, setSelected] = useState<BirdPhoto | null>(null);

  const filtered = filter === "all"
    ? birdPhotos
    : birdPhotos.filter((b) => b.category === filter);

  return (
    <section className="section-padding min-h-screen" id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
          Gallery
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          A curated collection of Norwegian bird photography from the coast and beyond.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
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

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((bird, i) => (
            <motion.div
              key={bird.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(bird)}
              className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={bird.image}
                alt={bird.species}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif text-lg font-semibold text-foreground">{bird.species}</p>
                <p className="text-sm text-muted-foreground italic">{bird.scientificName}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-primary">
                  <MapPin className="w-3 h-3" />
                  {bird.location}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            >
              <div className="md:w-3/5 flex-shrink-0">
                <img
                  src={selected.image}
                  alt={selected.species}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <button
                    onClick={() => setSelected(null)}
                    className="float-right p-2 rounded-full glass-subtle hover:bg-secondary transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <p className="text-sm text-primary font-medium mb-1">{selected.commonName}</p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    {selected.species}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {selected.scientificName}
                  </p>
                  <p className="text-sm text-secondary-foreground leading-relaxed mb-6">
                    {selected.description}
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selected.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {new Date(selected.date).toLocaleDateString("en-GB", {
                      day: "numeric", month: "long", year: "numeric"
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    {selected.camera} · {selected.lens}
                  </div>
                  <div className="flex items-center gap-2">
                    <Aperture className="w-4 h-4 text-primary" />
                    {selected.settings}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
