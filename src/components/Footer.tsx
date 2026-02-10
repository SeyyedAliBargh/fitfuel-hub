import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = ["Shop All", "Best Sellers", "New Arrivals", "Gift Cards", "Blog"];
const support = ["Contact Us", "FAQs", "Shipping Info", "Returns", "Warranty"];
const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-primary">IRON<span className="text-foreground">FORGE</span></span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium gym equipment for home and commercial use. Built tough, priced right.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 tracking-wide">SUPPORT</h4>
            <ul className="space-y-2.5">
              {support.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 tracking-wide">CONTACT US</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                123 Fitness Ave, Los Angeles, CA 90001
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                support@ironforge.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 IronForge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
