import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { GetCustomerComponent } from './pages/get-customer/get-customer.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchCustomerComponent
    },
    {
        path: 'update-customer',
        component: UpdateCustomerComponent
    },
    {
        path: 'get-all',
        component: GetCustomerComponent
    },
    {
        path: 'add',
        component: AddCustomerComponent
    },
    {
        path: 'delete',
        component: DeleteCustomerComponent
    },
];
