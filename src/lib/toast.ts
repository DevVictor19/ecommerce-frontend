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
      const payload = error.response?.data as AxiosError<
        | {
            message: string;
          }
        | undefined
      >;

      if (payload) {
        toast.error(payload.message, config);
      } else {
        toast.error(genericError, config);
      }

      return;
    }

    toast.error(genericError, config);
  }
}
