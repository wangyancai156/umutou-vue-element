import Vue from 'vue';
import Router from 'vue-router';
import App from '../App'

Vue.use(Router);

const home = r => require.ensure([], () => r(require('@/components/common/Home')), 'home');
const inoutbound = r => require.ensure([], () => r(require('@/components/page/bw/InOutBound')), 'inoutbound');
const organization = r => require.ensure([], () => r(require('@/page/hr/organization/Organization')), 'organization');
const addorganization = r => require.ensure([], () => r(require('@/page/hr/organization/AddOrganization')), 'addorganization');
const editorganization = r => require.ensure([], () => r(require('@/page/hr/organization/EditorOrganization')), 'editorganization');

const user = r => require.ensure([], () => r(require('@/page/hr/user/User')), 'user');
const adduser = r => require.ensure([], () => r(require('@/page/hr/user/AddUser')), 'adduser');
const rights = r => require.ensure([], () => r(require('@/page/hr/rights/Rights')), 'rights');
const addrights = r => require.ensure([], () => r(require('@/page/hr/rights/AddRights')), 'addrights');
const editrights = r => require.ensure([], () => r(require('@/page/hr/rights/EditRights')), 'editrights');
const role = r => require.ensure([], () => r(require('@/page/hr/role/Role')), 'role');
const addrole = r => require.ensure([], () => r(require('@/page/hr/role/AddRole')), 'addrole');


export default new Router({
    routes: [
        {
            path: '/',
            component: App, //顶层路由，对应index.html
            children: [//二级路由。对应App.vue
                {
                    //地址为空时跳转inoutbound页面
                    path: '/',
                    redirect: '/organization'
                },
                {
                    //home包含页面格局，所有的业务操作都在这里处理
                    path: '/home',
                    component: home,
                    meta: { title: '系统首页' },
                    children: [
                        {
                            path: '/organization',
                            name:organization,
                            component: organization,
                            meta: { title: '组织架构' },
                        },
                        {
                            path: '/addorganization',
                            component: addorganization,
                            meta: { title: '新建组织' },
                        },
                        {
                            path: '/editorganization',
                            component: editorganization,
                            meta: { title: '编辑组织' },
                        },
                        {
                            path: '/user',
                            component: user,
                            meta: { title: '员工列表' },
                        },
                        {
                            path: '/adduser',
                            component: adduser,
                            meta: { title: '新建员工' },
                        },
                        {
                            path: '/rights',
                            component: rights,
                            meta: { title: '功能列表' },
                        },
                        {
                            path: '/addrights',
                            name:'addRights',
                            component: addrights,
                            meta: { title: '添加功能' },
                        },
                        {
                            path: '/editrights',
                            name:'editrights',
                            component: editrights,
                            meta: { title: '编辑功能' },
                        },
                        {
                            path: '/role',
                            component: role,
                            meta: { title: '权限列表' },
                        },
                        {
                            path: '/addrole',
                            component: addrole,
                            meta: { title: '添加权限' },
                        },
                        {
                            path: '/dashboard',
                            component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                            meta: { title: '系统首页' }
                        },
                        {
                            path: '/inoutbound',
                            component: inoutbound,
                            meta: { title: '出入库记录' }
                        },
                        {
                            path: '/table',
                            component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                            meta: { title: '基础表格' }
                        },
                        {
                            path: '/tabs',
                            component: resolve => require(['../components/page/Tabs.vue'], resolve),
                            meta: { title: 'tab选项卡' }
                        },
                        {
                            path: '/form',
                            component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                            meta: { title: '基本表单' }
                        },
                        {
                            // 富文本编辑器组件
                            path: '/editor',
                            component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                            meta: { title: '富文本编辑器' }
                        },
                        {
                            // markdown组件
                            path: '/markdown',
                            component: resolve => require(['../components/page/Markdown.vue'], resolve),
                            meta: { title: 'markdown编辑器' }
                        },
                        {
                            // 图片上传组件
                            path: '/upload',
                            component: resolve => require(['../components/page/Upload.vue'], resolve),
                            meta: { title: '文件上传' }
                        },
                        {
                            // vue-schart组件
                            path: '/charts',
                            component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                            meta: { title: 'schart图表' }
                        },
                        {
                            // 拖拽列表组件
                            path: '/drag',
                            component: resolve => require(['../components/page/DragList.vue'], resolve),
                            meta: { title: '拖拽列表' }
                        },
                        {
                            // 权限页面
                            path: '/permission',
                            component: resolve => require(['../components/page/Permission.vue'], resolve),
                            meta: { title: '权限测试', permission: true }
                        }
                    ]
                },
                {
                    path: '/login',
                    component: resolve => require(['../components/page/Login.vue'], resolve)
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve)
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve)
                },
                {
                    path: '*',
                    redirect: '/404'
                }
            ]
        },
    ]
})
