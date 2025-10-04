// Custom Analytics Event Tracking

export type EventCategory = 
  | 'engagement'
  | 'form'
  | 'navigation'
  | 'social'
  | 'conversion'
  | 'video';

export type EventParams = {
  category?: EventCategory;
  label?: string;
  value?: number;
  [key: string]: any;
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
 * Track button clicks
 */
export const trackButtonClick = (
  buttonName: string, 
  location?: string
): void => {
  trackEvent('button_click', {
    category: 'engagement',
    label: buttonName,
    location,
  });
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
 * Track outbound link clicks
 */
export const trackOutboundLink = (
  url: string,
  label?: string
): void => {
  trackEvent('outbound_link', {
    category: 'navigation',
    label: label || url,
    link_url: url,
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
 * Track scroll depth (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll_depth', {
    category: 'engagement',
    value: percentage,
    label: `${percentage}%`,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number, pagePath: string): void => {
  trackEvent('time_on_page', {
    category: 'engagement',
    value: seconds,
    page_path: pagePath,
  });
};

/**
 * Track video interactions
 */
export const trackVideoInteraction = (
  action: 'play' | 'pause' | 'complete',
  videoName?: string
): void => {
  trackEvent('video_interaction', {
    category: 'video',
    label: action,
    video_name: videoName,
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

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const depths = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    depths.forEach(depth => {
      if (scrolled >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackScrollDepth(depth);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Initialize time on page tracking
 */
export const initTimeTracking = (pagePath: string): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const startTime = Date.now();

  const trackTime = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    if (timeSpent >= 10) { // Only track if spent more than 10 seconds
      trackTimeOnPage(timeSpent, pagePath);
    }
  };

  // Track on page unload
  window.addEventListener('beforeunload', trackTime);

  return () => {
    window.removeEventListener('beforeunload', trackTime);
  };
};
