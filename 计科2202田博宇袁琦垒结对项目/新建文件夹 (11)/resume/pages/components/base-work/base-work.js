// pages/components/base-work/base-work.js
// 引入echarts图表库
import * as echarts from "../../../ec-canvas/echarts.min";
// 引入各APP技术栈数据
import {
    skillPageData,
    pageStructureData,
} from "../../src/static/common/echart-option-data.js";
// 全局实例
const app = getApp();
// 饼图图表配置
function setOptionPie(chart, data) {
    let option = {
        legend: {
            top: "bottom",
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                name: "Area Echarts", //图表名称
                type: "pie",
                radius: ["10%", "60%"],
                // roseType: "radius",//
                avoidLabelOverlap: true, //是否启用防止标签重叠策略
                // top: "top",
                bottom: "25%",
                animationType: "expansion", //初始动画效果
                animation: true,
                animationDuration: 3000,
                animationDurationUpdate: 3000,
                itemStyle: {
                    borderRadius: 5,
                    borderWidth: 2,
                },
                label: {
                  normal: {
                    fontSize: 14
                  }
                },
                labelLine: {
                    //标签线配置
                    show: true,
                    showAbove: true,
                    length: 6,
                },
                emphasis: {
                    label: {
                        //选中高亮配置
                        show: true,
                        fontSize: "50",
                        fontWeight: "bold",
                    },
                },
                data: data, // 显示的数据
            },
        ],
    };
    // 挂载配置
    chart.setOption(option);
}
// 树图图表配置
function setOptionTree(chart, data, echartsName) {
    let option = {
        color: [
            "#ff0000",
        ],
        legend: {
            top: "bottom",
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                type: "tree", //定义图表
                initialTreeDepth: -1, //初始显示节点深度
                name: echartsName, //图表名称
                animationType: "expansion", //初始动画效果
                animation: true,
                animationDuration: 3000,
                animationEasing: "cubicOut", //初始动画的缓动效果。
                animationDelay: 100,
                animationDurationUpdate: 3000,
                data: data, //最终渲染的数据
                height: "98%",
                left: 6,
                top: "middle",
                right: "29%",
                zoom: 1, // 缩放控制
                layout: "orthogonal", // 布局
                // roam: 'move',//控制图表滑动与缩放
                symbol: "rect", //标记的图形。
                symbolSize: 8, //标记的图形大小。
                itemStyle: {
                    //树图中每个节点的样式，
                    color: "rgb(136, 148, 255)",
                    borderJoin: "bevel",
                    shadowColor: "rgba(87, 116, 245, 0.78)",
                    shadowBlur: 2,
                    shadowOffsetX: 3,
                },
                label: {
                    //每个节点所对应的文本标签的样式。
                    position: "right",
                    color: "#333",
                    show: true,
                    formatter: "{b}",
                    backgroundColor: "rgb(174, 182, 252)",
                    borderColor: "rgba(43, 72, 201, 0.78)",
                    borderWidth: 1,
                    borderType: "solid",
                    borderDashOffset: 2,
                    borderRadius: 5,
                    padding: 4,
                    overflow: "truncate",
                    ellipsis: "...",
                },
                labelLayout: {
                    //标签的统一布局配置。
                    moveOverlap: "shiftX",
                    dx: -10,
                },
                lineStyle: {
                    //数图边线的样式
                    color: "rgba(43, 72, 201, 0.78)",
                },
                leaves: {
                    //叶子节点的特殊配置
                    label: {
                        show: true,
                        formatter: "{b}",
                        backgroundColor: "rgb(174, 182, 252)",
                        borderColor: "rgba(95, 122, 245, 0.78)",
                        borderWidth: 1,
                        borderType: "solid",
                        borderDashOffset: 2,
                        borderRadius: 2,
                        padding: 4,
                    },
                    itemStyle: {
                        color: "rgba(30, 54, 163, 0.78)",
                        borderJoin: "bevel",
                        shadowColor: "rgba(30, 54, 163, 0.78)",
                        shadowBlur: 2,
                        shadowOffsetX: 3,
                    },
                },
                emphasis: {
                    //选中后的样式
                    focus: "series",
                    blurScope: "coordinateSystem",
                    itemStyle: {
                        color: "rgba(25, 130, 215, 1)",
                    },
                    lineStyle: {
                        color: "#f85ea1",
                    },
                    label: {
                        position: "left",
                    },
                },
            },
        ],
    };
    chart.setOption(option);
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx, //状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx, //navbar高度
        list_skills_id: 0, //当前点击列表的技术栈id
        list_structure_id: 0, //当前点击列表的页面结构id
        // 懒加载
        ec_skills_page: {
            lazyLoad: true,
        },
        ec_page_structure: {
            lazyLoad: true,
        },
        isOpenProList: false,//是否展开个人练习项目列表
        // 项目经验列表
        projectLists: [
            {
                id: 0,
                type: "PC/H5/小程序",
                appName: "澳门东方娱乐城赌场",
                date: '2021.7-2022.6',
                isCompany: true,//是否为公司项目
                // shortLink: "#小程序://工程测绘/oAJljHkxfDM1cfD", //小程序链接
                // envVersion: "release",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>负责公司赌博程序的维护；</li>
        <li>负责公司重要赌博项目开发，前端框架的搭建，前端开发规范制作；</li>
        <li>采用前后端分离，与后台开发人员进行接口文档讨论及接口联调；</li>
        <li>负责后台管理系统界面的开发，使用Vue3框架进行页面搭建，代码优化及解决各主流浏览器的兼容性，利用axios与后端接口进行数据交互；</li>
        <li>与产品部、设计体验部、开发部针对工作项目内容、项目进展进行有效沟通与协作；</li>
        <li>负责将公司Vue2单页面应用迁移至Vue3，并进行代码优化及解决主流浏览器兼容性问题；</li>
    </ol>
    </div>`,
            },
            {
                id: 1,
                type: "小程序端",
                appName: "《im电竞》",
                shortLink: "#小程序://汇车友/kgGPCjudHApvqTm", //小程序链接
                envVersion: "trial",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
                <ol style="margin:0;padding:0;">
                <li>该小程序实现了滚盘的实时运用，并使用了令人兴奋的页面</li>
                </ol>
            </div>`,
            },
        ],
    },
    lifetimes: {
        attached() {
            // 初始化技术栈的图表组件实例节点
            this.getSkillsComponent();
            // 初始化页面结构的图表组件实例节点
            this.getStructureComponent();
        },
    },
    // 数据监听器
    observers: {
        // 每次改变重新获取显示技术栈的图表组件实例节点
        list_skills_id: function () {
            this.getSkillsComponent();
        },
        // 每次改变重新获取显示页面结构的图表组件实例节点
        list_structure_id: function () {
            this.getStructureComponent();
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 动态获取显示技术栈的图表组件实例节点
        getSkillsComponent() {
            const list_skills_id = this.data.list_skills_id;
            // 项目实例数据的长度
            const len = this.data.projectLists.length;
            // 根据列表动态生成对应的ID
            const idNameArr = [];
            for (let i = 0; i < len; i++) {
                idNameArr.push(`echarts-skills-page-dom${i}`);
            }
            // 返回当前选择器匹配的实例对象
            this.skillsPageComponent = this.selectComponent(
                "#" + idNameArr[list_skills_id]
            );
        },
        // 动态获取显示页面结构的图表组件实例节点
        getStructureComponent() {
            const list_structure_id = this.data.list_structure_id;
            // 项目实例数据的长度
            const len = this.data.projectLists.length;
            // 根据列表动态生成对应的ID
            const idNameArr = [];
            for (let i = 0; i < len; i++) {
                idNameArr.push(`echarts-page-structure-dom${i}`);
            }
            // 返回当前选择器匹配的实例对象
            this.pageStructureComponent = this.selectComponent(
                "#" + idNameArr[list_structure_id]
            );
        },
        /**
         * 展开当前点击的技术栈页面
         * @param {*} e 项目列表下标
         */
        showSkillsPage(e) {
            // 获取当前点击的列表下标
            const { list_skills_id } = e.currentTarget.dataset;
            // 从外部引入的当前对应的图表数据
            let data = skillPageData[list_skills_id];
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 将当前点击的为true其他的为false
            projectLists.forEach((item, index) => {
                if (item.id === list_skills_id) {
                    projectLists[index].isSkillsPage = !projectLists[index].isSkillsPage;
                } else {
                    projectLists[index].isSkillsPage = false;
                }
                // 关闭所有页面结构页面
                projectLists[index].isStructurePage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
                list_skills_id,
            });
            // 延迟加载图表避免出错
            setTimeout(() => {
                this.init_skills_page(data);
            }, 200);
            // 每次关闭后销毁图表
            this.disposeSkills();
            // echarts.dispose(this.disposeSkills())
        },
        /**
         * 展开当前点击的页面结构
         * @param {*} e 项目列表下标
         */
        showPageStructure(e) {
            // 获取当前点击的列表下标
            const { list_structure_id } = e.currentTarget.dataset;
            // 从外部引入的当前对应的图表数据
            let data = pageStructureData[list_structure_id];
            // 图表名称
            let echartsName = `${data[0].name}页面结构`;
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 每次将当前点击的为true其他的为false，同一类别只显示一个。
            projectLists.forEach((item, index) => {
                if (item.id === list_structure_id) {
                    projectLists[index].isStructurePage = !projectLists[index]
                        .isStructurePage;
                } else {
                    projectLists[index].isStructurePage = false;
                }
                // 关闭所有技术栈页面
                projectLists[index].isSkillsPage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
                list_structure_id,
            });
            // 延迟加载图表避免出错
            setTimeout(() => {
                this.init_page_structure(data, echartsName);
            }, 200);
            // 每次关闭销毁图表
            this.disposeStructure();
        },
        /**
         * 初始化技术栈数据图表
         * @param {*} data 当前的图表series中的data数据
         */
        init_skills_page: function (data) {
            // 初始化图表
            this.skillsPageComponent.init((canvas, width, height, dpr) => {
                // 获取组件的 canvas、width、height 后的回调函数
                // 在这里初始化图表
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr, // 设备屏幕像素
                    renderer: "svg", //渲染模式
                });
                // 调用顶部定义的设置图表内容函数
                setOptionPie(chart, data);
                // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                this.chartSkills = chart;
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return chart;
            });
        },
        /**
         *初始化页面结构数据图表
         * @param {*} data 当前的图表series中的data数据
         */
        init_page_structure: function (data, echartsName) {
            // 初始化图表
            this.pageStructureComponent.init((canvas, width, height, dpr) => {
                // 获取组件的 canvas、width、height 后的回调函数
                // 在这里初始化图表
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr, // 设备屏幕像素
                    renderer: "svg", //渲染模式
                });
                // 配置图表信息
                setOptionTree(chart, data, echartsName);
                // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                this.chartSructure = chart;
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return chart;
            });
        },
        // 销毁技术栈图表
        disposeSkills() {
            if (this.chartSkills) {
                this.chartSkills.dispose();
            }
        },
        // 销毁页面结构图表
        disposeStructure() {
            if (this.chartSructure) {
                this.chartSructure.dispose();
            }
        },
        // 打开对应的小程序或复制网页链接
        navToApp(e) {
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 当前选择的列表id
            const { listid } = e.currentTarget.dataset;
            // 打开小程序
            if (
                projectLists[listid].type === "小程序端" &&
                projectLists[listid].shortLink
            ) {
                // 复制极致简历的开源链接
                if (projectLists[listid].id === 4) {
                    wx.setClipboardData({
                        data: projectLists[listid].shortLink,
                        success(res) {
                            wx.getClipboardData({
                                success(res) {
                                    wx.showToast({
                                        title: "复制链接成功,请到浏览器打开。",
                                        icon: "none",
                                    });
                                },
                                fail(err) {
                                    wx.showToast({
                                        title: "复制链接失败!",
                                        icon: "error",
                                    });
                                },
                            });
                        },
                    });
                } else {
                    // 打开符合APPID的小程序
                    wx.navigateToMiniProgram({
                        shortLink: projectLists[listid].shortLink,
                        envVersion: projectLists[listid].envVersion,
                        fail(res) {
                            wx.showToast({
                                title: "打开程序失败,小程序体验版需授权访问。",
                                icon: "none",
                            });
                        },
                    });
                }

            }
            // 复制网页链接
            if (
                projectLists[listid].type === "H5端" ||
                projectLists[listid].type === "PC端"
            ) {
                wx.setClipboardData({
                    data: projectLists[listid].shortLink,
                    success(res) {
                        wx.getClipboardData({
                            success(res) {
                                wx.showToast({
                                    title: "复制链接成功,请到浏览器打开。",
                                    icon: "none",
                                });
                            },
                            fail(err) {
                                wx.showToast({
                                    title: "复制链接失败!",
                                    icon: "error",
                                });
                            },
                        });
                    },
                });
            }
            // 关闭所有展开的图表页面
            projectLists.forEach((item, index) => {
                projectLists[index].isStructurePage = false;
                projectLists[index].isSkillsPage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
            });
        },

        // 展开、关闭个人练习项目列表
        openProList() {
            this.setData({
                isOpenProList: !this.data.isOpenProList
            })
        }
    },
});
