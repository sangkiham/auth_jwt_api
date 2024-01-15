<template>
  <div>
    <i class="pi pi-angle-double-up" @click="menuOut" :style="menuMain"></i>
  </div>
  <div>
    <i class="pi pi-server" style="font-size: 1.5rem" @click="menuIn" :style="menuSub"></i>
  </div>
  <div class="card" :style="menuMain">
      <MegaMenu :model="items" orientation="horizontal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from '@/router/index.js'

const menuMain = ref({
  display: "none"
})
const menuSub = ref({
  display: "inline-block"
})

const menuOut = ()=> {
  console.log('menuOut');
  menuMain.value.display = "none";
  menuSub.value.display = "inline-block";
}

const menuIn = ()=> {
  console.log('menuIn');
  menuMain.value.display = "inline-block";
  menuSub.value.display = "none";
}

const items = ref([
  {
      label: 'Furniture',
      icon: 'pi pi-box',
      items: [
          [
              {
                  label: 'Living Room (Exetnal)',
                  items: [
                    { 
                      label: 'Accessories',
                      url: 'https://vuejs.org/'                      
                    }, 
                    { label: 'Armchair' }, 
                    { label: 'Coffee Table' }, 
                    { label: 'Couch' }, 
                    { label: 'TV Stand' }
                  ]
              }
          ],
          [
              {
                  label: 'Kitchen',
                  items: [
                    { label: 'Bar stool' }, 
                    { label: 'Chair' }, 
                    { label: 'Table' }
                  ]
              },
              {
                  label: 'Bathroom',
                  items: [
                    { label: 'Accessories' }
                  ]
              }
          ],
          [
              {
                  label: 'Bedroom',
                  items: [
                    { label: 'Bed' }, 
                    { label: 'Chaise lounge' }, 
                    { label: 'Cupboard' }, 
                    { label: 'Dresser' }, 
                    { label: 'Wardrobe' }
                  ]
              }
          ],
          [
              {
                  label: 'Office',
                  items: [
                    { label: 'Bookcase' }, 
                    { label: 'Cabinet' }, 
                    { label: 'Chair' }, 
                    { label: 'Desk' }, 
                    { label: 'Executive Chair' }
                  ]
              }
          ]
      ]
  },
  {
      label: 'Toast Grid (Intenal)',
      icon: 'pi pi-mobile',
      items: [
          [
              {
                  label: 'Login/Logout',
                  items: [
                    { 
                      label: 'Login',
                      route: '/login'
                    }, 
                    { 
                      label: 'Logout',
                      route: '/logout'
                    }
                  ]
              }
          ],
          [
              {
                  label: 'Home',
                  items: [
                    { 
                      label: 'Home view', 
                      route: '/'
                    }
                  ]
              }
          ],
          [
              {
                  label: 'About',
                  items: [
                    { 
                      label: 'About', 
                      command: () => {
                        router.push('/about');
                      }
                    }
                  ]
              },
              {
                  label: 'Hellow View',
                  items: [
                    { 
                      label: 'Hellow View',
                      command: () => {
                        router.push('/helloView');
                      }
                    }
                  ]
              }
          ]
      ]
  },
  {
      label: 'Toast Grid2 (Intenal)',
  },
  {
      label: 'Toast Grid3 (Intenal)',
  },
  {
      label: 'Toast Grid4 (Intenal)',
  },
  {
      label: 'Toast Grid5 (Intenal)',
  },
  {
      label: 'Toast Grid5 (Intenal)',
  },
  {
      label: 'Toast Grid6 (Intenal)',
  },
  {
      label: 'Toast Grid7 (Intenal)',
  },
  {
      label: 'Toast Grid8 (Intenal)',
  },
  {
      label: 'Toast Grid9 (Intenal)',
  }
]);


</script>
