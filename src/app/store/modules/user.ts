import { container } from 'tsyringe'
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'
import store from '@/app/store/store'
import { UserDataPresenter } from '@/app/ui/presenters/UserDataPresenter'
import { User } from '@/domain/entities/UserData'

export interface UserState {
  userData: User
  isLoading: boolean
  fields: any
}

@Module({ namespaced: true, dynamic: true, store, name: 'userlist' })
class Users extends VuexModule implements UserState {
  public isLoading = true
  public fields = [
    { key: 'selected', sortable: false },
    { key: 'no', sortable: false },
    { key: 'title', sortable: true },
    { key: 'attachment', sortable: false },
    { key: 'deletable', sortable: false },
    { key: 'updatedAt', sortable: false },
    { key: 'createdAt', sortable: false },
    { key: 'actions', sortable: false },
  ]
  public userData = new User(true, '')
  

  @Action
  public async getUserData() {
    this.setLoading(true)
    const presenter = await container.resolve(UserDataPresenter)
    presenter
      .loadUserData()
      .then((res: User) => {
        this.setUserData(res)
        console.log('Response User Data', res)
      })
      .catch((error) => {
        console.error('error', error)
      })
      .finally(() => {
        this.setLoading(false)
      })
  }

  @Mutation
  private setUserData(user: User) {
    this.userData = user
  }

  @Mutation
  private setLoading(isLoading: boolean) {
    this.isLoading = isLoading
  }
}

export const UserModule = getModule(Users)
