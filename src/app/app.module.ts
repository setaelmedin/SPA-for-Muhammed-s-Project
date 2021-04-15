import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';



import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {BlogsModule} from './blogs/blogs.module';
import {HomeModule} from './home/home.module';
import {InfoModule} from './info/info.module';
import {SettingsModule} from './settings/settings.module';
import {UsersModule} from './users/users.module';
import {SidebarModule} from './sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    BlogsModule,
    HomeModule,
    InfoModule,
    SettingsModule,
    UsersModule,
    SidebarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
