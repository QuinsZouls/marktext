import i18n from '../../i18next.config'
// NOTE: This are mutable fields that may change at runtime.
export const SEPARATOR = {
  type: 'separator'
}
export function menuItems () {
  console.log('editor lang ', i18n.language)
  const CUT = {
    label: i18n.t('menu.edit.cut'),
    id: 'cutMenuItem',
    role: 'cut'
  }
  const COPY = {
    label: i18n.t('menu.edit.copy'),
    id: 'copyMenuItem',
    role: 'copy'
  }
  const PASTE = {
    label: i18n.t('menu.edit.paste'),
    id: 'pasteMenuItem',
    role: 'paste'
  }
  const COPY_AS_MARKDOWN = {
    label: i18n.t('menu.edit.copyAsMarkdown'),
    id: 'copyAsMarkdownMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-copy-as-markdown')
    }
  }
  const COPY_AS_HTML = {
    label: i18n.t('menu.edit.copyAsHtml'),
    id: 'copyAsHtmlMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-copy-as-html')
    }
  }
  const PASTE_AS_PLAIN_TEXT = {
    label: i18n.t('menu.edit.pasteAsPlainText'),
    id: 'pasteAsPlainTextMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-paste-as-plain-text')
    }
  }
  const INSERT_BEFORE = {
    label: i18n.t('menu.edit.insertParagraphBefore'),
    id: 'insertParagraphBeforeMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
    }
  }
  const INSERT_AFTER = {
    label: i18n.t('menu.edit.insertParagraphAfter'),
    id: 'insertParagraphAfterMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
    }
  }
  return {
    CUT,
    COPY,
    PASTE,
    COPY_AS_MARKDOWN,
    COPY_AS_HTML,
    PASTE_AS_PLAIN_TEXT,
    SEPARATOR,
    INSERT_BEFORE,
    INSERT_AFTER
  }
}
