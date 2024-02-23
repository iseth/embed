import { loadOptionsFromAttributes } from '../utils'

export const buildOptionsFromAttributes = (element: HTMLElement) => {
  return loadOptionsFromAttributes(element, {
    source: 'string',
    domain: 'string',
    medium: 'string',
    mediumVersion: 'string',
    open: 'string',
    openValue: 'integer',
    preventReopenOnClose: 'boolean',
    hideFooter: 'boolean',
    hideHeaders: 'boolean',
    opacity: 'integer',
    disableTracking: 'boolean',
    onReady: 'function',
    onStarted: 'function',
    onSubmit: 'function',
    onQuestionChanged: 'function',
    onHeightChanged: 'function',
    autoResize: 'stringOrBoolean',
    onClose: 'function',
    onEndingButtonClick: 'function',
    transitiveSearchParams: 'arrayOrBoolean',
    hidden: 'record',
    buttonColor: 'string',
    buttonTextColor: 'string',
    buttonTextSize: 'integerOrString',
    buttonWidth: 'integerOrString',
    buttonHeight: 'integerOrString',
    buttonAlign: 'string',
    top: 'integerOrString',
    bottom: 'integerOrString',
    customIcon: 'string',
    width: 'integerOrString',
    height: 'integerOrString',
    size: 'integer',
    buttonText: 'string',
    position: 'string',
    enableSandbox: 'boolean',
    tooltip: 'string',
    notificationDays: 'integer',
    autoClose: 'integerOrBoolean',
    shareGaInstance: 'stringOrBoolean',
    forceTouch: 'boolean',
    inlineOnMobile: 'boolean',
    autoFocus: 'boolean',
    tracking: 'record',
    redirectTarget: 'string',
    iframeProps: 'record',
    buttonProps: 'record',
    lazy: 'boolean',
    keepSession: 'boolean',
    hubspot: 'boolean',
    disableScroll: 'boolean',
    fullScreen: 'boolean',
    noHeading: 'boolean',
    preselect: 'record',
    respectOpenModals: 'string',
  })
}
