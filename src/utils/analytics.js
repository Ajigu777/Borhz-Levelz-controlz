/**
 * Analytics Tracking Module
 * Tracks user interactions for insights and optimization
 */

class AnalyticsTracker {
  constructor() {
    this.events = []
    this.sessionId = this.generateSessionId()
    this.initializeSession()
  }

  generateSessionId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  initializeSession() {
    this.trackEvent('session_start', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    })
  }

  /**
   * Track a user event
   * @param {string} eventName - Name of the event
   * @param {object} eventData - Additional event data
   */
  trackEvent(eventName, eventData = {}) {
    const event = {
      id: Math.random().toString(36).substr(2, 9),
      name: eventName,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      data: eventData,
    }

    this.events.push(event)

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event)
    }

    // Send to analytics service (optional)
    this.sendToAnalyticsService(event)
  }

  /**
   * Track page views
   * @param {string} pageName - Name of the page
   */
  trackPageView(pageName) {
    this.trackEvent('page_view', {
      page: pageName,
      url: window.location.href,
    })
  }

  /**
   * Track button clicks
   * @param {string} buttonLabel - Label of the button
   * @param {string} buttonId - ID of the button (optional)
   */
  trackButtonClick(buttonLabel, buttonId) {
    this.trackEvent('button_click', {
      label: buttonLabel,
      id: buttonId,
      url: window.location.href,
    })
  }

  /**
   * Track form submissions
   * @param {string} formName - Name of the form
   * @param {object} formData - Form data (sanitized)
   */
  trackFormSubmission(formName, formData) {
    // Don't log sensitive data
    this.trackEvent('form_submission', {
      form: formName,
      fields: Object.keys(formData),
      url: window.location.href,
    })
  }

  /**
   * Track scroll depth
   * @param {number} scrollPercentage - Percentage of page scrolled
   */
  trackScrollDepth(scrollPercentage) {
    this.trackEvent('scroll_depth', {
      percentage: scrollPercentage,
      url: window.location.href,
    })
  }

  /**
   * Track external link clicks
   * @param {string} url - External URL
   */
  trackExternalLink(url) {
    this.trackEvent('external_link_click', {
      url: url,
      referrer: window.location.href,
    })
  }

  /**
   * Send event to analytics service
   * @param {object} event - Event object
   */
  sendToAnalyticsService(event) {
    // TODO: Implement your analytics service integration
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.
    // if (window.gtag) {
    //   window.gtag('event', event.name, event.data)
    // }
  }

  /**
   * Get all tracked events
   */
  getAllEvents() {
    return this.events
  }

  /**
   * Clear events
   */
  clearEvents() {
    this.events = []
  }
}

// Create singleton instance
export const analytics = new AnalyticsTracker()

export default AnalyticsTracker
