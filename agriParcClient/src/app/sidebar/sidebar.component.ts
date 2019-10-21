import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/menu',     title: 'Menu',              icon:'nc-briefcase-24', class: '' },
    { path: '/user',          title: 'Mon profil',        icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Mon matériel',      icon:'nc-spaceship',  class: '' },
    { path: '/typography',    title: 'Mes prêts',          icon:'nc-delivery-fast', class: '' },
    { path: '/icons',    title: 'Mes locations',          icon:'nc-calendar-60', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
