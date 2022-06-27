import i18n from '@/i18next.config'

export const imageActions = () => ([{
  label: i18n.t('preferences.image.imageInsertAction.upload'),
  value: 'upload'
}, {
  label: i18n.t('preferences.image.imageInsertAction.folder'),
  value: 'folder'
}, {
  label: i18n.t('preferences.image.imageInsertAction.path'),
  value: 'path'
}])
