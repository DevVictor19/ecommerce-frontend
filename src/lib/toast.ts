import { AxiosError, isAxiosError } from 'axios';
import { toast, ToastOptions } from 'react-toastify';

type Params<T> = {
  callback: () => Promise<T>;
  config?: ToastOptions;
  genericError: string;
  genericSuccess: string;
};

export async function executeWithToastFeedback<T>({
  callback,
  config,
  genericError,
  genericSuccess,
}: Params<T>): Promise<T | undefined> {
  try {
    const data = await callback();

    toast.success(genericSuccess, config);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { message } = error.response?.data as AxiosError<{
        message: string;
      }>;

      toast.error(message, config);
      return;
    }

    toast.error(genericError, config);
  }
}
