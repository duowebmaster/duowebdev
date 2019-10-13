import projectDetail from '../projects/projectDetail'
export default function () {
  var lastIndex = 0

  function generateRandomItems (count) {
    var items = [], i
    for (i = 0; i < count; i++) {
      let img=getRandomSrc();
      items[i] = {
        index: lastIndex++,
        style: {
          background: getRandomColor()
        },
        src: img.src,
        height: img.height,
        width: 150,
      }
    }
    return items
  }
  function getRandomSrc() {
    var srcs = [
      'http://archexist.lianxiangmu.com/FmLLeazk_6hpaQDB7grgAC5-wCVy',
      'http://archexist.lianxiangmu.com/FrSyItxJseMd58itWhKNBcXFAZW2',
      'http://archexist.lianxiangmu.com/FmG8s_-NPYaaH9BaUi0wW6y9a0H2',
      'http://archexist.lianxiangmu.com/For8Hq2JJoh4agXntOV6xPKFQU5Y',
      'http://archexist.lianxiangmu.com/FhMF1EdJYT3fgQsQgziyCyT9chgv'
    ]
    let resultSrc = srcs[~~(Math.random() * srcs.length)]
    let image = new Image()
    image.src=resultSrc
    let height = image.height * 150/image.width
    return {
      src: resultSrc,
      height: height
    }
  }

  return {
    get: generateRandomItems
  }
}