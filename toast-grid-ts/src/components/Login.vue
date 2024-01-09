<template>
  <VApp id="inspire">
    <VMain class="blue-grey lighten-4">
      <!-- Login Component -->
      <VContainer style="max-width: 450px" fill-height>
        <VCard>
          <div class="pa-10">
            <h1 style="text-align: center" class="mb-5">Login</h1>            
            <form>
              <VTextField
                v-model="username"
                label="ID"
                prepend-inner-icon="mdi-account"
              ></VTextField>
              <VTextField
                v-model="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                label="Password"
              >
              </VTextField>
              <VBtn
                @click="formLogin"
                color="blue lighten-1 text-capitalize"
                depressed
                large
                block
                dark
                class="mb-3"
              >
                Login
              </VBtn>
              <VBtn
                color="blue lighten-1 text-capitalize"
                depressed
                large
                block
                dark
              >
                Sign Up
              </VBtn>
            </form>
          </div>
        </VCard>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import { VApp, VBtn, VCard, VContainer, VMain, VTextField } from 'vuetify/lib/components/index.mjs';
import { loginForm, logoutForm } from '../service/login'
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return { store };
  },    
  data: () => ({
    username: null,
    password: null,
  }),
  components: {VApp, VBtn, VCard, VContainer, VMain, VTextField},
  computed: {},
  methods: {
    async formLogin() {

      const result = await loginForm(
        {
          username: this.username,
          password: this.password
        },
        this.store
      );

      console.log('login=' + result);
      if (result == '200') {
        await this.$router.push('/');
      } else {
        logoutForm(this.store);
        await this.$router.push('/login');
      }
    }
  },
};
</script>