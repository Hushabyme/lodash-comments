import freeGlobal from './freeGlobal.js'

/** 检测自由变量 `self` */
const freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** 用作对全局对象的引用 */
const root = freeGlobal || freeSelf || Function('return this')();

export default root;
