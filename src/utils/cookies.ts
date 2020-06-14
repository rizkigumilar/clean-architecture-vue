import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(sidebarStatusKey, sidebarStatus)

// TOKEN CREDENTIAL
const tokenKey = `${process.env.NODE_ENV}_admin_access_token`
const expiredTokenKey = `${process.env.NODE_ENV}_admin_expired_token`
export const getToken = () => Cookies.get(tokenKey) || ''
export const getExpired = () => Cookies.get(expiredTokenKey)
export const setCredential = ({ token, expired }) => {
  Cookies.set(tokenKey, token)
  Cookies.set(expiredTokenKey, expired)
}
export const removeAuthCredential = () => {
  Cookies.remove(tokenKey)
  Cookies.remove(expiredTokenKey)
}
