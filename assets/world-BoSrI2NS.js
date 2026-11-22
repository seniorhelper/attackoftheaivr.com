import{$ as e,A as t,B as n,Ct as r,Dt as i,F as a,G as o,H as s,M as c,N as l,P as u,T as d,Tt as f,V as p,W as m,Y as h,_ as g,_t as _,at as v,b as y,c as b,ct as x,g as S,gt as C,h as w,k as T,lt as E,nt as D,ot as O,r as k,rt as A,s as j,st as M,t as N,u as P,v as F,w as ee,wt as I,x as te,y as L}from"./three.module-Ba_H_EZ7.js";import{n as R,t as z}from"./BufferGeometryUtils-SE6NdQ2W.js";var B=`
float sq(float x){ return x*x; }
vec3 hash33(vec3 p3){ p3 = fract(p3*vec3(.1031,.1030,.0973)); p3 += dot(p3,p3.yxz+33.33); return -1.+2.*fract((p3.xxy+p3.yxx)*p3.zyx); }
float hash13(vec3 p3){ p3 = fract(p3*.1031); p3 += dot(p3,p3.zyx+31.32); return fract((p3.x+p3.y)*p3.z); }
float hash11(float p){ p = fract(p*.1031); p *= p+33.33; p *= p+p; return fract(p); }
float gnoise(vec3 p){
  vec3 i=floor(p), f=fract(p); vec3 u=f*f*f*(f*(f*6.-15.)+10.);
  float a=dot(hash33(i),f), b=dot(hash33(i+vec3(1,0,0)),f-vec3(1,0,0));
  float c=dot(hash33(i+vec3(0,1,0)),f-vec3(0,1,0)), d=dot(hash33(i+vec3(1,1,0)),f-vec3(1,1,0));
  float e=dot(hash33(i+vec3(0,0,1)),f-vec3(0,0,1)), g=dot(hash33(i+vec3(1,0,1)),f-vec3(1,0,1));
  float h=dot(hash33(i+vec3(0,1,1)),f-vec3(0,1,1)), k=dot(hash33(i+vec3(1,1,1)),f-vec3(1,1,1));
  return mix(mix(mix(a,b,u.x),mix(c,d,u.x),u.y), mix(mix(e,g,u.x),mix(h,k,u.x),u.y), u.z);
}
float fbm(vec3 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*gnoise(p); p=p*2.02+vec3(17.1,3.7,9.2); a*=.5; } return .5+.9*s; }
float fbm3(vec3 p){ float s=0., a=.5; for(int i=0;i<3;i++){ s+=a*gnoise(p); p=p*2.02+vec3(17.1,3.7,9.2); a*=.5; } return .5+.9*s; }
`,V=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`;function H(e,t,n){let r=Math.cos(t);return n.set(r*Math.cos(e),Math.sin(t),-r*Math.sin(e)),n}var U=Math.PI/180;function ne(e,t){e=Math.max(-.4,Math.min(2,e));let n=4600*(1/(.92*e+1.7)+1/(.92*e+.62))/100,r,i,a;n<=66?(r=255,i=99.4708025861*Math.log(n)-161.1195681661):(r=329.698727446*(n-60)**-.1332047592,i=288.1221695283*(n-60)**-.0755148492),a=n>=66?255:n<=19?0:138.5177312231*Math.log(n-10)-305.0447927307,r=Math.min(255,Math.max(0,r))/255,i=Math.min(255,Math.max(0,i))/255,a=Math.min(255,Math.max(0,a))/255;let o=e=>e**2.2;r=o(r),i=o(i),a=o(a);let s=Math.max(r,i,a);r/=s,i/=s,a/=s;let c=.3;return t[0]=r+(1-r)*c,t[1]=i+(1-i)*c,t[2]=a+(1-a)*c,t}function W(e){let t=e>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var G=`
float ign(vec2 p){ return fract(52.9829189*fract(dot(p,vec2(0.06711056,0.00583715)))); }
uniform float uNoDither;
vec3 ditherOut(vec3 c){ if (uNoDither > .5) return c; float m = smoothstep(0.,0.01,max(c.r,max(c.g,c.b))); return c + ((ign(gl_FragCoord.xy)+ign(gl_FragCoord.xy+vec2(5.3,2.1))-1.)/255.)*m; }
`;function K(e,t,i,{format:a=A,type:s=r,uniforms:c={},pre:l=``}={}){let u=new k(t,{format:a,type:s,generateMipmaps:!0,minFilter:p,magFilter:n}),d=new E({uniforms:c,side:1,depthTest:!1,depthWrite:!1,vertexShader:V,fragmentShader:`precision highp float; varying vec3 vDir;\n${l}\nvoid main(){\n${i}\n}`}),f=new x,m=new o(new j(2,2,2),d);m.frustumCulled=!1,f.add(m);let h=new F(.1,10,u),g=e.xr.enabled;e.xr.enabled=!1;let _=e.getRenderTarget();return h.update(e,f),e.setRenderTarget(_),e.xr.enabled=g,d.dispose(),m.geometry.dispose(),u.texture}var re=3e3;function ie(){let e=H(192.85948*U,27.12825*U,new f),t=H(266.40499*U,-28.93617*U,new f),n=t.clone().addScaledVector(e,-t.dot(e)).normalize();return{X:n,Y:new f().crossVectors(e,n).normalize(),Z:e}}function ae(e,t){let n=ie();return K(e,t,`
    vec3 d = normalize(vDir);
    float b = asin(clamp(dot(d,uGZ),-1.,1.));
    float l = atan(dot(d,uGY), dot(d,uGX));
    float gcAng = acos(clamp(dot(d,uGX),-1.,1.));
    float n1 = fbm(d*4.0+vec3(1.3));
    float n2 = fbm(d*11.0+vec3(7.7));
    float n3 = fbm(d*27.0+vec3(3.1));
    float warp = (fbm(d*2.5+vec3(9.0))-.5)*.16;
    float bw = b + warp;
    float wl = abs(l);
    float thin = exp(-sq(bw/.11));
    float wide = exp(-sq(bw/.34));
    float lon = .30 + .70*exp(-wl*wl/(2.*.95*.95));
    float bulge = exp(-sq(gcAng/.32));
    float clumps = .35 + 1.25*smoothstep(.30,.78,n1);
    float fine = .65 + .7*n3;
    float I = (.75*thin*clumps*lon*fine + .32*wide*lon*(.55+.9*n1)) + .85*bulge*(.7+.6*n2);
    // dust lanes + dark clouds (strongest toward the center)
    float lane = exp(-sq((bw-.012+.035*(n1-.5))/(.045+.03*n2)));
    float dustAmt = .30 + .70*exp(-wl*wl/(2.*1.15*1.15));
    float pch = smoothstep(.46,.86,fbm(d*9.0+vec3(warp*18.,2.,5.)));
    float patch2 = smoothstep(.50,.90,fbm(d*22.0+vec3(4.,8.,1.)));
    float dust = clamp(lane*dustAmt*(.35+.6*n2) + pch*(thin*.6+wide*.18)*dustAmt + patch2*thin*.18, 0., .78);
    dust = dust*dust*(3.-2.*dust);
    I *= 1. - dust;
    vec3 warm = vec3(1.,.80,.55), cool = vec3(.60,.72,1.);
    vec3 col = mix(cool, warm, clamp(.20 + .9*(bulge + .55*exp(-wl*wl/(2.*.7*.7))), 0., 1.));
    float hii = smoothstep(.62,.82,fbm(d*16.0+vec3(11.,3.,6.)))*thin*.5;
    col = mix(col, vec3(1.,.42,.55), hii*.55);
    vec3 c = col*I*.105;
    c += vec3(.0022,.0034,.0075)*(.6+.8*n1);       // faint sky glow, keeps blacks from crushing
    vec3 e = sqrt(clamp(c/.5,0.,1.));
    gl_FragColor = vec4(e,1.);`,{pre:B+`uniform vec3 uGX,uGY,uGZ;`,uniforms:{uGX:{value:n.X},uGY:{value:n.Y},uGZ:{value:n.Z}}})}var oe=`
