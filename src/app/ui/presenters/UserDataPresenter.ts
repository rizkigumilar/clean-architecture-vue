import { injectable } from 'tsyringe'
import { UserDataApiRepository } from '@/app/repositories/api/UserApiRepository'
import { User } from '@/domain/entities/UserData'

@injectable()
export class UserDataPresenter {
  private repository: UserDataApiRepository

  constructor(repository: UserDataApiRepository) {
    this.repository = repository
  }

  public loadUserData(): Promise<User> {
    return this.repository.getAllUser()
  }
}
