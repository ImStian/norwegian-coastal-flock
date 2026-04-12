import { motion } from "framer-motion";
import { Camera, Mountain, Bird, Award } from "lucide-react";

const stats = [
  { icon: Camera, value: "12+", label: "Years of Photography" },
  { icon: Bird, value: "180+", label: "Species Documented" },
  { icon: Mountain, value: "47", label: "Locations Visited" },
  { icon: Award, value: "23", label: "Awards Won" },
];

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
            About the Photographer
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-secondary-foreground leading-relaxed text-lg mb-6">
              Based along the rugged coastline of Western Norway, I've spent over a decade 
              documenting the remarkable birdlife of our fjords, islands, and open seas. 
              Every image is a testament to patience, respect for nature, and the raw beauty 
              of the Nordic wilderness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the towering sea cliffs of Runde to the arctic shores of Tromsø, 
              my work aims to bring viewers closer to the wild world of Norwegian birds — 
              revealing moments of grace, power, and vulnerability that are often hidden 
              from the human eye.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-serif text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
