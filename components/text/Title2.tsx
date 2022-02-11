export default function Title2({
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
  return <h2 className={className || ''}>{title}</h2>;
}
