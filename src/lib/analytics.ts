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
 * Track a custom event.
 *
 * The site has no analytics provider (Umami was removed in October 2026, by
 * choice), so this does nothing. The calls stay in place across the site:
 * connecting a provider later means changing this one function, and any
 * provider here must stay cookieless or the privacy policy must change.
 */
export const trackEvent = (
  _eventName: string,
  _params?: EventParams
): void => {};

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
