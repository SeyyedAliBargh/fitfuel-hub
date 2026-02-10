import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            JOIN THE <span className="text-gradient">IRONFORGE</span> COMMUNITY
          </h2>
          <p className="text-muted-foreground mb-6">Get exclusive deals, training tips, and early access to new products.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-6 py-3 gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
