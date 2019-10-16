import { dotenv, Express, Locals } from '.';

class App {
  public loadServer(): void {
    Express.init();
  }
  public loadConfiguration(): void {
    dotenv.config();
  }
}

export default new App();