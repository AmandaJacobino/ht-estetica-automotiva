interface BrandWordmarkProps {
  className?: string;
}

/** HT Estética Automotiva wordmark — shared by header and footer */
export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <div className={className}>
      <span className="or">HT</span>{' '}
      <span className="bl">Estética</span>{' '}
      <span className="or">Automotiva</span>
    </div>
  );
}
