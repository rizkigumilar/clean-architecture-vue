import { UserDataApiRepository } from '@/app/repositories/api/UserApiRepository'
import { UserDataPresenter } from '@/app/ui/presenters/UserDataPresenter'
import { DependencyContainer } from 'tsyringe'


export class PresenterModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataPresenter>(UserDataPresenter, {
      useFactory: (d) => {
        return new UserDataPresenter(d.resolve(UserDataApiRepository))
      },
    })
  }
}