vec3 aberrate(vec3 d, vec3 T, float beta, float sgn){
  float ct = clamp(dot(d,T),-1.,1.);
  float co = clamp((ct + sgn*beta)/(1. + sgn*beta*ct), -1., 1.);
  vec3 p = d - ct*T; float pl = length(p);
  p = pl > 1e-5 ? p/pl : vec3(0.);
  return co*T + sqrt(1.-co*co)*p;
}`;function se({renderer:e,mwTex:t,stars:n,dsos:r,quality:i}){let a=new T;a.name=`sky`;let s={uPx:{value:9e-4},uRes:{value:new I(1280,800)},uWarp:{value:0},uBeta:{value:0},uTravel:{value:new f(0,0,-1)},uNoDither:{value:0},uGain:{value:1}},c=new E({uniforms:{tMW:{value:t},uWarp:s.uWarp,uBeta:s.uBeta,uTravel:s.uTravel,uNoDither:s.uNoDither,uGain:s.uGain},side:1,depthTest:!1,depthWrite:!1,dithering:!0,vertexShader:`varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.); p.z = p.w*0.99999; gl_Position = p; }`,fragmentShader:`precision highp float; varying vec3 vDir; uniform samplerCube tMW; uniform float uWarp,uBeta,uGain; uniform vec3 uTravel;
      ${oe}${G}
      void main(){
        vec3 d = normalize(vDir), ds = d;
        if (uWarp > 0.001) ds = aberrate(d, uTravel, uBeta, -1.);
        vec3 e = texture(tMW, ds).rgb; vec3 c = e*e*.5*uGain;
        float th = acos(clamp(dot(d,uTravel),-1.,1.));
        float g = uWarp*(exp(-th*th/(2.*.16*.16))*.10 + exp(-th*th/(2.*.65*.65))*.035);
        c += g*vec3(.28,.48,1.);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),d=new o(new j(2,2,2),c);d.scale.setScalar(re),d.frustumCulled=!1,d.renderOrder=-100,d.name=`milkyway`,a.add(d);let p=n.count,m=new u;m.setAttribute(`position`,new b(new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),3)),m.setIndex([0,1,2,2,1,3]),m.setAttribute(`aDir`,new l(n.dir,3)),m.setAttribute(`aCol`,new l(n.col,3)),m.setAttribute(`aMag`,new l(n.mag,1)),m.instanceCount=p;let h=new E({uniforms:{uNoDither:s.uNoDither,uW:s.uWarp,uRes:s.uRes,uWarp:s.uWarp,uBeta:s.uBeta,uTravel:s.uTravel,uR:{value:re}},transparent:!1,blending:2,depthTest:!1,depthWrite:!1,side:2,vertexShader:`
      attribute vec3 aDir; attribute vec3 aCol; attribute float aMag;
      uniform vec2 uRes; uniform float uWarp,uBeta,uR; uniform vec3 uTravel;
      varying vec2 vLocal; varying float vHalfLen, vHalfPx, vFlux, vSig; varying vec3 vCol; varying float vLenPx;
      vec3 perp(vec3 d){ return abs(d.y) > .95 ? normalize(cross(vec3(1.,0.,0.), d)) : normalize(cross(vec3(0.,1.,0.), d)); }
      vec3 toPx(vec3 dir, out float ok){
        vec4 c = projectionMatrix*modelViewMatrix*vec4(dir*uR,1.);
        ok = c.w > 1e-3 ? 1. : 0.;
        return vec3(c.xy/max(c.w,1e-3)*.5*uRes, 0.);
      }
      void main(){
        vec3 d = aDir;
        float flux = .5*pow(10., -.4*(aMag-6.5));
        flux *= 1. + .8*uWarp;
        flux *= 1. - .75*uWarp*smoothstep(4.5,7.5,aMag);
        flux *= 1. - .62*smoothstep(5.6,7.4,aMag); // faintest stars: dimmer, so constellations read clearly
        float sig = .9;
        float sigS = sig;
        float halfPx = 3.5*sig + 1.7*sqrt(flux);
        vec3 head = d, tail = d, col = aCol; float fade = 1.;
        if (uWarp > .0005) {
          vec3 T = uTravel;
          float ct = clamp(dot(d,T),-1.,1.); float st = sqrt(max(1.-ct*ct,0.));
          float cth = (ct+uBeta)/(1.+uBeta*ct); float sth = sqrt(max(1.-cth*cth,0.));
          vec3 p = st > 1e-4 ? (d-ct*T)/st : perp(T);
          head = cth*T + sth*p;
          float thh = atan(sth,cth);
          float lenAng = 0.55*uWarp*uWarp*(.15 + sin(thh));
          float tht = max(thh - lenAng, 0.);
          tail = cos(tht)*T + sin(tht)*p;
          float k = smoothstep(-.7,.7,cth);
          vec3 tint = mix(vec3(1.,.55,.38), vec3(.55,.75,1.), k);
          col = mix(aCol, tint*(.6+.4*max(aCol.r,max(aCol.g,aCol.b))), uWarp*.65);
          col *= 1. - .3*uWarp*k;
          fade = 1. - .8*uWarp*smoothstep(1.25,2.4,thh);
        }
        float ok1, ok2;
        vec3 pa = toPx(tail, ok1), pb = toPx(head, ok2);
        vec2 seg = pb.xy - pa.xy; float len = length(seg);
        vec2 al = len > 1e-3 ? seg/len : vec2(1.,0.);
        vec2 w2 = vec2(-al.y, al.x);
        vec2 c = position.xy;
        vec2 mid = .5*(pa.xy+pb.xy);
        vec2 pp = mid + al*(c.x*(.5*len + halfPx)) + w2*(c.y*halfPx);
        vLocal = vec2(c.x*(.5*len + halfPx), c.y*halfPx);
        vHalfLen = .5*len; vHalfPx = halfPx; vFlux = flux*fade; vSig = sig; vCol = col; vLenPx = len;
        if (ok1*ok2 < .5) gl_Position = vec4(2.,2.,2.,1.);
        else gl_Position = vec4(pp/(.5*uRes), .99999, 1.);
      }`,fragmentShader:`
      precision highp float; uniform float uW; varying vec2 vLocal; varying float vHalfLen, vHalfPx, vFlux, vSig, vLenPx; varying vec3 vCol;
      ${G}
      void main(){
        float ax = max(abs(vLocal.x) - vHalfLen, 0.);
        float r = length(vec2(ax, vLocal.y));
        float win = 1. - smoothstep(.55*vHalfPx, vHalfPx, r);
        if (win <= 0.) discard;
        float sig = vSig;
        float norm = 6.2832*sig*sig + 1.5*vLenPx*sig;
        float peak = vFlux/norm;
        float core = peak*exp(-r*r/(2.*sig*sig));
        float halo = .012*vFlux*pow(1. + r*r/4.84, -1.5)*(1. - .85*uW);
        float t = clamp((vLocal.x + vHalfLen)/(2.*max(vHalfLen,1e-4)), 0., 1.);
        float tf = mix(1., pow(t,1.5), smoothstep(.5, 6., vLenPx));
        float I = (core + halo)*win*tf;
        vec3 c = vCol*I;
        c = 1. - exp(-c);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),g=new o(m,h);g.frustumCulled=!1,g.renderOrder=-99,g.name=`stars`;let _=new I;g.onBeforeRender=(e,t,n)=>{s.bakeRes?s.uRes.value.set(s.bakeRes,s.bakeRes):n.viewport?s.uRes.value.set(n.viewport.z,n.viewport.w):(e.getDrawingBufferSize(_),s.uRes.value.copy(_));let r=2/(n.projectionMatrix.elements[5]*Math.max(s.uRes.value.y,1));s.uPx.value=Math.min(.003,Math.max(3e-4,r))},a.add(g);function v(e,t=`stars2`){let n=new u;n.setAttribute(`position`,m.getAttribute(`position`)),n.setIndex(m.getIndex()),n.setAttribute(`aDir`,new l(e.dir,3)),n.setAttribute(`aCol`,new l(e.col,3)),n.setAttribute(`aMag`,new l(e.mag,1)),n.instanceCount=e.count;let r=new o(n,h);return r.frustumCulled=!1,r.renderOrder=-99,r.name=t,r.onBeforeRender=g.onBeforeRender,r}let y=null;if(r.count){let e=new u;e.setAttribute(`position`,m.getAttribute(`position`)),e.setIndex(m.getIndex()),e.setAttribute(`aDir`,new l(r.dir,3)),e.setAttribute(`aInfo`,new l(r.info,4)),e.setAttribute(`aCol`,new l(r.col,4)),e.instanceCount=r.count;let t=new E({uniforms:{uNoDither:s.uNoDither,uPx:s.uPx,uWarp:s.uWarp,uR:{value:re}},transparent:!1,blending:2,depthTest:!1,depthWrite:!1,side:2,vertexShader:`
        attribute vec3 aDir; attribute vec4 aInfo; attribute vec4 aCol;
        uniform float uPx,uR,uWarp; varying vec2 vUv; varying vec4 vInfo; varying vec4 vCol; varying float vPx;
        void main(){
          vec3 d = aDir;
          vec3 rt = abs(d.y) > .95 ? normalize(cross(vec3(1.,0.,0.), d)) : normalize(cross(vec3(0.,1.,0.), d));
          vec3 up = cross(d, rt);
          float S = max(aInfo.x, 6.*uPx);
          vec3 P = normalize(d + (rt*position.x + up*position.y)*S)*uR;
          vUv = position.xy; vInfo = aInfo; vCol = aCol; vInfo.y *= 1. - smoothstep(0.,.35,uWarp);
          vInfo.x = S/ (max(aInfo.x,1e-6)); // size boost factor (>=1 for sub-6px objects)
          vec4 q = projectionMatrix*modelViewMatrix*vec4(P,1.); q.z = q.w*.99999; gl_Position = q;
        }`,fragmentShader:`precision highp float; varying vec2 vUv; varying vec4 vInfo; varying vec4 vCol;
        ${B}${G}
        void main(){
          float ang = vInfo.w; float cs = cos(ang), sn = sin(ang);
          vec2 u = vec2(cs*vUv.x - sn*vUv.y, sn*vUv.x + cs*vUv.y);
          float r0 = length(vUv);
          float win = 1. - smoothstep(.55, 1., r0);
          if (win <= 0. || vInfo.y <= 0.) discard;
          float ty = vInfo.z; float I = 0.;
          if (ty < .5) { vec2 q = vec2(u.x, u.y/max(vCol.a,.15)); float r = length(q); I = (exp(-r*5.5)*.8 + exp(-r*r*55.)*1.4); }
          else if (ty < 1.5) { float r = r0; I = pow(1. + r*r*90., -1.15); }
          else if (ty < 2.5) { float r = r0; I = exp(-r*r*5.)*.55; }
          else if (ty < 3.5) { float r = r0; I = exp(-sq((r-.30)/.20))*.8 + exp(-r*r*25.)*.7; }
          else { float r = r0; float n = fbm3(vec3(u*2.6, vInfo.w*7.)); float n2 = fbm3(vec3(u*6.5+3., vInfo.w*3.)); I = exp(-r*r*2.4)*(.25 + 1.0*n)*(.65+.7*n2); }
          vec3 c = vCol.rgb*I*win*vInfo.y;
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>
          gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
        }`});y=new o(e,t),y.frustumCulled=!1,y.renderOrder=-98,y.name=`dso`,a.add(y)}return{group:a,shared:s,skyMesh:d,starMesh:g,dsoMesh:y,makeStarMesh:v,skyMat:c,dispose(){c.dispose(),h.dispose(),m.dispose()}}}async function ce(e,t){let[n,r,i]=await Promise.all([fetch(e+`data/stars.bin`).then(e=>e.arrayBuffer()),fetch(e+`data/starnames.json`).then(e=>e.json()),fetch(e+`data/dso.json`).then(e=>e.json())]),a=new Float32Array(n),o=a.length/4,c=t===`low`?0:t===`medium`?5e3:11e3,l=o+c,u=new Float32Array(l*3),d=new Float32Array(l*3),p=new Float32Array(l),m=new f,h=[0,0,0];for(let e=0;e<o;e++)H(a[e*4],a[e*4+1],m),u[e*3]=m.x,u[e*3+1]=m.y,u[e*3+2]=m.z,p[e]=a[e*4+2],ne(a[e*4+3],h),d[e*3]=h[0],d[e*3+1]=h[1],d[e*3+2]=h[2];let g=ie(),_=W(90210),v=o,y=0;for(;v<l&&y++<c*60;){m.set(_()*2-1,_()*2-1,_()*2-1);let e=m.length();if(e>1||e<.05)continue;m.divideScalar(e);let t=Math.asin(s.clamp(m.dot(g.Z),-1,1)),n=Math.acos(s.clamp(m.dot(g.X),-1,1)),r=.06+Math.exp(-(t*t)/.0512)*(.35+.9*Math.exp(-(n*n)/(2.2*1.1)));_()>r||(u[v*3]=m.x,u[v*3+1]=m.y,u[v*3+2]=m.z,p[v]=7.2+2.4*_()**.8,ne(.1+_()*1.3,h),d[v*3]=h[0],d[v*3+1]=h[1],d[v*3+2]=h[2],v++)}let b={count:v,dir:u,col:d,mag:p,realCount:o},x=[];for(let e of Object.keys(r)){let t=+e;t>=o||x.push({i:t,dx:u[t*3],dy:u[t*3+1],dz:u[t*3+2],info:r[e],mag:p[t]})}let S=[],C={Gxy:[1,.88,.72],GC:[1,.9,.72],OC:[.72,.82,1],PN:[.35,1,.85],DN:[0,0,0]},w={Gxy:0,GC:1,OC:2,PN:3};for(let e of i){let[t,n,r,i,a,o]=e;if(i===`DN`||i===`OC`&&r>4.8||i===`GC`&&r>6.5||i===`PN`&&r>8.6)continue;let s=o/60,c=Math.min(.22,Math.max(.015,.35*10**(-.2*(r-3.6))*(.5/Math.max(s,.2))**.5));i===`OC`&&(c*=.45),i===`PN`&&(c=.05),S.push({ra:t,dec:n,name:a,t:i,size:Math.min(s,7)*U*.6*1,amp:c*.55,type:w[i],col:C[i],axis:.35+.5*(a.length*37%10)/10})}for(let[e,t,n,r,i,a]of[[`Orion Nebula`,5.588,-5.39,1.3,.16,[1,.45,.6]],[`Carina Nebula`,10.75,-59.87,2.2,.15,[1,.5,.55]],[`Lagoon Nebula`,18.063,-24.38,1.1,.12,[1,.5,.6]],[`Trifid Nebula`,18.04,-23.03,.5,.09,[1,.5,.7]],[`Eagle Nebula`,18.313,-13.8,.7,.09,[1,.5,.55]],[`Omega Nebula`,18.347,-16.17,.5,.09,[1,.5,.6]],[`Rosette Nebula`,6.52,4.95,1.6,.07,[1,.4,.5]],[`North America Nebula`,20.98,44.3,2,.06,[1,.4,.5]],[`Veil Nebula`,20.85,30.7,2.6,.05,[.55,.7,1]],[`California Nebula`,4.02,36.4,2.5,.04,[1,.35,.4]],[`Heart Nebula`,2.55,61.4,2,.035,[1,.4,.5]],[`Cat's Paw Nebula`,17.33,-36,1,.07,[1,.4,.5]]])S.push({ra:t*15*U,dec:n*U,name:e,t:`EN`,size:r*U*.6,amp:i,type:4,col:a,axis:1});let T=S.length,E=new Float32Array(T*3),D=new Float32Array(T*4),O=new Float32Array(T*4),k=[];return S.forEach((e,t)=>{H(e.ra,e.dec,m),E.set([m.x,m.y,m.z],t*3),D.set([e.size,e.amp,e.type,(e.name.charCodeAt(0)*7+e.name.length*13)%628/100],t*4),O.set([e.col[0],e.col[1],e.col[2],e.axis],t*4),k.push({name:e.name,t:e.t,x:m.x,y:m.y,z:m.z,size:e.size})}),{stars:b,named:x,dsos:{count:T,dir:E,info:D,col:O},dsoNamed:k}}var q={value:1},le=`varying vec3 vNW; varying vec3 vPW; varying vec3 vObj; varying vec2 vUv;
void commonVert(){ vObj = position; vUv = uv; vNW = normalize(mat3(modelMatrix)*normal); vec4 w = modelMatrix*vec4(position,1.); vPW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`;function ue(e,{srgb:t=!1,aniso:r=4,renderer:i}={}){return new Promise((a,o)=>{new _().load(e,e=>{e.colorSpace=t?M:``,e.wrapS=v,e.wrapT=w,e.anisotropy=Math.min(r,i.capabilities.getMaxAnisotropy()),e.generateMipmaps=!0,e.minFilter=p,e.magFilter=n,a(e)},void 0,o)})}async function de({renderer:e,sunDir:t,base:n,quality:i}){let[a,s,c,l]=await Promise.all([ue(n+`tex/earth_day.jpg`,{srgb:!0,renderer:e}),ue(n+`tex/earth_night.jpg`,{srgb:!0,renderer:e}),ue(n+`tex/earth_water.jpg`,{renderer:e}),ue(n+`tex/earth_bump.jpg`,{renderer:e})]),u=K(e,i===`low`?512:1024,`
    vec3 d = normalize(vDir);
    float lat = asin(clamp(d.y,-1.,1.));
    vec3 p = d*vec3(2.4,3.6,2.4);
    vec3 q = p + .9*vec3(fbm3(p*1.3+vec3(3.1)), fbm3(p*1.3+vec3(7.7)), fbm3(p*1.3+vec3(1.3))) - .45;
    float f = fbm(q*1.6);
    float bands = .17*cos(lat*6.0) + .10*exp(-sq(lat/.15));
    float cover = smoothstep(.50, .84, f + bands - .04);
    float detail = .72 + .56*fbm(d*vec3(11.,16.,11.));
    cover = clamp(cover*detail, 0., 1.);
    gl_FragColor = vec4(cover,cover,cover,1.);`,{format:A,type:r,pre:B}),d={uFade:q,tDay:{value:a},tNight:{value:s},tWater:{value:c},tBump:{value:l},tCloud:{value:u},uSun:{value:t},uRel:{value:new I(1,0)},uSunCloud:{value:new f(0,0,1)}},p=new E({uniforms:d,dithering:!0,defines:{FADEA:1},vertexShader:le+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade;
#define DBG ${globalThis.__dbg|0}
      ${B}${G}
      uniform sampler2D tDay,tNight,tWater,tBump; uniform samplerCube tCloud; uniform vec3 uSun; uniform vec2 uRel; uniform vec3 uSunCloud;
      varying vec3 vNW; varying vec3 vPW; varying vec3 vObj; varying vec2 vUv;
      float H(vec2 uv){ return texture(tBump, uv).r; }
      void main(){
        vec3 n = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        vec3 T = normalize(cross(vec3(0.,1.,0.), n) + vec3(1e-5,0.,0.)); vec3 B = cross(n,T);
        vec2 uv = vUv;
        float water = texture(tWater, uv).r;
        float dE = H(uv + vec2(1./2048.,0.)) - H(uv - vec2(1./2048.,0.));
        float dN = H(uv + vec2(0.,1./1024.)) - H(uv - vec2(0.,1./1024.));
        vec2 gr = vec2(dE,dN)*.9; float gl = length(gr); gr *= min(1., .22/max(gl,1e-4));
        vec3 nb = normalize(n - (1.-water)*(gr.x*T + gr.y*B));
        #if DBG==2
        nb = n;
        #endif
        float ndl = dot(n, L);
        float ndlb = dot(nb, L);
        // cloud lookup (cloud mesh spins relative to the ground)
        vec3 no = normalize(vObj);
        vec3 nc = vec3(uRel.x*no.x + uRel.y*no.z, no.y, -uRel.y*no.x + uRel.x*no.z);
        float cvr = texture(tCloud, nc).r;
        #if DBG==3
        cvr = 0.;
        #endif
        vec3 sc = normalize(nc + uSunCloud*(.028/max(ndl,.2)));
        float shadow = texture(tCloud, sc).r;
        // day
        vec3 alb = texture(tDay, uv).rgb;
        float deep = water;
        alb = mix(alb, alb*vec3(.55,.70,.95), deep*.5);
        float diff = max(ndlb, 0.);
        diff = diff*smoothstep(-.02,.12,ndl);
        vec3 day = alb*(diff*1.55)*(1. - .5*smoothstep(.25,.85,shadow));
        // ocean glint + fresnel sky reflection
        vec3 Hh = normalize(L+V); float ndh = max(dot(n,Hh),0.);
        float fres = .02 + .98*pow(1.-clamp(dot(n,V),0.,1.), 5.);
        float spec = (pow(ndh, 2400.)*2.2 + pow(ndh, 320.)*.22 + pow(ndh,40.)*.025) * smoothstep(0.,.1,ndl);
        float openWater = water*(1. - smoothstep(.1,.5,cvr));
        day += vec3(1.,.96,.88)*spec*openWater;
        day += vec3(.25,.45,.9)*fres*openWater*.22*smoothstep(-.05,.3,ndl);
        // twilight band
        day += vec3(1.,.42,.18)*exp(-sq((ndl-.03)/.07))*.07*smoothstep(-.2,.2,ndl)*(.3+alb.b*.7)*(1.-.7*cvr);
        // night lights
        float nightM = (1.-smoothstep(-.14,.06,ndl));
        vec3 lights = texture(tNight, uv).rgb;
        #if DBG==1
        lights = lights*vec3(1.,.80,.50)*2.4*nightM*(1.-water*.9);
        #else
        lights = pow(lights, vec3(.9))*vec3(1.,.80,.50)*2.4*nightM*(1. - .75*cvr)*(1.-water*.9);
        #endif
        vec3 shine = alb*vec3(.55,.7,1.)*.012*(1. - smoothstep(-.1,.2,ndl));
        vec3 c = day + lights + shine;
        c *= 1. - .22*pow(1.-clamp(dot(n,V),0.,1.), 3.)*(1.-.0);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),m=new C(1,128,64),h=new o(m,p);h.name=`earth`;let g=new E({uniforms:{uFade:q,tCloud:{value:u},uSun:{value:t}},defines:{FADEA:1},transparent:!0,depthWrite:!1,dithering:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8,vertexShader:le+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; ${B}${G}
      uniform samplerCube tCloud; uniform vec3 uSun; varying vec3 vNW; varying vec3 vPW; varying vec3 vObj; varying vec2 vUv;
      void main(){
        vec3 n = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        float cv = texture(tCloud, normalize(vObj)).r;
        float a = smoothstep(.04,.85,cv);
        a *= .82;
        float ndl = dot(n,L);
        float lit = smoothstep(-.08,.35,ndl);
        float shade = .12 + .95*clamp(ndl,0.,1.)*(1.-.35*smoothstep(.3,1.,cv));
        vec3 c = vec3(1.,.99,.97)*shade*lit*1.25;
        c += vec3(1.,.5,.25)*exp(-sq((ndl-.02)/.07))*.10*lit;
        c += vec3(.006,.009,.018)*(1.-lit);
        a *= mix(1., 1.25, sq(1.-clamp(dot(n,V),0.,1.)));
        gl_FragColor = vec4(c, clamp(a,0.,1.));
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),_=new o(new C(1,96,48),g);_.name=`clouds`,_.renderOrder=2,_.scale.setScalar(1.012);let v=1.05,y=new E({uniforms:{uFade:q,uSun:{value:t},uInner:{value:1/v}},transparent:!0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8,vertexShader:`varying vec3 vP; varying vec3 vCam; varying vec3 vL; uniform vec3 uSun;
      void main(){ vP = position; mat4 inv = inverse(modelMatrix); vCam = (inv*vec4(cameraPosition,1.)).xyz; vL = normalize(mat3(inv)*uSun);
        gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,fragmentShader:`precision highp float; uniform float uFade; varying vec3 vP; varying vec3 vCam; varying vec3 vL; uniform float uInner; ${G}
      vec2 hitS(vec3 ro, vec3 rd, float r){ float b=dot(ro,rd), c=dot(ro,ro)-r*r, d=b*b-c; if(d<0.) return vec2(-1.); d=sqrt(d); return vec2(-b-d, -b+d); }
      void main(){
        vec3 ro = vCam, rd = normalize(vP - vCam);
        float t0 = length(vP - vCam);
        float tOut = hitS(ro, rd, 1.).y;
        float tp = hitS(ro, rd, uInner).x;
        float tEnd = (tp > t0) ? tp : tOut;
        float len = max(tEnd - t0, 0.);
        const int N = 7; float dt = len/float(N);
        vec3 beta = vec3(.52,1.25,3.1);
        vec3 sum = vec3(0.); float od = 0.;
        float rp = uInner; float thick = 1. - rp;
        for (int i=0;i<N;i++){
          vec3 p = ro + rd*(t0 + (float(i)+.5)*dt);
          float h = clamp((length(p)-rp)/thick, 0., 1.);
          float dens = exp(-h*4.6);
          od += dens*dt/thick;
          vec3 up = normalize(p); float mu = dot(up, vL);
          float b = dot(p, vL); float tca2 = dot(p,p) - b*b;
          float sh = (b < 0.) ? smoothstep(rp*rp*.97, rp*rp*1.04, tca2) : 1.;
          float odS = exp(-h*2.3)*.55/max(mu + .22, .12);
          vec3 Ts = exp(-beta*odS*.55);
          vec3 Tv = exp(-beta*od*.5);
          sum += dens*dt/thick*Ts*Tv*sh;
        }
        float cosg = dot(rd, vL);
        float ph = .75*(1.+cosg*cosg);
        float mie = pow(clamp(cosg,0.,1.), 12.)*.06;
        vec3 c = sum*(beta*ph*1.25 + mie);
        c = 1. - exp(-c*1.15);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),b=new o(new C(1,96,48),y);b.name=`atmosphere`,b.renderOrder=3,b.scale.setScalar(v);let x=new T;x.name=`earthSystem`,x.add(h,_,b);let S=.3,w=.3,D=new f;function O(e){S+=e*.0018,w+=e*.0026,h.rotation.y=S,_.rotation.y=w;let n=S-w;d.uRel.value.set(Math.cos(n),Math.sin(n));let r=Math.cos(-w),i=Math.sin(-w);D.set(r*t.x+i*t.z,t.y,-i*t.x+r*t.z),d.uSunCloud.value.copy(D)}return{group:x,earth:h,clouds:_,atm:b,update:O,atmScale:v}}function fe({renderer:e,sunDir:t,quality:n}){let r=B+`
    vec2 craters(vec3 p, float scale, float seed, float prob, float rmax, float mare){
      vec3 q = p*scale; vec3 i = floor(q); vec3 f = fract(q);
      float rnd = hash13(i+seed);
      if (rnd > prob) return vec2(0.);
      vec3 cj = .32+.36*vec3(hash13(i+seed+1.7),hash13(i+seed+3.1),hash13(i+seed+5.3));
      float r = min(mix(.07,rmax,pow(hash13(i+seed+7.9),1.6)), .3);
      float dd = length(f-cj)/r;
      float bowl = dd < 1. ? -(1.-smoothstep(.0,1.,dd*dd))*.0 - (1.-dd*dd)*.9 : 0.;
      bowl = dd < 1. ? -mix(.35,.9,smoothstep(.0,.9,1.-dd))*(1.-smoothstep(.55,1.,dd)*.0)*(1.-dd*dd*.5) : 0.;
      float rim = .38*exp(-sq((dd-1.04)/.17));
      float h = (bowl + rim)*r*mare/scale*.55;
      return vec2(h, rim*(1.2 - r*2.));
    }
    vec2 terrain(vec3 d, float mare){
      vec2 a = vec2(0.);
      a += craters(d, 2.3, 1.0, .55, .30, mare);
      a += craters(d, 4.7, 2.0, .62, .30, mare);
      a += craters(d.zxy+.37, 9.1, 3.0, .70, .30, mare);
      a += craters(d, 18.3, 4.0, .75, .30, mare);
      a += craters(d.yzx+.71, 36.5, 5.0, .78, .30, mare);
      a += craters(d, 70.0, 6.0, .80, .30, mare);
      a += craters(d.zyx+.13, 132.0, 7.0, .80, .30, mare);
      a.x += (fbm3(d*6.)-.5)*.004 + (fbm3(d*24.)-.5)*.0012;
      return a;
    }`,i=K(e,n===`low`?512:1024,`
    vec3 d = normalize(vDir);
    float mm = smoothstep(.50,.60, fbm(d*1.5+vec3(4.,1.,7.)) + .08*(fbm3(d*5.)-.5));
    float mare = mix(1., .3, mm);
    vec3 e1 = normalize(cross(d, abs(d.y)>.9 ? vec3(1.,0.,0.) : vec3(0.,1.,0.))); vec3 e2 = cross(d,e1);
    float eps = .0014;
    vec2 t0 = terrain(d, mare);
    vec2 t1 = terrain(normalize(d+e1*eps), mare);
    vec2 t2 = terrain(normalize(d+e2*eps), mare);
    vec3 g = ((t1.x-t0.x)/eps)*e1 + ((t2.x-t0.x)/eps)*e2;
    vec3 n = normalize(d - g*1.6);
    float alb = mix(.60, .20, mm) * (.82 + .36*fbm(d*14.));
    alb *= .9 + .2*fbm3(d*60.);
    alb += t0.y*.22*(1.-mm*.6);
    alb = clamp(alb,0.,1.);
    gl_FragColor = vec4(n*.5+.5, sqrt(alb));`,{pre:r}),a=new E({uniforms:{uFade:q,tMoon:{value:i},uSun:{value:t}},dithering:!0,defines:{FADEA:1},vertexShader:le+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; ${G}
      uniform samplerCube tMoon; uniform vec3 uSun; varying vec3 vNW; varying vec3 vPW; varying vec3 vObj;
      void main(){
        vec3 ng = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        vec4 s = texture(tMoon, normalize(vObj));
        vec3 no = normalize(s.rgb*2.-1.);
        vec3 n = no; // moon mesh is never rotated, so object space == world space
        float alb = s.a*s.a;
        float ndl = max(dot(n,L),0.), ndv = max(dot(n,V),.03);
        float ls = ndl/(ndl+ndv);
        float geo = smoothstep(0.,.06,dot(ng,L));
        float surge = 1. + .55*pow(clamp(dot(L,V),0.,1.), 24.);
        vec3 c = vec3(1.,.985,.95)*alb*ls*2.6*geo*surge;
        c += alb*vec3(.55,.68,1.)*.010*(1.-geo);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),s=new o(new C(1,96,48),a);return s.name=`moon`,{mesh:s}}var pe=`
float vn1(float x){ float i=floor(x), f=fract(x); f=f*f*(3.-2.*f); return mix(hash11(i),hash11(i+1.),f); }
float ringDens(float t, float w){
  if (t < 0. || t > 1.) return 0.;
  float d = .55;
  float f = 14.;
  float amp = .42;
  for (int k=0;k<7;k++){
    float aa = 1. - clamp(w*f*1.4, 0., 1.);
    d += (vn1(t*f + float(k)*13.7) - .5)*amp*aa;
    f *= 1.9; amp *= .78;
  }
  float gap1 = 1. - .97*(1. - smoothstep(.0,.03, abs(t-.56)-.026));
  float gap2 = 1. - .85*(1. - smoothstep(.0,.015, abs(t-.84)-.006));
  float gap3 = 1. - .6*(1. - smoothstep(.0,.01, abs(t-.30)-.004));
  float inner = smoothstep(.0,.12,t)*.7 + .3*smoothstep(.0,.03,t);
  float outer = 1. - smoothstep(.94,1.,t);
  float bright = .55 + .6*smoothstep(.0,.5,t)*(1.-smoothstep(.55,.62,t)) + .25*smoothstep(.62,.7,t);
  return clamp(d*bright,0.,1.)*gap1*gap2*gap3*inner*outer;
}`;function me({sunDir:e}){let t=1.42,n=2.55,r=`varying vec3 vObj; varying vec3 vPW; varying vec3 vNW; varying vec3 vC; varying float vR; varying vec3 vRN;
    void commonVert(){ vC = (modelMatrix*vec4(0.,0.,0.,1.)).xyz; vR = length(modelMatrix[0].xyz); vRN = normalize(mat3(modelMatrix)*vec3(0.,1.,0.)); vObj = position; vNW = normalize(mat3(modelMatrix)*normal); vec4 w = modelMatrix*vec4(position,1.); vPW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,i=`
    uniform vec3 uSun;
    float planetShadow(vec3 P, vec3 C, float R, vec3 L){
      vec3 oc = P - C; float b = dot(oc, L);
      if (b >= 0.) return 1.;
      float d2 = dot(oc,oc) - b*b; return smoothstep(R*R*.80, R*R*1.22, d2);
    }`,a=new E({uniforms:{uFade:q,uSun:{value:e}},dithering:!0,defines:{FADEA:1},vertexShader:r+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; ${B}${G}${pe}${i}
      varying vec3 vObj; varying vec3 vPW; varying vec3 vNW; varying vec3 vC; varying float vR; varying vec3 vRN;
      vec3 bandCol(float x){
        float v = sin(x*17. + 2.2*sin(x*5.3))*.5+.5;
        float v2 = sin(x*41. + 1.7*sin(x*11.))*.5+.5;
        vec3 cream = vec3(.80,.66,.42), teal = vec3(.06,.30,.36), rust = vec3(.50,.26,.12), violet = vec3(.22,.20,.28);
        vec3 c = mix(cream, teal, smoothstep(.40,.68,v));
        c = mix(c, rust, smoothstep(.72,.97,sin(x*9.+1.)*.5+.5)*.65);
        c = mix(c, violet, smoothstep(.65,.95,v2)*.22);
        c = mix(c, vec3(.34,.20,.10), smoothstep(.80,1.,sin(x*23.+.4)*.5+.5)*.45);
        c = mix(c, vec3(.22,.30,.42), smoothstep(.72,1.,abs(x))*.85);
        return c;
      }
      void main(){
        vec3 ng = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        vec3 no = normalize(vObj);
        vec3 C = vC; float R = vR;
        vec3 rn = normalize(vRN);
        float warp = fbm(vec3(no.x*3.2, no.y*11., no.z*3.2)) - .5;
        float warp2 = fbm3(vec3(no.x*9., no.y*30., no.z*9.)) - .5;
        float x = no.y + .085*warp*(.4+.6*abs(sin(no.y*9.))) + .02*warp2 + .012*sin(no.y*31.);
        // storm
        vec3 sc = normalize(vec3(.85, -.34, .40));
        vec3 q = no - sc; float sd = length(vec3(q.x, q.y*2.4, q.z));
        float sm = exp(-sq(sd/.30));
        vec3 e1 = normalize(cross(sc, vec3(0.,1.,0.))), e2 = cross(sc, e1);
        float ang = sm*3.2; float ca = cos(ang), sa = sin(ang);
        vec2 qq = vec2(dot(q,e1), dot(q,e2)); qq = vec2(ca*qq.x - sa*qq.y, sa*qq.x + ca*qq.y);
        float sw = fbm3(vec3(qq*9., 2.));
        x += sm*.10*(sw-.5);
        vec3 col = bandCol(x);
        col *= .84 + .32*fbm3(vec3(no.x*4., no.y*42., no.z*4.));
        col = mix(col, mix(vec3(.62,.22,.14), vec3(.90,.70,.48), sw), sm*.85);
        col = mix(col, vec3(.22,.08,.06), exp(-sq((sd-.30)/.05))*.3);
        col = mix(col, vec3(.95,.85,.68), exp(-sq((sd-.36)/.04))*.25);
        float ndl = dot(ng, L);
        float mu = clamp(dot(ng,V),0.,1.);
        float lit = smoothstep(-.06,.55,ndl);
        // ring shadow on the planet
        float den = dot(L, rn);
        float rs = 1.;
        if (abs(den) > .02) { float t = dot(C - vPW, rn)/den; if (t > 0.) { vec3 H = vPW + L*t; float rr = length(H-C)/R; if (rr > ${t.toFixed(2)} && rr < ${n.toFixed(2)}) rs = 1. - .85*ringDens((rr-${t.toFixed(2)})/${1.13.toFixed(2)}, .004); } }
        vec3 c = col*lit*max(ndl,0.)*1.15*rs*(.55 + .45*sqrt(mu));
        c += col*.55*smoothstep(-.1,.4,ndl)*.35*rs;
        c += vec3(.35,.60,.70)*pow(1.-mu,3.)*lit*.28;
        c += col*vec3(.5,.6,1.)*.004;
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),s=new o(new C(1,96,48),a);s.name=`giant`;let c=new O(t,n,192,1);c.rotateX(-Math.PI/2);let l=new E({uniforms:{uFade:q,uSun:{value:e}},defines:{FADEA:1},transparent:!0,depthWrite:!1,side:2,dithering:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,vertexShader:r+`varying vec3 vLoc; void main(){ vLoc = position; commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; ${B}${G}${pe}${i}
      varying vec3 vObj; varying vec3 vPW; varying vec3 vNW; varying vec3 vLoc; varying vec3 vC; varying float vR; varying vec3 vRN;
      void main(){
        float r = length(vLoc.xz);
        float t = (r - ${t.toFixed(2)})/${1.13.toFixed(2)};
        float w = fwidth(t);
        float dens = ringDens(t, w);
        if (dens <= .002) discard;
        vec3 L = normalize(uSun), V = normalize(cameraPosition - vPW);
        vec3 C = vC; float R = vR;
        vec3 rn = normalize(vRN);
        float sh = planetShadow(vPW, C, R, L);
        float nl = dot(rn, L), nv = dot(rn, V);
        float diffuse = .18 + .82*abs(nl);
        float trans = (nl*nv < 0.) ? .55 : 1.;
        float fwd = (nl*nv < 0.) ? pow(max(dot(-V, L), 0.), 6.)*.7 : 0.;
        float tone = vn1(t*23.)*.5 + vn1(t*7.+9.)*.5;
        float band = vn1(t*61.)*.6 + vn1(t*17.+3.)*.4;
        vec3 col = mix(vec3(.58,.42,.28), vec3(.95,.82,.62), tone);
        col = mix(col, vec3(.86,.90,.95), smoothstep(.55,.9,band)*.45);   // icy streaks
        col = mix(col, vec3(.60,.58,.58), smoothstep(.75,1.,t)*.4);
        vec3 c = col*(diffuse*trans*2.2 + fwd)*mix(.04, 1., sh);
        float a = clamp(dens*dens*1.1 + dens*.15, 0., .92);
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),u=new o(c,l);u.name=`giantRings`,u.renderOrder=2;let d=new T;return d.name=`giantSystem`,d.add(s,u),{group:d,planet:s,ring:u}}function he({renderer:t,tint:n=new S(1,1,1)}={}){let r=new E({uniforms:{uFade:q,uTint:{value:n}},transparent:!1,blending:2,depthWrite:!1,depthTest:!0,side:2,vertexShader:`varying vec2 vQ;
      void main(){ vQ = position.xy; vec3 C = (modelMatrix*vec4(0.,0.,0.,1.)).xyz; float s = length(modelMatrix[0].xyz);
        vec4 mv = viewMatrix*vec4(C,1.); mv.xy += position.xy*s; gl_Position = projectionMatrix*mv; }`,fragmentShader:`precision highp float; uniform float uFade; uniform vec3 uTint; varying vec2 vQ; ${B}${G}
      float spike(vec2 q, vec2 a){ float al = abs(dot(q,a)); float pe = abs(q.x*a.y - q.y*a.x); return exp(-pe/(.0012 + al*.008))*exp(-al*5.5); }
      void main(){
        float u = length(vQ);
        const float ud = .045; // disc radius as a fraction of the glare radius
        float aa = fwidth(u)*1.2;
        float disc = 1. - smoothstep(ud-aa, ud+aa, u);
        float mu = sqrt(max(1.-(u/ud)*(u/ud), 0.));
        vec3 dc = vec3(1.,.93,.80)*(.55+.45*mu)*18.*disc;
        float glare = exp(-u*16.)*.9 + .10/(1.+sq(u/.14)) + .012/(1.+sq(u/.45));
        float win = sq(1. - smoothstep(.0,1.,u));
        // photographic touches: wide warm bloom, 6-point diffraction starburst (faint, fixed), soft chromatic halo edge
        float bloom = .035/(1.+sq(u/.07)) ;
        float sp = spike(vQ, vec2(1.,0.)) + spike(vQ, vec2(.5,.8660254)) + spike(vQ, vec2(-.5,.8660254));
        float sp2 = 0.;
        vec3 halo = vec3(.55,.75,1.)*exp(-sq((u-.16)/.05))*.018 + vec3(1.,.55,.35)*exp(-sq((u-.13)/.04))*.016;
        vec3 c = dc + vec3(1.,.88,.68)*glare*win*1.15 + vec3(1.,.93,.82)*(bloom + sp*.32*win) + halo*win;
        c *= uTint;
        c = 1. - exp(-c);
        gl_FragColor = vec4(c,1.);
        #include <colorspace_fragment>
        #ifdef FADEA
        gl_FragColor.a *= uFade;
        #else
        gl_FragColor.rgb *= uFade;
        #endif
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),i=new e(2,2),a=new o(i,r);return a.name=`sun`,a.frustumCulled=!1,a.renderOrder=4,{mesh:a}}function ge(e){let t=W(e),n=new Uint8Array(512),r=[...Array(256).keys()];for(let e=255;e>0;e--){let n=Math.floor(t()*(e+1));[r[e],r[n]]=[r[n],r[e]]}for(let e=0;e<512;e++)n[e]=r[e&255];let i=new Float32Array(256).map(()=>t()),a=e=>e*e*(3-2*e);return(e,t,r)=>{let o=Math.floor(e),s=Math.floor(t),c=Math.floor(r),l=a(e-o),u=a(t-s),d=a(r-c),f=(e,t,r)=>i[n[n[n[o+e&255]+(s+t&255)]+(c+r&255)]],p=(e,t,n)=>e+(t-e)*n;return p(p(p(f(0,0,0),f(1,0,0),l),p(f(0,1,0),f(1,1,0),l),u),p(p(f(0,0,1),f(1,0,1),l),p(f(0,1,1),f(1,1,1),l),u),d)}}function J(e,t,{elong:n=[1,1,1],craters:r=12,rough:i=.2}){let a=W(e),o=ge(e*7+1),s=new c(1,t);s.deleteAttribute(`normal`),s.deleteAttribute(`uv`),s=R(s,1e-4);let l=s.attributes.position,u=l.count,d=[];for(let e=0;e<r;e++){let e=new f(a()*2-1,a()*2-1,a()*2-1).normalize();d.push({v:e,r:.16+a()*.4*a()+.06,d:.14+a()*.18})}let p=new Float32Array(u),m=new f;for(let e=0;e<u;e++){m.fromBufferAttribute(l,e).normalize();let t=1+(o(m.x*1.6+5,m.y*1.6,m.z*1.6)-.5)*.7*i*2.2+(o(m.x*4+9,m.y*4,m.z*4)-.5)*.28*i*2.2+(o(m.x*11,m.y*11+3,m.z*11)-.5)*.09*i*2.2;for(let e of d){let n=Math.acos(Math.min(1,m.dot(e.v)))/e.r;if(n<1.35){let r=n<1?-e.d*(1-n*n):0,i=.35*e.d*Math.exp(-(((n-1.05)/.2)**2));t+=r+i}}p[e]=t,m.multiplyScalar(t),m.x*=n[0],m.y*=n[1],m.z*=n[2],l.setXYZ(e,m.x,m.y,m.z)}s.computeVertexNormals();let h=new Float32Array(u*3),g=9,_=-9;for(let e=0;e<u;e++)g=Math.min(g,p[e]),_=Math.max(_,p[e]);for(let e=0;e<u;e++){m.fromBufferAttribute(l,e);let t=.3+.9*((p[e]-g)/(_-g+1e-6))**1.1,n=.85+.3*o(m.x*3+20,m.y*3,m.z*3),r=o(m.x*1.2,m.y*1.2+50,m.z*1.2);h[e*3]=t*n*(.3+.07*r),h[e*3+1]=t*n*(.27+.04*r),h[e*3+2]=t*n*(.245-.04*r)}s.setAttribute(`color`,new b(h,3)),s.computeBoundingSphere();let v=s.boundingSphere.radius;return s.scale(1/v,1/v,1/v),s.computeBoundingSphere(),s}function Y(e,t,n,r){let i=e.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=t,a[e*3+1]=n,a[e*3+2]=r;return e.setAttribute(`color`,new b(a,3)),e}function _e(e){let t=e.map(e=>{let t=e.index?e.toNonIndexed():e;if(!t.attributes.color)throw Error(`no color`);return t.deleteAttribute(`uv`),t}),n=z(t,!1);n.computeBoundingSphere();let r=n.boundingSphere.radius;return n.scale(1/r,1/r,1/r),n.computeBoundingSphere(),n}function ve(){let e=[],t=new j(1.1,1,1.6,2,2,3);Y(t,.75,.7,.45),e.push(t);let n=new L(.62,.62,.2,16);n.rotateX(Math.PI/2),n.translate(0,0,-.5),Y(n,.35,.36,.38),e.push(n);for(let t of[-1,1]){let n=new L(.04,.04,.9,6);n.rotateZ(Math.PI/2),n.translate(t*1,0,0),Y(n,.5,.5,.5),e.push(n);let r=new j(2.6,.03,1.2,6,1,3);r.translate(t*2.75,0,0),Y(r,.07,.1,.22),e.push(r);let i=new j(2.7,.05,.06,1,1,1);i.translate(t*2.75,0,.6),Y(i,.6,.6,.62),e.push(i);let a=i.clone();a.translate(0,0,-1.2),e.push(a)}let r=new C(.6,20,8,0,Math.PI*2,0,Math.PI*.32);r.rotateX(-Math.PI/2),r.translate(0,.9,.2),Y(r,.82,.82,.85),e.push(r);let i=new L(.03,.05,.9,6);i.translate(0,.55,.2),Y(i,.5,.5,.5),e.push(i);let a=new L(.015,.015,2,5);return a.translate(.3,1,-.6),Y(a,.6,.6,.6),e.push(a),_e(e)}function ye(){let e=[],t=new L(1,1,5.2,20,3);Y(t,.8,.8,.78),e.push(t);let n=new L(.58,1,1.2,20);n.translate(0,3.2,0),Y(n,.82,.8,.75),e.push(n);let r=new L(.9,.38,1.3,14,1,!0);r.translate(0,-3.2,0),Y(r,.18,.17,.17),e.push(r);for(let t of[-1.8,.6,2.2]){let n=new L(1.03,1.03,.1,20);n.translate(0,t,0),Y(n,.28,.28,.3),e.push(n)}let i=new L(1.02,1.02,.9,20);return i.translate(0,1.4,0),Y(i,.85,.35,.12),e.push(i),_e(e)}function be(){let e=[],t=new j(2,.08,1.2,4,1,2),n=t.attributes.position;for(let e=0;e<n.count;e++)n.setY(e,n.getY(e)+Math.sin(n.getX(e)*2)*.08),n.setZ(e,n.getZ(e)*(1-.15*Math.sin(n.getX(e)*3)));t.computeVertexNormals(),Y(t,.55,.56,.6),e.push(t);let r=new L(.05,.05,1.6,5);return r.rotateZ(Math.PI/2),r.translate(0,.07,.4),Y(r,.3,.3,.32),e.push(r),_e(e)}function xe({quality:e=`high`,radius:t=2500}={}){let n=new T;n.name=`asteroids`;let r=e===`low`?.55:e===`medium`?.8:1,i=e===`low`?2:3,o=[{geo:J(11,i+1,{elong:[1,.82,.9],craters:18,rough:.26}),n:Math.round(30*r),rMin:14,rMax:42},{geo:J(23,i,{elong:[1.25,.8,.85],craters:14,rough:.3}),n:Math.round(50*r),rMin:10,rMax:34},{geo:J(37,2,{elong:[1,.95,1.05],craters:8,rough:.2}),n:Math.round(80*r),rMin:4,rMax:14},{geo:J(41,2,{elong:[1.6,.7,.8],craters:6,rough:.3}),n:Math.round(80*r),rMin:3,rMax:12},{geo:J(59,2,{elong:[.9,1,1.35],craters:9,rough:.34}),n:Math.round(80*r),rMin:2,rMax:9}],c=new h({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1,envMapIntensity:.45,color:12893362}),u={value:0},p=`
      vHue = fract(dot(instanceMatrix[3].xyz, vec3(.00131,.00213,.00171)));
      vCrP = position;
      transformed = mix(transformed, transformed*vec3(.6,.6,1.), uCrystal);`,g=e=>`
      if (uCrystal > .001) {
        vec3 fn = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
        normal = normalize(mix(normal, fn, .75*uCrystal));
      }`,_=`
      if (uCrystal > .001) {
        vec3 pal = .5 + .5*cos(6.2831853*(vHue + vec3(0.,.33,.67)));
        pal = mix(pal, vec3(1.,.3,.85), step(.66, fract(vHue*3.7))*.5);
        float vein = pow(1. - abs(gnoise(vCrP*4.2 + vHue*9.)), 12.) + .5*pow(1. - abs(gnoise(vCrP*9.5 + 3.)), 16.);
        float rim = pow(1. - abs(dot(normal, normalize(vViewPosition))), 2.6);
        totalEmissiveRadiance += uCrystal*pal*(vein*1.6 + rim*.9 + .06);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.035,.03,.06) + pal*.04, uCrystal);
      }`,v=`uniform float uCrystal; varying float vHue; varying vec3 vCrP;`;c.onBeforeCompile=e=>{e.uniforms.uCrystal=u,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
      ${v}
      varying vec3 vObjP; varying vec3 vObjN; varying vec3 vIM0; varying vec3 vIM1; varying vec3 vIM2;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vObjP = position; vObjN = normal;
      mat4 imv = modelViewMatrix*instanceMatrix; vIM0 = normalize(imv[0].xyz); vIM1 = normalize(imv[1].xyz); vIM2 = normalize(imv[2].xyz);${p}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      ${v}
      varying vec3 vObjP; varying vec3 vObjN; varying vec3 vIM0; varying vec3 vIM1; varying vec3 vIM2;
      ${B}
      float rockH(vec3 p){ return gnoise(p*3.1) + .55*abs(gnoise(p*7.3+4.)) + .3*gnoise(p*17.); }`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
      { vec3 pp = vObjP; float h0 = rockH(pp); float s = .06;
        vec3 g = vec3(rockH(pp+vec3(s,0.,0.)) - h0, rockH(pp+vec3(0.,s,0.)) - h0, rockH(pp+vec3(0.,0.,s)) - h0)/s;
        vec3 gv = mat3(vIM0,vIM1,vIM2)*g; gv -= dot(gv,normal)*normal;
        normal = normalize(normal - .11*gv); }${g()}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>${_}`)};let y=new h({vertexColors:!0,roughness:.42,metalness:.85});y.onBeforeCompile=e=>{e.uniforms.uCrystal=u,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${v}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>${p}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${v}\n${B}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>${g()}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>${_}`)};let b={rr:c.roughness,rm:c.metalness,re:c.envMapIntensity,jr:y.roughness,jm:y.metalness};function x(e){e=Math.min(1,Math.max(0,e)),u.value=e,c.roughness=s.lerp(b.rr,.16,e),c.metalness=s.lerp(b.rm,.15,e),c.envMapIntensity=s.lerp(b.re,1.4,e),y.roughness=s.lerp(b.jr,.16,e),y.metalness=s.lerp(b.jm,.15,e)}let C=[{geo:ve(),n:Math.round(14*r),rMin:3.5,rMax:6},{geo:ye(),n:Math.round(10*r),rMin:3,rMax:4.6},{geo:be(),n:Math.round(24*r),rMin:1.2,rMax:3}],w=[],E=[];for(let e of o)w.push({...e,mat:c,junk:!1});for(let e of C)w.push({...e,mat:y,junk:!0});let O=0;for(let e of w)O+=e.n;let k=new Float32Array(O*3),A=new Float32Array(O),j=new Float32Array(O*3),M=new Float32Array(O*3),N=new Float32Array(O),P=new Float32Array(O),F=W(777),I=new Int32Array(O),te=new Int32Array(O),L=new Float32Array(O),R=0;w.forEach((e,t)=>{let r=new a(e.geo,e.mat,e.n);r.name=(e.junk?`junk`:`rock`)+t,r.instanceMatrix.setUsage(ee),r.frustumCulled=!1,r.instanceColor=new l(new Float32Array(e.n*3),3),e.mesh=r,E.push(r),n.add(r);for(let n=0;n<e.n;n++)I[R]=t,te[R]=n,R++});let z=new S;function V(e,n){let r=w[I[e]],i=r.rMin+(r.rMax-r.rMin)*F()**1.7;L[e]=i,A[e]=i;let a,o,s,c;do o=F()*2-1,s=(F()*2-1)*.8,c=F()*2-1;while(o*o+s*s+c*c>1||o*o+s*s+c*c<.001);let l=Math.hypot(o,s,c);a=n?220+(t-220)*Math.cbrt(F()):t*(.85+.15*F()),k[e*3]=o/l*a,k[e*3+1]=s/l*a,k[e*3+2]=c/l*a;let u=r.junk?.6+F()*1.4:.2+F()*1.2;j[e*3]=(F()-.5)*u,j[e*3+1]=(F()-.5)*u,j[e*3+2]=(F()-.5)*u;let d=F()-.5,f=F()-.5,p=F()-.5,m=Math.hypot(d,f,p)||1;M[e*3]=d/m,M[e*3+1]=f/m,M[e*3+2]=p/m,N[e]=(F()-.5)*(r.junk?.5:.25)*(1+6/Math.max(i,2)*.4),P[e]=F()*6.28;let h=.8+F()*.4;r.junk?z.setRGB(h*(.8+F()*.3),h*(.8+F()*.3),h*(.85+F()*.2)):z.setRGB(h,h*(.95+F()*.08),h*(.9+F()*.12)),r.mesh.setColorAt(te[e],z),n||(r.mesh.instanceColor.needsUpdate=!0)}for(let e=0;e<O;e++)V(e,!0);for(let e of w)e.mesh.instanceColor.needsUpdate=!0;let H=new D,U=new m,ne=new f,G=new f,K=new f,re=new D,ie=[];for(let e=0;e<O;e++)ie.push(new D().setFromEuler(new d(F()*6.28,F()*6.28,F()*6.28)));function ae(e){K.set(M[e*3],M[e*3+1],M[e*3+2]),re.setFromAxisAngle(K,P[e]),H.copy(ie[e]).premultiply(re),ne.set(k[e*3],k[e*3+1],k[e*3+2]),G.setScalar(L[e]),U.compose(ne,H,G),w[I[e]].mesh.setMatrixAt(te[e],U)}for(let e=0;e<O;e++)ae(e);let oe=0;function se(e){oe++;for(let n=0;n<O;n++){let r=n*3;k[r]+=j[r]*e,k[r+1]+=j[r+1]*e,k[r+2]+=j[r+2]*e,P[n]+=N[n]*e;let i=k[r],a=k[r+1],o=k[r+2];i*i+a*a+o*o>t*1.05*(t*1.05)&&V(n,!1),ae(n)}for(let e of E)e.instanceMatrix.needsUpdate=!0}function ce(e,t){if(e<0||e>=O)return;let n=Math.max(1,L[e]*L[e]*.05);j[e*3]+=t.x/n,j[e*3+1]+=t.y/n,j[e*3+2]+=t.z/n,N[e]+=(Math.random()-.5)*.6/Math.max(1,L[e]*.1),N[e]=Math.max(-1.2,Math.min(1.2,N[e]))}return{object:n,count:O,positions:k,radii:A,hit:ce,respawn:e=>V(e,!1),update:se,meshes:E,setCrystal:x,rockCount:o.reduce((e,t)=>e+t.n,0)}}function Se(e,t,n,{scale:r=3.5,wash:i=1}={}){let a=[],s=[],c=[];for(let e=0;e<6;e++){let t=n[e];a.push(t?t.dir.clone():new f(0,1,0)),s.push(t?t.color.clone():new f(0,0,0)),c.push(t?t.pow:1)}let l=new E({side:1,depthWrite:!1,toneMapped:!1,uniforms:{tMW:{value:t},uBD:{value:a},uBC:{value:s},uBP:{value:c},uScale:{value:r},uWash:{value:i}},vertexShader:`varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,fragmentShader:`precision highp float; varying vec3 vD; uniform samplerCube tMW; uniform vec3 uBD[6]; uniform vec3 uBC[6]; uniform float uBP[6]; uniform float uScale, uWash;
      ${B}
      void main(){
        vec3 d = normalize(vD);
        vec3 e = texture(tMW, d).rgb; vec3 c = e*e*uScale;
        float n1 = fbm(d*1.6+vec3(2.,5.,1.)), n2 = fbm(d*2.4+vec3(9.,1.,4.)), n3 = fbm(d*3.1+vec3(3.,8.,6.));
        c += uWash*(vec3(.42,.10,.62)*smoothstep(.45,.78,n1)*.22 + vec3(.04,.34,.46)*smoothstep(.48,.80,n2)*.20 + vec3(.70,.16,.34)*smoothstep(.55,.82,n3)*.12);
        c += vec3(.012,.018,.04);
        c += vec3(.9,.55,.30)*pow(max(-d.y,0.),3.)*.06;           // warm bounce from below
        for (int i=0;i<6;i++){ float k = max(dot(d,uBD[i]),0.); c += uBC[i]*pow(k, uBP[i]); }
        gl_FragColor = vec4(c,1.);
      }`}),u=new x;u.add(new o(new C(50,48,24),l));let d=new N(e),p=d.fromScene(u,0,.1,100,{size:256});return d.dispose(),l.dispose(),u.children[0].geometry.dispose(),p.texture}var Ce=1.5*Math.sqrt(3),X=256,Z=512,we=3*Math.PI+.6,Te=24,Ee=.3;function De(e){return e<Ee?Ce*(1-(1-e/Ee)**2):Ce+(Te-Ce)*((e-Ee)/.7)**2}function Oe(){let e=te.toHalfFloat,r=new Uint16Array(X*Z*4),i=we/Z,a=i/12,o=new Float32Array(Z);for(let t=0;t<X;t++){let n=De((t+.5)/X),s=0,c=1/n,l=0,u=-1,d=0,f=0,p=0,m=e=>-e+1.5*e*e;for(;l<70;){let e=l<we?a:a*3,t=c,n=m(s),r=c+.5*e*n,h=m(s+.5*e*t),g=c+.5*e*h,_=m(s+.5*e*r),v=c+e*_,y=m(s+e*g),b=s+e/6*(t+2*r+2*g+v),x=c+e/6*(n+2*h+2*_+y),S=l+e;for(u<0&&b>=1?(u=l+e*(1-s)/Math.max(b-s,1e-9),d=1):u<0&&b<0&&l>.01&&(u=l+e*s/Math.max(s-b,1e-9),f=x);p<Z&&(p+.5)*i<=S;){let t=(p+.5)*i,n;if(u>=0&&t>=u)n=d?1.5:Math.max(-1,f*(t-u));else{let r=(t-l)/e;n=s+(b-s)*r}o[p++]=n}if(s=b,c=x,l=S,u>=0&&p>=Z)break;if(d){for(;p<Z;)o[p++]=1.5;break}}u<0&&(u=70),d&&u<0&&(u=70);for(let n=0;n<Z;n++){let i=(n*X+t)*4;r[i]=e(o[n]),r[i+1]=e(u),r[i+2]=e(d),r[i+3]=e(d?0:u-Math.PI)}}let s=new y(r,X,Z,A,t);return s.minFilter=s.magFilter=n,s.generateMipmaps=!1,s.wrapS=s.wrapT=w,s.colorSpace=``,s.needsUpdate=!0,s}function ke(e,t,r,i){let a=new k(r,{generateMipmaps:!0,minFilter:p,magFilter:n});a.texture.colorSpace=M;let o=new x,s=t.parent,c=t.position.clone();o.add(t),t.position.set(0,0,0),t.updateMatrixWorld(!0);let l=new F(.1,5e3,a),u=e.xr.enabled;e.xr.enabled=!1;let d=e.getRenderTarget(),f=e.toneMapping;return e.toneMapping=0,i&&i(r),l.update(e,o),e.setRenderTarget(d),e.xr.enabled=u,e.toneMapping=f,o.remove(t),s&&s.add(t),t.position.copy(c),a.texture}function Ae(t,r,a){let s=new i(1024,256,{generateMipmaps:!0,minFilter:p,magFilter:n,wrapS:v,wrapT:w}),c=new E({depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,fragmentShader:`precision highp float; varying vec2 vUv; ${B}
      void main(){
        float th = vUv.x*6.2831853; float r = ${r.toFixed(3)} + vUv.y*${(a-r).toFixed(3)};
        vec3 p = vec3(r*2.1, cos(th)*1.5, sin(th)*1.5);
        vec3 q = vec3(r*5.3, cos(th)*3.2, sin(th)*3.2);
        float n = fbm(p + .35*vec3(fbm3(q), fbm3(q+5.1), 0.));
        float fine = fbm3(vec3(r*13., cos(th)*5., sin(th)*5.));
        float rings = .80 + .20*sin(r*7.3 + 4.*n)*sin(r*2.9 + 1.3);
        float d = clamp((.35 + 1.15*(n - .5) + .5)*rings*(.82 + .36*fine), 0., 1.6);
        // second, independent channel for the cross-fade layer
        vec3 p2 = p + vec3(11.3, 4.4, 7.7);
        float n2 = fbm(p2 + .35*vec3(fbm3(q+9.), fbm3(q+2.2), 0.));
        float d2 = clamp((.35 + 1.15*(n2 - .5) + .5)*rings*(.82 + .36*fbm3(vec3(r*13., cos(th)*5., sin(th)*5.) + 6.)), 0., 1.6);
        gl_FragColor = vec4(d/1.6, d2/1.6, 0., 1.);
      }`}),l=new o(new e(2,2),c);l.frustumCulled=!1;let u=new x;u.add(l);let d=new P,f=t.xr.enabled;t.xr.enabled=!1;let m=t.getRenderTarget();return t.setRenderTarget(s),t.render(u,d),t.setRenderTarget(m),t.xr.enabled=f,c.dispose(),l.geometry.dispose(),s.texture.anisotropy=4,s.texture}function je({renderer:e,position:t,rs:n=100,diskNormal:r,skyTex:i,lensRadius:a=23}){let s=r.clone().normalize(),c=new f().crossVectors(s,Math.abs(s.y)<.9?new f(0,1,0):new f(1,0,0)).normalize(),l=new f().crossVectors(s,c).normalize(),u={tGeo:{value:Oe()},tSky:{value:i},uSkyGain:{value:1},uCenter:{value:t.clone()},uRs:{value:n},uR:{value:a},uN:{value:s},uE1:{value:c},uE2:{value:l},uTime:{value:0},uPortal:{value:0},uWarp:{value:0},uRin:{value:3},uRout:{value:10.5},tDisk:{value:Ae(e,2.7,10.5)}},d=e=>e.toFixed(6),p=new E({uniforms:u,side:1,transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,vertexShader:`
      varying vec3 vW;
      void main(){
        vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz;
        vec4 p = projectionMatrix*viewMatrix*w;
        if (p.w > 0.) p.z = min(p.z, p.w*.99999);   // never clipped by the far plane
        gl_Position = p;
      }`,fragmentShader:`
      precision highp float;
      uniform sampler2D tGeo, tDisk; uniform samplerCube tSky; uniform float uSkyGain;
      uniform vec3 uCenter, uN, uE1, uE2; uniform float uRs, uR, uTime, uPortal, uWarp, uRin, uRout;
      varying vec3 vW;
      #define PI 3.14159265
      const float BC = ${d(Ce)}; const float BMAX = ${d(Te)}; const float SSPLIT = ${d(Ee)}; const float PHIMAX = ${d(we)};
      ${B}${G}
      float sOf(float b){ return b < BC ? SSPLIT*(1. - sqrt(max(1. - b/BC, 0.))) : SSPLIT + (1.-SSPLIT)*sqrt(min((b-BC)/(BMAX-BC), 1.)); }
      vec4 orbit4(float s, float ph){ return textureLod(tGeo, vec2(s, ph/PHIMAX), 0.); }
      vec3 orbit(float s, float ph){ return orbit4(s, ph).rgb; }
      // black-body-ish ramp (t = normalized temperature)
      vec3 bbody(float t){
        vec3 c = mix(vec3(.45,.035,.004), vec3(1.,.30,.03), smoothstep(.12,.5,t));
        c = mix(c, vec3(1.,.62,.22), smoothstep(.45,.85,t));
        c = mix(c, vec3(1.,.90,.72), smoothstep(.85,1.2,t));
        c = mix(c, vec3(.70,.82,1.), smoothstep(1.2,1.7,t));
        return c;
      }
      vec3 gold(float t){   // white-gold portal palette
        vec3 c = mix(vec3(1.,.38,.04), vec3(1.,.66,.12), smoothstep(.15,.55,t));
        c = mix(c, vec3(1.,.86,.45), smoothstep(.55,.95,t));
        return mix(c, vec3(1.,.98,.9), smoothstep(1.,1.5,t));
      }
      void main(){
        vec3 C = (cameraPosition - uCenter)/uRs;
        vec3 D = normalize(vW - cameraPosition);
        float rc = length(C);
        float cd = dot(C, D);
        vec3 Pp = C - cd*D; float b = length(Pp);
        float fwb = fwidth(b);
        vec3 ey = b > 1e-5 ? Pp/b : normalize(cross(D, abs(D.y) < .9 ? vec3(0.,1.,0.) : vec3(1.,0.,0.)));
        vec3 ex = -D;
        float phic = atan(b, -cd);
        float s = sOf(b);
        vec4 g0 = orbit4(s, 0.);
        float phiStop = g0.g; bool capt = g0.b > .5;
        float ib = 1./max(b, 1.); float alphaDef = mix(g0.a, ib*(2. + ib*(2.9452 + ib*(5.3333 + ib*10.630))), smoothstep(8., 10., b)); // weak-field series beyond 8 rs (exact to 1e-3)

        // ---------------- accretion disk crossings (front to back)
        float a = dot(ex, uN), c = dot(ey, uN);
        float phi0 = atan(-a, c);
        float phi1 = phi0 + PI*ceil((phic - phi0)/PI - 1e-4);
        vec3 em = vec3(0.); float T = 1.;
        float cosI0 = abs(dot(D, uN));
        float tp = uTime/16.; float p1 = fract(tp), p2 = fract(tp + .5);
        float w1 = 1. - abs(2.*p1 - 1.), w2 = 1. - w1; float wn = inversesqrt(w1*w1 + w2*w2);
        for (int i = 0; i < 3; i++){
          float ph = phi1 + float(i)*PI;
          if (ph > min(phiStop, PHIMAX - .02)) break;
          float u = orbit(s, ph).r;
          if (u <= .02) continue;
          float r = 1./u;
          if (r < uRin*.92 || r > uRout) continue;
          vec3 dir = cos(ph)*ex + sin(ph)*ey, perp = -sin(ph)*ex + cos(ph)*ey;
          vec3 Q = r*dir;
          float up = sqrt(max(1./(b*b) - u*u + u*u*u, 0.)) * ((capt || ph < .5*phiStop) ? 1. : -1.);
          vec3 td = normalize(-up*dir + u*perp);              // backward-traced photon direction at the disk
          vec3 vh = normalize(cross(uN, Q));
          float beta = min(sqrt(.5/max(r - 1., .5)), .7);
          float gam = inversesqrt(1. - beta*beta);
          float dop = 1./(gam*(1. - beta*dot(vh, -td)));
          float g = dop*sqrt(max(1. - 1./r, 0.));
          // temperature profile (Shakura-Sunyaev shape, normalized), soft inner edge
          float x = 3./max(r, 3.);
          float Td = pow(x, .75)*pow(max(1. - sqrt(x), 0.), .25)/.4878;
          Td = max(Td, .62*smoothstep(uRin*.92, uRin*1.12, r));
          // differentially rotating streaks (two cross-faded layers, period 16 s each, so they never over-wind)
          vec2 pl = vec2(dot(Q, uE1), dot(Q, uE2)); float th = atan(pl.y, pl.x);
          float om = .32*pow(3./r, 1.5);
          float lod = max(0., log2(fwb*40./max(cosI0, .2)));
          vec2 dv = vec2(0., (r - 2.7)/7.8);
          vec2 tx = vec2(textureLod(tDisk, dv + vec2((th - om*p1*16.)/6.2831853 + floor(tp)*.37, 0.), lod).r,
                         textureLod(tDisk, dv + vec2((th - om*p2*16.)/6.2831853 + floor(tp + .5)*.37, 0.), lod).g)*1.6;
          float dens = .7 + ((tx.x*w1 + tx.y*w2) - .7)*wn;
          dens = clamp(dens, 0., 1.5);
          float edge = smoothstep(uRin*.92, uRin*1.05, r)*(1. - smoothstep(uRout*.55, uRout, r));
          float cosI = abs(dot(td, uN));
          float alpha = clamp(edge*(.55 + .45*dens), 0., 1.);
          alpha = 1. - pow(1. - alpha*.96, 1./max(cosI, .08));     // thin slab: more opaque at grazing angles
          float Tobs = pow(Td, mix(1.7, 1.5, uPortal))*mix(pow(g, 1.25), pow(g, .35), uPortal);
          vec3 colD = mix(bbody(Tobs*1.05), gold(Tobs), uPortal);
          float I = pow(Td, 3.6)*mix(pow(g, 3.4), pow(g, 1.4), uPortal)*(.3 + 1.15*dens*dens)*mix(1.7, 2.4, uPortal);
          em += T*alpha*colD*I;
          T *= 1. - alpha;
        }

        // ---------------- photon ring (higher-order images) + inner glow
        float w = max(.012, fwb*1.3);
        float side = 1. + .6*dot(cross(uN, ey), -D)*(1. - uPortal*.6);   // ring brighter on the approaching side (no normalize: no seam at the poles)
        float ring = exp(-pow((b - BC*1.006)/w, 2.))*min(1., .035/w)*2.4;
        ring += (b > BC ? exp(-(b - BC)/.05)*.55 + exp(-(b - BC)/.35)*.025 : exp(-(BC - b)/.03)*.35);
        vec3 ringC = mix(vec3(1.,.62,.26), vec3(1.,.90,.62), uPortal)*side*mix(1., 1.8, uPortal);
        em += T*ring*ringC;

        // ---------------- lensed background
        float rem = alphaDef*.5*(1. + cos(phic));
        rem *= (1. - smoothstep(uR*.55, uR*.86, b))*mix(1., .7, smoothstep(5., 10., b)); // slightly softened far-field lensing (less busy), exact near the hole              // deflection tapers to zero before the lens edge
        vec3 ex2 = cos(rem)*D - sin(rem)*ey;
        vec3 bg = texture(tSky, ex2).rgb*uSkyGain;
        float comp = length(fwidth(ex2))/max(length(fwidth(D)), 1e-6);   // how many sky pixels land in one screen pixel
        float bgw = capt ? 0. : smoothstep(BC + .05, BC + .6, b)*(1. - smoothstep(6., 30., comp));  // the whole sky piles up just outside the shadow: let the ring own that zone
        // portal variant: a faint white-gold sheen across the shadow

        float mx = max(em.r, max(em.g, em.b));
        vec3 tmH = em/max(mx, 1e-5)*(1. - exp(-mx*1.3));         // hue preserving
        vec3 tmC = 1. - exp(-em*1.3);                              // per channel (hot cores go white)
        vec3 col = mix(tmH, tmC, mix(.45, .18, uPortal)) + T*bg*bgw;
        if (rc < 1.02) col = vec3(0.);
        float fade = 1. - smoothstep(uR*.86, uR*.99, b);
        float core = 1. - smoothstep(uRout*.9, uRout*1.25, b);
        float A = mix(fade, core, uWarp);
        gl_FragColor = vec4(col, A);
        #include <colorspace_fragment>
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),m=new C(n*a,64,32),h=new o(m,p);return h.position.copy(t),h.name=`blackHole`,h.renderOrder=-10,{object:h,position:t.clone(),radius:Ce*n,rs:n,lensRadius:n*a,diskOuter:n*u.uRout.value,uniforms:u,update(e,t){u.uTime.value=e,u.uWarp.value=t||0}}}var Q={ringed:{dir:new f(-.74,.36,-.57).normalize(),dist:12500,radius:1700,name:`Velorra`},crystal:{dir:new f(.02,.64,-.77).normalize(),dist:8e3,radius:620,name:`Quillith`},cracked:{dir:new f(-.3,-.42,-.86).normalize(),dist:14500,radius:2300,name:`Mirevault`},band:new f(.35,.82,.45).normalize()};function Me(e,t){return K(e,t,`
    vec3 d = normalize(vDir);
    vec3 w = vec3(fbm3(d*1.7+vec3(1.,2.,3.)), fbm3(d*1.7+vec3(5.,1.,7.)), fbm3(d*1.7+vec3(9.,4.,2.)));
    vec3 q = d*1.25 + (w - .5)*1.35;
    float n = fbm(q*1.9);
    float n2 = fbm(q*4.1 + 4.);
    vec3 MAG = vec3(1.,.12,.62), CYA = vec3(.08,.80,1.), VIO = vec3(.45,.20,1.), LIM = vec3(.50,1.,.18), ORA = vec3(1.,.42,.08);
    float h1 = smoothstep(.35,.65, fbm3(d*.8 + 7.)), h2 = smoothstep(.45,.70, fbm3(d*1.1 + 2.)), h3 = smoothstep(.55,.75, fbm3(d*1.6 + 9.));
    vec3 pal = mix(VIO, MAG, h1);
    pal = mix(pal, CYA, h2*.85);
    pal = mix(pal, mix(ORA, LIM, smoothstep(.45,.6, fbm3(d*.9 + 21.))), smoothstep(.60,.78, fbm3(d*1.2 + 12.))*.85);  // ember / lime regions
    vec3 accent = mix(LIM, ORA, smoothstep(.4,.6, fbm3(d*2.3 + 5.)));
    float cloud = smoothstep(.46, .90, n);
    float fil = pow(1. - abs(2.*n2 - 1.), 9.)*smoothstep(.40,.75,n);
    float lanes = 1. - .85*smoothstep(.52, .80, fbm(q*5.7 + 11.));
    vec3 c = (pal*cloud*.22 + mix(pal, accent, h3)*fil*.45 + mix(pal, vec3(1.), .5)*pow(cloud, 4.)*.10)*lanes;
    c += pal*smoothstep(.3,.95,n)*.025;
    // invented galactic band with a hot pink/orange core
    float b = asin(clamp(dot(d, uBand), -1., 1.));
    float bw = b + (fbm3(d*3.+2.) - .5)*.18;
    float core = exp(-pow(acos(clamp(dot(d, normalize(cross(uBand, vec3(0.,0.,1.)))), -1., 1.))/.55, 2.));
    float band = exp(-bw*bw/(.12*.12))*(.35 + .9*fbm(d*7.+1.))*(.4 + 1.2*core);
    band *= 1. - .7*smoothstep(.5,.8, fbm(d*13.+5.))*exp(-bw*bw/(.05*.05));
    c += mix(vec3(.55,.35,1.), vec3(1.,.45,.30), core)*band*.22;
    // aurora ribbons
    float r1 = ribbon(d, normalize(vec3(.2,.95,-.25)), vec3(1.,0.,0.), .18, 1.3);
    float r2 = ribbon(d, normalize(vec3(-.6,.3,.75)), vec3(0.,1.,0.), -.05, 7.7);
    float r3 = ribbon(d, normalize(vec3(.75,-.35,.55)), vec3(0.,1.,0.), .10, 3.9);
    c += mix(vec3(.2,1.,.5), vec3(.9,.3,1.), smoothstep(.0,.06, abs(dot(d, normalize(vec3(.2,.95,-.25))) - .18)))*r1*.40;
    c += vec3(.25,.85,1.)*r2*.30 + vec3(1.,.3,.8)*r3*.28;
    c += vec3(.015,.008,.03);                                                       // violet night floor
    vec3 e = sqrt(clamp(c, 0., 1.));
    gl_FragColor = vec4(e, 1.);`,{pre:B+`
    uniform vec3 uBand;
    vec3 neonPal(float t){ return .5 + .5*cos(6.2831853*(t + vec3(.0,.33,.67))); }
    float ribbon(vec3 d, vec3 ax, vec3 ref, float off, float seed){
      // aurora curtain along a tilted great circle: crisp glowing lower hem, thin vertical rays fading upward
      float x = dot(d, ax);
      vec3 e1 = normalize(cross(ax, ref)); vec3 e2 = cross(ax, e1);
      vec2 cs = vec2(dot(d,e1), dot(d,e2)); float lon = atan(cs.y, cs.x); vec2 u = normalize(cs);
      float wave = .10*sin(lon*2. + seed) + .05*sin(lon*4.7 + seed*2.1) + .018*sin(lon*13. + seed) + .06*(fbm3(vec3(u*2., seed)) - .5);
      float y = x - off - wave;
      float hem = exp(-pow(y/.006, 2.));
      float curtain = smoothstep(-.005, .005, y)*exp(-max(y,0.)/.06);
      float rays = (.35 + pow(fbm3(vec3(u*55., seed + y*2.)), 2.)*1.6)*(.7 + .6*fbm3(vec3(u*9., seed + 2.)));
      float along = smoothstep(.35,.75, fbm3(vec3(u*1.4, seed+4.)));
      return (curtain*rays*.7 + hem*.35)*along;
    }`,uniforms:{uBand:{value:Q.band}}})}var Ne=`zo.ve.qua.li.ma.te.no.pri.ka.shi.rho.de.lu.o.va.zi.ta.ny.bri.so.fe.y.ke.xa.mi.ru.pel.or.an.el`.split(`.`),Pe=[`rix`,`lon`,`vey`,`ra`,`nix`,`thea`,`lume`,`dor`,`sel`,`quin`,`mira`,`zar`,`lia`,`tos`,`vani`,`ka`,`phen`,`ro`,`nel`,`ys`],Fe=[`The Neon Kite`,`Glimmerwhale`,`The Lantern Choir`,`Velvet Spiral`,`Prism Fox`,`The Jelly Gate`,`Lumen Harp`,`Twin Comets`,`The Candy Crown`,`Zephyr Moth`,`The Glass Orchard`,`Bubble Serpent`,`The Hummingbird Engine`,`Starlit Teapot`,`The Disco Turtle`,`Aurora Loom`],Ie=[`NV (neon violet)`,`QC (quantum cyan)`,`LM (lime glow)`,`MG (magenta giant)`,`OR (ember orange)`,`WP (white pearl)`,`BB (blue bubble)`],Le=[[1,.28,.85],[.3,.95,1],[.6,1,.3],[.68,.45,1],[1,.6,.25],[1,1,1],[.45,.62,1]];function Re(e){let t=W(4242),n=e===`low`?3e3:e===`medium`?6e3:9e3,r=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),o=new Uint8Array(n),s=Q.band,c=[];for(let e=0;e<14;e++)c.push(new f(t()*2-1,t()*2-1,t()*2-1).normalize());let l=new f,u=new f;for(let e=0;e<n;e++){if(t()<.16){let e=c[Math.floor(t()*c.length)];u.set(t()*2-1,t()*2-1,t()*2-1).multiplyScalar(.06*Math.sqrt(t())),l.copy(e).add(u).normalize()}else for(let e=0;e<40;e++){l.set(t()*2-1,t()*2-1,t()*2-1);let e=l.length();if(e>1||e<.05)continue;l.divideScalar(e);let n=Math.asin(Math.max(-1,Math.min(1,l.dot(s))));if(t()<.25+Math.exp(-(n*n)/.0648))break}r[e*3]=l.x,r[e*3+1]=l.y,r[e*3+2]=l.z,a[e]=-.6+8.6*t()**.3;let n=Math.floor(t()*Le.length);o[e]=n;let d=a[e]<3?.85:.6;for(let t=0;t<3;t++)i[e*3+t]=Le[n][t]*d+(1-d)}let d=[...Array(n).keys()].sort((e,t)=>a[e]-a[t]).slice(0,260).map((e,t)=>{let n=W(e*7919+13),i=Ne[Math.floor(n()*Ne.length)]+(n()<.45?Ne[Math.floor(n()*Ne.length)]:``)+Pe[Math.floor(n()*Pe.length)],s=i.charAt(0).toUpperCase()+i.slice(1)+(n()<.18?` `+[`Prime`,`Minor`,`Major`,`Nova`][Math.floor(n()*4)]:``);l.set(r[e*3],r[e*3+1],r[e*3+2]);let u=0,d=-2;c.forEach((e,t)=>{let n=e.dot(l);n>d&&(d=n,u=t)});let f=Math.round(4+n()**2*3600*(.3+a[e]/8));return{i:e,dx:l.x,dy:l.y,dz:l.z,mag:a[e],info:[s,Math.max(3,f),Ie[o[e]],Fe[u%Fe.length]]}});return{stars:{count:n,dir:r,col:i,mag:a,realCount:n},named:d}}var ze=`varying vec3 vObj; varying vec3 vNW; varying vec3 vPW; varying vec3 vC; varying float vR;
  void commonVert(){ vObj = position; vNW = normalize(mat3(modelMatrix)*normal); vec4 w = modelMatrix*vec4(position,1.); vPW = w.xyz;
    vC = (modelMatrix*vec4(0.,0.,0.,1.)).xyz; vR = length(modelMatrix[0].xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,Be=`
  #include <colorspace_fragment>
  gl_FragColor.a *= uFade;
  gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);`;function Ve(e){let t=new E({uniforms:{uFade:q,uSun:{value:e},uTime:{value:0}},defines:{FADEA:1},vertexShader:ze+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade, uTime; uniform vec3 uSun; ${B}${G}
      varying vec3 vObj; varying vec3 vNW; varying vec3 vPW;
      void main(){
        vec3 no = normalize(vObj), n = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        float w = fbm(vec3(no.x*2.6, no.y*9., no.z*2.6) + vec3(0., uTime*.004, 0.)) - .5;
        float y = no.y + .07*w + .012*sin(no.x*14. + no.z*9.);
        float st = sin(y*26.)*.5 + .5, st2 = sin(y*63. + 1.3)*.5 + .5;
        vec3 deep = vec3(.10,.03,.22), magenta = vec3(1.,.18,.72), cyan = vec3(.10,.92,1.), lime = vec3(.62,1.,.25);
        vec3 alb = mix(deep, vec3(.42,.16,.70), smoothstep(.2,.8,st));
        alb = mix(alb, vec3(.95,.55,.85), smoothstep(.85,1.,st2)*.35);
        // glowing stripe lines (self-luminous on the night side too)
        float g1 = exp(-pow((fract(y*4.3 + .25) - .5)/.035, 2.));
        float g2 = exp(-pow((fract(y*4.3 + .75) - .5)/.022, 2.));
        vec3 glow = magenta*g1*.9 + cyan*g2*1.0 + lime*exp(-pow(y/.03,2.))*.6;
        glow *= .75 + .5*fbm3(vec3(no*7.) + uTime*.01);
        float ndl = dot(n, L);
        vec3 c = alb*max(ndl, 0.)*1.3 + alb*.05;
        c += glow*(.55 + .45*smoothstep(.3,-.2,ndl));
        float fr = pow(1. - clamp(dot(n,V),0.,1.), 3.);
        c += vec3(.75,.35,1.)*fr*.55;
        gl_FragColor = vec4(c, 1.);${Be}
      }`}),n=new o(new C(1,96,48),t);n.name=`neonRinged`;let r=1.35,i=new O(r,2.85,192,1);i.rotateX(-Math.PI/2);let a=new E({uniforms:{uFade:q,uSun:{value:e}},defines:{FADEA:1},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:ze+`varying vec3 vLoc; void main(){ vLoc = position; commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; uniform vec3 uSun; ${B}${G}
      varying vec3 vLoc; varying vec3 vPW; varying vec3 vC; varying float vR;
      float vn1(float x){ float i=floor(x), f=fract(x); f=f*f*(3.-2.*f); return mix(hash11(i),hash11(i+1.),f); }
      void main(){
        float r = length(vLoc.xz); float t = (r - ${r.toFixed(2)})/${1.5.toFixed(2)};
        float w = fwidth(t);
        float d = 0., amp = .5, f = 9.;
        for (int k=0;k<6;k++){ d += (vn1(t*f + float(k)*7.1) - .5)*amp*(1. - clamp(w*f*1.5,0.,1.)); f *= 2.; amp *= .7; }
        d = clamp(.5 + d, 0., 1.);
        float gaps = (1. - .9*exp(-pow((t-.42)/.025,2.)))*(1. - .8*exp(-pow((t-.77)/.012,2.)));
        float edge = smoothstep(0.,.05,t)*(1. - smoothstep(.92,1.,t));
        vec3 hue = .5 + .5*cos(6.2831853*(t*1.25 + vec3(.55,.88,.21)));
        vec3 c = mix(hue, vec3(1.), .18)*d*d*gaps*edge*.9;
        // planet shadow
        vec3 L = normalize(uSun); vec3 oc = vPW - vC; float bb = dot(oc, L);
        float sh = bb < 0. ? smoothstep(vR*vR*.8, vR*vR*1.2, dot(oc,oc) - bb*bb) : 1.;
        c *= mix(.25, 1., sh);
        gl_FragColor = vec4(c, 1.);
        #include <colorspace_fragment>
        gl_FragColor.rgb *= uFade;
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),s=new o(i,a);s.name=`neonRings`,s.renderOrder=2;let c=new T;return c.name=`neonRingedSystem`,c.add(n,s),{group:c,planet:n,ring:s,mats:[t]}}function He(e){let t=W(777),n=[],r=(e,t,n)=>{let r=e.attributes.position.count;return e.setAttribute(`aFacet`,new b(new Float32Array(r).fill(t),1)),n&&e.setAttribute(`aTip`,new b(new Float32Array(r).fill(-1),1)),e},i=new c(.72,6),a=i.attributes.position,s=new f;for(let e=0;e<a.count;e++){s.fromBufferAttribute(a,e);let t=1+.045*Math.sin(s.x*6+s.y*4)*Math.cos(s.z*5)+.02*Math.sin(s.x*17-s.z*11+s.y*3);s.multiplyScalar(t),a.setXYZ(e,s.x,s.y,s.z)}i.deleteAttribute(`uv`),i.deleteAttribute(`normal`),i=R(i,1e-5),i.computeVertexNormals(),n.push(r(i.toNonIndexed(),.5,!0));let l=new f(0,1,0),u=[];for(let e=0;e<6;e++)u.push(new f(t()*2-1,t()*2-1,t()*2-1).normalize());for(let e of u){let i=4+Math.floor(t()*5);for(let a=0;a<i;a++){let i=e.clone().add(new f(t()*2-1,t()*2-1,t()*2-1).multiplyScalar(.42)).normalize(),o=.22+t()**1.5*.42*(a===0?1.4:1),s=.07+t()*.07*(a===0?1.5:1),c=new L(s*.92,s,o,6,1,!0);c.translate(0,o/2,0);let u=new g(s*.92,s*1.6,6,1,!0);u.translate(0,o+s*.8,0);let d=z([c.toNonIndexed(),u.toNonIndexed()]);d.deleteAttribute(`uv`),d.computeVertexNormals();let p=d.attributes.position,m=new Float32Array(p.count),h=o+s*1.6;for(let e=0;e<p.count;e++)m[e]=Math.max(0,p.getY(e))/h;d.setAttribute(`aTip`,new b(m,1)),d.rotateY(t()*6.28),d.applyQuaternion(new D().setFromUnitVectors(l,i));let _=i.clone().multiplyScalar(.6);d.translate(_.x,_.y,_.z),n.push(r(d,t(),!1))}}let d=z(n);d.computeBoundingSphere();let p=1/d.boundingSphere.radius;d.scale(p,p,p);let m=new E({uniforms:{uFade:q,uSun:{value:e},uTime:{value:0}},defines:{FADEA:1},vertexShader:ze+`attribute float aFacet; attribute float aTip; varying float vF; varying float vT; void main(){ vF = aFacet; vT = aTip; commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade, uTime; uniform vec3 uSun; ${B}${G}
      varying vec3 vObj; varying vec3 vNW; varying vec3 vPW; varying float vF; varying float vT;
      void main(){
        vec3 n = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        float nv = clamp(dot(n,V), 0., 1.), ndl = max(dot(n,L), 0.);
        vec3 H = normalize(L + V); float nh = max(dot(n,H), 0.);
        float fr = .04 + .96*pow(1. - nv, 5.);
        vec3 film = .5 + .5*cos(6.2831853*(nv*1.1 + vF*.6 + vec3(.0,.33,.67)));
        float slow = .85 + .15*sin(uTime*.35 + vF*6.28);   // 18 s glow drift, low contrast
        vec3 c;
        if (vT < -.5) {   // pearlescent core with faint glowing veins
          float vein = pow(1. - abs(gnoise(vObj*5.5)), 28.)*smoothstep(.45,.7, fbm3(vObj*3. + 2.));
          vec3 base = vec3(.10,.09,.16);
          c = base*(.15 + ndl*1.1) + film*(.18*ndl + .35*fr) + vec3(.35,.9,1.)*vein*.35*slow + vec3(1.,.97,.92)*pow(nh, 60.)*.8*ndl;
        } else {          // glassy crystals: dark body, mirror fresnel, inner light rising toward the tip
          vec3 glow = mix(vec3(.35,.25,1.), vec3(.25,1.,.9), vF);
          glow = mix(glow, vec3(1.,.35,.85), step(.7, vF));
          float inner = (.12 + .9*pow(vT, 1.6))*slow;
          c = vec3(.02,.02,.04)*ndl + glow*inner*.75 + film*fr*.9 + vec3(1.,.98,.95)*(pow(nh, 140.)*2.5 + pow(nh, 18.)*.12)*ndl;
          c += glow*pow(1. - nv, 2.)*.25;
        }
        gl_FragColor = vec4(c, 1.);${Be}
      }`}),h=new o(d,m);return h.name=`neonCrystal`,{mesh:h,mats:[m]}}function Ue(e,t,n){let r=B+`
    vec2 vor(vec3 p){ vec3 i = floor(p), f = fract(p); float d1 = 8., d2 = 8.;
      for (int x=-1;x<=1;x++) for (int y=-1;y<=1;y++) for (int z=-1;z<=1;z++){
        vec3 g = vec3(float(x),float(y),float(z)); vec3 o = .5 + .45*hash33(i+g); float d = length(g + o - f);
        if (d < d1){ d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
      return vec2(d1, d2); }`,i=K(e,n===`low`?512:1024,`
    vec3 d = normalize(vDir);
    vec3 q = d*2.2 + .35*vec3(fbm3(d*3.+1.), fbm3(d*3.+4.), fbm3(d*3.+8.));
    float h = fbm(q*1.6);
    float land = smoothstep(.47, .53, h);
    vec2 v1 = vor(q*3.2); vec2 v2 = vor(q*8.5 + 3.);
    float m1 = smoothstep(.45,.62, fbm3(d*2.4 + 6.)), m2 = smoothstep(.5,.66, fbm3(d*4.1 + 1.));
    float cr = exp(-(v1.y - v1.x)/.04)*(.25 + .75*m1) + exp(-(v2.y - v2.x)/.03)*.6*m2;
    cr *= land*smoothstep(.5,.58,h + .05*fbm3(d*20.));
    float sw = fbm(vec3(d*5.) + .8*vec3(fbm3(d*4.), fbm3(d*4.+3.), 0.));
    float bio = (1. - land)*smoothstep(.45,.85, sw)*(.6 + .4*fbm3(d*25.));
    float alb = .7 + .3*fbm3(d*18.);
    gl_FragColor = vec4(h, clamp(cr,0.,1.), bio, alb);`,{pre:r}),a=new E({uniforms:{uFade:q,uSun:{value:t},tS:{value:i},uTime:{value:0}},defines:{FADEA:1},vertexShader:ze+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade, uTime; uniform vec3 uSun; uniform samplerCube tS; ${G}
      varying vec3 vObj; varying vec3 vNW; varying vec3 vPW;
      void main(){
        vec3 n = normalize(vNW), L = normalize(uSun), V = normalize(cameraPosition - vPW);
        vec4 s = texture(tS, normalize(vObj));
        float land = smoothstep(.47,.53, s.r);
        float ndl = dot(n,L), lit = max(ndl,0.);
        vec3 rock = mix(vec3(.025,.022,.035), vec3(.075,.06,.09), s.a)*(.8 + .4*s.r);
        vec3 sea = vec3(.005,.035,.06);
        vec3 c = mix(sea, rock, land)*lit*1.4;
        vec3 Hh = normalize(L+V); c += (1.-land)*vec3(.8,.95,1.)*pow(max(dot(n,Hh),0.), 220.)*1.2*step(0.,ndl);
        float night = 1. - smoothstep(-.15, .25, ndl);
        float pulse = .85 + .15*sin(uTime*.3);   // ~21 s, low contrast
        c += mix(vec3(.55,1.,.25), vec3(1.,.55,.15), smoothstep(.6,1.,s.g))*pow(s.g, 1.5)*2.4*(.6 + .4*night);                       // glowing cracks (lime)
        c += vec3(.1,.85,1.)*s.b*(.10 + .9*night)*.75*pulse;                                // bioluminescent seas
        float fr = pow(1. - clamp(dot(n,V),0.,1.), 3.5);
        c += vec3(1.,.3,.8)*fr*(.25 + .75*smoothstep(-.3,.4,ndl))*.45;                       // magenta haze rim
        gl_FragColor = vec4(c, 1.);${Be}
      }`}),s=new o(new C(1,96,48),a);s.name=`neonCracked`;let c=new E({uniforms:{uFade:q,uSun:{value:t}},transparent:!0,blending:2,depthWrite:!1,side:1,vertexShader:ze+`void main(){ commonVert(); }`,fragmentShader:`precision highp float; uniform float uFade; uniform vec3 uSun; ${G}
      varying vec3 vNW; varying vec3 vPW; varying vec3 vC; varying float vR;
      void main(){
        vec3 V = normalize(cameraPosition - vPW);
        // distance of the view ray from the planet center, in planet radii (halo shell = 1.08)
        vec3 oc = vC - cameraPosition; vec3 rd = normalize(vPW - cameraPosition);
        float tc = dot(oc, rd); float dmin = sqrt(max(dot(oc,oc) - tc*tc, 0.))/vR;
        float x = max(dmin - 1., 0.);
        float a = (exp(-x/.022)*.9 + exp(-x/.06)*.22)*(1. - smoothstep(1.05, 1.08, dmin));
        vec3 L = normalize(uSun); float side = .45 + .55*smoothstep(-.6,.6, dot(normalize(cameraPosition + rd*tc - vC), L));
        vec3 c = vec3(1.,.32,.82)*a*side;
        gl_FragColor = vec4(c, 1.);
        #include <colorspace_fragment>
        gl_FragColor.rgb *= uFade;
        gl_FragColor.rgb = ditherOut(gl_FragColor.rgb);
      }`}),l=new o(new C(1.08,96,48),c);l.name=`neonCrackedHalo`,l.renderOrder=3;let u=new T;return u.name=`neonCrackedSystem`,u.add(s,l),{group:u,planet:s,mats:[a]}}function We({renderer:e,sunDir:t,quality:n}){let r=new T;r.name=`neonBodies`;let i=Q,a=Ve(t);a.group.position.copy(i.ringed.dir).multiplyScalar(i.ringed.dist),a.group.scale.setScalar(i.ringed.radius),a.group.rotation.set(.45,.3,-.35);let o=He(t);o.mesh.position.copy(i.crystal.dir).multiplyScalar(i.crystal.dist),o.mesh.scale.setScalar(i.crystal.radius);let s=Ue(e,t,n);s.group.position.copy(i.cracked.dir).multiplyScalar(i.cracked.dist),s.group.scale.setScalar(i.cracked.radius),r.add(a.group,o.mesh,s.group);let c=[a.planet.material,o.mesh.material,s.planet.material],l=[a.planet.material,o.mesh.material,s.planet.material],u=0;function d(e){u+=e;for(let e of c)e.uniforms.uTime.value=u;o.mesh.rotation.y+=e*.006,o.mesh.rotation.x+=e*.0023,s.planet.rotation.y+=e*.0015}return{group:r,alphaMats:l,update:d,ringed:a,crystal:o,cracked:s}}var $={sun:{dir:new f(.8,.3,.33).normalize(),dist:18e3},earth:{dir:new f(-.38,-.27,-.88).normalize(),dist:14e3,radius:2500},moon:{dir:new f(.06,.36,-.93).normalize(),dist:9e3,radius:700},blackHole:{position:new f(2600,500,-3800),rs:100,radius:260,diskNormal:new f(.2,1,.05).normalize()},giant:{dir:new f(-.8,.3,.52).normalize(),dist:12e3,radius:1800},neon:Q};async function Ge({renderer:e,scene:t,quality:n=`high`,assetBase:r=`/`}={}){let i=n===`low`||n===`medium`?n:`high`,a=$.sun.dir.clone(),o=await ce(r,i),s=ae(e,i===`low`?512:1024),c=se({renderer:e,mwTex:s,stars:o.stars,dsos:o.dsos,quality:i}),l=c.group,u=new T;u.name=`farGroup`;let d=await de({renderer:e,sunDir:a,base:r,quality:i});d.group.position.copy($.earth.dir).multiplyScalar($.earth.dist),d.group.scale.setScalar($.earth.radius);let p=fe({renderer:e,sunDir:a,quality:i});p.mesh.position.copy($.moon.dir).multiplyScalar($.moon.dist),p.mesh.scale.setScalar($.moon.radius);let m=me({sunDir:a});m.group.position.copy($.giant.dir).multiplyScalar($.giant.dist),m.group.scale.setScalar($.giant.radius),m.group.rotation.set(.32,.6,.42);let h=he({renderer:e});h.mesh.position.copy(a).multiplyScalar($.sun.dist),h.mesh.scale.setScalar($.sun.dist*Math.tan(13*Math.PI/180)),u.add(d.group,p.mesh,m.group,h.mesh);let g=xe({quality:i,radius:2500}),_=Me(e,i===`low`?512:1024),v=Re(i),y=c.makeStarMesh(v.stars,`neonStars`);y.visible=!1,l.add(y);let b=We({renderer:e,sunDir:a,quality:i}),x=he({renderer:e,tint:new S(.8,.92,1)});x.mesh.position.copy(a).multiplyScalar($.sun.dist),x.mesh.scale.setScalar($.sun.dist*Math.tan(10*Math.PI/180)),x.mesh.name=`neonSun`,b.group.add(x.mesh),b.group.visible=!1,u.add(b.group);let C=[d.group,p.mesh,m.group,h.mesh],w=Se(e,s,[{dir:a,color:new f(60,50,38),pow:3e3},{dir:a,color:new f(1.1,.9,.65),pow:14},{dir:$.earth.dir,color:new f(.3,.55,1.1),pow:90},{dir:$.earth.dir,color:new f(.08,.16,.34),pow:5},{dir:$.moon.dir,color:new f(.9,.9,.85),pow:900},{dir:$.giant.dir,color:new f(.75,.58,.38),pow:140}]),E=i===`low`?512:1024;function D(){c.shared.bakeRes=E,c.shared.uNoDither.value=1;let t=ke(e,l,E);return c.shared.bakeRes=0,c.shared.uNoDither.value=0,t}let O=D();c.skyMat.uniforms.tMW.value=_,c.shared.uGain.value=2,c.starMesh.visible=!1,c.dsoMesh&&(c.dsoMesh.visible=!1),y.visible=!0;let k=D();c.skyMat.uniforms.tMW.value=s,c.shared.uGain.value=1,c.starMesh.visible=!0,c.dsoMesh&&(c.dsoMesh.visible=!0),y.visible=!1;let A=je({renderer:e,position:$.blackHole.position,rs:$.blackHole.rs,diskNormal:$.blackHole.diskNormal,skyTex:O}),j={object:A.object,position:A.position,radius:A.radius,rs:A.rs,lensRadius:A.lensRadius,diskRadius:A.diskOuter},M=[{dir:a,color:new f(30,38,46),pow:3e3},{dir:a,color:new f(.55,.75,1),pow:14},{dir:Q.ringed.dir,color:new f(.9,.25,.85),pow:40},{dir:Q.cracked.dir,color:new f(.25,.9,.45),pow:30},{dir:Q.crystal.dir,color:new f(.35,.8,1),pow:300},{dir:$.blackHole.position.clone().normalize(),color:new f(1,.82,.45),pow:200}],N=null,P=[{sunColor:new S(16774374),sunIntensity:3,hemiSky:new S(9416959),hemiGround:new S(1709088)},{sunColor:new S(.8,.9,1),sunIntensity:2.4,hemiSky:new S(12611839),hemiGround:new S(1065018)}],F=0;function ee(t){t=+!!t,F=t;let n=t===1;c.skyMat.uniforms.tMW.value=n?_:s,c.shared.uGain.value=n?2:1,c.starMesh.visible=!n,c.dsoMesh&&(c.dsoMesh.visible=!n),y.visible=n;for(let e of C)e.visible=!n;b.group.visible=n,g.setCrystal(+!!n),A.uniforms.tSky.value=n?k:O,A.uniforms.uPortal.value=+!!n,n&&!N&&(N=Se(e,_,M,{scale:1.1,wash:0}));let r=P[t];return{envMap:n?N:w,sunColor:r.sunColor.clone(),sunIntensity:r.sunIntensity,hemiSky:r.hemiSky.clone(),hemiGround:r.hemiGround.clone(),dimension:t}}let I={target:0,cur:0,dir:new f(0,0,-1),tdir:new f(0,0,-1)};function te(e,t){I.target=Math.min(1,Math.max(0,e||0)),t&&(I.tdir.copy(t),I.tdir.lengthSq()<1e-6&&I.tdir.set(0,0,-1),I.tdir.normalize())}let L=Math.cos(2*Math.PI/180);function R(e){let t=null,n=1e9,r=F===1?v.named:o.named;for(let i=0;i<r.length;i++){let a=r[i],o=a.dx*e.x+a.dy*e.y+a.dz*e.z;if(o<L)continue;let s=Math.acos(Math.min(1,o))*(1+.15*a.mag);s<n&&(n=s,t=a)}if(!t)return null;let[i,a,s,c]=t.info;return F===1?{name:i,distanceLy:a,spectral:s,constellation:c,invented:!0}:{name:i,distanceLy:a,spectral:s,constellation:c}}function z(e){if(F===1)return null;let t=null,n=1e9;for(let r of o.dsoNamed){let i=r.x*e.x+r.y*e.y+r.z*e.z,a=Math.acos(Math.min(1,i));a<Math.max(r.size,.02)&&a<n&&(n=a,t=r)}return t?{name:t.name,type:t.t}:null}let B=[d.earth.material,p.mesh.material,m.planet.material,...b.alphaMats];function V(e){e=Math.min(1,Math.max(0,e)),q.value=e;let t=e<.999;for(let e of B)e.transparent=t;u.visible=e>.002}function H(e,t,n){n&&l.position.copy(n),e=Math.min(e||0,.1);let r=e/1.4;I.cur<I.target?I.cur=Math.min(I.target,I.cur+r):I.cur>I.target&&(I.cur=Math.max(I.target,I.cur-r));let i=I.cur,a=i*i*i*(i*(i*6-15)+10);c.shared.uWarp.value=a,c.shared.uBeta.value=.45*a,I.dir.lerp(I.tdir,Math.min(1,e*3)).normalize(),c.shared.uTravel.value.copy(I.dir),d.update(e),F===1&&b.update(e),A.update(t||0,a),g.update(e)}return{skyGroup:l,farGroup:u,envMap:w,blackHole:j,setDimension:ee,getDimension:()=>F,sunDirection:a,asteroids:g,setWarp:te,fadeFar:V,starInfoAt:R,dsoInfoAt:z,update:H,layout:$,_sky:c,_earth:d,_bh:A,_neon:b}}export{$ as LAYOUT,Ge as createUniverse};