export class Endpoints {
  public static baseUrl = process.env.VUE_APP_API_URL

  // tslint:disable-next-line: max-classes-per-file
  public static Route = class {
    public static USER_DATA = '/learning'
  }
}
