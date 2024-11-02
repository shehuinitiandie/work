// 图表数据配置
// 技术栈的数据
const skillPageData = [
  [
      //公司
      { value: 90, name: "Vue2" },
      { value: 90, name: "Vue3" },
      { value: 90, name: "Vite" },
      { value: 90, name: "微信小程序" },
      { value: 80, name: "JS" },
      { value: 80, name: "Sass" },
      { value: 70, name: "Pinia" },
      { value: 40, name: "ElementUI" },
      { value: 40, name: "后台管理系统" },
      { value: 40, name: "Echarts5" },
      { value: 30, name: "ES6+语法" },
      { value: 32, name: "Express" },
      { value: 30, name: "Nodejs" },
      { value: 32, name: "Mysql" },
      { value: 28, name: "VueRouter" },
      { value: 20, name: "Sequelize" },
  ],
  [
      //《工程测绘大师》
      { value: 90, name: "1" },
      { value: 90, name: "2" },
      { value: 90, name: "3" },
      { value: 90, name: "4" },
      { value: 80, name: "5" },
      { value: 80, name: "6" },
      { value: 70, name: "7L" },
      { value: 40, name: "8" },
  ],
  [
      //《汇车友》
      { value: 90, name: "JS" },
      { value: 80, name: "WXML" },
      { value: 80, name: "SASS" },
      { value: 70, name: "WXSS" },
      { value: 40, name: "组件化开发" },
      { value: 30, name: "ES6+语法" },
      { value: 28, name: "腾讯地图位置服务" },
      { value: 26, name: "Echarts5" },
      { value: 24, name: "地图选点" },
      { value: 23, name: "路线规划" },
      { value: 22, name: "城市选择" },
      { value: 21, name: "小程序接口" },
      { value: 20, name: "storage本地缓存" },
  ],
  [
      //《汇车友》
      { value: 90, name: "Vue3" },
      { value: 80, name: "CSS" },
      { value: 80, name: "Vite" },
      { value: 80, name: "SASS" },
      { value: 60, name: "HTML" },
      { value: 50, name: "组件化开发" },
      { value: 30, name: "JS" },
      { value: 30, name: "ES6+语法" },
      { value: 28, name: "VueRouter" },
      { value: 28, name: "Pinia" },
      { value: 26, name: "Echarts5" },
      { value: 20, name: "Localstorage" },
      { value: 20, name: "Slot" },
  ],
  [
      //《极致简历》
      { value: 90, name: "JS" },
      { value: 80, name: "WXML" },
      { value: 80, name: "SASS" },
      { value: 70, name: "WXSS" },
      { value: 40, name: "组件化开发" },
      { value: 30, name: "ES6+语法" },
      { value: 26, name: "Echarts5" },
      { value: 10, name: "小程序接口" },
  ],
  [
      //《全栈后台管理系统》
      { value: 90, name: "Vue3" },
      { value: 80, name: "CSS" },
      { value: 80, name: "Vite" },
      { value: 80, name: "SASS" },
      { value: 60, name: "HTML" },
      { value: 50, name: "组件化开发" },
      { value: 32, name: "Express" },
      { value: 32, name: "Mysql" },
      { value: 30, name: "JS" },
      { value: 30, name: "ES6+语法" },
      { value: 28, name: "VueRouter" },
      { value: 28, name: "Pinia" },
      { value: 26, name: "Echarts5" },
      { value: 20, name: "ElementPlus" },
      { value: 20, name: "Axios" },
  ],
  [
      //《炫酷大屏可视化》
      { value: 90, name: "Vue3" },
      { value: 80, name: "CSS" },
      { value: 80, name: "SASS" },
      { value: 60, name: "HTML" },
      { value: 40, name: "组件化开发" },
      { value: 30, name: "JS" },
      { value: 30, name: "ES6+语法" },
      { value: 30, name: "Vite" },
      { value: 28, name: "VueRouter" },
      { value: 28, name: "Pinia" },
      { value: 26, name: "Echarts5" },
  ],
  [
      //《仿微信读书》
      { value: 90, name: "Vue2" },
      { value: 80, name: "CSS" },
      { value: 80, name: "SASS" },
      { value: 60, name: "HTML" },
      { value: 40, name: "JS" },
      { value: 40, name: "组件化开发" },
      { value: 30, name: "ES6+语法" },
      { value: 30, name: "EpubJs" },
      { value: 30, name: "VueClI" },
      { value: 28, name: "VueRouter" },
      { value: 28, name: "VueX" },
      { value: 20, name: "Promise" },
      { value: 20, name: "axios" },
  ],
  [
      //《仿QQ音乐》
      { value: 90, name: "Vue3" },
      { value: 80, name: "CSS" },
      { value: 80, name: "SASS" },
      { value: 60, name: "HTML" },
      { value: 40, name: "组件化开发" },
      { value: 30, name: "JS" },
      { value: 30, name: "ES6+语法" },
      { value: 30, name: "Vite" },
      { value: 28, name: "VueRouter" },
      { value: 28, name: "Pinia" },
      { value: 24, name: "axios" },
      { value: 23, name: "BetterScroll滚动" },
      { value: 20, name: "GoodStorage本地存储" },
  ],
  [
      //《全栈开发个人博客》
      { value: 90, name: "Vue2" },
      { value: 80, name: "Less" },
      { value: 80, name: "HTML" },
      { value: 40, name: "ElemetUI" },
      { value: 45, name: "NodeJs" },
      { value: 50, name: "express" },
      { value: 41, name: "MySql" },
      { value: 37, name: "ES6+语法" },
      { value: 36, name: "Echarts4" },
      { value: 33, name: "sequelize" },
      { value: 32, name: "Navicat" },
      { value: 21, name: "async" },
      { value: 20, name: "dateformat" },
  ],
  [
      //《全栈开发随心贴》
      { value: 90, name: "Vue2" },
      { value: 80, name: "Less" },
      { value: 70, name: "HTML" },
      { value: 50, name: "ElemetUI" },
      { value: 40, name: "NodeJs" },
      { value: 40, name: "Express" },
      { value: 40, name: "MySql" },
      { value: 30, name: "ES6+语法" },
      { value: 29, name: "Echarts4" },
      { value: 28, name: "Sequelize" },
      { value: 25, name: "Navicat" },
      { value: 20, name: "Async" },
      { value: 20, name: "Dateformat" },
  ],
];

