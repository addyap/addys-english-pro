import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorFallback from './ErrorFallback';
import { trackEvent } from '@/lib/analytics';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Section error caught:', this.props.sectionName, error, errorInfo);
    
    // Reported to Umami (was window.gtag, which never exists on this site).
    trackEvent('exception', {
      description: `${this.props.sectionName || 'Section'}: ${error.message}`,
      fatal: false,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetErrorBoundary={this.resetError}
          minimal
        />
      );
    }

    return this.props.children;
  }
}
