import { Locals, Api, Application } from '.';

class Routes {
  public mountApi(_express: Application): Application {
    const apiEnvPrefix = Locals.config().apiPrefix;
    return _express.use(apiEnvPrefix, Api.router);
  }
}

export default new Routes();
