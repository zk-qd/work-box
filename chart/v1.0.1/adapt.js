/*
 * @Author: zk 
 * @Date: 2021-01-14 10:02:15 
 * @Last Modified by: zk
 * @Last Modified time: 2021-02-26 11:08:45
 */
const { realpx, draft } = $adaptive;
/**
 * @description 图标内容要根据浏览器缩放自适应
 * @param  {...any} params 
 */
function resize(...params) {
    window.addEventListener('resize',
        $tool.throttle(() => params.forEach(item => item.resize()))
    );
};
// echart中如果没有写字体大小，官方会默认就是12px
const ipx = realpx(draft().size);// 一个标准字体大小单位，适配不同屏幕

export default {
    resize,
    ipx,
}


