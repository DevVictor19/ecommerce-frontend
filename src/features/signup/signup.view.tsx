import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'react-feather';

import signupWallpaper from '@/assets/signup-wallpaper.png';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import SignupForm from './form/signup-form';

export default function SignupView() {
  return (
    <main className="flex min-h-screen">
      <section className="relative flex flex-1 items-center justify-center px-6">
        <div className="flex w-full max-w-xl flex-col items-center">
          <div className="border-base-200 bg-base-300 mb-6 flex size-16 items-center justify-center rounded-full border p-4">
            <ShoppingBag className="grow-0" size={24} />
          </div>
          <div className="mb-4 text-center">
            <h1 className="mb-1 text-2xl">Create a new account</h1>
            <h2 className="opacity-50">Create an account to start shopping</h2>
          </div>
          <SignupForm />
        </div>
        <h3 className="absolute bottom-8 opacity-60">
          Already have an account?{' '}
          <Link href={APP_ROUTE.HOME} className="text-secondary font-bold">
            Log In
          </Link>
        </h3>
      </section>
      <section className="bg-base-300 hidden flex-1 items-center justify-center p-8 lg:flex">
        <div className="relative size-full overflow-hidden rounded-xl">
          <Image
            className="object-cover"
            src={signupWallpaper}
            fill
            alt="Two styled guys sitting together"
          />
        </div>
      </section>
    </main>
  );
}
