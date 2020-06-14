import { User } from '@/domain/entities/UserData'

export interface UserDataRepositoryInterface {
  getAllUser(): Promise<User>
}
