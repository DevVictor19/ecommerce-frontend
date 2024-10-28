import { Info } from 'react-feather';

type AlertInfoProps = {
  message: string;
};

export default function AlertInfo({ message }: AlertInfoProps) {
  return (
    <div role="alert" className="alert alert-info">
      <Info className="text-info-content" size={24} />
      <span className="text-info-content">{message}</span>
    </div>
  );
}
