import { config } from 'aws-sdk';

// @ts-ignore
console.log(DEBUG, ROOT_DOMAIN, IDENTITY_POOL_ID, FEDERATION, USER_POOL_ID, USER_POOL_ID);

// @ts-ignore
config.region = REGION || 'us-east-1';

export class ConfigurationService {
  // @ts-ignore
  debug = DEBUG === 'true' || DEBUG === true;
  // @ts-ignore
  rootDomain: string = ROOT_DOMAIN;
  // @ts-ignore
  identityPoolId: string = IDENTITY_POOL_ID;
  // @ts-ignore
  federation: string = FEDERATION;
  // @ts-ignore
  userPoolId: string = USER_POOL_ID;
  // @ts-ignore
  userPoolClientId: string = USER_POOL_CLIENT_ID;
  // @ts-ignore
  region: string = config.region;
}
