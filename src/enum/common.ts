/** http请求头的content-type类型 */
export enum EnumContentType {
    json = 'application/json',
    formUrlencoded = 'application/x-www-form-urlencoded',
    formData = 'multipart/form-data'
}

export enum EnumDataType {
    function = '[object Function]',
    array = '[object Array]',
    file = '[object File]'
}
