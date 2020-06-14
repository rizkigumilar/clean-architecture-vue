import { BaseResponseMapper } from './Base'
import { User, UserData } from '@/domain/entities/UserData'
import { AxiosResponse } from 'axios'

export class UserDataMapper extends BaseResponseMapper {
  public convertUserDataFromApi(result: AxiosResponse<any>): User {
    const { data } = result
    return new User(
      data.success,
      data.message,
      data.data.map(
        (val) =>
          new UserData(
            val.id,
            val.name,
            val.age
          )
      )
    )
  }
}
