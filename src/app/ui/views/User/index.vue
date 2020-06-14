<template>
  <div class="m-4">
    <top-menu class="mb-3" :postNewUser="postNewUser" :closeModal="closeModal" />
    <div v-if="isLoading" class="text-center">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <data-table v-if="!isLoading" :dataTable="userData" :deleteUser="deleteUser" :closeModalDelete="closeModalDelete" />
  </div>
</template>
<script src="./index.ts" />
