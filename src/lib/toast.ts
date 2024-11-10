import { AxiosError, isAxiosError } from 'axios';
import { toast, ToastOptions } from 'react-toastify';

type Params<T> = {
  callback: () => Promise<T>;
  config?: ToastOptions;
  genericError: string;
  genericSuccess: string;
};

type Result<T> =
  | {
      data: T;
      error: false;
    }
  | {
      data: undefined;
      error: true;
    };

export async function executeWithToastFeedback<T>({
  callback,
  config,
  genericError,
  genericSuccess,
}: Params<T>): Promise<Result<T>> {
  try {
    const data = await callback();

    toast.success(genericSuccess, config);

    return {
      data,
      error: false,
    };
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

      return {
        data: undefined,
        error: true,
      };
    }

    toast.error(genericError, config);

    return {
      data: undefined,
      error: true,
    };
  }
}
