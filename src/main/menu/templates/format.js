import * as actions from '../actions/format'
import i18n from '../../i18next.config'

export default function (keybindings) {
  return {
    id: 'formatMenuItem',
    label: i18n.t('menu.format._title'),
    submenu: [{
      id: 'strongMenuItem',
      label: i18n.t('menu.format.bold'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strong'),
      click (menuItem, focusedWindow) {
        actions.strong(focusedWindow)
      }
    }, {
      id: 'emphasisMenuItem',
      label: i18n.t('menu.format.italic'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.emphasis'),
      click (menuItem, focusedWindow) {
        actions.emphasis(focusedWindow)
      }
    }, {
      id: 'underlineMenuItem',
      label: i18n.t('menu.format.underline'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.underline'),
      click (menuItem, focusedWindow) {
        actions.underline(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'superscriptMenuItem',
      label: i18n.t('menu.format.superscript'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.superscript'),
      click (menuItem, focusedWindow) {
        actions.superscript(focusedWindow)
      }
    }, {
      id: 'subscriptMenuItem',
      label: i18n.t('menu.format.subscript'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.subscript'),
      click (menuItem, focusedWindow) {
        actions.subscript(focusedWindow)
      }
    }, {
      id: 'highlightMenuItem',
      label: i18n.t('menu.format.highlight'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.highlight'),
      click (menuItem, focusedWindow) {
        actions.highlight(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'inlineCodeMenuItem',
      label: i18n.t('menu.format.inlineCode'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-code'),
      click (menuItem, focusedWindow) {
        actions.inlineCode(focusedWindow)
      }
    }, {
      id: 'inlineMathMenuItem',
      label: i18n.t('menu.format.inlineMath'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-math'),
      click (menuItem, focusedWindow) {
        actions.inlineMath(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'strikeMenuItem',
      label: i18n.t('menu.format.strike'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strike'),
      click (menuItem, focusedWindow) {
        actions.strikethrough(focusedWindow)
      }
    }, {
      id: 'hyperlinkMenuItem',
      label: i18n.t('menu.format.hyperlink'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.hyperlink'),
      click (menuItem, focusedWindow) {
        actions.hyperlink(focusedWindow)
      }
    }, {
      id: 'imageMenuItem',
      label: i18n.t('menu.format.image'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.image'),
      click (menuItem, focusedWindow) {
        actions.image(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.format.clear'),
      accelerator: keybindings.getAccelerator('format.clear-format'),
      click (menuItem, focusedWindow) {
        actions.clearFormat(focusedWindow)
      }
    }]
  }
}
