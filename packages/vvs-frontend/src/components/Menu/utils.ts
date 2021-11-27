import { ConfigMenuItemsType } from './config/config'

// e.g. 
// pathname ==> "/info/farms"
// pathname.split('/') ==> ["", "info", "farms"] ==> length: 3
// pathname ==> "/info"
// pathname.split('/') ==> ["", "info"] ==> length: 2
export const getActiveMenuItem = ({ pathname, menuConfig }: { pathname: string; menuConfig: ConfigMenuItemsType[] }) =>
  menuConfig.find((menuItem) => pathname.split('/').length === 2 ? 
    (pathname.includes(menuItem.href) || getActiveSubMenuItem({ menuItem, pathname })) 
      : 
    pathname.split('/', 2).join('/').includes(menuItem.href))

export const getActiveSubMenuItem = ({ pathname, menuItem }: { pathname: string; menuItem?: ConfigMenuItemsType }) =>
  menuItem?.items?.find((subMenuItem) => pathname !== '/' && pathname.includes(subMenuItem.href))
