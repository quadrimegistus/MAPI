import { dotenv, Application } from '.';

class Locals {
  public static config(): any {
    dotenv.config();
    const environment = process.env.NODE_ENV;
    const port = process.env.MAPI_PORT;
    const appUri = process.env.MAPI_URI;
    const apiVersion = process.env.MAPI_VERSION;
    const isCORSEnabled = process.env.CORS_ENABLED;
    const apiPrefix = process.env.MAPI_PREFIX;

    return {
      environment,
      port,
      appUri,
      apiVersion,
      isCORSEnabled,
      apiPrefix
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
