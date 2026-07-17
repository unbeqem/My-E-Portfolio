"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import SuccessBurst from "@/components/success-burst";
import { socials } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  { name: "user_name", label: "Name", type: "text" },
  { name: "user_email", label: "E-Mail", type: "email" },
] as const;

const fieldContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fieldItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const cardRef = useRef<HTMLDivElement>(null);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) =>
      `radial-gradient(480px circle at ${gx}% ${gy}%, color-mix(in oklab, var(--brand) 20%, transparent), transparent 70%)`
  );

  const onCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm("service_dqx8mdk", "template_msrtboh", e.currentTarget, "P1Zriu_MXjMaVXnIl")
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-violet/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.25em] text-brand">
            03 / Kontakt
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Lust auf ein Projekt?
            <span className="text-ink-soft"> Lass uns reden.</span>
          </h2>
          <p className="mt-6 max-w-sm text-ink-soft">
            Ich bin offen für neue Möglichkeiten und höre gern von dir &mdash;
            egal ob Projekt, Frage oder einfach nur Hallo.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <motion.a
              href={`mailto:${socials.email}`}
              data-cursor="Mail"
              whileHover={{ x: 4 }}
              className="flex w-fit items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Mail size={16} /> {socials.email}
            </motion.a>
            <motion.a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              whileHover={{ x: 4 }}
              className="flex w-fit items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <GithubIcon size={16} /> github.com/unbeqem
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={onCardMouseMove}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-3xl border border-line bg-bg-soft p-6 sm:p-10"
        >
          <motion.div
            style={{ background: glowBackground }}
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center"
                >
                  <SuccessBurst />
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="font-display text-xl font-semibold"
                  >
                    Nachricht gesendet!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="max-w-xs text-sm text-ink-soft"
                  >
                    Danke für deine Nachricht &mdash; ich melde mich so schnell
                    wie möglich zurück.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  variants={fieldContainer}
                  onSubmit={onSubmit}
                  className="flex flex-col gap-6"
                >
                  {fields.map((field) => (
                    <motion.label
                      key={field.name}
                      variants={fieldItem}
                      className="flex flex-col gap-2"
                    >
                      <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                        {field.label}
                      </span>
                      <div className="relative">
                        <input
                          required
                          type={field.type}
                          name={field.name}
                          className="peer w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors"
                        />
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                      </div>
                    </motion.label>
                  ))}
                  <motion.label variants={fieldItem} className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                      Nachricht
                    </span>
                    <div className="relative">
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="peer w-full resize-none border-b border-line bg-transparent py-2 text-ink outline-none transition-colors"
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                    </div>
                  </motion.label>

                  <motion.button
                    variants={fieldItem}
                    type="submit"
                    data-cursor="Send"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group/btn relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 font-mono text-sm uppercase tracking-wider text-bg disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Wird gesendet
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Nachricht senden</span>
                        <span className="absolute inset-0 -translate-y-full bg-brand transition-transform duration-300 group-hover/btn:translate-y-0" />
                      </>
                    )}
                  </motion.button>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-accent-coral"
                    >
                      Der E-Mail-Dienst ist gerade nicht erreichbar &mdash;
                      schreib mir direkt an {socials.email}.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
