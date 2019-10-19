let hongguozhuo = require("./hongguozhuo.js")
let projectDetail = require("./projectDetail.js")

let prj = projectDetail.projectDetail;
let hgz = hongguozhuo.hongguozhuo;
for(let i=0; i<hgz.length; i++) {
    hgz[i].detail = prj.find(x => x.id == hgz[i].id).details
    hgz[i].detail = hgz[i].detail.map(x=>x.src);
    delete hgz[i].id
    delete hgz[i].width
    delete hgz[i].height
}

console.log(JSON.stringify(hgz))