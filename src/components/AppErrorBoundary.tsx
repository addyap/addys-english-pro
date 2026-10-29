
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
    
    // Reported through trackEvent (a no-op while there is no analytics
    // provider; see src/lib/analytics.ts). The console line above is what
    // surfaces it today.
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
