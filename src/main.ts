import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import Amplify from 'aws-amplify';

Storage.configure({
  Auth: {
    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    region: 'us-east-1',
    userPoolId: 'us-east-1_TvKB4As8Y',
    userPoolWebClientId: '60qdq2vuiohvk36ocadnfe293b',
    identityPoolId: 'us-east-1:d5d836d2-f672-48fc-8a68-1e511e37affa',
    mandatorySignIn: true,
    oauth: {
      domain: 'amplify-app-test-existing.auth.us-east-1.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin'
      ],
      redirectSignIn: 'http://localhost:4200/auth',
      redirectSignOut: 'http://localhost:4200/auth/signin',
      responseType: 'code'
    },
    federationTarget: 'COGNITO_USER_POOLS'
  }
});

Amplify.configure({
  Auth: {
    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    region: 'us-east-1',
    userPoolId: 'us-east-1_TvKB4As8Y',
    userPoolWebClientId: '60qdq2vuiohvk36ocadnfe293b',
    identityPoolId: 'us-east-1:d5d836d2-f672-48fc-8a68-1e511e37affa',
    mandatorySignIn: true,
    oauth: {
      domain: 'amplify-app-test-existing.auth.us-east-1.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin'
      ],
      redirectSignIn: 'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code'
    },
    federationTarget: 'COGNITO_USER_POOLS'
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
