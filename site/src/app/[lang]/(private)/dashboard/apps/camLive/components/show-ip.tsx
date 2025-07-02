import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

type ShowIPProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ShowIP({ className, style }: ShowIPProps) {
  const { data, error } = useSWR<{ message: string; ip?: string }>('/api/notify-ip', fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <span className={className} style={style}>Erro ao buscar IP</span>;
  if (!data) return <span className={className} style={style}>Carregando IP...</span>;

  return (
    <span className={className} style={style}>
      {data.ip || 'Nenhum IP recebido ainda'}
    </span>
  );
}
