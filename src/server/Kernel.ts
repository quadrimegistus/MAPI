import { Http, Locals, Application } from '.';
import CORS from './CORS';

class Kernel {
  public static init(_express: Application): Application {
    if (Locals.config().isCORSEnabled) {
      _express = CORS.mount(_express);
    }
    _express = Http.mount(_express);
    return _express;
  }
}

export default Kernel;
