import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/** Catches render errors and shows a recoverable fallback UI */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }} role="alert">
          <h1 className="title-font" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Algo deu errado
          </h1>
          <p style={{ color: 'var(--fg-dim)', marginBottom: '1.5rem', maxWidth: '28rem', marginInline: 'auto' }}>
            Não foi possível carregar a página. Tente recarregar ou volte em alguns instantes.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Recarregar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
