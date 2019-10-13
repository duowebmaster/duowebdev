let projects = [
  {
    id: 1,
    title: "万科创想公社",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E4%B8%87%E7%A7%91%E5%88%9B%E6%83%B3%E5%85%AC%E7%A4%BE/_DSC5655.jpg?x-oss-process=style/medium_large",
    height: 512,
    width: 768,
  },
  {
    id: 2,
    title: "东海附属小学",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E4%B8%9C%E6%B5%B7%E9%99%84%E5%B1%9E%E5%B0%8F%E5%AD%A6/20181215-DSC03568.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 1145
  },
  {
    id: 3,
    title: "五邑大学学生活动中心",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E4%BA%94%E9%82%91%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E6%B4%BB%E5%8A%A8%E4%B8%AD%E5%BF%83/DSC03847.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 4,
    title: "从化图书馆",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E4%BB%8E%E5%8C%96%E5%9B%BE%E4%B9%A6%E9%A6%86/1.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 5,
    title: "哥本哈根8字住宅",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%93%A5%E6%9C%AC%E5%93%88%E6%A0%B98%E5%AD%97%E4%BD%8F%E5%AE%85/ORG_DSC09655.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 6,
    title: '城市广场',
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%9F%8E%E5%B8%82%E5%B9%BF%E5%9C%BA/ORG_DSC02192.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 7,
    title: "大干围海珠湾艺术园",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%A4%A7%E5%B9%B2%E5%9B%B4%E6%B5%B7%E7%8F%A0%E6%B9%BE%E8%89%BA%E6%9C%AF%E5%9B%AD/1.png?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 8,
    title: "大馆",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%A4%A7%E9%A6%86/DSC00081.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 1152
  },
  {
    id: 9,
    title: "奥胡斯彩虹全景",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%A5%A5%E8%83%A1%E6%96%AF%E5%BD%A9%E8%99%B9%E5%85%A8%E6%99%AF/ORG_DSC08415.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 10,
    title: "小马驹创意园",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%B0%8F%E9%A9%AC%E9%A9%B9%E5%88%9B%E6%84%8F%E5%9B%AD/20190128-10GY.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 986
  },
  {
    id: 11,
    title: "展览装置-上海龙美术馆",
    cover:"https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%B1%95%E8%A7%88%E8%A3%85%E7%BD%AE-%E4%B8%8A%E6%B5%B7%E9%BE%99%E7%BE%8E%E6%9C%AF%E9%A6%86/20171109-10GY.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 448,
  },
  {
    id: 12,
    title: "巴黎蓬皮杜艺术中心",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%B7%B4%E9%BB%8E%E8%93%AC%E7%9A%AE%E6%9D%9C%E8%89%BA%E6%9C%AF%E4%B8%AD%E5%BF%83/DSC00699.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 13,
    title: "布拉格跳舞的房子",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E5%B8%83%E6%8B%89%E6%A0%BC%E8%B7%B3%E8%88%9E%E7%9A%84%E6%88%BF%E5%AD%90/Snapseed_11023890.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 1152
  },
  {
    id: 14,
    title: "摔跤馆",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E6%91%94%E8%B7%A4%E9%A6%86/20180905-10GY.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 15,
    title: "永庆坊",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E6%B0%B8%E5%BA%86%E5%9D%8A/1.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 16,
    title: "江门体育中心",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E6%B1%9F%E9%97%A8%E4%BD%93%E8%82%B2%E4%B8%AD%E5%BF%83/20171030-10GY.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 404
  },
  {
    id: 17,
    title: "深圳明德学院",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E6%B7%B1%E5%9C%B3%E6%98%8E%E5%BE%B7%E5%AD%A6%E9%99%A2/05-Student%20Centre%40Wu%20Siming.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 18,
    title: "火人节装置 ORB",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E7%81%AB%E4%BA%BA%E8%8A%82%E8%A3%85%E7%BD%AE%20ORB/IMG_2072%2820180911-162705%29.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 513
  },
  {
    id: 19,
    title: "白房子",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E7%99%BD%E6%88%BF%E5%AD%90/1.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 20,
    title: "老城老屋改造",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E8%80%81%E5%9F%8E%E8%80%81%E5%B1%8B%E6%94%B9%E9%80%A0/20180402-27.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 1045
  },
  {
    id: 21,
    title: "连州摄影博物馆",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E8%BF%9E%E5%B7%9E%E6%91%84%E5%BD%B1%E5%8D%9A%E7%89%A9%E9%A6%86/_DSC2369.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 22,
    title: "里斯本MAAT博物馆",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%87%8C%E6%96%AF%E6%9C%ACMAAT%E5%8D%9A%E7%89%A9%E9%A6%86/ORG_DSC00859.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 23,
    title: '里斯本莱罗书店',
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%87%8C%E6%96%AF%E6%9C%AC%E8%8E%B1%E7%BD%97%E4%B9%A6%E5%BA%97/ORG_DSC00185.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 24,
    title: "里斯本贝罗塔",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%87%8C%E6%96%AF%E6%9C%AC%E8%B4%9D%E4%BC%A6%E5%A1%94/ORG_DSC01028.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  },
  {
    id: 25,
    title: "阿姆斯特丹 Cube House",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9Cube%20House/1079B278-9A45-4B9D-9E3D-3AE9C1CB0CDB.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 1149
  },
  {
    id: 26,
    title: "雅典卫城",
    cover: "https://duovi.oss-cn-hangzhou.aliyuncs.com/site/image/project/%E9%9B%85%E5%85%B8%E5%8D%AB%E5%9F%8E/ORG_DSC03890.jpg?x-oss-process=style/medium_large",
    width: 768,
    height: 512
  }
]
export default JSON.parse(JSON.stringify(projects));