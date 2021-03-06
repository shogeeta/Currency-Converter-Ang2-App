//Angular bootstraping
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//App Module -top level module that holds all of our components
import { AppModule } from './app/app.module';

//Bootstrap our Angular app with a top level NgModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap successfully running`,success))
  .catch(err => console.error(err));
