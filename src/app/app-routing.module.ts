import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from "./tutorial/tutorial.component";
import {EditComponent} from "./tutorial/edit/edit.component";
import {AddComponent} from "./tutorial/add/add.component";
import {SearchComponent} from "./forms/search/search.component";

const routes: Routes = [
    {
        path: "",
        component: TutorialComponent
    },
    {
        path: 'tutorial/edit/:id',
        component: EditComponent
    },
    {
        path: 'tutorial/new',
        component: AddComponent
    },
    {
        path: 'search/:term',
        component: SearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
