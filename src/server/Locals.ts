import { dotenv, Application } from '.';

class Locals {
  public static config(): any {
    dotenv.config();
    let environment: string;
    let port: string;
    let appUri: string | null;
    let apiVersion: string;
    let isCORSEnabled: boolean;
    let apiPrefix: string;
    let mapQuestApiKey: string | null;
    process.env.NODE_ENV ? (environment = process.env.NODE_ENV).toString().toLowerCase() : (environment = 'local');
    process.env.MAPI_PORT ? (port = `:${process.env.MAPI_PORT}`) : (port = '');
    process.env.MAPI_URI ? (appUri = process.env.MAPI_URI).toString().toLowerCase() : (appUri = null);
    process.env.MAPI_VERSION ? (apiVersion = process.env.MAPI_VERSION).toString() : (apiVersion = '1.0');
    process.env.CORS_ENABLED === 'true' ? (isCORSEnabled = true) : (isCORSEnabled = false);
    process.env.MAPI_PREFIX ? (apiPrefix = `/${process.env.MAPI_PREFIX}/`).toString().toLowerCase() : (apiPrefix = '/');
    process.env.MAPQUESTAPIKEY ? (mapQuestApiKey = process.env.MAPQUESTAPIKEY).toString() : (mapQuestApiKey = null);

    return {
      environment,
      port,
      appUri,
      apiVersion,
      isCORSEnabled,
      apiPrefix,
      mapQuestApiKey
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
