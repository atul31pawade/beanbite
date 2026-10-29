import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SIZES = {
  md: {
    pill: 'pl-6 pr-1.5 py-1.5 text-[15px] gap-3',
    icon: 'w-9 h-9',
    glyph: 18,
  },
  lg: {
    pill: 'pl-8 pr-2 py-2 text-lg gap-4',
    icon: 'w-10 h-10',
    glyph: 20,
  },
};

const VARIANTS = {
  primary:
    'border-[4px] border-[#414C00] bg-[#C5D92D] text-white hover:bg-[#b0c41a]',
  light:
    'border-[4px] border-[#00000025] bg-white text-[#414C00] hover:bg-gray-50',
};

const ICON_HOVER = {
  primary: 'group-hover/btn:bg-[#1a2e05]/70',
  light: 'group-hover/btn:bg-[#1a2e05]/90',
};

/**
 * Home-page style pill CTA: label plus an icon sitting in a dark olive circle.
 */
const CtaButton = ({
  children,
  href,
  to,
  onClick,
  type = 'button',
  icon: Icon = ArrowRight,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  download,
  className = '',
}) => {
  const s = SIZES[size] || SIZES.md;
  const pill = `group/btn inline-flex cursor-pointer items-center justify-between rounded-full border font-bold shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98] ${s.pill} ${VARIANTS[variant]} ${fullWidth ? 'w-full' : 'w-max'} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`${s.icon} flex shrink-0 items-center justify-center rounded-full bg-[#414C00] transition-colors ${ICON_HOVER[variant]}`}
        aria-hidden="true"
      >
        <Icon size={s.glyph} className="text-white" strokeWidth={2.5} />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={pill} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={pill}
        onClick={onClick}
        {...(download ? { download } : {})}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={pill}>
      {inner}
    </button>
  );
};

export default CtaButton;
