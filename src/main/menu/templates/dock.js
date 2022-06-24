import { app, Menu } from 'electron'
import * as actions from '../actions/file'
import i18n from '../../i18next.config'
const dockMenu = () => (
  Menu.buildFromTemplate([{
    label: i18n.t('menu.file.openFile'),
    click (menuItem, browserWindow) {
      if (browserWindow) {
        actions.openFile(browserWindow)
      } else {
        actions.newEditorWindow()
      }
    }
  }, {
    label: i18n.t('menu.file.openRecent'),
    click () {
      app.clearRecentDocuments()
    }
  }])
)

export default dockMenu
