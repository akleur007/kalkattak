interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="text-5xl font-semibold text-center uppercase">{title}</h1>
  );
}
