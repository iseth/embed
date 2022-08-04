type HubspotFieldsType = {
  hubspot_page_name: string
  hubspot_page_url: string
  hubspot_utk?: string
}

const HUBSPOT_COOKIE = 'hubspotutk'

/**
 *
 * @returns {string} cookie value
 */

export const getHubspotCookieValue = () => {
  const match = document.cookie.match(new RegExp(`(^| )${HUBSPOT_COOKIE}=([^;]+)`))
  return (match && match[2]) || undefined
}

/**
 *
 * @returns {HubspotFieldsType} object with all hubspot fields
 */

export const getHubspotHiddenFields = (): HubspotFieldsType => ({
  hubspot_page_name: document.title,
  hubspot_page_url: window.location.href,
  hubspot_utk: getHubspotCookieValue(),
})
