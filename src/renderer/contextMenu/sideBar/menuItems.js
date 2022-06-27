import * as contextMenu from './actions'
import i18n from '@/i18next.config'
// NOTE: This are mutable fields that may change at runtime.

const SEPARATOR = {
  type: 'separator'
}

const NEW_FILE = {
  label: i18n.t('menu.file.newFile'),
  id: 'newFileMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newFile()
  }
}

const NEW_DIRECTORY = {
  label: i18n.t('menu.file.newDirectory'),
  id: 'newDirectoryMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newDirectory()
  }
}

const COPY = {
  label: i18n.t('menu.edit.copy'),
  id: 'copyMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copy()
  }
}

const CUT = {
  label: i18n.t('menu.edit.cut'),
  id: 'cutMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.cut()
  }
}

const PASTE = {
  label: i18n.t('menu.edit.paste'),
  id: 'pasteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.paste()
  }
}

const RENAME = {
  label: i18n.t('menu.edit.rename'),
  id: 'renameMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.rename()
  }
}

const DELETE = {
  label: i18n.t('menu.edit.moveToTrash'),
  id: 'deleteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.remove()
  }
}

const SHOW_IN_FOLDER = {
  label: i18n.t('menu.edit.showInFolder'),
  id: 'showInFolderMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder()
  }
}

export function getItems () {
  return {
    SEPARATOR,
    NEW_FILE,
    NEW_DIRECTORY,
    COPY,
    CUT,
    PASTE,
    RENAME,
    DELETE,
    SHOW_IN_FOLDER
  }
}
