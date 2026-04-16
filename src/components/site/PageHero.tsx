import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
}

export function PageHero({ eyebrow, title, italic, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-12 border-b border-border overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-eyebrow text-primary mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl"
        >
          {title}
          {italic && <> <span className="italic text-primary ember-glow">{italic}</span></>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
