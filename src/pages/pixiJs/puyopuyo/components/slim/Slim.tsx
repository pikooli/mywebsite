import Image from 'next/image';

export interface SlimProps {
  url: string;
}

export function Slim(props: SlimProps) {
  const { url } = props;

  return <Image src={url} alt="slim" width={20} height={20} />;
}
