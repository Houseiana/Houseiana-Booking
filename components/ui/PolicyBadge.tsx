import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface PolicyBadgeProps {
  variant: 'free-cancel' | 'non-refundable';
  cancelDate?: string;
  className?: string;
}

export function PolicyBadge({ variant, cancelDate, className }: PolicyBadgeProps) {
  const isFreeCancel = variant === 'free-cancel';

  return (
    <div
      className={cn(
        'badge inline-flex items-center gap-1.5',
        isFreeCancel ? 'badge-success' : 'badge-warning',
        className
      )}
    >
      {isFreeCancel ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <XCircle className="h-4 w-4" />
      )}
      <span>
        {isFreeCancel
          ? cancelDate
            ? `Free Cancellation until ${cancelDate}`
            : 'Free Cancellation'
          : 'Non-Refundable'}
      </span>
    </div>
  );
}
