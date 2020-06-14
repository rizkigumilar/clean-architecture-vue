import { DependencyContainer } from 'tsyringe'
import ApiService from '../services/ApiServices'

export class RootModule {
  public static init(container: DependencyContainer) {
    container.register<ApiService>(ApiService, { useClass: ApiService })
  }
}
