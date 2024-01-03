<template>
  <router-view name="login"/>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
    v-show="logined"    
  >
    <div class="demo">
      <div class="container">
        <h1>
          <templete v-if="logined">[Logined]</templete> vue-sidebar-menu          
          <a
            style="color: #000;text-transform: uppercase;font-size: 14px;font-weight: 400;"
            href="https://github.com/yaminncco/vue-sidebar-menu"
          >
            Github
          </a>
        </h1>
        <p>A vue.js sidebar menu component</p>
        <div>
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
              :value="theme.input"
            >
              {{ theme.name }}
            </option>
          </select>
        </div>
        <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
        <router-view />
      </div>
      <div v-if="logined">
          <sidebar-menu
            :menu="menu"
            :collapsed="collapsed"
            :theme="selectedTheme"
            :show-one-child="true"
            @update:collapsed="onToggleCollapse"
            @item-click="onItemClick"
          />
      </div>
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  setup() {
    const store = useStore();
    const logined = computed(() => store.getters.getLogined);
    return { logined };
  },    
  name: 'App',
  data () {
    return {
      menu: [
        {
          header: 'Getting Started',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Installation',
          icon: { class: 'material-icons-sharp', text: 'file_download' }
        },
        {
          href: '/basic-usage',
          title: 'Basic Usage',
          icon: { class: 'material-icons-sharp', text: 'check_box' }
        },
        {
          header: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/props',
          title: 'Props',
          icon: { class: 'material-icons-sharp', text: 'phonelink_setup' }
        },
        {
          href: '/events',
          title: 'Events',
          icon: { class: 'material-icons-sharp', text: 'event' }
        },
        {
          href: '/styling',
          title: 'Styling',
          icon: { class: 'material-icons-sharp', text: 'style' }
        },
        {
          component: separator
        },
        {
          header: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/disabled',
          title: 'Disabled page',
          icon: { class: 'material-icons-sharp', text: 'search_off' },
          disabled: true
        },
        {
          href: '/logout',
          title: 'Logout',
          icon: { class: 'material-icons-sharp', text: 'badge' },
          badge: {
            text: 'new',
            class: 'vsm--badge_default'
          }
        },
        {
          title: 'Dropdown Page',
          icon: { class: 'material-icons-sharp', text: 'download' },
          child: [
            {
              href: '/page/sub-page-1',
              title: 'Sub Page 01',
              icon: { class: 'material-icons-sharp', text: 'auto_stories' }
            },
            {
              href: '/page/sub-page-2',
              title: 'Sub Page 02',
              icon: { class: 'material-icons-sharp', text: 'auto_stories' }
            }
          ]
        },
        {
          title: 'Multiple Level',
          icon: { class: 'material-icons-sharp', text: 'multiple_stop' },
          child: [
            {
              title: 'page'
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page'
                },
                {
                  title: 'Page'
                }
              ]
            },
            {
              title: 'Page'
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page'
                    },
                    {
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log('onToggleCollapse')
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
      console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 65px;
}
#demo.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 50px;
}

.container {
  max-width: 900px;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
