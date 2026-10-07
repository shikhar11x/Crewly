type Level = 'debug' | 'info' | 'warn' | 'error';

const SENSITIVE_KEYS = ['password', 'token', 'accesstoken', 'refreshtoken', 'authorization'];

const redact = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(redact);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) =>
        SENSITIVE_KEYS.includes(k.toLowerCase()) ? [k, '[REDACTED]'] : [k, redact(v)],
      ),
    );
  }
  return value;
};

const emit = (level: Level, message: string, context?: unknown) => {
  if (!__DEV__ && level === 'debug') return;
  const payload = context === undefined ? [] : [redact(context)];
  // eslint-disable-next-line no-console
  console[level](`[${level.toUpperCase()}] ${message}`, ...payload);
};

export const logger = {
  debug: (m: string, c?: unknown) => emit('debug', m, c),
  info: (m: string, c?: unknown) => emit('info', m, c),
  warn: (m: string, c?: unknown) => emit('warn', m, c),
  error: (m: string, c?: unknown) => emit('error', m, c),
};
