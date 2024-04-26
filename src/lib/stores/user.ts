import { writable } from 'svelte/store';

const user = 'mail'
const pass = '123'


export const getUserDetails = async ( username: string, password: string ) => {
	if ( username === user && password === pass ){
		return 1;
    } else { 
        return 0;
    }
}

