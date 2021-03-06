
// 加密相关类
window.$encrypt = {
    /**
     * @param {String} val 身份证号码
     * @returns {String} 
     * */
    idnumber(val) {
        if (!val) return val;
        return val.toString().replace(/(\d{3})\d{11}(\d{4}|\d{3}[A-Z]{1})/, "$1" + "*".repeat(11) + "$2");
    }
}