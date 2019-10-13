import projects from '../projects/projects'
export default function () {
  var lastIndex = 0

  function generateRandomItems (order) {
    var items = [], i
    console.log(order)
    items=JSON.parse(JSON.stringify(projects.slice((order-1)*10, order*10)))
    
    items.map(v => {
      v.src = v.cover;
      v.width=768;

      v.initHeight=v.height
      v.height = (v.height * 360 / v.width);
      v.initHeight = v.height;
    })
    return  JSON.parse(JSON.stringify(items))
  }
  return {
    get: generateRandomItems
  }
}