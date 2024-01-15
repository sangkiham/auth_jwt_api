import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'dashboard',
                exact: true,
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Dashboard', label: 'Sales Dashboard' }],
                },
            },
            {
                path: '/formlayout',
                name: 'formlayout',
                component: () => import('@/views/uikit/FormLayoutDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Form Layout' }],
                },
            },
            {
                path: '/invalidstate',
                name: 'invalidstate',
                component: () => import('@/views/uikit/InvalidStateDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Invalid State' }],
                },
            },
            {
                path: '/input',
                name: 'input',
                component: () => import('@/views/uikit/InputDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Input' }],
                },
            },
            {
                path: '/floatlabel',
                name: 'floatlabel',
                component: () => import('@/views/uikit/FloatLabelDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Float Label' }],
                },
            },
            {
                path: '/button',
                name: 'button',
                component: () => import('@/views/uikit/ButtonDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Button' }],
                },
            },
            {
                path: '/table',
                name: 'table',
                component: () => import('@/views/uikit/TableDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Table' }],
                },
            },
            {
                path: '/list',
                name: 'list',
                component: () => import('@/views/uikit/ListDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'List' }],
                },
            },
            {
                path: '/timeline',
                name: 'timeline',
                component: () => import('@/views/pages/TimelineDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Timeline' }],
                },
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import('@/views/uikit/TreeDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Tree' }],
                },
            },
            {
                path: '/panel',
                name: 'panel',
                component: () => import('@/views/uikit/PanelsDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Panel' }],
                },
            },
            {
                path: '/overlay',
                name: 'overlay',
                component: () => import('@/views/uikit/OverlayDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Overlay' }],
                },
            },
            {
                path: '/media',
                name: 'media',
                component: () => import('@/views/uikit/MediaDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Media' }],
                },
            },
            {
                path: '/menu',
                component: () => import('@/views/uikit/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/uikit/menu/PersonalDemo.vue'),
                        meta: {
                            breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                        },
                    },
                    {
                        path: '/menu/seat',
                        component: () => import('@/views/uikit/menu/SeatDemo.vue'),
                        meta: {
                            breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                        },
                    },
                    {
                        path: '/menu/payment',
                        component: () => import('@/views/uikit/menu/PaymentDemo.vue'),
                        meta: {
                            breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                        },
                    },
                    {
                        path: '/menu/confirmation',
                        component: () => import('@/views/uikit/menu/ConfirmationDemo.vue'),
                        meta: {
                            breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                        },
                    },
                ],
            },
            {
                path: '/messages',
                name: 'messages',
                component: () => import('@/views/uikit/MessagesDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Messages' }],
                },
            },
            {
                path: '/file',
                name: 'file',
                component: () => import('@/views/uikit/FileDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'File' }],
                },
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import('@/views/uikit/ChartsDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Charts' }],
                },
            },
            {
                path: '/misc',
                name: 'misc',
                component: () => import('@/views/uikit/MiscDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Misc' }],
                },
            },
            {
                path: '/icons',
                name: 'icons',
                component: () => import('@/views/utilities/Icons.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Utilities', label: 'Icons' }],
                },
            },
            {
                path: '/crud',
                name: 'crud',
                component: () => import('@/views/pages/CrudDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Crud' }],
                },
            },
            {
                path: '/calendar',
                name: 'calendar',
                component: () => import('@/views/pages/CalendarDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Calendar' }],
                },
            },
            {
                path: '/invoice',
                name: 'invoice',
                component: () => import('@/views/pages/Invoice.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Invoice' }],
                },
            },
            {
                path: '/help',
                name: 'help',
                component: () => import('@/views/pages/Help.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Help' }],
                },
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import('@/views/pages/EmptyPage.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Pages', label: 'Empty Page' }],
                },
            },
            {
                path: '/documentation',
                name: 'documentation',
                component: () => import('@/views/utilities/Documentation.vue'),
                meta: {
                    breadcrumb: [{ parent: 'Start', label: 'Documentation' }],
                },
            },

            {
                path: '/blocks',
                name: 'blocks',
                component: () => import('@/views/utilities/BlocksDemo.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/pages/Login.vue'),
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@/views/pages/Error.vue'),
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('@/views/pages/NotFound.vue'),
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('@/views/pages/Access.vue'),
    },
    {
        path: '/wizard',
        name: 'wizard',
        component: () => import('@/views/pages/Wizard.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
