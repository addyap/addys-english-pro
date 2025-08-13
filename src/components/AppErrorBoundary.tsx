
import React from "react";

type State = { hasError: boolean; error?: any; info?: any };

export class AppErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error("AppErrorBoundary", { error, info });
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const message = String(this.state.error?.message ?? this.state.error ?? "Unknown error");
    return (
      <div role="alert" style={{ padding: 16 }}>
        <h1>Something went wrong</h1>
        <p>{message}</p>
        <details style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>
          {String(this.state.error?.stack ?? "")}
        </details>
        <button
          style={{ marginTop: 12, padding: "8px 12px", border: "1px solid #111", borderRadius: 8 }}
          onClick={() => {
            const payload = {
              message,
              stack: String(this.state.error?.stack ?? ""),
              url: window.location.href,
              ua: navigator.userAgent,
            };
            navigator.clipboard.writeText(JSON.stringify(payload, null, 2)).catch(() => {});
            alert("Diagnostics copied to clipboard");
          }}
        >
          Copy diagnostics
        </button>
      </div>
    );
  }
}
