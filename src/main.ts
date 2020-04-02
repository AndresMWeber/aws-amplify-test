import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    region: 'us-east-1',
    userPoolId: 'us-east-1_TvKB4As8Y',
    userPoolWebClientId: '7a61cvuc2lrg520blgo9hl0anj',
    identityPoolId: 'us-east-1:d5d836d2-f672-48fc-8a68-1e511e37affa',
    mandatorySignIn: true,
    federationTarget: 'COGNITO_USER_POOLS'
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
