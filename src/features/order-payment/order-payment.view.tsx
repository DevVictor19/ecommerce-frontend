'use client';

import Link from 'next/link';
import { CheckCircle } from 'react-feather';

import AlertInfo from '@/components/feedback/AlertInfo';
import LoadingScreen from '@/components/feedback/LoadingScreen';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import CartProducts from './cart-products/cart-products';
import { useOrderPaymentViewModel } from './order-payment.view-model';
import PaymentForm from './payment-form/payment-form';

export default function OrderPaymentView() {
  const {
    isErrorOrder,
    isLoadingOrder,
    order,
    handleSubmit,
    isPendingPayWithCreditCard,
    isSuccessPayWithCreditCard,
  } = useOrderPaymentViewModel();

  if (isSuccessPayWithCreditCard) {
    return (
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 px-4">
          <CheckCircle className="text-success" size={64} />
          <h1 className="text-center text-2xl font-medium">
            Payment made! Please wait, we gonna redirect you to the orders
            page...
          </h1>
        </div>
      </main>
    );
  }

  if (isErrorOrder) {
    return (
      <div className="p-6">
        <AlertInfo message="Unable to fetch order data, please try again later..." />
      </div>
    );
  }

  if (isLoadingOrder || !order) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-[calc(100vh-64px)] p-6">
      <Link className="btn btn-outline mb-8" href={APP_ROUTE.SHOP_ORDERS}>
        Back to Orders
      </Link>
      <div className="flex flex-col gap-8 md:flex-row">
        <section className="flex-1">
          <CartProducts cart={order.cart} />
        </section>
        <section className="flex flex-1 items-center justify-center">
          <div className="mb-2 w-full max-w-96">
            <PaymentForm
              onSubmit={handleSubmit}
              totalPrice={order.cart.totalPrice}
              isPending={isPendingPayWithCreditCard}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
