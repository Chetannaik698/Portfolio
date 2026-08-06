import { motion } from "framer-motion";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:100%_100%,64px_64px,64px_64px]" />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-8xl font-bold text-white/10"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="heading-lg mt-2"
      >
        This page wandered off.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="body-muted mt-3 max-w-sm"
      >
        The page you're looking for doesn't exist or has moved.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        href="/"
        className="btn-primary mt-8"
      >
        <Home size={15} /> Back to Home
      </motion.a>
    </div>
  );
}
