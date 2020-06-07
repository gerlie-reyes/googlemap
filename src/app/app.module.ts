import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [AppComponent, ArticleComponent, MapComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
