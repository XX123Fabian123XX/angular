(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(n,t,i){"use strict";i.r(t);var o=i("QJY3"),e=i("DUip"),r=i("PCNd"),s=i("qXBG"),c=i("TYT/"),a=function(){function n(){this.close=new c.n}return n.prototype.onClose=function(){this.close.emit()},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Db({type:n,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(n,t){1&n&&(c.Mb(0,"div",0),c.Ub("click",(function(){return t.onClose()})),c.Lb(),c.Mb(1,"div",1),c.Mb(2,"p"),c.gc(3),c.Lb(),c.Mb(4,"div",2),c.Mb(5,"button",3),c.Ub("click",(function(){return t.onClose()})),c.gc(6,"Close"),c.Lb(),c.Lb(),c.Lb()),2&n&&(c.zb(3),c.hc(t.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rbga(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),n}(),b=function(){function n(n){this.viewContainerRef=n}return n.\u0275fac=function(t){return new(t||n)(c.Jb(c.N))},n.\u0275dir=c.Eb({type:n,selectors:[["","appPlaceholder",""]]}),n}(),l=i("Valr"),d=function(){function n(){}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Db({type:n,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(n,t){1&n&&(c.Mb(0,"div",0),c.Kb(1,"div"),c.Kb(2,"div"),c.Kb(3,"div"),c.Kb(4,"div"),c.Lb())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#2102cf}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),n}();function u(n,t){}function p(n,t){1&n&&(c.Mb(0,"div",5),c.Kb(1,"app-loading-spinner"),c.Lb())}function g(n,t){if(1&n){var i=c.Nb();c.Mb(0,"form",6,7),c.Ub("ngSubmit",(function(){c.cc(i);var n=c.bc(1);return c.Wb().onSubmit(n)})),c.Mb(2,"div",8),c.Mb(3,"label",9),c.gc(4,"E-Mail"),c.Lb(),c.Kb(5,"input",10),c.Lb(),c.Mb(6,"div",8),c.Mb(7,"label",11),c.gc(8,"Password"),c.Lb(),c.Kb(9,"input",12),c.Lb(),c.Mb(10,"div"),c.Mb(11,"button",13),c.gc(12),c.Lb(),c.gc(13," | "),c.Mb(14,"button",14),c.Ub("click",(function(){return c.cc(i),c.Wb().onSwitchMode()})),c.gc(15),c.Lb(),c.Lb(),c.Lb()}if(2&n){var o=c.bc(1),e=c.Wb();c.zb(11),c.Xb("disabled",!o.valid),c.zb(1),c.ic(" ",e.isLoginMode?"Login":"Sign Up"," "),c.zb(3),c.ic(" Switch to ",e.isLoginMode?"Sign Up":"Login"," ")}}var f=function(){function n(n,t,i){this.authService=n,this.router=t,this.componentFactoryResolver=i,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return n.prototype.onSwitchMode=function(){this.isLoginMode=!this.isLoginMode},n.prototype.onSubmit=function(n){var t=this;if(n.valid){var i=n.value.email,o=n.value.password;this.isLoading=!0,(this.isLoginMode?this.authService.login(i,o):this.authService.signup(i,o)).subscribe((function(n){t.isLoading=!1,t.router.navigate(["/recipes"])}),(function(n){t.error=n,t.showErrorAlert(n),t.isLoading=!1})),n.reset()}},n.prototype.onHandleError=function(){this.error=null},n.prototype.ngOnDestroy=function(){this.closeSub&&this.closeSub.unsubscribe()},n.prototype.showErrorAlert=function(n){var t=this,i=this.componentFactoryResolver.resolveComponentFactory(a),o=this.alertHost.viewContainerRef;o.clear();var e=o.createComponent(i);e.instance.message=n,this.closeSub=e.instance.close.subscribe((function(){t.closeSub.unsubscribe(),o.clear()}))},n.\u0275fac=function(t){return new(t||n)(c.Jb(s.a),c.Jb(e.c),c.Jb(c.j))},n.\u0275cmp=c.Db({type:n,selectors:[["app-auth"]],viewQuery:function(n,t){var i;1&n&&c.kc(b,!0),2&n&&c.ac(i=c.Vb())&&(t.alertHost=i.first)},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,t){1&n&&(c.fc(0,u,0,0,"ng-template",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.fc(3,p,2,0,"div",3),c.fc(4,g,16,3,"form",4),c.Lb(),c.Lb()),2&n&&(c.zb(3),c.Xb("ngIf",t.isLoading),c.zb(1),c.Xb("ngIf",!t.isLoading))},directives:[b,l.i,d,o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.b,o.k],encapsulation:2}),n}();i.d(t,"AuthModule",(function(){return m}));var m=function(){function n(){}return n.\u0275mod=c.Hb({type:n}),n.\u0275inj=c.Gb({factory:function(t){return new(t||n)},imports:[[r.a,o.j,e.f.forChild([{path:"",component:f}])]]}),n}()}}]);