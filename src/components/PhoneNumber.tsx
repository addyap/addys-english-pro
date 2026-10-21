import { useState } from "react";

/**
 * The phone number, for the pages that must show it (legal notice, CGV,
 * contact). It is not in the HTML or the bundle — a scraper reading the page
 * finds only a button. A click fetches it from the protected hand-off
 * (api/whatsapp.ts, ?phone=1: same-origin requests only, rate-limited, never
 * for bots), then shows it as a normal tap-to-call link.
 */
export default function PhoneNumber({ className = "" }: { className?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "error" | { display: string; tel: string }>("idle");

  if (typeof state === "object") {
    return (
      <a href={`tel:${state.tel}`} className={className}>
        {state.display}
      </a>
    );
  }

  const reveal = async () => {
    setState("loading");
    try {
      const res = await fetch("/whatsapp?phone=1", { cache: "no-store" });
      if (!res.ok) throw new Error(String(res.status));
      setState(await res.json());
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={reveal}
        disabled={state === "loading"}
        className={`underline underline-offset-2 hover:decoration-2 disabled:opacity-60 ${className}`}
      >
        {state === "loading" ? "Chargement…" : "Afficher le numéro"}
      </button>
      {state === "error" && (
        <span className="ml-2 text-sm text-muted-foreground">
          (indisponible pour le moment — écrivez-moi à formations@antonyaddy.com)
        </span>
      )}
      <noscript>
        <span className="text-sm text-muted-foreground"> communiqué sur demande à formations@antonyaddy.com</span>
      </noscript>
    </>
  );
}
