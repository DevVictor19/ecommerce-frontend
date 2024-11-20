import { useParams } from 'next/navigation';

import { useFindProductById } from '@/models/products.model';

export function useProductDetailsViewModel() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFindProductById(id);

  return {
    data,
    isLoading,
    isError,
  };
}
