import axios, { AxiosError } from 'axios';
import { env } from '@/config/env';
import { logger } from '@/utils/logger';

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number | null,
    public readonly isNetworkError: boolean,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const isNetworkError = !error.response;
    const apiError = new ApiError(
      isNetworkError
        ? 'Network unavailable. Check your connection.'
        : (error.response?.data?.message ?? 'Something went wrong.'),
      error.response?.status ?? null,
      isNetworkError,
    );
    logger.warn('API request failed', {
      url: error.config?.url,
      status: apiError.status,
    });
    return Promise.reject(apiError);
  },
);
