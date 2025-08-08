import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Cortes } from './web/cortes/cortes';
import { Reconexiones } from './web/reconexiones/reconexiones';
import { Bajas } from './web/bajas/bajas';
import { Altas } from './web/altas/altas';
import { Error404 } from './errors/error404/error404';
import { WebLayout } from './layout/web-layout/web-layout';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
    {
        path: '',
        component: WebLayout,
        children: [
            {
                path: '',
                component: Inicio,
            },
            {
                path: 'cortes',
                component: Cortes,
            },
            {
                path: 'reconexiones',
                component: Reconexiones,
            },
            {
                path: 'altas',
                component: Altas,
            },
            {
                path: 'bajas',
                component: Bajas,
            }
    ]
    },   
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        component: AppLayout,
        children: [
            {
                path: '',
                loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
            }
        ]
        
    },
    {
        path: '**',
        component: Error404
    }

];
