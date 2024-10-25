import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'react-feather';

import loginWallpaper from '@/assets/login-wallpaper.png';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import LoginForm from './form/login-form';

export default async function LoginView() {
  return (
    <main className="flex min-h-screen">
      <section className="hidden flex-1 items-center justify-center bg-slate-100 p-8 lg:flex">
        <div className="relative size-full overflow-hidden rounded-xl">
          <Image
            src={loginWallpaper}
            fill
            alt="Two styled guys sitting together"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="relative flex flex-1 items-center justify-center px-6">
        <div className="flex w-full max-w-xl flex-col  items-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-4">
            <ShoppingBag className="text-secondary-dark grow-0" size={24} />
          </div>
          <div className="mb-10 text-center">
            <h1 className="text-secondary-dark mb-1 text-2xl">Hello again!</h1>
            <h2 className="text-secondary-dark opacity-50">
              Enter your account and start shopping
            </h2>
          </div>
          <LoginForm />
        </div>
        <h3 className="text-secondary-dark absolute bottom-8 opacity-60">
          Don&apos;t have an account yet?{' '}
          <Link href={APP_ROUTE.SIGNUP} className="text-primary-dark font-bold">
            Sign Up
          </Link>
        </h3>
      </section>
    </main>
  );
}
