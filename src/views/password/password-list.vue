<template>
  <article class="panel is-info">
    <p class="panel-heading">
      LISTA DE SENHAS
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-info" type="text" placeholder="Search">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  </article>

  <div class="buttonCadastrarPassword">
    <router-link to="/password/form">
      <button class="button is-responsive is-rounded is-info is-light">
        Cadastrar Senha
      </button>
    </router-link>
  </div>

  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>ID</th>
        <th>Login</th>
        <th>Senha</th>
        <th>Descrição</th>
        <th>Url</th>
        <th>Opções</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in passwordsList" :key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.login }}</th>
        <th>{{ item.password }}</th>
        <th>{{ item.descricao }}</th>
        <th>{{ item.url }}</th>
        <th>
          <button @click="onClickPaginaDetalhar(item.id)" class="button is-small is-info is-outlined">
            Detalhar
          </button>
        </th>
      </tr>
    </tbody>
  </table>

</template>

<script lang="ts">

import { Vue } from 'vue-class-component'
import { Password } from '@/model/password.model'
import { PasswordClient } from '@/client/password.client'
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

export default class PasswordList extends Vue {

  pageRequest: PageRequest = new PageRequest()
  pageResponse: PageResponse<Password> = new PageResponse()

  passwordsList: Password[] = []
  passwordClient!: PasswordClient

  public mounted(): void {
    this.passwordClient = new PasswordClient()
    this.listarPasswords()
  }
  private listarPasswords(): void {
    this.passwordClient.listar()
      .then(
        async success => {
          this.passwordsList = await success
        },
        error => console.log(error)
      )
  }
  onClickPaginaDetalhar(idPassword: number) {
    this.$router.push({ name: 'password-detalhar', params: { id: idPassword, model: 'detalhar' } })
  }
}

</script>


<style>
.buttonCadastrar {
  margin-bottom: 20px;
}
</style>