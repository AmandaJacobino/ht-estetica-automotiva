interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

/** Reusable section header: eyebrow label + h2 title + optional subtitle */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center';
  return (
    <div className={`reveal${centered ? ' text-center' : ''}${className ? ` ${className}` : ''}`}>
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title title-font">{title}</h2>
      {subtitle && <p className={`sec-sub${centered ? ' mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
}
