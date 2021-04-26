import fetch from './fetch.js'

const BASE_URL='/api'

export const reqAddress=(geohash)=>fetch(`${BASE_URL}/position/${geohash}`)

export const reqFoodCategories=()=>fetch(BASE_URL+'/index_category')
export const reqShops=()=>fetch(BASE_URL+'/index_shops')
// 根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => fetch(BASE_URL+'/search_shops', {geohash, keyword})

export const reqSendCode=({phone})=>fetch(BASE_URL+'/sendcode',{phone},'POST')
export const reqPwdLogin = ({name, pwd, captcha}) => fetch(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')

//手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => fetch(BASE_URL+'/login_sms', {phone, code}, 'POST')

// 根据会话获取用户信息
export const reqUserInfo = () => fetch(BASE_URL+'/getUserInfo')
// 用户登出
export const reqLogout = () => fetch(BASE_URL+'/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => fetch('/info')


/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => fetch('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => fetch('/goods')
