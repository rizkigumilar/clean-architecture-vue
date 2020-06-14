import { DependencyContainer } from 'tsyringe'
import { UserDataMapper } from '@/data/persistences/mappers/UserDataMapper'
import { UserDataApiRepository } from '@/app/repositories/api/UserApiRepository'
import ApiService from '../services/ApiServices'


export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataApiRepository>(UserDataApiRepository, {
      useFactory: (d) => {
        return new UserDataApiRepository(
          d.resolve(ApiService),
          d.resolve(UserDataMapper)
        )
      },
    })
  }
}
