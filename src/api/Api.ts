import { express, GetForHealthCheck } from '.';

class Api {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.mountGetMethods();
    this.mountPostMethods();
    this.mountOptionMethods();
  }
  private mountGetMethods(): void {
    this.router.get('/health', GetForHealthCheck.health);
    this.router.get('/', GetForHealthCheck.health);
  }
  private mountPostMethods(): void {
    this.router.post('/directions/alternateroutes');
    this.router.post('/directions/dragroute');
    this.router.post('/directions/findlinkid');
    this.router.post('/directions/optimizedroute');
    this.router.post('/directions/pathfromroute');
    this.router.post('/directions/route');
    this.router.post('/directions/routematrix');
    this.router.post('/directions/routeshape');
    this.router.post('/elevation/chart');
    this.router.post('/elevation/profile');
    this.router.post('/geocoding/address');
    this.router.post('/geocoding/batch');
    this.router.post('/geocoding/reverse');
    this.router.post('/guidance/route');
    this.router.post('/search/base');
    this.router.post('/search/corridor');
    this.router.post('/search/polygon');
    this.router.post('/search/radius');
    this.router.post('/search/recordinfo');
    this.router.post('/search/rectangle');
    this.router.post('/staticmap/map');
    this.router.post('/traffic/flowimage');
    this.router.post('/traffic/incidents');
    this.router.post('/traffic/markets');
  }
  private mountOptionMethods(): void {
    this.router.options('/options');
  }
}

export default new Api();
