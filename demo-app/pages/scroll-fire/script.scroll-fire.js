module.exports=function(e){function t(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}({0:function(e,t,i){e.exports=i(104)},104:function(e,t,i){"use strict";var a=i(105);e.exports={template:a,data:{loremipsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},methods:{bounceImage:function(e){e.velocity("callout.tada",{display:null,stagger:200})}},ready:function(){quasar.current.layout.vm.$data.title="Scroll Fire"}}},105:function(e,t){e.exports='<p class="caption">Please scroll down to see the image and Scroll Fire being called with a nice Velocity effect.</p>\n  <p v-for="n in 6" class="par-text">{{loremipsum}}</p>\n\n  <p class="caption">Scroll Fire below. Reload page to see the effect again.</p>\n  <p class="text-center">\n    <img v-scroll-fire="bounceImage" src="assets/quasar.jpg" style="width: 200px">\n  </p>\n\n  <p v-for="n in 3" class="par-text">{{loremipsum}}</p>\n</div>\n'}});