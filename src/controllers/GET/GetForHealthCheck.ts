export default class GetForHealthCheck {
  public static health(req: any, res: any): void {
    return res.status(200).end();
  }
}
