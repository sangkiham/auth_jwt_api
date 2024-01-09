import axios from './axios';
import { useCookies } from "vue3-cookies";

// loginInfo : {username: '', password: ''}
export async function loginForm(loginInfo, store){
    
    try{    
        const response = await axios.post('/api/authenticate', loginInfo);

        console.log('response => ');
        console.log(response);

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
}

export async function refreshToken(){
    try{
        const response = await axios.post('/api/refreshtoken');

        const { cookies } = useCookies();
        cookies.set('token', response.data.token, '60s' );
        // axios.defaults.headers['Authorization'] = "Bearer " + cookies.get('token');

        return response.data.token;
    }catch(err){
        return err;
    }
}

export async function logoutForm(store){    
    const { cookies } = useCookies();

    cookies.remove('token');
    cookies.remove('refresh_token');
    console.log("token=" + cookies.get('token'));
    console.log("refresh_token=" + cookies.get('refresh_token'));

    store.commit("setLogined", false);

    console.log("Logout Completed");
}

