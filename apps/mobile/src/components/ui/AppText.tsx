import { Text, type TextProps } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { typography, type TypographyVariant } from '@/theme/tokens';

interface Props extends TextProps {
  variant?: TypographyVariant;
  muted?: boolean;
}

export function AppText({ variant = 'body', muted, style, ...rest }: Props) {
  const { colors } = useTheme();
  return (
    <Text
      style={[typography[variant], { color: muted ? colors.textMuted : colors.text }, style]}
      {...rest}
    />
  );
}
