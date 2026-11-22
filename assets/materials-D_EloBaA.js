import{B as e,K as t,Tt as n,V as r,Y as i,at as a,b as o,d as s,g as c,lt as l,rt as u,st as d,wt as f}from"./three.module-Ba_H_EZ7.js";function p(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var m=e=>(e=Math.max(0,Math.min(255,e|0)),`rgb(${e},${e},${e})`);function h(e){let t=document.createElement(`canvas`);return t.width=t.height=e,t}function g(e,t){let n=[];return(function r(i,a,o,s,c){if(c>=5||o<t/8&&s<t/8||c>=3&&e()<.22){let t=e(),r=t<.5?`plain`:t<.62?`vent`:t<.74?`hatch`:t<.88?`glyph`:t<.93?`hazard`:`screws`;n.push({x:i,y:a,w:o,h:s,kind:r,tone:e()});return}let l=o>s*1.1?!0:s>o*1.1?!1:e()<.5,u=.36+e()*.28;l?(r(i,a,o*u,s,c+1),r(i+o*u,a,o*(1-u),s,c+1)):(r(i,a,o,s*u,c+1),r(i,a+s*u,o,s*(1-u),c+1))})(0,0,t,t,0),n}function _(e,t,n,r,i){e.lineWidth=Math.max(1.5,r*.1),e.lineCap=`round`;let a=i()*5|0;if(e.beginPath(),a===0)e.arc(t,n,r*.5,0,6.283),e.moveTo(t-r*.25,n),e.lineTo(t+r*.25,n);else if(a===1)for(let i=0;i<3;i++)e.moveTo(t-r*.45,n-r*.35+i*r*.3),e.lineTo(t,n-r*.55+i*r*.3),e.lineTo(t+r*.45,n-r*.35+i*r*.3);else if(a===2){for(let i=0;i<6;i++){let a=i/6*6.283;e[i?`lineTo`:`moveTo`](t+Math.cos(a)*r*.5,n+Math.sin(a)*r*.5)}e.closePath(),e.moveTo(t,n-r*.2),e.lineTo(t,n+r*.2)}else a===3?(e.arc(t,n,r*.5,.5,3.6),e.moveTo(t-r*.5,n+r*.5),e.lineTo(t+r*.5,n-r*.5)):(e.rect(t-r*.4,n-r*.4,r*.8,r*.8),e.moveTo(t-r*.4,n),e.lineTo(t,n+r*.4),e.lineTo(t+r*.4,n));e.stroke()}function v(e,t,n,r,i,a){for(let o=0;o<i;o++)_(e,t+o*r*1.25,n,r,a)}function y(e,t){for(let n=-e;n<=e;n+=e)for(let r=-e;r<=e;r+=e)t(n,r)}function b(e,t,n,r){e.fillStyle=m(128),e.fillRect(0,0,t,t);for(let t of n)e.fillStyle=m(128+(r()-.5)*12),e.fillRect(t.x,t.y,t.w,t.h);for(let t of n){e.strokeStyle=m(10),e.lineWidth=5,e.strokeRect(t.x,t.y,t.w,t.h),e.strokeStyle=m(200),e.lineWidth=1.8,e.strokeRect(t.x+4.5,t.y+4.5,t.w-9,t.h-9),e.fillStyle=m(225);for(let n=t.x+14;n<t.x+t.w-8;n+=34)e.beginPath(),e.arc(n,t.y+11,2.2,0,6.283),e.fill(),e.beginPath(),e.arc(n,t.y+t.h-11,2.2,0,6.283),e.fill();for(let n=t.y+14;n<t.y+t.h-8;n+=34)e.beginPath(),e.arc(t.x+11,n,2.2,0,6.283),e.fill(),e.beginPath(),e.arc(t.x+t.w-11,n,2.2,0,6.283),e.fill();if(t.kind===`vent`){e.fillStyle=m(25);let n=Math.max(3,(t.h-40)/12|0);for(let r=0;r<n;r++){let i=t.y+20+r*((t.h-40)/n);e.fillRect(t.x+20,i,t.w-40,5)}}else if(t.kind===`hatch`){e.strokeStyle=m(30),e.lineWidth=3,e.strokeRect(t.x+18,t.y+18,t.w-36,t.h-36),e.fillStyle=m(210),e.fillRect(t.x+t.w/2-14,t.y+t.h/2-3,28,6),e.fillStyle=m(30);for(let[n,r]of[[26,26],[t.w-26,26],[26,t.h-26],[t.w-26,t.h-26]])e.beginPath(),e.arc(t.x+n,t.y+r,4,0,6.283),e.fill()}else if(t.kind===`screws`)for(let[n,r]of[[.3,.3],[.7,.3],[.3,.7],[.7,.7]]){let i=t.x+t.w*n,a=t.y+t.h*r;e.fillStyle=m(200),e.beginPath(),e.arc(i,a,6,0,6.283),e.fill(),e.strokeStyle=m(40),e.lineWidth=2,e.beginPath(),e.moveTo(i-4,a),e.lineTo(i+4,a),e.stroke()}else t.kind===`glyph`&&(e.strokeStyle=m(70),v(e,t.x+t.w*.25,t.y+t.h*.5,Math.min(t.w,t.h)*.16,2,r))}e.lineCap=`round`;for(let n=0;n<150;n++){let n=r()*t,i=r()*t,a=r()*6.283,o=10+r()*70;e.strokeStyle=m(r()<.6?100:160),e.lineWidth=.6+r()*.8,y(t,(t,r)=>{e.beginPath(),e.moveTo(n+t,i+r),e.lineTo(n+t+Math.cos(a)*o,i+r+Math.sin(a)*o),e.stroke()})}}function x(e,t,n,r){e.fillStyle=m(150),e.fillRect(0,0,t,t);for(let t of n)e.fillStyle=m(130+t.tone*40),e.fillRect(t.x,t.y,t.w,t.h);for(let n=0;n<40;n++){let n=r()*t,i=r()*t,a=40+r()*120;y(t,(t,r)=>{let o=e.createRadialGradient(n+t,i+r,0,n+t,i+r,a);o.addColorStop(0,`rgba(255,255,255,0.18)`),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.fillRect(n+t-a,i+r-a,a*2,a*2)})}for(let n=0;n<110;n++){let n=r()*t,i=r()*t,a=40+r()*220;y(t,(t,o)=>{let s=e.createLinearGradient(0,i+o,0,i+o+a);s.addColorStop(0,`rgba(255,255,255,0)`),s.addColorStop(.25,`rgba(255,255,255,${.15+r()*.25})`),s.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=s,e.fillRect(n+t,i+o,2+r()*6,a)})}for(let t of n)e.strokeStyle=m(255),e.lineWidth=6,e.strokeRect(t.x,t.y,t.w,t.h),t.kind===`vent`&&(e.fillStyle=m(255),e.fillRect(t.x+18,t.y+18,t.w-36,t.h-36));e.lineCap=`round`;for(let n=0;n<150;n++){let n=r()*t,i=r()*t,a=r()*6.283,o=10+r()*70;e.strokeStyle=m(225),e.lineWidth=.7,y(t,(t,r)=>{e.beginPath(),e.moveTo(n+t,i+r),e.lineTo(n+t+Math.cos(a)*o,i+r+Math.sin(a)*o),e.stroke()})}}function S(e,t,n,r,i){let a=i===`ceramic`;e.fillStyle=a?`#eceeef`:`#fff`,e.fillRect(0,0,t,t);for(let t of n){if(a){let n=(t.tone-.5)*30;e.fillStyle=`rgb(${236+n},${238+n},${239+n*.7})`}else e.fillStyle=m(222+(t.tone-.5)*70);e.fillRect(t.x,t.y,t.w,t.h)}for(let n=0;n<130;n++){let n=r()*t,i=r()*t,a=30+r()*200;y(t,(t,o)=>{let s=e.createLinearGradient(0,i+o,0,i+o+a);s.addColorStop(0,`rgba(40,36,30,0.0)`),s.addColorStop(.3,`rgba(40,36,30,${.08+r()*.16})`),s.addColorStop(1,`rgba(40,36,30,0)`),e.fillStyle=s,e.fillRect(n+t,i+o,2+r()*5,a)})}for(let t of n){if(e.strokeStyle=a?`rgba(14,16,20,0.92)`:`rgba(0,0,0,0.85)`,e.lineWidth=5,e.strokeRect(t.x,t.y,t.w,t.h),a){if(t.kind===`glyph`)e.strokeStyle=`#ff6a1f`,v(e,t.x+t.w*.25,t.y+t.h*.5,Math.min(t.w,t.h)*.16,2,r),e.fillStyle=`#222a33`,e.fillRect(t.x+20,t.y+t.h-26,t.w*.4,6);else if(t.kind===`hazard`){e.save(),e.beginPath(),e.rect(t.x+16,t.y+16,t.w-32,t.h-32),e.clip();for(let n=-t.h;n<t.w+t.h;n+=26)e.fillStyle=`#ffb21f`,e.beginPath(),e.moveTo(t.x+n,t.y),e.lineTo(t.x+n+13,t.y),e.lineTo(t.x+n+13-t.h,t.y+t.h),e.lineTo(t.x+n-t.h,t.y+t.h),e.fill();e.restore()}else t.kind===`plain`&&t.tone>.8&&(e.fillStyle=`#ff6a1f`,e.fillRect(t.x+14,t.y+t.h*.5-5,t.w-28,10),e.fillStyle=`#1b2128`,e.fillRect(t.x+14,t.y+t.h*.5+8,t.w*.5,3))}else t.kind===`glyph`&&(e.strokeStyle=`rgba(255,255,255,0.45)`,v(e,t.x+t.w*.25,t.y+t.h*.5,Math.min(t.w,t.h)*.16,2,r));t.kind===`vent`&&(e.fillStyle=`rgba(0,0,0,0.55)`,e.fillRect(t.x+18,t.y+18,t.w-36,t.h-36))}}function C(e,t,n){let r=new Uint8Array(t*t*4);for(let i=0;i<t;i++){let a=(i-1+t)%t*t,o=i*t,s=(i+1)%t*t;for(let i=0;i<t;i++){let c=(i-1+t)%t,l=(e[o+(i+1)%t]-e[o+c])*n,u=(e[s+i]-e[a+i])*n,d=1/Math.sqrt(l*l+u*u+1),f=(o+i)*4;r[f]=(-l*d*.5+.5)*255,r[f+1]=(-u*d*.5+.5)*255,r[f+2]=(d*.5+.5)*255,r[f+3]=255}}return r}function w(e,t){let n=e.getContext(`2d`).getImageData(0,0,t,t).data,r=new Float32Array(t*t);for(let e=0;e<t*t;e++)r[e]=n[e*4]/255;return r}function T(t,n){return t.wrapS=t.wrapT=a,t.generateMipmaps=!0,t.minFilter=r,t.magFilter=e,t.anisotropy=4,t.flipY=!1,t.colorSpace=n?d:``,t.needsUpdate=!0,t}function E(e,t,n){return T(new o(e,t,t,u),n)}function D(e,t){return T(new s(e),t)}function O(e,t,n){let r=new Float32Array(t*t);for(let e=0;e<r.length;e++)r[e]=n();let i=new Float32Array(e*e),a=t/e;for(let n=0;n<e;n++)for(let o=0;o<e;o++){let s=o*a,c=n*a,l=Math.floor(s),u=Math.floor(c),d=s-l,f=c-u,p=d*d*(3-2*d),m=f*f*(3-2*f),h=(l+1)%t,g=(u+1)%t,_=l%t,v=u%t,y=r[v*t+_],b=r[v*t+h],x=r[g*t+_],S=r[g*t+h];i[n*e+o]=y+(b-y)*p+(x-y)*m+(y-b-x+S)*p*m}return i}function k(){let e=1024,t=p(1337),n={},r=g(t,e),i=h(e),a=h(e),o=h(e),s=h(e);b(i.getContext(`2d`),e,r,t),x(a.getContext(`2d`),e,r,t),S(o.getContext(`2d`),e,r,t,`ceramic`),S(s.getContext(`2d`),e,r,t,`dark`),n.panelN=E(C(w(i,e),e,9),e,!1),n.panelR=D(a,!1),n.ceramicMap=D(o,!0),n.darkMap=D(s,!0);let c=O(512,256,t),l=new Float32Array(262144);for(let e=0;e<512;e++){let t=e*512;for(let e=0;e<512;e++){let n=0;for(let r=-12;r<=12;r+=2)n+=c[t+(e+r+512)%512];l[t+e]=n/13}}let u=O(512,128,t);for(let e=0;e<262144;e++)l[e]=l[e]*.7+u[e]*.05;n.brushedN=E(C(l,512,4),512,!1);let d=new Uint8Array(1048576);for(let e=0;e<262144;e++){let t=150+l[e]*90;d[e*4]=d[e*4+1]=d[e*4+2]=t,d[e*4+3]=255}n.brushedR=E(d,512,!1);let f=new Float32Array(262144),m=new Uint8Array(1048576);for(let e=0;e<512;e++)for(let t=0;t<512;t++){let n=t/16|0,r=e/16|0,i=t%16/16,a=e%16/16,o=(n+r&3)<2,s=Math.sin(o?Math.PI*a:Math.PI*i),c=o?.5+.5*Math.sin(t*2.2)*.4:.5+.5*Math.sin(e*2.2)*.4,l=((n>>1)+(r>>1)&1)==+!o;f[e*512+t]=s**.6*(l?1:.8)+(c-.5)*.06;let u=22+s*40*(l?1:.7)+c*14,d=(e*512+t)*4;m[d]=u,m[d+1]=u,m[d+2]=u+3,m[d+3]=255}n.weaveN=E(C(f,512,2.2),512,!1),n.weaveMap=E(m,512,!0);let _=O(512,8,t),v=O(512,24,t),y=O(512,64,t),T=new Float32Array(262144);for(let e=0;e<262144;e++)T[e]=Math.abs(_[e]-.5)*1.4+Math.abs(v[e]-.5)*.6+y[e]*.12;n.foilN=E(C(T,512,9),512,!1);let k=new Uint8Array(1048576);for(let e=0;e<262144;e++){let t=120+T[e]*110;k[e*4]=k[e*4+1]=k[e*4+2]=t,k[e*4+3]=255}return n.foilR=E(k,512,!1),n}var A=null;function j(){if(A)return A;let e=k(),n=e=>new f(e,e),r={T:e};r.chrome=new i({color:15922424,metalness:1,roughness:.15,roughnessMap:e.panelR,normalMap:e.panelN,normalScale:n(.45),vertexColors:!0,envMapIntensity:1.15}),r.ceramic=new i({color:16777215,map:e.ceramicMap,metalness:0,roughness:.62,roughnessMap:e.panelR,normalMap:e.panelN,normalScale:n(1),vertexColors:!0,envMapIntensity:.9}),r.dark=new i({color:5990004,map:e.darkMap,metalness:.8,roughness:.42,roughnessMap:e.panelR,normalMap:e.panelN,normalScale:n(1.1),vertexColors:!0,envMapIntensity:1}),r.steel=new i({color:12896720,metalness:1,roughness:.5,roughnessMap:e.brushedR,normalMap:e.brushedN,normalScale:n(.6),vertexColors:!0,envMapIntensity:1}),r.gold=new i({color:14723386,metalness:1,roughness:.55,roughnessMap:e.foilR,normalMap:e.foilN,normalScale:n(.9),vertexColors:!0,envMapIntensity:1.1}),r.carbon=new i({color:16777215,map:e.weaveMap,metalness:.35,roughness:.38,normalMap:e.weaveN,normalScale:n(.8),vertexColors:!0,envMapIntensity:1});for(let t of[`panelN`,`panelR`,`ceramicMap`,`darkMap`])e[t].repeat.set(1.6,1.6);e.weaveMap.repeat.set(4,4),e.weaveN.repeat.set(4,4);for(let e of[`chrome`,`ceramic`,`dark`,`steel`,`gold`,`carbon`])r[e].name=`ships_`+e;return r.glow=new t({color:16777215,vertexColors:!0}),r.glow.name=`ships_glow`,r.plume=new l({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vC;
      attribute vec3 color;
      void main(){ vUv=uv; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalMatrix*normal; vV=-mv.xyz; gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vC;
      void main(){ float f=pow(abs(dot(normalize(vN),normalize(vV))),1.4); float fall=pow(1.0-vUv.y,1.6);
        float rip=0.92+0.08*sin(vUv.y*9.0-uTime*1.8);
        float a=f*fall*rip; vec3 c=mix(vC,vec3(0.72,0.93,1.0),fall*fall*0.45)*(0.3+0.85*fall);
        gl_FragColor=vec4(c*a*0.38,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),r.plume.vertexColors=!1,A=r,r}var M=`
uniform float levels[8]; uniform vec3 colA; uniform vec3 colB; varying vec2 vUv;
void main(){
  vec2 p = vUv;
  vec3 col = vec3(0.006,0.010,0.018) + vec3(0.0,0.03,0.04)*p.y;
  float cell = p.x*8.0; float i = floor(cell); float fx = fract(cell);
  float lv = levels[int(clamp(i,0.0,7.0))];
  float barMask = smoothstep(0.10,0.18,fx)*smoothstep(0.90,0.82,fx);
  float segs = 12.0; float sy = p.y*segs; float si = floor(sy); float fy = fract(sy);
  float segMask = smoothstep(0.10,0.22,fy)*smoothstep(0.90,0.78,fy);
  float on = 1.0 - step(lv*0.94+0.06, (si+0.5)/segs);
  vec3 c = mix(colA, colB, (si+0.5)/segs);
  col += c*0.05*barMask*segMask;
  col += c*on*barMask*segMask*1.35;
  col += c*0.10*lv*smoothstep(0.0,1.0,1.0-abs(p.y-0.5)*1.4)*(1.0-barMask*0.5);
  float e = smoothstep(0.0,0.06,p.x)*smoothstep(1.0,0.94,p.x)*smoothstep(0.0,0.08,p.y)*smoothstep(1.0,0.92,p.y);
  col *= 0.55+0.45*e;
  gl_FragColor = vec4(col,1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,N=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;function P(e=2156799,t=16726736){let n=new l({vertexShader:N,fragmentShader:M,uniforms:{levels:{value:new Float32Array(8)},colA:{value:new c(e)},colB:{value:new c(t)}}});return n.name=`ships_mouth`,n}function F(e){let t=new Float32Array(8),n=e.uniforms.levels.value,r=0,i=0;return{set(e){for(let n=0;n<8;n++)t[n]=e[n]||0;r=2},update(e){i+=e,r=Math.max(0,r-e);let a=Math.min(1,e*10);for(let e=0;e<8;e++){let o=.18+.12*Math.sin(i*1.3+e*.9)+.08*Math.sin(i*.7+e*2.1),s=r>0?t[e]:o;n[e]+=(s-n[e])*a}}}}function I(){let e=new l({uniforms:{levels:{value:new Float32Array(8)},uMood:{value:new n(1,0,0)},uMood2:{value:new f(0,0)},uBlink:{value:0},uLook:{value:new f},uTime:{value:0},colA:{value:new c(3205375)},colB:{value:new c(16732120)}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalMatrix*normal; vV=-mv.xyz; gl_Position=projectionMatrix*mv; }`,fragmentShader:`
    uniform float levels[8]; uniform vec3 uMood; uniform vec2 uMood2; uniform float uBlink; uniform vec2 uLook; uniform float uTime; uniform vec3 colA; uniform vec3 colB;
    varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    float ell(vec2 q, vec2 r){ return (length(q/r)-1.0)*min(r.x,r.y); }
    float arc(vec2 q, float R, float w){ return max(abs(length(q)-R)-w, -q.y-0.004); }
    float seg(vec2 p, vec2 a, vec2 b, float w){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h)-w; }
    void main(){
      vec2 p = (vUv-0.5)*vec2(1.5,1.0);
      vec3 col = vec3(0.004,0.008,0.016) + vec3(0.0,0.02,0.03)*(vUv.y);
      float bl = 1.0-uBlink*0.92;
      vec2 L = uLook*0.02;
      // eye SDFs per mood
      float dH=1e3,dA=1e3,dJ=1e3,dP=1e3,dW=1e3,brow=1e3;
      for(int s=0;s<2;s++){
        float sx = s==0?-1.0:1.0;
        vec2 q = p-vec2(sx*0.23,0.10)-L;
        float h = ell(q, vec2(0.085,0.105*bl));
        float a = max(abs(q.x)-0.055, abs(q.y)-0.135*bl) - 0.02;
        a = max(a, -(q.y*sx*0.0 - 0.0)); // keep rect
        // alert eyes slant
        a = max(abs(q.x*0.95+q.y*sx*0.25)-0.05, abs(q.y)-0.13*bl)-0.018;
        float j = (s==0) ? ell(q, vec2(0.085,0.105*bl)) : arc(vec2(q.x,-q.y-0.03), 0.085, 0.017);
        float pr = arc(vec2(q.x, q.y+0.035), 0.08, 0.019); // proud: content closed-eye arcs
        float w = ell(q+vec2(0.0,0.01), vec2(0.068,0.088*bl)); // worried: smaller eyes...
        float br = seg(q, vec2(sx*0.085,0.135), vec2(-sx*0.075,0.185), 0.011); // ...with sad, inner-raised brows
        dH=min(dH,h); dA=min(dA,a); dJ=min(dJ,j); dP=min(dP,pr); dW=min(dW,w); brow=min(brow,br);
      }
      float d = dH*uMood.x + dA*uMood.y + dJ*uMood.z + dP*uMood2.x + dW*uMood2.y;
      vec3 eyeCol = mix(colA, vec3(1.0,0.66,0.2), uMood.y);
      eyeCol = mix(eyeCol, vec3(1.0,0.84,0.36), uMood2.x*0.75);
      eyeCol = mix(eyeCol, vec3(0.55,0.72,1.0), uMood2.y*0.6);
      float eyeM = smoothstep(0.006,-0.004,d);
      float glow = exp(-max(d,0.0)*22.0)*0.35;
      col += eyeCol*(eyeM*1.25+glow);
      col += vec3(1.0)*eyeM*smoothstep(0.0,-0.05,d)*0.35;
      col += eyeCol*smoothstep(0.004,-0.004,brow)*uMood2.y*1.1;
      // proud: a soft four-point sparkle that breathes slowly (no flashing)
      { vec2 q = p-vec2(0.38,0.21); float sp = (exp(-abs(q.x)*90.0)*exp(-abs(q.y)*18.0) + exp(-abs(q.y)*90.0)*exp(-abs(q.x)*18.0));
        col += vec3(1.0,0.9,0.6)*sp*uMood2.x*(0.55+0.25*sin(uTime*1.9)); }
      // eye highlight
      for(int s=0;s<2;s++){ float sx=s==0?-1.0:1.0; vec2 q=p-vec2(sx*0.23-0.03,0.145)-L; col += vec3(0.8)*smoothstep(0.018,0.008,length(q))*eyeM*uMood.x; }
      // equalizer mouth: 8 centered bars along a smile
      float xs = p.x/0.055 + 3.5; float bi = floor(xs+0.5); float bx = (xs-bi)*0.055;
      if(bi>=0.0 && bi<8.0){
        float lv = levels[int(bi)];
        float cx = (bi-3.5)*0.055;
        float smile = (uMood.x*0.8+uMood.z*1.0+uMood2.x*1.25-uMood2.y*0.9)*cx*cx*5.0;
        float h = 0.010+0.055*lv*(1.0-uMood.y*0.4-uMood2.y*0.45);
        vec2 q = vec2(bx, p.y+0.215-smile);
        float bd = max(abs(q.x)-0.0105, abs(q.y)-h)-0.005;
        float bm = smoothstep(0.003,-0.003,bd);
        vec3 bc = mix(colA, colB, clamp(lv*1.1,0.0,1.0));
        col += bc*(bm*1.3 + exp(-max(bd,0.0)*38.0)*0.25);
      }
      // screen glass: subtle scanlines + edge falloff + fresnel sheen
      col *= 0.94+0.06*sin(vUv.y*220.0);
      float f = pow(1.0-abs(dot(normalize(vN),normalize(vV))),3.0);
      col += vec3(0.05,0.08,0.12)*f;
      col *= smoothstep(0.0,0.07,vUv.x)*smoothstep(1.0,0.93,vUv.x)*smoothstep(0.0,0.08,vUv.y)*smoothstep(1.0,0.92,vUv.y)*0.6+0.4;
      gl_FragColor = vec4(col,1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`});return e.name=`ships_face`,e}export{I as createFaceMaterial,P as createMouthMaterial,j as getMaterials,F as makeMouth,p as t};