// Utility function for consistent logging format
export const logger = {
  info: (category: string, message: string, data?: any) => {
    console.log(`[${category}] ${message}`, data || '');
  },
  error: (category: string, message: string, error?: any) => {
    console.error(`[${category}] ${message}`, error || '');
  }
};