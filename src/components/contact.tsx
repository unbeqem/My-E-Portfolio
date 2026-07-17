"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { socials } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  { name: "user_name", label: "Name", type: "text" },
  { name: "user_email", label: "E-Mail", type: "email" },
] as const;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .sendForm("service_dqx8mdk", "template_msrtboh", e.currentTarget, "P1Zriu_MXjMaVXnIl")
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
            <a
              href={`mailto:${socials.email}`}
              data-cursor="Mail"
              className="flex w-fit items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Mail size={16} /> {socials.email}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              className="flex w-fit items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <GithubIcon size={16} /> github.com/unbeqem
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-line bg-bg-soft p-6 sm:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center"
              >
                <CheckCircle2 className="text-brand" size={48} />
                <p className="font-display text-xl font-semibold">
                  Nachricht gesendet!
                </p>
                <p className="max-w-xs text-sm text-ink-soft">
                  Danke für deine Nachricht &mdash; ich melde mich so schnell
                  wie möglich zurück.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="flex flex-col gap-6"
              >
                {fields.map((field) => (
                  <label key={field.name} className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                      {field.label}
                    </span>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      className="border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
                    />
                  </label>
                ))}
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Nachricht
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="resize-none border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-brand"
                  />
                </label>

                <button
                  type="submit"
                  data-cursor="Send"
                  disabled={status === "loading"}
                  className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 font-mono text-sm uppercase tracking-wider text-bg disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Wird gesendet
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Nachricht senden</span>
                      <span className="absolute inset-0 -translate-y-full bg-brand transition-transform duration-300 group-hover:translate-y-0" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-accent-coral">
                    Der E-Mail-Dienst ist gerade nicht erreichbar &mdash;
                    schreib mir direkt an {socials.email}.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
