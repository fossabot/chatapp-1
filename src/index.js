import {Router} from '@vaadin/router';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
	{
		path: '/',
		component: 'app-test',
		action: ()=>import('js/app-test.js')
	}
]);
import "js/app-header.js"
import "js/app-sidebar.js"
import "js/app-footer.js"

import 'css/bootstrap.min.css'
import 'css/style.css'

import Connection from "js/Connection.js"
import Authentication from "js/Authentication"
import Register from "js/Register.js";
import Encryption from "js/Encryption.js";
import Sign from "js/Sign.js";

import User from "js/User.js";
import CustomStorage from "js/CustomStorage.js";

window.encryption=new Encryption();
window.sign=new Sign();
Promise.all([window.encryption.load(),window.sign.load()])
.then(()=>new Register(window.encryption,window.sign)).then(()=>{
	window.connection=new Connection(window.encryption);
	window.authentication=new Authentication(connection,sign)
	window.me=new User((new CustomStorage('userId')).value,"me",window.encryption._public)
})
