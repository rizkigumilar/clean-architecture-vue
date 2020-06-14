import ApiService from '@/app/framework/services/ApiServices'
import { Endpoints } from '@/app/framework/misc/Endpoints'
import { UserDataRepositoryInterface } from '@/data/persistences/repositories/contracts/UserDataRepositoryInterface'
import { User } from '@/domain/entities/UserData'
import { UserDataMapper } from '@/data/persistences/mappers/UserDataMapper'

export class UserDataApiRepository implements UserDataRepositoryInterface {
  private service: ApiService
  private mapper: UserDataMapper

  constructor(service: ApiService, mapper: UserDataMapper) {
    this.service = service
    this.mapper = mapper
  }

  public async getAllUser(): Promise<User> {
    const dataResponse = await this.service.invoke('get', Endpoints.Route.USER_DATA)
    return this.mapper.convertUserDataFromApi(dataResponse)
  }
}
