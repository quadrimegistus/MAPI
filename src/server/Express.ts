import { Locals, Routes, Kernel, express } from '.';

class Express {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }
  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }
  private mountMiddlewares(): void {
    this.express = Kernel.init(this.express);
  }
  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }
  public init(): any {
    const port: number | string = Locals.config().port;
    const apiEnvPrefix: string = Locals.config().apiPrefix;
    let stringifyPort: string;
    let apiPrefix: string;
    port ? (stringifyPort = `${port}`) : (stringifyPort = '');
    apiEnvPrefix ? (apiPrefix = `/${apiEnvPrefix}/`) : (apiPrefix = '/');
    this.express.listen(stringifyPort, (_error: any) => {
      if (_error) {
        return console.error('Error: ', _error);
      }
      return console.log(
        '\x1b[33m%s\x1b[0m',
        `RedfishAPI Server :: Listening @ '${stringifyPort}${apiPrefix}metrics for new requests.'`
      );
    });
  }
}

export default new Express();
