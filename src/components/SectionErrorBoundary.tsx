import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

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
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 my-4" role="alert" aria-live="assertive">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
            <h3 className="font-semibold text-destructive">
              {this.props.fallbackTitle || 'Une erreur est survenue'}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Cette section ne peut pas être affichée pour le moment. Veuillez réessayer plus tard.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-xs">
              <summary className="cursor-pointer text-destructive">Détails techniques</summary>
              <pre className="mt-2 p-2 bg-muted rounded overflow-auto">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
