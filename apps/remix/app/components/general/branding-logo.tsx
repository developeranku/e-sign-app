import { APP_NAME } from '@documenso/lib/constants/app';
import type { SVGAttributes } from 'react';

import { BRANDING_LOGO_MARK_SIZE, BrandingLogoMark } from './branding-logo-icon';

export type LogoProps = SVGAttributes<SVGSVGElement>;

const GAP_AFTER_MARK = 14;
const FONT_SIZE = 40;
const TEXT_BASELINE = 46;
// Fixed width per character keeps the wordmark the same shape whatever font the page has loaded.
const WIDTH_PER_CHARACTER = 23;

// Placeholder wordmark: mark + product name. Matches packages/assets/brand/logo.svg and follows APP_NAME.
export const BrandingLogo = ({ ...props }: LogoProps) => {
  const textX = BRANDING_LOGO_MARK_SIZE + GAP_AFTER_MARK;
  const textWidth = APP_NAME.length * WIDTH_PER_CHARACTER;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${textX + textWidth} ${BRANDING_LOGO_MARK_SIZE}`}
      role="img"
      aria-label={APP_NAME}
      {...props}
    >
      <BrandingLogoMark />
      <text
        x={textX}
        y={TEXT_BASELINE}
        fontSize={FONT_SIZE}
        fontWeight={600}
        fill="currentColor"
        textLength={textWidth}
        lengthAdjust="spacingAndGlyphs"
      >
        {APP_NAME}
      </text>
    </svg>
  );
};
