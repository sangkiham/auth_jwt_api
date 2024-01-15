
<template>

  <div class="grid">

    <div class="col-4"></div>
    <div class="col-4">
      <Panel 
        header="Login"
        :pt="{
            header: { class: 'flex justify-content-center' },
            title: { class: 'flex text-4xl' }
        }"        
      >

        <div class="field grid">
          <label for="Username" class="col-fixed" style="width:100px">Username</label>
          <div class="col">
            <InputText id="username" v-model="username" class="w-full"/>
          </div>
        </div>
        <div class="field grid">
          <label for="password" class="col-fixed" style="width:100px">Password</label>
          <div class="col">
            <Password 
              style="width: 100%;"
              id="pwvalue" 
              v-model="pwvalue" 
              type="text" 
              inputStyle="width: 100%;"
              toggleMask 
            />
          </div>
        </div>
        <small class="red-500" id="text-error">{{ errorMessage || '&nbsp;' }}</small>

        <Button type="submit" label="Login" @click="formLogin" />

      </Panel>

    </div>    
    <div class="col-4"></div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { loginForm, logoutForm } from '../service/login'
import { useStore } from "vuex";
import router from '@/router/index.js'

import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const store = useStore();
const username = ref(null);
const pwvalue = ref(null);
const errorMessage = ref(null);

const toast = useToast();

const formLogin = async function  formLogin() {
  console.log('formLogin');
  
  if (pwvalue.value && pwvalue.value.length > 0) {
    const result = await loginForm(
      {
        username: username.value,
        password: pwvalue.value
      },
      store
    );

    console.log('login=' + result);
    if (result == '200') {
      await router.push('/');
    } else {
      logoutForm(store);
      await router.push('/login');
    }
  } else {
    toast.add({ 
      severity: 'error', 
      summary: 'User Id or Password is wrong', 
      detail: username, 
      life: 3000 
    });
  }
}

</script>