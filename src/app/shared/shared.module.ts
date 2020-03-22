import { NgModule } from '@angular/core';
import { ConfigurationService } from './services/config.service';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

const modules = [AmplifyAngularModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [ConfigurationService, AmplifyService]
})
export class SharedModule {}
