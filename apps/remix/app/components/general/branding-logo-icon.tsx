import { APP_NAME } from '@documenso/lib/constants/app';
import { useId } from 'react';

import type { LogoProps } from './branding-logo';

// Placeholder mark: same drawing as packages/assets/brand/logo-icon.svg, kept inline so it follows the text colour.
export const BRANDING_LOGO_MARK_SIZE = 64;

export const BrandingLogoMark = () => {
  // Each logo on the page needs its own mask id, or the browser applies the first one everywhere.
  const maskId = `logo-mark-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`;

  return (
    <>
      <defs>
        <mask id={maskId}>
          <rect width={BRANDING_LOGO_MARK_SIZE} height={BRANDING_LOGO_MARK_SIZE} fill="#fff" />
          <path
            d="M18 32H46M46 32A14 14 0 1 0 42.7 41"
            fill="none"
            stroke="#000"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <rect
        width={BRANDING_LOGO_MARK_SIZE}
        height={BRANDING_LOGO_MARK_SIZE}
        rx={14}
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </>
  );
};

export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${BRANDING_LOGO_MARK_SIZE} ${BRANDING_LOGO_MARK_SIZE}`}
      role="img"
      aria-label={APP_NAME}
      {...props}
    >
      <BrandingLogoMark />
    </svg>
  );
};
