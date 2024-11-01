import { type Metadata } from 'next';

import { PageHeader } from '@/src/components/page-header';

export const metadata: Metadata = {
  title: 'About | KALKATTAK',
  description: 'About us',
};

export default function AboutPage() {
  return (
    <section className="mb-12">
      <div className="flex flex-col gap-4 mb-8">
        <PageHeader title="About" />
        <p className="text-xl text-center">
          This is an extract from some of the projects we have done or
          participated in.
        </p>
      </div>
    </section>
  );
}
