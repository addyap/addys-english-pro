import { useState } from "react";
import { listeningExercises } from "@/data/listeningExercises";

const slugs = listeningExercises.map(e => e.slug);

export default function ListeningAudioCacheAdmin() {
  const [secret, setSecret] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function call(action: string) {
    setLoading(true);
    setOutput("Working...");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/listening-audio-admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-admin-secret": secret
          },
          body: JSON.stringify({ action, slugs })
        }
      );

      const text = await res.text();
      setOutput(text);
    } catch (err) {
      setOutput(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Listening Audio Cache Admin</h1>

      <input
        placeholder="Paste LISTENING_ADMIN_SECRET"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <button disabled={loading} onClick={() => call("status")}>
          Status
        </button>
        <button disabled={loading} onClick={() => call("warm")}>
          Warm cache
        </button>
        <button disabled={loading} onClick={() => call("purge")}>
          Purge cache
        </button>
      </div>

      <pre style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
        {output}
      </pre>
    </div>
  );
}
