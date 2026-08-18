
import React from "react";
import ErrorFallback from './ErrorFallback';
import { trackEvent } from '@/lib/analytics';

type State = { hasError: boolean; error?: Error; info?: React.ErrorInfo };

export class AppErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("AppErrorBoundary", { error, info });
    
    // Reported to Umami. This used to call window.gtag, which is never defined:
    // the site has no Google Analytics, so every crash report was silently dropped.
    trackEvent('exception', {
      description: error?.message || 'Unknown error',
      fatal: true,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <ErrorFallback 
          error={this.state.error} 
          resetErrorBoundary={this.resetError}
        />
      </div>
    );
  }
}
