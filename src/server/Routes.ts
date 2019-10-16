import { Locals, Api, Application } from '.';

class Routes {
  public mountApi(_express: Application): Application {
    let apiPrefix: string;
    const apiEnvPrefix = Locals.config().apiPrefix;
    apiEnvPrefix ? (apiPrefix = `/${apiEnvPrefix}`) : (apiPrefix = '/');
    return _express.use(apiPrefix, Api);
  }
}

export default new Routes();
