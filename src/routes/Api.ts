import { express } from '.';

class Api {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.mountGetMethods();
    this.mountPostMethods();
  }
  private mountGetMethods(): void {
    this.router.get('/health');
    this.router.get('/');
  }
  private mountPostMethods(): void {
    this.router.post('/directions');
    this.router.post('/elevation');
    this.router.post('/geocoding');
    this.router.post('/guidance');
    this.router.post('/search');
    this.router.post('/staticmap');
    this.router.post('/traffic');
  }
}

export default new Api();
