module.exports=function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";function a(){var e=$.extend(!0,{},quasar.data.manifest.pages);return delete e.index,e}var i=n(62);e.exports={template:i,data:{pages:a()},methods:{navigateTo:function(e){quasar.navigate.to.route("#/"+e)},toggleTheme:function(){quasar.swap.theme()}},ready:function(){quasar.current.layout.vm.$data.title="Framework"}}},62:function(e,t){e.exports='<p>\n  <button class="primary" @click="toggleTheme()">Toggle Theme</button>\n</p>\n<div class="list bordered inner-delimiter highlight">\n  <div class="item" v-for="page in pages">\n    <i>{{page.icon}}</i>\n    <div class="item-content cursor-pointer" @click="navigateTo(page.name)">\n      <div class="item-label">{{page.label}}</div>\n      <i>chevron_right</i>\n    </div>\n  </div>\n</div>\n'}});