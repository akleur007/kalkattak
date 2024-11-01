import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 border-b-2 border-stone-500 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-28 pt-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/KA_logo.svg"
            alt="KA Logo"
            width={300}
            height={75}
            priority
          />
        </Link>
        <div className="bg-slate-300">Nav and more</div>
      </div>
    </header>
  );
}
