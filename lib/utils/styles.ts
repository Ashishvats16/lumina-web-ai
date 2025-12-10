import { BUTTON_STYLES, BADGE_STYLES, STATUS_STYLES } from '@/lib/constants/ui';
import { cn } from './cn';

export function getButtonStyles(
  variant: keyof typeof BUTTON_STYLES.variants = 'primary',
  size: keyof typeof BUTTON_STYLES.sizes = 'md',
  className?: string
) {
  return cn(
    BUTTON_STYLES.base,
    BUTTON_STYLES.variants[variant],
    BUTTON_STYLES.sizes[size],
    className
  );
}

export function getBadgeStyles(
  variant: keyof typeof BADGE_STYLES.variants = 'primary',
  className?: string
) {
  return cn(
    BADGE_STYLES.base,
    BADGE_STYLES.variants[variant],
    className
  );
}

export function getStatusStyles(
  status: keyof typeof STATUS_STYLES,
  className?: string
) {
  return cn(
    BADGE_STYLES.base,
    STATUS_STYLES[status],
    className
  );
}

export function formatStatus(status: string) {
  const statusMap = {
    completed: { label: 'Completed', variant: 'completed' as const },
    processing: { label: 'Processing', variant: 'processing' as const },
    uploading: { label: 'Uploading', variant: 'uploading' as const },
    failed: { label: 'Failed', variant: 'failed' as const },
    pending: { label: 'Pending', variant: 'pending' as const },
  };

  const key = status.toLowerCase();

  if (key in statusMap) {
    return statusMap[key as keyof typeof statusMap];
  }

  return statusMap.pending;
}
