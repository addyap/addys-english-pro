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
 * Track custom events to Google Analytics
 */
export const trackEvent = (
  eventName: string,
  params?: EventParams
): void => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.log('[Analytics] Event tracked (GA not loaded):', eventName, params);
    return;
  }

  window.gtag('event', eventName, {
    event_category: params?.category,
    event_label: params?.label,
    value: params?.value,
    ...params,
  });

  console.log('[Analytics] Event tracked:', eventName, params);
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
