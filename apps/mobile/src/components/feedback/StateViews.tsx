import { StyleSheet, View } from 'react-native';
import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { spacing } from '@/theme/tokens';

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <View style={styles.center}>
      <AppText variant="title">{title}</AppText>
      {description ? (
        <AppText muted style={styles.centerText}>
          {description}
        </AppText>
      ) : null}
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <View style={styles.center} accessibilityRole="alert">
      <AppText variant="title">Something went wrong</AppText>
      <AppText muted style={styles.centerText}>
        {message}
      </AppText>
      {onRetry ? <Button label="Try again" variant="secondary" onPress={onRetry} /> : null}
    </View>
  );
}

export function LoadingState({ rows = 4 }: { rows?: number }) {
  return (
    <View style={styles.loading}>
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton key={i} height={56} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', gap: spacing.md, padding: spacing.xxl },
  centerText: { textAlign: 'center' },
  loading: { gap: spacing.md, padding: spacing.lg },
});
