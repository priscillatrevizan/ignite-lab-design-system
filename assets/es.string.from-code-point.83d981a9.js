var f=Object.defineProperty;var a=(t,e)=>f(t,"name",{value:e,configurable:!0});import{p as s,D as g,af as m}from"./iframe.c2d236be.js";var u=s,C=g,x=m,h=RangeError,i=String.fromCharCode,v=String.fromCodePoint,l=C([].join),c=!!v&&v.length!=1;u({target:"String",stat:!0,arity:1,forced:c},{fromCodePoint:a(function(e){for(var n=[],d=arguments.length,o=0,r;d>o;){if(r=+arguments[o++],x(r,1114111)!==r)throw h(r+" is not a valid code point");n[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return l(n,"")},"fromCodePoint")});
//# sourceMappingURL=es.string.from-code-point.83d981a9.js.map
