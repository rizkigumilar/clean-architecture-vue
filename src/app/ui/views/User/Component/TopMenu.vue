<template>
  <div>
    <b-button @click="modalAdd">Add User</b-button>
    <b-modal id="modal-add" @hide="resetModalAdd" title="Add New User">
      <b-form-group label="Name">
        <b-form-input placeholder="Name" v-model="name" />
      </b-form-group>
      <b-form-group label="Age">
        <b-form-input placeholder="Age" v-model="age" min="0" type="number" />
      </b-form-group>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button class="px-3" size="sm" variant="outline-danger" @click="cancel()">Discard</b-button>
        <b-button
          class="px-3"
          size="sm"
          variant="danger"
          @click="postNewUser(item={name,age})"
        >Save</b-button>
      </template>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class extends Vue {
  @Prop({}) public closeModal
  @Prop({}) public postNewUser

  @Watch('closeModal')
  public onCloseModalChange(value: boolean, oldValue: boolean) {
    this.$root.$emit('bv::hide::modal', 'modal-add')
  }
  public name: string = ''
  public age: number = 0
  public modalAdd() {
    this.$root.$emit('bv::show::modal', 'modal-add')
  }

  public resetModalAdd() {
    this.name = ''
    this.age = 0
    this.$root.$emit('bv::hide::modal', 'modal-add')
  }
}
</script>