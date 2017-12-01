import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/**components */
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/non-lazy/welcome/welcome';
import { MyCoursesPage } from '../pages/non-lazy/myCourses/myCourses';

/**services */
import { NetworkService } from '../services/network.service';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    MyCoursesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage ,
    MyCoursesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkService
  ]
})
export class AppModule {}
