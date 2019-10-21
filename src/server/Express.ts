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
    const port: string = Locals.config().port;
    const apiEnvPrefix: string = Locals.config().apiPrefix;
    this.express.listen(port, (_error: any) => {
      if (_error) {
        return console.error('Error: ', _error);
      }
      return console.log('\x1b[33m%s\x1b[0m', `MAPI Server :: Listening @ localhost${port}${apiEnvPrefix}.`);
    });
  }
}

export default new Express();