/**
* ------------------------------------------页面结构主要数据----------------------------------------
*/
let pageStructureData = [
  [
      {
          name: "无",
          // children: []
      }
  ],
  [
      {
          name: "123",
          children: [
              {
                  name: "1",
                  children: [
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "高1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "1",
                  children: [
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                      {
                          name: "1",
                          children: [
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                              {
                                  name: "1",
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "我的",
                  children: [
                      {
                          name: "关于版本",
                      },
                      {
                          name: "关于我",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "汇车友",
          children: [
              {
                  name: "首页",
                  children: [
                      {
                          name: "朋友圈主页",
                      },
                      {
                          name: "查看设置",
                      },
                      {
                          name: "详情",
                      },
                      {
                          name: "发布",
                      },
                  ],
              },
              {
                  name: "车汇",
                  children: [
                      {
                          name: "主页列表",
                      },
                      {
                          name: "拼车",
                          children: [
                              {
                                  name: "地图选点",
                              },
                              {
                                  name: "路线规划",
                              },
                              {
                                  name: "人找车",
                                  children: [
                                      {
                                          name: "发布人找车",
                                      },
                                  ],
                              },
                              {
                                  name: "车找人",
                                  children: [
                                      {
                                          name: "发布车找人",
                                      },
                                  ],
                              },
                          ],
                      },
                      {
                          name: "租车需求",
                          children: [
                              {
                                  name: "地图选点",
                              },
                              {
                                  name: "路线规划",
                              },
                              {
                                  name: "发布租车需求",
                              },
                          ],
                      },
                      {
                          name: "车队",
                          children: [{ name: "车队列表" }, { name: "群聊" }],
                      },
                      {
                          name: "选择城市",
                          children: [{ name: "全省城市" }],
                      },
                      {
                          name: "筛选",
                          children: [{ name: "可筛选列表" }],
                      },
                  ],
              },
              {
                  name: "消息",
                  children: [
                      {
                          name: "消息",
                      },
                      {
                          name: "朋友",
                      },
                      {
                          name: "添加页",
                      },
                  ],
              },
              {
                  name: "我的",
                  children: [
                      {
                          name: "账户余额",
                          children: [{ name: "充值" }, { name: "提现" }],
                      },
                      {
                          name: "车辆信息",
                          children: [{ name: "车辆信息列表" }, { name: "添加车辆" }],
                      },
                      {
                          name: "我的订单",
                      },
                      {
                          name: "我的发布",
                          children: [
                              { name: "朋友圈可视化数据" },
                              { name: "拼车及租车可视化数据" },
                          ],
                      },
                      {
                          name: "意见分享",
                      },
                      {
                          name: "关于汇车友",
                      },
                      {
                          name: "分享汇车友",
                      },
                      {
                          name: "检测更新",
                      },
                      {
                          name: "更多设置",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "汇车友",
          children: [
              {
                  name: "首页",
                  children: [
                      {
                          name: "朋友圈主页",
                      },
                      {
                          name: "查看设置",
                      },
                      {
                          name: "详情",
                      },
                      {
                          name: "发布",
                      },
                  ],
              },
              {
                  name: "车汇",
                  children: [
                      {
                          name: "主页列表",
                      },
                      {
                          name: "拼车",
                          children: [
                              {
                                  name: "地图选点",
                              },
                              {
                                  name: "路线规划",
                              },
                              {
                                  name: "人找车",
                                  children: [
                                      {
                                          name: "发布人找车",
                                      },
                                  ],
                              },
                              {
                                  name: "车找人",
                                  children: [
                                      {
                                          name: "发布车找人",
                                      },
                                  ],
                              },
                          ],
                      },
                      {
                          name: "租车需求",
                          children: [
                              {
                                  name: "地图选点",
                              },
                              {
                                  name: "路线规划",
                              },
                              {
                                  name: "发布租车需求",
                              },
                          ],
                      },
                      {
                          name: "车队",
                          children: [{ name: "车队列表" }, { name: "群聊" }],
                      },
                      {
                          name: "选择城市",
                          children: [{ name: "全省城市" }],
                      },
                      {
                          name: "筛选",
                          children: [{ name: "可筛选列表" }],
                      },
                  ],
              },
              {
                  name: "消息",
                  children: [
                      {
                          name: "消息",
                      },
                      {
                          name: "朋友",
                      },
                      {
                          name: "添加页",
                      },
                  ],
              },
              {
                  name: "我的",
                  children: [
                      {
                          name: "账户余额",
                          children: [{ name: "充值" }, { name: "提现" }],
                      },
                      {
                          name: "车辆信息",
                          children: [{ name: "车辆信息列表" }, { name: "添加车辆" }],
                      },
                      {
                          name: "我的订单",
                      },
                      {
                          name: "我的发布",
                          children: [
                              { name: "朋友圈可视化数据" },
                              { name: "拼车及租车可视化数据" },
                          ],
                      },
                      {
                          name: "意见分享",
                      },
                      {
                          name: "关于汇车友",
                      },
                      {
                          name: "分享汇车友",
                      },
                      {
                          name: "检测更新",
                      },
                      {
                          name: "更多设置",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "极致简历",
          children: [
              {
                  name: "进入页动画",
              },
              {
                  name: "基本信息",
                  children: [
                      {
                          name: "个人详情",
                      },
                      {
                          name: "教育背景",
                      },
                      {
                          name: "自我评价",
                      },
                  ],
              },
              {
                  name: "项目经验",
                  children: [
                      {
                          name: "各项目列表",
                      },
                  ],
              },
              {
                  name: "专业技能",
                  children: [
                      {
                          name: "技能列表",
                      },
                      {
                          name: "工具集",
                      },
                  ],
              },
              {
                  name: "博客创作",
                  children: [
                      {
                          name: "各创作平台个人ID",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "后台管理系统",
          children: [
              {
                  name: "login",
              },
              {
                  name: "register",
              },
              {
                  name: "Admin",
                  children: [
                      {
                          name: 'Charts',
                          children: [
                              {
                                  name: '首页'
                              },
                              {
                                  name: '地图1'
                              },
                              {
                                  name: '地图2'
                              },
                              {
                                  name: '可视化大屏'
                              }
                          ]
                      },
                      {
                          name: '系统管理',
                          children: [{
                              name: '用户管理'
                          },
                          {
                              name: '菜单管理'
                          },
                          {
                              name: '管理员管理'
                          }, {
                              name: '部门管理'
                          }, {
                              name: '角色管理'
                          }, {
                              name: '岗位管理'
                          }, {
                              name: '通知公告'
                          }]
                      },
                      {
                          name: '内容管理',
                          children: [
                              {
                                  name: '文章分类'
                              },
                              {
                                  name: '文章列表'
                              },
                              {
                                  name: '创作文章'
                              }
                          ]
                      },
                      {
                          name: '编辑器',
                          children: [
                              {
                                  name: 'Tinymce'
                              }
                          ]
                      },
                      {
                          name: '设置',
                          children: [
                              {
                                  name: '个人中心'
                              }
                          ]
                      },
                      {
                          name: '拓展...'
                      }
                  ]
              },
          ],
      },
  ],
  [
      {
          name: "大屏可视化",
          children: [
              {
                  name: "首页",
              },
          ],
      },
  ],
  [
      {
          name: "仿微信读书",
          children: [
              {
                  name: "首页",
                  children: [
                      { name: "详情页" },
                      {
                          name: "阅读页",
                          children: [
                              { name: "目录" },
                              {
                                  name: "书签",
                              },
                              {
                                  name: "主题",
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "找书",
                  children: [
                      { name: "阅读页" },
                      {
                          name: "阅读页",
                          children: [
                              { name: "目录" },
                              {
                                  name: "书签",
                              },
                              {
                                  name: "主题",
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "加入书架",
                  children: [
                      {
                          name: "书架",
                      },
                      {
                          name: "阅读页",
                          children: [
                              { name: "目录" },
                              {
                                  name: "书签",
                              },
                              {
                                  name: "主题",
                              },
                          ],
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "仿QQ音乐",
          children: [
              {
                  name: "搜索",
                  children: [
                      {
                          name: "歌单详情",
                          children: [
                              {
                                  name: "歌曲列表",
                                  children: [
                                      {
                                          name: "播放器",
                                      },
                                      {
                                          name: "歌词",
                                      },
                                  ],
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "推荐",
                  children: [
                      {
                          name: "歌单详情",
                          children: [
                              {
                                  name: "歌曲列表",
                                  children: [
                                      {
                                          name: "播放器",
                                      },
                                      {
                                          name: "歌词",
                                      },
                                  ],
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "歌手",
                  children: [
                      {
                          name: "歌手详情",
                          children: [
                              {
                                  name: "歌曲列表",
                                  children: [
                                      {
                                          name: "播放器",
                                      },
                                      {
                                          name: "歌词",
                                      },
                                  ],
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "排行榜",
                  children: [
                      {
                          name: "歌单详情",
                          children: [
                              {
                                  name: "歌曲列表",
                                  children: [
                                      {
                                          name: "播放器",
                                      },
                                      {
                                          name: "歌词",
                                      },
                                  ],
                              },
                          ],
                      },
                  ],
              },
              {
                  name: "我的",
                  children: [
                      {
                          name: "最近播放",
                      },
                      {
                          name: "收藏歌曲",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "全栈开发个人博客",
          children: [
              {
                  name: "前端",
                  children: [
                      {
                          name: "首页",
                          children: [{ name: "文章展示" }],
                      },
                      {
                          name: "技术文章",
                          children: [{ name: "文章分类" }],
                      },
                      { name: "随心记录" },
                      { name: "关于" },
                      { name: "文章推荐" },
                  ],
              },
              {
                  name: "后端",
                  children: [
                      {
                          name: "NodeJS",
                          children: [{ name: "Express" }],
                      },
                      {
                          name: "MySQL",
                          children: [{ name: "sequelize" }, { name: "navicat" }],
                      },
                  ],
              },
              {
                  name: "后台管理系统",
                  children: [
                      {
                          name: "登陆",
                          children: [
                              {
                                  name: "系统首页",
                              },
                              {
                                  name: "数据统计",
                              },
                              {
                                  name: "系统管理",
                                  children: [
                                      { name: "分类管理" },
                                      { name: "文章管理" },
                                      { name: "博客信息管理" },
                                      { name: "角色管理" },
                                  ],
                              },
                          ],
                      },
                      {
                          name: "注册",
                      },
                  ],
              },
          ],
      },
  ],
  [
      {
          name: "全栈开发随心贴",
          children: [
              {
                  name: "前端",
                  children: [
                      {
                          name: "登录",
                          children: [
                              {
                                  name: "内容展示",
                              },
                              {
                                  name: "添加内容",
                              }
                          ],
                      },
                      {
                          name: "注册",
                      }
                  ],
              },
              {
                  name: "后端",
                  children: [
                      {
                          name: "NodeJS",
                          children: [{ name: "Express" }],
                      },
                      {
                          name: "MySQL",
                          children: [{ name: "sequelize" }, { name: "navicat" }],
                      },
                  ],
              },
              {
                  name: "后台管理系统",
                  children: [
                      {
                          name: "登陆",
                          children: [
                              {
                                  name: "系统首页",
                              },
                              {
                                  name: "数据统计",
                              },
                              {
                                  name: "系统管理",
                                  children: [
                                      { name: "分类管理" },
                                      { name: "文章管理" },
                                      { name: "角色管理" },
                                  ],
                              },
                          ],
                      },
                      {
                          name: "注册",
                      },
                  ],
              },
          ],
      },
  ],
];

// 导出数据
module.exports = {
  skillPageData,
  pageStructureData,
};
