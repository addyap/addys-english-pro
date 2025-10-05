import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
  minimal?: boolean;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  minimal = false,
}) => {
  if (minimal) {
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-destructive">Une erreur est survenue</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Veuillez réessayer dans quelques instants.
            </p>
          </div>
        </div>
        {resetErrorBoundary && (
          <Button
            onClick={resetErrorBoundary}
            variant="outline"
            size="sm"
            className="mt-3"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Réessayer
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3">
          Oups ! Quelque chose s'est mal passé
        </h1>

        <p className="text-muted-foreground mb-6">
          Nous sommes désolés pour ce désagrément. Une erreur inattendue s'est produite.
        </p>

        {error && process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
              Détails de l'erreur (mode développement)
            </summary>
            <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {resetErrorBoundary && (
            <Button onClick={resetErrorBoundary} variant="default">
              <RefreshCw className="h-4 w-4 mr-2" />
              Réessayer
            </Button>
          )}
          <Button asChild variant="outline">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Si le problème persiste, n'hésitez pas à{' '}
          <Link to="/contact" className="text-primary hover:underline">
            nous contacter
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ErrorFallback;
