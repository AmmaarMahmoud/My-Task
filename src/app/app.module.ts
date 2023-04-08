;
import { AccountModule } from './account/account.module';
import { SharedModule } from './@shared/shared.module'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/@core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './@core/auth/interceptors/http-interceptor.interceptor';
import { ApiService } from 'src/app/@core/api.service';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AccountModule,
    CoreModule,
    HttpClientModule,
    MdbTooltipModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }, ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
