import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { ButtonModule, PanelModule, InputTextModule, CheckboxModule, DialogModule,
  GrowlModule, DataTableModule, SharedModule, GMapModule, SelectButtonModule, AccordionModule } from 'primeng/primeng';
import { ChartsModule } from 'ng2-charts';
import { AsideToggleDirective } from '../shared/aside.directive';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { CustomwidgetComponent } from './home/customwidget/customwidget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomElementsComponent } from './dashboard/dom-elements/dom-elements.component';
import { LoadTimeComponent } from './dashboard/load-time/load-time.component';
import { TtfbLoadtimeComponent } from './dashboard/ttfb-loadtime/ttfb-loadtime.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsMapComponent } from './alerts/alerts-map/alerts-map.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { IncidentComponent } from './business-insights/incident/incident.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';
import { BusinessInsightsComponent } from './business-insights/business-insights.component';
import { SnowAggsService } from './services/snow-aggs.service';
import { SettingsComponent } from './settings/settings.component';
import { UserService } from './user.service';
import { RssfeedComponent } from './widgets/rssfeed/rssfeed.component';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavComponent,
    WorldmapComponent,
    CustomwidgetComponent,
    DashboardComponent,
    DomElementsComponent,
    LoadTimeComponent,
    TtfbLoadtimeComponent,
    AlertsComponent,
    AlertsMapComponent,
    HomeComponent,
    MapComponent,

    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    BusinessInsightsComponent,
    IncidentComponent,
    RssfeedComponent,
    SettingsComponent
],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DialogModule,
    AmChartsModule,
    Select2Module,


    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'alert',
        component: AlertsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'incident',
        component: IncidentComponent
      },
      {
        path: 'rssfeed',
        component: RssfeedComponent
      },

      {
        path: 'settings',
        component: SettingsComponent

      }
     

    ]),
    JsonpModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    GrowlModule,
    ChartsModule,
    DataTableModule,
    SharedModule,
    GMapModule,
    SelectButtonModule,
    AccordionModule
  ],
  providers: [SnowAggsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
