import { motion } from "framer-motion";
import founderImage from "@/assets/anilfounder.png";
import { Reveal } from "@/components/animations/Reveal";

export function FounderSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24 items-start">
          {/* LEFT SIDE: Portrait */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative inline-block">
                <div className="overflow-hidden border border-gold/30 bg-muted">
                  <img
                    src={founderImage}
                    alt="Anil Kumar, Founder of Supriya Travels of India"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full max-w-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Subtle gold accent frame */}
                <div aria-hidden className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold opacity-50" />
              </div>
              
              <div className="mt-8">
                <h3 className="font-display text-2xl text-navy">Anil Kumar</h3>
                <p className="mt-1 text-[15px] font-medium tracking-wide text-muted-foreground uppercase">
                  Founder, Supriya Travels of India
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <p className="eyebrow inline-flex items-center gap-3 text-gold">
                <span aria-hidden className="h-px w-8 bg-gold" />
                THE FOUNDER
              </p>
              <h2 className="font-display mt-6 max-w-2xl text-4xl leading-tight text-navy md:text-5xl lg:text-[52px]">
                25+ Years of Experience.<br />A Journey Built on Trust.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="mt-10 space-y-6 text-[16px] leading-relaxed text-muted-foreground"
            >
              <p>
                For more than 25 years, I have had the privilege of helping people turn their travel plans 
                into meaningful journeys. I founded Supriya Travels of India with a simple belief — every 
                traveller deserves honest guidance, dependable service, and personal attention.
              </p>
              <p>
                Over the years, I have seen the immense trust placed in a travel partner, especially for 
                sacred journeys like Hajj and Umrah. For me, travel is not simply about tickets or 
                itineraries; it is about taking personal responsibility for the journey entrusted to us.
              </p>
              <p>
                From family holidays to global adventures, our vision is to build lasting relationships 
                through transparency and genuine care. We are deeply grateful to every customer who 
                continues to inspire us to serve with the exact same commitment we started with.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-8"
            >
              <div>
                <p className="font-display text-2xl text-navy">Anil Kumar</p>
                <p className="text-sm text-muted-foreground italic mt-1">Founder, Supriya Travels of India</p>
              </div>

              {/* Experience Statistic */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex items-center gap-4 bg-secondary/50 px-6 py-4 rounded-sm border border-gold/20"
              >
                <span className="font-display text-4xl text-gold">25+</span>
                <div className="text-xs font-medium uppercase tracking-widest text-navy leading-tight">
                  Years<br/>Travel Industry<br/>Experience
                </div>
              </motion.div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="mt-12 bg-navy p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div aria-hidden className="absolute -top-8 -left-4 text-[120px] leading-none text-white/5 font-display select-none">"</div>
              <blockquote className="relative z-10">
                <p className="font-display text-2xl md:text-3xl leading-snug text-gold">
                  "Every journey begins with trust. Our responsibility is to make that trust worth the journey."
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span aria-hidden className="h-px w-6 bg-white/30" />
                  <p className="text-sm tracking-wide text-white/70 uppercase">Anil Kumar, Founder</p>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
