import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/app/store/modules/user'
import TopMenu from './Component/TopMenu.vue'
import Table from './Component/Table.vue'

@Component({
  components: {
    'data-table': Table,
    'top-menu': TopMenu,
  },
})
export default class extends Vue {
  public closeModal: boolean = false
  public closeModalDelete: boolean = false
  public userData: any = []
  public created() {
    UserModule.getUserData()
  }

  public get isLoading(): boolean {
    this.userData = UserModule.userData
    return UserModule.isLoading
  }

  public postNewUser(item) {
    if (this.closeModal === true) {
      this.closeModal = false
    } else {
      this.closeModal = true
    }
    this.userData.data.push(item)
  }

  public deleteUser(item) {
     if (this.closeModalDelete === true) {
      this.closeModalDelete = false
    } else {
      this.closeModalDelete = true
    }
    this.userData.data.splice(item,1)
  }
}