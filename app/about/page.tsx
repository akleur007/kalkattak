import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | KALKATTAK',
  description: 'About us',
};

export default function AboutPage() {
  return (
    <div className="prose prose-stone max-w-none">
      <h1>About Us</h1>
      <p>
        We are KALKATTAK, your friendly video production team. We specialize in
        creating engaging visual content that tells your story. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
