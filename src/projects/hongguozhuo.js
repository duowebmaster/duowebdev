import util from "../util.js"

export default JSON.parse(util.httpGetSync("https://raw.githubusercontent.com/duowebmaster/duowebresources/master/hongguozhuo.json").toString());
