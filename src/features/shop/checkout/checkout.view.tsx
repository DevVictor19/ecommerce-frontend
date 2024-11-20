'use client';

import Link from 'next/link';
import { CheckCircle } from 'react-feather';

import AlertInfo from '@/components/feedback/AlertInfo';
import LoadingScreen from '@/components/feedback/LoadingScreen';
import Button from '@/components/ui/Button';
import { APP_ROUTE } from '@/enums/app-routes.enum';
import { formatPrice } from '@/utils/format-price';

import { useCheckoutViewModel } from './checkout.view-model';
import CheckoutProductsList from './checkout-products-list/checkout-products-list';

export default function CheckoutView() {
  const {
    cart,
    handleCreateOrder,
    isErrorCart,
    isLoadingCart,
    isPendingCreateOrder,
    isSuccessCreateOrder,
  } = useCheckoutViewModel();

  if (isSuccessCreateOrder) {
    return (
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 px-4">
          <CheckCircle className="text-success" size={64} />
          <h1 className="text-center text-2xl font-medium">
            Order created! Please wait, we gonna redirect you to the payments
            page...
          </h1>
        </div>
      </main>
    );
  }

  if (isErrorCart) {
    return (
      <div className="p-6">
        <AlertInfo message="Unable to fetch products data, please try again later..." />
      </div>
    );
  }

  if (isLoadingCart) {
    return <LoadingScreen />;
  }

  if (!cart) {
    return (
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div>
          <h1 className="mb-4 text-center text-2xl font-medium">
            No products yet...
          </h1>
          <Link className="btn btn-outline btn-wide" href={APP_ROUTE.SHOP}>
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-end px-4 py-8 md:flex-row">
      <section className="w-full flex-1">
        <p className="mb-2 font-medium">Cart Products:</p>
        <CheckoutProductsList products={cart.products} />
      </section>
      <section className="w-full flex-1 px-4 py-8">
        <h1 className="mb-2 text-2xl font-medium md:text-3xl">
          Total Price:{' '}
          <span className="opacity-60">${formatPrice(cart.totalPrice)}</span>
        </h1>
        <h2 className="font-medium">
          Products quantity:{' '}
          <span className="opacity-70">{cart.productsQuantity}</span>
        </h2>
        <div className="divider"></div>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Link className="btn btn-outline btn-block" href={APP_ROUTE.SHOP}>
            Back to Shop
          </Link>
          <Button
            className="btn-block btn-primary"
            type="button"
            onClick={handleCreateOrder}
            label="Finish Order"
            isLoading={isPendingCreateOrder}
            disabled={isPendingCreateOrder}
          />
        </div>
      </section>
    </main>
  );
}
