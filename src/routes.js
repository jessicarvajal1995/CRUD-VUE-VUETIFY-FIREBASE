import Home from '@/components/Home.vue';
import Botones from '@/components/Botones.vue';
import Card from '@/components/Card.vue';

export const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/botones',
        component: Botones
    },
    {
        path: '/card',
        component: Card
    },
    {
        path: '/tareas-crud',
        name: 'tareas-crud',
        component: () =>
            import ( /* webpackChunkName: "tareas-crud" */ './views/tareas-crud.vue')
    },
    {
        path: '/grid',
        name: 'grid',
        component: () =>
            import ( /* webpackChunkName: "grid" */ './views/Grid.vue')
    }
]