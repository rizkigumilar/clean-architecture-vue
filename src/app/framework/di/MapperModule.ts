import { UserDataMapper } from '@/data/persistences/mappers/UserDataMapper'
import { DependencyContainer } from 'tsyringe'


export class MapperModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataMapper>(UserDataMapper, {
      useClass: UserDataMapper,
    })
  }
}
