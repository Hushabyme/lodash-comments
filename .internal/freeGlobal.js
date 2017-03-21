/** 从 Node.js 中检测自由变量 `global` */
const freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;
