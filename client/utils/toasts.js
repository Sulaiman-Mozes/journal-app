import { ToastsStore } from 'react-toasts';

export const handleError = message => ToastsStore.error(message, 5000, 'mb-10');
export const handleSuccess = message => ToastsStore.success(message, 5000, 'mb-10');
