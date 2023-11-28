import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'app',
    path: '/',
    component: () => import('@/App.vue'),
    redirect: '/hello-world',
    children: [
      {
        name: 'HelloWorld',
        path: '/hello-world',
        component: () => import('@/views/HelloWorld.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@components/NotFound/NotFound.vue') },
];

export default routes;
