import { Camera } from "lucide-react";

const Footer = () => (
  <footer className="glass border-t border-border px-6 py-8 text-center">
    <div className="flex items-center justify-center gap-2 mb-3">
      <Camera className="w-4 h-4 text-primary" />
      <span className="font-serif text-sm text-foreground">Norsk Fuglefoto</span>
    </div>
    <p className="text-xs text-muted-foreground">
      © {new Date().getFullYear()} All photographs and content. Built with passion for Norwegian nature.
    </p>
  </footer>
);

export default Footer;
