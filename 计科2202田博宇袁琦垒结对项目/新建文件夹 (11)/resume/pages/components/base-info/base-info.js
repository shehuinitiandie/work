// pages/components/base-info/base-info.js
// 全局实例
const app = getApp();
// 自我评价列表
const selfAssessment =
    `<div class="rich-text">
    <ol style="margin:0;padding:0;">
    <li>钩子大</li>
</ol>
</div>
`
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx,//状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx,//navbar高度
        personalInfo: {//个人信息
            avatar:'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c',
            // name: 'Mr Huang',
            name: '田博宇',
            age: "20岁",
            sex: '男',
            work: '1年工作经验',
            schoolBackground: '本科',
            tel: '17356914667',
            email: 'xxx5@qq.com',
            address: '日本',
            selfAssessment: selfAssessment
        },
        // 联系相关列表
        contactLists: [
            { title: '添加微信', icon: '' },
            { title: '拨打电话', icon: '' },
            { title: '保存电话', icon: '' },
        ],
        // 教育背景相关列表
        educationLists: [
            { title: '浙江工商大学（本科）', icon: '/pages/src/static/image/school.png' },
            { title: '大专工程', icon: '/pages/src/static/image/other.png' },
            // { title: '2016-2021', icon: '/pages/src/static/image/time.png' },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 联系信息事件
        selectContact(e) {
            // 获取当前点击的下标
            const { contactid } = e.currentTarget.dataset;
            if (contactid === 0) {//添加微信
                wx.previewMedia({
                    sources: [
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' }
                    ],
                    current: 0,
                    showmenu: true,
                    success(res) {
                    },
                    fail(res) {
                        // 复制当前点击的内容
                        wx.showToast({
                            title: '虽然你没有添加我，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            } else if (contactid === 1) {//拨打电话
                wx.makePhoneCall({
                    phoneNumber: '1xxx',
                    fail(err) {
                        wx.showToast({
                            title: '虽然你没有call我，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            } else {//保存电话
                wx.addPhoneContact({
                    photoFilePath: '/pages/src/static/icon/click_info.png',
                    nickName: '大鸡巴',
                    lastName: '臭',
                    firstName: '大鸡巴',
                    remark: '前端工程师',
                    mobilePhoneNumber: '17356914667', //手机号
                    weChatNumber: 'hjh2446875775',
                    addressCountry: 'china',
                    email: '2446875775@qq.com',
                    success: function () {
                        wx.showModal({
                            title: '握手🤼‍♀️',
                            content: '感谢在茫茫人海中遇见你',
                            showCancel: false,
                            cancelText: "确定"
                        })
                    },
                    fail: function () {
                        wx.showToast({
                            title: '虽然你没有将我保存下来，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            }
        },
        // 教育信息列表相关事件
        selectEducat(e) {
            // 获取当前点击的下标
            const { educatid } = e.currentTarget.dataset;
            if (educatid === 0) {
                wx.previewMedia({
                    sources: [
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' },
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' },
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' },
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' },
                        { url: 'https://pica.zhimg.com/50/v2-cb2be87cf4d501139200ad2236d4ab41_720w.jpg?source=1940ef5c', type: 'image' },
                    ],
                    current: 0,
                    showmenu: true,
                    success(res) {
                    },
                    fail(res) {
                        // 复制当前点击的内容
                        wx.showToast({
                            title: '打开图片失败',
                            icon: 'none'
                        })
                    }
                })
            }else if (educatid===1) {
                wx.showToast({
                  title: '大鸡巴几把大。😜',
                  icon:'none'
                })
            }else{
                wx.showToast({
                    title: '这是一个难忘的数字，也是最美好的时光。🍀',
                    icon:'none'
                  })
            }
        }
    }
})
