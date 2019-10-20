import util from "../util.js"

export default JSON.parse(util.httpGetSync("").toString());
