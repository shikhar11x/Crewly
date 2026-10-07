import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { toast } from '@/components/feedback/Toast';
import { LoadingState } from '@/components/feedback/StateViews';
import { useUiStore } from '@/store/uiStore';
import { useTheme } from '@/theme/ThemeProvider';
import { spacing } from '@/theme/tokens';

export function HomeScreen() {
  const { colors, isDark } = useTheme();
  const setThemePreference = useUiStore((s) => s.setThemePreference);
  const [name, setName] = useState('');

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <AppText variant="display">Crewly</AppText>
      <AppText muted>Foundation build, components preview</AppText>

      <Card style={styles.card}>
        <Input label="Name" value={name} onChangeText={setName} placeholder="Your name" />
        <Button label="Show toast" onPress={() => toast.success(`Hello ${name || 'there'}`)} />
        <Button
          label={isDark ? 'Switch to light' : 'Switch to dark'}
          variant="secondary"
          onPress={() => setThemePreference(isDark ? 'light' : 'dark')}
        />
      </Card>

      <LoadingState rows={2} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.lg, gap: spacing.lg },
  card: { gap: spacing.md },
});
