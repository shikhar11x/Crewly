import type { ReactNode } from 'react';
import { EmptyState, ErrorState, LoadingState } from './StateViews';

interface Props {
  isLoading: boolean;
  error: Error | null;
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  onRetry?: () => void;
  children: ReactNode;
}

export function QueryStateView({
  isLoading,
  error,
  isEmpty,
  emptyTitle = 'Nothing here yet',
  emptyDescription,
  onRetry,
  children,
}: Props) {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} onRetry={onRetry} />;
  if (isEmpty) return <EmptyState title={emptyTitle} description={emptyDescription} />;
  return <>{children}</>;
}
