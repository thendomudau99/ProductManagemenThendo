import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';



import { AppComponent } from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent} from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
      canActivate: [ProductDetailGuard],component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
