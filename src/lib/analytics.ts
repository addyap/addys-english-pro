// Custom Analytics Event Tracking

type EventCategory =
  | 'engagement'
  | 'form'
  | 'navigation'
  | 'social'
  | 'conversion'
  | 'video';

type EventParams = {
  category?: EventCategory;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

/**
 * Track a custom event to Umami (self-hosted, cookieless).
 *
 * No-op until the Umami script is loaded (see src/components/UmamiAnalytics.tsx),
 * which only happens when VITE_UMAMI_SRC + VITE_UMAMI_WEBSITE_ID are configured.
 * Until then every call is a safe no-op, so the site works identically with or
 * without analytics wired up.
 */
export const trackEvent = (
  eventName: string,
  params?: EventParams
): void => {
  if (typeof window === 'undefined' || !window.umami) return;

  try {
    window.umami.track(eventName, params as Record<string, unknown> | undefined);
  } catch {
    /* never let analytics break a user interaction */
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (
  formName: string,
  success: boolean = true
): void => {
  trackEvent('form_submission', {
    category: 'form',
    label: formName,
    success,
  });
};

/**
 * Track form errors
 */
export const trackFormError = (
  formName: string,
  errorType: string
): void => {
  trackEvent('form_error', {
    category: 'form',
    label: formName,
    error_type: errorType,
  });
};

/**
 * Track social shares
 */
export const trackSocialShare = (
  platform: string,
  contentType?: string
): void => {
  trackEvent('social_share', {
    category: 'social',
    label: platform,
    content_type: contentType,
  });
};

/**
 * Track WhatsApp click
 */
export const trackWhatsAppClick = (): void => {
  trackEvent('whatsapp_click', {
    category: 'conversion',
    label: 'WhatsApp Contact',
  });
};

/**
 * Track email click
 */
export const trackEmailClick = (): void => {
  trackEvent('email_click', {
    category: 'conversion',
    label: 'Email Contact',
  });
};
