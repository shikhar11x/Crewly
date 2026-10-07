import { Component, type ErrorInfo, type ReactNode } from 'react';
import { logger } from '@/utils/logger';
import { ErrorState } from './StateViews';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.error('Unhandled render error', { message: error.message, stack: info.componentStack });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          message="The app hit an unexpected problem."
          onRetry={() => this.setState({ hasError: false })}
        />
      );
    }
    return this.props.children;
  }
}
