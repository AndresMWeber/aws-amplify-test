import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { ConfigurationService } from './shared/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aws-amplify-app';
  constructor(
    public amplify: AmplifyService,
    public config: ConfigurationService
  ) {
    amplify
      .auth()
      .currentAuthenticatedUser()
      .then(console.log)
      .catch(console.log);
    console.log(config);
  }
}
