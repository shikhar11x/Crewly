import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { create } from 'zustand';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/AppText';
import { useTheme } from '@/theme/ThemeProvider';
import { radius, spacing } from '@/theme/tokens';

type ToastType = 'success' | 'error' | 'info';
interface ToastState {
  message: string | null;
  type: ToastType;
  show: (message: string, type?: ToastType) => void;
  hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  type: 'info',
  show: (message, type = 'info') => set({ message, type }),
  hide: () => set({ message: null }),
}));

export const toast = {
  success: (m: string) => useToastStore.getState().show(m, 'success'),
  error: (m: string) => useToastStore.getState().show(m, 'error'),
  info: (m: string) => useToastStore.getState().show(m, 'info'),
};

export function ToastHost() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { message, type, hide } = useToastStore();

  useEffect(() => {
    if (!message) return;
    const id = setTimeout(hide, 3000);
    return () => clearTimeout(id);
  }, [message, hide]);

  if (!message) return null;
  const background =
    type === 'success' ? colors.success : type === 'error' ? colors.danger : colors.primary;

  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutDown}
      accessibilityLiveRegion="polite"
      style={[styles.toast, { backgroundColor: background, bottom: insets.bottom + spacing.lg }]}
    >
      <AppText variant="label" style={{ color: '#FFFFFF' }}>
        {message}
      </AppText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    padding: spacing.md,
    borderRadius: radius.md,
  },
});
