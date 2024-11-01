import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Digital Echo Chamber',
    description:
      'Interactive sound installation responding to viewer movements through space.',
    categories: ['installation', 'live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 2,
    title: 'Pulse',
    description:
      'Real-time visualization of city data through dynamic light patterns.',
    categories: ['installation'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 3,
    title: 'Urban Rhythms',
    description:
      'Documentary exploring underground electronic music scenes in major cities.',
    categories: ['video'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 4,
    title: 'Neural Canvas',
    description: 'AI-generated visuals responding to live music performance.',
    categories: ['live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 5,
    title: 'Memory Wall',
    description:
      'Interactive projection mapping installation using archived photographs.',
    categories: ['installation', 'live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 6,
    title: 'Digital Fauna',
    description:
      'Reactive light sculptures mimicking natural animal movements.',
    categories: ['installation'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 7,
    title: 'Sound Spaces',
    description: 'Documentary about acoustic architecture and sound design.',
    categories: ['video'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 8,
    title: 'Binary Garden',
    description:
      'Living installation combining plant life with digital sensors.',
    categories: ['installation'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 9,
    title: 'Light Flow',
    description: 'Real-time generative visuals for music festivals.',
    categories: ['live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 10,
    title: 'Urban Canvas',
    description: 'Projection mapping series transforming city buildings.',
    categories: ['installation', 'live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 11,
    title: 'Digital Horizons',
    description: 'Short film exploring virtual reality communities.',
    categories: ['video'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 12,
    title: 'Wave Forms',
    description: 'Interactive sound sculpture responding to touch.',
    categories: ['installation'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 13,
    title: 'Pixel Forest',
    description:
      'Immersive LED installation creating virtual natural environments.',
    categories: ['installation', 'live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 14,
    title: 'Data Stream',
    description: 'Live visualization of internet traffic patterns.',
    categories: ['live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 15,
    title: 'Digital Artifacts',
    description: 'Documentary series about preserved digital culture.',
    categories: ['video'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 16,
    title: 'Neural Beats',
    description: 'AI-powered visual performance system.',
    categories: ['live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 17,
    title: 'Echo Chamber',
    description: 'Interactive sound installation using visitor movements.',
    categories: ['installation'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 18,
    title: 'Virtual Landscapes',
    description:
      'Generative art installation creating evolving digital environments.',
    categories: ['installation', 'live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 19,
    title: 'Code Poetry',
    description: 'Short film about programming as artistic expression.',
    categories: ['video'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
  {
    id: 20,
    title: 'Quantum Visuals',
    description: 'Real-time graphics generated from quantum computer data.',
    categories: ['live visuals'],
    thumbnail: 'https://www.tailwindai.dev/placeholder.svg',
  },
] as const;

export default function Home() {
  return (
    <section className="mb-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-5xl font-semibold text-center uppercase">
          Projects
        </h1>
        <p className="text-xl text-center">
          This is an extract from some of the projects we have done or
          participated in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl space-y-2 border-t-2 border-l-2 border-r-8 border-b-8 border-stone-800 overflow-hidden transition-transform transform hover:scale-105 animate-fade-in"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={400}
              height={300}
              className="w-full aspect-[4/3]"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold uppercase mb-3">
                {project.title}
              </h3>
              <p className="text-stone-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
