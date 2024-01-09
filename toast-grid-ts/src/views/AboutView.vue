<script setup lang="ts">
import { TuiGridElement } from "vue3-tui-grid"
import { OptColumn, OptRow } from 'tui-grid/types/options';
import { onMounted, ref } from 'vue';
import axios from '../service/axios';
import { useCookies } from "vue3-cookies";
import { useStore } from "vuex";

class CustomTextEditor {
  el;
  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);

    this.el = el;
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}

const data = ref<OptRow[]>([
  {
    id: '10012',
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    id: '10013',
    city: 'Tokyo',
    country: 'Japan'    
  },
  {
    id: '10014',
    city: 'London',
    country: 'England'
  },
  {
    id: '10015',
    city: 'Ljubljana',
    country: 'Slovenia'
  },
  {
    id: '10016',
    city: 'Reykjavik',
    country: 'Iceland'
  }
]);

const columns = ref<OptColumn[]>([
  {
    header: 'ID',
    name: 'id',
    editor: {
      type: CustomTextEditor,
      options: {
        maxLength: 10
      }
    }
  },
  {
    header: 'CITY',
    name: 'city',
    editor: 'text'
  },
  {
    header: 'COUNTRY',
    name: 'country',
    formatter: 'listItemText',
    editor: {
      type: 'select',
      options: {
        listItems: [
          { text: 'South Korea', value: 'South Korea' },
          { text: 'England', value: 'England' },
          { text: 'Japan', value: 'Japan' },
          { text: 'Slovenia', value: 'Slovenia' }
        ]
      }
    }
  }
]);

const GridTable = ref<TuiGridElement>();

onMounted(()=>{
  const grid = GridTable.value;
  const optPreset = {
    selection: {
      background: '#4daaf9',
      border: '#004082'
    },
    scrollbar: {
      background: '#f5f5f5',
      thumb: '#d9d9d9',
      active: '#c1c1c1'
    },
    row: {
      even: {
        background: '#f3ffe3'
      },
      hover: {
        background: '#ccc'
      }
    },
    cell: {
      normal: {
        background: '#fbfbfb',
        border: '#e0e0e0',
        showVerticalBorder: true
      },
      header: {
        background: '#eee',
        border: '#ccc',
        showVerticalBorder: true
      },
      rowHeader: {
        border: '#ccc',
        showVerticalBorder: true
      },
      editable: {
        background: '#fbfbfb'
      },
      selectedHeader: {
        background: '#d8d8d8'
      },
      focused: {
        border: '#418ed4'
      },
      disabled: {
        text: '#b0b0b0'
      }
    }
  }
  grid?.applyTheme("striped", optPreset);
  grid?.setLanguage("ko");  
  // const instance = grid?.gridInstance;
  // instance?.setWidth(500);

  //data Load
  // const loginInfo = {};

  // const response = getData();

});

// eslint-disable-next-line
const getData = async ()=>{
  const store = useStore();
  const response = await axios.post('/api/authenticate', {});

  console.log('response => ');
  console.log(response);

  try {
    const { cookies } = useCookies();
    cookies.set('token', response.data.token, '60s' );
    cookies.set('refresh_token', response.data.refreshToken, '1d' );
    // axios.defaults.headers['Authorization'] = "Bearer " + cookies.get('token');
    // axios.defaults.headers['REFRESH_TOKEN'] = cookies.get('refresh_token');
    console.log("token=" + cookies.get('token'));
    console.log("refresh_token=" + cookies.get('refresh_token'));

    console.log('response.status = ' + response.status);
    if (String(response.status) == '200') {
        console.log('store = ' + store);
        store.commit("setLogined", true);            
    }

    return response.status;
  }catch(err){      
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log(err);
    } 
  }

};

</script>

<template>
  <div>
    <tui-grid 
      ref="GridTable"
      :data="data"
      :columns="columns"
    >
    </tui-grid>
  </div>
</template>