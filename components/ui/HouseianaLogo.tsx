'use client';

interface HouseianaLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'icon';
}

export function HouseianaLogo({
  className = '',
  showTagline = false,
  variant = 'full'
}: HouseianaLogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House Icon */}
        <path
          d="M50 15L20 40V85H45V60H55V85H80V40L50 15Z"
          fill="currentColor"
          className="text-primary"
        />
        {/* Windows */}
        <rect x="35" y="45" width="10" height="10" fill="white" />
        <rect x="55" y="45" width="10" height="10" fill="white" />
        {/* Chimney */}
        <rect x="65" y="25" width="8" height="15" fill="currentColor" className="text-primary" />
      </svg>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        {/* House Icon */}
        <svg
          viewBox="0 0 60 60"
          className="h-10 w-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House Outline */}
          <path
            d="M30 8L10 25V52H25V35H35V52H50V25L30 8Z"
            fill="currentColor"
            className="text-primary"
          />
          {/* Windows */}
          <rect x="17" y="28" width="6" height="6" fill="white" rx="1" />
          <rect x="37" y="28" width="6" height="6" fill="white" rx="1" />
          {/* Chimney */}
          <rect x="38" y="12" width="5" height="10" fill="currentColor" className="text-primary" />
        </svg>

        {/* Text Logo */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold leading-none text-primary" style={{ letterSpacing: '0.02em' }}>
            Houseiana Booking
          </span>
          {showTagline && (
            <span className="mt-0.5 text-xs text-gray-600 leading-none">
              Your Trusted Travel Partner
            </span>
          )}
        </div>
      </div>

      {/* Airplane Flight Path (optional decorative element) */}
      {showTagline && (
        <div className="relative mt-2 h-8 w-full">
          <svg
            viewBox="0 0 300 30"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curved flight path */}
            <path
              d="M 10 15 Q 150 30, 290 10"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary opacity-40"
              fill="none"
            />
            {/* Airplane */}
            <g transform="translate(280, 8)">
              <path
                d="M0 0L-4 -2L-2 0L-4 2L0 0ZM0 0L2 0L1 -1.5L0 0L1 1.5L2 0Z"
                fill="currentColor"
                className="text-primary"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
