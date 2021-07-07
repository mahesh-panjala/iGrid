import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgridComponent } from './igrid/igrid.component';
import { ColumnChooserService, FilterService,
  FreezeService, GridModule, GroupService, PageService,
  SearchService, SelectionService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@NgModule({
  declarations: [
    AppComponent,
    IgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    ContextMenuModule
    
    
  ],
  providers: [PageService,SortService,FilterService,GroupService, ColumnChooserService, FreezeService, SelectionService, SearchService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
