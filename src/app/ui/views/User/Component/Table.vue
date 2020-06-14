<template>
  <div>
    <b-table striped hover :items="dataTable.data" :fields="tableFields" show-empty>
      <!-- Number -->
      <template v-slot:head(id)>
        <center>
          <span>No</span>
        </center>
      </template>
      <template v-slot:cell(id)="data">
        <center>
          <span>{{data.index+1}}</span>
        </center>
      </template>

      <!-- Action -->
      <template v-slot:head(action)>
        <center>
          <span>Action</span>
        </center>
      </template>
      <template v-slot:cell(action)="data">
        <center>
          <b-button @click="openModal(data.item)" variant="danger" size="sm" class="col-md-4 mr-1">Edit</b-button>
          <b-button
            @click="deleteModal(data.item, data.index)"
            variant="outline-danger"
            size="sm"
            class="col-md-4"
          >Delete</b-button>
        </center>
      </template>
    </b-table>

    <!-- modal -->
    <b-modal id="modal-edit">
      <span>Hay Nama Saya {{name}} dan umur saya {{age}}</span>
      <b-form-input v-model="name"></b-form-input>
    </b-modal>
    <b-modal id="modal-delete">
      <span>Yakin mau hapus {{name}} ?</span>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button class="px-3" size="sm" variant="outline-danger" @click="cancel()">Discard</b-button>
        <b-button class="px-3" size="sm" variant="danger" @click="deleteUser(index)">Oke</b-button>
      </template>
    </b-modal>
  </div>
</template>a
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class extends Vue {
  @Prop({}) public dataTable
  @Prop({}) public deleteUser
  @Prop({}) public closeModalDelete

  @Watch('closeModalDelete')
  public onCloseModalDeleteChange(value: boolean, oldValue: boolean) {
    this.$root.$emit('bv::hide::modal', 'modal-delete')
  }
  public tableFields: any = [
    { key: 'id' },
    { key: 'name' },
    { key: 'age' },
    { key: 'action' },
  ]

  public name: string = ''
  public age: number = 0

  public openModal(data) {
    this.name = data.name
    this.age = data.age
    this.$root.$emit('bv::show::modal', 'modal-edit')
  }
  public index: number = 0

  public deleteModal(data, index) {
    this.name = data.name
    this.age = data.age
    this.index = index
    this.$root.$emit('bv::show::modal', 'modal-delete')
  }
}
</script>