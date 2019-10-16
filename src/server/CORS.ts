import { Locals, corsApp, Application } from '.';

class CORS {
  public mount(_express: Application): Application {
    const options = {
      origin: Locals.config().url,
      optionsSuccessStatus: 200
    };
    _express.use(corsApp(options));
    return _express;
  }
}

export default new CORS();
