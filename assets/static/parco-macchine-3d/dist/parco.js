/* Tedeschi, parco macchine nel tempo. Three.js r160 (MIT, vendor/THREE-LICENSE.txt). Sorgenti leggibili nella cartella superiore. */
import{a as cc}from"./pezzo-MBKY4GNX.js";import{a as td}from"./pezzo-6626GWO7.js";var As={};td(As,{ACESFilmicToneMapping:()=>Vl,Box3:()=>On,BoxGeometry:()=>Pi,BufferAttribute:()=>En,BufferGeometry:()=>zt,CanvasTexture:()=>Aa,CatmullRomCurve3:()=>gs,CylinderGeometry:()=>Fr,DataTexture:()=>Ea,DepthTexture:()=>Nr,DirectionalLight:()=>Ba,DoubleSide:()=>Nh,EquirectangularReflectionMapping:()=>cs,ExtrudeGeometry:()=>xs,Float32BufferAttribute:()=>it,FloatType:()=>Qn,Group:()=>wi,HalfFloatType:()=>Zi,HemisphereLight:()=>Fa,LatheGeometry:()=>Or,LinearFilter:()=>Ln,LinearMipmapLinearFilter:()=>Ar,MathUtils:()=>jh,Matrix4:()=>lt,Mesh:()=>bn,MeshPhysicalMaterial:()=>Da,MeshStandardMaterial:()=>ws,NearestFilter:()=>an,NoColorSpace:()=>Dn,OrthographicCamera:()=>Ur,PCFSoftShadowMap:()=>Gl,PMREMGenerator:()=>Dr,Path:()=>Ji,PerspectiveCamera:()=>fn,PlaneGeometry:()=>Ir,Quaternion:()=>Nn,RGBAFormat:()=>Un,RepeatWrapping:()=>hs,SRGBColorSpace:()=>Jt,Scene:()=>wa,ShaderMaterial:()=>jn,ShadowMaterial:()=>Ua,Shape:()=>Br,SphereGeometry:()=>Ms,TextureLoader:()=>Na,TorusGeometry:()=>bs,TubeGeometry:()=>Ss,UnsignedByteType:()=>pi,UnsignedIntType:()=>Kn,Vector2:()=>Ie,Vector3:()=>H,WebGLRenderTarget:()=>Xn,WebGLRenderer:()=>fs});var Dh=1,Gl=2,hi=3,Ti=0,Sn=1,Nh=2;var Vi=100;var Ho=204,Wo=205;var Oh=0,nd=1,id=2,Ei=0,rd=1,sd=2,ad=3,Vl=4,od=5,ld=6;var Fh=300,wr=301,Er=302,cs=303,Xo=304,za=306,hs=1e3,di=1001,jo=1002,an=1003,hc=1004;var oo=1005;var Ln=1006,cd=1007;var Ar=1008;var pi=1009;var Hl=1012,Bh=1013,Kn=1014,Qn=1015,Zi=1016,zh=1017,kh=1018,ji=1020;var Un=1023;var qi=1026,Tr=1027;var Gh=1029;var Vh=1031,Hh=1033,lo=33776,co=33777,ho=33778,uo=33779,uc=35840,dc=35841,pc=35842,fc=35843,Wh=36196,mc=37492,gc=37496,vc=37808,_c=37809,yc=37810,xc=37811,Mc=37812,bc=37813,Sc=37814,wc=37815,Ec=37816,Ac=37817,Tc=37818,Cc=37819,Rc=37820,Pc=37821,po=36492,Lc=36494,Ic=36495;var Uc=36284,Dc=36285,Nc=36286;var la=2300,ca=2301,fo=2302,Oc=2400,Fc=2401,Bc=2402;var Xh=3e3,Yi=3001;var Dn="",Jt="srgb",fi="srgb-linear",Wl="display-p3",ka="display-p3-linear",ha="linear",Tt="srgb",ua="rec709",da="p3";var ir=7680;var zc=35044;var kc="300 es",qo=1035,Cr=2e3,pa=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Mr=Math.PI/180,us=180/Math.PI;function $i(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(cn[255&r]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[255&e]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[63&t|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[255&n]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Kt(r,e,t){return Math.max(e,Math.min(t,r))}function Yo(r,e){return(r%e+e)%e}function is(r,e,t){return(1-t)*r+t*e}function Zo(r){return(r&r-1)==0&&r!==0}function fa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var jh={DEG2RAD:Mr,RAD2DEG:us,generateUUID:$i,clamp:Kt,euclideanModulo:Yo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:is,damp:function(r,e,t,n){return is(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Yo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Gc=r);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Mr},radToDeg:function(r){return r*us},isPowerOfTwo:Zo,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:fa,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*p,o*l);break;case"YZY":r.set(c*p,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*p,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:dn,denormalize:yr},Ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],m=n[8],_=i[0],f=i[3],v=i[6],y=i[1],g=i[4],M=i[7],w=i[2],b=i[5],E=i[8];return s[0]=a*_+o*y+c*w,s[3]=a*f+o*g+c*b,s[6]=a*v+o*M+c*E,s[1]=l*_+h*y+u*w,s[4]=l*f+h*g+u*b,s[7]=l*v+h*M+u*E,s[2]=p*_+d*y+m*w,s[5]=p*f+d*g+m*b,s[8]=p*v+d*M+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*s,d=l*s-a*c,m=t*u+n*p+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=p*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mo=new ut;function qh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hd(){let r=ds("canvas");return r.style.display="block",r}var Vc={};function rs(r){r in Vc||(Vc[r]=!0,console.warn(r))}var Hc=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wc=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[fi]:{transfer:ha,primaries:ua,toReference:r=>r,fromReference:r=>r},[Jt]:{transfer:Tt,primaries:ua,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ka]:{transfer:ha,primaries:da,toReference:r=>r.applyMatrix3(Wc),fromReference:r=>r.applyMatrix3(Hc)},[Wl]:{transfer:Tt,primaries:da,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wc),fromReference:r=>r.applyMatrix3(Hc).convertLinearToSRGB()}},ud=new Set([fi,ka]),bt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ud.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Us[e].toReference;return(0,Us[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Us[r].primaries},getTransfer:function(r){return r===Dn?ha:Us[r].transfer}};function br(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function go(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var rr,ma=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=ds("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*br(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*br(t[n]/255)):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dd=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(vo(i[a].image)):s.push(vo(i[a]))}else s=vo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ma.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pd=0,wn=class r extends Ci{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=$i(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yi?Jt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Yi:Xh}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?Jt:Dn}};wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=Fh,wn.DEFAULT_ANISOTROPY=1;var qt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],m=c[9],_=c[2],f=c[6],v=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(m+f)<.1&&Math.abs(l+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,M=(d+1)/2,w=(v+1)/2,b=(h+p)/4,E=(u+_)/4,z=(m+f)/4;return g>M&&g>w?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=b/n,s=E/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=z/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=z/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-m)*(f-m)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(f-m)/y,this.y=(u-_)/y,this.z=(p-h)/y,this.w=Math.acos((l+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?Jt:Dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},va=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],p=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=p,e[t+1]=d,e[t+2]=m,void(e[t+3]=_);if(u!==_||c!==p||l!==d||h!==m){let f=1-o,v=c*p+l*d+h*m+u*_,y=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let w=Math.sqrt(g),b=Math.atan2(w,v*y);f=Math.sin(f*b)/w,o=Math.sin(o*b)/w}let M=o*y;if(c=c*f+p*M,l=l*f+d*M,h=h*f+m*M,u=u*f+_*M,f===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],p=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*d-l*p,e[t+1]=c*m+h*p+l*u-o*d,e[t+2]=l*m+h*d+o*p-c*u,e[t+3]=h*m-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),p=c(n/2),d=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=p*h*u+l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u-p*d*m;break;case"YXZ":this._x=p*h*u+l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u+p*d*m;break;case"ZXY":this._x=p*h*u-l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u-p*d*m;break;case"ZYX":this._x=p*h*u-l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u+p*d*m;break;case"YZX":this._x=p*h*u+l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u-p*d*m;break;case"XZY":this._x=p*h*u-l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u+p*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new H,Xc=new Nn,On=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ns.subVectors(this.max,Qr),sr.subVectors(e.a,Qr),ar.subVectors(e.b,Qr),or.subVectors(e.c,Qr),yi.subVectors(ar,sr),xi.subVectors(or,ar),Fi.subVectors(sr,or);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,xi.z,0,-xi.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-Fi.y,Fi.x,0];return!!yo(t,sr,ar,or,Ns)&&(t=[1,0,0,0,1,0,0,0,1],!!yo(t,sr,ar,or,Ns)&&(Os.crossVectors(yi,xi),t=[Os.x,Os.y,Os.z],yo(t,sr,ar,or,Ns)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new H,new H,new H,new H,new H,new H,new H,new H],Gn=new H,Ds=new On,sr=new H,ar=new H,or=new H,yi=new H,xi=new H,Fi=new H,Qr=new H,Ns=new H,Os=new H,Bi=new H;function yo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bi.fromArray(r,s);let o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fd=new On,$r=new H,xo=new H,$n=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(xo)),this.expandByPoint($r.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new H,Mo=new H,Fs=new H,Mi=new H,bo=new H,Bs=new H,So=new H,Rr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mo.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Mo);let s=.5*e.distanceTo(t),a=-this.direction.dot(Fs),o=Mi.dot(this.direction),c=-Mi.dot(Fs),l=Mi.lengthSq(),h=Math.abs(1-a*a),u,p,d,m;if(h>0)if(u=a*c-o,p=a*o-c,m=s*h,u>=0)if(p>=-m)if(p<=m){let _=1/h;u*=_,p*=_,d=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-m?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l):p<=m?(u=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mo).addScaledVector(Fs,p),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,s){bo.subVectors(t,e),Bs.subVectors(n,e),So.crossVectors(bo,Bs);let a,o=this.direction.dot(So);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Mi.subVectors(this.origin,e);let c=a*this.direction.dot(Bs.crossVectors(Mi,Bs));if(c<0)return null;let l=a*this.direction.dot(bo.cross(Mi));if(l<0||c+l>o)return null;let h=-a*Mi.dot(So);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,p,d,m,_,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,p,d,m,_,f)}set(e,t,n,i,s,a,o,c,l,h,u,p,d,m,_,f){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=l,v[6]=h,v[10]=u,v[14]=p,v[3]=d,v[7]=m,v[11]=_,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=p-_*l,t[9]=-o*c,t[2]=_-p*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,d=c*u,m=l*h,_=l*u;t[0]=p+_*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,d=c*u,m=l*h,_=l*u;t[0]=p-_*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-p*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=p-_*u}else if(e.order==="XZY"){let p=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){let i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),bi.crossVectors(n,Rn),bi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),bi.crossVectors(n,Rn)),bi.normalize(),zs.crossVectors(Rn,bi),i[0]=bi.x,i[4]=zs.x,i[8]=Rn.x,i[1]=bi.y,i[5]=zs.y,i[9]=Rn.y,i[2]=bi.z,i[6]=zs.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],m=n[2],_=n[6],f=n[10],v=n[14],y=n[3],g=n[7],M=n[11],w=n[15],b=i[0],E=i[4],z=i[8],P=i[12],D=i[1],Q=i[5],R=i[9],Z=i[13],j=i[2],$=i[6],de=i[10],ae=i[14],K=i[3],se=i[7],L=i[11],W=i[15];return s[0]=a*b+o*D+c*j+l*K,s[4]=a*E+o*Q+c*$+l*se,s[8]=a*z+o*R+c*de+l*L,s[12]=a*P+o*Z+c*ae+l*W,s[1]=h*b+u*D+p*j+d*K,s[5]=h*E+u*Q+p*$+d*se,s[9]=h*z+u*R+p*de+d*L,s[13]=h*P+u*Z+p*ae+d*W,s[2]=m*b+_*D+f*j+v*K,s[6]=m*E+_*Q+f*$+v*se,s[10]=m*z+_*R+f*de+v*L,s[14]=m*P+_*Z+f*ae+v*W,s[3]=y*b+g*D+M*j+w*K,s[7]=y*E+g*Q+M*$+w*se,s[11]=y*z+g*R+M*de+w*L,s[15]=y*P+g*Z+M*ae+w*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+s*c*u-i*l*u-s*o*p+n*l*p+i*o*d-n*c*d)+e[7]*(+t*c*d-t*l*p+s*a*p-i*a*d+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*p+i*a*u-n*a*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],m=e[12],_=e[13],f=e[14],v=e[15],y=u*f*l-_*p*l+_*c*d-o*f*d-u*c*v+o*p*v,g=m*p*l-h*f*l-m*c*d+a*f*d+h*c*v-a*p*v,M=h*_*l-m*u*l+m*o*d-a*_*d-h*o*v+a*u*v,w=m*u*c-h*_*c-m*o*p+a*_*p+h*o*f-a*u*f,b=t*y+n*g+i*M+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=y*E,e[1]=(_*p*s-u*f*s-_*i*d+n*f*d+u*i*v-n*p*v)*E,e[2]=(o*f*s-_*c*s+_*i*l-n*f*l-o*i*v+n*c*v)*E,e[3]=(u*c*s-o*p*s-u*i*l+n*p*l+o*i*d-n*c*d)*E,e[4]=g*E,e[5]=(h*f*s-m*p*s+m*i*d-t*f*d-h*i*v+t*p*v)*E,e[6]=(m*c*s-a*f*s-m*i*l+t*f*l+a*i*v-t*c*v)*E,e[7]=(a*p*s-h*c*s+h*i*l-t*p*l-a*i*d+t*c*d)*E,e[8]=M*E,e[9]=(m*u*s-h*_*s-m*n*d+t*_*d+h*n*v-t*u*v)*E,e[10]=(a*_*s-m*o*s+m*n*l-t*_*l-a*n*v+t*o*v)*E,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*E,e[12]=w*E,e[13]=(h*_*i-m*u*i+m*n*p-t*_*p-h*n*f+t*u*f)*E,e[14]=(m*o*i-a*_*i-m*n*c+t*_*c+a*n*f-t*o*f)*E,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*p+t*o*p)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,p=s*l,d=s*h,m=s*u,_=a*h,f=a*u,v=o*u,y=c*l,g=c*h,M=c*u,w=n.x,b=n.y,E=n.z;return i[0]=(1-(_+v))*w,i[1]=(d+M)*w,i[2]=(m-g)*w,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(p+v))*b,i[6]=(f+y)*b,i[7]=0,i[8]=(m+g)*E,i[9]=(f-y)*E,i[10]=(1-(p+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=lr.set(i[0],i[1],i[2]).length(),a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);let c=1/s,l=1/a,h=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=l,Vn.elements[5]*=l,Vn.elements[6]*=l,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i),d,m;if(o===Cr)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==pa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),m=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),p=(t+e)*l,d=(n+i)*h,m,_;if(o===Cr)m=(a+s)*u,_=-2*u;else{if(o!==pa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,_=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},lr=new H,Vn=new lt,md=new H(0,0,0),gd=new H(1,1,1),bi=new H,zs=new H,Rn=new H,jc=new lt,qc=new Nn,_a=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_a.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},vd=0,Yc=new H,cr=new Nn,oi=new lt,ks=new H,es=new H,_d=new H,yd=new Nn,Zc=new H(1,0,0),Jc=new H(0,1,0),Kc=new H(0,0,1),xd={type:"added"},Md={type:"removed"},mn=class r extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new _a,n=new Nn,i=new H(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new ut}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(es,ks,this.up):oi.lookAt(ks,es,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(oi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Md)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mn.DEFAULT_UP=new H(0,1,0),mn.DEFAULT_MATRIX_AUTO_UPDATE=!0,mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new H,li=new H,wo=new H,ci=new H,hr=new H,ur=new H,Qc=new H,Eo=new H,Ao=new H,To=new H,Gs=!1,Xi=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Hn.subVectors(i,t),li.subVectors(n,t),wo.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(li),c=Hn.dot(wo),l=li.dot(li),h=li.dot(wo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(l*c-o*h)*p,m=(a*h-o*c)*p;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)!==null&&ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,i,s,a,o,c){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),li.subVectors(e,t),Hn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),.5*Hn.cross(li).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;hr.subVectors(i,n),ur.subVectors(s,n),Eo.subVectors(e,n);let c=hr.dot(Eo),l=ur.dot(Eo);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,i);let h=hr.dot(Ao),u=ur.dot(Ao);if(h>=0&&u<=h)return t.copy(i);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(hr,a);To.subVectors(e,s);let d=hr.dot(To),m=ur.dot(To);if(m>=0&&d<=m)return t.copy(s);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ur,o);let f=h*m-d*u;if(f<=0&&u-h>=0&&d-m>=0)return Qc.subVectors(s,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Qc,o);let v=1/(f+_+p);return a=_*v,o=p*v,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Yo(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Co(a,s,e+1/3),this.g=Co(a,s,e),this.b=Co(a,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return bt.fromWorkingColorSpace(hn.copy(this),e),65536*Math.round(Kt(255*hn.r,0,255))+256*Math.round(Kt(255*hn.g,0,255))+Math.round(Kt(255*hn.b,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,s=hn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Jt){bt.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,i=hn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Vs);let n=is(Si.h,Vs.h,t),i=is(Si.s,Vs.s,t),s=is(Si.l,Vs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ht;ht.NAMES=Yh;var bd=0,Ri=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=1,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Wo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xa=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cm=Sd();function Sd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(8388608&l)==0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var jt=new H,Hs=new Ie,En=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}};var Ma=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ba=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}};var wd=0,In=new lt,Ro=new mn,dr=new H,Pn=new On,ts=new On,nn=new H,zt=class r extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?ba:Ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new H,1/0);if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Pn.min,ts.min),Pn.expandByPoint(nn),nn.addVectors(Pn.max,ts.max),Pn.expandByPoint(nn)):(Pn.expandByPoint(ts.min),Pn.expandByPoint(ts.max))}Pn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)nn.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(e,l),nn.add(dr)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<o;D++)l[D]=new H,h[D]=new H;let u=new H,p=new H,d=new H,m=new Ie,_=new Ie,f=new Ie,v=new H,y=new H;function g(D,Q,R){u.fromArray(i,3*D),p.fromArray(i,3*Q),d.fromArray(i,3*R),m.fromArray(a,2*D),_.fromArray(a,2*Q),f.fromArray(a,2*R),p.sub(u),d.sub(u),_.sub(m),f.sub(m);let Z=1/(_.x*f.y-f.x*_.y);isFinite(Z)&&(v.copy(p).multiplyScalar(f.y).addScaledVector(d,-_.y).multiplyScalar(Z),y.copy(d).multiplyScalar(_.x).addScaledVector(p,-f.x).multiplyScalar(Z),l[D].add(v),l[Q].add(v),l[R].add(v),h[D].add(y),h[Q].add(y),h[R].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,Q=M.length;D<Q;++D){let R=M[D],Z=R.start;for(let j=Z,$=Z+R.count;j<$;j+=3)g(n[j+0],n[j+1],n[j+2])}let w=new H,b=new H,E=new H,z=new H;function P(D){E.fromArray(s,3*D),z.copy(E);let Q=l[D];w.copy(Q),w.sub(E.multiplyScalar(E.dot(Q))).normalize(),b.crossVectors(z,Q);let R=b.dot(h[D])<0?-1:1;c[4*D]=w.x,c[4*D+1]=w.y,c[4*D+2]=w.z,c[4*D+3]=R}for(let D=0,Q=M.length;D<Q;++D){let R=M[D],Z=R.start;for(let j=Z,$=Z+R.count;j<$;j+=3)P(n[j+0]),P(n[j+1]),P(n[j+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new H,s=new H,a=new H,o=new H,c=new H,l=new H,h=new H,u=new H;if(e)for(let p=0,d=e.count;p<d;p+=3){let m=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h),d=0,m=0;for(let _=0,f=c.length;_<f;_++){d=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let v=0;v<h;v++)p[m++]=l[d++]}return new En(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let p=e(l[h],n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new lt,zi=new Rr,Ws=new $n,eh=new H,pr=new H,fr=new H,mr=new H,Po=new H,Xs=new H,js=new Ie,qs=new Ie,Ys=new Ie,th=new H,nh=new H,ih=new H,Zs=new H,Js=new H,bn=class extends mn{constructor(e=new zt,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Po.fromBufferAttribute(u,e),a?Xs.addScaledVector(Po,h):Xs.addScaledVector(Po.sub(t),h))}t.add(Xs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),zi.copy(e.ray).recast(e.near),Ws.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Ws,eh)===null||zi.origin.distanceToSquared(eh)>(e.far-e.near)**2))return;$c.copy(s).invert(),zi.copy(e.ray).applyMatrix4($c),n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,zi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=p.length;m<_;m++){let f=p[m],v=a[f.materialIndex];for(let y=Math.max(f.start,d.start),g=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));y<g;y+=3)i=Ks(this,v,e,n,l,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);m<_;m+=3)i=Ks(this,a,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=p.length;m<_;m++){let f=p[m],v=a[f.materialIndex];for(let y=Math.max(f.start,d.start),g=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));y<g;y+=3)i=Ks(this,v,e,n,l,h,u,y,y+1,y+2),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);m<_;m+=3)i=Ks(this,a,e,n,l,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function Ks(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,pr),r.getVertexPosition(c,fr),r.getVertexPosition(l,mr);let h=(function(u,p,d,m,_,f,v,y){let g;if(g=p.side===Sn?m.intersectTriangle(v,f,_,!0,y):m.intersectTriangle(_,f,v,p.side===Ti,y),g===null)return null;Js.copy(y),Js.applyMatrix4(u.matrixWorld);let M=d.ray.origin.distanceTo(Js);return M<d.near||M>d.far?null:{distance:M,point:Js.clone(),object:u}})(r,e,t,n,pr,fr,mr,Zs);if(h){i&&(js.fromBufferAttribute(i,o),qs.fromBufferAttribute(i,c),Ys.fromBufferAttribute(i,l),h.uv=Xi.getInterpolation(Zs,pr,fr,mr,js,qs,Ys,new Ie)),s&&(js.fromBufferAttribute(s,o),qs.fromBufferAttribute(s,c),Ys.fromBufferAttribute(s,l),h.uv1=Xi.getInterpolation(Zs,pr,fr,mr,js,qs,Ys,new Ie),h.uv2=h.uv1),a&&(th.fromBufferAttribute(a,o),nh.fromBufferAttribute(a,c),ih.fromBufferAttribute(a,l),h.normal=Xi.getInterpolation(Zs,pr,fr,mr,th,nh,ih,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};Xi.getNormal(pr,fr,mr,u.normal),h.face=u}return h}var Pi=class r extends zt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],p=0,d=0;function m(_,f,v,y,g,M,w,b,E,z,P){let D=M/E,Q=w/z,R=M/2,Z=w/2,j=b/2,$=E+1,de=z+1,ae=0,K=0,se=new H;for(let L=0;L<de;L++){let W=L*Q-Z;for(let Ee=0;Ee<$;Ee++){let S=Ee*D-R;se[_]=S*y,se[f]=W*g,se[v]=j,l.push(se.x,se.y,se.z),se[_]=0,se[f]=0,se[v]=b>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ee/E),u.push(1-L/z),ae+=1}}for(let L=0;L<z;L++)for(let W=0;W<E;W++){let Ee=p+W+$*L,S=p+W+$*(L+1),A=p+(W+1)+$*(L+1),F=p+(W+1)+$*L;c.push(Ee,S,F),c.push(S,A,F),K+=6}o.addGroup(d,K,P),d+=K,p+=ae}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Pr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){let e={};for(let t=0;t<r.length;t++){let n=Pr(r[t]);for(let i in n)e[i]=n[i]}return e}function Zh(r){return r.getRenderTarget()===null?r.outputColorSpace:bt.workingColorSpace}var Ed={clone:Pr,merge:pn},jn=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ps=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fn=class extends ps{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*us*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Mr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*us*Math.atan(Math.tan(.5*Mr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Mr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,Qo=class extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(gr,1,e,t);i.layers=this.layers,this.add(i);let s=new fn(gr,1,e,t);s.layers=this.layers,this.add(s);let a=new fn(gr,1,e,t);a.layers=this.layers,this.add(a);let o=new fn(gr,1,e,t);o.layers=this.layers,this.add(o);let c=new fn(gr,1,e,t);c.layers=this.layers,this.add(c);let l=new fn(gr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==pa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sa=class extends wn{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:wr,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$o=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yi?Jt:Dn),this.texture=new Sa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pi(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:0});s.uniforms.tEquirect.value=t;let a=new bn(i,s),o=t.minFilter;return t.minFilter===Ar&&(t.minFilter=Ln),new Qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Lo=new H,Ad=new H,Td=new ut,ui=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Lo.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Td.getNormalMatrix(e),i=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new $n,Qs=new H,Lr=class{constructor(e=new ui,t=new ui,n=new ui,i=new ui,s=new ui,a=new ui){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],p=i[7],d=i[8],m=i[9],_=i[10],f=i[11],v=i[12],y=i[13],g=i[14],M=i[15];if(n[0].setComponents(c-s,p-l,f-d,M-v).normalize(),n[1].setComponents(c+s,p+l,f+d,M+v).normalize(),n[2].setComponents(c+a,p+h,f+m,M+y).normalize(),n[3].setComponents(c-a,p-h,f-m,M-y).normalize(),n[4].setComponents(c-o,p-u,f-_,M-g).normalize(),t===Cr)n[5].setComponents(c+o,p+u,f+_,M+g).normalize();else{if(t!==pa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cd(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,c){let l=o.array,h=o.usage,u=l.byteLength,p=r.createBuffer(),d;if(r.bindBuffer(c,p),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=r.HALF_FLOAT}else d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);d=r.UNSIGNED_BYTE}return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,u=c._updateRange,p=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&p.length===0&&r.bufferSubData(l,0,h),p.length!==0){for(let d=0,m=p.length;d<m;d++){let _=p[d];t?r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count):r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h.subarray(_.start,_.start+_.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var Ir=class r extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,p=t/c,d=[],m=[],_=[],f=[];for(let v=0;v<h;v++){let y=v*p-a;for(let g=0;g<l;g++){let M=g*u-s;m.push(M,-y,0),_.push(0,0,1),f.push(g/o),f.push(1-v/c)}}for(let v=0;v<c;v++)for(let y=0;y<o;y++){let g=y+l*v,M=y+l*(v+1),w=y+1+l*(v+1),b=y+1+l*v;d.push(g,M,b),d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ct={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Fe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Jn={basic:{uniforms:pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:pn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:pn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:pn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:pn([Fe.points,Fe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:pn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:pn([Fe.common,Fe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:pn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:pn([Fe.sprite,Fe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:pn([Fe.common,Fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:pn([Fe.lights,Fe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Jn.physical={uniforms:pn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var $s={r:0,b:0,g:0};function Rd(r,e,t,n,i,s,a){let o=new ht(0),c,l,h=s===!0?0:1,u=null,p=0,d=null;function m(_,f){_.getRGB($s,Zh(r)),n.buffers.color.setClear($s.r,$s.g,$s.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(_,f=1){o.set(_),h=f,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,m(o,h)},render:function(_,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?m(o,h):y&&y.isColor&&(m(y,1),v=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===za)?(l===void 0&&(l=new bn(new Pi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Pr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=bt.getTransfer(y.colorSpace)!==Tt,u===y&&p===y.version&&d===r.toneMapping||(l.material.needsUpdate=!0,u=y,p=y.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bn(new Ir(2,2),new jn({name:"BackgroundMaterial",uniforms:Pr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=bt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&p===y.version&&d===r.toneMapping||(c.material.needsUpdate=!0,u=y,p=y.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}}}function Pd(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null),l=c,h=!1;function u(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function p(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function d(w){let b=[],E=[],z=[];for(let P=0;P<i;P++)b[P]=0,E[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:E,attributeDivisors:z,object:w,attributes:{},index:null}}function m(){let w=l.newAttributes;for(let b=0,E=w.length;b<E;b++)w[b]=0}function _(w){f(w,0)}function f(w,b){let E=l.newAttributes,z=l.enabledAttributes,P=l.attributeDivisors;E[w]=1,z[w]===0&&(r.enableVertexAttribArray(w),z[w]=1),P[w]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,b),P[w]=b)}function v(){let w=l.newAttributes,b=l.enabledAttributes;for(let E=0,z=b.length;E<z;E++)b[E]!==w[E]&&(r.disableVertexAttribArray(E),b[E]=0)}function y(w,b,E,z,P,D,Q){Q===!0?r.vertexAttribIPointer(w,b,E,P,D):r.vertexAttribPointer(w,b,E,z,P,D)}function g(){M(),h=!0,l!==c&&(l=c,u(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(w,b,E,z,P){let D=!1;if(a){let Q=(function(R,Z,j){let $=j.wireframe===!0,de=o[R.id];de===void 0&&(de={},o[R.id]=de);let ae=de[Z.id];ae===void 0&&(ae={},de[Z.id]=ae);let K=ae[$];return K===void 0&&(K=d(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ae[$]=K),K})(z,E,b);l!==Q&&(l=Q,u(l.object)),D=(function(R,Z,j,$){let de=l.attributes,ae=Z.attributes,K=0,se=j.getAttributes();for(let L in se)if(se[L].location>=0){let W=de[L],Ee=ae[L];if(Ee===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),W===void 0||W.attribute!==Ee||Ee&&W.data!==Ee.data)return!0;K++}return l.attributesNum!==K||l.index!==$})(w,z,E,P),D&&(function(R,Z,j,$){let de={},ae=Z.attributes,K=0,se=j.getAttributes();for(let L in se)if(se[L].location>=0){let W=ae[L];W===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let Ee={};Ee.attribute=W,W&&W.data&&(Ee.data=W.data),de[L]=Ee,K++}l.attributes=de,l.attributesNum=K,l.index=$})(w,z,E,P)}else{let Q=b.wireframe===!0;l.geometry===z.id&&l.program===E.id&&l.wireframe===Q||(l.geometry=z.id,l.program=E.id,l.wireframe=Q,D=!0)}P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,(function(Q,R,Z,j){if(n.isWebGL2===!1&&(Q.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let $=j.attributes,de=Z.getAttributes(),ae=R.defaultAttributeValues;for(let K in de){let se=de[K];if(se.location>=0){let L=$[K];if(L===void 0&&(K==="instanceMatrix"&&Q.instanceMatrix&&(L=Q.instanceMatrix),K==="instanceColor"&&Q.instanceColor&&(L=Q.instanceColor)),L!==void 0){let W=L.normalized,Ee=L.itemSize,S=t.get(L);if(S===void 0)continue;let A=S.buffer,F=S.type,B=S.bytesPerElement,U=n.isWebGL2===!0&&(F===r.INT||F===r.UNSIGNED_INT||L.gpuType===Bh);if(L.isInterleavedBufferAttribute){let X=L.data,k=X.stride,q=L.offset;if(X.isInstancedInterleavedBuffer){for(let ne=0;ne<se.locationSize;ne++)f(se.location+ne,X.meshPerAttribute);Q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<se.locationSize;ne++)_(se.location+ne);r.bindBuffer(r.ARRAY_BUFFER,A);for(let ne=0;ne<se.locationSize;ne++)y(se.location+ne,Ee/se.locationSize,F,W,k*B,(q+Ee/se.locationSize*ne)*B,U)}else{if(L.isInstancedBufferAttribute){for(let X=0;X<se.locationSize;X++)f(se.location+X,L.meshPerAttribute);Q.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let X=0;X<se.locationSize;X++)_(se.location+X);r.bindBuffer(r.ARRAY_BUFFER,A);for(let X=0;X<se.locationSize;X++)y(se.location+X,Ee/se.locationSize,F,W,Ee*B,Ee/se.locationSize*X*B,U)}}else if(ae!==void 0){let W=ae[K];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(se.location,W);break;case 3:r.vertexAttrib3fv(se.location,W);break;case 4:r.vertexAttrib4fv(se.location,W);break;default:r.vertexAttrib1fv(se.location,W)}}}}v()})(w,b,E,z),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:g,resetDefaultState:M,dispose:function(){g();for(let w in o){let b=o[w];for(let E in b){let z=b[E];for(let P in z)p(z[P].object),delete z[P];delete b[E]}delete o[w]}},releaseStatesOfGeometry:function(w){if(o[w.id]===void 0)return;let b=o[w.id];for(let E in b){let z=b[E];for(let P in z)p(z[P].object),delete z[P];delete b[E]}delete o[w.id]},releaseStatesOfProgram:function(w){for(let b in o){let E=o[b];if(E[w.id]===void 0)continue;let z=E[w.id];for(let P in z)p(z[P].object),delete z[P];delete E[w.id]}},initAttributes:m,enableAttribute:_,disableUnusedAttributes:v}}function Ld(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,s,1)}}}function Id(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,g=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:g,floatVertexTextures:y&&g,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Ud(r){let e=this,t=null,n=0,i=!1,s=!1,a=new ui,o=new ut,c={value:null,needsUpdate:!1};function l(h,u,p,d){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=c.value,d!==!0||_===null){let f=p+4*m,v=u.matrixWorldInverse;o.getNormalMatrix(v),(_===null||_.length<f)&&(_=new Float32Array(f));for(let y=0,g=p;y!==m;++y,g+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(_,g),_[g+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,f=r.get(h);if(!i||d===null||d.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let v=s?0:n,y=4*v,g=f.clippingState||null;c.value=g,g=l(d,u,y,p);for(let M=0;M!==y;++M)g[M]=t[M];f.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}}}function Dd(r){let e=new WeakMap;function t(i,s){return s===cs?i.mapping=wr:s===Xo&&(i.mapping=Er),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===cs||s===Xo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new $o(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Ur=class extends ps{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rh=[.125,.215,.35,.446,.526,.582],ns=20,Io=new Ur,sh=new ht,Uo=null,Do=0,No=0,Gi=(1+Math.sqrt(5))/2,vr=1/Gi,ah=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Gi,vr),new H(0,Gi,-vr),new H(vr,0,Gi),new H(-vr,0,Gi),new H(Gi,vr,0),new H(-Gi,vr,0)],Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Do,No),e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Zi,format:Un,colorSpace:fi,depthBuffer:!1},i=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+rh.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);c.push(d);let m=1/d;p>a-4?m=rh[p-a+4-1]:p===0&&(m=0),l.push(m);let _=1/(d-2),f=-_,v=1+_,y=[f,f,v,f,v,v,f,f,v,v,f,v],g=6,M=6,w=3,b=2,E=1,z=new Float32Array(w*M*g),P=new Float32Array(b*M*g),D=new Float32Array(E*M*g);for(let R=0;R<g;R++){let Z=R%3*2/3-1,j=R>2?0:-1,$=[Z,j,0,Z+2/3,j,0,Z+2/3,j+1,0,Z,j,0,Z+2/3,j+1,0,Z,j+1,0];z.set($,w*M*R),P.set(y,b*M*R);let de=[R,R,R,R,R,R];D.set(de,E*M*R)}let Q=new zt;Q.setAttribute("position",new En(z,w)),Q.setAttribute("uv",new En(P,b)),Q.setAttribute("faceIndex",new En(D,E)),o.push(Q),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(ns),h=new H(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,i){let s=new fn(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(sh),c.toneMapping=Ei,c.autoClear=!1;let u=new xa({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),p=new bn(new Pi,u),d=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,d=!0):(u.color.copy(sh),d=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):f===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let v=this._cubeSize;ea(i,f*v,_>2?v:0,v,v),c.setRenderTarget(i),d&&c.render(p,s),c.render(e,s)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===wr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ea(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ah[(i-1)%ah.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new bn(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,m=s/d,_=isFinite(s)?1+Math.floor(3*m):ns;_>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],v=0;for(let M=0;M<ns;++M){let w=M/m,b=Math.exp(-w*w/2);f.push(b),M===0?v+=b:M<_&&(v+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=d,u.mipInt.value=y-n;let g=this._sizeLods[i];ea(t,3*g*(i>y-4?i-y+4:0),4*(this._cubeSize-g),3*g,2*g),c.setRenderTarget(t),c.render(h,Io)}};function oh(r,e,t){let n=new Xn(r,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function lh(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ch(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===cs||s===Xo,o=s===wr||s===Er;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new Dr(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&(function(l){let h=0,u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u})(c)){t===null&&(t=new Dr(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Od(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fd(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let p=l.morphAttributes[u];for(let d=0,m=p.length;d<m;d++)e.remove(p[d])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,p=0;if(h!==null){let _=h.array;p=h.version;for(let f=0,v=_.length;f<v;f+=3){let y=_[f+0],g=_[f+1],M=_[f+2];l.push(y,g,g,M,M,y)}}else{if(u===void 0)return;{let _=u.array;p=u.version;for(let f=0,v=_.length/3-1;f<v;f+=3){let y=f+0,g=f+1,M=f+2;l.push(y,g,g,M,M,y)}}}let d=new(qh(l)?ba:Ma)(l,1);d.version=p;let m=s.get(c);m&&e.remove(m),s.set(c,d)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let p=h[u];for(let d=0,m=p.length;d<m;d++)e.update(p[d],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Bd(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,p;if(i)u=r,p="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[p](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h;p++)this.render(c[p]/o,l[p]);else{u.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let p=0;for(let d=0;d<h;d++)p+=l[d];t.update(p,s,1)}}}function zd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function kd(r,e){return r[0]-e[0]}function Gd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Vd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new qt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=p!==void 0?p.length:0,m=s.get(l);if(m===void 0||m.count!==d){let Z=function(){Q.dispose(),s.delete(l),l.removeEventListener("dispose",Z)};m!==void 0&&m.texture.dispose();let v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],E=0;v===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let z=l.attributes.position.count*E,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);let D=new Float32Array(z*P*4*d),Q=new va(D,z,P,d);Q.type=Qn,Q.needsUpdate=!0;let R=4*E;for(let j=0;j<d;j++){let $=M[j],de=w[j],ae=b[j],K=z*P*4*j;for(let se=0;se<$.count;se++){let L=se*R;v===!0&&(a.fromBufferAttribute($,se),D[K+L+0]=a.x,D[K+L+1]=a.y,D[K+L+2]=a.z,D[K+L+3]=0),y===!0&&(a.fromBufferAttribute(de,se),D[K+L+4]=a.x,D[K+L+5]=a.y,D[K+L+6]=a.z,D[K+L+7]=0),g===!0&&(a.fromBufferAttribute(ae,se),D[K+L+8]=a.x,D[K+L+9]=a.y,D[K+L+10]=a.z,D[K+L+11]=ae.itemSize===4?a.w:1)}}m={count:d,texture:Q,size:new Ie(z,P)},s.set(l,m),l.addEventListener("dispose",Z)}let _=0;for(let v=0;v<u.length;v++)_+=u[v];let f=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let p=u===void 0?0:u.length,d=n[l.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[l.id]=d}for(let y=0;y<p;y++){let g=d[y];g[0]=y,g[1]=u[y]}d.sort(Gd);for(let y=0;y<8;y++)y<p&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(kd);let m=l.morphAttributes.position,_=l.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let g=o[y],M=g[0],w=g[1];M!==Number.MAX_SAFE_INTEGER&&w?(m&&l.getAttribute("morphTarget"+y)!==m[M]&&l.setAttribute("morphTarget"+y,m[M]),_&&l.getAttribute("morphNormal"+y)!==_[M]&&l.setAttribute("morphNormal"+y,_[M]),i[y]=w,f+=w):(m&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),_&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),i[y]=0)}let v=l.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Hd(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var Nr=class extends wn{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:qi)!==qi&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=Kn),n===void 0&&h===Tr&&(n=ji),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kh=new wn,Qh=new Nr(1,1);Qh.compareFunction=515;var $h=new va,eu=new Ko,tu=new Sa,hh=[],uh=[],dh=new Float32Array(16),ph=new Float32Array(9),fh=new Float32Array(4);function kr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=hh[i];if(s===void 0&&(s=new Float32Array(i),hh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ga(r,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Wd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Xd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function jd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function qd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Yd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;fh.set(n),r.uniformMatrix2fv(this.addr,!1,fh),$t(t,n)}}function Zd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;ph.set(n),r.uniformMatrix3fv(this.addr,!1,ph),$t(t,n)}}function Jd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;dh.set(n),r.uniformMatrix4fv(this.addr,!1,dh),$t(t,n)}}function Kd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Qd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function $d(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function tp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function sp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Qh:Kh;t.setTexture2D(e||s,i)}function ap(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eu,i)}function op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tu,i)}function lp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$h,i)}function cp(r,e){r.uniform1fv(this.addr,e)}function hp(r,e){let t=kr(e,this.size,2);r.uniform2fv(this.addr,t)}function up(r,e){let t=kr(e,this.size,3);r.uniform3fv(this.addr,t)}function dp(r,e){let t=kr(e,this.size,4);r.uniform4fv(this.addr,t)}function pp(r,e){let t=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fp(r,e){let t=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mp(r,e){let t=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gp(r,e){r.uniform1iv(this.addr,e)}function vp(r,e){r.uniform2iv(this.addr,e)}function _p(r,e){r.uniform3iv(this.addr,e)}function yp(r,e){r.uniform4iv(this.addr,e)}function xp(r,e){r.uniform1uiv(this.addr,e)}function Mp(r,e){r.uniform2uiv(this.addr,e)}function bp(r,e){r.uniform3uiv(this.addr,e)}function Sp(r,e){r.uniform4uiv(this.addr,e)}function wp(r,e,t){let n=this.cache,i=e.length,s=Ga(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Kh,s[a])}function Ep(r,e,t){let n=this.cache,i=e.length,s=Ga(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eu,s[a])}function Ap(r,e,t){let n=this.cache,i=e.length,s=Ga(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||tu,s[a])}function Tp(r,e,t){let n=this.cache,i=e.length,s=Ga(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||$h,s[a])}var el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return jd;case 35666:return qd;case 35674:return Yd;case 35675:return Zd;case 35676:return Jd;case 5124:case 35670:return Kd;case 35667:case 35671:return Qd;case 35668:case 35672:return $d;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}})(t.type)}},tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return pp;case 35675:return fp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return vp;case 35668:case 35672:return _p;case 35669:case 35673:return yp;case 5125:return xp;case 36294:return Mp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Tp}})(t.type)}},nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Oo=/(\w+)(\])?(\[|\.)?/g;function mh(r,e){r.seq.push(e),r.map[e.id]=e}function Cp(r,e,t){let n=r.name,i=n.length;for(Oo.lastIndex=0;;){let s=Oo.exec(n),a=Oo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){mh(t,l===void 0?new el(o,r,e):new tl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new nl(o),mh(t,h)),t=h}}}var Sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Cp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function gh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Rp=37297,Pp=0;function vh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let d=u;d<p;d++){let m=d+1;h.push(`${m===c?">":" "} ${m}: ${l[d]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Lp(r,e){let t=(function(n){let i=bt.getPrimaries(bt.workingColorSpace),s=bt.getPrimaries(n),a;switch(i===s?a="":i===da&&s===ua?a="LinearDisplayP3ToLinearSRGB":i===ua&&s===da&&(a="LinearSRGBToLinearDisplayP3"),n){case fi:case ka:return[a,"LinearTransferOETF"];case Jt:case Wl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ip(r,e){let t;switch(e){case rd:t="Linear";break;case sd:t="Reinhard";break;case ad:t="OptimizedCineon";break;case Vl:t="ACESFilmic";break;case ld:t="AgX";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _r(r){return r!==""}function _h(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(r){return r.replace(Up,Np)}var Dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Np(r,e){let t=ct[e];if(t===void 0){let n=Dp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return il(t)}var Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(r){return r.replace(Op,Fp)}function Fp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(R){let Z="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===Dh?Z="SHADOWMAP_TYPE_PCF":R.shadowMapType===Gl?Z="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===hi&&(Z="SHADOWMAP_TYPE_VSM"),Z})(t),l=(function(R){let Z="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case wr:case Er:Z="ENVMAP_TYPE_CUBE";break;case za:Z="ENVMAP_TYPE_CUBE_UV"}return Z})(t),h=(function(R){let Z="ENVMAP_MODE_REFLECTION";return R.envMap&&R.envMapMode===Er&&(Z="ENVMAP_MODE_REFRACTION"),Z})(t),u=(function(R){let Z="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case Oh:Z="ENVMAP_BLENDING_MULTIPLY";break;case nd:Z="ENVMAP_BLENDING_MIX";break;case id:Z="ENVMAP_BLENDING_ADD"}return Z})(t),p=(function(R){let Z=R.envMapCubeUVHeight;if(Z===null)return null;let j=Math.log2(Z)-2,$=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:$,maxMip:j}})(t),d=t.isWebGL2?"":(function(R){return[R.extensionDerivatives||R.envMapCubeUVHeight||R.bumpMap||R.normalMapTangentSpace||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap||R.transmission)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)})(t),m=(function(R){return[R.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)})(t),_=(function(R){let Z=[];for(let j in R){let $=R[j];$!==!1&&Z.push("#define "+j+" "+$)}return Z.join(`
`)})(s),f=i.createProgram(),v,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),v.length>0&&(v+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_r).join(`
`),y.length>0&&(y+=`
`)):(v=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),y=[d,Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Ip("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Lp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=il(a),a=_h(a,t),a=yh(a,t),o=il(o),o=_h(o,t),o=yh(o,t),a=xh(a),o=xh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=g+v+a,w=g+y+o,b=gh(i,i.VERTEX_SHADER,M),E=gh(i,i.FRAGMENT_SHADER,w);function z(R){if(r.debug.checkShaderErrors){let Z=i.getProgramInfoLog(f).trim(),j=i.getShaderInfoLog(b).trim(),$=i.getShaderInfoLog(E).trim(),de=!0,ae=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,E);else{let K=vh(i,b,"vertex"),se=vh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+K+`
`+se)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):j!==""&&$!==""||(ae=!1);ae&&(R.diagnostics={runnable:de,programLog:Z,vertexShader:{log:j,prefix:v},fragmentShader:{log:$,prefix:y}})}i.deleteShader(b),i.deleteShader(E),P=new Sr(i,f),D=(function(Z,j){let $={},de=Z.getProgramParameter(j,Z.ACTIVE_ATTRIBUTES);for(let ae=0;ae<de;ae++){let K=Z.getActiveAttrib(j,ae),se=K.name,L=1;K.type===Z.FLOAT_MAT2&&(L=2),K.type===Z.FLOAT_MAT3&&(L=3),K.type===Z.FLOAT_MAT4&&(L=4),$[se]={type:K.type,location:Z.getAttribLocation(j,se),locationSize:L}}return $})(i,f)}let P,D;i.attachShader(f,b),i.attachShader(f,E),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return P===void 0&&z(this),P},this.getAttributes=function(){return D===void 0&&z(this),D};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=i.getProgramParameter(f,Rp)),Q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=E,this}var zp=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sl(e),t.set(e,n)),n}},sl=class{constructor(e){this.id=zp++,this.code=e,this.usedTimes=0}};function kp(r,e,t,n,i,s,a){let o=new ya,c=new rl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,v,y,g,M){let w=g.fog,b=M.geometry,E=f.isMeshStandardMaterial?g.environment:null,z=(f.isMeshStandardMaterial?t:e).get(f.envMap||E),P=z&&z.mapping===za?z.image.height:null,D=m[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let Q=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,R=Q!==void 0?Q.length:0,Z,j,$,de,ae=0;if(b.morphAttributes.position!==void 0&&(ae=1),b.morphAttributes.normal!==void 0&&(ae=2),b.morphAttributes.color!==void 0&&(ae=3),D){let gt=Jn[D];Z=gt.vertexShader,j=gt.fragmentShader}else Z=f.vertexShader,j=f.fragmentShader,c.update(f),$=c.getVertexShaderID(f),de=c.getFragmentShaderID(f);let K=r.getRenderTarget(),se=M.isInstancedMesh===!0,L=M.isBatchedMesh===!0,W=!!f.map,Ee=!!f.matcap,S=!!z,A=!!f.aoMap,F=!!f.lightMap,B=!!f.bumpMap,U=!!f.normalMap,X=!!f.displacementMap,k=!!f.emissiveMap,q=!!f.metalnessMap,ne=!!f.roughnessMap,le=f.anisotropy>0,C=f.clearcoat>0,x=f.iridescence>0,Y=f.sheen>0,V=f.transmission>0,G=le&&!!f.anisotropyMap,J=C&&!!f.clearcoatMap,ie=C&&!!f.clearcoatNormalMap,te=C&&!!f.clearcoatRoughnessMap,me=x&&!!f.iridescenceMap,_e=x&&!!f.iridescenceThicknessMap,Ae=Y&&!!f.sheenColorMap,we=Y&&!!f.sheenRoughnessMap,Re=!!f.specularMap,Be=!!f.specularColorMap,Le=!!f.specularIntensityMap,We=V&&!!f.transmissionMap,Ye=V&&!!f.thicknessMap,rt=!!f.gradientMap,St=!!f.alphaMap,Dt=f.alphaTest>0,Ct=!!f.alphaHash,wt=!!f.extensions,Yt=!!b.attributes.uv1,he=!!b.attributes.uv2,Ve=!!b.attributes.uv3,ft=Ei;return f.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(ft=r.toneMapping)),{isWebGL2:h,shaderID:D,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:j,defines:f.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:L,instancing:se,instancingColor:se&&M.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:fi,map:W,matcap:Ee,envMap:S,envMapMode:S&&z.mapping,envMapCubeUVHeight:P,aoMap:A,lightMap:F,bumpMap:B,normalMap:U,displacementMap:p&&X,emissiveMap:k,normalMapObjectSpace:U&&f.normalMapType===1,normalMapTangentSpace:U&&f.normalMapType===0,metalnessMap:q,roughnessMap:ne,anisotropy:le,anisotropyMap:G,clearcoat:C,clearcoatMap:J,clearcoatNormalMap:ie,clearcoatRoughnessMap:te,iridescence:x,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:we,specularMap:Re,specularColorMap:Be,specularIntensityMap:Le,transmission:V,transmissionMap:We,thicknessMap:Ye,gradientMap:rt,opaque:f.transparent===!1&&f.blending===1,alphaMap:St,alphaTest:Dt,alphaHash:Ct,combine:f.combine,mapUv:W&&_(f.map.channel),aoMapUv:A&&_(f.aoMap.channel),lightMapUv:F&&_(f.lightMap.channel),bumpMapUv:B&&_(f.bumpMap.channel),normalMapUv:U&&_(f.normalMap.channel),displacementMapUv:X&&_(f.displacementMap.channel),emissiveMapUv:k&&_(f.emissiveMap.channel),metalnessMapUv:q&&_(f.metalnessMap.channel),roughnessMapUv:ne&&_(f.roughnessMap.channel),anisotropyMapUv:G&&_(f.anisotropyMap.channel),clearcoatMapUv:J&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(f.sheenRoughnessMap.channel),specularMapUv:Re&&_(f.specularMap.channel),specularColorMapUv:Be&&_(f.specularColorMap.channel),specularIntensityMapUv:Le&&_(f.specularIntensityMap.channel),transmissionMapUv:We&&_(f.transmissionMap.channel),thicknessMapUv:Ye&&_(f.thicknessMap.channel),alphaMapUv:St&&_(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(U||le),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Yt,vertexUv2s:he,vertexUv3s:Ve,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(W||St),fog:!!w,useFog:f.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:ae,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&y.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,useLegacyLights:r._useLegacyLights,decodeVideoTexture:W&&f.map.isVideoTexture===!0&&bt.getTransfer(f.map.colorSpace)===Tt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Sn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:wt&&f.extensions.derivatives===!0,extensionFragDepth:wt&&f.extensions.fragDepth===!0,extensionDrawBuffers:wt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let y in f.defines)v.push(y),v.push(f.defines[y]);return f.isRawShaderMaterial===!1&&((function(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)})(v,f),(function(y,g){o.disableAll(),g.isWebGL2&&o.enable(0),g.supportsVertexTextures&&o.enable(1),g.instancing&&o.enable(2),g.instancingColor&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),y.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.skinning&&o.enable(4),g.morphTargets&&o.enable(5),g.morphNormals&&o.enable(6),g.morphColors&&o.enable(7),g.premultipliedAlpha&&o.enable(8),g.shadowMapEnabled&&o.enable(9),g.useLegacyLights&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),y.push(o.mask)})(v,f),v.push(r.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=m[f.type],y;if(v){let g=Jn[v];y=Ed.clone(g.uniforms)}else y=f.uniforms;return y},acquireProgram:function(f,v){let y;for(let g=0,M=l.length;g<M;g++){let w=l[g];if(w.cacheKey===v){y=w,++y.usedTimes;break}}return y===void 0&&(y=new Bp(r,v,f,s),l.push(y)),y},releaseProgram:function(f){if(--f.usedTimes==0){let v=l.indexOf(f);l[v]=l[l.length-1],l.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:l,dispose:function(){c.dispose()}}}function Gp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Vp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=c,p.groupOrder=l,p.renderOrder=a.renderOrder,p.z=h,p.group=u),e++,p}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.push(p):c.transparent===!0?i.push(p):t.push(p)},unshift:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.unshift(p):c.transparent===!0?i.unshift(p):t.unshift(p)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Vp),n.length>1&&n.sort(o||bh),i.length>1&&i.sort(o||bh)}}}function Hp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Sh,r.set(e,[i])):t>=n.length?(i=new Sh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Wp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ht};break;case"SpotLight":t={position:new H,direction:new H,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new H,halfWidth:new H,halfHeight:new H}}return r[e.id]=t,t}}}var Xp=0;function jp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qp(r,e){let t=new Wp,n=(function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,a=new lt,o=new lt;return{setup:function(c,l){let h=0,u=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,_=0,f=0,v=0,y=0,g=0,M=0,w=0,b=0,E=0;c.sort(jp);let z=l===!0?Math.PI:1;for(let D=0,Q=c.length;D<Q;D++){let R=c[D],Z=R.color,j=R.intensity,$=R.distance,de=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Z.r*j*z,u+=Z.g*j*z,p+=Z.b*j*z;else if(R.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(R.sh.coefficients[ae],j);E++}else if(R.isDirectionalLight){let ae=t.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity*z),R.castShadow){let K=R.shadow,se=n.get(R);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=de,i.directionalShadowMatrix[d]=R.shadow.matrix,y++}i.directional[d]=ae,d++}else if(R.isSpotLight){let ae=t.get(R);ae.position.setFromMatrixPosition(R.matrixWorld),ae.color.copy(Z).multiplyScalar(j*z),ae.distance=$,ae.coneCos=Math.cos(R.angle),ae.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ae.decay=R.decay,i.spot[_]=ae;let K=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[_]=K.matrix,R.castShadow){let se=n.get(R);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=de,M++}_++}else if(R.isRectAreaLight){let ae=t.get(R);ae.color.copy(Z).multiplyScalar(j),ae.halfWidth.set(.5*R.width,0,0),ae.halfHeight.set(0,.5*R.height,0),i.rectArea[f]=ae,f++}else if(R.isPointLight){let ae=t.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity*z),ae.distance=R.distance,ae.decay=R.decay,R.castShadow){let K=R.shadow,se=n.get(R);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,se.shadowCameraNear=K.camera.near,se.shadowCameraFar=K.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=R.shadow.matrix,g++}i.point[m]=ae,m++}else if(R.isHemisphereLight){let ae=t.get(R);ae.skyColor.copy(R.color).multiplyScalar(j*z),ae.groundColor.copy(R.groundColor).multiplyScalar(j*z),i.hemi[v]=ae,v++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let P=i.hash;P.directionalLength===d&&P.pointLength===m&&P.spotLength===_&&P.rectAreaLength===f&&P.hemiLength===v&&P.numDirectionalShadows===y&&P.numPointShadows===g&&P.numSpotShadows===M&&P.numSpotMaps===w&&P.numLightProbes===E||(i.directional.length=d,i.spot.length=_,i.rectArea.length=f,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=f,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=g,P.numSpotShadows=M,P.numSpotMaps=w,P.numLightProbes=E,i.version=Xp++)},setupView:function(c,l){let h=0,u=0,p=0,d=0,m=0,_=l.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let y=c[f];if(y.isDirectionalLight){let g=i.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),h++}else if(y.isSpotLight){let g=i.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),p++}else if(y.isRectAreaLight){let g=i.rectArea[d];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),g.halfWidth.set(.5*y.width,0,0),g.halfHeight.set(0,.5*y.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){let g=i.point[u];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(_),u++}else if(y.isHemisphereLight){let g=i.hemi[m];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(_),m++}}},state:i}}function wh(r,e){let t=new qp(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Yp(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new wh(r,e),t.set(n,[a])):i>=s.length?(a=new wh(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var al=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zp(r,e,t){let n=new Lr,i=new Ie,s=new Ie,a=new qt,o=new al({depthPacking:3201}),c=new ol,l={},h=t.maxTextureSize,u={[Ti]:Sn,[Sn]:Ti,2:2},p=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let m=new zt;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bn(m,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let v=this.type;function y(b,E){let z=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xn(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,z,p,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,z,d,_,null)}function g(b,E,z,P){let D=null,Q=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Q!==void 0)D=Q;else if(D=z.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let R=D.uuid,Z=E.uuid,j=l[R];j===void 0&&(j={},l[R]=j);let $=j[Z];$===void 0&&($=D.clone(),j[Z]=$,E.addEventListener("dispose",w)),D=$}return D.visible=E.visible,D.wireframe=E.wireframe,D.side=P===hi?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:u[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,z.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(r.properties.get(D).light=z),D}function M(b,E,z,P,D){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===hi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);let R=e.update(b),Z=b.material;if(Array.isArray(Z)){let j=R.groups;for(let $=0,de=j.length;$<de;$++){let ae=j[$],K=Z[ae.materialIndex];if(K&&K.visible){let se=g(b,K,P,D);b.onBeforeShadow(r,b,E,z,R,se,ae),r.renderBufferDirect(z,null,R,se,b,ae),b.onAfterShadow(r,b,E,z,R,se,ae)}}}else if(Z.visible){let j=g(b,Z,P,D);b.onBeforeShadow(r,b,E,z,R,j,null),r.renderBufferDirect(z,null,R,j,b,null),b.onAfterShadow(r,b,E,z,R,j,null)}}let Q=b.children;for(let R=0,Z=Q.length;R<Z;R++)M(Q[R],E,z,P,D)}function w(b){b.target.removeEventListener("dispose",w);for(let E in l){let z=l[E],P=b.target.uuid;P in z&&(z[P].dispose(),delete z[P])}}this.render=function(b,E,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let P=r.getRenderTarget(),D=r.getActiveCubeFace(),Q=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let Z=v!==hi&&this.type===hi,j=v===hi&&this.type!==hi;for(let $=0,de=b.length;$<de;$++){let ae=b[$],K=ae.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let se=K.getFrameExtents();if(i.multiply(se),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/se.x),i.x=s.x*se.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/se.y),i.y=s.y*se.y,K.mapSize.y=s.y)),K.map===null||Z===!0||j===!0){let W=this.type!==hi?{minFilter:an,magFilter:an}:{};K.map!==null&&K.map.dispose(),K.map=new Xn(i.x,i.y,W),K.map.texture.name=ae.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let L=K.getViewportCount();for(let W=0;W<L;W++){let Ee=K.getViewport(W);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),R.viewport(a),K.updateMatrices(ae,W),n=K.getFrustum(),M(E,z,K.camera,ae,this.type)}K.isPointLightShadow!==!0&&this.type===hi&&y(K,z),K.needsUpdate=!1}v=this.type,f.needsUpdate=!1,r.setRenderTarget(P,D,Q)}}function Jp(r,e,t){let n=t.isWebGL2,i=new function(){let x=!1,Y=new qt,V=null,G=new qt(0,0,0,0);return{setMask:function(J){V===J||x||(r.colorMask(J,J,J,J),V=J)},setLocked:function(J){x=J},setClear:function(J,ie,te,me,_e){_e===!0&&(J*=me,ie*=me,te*=me),Y.set(J,ie,te,me),G.equals(Y)===!1&&(r.clearColor(J,ie,te,me),G.copy(Y))},reset:function(){x=!1,V=null,G.set(-1,0,0,0)}}},s=new function(){let x=!1,Y=null,V=null,G=null;return{setTest:function(J){J?B(r.DEPTH_TEST):U(r.DEPTH_TEST)},setMask:function(J){Y===J||x||(r.depthMask(J),Y=J)},setFunc:function(J){if(V!==J){switch(J){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=J}},setLocked:function(J){x=J},setClear:function(J){G!==J&&(r.clearDepth(J),G=J)},reset:function(){x=!1,Y=null,V=null,G=null}}},a=new function(){let x=!1,Y=null,V=null,G=null,J=null,ie=null,te=null,me=null,_e=null;return{setTest:function(Ae){x||(Ae?B(r.STENCIL_TEST):U(r.STENCIL_TEST))},setMask:function(Ae){Y===Ae||x||(r.stencilMask(Ae),Y=Ae)},setFunc:function(Ae,we,Re){V===Ae&&G===we&&J===Re||(r.stencilFunc(Ae,we,Re),V=Ae,G=we,J=Re)},setOp:function(Ae,we,Re){ie===Ae&&te===we&&me===Re||(r.stencilOp(Ae,we,Re),ie=Ae,te=we,me=Re)},setLocked:function(Ae){x=Ae},setClear:function(Ae){_e!==Ae&&(r.clearStencil(Ae),_e=Ae)},reset:function(){x=!1,Y=null,V=null,G=null,J=null,ie=null,te=null,me=null,_e=null}}},o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,p=[],d=null,m=!1,_=null,f=null,v=null,y=null,g=null,M=null,w=null,b=new ht(0,0,0),E=0,z=!1,P=null,D=null,Q=null,R=null,Z=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,de=0,ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=de>=1):ae.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=de>=2);let K=null,se={},L=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),Ee=new qt().fromArray(L),S=new qt().fromArray(W);function A(x,Y,V,G){let J=new Uint8Array(4),ie=r.createTexture();r.bindTexture(x,ie),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<V;te++)!n||x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY?r.texImage2D(Y+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage3D(Y,0,r.RGBA,1,1,G,0,r.RGBA,r.UNSIGNED_BYTE,J);return ie}let F={};function B(x){l[x]!==!0&&(r.enable(x),l[x]=!0)}function U(x){l[x]!==!1&&(r.disable(x),l[x]=!1)}F[r.TEXTURE_2D]=A(r.TEXTURE_2D,r.TEXTURE_2D,1),F[r.TEXTURE_CUBE_MAP]=A(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[r.TEXTURE_2D_ARRAY]=A(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),F[r.TEXTURE_3D]=A(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(r.DEPTH_TEST),s.setFunc(3),ne(!1),le(1),B(r.CULL_FACE),q(0);let X={[Vi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)X[103]=r.MIN,X[104]=r.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(X[103]=x.MIN_EXT,X[104]=x.MAX_EXT)}let k={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Ho]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Wo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function q(x,Y,V,G,J,ie,te,me,_e,Ae){if(x!==0){if(m===!1&&(B(r.BLEND),m=!0),x===5)J=J||Y,ie=ie||V,te=te||G,Y===f&&J===g||(r.blendEquationSeparate(X[Y],X[J]),f=Y,g=J),V===v&&G===y&&ie===M&&te===w||(r.blendFuncSeparate(k[V],k[G],k[ie],k[te]),v=V,y=G,M=ie,w=te),me.equals(b)!==!1&&_e===E||(r.blendColor(me.r,me.g,me.b,_e),b.copy(me),E=_e),_=x,z=!1;else if(x!==_||Ae!==z){if(f===Vi&&g===Vi||(r.blendEquation(r.FUNC_ADD),f=Vi,g=Vi),Ae)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}v=null,y=null,M=null,w=null,b.set(0,0,0),E=0,_=x,z=Ae}}else m===!0&&(U(r.BLEND),m=!1)}function ne(x){P!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),P=x)}function le(x){x!==0?(B(r.CULL_FACE),x!==D&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):U(r.CULL_FACE),D=x}function C(x,Y,V){x?(B(r.POLYGON_OFFSET_FILL),R===Y&&Z===V||(r.polygonOffset(Y,V),R=Y,Z=V)):U(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:B,disable:U,bindFramebuffer:function(x,Y){return h[x]!==Y&&(r.bindFramebuffer(x,Y),h[x]=Y,n&&(x===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Y),x===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Y)),!0)},drawBuffers:function(x,Y){let V=p,G=!1;if(x)if(V=u.get(Y),V===void 0&&(V=[],u.set(Y,V)),x.isWebGLMultipleRenderTargets){let J=x.texture;if(V.length!==J.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,te=J.length;ie<te;ie++)V[ie]=r.COLOR_ATTACHMENT0+ie;V.length=J.length,G=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,G=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,G=!0);G&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(x){return d!==x&&(r.useProgram(x),d=x,!0)},setBlending:q,setMaterial:function(x,Y){x.side===2?U(r.CULL_FACE):B(r.CULL_FACE);let V=x.side===Sn;Y&&(V=!V),ne(V),x.blending===1&&x.transparent===!1?q(0):q(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);let G=x.stencilWrite;a.setTest(G),G&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),C(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):U(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ne,setCullFace:le,setLineWidth:function(x){x!==Q&&($&&r.lineWidth(x),Q=x)},setPolygonOffset:C,setScissorTest:function(x){x?B(r.SCISSOR_TEST):U(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+j-1),K!==x&&(r.activeTexture(x),K=x)},bindTexture:function(x,Y,V){V===void 0&&(V=K===null?r.TEXTURE0+j-1:K);let G=se[V];G===void 0&&(G={type:void 0,texture:void 0},se[V]=G),G.type===x&&G.texture===Y||(K!==V&&(r.activeTexture(V),K=V),r.bindTexture(x,Y||F[x]),G.type=x,G.texture=Y)},unbindTexture:function(){let x=se[K];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,Y){let V=c.get(Y);V===void 0&&(V=new WeakMap,c.set(Y,V));let G=V.get(x);G===void 0&&(G=r.getUniformBlockIndex(Y,x.name),V.set(x,G))},uniformBlockBinding:function(x,Y){let V=c.get(Y).get(x);o.get(Y)!==V&&(r.uniformBlockBinding(Y,V,x.__bindingPointIndex),o.set(Y,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){Ee.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),Ee.copy(x))},viewport:function(x){S.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),S.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},K=null,se={},h={},u=new WeakMap,p=[],d=null,m=!1,_=null,f=null,v=null,y=null,g=null,M=null,w=null,b=new ht(0,0,0),E=0,z=!1,P=null,D=null,Q=null,R=null,Z=null,Ee.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Kp(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,A){return d?new OffscreenCanvas(S,A):ds("canvas")}function _(S,A,F,B){let U=1;if((S.width>B||S.height>B)&&(U=B/Math.max(S.width,S.height)),U<1||A===!0){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let X=A?fa:Math.floor,k=X(U*S.width),q=X(U*S.height);u===void 0&&(u=m(k,q));let ne=F?m(k,q):u;return ne.width=k,ne.height=q,ne.getContext("2d").drawImage(S,0,0,k,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+k+"x"+q+")."),ne}return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S}return S}function f(S){return Zo(S.width)&&Zo(S.height)}function v(S,A){return S.generateMipmaps&&A&&S.minFilter!==an&&S.minFilter!==Ln}function y(S){r.generateMipmap(S)}function g(S,A,F,B,U=!1){if(o===!1)return A;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=A;if(A===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),A===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),A===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),A===r.RGBA){let k=U?ha:bt.getTransfer(B);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=k===Tt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return X!==r.R16F&&X!==r.R32F&&X!==r.RG16F&&X!==r.RG32F&&X!==r.RGBA16F&&X!==r.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(S,A,F){return v(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==an&&S.minFilter!==Ln?Math.log2(Math.max(A.width,A.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?A.mipmaps.length:1}function w(S){return S===an||S===hc||S===oo?r.NEAREST:r.LINEAR}function b(S){let A=S.target;A.removeEventListener("dispose",b),(function(F){let B=n.get(F);if(B.__webglInit===void 0)return;let U=F.source,X=p.get(U);if(X){let k=X[B.__cacheKey];k.usedTimes--,k.usedTimes===0&&z(F),Object.keys(X).length===0&&p.delete(U)}n.remove(F)})(A),A.isVideoTexture&&h.delete(A)}function E(S){let A=S.target;A.removeEventListener("dispose",E),(function(F){let B=F.texture,U=n.get(F),X=n.get(B);if(X.__webglTexture!==void 0&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(U.__webglFramebuffer[k]))for(let q=0;q<U.__webglFramebuffer[k].length;q++)r.deleteFramebuffer(U.__webglFramebuffer[k][q]);else r.deleteFramebuffer(U.__webglFramebuffer[k]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[k])}else{if(Array.isArray(U.__webglFramebuffer))for(let k=0;k<U.__webglFramebuffer.length;k++)r.deleteFramebuffer(U.__webglFramebuffer[k]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let k=0;k<U.__webglColorRenderbuffer.length;k++)U.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[k]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let k=0,q=B.length;k<q;k++){let ne=n.get(B[k]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(B[k])}n.remove(B),n.remove(F)})(A)}function z(S){let A=n.get(S);r.deleteTexture(A.__webglTexture);let F=S.source;delete p.get(F)[A.__cacheKey],a.memory.textures--}let P=0;function D(S,A){let F=n.get(S);if(S.isVideoTexture&&(function(B){let U=a.render.frame;h.get(B)!==U&&(h.set(B,U),B.update())})(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let B=S.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void de(F,S,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+A)}let Q={[hs]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[jo]:r.MIRRORED_REPEAT},R={[an]:r.NEAREST,[hc]:r.NEAREST_MIPMAP_NEAREST,[oo]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},Z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function j(S,A,F){if(F?(r.texParameteri(S,r.TEXTURE_WRAP_S,Q[A.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,Q[A.wrapT]),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,Q[A.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,R[A.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,R[A.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),A.wrapS===di&&A.wrapT===di||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,w(A.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==an&&A.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,Z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===an||A.minFilter!==oo&&A.minFilter!==Ar||A.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Zi&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function $(S,A){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,A.addEventListener("dispose",b));let B=A.source,U=p.get(B);U===void 0&&(U={},p.set(B,U));let X=(function(k){let q=[];return q.push(k.wrapS),q.push(k.wrapT),q.push(k.wrapR||0),q.push(k.magFilter),q.push(k.minFilter),q.push(k.anisotropy),q.push(k.internalFormat),q.push(k.format),q.push(k.type),q.push(k.generateMipmaps),q.push(k.premultiplyAlpha),q.push(k.flipY),q.push(k.unpackAlignment),q.push(k.colorSpace),q.join()})(A);if(X!==S.__cacheKey){U[X]===void 0&&(U[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),U[X].usedTimes++;let k=U[S.__cacheKey];k!==void 0&&(U[S.__cacheKey].usedTimes--,k.usedTimes===0&&z(A)),S.__cacheKey=X,S.__webglTexture=U[X].texture}return F}function de(S,A,F){let B=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(B=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(B=r.TEXTURE_3D);let U=$(S,A),X=A.source;t.bindTexture(B,S.__webglTexture,r.TEXTURE0+F);let k=n.get(X);if(X.version!==k.__version||U===!0){t.activeTexture(r.TEXTURE0+F);let q=bt.getPrimaries(bt.workingColorSpace),ne=A.colorSpace===Dn?null:bt.getPrimaries(A.colorSpace),le=A.colorSpace===Dn||q===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let C=(function(we){return!o&&(we.wrapS!==di||we.wrapT!==di||we.minFilter!==an&&we.minFilter!==Ln)})(A)&&f(A.image)===!1,x=_(A.image,C,!1,i.maxTextureSize);x=Ee(A,x);let Y=f(x)||o,V=s.convert(A.format,A.colorSpace),G,J=s.convert(A.type),ie=g(A.internalFormat,V,J,A.colorSpace,A.isVideoTexture);j(B,A,Y);let te=A.mipmaps,me=o&&A.isVideoTexture!==!0&&ie!==Wh,_e=k.__version===void 0||U===!0,Ae=M(A,x,Y);if(A.isDepthTexture)ie=r.DEPTH_COMPONENT,o?ie=A.type===Qn?r.DEPTH_COMPONENT32F:A.type===Kn?r.DEPTH_COMPONENT24:A.type===ji?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:A.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===qi&&ie===r.DEPTH_COMPONENT&&A.type!==Hl&&A.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Kn,J=s.convert(A.type)),A.format===Tr&&ie===r.DEPTH_COMPONENT&&(ie=r.DEPTH_STENCIL,A.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ji,J=s.convert(A.type))),_e&&(me?t.texStorage2D(r.TEXTURE_2D,1,ie,x.width,x.height):t.texImage2D(r.TEXTURE_2D,0,ie,x.width,x.height,0,V,J,null));else if(A.isDataTexture)if(te.length>0&&Y){me&&_e&&t.texStorage2D(r.TEXTURE_2D,Ae,ie,te[0].width,te[0].height);for(let we=0,Re=te.length;we<Re;we++)G=te[we],me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,G.width,G.height,V,J,G.data):t.texImage2D(r.TEXTURE_2D,we,ie,G.width,G.height,0,V,J,G.data);A.generateMipmaps=!1}else me?(_e&&t.texStorage2D(r.TEXTURE_2D,Ae,ie,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,V,J,x.data)):t.texImage2D(r.TEXTURE_2D,0,ie,x.width,x.height,0,V,J,x.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){me&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,ie,te[0].width,te[0].height,x.depth);for(let we=0,Re=te.length;we<Re;we++)G=te[we],A.format!==Un?V!==null?me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,G.width,G.height,x.depth,V,G.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,ie,G.width,G.height,x.depth,0,G.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,G.width,G.height,x.depth,V,J,G.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,ie,G.width,G.height,x.depth,0,V,J,G.data)}else{me&&_e&&t.texStorage2D(r.TEXTURE_2D,Ae,ie,te[0].width,te[0].height);for(let we=0,Re=te.length;we<Re;we++)G=te[we],A.format!==Un?V!==null?me?t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,G.width,G.height,V,G.data):t.compressedTexImage2D(r.TEXTURE_2D,we,ie,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,G.width,G.height,V,J,G.data):t.texImage2D(r.TEXTURE_2D,we,ie,G.width,G.height,0,V,J,G.data)}else if(A.isDataArrayTexture)me?(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,ie,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,V,J,x.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ie,x.width,x.height,x.depth,0,V,J,x.data);else if(A.isData3DTexture)me?(_e&&t.texStorage3D(r.TEXTURE_3D,Ae,ie,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,V,J,x.data)):t.texImage3D(r.TEXTURE_3D,0,ie,x.width,x.height,x.depth,0,V,J,x.data);else if(A.isFramebufferTexture){if(_e)if(me)t.texStorage2D(r.TEXTURE_2D,Ae,ie,x.width,x.height);else{let we=x.width,Re=x.height;for(let Be=0;Be<Ae;Be++)t.texImage2D(r.TEXTURE_2D,Be,ie,we,Re,0,V,J,null),we>>=1,Re>>=1}}else if(te.length>0&&Y){me&&_e&&t.texStorage2D(r.TEXTURE_2D,Ae,ie,te[0].width,te[0].height);for(let we=0,Re=te.length;we<Re;we++)G=te[we],me?t.texSubImage2D(r.TEXTURE_2D,we,0,0,V,J,G):t.texImage2D(r.TEXTURE_2D,we,ie,V,J,G);A.generateMipmaps=!1}else me?(_e&&t.texStorage2D(r.TEXTURE_2D,Ae,ie,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,J,x)):t.texImage2D(r.TEXTURE_2D,0,ie,V,J,x);v(A,Y)&&y(B),k.__version=X.version,A.onUpdate&&A.onUpdate(A)}S.__version=A.version}function ae(S,A,F,B,U,X){let k=s.convert(F.format,F.colorSpace),q=s.convert(F.type),ne=g(F.internalFormat,k,q,F.colorSpace);if(!n.get(A).__hasExternalTextures){let le=Math.max(1,A.width>>X),C=Math.max(1,A.height>>X);U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?t.texImage3D(U,X,ne,le,C,A.depth,0,k,q,null):t.texImage2D(U,X,ne,le,C,0,k,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),W(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,B,U,n.get(F).__webglTexture,0,L(A)):(U===r.TEXTURE_2D||U>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,B,U,n.get(F).__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function K(S,A,F){if(r.bindRenderbuffer(r.RENDERBUFFER,S),A.depthBuffer&&!A.stencilBuffer){let B=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||W(A)){let U=A.depthTexture;U&&U.isDepthTexture&&(U.type===Qn?B=r.DEPTH_COMPONENT32F:U.type===Kn&&(B=r.DEPTH_COMPONENT24));let X=L(A);W(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,B,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,X,B,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,B,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(A.depthBuffer&&A.stencilBuffer){let B=L(A);F&&W(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,r.DEPTH24_STENCIL8,A.width,A.height):W(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{let B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let U=0;U<B.length;U++){let X=B[U],k=s.convert(X.format,X.colorSpace),q=s.convert(X.type),ne=g(X.internalFormat,k,q,X.colorSpace),le=L(A);F&&W(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,ne,A.width,A.height):W(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,ne,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ne,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(S){let A=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!A.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,B),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),D(U.depthTexture,0);let X=n.get(U.depthTexture).__webglTexture,k=L(U);if(U.depthTexture.format===qi)W(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else{if(U.depthTexture.format!==Tr)throw new Error("Unknown depthTexture format");W(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,k):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0)}})(A.__webglFramebuffer,S)}else if(F){A.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[B]),A.__webglDepthbuffer[B]=r.createRenderbuffer(),K(A.__webglDepthbuffer[B],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),K(A.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function L(S){return Math.min(i.maxSamples,S.samples)}function W(S){let A=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ee(S,A){let F=S.colorSpace,B=S.format,U=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===qo||F!==fi&&F!==Dn&&(bt.getTransfer(F)===Tt?o===!1?e.has("EXT_sRGB")===!0&&B===Un?(S.format=qo,S.minFilter=Ln,S.generateMipmaps=!1):A=ma.sRGBToLinear(A):B===Un&&U===pi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),A}this.allocateTextureUnit=function(){let S=P;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),P+=1,S},this.resetTextureUnits=function(){P=0},this.setTexture2D=D,this.setTexture2DArray=function(S,A){let F=n.get(S);S.version>0&&F.__version!==S.version?de(F,S,A):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+A)},this.setTexture3D=function(S,A){let F=n.get(S);S.version>0&&F.__version!==S.version?de(F,S,A):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+A)},this.setTextureCube=function(S,A){let F=n.get(S);S.version>0&&F.__version!==S.version?(function(B,U,X){if(U.image.length!==6)return;let k=$(B,U),q=U.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+X);let ne=n.get(q);if(q.version!==ne.__version||k===!0){t.activeTexture(r.TEXTURE0+X);let le=bt.getPrimaries(bt.workingColorSpace),C=U.colorSpace===Dn?null:bt.getPrimaries(U.colorSpace),x=U.colorSpace===Dn||le===C?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let Y=U.isCompressedTexture||U.image[0].isCompressedTexture,V=U.image[0]&&U.image[0].isDataTexture,G=[];for(let Le=0;Le<6;Le++)G[Le]=Y||V?V?U.image[Le].image:U.image[Le]:_(U.image[Le],!1,!0,i.maxCubemapSize),G[Le]=Ee(U,G[Le]);let J=G[0],ie=f(J)||o,te=s.convert(U.format,U.colorSpace),me=s.convert(U.type),_e=g(U.internalFormat,te,me,U.colorSpace),Ae=o&&U.isVideoTexture!==!0,we=ne.__version===void 0||k===!0,Re,Be=M(U,J,ie);if(j(r.TEXTURE_CUBE_MAP,U,ie),Y){Ae&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,_e,J.width,J.height);for(let Le=0;Le<6;Le++){Re=G[Le].mipmaps;for(let We=0;We<Re.length;We++){let Ye=Re[We];U.format!==Un?te!==null?Ae?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We,0,0,Ye.width,Ye.height,te,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We,_e,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We,0,0,Ye.width,Ye.height,te,me,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We,_e,Ye.width,Ye.height,0,te,me,Ye.data)}}}else{Re=U.mipmaps,Ae&&we&&(Re.length>0&&Be++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,_e,G[0].width,G[0].height));for(let Le=0;Le<6;Le++)if(V){Ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,G[Le].width,G[Le].height,te,me,G[Le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,G[Le].width,G[Le].height,0,te,me,G[Le].data);for(let We=0;We<Re.length;We++){let Ye=Re[We].image[Le].image;Ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We+1,0,0,Ye.width,Ye.height,te,me,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We+1,_e,Ye.width,Ye.height,0,te,me,Ye.data)}}else{Ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,te,me,G[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,te,me,G[Le]);for(let We=0;We<Re.length;We++){let Ye=Re[We];Ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We+1,0,0,te,me,Ye.image[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We+1,_e,te,me,Ye.image[Le])}}}v(U,ie)&&y(r.TEXTURE_CUBE_MAP),ne.__version=q.version,U.onUpdate&&U.onUpdate(U)}B.__version=U.version})(F,S,A):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+A)},this.rebindTextures=function(S,A,F){let B=n.get(S);A!==void 0&&ae(B.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&se(S)},this.setupRenderTarget=function(S){let A=S.texture,F=n.get(S),B=n.get(A);S.addEventListener("dispose",E),S.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture()),B.__version=A.version,a.memory.textures++);let U=S.isWebGLCubeRenderTarget===!0,X=S.isWebGLMultipleRenderTargets===!0,k=f(S)||o;if(U){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(o&&A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let ne=0;ne<A.mipmaps.length;ne++)F.__webglFramebuffer[q][ne]=r.createFramebuffer()}else F.__webglFramebuffer[q]=r.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<A.mipmaps.length;q++)F.__webglFramebuffer[q]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(X)if(i.drawBuffers){let q=S.texture;for(let ne=0,le=q.length;ne<le;ne++){let C=n.get(q[ne]);C.__webglTexture===void 0&&(C.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&W(S)===!1){let q=X?A:[A];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<q.length;ne++){let le=q[ne];F.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);let C=s.convert(le.format,le.colorSpace),x=s.convert(le.type),Y=g(le.internalFormat,C,x,le.colorSpace,S.isXRRenderTarget===!0),V=L(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),K(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture),j(r.TEXTURE_CUBE_MAP,A,k);for(let q=0;q<6;q++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ae(F.__webglFramebuffer[q][ne],S,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne);else ae(F.__webglFramebuffer[q],S,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);v(A,k)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let q=S.texture;for(let ne=0,le=q.length;ne<le;ne++){let C=q[ne],x=n.get(C);t.bindTexture(r.TEXTURE_2D,x.__webglTexture),j(r.TEXTURE_2D,C,k),ae(F.__webglFramebuffer,S,C,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),v(C,k)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?q=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,B.__webglTexture),j(q,A,k),o&&A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ae(F.__webglFramebuffer[ne],S,A,r.COLOR_ATTACHMENT0,q,ne);else ae(F.__webglFramebuffer,S,A,r.COLOR_ATTACHMENT0,q,0);v(A,k)&&y(q),t.unbindTexture()}S.depthBuffer&&se(S)},this.updateRenderTargetMipmap=function(S){let A=f(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let B=0,U=F.length;B<U;B++){let X=F[B];if(v(X,A)){let k=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,q=n.get(X).__webglTexture;t.bindTexture(k,q),y(k),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(o&&S.samples>0&&W(S)===!1){let A=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,B=S.height,U=r.COLOR_BUFFER_BIT,X=[],k=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=n.get(S),ne=S.isWebGLMultipleRenderTargets===!0;if(ne)for(let le=0;le<A.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let le=0;le<A.length;le++){X.push(r.COLOR_ATTACHMENT0+le),S.depthBuffer&&X.push(k);let C=q.__ignoreDepthValues!==void 0&&q.__ignoreDepthValues;if(C===!1&&(S.depthBuffer&&(U|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(U|=r.STENCIL_BUFFER_BIT)),ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,q.__webglColorRenderbuffer[le]),C===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[k]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[k])),ne){let x=n.get(A[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0)}r.blitFramebuffer(0,0,F,B,0,0,F,B,U,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let le=0;le<A.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,q.__webglColorRenderbuffer[le]);let C=n.get(A[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,C,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=W}function Qp(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=bt.getTransfer(s);if(i===pi)return r.UNSIGNED_BYTE;if(i===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===Hl)return r.UNSIGNED_SHORT;if(i===Bh)return r.INT;if(i===Kn)return r.UNSIGNED_INT;if(i===Qn)return r.FLOAT;if(i===Zi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===Un)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===qi)return r.DEPTH_COMPONENT;if(i===Tr)return r.DEPTH_STENCIL;if(i===qo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Gh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Vh)return r.RG_INTEGER;if(i===Hh)return r.RGBA_INTEGER;if(i===lo||i===co||i===ho||i===uo)if(o===Tt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===uc||i===dc||i===pc||i===fc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Wh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===mc||i===gc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===mc)return o===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===gc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===vc||i===_c||i===yc||i===xc||i===Mc||i===bc||i===Sc||i===wc||i===Ec||i===Ac||i===Tc||i===Cc||i===Rc||i===Pc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===vc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===po||i===Lc||i===Ic){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===po)return o===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===Uc||i===Dc||i===Nc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===po)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===ji?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var ll=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},wi=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$p={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),v=this._getHandJoint(l,_);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=f.radius),v.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&p>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cl=class extends Ci{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,m=null,_=t.getContextAttributes(),f=null,v=null,y=[],g=[],M=new Ie,w=null,b=new fn;b.layers.enable(1),b.viewport=new qt;let E=new fn;E.layers.enable(2),E.viewport=new qt;let z=[b,E],P=new ll;P.layers.enable(1),P.layers.enable(2);let D=null,Q=null;function R(L){let W=g.indexOf(L.inputSource);if(W===-1)return;let Ee=y[W];Ee!==void 0&&(Ee.update(L.inputSource,L.frame,l||a),Ee.dispatchEvent({type:L.type,data:L.inputSource}))}function Z(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",j);for(let L=0;L<y.length;L++){let W=g[L];W!==null&&(g[L]=null,y[L].disconnect(W))}D=null,Q=null,e.setRenderTarget(f),d=null,p=null,u=null,i=null,v=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function j(L){for(let W=0;W<L.removed.length;W++){let Ee=L.removed[W],S=g.indexOf(Ee);S>=0&&(g[S]=null,y[S].disconnect(Ee))}for(let W=0;W<L.added.length;W++){let Ee=L.added[W],S=g.indexOf(Ee);if(S===-1){for(let F=0;F<y.length;F++){if(F>=g.length){g.push(Ee),S=F;break}if(g[F]===null){g[F]=Ee,S=F;break}}if(S===-1)break}let A=y[S];A&&A.connect(Ee)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=y[L];return W===void 0&&(W=new ss,y[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=y[L];return W===void 0&&(W=new ss,y[L]=W),W.getGripSpace()},this.getHand=function(L){let W=y[L];return W===void 0&&(W=new ss,y[L]=W),W.getHandSpace()},this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,Ee=null,S=null;_.depth&&(S=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?Tr:qi,Ee=_.stencil?ji:Kn);let A={colorFormat:t.RGBA8,depthFormat:S,scaleFactor:s};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(A),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Xn(p.textureWidth,p.textureHeight,{format:Un,type:pi,depthTexture:new Nr(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(v).__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let $=new H,de=new H;function ae(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;P.near=E.near=b.near=L.near,P.far=E.far=b.far=L.far,D===P.near&&Q===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,Q=P.far);let W=L.parent,Ee=P.cameras;ae(P,W);for(let S=0;S<Ee.length;S++)ae(Ee[S],W);Ee.length===2?(function(S,A,F){$.setFromMatrixPosition(A.matrixWorld),de.setFromMatrixPosition(F.matrixWorld);let B=$.distanceTo(de),U=A.projectionMatrix.elements,X=F.projectionMatrix.elements,k=U[14]/(U[10]-1),q=U[14]/(U[10]+1),ne=(U[9]+1)/U[5],le=(U[9]-1)/U[5],C=(U[8]-1)/U[0],x=(X[8]+1)/X[0],Y=k*C,V=k*x,G=B/(-C+x),J=G*-C;A.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(J),S.translateZ(G),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();let ie=k+G,te=q+G,me=Y-J,_e=V+(B-J),Ae=ne*q/te*ie,we=le*q/te*ie;S.projectionMatrix.makePerspective(me,_e,Ae,we,ie,te),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()})(P,b,E):P.projectionMatrix.copy(b.projectionMatrix),(function(S,A,F){F===null?S.matrix.copy(A.matrixWorld):(S.matrix.copy(F.matrixWorld),S.matrix.invert(),S.matrix.multiply(A.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(A.projectionMatrix),S.projectionMatrixInverse.copy(A.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*us*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(L,P,W)},this.getCamera=function(){return P},this.getFoveation=function(){if(p!==null||d!==null)return c},this.setFoveation=function(L){c=L,p!==null&&(p.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let K=null,se=new Jh;se.setAnimationLoop((function(L,W){if(h=W.getViewerPose(l||a),m=W,h!==null){let Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let S=!1;Ee.length!==P.cameras.length&&(P.cameras.length=0,S=!0);for(let A=0;A<Ee.length;A++){let F=Ee[A],B=null;if(d!==null)B=d.getViewport(F);else{let X=u.getViewSubImage(p,F);B=X.viewport,A===0&&(e.setRenderTargetTextures(v,X.colorTexture,p.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(v))}let U=z[A];U===void 0&&(U=new fn,U.layers.enable(A),U.viewport=new qt,z[A]=U),U.matrix.fromArray(F.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(F.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(B.x,B.y,B.width,B.height),A===0&&(P.matrix.copy(U.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),S===!0&&P.cameras.push(U)}}for(let Ee=0;Ee<y.length;Ee++){let S=g[Ee],A=y[Ee];S!==null&&A!==void 0&&A.update(S,W,l||a)}K&&K(L,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null})),this.setAnimationLoop=function(L){K=L},this.dispose=function(){}}};function ef(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Sn&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Sn&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Zh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function tf(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,p,d,m){let _=u.value,f=p+"_"+d;if(m[f]===void 0)return m[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let v=m[f];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return m[f]=_,!0}else if(v.equals(_)===!1)return v.copy(_),!0}return!1}function l(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(i[p.id]),delete i[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;n.uniformBlockBinding(u,d)},update:function(u,p){let d=i[u.id];d===void 0&&((function(f){let v=f.uniforms,y=0,g=16;for(let w=0,b=v.length;w<b;w++){let E=Array.isArray(v[w])?v[w]:[v[w]];for(let z=0,P=E.length;z<P;z++){let D=E[z],Q=Array.isArray(D.value)?D.value:[D.value];for(let R=0,Z=Q.length;R<Z;R++){let j=l(Q[R]),$=y%g;$!==0&&g-$<j.boundary&&(y+=g-$),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=j.storage}}}let M=y%g;M>0&&(y+=g-M),f.__size=y,f.__cache={}})(u),d=(function(f){let v=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=v;let y=r.createBuffer(),g=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,g,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y})(u),i[u.id]=d,u.addEventListener("dispose",h));let m=p.program;n.updateUBOMapping(u,m);let _=e.render.frame;s[u.id]!==_&&((function(f){let v=i[f.id],y=f.uniforms,g=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,w=y.length;M<w;M++){let b=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,z=b.length;E<z;E++){let P=b[E];if(c(P,M,E,g)===!0){let D=P.__offset,Q=Array.isArray(P.value)?P.value:[P.value],R=0;for(let Z=0;Z<Q.length;Z++){let j=Q[Z],$=l(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,D+R,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,R),R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var fs=class{constructor(e={}){let{canvas:t=hd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,p;this.isWebGLRenderer=!0,p=n!==null?n.getContextAttributes().alpha:a;let d=new Uint32Array(4),m=new Int32Array(4),_=null,f=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;let g=this,M=!1,w=0,b=0,E=null,z=-1,P=null,D=new qt,Q=new qt,R=null,Z=new ht(0),j=0,$=t.width,de=t.height,ae=1,K=null,se=null,L=new qt(0,0,$,de),W=new qt(0,0,$,de),Ee=!1,S=new Lr,A=!1,F=!1,B=null,U=new lt,X=new Ie,k=new H,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return E===null?ae:1}let le,C,x,Y,V,G,J,ie,te,me,_e,Ae,we,Re,Be,Le,We,Ye,rt,St,Dt,Ct,wt,Yt,he=n;function Ve(I,oe){for(let pe=0;pe<I.length;pe++){let be=I[pe],fe=t.getContext(be,oe);if(fe!==null)return fe}return null}try{let I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",_n,!1),t.addEventListener("webglcontextcreationerror",rn,!1),he===null){let oe=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&oe.shift(),he=Ve(oe,I),he===null)throw Ve(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&he instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),he.getShaderPrecisionFormat===void 0&&(he.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function ft(){le=new Od(he),C=new Id(he,le,e),le.init(C),Ct=new Qp(he,le,C),x=new Jp(he,le,C),Y=new zd(he),V=new Gp,G=new Kp(he,le,x,V,C,Ct,Y),J=new Dd(g),ie=new Nd(g),te=new Cd(he,C),wt=new Pd(he,le,te,C),me=new Fd(he,te,Y,wt),_e=new Hd(he,me,te,Y),rt=new Vd(he,C,G),Le=new Ud(V),Ae=new kp(g,J,ie,le,C,wt,Le),we=new ef(g,V),Re=new Hp,Be=new Yp(le,C),Ye=new Rd(g,J,ie,x,_e,p,c),We=new Zp(g,_e,C),Yt=new tf(he,Y,C,x),St=new Ld(he,le,Y,C),Dt=new Bd(he,le,Y,C),Y.programs=Ae.programs,g.capabilities=C,g.extensions=le,g.properties=V,g.renderLists=Re,g.shadowMap=We,g.state=x,g.info=Y}ft();let gt=new cl(g,he);function tt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _n(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=Y.autoReset,oe=We.enabled,pe=We.autoUpdate,be=We.needsUpdate,fe=We.type;ft(),Y.autoReset=I,We.enabled=oe,We.autoUpdate=pe,We.needsUpdate=be,We.type=fe}function rn(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function qn(I){let oe=I.target;oe.removeEventListener("dispose",qn),(function(pe){(function(be){let fe=V.get(be).programs;fe!==void 0&&(fe.forEach((function(Ue){Ae.releaseProgram(Ue)})),be.isShaderMaterial&&Ae.releaseShaderCache(be))})(pe),V.remove(pe)})(oe)}function yn(I,oe,pe){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=Sn,I.needsUpdate=!0,Vt(I,oe,pe),I.side=Ti,I.needsUpdate=!0,Vt(I,oe,pe),I.side=2):Vt(I,oe,pe)}this.xr=gt,this.getContext=function(){return he},this.getContextAttributes=function(){return he.getContextAttributes()},this.forceContextLoss=function(){let I=le.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=le.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(I){I!==void 0&&(ae=I,this.setSize($,de,!1))},this.getSize=function(I){return I.set($,de)},this.setSize=function(I,oe,pe=!0){gt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=I,de=oe,t.width=Math.floor(I*ae),t.height=Math.floor(oe*ae),pe===!0&&(t.style.width=I+"px",t.style.height=oe+"px"),this.setViewport(0,0,I,oe))},this.getDrawingBufferSize=function(I){return I.set($*ae,de*ae).floor()},this.setDrawingBufferSize=function(I,oe,pe){$=I,de=oe,ae=pe,t.width=Math.floor(I*pe),t.height=Math.floor(oe*pe),this.setViewport(0,0,I,oe)},this.getCurrentViewport=function(I){return I.copy(D)},this.getViewport=function(I){return I.copy(L)},this.setViewport=function(I,oe,pe,be){I.isVector4?L.set(I.x,I.y,I.z,I.w):L.set(I,oe,pe,be),x.viewport(D.copy(L).multiplyScalar(ae).floor())},this.getScissor=function(I){return I.copy(W)},this.setScissor=function(I,oe,pe,be){I.isVector4?W.set(I.x,I.y,I.z,I.w):W.set(I,oe,pe,be),x.scissor(Q.copy(W).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(I){x.setScissorTest(Ee=I)},this.setOpaqueSort=function(I){K=I},this.setTransparentSort=function(I){se=I},this.getClearColor=function(I){return I.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(I=!0,oe=!0,pe=!0){let be=0;if(I){let fe=!1;if(E!==null){let Ue=E.texture.format;fe=Ue===Hh||Ue===Vh||Ue===Gh}if(fe){let Ue=E.texture.type,qe=Ue===pi||Ue===Kn||Ue===Hl||Ue===ji||Ue===zh||Ue===kh,Ge=Ye.getClearColor(),O=Ye.getClearAlpha(),N=Ge.r,ce=Ge.g,ve=Ge.b;qe?(d[0]=N,d[1]=ce,d[2]=ve,d[3]=O,he.clearBufferuiv(he.COLOR,0,d)):(m[0]=N,m[1]=ce,m[2]=ve,m[3]=O,he.clearBufferiv(he.COLOR,0,m))}else be|=he.COLOR_BUFFER_BIT}oe&&(be|=he.DEPTH_BUFFER_BIT),pe&&(be|=he.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he.clear(be)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",_n,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Re.dispose(),Be.dispose(),V.dispose(),J.dispose(),ie.dispose(),_e.dispose(),wt.dispose(),Yt.dispose(),Ae.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Yn),gt.removeEventListener("sessionend",Zn),B&&(B.dispose(),B=null),en.stop()},this.renderBufferDirect=function(I,oe,pe,be,fe,Ue){oe===null&&(oe=q);let qe=fe.isMesh&&fe.matrixWorld.determinant()<0,Ge=(function(Xe,at,nt,Ne,je){at.isScene!==!0&&(at=q),G.resetTextureUnits();let pt=at.fog,yt=Ne.isMeshStandardMaterial?at.environment:null,Zt=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:fi,sn=(Ne.isMeshStandardMaterial?ie:J).get(Ne.envMap||yt),Rt=Ne.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Tn=!!nt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),Cn=!!nt.morphAttributes.position,T=!!nt.morphAttributes.normal,ee=!!nt.morphAttributes.color,ge=Ei;Ne.toneMapped&&(E!==null&&E.isXRRenderTarget!==!0||(ge=g.toneMapping));let ye=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Me=ye!==void 0?ye.length:0,Se=V.get(Ne),Je=f.state.lights;if(A===!0&&(F===!0||Xe!==P)){let De=Xe===P&&Ne.id===z;Le.setState(Ne,Xe,De)}let Ke=!1;Ne.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Je.state.version||Se.outputColorSpace!==Zt||je.isBatchedMesh&&Se.batching===!1?Ke=!0:je.isBatchedMesh||Se.batching!==!0?je.isInstancedMesh&&Se.instancing===!1?Ke=!0:je.isInstancedMesh||Se.instancing!==!0?je.isSkinnedMesh&&Se.skinning===!1?Ke=!0:je.isSkinnedMesh||Se.skinning!==!0?je.isInstancedMesh&&Se.instancingColor===!0&&je.instanceColor===null||je.isInstancedMesh&&Se.instancingColor===!1&&je.instanceColor!==null||Se.envMap!==sn||Ne.fog===!0&&Se.fog!==pt?Ke=!0:Se.numClippingPlanes===void 0||Se.numClippingPlanes===Le.numPlanes&&Se.numIntersection===Le.numIntersection?(Se.vertexAlphas!==Rt||Se.vertexTangents!==Tn||Se.morphTargets!==Cn||Se.morphNormals!==T||Se.morphColors!==ee||Se.toneMapping!==ge||C.isWebGL2===!0&&Se.morphTargetsCount!==Me)&&(Ke=!0):Ke=!0:Ke=!0:Ke=!0:Ke=!0:(Ke=!0,Se.__version=Ne.version);let ot=Se.currentProgram;Ke===!0&&(ot=Vt(Ne,at,je));let Ht=!1,tn=!1,Mn=!1,re=ot.getUniforms(),ue=Se.uniforms;if(x.useProgram(ot.program)&&(Ht=!0,tn=!0,Mn=!0),Ne.id!==z&&(z=Ne.id,tn=!0),Ht||P!==Xe){re.setValue(he,"projectionMatrix",Xe.projectionMatrix),re.setValue(he,"viewMatrix",Xe.matrixWorldInverse);let De=re.map.cameraPosition;De!==void 0&&De.setValue(he,k.setFromMatrixPosition(Xe.matrixWorld)),C.logarithmicDepthBuffer&&re.setValue(he,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&re.setValue(he,"isOrthographic",Xe.isOrthographicCamera===!0),P!==Xe&&(P=Xe,tn=!0,Mn=!0)}if(je.isSkinnedMesh){re.setOptional(he,je,"bindMatrix"),re.setOptional(he,je,"bindMatrixInverse");let De=je.skeleton;De&&(C.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),re.setValue(he,"boneTexture",De.boneTexture,G)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}je.isBatchedMesh&&(re.setOptional(he,je,"batchingTexture"),re.setValue(he,"batchingTexture",je._matricesTexture,G));let xe=nt.morphAttributes;(xe.position!==void 0||xe.normal!==void 0||xe.color!==void 0&&C.isWebGL2===!0)&&rt.update(je,nt,ot),(tn||Se.receiveShadow!==je.receiveShadow)&&(Se.receiveShadow=je.receiveShadow,re.setValue(he,"receiveShadow",je.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(ue.envMap.value=sn,ue.flipEnvMap.value=sn.isCubeTexture&&sn.isRenderTargetTexture===!1?-1:1),tn&&(re.setValue(he,"toneMappingExposure",g.toneMappingExposure),Se.needsLights&&(Oe=Mn,(Pe=ue).ambientLightColor.needsUpdate=Oe,Pe.lightProbe.needsUpdate=Oe,Pe.directionalLights.needsUpdate=Oe,Pe.directionalLightShadows.needsUpdate=Oe,Pe.pointLights.needsUpdate=Oe,Pe.pointLightShadows.needsUpdate=Oe,Pe.spotLights.needsUpdate=Oe,Pe.spotLightShadows.needsUpdate=Oe,Pe.rectAreaLights.needsUpdate=Oe,Pe.hemisphereLights.needsUpdate=Oe),pt&&Ne.fog===!0&&we.refreshFogUniforms(ue,pt),we.refreshMaterialUniforms(ue,Ne,ae,de,B),Sr.upload(he,Ot(Se),ue,G));var Pe,Oe;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(Sr.upload(he,Ot(Se),ue,G),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&re.setValue(he,"center",je.center),re.setValue(he,"modelViewMatrix",je.modelViewMatrix),re.setValue(he,"normalMatrix",je.normalMatrix),re.setValue(he,"modelMatrix",je.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let De=Ne.uniformsGroups;for(let Ze=0,st=De.length;Ze<st;Ze++)if(C.isWebGL2){let et=De[Ze];Yt.update(et,ot),Yt.bind(et,ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ot})(I,oe,pe,be,fe);x.setMaterial(be,qe);let O=pe.index,N=1;if(be.wireframe===!0){if(O=me.getWireframeAttribute(pe),O===void 0)return;N=2}let ce=pe.drawRange,ve=pe.attributes.position,Te=ce.start*N,Ce=(ce.start+ce.count)*N;Ue!==null&&(Te=Math.max(Te,Ue.start*N),Ce=Math.min(Ce,(Ue.start+Ue.count)*N)),O!==null?(Te=Math.max(Te,0),Ce=Math.min(Ce,O.count)):ve!=null&&(Te=Math.max(Te,0),Ce=Math.min(Ce,ve.count));let ze=Ce-Te;if(ze<0||ze===1/0)return;let $e;wt.setup(fe,be,Ge,pe,O);let He=St;if(O!==null&&($e=te.get(O),He=Dt,He.setIndex($e)),fe.isMesh)be.wireframe===!0?(x.setLineWidth(be.wireframeLinewidth*ne()),He.setMode(he.LINES)):He.setMode(he.TRIANGLES);else if(fe.isLine){let Xe=be.linewidth;Xe===void 0&&(Xe=1),x.setLineWidth(Xe*ne()),fe.isLineSegments?He.setMode(he.LINES):fe.isLineLoop?He.setMode(he.LINE_LOOP):He.setMode(he.LINE_STRIP)}else fe.isPoints?He.setMode(he.POINTS):fe.isSprite&&He.setMode(he.TRIANGLES);if(fe.isBatchedMesh)He.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else if(fe.isInstancedMesh)He.renderInstances(Te,ze,fe.count);else if(pe.isInstancedBufferGeometry){let Xe=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,at=Math.min(pe.instanceCount,Xe);He.renderInstances(Te,ze,at)}else He.render(Te,ze)},this.compile=function(I,oe,pe=null){pe===null&&(pe=I),f=Be.get(pe),f.init(),y.push(f),pe.traverseVisible((function(fe){fe.isLight&&fe.layers.test(oe.layers)&&(f.pushLight(fe),fe.castShadow&&f.pushShadow(fe))})),I!==pe&&I.traverseVisible((function(fe){fe.isLight&&fe.layers.test(oe.layers)&&(f.pushLight(fe),fe.castShadow&&f.pushShadow(fe))})),f.setupLights(g._useLegacyLights);let be=new Set;return I.traverse((function(fe){let Ue=fe.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){let Ge=Ue[qe];yn(Ge,pe,fe),be.add(Ge)}else yn(Ue,pe,fe),be.add(Ue)})),y.pop(),f=null,be},this.compileAsync=function(I,oe,pe=null){let be=this.compile(I,oe,pe);return new Promise((fe=>{function Ue(){be.forEach((function(qe){V.get(qe).currentProgram.isReady()&&be.delete(qe)})),be.size!==0?setTimeout(Ue,10):fe(I)}le.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)}))};let xn=null;function Yn(){en.stop()}function Zn(){en.start()}let en=new Jh;function _t(I,oe,pe,be){if(I.visible===!1)return;if(I.layers.test(oe.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(oe);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||S.intersectsSprite(I)){be&&k.setFromMatrixPosition(I.matrixWorld).applyMatrix4(U);let Ue=_e.update(I),qe=I.material;qe.visible&&_.push(I,Ue,qe,pe,k.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||S.intersectsObject(I))){let Ue=_e.update(I),qe=I.material;if(be&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),k.copy(I.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),k.copy(Ue.boundingSphere.center)),k.applyMatrix4(I.matrixWorld).applyMatrix4(U)),Array.isArray(qe)){let Ge=Ue.groups;for(let O=0,N=Ge.length;O<N;O++){let ce=Ge[O],ve=qe[ce.materialIndex];ve&&ve.visible&&_.push(I,Ue,ve,pe,k.z,ce)}}else qe.visible&&_.push(I,Ue,qe,pe,k.z,null)}}let fe=I.children;for(let Ue=0,qe=fe.length;Ue<qe;Ue++)_t(fe[Ue],oe,pe,be)}function kt(I,oe,pe,be){let fe=I.opaque,Ue=I.transmissive,qe=I.transparent;f.setupLightsView(pe),A===!0&&Le.setGlobalState(g.clippingPlanes,pe),Ue.length>0&&(function(Ge,O,N,ce){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;let Te=C.isWebGL2;B===null&&(B=new Xn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Zi:pi,minFilter:Ar,samples:Te?4:0})),g.getDrawingBufferSize(X),Te?B.setSize(X.x,X.y):B.setSize(fa(X.x),fa(X.y));let Ce=g.getRenderTarget();g.setRenderTarget(B),g.getClearColor(Z),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear();let ze=g.toneMapping;g.toneMapping=Ei,Nt(Ge,N,ce),G.updateMultisampleRenderTarget(B),G.updateRenderTargetMipmap(B);let $e=!1;for(let He=0,Xe=O.length;He<Xe;He++){let at=O[He],nt=at.object,Ne=at.geometry,je=at.material,pt=at.group;if(je.side===2&&nt.layers.test(ce.layers)){let yt=je.side;je.side=Sn,je.needsUpdate=!0,Gt(nt,N,ce,Ne,je,pt),je.side=yt,je.needsUpdate=!0,$e=!0}}$e===!0&&(G.updateMultisampleRenderTarget(B),G.updateRenderTargetMipmap(B)),g.setRenderTarget(Ce),g.setClearColor(Z,j),g.toneMapping=ze})(fe,Ue,oe,pe),be&&x.viewport(D.copy(be)),fe.length>0&&Nt(fe,oe,pe),Ue.length>0&&Nt(Ue,oe,pe),qe.length>0&&Nt(qe,oe,pe),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nt(I,oe,pe){let be=oe.isScene===!0?oe.overrideMaterial:null;for(let fe=0,Ue=I.length;fe<Ue;fe++){let qe=I[fe],Ge=qe.object,O=qe.geometry,N=be===null?qe.material:be,ce=qe.group;Ge.layers.test(pe.layers)&&Gt(Ge,oe,pe,O,N,ce)}}function Gt(I,oe,pe,be,fe,Ue){I.onBeforeRender(g,oe,pe,be,fe,Ue),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),fe.onBeforeRender(g,oe,pe,be,I,Ue),fe.transparent===!0&&fe.side===2&&fe.forceSinglePass===!1?(fe.side=Sn,fe.needsUpdate=!0,g.renderBufferDirect(pe,oe,be,fe,I,Ue),fe.side=Ti,fe.needsUpdate=!0,g.renderBufferDirect(pe,oe,be,fe,I,Ue),fe.side=2):g.renderBufferDirect(pe,oe,be,fe,I,Ue),I.onAfterRender(g,oe,pe,be,fe,Ue)}function Vt(I,oe,pe){oe.isScene!==!0&&(oe=q);let be=V.get(I),fe=f.state.lights,Ue=f.state.shadowsArray,qe=fe.state.version,Ge=Ae.getParameters(I,fe.state,Ue,oe,pe),O=Ae.getProgramCacheKey(Ge),N=be.programs;be.environment=I.isMeshStandardMaterial?oe.environment:null,be.fog=oe.fog,be.envMap=(I.isMeshStandardMaterial?ie:J).get(I.envMap||be.environment),N===void 0&&(I.addEventListener("dispose",qn),N=new Map,be.programs=N);let ce=N.get(O);if(ce!==void 0){if(be.currentProgram===ce&&be.lightsStateVersion===qe)return An(I,Ge),ce}else Ge.uniforms=Ae.getUniforms(I),I.onBuild(pe,Ge,g),I.onBeforeCompile(Ge,g),ce=Ae.acquireProgram(Ge,O),N.set(O,ce),be.uniforms=Ge.uniforms;let ve=be.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(ve.clippingPlanes=Le.uniform),An(I,Ge),be.needsLights=(function(Te){return Te.isMeshLambertMaterial||Te.isMeshToonMaterial||Te.isMeshPhongMaterial||Te.isMeshStandardMaterial||Te.isShadowMaterial||Te.isShaderMaterial&&Te.lights===!0})(I),be.lightsStateVersion=qe,be.needsLights&&(ve.ambientLightColor.value=fe.state.ambient,ve.lightProbe.value=fe.state.probe,ve.directionalLights.value=fe.state.directional,ve.directionalLightShadows.value=fe.state.directionalShadow,ve.spotLights.value=fe.state.spot,ve.spotLightShadows.value=fe.state.spotShadow,ve.rectAreaLights.value=fe.state.rectArea,ve.ltc_1.value=fe.state.rectAreaLTC1,ve.ltc_2.value=fe.state.rectAreaLTC2,ve.pointLights.value=fe.state.point,ve.pointLightShadows.value=fe.state.pointShadow,ve.hemisphereLights.value=fe.state.hemi,ve.directionalShadowMap.value=fe.state.directionalShadowMap,ve.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,ve.spotShadowMap.value=fe.state.spotShadowMap,ve.spotLightMatrix.value=fe.state.spotLightMatrix,ve.spotLightMap.value=fe.state.spotLightMap,ve.pointShadowMap.value=fe.state.pointShadowMap,ve.pointShadowMatrix.value=fe.state.pointShadowMatrix),be.currentProgram=ce,be.uniformsList=null,ce}function Ot(I){if(I.uniformsList===null){let oe=I.currentProgram.getUniforms();I.uniformsList=Sr.seqWithValue(oe.seq,I.uniforms)}return I.uniformsList}function An(I,oe){let pe=V.get(I);pe.outputColorSpace=oe.outputColorSpace,pe.batching=oe.batching,pe.instancing=oe.instancing,pe.instancingColor=oe.instancingColor,pe.skinning=oe.skinning,pe.morphTargets=oe.morphTargets,pe.morphNormals=oe.morphNormals,pe.morphColors=oe.morphColors,pe.morphTargetsCount=oe.morphTargetsCount,pe.numClippingPlanes=oe.numClippingPlanes,pe.numIntersection=oe.numClipIntersection,pe.vertexAlphas=oe.vertexAlphas,pe.vertexTangents=oe.vertexTangents,pe.toneMapping=oe.toneMapping}en.setAnimationLoop((function(I){xn&&xn(I)})),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(I){xn=I,gt.setAnimationLoop(I),I===null?en.stop():en.start()},gt.addEventListener("sessionstart",Yn),gt.addEventListener("sessionend",Zn),this.render=function(I,oe){if(oe!==void 0&&oe.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(oe),oe=gt.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,oe,E),f=Be.get(I,y.length),f.init(),y.push(f),U.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),S.setFromProjectionMatrix(U),F=this.localClippingEnabled,A=Le.init(this.clippingPlanes,F),_=Re.get(I,v.length),_.init(),v.push(_),_t(I,oe,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(K,se),this.info.render.frame++,A===!0&&Le.beginShadows();let pe=f.state.shadowsArray;if(We.render(pe,I,oe),A===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,I),f.setupLights(g._useLegacyLights),oe.isArrayCamera){let be=oe.cameras;for(let fe=0,Ue=be.length;fe<Ue;fe++){let qe=be[fe];kt(_,I,qe,qe.viewport)}}else kt(_,I,oe);E!==null&&(G.updateMultisampleRenderTarget(E),G.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(g,I,oe),wt.resetDefaultState(),z=-1,P=null,y.pop(),f=y.length>0?y[y.length-1]:null,v.pop(),_=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,oe,pe){V.get(I.texture).__webglTexture=oe,V.get(I.depthTexture).__webglTexture=pe;let be=V.get(I);be.__hasExternalTextures=!0,be.__hasExternalTextures&&(be.__autoAllocateDepthBuffer=pe===void 0,be.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),be.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,oe){let pe=V.get(I);pe.__webglFramebuffer=oe,pe.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(I,oe=0,pe=0){E=I,w=oe,b=pe;let be=!0,fe=null,Ue=!1,qe=!1;if(I){let Ge=V.get(I);Ge.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(he.FRAMEBUFFER,null),be=!1):Ge.__webglFramebuffer===void 0?G.setupRenderTarget(I):Ge.__hasExternalTextures&&G.rebindTextures(I,V.get(I.texture).__webglTexture,V.get(I.depthTexture).__webglTexture);let O=I.texture;(O.isData3DTexture||O.isDataArrayTexture||O.isCompressedArrayTexture)&&(qe=!0);let N=V.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(fe=Array.isArray(N[oe])?N[oe][pe]:N[oe],Ue=!0):fe=C.isWebGL2&&I.samples>0&&G.useMultisampledRTT(I)===!1?V.get(I).__webglMultisampledFramebuffer:Array.isArray(N)?N[pe]:N,D.copy(I.viewport),Q.copy(I.scissor),R=I.scissorTest}else D.copy(L).multiplyScalar(ae).floor(),Q.copy(W).multiplyScalar(ae).floor(),R=Ee;if(x.bindFramebuffer(he.FRAMEBUFFER,fe)&&C.drawBuffers&&be&&x.drawBuffers(I,fe),x.viewport(D),x.scissor(Q),x.setScissorTest(R),Ue){let Ge=V.get(I.texture);he.framebufferTexture2D(he.FRAMEBUFFER,he.COLOR_ATTACHMENT0,he.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge.__webglTexture,pe)}else if(qe){let Ge=V.get(I.texture),O=oe||0;he.framebufferTextureLayer(he.FRAMEBUFFER,he.COLOR_ATTACHMENT0,Ge.__webglTexture,pe||0,O)}z=-1},this.readRenderTargetPixels=function(I,oe,pe,be,fe,Ue,qe){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=V.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&qe!==void 0&&(Ge=Ge[qe]),Ge){x.bindFramebuffer(he.FRAMEBUFFER,Ge);try{let O=I.texture,N=O.format,ce=O.type;if(N!==Un&&Ct.convert(N)!==he.getParameter(he.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let ve=ce===Zi&&(le.has("EXT_color_buffer_half_float")||C.isWebGL2&&le.has("EXT_color_buffer_float"));if(!(ce===pi||Ct.convert(ce)===he.getParameter(he.IMPLEMENTATION_COLOR_READ_TYPE)||ce===Qn&&(C.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float"))||ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");oe>=0&&oe<=I.width-be&&pe>=0&&pe<=I.height-fe&&he.readPixels(oe,pe,be,fe,Ct.convert(N),Ct.convert(ce),Ue)}finally{let O=E!==null?V.get(E).__webglFramebuffer:null;x.bindFramebuffer(he.FRAMEBUFFER,O)}}},this.copyFramebufferToTexture=function(I,oe,pe=0){let be=Math.pow(2,-pe),fe=Math.floor(oe.image.width*be),Ue=Math.floor(oe.image.height*be);G.setTexture2D(oe,0),he.copyTexSubImage2D(he.TEXTURE_2D,pe,0,0,I.x,I.y,fe,Ue),x.unbindTexture()},this.copyTextureToTexture=function(I,oe,pe,be=0){let fe=oe.image.width,Ue=oe.image.height,qe=Ct.convert(pe.format),Ge=Ct.convert(pe.type);G.setTexture2D(pe,0),he.pixelStorei(he.UNPACK_FLIP_Y_WEBGL,pe.flipY),he.pixelStorei(he.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),he.pixelStorei(he.UNPACK_ALIGNMENT,pe.unpackAlignment),oe.isDataTexture?he.texSubImage2D(he.TEXTURE_2D,be,I.x,I.y,fe,Ue,qe,Ge,oe.image.data):oe.isCompressedTexture?he.compressedTexSubImage2D(he.TEXTURE_2D,be,I.x,I.y,oe.mipmaps[0].width,oe.mipmaps[0].height,qe,oe.mipmaps[0].data):he.texSubImage2D(he.TEXTURE_2D,be,I.x,I.y,qe,Ge,oe.image),be===0&&pe.generateMipmaps&&he.generateMipmap(he.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(I,oe,pe,be,fe=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Ue=I.max.x-I.min.x+1,qe=I.max.y-I.min.y+1,Ge=I.max.z-I.min.z+1,O=Ct.convert(be.format),N=Ct.convert(be.type),ce;if(be.isData3DTexture)G.setTexture3D(be,0),ce=he.TEXTURE_3D;else{if(!be.isDataArrayTexture&&!be.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");G.setTexture2DArray(be,0),ce=he.TEXTURE_2D_ARRAY}he.pixelStorei(he.UNPACK_FLIP_Y_WEBGL,be.flipY),he.pixelStorei(he.UNPACK_PREMULTIPLY_ALPHA_WEBGL,be.premultiplyAlpha),he.pixelStorei(he.UNPACK_ALIGNMENT,be.unpackAlignment);let ve=he.getParameter(he.UNPACK_ROW_LENGTH),Te=he.getParameter(he.UNPACK_IMAGE_HEIGHT),Ce=he.getParameter(he.UNPACK_SKIP_PIXELS),ze=he.getParameter(he.UNPACK_SKIP_ROWS),$e=he.getParameter(he.UNPACK_SKIP_IMAGES),He=pe.isCompressedTexture?pe.mipmaps[fe]:pe.image;he.pixelStorei(he.UNPACK_ROW_LENGTH,He.width),he.pixelStorei(he.UNPACK_IMAGE_HEIGHT,He.height),he.pixelStorei(he.UNPACK_SKIP_PIXELS,I.min.x),he.pixelStorei(he.UNPACK_SKIP_ROWS,I.min.y),he.pixelStorei(he.UNPACK_SKIP_IMAGES,I.min.z),pe.isDataTexture||pe.isData3DTexture?he.texSubImage3D(ce,fe,oe.x,oe.y,oe.z,Ue,qe,Ge,O,N,He.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),he.compressedTexSubImage3D(ce,fe,oe.x,oe.y,oe.z,Ue,qe,Ge,O,He.data)):he.texSubImage3D(ce,fe,oe.x,oe.y,oe.z,Ue,qe,Ge,O,N,He),he.pixelStorei(he.UNPACK_ROW_LENGTH,ve),he.pixelStorei(he.UNPACK_IMAGE_HEIGHT,Te),he.pixelStorei(he.UNPACK_SKIP_PIXELS,Ce),he.pixelStorei(he.UNPACK_SKIP_ROWS,ze),he.pixelStorei(he.UNPACK_SKIP_IMAGES,$e),fe===0&&be.generateMipmaps&&he.generateMipmap(ce),x.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?G.setTextureCube(I,0):I.isData3DTexture?G.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?G.setTexture2DArray(I,0):G.setTexture2D(I,0),x.unbindTexture()},this.resetState=function(){w=0,b=0,E=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Wl?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===ka?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Yi:Xh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?Jt:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hl=class extends fs{};hl.prototype.isWebGL1Renderer=!0;var wa=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var hm=new H;var um=new H,dm=new H,pm=new H,fm=new Ie,mm=new Ie,gm=new lt,vm=new H,_m=new H,ym=new H,xm=new Ie,Mm=new Ie,bm=new Ie;var Sm=new H,wm=new H;var Em=new H,Am=new qt,Tm=new qt,Cm=new H,Rm=new lt,Pm=new H,Lm=new $n,Im=new lt,Um=new Rr;var Ea=class extends wn{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,p){super(null,a,o,c,l,h,i,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dm=new lt,Nm=new lt;var Om=new lt,Fm=new lt;var Bm=new On,zm=new lt,km=new bn,Gm=new $n;var ul=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Vm=new lt,Hm=new lt,Wm=new lt,Xm=new lt,jm=new Lr,qm=new On,Ym=new $n,Zm=new H,Jm=new ul,Km=new bn;var Qm=new H,$m=new H,e0=new lt,t0=new Rr,n0=new $n;var i0=new H,r0=new H;var s0=new lt,a0=new Rr,o0=new $n,l0=new H;var Aa=class extends wn{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Ie:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,i=[],s=[],a=[],o=new H,c=new lt;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new H)}s[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Kt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Kt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends Fn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ie,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dl=class extends ms{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,d*=h,i(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var ta=new H,Fo=new jl,Bo=new jl,zo=new jl,gs=class extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(ta.subVectors(i[0],i[1]).add(i[0]),o=ta);let u=i[l%s],p=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(ta.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),f=Math.pow(p.distanceToSquared(c),d);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),Fo.initNonuniformCatmullRom(o.x,u.x,p.x,c.x,m,_,f),Bo.initNonuniformCatmullRom(o.y,u.y,p.y,c.y,m,_,f),zo.initNonuniformCatmullRom(o.z,u.z,p.z,c.z,m,_,f)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(o.x,u.x,p.x,c.x,this.tension),Bo.initCatmullRom(o.y,u.y,p.y,c.y,this.tension),zo.initCatmullRom(o.z,u.z,p.z,c.z,this.tension));return n.set(Fo.calc(h),Bo.calc(h),zo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Eh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function as(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function os(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Ta=class extends Fn{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,s.x,a.x,o.x),os(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Fn{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,s.x,a.x,o.x),os(e,i.y,s.y,a.y,o.y),os(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends Fn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Fn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Fn{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(as(e,i.x,s.x,a.x),as(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Fn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(as(e,i.x,s.x,a.x),as(e,i.y,s.y,a.y),as(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Eh(o,c.x,l.x,h.x,u.x),Eh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}},Ia=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:gs,CubicBezierCurve:Ta,CubicBezierCurve3:pl,EllipseCurve:ms,LineCurve:Ca,LineCurve3:fl,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Pa,SplineCurve:La}),ml=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ia[i.type]().fromJSON(i))}return this}},Ji=class extends ml{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ca(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ra(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ta(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new La(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new ms(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class r extends zt{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new H,p=new Ie,d=new H,m=new H,_=new H,f=0,v=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:f=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,d.x=1*v,d.y=-f,d.z=0*v,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:f=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,d.x=1*v,d.y=-f,d.z=0*v,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=t;y++){let g=n+y*h*i,M=Math.sin(g),w=Math.cos(g);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*w,a.push(u.x,u.y,u.z),p.x=y/t,p.y=b/(e.length-1),o.push(p.x,p.y);let E=c[3*b+0]*M,z=c[3*b+1],P=c[3*b+0]*w;l.push(E,z,P)}}for(let y=0;y<t;y++)for(let g=0;g<e.length-1;g++){let M=g+y*e.length,w=M,b=M+e.length,E=M+e.length+1,z=M+1;s.push(w,b,z),s.push(E,z,b)}this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},gl=class r extends Or{constructor(e=1,t=1,n=4,i=8){let s=new Ji;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},vl=class r extends zt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new H,h=new Ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fr=class r extends zt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],d=[],m=0,_=[],f=n/2,v=0;function y(g){let M=m,w=new Ie,b=new H,E=0,z=g===!0?e:t,P=g===!0?1:-1;for(let Q=1;Q<=i;Q++)u.push(0,f*P,0),p.push(0,P,0),d.push(.5,.5),m++;let D=m;for(let Q=0;Q<=i;Q++){let R=Q/i*c+o,Z=Math.cos(R),j=Math.sin(R);b.x=z*j,b.y=f*P,b.z=z*Z,u.push(b.x,b.y,b.z),p.push(0,P,0),w.x=.5*Z+.5,w.y=.5*j*P+.5,d.push(w.x,w.y),m++}for(let Q=0;Q<i;Q++){let R=M+Q,Z=D+Q;g===!0?h.push(Z,Z+1,R):h.push(Z+1,Z,R),E+=3}l.addGroup(v,E,g===!0?1:2),v+=E}(function(){let g=new H,M=new H,w=0,b=(t-e)/n;for(let E=0;E<=s;E++){let z=[],P=E/s,D=P*(t-e)+e;for(let Q=0;Q<=i;Q++){let R=Q/i,Z=R*c+o,j=Math.sin(Z),$=Math.cos(Z);M.x=D*j,M.y=-P*n+f,M.z=D*$,u.push(M.x,M.y,M.z),g.set(j,b,$).normalize(),p.push(g.x,g.y,g.z),d.push(R,1-P),z.push(m++)}_.push(z)}for(let E=0;E<i;E++)for(let z=0;z<s;z++){let P=_[z][E],D=_[z+1][E],Q=_[z+1][E+1],R=_[z][E+1];h.push(P,D,R),h.push(D,Q,R),w+=6}l.addGroup(v,w,0),v+=w})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_l=class r extends Fr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class r extends zt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,d,m,_){let f=_+1,v=[];for(let y=0;y<=f;y++){v[y]=[];let g=p.clone().lerp(m,y/f),M=d.clone().lerp(m,y/f),w=f-y;for(let b=0;b<=w;b++)v[y][b]=b===0&&y===f?g:g.clone().lerp(M,b/w)}for(let y=0;y<f;y++)for(let g=0;g<2*(f-y)-1;g++){let M=Math.floor(g/2);g%2==0?(c(v[y][M+1]),c(v[y+1][M]),c(v[y][M])):(c(v[y][M+1]),c(v[y+1][M+1]),c(v[y+1][M]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,d){let m=3*p;d.x=e[m+0],d.y=e[m+1],d.z=e[m+2]}function h(p,d,m,_){_<0&&p.x===1&&(a[d]=p.x-1),m.x===0&&m.z===0&&(a[d]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new H,m=new H,_=new H;for(let f=0;f<t.length;f+=3)l(t[f+0],d),l(t[f+1],m),l(t[f+2],_),o(d,m,_,p)})(i),(function(p){let d=new H;for(let m=0;m<s.length;m+=3)d.x=s[m+0],d.y=s[m+1],d.z=s[m+2],d.normalize().multiplyScalar(p),s[m+0]=d.x,s[m+1]=d.y,s[m+2]=d.z})(n),(function(){let p=new H;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let _=u(p)/2/Math.PI+.5,f=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);a.push(_,1-f)}var d;(function(){let m=new H,_=new H,f=new H,v=new H,y=new Ie,g=new Ie,M=new Ie;for(let w=0,b=0;w<s.length;w+=9,b+=6){m.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),f.set(s[w+6],s[w+7],s[w+8]),y.set(a[b+0],a[b+1]),g.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),v.copy(m).add(_).add(f).divideScalar(3);let E=u(v);h(y,b+0,m,E),h(g,b+2,_,E),h(M,b+4,f,E)}})(),(function(){for(let m=0;m<a.length;m+=6){let _=a[m+0],f=a[m+2],v=a[m+4],y=Math.max(_,f,v),g=Math.min(_,f,v);y>.9&&g<.1&&(_<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),v<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},yl=class r extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},na=new H,ia=new H,ko=new H,ra=new Xi,xl=class extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:f,c:v}=ra;if(_.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),v.fromBufferAttribute(o,l[2]),ra.getNormal(ko),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let g=(y+1)%3,M=u[y],w=u[g],b=ra[h[y]],E=ra[h[g]],z=`${M}_${w}`,P=`${w}_${M}`;P in p&&p[P]?(ko.dot(p[P].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(E.x,E.y,E.z)),p[P]=null):z in p||(p[z]={index0:l[y],index1:l[g],normal:ko.clone()})}}for(let m in p)if(p[m]){let{index0:_,index1:f}=p[m];na.fromBufferAttribute(o,_),ia.fromBufferAttribute(o,f),d.push(na.x,na.y,na.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new it(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Br=class extends Ji{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ji().fromJSON(i))}return this}},nf=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Ah(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,p,d;if(n&&(s=(function(m,_,f,v){let y=[],g,M,w,b,E;for(g=0,M=_.length;g<M;g++)w=_[g]*v,b=g<M-1?_[g+1]*v:m.length,E=Ah(m,w,b,v,!1),E===E.next&&(E.steiner=!0),y.push(uf(E));for(y.sort(lf),g=0;g<y.length;g++)f=cf(y[g],f);return f})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let m=t;m<i;m+=t)u=r[m],p=r[m+1],u<o&&(o=u),p<c&&(c=p),u>l&&(l=u),p>h&&(h=p);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return vs(s,a,t,o,c,d,0),a};function Ah(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let p=c,d=l-h;p<l;p+=h)u+=(o[d]-o[p])*(o[p+1]+o[d+1]),d=p;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Th(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Th(s,r[s],r[s+1],a);return a&&Va(a,a.next)&&(ys(a),a=a.next),a}function Qi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Va(n,n.next)&&Ft(n.prev,n,n.next)!==0)n=n.next;else{if(ys(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function vs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,p,d){let m=h;do m.z===0&&(m.z=Ml(m.x,m.y,u,p,d)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(_){let f,v,y,g,M,w,b,E,z=1;do{for(v=_,_=null,M=null,w=0;v;){for(w++,y=v,b=0,f=0;f<z&&(b++,y=y.nextZ,y);f++);for(E=z;b>0||E>0&&y;)b!==0&&(E===0||!y||v.z<=y.z)?(g=v,v=v.nextZ,b--):(g=y,y=y.nextZ,E--),M?M.nextZ=g:_=g,g.prevZ=M,M=g;v=y}M.nextZ=null,z*=2}while(w>1)})(m)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?sf(r,n,i,s):rf(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),ys(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?vs(r=af(Qi(r),e,t),e,t,n,i,s,2):a===2&&of(r,e,t,n,i,s):vs(Qi(r),e,t,n,i,s,1);break}}function rf(r){let e=r.prev,t=r,n=r.next;if(Ft(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,p=i>s?i>a?i:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=p&&m.y>=u&&m.y<=d&&xr(i,o,s,c,a,l,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sf(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Ft(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,p=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<u?h<p?h:p:u<p?u:p,_=o>c?o>l?o:l:c>l?c:l,f=h>u?h>p?h:p:u>p?u:p,v=Ml(d,m,e,t,n),y=Ml(_,f,e,t,n),g=r.prevZ,M=r.nextZ;for(;g&&g.z>=v&&M&&M.z<=y;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=f&&g!==i&&g!==a&&xr(o,h,c,u,l,p,g.x,g.y)&&Ft(g.prev,g,g.next)>=0||(g=g.prevZ,M.x>=d&&M.x<=_&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&xr(o,h,c,u,l,p,M.x,M.y)&&Ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;g&&g.z>=v;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=f&&g!==i&&g!==a&&xr(o,h,c,u,l,p,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&xr(o,h,c,u,l,p,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function af(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Va(i,s)&&nu(i,n,n.next,s)&&_s(i,s)&&_s(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ys(n),ys(n.next),n=r=s),n=n.next}while(n!==r);return Qi(n)}function of(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&df(a,o)){let c=iu(a,o);return a=Qi(a,a.next),c=Qi(c,c.next),vs(a,e,t,n,i,s,0),void vs(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function lf(r,e){return r.x-e.x}function cf(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=l&&f>c&&(c=f,a=o.x<o.next.x?o:o.next,f===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,p=a.x,d=a.y,m,_=1/0;o=a;do l>=o.x&&o.x>=p&&l!==o.x&&xr(h<d?l:c,h,p,d,h<d?c:l,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(l-o.x),_s(o,i)&&(m<_||m===_&&(o.x>a.x||o.x===a.x&&hf(a,o)))&&(a=o,_=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=iu(t,r);return Qi(n,n.next),Qi(t,t.next)}function hf(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function Ml(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function uf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function xr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function df(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&nu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(_s(r,e)&&_s(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||Va(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Va(r,e){return r.x===e.x&&r.y===e.y}function nu(r,e,t,n){let i=aa(Ft(r,e,t)),s=aa(Ft(r,e,n)),a=aa(Ft(t,n,r)),o=aa(Ft(t,n,e));return i!==s&&a!==o||!(i!==0||!sa(r,t,e))||!(s!==0||!sa(r,n,e))||!(a!==0||!sa(t,r,n))||!(o!==0||!sa(t,e,n))}function sa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function aa(r){return r>0?1:r<0?-1:0}function _s(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function iu(r,e){let t=new bl(r.i,r.x,r.y),n=new bl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Th(r,e,t,n){let i=new bl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ys(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ai=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ch(e),Rh(n,e);let a=e.length;t.forEach(Ch);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Rh(n,t[c]);let o=nf(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Ch(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Rh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var xs=class r extends zt{constructor(e=new Br([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:pf,g,M,w,b,E,z=!1;v&&(g=v.getSpacedPoints(h),z=!0,p=!1,M=v.computeFrenetFrames(h,!1),w=new H,b=new H,E=new H),p||(f=0,d=0,m=0,_=0);let P=o.extractPoints(l),D=P.shape,Q=P.holes;if(!Ai.isClockWise(D)){D=D.reverse();for(let k=0,q=Q.length;k<q;k++){let ne=Q[k];Ai.isClockWise(ne)&&(Q[k]=ne.reverse())}}let R=Ai.triangulateShape(D,Q),Z=D;for(let k=0,q=Q.length;k<q;k++){let ne=Q[k];D=D.concat(ne)}function j(k,q,ne){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(q,ne)}let $=D.length,de=R.length;function ae(k,q,ne){let le,C,x,Y=k.x-q.x,V=k.y-q.y,G=ne.x-k.x,J=ne.y-k.y,ie=Y*Y+V*V,te=Y*J-V*G;if(Math.abs(te)>Number.EPSILON){let me=Math.sqrt(ie),_e=Math.sqrt(G*G+J*J),Ae=q.x-V/me,we=q.y+Y/me,Re=((ne.x-J/_e-Ae)*J-(ne.y+G/_e-we)*G)/(Y*J-V*G);le=Ae+Y*Re-k.x,C=we+V*Re-k.y;let Be=le*le+C*C;if(Be<=2)return new Ie(le,C);x=Math.sqrt(Be/2)}else{let me=!1;Y>Number.EPSILON?G>Number.EPSILON&&(me=!0):Y<-Number.EPSILON?G<-Number.EPSILON&&(me=!0):Math.sign(V)===Math.sign(J)&&(me=!0),me?(le=-V,C=Y,x=Math.sqrt(ie)):(le=Y,C=V,x=Math.sqrt(ie/2))}return new Ie(le/x,C/x)}let K=[];for(let k=0,q=Z.length,ne=q-1,le=k+1;k<q;k++,ne++,le++)ne===q&&(ne=0),le===q&&(le=0),K[k]=ae(Z[k],Z[ne],Z[le]);let se=[],L,W=K.concat();for(let k=0,q=Q.length;k<q;k++){let ne=Q[k];L=[];for(let le=0,C=ne.length,x=C-1,Y=le+1;le<C;le++,x++,Y++)x===C&&(x=0),Y===C&&(Y=0),L[le]=ae(ne[le],ne[x],ne[Y]);se.push(L),W=W.concat(L)}for(let k=0;k<f;k++){let q=k/f,ne=d*Math.cos(q*Math.PI/2),le=m*Math.sin(q*Math.PI/2)+_;for(let C=0,x=Z.length;C<x;C++){let Y=j(Z[C],K[C],le);A(Y.x,Y.y,-ne)}for(let C=0,x=Q.length;C<x;C++){let Y=Q[C];L=se[C];for(let V=0,G=Y.length;V<G;V++){let J=j(Y[V],L[V],le);A(J.x,J.y,-ne)}}}let Ee=m+_;for(let k=0;k<$;k++){let q=p?j(D[k],W[k],Ee):D[k];z?(b.copy(M.normals[0]).multiplyScalar(q.x),w.copy(M.binormals[0]).multiplyScalar(q.y),E.copy(g[0]).add(b).add(w),A(E.x,E.y,E.z)):A(q.x,q.y,0)}for(let k=1;k<=h;k++)for(let q=0;q<$;q++){let ne=p?j(D[q],W[q],Ee):D[q];z?(b.copy(M.normals[k]).multiplyScalar(ne.x),w.copy(M.binormals[k]).multiplyScalar(ne.y),E.copy(g[k]).add(b).add(w),A(E.x,E.y,E.z)):A(ne.x,ne.y,u/h*k)}for(let k=f-1;k>=0;k--){let q=k/f,ne=d*Math.cos(q*Math.PI/2),le=m*Math.sin(q*Math.PI/2)+_;for(let C=0,x=Z.length;C<x;C++){let Y=j(Z[C],K[C],le);A(Y.x,Y.y,u+ne)}for(let C=0,x=Q.length;C<x;C++){let Y=Q[C];L=se[C];for(let V=0,G=Y.length;V<G;V++){let J=j(Y[V],L[V],le);z?A(J.x,J.y+g[h-1].y,g[h-1].x+ne):A(J.x,J.y,u+ne)}}}function S(k,q){let ne=k.length;for(;--ne>=0;){let le=ne,C=ne-1;C<0&&(C=k.length-1);for(let x=0,Y=h+2*f;x<Y;x++){let V=$*x,G=$*(x+1);B(q+le+V,q+C+V,q+C+G,q+le+G)}}}function A(k,q,ne){c.push(k),c.push(q),c.push(ne)}function F(k,q,ne){U(k),U(q),U(ne);let le=i.length/3,C=y.generateTopUV(n,i,le-3,le-2,le-1);X(C[0]),X(C[1]),X(C[2])}function B(k,q,ne,le){U(k),U(q),U(le),U(q),U(ne),U(le);let C=i.length/3,x=y.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);X(x[0]),X(x[1]),X(x[3]),X(x[1]),X(x[2]),X(x[3])}function U(k){i.push(c[3*k+0]),i.push(c[3*k+1]),i.push(c[3*k+2])}function X(k){s.push(k.x),s.push(k.y)}(function(){let k=i.length/3;if(p){let q=0,ne=$*q;for(let le=0;le<de;le++){let C=R[le];F(C[2]+ne,C[1]+ne,C[0]+ne)}q=h+2*f,ne=$*q;for(let le=0;le<de;le++){let C=R[le];F(C[0]+ne,C[1]+ne,C[2]+ne)}}else{for(let q=0;q<de;q++){let ne=R[q];F(ne[2],ne[1],ne[0])}for(let q=0;q<de;q++){let ne=R[q];F(ne[0]+$*h,ne[1]+$*h,ne[2]+$*h)}}n.addGroup(k,i.length/3-k,0)})(),(function(){let k=i.length/3,q=0;S(Z,q),q+=Z.length;for(let ne=0,le=Q.length;ne<le;ne++){let C=Q[ne];S(C,q),q+=C.length}n.addGroup(k,i.length/3-k,1)})()}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ia[i.type]().fromJSON(i)),new r(n,e.options)}},pf={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new Ie(s,a),new Ie(o,c),new Ie(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],p=e[3*i],d=e[3*i+1],m=e[3*i+2],_=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ie(a,1-c),new Ie(l,1-u),new Ie(p,1-m),new Ie(_,1-v)]:[new Ie(o,1-c),new Ie(h,1-u),new Ie(d,1-m),new Ie(f,1-v)]}},Sl=class r extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},wl=class r extends Ki{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},El=class r extends zt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,p=(t-e)/(i=Math.max(1,i)),d=new H,m=new Ie;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){let v=s+f/n*a;d.x=u*Math.cos(v),d.y=u*Math.sin(v),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=p}for(let _=0;_<i;_++){let f=_*(n+1);for(let v=0;v<n;v++){let y=v+f,g=y,M=y+n+1,w=y+n+2,b=y+1;o.push(g,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Al=class r extends zt{constructor(e=new Br([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,p=h.extractPoints(t),d=p.shape,m=p.holes;Ai.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,v=m.length;f<v;f++){let y=m[f];Ai.isClockWise(y)===!0&&(m[f]=y.reverse())}let _=Ai.triangulateShape(d,m);for(let f=0,v=m.length;f<v;f++){let y=m[f];d=d.concat(y)}for(let f=0,v=d.length;f<v;f++){let y=d[f];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let f=0,v=_.length;f<v;f++){let y=_[f],g=y[0]+u,M=y[1]+u,w=y[2]+u;n.push(g,M,w),c+=3}}this.setIndex(n),this.setAttribute("position",new it(i,3)),this.setAttribute("normal",new it(s,3)),this.setAttribute("uv",new it(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Ms=class r extends zt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new H,p=new H,d=[],m=[],_=[],f=[];for(let v=0;v<=n;v++){let y=[],g=v/n,M=0;v===0&&a===0?M=.5/t:v===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let b=w/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+g*o),m.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),f.push(b+M,1-g),y.push(l++)}h.push(y)}for(let v=0;v<n;v++)for(let y=0;y<t;y++){let g=h[v][y+1],M=h[v][y],w=h[v+1][y],b=h[v+1][y+1];(v!==0||a>0)&&d.push(g,M,b),(v!==n-1||c<Math.PI)&&d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Tl=class r extends Ki{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},bs=class r extends zt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new H,u=new H,p=new H;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let _=m/i*s,f=d/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let _=(i+1)*d+m-1,f=(i+1)*(d-1)+m-1,v=(i+1)*(d-1)+m,y=(i+1)*d+m;a.push(_,f,y),a.push(f,v,y)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Cl=class r extends zt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new H,p=new H,d=new H,m=new H,_=new H,f=new H,v=new H;for(let g=0;g<=n;++g){let M=g/n*s*Math.PI*2;y(M,s,a,e,d),y(M+.01,s,a,e,m),f.subVectors(m,d),v.addVectors(m,d),_.crossVectors(f,v),v.crossVectors(_,f),_.normalize(),v.normalize();for(let w=0;w<=i;++w){let b=w/i*Math.PI*2,E=-t*Math.cos(b),z=t*Math.sin(b);u.x=d.x+(E*v.x+z*_.x),u.y=d.y+(E*v.y+z*_.y),u.z=d.z+(E*v.z+z*_.z),c.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(g/n),h.push(w/i)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let w=(i+1)*(g-1)+(M-1),b=(i+1)*g+(M-1),E=(i+1)*g+M,z=(i+1)*(g-1)+M;o.push(w,b,z),o.push(b,E,z)}function y(g,M,w,b,E){let z=Math.cos(g),P=Math.sin(g),D=w/M*g,Q=Math.cos(D);E.x=b*(2+Q)*.5*z,E.y=b*(2+Q)*P*.5,E.z=b*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ss=class r extends zt{constructor(e=new Pa(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,c=new H,l=new Ie,h=new H,u=[],p=[],d=[],m=[];function _(f){h=e.getPointAt(f/t,h);let v=a.normals[f],y=a.binormals[f];for(let g=0;g<=i;g++){let M=g/i*Math.PI*2,w=Math.sin(M),b=-Math.cos(M);c.x=b*v.x+w*y.x,c.y=b*v.y+w*y.y,c.z=b*v.z+w*y.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let v=0;v<=i;v++)l.x=f/t,l.y=v/i,d.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let v=1;v<=i;v++){let y=(i+1)*(f-1)+(v-1),g=(i+1)*f+(v-1),M=(i+1)*f+v,w=(i+1)*(f-1)+v;m.push(y,g,w),m.push(g,M,w)}})()})(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ia[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Rl=class extends zt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new H,s=new H;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],p=u.start;for(let d=p,m=p+u.count;d<m;d+=3)for(let _=0;_<3;_++){let f=o.getX(d+_),v=o.getX(d+(_+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,v),Ph(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ph(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new it(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ph(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var c0=Object.freeze({__proto__:null,BoxGeometry:Pi,CapsuleGeometry:gl,CircleGeometry:vl,ConeGeometry:_l,CylinderGeometry:Fr,DodecahedronGeometry:yl,EdgesGeometry:xl,ExtrudeGeometry:xs,IcosahedronGeometry:Sl,LatheGeometry:Or,OctahedronGeometry:wl,PlaneGeometry:Ir,PolyhedronGeometry:Ki,RingGeometry:El,ShapeGeometry:Al,SphereGeometry:Ms,TetrahedronGeometry:Tl,TorusGeometry:bs,TorusKnotGeometry:Cl,TubeGeometry:Ss,WireframeGeometry:Rl}),Ua=class extends Ri{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ht(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var ws=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Da=class extends ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function oa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ff(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var zr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pl=class extends zr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fc:s=e,o=2*t-n;break;case Bc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fc:a=e,c=2*n-t;break;case Bc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,f=_*m,v=-p*f+2*p*_-p*m,y=(1+p)*f+(-1.5-2*p)*_+(-.5+p)*m+1,g=(-1-d)*f+(1.5+d)*_+.5*m,M=d*f-d*_;for(let w=0;w!==o;++w)s[w]=v*a[h+w]+y*a[l+w]+g*a[c+w]+M*a[u+w];return s}},Ll=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*u+a[c+p]*h;return s}},Il=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ff(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,p=h+n;for(let d=0;d!==n;++d){let m=t[h+d];if(m!==t[u+d]||m!==t[p+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Wn.prototype.TimeBufferType=Float32Array,Wn.prototype.ValueBufferType=Float32Array,Wn.prototype.DefaultInterpolation=ca;var Hi=class extends Wn{};Hi.prototype.ValueTypeName="bool",Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=la,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Wn{};Ul.prototype.ValueTypeName="color";var Dl=class extends Wn{};Dl.prototype.ValueTypeName="number";var Nl=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nn.slerpFlat(s,0,a,l-o,a,l,c);return s}},ls=class extends Wn{InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion",ls.prototype.DefaultInterpolation=ca,ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Wn{};Wi.prototype.ValueTypeName="string",Wi.prototype.ValueBufferType=Array,Wi.prototype.DefaultInterpolation=la,Wi.prototype.InterpolantFactoryMethodLinear=void 0,Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Wn{};Ol.prototype.ValueTypeName="vector";var Lh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Fl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},mf=new Fl,Es=class{constructor(e){this.manager=e!==void 0?e:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bl=class extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Lh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=ds("img");function c(){h(),Lh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Na=class extends Es{constructor(e){super(e)}load(e,t,n,i){let s=new wn,a=new Bl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},Oa=class extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Fa=class extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Go=new lt,Ih=new H,Uh=new H,zl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var h0=new lt,u0=new H,d0=new H;var kl=class extends zl{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var p0=new lt,f0=new lt,m0=new lt;var g0=new H,v0=new Nn,_0=new H,y0=new H;var x0=new H,M0=new Nn,b0=new H,S0=new H;var ql="\\[\\]\\.:\\/",gf=new RegExp("["+ql+"]","g"),Vo="[^"+ql+"]",vf="[^"+ql.replace("\\.","")+"]",_f=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Vo)+/(WCOD+)?/.source.replace("WCOD",vf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo)+"$"),yf=["material","materials","bones","map"],Lt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gf,"")}static parseTrackName(e){let t=_f.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);yf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=class{constructor(r,e,t){let n=t||Lt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray],Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);var E0=new Ie;var A0=new H,T0=new H;var C0=new H;var R0=new H,P0=new lt,L0=new lt;var I0=new H,U0=new ht,D0=new ht;var N0=new H,O0=new H,F0=new H;var B0=new H,z0=new ps;var k0=new On;var G0=new H;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function ru(r,e){let{V:t,plate:n,rod:i,disc:s,bar:a,pin:o,bolts:c,box:l,conduit:h,append:u,parts:p,identity:d,materials:m}=e,_=-.31,f=m.paint,v=m.edge.clone();v.color.setHex(11971473),v.roughness=.55;let y=f.clone();y.color.setHex(16772258),y.roughness=.54;let g=(B,U=_)=>t(B[0],B[1],U),M=[-.68,1.58],w=[4.36,4.25],b=[4.79,4.96],E=[4.14,1.15],z=[4.24,1.61],P=[5.17,1.49],D=[4.67,.892];function Q(B,U,X,k,q,ne){let le=[],C=[],x=[],Y=0;U.forEach(([ie,te],me)=>{if(me&&(Y+=Math.hypot(ie-U[me-1][0],te-U[me-1][1])),le.push(ie,te,X,ie,te,k),C.push(Y*.42,0,Y*.42,(k-X)*.42),me){let _e=2*me;x.push(_e-2,_e-1,_e,_e,_e-1,_e+1)}});let V=new r.BufferGeometry;V.setAttribute("position",new r.Float32BufferAttribute(le,3)),V.setAttribute("uv",new r.Float32BufferAttribute(C,2)),V.setIndex(x),V.computeVertexNormals(),V.computeBoundingBox();let G=V.boundingBox.getCenter(t());V.translate(-G.x,-G.y,-G.z),V.name=B;let J=q.clone();J.side=r.DoubleSide,u(V,J,G,d,t(1,1,1),ne)}function R(B,U,X,k,q){let ne=[...U,...X.slice(1,-1)],le=k*.5-.024;for(let C of[-1,1])n(B+"-flank",ne,_+C*le,.055,q,"braccio",.01);Q(B+"-lower",U,_-le,_+le,q,"braccio"),Q(B+"-upper",X,_-le,_+le,q,"braccio");for(let[C,x]of[U,X].entries())for(let Y of[-1,1])h(B+"-seam-"+C+"-"+Y,x.map(V=>g(V,_+Y*(le+.012))),.0075,q,"braccio",40)}R("320d-reach-boom",[[-.73,1.46],[-.44,1.55],[-.06,2.1],[.29,2.62],[.49,2.82],[.72,2.99],[1.14,3.17],[1.98,3.37],[2.98,3.58],[3.84,3.78],[4.19,3.9],[4.38,4.04],[4.49,4.17],[4.48,4.28],[4.4,4.355]],[[4.4,4.355],[4.29,4.373],[4.11,4.304],[3.8,4.251],[3.08,4.186],[2.26,4.08],[1.29,4.007],[.9,3.95],[.62,3.87],[.41,3.79],[.2,3.675],[.045,3.56],[-.105,3.415],[-.31,3.16],[-.6,2.72],[-.96,1.88],[-1.012,1.68],[-.949,1.53],[-.85,1.475],[-.73,1.46]],.494,f),R("320d-dipper",[[4.805,5.018],[4.875,4.992],[4.96,4.9],[5.15,4.62],[5.3,4.395],[5.325,4.305],[5.306,4.015],[5.331,3.885],[5.32,3.817],[5.245,3.79],[5.184,3.74],[5.073,3.51],[4.94,3.105],[4.775,2.65],[4.59,2.16],[4.437,1.64],[4.25,1.246],[4.215,1.151],[4.172,1.1],[4.117,1.072]],[[4.117,1.072],[4.055,1.08],[3.994,1.145],[3.98,1.23],[4.004,1.41],[4.05,1.81],[4.12,2.64],[4.17,3.34],[4.205,3.85],[4.211,4.19],[4.25,4.346],[4.365,4.54],[4.47,4.695],[4.59,4.84],[4.728,4.984],[4.77,5.013],[4.805,5.018]],.365,y);function ae(B,U,X,k=f,q="braccio"){for(let ne of[-1,1])s(...B,_+ne*X*.5,U,.059,k,q,32),s(...B,_+ne*(X*.5+.035),U*.68,.027,"iron",q,24),c(...B,_+ne*(X*.5+.057),.021,ne);o(...B,_,U*.52,X+.09,q)}ae(M,.193,.61),ae(w,.163,.534),ae(b,.102,.39),ae(E,.113,.41,f,"benna");for(let B of[-1,1])n("series-d-base-yoke",[[-1.14,1.345],[-.28,1.345],[-.41,1.59],[-.53,1.745],[-.71,1.78],[-.9,1.66]],_+B*.315,.107,f,"telaio",.022);function K(B,U,X,k,q,ne,le=_){let C=g(U,le),x=g(X,le),Y=C.clone().lerp(x,q),V=x.clone().sub(C).normalize();i(C,Y,k,ne,"pistoni",28),i(C.clone().lerp(x,.027),C.clone().lerp(x,.073),k*1.065,"iron","pistoni",28),i(Y.clone().addScaledVector(V,-.073),Y,k*1.115,"iron","pistoni",28),i(Y,x,k*.6,"chrome","pistoni",28);let G=te=>Y.clone().addScaledVector(V,te);i(G(-.06),G(-.032),k*1.06,"iron","pistoni",12),i(G(-.029),G(-.01),k*.83,"edge","pistoni",24),i(G(-.008),G(.01),k*.67,"rubber","pistoni",24);let J=x.clone().addScaledVector(V,-.13);i(J,J.clone().addScaledVector(V,.084),k*.78,"iron","pistoni",20);for(let te of[C,x])s(te.x,te.y,te.z,k*1.18,k*1.86,ne,"pistoni",28),s(te.x,te.y,te.z+k,k*.55,.03,"edge","pistoni",20);let ie=C.clone().lerp(Y,.22);i(ie.clone().add(t(0,0,k*.6)),ie.clone().add(t(.025,0,k*1.32)),.024,"bolt","tubazioni",10)}for(let B of[-1,1]){let U=_+B*.365,X=[-.3,1.47],k=[.25,3.58];K("lift",X,k,.115,.54,"black",U),s(...k,_+B*.256,.148,.181,f,"braccio",28)}let se=[1.45,4.111];for(let B of[-1,1])n("320d-dipper-ram-saddle",[[1.27,4.018],[1.64,4.055],[1.56,4.167],[1.46,4.201],[1.38,4.167]],_+B*.118,.077,f,"braccio",.012);K("dipper",se,b,.107,.575,"black");let L=[5.267,3.826];K("curl",L,P,.101,.595,"black"),ae(L,.098,.37,f,"braccio");let W;for(let B of[-1,1]){let U=_+B*.228,X=(k,q,ne,le,C,x)=>{let Y=Math.hypot(ne[0]-q[0],ne[1]-q[1]),V=-(ne[1]-q[1])/Y,G=(ne[0]-q[0])/Y,J=[[q[0]+V*le,q[1]+G*le],[ne[0]+V*le,ne[1]+G*le],[ne[0]-V*le,ne[1]-G*le],[q[0]-V*le,q[1]-G*le]];if(n(k,J,x,C,f,"benna",.014),k==="320d-rocker-link"&&B===1){let ie=g(q,x+C*.5).lerp(g(ne,x+C*.5),.24);W={partIndex:p.length-1,point:ie}}for(let ie of[q,ne])s(...ie,x,le,C,f,"benna",26)};X("320d-rocker-link",P,z,.071,.069,U),X("320d-bucket-link",P,D,.092,.079,U+B*.074)}for(let[B,U,X]of[[P,.078,.73],[z,.075,.61],[D,.084,.72]])o(...B,_,U,X,"benna");for(let B=0;B<4;B++){let U=_-.176+B*.097,X=B*.01,k=[[-.82,1.49],[-.88,1.74],[-.72,2.27],[-.37,3.04],[.05,3.66],[.45,3.93],[.9,4.046],[1.53,4.11],[2.9,4.235],[3.58,4.3],[3.85,4.32]];h("320d-pipe-"+B,k.map(([C,x])=>t(C,x+X,U)),.019,B%2?"paintDark":"paint","tubazioni",48);let q=g(k.at(-1),U);q.y+=X,i(q.clone().add(t(-.06,-.006,0)),q.clone().add(t(.05,.006,0)),.033,"edge","tubazioni",12);let ne=[q,t(4.12,4.378+X,U),t(4.49,4.4+X,U+.055),t(4.72,4.3+X,U+.13),t(4.8,4.03+X,U+.146),t(4.74,3.85+X,U+.146),t(4.56,3.8+X,U+.146)];h("320d-curl-hose-"+B,ne,.025,"rubber","tubazioni",24);let le=ne.at(-1);i(le.clone().add(t(-.058,0,0)),le.clone().add(t(.03,0,0)),.037,"edge","tubazioni",10)}for(let[B,U]of[[-.19,3.43],[.86,4.04],[2.22,4.17],[3.56,4.315]]){l(B,U,_,.065,.043,.446,"paintDark","tubazioni");for(let X of[-1,1])c(B,U,_+X*.23,.016,X)}for(let B of[-1,1]){let U=_+B*.212;for(let X=0;X<2;X++){let k=X*.08,q=[[4.88+k,3.74],[4.81+k,3.65],[4.7+k,3.58],[4.65+k,3.38],[4.57+k,2.87],[4.43+k,2.45],[4.37+k,2.31]];h("320d-stick-pipe-"+B+"-"+X,q.map(ne=>g(ne,U)),.0165,"paint","tubazioni",25);for(let ne of[q[0],q.at(-1)]){let le=g(ne,U);i(le,le.clone().add(t(-.025,-.04,0)),.031,"edge","tubazioni",10)}}}let Ee=1.36,S=[[3.06,.067],[3.31,.034],[3.69,.02],[4.02,.02],[4.32,.027],[4.53,.057],[4.7,.112],[4.85,.207],[4.955,.333],[5.006,.472],[5.018,.602],[5,.719],[4.95,.818],[4.88,.866]],A=[...S,[4.67,.911],[4.57,.936],[4.41,.949],[4.28,.905],[4.211,.795],[4.13,.62],[4.04,.45],[3.91,.293],[3.74,.188],[3.55,.125],[3.15,.108]];Q("320d-yellow-rolled-pan",S,_-Ee*.5,_+Ee*.5,y,"benna");for(let B of[-1,1]){let U=_+B*(Ee*.5-.026);n("320d-yellow-bucket-cheek",A,U,.059,y,"benna",.012),n("320d-direct-pin-lug",[[4.016,.753],[4.001,1.081],[4.049,1.188],[4.124,1.236],[4.204,1.23],[4.271,1.184],[4.357,1.07],[4.543,1.005],[4.666,1.002],[4.752,.956],[4.792,.88],[4.779,.779],[4.695,.727]],_+B*.257,.094,f,"benna",.016);for(let[k,q]of[[E,.135],[D,.122]])s(...k,_+B*.299,q,.05,"paintDark","benna",28);h("320d-cheek-weld-"+B,S.slice(1,-1).map(k=>g(k,U-B*.027)),.009,"paintDark","benna",30)}n("320d-full-width-edge",[[3.025,.054],[3.027,.028],[3.364,.025],[3.414,.048],[3.407,.084],[3.162,.079]],_,Ee+.046,v,"benna",.006);for(let B of[-1,0,1])i(t(3.38,.068,_+B*Ee*.315),t(3.38,.083,_+B*Ee*.315),.031,"bolt","bulloneria",6);return W}var su=new WeakMap;function au(r,e,t){let n=su.get(r);n||(n=new Map,su.set(r,n));let i=t+":"+e;if(n.has(i))return n.get(i);let s=384,a=s*s,o=new Uint8Array(a*4),c=new Uint8Array(a*4),l=new Float32Array(a),h=2745+e*390+t*1309;function u(){return h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296}function p(E){let z=Array.from({length:E*E},u);return(P,D)=>{let Q=P*E,R=D*E,Z=Math.floor(Q),j=Math.floor(R),$=Q-Z,de=R-j;$*=$*(3-2*$),de*=de*(3-2*de);let ae=(K,se)=>z[(se%E+E)%E*E+(K%E+E)%E];return(ae(Z,j)*(1-$)+ae(Z+1,j)*$)*(1-de)+(ae(Z,j+1)*(1-$)+ae(Z+1,j+1)*$)*de}}let d=p(6),m=p(20),_=p(78),f=(E,z,P)=>{let D=Math.floor(E),Q=Math.floor(z),R=E-D,Z=z-Q;for(let j=0;j<2;j++)for(let $=0;$<2;$++){let de=(Q+j+s*2)%s*s+(D+$+s*2)%s;l[de]=Math.max(l[de],P*($?R:1-R)*(j?Z:1-Z))}},v=t===1?114:44;for(let E=0;E<v;E++){let z=u()*s,P=u()*s,D=(t===1?-.22:.11)+(u()-.5)*(t===1?.38:1.5),Q=1+Math.floor(u()*(t===1?8:4));for(let R=0;R<Q;R++){let Z=(t===1?24:8)+u()*(t===1?116:48),j=(R-Q/2)*(1.9+u()*.7),$=(u()-.5)*8,de=.32+u()*.67,ae=u()*22;for(let K=0;K<Z;K+=.55){let se=K/Z,L=K+ae;f(z+L*Math.cos(D)-j*Math.sin(D),P+L*Math.sin(D)+j*Math.cos(D)+$*se*se,de*Math.sin(se*Math.PI)**.4)}}}let y=t===1?e===1?[108,72,53]:e===2?[110,83,67]:[88,92,91]:e===1?[78,75,68]:[77,79,81];for(let E=0,z=0;E<s;E++)for(let P=0;P<s;P++,z++){let D=P/s,Q=E/s,R=d(D,Q),Z=m(D,Q),j=_(D,Q),$=u(),de=l[z],ae=z*4,K=t===1,se=K?Math.pow(Math.max(0,(R*.6+Z*.4-.39)*1.85),1.3):0,L=K?0:Math.max(0,Math.min(1,(Z*.54+j*.35+$*.11-.7)*10)),W=!K&&e===3?.1:!K&&e===1?.6:1,Ee=Math.min(1,(de*(K?.98:.72)+se*.29+L*.55)*W),S=($-.5)*(K?7:3)+(R-.5)*(K?35:14)+(Z-.5)*9;for(let A=0;A<3;A++){let F=y[A]+S+(K&&A===0?se*14:0);o[ae+A]=Math.max(0,Math.min(255,F+([170,167,157][A]-F)*Ee))}o[ae+3]=255,c[ae]=Math.round(Math.max(0,Math.min(1,.57+(j-.5)*.19-de*.2-L*.1))*255),c[ae+1]=Math.round(Math.max(.14,Math.min(1,(K?.68:.48)+(R-.5)*.19-Ee*.39))*255),c[ae+2]=Math.round(Math.min(1,(K?e===3?.38:.25:.085)+Ee*(K?.53:.85))*255),c[ae+3]=255}let g=(E,z)=>{let P=new r.DataTexture(E,s,s,r.RGBAFormat);return P.wrapS=P.wrapT=r.RepeatWrapping,P.generateMipmaps=!0,P.magFilter=r.LinearFilter,P.minFilter=r.LinearMipmapLinearFilter,P.colorSpace=z?r.SRGBColorSpace:r.NoColorSpace,P.needsUpdate=!0,P},M=g(o,!0),w=g(c,!1),b=new r.MeshPhysicalMaterial({name:t===1?"Acciaio abraso della benna":"Smalto grafite del braccio",map:M,roughnessMap:w,metalnessMap:w,bumpMap:w,bumpScale:t===1?.026:.014,roughness:1,metalness:1,clearcoat:t===1?.04:.21,clearcoatRoughness:.34,envMapIntensity:1.11});return n.set(i,b),b}function ou(r,e,t){let n=null,{V:i,parts:s,materials:a,cache:o,append:c,box:l,bar:h,rod:u,disc:p,plate:d,quad:m,pin:_,bolts:f,machineScrew:v,conduit:y,round:g,identity:M}=t,w=e===1,b=e===2,E=e===3,z=i(1,1,1),P=(O,N,ce)=>{let ve=a[N].clone();return ve.name=O,ve.color.setHex(ce),ve},D=P("Montanti verniciati","black",w?7889728:2500907),Q=P("Grafite minerale","black",w?3288874:4343366);Q.roughness=.6,Q.metalness=.4;let R=P("Acciaio verniciato arancio","paint",15102263),Z=P("Base torretta ossidata","paintDark",13463871),j=a.rubber,$=a.glass.clone();if($.color.setHex(w?3227963:b?4676441:4741718),$.opacity=w?.57:b?.55:.62,$.envMapIntensity=.9,$.name="Vetratura fum\xE9 della cabina",w||b){let O=w?1.85:2.75;for(let N of new Set([a.paint.map,a.paint.roughnessMap,a.paint.bumpMap,a.paint.metalnessMap]))N&&N.repeat.set(O,O)}let de=b?null:au(r,e,0),ae=b?null:au(r,e,1),K=a.edge.clone();K.name="Bisello di taglio lucidato",K.color.setHex(16774614),K.roughness=.58,K.envMapIntensity=1.23;let se=b?a.paintDark:Q,L=w?-4.38:b?-4.02:-4.25,W=w?1.33:b?1.23:1.25,Ee=w?3.13:b?2.95:2.9,S=w?1.34:1.25,A=S+.085,F=w?2.37:b?2.17:2.31,B=w?-.27:-.31;function U(O,N,ce,ve){let Te=[],Ce=[],ze=[];for(let[nt,Ne,je,pt]of N){let yt=Math.min(.12,(pt-je)*.22,Ne*.24),Zt=[[0,pt],[-Ne*.72,pt],[-Ne+yt,pt-.014],[-Ne,pt-yt],[-Ne,je+yt],[-Ne+yt,je],[0,je],[Ne-yt,je],[Ne,je+yt],[Ne,pt-yt],[Ne-yt,pt-.014],[Ne*.72,pt]];for(let[sn,Rt]of Zt)Te.push(nt,Rt,sn),Ce.push(nt*.52,(sn+Rt)*.43)}for(let nt=0;nt<N.length-1;nt++)for(let Ne=0;Ne<12;Ne++){let je=nt*12+Ne,pt=nt*12+(Ne+1)%12;ze.push(je,je+12,pt,pt,je+12,pt+12)}let He=(N.length-1)*12;for(let nt=1;nt<11;nt++)ze.push(0,nt,nt+1,He,He+nt+1,He+nt);let Xe=new r.BufferGeometry;Xe.setAttribute("position",new r.Float32BufferAttribute(Te,3)),Xe.setAttribute("uv",new r.Float32BufferAttribute(Ce,2)),Xe.setIndex(ze),Xe.computeVertexNormals(),Xe.computeBoundingBox();let at=Xe.boundingBox.getCenter(i());Xe.translate(-at.x,-at.y,-at.z),Xe.name=O,c(Xe,ce,at,M,z,ve)}function X(O,N,ce,ve,Te,Ce="lamierati",ze=.014){d(O,N,ce,ve,Te,Ce,ze)}function k(O,N,ce,ve=a.paint,Te=.043,Ce="lamierati"){X(O+"-gasket",N,ce,Te+.018,j,Ce,.018);let ze=N.reduce((Xe,at)=>Xe+at[0],0)/N.length,$e=N.reduce((Xe,at)=>Xe+at[1],0)/N.length,He=N.map(([Xe,at])=>[ze+(Xe-ze)*.976,$e+(at-$e)*.963]);X(O+"-skin",He,ce+Math.sign(ce)*.02,Te,ve,Ce,.018)}U("revolving-bed",[[L+.1,W*.64,S-.18,S+.07],[L+.4,W-.08,S-.21,S+.09],[L+.68,W,S-.22,S+.08],[-.57,W,S-.22,S+.08],[.17,W-.04,S-.19,S+.07],[.3,W-.18,S-.12,S+.02]],w?Z:b?a.paintDark:Q,"telaio");let q=w?[[L,.98,S+.02,F-.04],[L+.08,W-.07,S+.01,F],[L+.39,W,S+.01,F],[L+.55,W,S+.01,F-.014]]:b?[[L,.16,S-.17,F-.27],[L+.045,.53,S-.19,F-.22],[L+.13,.8,S-.21,F-.13],[L+.29,1.02,S-.21,F-.08],[L+.48,W-.025,S-.19,F-.03],[L+.72,W,S-.15,F+.008],[L+.9,W-.01,S-.11,F]]:[[L,.19,1.035,F-.31],[L+.03,.51,1.012,F-.27],[L+.12,.79,1.005,F-.22],[L+.26,1.035,1.008,F-.16],[L+.41,1.18,1.018,F-.1],[L+.62,W,1.045,F-.08],[L+.8,W,1.065,F-.06]];if(U("counterweight",q,w?a.paintDark:b?a.paint:Q,"lamierati"),U("engine-underframe",[[L+.49,W-.15,S+.06,F-.07],[-2.09,W-.13,S+.06,F-.04],[-1.86,W-.17,S+.07,F-.13]],w?a.paintDark:Q,"motore"),b){let ce=[[-1.95,S+.096],[.169,S+.096],[.221,S+.12],[.236,S+.163],[.236,S+.378],[.213,S+.413],[.157,S+.432],[-.05,S+.44],[-1.78,S+.454],[-1.95,S+.401]];X("320d-front-service-chest",ce,-.73,.99,a.paint,"motore",.03),l(.236+.014,S+.246,-.73,.025,.229,.885,"rubber","lamierati"),l(.236+.033,S+.249,-.73,.026,.199,.86,"paint","lamierati"),l(.236+.046,S+.212,-.73,.02,.026,.814,"paintDark","lamierati");for(let Ce of[-.258,.233])l(.236+.049,S+.158,-.73+Ce,.024,.032,.108,"iron","lamierati"),u(i(.236+.066,S+.157,-.73+Ce-.049),i(.236+.066,S+.157,-.73+Ce+.049),.012,"edge","lamierati",12);let ve=-.73+.229;l(.236+.051,S+.281,ve,.031,.086,.07,"black","lamierati"),l(.236+.073,S+.285,ve,.013,.053,.039,"edge","lamierati");let Te=-.73-.288;l(.236+.041,S+.349,Te,.044,.078,.117,"rubber","lamierati"),l(.236+.065,S+.349,Te,.012,.055,.09,"light","lamierati");for(let Ce of[-.023,0,.023])l(.236+.074,S+.349,Te+Ce,.006,.052,.005,"edge","lamierati")}else X("far-hydraulic-reservoir",[[-2.08,S+.09],[.13,S+.09],[.23,1.81],[-.09,2.09],[-.83,2.17],[-1.72,F-.065],[-2.08,F-.18]],-.69,1.05,w?a.paint:Q,"motore",.054);let ne=W+.005,le=L+.56;for(let O of[-1,1]){let N=ne*O;if(w){k("classic-service"+O,[[L+.43,S+.12],[-1.38,S+.12],[-1.38,F-.07],[L+.43,F-.07]],N);let ce=L+.38,ve=L+1,Te=S+.21,Ce=F-.15;k("classic-radiator"+O,[[ce-.035,Te-.03],[ve+.035,Te-.03],[ve+.035,Ce+.03],[ce-.035,Ce+.03]],N+O*.035),l((ce+ve)/2,(Te+Ce)/2,N+O*.079,ve-ce,Ce-Te,.014,"interior","motore");for(let ze=0;ze<12;ze++)l(ce+.021+ze*(ve-ce-.042)/11,(Te+Ce)/2,N+O*.094,.015,Ce-Te,.02,"iron","motore");for(let ze=0;ze<11;ze++)l((ce+ve)/2,Te+.016+ze*(Ce-Te-.032)/10,N+O*.1,ve-ce,.012,.019,"edge","motore");for(let ze of[ce-.041,ve+.041])h(i(ze,Te-.03,N+O*.103),i(ze,Ce+.03,N+O*.103),.039,"paint","lamierati");l(L+1.53,S+.15,N+O*.059,1,.059,.018,Z,"lamierati");for(let ze of[L+1.35,-1.47])v(ze,F-.155,N+O*.058,.018,O)}else if(b){k("rear-service"+O,[[le,S+.1],[-1.6,S+.1],[-1.53,F-.04],[-1.67,F+.11],[le+.16,F+.1],[le,F-.1]],N);for(let ve=0;ve<2;ve++)for(let Te=0;Te<4;Te++)for(let Ce=0;Ce<(ve?7:4);Ce++)l(L+.75+ve*.57+Ce*.045,F+.005-Te*.042,N+O*.05,.026,.025,.015,"interior","motore");let ce=[[L+.36,S+.12],[-1.7,S+.12],[-1.63,S+.38],[-1.85,S+.51],[L+1.63,S+.61],[L+.45,S+.57]];X("charcoal-access-insert"+O,ce,N+O*.059,.032,D,"lamierati",.012),l(L+1.41,S+.39,N+O*.093,.079,.14,.022,"black","lamierati");for(let ve of[L+.97,L+1.88])l(ve,S+.6,N+O*.081,.012,.74,.012,"rubber","motore")}else{k("yellow-service"+O,[[le,S+.115],[-1.56,S+.115],[-1.6,F-.12],[-2.03,F-.044],[le+.07,F-.044]],N);let ce=[[le+.1,F-.19],[-2.66,F-.19],[-2.63,F-.55],[le+.25,S+.23],[le+.09,S+.23]];X("triangular-intake"+O,ce,N+O*.055,.027,Q,"motore");let ve=le+.15,Te=-2.7,Ce=S+.31,ze=F-.24;for(let He=0;He<10;He++){let Xe=Ce+(ze-Ce)*He/10,at=ve+(Te-ve)*(.27+.73*(Xe-Ce)/(ze-Ce));for(let nt=0;nt<12;nt++){let Ne=ve+(nt+He%2*.5)*.105;if(Ne>=at-.02)break;p(Ne,Xe,N+O*.074,.042,.016,"interior","motore",6)}}l(-2.12,F-.45,N+O*.06,.044,.16,.034,"rubber","lamierati");let $e=L+.42;for(let He of[0,.1])l($e+.07,F-.33-He,N-O*.022,.31,.056,.03,"red","lamierati",He?.18:-.08)}}for(let[O,N]of[[L+1.02,.77],[L+1.82,.71]])l(O,F+.005,-.18,N,.1,1.42,"rubber","motore"),l(O,F+.063,-.18,N-.018,.092,1.41,w?"paint":b?"paintDark":Q,"lamierati");for(let O=0;O<12;O++)l(L+.67+O*.062,F+.128,-.25,.024,.032,.72,"track","motore");if(b){let O=i(L+1.55,F+.19,-.5);u(O,O.clone().add(i(0,.23,0)),.075,"black","motore",24);let N=o("precleaner-cover",()=>new r.SphereGeometry(1,24,10,0,Math.PI*2,0,Math.PI*.58));c(N,"rubber",i(O.x,O.y+.21,O.z),M,i(.163,.132,.163),"motore")}let C=L+1.16;u(i(C,F+.11,-.48),i(C-.02,F+.41,-.48),.068,"track","motore",20),u(i(C-.02,F+.41,-.48),i(C-.13,F+.48,-.48),.072,"black","motore",18);for(let O of[L+.81,L+1.87])u(i(O,F+.12,.61),i(O,F+.16,.61),.084,"edge","motore",16);l(-2.84,1.79,-.17,1.18,.41,.66,"iron","motore");for(let O=0;O<6;O++){let N=-3.32+O*.187;l(N,2.06,-.17,.142,.15,.54,"black","motore"),u(i(N,2.03,.08),i(N+.053,1.94,.246),.041,"rust","motore",9)}l(-3.65,1.76,-.26,.15,.73,.91,"track","motore");for(let O=0;O<12;O++)l(-3.735,1.44+O*.055,-.26,.025,.018,.81,"edge","motore");let x=w?-1.84:-1.94,Y=w?-.075:b?-.15:.1,V=w?.99:1.035,G=W-.022,J=G-V,ie=(G+J)/2,te=Y-(w?.13:b?.22:.24),me=x+(w?.025:b?.012:.167),_e=Ee-.065,Ae=Y-.045,we=[[x,A],[Ae,A],[Y,A+.24],[Y-.026,A+.54],[te+.042,_e-.17],[te,_e-.044],[me+.052,_e-.009],[me-.014,_e-.071],[x-.008,A+.36]],Re=A+(w?.56:b?.13:.11),Be=A+(w?.64:b?.72:.85),Le=Y-.1,We=x+.066,Ye=[[x+.018,A+.04],[Ae-.04,A+.04],[Le,Re+.01],[We,Be+.012],[x+.018,Be-.03]];for(let[O,N]of[G,J].entries()){if(w){let $e=x+(Y-x)*.365;X("door-threshold"+O,[[x+.018,A+.04],[Ae-.04,A+.04],[Le,A+.255],[x+.018,A+.255]],N,.046,"paint","cabina",.014),X("rear-door-stile"+O,[[x+.018,A+.247],[$e+.026,A+.247],[$e+.026,Be+.015],[x+.018,Be+.015]],N,.046,"paint","cabina",.014),X("front-door-stile"+O,[[Y-.16,A+.245],[Le,A+.245],[Le,Re+.01],[Y-.16,Re+.01]],N,.046,"paint","cabina",.012)}else X("side-cab-sill"+O,Ye,N,.046,b?a.paint:Q,"cabina",.02);let ce=x+(Y-x)*(w?.365:b?.415:.32),ve=ce+.024,Te=$e=>Be+(Re-Be)*($e-We)/(Le-We),Ce=[[We+.036,Te(We+.036)+.044],[ce-.032,Te(ce-.032)+.044],[ve-.042,_e-.073],[me+.109,_e-.071],[me+.026,_e-.159]],ze=[[ce+.037,Te(ce+.037)+.044],[Le-.024,Re+.058],[Y-.1,A+.5],[te-.014,_e-.19],[te-.082,_e-.091],[ve+.043,_e-.075]];X("rear-cab-glazing"+O,Ce,N,.018,$,"vetri",.005),X("cab-door-glazing"+O,ze,N,.018,$,"vetri",.005);for(let $e=0;$e<we.length;$e++){let He=we[$e],Xe=we[($e+1)%we.length];h(i(He[0],He[1],N),i(Xe[0],Xe[1],N),w?.06:.068,w?"paint":D,"cabina",.061)}if(h(i(We,Be,N),i(Le,Re,N),.058,w?"paint":D,"cabina",.054),h(i(ce,Te(ce),N),i(ve,_e-.021,N),w?.06:.047,w?"paint":D,"cabina",.052),w){let $e=[[ce+.062,A+.31],[Y-.16,A+.31],[Y-.15,A+.52],[ce+.062,A+.56]];X("lower-register"+O,$e,N+.021,.016,$,"vetri",.018);for(let He=0;He<4;He++){let Xe=$e[He],at=$e[(He+1)%4];h(i(Xe[0],Xe[1],N+.037),i(at[0],at[1],N+.037),.033,"rubber","cabina")}h(i(ce,Be,N+.031),i(Y-.12,Re,N+.031),.055,"paint","cabina")}if(b){let $e=x+.115;h(i($e,A+.81,N+.022),i($e+.012,_e-.14,N+.022),.039,D,"cabina",.034),l(x+.24,A+.442,N+.046,.093,.064,.035,"black","cabina")}if(E){let $e=[[x+.016,A+.06],[x+.67,A+.06],[x+.82,A+.25],[x+.58,A+.54],[x+.025,A+.87]];X("yellow-trapezoid"+O,$e,N+.022,.043,"paint","lamierati",.019),h(i(ce+.034,A+.58,N+.047),i(Y-.125,A+.64,N+.047),.035,D,"cabina")}}let rt=(O,N)=>i(Ae+(te-Ae)*O,A+.13+(_e-A-.21)*O,N),St=(O,N)=>i(x+.023+(me-x)*O,A+.54+(_e-A-.65)*O,N);m("front-windscreen",[rt(0,J+.03),rt(0,G-.03),rt(1,G-.03),rt(1,J+.03)],$,"vetri"),m("back-windscreen",[St(0,G-.04),St(0,J+.04),St(1,J+.04),St(1,G-.04)],$,"vetri");for(let O of[0,w?.46:.31,1])h(rt(O,J),rt(O,G),O===1?.069:.043,w?"paint":D,"cabina");if(l((x+Y)/2,A,ie,Y-x-.052,.092,V,D,"cabina"),X("roof-brow",[[me-.09,_e-.028],[te+.072,_e-.028],[te+.13,_e+.022],[te+.058,_e+.062],[me-.073,_e+.056]],ie,V+.095,w||E?"paint":D,"cabina",.024),l((me+te)*.5,_e+.077,ie,.64,.023,.58,"rubber","cabina"),l((me+te)*.5,_e+.096,ie,.6,.021,.54,b?"black":"paintDark","cabina"),b){let O=te+.075,N=_e+.106,ce=_e+.302,ve=J+.018,Te=G-.018;for(let Ce of[ve,Te])u(i(O,N,Ce),i(O+.035,ce,Ce),.016,D,"cabina",10),h(i(O-.12,_e+.064,Ce),i(O,N,Ce),.025,D,"cabina");for(let Ce of[N+.015,ce])u(i(O+.029,Ce,ve),i(O+.029,Ce,Te),.017,D,"cabina",12);for(let Ce of[ve+.105,(ve+Te)*.5,Te-.105]){l(O+.021,N+.099,Ce,.071,.147,.157,D,"cabina"),l(O+.059,N+.099,Ce,.011,.116,.128,"light","cabina");for(let ze of[-.03,.03])u(i(O+.068,N+.052,Ce+ze),i(O+.068,N+.145,Ce+ze),.004,"edge","cabina",6);l(O-.01,N+.007,Ce,.06,.044,.052,"iron","cabina")}}if(w){let O=a.paintDark.clone();O.color.setHex(12010529),O.roughness=.61;for(let N of[G+.043,J-.043]){let ce=A+.143;l((x+Y)*.5,ce,N,Y-x-.074,.04,.011,O,"lamierati"),l((x+Y)*.5,ce-.058,N,Y-x-.078,.014,.01,O,"lamierati")}for(let N of[A+.143,A+.085])l((L-.99)*.5,N,W+.052,-.99-L-.22,N>A+.1?.04:.014,.011,O,"lamierati")}let Dt=x+.55;l(Dt,A+.2,ie,.33,.38,.39,"iron","cabina"),l(Dt+.03,A+.4,ie,.47,.12,.51,"interior","cabina"),l(Dt-.19,A+.64,ie,.12,.49,.47,"interior","cabina",.09),w||l(Dt-.215,A+.91,ie,.12,.16,.31,"interior","cabina",.09);for(let O of[-1,1])l(Dt+.09,A+.48,ie+O*.32,.33,.105,.119,"interior","cabina"),u(i(Dt+.19,A+.5,ie+O*.32),i(Dt+.25,A+.68,ie+O*.32),.016,"chrome","cabina",9),l(Dt+.25,A+.71,ie+O*.32,.054,.09,.044,"black","cabina",-.18),l(Ae-.2,A+.078,ie+O*.16,.15,.041,.105,"rubber","cabina",-.14);let Ct=x+.36;l(Ct,Be-.104,G+.044,.185,.065,.041,"black","cabina");for(let O of[G-.12,J+.1])l(te+.032,_e+.006,O,.124,.098,.155,D,"cabina"),l(te+.099,_e+.004,O,.016,.07,.128,"light","cabina");let wt=rt(.11,G-.105),Yt=rt(.73,J+.27);u(wt,Yt,.011,"black","cabina",8),u(Yt.clone().add(i(.008,-.17,-.045)),Yt.clone().add(i(.008,.11,.033)),.015,"black","cabina",8),y("cab-handle",[i(Y-.07,A+.12,G+.04),i(Y-.02,A+.16,G+.124),i(te+.09,_e-.32,G+.128),i(te+.087,_e-.26,G+.044)],.023,w?"paint":E?R:"edge","cabina",16);for(let[O,N,ce]of[[-.72,S-.06,.74],[-.72,S-.28,.46]]){l(O,N,G+.144,ce,.069,.218,"iron","telaio");for(let ve=0;ve<7;ve++)l(O-ce*.41+ve*ce*.136,N+.04,G+.144,.016,.012,.195,"edge","telaio")}if(!w){let O=i(te-.07,_e-.04,G),N=i(te+.14,_e+.09,G+.23);u(O,N,.018,D,"cabina"),l(N.x,N.y-.083,N.z,.061,.18,.13,"black","cabina"),l(N.x+.034,N.y-.083,N.z,.009,.15,.109,"chrome","cabina"),l(Ae-.31,A+.77,J+.135,.081,E?.25:.18,E?.35:.16,"black","cabina",-.13)}if(E){for(let N of[G-.24,-.82]){let ce=F+.09,ve=Ee+.22;y("rail-arch-"+N,[i(-2.3,ce,N),i(-2.3,ve-.07,N),i(-2.36,ve,N),i(-3.04,ve,N),i(-3.11,ve-.08,N),i(-3.11,ce+.01,N)],.02,R,"cabina",22),h(i(-2.31,ve-.3,N),i(-3.1,ve-.3,N),.026,R,"cabina")}let O=o("roof-lamp",()=>new r.SphereGeometry(1,16,9,0,Math.PI*2,0,Math.PI/2));for(let[N,ce,ve]of[[me+.19,J+.08,6309152],[me+.18,G-.103,3172945]]){let Te=P("Lente spia di tetto","light",ve),Ce=_e+.064;u(i(N,Ce,ce),i(N,Ce+.049,ce),.063,"black","cabina",16),u(i(N,Ce+.05,ce),i(N,Ce+.13,ce),.048,Te,"cabina",18),c(O,Te,i(N,Ce+.13,ce),M,i(.049,.03,.049),"cabina")}l(L+.08,F-.28,0,.089,.107,.145,D,"motore"),l(L+.03,F-.28,0,.012,.062,.063,$,"vetri")}if(b)return ru(r,t);let he=w?[-.88,1.58]:[-.61,1.72],Ve=w?[4.02,4.32]:[4.06,4.94],ft=w?[3.32,1.28]:[4.13,1.45],gt=ft[0]-Ve[0],tt=w?[.92,3.78]:[1.03,4.03],_n=[he,[he[0]+.25,he[1]+.54],[tt[0]-.31,tt[1]-.22],tt,[tt[0]+.67,tt[1]+.2],[Ve[0]-.68,Ve[1]-.1],[Ve[0]-.25,Ve[1]-.035],Ve],rn=w?[.18,.31,.335,.38,.32,.22,.177,.17]:[.164,.25,.358,.37,.321,.215,.171,.155];function qn(O,N,ce,ve,Te){let Ce=new r.CatmullRomCurve3(N.map(Ne=>i(Ne[0],Ne[1],0)),!1,"centripetal"),ze=new r.CatmullRomCurve3(N.map((Ne,je)=>i(je,ce[je],0)),!1,"catmullrom",.32),$e=[],He=[];for(let Ne=0;Ne<=25;Ne++){let je=Ne/25,pt=Ce.getPoint(je),yt=Ce.getTangent(je),Zt=ze.getPoint(je).y;$e.push([pt.x-yt.y*Zt,pt.y+yt.x*Zt]),He.push([pt.x+yt.y*Zt,pt.y-yt.x*Zt])}let Xe=[...$e,...He.reverse()],at=ve/2-.033;for(let Ne of[-1,1])X(O+"-flank",Xe,B+Ne*at,.07,Te,"braccio",.018);function nt(Ne,je){let pt=[],yt=[],Zt=[],sn=ve/2-.068;Ne.forEach(([T,ee],ge)=>{if(pt.push(T,ee,B-sn,T,ee,B+sn),yt.push(ge/Ne.length,0,ge/Ne.length,1),ge){let ye=ge*2;Zt.push(ye-2,ye,ye-1,ye,ye+1,ye-1,ye-1,ye,ye-2,ye-1,ye+1,ye)}});let Rt=new r.BufferGeometry;Rt.setAttribute("position",new r.Float32BufferAttribute(pt,3)),Rt.setAttribute("uv",new r.Float32BufferAttribute(yt,2)),Rt.setIndex(Zt);let Tn=[];for(let T=0;T<Ne.length;T++){let ee=Ne[Math.max(T-1,0)],ge=Ne[Math.min(T+1,Ne.length-1)],ye=ge[0]-ee[0],Me=ge[1]-ee[1],Se=Math.hypot(ye,Me);Tn.push(-Me/Se,ye/Se,0,-Me/Se,ye/Se,0)}Rt.setAttribute("normal",new r.Float32BufferAttribute(Tn,3)),Rt.computeBoundingBox();let Cn=Rt.boundingBox.getCenter(i());Rt.translate(-Cn.x,-Cn.y,-Cn.z),c(Rt,Te,Cn,M,z,"braccio");for(let T of[-1,1])y(O+"-weld"+je+T,Ne.map(ee=>i(ee[0],ee[1],B+T*(ve/2-.014))),.0105,se,"braccio",29)}nt($e,"upper"),nt(He,"lower")}let yn=[Ve[0]+(w?.23:.28),Ve[1]+(w?.69:.84)],xn=[yn,[Ve[0]+.047,Ve[1]+.17],Ve,[Ve[0]+gt*.22+.06,Ve[1]-.51],[ft[0]-.035,ft[1]+.87],ft];qn("main-boom",_n,rn,w?.49:.5,de),qn("dipper",xn,[.093,.164,.19,.234,.152,.107],w?.358:.347,de);function Yn(O,N,ce,ve,Te=de){for(let Ce of[-1,1])p(O,N,B+Ce*ve*.5,ce,.092,Te,"braccio",28),p(O,N,B+Ce*(ve*.5+.058),ce*.78,.046,se,"braccio",26),f(O,N,B+Ce*(ve*.5+.107),ce*.26,Ce);_(O,N,B,ce*.5,ve+.2,"braccio")}function Zn(O,N,ce,ve,Te=.5){let Ce=[[N-.16,ce-.22],[N+.155,ce-.22],[N+.133,ce+.075],[N+.025,ce+.14],[N-.095,ce+.1]];for(let ze of[-1,1])X(O,Ce,B+ze*Te*.5,.073,ve,"braccio",.014)}Zn("boom-pedestal",he[0],he[1],se,.58),Yn(he[0],he[1],.18,.6),Yn(Ve[0],Ve[1],.153,.534);function en(O,N,ce,ve=se,Te=.63){let Ce=O.clone().lerp(N,Te);u(O,Ce,ce,ve,"pistoni",20),u(O.clone().lerp(N,.02),O.clone().lerp(N,.074),ce*1.075,Q,"pistoni",20),u(O.clone().lerp(N,Te-.031),Ce.clone().lerp(N,.024),ce*1.13,"iron","pistoni",22),u(Ce,N,ce*.58,"chrome","pistoni",20);for(let $e of[O,N])p($e.x,$e.y,$e.z,ce*1.24,ce*1.9,ve,"pistoni",22),p($e.x,$e.y,$e.z+ce*1.09,ce*.59,.035,"bolt","bulloneria",12);let ze=O.clone().lerp(N,.15);u(ze.clone().add(i(0,0,ce*.6)),ze.clone().add(i(.025,0,ce*1.43)),ce*.23,"edge","pistoni",8)}for(let O of[-1,1]){let N=B+O*.331;en(i(he[0]+.46,1.41,N),i(tt[0]-.38,tt[1]-.35,N),w?.113:.108);let ce=[[he[0]-.1,he[1]-.088],[he[0]-.097,he[1]+.18],[he[0]+.3,he[1]+.55],[he[0]+.46,he[1]+.4],[he[0]+.13,he[1]-.045]];X("boom-root-facing",ce,B+O*.257,.034,de,"braccio")}let _t=i(tt[0]+.2,tt[1]+(w?.49:.44),B);Zn("stick-pickup-clevis",_t.x,_t.y,se,.23),en(_t,i(yn[0],yn[1],B),.11,Q,.586);let kt=i(Ve[0]+(w?.32:.4),Ve[1]-.235,B+.032),Nt=i(ft[0]+(w?.56:.62),ft[1]+.47,B+.032),Gt=i(ft[0]+.18,ft[1]+.085,B+.032),Vt=[[Ve[0]+.06,Ve[1]-.035],[Ve[0]+.28,Ve[1]-.09],[kt.x+.084,kt.y+.05],[kt.x+.067,kt.y-.05],[kt.x-.09,kt.y-.09],[Ve[0]+.04,Ve[1]-.18]];for(let O of[-1,1])X("riser-for-bucket-ram",Vt,B+O*.127,.092,de,"braccio",.015);en(kt,Nt,.0885,de,.6);for(let O of[-1,1]){let N=i(0,0,O*.215),ce=[[Nt.x-.084,Nt.y+.062],[Nt.x+.052,Nt.y+.1],[Nt.x+.105,Nt.y-.012],[Gt.x+.105,Gt.y-.012],[Gt.x+.031,Gt.y-.076],[Gt.x-.064,Gt.y-.046],[Gt.x-.042,Gt.y+.068]];X("curved-bucket-link",ce,B+O*.212,.086,se,"benna",.015),h(Nt.clone().add(N),i(ft[0]-.04,ft[1]+.69,B+O*.215),.084,de,"benna",.06)}_(Nt.x,Nt.y,B,.074,.59,"benna"),_(Gt.x,Gt.y,B,.068,.59,"benna");for(let O=0;O<(E?5:3);O++){let N=B-.17+O*(E?.081:.145),ce=O*.013,ve=[i(-1.18,1.64,N),i(-.82,1.97,N-.035),i(-.53,2.17,N),i(tt[0]-.33,tt[1]+.19+ce,N),i(tt[0]+.15,tt[1]+.37+ce,N),i(tt[0]+.69,tt[1]+.445+ce,N),i(Ve[0]-.66,Ve[1]+.181+ce,N)];y("hard-feed"+O,ve,.019,E?"track":"iron","tubazioni",25);let Te=ve[ve.length-1],Ce=[Te,i(Ve[0]-.31,Ve[1]+.251+ce,N),i(Ve[0]-.048,Ve[1]+.19,N+.04),i(Ve[0]+.125,Ve[1]+.016,N+.075),i(Ve[0]+.17,Ve[1]-.32,N+.077)];y("flex-on-knuckle"+O,Ce,.021,"rubber","tubazioni",17);let ze=Ce[Ce.length-1];y("dipper-line"+O,[ze,i(Ve[0]+.2+gt*.14,Ve[1]-.64,N+.08),i(ft[0]+.111,ft[1]+.9,N+.066),i(ft[0]+.14,ft[1]+.6,N+.061)],.0148,E?"track":"rubber","tubazioni",15);let $e=Ce[1].clone().sub(Te).normalize(),He=Xe=>Te.clone().addScaledVector($e,Xe);u(He(-.066),He(-.025),.035,"edge","tubazioni",6),u(He(-.025),He(.023),.029,"iron","tubazioni",18),u(He(.023),He(.064),.037,"edge","tubazioni",6);for(let Xe of[.073,.086,.099])u(He(Xe),He(Xe+.005),.027,"iron","tubazioni",14)}for(let O of[.21,.51,.78]){let N=tt[0]+(Ve[0]-tt[0])*O;l(N,tt[1]+.4+(Ve[1]+.18-tt[1]-.4)*O,B,.063,.048,.464,se,"tubazioni")}let Ot=B+.285;for(let[O,N]of[[0,0],[1,.057]]){let ce=[i(tt[0]-.69,tt[1]-.47+N,Ot),i(tt[0]-.39,tt[1]-.12+N,Ot),i(tt[0]+.05,tt[1]+.12+N,Ot),i(tt[0]+.56,tt[1]+.15+N,Ot),i(tt[0]+1.13,tt[1]+.16+N,Ot)];y("outboard-pipe"+O,ce,.017,O?"rubber":"edge","tubazioni",18);for(let ve of[0,4]){let Te=ce[ve];u(i(Te.x-.037,Te.y,Te.z),i(Te.x+.037,Te.y,Te.z),.028,"bolt","tubazioni",6)}}for(let[O,N]of[[tt[0]-.4,tt[1]-.105],[tt[0]+.56,tt[1]+.167]])l(O,N,Ot+.019,.052,.13,.039,se,"tubazioni"),p(O,N+.039,Ot+.049,.015,.015,"bolt","bulloneria",6);let An=B+.235;for(let O=0;O<3;O++){let N=An+O*.032,ce=O*.025,ve=[i(Ve[0]-.32,Ve[1]+.116+ce,N-.025),i(Ve[0]-.13,Ve[1]+.187+ce,N),i(Ve[0]+.125,Ve[1]+.1+ce,N+.065),i(Ve[0]+.2,Ve[1]-.28-ce,N+.11),i(Ve[0]+.07,Ve[1]-.56-ce,N+.105),i(Ve[0]-.135,Ve[1]-.58-ce,N+.039)];y("flexible-loop"+O,ve,.019,"rubber","tubazioni",23);let Te=ve.at(-1);u(Te,Te.clone().add(i(-.018,-.066,0)),.029,"edge","tubazioni",8)}let I=B+.237;for(let O=0;O<(E?3:2);O++){let N=(O-1)*.055,ce=Ve[0]+.12+N,ve=i(ce,Ve[1]-.64,I+.042),Te=i(ft[0]+.11+N,ft[1]+.85,I+.042);u(ve,Te,.019,E?"edge":"iron","tubazioni",12);for(let Ce of[0,.27,.9]){let ze=ve.clone().lerp(Te,Ce);u(ze,ze.clone().add(i(0,-.07,0)),.027,"track","tubazioni",8)}}if(E){let O=Ve[0]+gt*.41+.053,N=Ve[1]+(ft[1]-Ve[1])*.41;l(O,N,B+.202,.18,.083,.045,D,"braccio",-1.4);for(let ce of[-.061,.061])f(O,N+ce,B+.236,.014)}let oe=ft[0],pe=ft[1]-(E?.21:.15),be=w?1.2:1.26,fe=Math.max(.65,Math.min(1.26,pe-.045)),Ue=w?.99:.83,qe=[[-Ue,-.86],[-.61,-.94],[-.34,-.987],[-.08,-1],[.19,-.962],[.41,-.85],[.56,-.67],[.66,-.44],[.67,-.23],[.61,-.067],[.54,.045],[.34,.17],[.14,.156],[-.035,.031],[-.15,-.15],[-.32,-.39],[-.54,-.62]],Ge=qe.slice(0,12).map(([O,N])=>[oe+O,pe+N*fe]);for(let O of[-1,1])X("dished-bucket-side",qe.map(([ve,Te])=>[oe+ve,pe+Te*fe]),B+O*be*.48,.064,ae,"benna",.018),O===1&&(n={partIndex:s.length-1,point:i(oe+.642,pe-.2*fe,B+be*.48)}),X("bucket-side-wear",[[-.81,-.827],[-.58,-.92],[-.18,-.95],[.19,-.92],[.49,-.76],[.45,-.66],[.1,-.81],[-.46,-.8]].map(([ve,Te])=>[oe+ve,pe+Te*fe]),B+O*(be*.5+.03),.029,K,"benna",.008),X("linkage-pin-ear",[[-.25,-.075],[-.2,.141],[-.045,.232],[.145,.197],[.237,.057],[.17,-.11]].map(([ve,Te])=>[oe+ve,pe+Te]),B+O*.198,.072,ae,"benna",.013);if(E)for(let O of[-1,1]){let N=B+O*(be*.5+.041);for(let ce=0;ce<3;ce++){let ve=-.43+ce*.34,Te=[[ve,-.8],[ve+.23,-.83],[ve+.31,-.59],[ve+.076,-.55]];X("lower-wear-pad"+ce,Te.map(([Ce,ze])=>[oe+Ce,pe+ze*fe]),N,.031,ae,"benna",.015)}l(oe+.105,pe-.337*fe,N+O*.018,.31,.056,.027,ae,"benna",-.055)}for(let O of[-1,1]){let N=B+O*(be*.5+.053);X("bucket-side-cutter",[[-.76,-.79],[-.56,-.76],[-.28,-.47],[-.21,-.3],[-.3,-.32],[-.59,-.58]].map(([Ce,ze])=>[oe+Ce,pe+ze*fe]),N,.071,ae,"benna",.014),X("side-cutter-ground-edge",[[-.76,-.8],[-.56,-.768],[-.27,-.463],[-.22,-.33],[-.283,-.452],[-.6,-.71]].map(([Ce,ze])=>[oe+Ce,pe+ze*fe]),N+O*.039,.012,K,"benna",.004);for(let[Ce,ze]of[[-.57,-.695],[-.402,-.51]])p(oe+Ce,pe+ze*fe,N+O*.042,.057,.01,"track","bulloneria",18),p(oe+Ce,pe+ze*fe,N+O*.054,.04,.025,"bolt","bulloneria",6);X("bucket-cheek-wear-pad",[[.13,-.74],[.34,-.63],[.48,-.46],[.52,-.26],[.45,-.16],[.41,-.37],[.28,-.57],[.09,-.68]].map(([Ce,ze])=>[oe+Ce,pe+ze*fe]),N-O*.012,.034,ae,"benna",.012),y("wear-pad-weld"+O,[[.11,-.71],[.31,-.6],[.43,-.43],[.46,-.26]].map(([Ce,ze])=>i(oe+Ce,pe+ze*fe,N+O*.012)),.012,"edge","benna",13)}for(let O=0;O<Ge.length-1;O++){let[N,ce]=Ge[O],[ve,Te]=Ge[O+1];h(i(N,ce,B),i(ve,Te,B),.066,ae,"benna",be-.04)}for(let O of[-1,0,1]){let N=B+O*be*.28;y("abrasion-rib"+O,Ge.slice(1,9).map(([ce,ve])=>i(ce+.03,ve-.032,N)),.031,"iron","benna",15)}h(i(oe-Ue,pe-.86*fe,B-be*.5),i(oe-Ue,pe-.86*fe,B+be*.5),.105,"edge","benna");for(let O=0;O<5;O++){let N=B-be*.41+O*be*.205;X("forged-tooth",[[oe-.74,pe-.83*fe],[oe-.92,pe-.84*fe],[oe-1.107,pe-.908*fe],[oe-1.13,pe-.955*fe],[oe-1.006,pe-.958*fe],[oe-.74,pe-.912*fe]],N,.118,K,"benna",.011),p(oe-.872,pe-.888*fe,N+.064,.019,.014,"bolt","bulloneria",8)}return _(oe,pe+.06,B,.096,.58,"benna"),n}function Li(r,e,t){let i=new Uint8Array(262144),s=new Uint8Array(256*256*4),a=(d,m,_)=>d+(m-d)*_,o=(d,m,_)=>{let f=Math.max(0,Math.min(1,(_-d)/(m-d)));return f*f*(3-2*f)};function c(d,m,_){let f=Math.imul(d^_,668265261)^Math.imul(m+17,374761393);return f=Math.imul(f^f>>>15,2246822507),((f^f>>>13)>>>0)/4294967295}let l=(d,m,_,f,v)=>{let y=d*_,g=m*f,M=Math.floor(y),w=Math.floor(g),b=(P,D)=>c((P%_+_)%_,(D%f+f)%f,v),E=o(0,1,y-M),z=o(0,1,g-w);return a(a(b(M,w),b(M+1,w),E),a(b(M,w+1),b(M+1,w+1),E),z)};for(let d=0;d<256;d++)for(let m=0;m<256;m++){let _=m/256,f=d/256,v=(d*256+m)*4,y=t.seed,g=l(_,f,4,3,y),M=l(_,f,14,11,y+4),w=c(m,d,y+7),b=l(_,f,49,27,y+2),E=l(_,f,73,6,y+19),z=g*.41+M*.23+b*.17+E*.15+w*.04,P=o(t.cut-.07,t.cut+.045,z),D=o(.49,.71,g*.37+b*.32+M*.2+w*.11),Q=o(.72,.93,E)*(.25+.75*M);for(let R=0;R<3;R++){let Z=t.paint[R]*(.84+.2*M+.09*w),j=a(t.metal[R],t.oxide[R],D)*(.88+.16*b+.08*w);i[v+R]=Math.min(255,a(a(Z,j,P),t.metal[R],Q*.17))}i[v+3]=255,s[v]=Math.round(255*(.56+.04*w+.035*b-.095*P+.04*D)),s[v+1]=Math.round(255*a(.6+.085*M,.39+.4*D+.1*b,P)),s[v+2]=Math.round(255*a(.11,.72-.4*D,P)),s[v+3]=255}function h(d,m){let _=new r.DataTexture(d,256,256,r.RGBAFormat);return _.wrapS=_.wrapT=r.RepeatWrapping,_.magFilter=r.LinearFilter,_.minFilter=r.LinearMipmapLinearFilter,_.generateMipmaps=!0,m&&(_.colorSpace=r.SRGBColorSpace),_.anisotropy=3,_.needsUpdate=!0,_}let u=h(i,!0),p=h(s,!1);return new r.MeshStandardMaterial({name:e,map:u,bumpMap:p,roughnessMap:p,metalnessMap:p,bumpScale:.021,metalness:1,roughness:1,envMapIntensity:.98})}function lu(r,e,t){let{V:n,box:i,bar:s,rod:a,plate:o,disc:c,pin:l,ring:h,bolts:u,machineScrew:p,append:d,round:m,cache:_,identity:f,quad:v,conduit:y,parts:g}=e,M=-.37,w=(T,ee,ge)=>{let ye=T.clone();return ye.color.set(ge),ye.name=ee,ye},b=Li(r,"Ocra industriale invecchiato",{seed:53,paint:[211,158,48],metal:[130,123,101],oxide:[96,75,54],cut:.675}),E=Li(r,"Rosso ossidato e lamiera scoperta",{seed:71,paint:[124,44,46],metal:[125,111,96],oxide:[98,73,57],cut:.663}),z=Li(r,"Cassone del braccio in acciaio antracite",{seed:12,paint:[46,47,44],metal:[101,99,90],oxide:[87,65,49],cut:.63}),P=Li(r,"Asta di spinta e guide brunite",{seed:24,paint:[51,54,52],metal:[114,111,96],oxide:[90,68,43],cut:.605}),D=Li(r,"Fusione consumata della benna",{seed:39,paint:[117,113,96],metal:[111,109,96],oxide:[133,98,75],cut:.467}),Q=Li(r,"Interno della benna segnato dalla terra",{seed:46,paint:[48,50,45],metal:[73,75,66],oxide:[83,64,53],cut:.47}),R=Li(r,"Pattini ossidati",{seed:44,paint:[75,69,59],metal:[124,118,100],oxide:[121,89,61],cut:.563}),Z=Li(r,"Acciaio fuso del telaio",{seed:14,paint:[103,108,100],metal:[135,137,124],oxide:[111,83,66],cut:.518}),j=w(t.iron,"Battute di acciaio esposto",12764084),$=b,de=t.glass.clone();de.name="Vetro storico neutro",de.color.set(4477529),de.opacity=.49,de.metalness=.13,de.clearcoat=.58,de.envMapIntensity=.76;let ae=(T,ee,ge,ye=1,Me=.019)=>{c(T,ee,ge,Me,.01,"iron","bulloneria",10),c(T,ee,ge+ye*.007,Me*.81,.012,"bolt","bulloneria",10)},K=(T,ee)=>T.map(([ge,ye])=>n(ge,ye,ee)),se=(T,ee,ge,ye,Me,Se,Je,Ke,ot,Ht="lamierati")=>v(T,[n(ee,Se,ge),n(ye,Se,Me),n(ye,Ke,Me),n(ee,Je,ge)],ot,Ht),L=(T,ee,ge,ye,Me="telaio")=>a(T,ee,ge,ye,Me,10),W=(T,ee,ge,ye,Me,Se)=>{let Je=new r.Shape(T.map(([Ht,tn])=>new r.Vector2(Ht,tn)));Je.closePath(),ee.forEach(Ht=>{let tn=new r.Path(Ht.map(([Mn,re])=>new r.Vector2(Mn,re)));tn.closePath(),Je.holes.push(tn)});let Ke=new r.ExtrudeGeometry(Je,{depth:ye,bevelEnabled:!1,curveSegments:3});Ke.computeBoundingBox();let ot=Ke.boundingBox.getCenter(n());Ke.translate(-ot.x,-ot.y,-ot.z),d(Ke,Me,n(ot.x,ot.y,ge),f,n(1,1,1),Se)},Ee=_("perforated-period-shoe",()=>{let T=new r.Shape;[[-.5,-.4],[-.43,-.5],[.42,-.5],[.5,-.42],[.5,.42],[.42,.5],[-.43,.5],[-.5,.4]].forEach(([ye,Me],Se)=>Se?T.lineTo(ye,Me):T.moveTo(ye,Me)),T.closePath();for(let ye of[-.275,.275]){let Me=new r.Path;Me.absellipse(.04,ye,.115,.052,0,2*Math.PI,!0,0),T.holes.push(Me)}let ge=new r.ExtrudeGeometry(T,{depth:.76,bevelEnabled:!0,bevelSize:.011,bevelThickness:.04,bevelSegments:1,curveSegments:6});return ge.translate(0,0,-.38),ge.rotateX(Math.PI*.5),ge});for(let T of g)T.group==="cingoli"&&T.scale.z>.53&&T.scale.z<.56&&(T.scale.y>.064?(T.geometry=Ee,T.material=R,T.scale.z*=1.22,T.scale.x*=1.055):(T.scale.z*=1.16,T.scale.y*=.57,T.material=R));for(let T of[-1,1]){let ee=T*1.112,ge=[[-3.56,.58],[-3.37,.78],[-2.91,.814],[-.33,.807],[-.064,.715],[.17,.642],[.12,.49],[-.18,.399],[-2.71,.34],[-3.46,.435]],ye=[-2.44,-1.43].map(Me=>Array.from({length:16},(Se,Je)=>[Me+.059*Math.cos(Je*Math.PI/8),.663+.057*Math.sin(Je*Math.PI/8)]));W(ge,ye,ee,.074,Z,"telaio");for(let Me of[-3.17,-2.93,-.39,-.16])s(n(Me,.6,ee+T*.032),n(Me+.25,.6,ee+T*.032),.027,"edge","telaio",.044);s(n(-3.2,.402,ee+T*.041),n(-.375,.402,ee+T*.041),.039,Z,"telaio",.057)}let S=g.length,A=[[-2.88,-1.16],[-3.19,-1.135],[-3.46,-1.025],[-3.65,-.85],[-3.76,-.64],[-3.8,-.38],[-3.8,.38],[-3.76,.64],[-3.65,.85],[-3.46,1.025],[-3.19,1.135],[-2.88,1.16]],F=[[-3.81,3.33],[-3.55,3.4],[-3.2,3.51],[-2.89,3.59],[-2.32,3.72],[-1.7,3.79],[-1.1,3.82],[-.51,3.77],[-.17,3.64],[.02,3.48]];function B(T){let ee=F.findIndex(Me=>Me[0]>=T);if(ee<=0)return F[ee===0?0:F.length-1][1];let[ge,ye]=[F[ee-1],F[ee]];return ge[1]+(ye[1]-ge[1])*(T-ge[0])/(ye[0]-ge[0])}let U=1.48,X=2.34,k=3.27;i(-1.55,1.39,0,3.59,.18,2.39,Z,"telaio"),i(-3.18,1.35,0,1.15,.24,1.93,"iron","telaio"),A.slice(0,-1).forEach(([T,ee],ge)=>{let[ye,Me]=A[ge+1],Se=(T+ye)/2;se("rb-stern-deck-"+ge,T-.105,ee*1.04,ye-.105,Me*1.04,1.25,1.49,1.49,Z,"telaio"),se("rb-stern-low-"+ge,T,ee,ye,Me,U,X,X,E),se("rb-stern-upper-"+ge,T,ee,ye,Me,X,k,k,b),se("rb-stern-rim-"+ge,T,ee*1.005,ye,Me*1.005,k,B(T),B(ye),$);let Je=n(T,B(T),ee),Ke=n(ye,B(ye),Me);v("rb-rear-roof-"+ge,[Je,Ke,n(-2.88,B(-2.88)+.035,0),n(Se,(B(T)+B(ye))*.5+.016,(ee+Me)*.3)],$,"lamierati")});let q=(T,ee,ge,ye,Me,Se,Je)=>o(T,[[ee,ye],[ge,ye],[ge,Me],[ee,Me]],Se,.035,Je,"lamierati",.006);for(let T of[-1,1]){let ee=T*1.16;i(-2.69,2.38,ee-T*.021,.6,1.78,.049,"interior","motore");for(let Me=0;Me<16;Me++){let Se=1.52+Me*.113;i(-2.69,Se,ee,.556,.053,.085,Se<X?E:b,"motore");for(let Je of[-1,1])Me%5===0&&ae(-2.69+Je*.307,Se,ee+T*.043,T,.014)}for(let Me of[-.325,.327])i(-2.69+Me,2.39,ee,.037,1.81,.048,Z,"lamierati");let ge=[[-2.34,-1.84],[-1.824,-1.18]];T<0&&ge.push([-1.16,-.5],[-.48,.01]);for(let[Me,Se]of ge){q("rb-plate-low"+Me,Me,Se,U,X,ee,E),q("rb-plate-high"+Me,Me,Se,X+.006,k,ee,b),T===1&&Me===-2.34&&(g[g.length-1].captionPoint=n(Me+.125,k-.115,ee+.025));for(let Je of[Me+.03,Se-.035])for(let Ke of[1.57,2.28,2.77,3.17])ae(Je,Ke,ee+T*.027,T)}if(T<0){i(-1.78,2.76,ee-.037,.35,.25,.014,"interior","motore");for(let Me=0;Me<7;Me++)i(-1.78,2.66+Me*.035,ee-.051,.32,.014,.028,b,"motore")}let ye=[-2.89,-2.31,-1.66,-.93,-.37,-.17];for(let Me=0;Me<ye.length-1;Me++){let Se=ye[Me],Je=ye[Me+1];se("rb-gutter"+T+"-"+Me,Se,ee+T*.009,Je,ee+T*.009,k,B(Se),B(Je),$);for(let Ke of[Se+.052,Je-.048])ae(Ke,B(Ke)-.054,ee+T*.023,T,.015)}}let ne=[-2.89,-2.32,-1.7,-1.1,-.51,-.17];for(let T=0;T<ne.length-1;T++){let ee=ne[T],ge=ne[T+1],Me=(T>=3?[[-1.165,-1.145,-1.095,-.99,-.65],[.095,.99,1.095,1.145,1.165]]:[[-1.165,-1.145,-1.095,-.99,0,.99,1.095,1.145,1.165]]).flatMap(Se=>Se.slice(1).map((Je,Ke)=>[Se[Ke],Je]));for(let Se=0;Se<Me.length;Se++){let[Je,Ke]=Me[Se],ot=Ht=>.108*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(Ht)/1.165,12)))+.025*(1-Math.abs(Ht)/1.165);v("rb-crown-"+T+"-"+Se,[n(ee,B(ee)+ot(Je),Je),n(ge,B(ge)+ot(Je),Je),n(ge,B(ge)+ot(Ke),Ke),n(ee,B(ee)+ot(Ke),Ke)],$,"lamierati")}}o("rb-rolled-windscreen-brow",[[-.205,3.297],[-.205,3.648],[-.157,3.617],[-.099,3.556],[-.019,3.432],[.036,3.385],[.046,3.35],[-.069,3.338],[-.104,3.297]],.635,1.097,$,"lamierati",.009);for(let T of[-2.31,-1.66,-1.03,-.47]){let ee=B(T),ge=[n(T,ee-.02,-1.135),n(T,ee+.057,-1.058),n(T,ee+.092,-.88),n(T,ee+.103,0),n(T,ee+.092,.88),n(T,ee+.057,1.058),n(T,ee-.02,1.135)];T<-1.05&&y("22rb-roof-hoop-"+T,ge,.021,Z,"telaio",26);for(let ye of[-1,1])a(n(T,ee-.054,ye*1.116),n(T,ee+.027,ye*1.097),.018,"iron","bulloneria",10)}let C=1.161,x=[[-1.17,U],[.21,U],[.21,2.32],[-.13,3.29],[-1.17,3.29]],V=[[-1.105,2.66],[-1.01,2.53],[-.845,2.46],[-.65,2.435],[-.02,2.395],[.061,2.427],[.071,2.51],[-.155,3.15],[-.22,3.207],[-.39,3.223],[-.68,3.2],[-.865,3.144],[-1.018,3.046],[-1.09,2.91],[-1.116,2.77]].map(([T,ee])=>[.071+(T-.071)*.18,ee]);function G(){let T=new r.Shape(K(x,0).map(Me=>new r.Vector2(Me.x,Me.y)));T.closePath();let ee=new r.Path(K(V,0).map(Me=>new r.Vector2(Me.x,Me.y)));ee.closePath(),T.holes.push(ee);let ge=new r.ExtrudeGeometry(T,{depth:.026,bevelEnabled:!1,curveSegments:2});ge.computeBoundingBox();let ye=ge.boundingBox.getCenter(n());ge.translate(-ye.x,-ye.y,-ye.z),d(ge,b,n(ye.x,ye.y,C),f,n(1,1,1),"cabina")}let J=g.length;G(),o("rb-door-lower",[[-1.16,1.488],[.2,1.488],[.2,2.315],[.192,X],[-1.16,X]],C+.021,.028,E,"cabina",.006),o("rb-cab-sideglass",V,C-.019,.014,de,"vetri",.001);for(let T=0;T<V.length;T++){let ee=V[T],ge=V[(T+1)%V.length];L(n(ee[0],ee[1],C+.025),n(ge[0],ge[1],C+.025),.023,"edge","cabina")}for(let[T,ee]of[[[-1.165,1.5],[-1.165,3.29]],[[.205,1.5],[.205,2.34]],[[.205,2.34],[-.14,3.29]]])L(n(...T,C+.035),n(...ee,C+.035),.018,Z,"cabina");i(.124,2.18,C+.05,.052,.119,.028,"iron","cabina"),L(n(.13,2.13,C+.075),n(.13,2.22,C+.075),.015,"edge","cabina");let ie=1;for(let T of g.slice(J))T.position=T.position.clone().add(n(-ie,0,.047));let te=C+.052;for(let T of[U+.018,3.292])s(n(-2.235,T,te),n(.002,T,te),.032,Z,"cabina",.037);for(let T of[-2.05,-1.02])c(T,1.538,te+.012,.044,.046,"iron","trasmissione",16),u(T,1.538,te+.036,.016);i(-1.139,2.3,.69,.055,1.62,.96,"interior","cabina"),i(-.53,1.483,.7,1.29,.062,.93,Z,"cabina");let me=n(-.41,1.344,1.236);for(let T of[-.23,.23])s(n(me.x+T,me.y,me.z),n(me.x+T,1.49,1.089),.034,"iron","cabina",.043);s(n(me.x-.26,me.y,me.z),n(me.x+.27,me.y,me.z),.05,Z,"cabina",.097);for(let[T,ee]of[[-2.34,-2.19],[-2.14,-.88]])for(let ge=0;ge<3;ge++)i((T+ee)/2,2.362+ge*.048,C+(T>=-2.14?.1:.027),ee-T,.022,.009,E,"lamierati");let _e=(T,ee,ge,ye,Me,Se)=>{let Je=.24-Math.max(0,ye-2.31)*.36,Ke=.24-Math.max(0,Me-2.31)*.36;v(T,[n(Je,ye,ee),n(Je,ye,ge),n(Ke,Me,ge),n(Ke,Me,ee)],Se,"vetri")};_e("rb-front-main",.16,1.104,2.35,3.25,de),_e("rb-front-low",.2,1.07,1.91,2.24,de),i(.236,1.677,.631,.061,.379,1.045,E,"cabina");for(let T of[.168,1.097])L(n(.274,1.89,T),n(.274,2.258,T),.013,"edge","cabina"),L(n(.274,2.353,T),n(-.077,3.242,T),.015,"edge","cabina");for(let T of[1.898,2.26,2.347])L(n(.265,T,.162),n(.265,T,1.108),.013,"edge","cabina");for(let T of[.12,1.136])L(n(.25,1.53,T),n(.25,2.31,T),.035,b,"cabina"),L(n(.25,2.31,T),n(-.11,3.31,T),.036,b,"cabina");for(let T of[1.62,2.295,3.29]){let ee=.25-Math.max(0,T-2.31)*.36;L(n(ee,T,.11),n(ee,T,1.14),.037,b,"cabina")}i(-.14,3.31,.63,.12,.1,1.05,b,"cabina");let Ae=n(-.21,3.41,1.05);i(Ae.x,Ae.y,.63,.36,.048,.85,"interior","cabina",-.04),i(-2.55,B(-2.55)+.151,-.33,.82,.045,.47,$,"lamierati"),L(n(-2.8,B(-2.8)+.185,-.46),n(-2.29,B(-2.29)+.185,-.46),.019,Z,"cabina"),a(n(-2.86,3.61,-.58),n(-2.03,3.61,-.58),.076,"iron","motore",18),y("rb-exhaust-tail",[n(-2.9,3.57,-.58),n(-2.92,3.65,-.58),n(-3.04,3.72,-.58)],.044,"track","motore",9),i(-.63,2.02,.126,1.12,.93,.036,"interior","cabina"),o("rb-driver-bulkhead",[[-1.15,2.485],[-.035,2.485],[-.2,3.18],[-1.15,3.235]],.126,.032,"interior","cabina",.004),i(-.91,1.82,.79,.23,.42,.23,"track","cabina"),i(-.81,2.045,.79,.53,.12,.47,"interior","cabina"),i(-1.029,2.294,.79,.101,.494,.429,"interior","cabina",.09);for(let T=0;T<4;T++){let ee=.32+T*.17,ge=n(-.36+T%2*.04,2.37+T%2*.075,ee);L(n(-.46,1.64,ee),ge,.019,"iron","cabina"),L(ge,ge.clone().add(n(-.027,.096,0)),.03,"interior","cabina"),i(-.23,1.56,ee,.161,.039,.075,"track","cabina")}o("rb-dash-side",[[-.58,2.36],[-.42,2.365],[-.28,2.51],[-.31,2.576],[-.57,2.55]],.235,.117,"track","cabina",.014);for(let T of[-.515,-.429])c(T,2.49,.304,.035,.013,"iron","cabina",22),c(T,2.49,.315,.026,.006,"light","cabina",16);a(n(-.16,1.561,.96),n(-.19,2.435,.88),.018,j,"cabina",14);let we=_("rb-lever-knob",()=>new r.SphereGeometry(1,14,9));d(we,t.rubber,n(-.19,2.435,.88),f,n(.047,.058,.046),"cabina");let Re=g.length;for(let[T,ee]of[[-2.21,-.16],[-2.42,-.39],[-2.69,-.16],[-2.91,-.39]])i(T,2.08,ee,.23,.56,.26,"iron","motore"),i(T,2.39,ee,.2,.125,.238,"track","motore");for(let[T,ee,ge]of[[0,-.57,.24],[1,-1.36,.31]]){let ye=2.02+T*.21;c(ee,ye,M,ge,.76,"iron","trasmissione");for(let Me=0;Me<14;Me++)h(ee,ye,M-.306+Me*.047,ge,.015,"edge","trasmissione");for(let Me of[-1,1])c(ee,ye,M+Me*.377,ge*1.21,.051,"track","trasmissione"),c(ee,ye,M+Me*.413,ge*.45,.083,"iron","trasmissione");h(ee,ye,M-.43,ge*.99,.032,"rust","trasmissione")}let Be=n(-.1,1.38,M),Le=n(4.84,5.99,M),We=Le.clone().sub(Be).normalize(),Ye=n(-We.y,We.x,0),rt=(T,ee=0)=>Be.clone().lerp(Le,T).addScaledVector(Ye,ee*1.27),St=T=>T.map(([ee,ge])=>{let ye=rt(ee,ge);return[ye.x,ye.y]}),Dt=(T,ee,ge,ye,Me=20)=>{let Se=n(-ee.y,ee.x,0);return Array.from({length:Me},(Je,Ke)=>{let ot=Ke*2*Math.PI/Me;return[T.x+ee.x*ge*Math.cos(ot)+Se.x*ye*Math.sin(ot),T.y+ee.y*ge*Math.cos(ot)+Se.y*ye*Math.sin(ot)]})},Ct=St([[-.023,.12],[.025,.28],[.22,.385],[.47,.369],[.6,.27],[.82,.19],[.97,.148],[1.004,.08],[1.018,-.042],[.973,-.145],[.797,-.195],[.603,-.242],[.46,-.322],[.2,-.347],[.027,-.29],[-.023,-.184]]);for(let T of[-1,1]){o("rb-solid-boom-cheek",Ct,M+T*.277,.071,z,"braccio",.012);let ee=St([[.015,-.28],[.21,-.332],[.46,-.305],[.6,-.22],[.82,-.166],[.979,-.119],[.983,-.143],[.81,-.204],[.601,-.256],[.46,-.349],[.21,-.375],[.016,-.32]]);o("face-bottom-longitudinal-flange",ee,M+T*.323,.092,j,"braccio",.007);let ge=St([[.045,.258],[.22,.369],[.46,.351],[.588,.267],[.82,.178],[.962,.15],[.964,.169],[.82,.205],[.589,.3],[.461,.394],[.222,.408],[.047,.299]]);o("face-top-longitudinal-flange",ge,M+T*.323,.086,j,"braccio",.006);let ye=St([[.065,.155],[.347,.228],[.488,.232],[.502,.18],[.344,.161],[.069,.099]]);o("face-web-doubler",ye,M+T*.349,.031,z,"braccio",.007);for(let Me of[.07,.17,.28,.392,.48,.615,.731,.825,.919]){let Se=rt(Me,.124);u(Se.x,Se.y,M+T*.371,.027,T)}}let wt=(T,ee)=>{for(let ge=1;ge<ee.length;ge++){let ye=rt(...ee[ge-1]),Me=rt(...ee[ge]);v(T+ge,[ye.clone().add(n(0,0,-.275)),Me.clone().add(n(0,0,-.275)),Me.clone().add(n(0,0,.275)),ye.clone().add(n(0,0,.275))],z,"braccio")}};wt("rb-closed-upper-web",[[.024,.255],[.22,.367],[.47,.35],[.6,.255],[.82,.175],[.958,.124]]),wt("rb-closed-lower-web",[[.025,-.273],[.2,-.332],[.46,-.304],[.603,-.225],[.797,-.181],[.973,-.129]]);for(let T of[.13,.229,.327,.575,.678,.775,.876,.951]){let ee=rt(T,-.17);a(ee.clone().add(n(0,0,-.295)),ee.clone().add(n(0,0,.295)),.043,j,"braccio",14)}for(let T of[-1,1])o("face-main-cheek",[[Be.x-.31,1.26],[Be.x+.33,1.23],[Be.x+.3,1.48],[Be.x+.12,1.66],[Be.x-.17,1.65],[Be.x-.33,1.5]],M+T*.39,.102,z,"telaio",.026);l(Be.x,Be.y,M,.156,1.04);let Yt=.49;function he(T,ee,ge,ye){let Me=(Se,Je,Ke,ot,Ht)=>{let tn="face-rim-"+Se+"-"+Je+"-"+Ke,Mn=_(tn,()=>{let re=new r.Shape;re.absarc(0,0,Se,0,2*Math.PI,!1);let ue=new r.Path;ue.absarc(0,0,Je,0,2*Math.PI,!0),re.holes.push(ue);let xe=new r.ExtrudeGeometry(re,{depth:Ke,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:22});return xe.translate(0,0,-Ke*.5),xe});d(Mn,Ht,n(T.x,T.y,T.z+ot),f,n(1,1,1),"trasmissione")};Me(ee*.95,ee*.81,ge,0,z);for(let Se of[-1,1])Me(ee,ee*.88,.026,Se*ge*.49,j);c(T.x,T.y,T.z,ee*.235,ge*1.65,z,"trasmissione",28);for(let Se=0;Se<5;Se++){let Je=Se*Math.PI*2/5+ye*.124+.18,Ke=Math.cos(Je),ot=Math.sin(Je),Ht=-ot,tn=Ke,Mn=(re,ue)=>[T.x+re*Ke+ue*Ht,T.y+re*ot+ue*tn];o("head-spoke-"+ye+"-"+Se,[Mn(ee*.16,-ee*.099),Mn(ee*.88,-ee*.06),Mn(ee*.88,ee*.076),Mn(ee*.18,ee*.126)],T.z,ge*.57,z,"trasmissione",.009)}c(T.x,T.y,T.z+ge*.88,ee*.092,.052,"bolt","trasmissione",18)}[-.371,.371].forEach((T,ee)=>he(Le.clone().add(n(0,0,T)),Yt,.125,ee)),c(Le.x,Le.y,M,.103,1.045,j,"trasmissione",24);let ft=rt(.535,-.014),gt=n(.963,.269,0).normalize(),tt=n(-gt.y,gt.x,0),_n=T=>ft.clone().addScaledVector(gt,T),rn=4.51,qn=_n(-.79),yn=_n(rn),xn=T=>T.map(([ee,ge])=>{let ye=_n(ee).addScaledVector(tt,ge);return[ye.x,ye.y]}),Yn=xn([[-.81,-.077],[-.78,-.135],[rn-.23,-.15],[rn,-.09],[rn+.02,.082],[rn-.21,.155],[-.75,.125],[-.81,.072]]);o("crowd-handle-rack",Yn,M,.279,P,"braccio",.014);let Zn=xn([[-.71,.055],[rn-.2,.086],[rn-.2,.111],[-.71,.085]]);for(let T of[-1,1])o("crowd-handle-rubbed-edge",Zn,M+T*.148,.013,j,"braccio",.003);for(let T=0;T<20;T++){let ee=_n(-.71+T*.2).addScaledVector(tt,-.146);i(ee.x,ee.y,M,.059,.052,.214,j,"trasmissione",Math.atan2(gt.y,gt.x))}let en=qn.clone().addScaledVector(gt,.014);c(en.x,en.y,M,.103,.298,j,"trasmissione",20);for(let T of[-1,1]){let ee=xn([[-.29,-.269],[.24,-.267],[.348,-.155],[.34,.117],[.18,.237],[-.2,.237],[-.33,.09]]),ge=Dt(ft,gt,.193,.118,16);W(ee,[ge],M+T*.343,.081,z,"trasmissione");let ye=rt(.53,.192);c(ye.x,ye.y,M+T*.421,.147,.071,z,"trasmissione",24),u(ye.x,ye.y,M+T*.466,.063,T)}for(let T of[-1,1]){let ee=_n(-.2).addScaledVector(tt,T*.196),ge=_n(.23).addScaledVector(tt,T*.196);s(ee,ge,.085,j,"trasmissione",.38)}let _t=1.49,kt=yn.x,Nt=yn.y,Gt=T=>T.map(([ee,ge])=>[kt+ee,Nt+ge]),Vt=(T,ee,ge=0)=>n(kt+T,Nt+ee,M+ge),Ot=(T,ee,ge,ye,Me,Se=.008)=>o(T,Gt(ee),M+ge,ye,Me,"benna",Se),An=(T,ee,ge,ye,Me,Se)=>{v(T,[Vt(...ee,ye),Vt(...ge,ye),Vt(...ge,Me),Vt(...ee,Me)],Se,"benna")},I=[[-.21,-.15],[-.169,.005],[-.046,.12],[.216,.191],[.57,.16],[.974,.095],[1.302,.016],[1.373,-.044],[1.322,-.284],[1.26,-.61],[1.22,-.867],[1.188,-1.011],[1.056,-1.099],[.631,-1.071],[.237,-1.015],[-.03,-.906],[-.201,-.715],[-.272,-.499],[-.294,-.317]],oe=[-.04,-.42],pe=[[-.192,-.403],[-.148,-.245],[-.038,-.195],[.119,-.24],[.224,-.4],[.392,-.517],[.793,-.619],[1.165,-.658],[1.208,-.748],[.968,-.761],[.585,-.695],[.293,-.607],[.113,-.538],[-.038,-.562],[-.151,-.522]];for(let T of[-1,1]){let ee=T*(_t*.5-.04);Ot("rb-dipper-side",I,ee,.092,D,.023),Ot("rb-dipper-brace",pe,ee+T*.062,.056,D,.012),Ot("rb-dipper-edge-strip",[[1.251,-.003],[1.361,-.048],[1.29,-.394],[1.19,-.941],[1.104,-.987],[1.133,-.752]],ee+T*.06,.042,j,.008),Ot("rb-dipper-welded-wear-pad",[[.878,-.114],[.98,-.136],[.839,-.633],[.762,-.608]],ee+T*.059,.044,D,.013),Ot("rb-dipper-door-side",[[.007,-.863],[.305,-.986],[.681,-1.024],[1.137,-1.027],[1.16,-.924],[.653,-.911],[.291,-.885],[.064,-.798]],ee+T*.066,.056,j);for(let[ye,Me]of[[-.053,-.386],[.2,-.461],[.895,-.203],[.794,-.536],[1.23,-.225],[1.12,-.843]])u(kt+ye,Nt+Me,M+ee+T*.104,.032,T)}let be=[[-.293,-.308],[-.278,-.497],[-.209,-.69],[-.04,-.867],[.23,-.981]];for(let T=0;T<be.length-1;T++)An("rb-heel-bend-"+T,be[T],be[T+1],-_t*.473,_t*.473,D);let fe=[[.1,-.906],[.3,-1.077],[.71,-1.177],[1.097,-1.189],[1.203,-1.023]];for(let T=0;T<fe.length-1;T++)An("rb-drop-door-"+T,fe[T],fe[T+1],-_t*.47,_t*.47,Q);let Ue=[[1.166,-1.028],[1.23,-.815],[1.274,-.562],[1.326,-.26],[1.375,-.03],[1.405,.022]];for(let T=0;T<Ue.length-1;T++)An("rb-dipper-front-"+T,Ue[T],Ue[T+1],-_t*.49,_t*.49,D);s(Vt(1.362,-.037,-_t*.5),Vt(1.362,-.037,_t*.5),.094,j,"benna",.101);for(let T=0;T<4;T++){let ee=T/3,ge=_t*(-.43+.86*ee),ye=.59+.115*(1-Math.sin(ee*Math.PI)),Me=[[1.22,-.099],[1.403,-.1],[1.514,.147],[1.554,ye*.65],[1.584,ye],[1.544,ye-.011],[1.399,ye*.68],[1.245,.179]];Ot("rb-dipper-upturned-tooth-"+T,Me,ge,.183,j,.014),c(kt+1.36,Nt+.023,M+ge+.101,.037,.043,"iron","bulloneria",14)}for(let T of[-1,1]){let ee=T*.411;Ot("rb-open-back-socket",[[.116,.127],[.016,.199],[-.127,.157],[-.234,.021],[-.252,-.07],[-.188,-.156],[-.07,-.209],[.13,-.179],[.212,-.068],[.214,.024]],ee,.124,z,.016);let ye=_n(rn-.38);ye.z=M+ee;let Me=Vt(.31,-.401,ee);s(ye,Me,.078,z,"benna",.099)}l(yn.x,yn.y,M,.121,.995,"benna"),a(Vt(-.04,-.425,-_t*.55),Vt(-.04,-.425,_t*.55),.085,z,"benna",22);for(let T of[-1,1])c(kt+oe[0],Nt+oe[1],M+T*_t*.557,.124,.047,j,"benna",26);let qe=Vt(.285,.375);for(let T of[-1,1]){let ge=[[-.04,-.42],[-.108,-.244],[.018,.081],[.2,.353]].map(([Me,Se],Je)=>Vt(Me,Se,T*(_t*.51-Je*.171)));for(let Me=1;Me<ge.length;Me++)s(ge[Me-1],ge[Me],.096,D,"benna",.075);o("rb-horizontal-hoist-block",[[-.263,.093],[-.208,.128],[.113,.13],[.238,.062],[.258,-.016],[.172,-.105],[-.158,-.118],[-.267,-.033]].map(([Me,Se])=>[qe.x+Me,qe.y+Se]),M+T*.116,.061,z,"trasmissione",.014),c(qe.x,qe.y,M+T*.165,.065,.05,j,"trasmissione",20)}c(qe.x,qe.y,M,.121,.208,"iron","trasmissione",22);function Ge(T,ee,ge,ye){let Me=ge.x-T.x,Se=ge.y-T.y,Je=Me*Me+Se*Se,Ke=ee*ee/Je,ot=ye*ee*Math.sqrt(Math.max(0,Je-ee*ee))/Je;return n(T.x+Ke*Me-ot*Se,T.y+Ke*Se+ot*Me,T.z)}let O=(T,ee,ge=.014)=>L(T,ee,ge,"track","tubazioni"),N=n(.205,3.78,M+.08);s(n(-.24,3.39,M+.08),N,.092,z,"telaio",.103),he(N,.213,.079,3);let ce=n(-.76,2.55,M+.11),ve=Ge(N,.209,ce,-1);O(ce,ve);for(let T of[-1,1]){let ee=Le.clone().add(n(0,0,T*.371)),ge=qe.clone().add(n(0,0,T*.107)),ye=Ge(ee,Yt-.027,N,-1),Me=Ge(N,.206,ye,1);O(Me,ye);let Se=Ge(ee,Yt-.027,ge,1),Je=Ge(ge,.148,Se,T);O(Se,Je,.016);let Ke=n(-2.02,3.5,M+T*.245),ot=rt(.952,.152);ot.z=M+T*.338,O(Ke,ot,.014)}o("face-fairlead-cover",[[.11,1.48],[.95,1.45],[.88,1.63],[.57,2.51],[.22,2.69],[-.17,2.755]],M-.41,.165,b,"lamierati",.012);let Te=n(.12,2.7,M-.65),Ce=n(.55,2.48,M-.65);s(Te,Ce,.043,b,"lamierati",.64);let ze=new Map,$e=(T,ee)=>{let ge=T.uuid+"|"+ee.elements.map(Me=>Math.round(Me*1e7)).join(",");if(ze.has(ge))return ze.get(ge);let ye=T.clone();return ye.applyMatrix4(ee),ze.set(ge,ye),ye},He=new r.Matrix4().makeScale(1,1.075,1),Xe=new r.Matrix4,at=new r.Matrix4,nt=new r.Matrix4;for(let T of g.slice(S,Re)){if(T.position=T.position.clone(),T.position.y=U+(T.position.y-U)*1.075,T.captionPoint&&(T.captionPoint.y=U+(T.captionPoint.y-U)*1.075),Math.abs(T.quaternion.x)+Math.abs(T.quaternion.y)+Math.abs(T.quaternion.z)<1e-5){T.scale=T.scale.clone(),T.scale.y*=1.075;continue}Xe.compose(n(),T.quaternion,T.scale),at.copy(Xe).invert(),nt.copy(at).multiply(He).multiply(Xe),T.geometry=$e(T.geometry,nt)}let Ne=new Set([b,E,$,D,z,P]),je=n(),pt=n();for(let T of g){if(!Ne.has(T.material)||!["lamierati","cabina","benna","braccio"].includes(T.group))continue;let ee=T.geometry.clone(),ge=ee.getAttribute("position"),ye=ee.getAttribute("normal"),Me=ee.getAttribute("uv");for(let Se=0;Se<ge.count;Se++){je.fromBufferAttribute(ge,Se).multiply(T.scale).applyQuaternion(T.quaternion).add(T.position),pt.fromBufferAttribute(ye,Se).applyQuaternion(T.quaternion);let Je=Math.abs(pt.x),Ke=Math.abs(pt.y),ot=Math.abs(pt.z),Ht=Je>Ke&&Je>ot?je.z:je.x,tn=Ke>Je&&Ke>ot?je.z:je.y;Me.setXY(Se,Ht*.71+.143,tn*.67+.323)}T.geometry=ee}let yt=.826,Zt=new r.Quaternion().setFromAxisAngle(n(0,1,0),-.135),sn=new r.Quaternion().setFromAxisAngle(n(0,1,0),.345),Rt=n(-1.565,0,0),Tn=1.19,Cn=new r.Matrix4().makeScale(Tn,1,1);for(let T of g.slice(0,S)){let ee=T.position.x-Rt.x;T.position=T.position.clone(),T.position.x=Rt.x+ee*Tn+.32,Xe.compose(n(),T.quaternion,T.scale),at.copy(Xe).invert(),nt.copy(at).multiply(Cn).multiply(Xe),T.geometry=$e(T.geometry,nt),T.position.sub(Rt).applyQuaternion(sn).add(Rt),T.quaternion=sn.clone().multiply(T.quaternion)}for(let T of g)T.position.applyQuaternion(Zt).multiplyScalar(yt),T.quaternion=Zt.clone().multiply(T.quaternion),T.scale.multiplyScalar(yt),T.captionPoint&&T.captionPoint.applyQuaternion(Zt).multiplyScalar(yt)}function cu(r,e,t){let n=Math.max(0,Math.min(3,Math.round(e))),i=(C=0,x=0,Y=0)=>new r.Vector3(C,x,Y),s=i(0,1,0),a=i(0,0,1),o=new r.Quaternion,c=new r.Quaternion().setFromUnitVectors(s,a),l=C=>new r.Quaternion().setFromAxisAngle(a,C),h=[],u=new Map,p=(C,x)=>(u.has(C)||u.set(C,x()),u.get(C)),d=p("box",()=>new r.BoxGeometry(1,1,1)),m=C=>p("cyl"+C,()=>new r.CylinderGeometry(1,1,1,C,1,!1)),_=(C,x,Y,V,G,J)=>{let ie=typeof x=="string"?t[x]:x;if(!ie)throw new Error("Missing excavator material: "+x);h.push({geometry:C,material:ie,position:Y,quaternion:V,scale:G,group:J})},f=(C,x,Y,V,G,J,ie,te,me=0)=>_(d,ie,i(C,x,Y),me?l(me):o,i(V,G,J),te);function v(C,x,Y,V,G,J=12,ie=Y){let te=x.clone().sub(C),me=te.length();if(!me)return;let _e=new r.Quaternion().setFromUnitVectors(s,te.divideScalar(me));_(m(J),V,C.clone().lerp(x,.5),_e,i(Y,me,ie),G)}function y(C,x,Y,V,G,J=Y){let ie=x.clone().sub(C),te=ie.length();if(!te)return;let me=new r.Quaternion().setFromUnitVectors(s,ie.divideScalar(te));_(d,V,C.clone().lerp(x,.5),me,i(Y,te,J),G)}let g=(C,x,Y,V,G,J,ie,te=24)=>_(m(te),J,i(C,x,Y),c,i(V,G,V),ie);function M(C,x,Y,V){return p(C,()=>{let G=new r.Shape;G.moveTo(x[0][0],x[0][1]),x.slice(1).forEach(([Ae,we])=>G.lineTo(Ae,we)),G.closePath();let J=new r.ExtrudeGeometry(G,{depth:Math.max(.003,Y-2*V),bevelEnabled:V>0,bevelSize:V,bevelThickness:V,bevelSegments:2,curveSegments:3});J.computeBoundingBox();let ie=J.boundingBox.getCenter(i());J.translate(-ie.x,-ie.y,-ie.z);let te=J.attributes.normal,me=J.attributes.position,_e=J.attributes.uv;for(let Ae=0;Ae<me.count;Ae++){let we=Math.abs(te.getX(Ae)),Re=Math.abs(te.getY(Ae)),Be=Math.abs(te.getZ(Ae)),Le=we>Be&&we>Re?me.getZ(Ae):me.getX(Ae),We=Re>we&&Re>Be?me.getZ(Ae):me.getY(Ae);_e.setXY(Ae,Le*.42,We*.42)}return{geometry:J,centre:ie}})}function w(C,x,Y,V,G,J,ie=.018,te=0,me=0){let _e=M(C,x,V,ie);_(_e.geometry,G,i(te+_e.centre.x,me+_e.centre.y,Y),o,i(1,1,1),J)}function b(C,x,Y,V){let G=x.reduce((ie,te)=>ie.add(te),i()).multiplyScalar(.25),J=p(C,()=>{let ie=x.map(_e=>_e.clone().sub(G)),te=new r.BufferGeometry;te.setAttribute("position",new r.Float32BufferAttribute(ie.flatMap(_e=>[_e.x,_e.y,_e.z]),3)),te.setAttribute("uv",new r.Float32BufferAttribute([0,0,1,0,1,1,0,1],2)),te.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);let me=ie[1].clone().sub(ie[0]).cross(ie[2].clone().sub(ie[0])).normalize();return te.setAttribute("normal",new r.Float32BufferAttribute(Array.from({length:4},()=>me.toArray()).flat(),3)),te});_(J,Y,G,o,i(1,1,1),V)}function E(C,x,Y,V,G,J="braccio"){g(C,x,Y,V,G,"iron",J);for(let ie of[-1,1])g(C,x,Y+ie*(G/2+.01),V*.87,.038,"edge",J,20),g(C,x,Y+ie*(G/2+.038),V*.39,.041,"bolt","bulloneria",6)}function z(C){return p(C?"slotted-screw":"hex-bolt",()=>{let x=[];function Y(Re,Be,Le,We,Ye){let rt=new r.CylinderGeometry(Re,Be,Le,Ye);rt.translate(0,We,0),x.push(rt)}Y(.47,.41,1.95,-.965,10);let V=.36,G=4,J=11,ie=[];for(let Re=0;Re<G*J;Re++){let Be=(Ct,wt,Yt)=>{let he=Ct/J*Math.PI*2;return[Math.cos(he)*wt,-1.83+Ct/J*V+Yt,Math.sin(he)*wt]},Le=Be(Re,.45,0),We=Be(Re,.55,.075),Ye=Be(Re,.45,.15),rt=Be(Re+1,.45,0),St=Be(Re+1,.55,.075),Dt=Be(Re+1,.45,.15);ie.push(...Le,...St,...rt,...Le,...We,...St,...We,...Dt,...St,...We,...Ye,...Dt)}let te=new r.BufferGeometry;if(te.setAttribute("position",new r.Float32BufferAttribute(ie,3)),te.computeVertexNormals(),x.push(te),C){Y(.92,.51,.32,.06,16);for(let Re of[-1,1]){let Be=new r.Shape,Le=.9,Ye=Math.asin(.15/Le);for(let St=0;St<=16;St++){let Dt=Ye+(Math.PI-2*Ye)*St/16,Ct=Le*Math.cos(Dt),wt=Re*Le*Math.sin(Dt);St===0?Be.moveTo(Ct,wt):Be.lineTo(Ct,wt)}Be.closePath();let rt=new r.ExtrudeGeometry(Be,{depth:.19,bevelEnabled:!1});rt.rotateX(-Math.PI/2),rt.translate(0,.22,0),x.push(rt)}}else Y(1,1,.51,.182,6),Y(.89,1,.08,.476,6);let me=[],_e=[],Ae=[];for(let Re of x){let Be=Re.index?Re.toNonIndexed():Re,Le=Be.attributes.position,We=Be.attributes.normal,Ye=Be.attributes.uv;for(let rt=0;rt<Le.count;rt++)me.push(Le.getX(rt),Le.getY(rt),Le.getZ(rt)),_e.push(We.getX(rt),We.getY(rt),We.getZ(rt)),Ae.push(Ye?Ye.getX(rt):0,Ye?Ye.getY(rt):0);Be!==Re&&Be.dispose(),Re.dispose()}let we=new r.BufferGeometry;return we.userData.threadPitch=V,we.userData.threadTurns=G,we.setAttribute("position",new r.Float32BufferAttribute(me,3)),we.setAttribute("normal",new r.Float32BufferAttribute(_e,3)),we.setAttribute("uv",new r.Float32BufferAttribute(Ae,2)),we})}let P=new r.Quaternion().setFromUnitVectors(s,i(0,0,-1));function D(C,x,Y,V=.029,G=1){g(C,x,Y,V*1.35,.014,"iron","bulloneria",12),_(z(!1),"bolt",i(C,x,Y+G*.011),G>0?c:P,i(V,V,V),"bulloneria")}function Q(C,x,Y,V,G=1){_(z(!0),"bolt",i(C,x,Y),G>0?c:P,i(V,V,V),"bulloneria")}let R=(C,x)=>p("ring"+C+"-"+x,()=>new r.TorusGeometry(C,x,6,28)),Z=(C,x,Y,V,G,J,ie)=>_(R(V,G),J,i(C,x,Y),o,i(1,1,1),ie);function j(C,x,Y,V,G,J=18){let ie=new r.CatmullRomCurve3(x),te=p(C,()=>{let me=new r.TubeGeometry(ie,J,Y,6,!1);me.computeBoundingBox();let _e=me.boundingBox.getCenter(i());return me.translate(-_e.x,-_e.y,-_e.z),{g:me,center:_e}});_(te.g,V,te.center.clone(),o,i(1,1,1),G)}let $=[-3.47,-3.57,-3.365,-3.35][n],de=[.04,.28,.285,.31][n],ae=n<2?.54:.483,K=n<2?.445:.398,se=($+de)*.5,L=de-$,W=2*L+2*Math.PI*K,Ee=Math.round(W/.214),S=W/Ee;function A(C){if(C<L)return[$+C,ae-K,0];if(C-=L,C<Math.PI*K){let Y=C/K-Math.PI/2;return[de+Math.cos(Y)*K,ae+Math.sin(Y)*K,Y+Math.PI/2]}if(C-=Math.PI*K,C<L)return[de-C,ae+K,Math.PI];let x=(C-L)/K+Math.PI/2;return[$+Math.cos(x)*K,ae+Math.sin(x)*K,x+Math.PI/2]}let F=n>0?t.track.clone():t.track;if(n>0){F.name=["","Carro brunito e terra asciutta","Fiancata del carro con deposito di polvere","Carro contemporaneo grafite"][n];let C=n===1?[99,80,65]:n===2?[127,116,102]:[75,79,78],x=96,Y=new Uint8Array(x*x*4),V=919+n*449;for(let J=0;J<x;J++)for(let ie=0;ie<x;ie++){V=Math.imul(V,1664525)+1013904223>>>0;let te=ie/x*Math.PI*2,me=J/x*Math.PI*2,_e=(J*x+ie)*4,Ae=(V/4294967296-.5)*6,we=3.1*Math.cos(2*te+Math.sin(me))+2.9*Math.sin(3*me+Math.sin(2*te))+.8*Math.sin(9*te-4*me);for(let Re=0;Re<3;Re++)Y[_e+Re]=C[Re]+we+Ae;Y[_e+3]=255}let G=new r.DataTexture(Y,x,x,r.RGBAFormat);G.wrapS=G.wrapT=r.RepeatWrapping,G.magFilter=r.LinearFilter,G.minFilter=r.LinearMipmapLinearFilter,G.generateMipmaps=!0,G.colorSpace=r.SRGBColorSpace,G.needsUpdate=!0,F.map=G,F.color.setHex(16777215),F.metalness=n===2?.23:n===1?.3:.49,F.roughness=n===2?.87:.7,F.roughnessMap=null,F.metalnessMap=null,F.bumpScale=.006}let B=p("turned-bearing-race",()=>{let C=[[.62,-.51],[.92,-.51],[1,-.38],[1,.34],[.93,.48],[.71,.48],[.66,.34],[.62,-.31],[.62,-.51]];return new r.LatheGeometry(C.map(([x,Y])=>new r.Vector2(x,Y)),28)}),U=[.82,1.175,1.19,1.195][n],X=[.55,.65,.6,.6][n];for(let C of[-1,1]){let x=C*U,Y=x+C*(X/2-(n===0?0:.18));w("hull-carriage",[[$-.03,.32],[de-.035,.33],[de+.15,.51],[de-.24,.74],[se+.24,.84],[$+.29,.75],[$-.13,.58]],x,.39,"track","telaio",.055);for(let J=0;J<Ee;J++){let[ie,te,me]=A(J*S),_e=-Math.sin(me),Ae=Math.cos(me);if(f(ie,te,x,S*.93,.068,X,"track","cingoli",me),n===0)f(ie-_e*.051,te-Ae*.051,x,.046,.058,X*.985,"iron","cingoli",me);else for(let we of[-.063,0,.063])f(ie+Math.cos(me)*we-_e*.046,te+Math.sin(me)*we-Ae*.046,x,.026,.048,X*.985,"iron","cingoli",me);f(ie+_e*.065,te+Ae*.065,x,S*.75,.068,X*.42,"track","cingoli",me),J%2===0&&g(ie+_e*.036,te+Ae*.036,Y-C*.017,.036,.046,"bolt","cingoli",8);for(let we of[-1,1]){let Re=i(ie-_e*.042,te-Ae*.042,x+we*X*.292),Be=i(-_e,-Ae,0);_(m(6),J%7===0&&n===0?"rust":"bolt",Re,new r.Quaternion().setFromUnitVectors(s,Be),i(.026,.025,.026),"bulloneria")}}let V=(J,ie,te,me,_e=!1)=>{if(g(J,ie,x,te,X*.66,"iron","trasmissione",32),g(J,ie,Y-C*.035,te*.85,.059,"track","trasmissione",28),Z(J,ie,Y+C*.003,te*.728,te*.049,"track","trasmissione"),g(J,ie,Y+C*.02,te*.43,.073,"iron","trasmissione",22),g(J,ie,Y+C*.077,te*.23,.059,n===0?"rust":"edge","trasmissione",16),_e&&n>0){let we=Y+C*.116;g(J,ie,we,te*.64,.039,F,"trasmissione",28);let Re=n===2?14:10;for(let Be=0;Be<Re;Be++){let Le=Be*Math.PI*2/Re,We=Math.cos(Le),Ye=Math.sin(Le);y(i(J+We*te*.39,ie+Ye*te*.39,we+C*.028),i(J+We*te*.63,ie+Ye*te*.63,we+C*.028),.026,F,"trasmissione",.031)}g(J,ie,we+C*.031,te*.35,.044,F,"trasmissione",20)}if(me)for(let we of[-1,1]){let Re=x+we*X*.218;_(B,"edge",i(J,ie,Re),c,i(te*.79,.091,te*.79),"trasmissione"),Z(J,ie,Re+we*.05,te*.56,.014,"rubber","trasmissione"),Z(J,ie,Re-we*.045,te*.66,.012,"iron","trasmissione")}let Ae=me?8:4;for(let we=0;we<Ae;we++){let Re=2*Math.PI*we/Ae;D(J+te*.53*Math.cos(Re),ie+te*.53*Math.sin(Re),Y+C*.005,me?.027:.022,C)}if(_e){let we=[];for(let Re=0;Re<16;Re++)for(let[Be,Le]of[[0,.89],[.17,1],[.48,1],[.72,.89]]){let We=(Re+Be)*Math.PI*2/16;we.push([Math.cos(We)*te*Le,Math.sin(We)*te*Le])}w("drive-sprocket",we,Y-C*.105,.089,"iron","trasmissione",.009,J,ie)}};V($,ae,K*.93,!0,!0),V(de,ae,K*.9,!0);let G=n===0?5:7;for(let J=0;J<G;J++){let ie=$+.58+J*(L-1.16)/(G-1);V(ie,n<2?.415:.367,n===0?.248:.225,!1)}for(let J of[.27,.7])g($+J*L,n<2?.83:.753,x,.117,.38,"iron","trasmissione",16);if(n>0){let J=Y+C*.054,ie=n<2?.74:.7,te=.33,me=n===1?[[$+.24,ie-.09],[$+.49,ie+.06],[de-.37,ie+.06],[de-.1,ie-.08],[de-.19,te+.082],[de-.56,te+.04],[$+.54,te+.03],[$+.22,te+.09]]:n===2?[[$+.23,ie-.08],[$+.43,ie+.067],[de-.28,ie+.067],[de-.15,ie-.12],[de-.17,te+.04],[de-.46,te-.017],[$+.4,te-.017],[$+.22,te+.045]]:[[$+.22,ie-.13],[$+.46,ie+.042],[de-.36,ie+.042],[de-.13,ie-.12],[de-.24,te+.05],[de-.53,te],[$+.5,te],[$+.21,te+.086]];if(w("track-box-beam",me,J,.139,F,"telaio",.022),n===1)for(let _e=0;_e<6;_e++){let Ae=$+.49+_e*(L-.95)/5;f(Ae,te+.123,J+C*.086,.29,.18,.057,F,"telaio",-.055);for(let we of[-.089,.089])D(Ae+we,te+.146,J+C*.119,.023,C)}else if(n===2){let _e=[[de-.28,te-.033],[de+.2,te-.033],[de+.24,te+.075],[de+.23,ie-.09],[de+.105,ie+.015],[de-.21,ie+.015],[de-.29,ie-.064]];w("front-guide-guard",_e,J+C*.083,.091,F,"telaio",.026);for(let Ae of[.28,.66]){let we=$+L*Ae;f(we,te+.125,J+C*.078,.087,.087,.015,"interior","telaio")}y(i($+.41,te+.015,J+C*.092),i(de-.25,te+.015,J+C*.092),.022,"edge","telaio",.03)}else for(let _e of[.27,.72]){let Ae=$+L*_e;f(Ae,ie-.062,J+C*.078,.394,.062,.023,"red","telaio"),f(Ae,ie-.026,J+C*.079,.416,.017,.032,"edge","telaio");for(let we of[-.164,.164])D(Ae+we,ie-.061,J+C*.093,.017,C)}}}f(se,.7,0,2.74,.44,1.55,"track","telaio");for(let C of[-1,1])for(let x of[-1,1])y(i(se,.86,0),i(se+x*1.42,.59,C*U),.25,"iron","telaio",.28);let k=i(se+.15,1.125,0);_(m(44),"iron",k,o,i(.864,.15,.864),"trasmissione"),_(m(48),"edge",i(k.x,1.235,0),o,i(.832,.08,.832),"trasmissione");for(let C=0;C<24;C++){let x=C*Math.PI*2/24;_(m(6),"bolt",i(k.x+Math.cos(x)*.756,1.29,Math.sin(x)*.756),o,i(.043,.047,.043),"bulloneria")}if(n===0)return lu(r,{V:i,box:f,bar:y,rod:v,plate:w,disc:g,pin:E,ring:Z,bolts:D,machineScrew:Q,append:_,round:m,cache:p,identity:o,quad:b,conduit:j,parts:h},t),{parts:h,era:e,name:"Escavatore meccanico a pala frontale"};let q=ou(r,n,{V:i,parts:h,materials:t,cache:p,append:_,box:f,bar:y,rod:v,disc:g,plate:w,quad:b,pin:E,bolts:D,machineScrew:Q,conduit:j,round:m,identity:o}),ne=new Set,le=new WeakMap;for(let C of h){let x=C.geometry;if(!ne.has(x)){x.scale(-1,1,1),x.index||x.setIndex(Array.from({length:x.attributes.position.count},(G,J)=>J));let V=x.index.array;for(let G=0;G<V.length;G+=3){let J=V[G+1];V[G+1]=V[G+2],V[G+2]=J}x.index.needsUpdate=!0,x.computeBoundingBox(),x.computeBoundingSphere(),ne.add(x)}C.position=C.position.clone(),C.position.x*=-1;let Y=C.quaternion;le.has(Y)||le.set(Y,new r.Quaternion(Y.x,-Y.y,-Y.z,Y.w)),C.quaternion=le.get(Y)}return q.point.x*=-1,{parts:h,era:e,facing:-1,captionAnchor:q,name:["","Escavatore idraulico anni Ottanta","Escavatore idraulico serie D","Escavatore elettroidraulico contemporaneo"][n]}}var du=[{enamel:[189,139,47],wear:1,rough:.56,coat:.18,coatRough:.38},{enamel:[217,154,36],wear:.6,rough:.47,coat:.27,coatRough:.3},{enamel:[235,169,28],wear:.32,rough:.42,coat:.35,coatRough:.25},{enamel:[245,186,31],wear:.13,rough:.36,coat:.44,coatRough:.21}],hu=new WeakMap,un=(r,e,t)=>r+(e-r)*t,Ha=r=>Math.max(0,Math.min(1,r));function gn(r,e,t){let n=Ha((t-r)/(e-r));return n*n*(3-2*n)}function pu(r){let e=r>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function Ii(r,e,t){let n=new Float32Array(r*e);for(let i=0;i<n.length;i++)n[i]=t();return(i,s)=>{let a=i*r,o=s*e,c=Math.floor(a),l=Math.floor(o),h=(c%r+r)%r,u=(l%e+e)%e,p=(h+1)%r,d=(u+1)%e,m=a-c,_=o-l,f=m*m*(3-2*m),v=_*_*(3-2*_);return un(un(n[u*r+h],n[u*r+p],f),un(n[d*r+h],n[d*r+p],f),v)}}function Wa(r){let e=document.createElement("canvas");e.width=r,e.height=r;let t=e.getContext("2d");return{canvas:e,ctx:t,pixels:t.createImageData(r,r)}}function uu(r,e,t,n){e.ctx.putImageData(e.pixels,0,0);let i=new r.CanvasTexture(e.canvas);return i.name=t,i.colorSpace=n?r.SRGBColorSpace:r.NoColorSpace,i.wrapS=i.wrapT=r.RepeatWrapping,i.anisotropy=4,i}function fu(r,e,t,n){let i=uu(r,e,n+" \xB7 colore",!0),s=uu(r,t,n+" \xB7 altezza / ruvidit\xE0 / metallo",!1);return{map:i,bumpMap:s,roughnessMap:s,metalnessMap:s}}function Xa(r,e,t,n,i){r[e]=t,r[e+1]=n,r[e+2]=i,r[e+3]=255}function xf(r,e,t){let n=new Float32Array(r*r),i=Math.round(1+11*e);for(let s=0;s<i;s++){let a=t()*r,o=t()*r,c=(.012+t()*.077)*(.43+e*.83)*r,l=c*(.27+t()*.74),h=t()*Math.PI,u=Math.cos(h),p=Math.sin(h),d=Math.ceil(1.65*Math.max(c,l));for(let m=Math.floor(o-d);m<=o+d;m++)for(let _=Math.floor(a-d);_<=a+d;_++){let f=_-a,v=m-o,y=(f*u+v*p)/c,g=(-f*p+v*u)/l,M=1.5-Math.sqrt(y*y+g*g);if(M<=0)continue;let w=(m+r)%r*r+(_+r)%r;n[w]=Math.max(n[w],M)}}return n}function Mf(r,e,t){let n=new Uint8Array(r*r);for(let i=0;i<3+e*16;i++){let s=t()*r,a=t()*r,o=(t()-.5)*.92,c=Math.cos(o),l=Math.sin(o),h=1+Math.floor(t()*4);for(let u=0;u<h;u++){let p=u*(.0015+t()*.0045)*r,d=t()*r*.016,m=(.012+t()*.095)*r,_=Math.round((.28+t()*.65)*255);for(let f=0;f<m;f+=.67){if(t()<.05)continue;let v=Math.floor(s+c*(f+d)-l*p+r)%r,g=Math.floor(a+l*(f+d)+c*p+r)%r*r+v;n[g]=Math.max(n[g],_*gn(0,.12,f/m)*gn(0,.12,1-f/m))}}}return n}function bf(r,e,t){let n=du[e],i=n.wear,s=n.enamel,a=pu(196600+e*9701),o=Ii(5,4,a),c=Ii(17,19,a),l=Ii(52,54,a),h=Ii(48,3,a),u=xf(t,i,a),p=Mf(t,i,a),d=Ii(83,18,a),m=Wa(t),_=Wa(t),f=m.pixels.data,v=_.pixels.data;for(let y=0,g=0;y<t;y++){let M=y/t;for(let w=0;w<t;w++,g++){let b=w/t,E=o(b,M),z=c(b,M),P=l(b,M),D=a(),Q=Math.min(b,M,1-b,1-M),R=(1-gn(0,.018,Q))*gn(.55,.91,z)*i,Z=.33+.67*Math.max(gn(.02,.37,u[g]),gn(.59,.85,E)*.82),j=u[g]+((z-.5)*.84+(P-.5)*.69+(D-.5)*.13)*(.55+.45*i)*Z+R-(1-i)*.12,$=gn(.47,.55,j),de=gn(.29,.47,j),ae=(1-gn(.03,.13,Math.abs(j-.56)))*gn(.41,.68,z*.48+P*.52),K=Ha((1-i)*.56+gn(.67,.81,P*.62+D*.13+E*.25)*(.43+.1*(1-i))+ae*.6),se=p[g]/255*(.4+.43*i),L=d(b+.016*z,M+.034*P),W=(1-gn(.012,.058,Math.abs(L-.48)))*gn(.38,.65,z),Ee=Ha(.5+(z-.5)*1.22+(P-.5)*.75+(D-.5)*.38+(L-.5)*.26-W*.18),S=gn(.69,.96,h(b,M))*i*.075,A=(E-.5)*(.035+.1*i)+(z-.5)*.025+(D-.5)*.012-S,F=de*(.12+.14*i),B=s[0]*(1+A)*(1-F),U=s[1]*(1+A)*(1-F*1.18),X=s[2]*(1+A)*(1-F*.42)+(E-.3)*i*7;B=un(B,un(50+103*Ee,138,K),$),U=un(U,un(37+45*Ee,133,K),$),X=un(X,un(27+21*Ee,118,K),$),Xa(f,g*4,un(B,136,se),un(U,133,se),un(X,115,se));let k=un(un(n.rough+(E-.5)*.12+(D-.5)*.036,.83-K*.52,$),.49,se),q=un(un(.035,.12+K*.85,$),.73,se),ne=.6+(P-.5)*.025+(D-.5)*.025-$*(.17-Ee*.07+W*.02)-se*.055;Xa(v,g*4,ne*255,k*255,q*255)}}return fu(r,m,_,"Smaltatura "+[1960,1980,2e3,2026][e])}function Yl(r,e,t,n){let i=pu(481516+n*779),s=Ii(8,9,i),a=Ii(39,33,i),o=Ii(105,3,i),c=Wa(t),l=Wa(t),h=c.pixels.data,u=l.pixels.data;for(let p=0,d=0;p<t;p++)for(let m=0;m<t;m++,d+=4){let _=m/t,f=p/t,v=s(_,f),y=a(_,f),g=i(),M,w,b,E,z,P;if(n===0){let D=gn(.4,.84,v*.7+y*.3),Q=47*D+13*y+7*g;M=53+Q,w=48+Q,b=40+Q,E=.79-.39*D+(y-.5)*.07,z=.52+D*.42,P=.43+y*.12+g*.057}else if(n===1){let D=o(_,f),Q=(D-.5)*7+(g-.5)*2;M=225+Q,w=228+Q,b=228+Q,E=.126+D*.047+v*.024,z=.99,P=.49+D*.02}else{let D=Ha(.04+v*.49+y*.34+g*.12);M=48+D*94,w=30+D*42,b=22+D*20,E=.76+D*.19,z=.17+(1-D)*.14,P=.34+v*.16+y*.16+g*.105}Xa(h,d,M,w,b),Xa(u,d,P*255,E*255,z*255)}return fu(r,c,l,e)}function Sf(r){let e=hu.get(r);if(!e){let t=typeof matchMedia=="function"&&matchMedia("(max-width: 760px)").matches;e={paint:[],size:t?256:512,cast:Yl(r,"Acciaio colato",256,0),polished:Yl(r,"Cromatura rettificata",128,1),oxide:Yl(r,"Ossido di ferro",256,2)},hu.set(r,e)}return e}function mu(r,e){let t=Math.max(0,Math.min(3,e|0)),n=du[t],i=Sf(r),s=i.paint[t]||(i.paint[t]=bf(r,t,i.size)),a=(d,m)=>new r.MeshStandardMaterial({name:d,...m}),o=(d,m)=>new r.MeshPhysicalMaterial({name:d,...m}),c={...s,roughness:1,metalness:1,bumpScale:.022+n.wear*.037,clearcoat:n.coat,clearcoatRoughness:n.coatRough,envMapIntensity:.95},l={...i.cast,roughness:1,metalness:1,bumpScale:.025,envMapIntensity:1.05},h=o("Smalto carrozzeria",c),u=o("Smalto telaio",{...c,color:t===0?12823947:13286034}),p=o("Vetro cabina",{color:t===0?2568234:2503470,transparent:!0,opacity:t===0?.48:.46,depthWrite:!1,roughness:.075+n.wear*.035,metalness:.025,clearcoat:.38,clearcoatRoughness:.055,ior:1.48,specularIntensity:.78,envMapIntensity:.77});return{paint:h,paintDark:u,glass:p,edge:a("Bordi esposti",{...l,color:15328990,roughness:.79,bumpScale:.012}),iron:a("Ghisa scura",{...l,color:t===0?10389363:11052192}),track:a("Pattini e ruote",{...l,roughness:t===0?1:.94}),rubber:a("Gomma e guaine",{color:2369319,roughness:.8,metalness:.018,envMapIntensity:.48}),chrome:a("Stelo cromato",{...i.polished,roughness:1,metalness:1,bumpScale:.002,envMapIntensity:1.18}),bolt:a("Bulloneria zincata",{...i.polished,color:t===0?9603189:11645607,roughnessMap:null,roughness:.31,metalness:.9,bumpScale:.0015}),interior:a("Sedile e interno cabina",{color:t===0?4340013:3423037,roughness:.85,metalness:.02}),rust:a("Ossido del ferro",{...i.oxide,roughness:1,metalness:1,bumpScale:.055}),black:a("Acciaio verniciato grafite",{color:2895920,roughness:.47,metalness:.46}),light:o("Vetro proiettore",{color:15196617,emissive:14536612,emissiveIntensity:.17,roughness:.22,metalness:.2,clearcoat:.9,clearcoatRoughness:.11}),red:o("Lente di segnalazione",{color:9972248,roughness:.29,metalness:.13,clearcoat:.74,clearcoatRoughness:.19}),pale:a("Dettagli avorio",{color:14800821,roughness:.58,metalness:.17})}}var wf=Math.PI*2;function Ef(r,e,t){let n=[],i=new Map,s=null;e.parts.forEach((h,u)=>{h.group==="cingoli"&&((h.geometry.type==="BoxGeometry"||h.geometry.type==="ExtrudeGeometry")&&h.scale.x>2.7*h.scale.y&&h.scale.z>6.8*h.scale.y&&(s={p:h,indices:[]},n.push(s)),s&&s.indices.push(u))});let a=Math.floor(n.length/2),o=new r.Vector3(0,0,1);if(a<3)return{byPart:i,across:o};let c=n[a].p.position,l=n[0].p.position;o.subVectors(c,l).normalize();for(let h=0;h<2;h++){let u=n.slice(h*a,(h+1)*a),p=h?1:-1,d=new r.Vector3;for(let{p:_}of u)d.add(_.position);d.multiplyScalar(1/u.length);let m=0;u.forEach(({p:_},f)=>{_.position.y>u[m].p.position.y+1e-4&&(m=f)});for(let _=0;_<u.length;_++){let{p:f,indices:v}=u[_],y=(_-m+u.length)%u.length/u.length,g=new r.Vector3().subVectors(u[(_+1)%u.length].p.position,u[(_+u.length-1)%u.length].p.position).normalize(),M=new r.Vector3().crossVectors(g,o).normalize();M.dot(f.position.clone().sub(d))<0&&M.negate();let w=.4+.38*Math.sin(y*Math.PI),b=o.clone().multiplyScalar(p*t*w).addScaledVector(M,t*(.24+.46*Math.sin(y*Math.PI))).addScaledVector(g,t*(.33-.65*y));b.y=Math.max(-.11*t,b.y)+.13*t;let E=o.clone().multiplyScalar(p),z=f.position.clone().addScaledVector(g,-.105*t),P=o.clone().multiplyScalar(p*.23*t);for(let D of v)i.set(D,{t:y,side:p,axis:E,lead:P,extraction:b,offset:e.parts[D].position.clone().sub(z),seatTurn:(.11+.45*Math.sin(y*Math.PI))*p,featured:h===1&&D===v[0]&&_===m})}}return{byPart:i,across:o}}function Af(r,e){let t=[];for(let n of e.parts){if(n.group!=="pistoni"||n.material.name!=="Stelo cromato"||n.scale.y<=3*n.scale.x)continue;let i=new r.Vector3(0,1,0).applyQuaternion(n.quaternion).normalize();t.push({p:n,axis:i,seal:n.position.clone().addScaledVector(i,-n.scale.y/2)})}return t}function Tf(r,e){let t=null,n=1/0;for(let i of e){let s=r.position.clone().sub(i.seal),a=s.dot(i.axis),c=s.addScaledVector(i.axis,-a).length()+Math.max(0,Math.abs(a)-i.p.scale.y*1.6)*.8;c<n&&(t=i,n=c)}return t}function gu(r,e,t,n){let{byPart:i,across:s}=Ef(r,e,t),a=e.era===0,o=Af(r,e),c=e.parts.reduce((v,y)=>Math.max(v,y.position.y),0),l=a?e.parts.find(v=>v.group==="trasmissione"&&v.geometry.type==="CylinderGeometry"&&v.position.y>c*.88):null,h=e.parts.filter(v=>v.group==="bulloneria"&&v.geometry.type==="BufferGeometry"&&v.position.y>1.3*t),u=new Map,p=(v,y,g,M)=>{v&&u.set(v,{row:y,column:g,depth:M})},d=(v,y)=>e.parts.find(g=>g.group===v&&y(g));p(d("trasmissione",v=>v.geometry.type==="LatheGeometry"),.48,.5,.42);let m=d("trasmissione",v=>v.geometry.type==="ExtrudeGeometry"&&v.position.y<t);if(m){let v=M=>{let w=M.position.clone().sub(m.position),b=w.dot(s);return Math.abs(b)<.59*t&&w.addScaledVector(s,-b).length()<.025*t},y=d("trasmissione",M=>M.geometry.type==="TorusGeometry"&&v(M)),g=d("trasmissione",M=>M.geometry.type==="CylinderGeometry"&&M.scale.x>.1*t&&M.scale.x<.24*t&&v(M));for(let[M,w]of[[m,0],[y,1],[g,2]])M&&u.set(M,{row:-.09,column:.31,depth:.48,wheelAxis:s,layer:w*t*.22})}let _=[...i].find(([,v])=>v.featured);_&&p(e.parts[_[0]],-.56,.54,.29);let f=h.reduce((v,y)=>!v||y.scale.x>v.scale.x?y:v,null);return p(f,.26,.72,.12),a?p(d("trasmissione",v=>v.position.y>c*.88&&v.geometry.type==="ExtrudeGeometry"),.13,.61,.5):p(o[o.length-1]?.p,.07,.61,.56),{byPart:i,across:s,historical:a,rams:o,hub:l?.position,details:u,unit:t,center:n}}function vu(r,e,t,n,i){let{unit:s,across:a}=n,o=e.position,c=e.group,l=i.side,h=i.axis.clone(),u=new r.Vector3,p=new r.Vector3,d=.028*i.spin,m=0,_=i.row,f=.12,v=.041,y=.025,g=n.byPart.get(t);if(c==="bulloneria"){h.set(0,1,0).applyQuaternion(e.quaternion).normalize(),e.geometry.type!=="BufferGeometry"&&h.dot(o.clone().sub(n.center))<0&&h.negate();let Q=Math.max(e.scale.x,e.scale.z);u.copy(h).multiplyScalar(s*.16+Math.min(.24,Q*3.2));let{threadPitch:R,threadTurns:Z}=e.geometry.userData;m=(Z||.3)*wf,R&&(i.threadRise=Math.abs(e.scale.y)*R*Z,i.clearance=u.length()),d=m+.2,v=.076,y=.049,f=.15}else if(g)u.copy(g.lead),i.extraction.copy(g.extraction),h.copy(g.axis),p.copy(g.offset),_=g.t,d=g.seatTurn,v=.038,y=.017,f=.13;else if(c==="pistoni"&&n.rams.length){let Q=Tf(e,n.rams);h.copy(Q.axis);let R=e===Q.p,j=o.clone().sub(Q.seal).dot(Q.axis)>Q.p.scale.y*.63;u.copy(h).multiplyScalar(s*(R||j?.83:-.16)),i.extraction.copy(a).multiplyScalar(s*(l*.85+(R?.28:0))),i.extraction.y+=s*(.44+_*.41),d=R?.31:.075,v=.089,y=.06,f=.16}else if(c==="trasmissione"&&n.hub&&o.y>n.hub.y-s*.63){h.copy(a),p.copy(o).sub(n.hub),p.addScaledVector(a,-p.dot(a));let Q=o.clone().sub(n.hub).dot(a)>.19*s?1:-1;u.copy(a).multiplyScalar(Q*s*.29),i.extraction.copy(a).multiplyScalar(Q*s*.86),i.extraction.y+=s*.48,_=.55,m=1.24,d=1.34,v=.095,y=.083,f=.18}else if(c==="trasmissione")h.copy(a),u.copy(a).multiplyScalar(s*l*.29),d=l*.61,i.extraction.copy(a).multiplyScalar(s*l*(.56+.26*_)),i.extraction.y+=.32*s;else if(c==="tubazioni")u.copy(a).multiplyScalar(s*l*(n.historical?.34:.21)),d=n.historical?.025:.12,n.historical&&(i.extraction.y+=s*.52);else if(c==="vetri")u.copy(a).multiplyScalar(s*l*.29),d=l*.15;else if(c==="benna"||c==="braccio"){let Q=new r.Vector3(0,1,0).applyQuaternion(e.quaternion).normalize();e.geometry.type==="CylinderGeometry"&&Math.abs(Q.dot(a))>.89?(Q.dot(a)*l<0&&Q.negate(),u.copy(Q).multiplyScalar(s*(.23+Math.min(.41,e.scale.y*.68))),h.copy(Q),m=.22,d=.53):(u.copy(a).multiplyScalar(s*.11*l),d=l*.089)}else u.copy(a).multiplyScalar(s*l*.12);let M=i.family,w=i.bulk,b=.006+M.order*.105+_*(g?.093:c==="bulloneria"?.054:.029)+(l<0?.009:0),E=b+f,z=Math.max(E+.014,.215+M.order*.092+_*(c==="bulloneria"?.144:g?.12:.054)+(l<0?.019:0)),P=n.details.get(e),D=P?.65:z+.192+(c==="bulloneria"?.048:0)-w*.027;Object.assign(i,{begin:b,seated:E,inspection:P,departure:P?Math.min(.36,z):z,end:D,leadEnd:b+v,fanBegin:b+y,seatAxis:h,lead:u,offset:p,screwTurn:m,seatTurn:d,row:_})}var _u={bulloneria:{order:0,travel:.52,turns:2.3,bulk:0},cingoli:{order:.2,travel:.95,turns:.84,bulk:.12},tubazioni:{order:.28,travel:.85,turns:.55,bulk:.22},vetri:{order:.33,travel:1.05,turns:.37,bulk:.43},lamierati:{order:.38,travel:1.15,turns:.43,bulk:.49},pistoni:{order:.44,travel:1.2,turns:.49,bulk:.27},trasmissione:{order:.54,travel:1.08,turns:.64,bulk:.35},benna:{order:.61,travel:1.18,turns:.42,bulk:.69},motore:{order:.68,travel:1.18,turns:.38,bulk:.65},cabina:{order:.75,travel:1.28,turns:.34,bulk:.7},braccio:{order:.84,travel:1.42,turns:.29,bulk:.85},telaio:{order:.96,travel:1.2,turns:.24,bulk:1}},Cf=Math.PI*2;function Gr(r,e,t){return Math.min(t,Math.max(e,r))}function mi(r,e,t){let n=Gr((t-r)/(e-r),0,1);return n*n*(3-2*n)}function Rf(r,e){let t=Math.imul(r+1,2246822519)^Math.imul(e+1,3266489917);return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function Pf(r,e,t){let n=new r.Box3;for(let v of e.parts)n.expandByPoint(v.position);let i=n.getCenter(new r.Vector3),s=n.getSize(new r.Vector3),a=Math.max(1,s.x),o=Math.max(1,s.y),c=Math.max(1,s.z),l=a/9,h=e.parts.find(v=>v.group==="benna"),u=e.parts.find(v=>v.group==="cabina"),p=e.facing===-1||h&&u&&h.position.x<u.position.x?-1:1,d=new Map,m=new Map;e.parts.forEach((v,y)=>{if(v.group!=="bulloneria")return;let g=v.position,M=g.y<1.07,w=M?"track":g.x*p<-.8?"hood":"arm",b=g.z>=0?1:-1,E=M?g.y<.34?0:g.y<.72?1:2:Math.floor(g.y/.8),z=w+":"+b+":"+E;d.has(z)||d.set(z,[]),d.get(z).push({index:y,zone:w,face:b,level:E,x:g.x*p,y:g.y})});for(let v of d.values())v.sort((y,g)=>y.x-g.x||y.y-g.y||y.index-g.index),v.forEach((y,g)=>m.set(y.index,{...y,fraction:(g+.5)/v.length}));let _=gu(r,e,l,i),f=e.parts.map((v,y)=>{let g=Rf(y,t),M=_u[v.group]||_u.lamierati,w=v.position,b=v.group,E=(w.x-i.x)*p/a,z=(w.y-i.y)/o,P=w.z>=0?1:-1,D=new r.Vector3(0,1,0).applyQuaternion(v.quaternion).normalize(),Q=new r.Vector3(E,.2+z*.35,P);D.dot(Q)<0&&D.negate();let R=new r.Vector3,Z=Gr(E+.5,0,1),j=E<-.12?-1:1,$=Gr(z*1.2,-.75,.75),de=-1.68*l,ae=.54*l,K=(w.x*p-de)/l,se=(w.y-ae)/l,L=m.get(y);if(L)if(Z=L.fraction,L.zone==="track"){let le=l*(-4.58+5.83*L.fraction+P*.14),C=l*(-.02+.25*L.level+(P>0?0:.16)+.15*Math.sin(L.fraction*Math.PI));R.set(le-w.x*p,C-w.y,P*l*(1.49+.23*L.level)),j=L.fraction<.6?-1:1,$=-.8+.24*L.level+(P<0?.1:0)}else R.set(l*(L.zone==="hood"?-.97:.64),l*(.55+.31*L.level),P*l*(.71+.61*L.fraction)),j=L.zone==="hood"?-1:1,$=.17+.14*L.level;else b==="cingoli"?(R.set(l*(K*.36-.36+P*.16),l*(se*.47+.09+.17*Math.sin((K/4.7+.5)*Math.PI)),P*l*(1.05+.11*Math.abs(K))),Z=Gr(K/5+.5,0,1),j=K<0?-1:1,$=-.78+.35*se+(P<0?.13:0)):b==="trasmissione"?(R.set(l*(K*.16-.15),l*(se*.23+.28),P*l*.6),j=w.x*p>-.62?1:-1,$=-.52):b==="vetri"?(R.set(l*(.13+.3*E),l*(1.24+.22*z),P*l*.9),j=-1,$=.78):b==="lamierati"?(R.set(l*(-1.62+.25*E),l*(.56+.34*z),P*l*.8),j=-1,$=.39):b==="motore"?(R.set(l*(-1.06+.19*E),l*(.34+.31*z),-l*.65),j=-1,$=.01):b==="cabina"?(R.set(l*(-.14+.28*E),l*(.85+.39*z),P*l*.41),j=-1,$=.64):b==="pistoni"?(R.copy(D).multiplyScalar(l*.58).add(new r.Vector3(l*.54,l*.39,P*l*.32)),j=1,$=.52):b==="benna"?(R.set(l*(1.14+.23*E),l*(.1+.25*z),P*l*.52),j=1,$=-.61):b==="braccio"||b==="tubazioni"?(R.set(l*(.56+.61*E),l*((b==="braccio"?.71:1.11)+.35*z),P*l*.24),j=1,$=b==="braccio"?.55:.87):(R.set(l*.26*E,l*.25,P*l*.16),j=E<0?-1:1,$=-.24);b!=="pistoni"&&(R.x*=p);let W=v.geometry.boundingBox||(v.geometry.computeBoundingBox(),v.geometry.boundingBox),Ee=W.getSize(new r.Vector3).multiply(v.scale),S=[Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(Ee.z)].sort((le,C)=>C-le),A=mi(.49,1.84,Math.sqrt(S[0]*S[1])/l),F=Math.max(M.bulk*.48,A*(b==="tubazioni"?.48:1)),B=b==="bulloneria"?D:new r.Vector3(.11+g()*.13,.88+g()*.08,P*(.22+g()*.14)).normalize(),U=Ee.length()*.5+W.getCenter(new r.Vector3).multiply(v.scale).length(),X={part:v,extraction:R,axis:B,family:M,side:P,row:Z,boundRadius:U,rest:new r.Matrix4().compose(w,v.quaternion,v.scale),spin:M.turns*Cf*(L?.79:.62)*(P<0?-1:1)*(1-F*.59),bulk:F,lens:.16+.12*Z+F*.3,laneX:j*(.72+.37*Z+1.07*F),laneY:$+(Z-.5)*.32,arcX:j*l*(.67+1.31*F),arcY:l*(.2+.28*$),defocus:.86+g()*.12};vu(r,v,y,_,X);let k=new r.Quaternion().setFromAxisAngle(X.seatAxis,X.seatTurn),q=w.clone().add(X.lead).add(R).add(X.offset.clone().applyQuaternion(k)).sub(X.offset),ne=k.multiply(v.quaternion);return X.seatedPosition=q,X.releasedRotation=ne,X.released=new r.Matrix4().compose(q,ne,v.scale),X});return{parts:f,center:i,width:a,lastDeparture:Math.max(...f.map(v=>v.end))}}function yu(r,e,t){let n=e.map((Z,j)=>Pf(r,Z,j)),i=new r.Vector3,s=new r.Vector3,a=new r.Vector3,o=new r.Vector3,c=new r.Vector3,l=new r.Vector3,h=new r.Vector3,u=new r.Vector3,p=new r.Vector3,d=new r.Quaternion,m=new r.Quaternion,_=new r.Quaternion,f=new r.Vector3,v=new r.Quaternion,y=new r.Matrix4,g=new r.Matrix4().makeTranslation(0,-1e5,0),M=.4,w=1,b=.1,E=.5,z=1.12;function P(Z,j){u.subVectors(Z,c);let $=u.dot(o);return $+j<b||Math.abs(u.dot(s))>$*E+j*z+.04}function D(Z,j,$,de){if(!j&&de)return;let ae=n[Z].parts;for(let K=0;K<ae.length;K++)$(Z,K,j?ae[K].rest:g,j?1:0,0,j)}function Q(Z,j,$,de,ae){let K=n[Z];if(ae&&j>=K.lastDeparture)return;let se=Math.max(K.width*.55,(K.center.x-c.x)*o.x+(K.center.y-c.y)*o.y+(K.center.z-c.z)*o.z);for(let L=0;L<K.parts.length;L++){let W=K.parts[L];if(j<=W.begin){de(Z,L,W.rest,1,0,!0);continue}if(j>=W.end){ae||de(Z,L,g,0,0,!1);continue}if(j>=W.seated&&j<=W.departure){de(Z,L,W.released,1,0,!0);continue}let Ee=W.part;if(j<W.seated){let C=mi(W.begin,W.leadEnd,j),x=mi(W.threadRise?W.leadEnd:W.fanBegin,W.seated,j),Y=W.threadRise?(W.threadRise*C+(W.clearance-W.threadRise)*x)/W.clearance:C,V=W.screwTurn*C+(W.seatTurn-W.screwTurn)*x;_.setFromAxisAngle(W.seatAxis,V),f.copy(W.offset).applyQuaternion(_).sub(W.offset),i.copy(Ee.position).addScaledVector(W.lead,Y).addScaledVector(W.extraction,x).add(f),v.multiplyQuaternions(_,Ee.quaternion),y.compose(i,v,Ee.scale),de(Z,L,y,1,0,!1);continue}if(W.inspection){let C=W.inspection,x=Math.max(b*3,se*C.depth),Y=x*M,V=mi(W.departure,.534,j),G=mi(.487,W.end,j),J=-$,ie=C.row+$*.11;l.copy(c).addScaledVector(o,x).addScaledVector(s,J*C.column*Y*w).addScaledVector(a,ie*Y);let te=Math.max(b*3,x*.42);if(h.copy(c).addScaledVector(o,te).addScaledVector(s,J*(te*E*1.085+W.boundRadius*z+Math.abs(C.layer||0)+.12)).addScaledVector(a,(ie+.22)*te*M),C.wheelAxis&&(p.copy(o).multiplyScalar(-.72).addScaledVector(s,J*.64).addScaledVector(a,.27).normalize(),l.addScaledVector(p,C.layer),h.addScaledVector(p,C.layer*.64)),i.copy(W.seatedPosition).lerp(l,V).addScaledVector(a,.38*V*(1-V)*se*M).lerp(h,G),ae&&G>.7&&P(i,W.boundRadius))continue;if(C.wheelAxis)d.setFromUnitVectors(C.wheelAxis,p).multiply(Ee.quaternion),m.setFromAxisAngle(p,J*(.75*V+1.45*G)),d.premultiply(m),v.slerpQuaternions(W.releasedRotation,d,V);else{let me=1.05*V+1.76*G;m.setFromAxisAngle(W.axis,me*J),v.multiplyQuaternions(m,W.releasedRotation),m.setFromAxisAngle(a,J*(.58*V+.26*G)),v.premultiply(m)}y.compose(i,v,Ee.scale),de(Z,L,y,1,.36*V+.64*G);continue}let S=Gr((j-W.departure)/(W.end-W.departure),0,1),A=mi(0,1,S),F=4*A*(1-A),B=Math.max(b*3,se*W.lens),U=B*M,X=W.laneX+$*.047,k=U*w*1.055+W.boundRadius*z+.09,q=Math.sign(X)*Math.max(Math.abs(X)*U*w,k);l.copy(c).addScaledVector(o,B).addScaledVector(s,q).addScaledVector(a,W.laneY*U),i.copy(W.seatedPosition).lerp(l,A).addScaledVector(s,F*W.arcX).addScaledVector(a,F*W.arcY);let ne=mi(0,.93-.11*W.bulk,S);if(i.addScaledVector(s,(ne-A)*u.subVectors(l,W.seatedPosition).dot(s)),ae&&S>.55&&P(i,W.boundRadius))continue;m.setFromAxisAngle(W.axis,W.spin*mi(.031,.985,S)),v.multiplyQuaternions(m,W.releasedRotation),y.compose(i,v,Ee.scale);let le=mi(.29-W.bulk*.07,.92-W.bulk*.12,S)*W.defocus;de(Z,L,y,1,le)}}function R(Z,j,$,de,ae=t,K=!1){let se=Gr($,0,1);if(Z===j){D(Z,!0,de,K);return}if(se===0||se===1){D(Z,se===0,de,K),D(j,se===1,de,K);return}ae.updateWorldMatrix(!0,!1);let L=ae.matrixWorld;c.setFromMatrixPosition(L),s.setFromMatrixColumn(L,0).normalize(),a.setFromMatrixColumn(L,1).normalize(),o.setFromMatrixColumn(L,2).normalize().negate(),M=Math.tan(ae.fov*Math.PI/360)/ae.zoom,w=ae.aspect,E=w*M,z=Math.hypot(1,E),b=ae.near;let W=j>Z?1:-1;Q(Z,se,W,de,K),Q(j,1-se,-W,de,K)}return{sample:R}}function xu(r,e){let t={occlusion:{value:null},rows:{value:new r.Vector2},weights:{value:new r.Vector2(1,0)}},n=new r.ShaderMaterial({uniforms:t,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 atlasUV;
      void main(){atlasUV=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 atlasUV;
      uniform sampler2D occlusion;
      uniform vec2 rows,weights;
      void main(){
        vec2 rowY=(3.-rows+atlasUV.y)*.25;
        float a=texture2D(occlusion,vec2(atlasUV.x,rowY.x)).r;
        float b=texture2D(occlusion,vec2(atlasUV.x,rowY.y)).r;
        float shade=dot(vec2(a,b),weights);
        gl_FragColor=vec4(.009,.008,.006,shade);
      }`}),i=new r.Mesh(new r.PlaneGeometry(18,9),n);return i.rotation.x=-Math.PI/2,i.position.y=-.008,i.renderOrder=-1,i.visible=!1,e.add(i),{ready:new r.TextureLoader().loadAsync("media/ground-contact.webp").then(a=>(a.colorSpace=r.NoColorSpace,t.occlusion.value=a,i.visible=!0,!0)).catch(()=>!1),update(a,o,c){t.rows.value.set(a,o);let l=1-r.MathUtils.smoothstep(c,.08,.42),h=r.MathUtils.smoothstep(c,.59,.93);return t.weights.value.set(a===o?1:l,a===o?0:h),i.visible?1-t.weights.value.x-t.weights.value.y:1}}}async function Mu(r){return Promise.all(r.map(async({year:e})=>{try{let t=new Image;t.src="media/luce-"+e+".webp",await t.decode();let n=192,i=96,s=document.createElement("canvas");s.width=n,s.height=i;let a=s.getContext("2d",{willReadFrequently:!0});return a.drawImage(t,0,0,n,i),{width:n,height:i,data:a.getImageData(0,0,n,i).data}}catch{return null}}))}function Zl(r,e,t){let n=new r.PMREMGenerator(e),i=new r.Vector3(-.56,.65,.51).normalize(),s=[.66,.79,.99],a=[.16,.13,.09],o=[1.15,1.04,.91],c=new Float32Array(256);for(let h=0;h<256;h++){let u=h/255;c[h]=u<.04045?u/12.92:((u+.055)/1.055)**2.4}let l=t.map(h=>{let d=new Float32Array(131072);for(let f=0;f<128;f++){let v=Math.PI*(1-(f+.5)/128),y=Math.cos(v),g=Math.sin(v),M=h?Math.min(h.height-1,Math.max(0,Math.floor((.49-.54*y)*h.height))):0;for(let w=0;w<256;w++){let b=2*Math.PI*((w+.5)/256-.5),E=g*Math.cos(b),z=g*Math.sin(b),P=Math.max(0,E*i.x+y*i.y+z*i.z),D=Math.pow(P,30)*1.35+Math.pow(P,580)*12,Q=(f*256+w)*4,R=y>=0,Z=R?s:a,j=h?Math.min(h.width-1,Math.floor((.5-.497*Math.cos(b+.8))*h.width)):0,$=h?(M*h.width+j)*4:0;for(let de=0;de<3;de++){let ae=Z[de],K=h?c[h.data[$+de]]*(R?2.25:1.17):ae;d[Q+de]=ae*.34+K*.66+D*o[de]}d[Q+3]=1}}let m=new r.DataTexture(d,256,128,r.RGBAFormat,r.FloatType);m.mapping=r.EquirectangularReflectionMapping,m.needsUpdate=!0;let _=n.fromEquirectangular(m);return m.dispose(),_});return n.dispose(),l}var bu=[{matrix:[2.4478364321276365,-.023380387064896906,-.17944118153006983,-.17891992900565423,4316050766285288e-33,3.729765159790077,-.03509480028417401,-.03499285460433618,-.44543164272170555,-.12848517654695918,-.9861056544825697,-.9832411500396284,-4.96122696915129,-10.30737604961329,15.197104794722657,15.472494468521575],camera:[4.712854172070215,3.301588375545085,14.76111829948024],near:.16,far:110},{matrix:[2.467039577461867,.04010941082371933,.12956424081162915,.12918787409903185,0,3.719203136737135,-.08314626371200154,-.08290473498662172,.3225341377682208,-.30679389355647496,-.9910272199955115,-.9881484190659675,-.04992379279791016,-9.009382755433851,12.982231875287134,13.264055457348755],camera:[-1.6677143268888068,3.5053993899297815,12.911008645308971],near:.16,far:110},{matrix:[1.6606701188021726,-.06946891205825537,.746579143223588,.7444104311154585,0,3.7308846024332616,.02507022154010115,.024997395914712332,1.8526973048252362,.0622686426651454,-.6691981853934265,-.6672542545716591,2.794032187681068,-9.806610884050201,13.814691258498646,14.094096657892987],camera:[-11.290257193658855,2.2745366474587705,8.611962961172724],near:.16,far:110},{matrix:[2.428065909252463,.0683328737878362,.21809369445516938,.2174601615736729,-8632101532570577e-33,3.718891872504131,-.0841456827485498,-.0839012508451408,.5429626940362732,-.30557665038108867,-.9752895923529927,-.9724565071173995,1.121184321471704,-10.552804169335504,13.611439599955112,13.891435418110653],camera:[-3.4088301953890094,3.983154200105367,13.178953443723552],near:.16,far:110}];var Lf=["1960","1980","2000","2026"],If=Lf.map(r=>[()=>"media/finitura-"+r+(innerWidth<=760?"-960":"")+".webp","media/profondita-"+r+".webp"]),Uf=`
uniform highp sampler2D finishRest;
vec4 partData(const in int k) {
  int size = textureSize(finishRest, 0).x;
  int j = int(batchId) * 4 + k;
  return texelFetch(finishRest, ivec2(j % size, j / size), 0);
}
uniform mat4 finishProjector;
uniform vec3 finishEye;
varying vec4 vFinishClip;
varying vec2 vFinishView;
`,Df=`
vec4 restRow0 = partData(0), restRow1 = partData(1), restRow2 = partData(2);
vec4 localPoint = vec4(transformed, 1.);
vec3 restPoint = vec3(dot(restRow0,localPoint),dot(restRow1,localPoint),dot(restRow2,localPoint));
vFinishClip = finishProjector * vec4(restPoint, 1.);
mat3 restBasis = mat3(
  normalize(vec3(restRow0.x,restRow1.x,restRow2.x)),
  normalize(vec3(restRow0.y,restRow1.y,restRow2.y)),
  normalize(vec3(restRow0.z,restRow1.z,restRow2.z)));
mat4 liveModel = modelMatrix * batchingMatrix;
mat3 liveBasis = mat3(normalize(liveModel[0].xyz),normalize(liveModel[1].xyz),normalize(liveModel[2].xyz));
vec3 referenceRay = normalize(finishEye - restPoint) * restBasis;
vec3 livePoint = (liveModel * localPoint).xyz;
vec3 liveRay = normalize(cameraPosition - livePoint) * liveBasis;
vFinishView = vec2(dot(referenceRay,liveRay),length(livePoint-restPoint));
`,Nf=`
uniform sampler2D finishPhoto, finishDepth;
uniform vec2 finishPlanes;
uniform float finishAvailable, finishExposure, finishClearPane;
varying vec4 vFinishClip;
varying vec2 vFinishView;

// The machine target is scene-linear. Invert its final ACES display transform
// once, so a photographed grey card retains the measured display luminance.
vec3 finishToScene(vec3 displayLinear) {
  const mat3 toScenePrimaries = mat3(
    vec3(1.764741,-.147028,-.036337), vec3(-.675778,1.160252,-.162436), vec3(-.088963,-.013224,1.198773));
  const mat3 fromDisplayPrimaries = mat3(
    vec3(.643038,.059269,.005962), vec3(.311187,.931436,.063929), vec3(.045775,.009295,.930118));
  vec3 y = clamp(fromDisplayPrimaries * displayLinear, vec3(0.), vec3(.995));
  vec3 a = 1.-.983729*y, b = .0245786-.432951*y, c = -.000090537-.238081*y;
  vec3 x = (sqrt(max(b*b-4.*a*c,vec3(0.)))-b)/(2.*a);
  return (toScenePrimaries*x)*(.6/finishExposure);
}
`,Of=`
if(finishAvailable > .5 && vFinishView.x > .46) {
  vec2 projectedUV = .5 * (vFinishClip.xy/vFinishClip.w + 1.);
  if(all(greaterThanEqual(projectedUV,vec2(0.))) && all(lessThanEqual(projectedUV,vec2(1.)))) {
    // This is the depth of the actual visible outer assembly, including glass.
    // Internal faces that emerge during disassembly keep their own lighting.
    vec2 packedDistance = texture2D(finishDepth, projectedUV).rg;
    float savedDistance = 8. + 16. * dot(packedDistance, vec2(65280., 255.)) / 65535.;
    float depthError = abs(savedDistance - vFinishClip.w);
    float surfaceHit = 1. - smoothstep(.042,.135,depthError);
    if(surfaceHit > .001) {
      vec4 surface = texture2D(finishPhoto, projectedUV);
      float weight = surface.a * surfaceHit * smoothstep(.46,.943,vFinishView.x);
      // Photo RGB already includes transmission and reflections of a seated pane.
      // Reveal its actual transparency once the pane leaves the seat behind.
      weight *= 1. - finishClearPane * smoothstep(.025,.25,vFinishView.y);
      diffuseColor.a = mix(diffuseColor.a,1.,weight);
      outgoingLight = mix(outgoingLight,finishToScene(surface.rgb),weight*.992);
    }
  }
}
`;function Su(r,e,t,n){let i=bu[e],s={finishRest:{value:n},finishProjector:{value:new r.Matrix4().fromArray(i.matrix)},finishEye:{value:new r.Vector3().fromArray(i.camera)},finishPlanes:{value:new r.Vector2(i.near,i.far)},finishExposure:{value:t},finishAvailable:{value:0},finishPhoto:{value:null},finishDepth:{value:null}};return{configure(a,o){Object.assign(a.uniforms,s),a.uniforms.finishClearPane={value:o.transparent&&o.opacity<1?1:0},a.vertexShader=a.vertexShader.replace("#include <batching_pars_vertex>",`#include <batching_pars_vertex>
`+Uf).replace("#include <project_vertex>",Df+`
#include <project_vertex>`),a.fragmentShader=Nf+a.fragmentShader.replace("#include <opaque_fragment>",Of+`
#include <opaque_fragment>`)},async load(){let a=new r.TextureLoader,[o,c]=If[e],[l,h]=await Promise.all([a.loadAsync(o()),a.loadAsync(c)]);return l.colorSpace=r.SRGBColorSpace,l.anisotropy=4,h.colorSpace=r.NoColorSpace,h.generateMipmaps=!1,h.magFilter=h.minFilter=r.NearestFilter,s.finishPhoto.value=l,s.finishDepth.value=h,s.finishAvailable.value=1,[l,h]}}}function Jl(r){return Math.max(4,4*Math.ceil(Math.sqrt(4*r)/4))}function wu(r,e){let t=e.parts.length,n=Jl(t),i=new Float32Array(n*n*4),s=new r.Matrix4;e.parts.forEach((o,c)=>{let l=s.compose(o.position,o.quaternion,o.scale).elements,h=16*c;for(let d=0;d<3;d++)for(let m=0;m<4;m++)i[h+4*d+m]=l[d+m*4];let u=(c+1)*.61803398875,p=(c+1)*.41421356237;i[h+12]=u-Math.floor(u),i[h+13]=p-Math.floor(p)});let a=new r.DataTexture(i,n,n,r.RGBAFormat,r.FloatType);return a.needsUpdate=!0,a}var Ff=[/Intel(\(R\))?[^,]*\b(UHD|HD) Graphics/i,/Intel(\(R\))?[^,]*\bIris\b/i,/Intel(\(R\))?[^,]*\bXe Graphics/i,/Intel(\(R\))? Graphics\b/i,/Intel(\(R\))? Arc(\(TM\))? Graphics/i,/Radeon(\(TM\))? (Graphics|Vega)\b/i,/Radeon(\(TM\))? \d{3}M\b/i,/\bMali\b/i,/\bAdreno\b/i,/\bPowerVR\b/i,/SwiftShader|llvmpipe|Basic Render/i];function Eu(r){let e=String(r||"");return Ff.some(t=>t.test(e))?"ridotto":"pieno"}function Au({dpr:r=1,w:e,h:t,small:n=!1,tier:i="pieno"}){let s=Math.min(r||1,n?1.35:1.65),a=i==="ridotto"?8e5:22e5,o=Math.min(1,r||1);return Math.max(o,Math.min(s,Math.sqrt(a/Math.max(1,e*t))))}function Tu(r,e,t,n,i,s={}){let a=s.onOrbit||(()=>{}),o=innerWidth<=760,c=new r.WebGLRenderer({alpha:!0,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0});c.setClearColor(0,0),c.debug.checkShaderErrors=!1;let l=!1;c.outputColorSpace=r.SRGBColorSpace,c.toneMapping=r.ACESFilmicToneMapping,c.toneMappingExposure=.89,c.shadowMap.enabled=!0,c.shadowMap.type=r.PCFSoftShadowMap,c.shadowMap.autoUpdate=!1,c.domElement.setAttribute("aria-hidden","true");let h=(()=>{try{let re=c.getContext(),ue=re.getExtension("WEBGL_debug_renderer_info");return ue?String(re.getParameter(ue.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),u=Eu(h),p={tier:u,integrated:u==="ridotto",pixelRatio:null};e.appendChild(c.domElement);let d=new r.Scene,m=new r.PerspectiveCamera(30,1,.16,110);performance.mark("r:gl");let _=Zl(r,c,i);performance.mark("r:probes"),d.environment=_[0].texture;let f=new r.HemisphereLight(14477556,9598542,.53);d.add(f);let v=new r.DirectionalLight(16772042,2.42);v.position.set(-7,10,4.5),v.castShadow=!0;let y=o?768:1536;v.shadow.mapSize.set(y,y),Object.assign(v.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:38}),v.shadow.camera.updateProjectionMatrix(),v.shadow.bias=-19e-5,v.shadow.normalBias=.014,v.shadow.radius=3,d.add(v),d.add(v.target);let g=new r.DirectionalLight(13952240,1.15);g.position.set(4,4,-7),d.add(g);let M=new r.Mesh(new r.PlaneGeometry(120,120),new r.ShadowMaterial({color:1513232,opacity:.31,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=-.018,M.receiveShadow=!0,M.renderOrder=-2,d.add(M);let w=xu(r,d);function b(re,ue){re.onBeforeCompile=xe=>{xe.vertexShader=xe.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 surfaceOffset=partData(3).xy;
        #ifdef USE_MAP
          vMapUv+=surfaceOffset;
        #endif
        #ifdef USE_BUMPMAP
          vBumpMapUv+=surfaceOffset;
        #endif
        #ifdef USE_ROUGHNESSMAP
          vRoughnessMapUv+=surfaceOffset;
        #endif
        #ifdef USE_METALNESSMAP
          vMetalnessMapUv+=surfaceOffset;
        #endif`),ue.configure(xe,re)},re.customProgramCacheKey=()=>"tedeschi-photographic-part-v3"}let E=c.extensions.has("WEBGL_multi_draw");function z(re,ue){let xe=0,Pe=0;for(let Wt of ue){let Pt=re.parts[Wt].geometry,xt=Pt.attributes.position.count;xe+=xt,Pe+=Pt.index?Math.min(Pt.index.count-Pt.drawRange.start,Pt.drawRange.count):xt}let Oe=new Float32Array(xe*3),De=new Float32Array(xe*3),Ze=new Float32Array(xe*2),st=new Float32Array(xe),et=new Uint32Array(Pe),ke=new Int32Array(ue.length),Qe=new Int32Array(ue.length),mt=0,At=0;ue.forEach((Wt,Pt)=>{let xt=re.parts[Wt].geometry,Mt=xt.attributes,Xt=Mt.position.count;if(Oe.set(Mt.position.array.subarray(0,Xt*3),mt*3),Mt.normal&&De.set(Mt.normal.array.subarray(0,Xt*3),mt*3),Mt.uv&&Ze.set(Mt.uv.array.subarray(0,Xt*2),mt*2),st.fill(Wt,mt,mt+Xt),ke[Pt]=At,xt.index){let ln=xt.drawRange.start,nr=Math.min(xt.index.count,ln+xt.drawRange.count),vi=xt.index.array;for(let _i=ln;_i<nr;_i++)et[At++]=vi[_i]+mt}else for(let ln=0;ln<Xt;ln++)et[At++]=mt+ln;Qe[Pt]=At-ke[Pt],mt+=Xt});let Et=new r.BufferGeometry;return Et.setAttribute("position",new r.BufferAttribute(Oe,3)),Et.setAttribute("normal",new r.BufferAttribute(De,3)),Et.setAttribute("uv",new r.BufferAttribute(Ze,2)),Et.setAttribute("batchId",new r.BufferAttribute(st,1)),Et.setIndex(new r.BufferAttribute(et,1)),{geometry:Et,starts:ke,counts:Qe,elements:Pe}}let P=t.map((re,ue)=>{let xe=re.parts.length,Pe=Jl(xe),Oe=new r.DataTexture(new Float32Array(Pe*Pe*4),Pe,Pe,r.RGBAFormat,r.FloatType),De=Su(r,ue,c.toneMappingExposure,wu(r,re)),Ze=new Map;re.parts.forEach((Qe,mt)=>{let At=Ze.get(Qe.material);At||Ze.set(Qe.material,At=[]),At.push(mt)});let st=new r.Group;st.visible=!1,d.add(st);let et=[],ke=new Int32Array(xe);return Ze.forEach((Qe,mt)=>{let{geometry:At,starts:Et,counts:Wt,elements:Pt}=z(re,Qe),xt=mt.clone();b(xt,De);let Mt=new r.Mesh(At,xt);Mt.isBatchedMesh=!0,Mt._matricesTexture=Oe,Mt._multiDrawStarts=new Int32Array(Qe.length),Mt._multiDrawCounts=new Int32Array(Qe.length),Mt._multiDrawCount=0,Mt.frustumCulled=!1,Mt.matrixAutoUpdate=!1,Mt.castShadow=!mt.transparent,Mt.receiveShadow=!mt.transparent,st.add(Mt);let Xt={mesh:Mt,parts:Int32Array.from(Qe),starts:Et,counts:Wt,elements:Pt,changed:!0};Qe.forEach(ln=>{ke[ln]=et.length}),et.push(Xt)}),{root:st,groups:et,groupOf:ke,poses:Oe,data:Oe.image.data,shown:new Uint8Array(xe),seen:new Uint32Array(xe),pose:new Array(xe),frame:0,dirty:!1,finish:De}});performance.mark("r:batches");let D=0,Q=0,R=0,Z=0,j=19,$=new r.Vector3(0,2.1,0),de=0,ae=0,K=0,se=0,L=0,W=0,Ee=0,S=0,A=!1,F=n(r,t,m);performance.mark("r:transition");function B(re,ue,xe,Pe,Oe,De=!1){if(Pe<=1e-4)return;let Ze=P[re];Ze.seen[ue]=Ze.frame,!(De&&Ze.shown[ue]&&Ze.pose[ue]===xe)&&(xe.toArray(Ze.data,ue*16),Ze.pose[ue]=De?xe:null,Ze.shown[ue]||(Ze.shown[ue]=1,Ze.groups[Ze.groupOf[ue]].changed=!0),Ze.dirty=!0)}function U(re){for(let xe=0;xe<re.seen.length;xe++)re.shown[xe]&&re.seen[xe]!==re.frame&&(re.shown[xe]=0,re.pose[xe]=null,re.groups[re.groupOf[xe]].changed=!0,E||(re.data.fill(0,xe*16,xe*16+16),re.dirty=!0));let ue=!1;for(let xe of re.groups){if(xe.changed){xe.changed=!1;let Pe=xe.mesh,Oe=Pe._multiDrawStarts,De=Pe._multiDrawCounts,Ze=0,st=-1,et=0,ke=0;for(let Qe=0;Qe<xe.parts.length;Qe++){if(!re.shown[xe.parts[Qe]]){st=-1;continue}ke++,E&&(st>=0&&xe.starts[Qe]===et?De[st]+=xe.counts[Qe]:(st=Ze++,Oe[st]=xe.starts[Qe]*4,De[st]=xe.counts[Qe]),et=xe.starts[Qe]+xe.counts[Qe])}!E&&ke&&(Oe[0]=0,De[0]=xe.elements,Ze=1),Pe._multiDrawCount=ke?Ze:0,Pe.visible=ke>0}ue=ue||xe.mesh.visible}re.root.visible=ue,re.dirty&&(re.poses.needsUpdate=!0,re.dirty=!1)}function X(re){let ue=new r.WebGLRenderTarget(1,1,{type:c.extensions.has("EXT_color_buffer_float")?r.HalfFloatType:r.UnsignedByteType,format:r.RGBAFormat,depthBuffer:!0,stencilBuffer:!1});return ue.depthTexture=new r.DepthTexture(1,1,r.UnsignedIntType),c.capabilities.isWebGL2&&(ue.samples=Math.min(re,c.capabilities.maxSamples),ue.texture.generateMipmaps=!0,ue.texture.minFilter=r.LinearMipmapLinearFilter),ue}let k=X(4),q=new r.WebGLRenderTarget(1,1,{type:k.texture.type,depthBuffer:!1,stencilBuffer:!1}),ne=new r.Scene,le=new r.OrthographicCamera(-1,1,1,-1,0,1),C={colorTex:{value:k.texture},depthTex:{value:k.depthTexture},blurTex:{value:q.texture},pixel:{value:new r.Vector2},focal:{value:j},nearZ:{value:m.near},farZ:{value:m.far},strength:{value:0},maxRadius:{value:16}},x="varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Y=`varying vec2 vUv; uniform sampler2D colorTex,depthTex,blurTex; uniform vec2 pixel;
    uniform float focal,nearZ,farZ,strength,maxRadius;
    float viewDepth(float depth){return nearZ*farZ/(farZ-(farZ-nearZ)*depth);}
    float circle(float depth){return smoothstep(.075,.70,(focal-viewDepth(depth))/focal)*maxRadius*strength;}`,V=new r.ShaderMaterial({uniforms:C,vertexShader:x,depthTest:!1,depthWrite:!1,toneMapped:!1,fragmentShader:Y+`
      void main(){
        // Gather only defocused foreground radiance. Sampling radius uniformly
        // gives thin wires and thread heads samples even at small blur radii.
        // The disk-area weight preserves coverage at a silhouette against sky.
        vec4 foreground=vec4(0.);
        float aperture=maxRadius*strength;
        for(int i=0;i<24;i++){
          float tap=float(i)+.5;
          float r=aperture*tap/24.;
          float angle=tap*2.39996323;
          vec2 uv=clamp(vUv+vec2(cos(angle),sin(angle))*r*pixel,0.,1.);
          float coc=circle(texture2D(depthTex,uv).r);
          float area=max(1.5,coc);
          float contribution=smoothstep(.55,2.6,coc)*(1.-smoothstep(area-1.,area+1.,r));
          float weight=(2.*r*aperture/24.)/(area*area);
          float lod=clamp(log2(1.+r*.20),0.,2.8);
          foreground+=texture2D(colorTex,uv,lod)*(weight*contribution);
        }
        gl_FragColor=foreground/max(1.,foreground.a);
      }`}),G=new r.ShaderMaterial({uniforms:C,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,toneMapped:!0,vertexShader:x,fragmentShader:Y+`
    void main(){
      float rawDepth=texture2D(depthTex,vUv).r;
      vec4 col=texture2D(colorTex,vUv);
      if(strength>.001){
        vec4 nearLayer=texture2D(blurTex,vUv);
        float nearField=smoothstep(.55,2.6,circle(rawDepth));
        col=nearLayer+col*(1.-max(nearField,nearLayer.a));
      }
      // Contact occlusion at small scales gives depth to wheels, grilles and mounts.
      if(rawDepth<.9999 && col.a>.35){
        float here=nearZ*farZ/(farZ-(farZ-nearZ)*rawDepth);float occ=0.;
        for(int j=0;j<6;j++){
          float ang=float(j)*2.39996323, rr=2.+float(j)*2.25;
          float d=texture2D(depthTex,clamp(vUv+vec2(cos(ang),sin(ang))*pixel*rr,0.,1.)).r;
          float there=nearZ*farZ/(farZ-(farZ-nearZ)*d);
          float diff=here-there;
          occ+=smoothstep(.022,.16,diff)*(1.-smoothstep(.38,.98,diff));
        }
        col.rgb*=1.-.044*occ;
      }
      if(col.a>.0001)col.rgb/=col.a;
      gl_FragColor=col;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      gl_FragColor.rgb*=gl_FragColor.a;
    }`}),J=new r.Mesh(new r.PlaneGeometry(2,2),G);ne.add(J);let ie=new r.Scene;ie.add(new r.Mesh(J.geometry,V));let te=t.map(re=>{let ue=new r.Box3,xe=new r.Vector3,Pe=new r.Matrix4,Oe=new r.Vector3,De=[],Ze=new Set;function st(){xe.applyMatrix4(Pe),ue.expandByPoint(xe);let et=(Math.round(xe.x*500)+16384)*1073741824+(Math.round(xe.y*500)+16384)*32768+Math.round(xe.z*500)+16384;Ze.has(et)||(Ze.add(et),De.push(xe.x,xe.y,xe.z))}for(let et of re.parts){let ke=et.geometry;ke.boundingBox||ke.computeBoundingBox();let Qe=ke.boundingBox;if(Qe.getSize(Oe).multiply(et.scale),Pe.compose(et.position,et.quaternion,et.scale),Math.max(Oe.x,Oe.y,Oe.z)>.72){let mt=ke.attributes.position;for(let At=0;At<mt.count;At++)xe.fromBufferAttribute(mt,At),st()}else for(let mt=0;mt<8;mt++)xe.set(mt&1?Qe.max.x:Qe.min.x,mt&2?Qe.max.y:Qe.min.y,mt&4?Qe.max.z:Qe.min.z),st()}return{bounds:ue,points:Float32Array.from(De),center:ue.getCenter(new r.Vector3),focus:new r.Vector3,distance:1,yaw:0,elevation:0}}),me=te.map(re=>re.bounds);performance.mark("r:framing");let _e=[.18,-.4,-.755,-.42],Ae=[.035,.105,.038,.108],we=[.955,.92,.924,.923],Re=0,Be=r.MathUtils.clamp(s.grounding||0,0,1),Le=[-.8,-.45,-.2,-.4],We=.965,Ye=.945,rt=-1,St=.1,Dt=.9,Ct=.9,wt=.3,Yt=new r.Vector3,he=new r.Vector3,Ve=!!s.forzaYaw,ft=s.assestaDopo?0:1,gt=0,tt=0;function _n(re,ue,xe){let Pe=te[re],Oe=Ae[re]??.1,De=_e[re]??0;if(Pe.bestRevision===tt)return Pe.best;let Ze=0,st=-1;for(let et=rt;et<=St+1e-6;et+=.05){let ke=rn(re,De+et,Oe,ue,xe),Qe=(ke.xhi-ke.xlo)/(2*ue*ke.distance)*((ke.yhi-ke.ylo)/(2*xe*ke.distance));Qe>st+1e-4&&(st=Qe,Ze=et)}return Pe.bestRevision=tt,Pe.best=Ze,Ze}function rn(re,ue,xe,Pe,Oe){let De=te[re],Ze=Math.sin(ue),st=Math.cos(ue),et=Math.sin(xe),ke=Math.cos(xe),Qe=-1/0,mt=1/0,At=-1/0,Et=1/0,Wt=De.points,Pt=De.center;for(let xt=0;xt<Wt.length;xt+=3){let Mt=Wt[xt]-Pt.x,Xt=Wt[xt+1]-Pt.y,ln=Wt[xt+2]-Pt.z,nr=Ze*Mt+st*ln,vi=ke*nr+et*Xt,_i=st*Mt-Ze*ln,Jr=ke*Xt-et*nr;Qe=Math.max(Qe,_i+Pe*vi),mt=Math.min(mt,_i-Pe*vi),At=Math.max(At,Jr+Oe*vi),Et=Math.min(Et,Jr-Oe*vi)}return{xhi:Qe,xlo:mt,yhi:At,ylo:Et,distance:Math.max((Qe-mt)/(2*Pe),(At-Et)/(2*Oe))+.03}}function qn(re){let ue=te[re];if(ue.revision===Re)return ue;ue.revision=Re;let xe=Math.tan(m.fov*Math.PI/360),Pe=Be>0||Ve,Oe=Pe&&!Ve?Math.max(we[re],Ye):we[re],De=xe*Oe,Ze=xe*(Pe&&!Ve?Math.max(we[re],We):we[re])*m.aspect,st=Ae[re]??.1,et=0;Ve?et=Le[re]:Pe&&(et=Le[re]+ft*(_n(re,Ze,De)-Le[re])),ue.yaw=(_e[re]??0)+et+R,ue.elevation=r.MathUtils.clamp(st+Z,-.025,.66);let ke=Math.sin(ue.yaw),Qe=Math.cos(ue.yaw),mt=Math.sin(ue.elevation),At=Math.cos(ue.elevation),Et=ue.center,Wt=(Pt,xt,Mt,Xt=0)=>{let ln=rn(re,ue.yaw,ue.elevation,Pt,xt),{xhi:nr,xlo:vi,yhi:_i,ylo:Jr}=ln,oc=Math.max(ln.distance,Xt),lc=(nr+vi)*.5,Kr=(_i+Jr)*.5;return Be>0&&(Kr+=Be*(Jr+xt*oc-Kr)),Mt.set(Et.x+lc*Qe-Kr*ke*mt,Et.y+Kr*At,Et.z-lc*ke-Kr*Qe*mt),oc};if(ue.distance=Wt(Ze,De,ue.focus),Pe&&!Ve){ue.focusCorsa||(ue.focusCorsa=new r.Vector3);let Pt=m.aspect>1.2,xt=xe*we[re],Mt=(_e[re]??0)+(m.aspect<=1.3?Le[re]:0)+R,Xt=rn(re,Mt,ue.elevation,xt*m.aspect,xt).distance,ln=Pt?Dt:1;ue.distanceCorsa=Math.max(ue.distance,Wt(xt*ln*m.aspect,xt,ue.focusCorsa,Xt*Ct))}else ue.distanceCorsa=ue.distance,ue.focusCorsa=ue.focus;return ue}let yn=.006,xn=NaN,Yn=0,Zn=0,en=0,_t={focus:new r.Vector3,yaw:0,elevation:0,distance:1,ok:!1},kt={focus:new r.Vector3,yaw:0,elevation:0,distance:1},Nt=m.clone(),Gt=new r.Vector3;function Vt(){xn=NaN,_t.ok=!1}function Ot(re,ue,xe,Pe,Oe,De){Pe>0?(Yt.copy(re.focus).lerp(re.focusCorsa,Pe),he.copy(ue.focus).lerp(ue.focusCorsa,Pe),De.focus.copy(Yt).lerp(he,xe)):De.focus.copy(re.focus).lerp(ue.focus,xe);let Ze=r.MathUtils.lerp(re.distance,re.distanceCorsa,Pe),st=r.MathUtils.lerp(ue.distance,ue.distanceCorsa,Pe);return De.distance=r.MathUtils.lerp(Ze,st,xe)*(1+(Be>0?wt:.067)*Oe),De.yaw=r.MathUtils.lerp(re.yaw,ue.yaw,xe)+.033*Oe,De.elevation=r.MathUtils.lerp(re.elevation,ue.elevation,xe)+.027*Oe,De}function An(re,ue){let xe=Nt,Pe=re.yaw,Oe=re.elevation,De=re.distance,Ze=re.focus;(xe.aspect!==m.aspect||xe.fov!==m.fov)&&(xe.aspect=m.aspect,xe.fov=m.fov,xe.updateProjectionMatrix()),xe.position.set(Ze.x+Math.sin(Pe)*Math.cos(Oe)*De,Ze.y+Math.sin(Oe)*De,Ze.z+Math.cos(Pe)*Math.cos(Oe)*De),xe.lookAt(Ze),xe.updateMatrixWorld(),xe.matrixWorldInverse.copy(xe.matrixWorld).invert();let st=1/0,et=-1/0;for(let ke=0;ke<8;ke++)Gt.set(ke&1?ue.max.x:ue.min.x,ke&2?ue.max.y:ue.min.y,ke&4?ue.max.z:ue.min.z).project(xe),Gt.y<st&&(st=Gt.y),Gt.y>et&&(et=Gt.y);return et-st}function I(){let re=r.MathUtils.smootherstep(W,0,1),ue=qn(se),xe=qn(L),Pe=se===L?0:Math.max(16*W*W*(1-W)*(1-W),S),Oe=se===L?0:Ee,De=Ot(ue,xe,re,Oe,Pe,kt),Ze=performance.now();if(A&&Be>0&&!Ve&&Number.isFinite(xn)&&_t.ok){let st=ue.bounds,et=Math.max(0,Math.min(Ze-Zn,1e3))/16.7,ke=An(_t,st),Qe=ke*Math.pow(1-yn,et),mt=ke*Math.pow(1+yn,et),At=Et=>Et<Qe-1e-12||Et>mt+1e-12;if(At(An(De,st))){let Et=xn,Wt=Yn,Pt=0,xt=1;if(At(An(Ot(ue,xe,re,Et,Wt,kt),st)))xt=0;else for(let Mt=0;Mt<10;Mt++){let Xt=(Pt+xt)/2;At(An(Ot(ue,xe,re,Et+(Oe-Et)*Xt,Wt+(Pe-Wt)*Xt,kt),st))?xt=Xt:Pt=Xt}Oe=Et+(Oe-Et)*Pt,Pe=Wt+(Pe-Wt)*Pt,De=Ot(ue,xe,re,Oe,Pe,kt),en||(en=requestAnimationFrame(()=>{en=0,A&&(I(),Ge())}))}}xn=Oe,Yn=Pe,Zn=Ze,_t.focus.copy(De.focus),_t.yaw=De.yaw,_t.elevation=De.elevation,_t.distance=De.distance,_t.ok=!0,$.copy(De.focus),j=De.distance,D=De.yaw,Q=De.elevation,m.position.set($.x+Math.sin(D)*Math.cos(Q)*j,$.y+Math.sin(Q)*j,$.z+Math.cos(D)*Math.cos(Q)*j),m.lookAt($),m.updateMatrixWorld(),C.focal.value=j}let oe=NaN,pe=NaN,be=NaN,fe=-1,Ue=[];function qe(){let re=se===L||W===0?se:W===1?L:-1;if(!(re>=0&&re===fe)){fe=re,Ue.length=0;for(let ue=0;ue<P.length;ue++)ue===se||ue===L?(Ue.push(P[ue]),P[ue].frame++):P[ue].root.visible=!1;F.sample(se,L,W,B,m,!0);for(let ue of Ue)U(ue)}}function Ge(){if(!l)return;qe();let re=se+(L-se)*W;(!Number.isFinite(oe)||Math.abs(oe-re)>1/120||Number.isInteger(re)&&re!==oe||!Number.isInteger(re)&&(D!==pe||Q!==be))&&(c.shadowMap.needsUpdate=!0,oe=re,pe=D,be=Q);let xe=se!==L&&W>.002&&W<.998,Pe=xe?r.MathUtils.smootherstep(W,.22,.4)*(1-r.MathUtils.smootherstep(W,.62,.78)):0;C.strength.value=Pe;let Oe=xe?r.MathUtils.smootherstep(W,.28,.46)*(1-r.MathUtils.smootherstep(W,.55,.72)):0;C.focal.value=j*(1-.47*Oe);let De=w.update(se,L,W);M.material.opacity=De*(.22-.1*Pe),M.visible=M.material.opacity>1e-4;let Ze=Pe>.001;c.setRenderTarget(k),c.render(d,m),Ze&&(c.setRenderTarget(q),c.render(ie,le)),c.setRenderTarget(null),c.render(ne,le)}function O(){let re=Math.max(1,e.clientWidth),ue=Math.max(1,e.clientHeight),xe=devicePixelRatio||1;if(re===de&&ue===ae&&xe===K)return;de=re,ae=ue,K=xe,c.setPixelRatio(Au({dpr:xe,w:re,h:ue,small:o,tier:u})),p.pixelRatio=+c.getPixelRatio().toFixed(3),c.setSize(re,ue,!1);let Pe=c.getPixelRatio(),Oe=Math.round(re*Pe),De=Math.round(ue*Pe);k.setSize(Oe,De),q.setSize(Math.max(1,Math.ceil(Oe*.5)),Math.max(1,Math.ceil(De*.5))),C.pixel.value.set(1/Oe,1/De),C.maxRadius.value=o?9*Pe:15*Pe,m.aspect=re/ue,m.updateProjectionMatrix(),Re++,tt++,Vt(),I(),Ge()}new ResizeObserver(O).observe(e);let N=null,ce=!1,ve=0;function Te(){N?.removeEventListener?.("change",Ce);try{N=matchMedia("(resolution: "+(devicePixelRatio||1)+"dppx)"),N.addEventListener("change",Ce)}catch{N=null}}function Ce(){Te(),ce=!0,ze()}function ze(){if(ce){if(performance.now()-ve<300){setTimeout(ze,200);return}ce=!1,O()}}Te(),setInterval(()=>{!ce&&de&&(devicePixelRatio||1)!==K&&Ce()},1e3),c.domElement.addEventListener("webglcontextlost",re=>{re.preventDefault()},!1),c.domElement.addEventListener("webglcontextrestored",()=>{let re=Zl(r,c,i);_.splice(0,_.length,...re),d.environment=_[W<.5?se:L].texture;for(let ue of P)ue.poses.needsUpdate=!0;oe=NaN,fe=-2,de=0,O(),Ge()},!1);function $e(re,ue){R=r.MathUtils.clamp(R+re,-1.15,1.15),Z=r.MathUtils.clamp(Z+ue,-.1,.52),Re++,I(),Ge(),a(R,Z)}let He=0,Xe=0,at=0,nt=0,Ne=matchMedia("(prefers-reduced-motion: reduce)").matches;function je(re){at=0;let ue=nt?Math.min(80,re-nt):16.7,xe=He-R,Pe=Xe-Z,Oe=Ne||Math.max(Math.abs(xe),Math.abs(Pe))<5e-4,De=Oe?1:-Math.expm1(-ue/(yt!==null?39:95));$e(De*xe,De*Pe),nt=Oe?0:re,Oe||(at=requestAnimationFrame(je))}function pt(re,ue){He=r.MathUtils.clamp(re,-1.15,1.15),Xe=r.MathUtils.clamp(ue,-.1,.52),at||(at=requestAnimationFrame(je))}let yt=null,Zt=0,sn=0,Rt=0,Tn=0,Cn=0;e.addEventListener("pointerdown",re=>{re.button!==0||yt!==null||(yt=re.pointerId,Zt=re.clientX,sn=re.clientY,Rt=Tn=0,Cn=performance.now(),e.setPointerCapture(re.pointerId),e.classList.add("dragging"))}),e.addEventListener("pointermove",re=>{if(re.pointerId!==yt)return;let ue=performance.now(),xe=Math.max(1,ue-Cn);Cn=ue;let Pe=re.clientX-Zt,Oe=re.clientY-sn;Rt=Rt*.6+Pe/xe*.4,Tn=Tn*.6+Oe/xe*.4,pt(He-Pe*.005,Xe+Oe*.003),Zt=re.clientX,sn=re.clientY});function T(){yt=null,e.classList.remove("dragging")}e.addEventListener("lostpointercapture",T),e.addEventListener("pointercancel",T),e.addEventListener("pointerup",re=>{e.hasPointerCapture(re.pointerId)&&e.releasePointerCapture(re.pointerId),!Ne&&performance.now()-Cn<90&&Math.abs(Rt)+Math.abs(Tn)>.05&&pt(He-Rt*.005*190,Xe+Tn*.003*120),T()}),e.addEventListener("keydown",re=>{(re.key==="ArrowLeft"||re.key==="ArrowRight")&&(re.preventDefault(),pt(He+(re.key==="ArrowLeft"?-.09:.09),Xe))});function ee(re){let ue=c.getRenderTarget(),xe=[];if(re)for(let Oe of P){xe.push([Oe.root,Oe.root.visible]),Oe.root.visible=!0;for(let De of Oe.groups)xe.push([De.mesh,De.mesh.visible]),De.mesh.visible=!0}let Pe=[];try{c.setRenderTarget(k),Pe.push(c.compileAsync(d,m)),c.setRenderTarget(q),Pe.push(c.compileAsync(ie,le)),c.setRenderTarget(null),Pe.push(c.compileAsync(ne,le))}finally{c.setRenderTarget(ue);for(let[Oe,De]of xe)Oe.visible=De}return Promise.all(Pe)}function ge(re){let ue=P[re],xe=t[re],Pe=[[M,M.visible]],Oe=d.environment,De=ue.data.slice();M.visible=!0;for(let ke of P)Pe.push([ke.root,ke.root.visible]),ke.root.visible=ke===ue;let Ze=ue.groups.map(ke=>[ke.mesh.visible,ke.mesh._multiDrawCount,ke.mesh._multiDrawStarts[0],ke.mesh._multiDrawCounts[0]]),st=new r.Matrix4;xe.parts.forEach((ke,Qe)=>st.compose(ke.position,ke.quaternion,ke.scale).toArray(ue.data,Qe*16));for(let ke of ue.groups)ke.mesh.visible=!0,ke.mesh._multiDrawCount=1,ke.mesh._multiDrawStarts[0]=0,ke.mesh._multiDrawCounts[0]=ke.elements;ue.poses.needsUpdate=!0;let et=c.getRenderTarget();try{d.environment=_[re].texture,c.shadowMap.needsUpdate=!0,c.setRenderTarget(k),c.render(d,m),c.setRenderTarget(q),c.render(ie,le)}finally{c.setRenderTarget(et),d.environment=Oe;for(let[ke,Qe]of Pe)ke.visible=Qe;ue.groups.forEach((ke,Qe)=>{[ke.mesh.visible,ke.mesh._multiDrawCount,ke.mesh._multiDrawStarts[0],ke.mesh._multiDrawCounts[0]]=Ze[Qe]}),ue.data.set(De),ue.poses.needsUpdate=!0,oe=NaN}}async function ye(){await ee(!0);for(let re=0;re<P.length;re++)await new Promise(requestAnimationFrame),ge(re)}async function Me(){fe=-2,qe(),I(),await ee(!1),l=!0,fe=-2,Ge()}d.updateMatrixWorld(!0),d.matrixWorldAutoUpdate=!1,O(),performance.mark("r:primo-disegno");let Se=[s.first??0,0,1,2,3].filter((re,ue,xe)=>xe.indexOf(re)===ue),Je=new Array(P.length);async function Ke(re){try{let ue=await P[re].finish.load();for(let xe of ue)c.initTexture(xe);return(re===se||re===L)&&(fe=-2,Ge()),!0}catch{return!1}}Je[Se[0]]=Ke(Se[0]);let ot=Je[Se[0]],Ht=ot;for(let re of Se.slice(1))Ht=Je[re]=Ht.then(()=>Ke(re));let tn=Promise.all(Je);function Mn(){let re=te[se],ue=re.points,xe=new r.Vector3,Pe=e.getBoundingClientRect(),Oe=1/0,De=1/0,Ze=-1/0,st=-1/0;m.updateMatrixWorld();for(let et=0;et<ue.length;et+=3){xe.set(ue[et],ue[et+1],ue[et+2]).project(m);let ke=(xe.x+1)/2*Pe.width,Qe=(1-xe.y)/2*Pe.height;ke<Oe&&(Oe=ke),ke>Ze&&(Ze=ke),Qe<De&&(De=Qe),Qe>st&&(st=Qe)}return{left:Pe.left+Oe,top:Pe.top+De,right:Pe.left+Ze,bottom:Pe.top+st}}return{quality:p,machineRect:Mn,canvas:c.domElement,bounds:me,view:c,draw:Ge,prepareTransitions:ye,warm:Me,finishReady:tn,firstFinish:ot,groundReady:w.ready,show(re,ue,xe,Pe=0,Oe=0,De=!1){re===se&&ue===L&&xe===W&&Pe===Ee&&Oe===S||(ve=performance.now(),se=re,L=ue,W=xe,Ee=Pe,S=Oe,A=De,d.environment=_[xe<.5?re:ue].texture,I(),Ge())},setReducedMotion(re){Ne=!!re},assesta(re=!0){if(ft>=1)return;if(!re||Ne){ft=1,Re++,I(),Ge();return}let ue=performance.now(),xe=ft;cancelAnimationFrame(gt);let Pe=Oe=>{let De=Math.min(1,(Oe-ue)/700);ft=xe+(1-xe)*r.MathUtils.smootherstep(De,0,1),Re++,I(),Ge(),De<1&&(gt=requestAnimationFrame(Pe))};gt=requestAnimationFrame(Pe)},setGrounding(re){let ue=r.MathUtils.clamp(Number(re)||0,0,1);ue!==Be&&(Be=ue,Re++,tt++,Vt(),I(),Ge())},reset(re=!1){if(re&&!Ne){pt(0,0);return}at&&cancelAnimationFrame(at),at=nt=He=Xe=R=Z=0,Re++,I(),Ge()}}}var Cu=["1960","1980","2000","2026"];var Ru={apertura:{step:150,max:980,stagger:70,extra:160},cambio:{step:80,max:240,stagger:20,extra:100}},Bf=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function zf(r){let e=[];for(let h=19;h>=-10;h--)e.push((h%10+10)%10);let t=Array.from({length:4},()=>{let h=document.createElement("span");h.className="roll";let u=document.createElement("span");return u.className="roll-band",u.append(...e.map(p=>{let d=document.createElement("span");return d.textContent=String(p),d})),h.append(u),{col:h,band:u,value:0,from:0,to:0,start:0,dur:0,delay:0}}),n=document.createElement("span");n.className="roll-box",n.setAttribute("aria-hidden","true"),n.append(...t.map(h=>h.col));let i=document.createElement("span");i.className="sr",r.replaceChildren(n,i),r.style.setProperty("--pitch",1.25);let s=0,a=null;function o(h){let u=h.value;h.band.style.transform="translate3d(0,"+(-(19-u)*1.25).toFixed(4)+"em,0)"}function c(h){s=0;let u=!1;for(let p of t){if(p.dur<=0)continue;let d=Math.max(0,Math.min(1,(h-p.start-p.delay)/p.dur)),m=Math.abs(p.to-p.from),_=d*m,f=Math.min(m-1,Math.floor(_)),v=Bf(Math.min(1,_-f));p.value=p.from+Math.sign(p.to-p.from)*(d>=1?m:f+v),o(p),d<1?u=!0:(p.value=(p.to%10+10)%10,p.dur=0,o(p))}u&&(s=requestAnimationFrame(c))}function l(h,u,p,d=Ru.cambio){let m=[...h].map(Number);i.textContent=h,s&&(cancelAnimationFrame(s),s=0);let _=performance.now(),f=0;t.forEach((v,y)=>{let g=v.value,M=m[y],w=(Math.round(g)%10+10)%10;if(!u){v.value=M,v.dur=0,o(v);return}let b=p>0?(M-w+10)%10:-((w-M+10)%10);if(b===0&&Math.abs(g-Math.round(g))<1e-4){v.value=M,v.dur=0,o(v);return}v.from=g,v.to=Math.round(g)+b,v.start=_,v.dur=Math.min(d.max,d.step*Math.max(1,Math.abs(b))+d.extra),v.delay=f++*d.stagger,b===0&&(v.to=Math.round(g),v.dur=Math.min(200,d.max))}),t.some(v=>v.dur>0)&&(s=requestAnimationFrame(c))}return{show(h,{animate:u=!1,direction:p=1,pace:d}={}){let m=Cu[h]||Cu[0];if(a===m&&!u)return;let _=a!==m;a=m,(_||!u)&&l(m,u&&_,p,d)},intro(h){t.forEach((u,p)=>{u.value=[1,9,0,0][p],u.dur=0,o(u)}),a=null,h?this.show(0,{animate:!0,direction:1,pace:Ru.apertura}):this.show(0)}}}var kf=110,Gf=200,Vf=3;function Pu(r){let e=zf(r.querySelector(".year")),t=r.querySelector(".story-copy"),n=t.querySelector(".period"),i=t.querySelector(".era-title"),s=t.querySelector("p"),a=null,o=null,c=null;function l(u){u!==o&&(o=u,n.textContent=u.subtitle,i.textContent=u.title,s.textContent=u.body)}function h(){c&&(c.cancel(),c=null),a&&l(a)}return{show:e.show,intro:e.intro,settle:h,change(u,{animate:p=!1,direction:d=1}={}){if(u===a)return;if(a=u,!p||typeof t.animate!="function"||o===null){h();return}let m=c?Number(getComputedStyle(t).opacity):1;c&&c.cancel();let _=Vf*Math.sign(d||1),f=t.animate([{opacity:m,transform:"translate3d(0,0,0)"},{opacity:0,transform:"translate3d(0,"+-_+"px,0)"}],{duration:kf*m,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});c=f,f.onfinish=()=>{if(c!==f)return;l(a);let v=t.animate([{opacity:0,transform:"translate3d(0,"+_+"px,0)"},{opacity:1,transform:"translate3d(0,0,0)"}],{duration:Gf,easing:"cubic-bezier(0,0,.2,1)"});f.cancel(),c=v,v.onfinish=()=>{c===v&&(c=null)}}}}}function Uu(r){if(r<=0)return 0;if(r>=1)return 1;let e=.7,t=0,n=.2,i=1,s=3*e,a=3*(n-e)-s,o=1-s-a,c=r;for(let p=0;p<6;p++){let d=((o*c+a)*c+s)*c-r,m=(3*o*c+2*a)*c+s;if(Math.abs(d)<1e-5||!m)break;c-=d/m}c=Math.max(0,Math.min(1,c));let l=3*t,h=3*(i-t)-l;return(((1-l-h)*c+h)*c+l)*c}var Vr=[0,.0967,.158,.2112,.2785,.3284,.3624,.3918,.4221,.4588,.5069,.5511,.5843,.6124,.6395,.6697,.7104,.7794,.839,.9023,1],ei=Vr.length-1,Lu=(()=>{let r=1/ei,e=Vr.slice(1).map((n,i)=>(n-Vr[i])/r),t=new Array(Vr.length);t[0]=e[0],t[ei]=e[ei-1];for(let n=1;n<ei;n++)t[n]=e[n-1]*e[n]<=0?0:(e[n-1]+e[n])/2;for(let n=0;n<ei;n++){if(e[n]===0){t[n]=t[n+1]=0;continue}let i=t[n]/e[n],s=t[n+1]/e[n],a=i*i+s*s;if(a>9){let o=3/Math.sqrt(a);t[n]=o*i*e[n],t[n+1]=o*s*e[n]}}return t[0]=t[ei]=(t[0]+t[ei])/2,t})();function Kl(r){if(r<=0)return 0;if(r>=1)return 1;let e=r*ei,t=Math.min(ei-1,Math.floor(e)),n=e-t,i=1/ei,s=n*n,a=s*n;return(2*a-3*s+1)*Vr[t]+(a-2*s+n)*i*Lu[t]+(-2*a+3*s)*Vr[t+1]+(a-s)*i*Lu[t+1]}var ti=.09,Iu=.005,Hf=.12,Ql=800,Wf=r=>r<=0?0:r>=1?1:r*r*r*(r*(r*6-15)+10);function ja(r){return Kl(Math.min(1,Math.max(0,(r-ti)/(1-2*ti))))}function Du(r){return Wf((r-Iu)/(Hf-Iu))}var ni=[{year:"1960",label:"Anni Sessanta",short:"La meccanica",subtitle:"Escavatore a funi",title:"Lo scavo frontale",body:"L\u2019asta spinge la benna nel terreno. La fune passa sulle pulegge e la solleva.",photo:"media/era-1960.jpg"},{year:"1980",label:"Anni Ottanta",short:"L\u2019idraulica",subtitle:"Escavatore idraulico",title:"Il braccio articolato",body:"I cilindri sollevano il braccio. I tubi flessibili seguono il bilanciere mentre la benna si chiude.",photo:"media/era-1980.jpg"},{year:"2000",label:"Primi Duemila",short:"La benna da finitura",subtitle:"Escavatore a carro lungo",title:"La benna da finitura",body:"La benna ha un bordo liscio per stendere il terreno. I due cingoli larghi sostengono la macchina durante lo scavo.",photo:"media/era-2000.jpg"},{year:"2026",label:"Oggi",short:"Il controllo di scavo",subtitle:"Escavatore elettroidraulico",title:"Il controllo di scavo",body:"Dalla cabina panoramica si vedono la benna e i raccordi esterni del bilanciere.",photo:"media/era-2026.jpg"}];function Vu(r){let e=document.querySelector(".scene"),t=Math.max(innerWidth,(e?.clientHeight||innerHeight)*1.78)*Math.min(devicePixelRatio||1,2);return"media/fondale-"+ni[r].year+(t<=1150?"-1100":"-1672")+".webp"}var sc=new URLSearchParams(location.search),gi=sc.has("manuale"),Ja=Math.max(0,Math.min(3,Number(sc.get("inizio"))||0));gi&&document.documentElement.classList.add("td3-manuale");var vt=r=>document.getElementById(r),vn={scrub:vt("scrub"),previous:vt("previous"),next:vt("next"),play:vt("play"),playLabel:vt("play-label"),count:vt("era-count"),current:vt("current-era"),backdrops:vt("backdrops")},Ls=[],Hu=[],Oi=Pu(vt("story")),jr=0,kn=0,Ts=0,qr=!1,Bt=null,dt=0,Ka=0,It=null,Ps=0,Ut=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let r=localStorage.getItem("tedeschi-3d-motion");r!==null&&(Ut=r==="ridotto")}catch{}gi&&(Ut=!0);for(let[r,e]of ni.entries()){let t=document.createElement("div");t.className="photoscene",t.append(document.createElement("i")),vt("backdrops").append(t),Ls.push(t);let n=document.createElement("button");n.type="button",n.className="stop",n.setAttribute("aria-label",e.label+", "+e.year+", "+e.short);let i=document.createElement("span");i.className="dot",i.setAttribute("aria-hidden","true");let s=document.createElement("span"),a=document.createElement("strong"),o=document.createElement("small");a.textContent=e.label,o.textContent=e.short,s.append(a,o),n.append(i,s),vt("stops").append(n),Hu.push(n),n.addEventListener("click",()=>Yr(r))}var Jf=window.parent!==window&&!gi;Jf&&(vt("motion-switch").hidden=!0);if(window.parent!==window||gi){let r=document.createElement("div");r.className="scene-tools",gi&&r.append(vt("motion-switch")),r.append(vt("recenter")),document.querySelector(".scene").append(r)}var ii=document.createElement("div");ii.className="curtain-thread";ii.hidden=!0;var Wu=document.createElement("i");ii.append(Wu);vt("backdrops").append(ii);var Qa=new Set;function $a(r){Qa.has(r)||(Qa.add(r),Ls[r].firstChild.style.backgroundImage='url("'+Vu(r)+'")')}function ec(r){if(Qa.has(r))return Promise.resolve();let e=new Image;return e.src=Vu(r),e.decode().catch(()=>{}).then(()=>$a(r))}var eo=1,Nu=1,to=0;function Kf(){eo=vn.backdrops.clientWidth||1,Nu=vn.backdrops.clientHeight||1,to=Math.atan(16/100*eo/Nu)}var no=null;function tc(r,e){let t=r.style,n=r.firstChild.style;if(e===no){t.transform&&(t.transform="",n.transform="");return}let i=(e/100-1)*eo;t.transform="translate3d("+i.toFixed(2)+"px,0,0) skewX("+(-to).toFixed(5)+"rad)",n.transform="skewX("+to.toFixed(5)+"rad) translate3d("+(-i).toFixed(2)+"px,0,0)"}function Xu(r){Wu.style.transform="translate3d("+(r*eo/100-4).toFixed(2)+"px,0,0) skewX("+(-to).toFixed(5)+"rad)"}function Qf(){if(Ut)return;let r=[...Ls.filter((e,t)=>Qa.has(t)&&t!==Math.floor(dt)),ii];for(let e of r)e.hidden=!1,e.style.opacity=".002",e.style.zIndex="3",e!==ii&&tc(e,no);Xu(50),requestAnimationFrame(()=>requestAnimationFrame(()=>{for(let e of r)e.style.opacity="",e.style.zIndex="";ii.hidden=!0,rc="",on(dt,!0)}))}var Cs=-1,qa=-1,so=vt("story").querySelector(".year"),tr=Ut||Ja>0;tr||(so.style.visibility="hidden");var Wr=null;function ac(){so.style.visibility="",tr=!0,Wr?.disconnect(),Wr=null}function $f(){if(tr||Ut||Math.round(dt)!==0||!Bt){ac();return}Wr=new IntersectionObserver(r=>{if(r.some(e=>e.isIntersecting)&&(Wr?.disconnect(),Wr=null,!tr)){if(tr=!0,so.style.visibility="",Ut||Math.round(dt)!==0){Oi.show(Math.round(dt));return}Oi.intro(!0),qa=0}},{threshold:.18}),Wr.observe(vt("view"))}var em=450,nc=0,ic=0,zn=null,io=0,Hr=null,Ui=null;function tm(r){let e=ja(r);return 16*e*e*(1-e)*(1-e)}var Ou=(()=>{let r=0,e=1;for(let t=0;t<40;t++){let n=(r+e)/2;ja(n)<.5?r=n:e=n}return(r+e)/2})(),ju=r=>r<=0?0:r>=1?1:r*r*r*(r*(r*6-15)+10);function qu(){io=0,zn&&(!It&&!kn&&on(dt,!0),zn&&(io=requestAnimationFrame(qu)))}function ri(){It&&(nc>0||ic>0)&&(zn={da:nc,daA:ic,t0:performance.now()},io||(io=requestAnimationFrame(qu))),It&&(Hr={v:Rs,t:performance.now()}),Ps&&cancelAnimationFrame(Ps),Ps=0,It=null,kn&&(cancelAnimationFrame(kn),kn=0,Zr.following=!1,qr=!1),ro()}var Fu=null;function ro(){let r=!!It;r!==Fu&&(vn.playLabel.textContent=r?"Pausa":"Riproduci",vn.play.setAttribute("aria-label",r?"Metti in pausa":"Riproduci la transizione"),vn.play.setAttribute("aria-pressed",String(r)),Fu=r);let e=dt<1e-4&&!r,t=dt>2.9999&&!r;vn.previous.disabled!==e&&(vn.previous.disabled=e),vn.next.disabled!==t&&(vn.next.disabled=t)}var rc="",Ya="",Bu="",zu="";function on(r,e=!1){let t=Math.max(0,Math.min(3,r));if(t===dt&&Cs!==-1&&!e){ro();return}let n=dt;dt=t;let i=Math.floor(dt),s=Math.min(i+1,3),a=dt-i,o=Math.round(dt),c=i+"-"+s,l=Is&&!Ut,h=l?ja(a):Kl(a),u=0,p=0;if(l&&s!==i){let f=It?Math.min(Math.abs(It.to-dt),Math.abs(dt-It.start)+It.d0):Math.min(a,1-a);if(u=Du(f),It?.attraversa){let v=(dt-It.start)*It.dir;v>=It.dIn-1e-9&&v<=It.dOut+1e-9&&(p=It.apL)}if(zn){let v=ju((performance.now()-zn.t0)/em);v>=1?zn=null:(u=zn.da+(u-zn.da)*v,p=zn.daA+(p-zn.daA)*v)}}else zn=null;if(nc=u,ic=p,c!==rc){for(let f=0;f<4;f++){let v=Ls[f];v.hidden=f!==i&&f!==s,v.hidden||((f===i||a>.05)&&$a(f),v.style.zIndex=f===i?"0":"1",tc(v,f===i?no:0))}rc=c,Ya=""}if(s!==i){let f=Ut?a>=.5?1:0:Uu((h-.33)/.38),v=f*118,y=f<=0?"chiusa":f>=1?"aperta":v.toFixed(2);if(y!==Ya){tc(Ls[s],f>=1?no:f<=0?0:v),Ya=y;let g=f>0&&f<1&&!Ut;ii.hidden=!g,g&&Xu(v)}}else ii.hidden||(ii.hidden=!0);let d=qr?Math.round(jr):o;if(Cs!==d){let f=Cs;Cs=d;let v=ni[d],y=f!==-1&&!Ut&&document.visibilityState==="visible",g=d>f?1:-1;Oi.change(v,{animate:y,direction:g}),Hu.forEach((M,w)=>M.setAttribute("aria-current",String(w===d))),vn.count.textContent=String(d+1).padStart(2,"0")+" / 04",vn.current.textContent=[v.year,v.subtitle,v.title,v.body].join(". "),tr&&f!==-1&&qa!==d?(Oi.show(d,{animate:y,direction:g}),qa=d):(tr||f===-1)&&(Oi.show(d),qa=d)}if(Bt){let f=!!(It||qr||zn);Ut||a<=1e-5&&!(p>0)?Bt.show(o,o,0,0,0,f):Bt.show(i,s,h,u,p,f)}a>.05&&s!==i&&$a(s),dt>n&&s+1<=3&&a>.5&&ec(s+1),dt<n&&i-1>=0&&a<.5&&ec(i-1);let m=(dt*100/3).toFixed(3)+"%";vn.scrub.value=String(dt),m!==zu&&(vn.scrub.style.setProperty("--at",m),zu=m);let _=a>.02&&a<.98?ni[i].label+" verso "+ni[s].label+", "+Math.round(a*100)+"%":ni[o].year;_!==Bu&&(vn.scrub.setAttribute("aria-valuetext",_),Bu=_),ro()}var nm=180;function Yu(r){kn=0;let e=Ts?Math.min(64,r-Ts):16.7;Ts=r;let t=jr-dt;if(Ut||Math.abs(t)>1.6||!Ui&&Math.abs(t)<6e-4){Ui=null,on(Ut?Math.round(jr):jr),Ts=0,Zr.following=!1,qr=!1;return}let n=t*(1-Math.exp(-e/78));if(Ui){let i=ju((performance.now()-Ui.t0)/nm);n=Ui.v*e+(n-Ui.v*e)*i,i>=1&&(Ui=null)}on(dt+n),kn=requestAnimationFrame(Yu)}var Zu=window.parent!==window&&!gi,Za=null;function Ju(r){if(Zu){Za=Math.max(0,Math.min(3,r));return}if(It&&ri(),Hr&&performance.now()-Hr.t<120&&Hr.v&&!kn&&(Ui={v:Hr.v,t0:performance.now()}),Hr=null,jr=Math.max(0,Math.min(3,r)),!Bt||document.hidden){kn&&(cancelAnimationFrame(kn),kn=0),Zr.following=!1,qr=!1,on(jr);return}Zr.following=!0,qr=!0,kn||(Ts=0,kn=requestAnimationFrame(Yu))}var Rs=0;function im(r,e,t){let n=Math.sign(e-r),i=Math.min(r,e),s=Math.max(r,e),a=[];for(let v=Math.floor(i)-1;v<=Math.ceil(s)+1;v++)for(let y of[v-ti,v+ti])y>i+1e-9&&y<s-1e-9&&a.push(y);let o=[r,...a.sort((v,y)=>(v-y)*n),e],c=Math.round(r),l=Math.abs(r-c)<=ti+1e-9?c:null,h=[],u=0;for(let v=0;v<o.length-1;v++){let y=Math.abs(o[v+1]-o[v]),g=(o[v]+o[v+1])/2,M=Math.round(g),b=Math.abs(g-M)<ti&&(M===e||M===l)?"s":"c",E=b==="c"?y*4600/(1-2*ti):y*Ql/ti;b==="c"&&(u+=E),y>1e-9&&h.push({da:o[v],a:o[v+1],tipo:b,ms:E,len:y})}let p=u>4600?4600/u:1,d=(1-2*ti)/(4600*p);for(let v of h)v.tipo==="c"&&(v.ms*=p);h.forEach((v,y)=>{if(v.tipo!=="s")return;let g=y>0||t?d:0,M=y<h.length-1?d:0;v.ms=Math.min(v.ms,2.9*v.len/Math.max(g,M,1e-12)),v.m0=g*v.ms/v.len,v.m1=M*v.ms/v.len});let m=h.reduce((v,y)=>v+y.ms,0),_=h[0],f=_&&(_.tipo==="c"||t)?d:0;return{totale:m,densita0:f>0?1/f:0,posizione(v){if(!(m>0))return e;let y=Math.max(0,Math.min(1,v))*m;for(let g of h){if(y<=g.ms||g===h[h.length-1]){let M=g.ms>0?Math.min(1,y/g.ms):1,w=g.tipo==="s"?(M*M*M-2*M*M+M)*g.m0+(-2*M*M*M+3*M*M)+(M*M*M-M*M)*g.m1:M;return g.da+(g.a-g.da)*w}y-=g.ms}return e}}}function Yr(r){r=Math.max(0,Math.min(3,r));let e=It?Rs:0;if(ri(),Rs=0,Ka=r,Ut||!Bt||Math.abs(r-dt)<1e-4){on(r);return}let t=dt,n=r-t,i=Math.abs(n),s=i<=1.0001&&e===0,a=Is&&i>1.0001&&e===0,o=Is&&!a?im(t,r,!s&&e!==0):null,c,l;a?(c=4600+2.5*Ql,l=0):o?(c=Math.max(360,o.totale),l=s?0:Math.max(0,Math.min(3,e*Math.sign(n)*o.densita0*c/o.totale))):(c=s?Math.max(360,i*4600):Math.min(4600,Math.max(360,i*4600)),l=s?0:Math.max(0,Math.min(3,e*c/n)));let h=b=>s?b:-2*b*b*b+3*b*b+l*(b*b*b-2*b*b+b),u=t-Math.floor(t),p=Math.ceil(Math.min(t,r)+1e-6)<Math.max(t,r)-1e-6,d=Math.sign(n),m=0,_=0,f=0;if(p){let b=d>0,E=b?Math.floor(t+1e-9):Math.ceil(t-1e-9)-1,z=b?Math.ceil(r-1e-9)-1:Math.floor(r+1e-9),P=E+Ou,D=z+Ou,Q=(P-t)*d<=0;f=Q?Math.max(tm(t-Math.floor(t)),0):1,m=Q?0:(P-t)*d,_=Math.max(m,(D-t)*d)}let v=It={start:t,to:r,dir:d,d0:Math.min(u,1-u),attraversa:p,dIn:m,dOut:_,dFine:i,apL:f},y=null,g=0,M=t;function w(){if(It!==v)return;let b=performance.now(),E=0;y!==null&&(E=Math.max(0,Math.min(b-y,110)),g+=E),y=b;let z=Math.min(1,g/c),P=o?o.posizione(h(z)):t+n*h(z);E>0&&(Rs=(P-M)/E),M=P;try{on(P)}finally{It===v&&(z<1?Ps=requestAnimationFrame(w):(Rs=0,on(r),ri()))}}ro(),Ps=requestAnimationFrame(w)}vt("scrub").addEventListener("input",r=>{ri();let e=Number(r.target.value);Ka=Math.min(3,Math.floor(e)+1),on(Ut?Math.round(e):e)});vt("scrub").addEventListener("change",r=>{let e=Number(r.target.value),t=Math.round(e);!Ut&&Math.abs(e-t)<.09&&Math.abs(e-t)>5e-4&&Yr(t)});vt("next").addEventListener("click",()=>Yr(Math.min(3,Math.floor(dt+.001)+1)));vt("previous").addEventListener("click",()=>Yr(Math.max(0,Math.ceil(dt-.001)-1)));vt("play").addEventListener("click",()=>{if(It){ri();return}dt>=2.999?(on(0),Yr(1)):Yr(Math.abs(dt-Math.round(dt))>.003&&Math.abs(Ka-dt)>.001?Ka:Math.min(3,Math.floor(dt+.002)+1))});function Ku(){Bt?.setReducedMotion(Ut),vt("motion-switch").setAttribute("aria-pressed",String(Ut))}vt("motion-switch").addEventListener("click",()=>{Ut=!Ut,ri();try{localStorage.setItem("tedeschi-3d-motion",Ut?"ridotto":"completo")}catch{}Ku(),Ut&&(Oi.settle(),Oi.show(Math.round(dt)),ac()),on(Math.round(dt),!0)});vt("recenter").addEventListener("click",()=>Bt?.reset(!0));document.addEventListener("visibilitychange",()=>{document.hidden&&It&&ri()});var Bn=document.querySelector(".scene"),Xr=vt("story"),er=Xr.querySelector(".story-copy").cloneNode(!0);er.classList.add("story-probe");er.setAttribute("aria-hidden","true");Xr.append(er);function $l(r){let e=document.createRange();e.selectNodeContents(r);let t=0;for(let n of e.getClientRects())t=Math.max(t,n.right);return t}var Qu=.8,Is=!1;function ao(){Bn.style.removeProperty("--story-top"),Bn.style.removeProperty("--zona");let r=Bn.clientHeight;if(!r)return;let e=innerWidth<=640||r>Bn.clientWidth*.82;Is=e,Bt?.setGrounding(e?Qu:0),Bn.classList.toggle("impilata",e&&innerWidth>640);let t=er.querySelector(".period"),n=er.querySelector(".era-title"),i=er.querySelector("p"),s=0,a=0;for(let m of ni)t.textContent=m.subtitle,n.textContent=m.title,i.textContent=m.body,s=Math.max(s,er.offsetHeight),a=Math.max(a,$l(t),$l(n),$l(i));let o=Bn.getBoundingClientRect().left,c=Xr.getBoundingClientRect().left;a=Math.max(a,so.getBoundingClientRect().right),a>c&&!e&&Bn.style.setProperty("--zona",Math.ceil(a-c)+"px");let h=Xr.querySelector(".story-copy").offsetTop+s,u=matchMedia("(max-width:640.98px) and (max-height:680px)").matches,p=Xr.offsetTop,d=u?8:Math.max(10,r*.025);e?Bn.style.setProperty("--story-top",Math.max(8,Math.floor(Math.max(r*.42,r-d-h)))+"px"):p+h>r-d&&Bn.style.setProperty("--story-top",Math.max(8,Math.floor(r-d-h))+"px"),Bn.dataset.fit=String(Xr.offsetTop+h<=r-d+1),Kf(),Ya="",Cs!==-1&&on(dt,!0)}new ResizeObserver(()=>ao()).observe(Bn);ao();Ku();on(Ja,!0);var $u,ed,rm=new Promise(r=>{ed=r}),Zr={ready:new Promise(r=>{$u=r}),eras:ni,following:!1,seek(r){ri(),on(Number(r)||0)},follow(r){Ju(Number(r)||0)},halt(){It&&ri()},seekIntro(r){ri(),on(0,!0),ac(),Oi.show(0)},machineRect(){return Bt?.machineRect()??null},revealed(){ed?.()},get canvas(){return Bt?.canvas},get progress(){return dt},get metrics(){return Di}},Di=null;window.tedeschiExperience=Zr;gi||cc(Zr);function sm(){let r=document.getElementById("kit");r&&r.media!=="all"&&(r.media="all");let e=r?r.sheet?Promise.resolve(!0):new Promise(i=>{r.addEventListener("load",()=>i(!0),{once:!0}),r.addEventListener("error",()=>i(!1),{once:!0}),setTimeout(()=>i(!1),15e3)}):Promise.resolve(!1),t=()=>[...document.fonts].some(i=>/new-science/.test(i.family)),n=i=>i?new Promise(s=>{let a=performance.now();(function o(){getComputedStyle(document.body).fontFamily,t()?s(!0):performance.now()-a>2e3?s(!1):requestAnimationFrame(o)})()}):!1;return e.then(n).then(i=>i&&Promise.race([Promise.all([document.fonts.load("700 40px new-science"),document.fonts.load("400 16px new-science"),document.fonts.load("700 40px new-science-extended")]).then(s=>s.every(a=>a.length>0)),new Promise(s=>setTimeout(()=>s(!1),1e4))])).catch(()=>!1)}document.fonts?.addEventListener?.("loadingdone",()=>ao());var am=sm().then(async r=>{if(r)return document.documentElement.classList.add("kit-ok"),!0;try{(await import("./pezzo-ZVLZWIN2.js")).installLettering()}catch(e){console.warn("Lettering:",e)}return document.documentElement.classList.add("kit-no"),!1}).finally(()=>ao());async function om(){performance.mark("parco:avvio"),await new Promise(requestAnimationFrame);try{$a(Math.floor(Ja));let r=Mu(ni),e=[];for(let s=0;s<ni.length;s++)s>0&&await new Promise(requestAnimationFrame),e.push(cu(As,s,mu(As,s)));performance.mark("parco:modelli");let t=await r;Bt=Tu(As,vt("view"),e,yu,t,{first:Math.round(Ja),onOrbit:lm,grounding:Is?Qu:0,forzaYaw:sc.has("impilata"),assestaDopo:window.parent!==window&&!gi}),Bt.setReducedMotion(Ut),performance.mark("parco:vista"),Di={partCounts:e.map(s=>s.parts.length),bounds:Bt.bounds.map(s=>[s.min.toArray(),s.max.toArray()]),webgl:!0},Bt.canvas.style.visibility="hidden";let[n,i]=await Promise.all([Bt.firstFinish,Bt.groundReady,Bt.warm()]);Di.finishes=n,Di.quality=Bt.quality,Di.groundContact=i,performance.mark("parco:finitura"),on(dt,!0),Bt.canvas.style.visibility="visible",vt("loading").hidden=!0,performance.mark("parco:visibile"),requestAnimationFrame(()=>Bt.prepareTransitions().catch(()=>{}).then(()=>performance.mark("parco:passaggi-pronti"))),Bt.finishReady.then(s=>{Di.finishes=s}),Promise.all([0,1,2,3].map(ec)).then(()=>requestAnimationFrame(Qf))}catch(r){console.error("Visualizzatore 3D:",r),Di={webgl:!1,error:String(r)},vt("loading").textContent="Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.",vt("recenter").hidden=!0,on(0)}await Promise.race([am,new Promise(r=>setTimeout(r,1200))]),performance.mark("parco:pronta"),$u(Di),window.parent!==window&&!gi&&await Promise.race([rm,new Promise(r=>setTimeout(r,4e3))]),Zu=!1,Bt?.assesta?.(!Ut),Za!==null&&Math.abs(Za-dt)>6e-4&&Ju(Za),$f()}var ku=!1;function lm(r,e){let t=Math.abs(r)+Math.abs(e)>.002;t!==ku&&(ku=t,!t&&document.activeElement===vt("recenter")&&vt("play").focus({preventScroll:!0}),Bn.classList.toggle("ruotata",t));let n=1+Math.min(.04,Math.abs(r)*.03+Math.abs(e)*.05);vn.backdrops.style.transform=Math.abs(r)+Math.abs(e)<1e-4?"":"translate3d("+(-r*14).toFixed(2)+"px,"+(e*8).toFixed(2)+"px,0) scale("+n.toFixed(4)+")"}om();
