import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import { InsertmenuComponent } from './insertmenu/insertmenu.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { LoginComponent } from './login/login.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NotloggedinComponent } from './notloggedin/notloggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowmenuComponent,
    InsertmenuComponent,
    UpdatemenuComponent,
    DeletemenuComponent,
    LoginComponent,
    LoggedinComponent,
    NotloggedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
