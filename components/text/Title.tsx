export default function Title({
  className,
  title,
  limit
}: {
  className?: string;
  title: string;
  limit?: number;
}) {
  if (limit && title.length > limit) {
    title = title.slice(0, limit) + '...';
  }
  return <h1 className={className || ''}>{title}</h1>;
}
