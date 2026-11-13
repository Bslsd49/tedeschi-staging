/* Tedeschi, parco macchine nel tempo. Three.js r160 (MIT, vendor/THREE-LICENSE.txt). Sorgenti leggibili nella cartella superiore. */
import{a as Ul}from"./pezzo-LCEGTCBX.js";import{a as uu}from"./pezzo-6626GWO7.js";var ns={};uu(ns,{ACESFilmicToneMapping:()=>yl,Box3:()=>hn,BoxGeometry:()=>oi,BufferGeometry:()=>Mt,CanvasTexture:()=>ta,CatmullRomCurve3:()=>jr,CylinderGeometry:()=>vr,DataTexture:()=>$s,DepthTexture:()=>mr,DirectionalLight:()=>pa,DoubleSide:()=>ah,DynamicDrawUsage:()=>vh,EquirectangularReflectionMapping:()=>zr,ExtrudeGeometry:()=>Jr,Float32BufferAttribute:()=>qe,FloatType:()=>Dn,Group:()=>ti,HalfFloatType:()=>Ti,HemisphereLight:()=>da,InstancedBufferAttribute:()=>fr,InstancedBufferGeometry:()=>ma,InstancedInterleavedBuffer:()=>fa,InstancedMesh:()=>ea,InterleavedBufferAttribute:()=>Qs,LatheGeometry:()=>gr,LinearFilter:()=>cn,LinearMipmapLinearFilter:()=>sr,MathUtils:()=>_h,Matrix4:()=>Je,Mesh:()=>Kt,MeshPhysicalMaterial:()=>ca,MeshStandardMaterial:()=>es,NearestFilter:()=>kt,NoColorSpace:()=>gn,OrthographicCamera:()=>dr,PCFSoftShadowMap:()=>xl,PMREMGenerator:()=>pr,Path:()=>Ai,PerspectiveCamera:()=>Jt,PlaneGeometry:()=>ur,Quaternion:()=>vn,RGBAFormat:()=>fn,RepeatWrapping:()=>kr,SRGBColorSpace:()=>Pt,Scene:()=>Ks,ShaderMaterial:()=>Rn,ShadowMaterial:()=>la,Shape:()=>_r,SphereGeometry:()=>Kr,TextureLoader:()=>ha,TorusGeometry:()=>Qr,TubeGeometry:()=>$r,UnsignedByteType:()=>jn,UnsignedIntType:()=>Un,Vector2:()=>Pe,Vector3:()=>H,WebGLRenderTarget:()=>Tn,WebGLRenderer:()=>Wr});var sh=1,xl=2,Hn=3,ri=0,en=1,ah=2;var xi=100;var xo=204,yo=205;var oh=0,du=1,pu=2,ni=0,mu=1,fu=2,gu=3,yl=4,vu=5,_u=6;var lh=300,ir=301,rr=302,zr=303,Mo=304,ga=306,kr=1e3,Xn=1001,bo=1002,kt=1003,Dl=1004;var Fa=1005;var cn=1006,xu=1007;var sr=1008;var jn=1009;var Ml=1012,ch=1013,Un=1014,Dn=1015,Ti=1016,hh=1017,uh=1018,Si=1020;var fn=1023;var wi=1026,ar=1027;var dh=1029;var ph=1031,mh=1033,Ba=33776,za=33777,ka=33778,Ga=33779,Nl=35840,Ol=35841,Fl=35842,Bl=35843,fh=36196,zl=37492,kl=37496,Gl=37808,Vl=37809,Hl=37810,Wl=37811,Xl=37812,jl=37813,ql=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,Ql=37819,$l=37820,ec=37821,Va=36492,tc=36494,nc=36495;var ic=36284,rc=36285,sc=36286;var Ns=2300,Os=2301,Ha=2302,ac=2400,oc=2401,lc=2402;var gh=3e3,Ei=3001;var gn="",Pt="srgb",qn="srgb-linear",bl="display-p3",va="display-p3-linear",Fs="linear",pt="srgb",Bs="rec709",zs="p3";var Oi=7680;var So=35044,vh=35048;var cc="300 es",wo=1035,or=2e3,ks=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,er=Math.PI/180,Gr=180/Math.PI;function Nn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ht[255&r]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[255&e]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[63&t|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[255&n]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function Eo(r,e){return(r%e+e)%e}function Ur(r,e,t){return(1-t)*r+t*e}function To(r){return(r&r-1)==0&&r!==0}function Gs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var _h={DEG2RAD:er,RAD2DEG:Gr,generateUUID:Nn,clamp:Lt,euclideanModulo:Eo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Ur,damp:function(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Eo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*er},radToDeg:function(r){return r*Gr},isPowerOfTwo:To,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Gs,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:ot,denormalize:In},Pe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],x=i[6],_=i[1],v=i[4],M=i[7],w=i[2],b=i[5],T=i[8];return s[0]=a*g+o*_+c*w,s[3]=a*m+o*v+c*b,s[6]=a*x+o*M+c*T,s[1]=l*g+h*_+u*w,s[4]=l*m+h*v+u*b,s[7]=l*x+h*M+u*T,s[2]=d*g+p*_+f*w,s[5]=d*m+p*v+f*b,s[8]=d*x+p*M+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new et;function xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yu(){let r=Vr("canvas");return r.style.display="block",r}var uc={};function Dr(r){r in uc||(uc[r]=!0,console.warn(r))}var dc=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pc=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[qn]:{transfer:Fs,primaries:Bs,toReference:r=>r,fromReference:r=>r},[Pt]:{transfer:pt,primaries:Bs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[va]:{transfer:Fs,primaries:zs,toReference:r=>r.applyMatrix3(pc),fromReference:r=>r.applyMatrix3(dc)},[bl]:{transfer:pt,primaries:zs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(pc),fromReference:r=>r.applyMatrix3(dc).convertLinearToSRGB()}},Mu=new Set([qn,va]),lt={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Mu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=ss[e].toReference;return(0,ss[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ss[r].primaries},getTransfer:function(r){return r===gn?Fs:ss[r].transfer}};function tr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Xa(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fi,Vs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=e.width,Fi.height=e.height;let n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*tr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*tr(t[n]/255)):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bu=0,Hs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ja(i[a].image)):s.push(ja(i[a]))}else s=ja(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,tn=class r extends si{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Nn(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?Pt:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Ei:gh}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?Pt:gn}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=lh,tn.DEFAULT_ANISOTROPY=1;var Rt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],g=c[2],m=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(p+1)/2,w=(x+1)/2,b=(h+d)/4,T=(u+g)/4,k=(f+m)/4;return v>M&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=T/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=k/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=k/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((l+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ei?Pt:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ws=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||c!==d||l!==p||h!==f){let m=1-o,x=c*d+l*p+h*f+u*g,_=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let w=Math.sqrt(v),b=Math.atan2(w,x*_);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w}let M=o*_;if(c=c*m+d*M,l=l*m+p*M,h=h*m+f*M,u=u*m+g*M,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new H,mc=new vn,hn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),os.subVectors(this.max,Tr),Bi.subVectors(e.a,Tr),zi.subVectors(e.b,Tr),ki.subVectors(e.c,Tr),Jn.subVectors(zi,Bi),Kn.subVectors(ki,zi),mi.subVectors(Bi,ki);let t=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!!Ya(t,Bi,zi,ki,os)&&(t=[1,0,0,0,1,0,0,0,1],!!Ya(t,Bi,zi,ki,os)&&(ls.crossVectors(Jn,Kn),t=[ls.x,ls.y,ls.z],Ya(t,Bi,zi,ki,os)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(bn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bn=[new H,new H,new H,new H,new H,new H,new H,new H],bn=new H,as=new hn,Bi=new H,zi=new H,ki=new H,Jn=new H,Kn=new H,mi=new H,Tr=new H,os=new H,ls=new H,fi=new H;function Ya(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fi.fromArray(r,s);let o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wu=new hn,Ar=new H,Za=new H,An=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Za)),this.expandByPoint(Ar.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new H,Ja=new H,cs=new H,Qn=new H,Ka=new H,hs=new H,Qa=new H,lr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ja.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Ja);let s=.5*e.distanceTo(t),a=-this.direction.dot(cs),o=Qn.dot(this.direction),c=-Qn.dot(cs),l=Qn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ja).addScaledVector(cs,d),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){Ka.subVectors(t,e),hs.subVectors(n,e),Qa.crossVectors(Ka,hs);let a,o=this.direction.dot(Qa);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Qn.subVectors(this.origin,e);let c=a*this.direction.dot(hs.crossVectors(Qn,hs));if(c<0)return null;let l=a*this.direction.dot(Ka.cross(Qn));if(l<0||c+l>o)return null;let h=-a*Qn.dot(Qa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=f,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Tu)}lookAt(e,t,n){let i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),$n.crossVectors(n,on),$n.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),$n.crossVectors(n,on)),$n.normalize(),us.crossVectors(on,$n),i[0]=$n.x,i[4]=us.x,i[8]=on.x,i[1]=$n.y,i[5]=us.y,i[9]=on.y,i[2]=$n.z,i[6]=us.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],x=n[14],_=n[3],v=n[7],M=n[11],w=n[15],b=i[0],T=i[4],k=i[8],P=i[12],F=i[1],ie=i[5],C=i[9],Z=i[13],X=i[2],$=i[6],me=i[10],le=i[14],ee=i[3],he=i[7],L=i[11],J=i[15];return s[0]=a*b+o*F+c*X+l*ee,s[4]=a*T+o*ie+c*$+l*he,s[8]=a*k+o*C+c*me+l*L,s[12]=a*P+o*Z+c*le+l*J,s[1]=h*b+u*F+d*X+p*ee,s[5]=h*T+u*ie+d*$+p*he,s[9]=h*k+u*C+d*me+p*L,s[13]=h*P+u*Z+d*le+p*J,s[2]=f*b+g*F+m*X+x*ee,s[6]=f*T+g*ie+m*$+x*he,s[10]=f*k+g*C+m*me+x*L,s[14]=f*P+g*Z+m*le+x*J,s[3]=_*b+v*F+M*X+w*ee,s[7]=_*T+v*ie+M*$+w*he,s[11]=_*k+v*C+M*me+w*L,s[15]=_*P+v*Z+M*le+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],x=e[15],_=u*m*l-g*d*l+g*c*p-o*m*p-u*c*x+o*d*x,v=f*d*l-h*m*l-f*c*p+a*m*p+h*c*x-a*d*x,M=h*g*l-f*u*l+f*o*p-a*g*p-h*o*x+a*u*x,w=f*u*c-h*g*c-f*o*d+a*g*d+h*o*m-a*u*m,b=t*_+n*v+i*M+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=_*T,e[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*x-n*d*x)*T,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*x+n*c*x)*T,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*T,e[4]=v*T,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*x+t*d*x)*T,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*x-t*c*x)*T,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*T,e[8]=M*T,e[9]=(f*u*s-h*g*s-f*n*p+t*g*p+h*n*x-t*u*x)*T,e[10]=(a*g*s-f*o*s+f*n*l-t*g*l-a*n*x+t*o*x)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*T,e[12]=w*T,e[13]=(h*g*i-f*u*i+f*n*d-t*g*d-h*n*m+t*u*m)*T,e[14]=(f*o*i-a*g*i-f*n*c+t*g*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,g=a*h,m=a*u,x=o*u,_=c*l,v=c*h,M=c*u,w=n.x,b=n.y,T=n.z;return i[0]=(1-(g+x))*w,i[1]=(p+M)*w,i[2]=(f-v)*w,i[3]=0,i[4]=(p-M)*b,i[5]=(1-(d+x))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(f+v)*T,i[9]=(m-_)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);let c=1/s,l=1/a,h=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=l,Sn.elements[5]*=l,Sn.elements[6]*=l,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===or)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==ks)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,p=(n+i)*h,f,g;if(o===or)f=(a+s)*u,g=-2*u;else{if(o!==ks)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new H,Sn=new Je,Eu=new H(0,0,0),Tu=new H(1,1,1),$n=new H,us=new H,on=new H,fc=new Je,gc=new vn,Xs=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xs.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Au=0,vc=new H,Vi=new vn,kn=new Je,ds=new H,Rr=new H,Ru=new H,Cu=new vn,_c=new H(1,0,0),xc=new H(0,1,0),yc=new H(0,0,1),Pu={type:"added"},Lu={type:"removed"},Qt=class r extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new Xs,n=new vn,i=new H(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new et}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Rr,ds,this.up):kn.lookAt(ds,Rr,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(kn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Qt.DEFAULT_UP=new H(0,1,0),Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new H,Gn=new H,$a=new H,Vn=new H,Hi=new H,Wi=new H,Mc=new H,eo=new H,to=new H,no=new H,ps=!1,bi=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),Gn.subVectors(n,t),$a.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Gn),c=wn.dot($a),l=Gn.dot(Gn),h=Gn.dot($a),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,s,a,o,c){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Gn.subVectors(e,t),wn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),.5*wn.cross(Gn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hi.subVectors(i,n),Wi.subVectors(s,n),eo.subVectors(e,n);let c=Hi.dot(eo),l=Wi.dot(eo);if(c<=0&&l<=0)return t.copy(n);to.subVectors(e,i);let h=Hi.dot(to),u=Wi.dot(to);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hi,a);no.subVectors(e,s);let p=Hi.dot(no),f=Wi.dot(no);if(f>=0&&p<=f)return t.copy(s);let g=p*l-c*f;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Wi,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Mc.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(Mc,o);let x=1/(m+g+d);return a=g*x,o=d*x,t.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ms={h:0,s:0,l:0};function io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Eo(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=io(a,s,e+1/3),this.g=io(a,s,e),this.b=io(a,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return lt.fromWorkingColorSpace(Wt.copy(this),e),65536*Math.round(Lt(255*Wt.r,0,255))+256*Math.round(Lt(255*Wt.g,0,255))+Math.round(Lt(255*Wt.b,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,s=Wt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Pt){lt.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ms);let n=Ur(ei.h,ms.h,t),i=Ur(ei.s,ms.s,t),s=Ur(ei.l,ms.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Qe;Qe.NAMES=yh;var Iu=0,ai=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=1,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qs=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rm=Uu();function Uu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(8388608&l)==0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var At=new H,fs=new Pe,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}};var Ys=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qe=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Du=0,mn=new Je,ro=new Qt,Xi=new H,ln=new hn,Cr=new hn,Ft=new H,Mt=class r extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Zs:Ys)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new H,1/0);if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,Cr.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,Cr.max),ln.expandByPoint(Ft)):(ln.expandByPoint(Cr.min),ln.expandByPoint(Cr.max))}ln.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),Ft.add(Xi)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let F=0;F<o;F++)l[F]=new H,h[F]=new H;let u=new H,d=new H,p=new H,f=new Pe,g=new Pe,m=new Pe,x=new H,_=new H;function v(F,ie,C){u.fromArray(i,3*F),d.fromArray(i,3*ie),p.fromArray(i,3*C),f.fromArray(a,2*F),g.fromArray(a,2*ie),m.fromArray(a,2*C),d.sub(u),p.sub(u),g.sub(f),m.sub(f);let Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Z),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(Z),l[F].add(x),l[ie].add(x),l[C].add(x),h[F].add(_),h[ie].add(_),h[C].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let F=0,ie=M.length;F<ie;++F){let C=M[F],Z=C.start;for(let X=Z,$=Z+C.count;X<$;X+=3)v(n[X+0],n[X+1],n[X+2])}let w=new H,b=new H,T=new H,k=new H;function P(F){T.fromArray(s,3*F),k.copy(T);let ie=l[F];w.copy(ie),w.sub(T.multiplyScalar(T.dot(ie))).normalize(),b.crossVectors(k,ie);let C=b.dot(h[F])<0?-1:1;c[4*F]=w.x,c[4*F+1]=w.y,c[4*F+2]=w.z,c[4*F+3]=C}for(let F=0,ie=M.length;F<ie;++F){let C=M[F],Z=C.start;for(let X=Z,$=Z+C.count;X<$;X+=3)P(n[X+0]),P(n[X+1]),P(n[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new H,s=new H,a=new H,o=new H,c=new H,l=new H,h=new H,u=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let g=0,m=c.length;g<m;g++){p=o.isInterleavedBufferAttribute?c[g]*o.data.stride+o.offset:c[g]*h;for(let x=0;x<h;x++)d[f++]=l[p++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bc=new Je,gi=new lr,gs=new An,Sc=new H,ji=new H,qi=new H,Yi=new H,so=new H,vs=new H,_s=new Pe,xs=new Pe,ys=new Pe,wc=new H,Ec=new H,Tc=new H,Ms=new H,bs=new H,Kt=class extends Qt{constructor(e=new Mt,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(so.fromBufferAttribute(u,e),a?vs.addScaledVector(so,h):vs.addScaledVector(so.sub(t),h))}t.add(vs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),gs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(gs,Sc)===null||gi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))return;bc.copy(s).invert(),gi.copy(e.ray).applyMatrix4(bc),n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,gi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],x=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)i=Ss(this,x,e,n,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=Ss(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],x=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)i=Ss(this,x,e,n,l,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);f<g;f+=3)i=Ss(this,a,e,n,l,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function Ss(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ji),r.getVertexPosition(c,qi),r.getVertexPosition(l,Yi);let h=(function(u,d,p,f,g,m,x,_){let v;if(v=d.side===en?f.intersectTriangle(x,m,g,!0,_):f.intersectTriangle(g,m,x,d.side===ri,_),v===null)return null;bs.copy(_),bs.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(bs);return M<p.near||M>p.far?null:{distance:M,point:bs.clone(),object:u}})(r,e,t,n,ji,qi,Yi,Ms);if(h){i&&(_s.fromBufferAttribute(i,o),xs.fromBufferAttribute(i,c),ys.fromBufferAttribute(i,l),h.uv=bi.getInterpolation(Ms,ji,qi,Yi,_s,xs,ys,new Pe)),s&&(_s.fromBufferAttribute(s,o),xs.fromBufferAttribute(s,c),ys.fromBufferAttribute(s,l),h.uv1=bi.getInterpolation(Ms,ji,qi,Yi,_s,xs,ys,new Pe),h.uv2=h.uv1),a&&(wc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,c),Tc.fromBufferAttribute(a,l),h.normal=bi.getInterpolation(Ms,ji,qi,Yi,wc,Ec,Tc,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};bi.getNormal(ji,qi,Yi,u.normal),h.face=u}return h}var oi=class r extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(g,m,x,_,v,M,w,b,T,k,P){let F=M/T,ie=w/k,C=M/2,Z=w/2,X=b/2,$=T+1,me=k+1,le=0,ee=0,he=new H;for(let L=0;L<me;L++){let J=L*ie-Z;for(let Se=0;Se<$;Se++){let S=Se*F-C;he[g]=S*_,he[m]=J*v,he[x]=X,l.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[x]=b>0?1:-1,h.push(he.x,he.y,he.z),u.push(Se/T),u.push(1-L/k),le+=1}}for(let L=0;L<k;L++)for(let J=0;J<T;J++){let Se=d+J+$*L,S=d+J+$*(L+1),E=d+(J+1)+$*(L+1),O=d+(J+1)+$*L;c.push(Se,S,O),c.push(S,E,O),ee+=6}o.addGroup(p,ee,P),p+=ee,d+=le}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(r){let e={};for(let t=0;t<r.length;t++){let n=cr(r[t]);for(let i in n)e[i]=n[i]}return e}function Mh(r){return r.getRenderTarget()===null?r.outputColorSpace:lt.workingColorSpace}var Nu={clone:cr,merge:Zt},Rn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hr=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends Hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Gr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*er*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Gr*Math.atan(Math.tan(.5*er*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*er*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,Co=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Jt(Zi,1,e,t);i.layers=this.layers,this.add(i);let s=new Jt(Zi,1,e,t);s.layers=this.layers,this.add(s);let a=new Jt(Zi,1,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Zi,1,e,t);o.layers=this.layers,this.add(o);let c=new Jt(Zi,1,e,t);c.layers=this.layers,this.add(c);let l=new Jt(Zi,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==ks)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Js=class extends tn{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ir,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Po=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?Pt:gn),this.texture=new Js(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oi(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:0});s.uniforms.tEquirect.value=t;let a=new Kt(i,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=cn),new Co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ao=new H,Ou=new H,Fu=new et,Wn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ao.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fu.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new An,ws=new H,hr=class{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],g=i[10],m=i[11],x=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,d-l,m-p,M-x).normalize(),n[1].setComponents(c+s,d+l,m+p,M+x).normalize(),n[2].setComponents(c+a,d+h,m+f,M+_).normalize(),n[3].setComponents(c-a,d-h,m-f,M-_).normalize(),n[4].setComponents(c-o,d-u,m-g,M-v).normalize(),t===or)n[5].setComponents(c+o,d+u,m+g,M+v).normalize();else{if(t!==ks)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bu(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let p=0,f=d.length;p<f;p++){let g=d[p];t?r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var ur=class r extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],g=[],m=[];for(let x=0;x<h;x++){let _=x*d-a;for(let v=0;v<l;v++){let M=v*u-s;f.push(M,-_,0),g.push(0,0,1),m.push(v/o),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let v=_+l*x,M=_+l*(x+1),w=_+1+l*(x+1),b=_+1+l*x;p.push(v,M,b),p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},De={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ln={basic:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([De.points,De.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([De.common,De.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([De.sprite,De.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Zt([De.common,De.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Zt([De.lights,De.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ln.physical={uniforms:Zt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Es={r:0,b:0,g:0};function zu(r,e,t,n,i,s,a){let o=new Qe(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(g,m){g.getRGB(Es,Mh(r)),n.buffers.color.setClear(Es.r,Es.g,Es.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let x=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?f(o,h):_&&_.isColor&&(f(_,1),x=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ga)?(l===void 0&&(l=new Kt(new oi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:cr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=lt.getTransfer(_.colorSpace)!==pt,u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Kt(new ur(2,2),new Rn({name:"BackgroundMaterial",uniforms:cr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}}}function ku(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function u(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function d(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function p(w){let b=[],T=[],k=[];for(let P=0;P<i;P++)b[P]=0,T[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:T,attributeDivisors:k,object:w,attributes:{},index:null}}function f(){let w=l.newAttributes;for(let b=0,T=w.length;b<T;b++)w[b]=0}function g(w){m(w,0)}function m(w,b){let T=l.newAttributes,k=l.enabledAttributes,P=l.attributeDivisors;T[w]=1,k[w]===0&&(r.enableVertexAttribArray(w),k[w]=1),P[w]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,b),P[w]=b)}function x(){let w=l.newAttributes,b=l.enabledAttributes;for(let T=0,k=b.length;T<k;T++)b[T]!==w[T]&&(r.disableVertexAttribArray(T),b[T]=0)}function _(w,b,T,k,P,F,ie){ie===!0?r.vertexAttribIPointer(w,b,T,P,F):r.vertexAttribPointer(w,b,T,k,P,F)}function v(){M(),h=!0,l!==c&&(l=c,u(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(w,b,T,k,P){let F=!1;if(a){let ie=(function(C,Z,X){let $=X.wireframe===!0,me=o[C.id];me===void 0&&(me={},o[C.id]=me);let le=me[Z.id];le===void 0&&(le={},me[Z.id]=le);let ee=le[$];return ee===void 0&&(ee=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),le[$]=ee),ee})(k,T,b);l!==ie&&(l=ie,u(l.object)),F=(function(C,Z,X,$){let me=l.attributes,le=Z.attributes,ee=0,he=X.getAttributes();for(let L in he)if(he[L].location>=0){let J=me[L],Se=le[L];if(Se===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),J===void 0||J.attribute!==Se||Se&&J.data!==Se.data)return!0;ee++}return l.attributesNum!==ee||l.index!==$})(w,k,T,P),F&&(function(C,Z,X,$){let me={},le=Z.attributes,ee=0,he=X.getAttributes();for(let L in he)if(he[L].location>=0){let J=le[L];J===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));let Se={};Se.attribute=J,J&&J.data&&(Se.data=J.data),me[L]=Se,ee++}l.attributes=me,l.attributesNum=ee,l.index=$})(w,k,T,P)}else{let ie=b.wireframe===!0;l.geometry===k.id&&l.program===T.id&&l.wireframe===ie||(l.geometry=k.id,l.program=T.id,l.wireframe=ie,F=!0)}P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,(function(ie,C,Z,X){if(n.isWebGL2===!1&&(ie.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let $=X.attributes,me=Z.getAttributes(),le=C.defaultAttributeValues;for(let ee in me){let he=me[ee];if(he.location>=0){let L=$[ee];if(L===void 0&&(ee==="instanceMatrix"&&ie.instanceMatrix&&(L=ie.instanceMatrix),ee==="instanceColor"&&ie.instanceColor&&(L=ie.instanceColor)),L!==void 0){let J=L.normalized,Se=L.itemSize,S=t.get(L);if(S===void 0)continue;let E=S.buffer,O=S.type,B=S.bytesPerElement,I=n.isWebGL2===!0&&(O===r.INT||O===r.UNSIGNED_INT||L.gpuType===ch);if(L.isInterleavedBufferAttribute){let j=L.data,W=j.stride,K=L.offset;if(j.isInstancedInterleavedBuffer){for(let re=0;re<he.locationSize;re++)m(he.location+re,j.meshPerAttribute);ie.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<he.locationSize;re++)g(he.location+re);r.bindBuffer(r.ARRAY_BUFFER,E);for(let re=0;re<he.locationSize;re++)_(he.location+re,Se/he.locationSize,O,J,W*B,(K+Se/he.locationSize*re)*B,I)}else{if(L.isInstancedBufferAttribute){for(let j=0;j<he.locationSize;j++)m(he.location+j,L.meshPerAttribute);ie.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let j=0;j<he.locationSize;j++)g(he.location+j);r.bindBuffer(r.ARRAY_BUFFER,E);for(let j=0;j<he.locationSize;j++)_(he.location+j,Se/he.locationSize,O,J,Se*B,Se/he.locationSize*j*B,I)}}else if(le!==void 0){let J=le[ee];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(he.location,J);break;case 3:r.vertexAttrib3fv(he.location,J);break;case 4:r.vertexAttrib4fv(he.location,J);break;default:r.vertexAttrib1fv(he.location,J)}}}}x()})(w,b,T,k),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let w in o){let b=o[w];for(let T in b){let k=b[T];for(let P in k)d(k[P].object),delete k[P];delete b[T]}delete o[w]}},releaseStatesOfGeometry:function(w){if(o[w.id]===void 0)return;let b=o[w.id];for(let T in b){let k=b[T];for(let P in k)d(k[P].object),delete k[P];delete b[T]}delete o[w.id]},releaseStatesOfProgram:function(w){for(let b in o){let T=o[b];if(T[w.id]===void 0)continue;let k=T[w.id];for(let P in k)d(k[P].object),delete k[P];delete T[w.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:x}}function Gu(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,s,1)}}}function Vu(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:_&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Hu(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Wn,o=new et,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=c.value,p!==!0||g===null){let m=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==f;++_,v+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let x=s?0:n,_=4*x,v=m.clippingState||null;c.value=v,v=l(p,u,_,d);for(let M=0;M!==_;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function Wu(r){let e=new WeakMap;function t(i,s){return s===zr?i.mapping=ir:s===Mo&&(i.mapping=rr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===zr||s===Mo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Po(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var dr=class extends Hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=[.125,.215,.35,.446,.526,.582],Pr=20,oo=new dr,Rc=new Qe,lo=null,co=0,ho=0,_i=(1+Math.sqrt(5))/2,Ji=1/_i,Cc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,_i,Ji),new H(0,_i,-Ji),new H(Ji,0,_i),new H(-Ji,0,_i),new H(_i,Ji,0),new H(-_i,Ji,0)],pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,ho),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ti,format:fn,colorSpace:qn,depthBuffer:!1},i=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Ac.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>a-4?f=Ac[d-a+4-1]:d===0&&(f=0),l.push(f);let g=1/(p-2),m=-g,x=1+g,_=[m,m,x,m,x,x,m,m,x,x,m,x],v=6,M=6,w=3,b=2,T=1,k=new Float32Array(w*M*v),P=new Float32Array(b*M*v),F=new Float32Array(T*M*v);for(let C=0;C<v;C++){let Z=C%3*2/3-1,X=C>2?0:-1,$=[Z,X,0,Z+2/3,X,0,Z+2/3,X+1,0,Z,X,0,Z+2/3,X+1,0,Z,X+1,0];k.set($,w*M*C),P.set(_,b*M*C);let me=[C,C,C,C,C,C];F.set(me,T*M*C)}let ie=new Mt;ie.setAttribute("position",new nn(k,w)),ie.setAttribute("uv",new nn(P,b)),ie.setAttribute("faceIndex",new nn(F,T)),o.push(ie),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Pr),h=new H(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){let s=new Jt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Rc),c.toneMapping=ni,c.autoClear=!1;let u=new qs({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),d=new Kt(new oi,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Rc),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let x=this._cubeSize;Ts(i,m*x,g>2?x:0,x,x),c.setRenderTarget(i),p&&c.render(d,s),c.render(e,s)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Ts(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cc[(i-1)%Cc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Kt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):Pr;g>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],x=0;for(let M=0;M<Pr;++M){let w=M/f,b=Math.exp(-w*w/2);m.push(b),M===0?x+=b:M<g&&(x+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let v=this._sizeLods[i];Ts(t,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),c.setRenderTarget(t),c.render(h,oo)}};function Pc(r,e,t){let n=new Tn(r,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Lc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ic(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function Xu(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===zr||s===Mo,o=s===ir||s===rr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new pr(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&(function(l){let h=0,u=6;for(let d=0;d<u;d++)l[d]!==void 0&&h++;return h===u})(c)){t===null&&(t=new pr(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ju(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qu(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let d=l.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,x=g.length;m<x;m+=3){let _=g[m+0],v=g[m+1],M=g[m+2];l.push(_,v,v,M,M,_)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,x=g.length/3-1;m<x;m+=3){let _=m+0,v=m+1,M=m+2;l.push(_,v,v,M,M,_)}}}let p=new(xh(l)?Zs:Ys)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Yu(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(c[d]/o,l[d]);else{u.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,s,1)}}}function Zu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ju(r,e){return r[0]-e[0]}function Ku(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qu(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0,f=s.get(l);if(f===void 0||f.count!==p){let Z=function(){ie.dispose(),s.delete(l),l.removeEventListener("dispose",Z)};f!==void 0&&f.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],T=0;x===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let k=l.attributes.position.count*T,P=1;k>e.maxTextureSize&&(P=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let F=new Float32Array(k*P*4*p),ie=new Ws(F,k,P,p);ie.type=Dn,ie.needsUpdate=!0;let C=4*T;for(let X=0;X<p;X++){let $=M[X],me=w[X],le=b[X],ee=k*P*4*X;for(let he=0;he<$.count;he++){let L=he*C;x===!0&&(a.fromBufferAttribute($,he),F[ee+L+0]=a.x,F[ee+L+1]=a.y,F[ee+L+2]=a.z,F[ee+L+3]=0),_===!0&&(a.fromBufferAttribute(me,he),F[ee+L+4]=a.x,F[ee+L+5]=a.y,F[ee+L+6]=a.z,F[ee+L+7]=0),v===!0&&(a.fromBufferAttribute(le,he),F[ee+L+8]=a.x,F[ee+L+9]=a.y,F[ee+L+10]=a.z,F[ee+L+11]=le.itemSize===4?a.w:1)}}f={count:p,texture:ie,size:new Pe(k,P)},s.set(l,f),l.addEventListener("dispose",Z)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];let m=l.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,p=n[l.id];if(p===void 0||p.length!==d){p=[];for(let _=0;_<d;_++)p[_]=[_,0];n[l.id]=p}for(let _=0;_<d;_++){let v=p[_];v[0]=_,v[1]=u[_]}p.sort(Ku);for(let _=0;_<8;_++)_<d&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Ju);let f=l.morphAttributes.position,g=l.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let v=o[_],M=v[0],w=v[1];M!==Number.MAX_SAFE_INTEGER&&w?(f&&l.getAttribute("morphTarget"+_)!==f[M]&&l.setAttribute("morphTarget"+_,f[M]),g&&l.getAttribute("morphNormal"+_)!==g[M]&&l.setAttribute("morphNormal"+_,g[M]),i[_]=w,m+=w):(f&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),g&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),i[_]=0)}let x=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function $u(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var mr=class extends tn{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:wi)!==wi&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Un),n===void 0&&h===ar&&(n=Si),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sh=new tn,wh=new mr(1,1);wh.compareFunction=515;var Eh=new Ws,Th=new Ro,Ah=new Js,Uc=[],Dc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),Fc=new Float32Array(4);function yr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Uc[i];if(s===void 0&&(s=new Float32Array(i),Uc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _a(r,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ed(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function td(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function nd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function id(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function rd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Fc.set(n),r.uniformMatrix2fv(this.addr,!1,Fc),Ut(t,n)}}function sd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Oc.set(n),r.uniformMatrix3fv(this.addr,!1,Oc),Ut(t,n)}}function ad(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Nc.set(n),r.uniformMatrix4fv(this.addr,!1,Nc),Ut(t,n)}}function od(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ld(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function cd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function hd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function ud(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function fd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?wh:Sh;t.setTexture2D(e||s,i)}function gd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Th,i)}function vd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ah,i)}function _d(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eh,i)}function xd(r,e){r.uniform1fv(this.addr,e)}function yd(r,e){let t=yr(e,this.size,2);r.uniform2fv(this.addr,t)}function Md(r,e){let t=yr(e,this.size,3);r.uniform3fv(this.addr,t)}function bd(r,e){let t=yr(e,this.size,4);r.uniform4fv(this.addr,t)}function Sd(r,e){let t=yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wd(r,e){let t=yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ed(r,e){let t=yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Td(r,e){r.uniform1iv(this.addr,e)}function Ad(r,e){r.uniform2iv(this.addr,e)}function Rd(r,e){r.uniform3iv(this.addr,e)}function Cd(r,e){r.uniform4iv(this.addr,e)}function Pd(r,e){r.uniform1uiv(this.addr,e)}function Ld(r,e){r.uniform2uiv(this.addr,e)}function Id(r,e){r.uniform3uiv(this.addr,e)}function Ud(r,e){r.uniform4uiv(this.addr,e)}function Dd(r,e,t){let n=this.cache,i=e.length,s=_a(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sh,s[a])}function Nd(r,e,t){let n=this.cache,i=e.length,s=_a(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Th,s[a])}function Od(r,e,t){let n=this.cache,i=e.length,s=_a(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ah,s[a])}function Fd(r,e,t){let n=this.cache,i=e.length,s=_a(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Eh,s[a])}var Lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return ed;case 35664:return td;case 35665:return nd;case 35666:return id;case 35674:return rd;case 35675:return sd;case 35676:return ad;case 5124:case 35670:return od;case 35667:case 35671:return ld;case 35668:case 35672:return cd;case 35669:case 35673:return hd;case 5125:return ud;case 36294:return dd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return gd;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return _d}})(t.type)}},Io=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return xd;case 35664:return yd;case 35665:return Md;case 35666:return bd;case 35674:return Sd;case 35675:return wd;case 35676:return Ed;case 5124:case 35670:return Td;case 35667:case 35671:return Ad;case 35668:case 35672:return Rd;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Ld;case 36295:return Id;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Od;case 36289:case 36303:case 36311:case 36292:return Fd}})(t.type)}},Uo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},uo=/(\w+)(\])?(\[|\.)?/g;function Bc(r,e){r.seq.push(e),r.map[e.id]=e}function Bd(r,e,t){let n=r.name,i=n.length;for(uo.lastIndex=0;;){let s=uo.exec(n),a=uo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Bc(t,l===void 0?new Lo(o,r,e):new Io(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Uo(o),Bc(t,h)),t=h}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Bd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function zc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var zd=37297,kd=0;function kc(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Gd(r,e){let t=(function(n){let i=lt.getPrimaries(lt.workingColorSpace),s=lt.getPrimaries(n),a;switch(i===s?a="":i===zs&&s===Bs?a="LinearDisplayP3ToLinearSRGB":i===Bs&&s===zs&&(a="LinearSRGBToLinearDisplayP3"),n){case qn:case va:return[a,"LinearTransferOETF"];case Pt:case bl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vd(r,e){let t;switch(e){case mu:t="Linear";break;case fu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case yl:t="ACESFilmic";break;case _u:t="AgX";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ki(r){return r!==""}function Gc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(r){return r.replace(Hd,Xd)}var Wd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xd(r,e){let t=Ke[e];if(t===void 0){let n=Wd.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Do(t)}var jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(r){return r.replace(jd,qd)}function qd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yd(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(C){let Z="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===sh?Z="SHADOWMAP_TYPE_PCF":C.shadowMapType===xl?Z="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===Hn&&(Z="SHADOWMAP_TYPE_VSM"),Z})(t),l=(function(C){let Z="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ir:case rr:Z="ENVMAP_TYPE_CUBE";break;case ga:Z="ENVMAP_TYPE_CUBE_UV"}return Z})(t),h=(function(C){let Z="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===rr&&(Z="ENVMAP_MODE_REFRACTION"),Z})(t),u=(function(C){let Z="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case oh:Z="ENVMAP_BLENDING_MULTIPLY";break;case du:Z="ENVMAP_BLENDING_MIX";break;case pu:Z="ENVMAP_BLENDING_ADD"}return Z})(t),d=(function(C){let Z=C.envMapCubeUVHeight;if(Z===null)return null;let X=Math.log2(Z)-2,$=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:$,maxMip:X}})(t),p=t.isWebGL2?"":(function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)})(t),f=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)})(t),g=(function(C){let Z=[];for(let X in C){let $=C[X];$!==!1&&Z.push("#define "+X+" "+$)}return Z.join(`
`)})(s),m=i.createProgram(),x,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),x.length>0&&(x+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),_.length>0&&(_+=`
`)):(x=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),_=[p,Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ni?Vd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Gd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Do(a),a=Gc(a,t),a=Vc(a,t),o=Do(o),o=Gc(o,t),o=Vc(o,t),a=Hc(a),o=Hc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+x+a,w=v+_+o,b=zc(i,i.VERTEX_SHADER,M),T=zc(i,i.FRAGMENT_SHADER,w);function k(C){if(r.debug.checkShaderErrors){let Z=i.getProgramInfoLog(m).trim(),X=i.getShaderInfoLog(b).trim(),$=i.getShaderInfoLog(T).trim(),me=!0,le=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,T);else{let ee=kc(i,b,"vertex"),he=kc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+ee+`
`+he)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):X!==""&&$!==""||(le=!1);le&&(C.diagnostics={runnable:me,programLog:Z,vertexShader:{log:X,prefix:x},fragmentShader:{log:$,prefix:_}})}i.deleteShader(b),i.deleteShader(T),P=new nr(i,m),F=(function(Z,X){let $={},me=Z.getProgramParameter(X,Z.ACTIVE_ATTRIBUTES);for(let le=0;le<me;le++){let ee=Z.getActiveAttrib(X,le),he=ee.name,L=1;ee.type===Z.FLOAT_MAT2&&(L=2),ee.type===Z.FLOAT_MAT3&&(L=3),ee.type===Z.FLOAT_MAT4&&(L=4),$[he]={type:ee.type,location:Z.getAttribLocation(X,he),locationSize:L}}return $})(i,m)}let P,F;i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return P===void 0&&k(this),P},this.getAttributes=function(){return F===void 0&&k(this),F};let ie=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ie===!1&&(ie=i.getProgramParameter(m,zd)),ie},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}var Zd=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oo(e),t.set(e,n)),n}},Oo=class{constructor(e){this.id=Zd++,this.code=e,this.usedTimes=0}};function Jd(r,e,t,n,i,s,a){let o=new js,c=new No,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,x,_,v,M){let w=v.fog,b=M.geometry,T=m.isMeshStandardMaterial?v.environment:null,k=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),P=k&&k.mapping===ga?k.image.height:null,F=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let ie=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,C=ie!==void 0?ie.length:0,Z,X,$,me,le=0;if(b.morphAttributes.position!==void 0&&(le=1),b.morphAttributes.normal!==void 0&&(le=2),b.morphAttributes.color!==void 0&&(le=3),F){let st=Ln[F];Z=st.vertexShader,X=st.fragmentShader}else Z=m.vertexShader,X=m.fragmentShader,c.update(m),$=c.getVertexShaderID(m),me=c.getFragmentShaderID(m);let ee=r.getRenderTarget(),he=M.isInstancedMesh===!0,L=M.isBatchedMesh===!0,J=!!m.map,Se=!!m.matcap,S=!!k,E=!!m.aoMap,O=!!m.lightMap,B=!!m.bumpMap,I=!!m.normalMap,j=!!m.displacementMap,W=!!m.emissiveMap,K=!!m.metalnessMap,re=!!m.roughnessMap,ce=m.anisotropy>0,R=m.clearcoat>0,y=m.iridescence>0,Y=m.sheen>0,G=m.transmission>0,z=ce&&!!m.anisotropyMap,Q=R&&!!m.clearcoatMap,ae=R&&!!m.clearcoatNormalMap,se=R&&!!m.clearcoatRoughnessMap,fe=y&&!!m.iridescenceMap,ve=y&&!!m.iridescenceThicknessMap,Ee=Y&&!!m.sheenColorMap,we=Y&&!!m.sheenRoughnessMap,Ce=!!m.specularMap,Ne=!!m.specularColorMap,Le=!!m.specularIntensityMap,Fe=G&&!!m.transmissionMap,Ge=G&&!!m.thicknessMap,je=!!m.gradientMap,it=!!m.alphaMap,gt=m.alphaTest>0,ut=!!m.alphaHash,ht=!!m.extensions,vt=!!b.attributes.uv1,pe=!!b.attributes.uv2,Be=!!b.attributes.uv3,rt=ni;return m.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(rt=r.toneMapping)),{isWebGL2:h,shaderID:F,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:X,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:me,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:L,instancing:he,instancingColor:he&&M.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:qn,map:J,matcap:Se,envMap:S,envMapMode:S&&k.mapping,envMapCubeUVHeight:P,aoMap:E,lightMap:O,bumpMap:B,normalMap:I,displacementMap:d&&j,emissiveMap:W,normalMapObjectSpace:I&&m.normalMapType===1,normalMapTangentSpace:I&&m.normalMapType===0,metalnessMap:K,roughnessMap:re,anisotropy:ce,anisotropyMap:z,clearcoat:R,clearcoatMap:Q,clearcoatNormalMap:ae,clearcoatRoughnessMap:se,iridescence:y,iridescenceMap:fe,iridescenceThicknessMap:ve,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:we,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:Le,transmission:G,transmissionMap:Fe,thicknessMap:Ge,gradientMap:je,opaque:m.transparent===!1&&m.blending===1,alphaMap:it,alphaTest:gt,alphaHash:ut,combine:m.combine,mapUv:J&&g(m.map.channel),aoMapUv:E&&g(m.aoMap.channel),lightMapUv:O&&g(m.lightMap.channel),bumpMapUv:B&&g(m.bumpMap.channel),normalMapUv:I&&g(m.normalMap.channel),displacementMapUv:j&&g(m.displacementMap.channel),emissiveMapUv:W&&g(m.emissiveMap.channel),metalnessMapUv:K&&g(m.metalnessMap.channel),roughnessMapUv:re&&g(m.roughnessMap.channel),anisotropyMapUv:z&&g(m.anisotropyMap.channel),clearcoatMapUv:Q&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(m.sheenRoughnessMap.channel),specularMapUv:Ce&&g(m.specularMap.channel),specularColorMapUv:Ne&&g(m.specularColorMap.channel),specularIntensityMapUv:Le&&g(m.specularIntensityMap.channel),transmissionMapUv:Fe&&g(m.transmissionMap.channel),thicknessMapUv:Ge&&g(m.thicknessMap.channel),alphaMapUv:it&&g(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(I||ce),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:pe,vertexUv3s:Be,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(J||it),fog:!!w,useFog:m.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:J&&m.map.isVideoTexture===!0&&lt.getTransfer(m.map.colorSpace)===pt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===en,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:ht&&m.extensions.derivatives===!0,extensionFragDepth:ht&&m.extensions.fragDepth===!0,extensionDrawBuffers:ht&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)x.push(_),x.push(m.defines[_]);return m.isRawShaderMaterial===!1&&((function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)})(x,m),(function(_,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),_.push(o.mask)})(x,m),x.push(r.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=f[m.type],_;if(x){let v=Ln[x];_=Nu.clone(v.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,x){let _;for(let v=0,M=l.length;v<M;v++){let w=l[v];if(w.cacheKey===x){_=w,++_.usedTimes;break}}return _===void 0&&(_=new Yd(r,x,m,s),l.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let x=l.indexOf(m);l[x]=l[l.length-1],l.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:l,dispose:function(){c.dispose()}}}function Kd(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Qd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Qd),n.length>1&&n.sort(o||Xc),i.length>1&&i.sort(o||Xc)}}}function $d(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new jc,r.set(e,[i])):t>=n.length?(i=new jc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function ep(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H}}return r[e.id]=t,t}}}var tp=0;function np(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ip(r,e){let t=new ep,n=(function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,a=new Je,o=new Je;return{setup:function(c,l){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,f=0,g=0,m=0,x=0,_=0,v=0,M=0,w=0,b=0,T=0;c.sort(np);let k=l===!0?Math.PI:1;for(let F=0,ie=c.length;F<ie;F++){let C=c[F],Z=C.color,X=C.intensity,$=C.distance,me=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=Z.r*X*k,u+=Z.g*X*k,d+=Z.b*X*k;else if(C.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(C.sh.coefficients[le],X);T++}else if(C.isDirectionalLight){let le=t.get(C);if(le.color.copy(C.color).multiplyScalar(C.intensity*k),C.castShadow){let ee=C.shadow,he=n.get(C);he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,i.directionalShadow[p]=he,i.directionalShadowMap[p]=me,i.directionalShadowMatrix[p]=C.shadow.matrix,_++}i.directional[p]=le,p++}else if(C.isSpotLight){let le=t.get(C);le.position.setFromMatrixPosition(C.matrixWorld),le.color.copy(Z).multiplyScalar(X*k),le.distance=$,le.coneCos=Math.cos(C.angle),le.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),le.decay=C.decay,i.spot[g]=le;let ee=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,ee.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[g]=ee.matrix,C.castShadow){let he=n.get(C);he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,i.spotShadow[g]=he,i.spotShadowMap[g]=me,M++}g++}else if(C.isRectAreaLight){let le=t.get(C);le.color.copy(Z).multiplyScalar(X),le.halfWidth.set(.5*C.width,0,0),le.halfHeight.set(0,.5*C.height,0),i.rectArea[m]=le,m++}else if(C.isPointLight){let le=t.get(C);if(le.color.copy(C.color).multiplyScalar(C.intensity*k),le.distance=C.distance,le.decay=C.decay,C.castShadow){let ee=C.shadow,he=n.get(C);he.shadowBias=ee.bias,he.shadowNormalBias=ee.normalBias,he.shadowRadius=ee.radius,he.shadowMapSize=ee.mapSize,he.shadowCameraNear=ee.camera.near,he.shadowCameraFar=ee.camera.far,i.pointShadow[f]=he,i.pointShadowMap[f]=me,i.pointShadowMatrix[f]=C.shadow.matrix,v++}i.point[f]=le,f++}else if(C.isHemisphereLight){let le=t.get(C);le.skyColor.copy(C.color).multiplyScalar(X*k),le.groundColor.copy(C.groundColor).multiplyScalar(X*k),i.hemi[x]=le,x++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;P.directionalLength===p&&P.pointLength===f&&P.spotLength===g&&P.rectAreaLength===m&&P.hemiLength===x&&P.numDirectionalShadows===_&&P.numPointShadows===v&&P.numSpotShadows===M&&P.numSpotMaps===w&&P.numLightProbes===T||(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=p,P.pointLength=f,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=x,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=w,P.numLightProbes=T,i.version=tp++)},setupView:function(c,l){let h=0,u=0,d=0,p=0,f=0,g=l.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let v=i.hemi[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),f++}}},state:i}}function qc(r,e){let t=new ip(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function rp(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new qc(r,e),t.set(n,[a])):i>=s.length?(a=new qc(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Fo=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sp(r,e,t){let n=new hr,i=new Pe,s=new Pe,a=new Rt,o=new Fo({depthPacking:3201}),c=new Bo,l={},h=t.maxTextureSize,u={[ri]:en,[en]:ri,2:2},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Mt;f.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Kt(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let x=this.type;function _(b,T){let k=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,k,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,k,p,g,null)}function v(b,T,k,P){let F=null,ie=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(ie!==void 0)F=ie;else if(F=k.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let C=F.uuid,Z=T.uuid,X=l[C];X===void 0&&(X={},l[C]=X);let $=X[Z];$===void 0&&($=F.clone(),X[Z]=$,T.addEventListener("dispose",w)),F=$}return F.visible=T.visible,F.wireframe=T.wireframe,F.side=P===Hn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],F.alphaMap=T.alphaMap,F.alphaTest=T.alphaTest,F.map=T.map,F.clipShadows=T.clipShadows,F.clippingPlanes=T.clippingPlanes,F.clipIntersection=T.clipIntersection,F.displacementMap=T.displacementMap,F.displacementScale=T.displacementScale,F.displacementBias=T.displacementBias,F.wireframeLinewidth=T.wireframeLinewidth,F.linewidth=T.linewidth,k.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(r.properties.get(F).light=k),F}function M(b,T,k,P,F){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&F===Hn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);let C=e.update(b),Z=b.material;if(Array.isArray(Z)){let X=C.groups;for(let $=0,me=X.length;$<me;$++){let le=X[$],ee=Z[le.materialIndex];if(ee&&ee.visible){let he=v(b,ee,P,F);b.onBeforeShadow(r,b,T,k,C,he,le),r.renderBufferDirect(k,null,C,he,b,le),b.onAfterShadow(r,b,T,k,C,he,le)}}}else if(Z.visible){let X=v(b,Z,P,F);b.onBeforeShadow(r,b,T,k,C,X,null),r.renderBufferDirect(k,null,C,X,b,null),b.onAfterShadow(r,b,T,k,C,X,null)}}let ie=b.children;for(let C=0,Z=ie.length;C<Z;C++)M(ie[C],T,k,P,F)}function w(b){b.target.removeEventListener("dispose",w);for(let T in l){let k=l[T],P=b.target.uuid;P in k&&(k[P].dispose(),delete k[P])}}this.render=function(b,T,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let P=r.getRenderTarget(),F=r.getActiveCubeFace(),ie=r.getActiveMipmapLevel(),C=r.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let Z=x!==Hn&&this.type===Hn,X=x===Hn&&this.type!==Hn;for(let $=0,me=b.length;$<me;$++){let le=b[$],ee=le.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let he=ee.getFrameExtents();if(i.multiply(he),s.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/he.x),i.x=s.x*he.x,ee.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/he.y),i.y=s.y*he.y,ee.mapSize.y=s.y)),ee.map===null||Z===!0||X===!0){let J=this.type!==Hn?{minFilter:kt,magFilter:kt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Tn(i.x,i.y,J),ee.map.texture.name=le.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();let L=ee.getViewportCount();for(let J=0;J<L;J++){let Se=ee.getViewport(J);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),C.viewport(a),ee.updateMatrices(le,J),n=ee.getFrustum(),M(T,k,ee.camera,le,this.type)}ee.isPointLightShadow!==!0&&this.type===Hn&&_(ee,k),ee.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(P,F,ie)}}function ap(r,e,t){let n=t.isWebGL2,i=new function(){let y=!1,Y=new Rt,G=null,z=new Rt(0,0,0,0);return{setMask:function(Q){G===Q||y||(r.colorMask(Q,Q,Q,Q),G=Q)},setLocked:function(Q){y=Q},setClear:function(Q,ae,se,fe,ve){ve===!0&&(Q*=fe,ae*=fe,se*=fe),Y.set(Q,ae,se,fe),z.equals(Y)===!1&&(r.clearColor(Q,ae,se,fe),z.copy(Y))},reset:function(){y=!1,G=null,z.set(-1,0,0,0)}}},s=new function(){let y=!1,Y=null,G=null,z=null;return{setTest:function(Q){Q?B(r.DEPTH_TEST):I(r.DEPTH_TEST)},setMask:function(Q){Y===Q||y||(r.depthMask(Q),Y=Q)},setFunc:function(Q){if(G!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}G=Q}},setLocked:function(Q){y=Q},setClear:function(Q){z!==Q&&(r.clearDepth(Q),z=Q)},reset:function(){y=!1,Y=null,G=null,z=null}}},a=new function(){let y=!1,Y=null,G=null,z=null,Q=null,ae=null,se=null,fe=null,ve=null;return{setTest:function(Ee){y||(Ee?B(r.STENCIL_TEST):I(r.STENCIL_TEST))},setMask:function(Ee){Y===Ee||y||(r.stencilMask(Ee),Y=Ee)},setFunc:function(Ee,we,Ce){G===Ee&&z===we&&Q===Ce||(r.stencilFunc(Ee,we,Ce),G=Ee,z=we,Q=Ce)},setOp:function(Ee,we,Ce){ae===Ee&&se===we&&fe===Ce||(r.stencilOp(Ee,we,Ce),ae=Ee,se=we,fe=Ce)},setLocked:function(Ee){y=Ee},setClear:function(Ee){ve!==Ee&&(r.clearStencil(Ee),ve=Ee)},reset:function(){y=!1,Y=null,G=null,z=null,Q=null,ae=null,se=null,fe=null,ve=null}}},o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],p=null,f=!1,g=null,m=null,x=null,_=null,v=null,M=null,w=null,b=new Qe(0,0,0),T=0,k=!1,P=null,F=null,ie=null,C=null,Z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,me=0,le=r.getParameter(r.VERSION);le.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(le)[1]),$=me>=1):le.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),$=me>=2);let ee=null,he={},L=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),Se=new Rt().fromArray(L),S=new Rt().fromArray(J);function E(y,Y,G,z){let Q=new Uint8Array(4),ae=r.createTexture();r.bindTexture(y,ae),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<G;se++)!n||y!==r.TEXTURE_3D&&y!==r.TEXTURE_2D_ARRAY?r.texImage2D(Y+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage3D(Y,0,r.RGBA,1,1,z,0,r.RGBA,r.UNSIGNED_BYTE,Q);return ae}let O={};function B(y){l[y]!==!0&&(r.enable(y),l[y]=!0)}function I(y){l[y]!==!1&&(r.disable(y),l[y]=!1)}O[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),O[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),O[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(r.DEPTH_TEST),s.setFunc(3),re(!1),ce(1),B(r.CULL_FACE),K(0);let j={[xi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)j[103]=r.MIN,j[104]=r.MAX;else{let y=e.get("EXT_blend_minmax");y!==null&&(j[103]=y.MIN_EXT,j[104]=y.MAX_EXT)}let W={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[xo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[yo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function K(y,Y,G,z,Q,ae,se,fe,ve,Ee){if(y!==0){if(f===!1&&(B(r.BLEND),f=!0),y===5)Q=Q||Y,ae=ae||G,se=se||z,Y===m&&Q===v||(r.blendEquationSeparate(j[Y],j[Q]),m=Y,v=Q),G===x&&z===_&&ae===M&&se===w||(r.blendFuncSeparate(W[G],W[z],W[ae],W[se]),x=G,_=z,M=ae,w=se),fe.equals(b)!==!1&&ve===T||(r.blendColor(fe.r,fe.g,fe.b,ve),b.copy(fe),T=ve),g=y,k=!1;else if(y!==g||Ee!==k){if(m===xi&&v===xi||(r.blendEquation(r.FUNC_ADD),m=xi,v=xi),Ee)switch(y){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}x=null,_=null,M=null,w=null,b.set(0,0,0),T=0,g=y,k=Ee}}else f===!0&&(I(r.BLEND),f=!1)}function re(y){P!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),P=y)}function ce(y){y!==0?(B(r.CULL_FACE),y!==F&&(y===1?r.cullFace(r.BACK):y===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):I(r.CULL_FACE),F=y}function R(y,Y,G){y?(B(r.POLYGON_OFFSET_FILL),C===Y&&Z===G||(r.polygonOffset(Y,G),C=Y,Z=G)):I(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:B,disable:I,bindFramebuffer:function(y,Y){return h[y]!==Y&&(r.bindFramebuffer(y,Y),h[y]=Y,n&&(y===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Y),y===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Y)),!0)},drawBuffers:function(y,Y){let G=d,z=!1;if(y)if(G=u.get(Y),G===void 0&&(G=[],u.set(Y,G)),y.isWebGLMultipleRenderTargets){let Q=y.texture;if(G.length!==Q.length||G[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,se=Q.length;ae<se;ae++)G[ae]=r.COLOR_ATTACHMENT0+ae;G.length=Q.length,z=!0}}else G[0]!==r.COLOR_ATTACHMENT0&&(G[0]=r.COLOR_ATTACHMENT0,z=!0);else G[0]!==r.BACK&&(G[0]=r.BACK,z=!0);z&&(t.isWebGL2?r.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))},useProgram:function(y){return p!==y&&(r.useProgram(y),p=y,!0)},setBlending:K,setMaterial:function(y,Y){y.side===2?I(r.CULL_FACE):B(r.CULL_FACE);let G=y.side===en;Y&&(G=!G),re(G),y.blending===1&&y.transparent===!1?K(0):K(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),i.setMask(y.colorWrite);let z=y.stencilWrite;a.setTest(z),z&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),R(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):I(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:re,setCullFace:ce,setLineWidth:function(y){y!==ie&&($&&r.lineWidth(y),ie=y)},setPolygonOffset:R,setScissorTest:function(y){y?B(r.SCISSOR_TEST):I(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+X-1),ee!==y&&(r.activeTexture(y),ee=y)},bindTexture:function(y,Y,G){G===void 0&&(G=ee===null?r.TEXTURE0+X-1:ee);let z=he[G];z===void 0&&(z={type:void 0,texture:void 0},he[G]=z),z.type===y&&z.texture===Y||(ee!==G&&(r.activeTexture(G),ee=G),r.bindTexture(y,Y||O[y]),z.type=y,z.texture=Y)},unbindTexture:function(){let y=he[ee];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,Y){let G=c.get(Y);G===void 0&&(G=new WeakMap,c.set(Y,G));let z=G.get(y);z===void 0&&(z=r.getUniformBlockIndex(Y,y.name),G.set(y,z))},uniformBlockBinding:function(y,Y){let G=c.get(Y).get(y);o.get(Y)!==G&&(r.uniformBlockBinding(Y,G,y.__bindingPointIndex),o.set(Y,G))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){Se.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),Se.copy(y))},viewport:function(y){S.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),S.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},ee=null,he={},h={},u=new WeakMap,d=[],p=null,f=!1,g=null,m=null,x=null,_=null,v=null,M=null,w=null,b=new Qe(0,0,0),T=0,k=!1,P=null,F=null,ie=null,C=null,Z=null,Se.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function op(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,E){return p?new OffscreenCanvas(S,E):Vr("canvas")}function g(S,E,O,B){let I=1;if((S.width>B||S.height>B)&&(I=B/Math.max(S.width,S.height)),I<1||E===!0){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let j=E?Gs:Math.floor,W=j(I*S.width),K=j(I*S.height);u===void 0&&(u=f(W,K));let re=O?f(W,K):u;return re.width=W,re.height=K,re.getContext("2d").drawImage(S,0,0,W,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+W+"x"+K+")."),re}return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S}return S}function m(S){return To(S.width)&&To(S.height)}function x(S,E){return S.generateMipmaps&&E&&S.minFilter!==kt&&S.minFilter!==cn}function _(S){r.generateMipmap(S)}function v(S,E,O,B,I=!1){if(o===!1)return E;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=E;if(E===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),E===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RGBA){let W=I?Fs:lt.getTransfer(B);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=W===pt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return j!==r.R16F&&j!==r.R32F&&j!==r.RG16F&&j!==r.RG32F&&j!==r.RGBA16F&&j!==r.RGBA32F||e.get("EXT_color_buffer_float"),j}function M(S,E,O){return x(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==kt&&S.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function w(S){return S===kt||S===Dl||S===Fa?r.NEAREST:r.LINEAR}function b(S){let E=S.target;E.removeEventListener("dispose",b),(function(O){let B=n.get(O);if(B.__webglInit===void 0)return;let I=O.source,j=d.get(I);if(j){let W=j[B.__cacheKey];W.usedTimes--,W.usedTimes===0&&k(O),Object.keys(j).length===0&&d.delete(I)}n.remove(O)})(E),E.isVideoTexture&&h.delete(E)}function T(S){let E=S.target;E.removeEventListener("dispose",T),(function(O){let B=O.texture,I=n.get(O),j=n.get(B);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(I.__webglFramebuffer[W]))for(let K=0;K<I.__webglFramebuffer[W].length;K++)r.deleteFramebuffer(I.__webglFramebuffer[W][K]);else r.deleteFramebuffer(I.__webglFramebuffer[W]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[W])}else{if(Array.isArray(I.__webglFramebuffer))for(let W=0;W<I.__webglFramebuffer.length;W++)r.deleteFramebuffer(I.__webglFramebuffer[W]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let W=0;W<I.__webglColorRenderbuffer.length;W++)I.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[W]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let W=0,K=B.length;W<K;W++){let re=n.get(B[W]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(B),n.remove(O)})(E)}function k(S){let E=n.get(S);r.deleteTexture(E.__webglTexture);let O=S.source;delete d.get(O)[E.__cacheKey],a.memory.textures--}let P=0;function F(S,E){let O=n.get(S);if(S.isVideoTexture&&(function(B){let I=a.render.frame;h.get(B)!==I&&(h.set(B,I),B.update())})(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let B=S.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void me(O,S,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+E)}let ie={[kr]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},C={[kt]:r.NEAREST,[Dl]:r.NEAREST_MIPMAP_NEAREST,[Fa]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[xu]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},Z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function X(S,E,O){if(O?(r.texParameteri(S,r.TEXTURE_WRAP_S,ie[E.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,ie[E.wrapT]),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,ie[E.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,C[E.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,C[E.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===Xn&&E.wrapT===Xn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==kt&&E.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===kt||E.minFilter!==Fa&&E.minFilter!==sr||E.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function $(S,E){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",b));let B=E.source,I=d.get(B);I===void 0&&(I={},d.set(B,I));let j=(function(W){let K=[];return K.push(W.wrapS),K.push(W.wrapT),K.push(W.wrapR||0),K.push(W.magFilter),K.push(W.minFilter),K.push(W.anisotropy),K.push(W.internalFormat),K.push(W.format),K.push(W.type),K.push(W.generateMipmaps),K.push(W.premultiplyAlpha),K.push(W.flipY),K.push(W.unpackAlignment),K.push(W.colorSpace),K.join()})(E);if(j!==S.__cacheKey){I[j]===void 0&&(I[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),I[j].usedTimes++;let W=I[S.__cacheKey];W!==void 0&&(I[S.__cacheKey].usedTimes--,W.usedTimes===0&&k(E)),S.__cacheKey=j,S.__webglTexture=I[j].texture}return O}function me(S,E,O){let B=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(B=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(B=r.TEXTURE_3D);let I=$(S,E),j=E.source;t.bindTexture(B,S.__webglTexture,r.TEXTURE0+O);let W=n.get(j);if(j.version!==W.__version||I===!0){t.activeTexture(r.TEXTURE0+O);let K=lt.getPrimaries(lt.workingColorSpace),re=E.colorSpace===gn?null:lt.getPrimaries(E.colorSpace),ce=E.colorSpace===gn||K===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let R=(function(we){return!o&&(we.wrapS!==Xn||we.wrapT!==Xn||we.minFilter!==kt&&we.minFilter!==cn)})(E)&&m(E.image)===!1,y=g(E.image,R,!1,i.maxTextureSize);y=Se(E,y);let Y=m(y)||o,G=s.convert(E.format,E.colorSpace),z,Q=s.convert(E.type),ae=v(E.internalFormat,G,Q,E.colorSpace,E.isVideoTexture);X(B,E,Y);let se=E.mipmaps,fe=o&&E.isVideoTexture!==!0&&ae!==fh,ve=W.__version===void 0||I===!0,Ee=M(E,y,Y);if(E.isDepthTexture)ae=r.DEPTH_COMPONENT,o?ae=E.type===Dn?r.DEPTH_COMPONENT32F:E.type===Un?r.DEPTH_COMPONENT24:E.type===Si?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===wi&&ae===r.DEPTH_COMPONENT&&E.type!==Ml&&E.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Un,Q=s.convert(E.type)),E.format===ar&&ae===r.DEPTH_COMPONENT&&(ae=r.DEPTH_STENCIL,E.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Si,Q=s.convert(E.type))),ve&&(fe?t.texStorage2D(r.TEXTURE_2D,1,ae,y.width,y.height):t.texImage2D(r.TEXTURE_2D,0,ae,y.width,y.height,0,G,Q,null));else if(E.isDataTexture)if(se.length>0&&Y){fe&&ve&&t.texStorage2D(r.TEXTURE_2D,Ee,ae,se[0].width,se[0].height);for(let we=0,Ce=se.length;we<Ce;we++)z=se[we],fe?t.texSubImage2D(r.TEXTURE_2D,we,0,0,z.width,z.height,G,Q,z.data):t.texImage2D(r.TEXTURE_2D,we,ae,z.width,z.height,0,G,Q,z.data);E.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(r.TEXTURE_2D,Ee,ae,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,G,Q,y.data)):t.texImage2D(r.TEXTURE_2D,0,ae,y.width,y.height,0,G,Q,y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,ae,se[0].width,se[0].height,y.depth);for(let we=0,Ce=se.length;we<Ce;we++)z=se[we],E.format!==fn?G!==null?fe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,z.width,z.height,y.depth,G,z.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,ae,z.width,z.height,y.depth,0,z.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,z.width,z.height,y.depth,G,Q,z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,we,ae,z.width,z.height,y.depth,0,G,Q,z.data)}else{fe&&ve&&t.texStorage2D(r.TEXTURE_2D,Ee,ae,se[0].width,se[0].height);for(let we=0,Ce=se.length;we<Ce;we++)z=se[we],E.format!==fn?G!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,z.width,z.height,G,z.data):t.compressedTexImage2D(r.TEXTURE_2D,we,ae,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(r.TEXTURE_2D,we,0,0,z.width,z.height,G,Q,z.data):t.texImage2D(r.TEXTURE_2D,we,ae,z.width,z.height,0,G,Q,z.data)}else if(E.isDataArrayTexture)fe?(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,ae,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,y.width,y.height,y.depth,G,Q,y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,y.width,y.height,y.depth,0,G,Q,y.data);else if(E.isData3DTexture)fe?(ve&&t.texStorage3D(r.TEXTURE_3D,Ee,ae,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,y.width,y.height,y.depth,G,Q,y.data)):t.texImage3D(r.TEXTURE_3D,0,ae,y.width,y.height,y.depth,0,G,Q,y.data);else if(E.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(r.TEXTURE_2D,Ee,ae,y.width,y.height);else{let we=y.width,Ce=y.height;for(let Ne=0;Ne<Ee;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,ae,we,Ce,0,G,Q,null),we>>=1,Ce>>=1}}else if(se.length>0&&Y){fe&&ve&&t.texStorage2D(r.TEXTURE_2D,Ee,ae,se[0].width,se[0].height);for(let we=0,Ce=se.length;we<Ce;we++)z=se[we],fe?t.texSubImage2D(r.TEXTURE_2D,we,0,0,G,Q,z):t.texImage2D(r.TEXTURE_2D,we,ae,G,Q,z);E.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(r.TEXTURE_2D,Ee,ae,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,G,Q,y)):t.texImage2D(r.TEXTURE_2D,0,ae,G,Q,y);x(E,Y)&&_(B),W.__version=j.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function le(S,E,O,B,I,j){let W=s.convert(O.format,O.colorSpace),K=s.convert(O.type),re=v(O.internalFormat,W,K,O.colorSpace);if(!n.get(E).__hasExternalTextures){let ce=Math.max(1,E.width>>j),R=Math.max(1,E.height>>j);I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?t.texImage3D(I,j,re,ce,R,E.depth,0,W,K,null):t.texImage2D(I,j,re,ce,R,0,W,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),J(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,B,I,n.get(O).__webglTexture,0,L(E)):(I===r.TEXTURE_2D||I>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,B,I,n.get(O).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(S,E,O){if(r.bindRenderbuffer(r.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let B=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||J(E)){let I=E.depthTexture;I&&I.isDepthTexture&&(I.type===Dn?B=r.DEPTH_COMPONENT32F:I.type===Un&&(B=r.DEPTH_COMPONENT24));let j=L(E);J(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,B,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,j,B,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,B,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){let B=L(E);O&&J(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,r.DEPTH24_STENCIL8,E.width,E.height):J(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{let B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let I=0;I<B.length;I++){let j=B[I],W=s.convert(j.format,j.colorSpace),K=s.convert(j.type),re=v(j.internalFormat,W,K,j.colorSpace),ce=L(E);O&&J(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,re,E.width,E.height):J(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,re,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(S){let E=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,B),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),F(I.depthTexture,0);let j=n.get(I.depthTexture).__webglTexture,W=L(I);if(I.depthTexture.format===wi)J(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else{if(I.depthTexture.format!==ar)throw new Error("Unknown depthTexture format");J(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0)}})(E.__webglFramebuffer,S)}else if(O){E.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[B]),E.__webglDepthbuffer[B]=r.createRenderbuffer(),ee(E.__webglDepthbuffer[B],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ee(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function L(S){return Math.min(i.maxSamples,S.samples)}function J(S){let E=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(S,E){let O=S.colorSpace,B=S.format,I=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===wo||O!==qn&&O!==gn&&(lt.getTransfer(O)===pt?o===!1?e.has("EXT_sRGB")===!0&&B===fn?(S.format=wo,S.minFilter=cn,S.generateMipmaps=!1):E=Vs.sRGBToLinear(E):B===fn&&I===jn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=function(){let S=P;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),P+=1,S},this.resetTextureUnits=function(){P=0},this.setTexture2D=F,this.setTexture2DArray=function(S,E){let O=n.get(S);S.version>0&&O.__version!==S.version?me(O,S,E):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(S,E){let O=n.get(S);S.version>0&&O.__version!==S.version?me(O,S,E):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(S,E){let O=n.get(S);S.version>0&&O.__version!==S.version?(function(B,I,j){if(I.image.length!==6)return;let W=$(B,I),K=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+j);let re=n.get(K);if(K.version!==re.__version||W===!0){t.activeTexture(r.TEXTURE0+j);let ce=lt.getPrimaries(lt.workingColorSpace),R=I.colorSpace===gn?null:lt.getPrimaries(I.colorSpace),y=I.colorSpace===gn||ce===R?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,y);let Y=I.isCompressedTexture||I.image[0].isCompressedTexture,G=I.image[0]&&I.image[0].isDataTexture,z=[];for(let Le=0;Le<6;Le++)z[Le]=Y||G?G?I.image[Le].image:I.image[Le]:g(I.image[Le],!1,!0,i.maxCubemapSize),z[Le]=Se(I,z[Le]);let Q=z[0],ae=m(Q)||o,se=s.convert(I.format,I.colorSpace),fe=s.convert(I.type),ve=v(I.internalFormat,se,fe,I.colorSpace),Ee=o&&I.isVideoTexture!==!0,we=re.__version===void 0||W===!0,Ce,Ne=M(I,Q,ae);if(X(r.TEXTURE_CUBE_MAP,I,ae),Y){Ee&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ve,Q.width,Q.height);for(let Le=0;Le<6;Le++){Ce=z[Le].mipmaps;for(let Fe=0;Fe<Ce.length;Fe++){let Ge=Ce[Fe];I.format!==fn?se!==null?Ee?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe,0,0,Ge.width,Ge.height,se,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe,ve,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe,0,0,Ge.width,Ge.height,se,fe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe,ve,Ge.width,Ge.height,0,se,fe,Ge.data)}}}else{Ce=I.mipmaps,Ee&&we&&(Ce.length>0&&Ne++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ve,z[0].width,z[0].height));for(let Le=0;Le<6;Le++)if(G){Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,z[Le].width,z[Le].height,se,fe,z[Le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ve,z[Le].width,z[Le].height,0,se,fe,z[Le].data);for(let Fe=0;Fe<Ce.length;Fe++){let Ge=Ce[Fe].image[Le].image;Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe+1,0,0,Ge.width,Ge.height,se,fe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe+1,ve,Ge.width,Ge.height,0,se,fe,Ge.data)}}else{Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,se,fe,z[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ve,se,fe,z[Le]);for(let Fe=0;Fe<Ce.length;Fe++){let Ge=Ce[Fe];Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe+1,0,0,se,fe,Ge.image[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Fe+1,ve,se,fe,Ge.image[Le])}}}x(I,ae)&&_(r.TEXTURE_CUBE_MAP),re.__version=K.version,I.onUpdate&&I.onUpdate(I)}B.__version=I.version})(O,S,E):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(S,E,O){let B=n.get(S);E!==void 0&&le(B.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&he(S)},this.setupRenderTarget=function(S){let E=S.texture,O=n.get(S),B=n.get(E);S.addEventListener("dispose",T),S.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture()),B.__version=E.version,a.memory.textures++);let I=S.isWebGLCubeRenderTarget===!0,j=S.isWebGLMultipleRenderTargets===!0,W=m(S)||o;if(I){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(o&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let re=0;re<E.mipmaps.length;re++)O.__webglFramebuffer[K][re]=r.createFramebuffer()}else O.__webglFramebuffer[K]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)O.__webglFramebuffer[K]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(j)if(i.drawBuffers){let K=S.texture;for(let re=0,ce=K.length;re<ce;re++){let R=n.get(K[re]);R.__webglTexture===void 0&&(R.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&J(S)===!1){let K=j?E:[E];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){let ce=K[re];O.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[re]);let R=s.convert(ce.format,ce.colorSpace),y=s.convert(ce.type),Y=v(ce.internalFormat,R,y,ce.colorSpace,S.isXRRenderTarget===!0),G=L(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,G,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,O.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture),X(r.TEXTURE_CUBE_MAP,E,W);for(let K=0;K<6;K++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)le(O.__webglFramebuffer[K][re],S,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re);else le(O.__webglFramebuffer[K],S,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);x(E,W)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let K=S.texture;for(let re=0,ce=K.length;re<ce;re++){let R=K[re],y=n.get(R);t.bindTexture(r.TEXTURE_2D,y.__webglTexture),X(r.TEXTURE_2D,R,W),le(O.__webglFramebuffer,S,R,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),x(R,W)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?K=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(K,B.__webglTexture),X(K,E,W),o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)le(O.__webglFramebuffer[re],S,E,r.COLOR_ATTACHMENT0,K,re);else le(O.__webglFramebuffer,S,E,r.COLOR_ATTACHMENT0,K,0);x(E,W)&&_(K),t.unbindTexture()}S.depthBuffer&&he(S)},this.updateRenderTargetMipmap=function(S){let E=m(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let B=0,I=O.length;B<I;B++){let j=O[B];if(x(j,E)){let W=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,K=n.get(j).__webglTexture;t.bindTexture(W,K),_(W),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(o&&S.samples>0&&J(S)===!1){let E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,B=S.height,I=r.COLOR_BUFFER_BIT,j=[],W=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=n.get(S),re=S.isWebGLMultipleRenderTargets===!0;if(re)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){j.push(r.COLOR_ATTACHMENT0+ce),S.depthBuffer&&j.push(W);let R=K.__ignoreDepthValues!==void 0&&K.__ignoreDepthValues;if(R===!1&&(S.depthBuffer&&(I|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(I|=r.STENCIL_BUFFER_BIT)),re&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,K.__webglColorRenderbuffer[ce]),R===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[W]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[W])),re){let y=n.get(E[ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,y,0)}r.blitFramebuffer(0,0,O,B,0,0,O,B,I,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);let R=n.get(E[ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,R,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=le,this.useMultisampledRTT=J}function lp(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=lt.getTransfer(s);if(i===jn)return r.UNSIGNED_BYTE;if(i===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===Ml)return r.UNSIGNED_SHORT;if(i===ch)return r.INT;if(i===Un)return r.UNSIGNED_INT;if(i===Dn)return r.FLOAT;if(i===Ti)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===fn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===wi)return r.DEPTH_COMPONENT;if(i===ar)return r.DEPTH_STENCIL;if(i===wo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===dh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===ph)return r.RG_INTEGER;if(i===mh)return r.RGBA_INTEGER;if(i===Ba||i===za||i===ka||i===Ga)if(o===pt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Nl||i===Ol||i===Fl||i===Bl){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===fh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===zl||i===kl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===zl)return o===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===jl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===Ql||i===$l||i===ec){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Gl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Va||i===tc||i===nc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===Va)return o===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===ic||i===rc||i===sc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Si?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var zo=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ti=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cp={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),x=this._getHandJoint(l,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ko=class extends si{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,g=t.getContextAttributes(),m=null,x=null,_=[],v=[],M=new Pe,w=null,b=new Jt;b.layers.enable(1),b.viewport=new Rt;let T=new Jt;T.layers.enable(2),T.viewport=new Rt;let k=[b,T],P=new zo;P.layers.enable(1),P.layers.enable(2);let F=null,ie=null;function C(L){let J=v.indexOf(L.inputSource);if(J===-1)return;let Se=_[J];Se!==void 0&&(Se.update(L.inputSource,L.frame,l||a),Se.dispatchEvent({type:L.type,data:L.inputSource}))}function Z(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",X);for(let L=0;L<_.length;L++){let J=v[L];J!==null&&(v[L]=null,_[L].disconnect(J))}F=null,ie=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function X(L){for(let J=0;J<L.removed.length;J++){let Se=L.removed[J],S=v.indexOf(Se);S>=0&&(v[S]=null,_[S].disconnect(Se))}for(let J=0;J<L.added.length;J++){let Se=L.added[J],S=v.indexOf(Se);if(S===-1){for(let O=0;O<_.length;O++){if(O>=v.length){v.push(Se),S=O;break}if(v[O]===null){v[O]=Se,S=O;break}}if(S===-1)break}let E=_[S];E&&E.connect(Se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let J=_[L];return J===void 0&&(J=new Nr,_[L]=J),J.getTargetRaySpace()},this.getControllerGrip=function(L){let J=_[L];return J===void 0&&(J=new Nr,_[L]=J),J.getGripSpace()},this.getHand=function(L){let J=_[L];return J===void 0&&(J=new Nr,_[L]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Tn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,Se=null,S=null;g.depth&&(S=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?ar:wi,Se=g.stencil?Si:Un);let E={colorFormat:t.RGBA8,depthFormat:S,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(E),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Tn(d.textureWidth,d.textureHeight,{format:fn,type:jn,depthTexture:new mr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let $=new H,me=new H;function le(L,J){J===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(J.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;P.near=T.near=b.near=L.near,P.far=T.far=b.far=L.far,F===P.near&&ie===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,ie=P.far);let J=L.parent,Se=P.cameras;le(P,J);for(let S=0;S<Se.length;S++)le(Se[S],J);Se.length===2?(function(S,E,O){$.setFromMatrixPosition(E.matrixWorld),me.setFromMatrixPosition(O.matrixWorld);let B=$.distanceTo(me),I=E.projectionMatrix.elements,j=O.projectionMatrix.elements,W=I[14]/(I[10]-1),K=I[14]/(I[10]+1),re=(I[9]+1)/I[5],ce=(I[9]-1)/I[5],R=(I[8]-1)/I[0],y=(j[8]+1)/j[0],Y=W*R,G=W*y,z=B/(-R+y),Q=z*-R;E.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Q),S.translateZ(z),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();let ae=W+z,se=K+z,fe=Y-Q,ve=G+(B-Q),Ee=re*K/se*ae,we=ce*K/se*ae;S.projectionMatrix.makePerspective(fe,ve,Ee,we,ae,se),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()})(P,b,T):P.projectionMatrix.copy(b.projectionMatrix),(function(S,E,O){O===null?S.matrix.copy(E.matrixWorld):(S.matrix.copy(O.matrixWorld),S.matrix.invert(),S.matrix.multiply(E.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(E.projectionMatrix),S.projectionMatrixInverse.copy(E.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*Gr*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(L,P,J)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(L){c=L,d!==null&&(d.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)};let ee=null,he=new bh;he.setAnimationLoop((function(L,J){if(h=J.getViewerPose(l||a),f=J,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let S=!1;Se.length!==P.cameras.length&&(P.cameras.length=0,S=!0);for(let E=0;E<Se.length;E++){let O=Se[E],B=null;if(p!==null)B=p.getViewport(O);else{let j=u.getViewSubImage(d,O);B=j.viewport,E===0&&(e.setRenderTargetTextures(x,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(x))}let I=k[E];I===void 0&&(I=new Jt,I.layers.enable(E),I.viewport=new Rt,k[E]=I),I.matrix.fromArray(O.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(O.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(B.x,B.y,B.width,B.height),E===0&&(P.matrix.copy(I.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),S===!0&&P.cameras.push(I)}}for(let Se=0;Se<_.length;Se++){let S=v[Se],E=_[Se];S!==null&&E!==void 0&&E.update(S,J,l||a)}ee&&ee(L,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),f=null})),this.setAnimationLoop=function(L){ee=L},this.dispose=function(){}}};function hp(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===en&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===en&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Mh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function up(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=f[m];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return f[m]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let x=m.uniforms,_=0,v=16;for(let w=0,b=x.length;w<b;w++){let T=Array.isArray(x[w])?x[w]:[x[w]];for(let k=0,P=T.length;k<P;k++){let F=T[k],ie=Array.isArray(F.value)?F.value:[F.value];for(let C=0,Z=ie.length;C<Z;C++){let X=l(ie[C]),$=_%v;$!==0&&v-$<X.boundary&&(_+=v-$),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=X.storage}}}let M=_%v;M>0&&(_+=v-M),m.__size=_,m.__cache={}})(u),p=(function(m){let x=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=x;let _=r.createBuffer(),v=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let x=i[m.id],_=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let M=0,w=_.length;M<w;M++){let b=Array.isArray(_[M])?_[M]:[_[M]];for(let T=0,k=b.length;T<k;T++){let P=b[T];if(c(P,M,T,v)===!0){let F=P.__offset,ie=Array.isArray(P.value)?P.value:[P.value],C=0;for(let Z=0;Z<ie.length;Z++){let X=ie[Z],$=l(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,F+C,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,C),C+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Wr=class{constructor(e={}){let{canvas:t=yu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;let v=this,M=!1,w=0,b=0,T=null,k=-1,P=null,F=new Rt,ie=new Rt,C=null,Z=new Qe(0),X=0,$=t.width,me=t.height,le=1,ee=null,he=null,L=new Rt(0,0,$,me),J=new Rt(0,0,$,me),Se=!1,S=new hr,E=!1,O=!1,B=null,I=new Je,j=new Pe,W=new H,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return T===null?le:1}let ce,R,y,Y,G,z,Q,ae,se,fe,ve,Ee,we,Ce,Ne,Le,Fe,Ge,je,it,gt,ut,ht,vt,pe=n;function Be(N,ue){for(let V=0;V<N.length;V++){let te=N[V],q=t.getContext(te,ue);if(q!==null)return q}return null}try{let N={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",Bt,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),pe===null){let ue=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ue.shift(),pe=Be(ue,N),pe===null)throw Be(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&pe instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),pe.getShaderPrecisionFormat===void 0&&(pe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}function rt(){ce=new ju(pe),R=new Vu(pe,ce,e),ce.init(R),ut=new lp(pe,ce,R),y=new ap(pe,ce,R),Y=new Zu(pe),G=new Kd,z=new op(pe,ce,y,G,R,ut,Y),Q=new Wu(v),ae=new Xu(v),se=new Bu(pe,R),ht=new ku(pe,ce,se,R),fe=new qu(pe,se,Y,ht),ve=new $u(pe,fe,se,Y),je=new Qu(pe,R,z),Le=new Hu(G),Ee=new Jd(v,Q,ae,ce,R,ht,Le),we=new hp(v,G),Ce=new $d,Ne=new rp(ce,R),Ge=new zu(v,Q,ae,y,ve,d,c),Fe=new sp(v,ve,R),vt=new up(pe,Y,R,y),it=new Gu(pe,ce,Y,R),gt=new Yu(pe,ce,Y,R),Y.programs=Ee.programs,v.capabilities=R,v.extensions=ce,v.properties=G,v.renderLists=Ce,v.shadowMap=Fe,v.state=y,v.info=Y}rt();let st=new ko(v,pe);function Ye(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let N=Y.autoReset,ue=Fe.enabled,V=Fe.autoUpdate,te=Fe.needsUpdate,q=Fe.type;rt(),Y.autoReset=N,Fe.enabled=ue,Fe.autoUpdate=V,Fe.needsUpdate=te,Fe.type=q}function Ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function xn(N){let ue=N.target;ue.removeEventListener("dispose",xn),(function(V){(function(te){let q=G.get(te).programs;q!==void 0&&(q.forEach((function(be){Ee.releaseProgram(be)})),te.isShaderMaterial&&Ee.releaseShaderCache(te))})(V),G.remove(V)})(ue)}function jt(N,ue,V){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,xt(N,ue,V),N.side=ri,N.needsUpdate=!0,xt(N,ue,V),N.side=2):xt(N,ue,V)}this.xr=st,this.getContext=function(){return pe},this.getContextAttributes=function(){return pe.getContextAttributes()},this.forceContextLoss=function(){let N=ce.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ce.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(N){N!==void 0&&(le=N,this.setSize($,me,!1))},this.getSize=function(N){return N.set($,me)},this.setSize=function(N,ue,V=!0){st.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=N,me=ue,t.width=Math.floor(N*le),t.height=Math.floor(ue*le),V===!0&&(t.style.width=N+"px",t.style.height=ue+"px"),this.setViewport(0,0,N,ue))},this.getDrawingBufferSize=function(N){return N.set($*le,me*le).floor()},this.setDrawingBufferSize=function(N,ue,V){$=N,me=ue,le=V,t.width=Math.floor(N*V),t.height=Math.floor(ue*V),this.setViewport(0,0,N,ue)},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(L)},this.setViewport=function(N,ue,V,te){N.isVector4?L.set(N.x,N.y,N.z,N.w):L.set(N,ue,V,te),y.viewport(F.copy(L).multiplyScalar(le).floor())},this.getScissor=function(N){return N.copy(J)},this.setScissor=function(N,ue,V,te){N.isVector4?J.set(N.x,N.y,N.z,N.w):J.set(N,ue,V,te),y.scissor(ie.copy(J).multiplyScalar(le).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){y.setScissorTest(Se=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){he=N},this.getClearColor=function(N){return N.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(N=!0,ue=!0,V=!0){let te=0;if(N){let q=!1;if(T!==null){let be=T.texture.format;q=be===mh||be===ph||be===dh}if(q){let be=T.texture.type,Ae=be===jn||be===Un||be===Ml||be===Si||be===hh||be===uh,Re=Ge.getClearColor(),U=Ge.getClearAlpha(),D=Re.r,oe=Re.g,de=Re.b;Ae?(p[0]=D,p[1]=oe,p[2]=de,p[3]=U,pe.clearBufferuiv(pe.COLOR,0,p)):(f[0]=D,f[1]=oe,f[2]=de,f[3]=U,pe.clearBufferiv(pe.COLOR,0,f))}else te|=pe.COLOR_BUFFER_BIT}ue&&(te|=pe.DEPTH_BUFFER_BIT),V&&(te|=pe.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Ce.dispose(),Ne.dispose(),G.dispose(),Q.dispose(),ae.dispose(),ve.dispose(),ht.dispose(),vt.dispose(),Ee.dispose(),st.dispose(),st.removeEventListener("sessionstart",sn),st.removeEventListener("sessionend",un),B&&(B.dispose(),B=null),Nt.stop()},this.renderBufferDirect=function(N,ue,V,te,q,be){ue===null&&(ue=K);let Ae=q.isMesh&&q.matrixWorld.determinant()<0,Re=(function(ze,Ze,He,Ie,ke){Ze.isScene!==!0&&(Ze=K),z.resetTextureUnits();let tt=Ze.fog,ct=Ie.isMeshStandardMaterial?Ze.environment:null,Tt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qn,Gt=(Ie.isMeshStandardMaterial?ae:Q).get(Ie.envMap||ct),St=Ie.vertexColors===!0&&!!He.attributes.color&&He.attributes.color.itemSize===4,pi=!!He.attributes.tangent&&(!!Ie.normalMap||Ie.anisotropy>0),Zn=!!He.morphAttributes.position,A=!!He.morphAttributes.normal,ne=!!He.morphAttributes.color,ge=ni;Ie.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(ge=v.toneMapping));let xe=He.morphAttributes.position||He.morphAttributes.normal||He.morphAttributes.color,Me=xe!==void 0?xe.length:0,Te=G.get(Ie),Xe=m.state.lights;if(E===!0&&(O===!0||ze!==P)){let pn=ze===P&&Ie.id===k;Le.setState(Ie,ze,pn)}let We=!1;Ie.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Xe.state.version||Te.outputColorSpace!==Tt||ke.isBatchedMesh&&Te.batching===!1?We=!0:ke.isBatchedMesh||Te.batching!==!0?ke.isInstancedMesh&&Te.instancing===!1?We=!0:ke.isInstancedMesh||Te.instancing!==!0?ke.isSkinnedMesh&&Te.skinning===!1?We=!0:ke.isSkinnedMesh||Te.skinning!==!0?ke.isInstancedMesh&&Te.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&Te.instancingColor===!1&&ke.instanceColor!==null||Te.envMap!==Gt||Ie.fog===!0&&Te.fog!==tt?We=!0:Te.numClippingPlanes===void 0||Te.numClippingPlanes===Le.numPlanes&&Te.numIntersection===Le.numIntersection?(Te.vertexAlphas!==St||Te.vertexTangents!==pi||Te.morphTargets!==Zn||Te.morphNormals!==A||Te.morphColors!==ne||Te.toneMapping!==ge||R.isWebGL2===!0&&Te.morphTargetsCount!==Me)&&(We=!0):We=!0:We=!0:We=!0:We=!0:(We=!0,Te.__version=Ie.version);let $e=Te.currentProgram;We===!0&&($e=xt(Ie,Ze,ke));let zt=!1,Vt=!1,dn=!1,dt=$e.getUniforms(),an=Te.uniforms;if(y.useProgram($e.program)&&(zt=!0,Vt=!0,dn=!0),Ie.id!==k&&(k=Ie.id,Vt=!0),zt||P!==ze){dt.setValue(pe,"projectionMatrix",ze.projectionMatrix),dt.setValue(pe,"viewMatrix",ze.matrixWorldInverse);let pn=dt.map.cameraPosition;pn!==void 0&&pn.setValue(pe,W.setFromMatrixPosition(ze.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(pe,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ie.isMeshPhongMaterial||Ie.isMeshToonMaterial||Ie.isMeshLambertMaterial||Ie.isMeshBasicMaterial||Ie.isMeshStandardMaterial||Ie.isShaderMaterial)&&dt.setValue(pe,"isOrthographic",ze.isOrthographicCamera===!0),P!==ze&&(P=ze,Vt=!0,dn=!0)}if(ke.isSkinnedMesh){dt.setOptional(pe,ke,"bindMatrix"),dt.setOptional(pe,ke,"bindMatrixInverse");let pn=ke.skeleton;pn&&(R.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),dt.setValue(pe,"boneTexture",pn.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ke.isBatchedMesh&&(dt.setOptional(pe,ke,"batchingTexture"),dt.setValue(pe,"batchingTexture",ke._matricesTexture,z));let Ni=He.morphAttributes;(Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0&&R.isWebGL2===!0)&&je.update(ke,He,$e),(Vt||Te.receiveShadow!==ke.receiveShadow)&&(Te.receiveShadow=ke.receiveShadow,dt.setValue(pe,"receiveShadow",ke.receiveShadow)),Ie.isMeshGouraudMaterial&&Ie.envMap!==null&&(an.envMap.value=Gt,an.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Vt&&(dt.setValue(pe,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&(Mn=dn,(Pn=an).ambientLightColor.needsUpdate=Mn,Pn.lightProbe.needsUpdate=Mn,Pn.directionalLights.needsUpdate=Mn,Pn.directionalLightShadows.needsUpdate=Mn,Pn.pointLights.needsUpdate=Mn,Pn.pointLightShadows.needsUpdate=Mn,Pn.spotLights.needsUpdate=Mn,Pn.spotLightShadows.needsUpdate=Mn,Pn.rectAreaLights.needsUpdate=Mn,Pn.hemisphereLights.needsUpdate=Mn),tt&&Ie.fog===!0&&we.refreshFogUniforms(an,tt),we.refreshMaterialUniforms(an,Ie,le,me,B),nr.upload(pe,bt(Te),an,z));var Pn,Mn;if(Ie.isShaderMaterial&&Ie.uniformsNeedUpdate===!0&&(nr.upload(pe,bt(Te),an,z),Ie.uniformsNeedUpdate=!1),Ie.isSpriteMaterial&&dt.setValue(pe,"center",ke.center),dt.setValue(pe,"modelViewMatrix",ke.modelViewMatrix),dt.setValue(pe,"normalMatrix",ke.normalMatrix),dt.setValue(pe,"modelMatrix",ke.matrixWorld),Ie.isShaderMaterial||Ie.isRawShaderMaterial){let pn=Ie.uniformsGroups;for(let Oa=0,hu=pn.length;Oa<hu;Oa++)if(R.isWebGL2){let Il=pn[Oa];vt.update(Il,$e),vt.bind(Il,$e)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $e})(N,ue,V,te,q);y.setMaterial(te,Ae);let U=V.index,D=1;if(te.wireframe===!0){if(U=fe.getWireframeAttribute(V),U===void 0)return;D=2}let oe=V.drawRange,de=V.attributes.position,_e=oe.start*D,ye=(oe.start+oe.count)*D;be!==null&&(_e=Math.max(_e,be.start*D),ye=Math.min(ye,(be.start+be.count)*D)),U!==null?(_e=Math.max(_e,0),ye=Math.min(ye,U.count)):de!=null&&(_e=Math.max(_e,0),ye=Math.min(ye,de.count));let Ue=ye-_e;if(Ue<0||Ue===1/0)return;let Ve;ht.setup(q,te,Re,V,U);let Oe=it;if(U!==null&&(Ve=se.get(U),Oe=gt,Oe.setIndex(Ve)),q.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*re()),Oe.setMode(pe.LINES)):Oe.setMode(pe.TRIANGLES);else if(q.isLine){let ze=te.linewidth;ze===void 0&&(ze=1),y.setLineWidth(ze*re()),q.isLineSegments?Oe.setMode(pe.LINES):q.isLineLoop?Oe.setMode(pe.LINE_LOOP):Oe.setMode(pe.LINE_STRIP)}else q.isPoints?Oe.setMode(pe.POINTS):q.isSprite&&Oe.setMode(pe.TRIANGLES);if(q.isBatchedMesh)Oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Oe.renderInstances(_e,Ue,q.count);else if(V.isInstancedBufferGeometry){let ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ze=Math.min(V.instanceCount,ze);Oe.renderInstances(_e,Ue,Ze)}else Oe.render(_e,Ue)},this.compile=function(N,ue,V=null){V===null&&(V=N),m=Ne.get(V),m.init(),_.push(m),V.traverseVisible((function(q){q.isLight&&q.layers.test(ue.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))})),N!==V&&N.traverseVisible((function(q){q.isLight&&q.layers.test(ue.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))})),m.setupLights(v._useLegacyLights);let te=new Set;return N.traverse((function(q){let be=q.material;if(be)if(Array.isArray(be))for(let Ae=0;Ae<be.length;Ae++){let Re=be[Ae];jt(Re,V,q),te.add(Re)}else jt(be,V,q),te.add(be)})),_.pop(),m=null,te},this.compileAsync=function(N,ue,V=null){let te=this.compile(N,ue,V);return new Promise((q=>{function be(){te.forEach((function(Ae){G.get(Ae).currentProgram.isReady()&&te.delete(Ae)})),te.size!==0?setTimeout(be,10):q(N)}ce.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)}))};let qt=null;function sn(){Nt.stop()}function un(){Nt.start()}let Nt=new bh;function mt(N,ue,V,te){if(N.visible===!1)return;if(N.layers.test(ue.layers)){if(N.isGroup)V=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ue);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||S.intersectsSprite(N)){te&&W.setFromMatrixPosition(N.matrixWorld).applyMatrix4(I);let be=ve.update(N),Ae=N.material;Ae.visible&&g.push(N,be,Ae,V,W.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||S.intersectsObject(N))){let be=ve.update(N),Ae=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),W.copy(N.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),W.copy(be.boundingSphere.center)),W.applyMatrix4(N.matrixWorld).applyMatrix4(I)),Array.isArray(Ae)){let Re=be.groups;for(let U=0,D=Re.length;U<D;U++){let oe=Re[U],de=Ae[oe.materialIndex];de&&de.visible&&g.push(N,be,de,V,W.z,oe)}}else Ae.visible&&g.push(N,be,Ae,V,W.z,null)}}let q=N.children;for(let be=0,Ae=q.length;be<Ae;be++)mt(q[be],ue,V,te)}function Ot(N,ue,V,te){let q=N.opaque,be=N.transmissive,Ae=N.transparent;m.setupLightsView(V),E===!0&&Le.setGlobalState(v.clippingPlanes,V),be.length>0&&(function(Re,U,D,oe){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;let _e=R.isWebGL2;B===null&&(B=new Tn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Ti:jn,minFilter:sr,samples:_e?4:0})),v.getDrawingBufferSize(j),_e?B.setSize(j.x,j.y):B.setSize(Gs(j.x),Gs(j.y));let ye=v.getRenderTarget();v.setRenderTarget(B),v.getClearColor(Z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear();let Ue=v.toneMapping;v.toneMapping=ni,_t(Re,D,oe),z.updateMultisampleRenderTarget(B),z.updateRenderTargetMipmap(B);let Ve=!1;for(let Oe=0,ze=U.length;Oe<ze;Oe++){let Ze=U[Oe],He=Ze.object,Ie=Ze.geometry,ke=Ze.material,tt=Ze.group;if(ke.side===2&&He.layers.test(oe.layers)){let ct=ke.side;ke.side=en,ke.needsUpdate=!0,Et(He,D,oe,Ie,ke,tt),ke.side=ct,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(z.updateMultisampleRenderTarget(B),z.updateRenderTargetMipmap(B)),v.setRenderTarget(ye),v.setClearColor(Z,X),v.toneMapping=Ue})(q,be,ue,V),te&&y.viewport(F.copy(te)),q.length>0&&_t(q,ue,V),be.length>0&&_t(be,ue,V),Ae.length>0&&_t(Ae,ue,V),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function _t(N,ue,V){let te=ue.isScene===!0?ue.overrideMaterial:null;for(let q=0,be=N.length;q<be;q++){let Ae=N[q],Re=Ae.object,U=Ae.geometry,D=te===null?Ae.material:te,oe=Ae.group;Re.layers.test(V.layers)&&Et(Re,ue,V,U,D,oe)}}function Et(N,ue,V,te,q,be){N.onBeforeRender(v,ue,V,te,q,be),N.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),q.onBeforeRender(v,ue,V,te,N,be),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,v.renderBufferDirect(V,ue,te,q,N,be),q.side=ri,q.needsUpdate=!0,v.renderBufferDirect(V,ue,te,q,N,be),q.side=2):v.renderBufferDirect(V,ue,te,q,N,be),N.onAfterRender(v,ue,V,te,q,be)}function xt(N,ue,V){ue.isScene!==!0&&(ue=K);let te=G.get(N),q=m.state.lights,be=m.state.shadowsArray,Ae=q.state.version,Re=Ee.getParameters(N,q.state,be,ue,V),U=Ee.getProgramCacheKey(Re),D=te.programs;te.environment=N.isMeshStandardMaterial?ue.environment:null,te.fog=ue.fog,te.envMap=(N.isMeshStandardMaterial?ae:Q).get(N.envMap||te.environment),D===void 0&&(N.addEventListener("dispose",xn),D=new Map,te.programs=D);let oe=D.get(U);if(oe!==void 0){if(te.currentProgram===oe&&te.lightsStateVersion===Ae)return yn(N,Re),oe}else Re.uniforms=Ee.getUniforms(N),N.onBuild(V,Re,v),N.onBeforeCompile(Re,v),oe=Ee.acquireProgram(Re,U),D.set(U,oe),te.uniforms=Re.uniforms;let de=te.uniforms;return(N.isShaderMaterial||N.isRawShaderMaterial)&&N.clipping!==!0||(de.clippingPlanes=Le.uniform),yn(N,Re),te.needsLights=(function(_e){return _e.isMeshLambertMaterial||_e.isMeshToonMaterial||_e.isMeshPhongMaterial||_e.isMeshStandardMaterial||_e.isShadowMaterial||_e.isShaderMaterial&&_e.lights===!0})(N),te.lightsStateVersion=Ae,te.needsLights&&(de.ambientLightColor.value=q.state.ambient,de.lightProbe.value=q.state.probe,de.directionalLights.value=q.state.directional,de.directionalLightShadows.value=q.state.directionalShadow,de.spotLights.value=q.state.spot,de.spotLightShadows.value=q.state.spotShadow,de.rectAreaLights.value=q.state.rectArea,de.ltc_1.value=q.state.rectAreaLTC1,de.ltc_2.value=q.state.rectAreaLTC2,de.pointLights.value=q.state.point,de.pointLightShadows.value=q.state.pointShadow,de.hemisphereLights.value=q.state.hemi,de.directionalShadowMap.value=q.state.directionalShadowMap,de.directionalShadowMatrix.value=q.state.directionalShadowMatrix,de.spotShadowMap.value=q.state.spotShadowMap,de.spotLightMatrix.value=q.state.spotLightMatrix,de.spotLightMap.value=q.state.spotLightMap,de.pointShadowMap.value=q.state.pointShadowMap,de.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=oe,te.uniformsList=null,oe}function bt(N){if(N.uniformsList===null){let ue=N.currentProgram.getUniforms();N.uniformsList=nr.seqWithValue(ue.seq,N.uniforms)}return N.uniformsList}function yn(N,ue){let V=G.get(N);V.outputColorSpace=ue.outputColorSpace,V.batching=ue.batching,V.instancing=ue.instancing,V.instancingColor=ue.instancingColor,V.skinning=ue.skinning,V.morphTargets=ue.morphTargets,V.morphNormals=ue.morphNormals,V.morphColors=ue.morphColors,V.morphTargetsCount=ue.morphTargetsCount,V.numClippingPlanes=ue.numClippingPlanes,V.numIntersection=ue.numClipIntersection,V.vertexAlphas=ue.vertexAlphas,V.vertexTangents=ue.vertexTangents,V.toneMapping=ue.toneMapping}Nt.setAnimationLoop((function(N){qt&&qt(N)})),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(N){qt=N,st.setAnimationLoop(N),N===null?Nt.stop():Nt.start()},st.addEventListener("sessionstart",sn),st.addEventListener("sessionend",un),this.render=function(N,ue){if(ue!==void 0&&ue.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(ue),ue=st.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,ue,T),m=Ne.get(N,_.length),m.init(),_.push(m),I.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),S.setFromProjectionMatrix(I),O=this.localClippingEnabled,E=Le.init(this.clippingPlanes,O),g=Ce.get(N,x.length),g.init(),x.push(g),mt(N,ue,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,he),this.info.render.frame++,E===!0&&Le.beginShadows();let V=m.state.shadowsArray;if(Fe.render(V,N,ue),E===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(g,N),m.setupLights(v._useLegacyLights),ue.isArrayCamera){let te=ue.cameras;for(let q=0,be=te.length;q<be;q++){let Ae=te[q];Ot(g,N,Ae,Ae.viewport)}}else Ot(g,N,ue);T!==null&&(z.updateMultisampleRenderTarget(T),z.updateRenderTargetMipmap(T)),N.isScene===!0&&N.onAfterRender(v,N,ue),ht.resetDefaultState(),k=-1,P=null,_.pop(),m=_.length>0?_[_.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(N,ue,V){G.get(N.texture).__webglTexture=ue,G.get(N.depthTexture).__webglTexture=V;let te=G.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=V===void 0,te.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,ue){let V=G.get(N);V.__webglFramebuffer=ue,V.__useDefaultFramebuffer=ue===void 0},this.setRenderTarget=function(N,ue=0,V=0){T=N,w=ue,b=V;let te=!0,q=null,be=!1,Ae=!1;if(N){let Re=G.get(N);Re.__useDefaultFramebuffer!==void 0?(y.bindFramebuffer(pe.FRAMEBUFFER,null),te=!1):Re.__webglFramebuffer===void 0?z.setupRenderTarget(N):Re.__hasExternalTextures&&z.rebindTextures(N,G.get(N.texture).__webglTexture,G.get(N.depthTexture).__webglTexture);let U=N.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&(Ae=!0);let D=G.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(q=Array.isArray(D[ue])?D[ue][V]:D[ue],be=!0):q=R.isWebGL2&&N.samples>0&&z.useMultisampledRTT(N)===!1?G.get(N).__webglMultisampledFramebuffer:Array.isArray(D)?D[V]:D,F.copy(N.viewport),ie.copy(N.scissor),C=N.scissorTest}else F.copy(L).multiplyScalar(le).floor(),ie.copy(J).multiplyScalar(le).floor(),C=Se;if(y.bindFramebuffer(pe.FRAMEBUFFER,q)&&R.drawBuffers&&te&&y.drawBuffers(N,q),y.viewport(F),y.scissor(ie),y.setScissorTest(C),be){let Re=G.get(N.texture);pe.framebufferTexture2D(pe.FRAMEBUFFER,pe.COLOR_ATTACHMENT0,pe.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re.__webglTexture,V)}else if(Ae){let Re=G.get(N.texture),U=ue||0;pe.framebufferTextureLayer(pe.FRAMEBUFFER,pe.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,U)}k=-1},this.readRenderTargetPixels=function(N,ue,V,te,q,be,Ae){if(!N||!N.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=G.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){y.bindFramebuffer(pe.FRAMEBUFFER,Re);try{let U=N.texture,D=U.format,oe=U.type;if(D!==fn&&ut.convert(D)!==pe.getParameter(pe.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let de=oe===Ti&&(ce.has("EXT_color_buffer_half_float")||R.isWebGL2&&ce.has("EXT_color_buffer_float"));if(!(oe===jn||ut.convert(oe)===pe.getParameter(pe.IMPLEMENTATION_COLOR_READ_TYPE)||oe===Dn&&(R.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float"))||de))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ue>=0&&ue<=N.width-te&&V>=0&&V<=N.height-q&&pe.readPixels(ue,V,te,q,ut.convert(D),ut.convert(oe),be)}finally{let U=T!==null?G.get(T).__webglFramebuffer:null;y.bindFramebuffer(pe.FRAMEBUFFER,U)}}},this.copyFramebufferToTexture=function(N,ue,V=0){let te=Math.pow(2,-V),q=Math.floor(ue.image.width*te),be=Math.floor(ue.image.height*te);z.setTexture2D(ue,0),pe.copyTexSubImage2D(pe.TEXTURE_2D,V,0,0,N.x,N.y,q,be),y.unbindTexture()},this.copyTextureToTexture=function(N,ue,V,te=0){let q=ue.image.width,be=ue.image.height,Ae=ut.convert(V.format),Re=ut.convert(V.type);z.setTexture2D(V,0),pe.pixelStorei(pe.UNPACK_FLIP_Y_WEBGL,V.flipY),pe.pixelStorei(pe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),pe.pixelStorei(pe.UNPACK_ALIGNMENT,V.unpackAlignment),ue.isDataTexture?pe.texSubImage2D(pe.TEXTURE_2D,te,N.x,N.y,q,be,Ae,Re,ue.image.data):ue.isCompressedTexture?pe.compressedTexSubImage2D(pe.TEXTURE_2D,te,N.x,N.y,ue.mipmaps[0].width,ue.mipmaps[0].height,Ae,ue.mipmaps[0].data):pe.texSubImage2D(pe.TEXTURE_2D,te,N.x,N.y,Ae,Re,ue.image),te===0&&V.generateMipmaps&&pe.generateMipmap(pe.TEXTURE_2D),y.unbindTexture()},this.copyTextureToTexture3D=function(N,ue,V,te,q=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let be=N.max.x-N.min.x+1,Ae=N.max.y-N.min.y+1,Re=N.max.z-N.min.z+1,U=ut.convert(te.format),D=ut.convert(te.type),oe;if(te.isData3DTexture)z.setTexture3D(te,0),oe=pe.TEXTURE_3D;else{if(!te.isDataArrayTexture&&!te.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");z.setTexture2DArray(te,0),oe=pe.TEXTURE_2D_ARRAY}pe.pixelStorei(pe.UNPACK_FLIP_Y_WEBGL,te.flipY),pe.pixelStorei(pe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),pe.pixelStorei(pe.UNPACK_ALIGNMENT,te.unpackAlignment);let de=pe.getParameter(pe.UNPACK_ROW_LENGTH),_e=pe.getParameter(pe.UNPACK_IMAGE_HEIGHT),ye=pe.getParameter(pe.UNPACK_SKIP_PIXELS),Ue=pe.getParameter(pe.UNPACK_SKIP_ROWS),Ve=pe.getParameter(pe.UNPACK_SKIP_IMAGES),Oe=V.isCompressedTexture?V.mipmaps[q]:V.image;pe.pixelStorei(pe.UNPACK_ROW_LENGTH,Oe.width),pe.pixelStorei(pe.UNPACK_IMAGE_HEIGHT,Oe.height),pe.pixelStorei(pe.UNPACK_SKIP_PIXELS,N.min.x),pe.pixelStorei(pe.UNPACK_SKIP_ROWS,N.min.y),pe.pixelStorei(pe.UNPACK_SKIP_IMAGES,N.min.z),V.isDataTexture||V.isData3DTexture?pe.texSubImage3D(oe,q,ue.x,ue.y,ue.z,be,Ae,Re,U,D,Oe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),pe.compressedTexSubImage3D(oe,q,ue.x,ue.y,ue.z,be,Ae,Re,U,Oe.data)):pe.texSubImage3D(oe,q,ue.x,ue.y,ue.z,be,Ae,Re,U,D,Oe),pe.pixelStorei(pe.UNPACK_ROW_LENGTH,de),pe.pixelStorei(pe.UNPACK_IMAGE_HEIGHT,_e),pe.pixelStorei(pe.UNPACK_SKIP_PIXELS,ye),pe.pixelStorei(pe.UNPACK_SKIP_ROWS,Ue),pe.pixelStorei(pe.UNPACK_SKIP_IMAGES,Ve),q===0&&te.generateMipmaps&&pe.generateMipmap(oe),y.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?z.setTextureCube(N,0):N.isData3DTexture?z.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?z.setTexture2DArray(N,0):z.setTexture2D(N,0),y.unbindTexture()},this.resetState=function(){w=0,b=0,T=null,y.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Ei:gh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?Pt:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Go=class extends Wr{};Go.prototype.isWebGL1Renderer=!0;var Ks=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new H,Qs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var sm=new H,am=new H,om=new H,lm=new Pe,cm=new Pe,hm=new Je,um=new H,dm=new H,pm=new H,mm=new Pe,fm=new Pe,gm=new Pe;var vm=new H,_m=new H;var xm=new H,ym=new Rt,Mm=new Rt,bm=new H,Sm=new Je,wm=new H,Em=new An,Tm=new Je,Am=new lr;var $s=class extends tn{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rm=new Je,Cm=new Je;var fr=class extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new Je,Yc=new Je,As=[],Zc=new hn,dp=new Je,Lr=new Kt,Ir=new An,ea=class extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Zc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Zc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Ir.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qi),Yc.multiplyMatrices(n,Qi),Lr.matrixWorld=Yc,Lr.raycast(e,As);for(let a=0,o=As.length;a<o;a++){let c=As[a];c.instanceId=s,c.object=this,t.push(c)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ho=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Pm=new Je,Lm=new Je,Im=new Je,Um=new Je,Dm=new hr,Nm=new hn,Om=new An,Fm=new H,Bm=new Ho,zm=new Kt;var km=new H,Gm=new H,Vm=new Je,Hm=new lr,Wm=new An;var Xm=new H,jm=new H;var qm=new Je,Ym=new lr,Zm=new An,Jm=new H;var ta=class extends tn{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Pe:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,i=[],s=[],a=[],o=new H,c=new Je;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new H)}s[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Lt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Lt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends _n{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Pe,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends Xr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Rs=new H,po=new wl,mo=new wl,fo=new wl,jr=class extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Rs.subVectors(i[0],i[1]).add(i[0]),o=Rs);let u=i[l%s],d=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Rs.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),po.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,g,m),mo.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,g,m),fo.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,g,m)}else this.curveType==="catmullrom"&&(po.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),mo.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),fo.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(po.calc(h),mo.calc(h),fo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jc(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Or(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Fr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var na=class extends _n{constructor(e=new Pe,t=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Pe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends _n{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y),Fr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends _n{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends _n{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends _n{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends _n{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y),Or(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Jc(o,c.x,l.x,h.x,u.x),Jc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Pe().fromArray(i))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:jr,CubicBezierCurve:na,CubicBezierCurve3:Xo,EllipseCurve:Xr,LineCurve:ia,LineCurve3:jo,QuadraticBezierCurve:ra,QuadraticBezierCurve3:sa,SplineCurve:aa}),qo=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new oa[i.type]().fromJSON(i))}return this}},Ai=class extends qo{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ra(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new na(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i),new Pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Xr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gr=class r extends Mt{constructor(e=[new Pe(0,-.5),new Pe(.5,0),new Pe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Lt(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new H,d=new Pe,p=new H,f=new H,g=new H,m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=1*x,p.y=-m,p.z=0*x,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=1*x,p.y=-m,p.z=0*x,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(f)}for(let _=0;_<=t;_++){let v=n+_*h*i,M=Math.sin(v),w=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*w,a.push(u.x,u.y,u.z),d.x=_/t,d.y=b/(e.length-1),o.push(d.x,d.y);let T=c[3*b+0]*M,k=c[3*b+1],P=c[3*b+0]*w;l.push(T,k,P)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,w=M,b=M+e.length,T=M+e.length+1,k=M+1;s.push(w,b,k),s.push(T,k,b)}this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Yo=class r extends gr{constructor(e=1,t=1,n=4,i=8){let s=new Ai;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Zo=class r extends Mt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new H,h=new Pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vr=class r extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,x=0;function _(v){let M=f,w=new Pe,b=new H,T=0,k=v===!0?e:t,P=v===!0?1:-1;for(let ie=1;ie<=i;ie++)u.push(0,m*P,0),d.push(0,P,0),p.push(.5,.5),f++;let F=f;for(let ie=0;ie<=i;ie++){let C=ie/i*c+o,Z=Math.cos(C),X=Math.sin(C);b.x=k*X,b.y=m*P,b.z=k*Z,u.push(b.x,b.y,b.z),d.push(0,P,0),w.x=.5*Z+.5,w.y=.5*X*P+.5,p.push(w.x,w.y),f++}for(let ie=0;ie<i;ie++){let C=M+ie,Z=F+ie;v===!0?h.push(Z,Z+1,C):h.push(Z+1,Z,C),T+=3}l.addGroup(x,T,v===!0?1:2),x+=T}(function(){let v=new H,M=new H,w=0,b=(t-e)/n;for(let T=0;T<=s;T++){let k=[],P=T/s,F=P*(t-e)+e;for(let ie=0;ie<=i;ie++){let C=ie/i,Z=C*c+o,X=Math.sin(Z),$=Math.cos(Z);M.x=F*X,M.y=-P*n+m,M.z=F*$,u.push(M.x,M.y,M.z),v.set(X,b,$).normalize(),d.push(v.x,v.y,v.z),p.push(C,1-P),k.push(f++)}g.push(k)}for(let T=0;T<i;T++)for(let k=0;k<s;k++){let P=g[k][T],F=g[k+1][T],ie=g[k+1][T+1],C=g[k][T+1];h.push(P,F,C),h.push(F,ie,C),w+=6}l.addGroup(x,w,0),x+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jo=class r extends vr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class r extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,g){let m=g+1,x=[];for(let _=0;_<=m;_++){x[_]=[];let v=d.clone().lerp(f,_/m),M=p.clone().lerp(f,_/m),w=m-_;for(let b=0;b<=w;b++)x[_][b]=b===0&&_===m?v:v.clone().lerp(M,b/w)}for(let _=0;_<m;_++)for(let v=0;v<2*(m-_)-1;v++){let M=Math.floor(v/2);v%2==0?(c(x[_][M+1]),c(x[_+1][M]),c(x[_][M])):(c(x[_][M+1]),c(x[_+1][M+1]),c(x[_+1][M]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new H,f=new H,g=new H;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],g),o(p,f,g,d)})(i),(function(d){let p=new H;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new H;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new H,g=new H,m=new H,x=new H,_=new Pe,v=new Pe,M=new Pe;for(let w=0,b=0;w<s.length;w+=9,b+=6){f.set(s[w+0],s[w+1],s[w+2]),g.set(s[w+3],s[w+4],s[w+5]),m.set(s[w+6],s[w+7],s[w+8]),_.set(a[b+0],a[b+1]),v.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),x.copy(f).add(g).add(m).divideScalar(3);let T=u(x);h(_,b+0,f,T),h(v,b+2,g,T),h(M,b+4,m,T)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],x=a[f+4],_=Math.max(g,m,x),v=Math.min(g,m,x);_>.9&&v<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(s.slice(),3)),this.setAttribute("uv",new qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ko=class r extends Ri{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Cs=new H,Ps=new H,go=new H,Ls=new bi,Qo=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(er*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:g,b:m,c:x}=Ls;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),x.fromBufferAttribute(o,l[2]),Ls.getNormal(go),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,M=u[_],w=u[v],b=Ls[h[_]],T=Ls[h[v]],k=`${M}_${w}`,P=`${w}_${M}`;P in d&&d[P]?(go.dot(d[P].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(T.x,T.y,T.z)),d[P]=null):k in d||(d[k]={index0:l[_],index1:l[v],normal:go.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];Cs.fromBufferAttribute(o,g),Ps.fromBufferAttribute(o,m),p.push(Cs.x,Cs.y,Cs.z),p.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new qe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},_r=class extends Ai{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ai().fromJSON(i))}return this}},pp=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Kc(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,d,p;if(n&&(s=(function(f,g,m,x){let _=[],v,M,w,b,T;for(v=0,M=g.length;v<M;v++)w=g[v]*x,b=v<M-1?g[v+1]*x:f.length,T=Kc(f,w,b,x,!1),T===T.next&&(T.steiner=!0),_.push(Mp(T));for(_.sort(_p),v=0;v<_.length;v++)m=xp(_[v],m);return m})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return qr(s,a,t,o,c,p,0),a};function Kc(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let d=c,p=l-h;d<l;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Qc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Qc(s,r[s],r[s+1],a);return a&&xa(a,a.next)&&(Zr(a),a=a.next),a}function Ci(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!xa(n,n.next)&&yt(n.prev,n,n.next)!==0)n=n.next;else{if(Zr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=$o(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,x,_,v,M,w,b,T,k=1;do{for(x=g,g=null,M=null,w=0;x;){for(w++,_=x,b=0,m=0;m<k&&(b++,_=_.nextZ,_);m++);for(T=k;b>0||T>0&&_;)b!==0&&(T===0||!_||x.z<=_.z)?(v=x,x=x.nextZ,b--):(v=_,_=_.nextZ,T--),M?M.nextZ=v:g=v,v.prevZ=M,M=v;x=_}M.nextZ=null,k*=2}while(w>1)})(f)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?fp(r,n,i,s):mp(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zr(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?qr(r=gp(Ci(r),e,t),e,t,n,i,s,2):a===2&&vp(r,e,t,n,i,s):qr(Ci(r),e,t,n,i,s,1);break}}function mp(r){let e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,d=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&$i(i,o,s,c,a,l,f.x,f.y)&&yt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function fp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(yt(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<u?h<d?h:d:u<d?u:d,g=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,x=$o(p,f,e,t,n),_=$o(g,m,e,t,n),v=r.prevZ,M=r.nextZ;for(;v&&v.z>=x&&M&&M.z<=_;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&$i(o,h,c,u,l,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&$i(o,h,c,u,l,d,M.x,M.y)&&yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=x;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&$i(o,h,c,u,l,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&$i(o,h,c,u,l,d,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gp(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!xa(i,s)&&Rh(i,n,n.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return Ci(n)}function vp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bp(a,o)){let c=Ch(a,o);return a=Ci(a,a.next),c=Ci(c,c.next),qr(a,e,t,n,i,s,0),void qr(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function _p(r,e){return r.x-e.x}function xp(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do l>=o.x&&o.x>=d&&l!==o.x&&$i(h<p?l:c,h,d,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),Yr(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&yp(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Ch(t,r);return Ci(n,n.next),Ci(t,t.next)}function yp(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function $o(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Mp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $i(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function bp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Rh(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Yr(r,e)&&Yr(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||xa(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xa(r,e){return r.x===e.x&&r.y===e.y}function Rh(r,e,t,n){let i=Us(yt(r,e,t)),s=Us(yt(r,e,n)),a=Us(yt(t,n,r)),o=Us(yt(t,n,e));return i!==s&&a!==o||!(i!==0||!Is(r,t,e))||!(s!==0||!Is(r,n,e))||!(a!==0||!Is(t,r,n))||!(o!==0||!Is(t,e,n))}function Is(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Us(r){return r>0?1:r<0?-1:0}function Yr(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function Ch(r,e){let t=new el(r.i,r.x,r.y),n=new el(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qc(r,e,t,n){let i=new el(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function el(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ii=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];$c(e),eh(n,e);let a=e.length;t.forEach($c);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,eh(n,t[c]);let o=pp(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function $c(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function eh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Jr=class r extends Mt{constructor(e=new _r([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Sp,v,M,w,b,T,k=!1;x&&(v=x.getSpacedPoints(h),k=!0,d=!1,M=x.computeFrenetFrames(h,!1),w=new H,b=new H,T=new H),d||(m=0,p=0,f=0,g=0);let P=o.extractPoints(l),F=P.shape,ie=P.holes;if(!ii.isClockWise(F)){F=F.reverse();for(let W=0,K=ie.length;W<K;W++){let re=ie[W];ii.isClockWise(re)&&(ie[W]=re.reverse())}}let C=ii.triangulateShape(F,ie),Z=F;for(let W=0,K=ie.length;W<K;W++){let re=ie[W];F=F.concat(re)}function X(W,K,re){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(K,re)}let $=F.length,me=C.length;function le(W,K,re){let ce,R,y,Y=W.x-K.x,G=W.y-K.y,z=re.x-W.x,Q=re.y-W.y,ae=Y*Y+G*G,se=Y*Q-G*z;if(Math.abs(se)>Number.EPSILON){let fe=Math.sqrt(ae),ve=Math.sqrt(z*z+Q*Q),Ee=K.x-G/fe,we=K.y+Y/fe,Ce=((re.x-Q/ve-Ee)*Q-(re.y+z/ve-we)*z)/(Y*Q-G*z);ce=Ee+Y*Ce-W.x,R=we+G*Ce-W.y;let Ne=ce*ce+R*R;if(Ne<=2)return new Pe(ce,R);y=Math.sqrt(Ne/2)}else{let fe=!1;Y>Number.EPSILON?z>Number.EPSILON&&(fe=!0):Y<-Number.EPSILON?z<-Number.EPSILON&&(fe=!0):Math.sign(G)===Math.sign(Q)&&(fe=!0),fe?(ce=-G,R=Y,y=Math.sqrt(ae)):(ce=Y,R=G,y=Math.sqrt(ae/2))}return new Pe(ce/y,R/y)}let ee=[];for(let W=0,K=Z.length,re=K-1,ce=W+1;W<K;W++,re++,ce++)re===K&&(re=0),ce===K&&(ce=0),ee[W]=le(Z[W],Z[re],Z[ce]);let he=[],L,J=ee.concat();for(let W=0,K=ie.length;W<K;W++){let re=ie[W];L=[];for(let ce=0,R=re.length,y=R-1,Y=ce+1;ce<R;ce++,y++,Y++)y===R&&(y=0),Y===R&&(Y=0),L[ce]=le(re[ce],re[y],re[Y]);he.push(L),J=J.concat(L)}for(let W=0;W<m;W++){let K=W/m,re=p*Math.cos(K*Math.PI/2),ce=f*Math.sin(K*Math.PI/2)+g;for(let R=0,y=Z.length;R<y;R++){let Y=X(Z[R],ee[R],ce);E(Y.x,Y.y,-re)}for(let R=0,y=ie.length;R<y;R++){let Y=ie[R];L=he[R];for(let G=0,z=Y.length;G<z;G++){let Q=X(Y[G],L[G],ce);E(Q.x,Q.y,-re)}}}let Se=f+g;for(let W=0;W<$;W++){let K=d?X(F[W],J[W],Se):F[W];k?(b.copy(M.normals[0]).multiplyScalar(K.x),w.copy(M.binormals[0]).multiplyScalar(K.y),T.copy(v[0]).add(b).add(w),E(T.x,T.y,T.z)):E(K.x,K.y,0)}for(let W=1;W<=h;W++)for(let K=0;K<$;K++){let re=d?X(F[K],J[K],Se):F[K];k?(b.copy(M.normals[W]).multiplyScalar(re.x),w.copy(M.binormals[W]).multiplyScalar(re.y),T.copy(v[W]).add(b).add(w),E(T.x,T.y,T.z)):E(re.x,re.y,u/h*W)}for(let W=m-1;W>=0;W--){let K=W/m,re=p*Math.cos(K*Math.PI/2),ce=f*Math.sin(K*Math.PI/2)+g;for(let R=0,y=Z.length;R<y;R++){let Y=X(Z[R],ee[R],ce);E(Y.x,Y.y,u+re)}for(let R=0,y=ie.length;R<y;R++){let Y=ie[R];L=he[R];for(let G=0,z=Y.length;G<z;G++){let Q=X(Y[G],L[G],ce);k?E(Q.x,Q.y+v[h-1].y,v[h-1].x+re):E(Q.x,Q.y,u+re)}}}function S(W,K){let re=W.length;for(;--re>=0;){let ce=re,R=re-1;R<0&&(R=W.length-1);for(let y=0,Y=h+2*m;y<Y;y++){let G=$*y,z=$*(y+1);B(K+ce+G,K+R+G,K+R+z,K+ce+z)}}}function E(W,K,re){c.push(W),c.push(K),c.push(re)}function O(W,K,re){I(W),I(K),I(re);let ce=i.length/3,R=_.generateTopUV(n,i,ce-3,ce-2,ce-1);j(R[0]),j(R[1]),j(R[2])}function B(W,K,re,ce){I(W),I(K),I(ce),I(K),I(re),I(ce);let R=i.length/3,y=_.generateSideWallUV(n,i,R-6,R-3,R-2,R-1);j(y[0]),j(y[1]),j(y[3]),j(y[1]),j(y[2]),j(y[3])}function I(W){i.push(c[3*W+0]),i.push(c[3*W+1]),i.push(c[3*W+2])}function j(W){s.push(W.x),s.push(W.y)}(function(){let W=i.length/3;if(d){let K=0,re=$*K;for(let ce=0;ce<me;ce++){let R=C[ce];O(R[2]+re,R[1]+re,R[0]+re)}K=h+2*m,re=$*K;for(let ce=0;ce<me;ce++){let R=C[ce];O(R[0]+re,R[1]+re,R[2]+re)}}else{for(let K=0;K<me;K++){let re=C[K];O(re[2],re[1],re[0])}for(let K=0;K<me;K++){let re=C[K];O(re[0]+$*h,re[1]+$*h,re[2]+$*h)}}n.addGroup(W,i.length/3-W,0)})(),(function(){let W=i.length/3,K=0;S(Z,K),K+=Z.length;for(let re=0,ce=ie.length;re<ce;re++){let R=ie[re];S(R,K),K+=R.length}n.addGroup(W,i.length/3-W,1)})()}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new oa[i.type]().fromJSON(i)),new r(n,e.options)}},Sp={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new Pe(s,a),new Pe(o,c),new Pe(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Pe(a,1-c),new Pe(l,1-u),new Pe(d,1-f),new Pe(g,1-x)]:[new Pe(o,1-c),new Pe(h,1-u),new Pe(p,1-f),new Pe(m,1-x)]}},tl=class r extends Ri{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},nl=class r extends Ri{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},il=class r extends Mt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new H,f=new Pe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let x=s+m/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let x=0;x<n;x++){let _=x+m,v=_,M=_+n+1,w=_+n+2,b=_+1;o.push(v,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},rl=class r extends Mt{constructor(e=new _r([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ii.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=f.length;m<x;m++){let _=f[m];ii.isClockWise(_)===!0&&(f[m]=_.reverse())}let g=ii.triangulateShape(p,f);for(let m=0,x=f.length;m<x;m++){let _=f[m];p=p.concat(_)}for(let m=0,x=p.length;m<x;m++){let _=p[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,x=g.length;m<x;m++){let _=g[m],v=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(v,M,w),c+=3}}this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Kr=class r extends Mt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new H,d=new H,p=[],f=[],g=[],m=[];for(let x=0;x<=n;x++){let _=[],v=x/n,M=0;x===0&&a===0?M=.5/t:x===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let b=w/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+M,1-v),_.push(l++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let v=h[x][_+1],M=h[x][_],w=h[x+1][_],b=h[x+1][_+1];(x!==0||a>0)&&p.push(v,M,b),(x!==n-1||c<Math.PI)&&p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sl=class r extends Ri{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qr=class r extends Mt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new H,u=new H,d=new H;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,x=(i+1)*(p-1)+f,_=(i+1)*p+f;a.push(g,m,_),a.push(m,x,_)}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},al=class r extends Mt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new H,d=new H,p=new H,f=new H,g=new H,m=new H,x=new H;for(let v=0;v<=n;++v){let M=v/n*s*Math.PI*2;_(M,s,a,e,p),_(M+.01,s,a,e,f),m.subVectors(f,p),x.addVectors(f,p),g.crossVectors(m,x),x.crossVectors(g,m),g.normalize(),x.normalize();for(let w=0;w<=i;++w){let b=w/i*Math.PI*2,T=-t*Math.cos(b),k=t*Math.sin(b);u.x=p.x+(T*x.x+k*g.x),u.y=p.y+(T*x.y+k*g.y),u.z=p.z+(T*x.z+k*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(v/n),h.push(w/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let w=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),T=(i+1)*v+M,k=(i+1)*(v-1)+M;o.push(w,b,k),o.push(b,T,k)}function _(v,M,w,b,T){let k=Math.cos(v),P=Math.sin(v),F=w/M*v,ie=Math.cos(F);T.x=b*(2+ie)*.5*k,T.y=b*(2+ie)*P*.5,T.z=b*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$r=class r extends Mt{constructor(e=new sa(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,c=new H,l=new Pe,h=new H,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let x=a.normals[m],_=a.binormals[m];for(let v=0;v<=i;v++){let M=v/i*Math.PI*2,w=Math.sin(M),b=-Math.cos(M);c.x=b*x.x+w*_.x,c.y=b*x.y+w*_.y,c.z=b*x.z+w*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let x=0;x<=i;x++)l.x=m/t,l.y=x/i,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let x=1;x<=i;x++){let _=(i+1)*(m-1)+(x-1),v=(i+1)*m+(x-1),M=(i+1)*m+x,w=(i+1)*(m-1)+x;f.push(_,v,w),f.push(v,M,w)}})()})(),this.setIndex(f),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ol=class extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new H,s=new H;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),x=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,x),th(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),th(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function th(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Km=Object.freeze({__proto__:null,BoxGeometry:oi,CapsuleGeometry:Yo,CircleGeometry:Zo,ConeGeometry:Jo,CylinderGeometry:vr,DodecahedronGeometry:Ko,EdgesGeometry:Qo,ExtrudeGeometry:Jr,IcosahedronGeometry:tl,LatheGeometry:gr,OctahedronGeometry:nl,PlaneGeometry:ur,PolyhedronGeometry:Ri,RingGeometry:il,ShapeGeometry:rl,SphereGeometry:Kr,TetrahedronGeometry:sl,TorusGeometry:Qr,TorusKnotGeometry:al,TubeGeometry:$r,WireframeGeometry:ol}),la=class extends ai{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var es=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ca=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function wp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var xr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:s=e,o=2*t-n;break;case lc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=e,c=2*n-t;break;case lc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,x=-d*m+2*d*g-d*f,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*g+.5*f,M=p*m-p*g;for(let w=0;w!==o;++w)s[w]=x*a[h+w]+_*a[l+w]+v*a[c+w]+M*a[u+w];return s}},cl=class extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},hl=class extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&wp(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ha,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};En.prototype.TimeBufferType=Float32Array,En.prototype.ValueBufferType=Float32Array,En.prototype.DefaultInterpolation=Os;var yi=class extends En{};yi.prototype.ValueTypeName="bool",yi.prototype.ValueBufferType=Array,yi.prototype.DefaultInterpolation=Ns,yi.prototype.InterpolantFactoryMethodLinear=void 0,yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends En{};ul.prototype.ValueTypeName="color";var dl=class extends En{};dl.prototype.ValueTypeName="number";var pl=class extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)vn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Br=class extends En{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion",Br.prototype.DefaultInterpolation=Os,Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends En{};Mi.prototype.ValueTypeName="string",Mi.prototype.ValueBufferType=Array,Mi.prototype.DefaultInterpolation=Ns,Mi.prototype.InterpolantFactoryMethodLinear=void 0,Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends En{};ml.prototype.ValueTypeName="vector";var nh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},fl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Ep=new fl,ts=class{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=nh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Vr("img");function c(){h(),nh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ha=class extends ts{constructor(e){super(e)}load(e,t,n,i){let s=new tn,a=new gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},ua=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},da=class extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vo=new Je,ih=new H,rh=new H,vl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qm=new Je,$m=new H,ef=new H;var _l=class extends vl{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pa=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ma=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var tf=new Je,nf=new Je,rf=new Je;var sf=new H,af=new vn,of=new H,lf=new H;var cf=new H,hf=new vn,uf=new H,df=new H;var El="\\[\\]\\.:\\/",Tp=new RegExp("["+El+"]","g"),_o="[^"+El+"]",Ap="[^"+El.replace("\\.","")+"]",Rp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",_o)+/(WCOD+)?/.source.replace("WCOD",Ap)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_o)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_o)+"$"),Cp=["material","materials","bones","map"],ft=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(e){let t=Rp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Cp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=class{constructor(r,e,t){let n=t||ft.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pf=new Float32Array(1);var fa=class extends Vo{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var mf=new Pe;var ff=new H,gf=new H;var vf=new H;var _f=new H,xf=new Je,yf=new Je;var Mf=new H,bf=new Qe,Sf=new Qe;var wf=new H,Ef=new H,Tf=new H;var Af=new H,Rf=new Hr;var Cf=new hn;var Pf=new H;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Ph(r,e){let{V:t,plate:n,rod:i,disc:s,bar:a,pin:o,bolts:c,box:l,conduit:h,append:u,parts:d,identity:p,materials:f}=e,g=-.31,m=f.paint,x=f.edge.clone();x.color.setHex(11971473),x.roughness=.55;let _=m.clone();_.color.setHex(16772258),_.roughness=.54;let v=(B,I=g)=>t(B[0],B[1],I),M=[-.68,1.58],w=[4.36,4.25],b=[4.79,4.96],T=[4.14,1.15],k=[4.24,1.61],P=[5.17,1.49],F=[4.67,.892];function ie(B,I,j,W,K,re){let ce=[],R=[],y=[],Y=0;I.forEach(([ae,se],fe)=>{if(fe&&(Y+=Math.hypot(ae-I[fe-1][0],se-I[fe-1][1])),ce.push(ae,se,j,ae,se,W),R.push(Y*.42,0,Y*.42,(W-j)*.42),fe){let ve=2*fe;y.push(ve-2,ve-1,ve,ve,ve-1,ve+1)}});let G=new r.BufferGeometry;G.setAttribute("position",new r.Float32BufferAttribute(ce,3)),G.setAttribute("uv",new r.Float32BufferAttribute(R,2)),G.setIndex(y),G.computeVertexNormals(),G.computeBoundingBox();let z=G.boundingBox.getCenter(t());G.translate(-z.x,-z.y,-z.z),G.name=B;let Q=K.clone();Q.side=r.DoubleSide,u(G,Q,z,p,t(1,1,1),re)}function C(B,I,j,W,K){let re=[...I,...j.slice(1,-1)],ce=W*.5-.024;for(let R of[-1,1])n(B+"-flank",re,g+R*ce,.055,K,"braccio",.01);ie(B+"-lower",I,g-ce,g+ce,K,"braccio"),ie(B+"-upper",j,g-ce,g+ce,K,"braccio");for(let[R,y]of[I,j].entries())for(let Y of[-1,1])h(B+"-seam-"+R+"-"+Y,y.map(G=>v(G,g+Y*(ce+.012))),.0075,K,"braccio",40)}C("320d-reach-boom",[[-.73,1.46],[-.44,1.55],[-.06,2.1],[.29,2.62],[.49,2.82],[.72,2.99],[1.14,3.17],[1.98,3.37],[2.98,3.58],[3.84,3.78],[4.19,3.9],[4.38,4.04],[4.49,4.17],[4.48,4.28],[4.4,4.355]],[[4.4,4.355],[4.29,4.373],[4.11,4.304],[3.8,4.251],[3.08,4.186],[2.26,4.08],[1.29,4.007],[.9,3.95],[.62,3.87],[.41,3.79],[.2,3.675],[.045,3.56],[-.105,3.415],[-.31,3.16],[-.6,2.72],[-.96,1.88],[-1.012,1.68],[-.949,1.53],[-.85,1.475],[-.73,1.46]],.494,m),C("320d-dipper",[[4.805,5.018],[4.875,4.992],[4.96,4.9],[5.15,4.62],[5.3,4.395],[5.325,4.305],[5.306,4.015],[5.331,3.885],[5.32,3.817],[5.245,3.79],[5.184,3.74],[5.073,3.51],[4.94,3.105],[4.775,2.65],[4.59,2.16],[4.437,1.64],[4.25,1.246],[4.215,1.151],[4.172,1.1],[4.117,1.072]],[[4.117,1.072],[4.055,1.08],[3.994,1.145],[3.98,1.23],[4.004,1.41],[4.05,1.81],[4.12,2.64],[4.17,3.34],[4.205,3.85],[4.211,4.19],[4.25,4.346],[4.365,4.54],[4.47,4.695],[4.59,4.84],[4.728,4.984],[4.77,5.013],[4.805,5.018]],.365,_);function le(B,I,j,W=m,K="braccio"){for(let re of[-1,1])s(...B,g+re*j*.5,I,.059,W,K,32),s(...B,g+re*(j*.5+.035),I*.68,.027,"iron",K,24),c(...B,g+re*(j*.5+.057),.021,re);o(...B,g,I*.52,j+.09,K)}le(M,.193,.61),le(w,.163,.534),le(b,.102,.39),le(T,.113,.41,m,"benna");for(let B of[-1,1])n("series-d-base-yoke",[[-1.14,1.345],[-.28,1.345],[-.41,1.59],[-.53,1.745],[-.71,1.78],[-.9,1.66]],g+B*.315,.107,m,"telaio",.022);function ee(B,I,j,W,K,re,ce=g){let R=v(I,ce),y=v(j,ce),Y=R.clone().lerp(y,K),G=y.clone().sub(R).normalize();i(R,Y,W,re,"pistoni",28),i(R.clone().lerp(y,.027),R.clone().lerp(y,.073),W*1.065,"iron","pistoni",28),i(Y.clone().addScaledVector(G,-.073),Y,W*1.115,"iron","pistoni",28),i(Y,y,W*.6,"chrome","pistoni",28);let z=se=>Y.clone().addScaledVector(G,se);i(z(-.06),z(-.032),W*1.06,"iron","pistoni",12),i(z(-.029),z(-.01),W*.83,"edge","pistoni",24),i(z(-.008),z(.01),W*.67,"rubber","pistoni",24);let Q=y.clone().addScaledVector(G,-.13);i(Q,Q.clone().addScaledVector(G,.084),W*.78,"iron","pistoni",20);for(let se of[R,y])s(se.x,se.y,se.z,W*1.18,W*1.86,re,"pistoni",28),s(se.x,se.y,se.z+W,W*.55,.03,"edge","pistoni",20);let ae=R.clone().lerp(Y,.22);i(ae.clone().add(t(0,0,W*.6)),ae.clone().add(t(.025,0,W*1.32)),.024,"bolt","tubazioni",10)}for(let B of[-1,1]){let I=g+B*.365,j=[-.3,1.47],W=[.25,3.58];ee("lift",j,W,.115,.54,"black",I),s(...W,g+B*.256,.148,.181,m,"braccio",28)}let he=[1.45,4.111];for(let B of[-1,1])n("320d-dipper-ram-saddle",[[1.27,4.018],[1.64,4.055],[1.56,4.167],[1.46,4.201],[1.38,4.167]],g+B*.118,.077,m,"braccio",.012);ee("dipper",he,b,.107,.575,"black");let L=[5.267,3.826];ee("curl",L,P,.101,.595,"black"),le(L,.098,.37,m,"braccio");let J;for(let B of[-1,1]){let I=g+B*.228,j=(W,K,re,ce,R,y)=>{let Y=Math.hypot(re[0]-K[0],re[1]-K[1]),G=-(re[1]-K[1])/Y,z=(re[0]-K[0])/Y,Q=[[K[0]+G*ce,K[1]+z*ce],[re[0]+G*ce,re[1]+z*ce],[re[0]-G*ce,re[1]-z*ce],[K[0]-G*ce,K[1]-z*ce]];if(n(W,Q,y,R,m,"benna",.014),W==="320d-rocker-link"&&B===1){let ae=v(K,y+R*.5).lerp(v(re,y+R*.5),.24);J={partIndex:d.length-1,point:ae}}for(let ae of[K,re])s(...ae,y,ce,R,m,"benna",26)};j("320d-rocker-link",P,k,.071,.069,I),j("320d-bucket-link",P,F,.092,.079,I+B*.074)}for(let[B,I,j]of[[P,.078,.73],[k,.075,.61],[F,.084,.72]])o(...B,g,I,j,"benna");for(let B=0;B<4;B++){let I=g-.176+B*.097,j=B*.01,W=[[-.82,1.49],[-.88,1.74],[-.72,2.27],[-.37,3.04],[.05,3.66],[.45,3.93],[.9,4.046],[1.53,4.11],[2.9,4.235],[3.58,4.3],[3.85,4.32]];h("320d-pipe-"+B,W.map(([R,y])=>t(R,y+j,I)),.019,B%2?"paintDark":"paint","tubazioni",48);let K=v(W.at(-1),I);K.y+=j,i(K.clone().add(t(-.06,-.006,0)),K.clone().add(t(.05,.006,0)),.033,"edge","tubazioni",12);let re=[K,t(4.12,4.378+j,I),t(4.49,4.4+j,I+.055),t(4.72,4.3+j,I+.13),t(4.8,4.03+j,I+.146),t(4.74,3.85+j,I+.146),t(4.56,3.8+j,I+.146)];h("320d-curl-hose-"+B,re,.025,"rubber","tubazioni",24);let ce=re.at(-1);i(ce.clone().add(t(-.058,0,0)),ce.clone().add(t(.03,0,0)),.037,"edge","tubazioni",10)}for(let[B,I]of[[-.19,3.43],[.86,4.04],[2.22,4.17],[3.56,4.315]]){l(B,I,g,.065,.043,.446,"paintDark","tubazioni");for(let j of[-1,1])c(B,I,g+j*.23,.016,j)}for(let B of[-1,1]){let I=g+B*.212;for(let j=0;j<2;j++){let W=j*.08,K=[[4.88+W,3.74],[4.81+W,3.65],[4.7+W,3.58],[4.65+W,3.38],[4.57+W,2.87],[4.43+W,2.45],[4.37+W,2.31]];h("320d-stick-pipe-"+B+"-"+j,K.map(re=>v(re,I)),.0165,"paint","tubazioni",25);for(let re of[K[0],K.at(-1)]){let ce=v(re,I);i(ce,ce.clone().add(t(-.025,-.04,0)),.031,"edge","tubazioni",10)}}}let Se=1.36,S=[[3.06,.067],[3.31,.034],[3.69,.02],[4.02,.02],[4.32,.027],[4.53,.057],[4.7,.112],[4.85,.207],[4.955,.333],[5.006,.472],[5.018,.602],[5,.719],[4.95,.818],[4.88,.866]],E=[...S,[4.67,.911],[4.57,.936],[4.41,.949],[4.28,.905],[4.211,.795],[4.13,.62],[4.04,.45],[3.91,.293],[3.74,.188],[3.55,.125],[3.15,.108]];ie("320d-yellow-rolled-pan",S,g-Se*.5,g+Se*.5,_,"benna");for(let B of[-1,1]){let I=g+B*(Se*.5-.026);n("320d-yellow-bucket-cheek",E,I,.059,_,"benna",.012),n("320d-direct-pin-lug",[[4.016,.753],[4.001,1.081],[4.049,1.188],[4.124,1.236],[4.204,1.23],[4.271,1.184],[4.357,1.07],[4.543,1.005],[4.666,1.002],[4.752,.956],[4.792,.88],[4.779,.779],[4.695,.727]],g+B*.257,.094,m,"benna",.016);for(let[W,K]of[[T,.135],[F,.122]])s(...W,g+B*.299,K,.05,"paintDark","benna",28);h("320d-cheek-weld-"+B,S.slice(1,-1).map(W=>v(W,I-B*.027)),.009,"paintDark","benna",30)}n("320d-full-width-edge",[[3.025,.054],[3.027,.028],[3.364,.025],[3.414,.048],[3.407,.084],[3.162,.079]],g,Se+.046,x,"benna",.006);for(let B of[-1,0,1])i(t(3.38,.068,g+B*Se*.315),t(3.38,.083,g+B*Se*.315),.031,"bolt","bulloneria",6);return J}var Lh=new WeakMap;function Ih(r,e,t){let n=Lh.get(r);n||(n=new Map,Lh.set(r,n));let i=t+":"+e;if(n.has(i))return n.get(i);let s=384,a=s*s,o=new Uint8Array(a*4),c=new Uint8Array(a*4),l=new Float32Array(a),h=2745+e*390+t*1309;function u(){return h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296}function d(T){let k=Array.from({length:T*T},u);return(P,F)=>{let ie=P*T,C=F*T,Z=Math.floor(ie),X=Math.floor(C),$=ie-Z,me=C-X;$*=$*(3-2*$),me*=me*(3-2*me);let le=(ee,he)=>k[(he%T+T)%T*T+(ee%T+T)%T];return(le(Z,X)*(1-$)+le(Z+1,X)*$)*(1-me)+(le(Z,X+1)*(1-$)+le(Z+1,X+1)*$)*me}}let p=d(6),f=d(20),g=d(78),m=(T,k,P)=>{let F=Math.floor(T),ie=Math.floor(k),C=T-F,Z=k-ie;for(let X=0;X<2;X++)for(let $=0;$<2;$++){let me=(ie+X+s*2)%s*s+(F+$+s*2)%s;l[me]=Math.max(l[me],P*($?C:1-C)*(X?Z:1-Z))}},x=t===1?114:44;for(let T=0;T<x;T++){let k=u()*s,P=u()*s,F=(t===1?-.22:.11)+(u()-.5)*(t===1?.38:1.5),ie=1+Math.floor(u()*(t===1?8:4));for(let C=0;C<ie;C++){let Z=(t===1?24:8)+u()*(t===1?116:48),X=(C-ie/2)*(1.9+u()*.7),$=(u()-.5)*8,me=.32+u()*.67,le=u()*22;for(let ee=0;ee<Z;ee+=.55){let he=ee/Z,L=ee+le;m(k+L*Math.cos(F)-X*Math.sin(F),P+L*Math.sin(F)+X*Math.cos(F)+$*he*he,me*Math.sin(he*Math.PI)**.4)}}}let _=t===1?e===1?[108,72,53]:e===2?[110,83,67]:[88,92,91]:e===1?[78,75,68]:[77,79,81];for(let T=0,k=0;T<s;T++)for(let P=0;P<s;P++,k++){let F=P/s,ie=T/s,C=p(F,ie),Z=f(F,ie),X=g(F,ie),$=u(),me=l[k],le=k*4,ee=t===1,he=ee?Math.pow(Math.max(0,(C*.6+Z*.4-.39)*1.85),1.3):0,L=ee?0:Math.max(0,Math.min(1,(Z*.54+X*.35+$*.11-.7)*10)),J=!ee&&e===3?.1:!ee&&e===1?.6:1,Se=Math.min(1,(me*(ee?.98:.72)+he*.29+L*.55)*J),S=($-.5)*(ee?7:3)+(C-.5)*(ee?35:14)+(Z-.5)*9;for(let E=0;E<3;E++){let O=_[E]+S+(ee&&E===0?he*14:0);o[le+E]=Math.max(0,Math.min(255,O+([170,167,157][E]-O)*Se))}o[le+3]=255,c[le]=Math.round(Math.max(0,Math.min(1,.57+(X-.5)*.19-me*.2-L*.1))*255),c[le+1]=Math.round(Math.max(.14,Math.min(1,(ee?.68:.48)+(C-.5)*.19-Se*.39))*255),c[le+2]=Math.round(Math.min(1,(ee?e===3?.38:.25:.085)+Se*(ee?.53:.85))*255),c[le+3]=255}let v=(T,k)=>{let P=new r.DataTexture(T,s,s,r.RGBAFormat);return P.wrapS=P.wrapT=r.RepeatWrapping,P.generateMipmaps=!0,P.magFilter=r.LinearFilter,P.minFilter=r.LinearMipmapLinearFilter,P.colorSpace=k?r.SRGBColorSpace:r.NoColorSpace,P.needsUpdate=!0,P},M=v(o,!0),w=v(c,!1),b=new r.MeshPhysicalMaterial({name:t===1?"Acciaio abraso della benna":"Smalto grafite del braccio",map:M,roughnessMap:w,metalnessMap:w,bumpMap:w,bumpScale:t===1?.026:.014,roughness:1,metalness:1,clearcoat:t===1?.04:.21,clearcoatRoughness:.34,envMapIntensity:1.11});return n.set(i,b),b}function Uh(r,e,t){let n=null,{V:i,parts:s,materials:a,cache:o,append:c,box:l,bar:h,rod:u,disc:d,plate:p,quad:f,pin:g,bolts:m,machineScrew:x,conduit:_,round:v,identity:M}=t,w=e===1,b=e===2,T=e===3,k=i(1,1,1),P=(U,D,oe)=>{let de=a[D].clone();return de.name=U,de.color.setHex(oe),de},F=P("Montanti verniciati","black",w?7889728:2500907),ie=P("Grafite minerale","black",w?3288874:4343366);ie.roughness=.6,ie.metalness=.4;let C=P("Acciaio verniciato arancio","paint",15102263),Z=P("Base torretta ossidata","paintDark",13463871),X=a.rubber,$=a.glass.clone();if($.color.setHex(w?3227963:b?4676441:4741718),$.opacity=w?.57:b?.55:.62,$.envMapIntensity=.9,$.name="Vetratura fum\xE9 della cabina",w||b){let U=w?1.85:2.75;for(let D of new Set([a.paint.map,a.paint.roughnessMap,a.paint.bumpMap,a.paint.metalnessMap]))D&&D.repeat.set(U,U)}let me=b?null:Ih(r,e,0),le=b?null:Ih(r,e,1),ee=a.edge.clone();ee.name="Bisello di taglio lucidato",ee.color.setHex(16774614),ee.roughness=.58,ee.envMapIntensity=1.23;let he=b?a.paintDark:ie,L=w?-4.38:b?-4.02:-4.25,J=w?1.33:b?1.23:1.25,Se=w?3.13:b?2.95:2.9,S=w?1.34:1.25,E=S+.085,O=w?2.37:b?2.17:2.31,B=w?-.27:-.31;function I(U,D,oe,de){let _e=[],ye=[],Ue=[];for(let[He,Ie,ke,tt]of D){let ct=Math.min(.12,(tt-ke)*.22,Ie*.24),Tt=[[0,tt],[-Ie*.72,tt],[-Ie+ct,tt-.014],[-Ie,tt-ct],[-Ie,ke+ct],[-Ie+ct,ke],[0,ke],[Ie-ct,ke],[Ie,ke+ct],[Ie,tt-ct],[Ie-ct,tt-.014],[Ie*.72,tt]];for(let[Gt,St]of Tt)_e.push(He,St,Gt),ye.push(He*.52,(Gt+St)*.43)}for(let He=0;He<D.length-1;He++)for(let Ie=0;Ie<12;Ie++){let ke=He*12+Ie,tt=He*12+(Ie+1)%12;Ue.push(ke,ke+12,tt,tt,ke+12,tt+12)}let Oe=(D.length-1)*12;for(let He=1;He<11;He++)Ue.push(0,He,He+1,Oe,Oe+He+1,Oe+He);let ze=new r.BufferGeometry;ze.setAttribute("position",new r.Float32BufferAttribute(_e,3)),ze.setAttribute("uv",new r.Float32BufferAttribute(ye,2)),ze.setIndex(Ue),ze.computeVertexNormals(),ze.computeBoundingBox();let Ze=ze.boundingBox.getCenter(i());ze.translate(-Ze.x,-Ze.y,-Ze.z),ze.name=U,c(ze,oe,Ze,M,k,de)}function j(U,D,oe,de,_e,ye="lamierati",Ue=.014){p(U,D,oe,de,_e,ye,Ue)}function W(U,D,oe,de=a.paint,_e=.043,ye="lamierati"){j(U+"-gasket",D,oe,_e+.018,X,ye,.018);let Ue=D.reduce((ze,Ze)=>ze+Ze[0],0)/D.length,Ve=D.reduce((ze,Ze)=>ze+Ze[1],0)/D.length,Oe=D.map(([ze,Ze])=>[Ue+(ze-Ue)*.976,Ve+(Ze-Ve)*.963]);j(U+"-skin",Oe,oe+Math.sign(oe)*.02,_e,de,ye,.018)}I("revolving-bed",[[L+.1,J*.64,S-.18,S+.07],[L+.4,J-.08,S-.21,S+.09],[L+.68,J,S-.22,S+.08],[-.57,J,S-.22,S+.08],[.17,J-.04,S-.19,S+.07],[.3,J-.18,S-.12,S+.02]],w?Z:b?a.paintDark:ie,"telaio");let K=w?[[L,.98,S+.02,O-.04],[L+.08,J-.07,S+.01,O],[L+.39,J,S+.01,O],[L+.55,J,S+.01,O-.014]]:b?[[L,.16,S-.17,O-.27],[L+.045,.53,S-.19,O-.22],[L+.13,.8,S-.21,O-.13],[L+.29,1.02,S-.21,O-.08],[L+.48,J-.025,S-.19,O-.03],[L+.72,J,S-.15,O+.008],[L+.9,J-.01,S-.11,O]]:[[L,.19,1.035,O-.31],[L+.03,.51,1.012,O-.27],[L+.12,.79,1.005,O-.22],[L+.26,1.035,1.008,O-.16],[L+.41,1.18,1.018,O-.1],[L+.62,J,1.045,O-.08],[L+.8,J,1.065,O-.06]];if(I("counterweight",K,w?a.paintDark:b?a.paint:ie,"lamierati"),I("engine-underframe",[[L+.49,J-.15,S+.06,O-.07],[-2.09,J-.13,S+.06,O-.04],[-1.86,J-.17,S+.07,O-.13]],w?a.paintDark:ie,"motore"),b){let oe=[[-1.95,S+.096],[.169,S+.096],[.221,S+.12],[.236,S+.163],[.236,S+.378],[.213,S+.413],[.157,S+.432],[-.05,S+.44],[-1.78,S+.454],[-1.95,S+.401]];j("320d-front-service-chest",oe,-.73,.99,a.paint,"motore",.03),l(.236+.014,S+.246,-.73,.025,.229,.885,"rubber","lamierati"),l(.236+.033,S+.249,-.73,.026,.199,.86,"paint","lamierati"),l(.236+.046,S+.212,-.73,.02,.026,.814,"paintDark","lamierati");for(let ye of[-.258,.233])l(.236+.049,S+.158,-.73+ye,.024,.032,.108,"iron","lamierati"),u(i(.236+.066,S+.157,-.73+ye-.049),i(.236+.066,S+.157,-.73+ye+.049),.012,"edge","lamierati",12);let de=-.73+.229;l(.236+.051,S+.281,de,.031,.086,.07,"black","lamierati"),l(.236+.073,S+.285,de,.013,.053,.039,"edge","lamierati");let _e=-.73-.288;l(.236+.041,S+.349,_e,.044,.078,.117,"rubber","lamierati"),l(.236+.065,S+.349,_e,.012,.055,.09,"light","lamierati");for(let ye of[-.023,0,.023])l(.236+.074,S+.349,_e+ye,.006,.052,.005,"edge","lamierati")}else j("far-hydraulic-reservoir",[[-2.08,S+.09],[.13,S+.09],[.23,1.81],[-.09,2.09],[-.83,2.17],[-1.72,O-.065],[-2.08,O-.18]],-.69,1.05,w?a.paint:ie,"motore",.054);let re=J+.005,ce=L+.56;for(let U of[-1,1]){let D=re*U;if(w){W("classic-service"+U,[[L+.43,S+.12],[-1.38,S+.12],[-1.38,O-.07],[L+.43,O-.07]],D);let oe=L+.38,de=L+1,_e=S+.21,ye=O-.15;W("classic-radiator"+U,[[oe-.035,_e-.03],[de+.035,_e-.03],[de+.035,ye+.03],[oe-.035,ye+.03]],D+U*.035),l((oe+de)/2,(_e+ye)/2,D+U*.079,de-oe,ye-_e,.014,"interior","motore");for(let Ue=0;Ue<12;Ue++)l(oe+.021+Ue*(de-oe-.042)/11,(_e+ye)/2,D+U*.094,.015,ye-_e,.02,"iron","motore");for(let Ue=0;Ue<11;Ue++)l((oe+de)/2,_e+.016+Ue*(ye-_e-.032)/10,D+U*.1,de-oe,.012,.019,"edge","motore");for(let Ue of[oe-.041,de+.041])h(i(Ue,_e-.03,D+U*.103),i(Ue,ye+.03,D+U*.103),.039,"paint","lamierati");l(L+1.53,S+.15,D+U*.059,1,.059,.018,Z,"lamierati");for(let Ue of[L+1.35,-1.47])x(Ue,O-.155,D+U*.058,.018,U)}else if(b){W("rear-service"+U,[[ce,S+.1],[-1.6,S+.1],[-1.53,O-.04],[-1.67,O+.11],[ce+.16,O+.1],[ce,O-.1]],D);for(let de=0;de<2;de++)for(let _e=0;_e<4;_e++)for(let ye=0;ye<(de?7:4);ye++)l(L+.75+de*.57+ye*.045,O+.005-_e*.042,D+U*.05,.026,.025,.015,"interior","motore");let oe=[[L+.36,S+.12],[-1.7,S+.12],[-1.63,S+.38],[-1.85,S+.51],[L+1.63,S+.61],[L+.45,S+.57]];j("charcoal-access-insert"+U,oe,D+U*.059,.032,F,"lamierati",.012),l(L+1.41,S+.39,D+U*.093,.079,.14,.022,"black","lamierati");for(let de of[L+.97,L+1.88])l(de,S+.6,D+U*.081,.012,.74,.012,"rubber","motore")}else{W("yellow-service"+U,[[ce,S+.115],[-1.56,S+.115],[-1.6,O-.12],[-2.03,O-.044],[ce+.07,O-.044]],D);let oe=[[ce+.1,O-.19],[-2.66,O-.19],[-2.63,O-.55],[ce+.25,S+.23],[ce+.09,S+.23]];j("triangular-intake"+U,oe,D+U*.055,.027,ie,"motore");let de=ce+.15,_e=-2.7,ye=S+.31,Ue=O-.24;for(let Oe=0;Oe<10;Oe++){let ze=ye+(Ue-ye)*Oe/10,Ze=de+(_e-de)*(.27+.73*(ze-ye)/(Ue-ye));for(let He=0;He<12;He++){let Ie=de+(He+Oe%2*.5)*.105;if(Ie>=Ze-.02)break;d(Ie,ze,D+U*.074,.042,.016,"interior","motore",6)}}l(-2.12,O-.45,D+U*.06,.044,.16,.034,"rubber","lamierati");let Ve=L+.42;for(let Oe of[0,.1])l(Ve+.07,O-.33-Oe,D-U*.022,.31,.056,.03,"red","lamierati",Oe?.18:-.08)}}for(let[U,D]of[[L+1.02,.77],[L+1.82,.71]])l(U,O+.005,-.18,D,.1,1.42,"rubber","motore"),l(U,O+.063,-.18,D-.018,.092,1.41,w?"paint":b?"paintDark":ie,"lamierati");for(let U=0;U<12;U++)l(L+.67+U*.062,O+.128,-.25,.024,.032,.72,"track","motore");if(b){let U=i(L+1.55,O+.19,-.5);u(U,U.clone().add(i(0,.23,0)),.075,"black","motore",24);let D=o("precleaner-cover",()=>new r.SphereGeometry(1,24,10,0,Math.PI*2,0,Math.PI*.58));c(D,"rubber",i(U.x,U.y+.21,U.z),M,i(.163,.132,.163),"motore")}let R=L+1.16;u(i(R,O+.11,-.48),i(R-.02,O+.41,-.48),.068,"track","motore",20),u(i(R-.02,O+.41,-.48),i(R-.13,O+.48,-.48),.072,"black","motore",18);for(let U of[L+.81,L+1.87])u(i(U,O+.12,.61),i(U,O+.16,.61),.084,"edge","motore",16);l(-2.84,1.79,-.17,1.18,.41,.66,"iron","motore");for(let U=0;U<6;U++){let D=-3.32+U*.187;l(D,2.06,-.17,.142,.15,.54,"black","motore"),u(i(D,2.03,.08),i(D+.053,1.94,.246),.041,"rust","motore",9)}l(-3.65,1.76,-.26,.15,.73,.91,"track","motore");for(let U=0;U<12;U++)l(-3.735,1.44+U*.055,-.26,.025,.018,.81,"edge","motore");let y=w?-1.84:-1.94,Y=w?-.075:b?-.15:.1,G=w?.99:1.035,z=J-.022,Q=z-G,ae=(z+Q)/2,se=Y-(w?.13:b?.22:.24),fe=y+(w?.025:b?.012:.167),ve=Se-.065,Ee=Y-.045,we=[[y,E],[Ee,E],[Y,E+.24],[Y-.026,E+.54],[se+.042,ve-.17],[se,ve-.044],[fe+.052,ve-.009],[fe-.014,ve-.071],[y-.008,E+.36]],Ce=E+(w?.56:b?.13:.11),Ne=E+(w?.64:b?.72:.85),Le=Y-.1,Fe=y+.066,Ge=[[y+.018,E+.04],[Ee-.04,E+.04],[Le,Ce+.01],[Fe,Ne+.012],[y+.018,Ne-.03]];for(let[U,D]of[z,Q].entries()){if(w){let Ve=y+(Y-y)*.365;j("door-threshold"+U,[[y+.018,E+.04],[Ee-.04,E+.04],[Le,E+.255],[y+.018,E+.255]],D,.046,"paint","cabina",.014),j("rear-door-stile"+U,[[y+.018,E+.247],[Ve+.026,E+.247],[Ve+.026,Ne+.015],[y+.018,Ne+.015]],D,.046,"paint","cabina",.014),j("front-door-stile"+U,[[Y-.16,E+.245],[Le,E+.245],[Le,Ce+.01],[Y-.16,Ce+.01]],D,.046,"paint","cabina",.012)}else j("side-cab-sill"+U,Ge,D,.046,b?a.paint:ie,"cabina",.02);let oe=y+(Y-y)*(w?.365:b?.415:.32),de=oe+.024,_e=Ve=>Ne+(Ce-Ne)*(Ve-Fe)/(Le-Fe),ye=[[Fe+.036,_e(Fe+.036)+.044],[oe-.032,_e(oe-.032)+.044],[de-.042,ve-.073],[fe+.109,ve-.071],[fe+.026,ve-.159]],Ue=[[oe+.037,_e(oe+.037)+.044],[Le-.024,Ce+.058],[Y-.1,E+.5],[se-.014,ve-.19],[se-.082,ve-.091],[de+.043,ve-.075]];j("rear-cab-glazing"+U,ye,D,.018,$,"vetri",.005),j("cab-door-glazing"+U,Ue,D,.018,$,"vetri",.005);for(let Ve=0;Ve<we.length;Ve++){let Oe=we[Ve],ze=we[(Ve+1)%we.length];h(i(Oe[0],Oe[1],D),i(ze[0],ze[1],D),w?.06:.068,w?"paint":F,"cabina",.061)}if(h(i(Fe,Ne,D),i(Le,Ce,D),.058,w?"paint":F,"cabina",.054),h(i(oe,_e(oe),D),i(de,ve-.021,D),w?.06:.047,w?"paint":F,"cabina",.052),w){let Ve=[[oe+.062,E+.31],[Y-.16,E+.31],[Y-.15,E+.52],[oe+.062,E+.56]];j("lower-register"+U,Ve,D+.021,.016,$,"vetri",.018);for(let Oe=0;Oe<4;Oe++){let ze=Ve[Oe],Ze=Ve[(Oe+1)%4];h(i(ze[0],ze[1],D+.037),i(Ze[0],Ze[1],D+.037),.033,"rubber","cabina")}h(i(oe,Ne,D+.031),i(Y-.12,Ce,D+.031),.055,"paint","cabina")}if(b){let Ve=y+.115;h(i(Ve,E+.81,D+.022),i(Ve+.012,ve-.14,D+.022),.039,F,"cabina",.034),l(y+.24,E+.442,D+.046,.093,.064,.035,"black","cabina")}if(T){let Ve=[[y+.016,E+.06],[y+.67,E+.06],[y+.82,E+.25],[y+.58,E+.54],[y+.025,E+.87]];j("yellow-trapezoid"+U,Ve,D+.022,.043,"paint","lamierati",.019),h(i(oe+.034,E+.58,D+.047),i(Y-.125,E+.64,D+.047),.035,F,"cabina")}}let je=(U,D)=>i(Ee+(se-Ee)*U,E+.13+(ve-E-.21)*U,D),it=(U,D)=>i(y+.023+(fe-y)*U,E+.54+(ve-E-.65)*U,D);f("front-windscreen",[je(0,Q+.03),je(0,z-.03),je(1,z-.03),je(1,Q+.03)],$,"vetri"),f("back-windscreen",[it(0,z-.04),it(0,Q+.04),it(1,Q+.04),it(1,z-.04)],$,"vetri");for(let U of[0,w?.46:.31,1])h(je(U,Q),je(U,z),U===1?.069:.043,w?"paint":F,"cabina");if(l((y+Y)/2,E,ae,Y-y-.052,.092,G,F,"cabina"),j("roof-brow",[[fe-.09,ve-.028],[se+.072,ve-.028],[se+.13,ve+.022],[se+.058,ve+.062],[fe-.073,ve+.056]],ae,G+.095,w||T?"paint":F,"cabina",.024),l((fe+se)*.5,ve+.077,ae,.64,.023,.58,"rubber","cabina"),l((fe+se)*.5,ve+.096,ae,.6,.021,.54,b?"black":"paintDark","cabina"),b){let U=se+.075,D=ve+.106,oe=ve+.302,de=Q+.018,_e=z-.018;for(let ye of[de,_e])u(i(U,D,ye),i(U+.035,oe,ye),.016,F,"cabina",10),h(i(U-.12,ve+.064,ye),i(U,D,ye),.025,F,"cabina");for(let ye of[D+.015,oe])u(i(U+.029,ye,de),i(U+.029,ye,_e),.017,F,"cabina",12);for(let ye of[de+.105,(de+_e)*.5,_e-.105]){l(U+.021,D+.099,ye,.071,.147,.157,F,"cabina"),l(U+.059,D+.099,ye,.011,.116,.128,"light","cabina");for(let Ue of[-.03,.03])u(i(U+.068,D+.052,ye+Ue),i(U+.068,D+.145,ye+Ue),.004,"edge","cabina",6);l(U-.01,D+.007,ye,.06,.044,.052,"iron","cabina")}}if(w){let U=a.paintDark.clone();U.color.setHex(12010529),U.roughness=.61;for(let D of[z+.043,Q-.043]){let oe=E+.143;l((y+Y)*.5,oe,D,Y-y-.074,.04,.011,U,"lamierati"),l((y+Y)*.5,oe-.058,D,Y-y-.078,.014,.01,U,"lamierati")}for(let D of[E+.143,E+.085])l((L-.99)*.5,D,J+.052,-.99-L-.22,D>E+.1?.04:.014,.011,U,"lamierati")}let gt=y+.55;l(gt,E+.2,ae,.33,.38,.39,"iron","cabina"),l(gt+.03,E+.4,ae,.47,.12,.51,"interior","cabina"),l(gt-.19,E+.64,ae,.12,.49,.47,"interior","cabina",.09),w||l(gt-.215,E+.91,ae,.12,.16,.31,"interior","cabina",.09);for(let U of[-1,1])l(gt+.09,E+.48,ae+U*.32,.33,.105,.119,"interior","cabina"),u(i(gt+.19,E+.5,ae+U*.32),i(gt+.25,E+.68,ae+U*.32),.016,"chrome","cabina",9),l(gt+.25,E+.71,ae+U*.32,.054,.09,.044,"black","cabina",-.18),l(Ee-.2,E+.078,ae+U*.16,.15,.041,.105,"rubber","cabina",-.14);let ut=y+.36;l(ut,Ne-.104,z+.044,.185,.065,.041,"black","cabina");for(let U of[z-.12,Q+.1])l(se+.032,ve+.006,U,.124,.098,.155,F,"cabina"),l(se+.099,ve+.004,U,.016,.07,.128,"light","cabina");let ht=je(.11,z-.105),vt=je(.73,Q+.27);u(ht,vt,.011,"black","cabina",8),u(vt.clone().add(i(.008,-.17,-.045)),vt.clone().add(i(.008,.11,.033)),.015,"black","cabina",8),_("cab-handle",[i(Y-.07,E+.12,z+.04),i(Y-.02,E+.16,z+.124),i(se+.09,ve-.32,z+.128),i(se+.087,ve-.26,z+.044)],.023,w?"paint":T?C:"edge","cabina",16);for(let[U,D,oe]of[[-.72,S-.06,.74],[-.72,S-.28,.46]]){l(U,D,z+.144,oe,.069,.218,"iron","telaio");for(let de=0;de<7;de++)l(U-oe*.41+de*oe*.136,D+.04,z+.144,.016,.012,.195,"edge","telaio")}if(!w){let U=i(se-.07,ve-.04,z),D=i(se+.14,ve+.09,z+.23);u(U,D,.018,F,"cabina"),l(D.x,D.y-.083,D.z,.061,.18,.13,"black","cabina"),l(D.x+.034,D.y-.083,D.z,.009,.15,.109,"chrome","cabina"),l(Ee-.31,E+.77,Q+.135,.081,T?.25:.18,T?.35:.16,"black","cabina",-.13)}if(T){for(let D of[z-.24,-.82]){let oe=O+.09,de=Se+.22;_("rail-arch-"+D,[i(-2.3,oe,D),i(-2.3,de-.07,D),i(-2.36,de,D),i(-3.04,de,D),i(-3.11,de-.08,D),i(-3.11,oe+.01,D)],.02,C,"cabina",22),h(i(-2.31,de-.3,D),i(-3.1,de-.3,D),.026,C,"cabina")}let U=o("roof-lamp",()=>new r.SphereGeometry(1,16,9,0,Math.PI*2,0,Math.PI/2));for(let[D,oe,de]of[[fe+.19,Q+.08,6309152],[fe+.18,z-.103,3172945]]){let _e=P("Lente spia di tetto","light",de),ye=ve+.064;u(i(D,ye,oe),i(D,ye+.049,oe),.063,"black","cabina",16),u(i(D,ye+.05,oe),i(D,ye+.13,oe),.048,_e,"cabina",18),c(U,_e,i(D,ye+.13,oe),M,i(.049,.03,.049),"cabina")}l(L+.08,O-.28,0,.089,.107,.145,F,"motore"),l(L+.03,O-.28,0,.012,.062,.063,$,"vetri")}if(b)return Ph(r,t);let pe=w?[-.88,1.58]:[-.61,1.72],Be=w?[4.02,4.32]:[4.06,4.94],rt=w?[3.32,1.28]:[4.13,1.45],st=rt[0]-Be[0],Ye=w?[.92,3.78]:[1.03,4.03],Bt=[pe,[pe[0]+.25,pe[1]+.54],[Ye[0]-.31,Ye[1]-.22],Ye,[Ye[0]+.67,Ye[1]+.2],[Be[0]-.68,Be[1]-.1],[Be[0]-.25,Be[1]-.035],Be],Ct=w?[.18,.31,.335,.38,.32,.22,.177,.17]:[.164,.25,.358,.37,.321,.215,.171,.155];function xn(U,D,oe,de,_e){let ye=new r.CatmullRomCurve3(D.map(Ie=>i(Ie[0],Ie[1],0)),!1,"centripetal"),Ue=new r.CatmullRomCurve3(D.map((Ie,ke)=>i(ke,oe[ke],0)),!1,"catmullrom",.32),Ve=[],Oe=[];for(let Ie=0;Ie<=25;Ie++){let ke=Ie/25,tt=ye.getPoint(ke),ct=ye.getTangent(ke),Tt=Ue.getPoint(ke).y;Ve.push([tt.x-ct.y*Tt,tt.y+ct.x*Tt]),Oe.push([tt.x+ct.y*Tt,tt.y-ct.x*Tt])}let ze=[...Ve,...Oe.reverse()],Ze=de/2-.033;for(let Ie of[-1,1])j(U+"-flank",ze,B+Ie*Ze,.07,_e,"braccio",.018);function He(Ie,ke){let tt=[],ct=[],Tt=[],Gt=de/2-.068;Ie.forEach(([A,ne],ge)=>{if(tt.push(A,ne,B-Gt,A,ne,B+Gt),ct.push(ge/Ie.length,0,ge/Ie.length,1),ge){let xe=ge*2;Tt.push(xe-2,xe,xe-1,xe,xe+1,xe-1,xe-1,xe,xe-2,xe-1,xe+1,xe)}});let St=new r.BufferGeometry;St.setAttribute("position",new r.Float32BufferAttribute(tt,3)),St.setAttribute("uv",new r.Float32BufferAttribute(ct,2)),St.setIndex(Tt);let pi=[];for(let A=0;A<Ie.length;A++){let ne=Ie[Math.max(A-1,0)],ge=Ie[Math.min(A+1,Ie.length-1)],xe=ge[0]-ne[0],Me=ge[1]-ne[1],Te=Math.hypot(xe,Me);pi.push(-Me/Te,xe/Te,0,-Me/Te,xe/Te,0)}St.setAttribute("normal",new r.Float32BufferAttribute(pi,3)),St.computeBoundingBox();let Zn=St.boundingBox.getCenter(i());St.translate(-Zn.x,-Zn.y,-Zn.z),c(St,_e,Zn,M,k,"braccio");for(let A of[-1,1])_(U+"-weld"+ke+A,Ie.map(ne=>i(ne[0],ne[1],B+A*(de/2-.014))),.0105,he,"braccio",29)}He(Ve,"upper"),He(Oe,"lower")}let jt=[Be[0]+(w?.23:.28),Be[1]+(w?.69:.84)],qt=[jt,[Be[0]+.047,Be[1]+.17],Be,[Be[0]+st*.22+.06,Be[1]-.51],[rt[0]-.035,rt[1]+.87],rt];xn("main-boom",Bt,Ct,w?.49:.5,me),xn("dipper",qt,[.093,.164,.19,.234,.152,.107],w?.358:.347,me);function sn(U,D,oe,de,_e=me){for(let ye of[-1,1])d(U,D,B+ye*de*.5,oe,.092,_e,"braccio",28),d(U,D,B+ye*(de*.5+.058),oe*.78,.046,he,"braccio",26),m(U,D,B+ye*(de*.5+.107),oe*.26,ye);g(U,D,B,oe*.5,de+.2,"braccio")}function un(U,D,oe,de,_e=.5){let ye=[[D-.16,oe-.22],[D+.155,oe-.22],[D+.133,oe+.075],[D+.025,oe+.14],[D-.095,oe+.1]];for(let Ue of[-1,1])j(U,ye,B+Ue*_e*.5,.073,de,"braccio",.014)}un("boom-pedestal",pe[0],pe[1],he,.58),sn(pe[0],pe[1],.18,.6),sn(Be[0],Be[1],.153,.534);function Nt(U,D,oe,de=he,_e=.63){let ye=U.clone().lerp(D,_e);u(U,ye,oe,de,"pistoni",20),u(U.clone().lerp(D,.02),U.clone().lerp(D,.074),oe*1.075,ie,"pistoni",20),u(U.clone().lerp(D,_e-.031),ye.clone().lerp(D,.024),oe*1.13,"iron","pistoni",22),u(ye,D,oe*.58,"chrome","pistoni",20);for(let Ve of[U,D])d(Ve.x,Ve.y,Ve.z,oe*1.24,oe*1.9,de,"pistoni",22),d(Ve.x,Ve.y,Ve.z+oe*1.09,oe*.59,.035,"bolt","bulloneria",12);let Ue=U.clone().lerp(D,.15);u(Ue.clone().add(i(0,0,oe*.6)),Ue.clone().add(i(.025,0,oe*1.43)),oe*.23,"edge","pistoni",8)}for(let U of[-1,1]){let D=B+U*.331;Nt(i(pe[0]+.46,1.41,D),i(Ye[0]-.38,Ye[1]-.35,D),w?.113:.108);let oe=[[pe[0]-.1,pe[1]-.088],[pe[0]-.097,pe[1]+.18],[pe[0]+.3,pe[1]+.55],[pe[0]+.46,pe[1]+.4],[pe[0]+.13,pe[1]-.045]];j("boom-root-facing",oe,B+U*.257,.034,me,"braccio")}let mt=i(Ye[0]+.2,Ye[1]+(w?.49:.44),B);un("stick-pickup-clevis",mt.x,mt.y,he,.23),Nt(mt,i(jt[0],jt[1],B),.11,ie,.586);let Ot=i(Be[0]+(w?.32:.4),Be[1]-.235,B+.032),_t=i(rt[0]+(w?.56:.62),rt[1]+.47,B+.032),Et=i(rt[0]+.18,rt[1]+.085,B+.032),xt=[[Be[0]+.06,Be[1]-.035],[Be[0]+.28,Be[1]-.09],[Ot.x+.084,Ot.y+.05],[Ot.x+.067,Ot.y-.05],[Ot.x-.09,Ot.y-.09],[Be[0]+.04,Be[1]-.18]];for(let U of[-1,1])j("riser-for-bucket-ram",xt,B+U*.127,.092,me,"braccio",.015);Nt(Ot,_t,.0885,me,.6);for(let U of[-1,1]){let D=i(0,0,U*.215),oe=[[_t.x-.084,_t.y+.062],[_t.x+.052,_t.y+.1],[_t.x+.105,_t.y-.012],[Et.x+.105,Et.y-.012],[Et.x+.031,Et.y-.076],[Et.x-.064,Et.y-.046],[Et.x-.042,Et.y+.068]];j("curved-bucket-link",oe,B+U*.212,.086,he,"benna",.015),h(_t.clone().add(D),i(rt[0]-.04,rt[1]+.69,B+U*.215),.084,me,"benna",.06)}g(_t.x,_t.y,B,.074,.59,"benna"),g(Et.x,Et.y,B,.068,.59,"benna");for(let U=0;U<(T?5:3);U++){let D=B-.17+U*(T?.081:.145),oe=U*.013,de=[i(-1.18,1.64,D),i(-.82,1.97,D-.035),i(-.53,2.17,D),i(Ye[0]-.33,Ye[1]+.19+oe,D),i(Ye[0]+.15,Ye[1]+.37+oe,D),i(Ye[0]+.69,Ye[1]+.445+oe,D),i(Be[0]-.66,Be[1]+.181+oe,D)];_("hard-feed"+U,de,.019,T?"track":"iron","tubazioni",25);let _e=de[de.length-1],ye=[_e,i(Be[0]-.31,Be[1]+.251+oe,D),i(Be[0]-.048,Be[1]+.19,D+.04),i(Be[0]+.125,Be[1]+.016,D+.075),i(Be[0]+.17,Be[1]-.32,D+.077)];_("flex-on-knuckle"+U,ye,.021,"rubber","tubazioni",17);let Ue=ye[ye.length-1];_("dipper-line"+U,[Ue,i(Be[0]+.2+st*.14,Be[1]-.64,D+.08),i(rt[0]+.111,rt[1]+.9,D+.066),i(rt[0]+.14,rt[1]+.6,D+.061)],.0148,T?"track":"rubber","tubazioni",15);let Ve=ye[1].clone().sub(_e).normalize(),Oe=ze=>_e.clone().addScaledVector(Ve,ze);u(Oe(-.066),Oe(-.025),.035,"edge","tubazioni",6),u(Oe(-.025),Oe(.023),.029,"iron","tubazioni",18),u(Oe(.023),Oe(.064),.037,"edge","tubazioni",6);for(let ze of[.073,.086,.099])u(Oe(ze),Oe(ze+.005),.027,"iron","tubazioni",14)}for(let U of[.21,.51,.78]){let D=Ye[0]+(Be[0]-Ye[0])*U;l(D,Ye[1]+.4+(Be[1]+.18-Ye[1]-.4)*U,B,.063,.048,.464,he,"tubazioni")}let bt=B+.285;for(let[U,D]of[[0,0],[1,.057]]){let oe=[i(Ye[0]-.69,Ye[1]-.47+D,bt),i(Ye[0]-.39,Ye[1]-.12+D,bt),i(Ye[0]+.05,Ye[1]+.12+D,bt),i(Ye[0]+.56,Ye[1]+.15+D,bt),i(Ye[0]+1.13,Ye[1]+.16+D,bt)];_("outboard-pipe"+U,oe,.017,U?"rubber":"edge","tubazioni",18);for(let de of[0,4]){let _e=oe[de];u(i(_e.x-.037,_e.y,_e.z),i(_e.x+.037,_e.y,_e.z),.028,"bolt","tubazioni",6)}}for(let[U,D]of[[Ye[0]-.4,Ye[1]-.105],[Ye[0]+.56,Ye[1]+.167]])l(U,D,bt+.019,.052,.13,.039,he,"tubazioni"),d(U,D+.039,bt+.049,.015,.015,"bolt","bulloneria",6);let yn=B+.235;for(let U=0;U<3;U++){let D=yn+U*.032,oe=U*.025,de=[i(Be[0]-.32,Be[1]+.116+oe,D-.025),i(Be[0]-.13,Be[1]+.187+oe,D),i(Be[0]+.125,Be[1]+.1+oe,D+.065),i(Be[0]+.2,Be[1]-.28-oe,D+.11),i(Be[0]+.07,Be[1]-.56-oe,D+.105),i(Be[0]-.135,Be[1]-.58-oe,D+.039)];_("flexible-loop"+U,de,.019,"rubber","tubazioni",23);let _e=de.at(-1);u(_e,_e.clone().add(i(-.018,-.066,0)),.029,"edge","tubazioni",8)}let N=B+.237;for(let U=0;U<(T?3:2);U++){let D=(U-1)*.055,oe=Be[0]+.12+D,de=i(oe,Be[1]-.64,N+.042),_e=i(rt[0]+.11+D,rt[1]+.85,N+.042);u(de,_e,.019,T?"edge":"iron","tubazioni",12);for(let ye of[0,.27,.9]){let Ue=de.clone().lerp(_e,ye);u(Ue,Ue.clone().add(i(0,-.07,0)),.027,"track","tubazioni",8)}}if(T){let U=Be[0]+st*.41+.053,D=Be[1]+(rt[1]-Be[1])*.41;l(U,D,B+.202,.18,.083,.045,F,"braccio",-1.4);for(let oe of[-.061,.061])m(U,D+oe,B+.236,.014)}let ue=rt[0],V=rt[1]-(T?.21:.15),te=w?1.2:1.26,q=Math.max(.65,Math.min(1.26,V-.045)),be=w?.99:.83,Ae=[[-be,-.86],[-.61,-.94],[-.34,-.987],[-.08,-1],[.19,-.962],[.41,-.85],[.56,-.67],[.66,-.44],[.67,-.23],[.61,-.067],[.54,.045],[.34,.17],[.14,.156],[-.035,.031],[-.15,-.15],[-.32,-.39],[-.54,-.62]],Re=Ae.slice(0,12).map(([U,D])=>[ue+U,V+D*q]);for(let U of[-1,1])j("dished-bucket-side",Ae.map(([de,_e])=>[ue+de,V+_e*q]),B+U*te*.48,.064,le,"benna",.018),U===1&&(n={partIndex:s.length-1,point:i(ue+.642,V-.2*q,B+te*.48)}),j("bucket-side-wear",[[-.81,-.827],[-.58,-.92],[-.18,-.95],[.19,-.92],[.49,-.76],[.45,-.66],[.1,-.81],[-.46,-.8]].map(([de,_e])=>[ue+de,V+_e*q]),B+U*(te*.5+.03),.029,ee,"benna",.008),j("linkage-pin-ear",[[-.25,-.075],[-.2,.141],[-.045,.232],[.145,.197],[.237,.057],[.17,-.11]].map(([de,_e])=>[ue+de,V+_e]),B+U*.198,.072,le,"benna",.013);if(T)for(let U of[-1,1]){let D=B+U*(te*.5+.041);for(let oe=0;oe<3;oe++){let de=-.43+oe*.34,_e=[[de,-.8],[de+.23,-.83],[de+.31,-.59],[de+.076,-.55]];j("lower-wear-pad"+oe,_e.map(([ye,Ue])=>[ue+ye,V+Ue*q]),D,.031,le,"benna",.015)}l(ue+.105,V-.337*q,D+U*.018,.31,.056,.027,le,"benna",-.055)}for(let U of[-1,1]){let D=B+U*(te*.5+.053);j("bucket-side-cutter",[[-.76,-.79],[-.56,-.76],[-.28,-.47],[-.21,-.3],[-.3,-.32],[-.59,-.58]].map(([ye,Ue])=>[ue+ye,V+Ue*q]),D,.071,le,"benna",.014),j("side-cutter-ground-edge",[[-.76,-.8],[-.56,-.768],[-.27,-.463],[-.22,-.33],[-.283,-.452],[-.6,-.71]].map(([ye,Ue])=>[ue+ye,V+Ue*q]),D+U*.039,.012,ee,"benna",.004);for(let[ye,Ue]of[[-.57,-.695],[-.402,-.51]])d(ue+ye,V+Ue*q,D+U*.042,.057,.01,"track","bulloneria",18),d(ue+ye,V+Ue*q,D+U*.054,.04,.025,"bolt","bulloneria",6);j("bucket-cheek-wear-pad",[[.13,-.74],[.34,-.63],[.48,-.46],[.52,-.26],[.45,-.16],[.41,-.37],[.28,-.57],[.09,-.68]].map(([ye,Ue])=>[ue+ye,V+Ue*q]),D-U*.012,.034,le,"benna",.012),_("wear-pad-weld"+U,[[.11,-.71],[.31,-.6],[.43,-.43],[.46,-.26]].map(([ye,Ue])=>i(ue+ye,V+Ue*q,D+U*.012)),.012,"edge","benna",13)}for(let U=0;U<Re.length-1;U++){let[D,oe]=Re[U],[de,_e]=Re[U+1];h(i(D,oe,B),i(de,_e,B),.066,le,"benna",te-.04)}for(let U of[-1,0,1]){let D=B+U*te*.28;_("abrasion-rib"+U,Re.slice(1,9).map(([oe,de])=>i(oe+.03,de-.032,D)),.031,"iron","benna",15)}h(i(ue-be,V-.86*q,B-te*.5),i(ue-be,V-.86*q,B+te*.5),.105,"edge","benna");for(let U=0;U<5;U++){let D=B-te*.41+U*te*.205;j("forged-tooth",[[ue-.74,V-.83*q],[ue-.92,V-.84*q],[ue-1.107,V-.908*q],[ue-1.13,V-.955*q],[ue-1.006,V-.958*q],[ue-.74,V-.912*q]],D,.118,ee,"benna",.011),d(ue-.872,V-.888*q,D+.064,.019,.014,"bolt","bulloneria",8)}return g(ue,V+.06,B,.096,.58,"benna"),n}function li(r,e,t){let i=new Uint8Array(262144),s=new Uint8Array(256*256*4),a=(p,f,g)=>p+(f-p)*g,o=(p,f,g)=>{let m=Math.max(0,Math.min(1,(g-p)/(f-p)));return m*m*(3-2*m)};function c(p,f,g){let m=Math.imul(p^g,668265261)^Math.imul(f+17,374761393);return m=Math.imul(m^m>>>15,2246822507),((m^m>>>13)>>>0)/4294967295}let l=(p,f,g,m,x)=>{let _=p*g,v=f*m,M=Math.floor(_),w=Math.floor(v),b=(P,F)=>c((P%g+g)%g,(F%m+m)%m,x),T=o(0,1,_-M),k=o(0,1,v-w);return a(a(b(M,w),b(M+1,w),T),a(b(M,w+1),b(M+1,w+1),T),k)};for(let p=0;p<256;p++)for(let f=0;f<256;f++){let g=f/256,m=p/256,x=(p*256+f)*4,_=t.seed,v=l(g,m,4,3,_),M=l(g,m,14,11,_+4),w=c(f,p,_+7),b=l(g,m,49,27,_+2),T=l(g,m,73,6,_+19),k=v*.41+M*.23+b*.17+T*.15+w*.04,P=o(t.cut-.07,t.cut+.045,k),F=o(.49,.71,v*.37+b*.32+M*.2+w*.11),ie=o(.72,.93,T)*(.25+.75*M);for(let C=0;C<3;C++){let Z=t.paint[C]*(.84+.2*M+.09*w),X=a(t.metal[C],t.oxide[C],F)*(.88+.16*b+.08*w);i[x+C]=Math.min(255,a(a(Z,X,P),t.metal[C],ie*.17))}i[x+3]=255,s[x]=Math.round(255*(.56+.04*w+.035*b-.095*P+.04*F)),s[x+1]=Math.round(255*a(.6+.085*M,.39+.4*F+.1*b,P)),s[x+2]=Math.round(255*a(.11,.72-.4*F,P)),s[x+3]=255}function h(p,f){let g=new r.DataTexture(p,256,256,r.RGBAFormat);return g.wrapS=g.wrapT=r.RepeatWrapping,g.magFilter=r.LinearFilter,g.minFilter=r.LinearMipmapLinearFilter,g.generateMipmaps=!0,f&&(g.colorSpace=r.SRGBColorSpace),g.anisotropy=3,g.needsUpdate=!0,g}let u=h(i,!0),d=h(s,!1);return new r.MeshStandardMaterial({name:e,map:u,bumpMap:d,roughnessMap:d,metalnessMap:d,bumpScale:.021,metalness:1,roughness:1,envMapIntensity:.98})}function Dh(r,e,t){let{V:n,box:i,bar:s,rod:a,plate:o,disc:c,pin:l,ring:h,bolts:u,machineScrew:d,append:p,round:f,cache:g,identity:m,quad:x,conduit:_,parts:v}=e,M=-.37,w=(A,ne,ge)=>{let xe=A.clone();return xe.color.set(ge),xe.name=ne,xe},b=li(r,"Ocra industriale invecchiato",{seed:53,paint:[211,158,48],metal:[130,123,101],oxide:[96,75,54],cut:.675}),T=li(r,"Rosso ossidato e lamiera scoperta",{seed:71,paint:[124,44,46],metal:[125,111,96],oxide:[98,73,57],cut:.663}),k=li(r,"Cassone del braccio in acciaio antracite",{seed:12,paint:[46,47,44],metal:[101,99,90],oxide:[87,65,49],cut:.63}),P=li(r,"Asta di spinta e guide brunite",{seed:24,paint:[51,54,52],metal:[114,111,96],oxide:[90,68,43],cut:.605}),F=li(r,"Fusione consumata della benna",{seed:39,paint:[117,113,96],metal:[111,109,96],oxide:[133,98,75],cut:.467}),ie=li(r,"Interno della benna segnato dalla terra",{seed:46,paint:[48,50,45],metal:[73,75,66],oxide:[83,64,53],cut:.47}),C=li(r,"Pattini ossidati",{seed:44,paint:[75,69,59],metal:[124,118,100],oxide:[121,89,61],cut:.563}),Z=li(r,"Acciaio fuso del telaio",{seed:14,paint:[103,108,100],metal:[135,137,124],oxide:[111,83,66],cut:.518}),X=w(t.iron,"Battute di acciaio esposto",12764084),$=b,me=t.glass.clone();me.name="Vetro storico neutro",me.color.set(4477529),me.opacity=.49,me.metalness=.13,me.clearcoat=.58,me.envMapIntensity=.76;let le=(A,ne,ge,xe=1,Me=.019)=>{c(A,ne,ge,Me,.01,"iron","bulloneria",10),c(A,ne,ge+xe*.007,Me*.81,.012,"bolt","bulloneria",10)},ee=(A,ne)=>A.map(([ge,xe])=>n(ge,xe,ne)),he=(A,ne,ge,xe,Me,Te,Xe,We,$e,zt="lamierati")=>x(A,[n(ne,Te,ge),n(xe,Te,Me),n(xe,We,Me),n(ne,Xe,ge)],$e,zt),L=(A,ne,ge,xe,Me="telaio")=>a(A,ne,ge,xe,Me,10),J=(A,ne,ge,xe,Me,Te)=>{let Xe=new r.Shape(A.map(([zt,Vt])=>new r.Vector2(zt,Vt)));Xe.closePath(),ne.forEach(zt=>{let Vt=new r.Path(zt.map(([dn,dt])=>new r.Vector2(dn,dt)));Vt.closePath(),Xe.holes.push(Vt)});let We=new r.ExtrudeGeometry(Xe,{depth:xe,bevelEnabled:!1,curveSegments:3});We.computeBoundingBox();let $e=We.boundingBox.getCenter(n());We.translate(-$e.x,-$e.y,-$e.z),p(We,Me,n($e.x,$e.y,ge),m,n(1,1,1),Te)},Se=g("perforated-period-shoe",()=>{let A=new r.Shape;[[-.5,-.4],[-.43,-.5],[.42,-.5],[.5,-.42],[.5,.42],[.42,.5],[-.43,.5],[-.5,.4]].forEach(([xe,Me],Te)=>Te?A.lineTo(xe,Me):A.moveTo(xe,Me)),A.closePath();for(let xe of[-.275,.275]){let Me=new r.Path;Me.absellipse(.04,xe,.115,.052,0,2*Math.PI,!0,0),A.holes.push(Me)}let ge=new r.ExtrudeGeometry(A,{depth:.76,bevelEnabled:!0,bevelSize:.011,bevelThickness:.04,bevelSegments:1,curveSegments:6});return ge.translate(0,0,-.38),ge.rotateX(Math.PI*.5),ge});for(let A of v)A.group==="cingoli"&&A.scale.z>.53&&A.scale.z<.56&&(A.scale.y>.064?(A.geometry=Se,A.material=C,A.scale.z*=1.22,A.scale.x*=1.055):(A.scale.z*=1.16,A.scale.y*=.57,A.material=C));for(let A of[-1,1]){let ne=A*1.112,ge=[[-3.56,.58],[-3.37,.78],[-2.91,.814],[-.33,.807],[-.064,.715],[.17,.642],[.12,.49],[-.18,.399],[-2.71,.34],[-3.46,.435]],xe=[-2.44,-1.43].map(Me=>Array.from({length:16},(Te,Xe)=>[Me+.059*Math.cos(Xe*Math.PI/8),.663+.057*Math.sin(Xe*Math.PI/8)]));J(ge,xe,ne,.074,Z,"telaio");for(let Me of[-3.17,-2.93,-.39,-.16])s(n(Me,.6,ne+A*.032),n(Me+.25,.6,ne+A*.032),.027,"edge","telaio",.044);s(n(-3.2,.402,ne+A*.041),n(-.375,.402,ne+A*.041),.039,Z,"telaio",.057)}let S=v.length,E=[[-2.88,-1.16],[-3.19,-1.135],[-3.46,-1.025],[-3.65,-.85],[-3.76,-.64],[-3.8,-.38],[-3.8,.38],[-3.76,.64],[-3.65,.85],[-3.46,1.025],[-3.19,1.135],[-2.88,1.16]],O=[[-3.81,3.33],[-3.55,3.4],[-3.2,3.51],[-2.89,3.59],[-2.32,3.72],[-1.7,3.79],[-1.1,3.82],[-.51,3.77],[-.17,3.64],[.02,3.48]];function B(A){let ne=O.findIndex(Me=>Me[0]>=A);if(ne<=0)return O[ne===0?0:O.length-1][1];let[ge,xe]=[O[ne-1],O[ne]];return ge[1]+(xe[1]-ge[1])*(A-ge[0])/(xe[0]-ge[0])}let I=1.48,j=2.34,W=3.27;i(-1.55,1.39,0,3.59,.18,2.39,Z,"telaio"),i(-3.18,1.35,0,1.15,.24,1.93,"iron","telaio"),E.slice(0,-1).forEach(([A,ne],ge)=>{let[xe,Me]=E[ge+1],Te=(A+xe)/2;he("rb-stern-deck-"+ge,A-.105,ne*1.04,xe-.105,Me*1.04,1.25,1.49,1.49,Z,"telaio"),he("rb-stern-low-"+ge,A,ne,xe,Me,I,j,j,T),he("rb-stern-upper-"+ge,A,ne,xe,Me,j,W,W,b),he("rb-stern-rim-"+ge,A,ne*1.005,xe,Me*1.005,W,B(A),B(xe),$);let Xe=n(A,B(A),ne),We=n(xe,B(xe),Me);x("rb-rear-roof-"+ge,[Xe,We,n(-2.88,B(-2.88)+.035,0),n(Te,(B(A)+B(xe))*.5+.016,(ne+Me)*.3)],$,"lamierati")});let K=(A,ne,ge,xe,Me,Te,Xe)=>o(A,[[ne,xe],[ge,xe],[ge,Me],[ne,Me]],Te,.035,Xe,"lamierati",.006);for(let A of[-1,1]){let ne=A*1.16;i(-2.69,2.38,ne-A*.021,.6,1.78,.049,"interior","motore");for(let Me=0;Me<16;Me++){let Te=1.52+Me*.113;i(-2.69,Te,ne,.556,.053,.085,Te<j?T:b,"motore");for(let Xe of[-1,1])Me%5===0&&le(-2.69+Xe*.307,Te,ne+A*.043,A,.014)}for(let Me of[-.325,.327])i(-2.69+Me,2.39,ne,.037,1.81,.048,Z,"lamierati");let ge=[[-2.34,-1.84],[-1.824,-1.18]];A<0&&ge.push([-1.16,-.5],[-.48,.01]);for(let[Me,Te]of ge){K("rb-plate-low"+Me,Me,Te,I,j,ne,T),K("rb-plate-high"+Me,Me,Te,j+.006,W,ne,b),A===1&&Me===-2.34&&(v[v.length-1].captionPoint=n(Me+.125,W-.115,ne+.025));for(let Xe of[Me+.03,Te-.035])for(let We of[1.57,2.28,2.77,3.17])le(Xe,We,ne+A*.027,A)}if(A<0){i(-1.78,2.76,ne-.037,.35,.25,.014,"interior","motore");for(let Me=0;Me<7;Me++)i(-1.78,2.66+Me*.035,ne-.051,.32,.014,.028,b,"motore")}let xe=[-2.89,-2.31,-1.66,-.93,-.37,-.17];for(let Me=0;Me<xe.length-1;Me++){let Te=xe[Me],Xe=xe[Me+1];he("rb-gutter"+A+"-"+Me,Te,ne+A*.009,Xe,ne+A*.009,W,B(Te),B(Xe),$);for(let We of[Te+.052,Xe-.048])le(We,B(We)-.054,ne+A*.023,A,.015)}}let re=[-2.89,-2.32,-1.7,-1.1,-.51,-.17];for(let A=0;A<re.length-1;A++){let ne=re[A],ge=re[A+1],Me=(A>=3?[[-1.165,-1.145,-1.095,-.99,-.65],[.095,.99,1.095,1.145,1.165]]:[[-1.165,-1.145,-1.095,-.99,0,.99,1.095,1.145,1.165]]).flatMap(Te=>Te.slice(1).map((Xe,We)=>[Te[We],Xe]));for(let Te=0;Te<Me.length;Te++){let[Xe,We]=Me[Te],$e=zt=>.108*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(zt)/1.165,12)))+.025*(1-Math.abs(zt)/1.165);x("rb-crown-"+A+"-"+Te,[n(ne,B(ne)+$e(Xe),Xe),n(ge,B(ge)+$e(Xe),Xe),n(ge,B(ge)+$e(We),We),n(ne,B(ne)+$e(We),We)],$,"lamierati")}}o("rb-rolled-windscreen-brow",[[-.205,3.297],[-.205,3.648],[-.157,3.617],[-.099,3.556],[-.019,3.432],[.036,3.385],[.046,3.35],[-.069,3.338],[-.104,3.297]],.635,1.097,$,"lamierati",.009);for(let A of[-2.31,-1.66,-1.03,-.47]){let ne=B(A),ge=[n(A,ne-.02,-1.135),n(A,ne+.057,-1.058),n(A,ne+.092,-.88),n(A,ne+.103,0),n(A,ne+.092,.88),n(A,ne+.057,1.058),n(A,ne-.02,1.135)];A<-1.05&&_("22rb-roof-hoop-"+A,ge,.021,Z,"telaio",26);for(let xe of[-1,1])a(n(A,ne-.054,xe*1.116),n(A,ne+.027,xe*1.097),.018,"iron","bulloneria",10)}let R=1.161,y=[[-1.17,I],[.21,I],[.21,2.32],[-.13,3.29],[-1.17,3.29]],G=[[-1.105,2.66],[-1.01,2.53],[-.845,2.46],[-.65,2.435],[-.02,2.395],[.061,2.427],[.071,2.51],[-.155,3.15],[-.22,3.207],[-.39,3.223],[-.68,3.2],[-.865,3.144],[-1.018,3.046],[-1.09,2.91],[-1.116,2.77]].map(([A,ne])=>[.071+(A-.071)*.18,ne]);function z(){let A=new r.Shape(ee(y,0).map(Me=>new r.Vector2(Me.x,Me.y)));A.closePath();let ne=new r.Path(ee(G,0).map(Me=>new r.Vector2(Me.x,Me.y)));ne.closePath(),A.holes.push(ne);let ge=new r.ExtrudeGeometry(A,{depth:.026,bevelEnabled:!1,curveSegments:2});ge.computeBoundingBox();let xe=ge.boundingBox.getCenter(n());ge.translate(-xe.x,-xe.y,-xe.z),p(ge,b,n(xe.x,xe.y,R),m,n(1,1,1),"cabina")}let Q=v.length;z(),o("rb-door-lower",[[-1.16,1.488],[.2,1.488],[.2,2.315],[.192,j],[-1.16,j]],R+.021,.028,T,"cabina",.006),o("rb-cab-sideglass",G,R-.019,.014,me,"vetri",.001);for(let A=0;A<G.length;A++){let ne=G[A],ge=G[(A+1)%G.length];L(n(ne[0],ne[1],R+.025),n(ge[0],ge[1],R+.025),.023,"edge","cabina")}for(let[A,ne]of[[[-1.165,1.5],[-1.165,3.29]],[[.205,1.5],[.205,2.34]],[[.205,2.34],[-.14,3.29]]])L(n(...A,R+.035),n(...ne,R+.035),.018,Z,"cabina");i(.124,2.18,R+.05,.052,.119,.028,"iron","cabina"),L(n(.13,2.13,R+.075),n(.13,2.22,R+.075),.015,"edge","cabina");let ae=1;for(let A of v.slice(Q))A.position=A.position.clone().add(n(-ae,0,.047));let se=R+.052;for(let A of[I+.018,3.292])s(n(-2.235,A,se),n(.002,A,se),.032,Z,"cabina",.037);for(let A of[-2.05,-1.02])c(A,1.538,se+.012,.044,.046,"iron","trasmissione",16),u(A,1.538,se+.036,.016);i(-1.139,2.3,.69,.055,1.62,.96,"interior","cabina"),i(-.53,1.483,.7,1.29,.062,.93,Z,"cabina");let fe=n(-.41,1.344,1.236);for(let A of[-.23,.23])s(n(fe.x+A,fe.y,fe.z),n(fe.x+A,1.49,1.089),.034,"iron","cabina",.043);s(n(fe.x-.26,fe.y,fe.z),n(fe.x+.27,fe.y,fe.z),.05,Z,"cabina",.097);for(let[A,ne]of[[-2.34,-2.19],[-2.14,-.88]])for(let ge=0;ge<3;ge++)i((A+ne)/2,2.362+ge*.048,R+(A>=-2.14?.1:.027),ne-A,.022,.009,T,"lamierati");let ve=(A,ne,ge,xe,Me,Te)=>{let Xe=.24-Math.max(0,xe-2.31)*.36,We=.24-Math.max(0,Me-2.31)*.36;x(A,[n(Xe,xe,ne),n(Xe,xe,ge),n(We,Me,ge),n(We,Me,ne)],Te,"vetri")};ve("rb-front-main",.16,1.104,2.35,3.25,me),ve("rb-front-low",.2,1.07,1.91,2.24,me),i(.236,1.677,.631,.061,.379,1.045,T,"cabina");for(let A of[.168,1.097])L(n(.274,1.89,A),n(.274,2.258,A),.013,"edge","cabina"),L(n(.274,2.353,A),n(-.077,3.242,A),.015,"edge","cabina");for(let A of[1.898,2.26,2.347])L(n(.265,A,.162),n(.265,A,1.108),.013,"edge","cabina");for(let A of[.12,1.136])L(n(.25,1.53,A),n(.25,2.31,A),.035,b,"cabina"),L(n(.25,2.31,A),n(-.11,3.31,A),.036,b,"cabina");for(let A of[1.62,2.295,3.29]){let ne=.25-Math.max(0,A-2.31)*.36;L(n(ne,A,.11),n(ne,A,1.14),.037,b,"cabina")}i(-.14,3.31,.63,.12,.1,1.05,b,"cabina");let Ee=n(-.21,3.41,1.05);i(Ee.x,Ee.y,.63,.36,.048,.85,"interior","cabina",-.04),i(-2.55,B(-2.55)+.151,-.33,.82,.045,.47,$,"lamierati"),L(n(-2.8,B(-2.8)+.185,-.46),n(-2.29,B(-2.29)+.185,-.46),.019,Z,"cabina"),a(n(-2.86,3.61,-.58),n(-2.03,3.61,-.58),.076,"iron","motore",18),_("rb-exhaust-tail",[n(-2.9,3.57,-.58),n(-2.92,3.65,-.58),n(-3.04,3.72,-.58)],.044,"track","motore",9),i(-.63,2.02,.126,1.12,.93,.036,"interior","cabina"),o("rb-driver-bulkhead",[[-1.15,2.485],[-.035,2.485],[-.2,3.18],[-1.15,3.235]],.126,.032,"interior","cabina",.004),i(-.91,1.82,.79,.23,.42,.23,"track","cabina"),i(-.81,2.045,.79,.53,.12,.47,"interior","cabina"),i(-1.029,2.294,.79,.101,.494,.429,"interior","cabina",.09);for(let A=0;A<4;A++){let ne=.32+A*.17,ge=n(-.36+A%2*.04,2.37+A%2*.075,ne);L(n(-.46,1.64,ne),ge,.019,"iron","cabina"),L(ge,ge.clone().add(n(-.027,.096,0)),.03,"interior","cabina"),i(-.23,1.56,ne,.161,.039,.075,"track","cabina")}o("rb-dash-side",[[-.58,2.36],[-.42,2.365],[-.28,2.51],[-.31,2.576],[-.57,2.55]],.235,.117,"track","cabina",.014);for(let A of[-.515,-.429])c(A,2.49,.304,.035,.013,"iron","cabina",22),c(A,2.49,.315,.026,.006,"light","cabina",16);a(n(-.16,1.561,.96),n(-.19,2.435,.88),.018,X,"cabina",14);let we=g("rb-lever-knob",()=>new r.SphereGeometry(1,14,9));p(we,t.rubber,n(-.19,2.435,.88),m,n(.047,.058,.046),"cabina");let Ce=v.length;for(let[A,ne]of[[-2.21,-.16],[-2.42,-.39],[-2.69,-.16],[-2.91,-.39]])i(A,2.08,ne,.23,.56,.26,"iron","motore"),i(A,2.39,ne,.2,.125,.238,"track","motore");for(let[A,ne,ge]of[[0,-.57,.24],[1,-1.36,.31]]){let xe=2.02+A*.21;c(ne,xe,M,ge,.76,"iron","trasmissione");for(let Me=0;Me<14;Me++)h(ne,xe,M-.306+Me*.047,ge,.015,"edge","trasmissione");for(let Me of[-1,1])c(ne,xe,M+Me*.377,ge*1.21,.051,"track","trasmissione"),c(ne,xe,M+Me*.413,ge*.45,.083,"iron","trasmissione");h(ne,xe,M-.43,ge*.99,.032,"rust","trasmissione")}let Ne=n(-.1,1.38,M),Le=n(4.84,5.99,M),Fe=Le.clone().sub(Ne).normalize(),Ge=n(-Fe.y,Fe.x,0),je=(A,ne=0)=>Ne.clone().lerp(Le,A).addScaledVector(Ge,ne*1.27),it=A=>A.map(([ne,ge])=>{let xe=je(ne,ge);return[xe.x,xe.y]}),gt=(A,ne,ge,xe,Me=20)=>{let Te=n(-ne.y,ne.x,0);return Array.from({length:Me},(Xe,We)=>{let $e=We*2*Math.PI/Me;return[A.x+ne.x*ge*Math.cos($e)+Te.x*xe*Math.sin($e),A.y+ne.y*ge*Math.cos($e)+Te.y*xe*Math.sin($e)]})},ut=it([[-.023,.12],[.025,.28],[.22,.385],[.47,.369],[.6,.27],[.82,.19],[.97,.148],[1.004,.08],[1.018,-.042],[.973,-.145],[.797,-.195],[.603,-.242],[.46,-.322],[.2,-.347],[.027,-.29],[-.023,-.184]]);for(let A of[-1,1]){o("rb-solid-boom-cheek",ut,M+A*.277,.071,k,"braccio",.012);let ne=it([[.015,-.28],[.21,-.332],[.46,-.305],[.6,-.22],[.82,-.166],[.979,-.119],[.983,-.143],[.81,-.204],[.601,-.256],[.46,-.349],[.21,-.375],[.016,-.32]]);o("face-bottom-longitudinal-flange",ne,M+A*.323,.092,X,"braccio",.007);let ge=it([[.045,.258],[.22,.369],[.46,.351],[.588,.267],[.82,.178],[.962,.15],[.964,.169],[.82,.205],[.589,.3],[.461,.394],[.222,.408],[.047,.299]]);o("face-top-longitudinal-flange",ge,M+A*.323,.086,X,"braccio",.006);let xe=it([[.065,.155],[.347,.228],[.488,.232],[.502,.18],[.344,.161],[.069,.099]]);o("face-web-doubler",xe,M+A*.349,.031,k,"braccio",.007);for(let Me of[.07,.17,.28,.392,.48,.615,.731,.825,.919]){let Te=je(Me,.124);u(Te.x,Te.y,M+A*.371,.027,A)}}let ht=(A,ne)=>{for(let ge=1;ge<ne.length;ge++){let xe=je(...ne[ge-1]),Me=je(...ne[ge]);x(A+ge,[xe.clone().add(n(0,0,-.275)),Me.clone().add(n(0,0,-.275)),Me.clone().add(n(0,0,.275)),xe.clone().add(n(0,0,.275))],k,"braccio")}};ht("rb-closed-upper-web",[[.024,.255],[.22,.367],[.47,.35],[.6,.255],[.82,.175],[.958,.124]]),ht("rb-closed-lower-web",[[.025,-.273],[.2,-.332],[.46,-.304],[.603,-.225],[.797,-.181],[.973,-.129]]);for(let A of[.13,.229,.327,.575,.678,.775,.876,.951]){let ne=je(A,-.17);a(ne.clone().add(n(0,0,-.295)),ne.clone().add(n(0,0,.295)),.043,X,"braccio",14)}for(let A of[-1,1])o("face-main-cheek",[[Ne.x-.31,1.26],[Ne.x+.33,1.23],[Ne.x+.3,1.48],[Ne.x+.12,1.66],[Ne.x-.17,1.65],[Ne.x-.33,1.5]],M+A*.39,.102,k,"telaio",.026);l(Ne.x,Ne.y,M,.156,1.04);let vt=.49;function pe(A,ne,ge,xe){let Me=(Te,Xe,We,$e,zt)=>{let Vt="face-rim-"+Te+"-"+Xe+"-"+We,dn=g(Vt,()=>{let dt=new r.Shape;dt.absarc(0,0,Te,0,2*Math.PI,!1);let an=new r.Path;an.absarc(0,0,Xe,0,2*Math.PI,!0),dt.holes.push(an);let Ni=new r.ExtrudeGeometry(dt,{depth:We,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:22});return Ni.translate(0,0,-We*.5),Ni});p(dn,zt,n(A.x,A.y,A.z+$e),m,n(1,1,1),"trasmissione")};Me(ne*.95,ne*.81,ge,0,k);for(let Te of[-1,1])Me(ne,ne*.88,.026,Te*ge*.49,X);c(A.x,A.y,A.z,ne*.235,ge*1.65,k,"trasmissione",28);for(let Te=0;Te<5;Te++){let Xe=Te*Math.PI*2/5+xe*.124+.18,We=Math.cos(Xe),$e=Math.sin(Xe),zt=-$e,Vt=We,dn=(dt,an)=>[A.x+dt*We+an*zt,A.y+dt*$e+an*Vt];o("head-spoke-"+xe+"-"+Te,[dn(ne*.16,-ne*.099),dn(ne*.88,-ne*.06),dn(ne*.88,ne*.076),dn(ne*.18,ne*.126)],A.z,ge*.57,k,"trasmissione",.009)}c(A.x,A.y,A.z+ge*.88,ne*.092,.052,"bolt","trasmissione",18)}[-.371,.371].forEach((A,ne)=>pe(Le.clone().add(n(0,0,A)),vt,.125,ne)),c(Le.x,Le.y,M,.103,1.045,X,"trasmissione",24);let rt=je(.535,-.014),st=n(.963,.269,0).normalize(),Ye=n(-st.y,st.x,0),Bt=A=>rt.clone().addScaledVector(st,A),Ct=4.51,xn=Bt(-.79),jt=Bt(Ct),qt=A=>A.map(([ne,ge])=>{let xe=Bt(ne).addScaledVector(Ye,ge);return[xe.x,xe.y]}),sn=qt([[-.81,-.077],[-.78,-.135],[Ct-.23,-.15],[Ct,-.09],[Ct+.02,.082],[Ct-.21,.155],[-.75,.125],[-.81,.072]]);o("crowd-handle-rack",sn,M,.279,P,"braccio",.014);let un=qt([[-.71,.055],[Ct-.2,.086],[Ct-.2,.111],[-.71,.085]]);for(let A of[-1,1])o("crowd-handle-rubbed-edge",un,M+A*.148,.013,X,"braccio",.003);for(let A=0;A<20;A++){let ne=Bt(-.71+A*.2).addScaledVector(Ye,-.146);i(ne.x,ne.y,M,.059,.052,.214,X,"trasmissione",Math.atan2(st.y,st.x))}let Nt=xn.clone().addScaledVector(st,.014);c(Nt.x,Nt.y,M,.103,.298,X,"trasmissione",20);for(let A of[-1,1]){let ne=qt([[-.29,-.269],[.24,-.267],[.348,-.155],[.34,.117],[.18,.237],[-.2,.237],[-.33,.09]]),ge=gt(rt,st,.193,.118,16);J(ne,[ge],M+A*.343,.081,k,"trasmissione");let xe=je(.53,.192);c(xe.x,xe.y,M+A*.421,.147,.071,k,"trasmissione",24),u(xe.x,xe.y,M+A*.466,.063,A)}for(let A of[-1,1]){let ne=Bt(-.2).addScaledVector(Ye,A*.196),ge=Bt(.23).addScaledVector(Ye,A*.196);s(ne,ge,.085,X,"trasmissione",.38)}let mt=1.49,Ot=jt.x,_t=jt.y,Et=A=>A.map(([ne,ge])=>[Ot+ne,_t+ge]),xt=(A,ne,ge=0)=>n(Ot+A,_t+ne,M+ge),bt=(A,ne,ge,xe,Me,Te=.008)=>o(A,Et(ne),M+ge,xe,Me,"benna",Te),yn=(A,ne,ge,xe,Me,Te)=>{x(A,[xt(...ne,xe),xt(...ge,xe),xt(...ge,Me),xt(...ne,Me)],Te,"benna")},N=[[-.21,-.15],[-.169,.005],[-.046,.12],[.216,.191],[.57,.16],[.974,.095],[1.302,.016],[1.373,-.044],[1.322,-.284],[1.26,-.61],[1.22,-.867],[1.188,-1.011],[1.056,-1.099],[.631,-1.071],[.237,-1.015],[-.03,-.906],[-.201,-.715],[-.272,-.499],[-.294,-.317]],ue=[-.04,-.42],V=[[-.192,-.403],[-.148,-.245],[-.038,-.195],[.119,-.24],[.224,-.4],[.392,-.517],[.793,-.619],[1.165,-.658],[1.208,-.748],[.968,-.761],[.585,-.695],[.293,-.607],[.113,-.538],[-.038,-.562],[-.151,-.522]];for(let A of[-1,1]){let ne=A*(mt*.5-.04);bt("rb-dipper-side",N,ne,.092,F,.023),bt("rb-dipper-brace",V,ne+A*.062,.056,F,.012),bt("rb-dipper-edge-strip",[[1.251,-.003],[1.361,-.048],[1.29,-.394],[1.19,-.941],[1.104,-.987],[1.133,-.752]],ne+A*.06,.042,X,.008),bt("rb-dipper-welded-wear-pad",[[.878,-.114],[.98,-.136],[.839,-.633],[.762,-.608]],ne+A*.059,.044,F,.013),bt("rb-dipper-door-side",[[.007,-.863],[.305,-.986],[.681,-1.024],[1.137,-1.027],[1.16,-.924],[.653,-.911],[.291,-.885],[.064,-.798]],ne+A*.066,.056,X);for(let[xe,Me]of[[-.053,-.386],[.2,-.461],[.895,-.203],[.794,-.536],[1.23,-.225],[1.12,-.843]])u(Ot+xe,_t+Me,M+ne+A*.104,.032,A)}let te=[[-.293,-.308],[-.278,-.497],[-.209,-.69],[-.04,-.867],[.23,-.981]];for(let A=0;A<te.length-1;A++)yn("rb-heel-bend-"+A,te[A],te[A+1],-mt*.473,mt*.473,F);let q=[[.1,-.906],[.3,-1.077],[.71,-1.177],[1.097,-1.189],[1.203,-1.023]];for(let A=0;A<q.length-1;A++)yn("rb-drop-door-"+A,q[A],q[A+1],-mt*.47,mt*.47,ie);let be=[[1.166,-1.028],[1.23,-.815],[1.274,-.562],[1.326,-.26],[1.375,-.03],[1.405,.022]];for(let A=0;A<be.length-1;A++)yn("rb-dipper-front-"+A,be[A],be[A+1],-mt*.49,mt*.49,F);s(xt(1.362,-.037,-mt*.5),xt(1.362,-.037,mt*.5),.094,X,"benna",.101);for(let A=0;A<4;A++){let ne=A/3,ge=mt*(-.43+.86*ne),xe=.59+.115*(1-Math.sin(ne*Math.PI)),Me=[[1.22,-.099],[1.403,-.1],[1.514,.147],[1.554,xe*.65],[1.584,xe],[1.544,xe-.011],[1.399,xe*.68],[1.245,.179]];bt("rb-dipper-upturned-tooth-"+A,Me,ge,.183,X,.014),c(Ot+1.36,_t+.023,M+ge+.101,.037,.043,"iron","bulloneria",14)}for(let A of[-1,1]){let ne=A*.411;bt("rb-open-back-socket",[[.116,.127],[.016,.199],[-.127,.157],[-.234,.021],[-.252,-.07],[-.188,-.156],[-.07,-.209],[.13,-.179],[.212,-.068],[.214,.024]],ne,.124,k,.016);let xe=Bt(Ct-.38);xe.z=M+ne;let Me=xt(.31,-.401,ne);s(xe,Me,.078,k,"benna",.099)}l(jt.x,jt.y,M,.121,.995,"benna"),a(xt(-.04,-.425,-mt*.55),xt(-.04,-.425,mt*.55),.085,k,"benna",22);for(let A of[-1,1])c(Ot+ue[0],_t+ue[1],M+A*mt*.557,.124,.047,X,"benna",26);let Ae=xt(.285,.375);for(let A of[-1,1]){let ge=[[-.04,-.42],[-.108,-.244],[.018,.081],[.2,.353]].map(([Me,Te],Xe)=>xt(Me,Te,A*(mt*.51-Xe*.171)));for(let Me=1;Me<ge.length;Me++)s(ge[Me-1],ge[Me],.096,F,"benna",.075);o("rb-horizontal-hoist-block",[[-.263,.093],[-.208,.128],[.113,.13],[.238,.062],[.258,-.016],[.172,-.105],[-.158,-.118],[-.267,-.033]].map(([Me,Te])=>[Ae.x+Me,Ae.y+Te]),M+A*.116,.061,k,"trasmissione",.014),c(Ae.x,Ae.y,M+A*.165,.065,.05,X,"trasmissione",20)}c(Ae.x,Ae.y,M,.121,.208,"iron","trasmissione",22);function Re(A,ne,ge,xe){let Me=ge.x-A.x,Te=ge.y-A.y,Xe=Me*Me+Te*Te,We=ne*ne/Xe,$e=xe*ne*Math.sqrt(Math.max(0,Xe-ne*ne))/Xe;return n(A.x+We*Me-$e*Te,A.y+We*Te+$e*Me,A.z)}let U=(A,ne,ge=.014)=>L(A,ne,ge,"track","tubazioni"),D=n(.205,3.78,M+.08);s(n(-.24,3.39,M+.08),D,.092,k,"telaio",.103),pe(D,.213,.079,3);let oe=n(-.76,2.55,M+.11),de=Re(D,.209,oe,-1);U(oe,de);for(let A of[-1,1]){let ne=Le.clone().add(n(0,0,A*.371)),ge=Ae.clone().add(n(0,0,A*.107)),xe=Re(ne,vt-.027,D,-1),Me=Re(D,.206,xe,1);U(Me,xe);let Te=Re(ne,vt-.027,ge,1),Xe=Re(ge,.148,Te,A);U(Te,Xe,.016);let We=n(-2.02,3.5,M+A*.245),$e=je(.952,.152);$e.z=M+A*.338,U(We,$e,.014)}o("face-fairlead-cover",[[.11,1.48],[.95,1.45],[.88,1.63],[.57,2.51],[.22,2.69],[-.17,2.755]],M-.41,.165,b,"lamierati",.012);let _e=n(.12,2.7,M-.65),ye=n(.55,2.48,M-.65);s(_e,ye,.043,b,"lamierati",.64);let Ue=new Map,Ve=(A,ne)=>{let ge=A.uuid+"|"+ne.elements.map(Me=>Math.round(Me*1e7)).join(",");if(Ue.has(ge))return Ue.get(ge);let xe=A.clone();return xe.applyMatrix4(ne),Ue.set(ge,xe),xe},Oe=new r.Matrix4().makeScale(1,1.075,1),ze=new r.Matrix4,Ze=new r.Matrix4,He=new r.Matrix4;for(let A of v.slice(S,Ce)){if(A.position=A.position.clone(),A.position.y=I+(A.position.y-I)*1.075,A.captionPoint&&(A.captionPoint.y=I+(A.captionPoint.y-I)*1.075),Math.abs(A.quaternion.x)+Math.abs(A.quaternion.y)+Math.abs(A.quaternion.z)<1e-5){A.scale=A.scale.clone(),A.scale.y*=1.075;continue}ze.compose(n(),A.quaternion,A.scale),Ze.copy(ze).invert(),He.copy(Ze).multiply(Oe).multiply(ze),A.geometry=Ve(A.geometry,He)}let Ie=new Set([b,T,$,F,k,P]),ke=n(),tt=n();for(let A of v){if(!Ie.has(A.material)||!["lamierati","cabina","benna","braccio"].includes(A.group))continue;let ne=A.geometry.clone(),ge=ne.getAttribute("position"),xe=ne.getAttribute("normal"),Me=ne.getAttribute("uv");for(let Te=0;Te<ge.count;Te++){ke.fromBufferAttribute(ge,Te).multiply(A.scale).applyQuaternion(A.quaternion).add(A.position),tt.fromBufferAttribute(xe,Te).applyQuaternion(A.quaternion);let Xe=Math.abs(tt.x),We=Math.abs(tt.y),$e=Math.abs(tt.z),zt=Xe>We&&Xe>$e?ke.z:ke.x,Vt=We>Xe&&We>$e?ke.z:ke.y;Me.setXY(Te,zt*.71+.143,Vt*.67+.323)}A.geometry=ne}let ct=.826,Tt=new r.Quaternion().setFromAxisAngle(n(0,1,0),-.135),Gt=new r.Quaternion().setFromAxisAngle(n(0,1,0),.345),St=n(-1.565,0,0),pi=1.19,Zn=new r.Matrix4().makeScale(pi,1,1);for(let A of v.slice(0,S)){let ne=A.position.x-St.x;A.position=A.position.clone(),A.position.x=St.x+ne*pi+.32,ze.compose(n(),A.quaternion,A.scale),Ze.copy(ze).invert(),He.copy(Ze).multiply(Zn).multiply(ze),A.geometry=Ve(A.geometry,He),A.position.sub(St).applyQuaternion(Gt).add(St),A.quaternion=Gt.clone().multiply(A.quaternion)}for(let A of v)A.position.applyQuaternion(Tt).multiplyScalar(ct),A.quaternion=Tt.clone().multiply(A.quaternion),A.scale.multiplyScalar(ct),A.captionPoint&&A.captionPoint.applyQuaternion(Tt).multiplyScalar(ct)}function Nh(r,e,t){let n=Math.max(0,Math.min(3,Math.round(e))),i=(R=0,y=0,Y=0)=>new r.Vector3(R,y,Y),s=i(0,1,0),a=i(0,0,1),o=new r.Quaternion,c=new r.Quaternion().setFromUnitVectors(s,a),l=R=>new r.Quaternion().setFromAxisAngle(a,R),h=[],u=new Map,d=(R,y)=>(u.has(R)||u.set(R,y()),u.get(R)),p=d("box",()=>new r.BoxGeometry(1,1,1)),f=R=>d("cyl"+R,()=>new r.CylinderGeometry(1,1,1,R,1,!1)),g=(R,y,Y,G,z,Q)=>{let ae=typeof y=="string"?t[y]:y;if(!ae)throw new Error("Missing excavator material: "+y);h.push({geometry:R,material:ae,position:Y,quaternion:G,scale:z,group:Q})},m=(R,y,Y,G,z,Q,ae,se,fe=0)=>g(p,ae,i(R,y,Y),fe?l(fe):o,i(G,z,Q),se);function x(R,y,Y,G,z,Q=12,ae=Y){let se=y.clone().sub(R),fe=se.length();if(!fe)return;let ve=new r.Quaternion().setFromUnitVectors(s,se.divideScalar(fe));g(f(Q),G,R.clone().lerp(y,.5),ve,i(Y,fe,ae),z)}function _(R,y,Y,G,z,Q=Y){let ae=y.clone().sub(R),se=ae.length();if(!se)return;let fe=new r.Quaternion().setFromUnitVectors(s,ae.divideScalar(se));g(p,G,R.clone().lerp(y,.5),fe,i(Y,se,Q),z)}let v=(R,y,Y,G,z,Q,ae,se=24)=>g(f(se),Q,i(R,y,Y),c,i(G,z,G),ae);function M(R,y,Y,G){return d(R,()=>{let z=new r.Shape;z.moveTo(y[0][0],y[0][1]),y.slice(1).forEach(([Ee,we])=>z.lineTo(Ee,we)),z.closePath();let Q=new r.ExtrudeGeometry(z,{depth:Math.max(.003,Y-2*G),bevelEnabled:G>0,bevelSize:G,bevelThickness:G,bevelSegments:2,curveSegments:3});Q.computeBoundingBox();let ae=Q.boundingBox.getCenter(i());Q.translate(-ae.x,-ae.y,-ae.z);let se=Q.attributes.normal,fe=Q.attributes.position,ve=Q.attributes.uv;for(let Ee=0;Ee<fe.count;Ee++){let we=Math.abs(se.getX(Ee)),Ce=Math.abs(se.getY(Ee)),Ne=Math.abs(se.getZ(Ee)),Le=we>Ne&&we>Ce?fe.getZ(Ee):fe.getX(Ee),Fe=Ce>we&&Ce>Ne?fe.getZ(Ee):fe.getY(Ee);ve.setXY(Ee,Le*.42,Fe*.42)}return{geometry:Q,centre:ae}})}function w(R,y,Y,G,z,Q,ae=.018,se=0,fe=0){let ve=M(R,y,G,ae);g(ve.geometry,z,i(se+ve.centre.x,fe+ve.centre.y,Y),o,i(1,1,1),Q)}function b(R,y,Y,G){let z=y.reduce((ae,se)=>ae.add(se),i()).multiplyScalar(.25),Q=d(R,()=>{let ae=y.map(ve=>ve.clone().sub(z)),se=new r.BufferGeometry;se.setAttribute("position",new r.Float32BufferAttribute(ae.flatMap(ve=>[ve.x,ve.y,ve.z]),3)),se.setAttribute("uv",new r.Float32BufferAttribute([0,0,1,0,1,1,0,1],2)),se.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);let fe=ae[1].clone().sub(ae[0]).cross(ae[2].clone().sub(ae[0])).normalize();return se.setAttribute("normal",new r.Float32BufferAttribute(Array.from({length:4},()=>fe.toArray()).flat(),3)),se});g(Q,Y,z,o,i(1,1,1),G)}function T(R,y,Y,G,z,Q="braccio"){v(R,y,Y,G,z,"iron",Q);for(let ae of[-1,1])v(R,y,Y+ae*(z/2+.01),G*.87,.038,"edge",Q,20),v(R,y,Y+ae*(z/2+.038),G*.39,.041,"bolt","bulloneria",6)}function k(R){return d(R?"slotted-screw":"hex-bolt",()=>{let y=[];function Y(Ce,Ne,Le,Fe,Ge){let je=new r.CylinderGeometry(Ce,Ne,Le,Ge);je.translate(0,Fe,0),y.push(je)}Y(.47,.41,1.95,-.965,10);let G=.36,z=4,Q=11,ae=[];for(let Ce=0;Ce<z*Q;Ce++){let Ne=(ut,ht,vt)=>{let pe=ut/Q*Math.PI*2;return[Math.cos(pe)*ht,-1.83+ut/Q*G+vt,Math.sin(pe)*ht]},Le=Ne(Ce,.45,0),Fe=Ne(Ce,.55,.075),Ge=Ne(Ce,.45,.15),je=Ne(Ce+1,.45,0),it=Ne(Ce+1,.55,.075),gt=Ne(Ce+1,.45,.15);ae.push(...Le,...it,...je,...Le,...Fe,...it,...Fe,...gt,...it,...Fe,...Ge,...gt)}let se=new r.BufferGeometry;if(se.setAttribute("position",new r.Float32BufferAttribute(ae,3)),se.computeVertexNormals(),y.push(se),R){Y(.92,.51,.32,.06,16);for(let Ce of[-1,1]){let Ne=new r.Shape,Le=.9,Ge=Math.asin(.15/Le);for(let it=0;it<=16;it++){let gt=Ge+(Math.PI-2*Ge)*it/16,ut=Le*Math.cos(gt),ht=Ce*Le*Math.sin(gt);it===0?Ne.moveTo(ut,ht):Ne.lineTo(ut,ht)}Ne.closePath();let je=new r.ExtrudeGeometry(Ne,{depth:.19,bevelEnabled:!1});je.rotateX(-Math.PI/2),je.translate(0,.22,0),y.push(je)}}else Y(1,1,.51,.182,6),Y(.89,1,.08,.476,6);let fe=[],ve=[],Ee=[];for(let Ce of y){let Ne=Ce.index?Ce.toNonIndexed():Ce,Le=Ne.attributes.position,Fe=Ne.attributes.normal,Ge=Ne.attributes.uv;for(let je=0;je<Le.count;je++)fe.push(Le.getX(je),Le.getY(je),Le.getZ(je)),ve.push(Fe.getX(je),Fe.getY(je),Fe.getZ(je)),Ee.push(Ge?Ge.getX(je):0,Ge?Ge.getY(je):0);Ne!==Ce&&Ne.dispose(),Ce.dispose()}let we=new r.BufferGeometry;return we.userData.threadPitch=G,we.userData.threadTurns=z,we.setAttribute("position",new r.Float32BufferAttribute(fe,3)),we.setAttribute("normal",new r.Float32BufferAttribute(ve,3)),we.setAttribute("uv",new r.Float32BufferAttribute(Ee,2)),we})}let P=new r.Quaternion().setFromUnitVectors(s,i(0,0,-1));function F(R,y,Y,G=.029,z=1){v(R,y,Y,G*1.35,.014,"iron","bulloneria",12),g(k(!1),"bolt",i(R,y,Y+z*.011),z>0?c:P,i(G,G,G),"bulloneria")}function ie(R,y,Y,G,z=1){g(k(!0),"bolt",i(R,y,Y),z>0?c:P,i(G,G,G),"bulloneria")}let C=(R,y)=>d("ring"+R+"-"+y,()=>new r.TorusGeometry(R,y,6,28)),Z=(R,y,Y,G,z,Q,ae)=>g(C(G,z),Q,i(R,y,Y),o,i(1,1,1),ae);function X(R,y,Y,G,z,Q=18){let ae=new r.CatmullRomCurve3(y),se=d(R,()=>{let fe=new r.TubeGeometry(ae,Q,Y,6,!1);fe.computeBoundingBox();let ve=fe.boundingBox.getCenter(i());return fe.translate(-ve.x,-ve.y,-ve.z),{g:fe,center:ve}});g(se.g,G,se.center.clone(),o,i(1,1,1),z)}let $=[-3.47,-3.57,-3.365,-3.35][n],me=[.04,.28,.285,.31][n],le=n<2?.54:.483,ee=n<2?.445:.398,he=($+me)*.5,L=me-$,J=2*L+2*Math.PI*ee,Se=Math.round(J/.214),S=J/Se;function E(R){if(R<L)return[$+R,le-ee,0];if(R-=L,R<Math.PI*ee){let Y=R/ee-Math.PI/2;return[me+Math.cos(Y)*ee,le+Math.sin(Y)*ee,Y+Math.PI/2]}if(R-=Math.PI*ee,R<L)return[me-R,le+ee,Math.PI];let y=(R-L)/ee+Math.PI/2;return[$+Math.cos(y)*ee,le+Math.sin(y)*ee,y+Math.PI/2]}let O=n>0?t.track.clone():t.track;if(n>0){O.name=["","Carro brunito e terra asciutta","Fiancata del carro con deposito di polvere","Carro contemporaneo grafite"][n];let R=n===1?[99,80,65]:n===2?[127,116,102]:[75,79,78],y=96,Y=new Uint8Array(y*y*4),G=919+n*449;for(let Q=0;Q<y;Q++)for(let ae=0;ae<y;ae++){G=Math.imul(G,1664525)+1013904223>>>0;let se=ae/y*Math.PI*2,fe=Q/y*Math.PI*2,ve=(Q*y+ae)*4,Ee=(G/4294967296-.5)*6,we=3.1*Math.cos(2*se+Math.sin(fe))+2.9*Math.sin(3*fe+Math.sin(2*se))+.8*Math.sin(9*se-4*fe);for(let Ce=0;Ce<3;Ce++)Y[ve+Ce]=R[Ce]+we+Ee;Y[ve+3]=255}let z=new r.DataTexture(Y,y,y,r.RGBAFormat);z.wrapS=z.wrapT=r.RepeatWrapping,z.magFilter=r.LinearFilter,z.minFilter=r.LinearMipmapLinearFilter,z.generateMipmaps=!0,z.colorSpace=r.SRGBColorSpace,z.needsUpdate=!0,O.map=z,O.color.setHex(16777215),O.metalness=n===2?.23:n===1?.3:.49,O.roughness=n===2?.87:.7,O.roughnessMap=null,O.metalnessMap=null,O.bumpScale=.006}let B=d("turned-bearing-race",()=>{let R=[[.62,-.51],[.92,-.51],[1,-.38],[1,.34],[.93,.48],[.71,.48],[.66,.34],[.62,-.31],[.62,-.51]];return new r.LatheGeometry(R.map(([y,Y])=>new r.Vector2(y,Y)),28)}),I=[.82,1.175,1.19,1.195][n],j=[.55,.65,.6,.6][n];for(let R of[-1,1]){let y=R*I,Y=y+R*(j/2-(n===0?0:.18));w("hull-carriage",[[$-.03,.32],[me-.035,.33],[me+.15,.51],[me-.24,.74],[he+.24,.84],[$+.29,.75],[$-.13,.58]],y,.39,"track","telaio",.055);for(let Q=0;Q<Se;Q++){let[ae,se,fe]=E(Q*S),ve=-Math.sin(fe),Ee=Math.cos(fe);if(m(ae,se,y,S*.93,.068,j,"track","cingoli",fe),n===0)m(ae-ve*.051,se-Ee*.051,y,.046,.058,j*.985,"iron","cingoli",fe);else for(let we of[-.063,0,.063])m(ae+Math.cos(fe)*we-ve*.046,se+Math.sin(fe)*we-Ee*.046,y,.026,.048,j*.985,"iron","cingoli",fe);m(ae+ve*.065,se+Ee*.065,y,S*.75,.068,j*.42,"track","cingoli",fe),Q%2===0&&v(ae+ve*.036,se+Ee*.036,Y-R*.017,.036,.046,"bolt","cingoli",8);for(let we of[-1,1]){let Ce=i(ae-ve*.042,se-Ee*.042,y+we*j*.292),Ne=i(-ve,-Ee,0);g(f(6),Q%7===0&&n===0?"rust":"bolt",Ce,new r.Quaternion().setFromUnitVectors(s,Ne),i(.026,.025,.026),"bulloneria")}}let G=(Q,ae,se,fe,ve=!1)=>{if(v(Q,ae,y,se,j*.66,"iron","trasmissione",32),v(Q,ae,Y-R*.035,se*.85,.059,"track","trasmissione",28),Z(Q,ae,Y+R*.003,se*.728,se*.049,"track","trasmissione"),v(Q,ae,Y+R*.02,se*.43,.073,"iron","trasmissione",22),v(Q,ae,Y+R*.077,se*.23,.059,n===0?"rust":"edge","trasmissione",16),ve&&n>0){let we=Y+R*.116;v(Q,ae,we,se*.64,.039,O,"trasmissione",28);let Ce=n===2?14:10;for(let Ne=0;Ne<Ce;Ne++){let Le=Ne*Math.PI*2/Ce,Fe=Math.cos(Le),Ge=Math.sin(Le);_(i(Q+Fe*se*.39,ae+Ge*se*.39,we+R*.028),i(Q+Fe*se*.63,ae+Ge*se*.63,we+R*.028),.026,O,"trasmissione",.031)}v(Q,ae,we+R*.031,se*.35,.044,O,"trasmissione",20)}if(fe)for(let we of[-1,1]){let Ce=y+we*j*.218;g(B,"edge",i(Q,ae,Ce),c,i(se*.79,.091,se*.79),"trasmissione"),Z(Q,ae,Ce+we*.05,se*.56,.014,"rubber","trasmissione"),Z(Q,ae,Ce-we*.045,se*.66,.012,"iron","trasmissione")}let Ee=fe?8:4;for(let we=0;we<Ee;we++){let Ce=2*Math.PI*we/Ee;F(Q+se*.53*Math.cos(Ce),ae+se*.53*Math.sin(Ce),Y+R*.005,fe?.027:.022,R)}if(ve){let we=[];for(let Ce=0;Ce<16;Ce++)for(let[Ne,Le]of[[0,.89],[.17,1],[.48,1],[.72,.89]]){let Fe=(Ce+Ne)*Math.PI*2/16;we.push([Math.cos(Fe)*se*Le,Math.sin(Fe)*se*Le])}w("drive-sprocket",we,Y-R*.105,.089,"iron","trasmissione",.009,Q,ae)}};G($,le,ee*.93,!0,!0),G(me,le,ee*.9,!0);let z=n===0?5:7;for(let Q=0;Q<z;Q++){let ae=$+.58+Q*(L-1.16)/(z-1);G(ae,n<2?.415:.367,n===0?.248:.225,!1)}for(let Q of[.27,.7])v($+Q*L,n<2?.83:.753,y,.117,.38,"iron","trasmissione",16);if(n>0){let Q=Y+R*.054,ae=n<2?.74:.7,se=.33,fe=n===1?[[$+.24,ae-.09],[$+.49,ae+.06],[me-.37,ae+.06],[me-.1,ae-.08],[me-.19,se+.082],[me-.56,se+.04],[$+.54,se+.03],[$+.22,se+.09]]:n===2?[[$+.23,ae-.08],[$+.43,ae+.067],[me-.28,ae+.067],[me-.15,ae-.12],[me-.17,se+.04],[me-.46,se-.017],[$+.4,se-.017],[$+.22,se+.045]]:[[$+.22,ae-.13],[$+.46,ae+.042],[me-.36,ae+.042],[me-.13,ae-.12],[me-.24,se+.05],[me-.53,se],[$+.5,se],[$+.21,se+.086]];if(w("track-box-beam",fe,Q,.139,O,"telaio",.022),n===1)for(let ve=0;ve<6;ve++){let Ee=$+.49+ve*(L-.95)/5;m(Ee,se+.123,Q+R*.086,.29,.18,.057,O,"telaio",-.055);for(let we of[-.089,.089])F(Ee+we,se+.146,Q+R*.119,.023,R)}else if(n===2){let ve=[[me-.28,se-.033],[me+.2,se-.033],[me+.24,se+.075],[me+.23,ae-.09],[me+.105,ae+.015],[me-.21,ae+.015],[me-.29,ae-.064]];w("front-guide-guard",ve,Q+R*.083,.091,O,"telaio",.026);for(let Ee of[.28,.66]){let we=$+L*Ee;m(we,se+.125,Q+R*.078,.087,.087,.015,"interior","telaio")}_(i($+.41,se+.015,Q+R*.092),i(me-.25,se+.015,Q+R*.092),.022,"edge","telaio",.03)}else for(let ve of[.27,.72]){let Ee=$+L*ve;m(Ee,ae-.062,Q+R*.078,.394,.062,.023,"red","telaio"),m(Ee,ae-.026,Q+R*.079,.416,.017,.032,"edge","telaio");for(let we of[-.164,.164])F(Ee+we,ae-.061,Q+R*.093,.017,R)}}}m(he,.7,0,2.74,.44,1.55,"track","telaio");for(let R of[-1,1])for(let y of[-1,1])_(i(he,.86,0),i(he+y*1.42,.59,R*I),.25,"iron","telaio",.28);let W=i(he+.15,1.125,0);g(f(44),"iron",W,o,i(.864,.15,.864),"trasmissione"),g(f(48),"edge",i(W.x,1.235,0),o,i(.832,.08,.832),"trasmissione");for(let R=0;R<24;R++){let y=R*Math.PI*2/24;g(f(6),"bolt",i(W.x+Math.cos(y)*.756,1.29,Math.sin(y)*.756),o,i(.043,.047,.043),"bulloneria")}if(n===0)return Dh(r,{V:i,box:m,bar:_,rod:x,plate:w,disc:v,pin:T,ring:Z,bolts:F,machineScrew:ie,append:g,round:f,cache:d,identity:o,quad:b,conduit:X,parts:h},t),{parts:h,era:e,name:"Escavatore meccanico a pala frontale"};let K=Uh(r,n,{V:i,parts:h,materials:t,cache:d,append:g,box:m,bar:_,rod:x,disc:v,plate:w,quad:b,pin:T,bolts:F,machineScrew:ie,conduit:X,round:f,identity:o}),re=new Set,ce=new WeakMap;for(let R of h){let y=R.geometry;if(!re.has(y)){y.scale(-1,1,1),y.index||y.setIndex(Array.from({length:y.attributes.position.count},(z,Q)=>Q));let G=y.index.array;for(let z=0;z<G.length;z+=3){let Q=G[z+1];G[z+1]=G[z+2],G[z+2]=Q}y.index.needsUpdate=!0,y.computeBoundingBox(),y.computeBoundingSphere(),re.add(y)}R.position=R.position.clone(),R.position.x*=-1;let Y=R.quaternion;ce.has(Y)||ce.set(Y,new r.Quaternion(Y.x,-Y.y,-Y.z,Y.w)),R.quaternion=ce.get(Y)}return K.point.x*=-1,{parts:h,era:e,facing:-1,captionAnchor:K,name:["","Escavatore idraulico anni Ottanta","Escavatore idraulico serie D","Escavatore elettroidraulico contemporaneo"][n]}}var Bh=[{enamel:[189,139,47],wear:1,rough:.56,coat:.18,coatRough:.38},{enamel:[217,154,36],wear:.6,rough:.47,coat:.27,coatRough:.3},{enamel:[235,169,28],wear:.32,rough:.42,coat:.35,coatRough:.25},{enamel:[245,186,31],wear:.13,rough:.36,coat:.44,coatRough:.21}],Oh=new WeakMap,Xt=(r,e,t)=>r+(e-r)*t,ya=r=>Math.max(0,Math.min(1,r));function $t(r,e,t){let n=ya((t-r)/(e-r));return n*n*(3-2*n)}function zh(r){let e=r>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function ci(r,e,t){let n=new Float32Array(r*e);for(let i=0;i<n.length;i++)n[i]=t();return(i,s)=>{let a=i*r,o=s*e,c=Math.floor(a),l=Math.floor(o),h=(c%r+r)%r,u=(l%e+e)%e,d=(h+1)%r,p=(u+1)%e,f=a-c,g=o-l,m=f*f*(3-2*f),x=g*g*(3-2*g);return Xt(Xt(n[u*r+h],n[u*r+d],m),Xt(n[p*r+h],n[p*r+d],m),x)}}function Ma(r){let e=document.createElement("canvas");e.width=r,e.height=r;let t=e.getContext("2d");return{canvas:e,ctx:t,pixels:t.createImageData(r,r)}}function Fh(r,e,t,n){e.ctx.putImageData(e.pixels,0,0);let i=new r.CanvasTexture(e.canvas);return i.name=t,i.colorSpace=n?r.SRGBColorSpace:r.NoColorSpace,i.wrapS=i.wrapT=r.RepeatWrapping,i.anisotropy=4,i}function kh(r,e,t,n){let i=Fh(r,e,n+" \xB7 colore",!0),s=Fh(r,t,n+" \xB7 altezza / ruvidit\xE0 / metallo",!1);return{map:i,bumpMap:s,roughnessMap:s,metalnessMap:s}}function ba(r,e,t,n,i){r[e]=t,r[e+1]=n,r[e+2]=i,r[e+3]=255}function Pp(r,e,t){let n=new Float32Array(r*r),i=Math.round(1+11*e);for(let s=0;s<i;s++){let a=t()*r,o=t()*r,c=(.012+t()*.077)*(.43+e*.83)*r,l=c*(.27+t()*.74),h=t()*Math.PI,u=Math.cos(h),d=Math.sin(h),p=Math.ceil(1.65*Math.max(c,l));for(let f=Math.floor(o-p);f<=o+p;f++)for(let g=Math.floor(a-p);g<=a+p;g++){let m=g-a,x=f-o,_=(m*u+x*d)/c,v=(-m*d+x*u)/l,M=1.5-Math.sqrt(_*_+v*v);if(M<=0)continue;let w=(f+r)%r*r+(g+r)%r;n[w]=Math.max(n[w],M)}}return n}function Lp(r,e,t){let n=new Uint8Array(r*r);for(let i=0;i<3+e*16;i++){let s=t()*r,a=t()*r,o=(t()-.5)*.92,c=Math.cos(o),l=Math.sin(o),h=1+Math.floor(t()*4);for(let u=0;u<h;u++){let d=u*(.0015+t()*.0045)*r,p=t()*r*.016,f=(.012+t()*.095)*r,g=Math.round((.28+t()*.65)*255);for(let m=0;m<f;m+=.67){if(t()<.05)continue;let x=Math.floor(s+c*(m+p)-l*d+r)%r,v=Math.floor(a+l*(m+p)+c*d+r)%r*r+x;n[v]=Math.max(n[v],g*$t(0,.12,m/f)*$t(0,.12,1-m/f))}}}return n}function Ip(r,e,t){let n=Bh[e],i=n.wear,s=n.enamel,a=zh(196600+e*9701),o=ci(5,4,a),c=ci(17,19,a),l=ci(52,54,a),h=ci(48,3,a),u=Pp(t,i,a),d=Lp(t,i,a),p=ci(83,18,a),f=Ma(t),g=Ma(t),m=f.pixels.data,x=g.pixels.data;for(let _=0,v=0;_<t;_++){let M=_/t;for(let w=0;w<t;w++,v++){let b=w/t,T=o(b,M),k=c(b,M),P=l(b,M),F=a(),ie=Math.min(b,M,1-b,1-M),C=(1-$t(0,.018,ie))*$t(.55,.91,k)*i,Z=.33+.67*Math.max($t(.02,.37,u[v]),$t(.59,.85,T)*.82),X=u[v]+((k-.5)*.84+(P-.5)*.69+(F-.5)*.13)*(.55+.45*i)*Z+C-(1-i)*.12,$=$t(.47,.55,X),me=$t(.29,.47,X),le=(1-$t(.03,.13,Math.abs(X-.56)))*$t(.41,.68,k*.48+P*.52),ee=ya((1-i)*.56+$t(.67,.81,P*.62+F*.13+T*.25)*(.43+.1*(1-i))+le*.6),he=d[v]/255*(.4+.43*i),L=p(b+.016*k,M+.034*P),J=(1-$t(.012,.058,Math.abs(L-.48)))*$t(.38,.65,k),Se=ya(.5+(k-.5)*1.22+(P-.5)*.75+(F-.5)*.38+(L-.5)*.26-J*.18),S=$t(.69,.96,h(b,M))*i*.075,E=(T-.5)*(.035+.1*i)+(k-.5)*.025+(F-.5)*.012-S,O=me*(.12+.14*i),B=s[0]*(1+E)*(1-O),I=s[1]*(1+E)*(1-O*1.18),j=s[2]*(1+E)*(1-O*.42)+(T-.3)*i*7;B=Xt(B,Xt(50+103*Se,138,ee),$),I=Xt(I,Xt(37+45*Se,133,ee),$),j=Xt(j,Xt(27+21*Se,118,ee),$),ba(m,v*4,Xt(B,136,he),Xt(I,133,he),Xt(j,115,he));let W=Xt(Xt(n.rough+(T-.5)*.12+(F-.5)*.036,.83-ee*.52,$),.49,he),K=Xt(Xt(.035,.12+ee*.85,$),.73,he),re=.6+(P-.5)*.025+(F-.5)*.025-$*(.17-Se*.07+J*.02)-he*.055;ba(x,v*4,re*255,W*255,K*255)}}return kh(r,f,g,"Smaltatura "+[1960,1980,2e3,2026][e])}function Tl(r,e,t,n){let i=zh(481516+n*779),s=ci(8,9,i),a=ci(39,33,i),o=ci(105,3,i),c=Ma(t),l=Ma(t),h=c.pixels.data,u=l.pixels.data;for(let d=0,p=0;d<t;d++)for(let f=0;f<t;f++,p+=4){let g=f/t,m=d/t,x=s(g,m),_=a(g,m),v=i(),M,w,b,T,k,P;if(n===0){let F=$t(.4,.84,x*.7+_*.3),ie=47*F+13*_+7*v;M=53+ie,w=48+ie,b=40+ie,T=.79-.39*F+(_-.5)*.07,k=.52+F*.42,P=.43+_*.12+v*.057}else if(n===1){let F=o(g,m),ie=(F-.5)*7+(v-.5)*2;M=225+ie,w=228+ie,b=228+ie,T=.126+F*.047+x*.024,k=.99,P=.49+F*.02}else{let F=ya(.04+x*.49+_*.34+v*.12);M=48+F*94,w=30+F*42,b=22+F*20,T=.76+F*.19,k=.17+(1-F)*.14,P=.34+x*.16+_*.16+v*.105}ba(h,p,M,w,b),ba(u,p,P*255,T*255,k*255)}return kh(r,c,l,e)}function Up(r){let e=Oh.get(r);if(!e){let t=typeof matchMedia=="function"&&matchMedia("(max-width: 760px)").matches;e={paint:[],size:t?256:512,cast:Tl(r,"Acciaio colato",256,0),polished:Tl(r,"Cromatura rettificata",128,1),oxide:Tl(r,"Ossido di ferro",256,2)},Oh.set(r,e)}return e}function Gh(r,e){let t=Math.max(0,Math.min(3,e|0)),n=Bh[t],i=Up(r),s=i.paint[t]||(i.paint[t]=Ip(r,t,i.size)),a=(p,f)=>new r.MeshStandardMaterial({name:p,...f}),o=(p,f)=>new r.MeshPhysicalMaterial({name:p,...f}),c={...s,roughness:1,metalness:1,bumpScale:.022+n.wear*.037,clearcoat:n.coat,clearcoatRoughness:n.coatRough,envMapIntensity:.95},l={...i.cast,roughness:1,metalness:1,bumpScale:.025,envMapIntensity:1.05},h=o("Smalto carrozzeria",c),u=o("Smalto telaio",{...c,color:t===0?12823947:13286034}),d=o("Vetro cabina",{color:t===0?2568234:2503470,transparent:!0,opacity:t===0?.48:.46,depthWrite:!1,roughness:.075+n.wear*.035,metalness:.025,clearcoat:.38,clearcoatRoughness:.055,ior:1.48,specularIntensity:.78,envMapIntensity:.77});return{paint:h,paintDark:u,glass:d,edge:a("Bordi esposti",{...l,color:15328990,roughness:.79,bumpScale:.012}),iron:a("Ghisa scura",{...l,color:t===0?10389363:11052192}),track:a("Pattini e ruote",{...l,roughness:t===0?1:.94}),rubber:a("Gomma e guaine",{color:2369319,roughness:.8,metalness:.018,envMapIntensity:.48}),chrome:a("Stelo cromato",{...i.polished,roughness:1,metalness:1,bumpScale:.002,envMapIntensity:1.18}),bolt:a("Bulloneria zincata",{...i.polished,color:t===0?9603189:11645607,roughnessMap:null,roughness:.31,metalness:.9,bumpScale:.0015}),interior:a("Sedile e interno cabina",{color:t===0?4340013:3423037,roughness:.85,metalness:.02}),rust:a("Ossido del ferro",{...i.oxide,roughness:1,metalness:1,bumpScale:.055}),black:a("Acciaio verniciato grafite",{color:2895920,roughness:.47,metalness:.46}),light:o("Vetro proiettore",{color:15196617,emissive:14536612,emissiveIntensity:.17,roughness:.22,metalness:.2,clearcoat:.9,clearcoatRoughness:.11}),red:o("Lente di segnalazione",{color:9972248,roughness:.29,metalness:.13,clearcoat:.74,clearcoatRoughness:.19}),pale:a("Dettagli avorio",{color:14800821,roughness:.58,metalness:.17})}}var Dp=Math.PI*2;function Np(r,e,t){let n=[],i=new Map,s=null;e.parts.forEach((h,u)=>{h.group==="cingoli"&&((h.geometry.type==="BoxGeometry"||h.geometry.type==="ExtrudeGeometry")&&h.scale.x>2.7*h.scale.y&&h.scale.z>6.8*h.scale.y&&(s={p:h,indices:[]},n.push(s)),s&&s.indices.push(u))});let a=Math.floor(n.length/2),o=new r.Vector3(0,0,1);if(a<3)return{byPart:i,across:o};let c=n[a].p.position,l=n[0].p.position;o.subVectors(c,l).normalize();for(let h=0;h<2;h++){let u=n.slice(h*a,(h+1)*a),d=h?1:-1,p=new r.Vector3;for(let{p:g}of u)p.add(g.position);p.multiplyScalar(1/u.length);let f=0;u.forEach(({p:g},m)=>{g.position.y>u[f].p.position.y+1e-4&&(f=m)});for(let g=0;g<u.length;g++){let{p:m,indices:x}=u[g],_=(g-f+u.length)%u.length/u.length,v=new r.Vector3().subVectors(u[(g+1)%u.length].p.position,u[(g+u.length-1)%u.length].p.position).normalize(),M=new r.Vector3().crossVectors(v,o).normalize();M.dot(m.position.clone().sub(p))<0&&M.negate();let w=.4+.38*Math.sin(_*Math.PI),b=o.clone().multiplyScalar(d*t*w).addScaledVector(M,t*(.24+.46*Math.sin(_*Math.PI))).addScaledVector(v,t*(.33-.65*_));b.y=Math.max(-.11*t,b.y)+.13*t;let T=o.clone().multiplyScalar(d),k=m.position.clone().addScaledVector(v,-.105*t),P=o.clone().multiplyScalar(d*.23*t);for(let F of x)i.set(F,{t:_,side:d,axis:T,lead:P,extraction:b,offset:e.parts[F].position.clone().sub(k),seatTurn:(.11+.45*Math.sin(_*Math.PI))*d,featured:h===1&&F===x[0]&&g===f})}}return{byPart:i,across:o}}function Op(r,e){let t=[];for(let n of e.parts){if(n.group!=="pistoni"||n.material.name!=="Stelo cromato"||n.scale.y<=3*n.scale.x)continue;let i=new r.Vector3(0,1,0).applyQuaternion(n.quaternion).normalize();t.push({p:n,axis:i,seal:n.position.clone().addScaledVector(i,-n.scale.y/2)})}return t}function Fp(r,e){let t=null,n=1/0;for(let i of e){let s=r.position.clone().sub(i.seal),a=s.dot(i.axis),c=s.addScaledVector(i.axis,-a).length()+Math.max(0,Math.abs(a)-i.p.scale.y*1.6)*.8;c<n&&(t=i,n=c)}return t}function Vh(r,e,t,n){let{byPart:i,across:s}=Np(r,e,t),a=e.era===0,o=Op(r,e),c=e.parts.reduce((x,_)=>Math.max(x,_.position.y),0),l=a?e.parts.find(x=>x.group==="trasmissione"&&x.geometry.type==="CylinderGeometry"&&x.position.y>c*.88):null,h=e.parts.filter(x=>x.group==="bulloneria"&&x.geometry.type==="BufferGeometry"&&x.position.y>1.3*t),u=new Map,d=(x,_,v,M)=>{x&&u.set(x,{row:_,column:v,depth:M})},p=(x,_)=>e.parts.find(v=>v.group===x&&_(v));d(p("trasmissione",x=>x.geometry.type==="LatheGeometry"),.48,.5,.42);let f=p("trasmissione",x=>x.geometry.type==="ExtrudeGeometry"&&x.position.y<t);if(f){let x=M=>{let w=M.position.clone().sub(f.position),b=w.dot(s);return Math.abs(b)<.59*t&&w.addScaledVector(s,-b).length()<.025*t},_=p("trasmissione",M=>M.geometry.type==="TorusGeometry"&&x(M)),v=p("trasmissione",M=>M.geometry.type==="CylinderGeometry"&&M.scale.x>.1*t&&M.scale.x<.24*t&&x(M));for(let[M,w]of[[f,0],[_,1],[v,2]])M&&u.set(M,{row:-.09,column:.31,depth:.48,wheelAxis:s,layer:w*t*.22})}let g=[...i].find(([,x])=>x.featured);g&&d(e.parts[g[0]],-.56,.54,.29);let m=h.reduce((x,_)=>!x||_.scale.x>x.scale.x?_:x,null);return d(m,.26,.72,.12),a?d(p("trasmissione",x=>x.position.y>c*.88&&x.geometry.type==="ExtrudeGeometry"),.13,.61,.5):d(o[o.length-1]?.p,.07,.61,.56),{byPart:i,across:s,historical:a,rams:o,hub:l?.position,details:u,unit:t,center:n}}function Hh(r,e,t,n,i){let{unit:s,across:a}=n,o=e.position,c=e.group,l=i.side,h=i.axis.clone(),u=new r.Vector3,d=new r.Vector3,p=.028*i.spin,f=0,g=i.row,m=.12,x=.041,_=.025,v=n.byPart.get(t);if(c==="bulloneria"){h.set(0,1,0).applyQuaternion(e.quaternion).normalize(),e.geometry.type!=="BufferGeometry"&&h.dot(o.clone().sub(n.center))<0&&h.negate();let ie=Math.max(e.scale.x,e.scale.z);u.copy(h).multiplyScalar(s*.16+Math.min(.24,ie*3.2));let{threadPitch:C,threadTurns:Z}=e.geometry.userData;f=(Z||.3)*Dp,C&&(i.threadRise=Math.abs(e.scale.y)*C*Z,i.clearance=u.length()),p=f+.2,x=.076,_=.049,m=.15}else if(v)u.copy(v.lead),i.extraction.copy(v.extraction),h.copy(v.axis),d.copy(v.offset),g=v.t,p=v.seatTurn,x=.038,_=.017,m=.13;else if(c==="pistoni"&&n.rams.length){let ie=Fp(e,n.rams);h.copy(ie.axis);let C=e===ie.p,X=o.clone().sub(ie.seal).dot(ie.axis)>ie.p.scale.y*.63;u.copy(h).multiplyScalar(s*(C||X?.83:-.16)),i.extraction.copy(a).multiplyScalar(s*(l*.85+(C?.28:0))),i.extraction.y+=s*(.44+g*.41),p=C?.31:.075,x=.089,_=.06,m=.16}else if(c==="trasmissione"&&n.hub&&o.y>n.hub.y-s*.63){h.copy(a),d.copy(o).sub(n.hub),d.addScaledVector(a,-d.dot(a));let ie=o.clone().sub(n.hub).dot(a)>.19*s?1:-1;u.copy(a).multiplyScalar(ie*s*.29),i.extraction.copy(a).multiplyScalar(ie*s*.86),i.extraction.y+=s*.48,g=.55,f=1.24,p=1.34,x=.095,_=.083,m=.18}else if(c==="trasmissione")h.copy(a),u.copy(a).multiplyScalar(s*l*.29),p=l*.61,i.extraction.copy(a).multiplyScalar(s*l*(.56+.26*g)),i.extraction.y+=.32*s;else if(c==="tubazioni")u.copy(a).multiplyScalar(s*l*(n.historical?.34:.21)),p=n.historical?.025:.12,n.historical&&(i.extraction.y+=s*.52);else if(c==="vetri")u.copy(a).multiplyScalar(s*l*.29),p=l*.15;else if(c==="benna"||c==="braccio"){let ie=new r.Vector3(0,1,0).applyQuaternion(e.quaternion).normalize();e.geometry.type==="CylinderGeometry"&&Math.abs(ie.dot(a))>.89?(ie.dot(a)*l<0&&ie.negate(),u.copy(ie).multiplyScalar(s*(.23+Math.min(.41,e.scale.y*.68))),h.copy(ie),f=.22,p=.53):(u.copy(a).multiplyScalar(s*.11*l),p=l*.089)}else u.copy(a).multiplyScalar(s*l*.12);let M=i.family,w=i.bulk,b=.006+M.order*.105+g*(v?.093:c==="bulloneria"?.054:.029)+(l<0?.009:0),T=b+m,k=Math.max(T+.014,.215+M.order*.092+g*(c==="bulloneria"?.144:v?.12:.054)+(l<0?.019:0)),P=n.details.get(e),F=P?.65:k+.192+(c==="bulloneria"?.048:0)-w*.027;Object.assign(i,{begin:b,seated:T,inspection:P,departure:P?Math.min(.36,k):k,end:F,leadEnd:b+x,fanBegin:b+_,seatAxis:h,lead:u,offset:d,screwTurn:f,seatTurn:p,row:g})}var Wh={bulloneria:{order:0,travel:.52,turns:2.3,bulk:0},cingoli:{order:.2,travel:.95,turns:.84,bulk:.12},tubazioni:{order:.28,travel:.85,turns:.55,bulk:.22},vetri:{order:.33,travel:1.05,turns:.37,bulk:.43},lamierati:{order:.38,travel:1.15,turns:.43,bulk:.49},pistoni:{order:.44,travel:1.2,turns:.49,bulk:.27},trasmissione:{order:.54,travel:1.08,turns:.64,bulk:.35},benna:{order:.61,travel:1.18,turns:.42,bulk:.69},motore:{order:.68,travel:1.18,turns:.38,bulk:.65},cabina:{order:.75,travel:1.28,turns:.34,bulk:.7},braccio:{order:.84,travel:1.42,turns:.29,bulk:.85},telaio:{order:.96,travel:1.2,turns:.24,bulk:1}},Bp=Math.PI*2;function Mr(r,e,t){return Math.min(t,Math.max(e,r))}function Yn(r,e,t){let n=Mr((t-r)/(e-r),0,1);return n*n*(3-2*n)}function zp(r,e){let t=Math.imul(r+1,2246822519)^Math.imul(e+1,3266489917);return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function kp(r,e,t){let n=new r.Box3;for(let x of e.parts)n.expandByPoint(x.position);let i=n.getCenter(new r.Vector3),s=n.getSize(new r.Vector3),a=Math.max(1,s.x),o=Math.max(1,s.y),c=Math.max(1,s.z),l=a/9,h=e.parts.find(x=>x.group==="benna"),u=e.parts.find(x=>x.group==="cabina"),d=e.facing===-1||h&&u&&h.position.x<u.position.x?-1:1,p=new Map,f=new Map;e.parts.forEach((x,_)=>{if(x.group!=="bulloneria")return;let v=x.position,M=v.y<1.07,w=M?"track":v.x*d<-.8?"hood":"arm",b=v.z>=0?1:-1,T=M?v.y<.34?0:v.y<.72?1:2:Math.floor(v.y/.8),k=w+":"+b+":"+T;p.has(k)||p.set(k,[]),p.get(k).push({index:_,zone:w,face:b,level:T,x:v.x*d,y:v.y})});for(let x of p.values())x.sort((_,v)=>_.x-v.x||_.y-v.y||_.index-v.index),x.forEach((_,v)=>f.set(_.index,{..._,fraction:(v+.5)/x.length}));let g=Vh(r,e,l,i),m=e.parts.map((x,_)=>{let v=zp(_,t),M=Wh[x.group]||Wh.lamierati,w=x.position,b=x.group,T=(w.x-i.x)*d/a,k=(w.y-i.y)/o,P=w.z>=0?1:-1,F=new r.Vector3(0,1,0).applyQuaternion(x.quaternion).normalize(),ie=new r.Vector3(T,.2+k*.35,P);F.dot(ie)<0&&F.negate();let C=new r.Vector3,Z=Mr(T+.5,0,1),X=T<-.12?-1:1,$=Mr(k*1.2,-.75,.75),me=-1.68*l,le=.54*l,ee=(w.x*d-me)/l,he=(w.y-le)/l,L=f.get(_);if(L)if(Z=L.fraction,L.zone==="track"){let ce=l*(-4.58+5.83*L.fraction+P*.14),R=l*(-.02+.25*L.level+(P>0?0:.16)+.15*Math.sin(L.fraction*Math.PI));C.set(ce-w.x*d,R-w.y,P*l*(1.49+.23*L.level)),X=L.fraction<.6?-1:1,$=-.8+.24*L.level+(P<0?.1:0)}else C.set(l*(L.zone==="hood"?-.97:.64),l*(.55+.31*L.level),P*l*(.71+.61*L.fraction)),X=L.zone==="hood"?-1:1,$=.17+.14*L.level;else b==="cingoli"?(C.set(l*(ee*.36-.36+P*.16),l*(he*.47+.09+.17*Math.sin((ee/4.7+.5)*Math.PI)),P*l*(1.05+.11*Math.abs(ee))),Z=Mr(ee/5+.5,0,1),X=ee<0?-1:1,$=-.78+.35*he+(P<0?.13:0)):b==="trasmissione"?(C.set(l*(ee*.16-.15),l*(he*.23+.28),P*l*.6),X=w.x*d>-.62?1:-1,$=-.52):b==="vetri"?(C.set(l*(.13+.3*T),l*(1.24+.22*k),P*l*.9),X=-1,$=.78):b==="lamierati"?(C.set(l*(-1.62+.25*T),l*(.56+.34*k),P*l*.8),X=-1,$=.39):b==="motore"?(C.set(l*(-1.06+.19*T),l*(.34+.31*k),-l*.65),X=-1,$=.01):b==="cabina"?(C.set(l*(-.14+.28*T),l*(.85+.39*k),P*l*.41),X=-1,$=.64):b==="pistoni"?(C.copy(F).multiplyScalar(l*.58).add(new r.Vector3(l*.54,l*.39,P*l*.32)),X=1,$=.52):b==="benna"?(C.set(l*(1.14+.23*T),l*(.1+.25*k),P*l*.52),X=1,$=-.61):b==="braccio"||b==="tubazioni"?(C.set(l*(.56+.61*T),l*((b==="braccio"?.71:1.11)+.35*k),P*l*.24),X=1,$=b==="braccio"?.55:.87):(C.set(l*.26*T,l*.25,P*l*.16),X=T<0?-1:1,$=-.24);b!=="pistoni"&&(C.x*=d);let J=x.geometry.boundingBox||(x.geometry.computeBoundingBox(),x.geometry.boundingBox),Se=J.getSize(new r.Vector3).multiply(x.scale),S=[Math.abs(Se.x),Math.abs(Se.y),Math.abs(Se.z)].sort((ce,R)=>R-ce),E=Yn(.49,1.84,Math.sqrt(S[0]*S[1])/l),O=Math.max(M.bulk*.48,E*(b==="tubazioni"?.48:1)),B=b==="bulloneria"?F:new r.Vector3(.11+v()*.13,.88+v()*.08,P*(.22+v()*.14)).normalize(),I=Se.length()*.5+J.getCenter(new r.Vector3).multiply(x.scale).length(),j={part:x,extraction:C,axis:B,family:M,side:P,row:Z,boundRadius:I,rest:new r.Matrix4().compose(w,x.quaternion,x.scale),spin:M.turns*Bp*(L?.79:.62)*(P<0?-1:1)*(1-O*.59),bulk:O,lens:.16+.12*Z+O*.3,laneX:X*(.72+.37*Z+1.07*O),laneY:$+(Z-.5)*.32,arcX:X*l*(.67+1.31*O),arcY:l*(.2+.28*$),defocus:.86+v()*.12};Hh(r,x,_,g,j);let W=new r.Quaternion().setFromAxisAngle(j.seatAxis,j.seatTurn),K=w.clone().add(j.lead).add(C).add(j.offset.clone().applyQuaternion(W)).sub(j.offset),re=W.multiply(x.quaternion);return j.seatedPosition=K,j.releasedRotation=re,j.released=new r.Matrix4().compose(K,re,x.scale),j});return{parts:m,center:i,width:a,lastDeparture:Math.max(...m.map(x=>x.end))}}function Xh(r,e,t){let n=e.map((Z,X)=>kp(r,Z,X)),i=new r.Vector3,s=new r.Vector3,a=new r.Vector3,o=new r.Vector3,c=new r.Vector3,l=new r.Vector3,h=new r.Vector3,u=new r.Vector3,d=new r.Vector3,p=new r.Quaternion,f=new r.Quaternion,g=new r.Quaternion,m=new r.Vector3,x=new r.Quaternion,_=new r.Matrix4,v=new r.Matrix4().makeTranslation(0,-1e5,0),M=.4,w=1,b=.1,T=.5,k=1.12;function P(Z,X){u.subVectors(Z,c);let $=u.dot(o);return $+X<b||Math.abs(u.dot(s))>$*T+X*k+.04}function F(Z,X,$,me){if(!X&&me)return;let le=n[Z].parts;for(let ee=0;ee<le.length;ee++)$(Z,ee,X?le[ee].rest:v,X?1:0,0,X)}function ie(Z,X,$,me,le){let ee=n[Z];if(le&&X>=ee.lastDeparture)return;let he=Math.max(ee.width*.55,(ee.center.x-c.x)*o.x+(ee.center.y-c.y)*o.y+(ee.center.z-c.z)*o.z);for(let L=0;L<ee.parts.length;L++){let J=ee.parts[L];if(X<=J.begin){me(Z,L,J.rest,1,0,!0);continue}if(X>=J.end){le||me(Z,L,v,0,0,!1);continue}if(X>=J.seated&&X<=J.departure){me(Z,L,J.released,1,0,!0);continue}let Se=J.part;if(X<J.seated){let R=Yn(J.begin,J.leadEnd,X),y=Yn(J.threadRise?J.leadEnd:J.fanBegin,J.seated,X),Y=J.threadRise?(J.threadRise*R+(J.clearance-J.threadRise)*y)/J.clearance:R,G=J.screwTurn*R+(J.seatTurn-J.screwTurn)*y;g.setFromAxisAngle(J.seatAxis,G),m.copy(J.offset).applyQuaternion(g).sub(J.offset),i.copy(Se.position).addScaledVector(J.lead,Y).addScaledVector(J.extraction,y).add(m),x.multiplyQuaternions(g,Se.quaternion),_.compose(i,x,Se.scale),me(Z,L,_,1,0,!1);continue}if(J.inspection){let R=J.inspection,y=Math.max(b*3,he*R.depth),Y=y*M,G=Yn(J.departure,.534,X),z=Yn(.487,J.end,X),Q=-$,ae=R.row+$*.11;l.copy(c).addScaledVector(o,y).addScaledVector(s,Q*R.column*Y*w).addScaledVector(a,ae*Y);let se=Math.max(b*3,y*.42);if(h.copy(c).addScaledVector(o,se).addScaledVector(s,Q*(se*T*1.085+J.boundRadius*k+Math.abs(R.layer||0)+.12)).addScaledVector(a,(ae+.22)*se*M),R.wheelAxis&&(d.copy(o).multiplyScalar(-.72).addScaledVector(s,Q*.64).addScaledVector(a,.27).normalize(),l.addScaledVector(d,R.layer),h.addScaledVector(d,R.layer*.64)),i.copy(J.seatedPosition).lerp(l,G).addScaledVector(a,.38*G*(1-G)*he*M).lerp(h,z),le&&z>.7&&P(i,J.boundRadius))continue;if(R.wheelAxis)p.setFromUnitVectors(R.wheelAxis,d).multiply(Se.quaternion),f.setFromAxisAngle(d,Q*(.75*G+1.45*z)),p.premultiply(f),x.slerpQuaternions(J.releasedRotation,p,G);else{let fe=1.05*G+1.76*z;f.setFromAxisAngle(J.axis,fe*Q),x.multiplyQuaternions(f,J.releasedRotation),f.setFromAxisAngle(a,Q*(.58*G+.26*z)),x.premultiply(f)}_.compose(i,x,Se.scale),me(Z,L,_,1,.36*G+.64*z);continue}let S=Mr((X-J.departure)/(J.end-J.departure),0,1),E=Yn(0,1,S),O=4*E*(1-E),B=Math.max(b*3,he*J.lens),I=B*M,j=J.laneX+$*.047,W=I*w*1.055+J.boundRadius*k+.09,K=Math.sign(j)*Math.max(Math.abs(j)*I*w,W);l.copy(c).addScaledVector(o,B).addScaledVector(s,K).addScaledVector(a,J.laneY*I),i.copy(J.seatedPosition).lerp(l,E).addScaledVector(s,O*J.arcX).addScaledVector(a,O*J.arcY);let re=Yn(0,.93-.11*J.bulk,S);if(i.addScaledVector(s,(re-E)*u.subVectors(l,J.seatedPosition).dot(s)),le&&S>.55&&P(i,J.boundRadius))continue;f.setFromAxisAngle(J.axis,J.spin*Yn(.031,.985,S)),x.multiplyQuaternions(f,J.releasedRotation),_.compose(i,x,Se.scale);let ce=Yn(.29-J.bulk*.07,.92-J.bulk*.12,S)*J.defocus;me(Z,L,_,1,ce)}}function C(Z,X,$,me,le=t,ee=!1){let he=Mr($,0,1);if(Z===X){F(Z,!0,me,ee);return}if(he===0||he===1){F(Z,he===0,me,ee),F(X,he===1,me,ee);return}le.updateWorldMatrix(!0,!1);let L=le.matrixWorld;c.setFromMatrixPosition(L),s.setFromMatrixColumn(L,0).normalize(),a.setFromMatrixColumn(L,1).normalize(),o.setFromMatrixColumn(L,2).normalize().negate(),M=Math.tan(le.fov*Math.PI/360)/le.zoom,w=le.aspect,T=w*M,k=Math.hypot(1,T),b=le.near;let J=X>Z?1:-1;ie(Z,he,J,me,ee),ie(X,1-he,-J,me,ee)}return{sample:C}}function jh(r,e){let t={occlusion:{value:null},rows:{value:new r.Vector2},weights:{value:new r.Vector2(1,0)}},n=new r.ShaderMaterial({uniforms:t,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 atlasUV;
      void main(){atlasUV=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 atlasUV;
      uniform sampler2D occlusion;
      uniform vec2 rows,weights;
      void main(){
        vec2 rowY=(3.-rows+atlasUV.y)*.25;
        float a=texture2D(occlusion,vec2(atlasUV.x,rowY.x)).r;
        float b=texture2D(occlusion,vec2(atlasUV.x,rowY.y)).r;
        float shade=dot(vec2(a,b),weights);
        gl_FragColor=vec4(.009,.008,.006,shade);
      }`}),i=new r.Mesh(new r.PlaneGeometry(18,9),n);return i.rotation.x=-Math.PI/2,i.position.y=-.008,i.renderOrder=-1,i.visible=!1,e.add(i),{ready:new r.TextureLoader().loadAsync("media/ground-contact.webp").then(a=>(a.colorSpace=r.NoColorSpace,t.occlusion.value=a,i.visible=!0,!0)).catch(()=>!1),update(a,o,c){t.rows.value.set(a,o);let l=1-r.MathUtils.smoothstep(c,.08,.42),h=r.MathUtils.smoothstep(c,.59,.93);return t.weights.value.set(a===o?1:l,a===o?0:h),i.visible?1-t.weights.value.x-t.weights.value.y:1}}}async function qh(r){return Promise.all(r.map(async({year:e})=>{try{let t=new Image;t.src="media/luce-"+e+".webp",await t.decode();let n=192,i=96,s=document.createElement("canvas");s.width=n,s.height=i;let a=s.getContext("2d",{willReadFrequently:!0});return a.drawImage(t,0,0,n,i),{width:n,height:i,data:a.getImageData(0,0,n,i).data}}catch{return null}}))}function Yh(r,e,t){let n=new r.PMREMGenerator(e),i=new r.Vector3(-.56,.65,.51).normalize(),s=[.66,.79,.99],a=[.16,.13,.09],o=[1.15,1.04,.91],c=new Float32Array(256);for(let h=0;h<256;h++){let u=h/255;c[h]=u<.04045?u/12.92:((u+.055)/1.055)**2.4}let l=t.map(h=>{let p=new Float32Array(131072);for(let m=0;m<128;m++){let x=Math.PI*(1-(m+.5)/128),_=Math.cos(x),v=Math.sin(x),M=h?Math.min(h.height-1,Math.max(0,Math.floor((.49-.54*_)*h.height))):0;for(let w=0;w<256;w++){let b=2*Math.PI*((w+.5)/256-.5),T=v*Math.cos(b),k=v*Math.sin(b),P=Math.max(0,T*i.x+_*i.y+k*i.z),F=Math.pow(P,30)*1.35+Math.pow(P,580)*12,ie=(m*256+w)*4,C=_>=0,Z=C?s:a,X=h?Math.min(h.width-1,Math.floor((.5-.497*Math.cos(b+.8))*h.width)):0,$=h?(M*h.width+X)*4:0;for(let me=0;me<3;me++){let le=Z[me],ee=h?c[h.data[$+me]]*(C?2.25:1.17):le;p[ie+me]=le*.34+ee*.66+F*o[me]}p[ie+3]=1}}let f=new r.DataTexture(p,256,128,r.RGBAFormat,r.FloatType);f.mapping=r.EquirectangularReflectionMapping,f.needsUpdate=!0;let g=n.fromEquirectangular(f);return f.dispose(),g});return n.dispose(),l}var Zh=[{matrix:[2.4478364321276365,-.023380387064896906,-.17944118153006983,-.17891992900565423,4316050766285288e-33,3.729765159790077,-.03509480028417401,-.03499285460433618,-.44543164272170555,-.12848517654695918,-.9861056544825697,-.9832411500396284,-4.96122696915129,-10.30737604961329,15.197104794722657,15.472494468521575],camera:[4.712854172070215,3.301588375545085,14.76111829948024],near:.16,far:110},{matrix:[2.467039577461867,.04010941082371933,.12956424081162915,.12918787409903185,0,3.719203136737135,-.08314626371200154,-.08290473498662172,.3225341377682208,-.30679389355647496,-.9910272199955115,-.9881484190659675,-.04992379279791016,-9.009382755433851,12.982231875287134,13.264055457348755],camera:[-1.6677143268888068,3.5053993899297815,12.911008645308971],near:.16,far:110},{matrix:[1.6606701188021726,-.06946891205825537,.746579143223588,.7444104311154585,0,3.7308846024332616,.02507022154010115,.024997395914712332,1.8526973048252362,.0622686426651454,-.6691981853934265,-.6672542545716591,2.794032187681068,-9.806610884050201,13.814691258498646,14.094096657892987],camera:[-11.290257193658855,2.2745366474587705,8.611962961172724],near:.16,far:110},{matrix:[2.428065909252463,.0683328737878362,.21809369445516938,.2174601615736729,-8632101532570577e-33,3.718891872504131,-.0841456827485498,-.0839012508451408,.5429626940362732,-.30557665038108867,-.9752895923529927,-.9724565071173995,1.121184321471704,-10.552804169335504,13.611439599955112,13.891435418110653],camera:[-3.4088301953890094,3.983154200105367,13.178953443723552],near:.16,far:110}];var Gp=["1960","1980","2000","2026"],Vp=Gp.map(r=>[()=>"media/finitura-"+r+(innerWidth<=760?"-960":"")+".webp","media/profondita-"+r+".webp"]),Hp=`
attribute vec4 restRow0, restRow1, restRow2;
uniform mat4 finishProjector;
uniform vec3 finishEye;
varying vec4 vFinishClip;
varying vec2 vFinishView;
`,Wp=`
vec4 localPoint = vec4(transformed, 1.);
vec3 restPoint = vec3(dot(restRow0,localPoint),dot(restRow1,localPoint),dot(restRow2,localPoint));
vFinishClip = finishProjector * vec4(restPoint, 1.);
mat3 restBasis = mat3(
  normalize(vec3(restRow0.x,restRow1.x,restRow2.x)),
  normalize(vec3(restRow0.y,restRow1.y,restRow2.y)),
  normalize(vec3(restRow0.z,restRow1.z,restRow2.z)));
mat4 liveModel = modelMatrix * instanceMatrix;
mat3 liveBasis = mat3(normalize(liveModel[0].xyz),normalize(liveModel[1].xyz),normalize(liveModel[2].xyz));
vec3 referenceRay = normalize(finishEye - restPoint) * restBasis;
vec3 livePoint = (liveModel * localPoint).xyz;
vec3 liveRay = normalize(cameraPosition - livePoint) * liveBasis;
vFinishView = vec2(dot(referenceRay,liveRay),length(livePoint-restPoint));
`,Xp=`
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
`,jp=`
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
`;function Jh(r,e,t){let n=Zh[e],i={finishProjector:{value:new r.Matrix4().fromArray(n.matrix)},finishEye:{value:new r.Vector3().fromArray(n.camera)},finishPlanes:{value:new r.Vector2(n.near,n.far)},finishExposure:{value:t},finishAvailable:{value:0},finishPhoto:{value:null},finishDepth:{value:null}};return{configure(s,a){Object.assign(s.uniforms,i),s.uniforms.finishClearPane={value:a.transparent&&a.opacity<1?1:0},s.vertexShader=Hp+s.vertexShader.replace("#include <project_vertex>",Wp+`
#include <project_vertex>`),s.fragmentShader=Xp+s.fragmentShader.replace("#include <opaque_fragment>",jp+`
#include <opaque_fragment>`)},async load(){let s=new r.TextureLoader,[a,o]=Vp[e],[c,l]=await Promise.all([s.loadAsync(a()),s.loadAsync(o)]);return c.colorSpace=r.SRGBColorSpace,c.anisotropy=4,l.colorSpace=r.NoColorSpace,l.generateMipmaps=!1,l.magFilter=l.minFilter=r.NearestFilter,i.finishPhoto.value=c,i.finishDepth.value=l,i.finishAvailable.value=1,[c,l]}}}function Kh(r,e,t,n){let i=new Float32Array(t.length*12),s=new r.Matrix4;t.forEach((o,c)=>{let l=e.parts[o],h=s.compose(l.position,l.quaternion,l.scale).elements,u=c*12;for(let d=0;d<3;d++)for(let p=0;p<4;p++)i[u+4*d+p]=h[d+p*4]});let a=new r.InstancedInterleavedBuffer(i.slice(),12).setUsage(r.DynamicDrawUsage);for(let o=0;o<3;o++)n.setAttribute("restRow"+o,new r.InterleavedBufferAttribute(a,4,o*4));return{buffer:a,positions:i}}function Qh(r,e,t,n,i,s={}){let a=s.onOrbit||(()=>{}),o=innerWidth<=760,c=new r.WebGLRenderer({alpha:!0,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0});c.setClearColor(0,0),c.debug.checkShaderErrors=!1;let l=!1;c.setPixelRatio(Math.min(devicePixelRatio,o?1.35:1.65)),c.outputColorSpace=r.SRGBColorSpace,c.toneMapping=r.ACESFilmicToneMapping,c.toneMappingExposure=.89,c.shadowMap.enabled=!0,c.shadowMap.type=r.PCFSoftShadowMap,c.shadowMap.autoUpdate=!1,c.domElement.setAttribute("aria-hidden","true"),e.appendChild(c.domElement);let h=new r.Scene,u=new r.PerspectiveCamera(30,1,.16,110);performance.mark("r:gl");let d=Yh(r,c,i);performance.mark("r:probes"),h.environment=d[0].texture;let p=new r.HemisphereLight(14477556,9598542,.53);h.add(p);let f=new r.DirectionalLight(16772042,2.42);f.position.set(-7,10,4.5),f.castShadow=!0;let g=o?768:1536;f.shadow.mapSize.set(g,g),Object.assign(f.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:38}),f.shadow.camera.updateProjectionMatrix(),f.shadow.bias=-19e-5,f.shadow.normalBias=.014,f.shadow.radius=3,h.add(f),h.add(f.target);let m=new r.DirectionalLight(13952240,1.15);m.position.set(4,4,-7),h.add(m);let x=new r.Mesh(new r.PlaneGeometry(120,120),new r.ShadowMaterial({color:1513232,opacity:.31,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.y=-.018,x.receiveShadow=!0,x.renderOrder=-2,h.add(x);let _=jh(r,h);function v(V,te){V.onBeforeCompile=q=>{q.vertexShader=`attribute vec2 surfaceOffset;
`+q.vertexShader,q.vertexShader=q.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
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
        #endif`),te.configure(q,V)},V.customProgramCacheKey=()=>"tedeschi-photographic-part-v2"}let M=t.map((V,te)=>{let q=Jh(r,te,c.toneMappingExposure),be=new Map,Ae=new Map,Re=new Array(V.parts.length);V.parts.forEach((oe,de)=>{let _e=oe.geometry.uuid+"|"+oe.material.uuid,ye=Ae.get(_e);ye||(ye={p:oe,indices:[]},Ae.set(_e,ye)),ye.indices.push(de)});let U=new r.Group;U.visible=!1,h.add(U);let D=[];return Ae.forEach(({p:oe,indices:de})=>{let _e=new r.InstancedBufferGeometry;_e.setIndex(oe.geometry.index);for(let[He,Ie]of Object.entries(oe.geometry.attributes))_e.setAttribute(He,Ie);_e.setDrawRange(oe.geometry.drawRange.start,oe.geometry.drawRange.count);let ye=new Float32Array(de.length*2);de.forEach((He,Ie)=>{let ke=(He+1)*.61803398875,tt=(He+1)*.41421356237;ye[2*Ie]=ke-Math.floor(ke),ye[2*Ie+1]=tt-Math.floor(tt)});let Ue=new r.InstancedBufferAttribute(ye.slice(),2).setUsage(r.DynamicDrawUsage);_e.setAttribute("surfaceOffset",Ue);let Ve=Kh(r,V,de,_e),Oe=be.get(oe.material);Oe||(Oe=oe.material.clone(),v(Oe,q),be.set(oe.material,Oe));let ze=new r.InstancedMesh(_e,Oe,de.length);ze.instanceMatrix.setUsage(r.DynamicDrawUsage),ze.frustumCulled=!1,ze.castShadow=!oe.material.transparent,ze.receiveShadow=!oe.material.transparent,U.add(ze);let Ze={mesh:ze,surfaceOffset:Ue,rest:Ve,live:0,identities:Int32Array.from(de),poses:Array(de.length),min:1/0,max:-1,restMin:1/0,restMax:-1};D.push(Ze),de.forEach((He,Ie)=>Re[He]={batch:Ze,restOffset:12*Ie,u:ye[2*Ie],v:ye[2*Ie+1]})}),{root:U,refs:Re,batches:D,finish:q}});performance.mark("r:batches");let w=0,b=0,T=0,k=0,P=19,F=new r.Vector3(0,2.1,0),ie=0,C=0,Z=0,X=0,$=0,me=n(r,t,u);performance.mark("r:transition");function le(V,te,q,be,Ae=!1){if(be<=1e-4)return;let{batch:Re,restOffset:U,u:D,v:oe}=M[V].refs[te],de=Re.live++,_e=Re.identities[de]!==te;if(_e){Re.identities[de]=te,Re.surfaceOffset.setXY(de,D,oe);let ye=Re.rest;for(let Ue=0;Ue<12;Ue++)ye.buffer.array[de*12+Ue]=ye.positions[U+Ue];Re.restMin=Math.min(Re.restMin,de),Re.restMax=Math.max(Re.restMax,de)}(!Ae||_e||Re.poses[de]!==q)&&(Re.mesh.setMatrixAt(de,q),Re.poses[de]=Ae?q:null,Re.min=Math.min(Re.min,de),Re.max=de)}function ee(V,te,q,be,Ae,Re){le(V,te,q,be,Re)}function he(V){let te=new r.WebGLRenderTarget(1,1,{type:c.extensions.has("EXT_color_buffer_float")?r.HalfFloatType:r.UnsignedByteType,format:r.RGBAFormat,depthBuffer:!0,stencilBuffer:!1});return te.depthTexture=new r.DepthTexture(1,1,r.UnsignedIntType),c.capabilities.isWebGL2&&(te.samples=Math.min(V,c.capabilities.maxSamples),te.texture.generateMipmaps=!0,te.texture.minFilter=r.LinearMipmapLinearFilter),te}let L=he(4),J=he(0),Se=new r.WebGLRenderTarget(1,1,{type:L.texture.type,depthBuffer:!1,stencilBuffer:!1}),S=new r.Scene,E=new r.OrthographicCamera(-1,1,1,-1,0,1),O={colorTex:{value:L.texture},depthTex:{value:L.depthTexture},blurTex:{value:Se.texture},pixel:{value:new r.Vector2},focal:{value:P},nearZ:{value:u.near},farZ:{value:u.far},strength:{value:0},maxRadius:{value:16}},B="varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",I=`varying vec2 vUv; uniform sampler2D colorTex,depthTex,blurTex; uniform vec2 pixel;
    uniform float focal,nearZ,farZ,strength,maxRadius;
    float viewDepth(float depth){return nearZ*farZ/(farZ-(farZ-nearZ)*depth);}
    float circle(float depth){return smoothstep(.075,.70,(focal-viewDepth(depth))/focal)*maxRadius*strength;}`,j=new r.ShaderMaterial({uniforms:O,vertexShader:B,depthTest:!1,depthWrite:!1,toneMapped:!1,fragmentShader:I+`
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
      }`}),W=new r.ShaderMaterial({uniforms:O,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,toneMapped:!0,vertexShader:B,fragmentShader:I+`
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
    }`}),K=new r.Mesh(new r.PlaneGeometry(2,2),W);S.add(K);let re=new r.Scene;re.add(new r.Mesh(K.geometry,j));let ce=0,R=0,y=0,Y=!1,G=0,z=t.map(V=>{let te=new r.Box3,q=new r.Vector3,be=new r.Matrix4,Ae=new r.Vector3,Re=[],U=new Set;function D(){q.applyMatrix4(be),te.expandByPoint(q);let oe=(Math.round(q.x*500)+16384)*1073741824+(Math.round(q.y*500)+16384)*32768+Math.round(q.z*500)+16384;U.has(oe)||(U.add(oe),Re.push(q.x,q.y,q.z))}for(let oe of V.parts){let de=oe.geometry;de.boundingBox||de.computeBoundingBox();let _e=de.boundingBox;if(_e.getSize(Ae).multiply(oe.scale),be.compose(oe.position,oe.quaternion,oe.scale),Math.max(Ae.x,Ae.y,Ae.z)>.72){let ye=de.attributes.position;for(let Ue=0;Ue<ye.count;Ue++)q.fromBufferAttribute(ye,Ue),D()}else for(let ye=0;ye<8;ye++)q.set(ye&1?_e.max.x:_e.min.x,ye&2?_e.max.y:_e.min.y,ye&4?_e.max.z:_e.min.z),D()}return{bounds:te,points:Float32Array.from(Re),center:te.getCenter(new r.Vector3),focus:new r.Vector3,distance:1,yaw:0,elevation:0}}),Q=z.map(V=>V.bounds);performance.mark("r:framing");let ae=[.18,-.4,-.755,-.42],se=[.035,.105,.038,.108],fe=[.955,.92,.924,.923],ve=0;function Ee(V){let te=z[V];if(te.revision===ve)return te;te.revision=ve;let be=Math.tan(u.fov*Math.PI/360)*fe[V],Ae=be*u.aspect;te.yaw=(ae[V]??0)+T,te.elevation=r.MathUtils.clamp((se[V]??.1)+k,-.025,.66);let Re=Math.sin(te.yaw),U=Math.cos(te.yaw),D=Math.sin(te.elevation),oe=Math.cos(te.elevation),de=-1/0,_e=1/0,ye=-1/0,Ue=1/0,Ve=te.points,Oe=te.center;for(let He=0;He<Ve.length;He+=3){let Ie=Ve[He]-Oe.x,ke=Ve[He+1]-Oe.y,tt=Ve[He+2]-Oe.z,ct=Re*Ie+U*tt,Tt=oe*ct+D*ke,Gt=U*Ie-Re*tt,St=oe*ke-D*ct;de=Math.max(de,Gt+Ae*Tt),_e=Math.min(_e,Gt-Ae*Tt),ye=Math.max(ye,St+be*Tt),Ue=Math.min(Ue,St-be*Tt)}let ze=(de+_e)*.5,Ze=(ye+Ue)*.5;return te.distance=Math.max((de-_e)/(2*Ae),(ye-Ue)/(2*be))+.03,te.focus.set(Oe.x+ze*U-Ze*Re*D,Oe.y+Ze*oe,Oe.z-ze*Re-Ze*U*D),te}function we(){let V=r.MathUtils.smootherstep($,0,1),te=Ee(Z),q=Ee(X),be=Z===X?0:16*$*$*(1-$)*(1-$);F.copy(te.focus).lerp(q.focus,V),P=r.MathUtils.lerp(te.distance,q.distance,V)*(1+.067*be),w=r.MathUtils.lerp(te.yaw,q.yaw,V)+.033*be,b=r.MathUtils.lerp(te.elevation,q.elevation,V)+.027*be,u.position.set(F.x+Math.sin(w)*Math.cos(b)*P,F.y+Math.sin(b)*P,F.z+Math.cos(w)*Math.cos(b)*P),u.lookAt(F),u.updateMatrixWorld(),O.focal.value=P}let Ce=NaN,Ne=NaN,Le=NaN,Fe=-1,Ge=[];function je(){let V=Z===X||$===0?Z:$===1?X:-1;if(!(V>=0&&V===Fe)){Fe=V,Ge.length=0;for(let te=0;te<M.length;te++)te===Z||te===X?Ge.push(M[te]):M[te].root.visible=!1;for(let te of Ge)for(let q of te.batches)q.live=0,q.min=1/0,q.max=-1,q.restMin=1/0,q.restMax=-1;me.sample(Z,X,$,ee,u,!0);for(let te of Ge){te.root.visible=!1;for(let q of te.batches){let be=q.mesh;if(be.visible=q.live>0,be.count=q.live,!!be.visible){if(te.root.visible=!0,q.min<=q.max){let Ae=be.instanceMatrix;Ae.clearUpdateRanges(),Ae.addUpdateRange(q.min*16,(q.max-q.min+1)*16),Ae.needsUpdate=!0}if(q.restMin<=q.restMax){let Ae=q.restMax-q.restMin+1;q.surfaceOffset.clearUpdateRanges(),q.surfaceOffset.addUpdateRange(q.restMin*2,Ae*2),q.surfaceOffset.needsUpdate=!0;let Re=q.rest.buffer;Re.clearUpdateRanges(),Re.addUpdateRange(q.restMin*12,Ae*12),Re.needsUpdate=!0}}}}}}function it(){if(!l)return;je();let V=Z+(X-Z)*$;(!Number.isFinite(Ce)||Math.abs(Ce-V)>1/120||Number.isInteger(V)&&V!==Ce||!Number.isInteger(V)&&(w!==Ne||b!==Le))&&(c.shadowMap.needsUpdate=!0,Ce=V,Ne=w,Le=b);let q=Z!==X&&$>.002&&$<.998,be=q?r.MathUtils.smootherstep($,.22,.4)*(1-r.MathUtils.smootherstep($,.62,.78)):0;O.strength.value=be;let Ae=q?r.MathUtils.smootherstep($,.28,.46)*(1-r.MathUtils.smootherstep($,.55,.72)):0;O.focal.value=P*(1-.47*Ae);let Re=_.update(Z,X,$);x.material.opacity=Re*(.22-.1*be),x.visible=x.material.opacity>1e-4;let U=q&&Y?J:L;O.colorTex.value=U.texture,O.depthTex.value=U.depthTexture,c.setRenderTarget(U),c.render(h,u),be>.001&&(c.setRenderTarget(Se),c.render(re,E)),c.setRenderTarget(null),c.render(S,E),c.autoClear=!0}function gt(V){if(clearTimeout(G),!V){R=0,ce=0,Y=!1;return}let te=performance.now(),q=te-R;R=te,q<5||q>180?(ce=0,y=0):(ce=q>26?ce+1:0,y=q<19?y+1:0,ce>=5&&(Y=!0),y>=48&&(Y=!1)),Y&&(G=setTimeout(()=>{Y=!1,ce=y=0,it()},160))}function ut(){let V=Math.max(1,e.clientWidth),te=Math.max(1,e.clientHeight);if(V===ie&&te===C)return;ie=V,C=te,c.setSize(V,te,!1);let q=c.getPixelRatio(),be=Math.round(V*q),Ae=Math.round(te*q);L.setSize(be,Ae),J.setSize(Math.max(1,Math.round(be*.76)),Math.max(1,Math.round(Ae*.76))),Se.setSize(Math.max(1,Math.ceil(be*.5)),Math.max(1,Math.ceil(Ae*.5))),O.pixel.value.set(1/be,1/Ae),O.maxRadius.value=o?9*q:15*q,u.aspect=V/te,u.updateProjectionMatrix(),ve++,we(),it()}new ResizeObserver(ut).observe(e);function ht(V,te){T=r.MathUtils.clamp(T+V,-1.15,1.15),k=r.MathUtils.clamp(k+te,-.1,.52),ve++,we(),it(),a(T,k)}let vt=0,pe=0,Be=0,rt=0,st=matchMedia("(prefers-reduced-motion: reduce)").matches;function Ye(V){Be=0;let te=rt?Math.min(80,V-rt):16.7,q=vt-T,be=pe-k,Ae=st||Math.max(Math.abs(q),Math.abs(be))<5e-4,Re=Ae?1:-Math.expm1(-te/(Ct!==null?39:95));ht(Re*q,Re*be),rt=Ae?0:V,Ae||(Be=requestAnimationFrame(Ye))}function Bt(V,te){vt=r.MathUtils.clamp(V,-1.15,1.15),pe=r.MathUtils.clamp(te,-.1,.52),Be||(Be=requestAnimationFrame(Ye))}let Ct=null,xn=0,jt=0,qt=0,sn=0,un=0;e.addEventListener("pointerdown",V=>{V.button!==0||Ct!==null||(Ct=V.pointerId,xn=V.clientX,jt=V.clientY,qt=sn=0,un=performance.now(),e.setPointerCapture(V.pointerId),e.classList.add("dragging"))}),e.addEventListener("pointermove",V=>{if(V.pointerId!==Ct)return;let te=performance.now(),q=Math.max(1,te-un);un=te;let be=V.clientX-xn,Ae=V.clientY-jt;qt=qt*.6+be/q*.4,sn=sn*.6+Ae/q*.4,Bt(vt-be*.005,pe+Ae*.003),xn=V.clientX,jt=V.clientY});function Nt(){Ct=null,e.classList.remove("dragging")}e.addEventListener("lostpointercapture",Nt),e.addEventListener("pointercancel",Nt),e.addEventListener("pointerup",V=>{e.hasPointerCapture(V.pointerId)&&e.releasePointerCapture(V.pointerId),!st&&performance.now()-un<90&&Math.abs(qt)+Math.abs(sn)>.05&&Bt(vt-qt*.005*190,pe+sn*.003*120),Nt()}),e.addEventListener("keydown",V=>{(V.key==="ArrowLeft"||V.key==="ArrowRight")&&(V.preventDefault(),Bt(vt+(V.key==="ArrowLeft"?-.09:.09),pe))});function mt(V){let te=c.getRenderTarget(),q=[];if(V)for(let Ae of M){q.push([Ae.root,Ae.root.visible]),Ae.root.visible=!0;for(let Re of Ae.batches)q.push([Re.mesh,Re.mesh.visible]),Re.mesh.visible=!0}let be=[];try{c.setRenderTarget(L),be.push(c.compileAsync(h,u)),c.setRenderTarget(Se),be.push(c.compileAsync(re,E)),c.setRenderTarget(null),be.push(c.compileAsync(S,E))}finally{c.setRenderTarget(te);for(let[Ae,Re]of q)Ae.visible=Re}return Promise.all(be)}function Ot(){return mt(!0)}async function _t(){Fe=-2,je(),we(),await mt(!1),l=!0,Fe=-2,it()}ut(),performance.mark("r:primo-disegno");let Et=[s.first??0,0,1,2,3].filter((V,te,q)=>q.indexOf(V)===te),xt=new Array(M.length);async function bt(V){try{let te=await M[V].finish.load();for(let q of te)c.initTexture(q);return(V===Z||V===X)&&(Fe=-2,it()),!0}catch{return!1}}xt[Et[0]]=bt(Et[0]);let yn=xt[Et[0]],N=yn;for(let V of Et.slice(1))N=xt[V]=N.then(()=>bt(V));let ue=Promise.all(xt);return{canvas:c.domElement,bounds:Q,view:c,draw:it,prepareTransitions:Ot,warm:_t,finishReady:ue,firstFinish:yn,groundReady:_.ready,show(V,te,q){V===Z&&te===X&&q===$||(gt(V!==te&&q>0&&q<1),Z=V,X=te,$=q,h.environment=d[q<.5?V:te].texture,we(),it())},setReducedMotion(V){st=!!V},reset(V=!1){if(V&&!st){Bt(0,0);return}Be&&cancelAnimationFrame(Be),Be=rt=vt=pe=T=k=0,ve++,we(),it()}}}var $h=["1960","1980","2000","2026"];var qp=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function Yp(r){let e=[];for(let h=19;h>=-10;h--)e.push((h%10+10)%10);let t=Array.from({length:4},()=>{let h=document.createElement("span");h.className="roll";let u=document.createElement("span");return u.className="roll-band",u.append(...e.map(d=>{let p=document.createElement("span");return p.textContent=String(d),p})),h.append(u),{col:h,band:u,value:0,from:0,to:0,start:0,dur:0,delay:0}}),n=document.createElement("span");n.className="roll-box",n.setAttribute("aria-hidden","true"),n.append(...t.map(h=>h.col));let i=document.createElement("span");i.className="sr",r.replaceChildren(n,i),r.style.setProperty("--pitch",1.25);let s=0,a=null;function o(h){let u=h.value;h.band.style.transform="translate3d(0,"+(-(19-u)*1.25).toFixed(4)+"em,0)"}function c(h){s=0;let u=!1;for(let d of t){if(d.dur<=0)continue;let p=Math.max(0,Math.min(1,(h-d.start-d.delay)/d.dur)),f=Math.abs(d.to-d.from),g=p*f,m=Math.min(f-1,Math.floor(g)),x=qp(Math.min(1,g-m));d.value=d.from+Math.sign(d.to-d.from)*(p>=1?f:m+x),o(d),p<1?u=!0:(d.value=(d.to%10+10)%10,d.dur=0,o(d))}u&&(s=requestAnimationFrame(c))}function l(h,u,d){let p=[...h].map(Number);i.textContent=h,s&&(cancelAnimationFrame(s),s=0);let f=performance.now(),g=0;t.forEach((m,x)=>{let _=m.value,v=p[x],M=(Math.round(_)%10+10)%10;if(!u){m.value=v,m.dur=0,o(m);return}let w=d>0?(v-M+10)%10:-((M-v+10)%10);if(w===0&&Math.abs(_-Math.round(_))<1e-4){m.value=v,m.dur=0,o(m);return}m.from=_,m.to=Math.round(_)+w,m.start=f,m.dur=Math.min(980,150*Math.max(1,Math.abs(w))+160),m.delay=g++*70,w===0&&(m.to=Math.round(_),m.dur=200)}),t.some(m=>m.dur>0)&&(s=requestAnimationFrame(c))}return{show(h,{animate:u=!1,direction:d=1}={}){let p=$h[h]||$h[0];if(a===p&&!u)return;let f=a!==p;a=p,(f||!u)&&l(p,u&&f,d)},intro(h){t.forEach((u,d)=>{u.value=[1,9,0,0][d],u.dur=0,o(u)}),a=null,h?this.show(0,{animate:!0,direction:1}):this.show(0)},get busy(){return s!==0}}}function eu(r){let e=Yp(r.querySelector(".year")),t=r.querySelector(".period"),n=r.querySelector(".era-title"),i=r.querySelector("p"),s=null;return{...e,show:e.show,intro:e.intro,change(a){a!==s&&(s=a,t.textContent=a.subtitle,n.textContent=a.title,i.textContent=a.body)}}}var Fn=[{year:"1960",label:"Anni Sessanta",short:"La meccanica",subtitle:"Escavatore a funi",title:"Lo scavo frontale",body:"L\u2019asta spinge la benna nel terreno. La fune passa sulle pulegge e la solleva.",photo:"media/era-1960.jpg"},{year:"1980",label:"Anni Ottanta",short:"L\u2019idraulica",subtitle:"Escavatore idraulico",title:"Il braccio articolato",body:"I cilindri sollevano il braccio. I tubi flessibili seguono il bilanciere mentre la benna si chiude.",photo:"media/era-1980.jpg"},{year:"2000",label:"Primi Duemila",short:"La benna da finitura",subtitle:"Escavatore a carro lungo",title:"La benna da finitura",body:"La benna ha un bordo liscio per stendere il terreno. I due cingoli larghi sostengono la macchina durante lo scavo.",photo:"media/era-2000.jpg"},{year:"2026",label:"Oggi",short:"Il controllo di scavo",subtitle:"Escavatore elettroidraulico",title:"Il controllo di scavo",body:"Dalla cabina panoramica si vedono la benna e i raccordi esterni del bilanciere.",photo:"media/era-2026.jpg"}];function ru(r){let e=document.querySelector(".scene"),t=Math.max(innerWidth,(e?.clientHeight||innerHeight)*1.78)*Math.min(devicePixelRatio||1,2);return"media/fondale-"+Fn[r].year+(t<=1150?"-1100":"-1672")+".webp"}var su=new URLSearchParams(location.search),Ua=su.has("manuale"),Aa=Math.max(0,Math.min(3,Number(su.get("inizio"))||0));Ua&&document.documentElement.classList.add("td3-manuale");var nt=r=>document.getElementById(r),Ra=[],au=[],Ui=eu(nt("story")),rs=0,On=0,is=0,Dt=null,at=0,Ca=0,hi=null,ui=0,wt=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let r=localStorage.getItem("tedeschi-3d-motion");r!==null&&(wt=r==="ridotto")}catch{}Ua&&(wt=!0);for(let[r,e]of Fn.entries()){let t=document.createElement("div");t.className="photoscene",nt("backdrops").append(t),Ra.push(t);let n=document.createElement("button");n.type="button",n.className="stop",n.setAttribute("aria-label",e.label+", "+e.year+", "+e.short);let i=document.createElement("span");i.className="dot",i.setAttribute("aria-hidden","true");let s=document.createElement("span"),a=document.createElement("strong"),o=document.createElement("small");a.textContent=e.label,o.textContent=e.short,s.append(a,o),n.append(i,s),nt("stops").append(n),au.push(n),n.addEventListener("click",()=>wr(r))}if(window.parent!==window||Ua){let r=document.createElement("div");r.className="scene-tools",r.append(nt("motion-switch"),nt("recenter")),document.querySelector(".scene").append(r)}var Li=document.createElement("div");Li.className="curtain-thread";Li.hidden=!0;nt("backdrops").append(Li);var Pa=new Set;function La(r){Pa.has(r)||(Pa.add(r),Ra[r].style.backgroundImage='url("'+ru(r)+'")')}function Pl(r){if(Pa.has(r))return Promise.resolve();let e=new Image;return e.src=ru(r),e.decode().catch(()=>{}).then(()=>La(r))}var Sa=-1,Ta=-1,Da=nt("story").querySelector(".year"),Di=wt||Aa>0;Di||(Da.style.visibility="hidden");var br=null;function Ll(){Da.style.visibility="",Di=!0,br?.disconnect(),br=null}function Zp(){if(Di||wt||Math.round(at)!==0||!Dt){Ll();return}br=new IntersectionObserver(r=>{if(r.some(e=>e.isIntersecting)&&(br?.disconnect(),br=null,!Di)){if(Di=!0,Da.style.visibility="",wt||Math.round(at)!==0){Ui.show(Math.round(at));return}Ui.intro(!0),Ta=0}},{threshold:.18}),br.observe(nt("view"))}function di(){ui&&cancelAnimationFrame(ui),ui=0,hi=null,On&&(cancelAnimationFrame(On),On=0,Er.following=!1),Ia()}var tu=null;function Ia(){let r=!!hi;r!==tu&&(nt("play-symbol").textContent=r?"\u2161":"\u25B6",nt("play-label").textContent=r?"Pausa":"Riproduci",nt("play").setAttribute("aria-label",r?"Metti in pausa":"Riproduci la transizione"),nt("play").setAttribute("aria-pressed",String(r)),tu=r);let e=at<1e-4&&!r,t=at>2.9999&&!r;nt("previous").disabled!==e&&(nt("previous").disabled=e),nt("next").disabled!==t&&(nt("next").disabled=t)}var Jp=r=>Math.max(0,Math.min(1,r));function Kp(r){if(r<=0)return 0;if(r>=1)return 1;let e=.7,t=0,n=.2,i=1,s=r;for(let l=0;l<6;l++){let h=3*e,u=3*(n-e)-h,d=1-h-u,p=((d*s+u)*s+h)*s-r,f=(3*d*s+2*u)*s+h;if(Math.abs(p)<1e-5||!f)break;s-=p/f}s=Jp(s);let a=3*t,o=3*(i-t)-a;return(((1-a-o)*s+o)*s+a)*s}var wa=16,nu="",Al="",iu="";function rn(r,e=!1){let t=Math.max(0,Math.min(3,r));if(t===at&&Sa!==-1&&!e){Ia();return}let n=at;at=t;let i=Math.floor(at),s=Math.min(i+1,3),a=at-i,o=Math.round(at),c=i+"-"+s;if(c!==nu){for(let h=0;h<4;h++){let u=Ra[h];u.hidden=h!==i&&h!==s,u.hidden||((h===i||a>.05)&&La(h),u.style.zIndex=h===i?"0":"1",u.style.clipPath=h===i?"none":"polygon(0 0,0 0,0 100%,0 100%)")}nu=c,Al=""}if(s!==i){let h=wt?a>=.5?1:0:Kp((a-.33)/.38),u=h*(100+wa),d=h<=0?"polygon(0 0,0 0,0 100%,0 100%)":h>=1?"none":"polygon(0 0,"+u.toFixed(2)+"% 0,"+(u-wa).toFixed(2)+"% 100%,0 100%)";if(d!==Al){Ra[s].style.clipPath=d,Al=d;let p=h>0&&h<1&&!wt;Li.hidden=!p,p&&(Li.style.clipPath="polygon(calc("+u.toFixed(2)+"% - 4px) 0,"+u.toFixed(2)+"% 0,"+(u-wa).toFixed(2)+"% 100%,calc("+(u-wa).toFixed(2)+"% - 4px) 100%)")}}else Li.hidden||(Li.hidden=!0);if(Sa!==o){let h=Sa;Sa=o;let u=Fn[o];Ui.change(u),au.forEach((d,p)=>d.setAttribute("aria-current",String(p===o))),nt("era-count").textContent=String(o+1).padStart(2,"0")+" / 04",nt("current-era").textContent=[u.year,u.subtitle,u.title,u.body].join(". "),Di&&h!==-1&&Ta!==o?(Ui.show(o,{animate:!wt&&document.visibilityState==="visible",direction:o>h?1:-1}),Ta=o):(Di||h===-1)&&(Ui.show(o),Ta=o)}Dt&&(wt||a<=1e-5?Dt.show(o,o,0):Dt.show(i,s,a)),a>.05&&s!==i&&La(s),at>n&&s+1<=3&&a>.5&&Pl(s+1),at<n&&i-1>=0&&a<.5&&Pl(i-1),nt("scrub").value=String(at),nt("scrub").style.setProperty("--at",(at*100/3).toFixed(3)+"%");let l=a>.02&&a<.98?Fn[i].label+" verso "+Fn[s].label+", "+Math.round(a*100)+"%":Fn[o].year;l!==iu&&(nt("scrub").setAttribute("aria-valuetext",l),iu=l),Ia()}var Qp=78;function ou(r){On=0;let e=is?Math.min(64,r-is):16.7;is=r;let t=rs-at;if(wt||Math.abs(t)<6e-4||Math.abs(t)>1.6){rn(wt?Math.round(rs):rs),is=0,Er.following=!1;return}rn(at+t*(1-Math.exp(-e/Qp))),On=requestAnimationFrame(ou)}function $p(r){if(ui&&(cancelAnimationFrame(ui),ui=0,hi=null),rs=Math.max(0,Math.min(3,r)),!Dt||document.hidden){On&&(cancelAnimationFrame(On),On=0),Er.following=!1,rn(rs);return}Er.following=!0,On||(is=0,On=requestAnimationFrame(ou))}var Rl=4600,Ea=0;function wr(r){r=Math.max(0,Math.min(3,r));let e=hi?Ea:0;if(di(),Ea=0,Ca=r,wt||!Dt||Math.abs(r-at)<1e-4){rn(r);return}let t=at,n=r-t,i=Math.abs(n),s=i<=1.0001&&e===0,a=s?Math.max(360,i*Rl):Math.min(Rl,Math.max(360,i*Rl)),o=s?0:Math.max(0,Math.min(3,e*a/n)),c=p=>s?p:-2*p*p*p+3*p*p+o*(p*p*p-2*p*p+p);hi={start:t,to:r};let l=null,h=0,u=t;function d(p){if(!hi)return;let f=0;l!==null&&(f=Math.min(p-l,110),h+=f),l=p;let g=Math.min(1,h/a),m=t+n*c(g);f>0&&(Ea=(m-u)/f),u=m,rn(m),g<1?ui=requestAnimationFrame(d):(di(),Ea=0,rn(r))}Ia(),ui=requestAnimationFrame(d)}nt("scrub").addEventListener("input",r=>{di();let e=Number(r.target.value);Ca=Math.min(3,Math.floor(e)+1),rn(wt?Math.round(e):e)});nt("scrub").addEventListener("change",r=>{let e=Number(r.target.value),t=Math.round(e);!wt&&Math.abs(e-t)<.09&&Math.abs(e-t)>5e-4&&wr(t)});nt("next").addEventListener("click",()=>wr(Math.min(3,Math.floor(at+.001)+1)));nt("previous").addEventListener("click",()=>wr(Math.max(0,Math.ceil(at-.001)-1)));nt("play").addEventListener("click",()=>{if(hi){di();return}at>=2.999?(rn(0),wr(1)):wr(Math.abs(at-Math.round(at))>.003&&Math.abs(Ca-at)>.001?Ca:Math.min(3,Math.floor(at+.002)+1))});function lu(){Dt?.setReducedMotion(wt),nt("motion-switch").setAttribute("aria-pressed",String(wt))}nt("motion-switch").addEventListener("click",r=>{if(r.isTrusted&&window.parent!==window)try{let e=window.parent.tedeschiParcoMovimento;if(typeof e=="function"){e();return}}catch{}wt=!wt,di();try{localStorage.setItem("tedeschi-3d-motion",wt?"ridotto":"completo")}catch{}lu(),wt&&(Ui.show(Math.round(at)),Ll()),rn(Math.round(at),!0)});nt("recenter").addEventListener("click",()=>Dt?.reset(!0));document.addEventListener("visibilitychange",()=>{document.hidden&&hi&&di()});var Cn=document.querySelector(".scene"),Sr=nt("story"),Ii=Sr.querySelector(".story-copy").cloneNode(!0);Ii.classList.add("story-probe");Ii.setAttribute("aria-hidden","true");Sr.append(Ii);function Cl(r){let e=document.createRange();e.selectNodeContents(r);let t=0;for(let n of e.getClientRects())t=Math.max(t,n.right);return t}function Na(){Cn.style.removeProperty("--story-top"),Cn.style.removeProperty("--zona");let r=Cn.clientHeight;if(!r)return;let e=innerWidth<=640||r>Cn.clientWidth*.82;Cn.classList.toggle("impilata",e&&innerWidth>640);let t=Ii.querySelector(".period"),n=Ii.querySelector(".era-title"),i=Ii.querySelector("p"),s=0,a=0;for(let p of Fn)t.textContent=p.subtitle,n.textContent=p.title,i.textContent=p.body,s=Math.max(s,Ii.offsetHeight),a=Math.max(a,Cl(t),Cl(n),Cl(i));let o=Cn.getBoundingClientRect().left,c=Sr.getBoundingClientRect().left;a=Math.max(a,Da.getBoundingClientRect().right),a>c&&!e&&Cn.style.setProperty("--zona",Math.ceil(a-c)+"px");let h=Sr.querySelector(".story-copy").offsetTop+s,u=Sr.offsetTop,d=Math.max(10,r*.025);e?Cn.style.setProperty("--story-top",Math.max(8,Math.floor(Math.max(r*.42,r-d-h)))+"px"):u+h>r-d&&Cn.style.setProperty("--story-top",Math.max(8,Math.floor(r-d-h))+"px"),Cn.dataset.fit=String(Sr.offsetTop+h<=r-d+1)}new ResizeObserver(()=>Na()).observe(Cn);Na();lu();rn(Aa,!0);var cu,Er={ready:new Promise(r=>{cu=r}),eras:Fn,following:!1,seek(r){di(),rn(Number(r)||0)},follow(r){$p(Number(r)||0)},seekIntro(r){di(),rn(0,!0),Ll(),Ui.show(0)},get canvas(){return Dt?.canvas},get progress(){return at},get metrics(){return Pi}},Pi=null;window.tedeschiExperience=Er;Ua||Ul(Er);function em(){let r=document.getElementById("kit");r&&r.media!=="all"&&(r.media="all");let e=r?r.sheet?Promise.resolve(!0):new Promise(i=>{r.addEventListener("load",()=>i(!0),{once:!0}),r.addEventListener("error",()=>i(!1),{once:!0}),setTimeout(()=>i(!1),15e3)}):Promise.resolve(!1),t=()=>[...document.fonts].some(i=>/new-science/.test(i.family)),n=i=>i?new Promise(s=>{let a=performance.now();(function o(){getComputedStyle(document.body).fontFamily,t()?s(!0):performance.now()-a>2e3?s(!1):requestAnimationFrame(o)})()}):!1;return e.then(n).then(i=>i&&Promise.race([Promise.all([document.fonts.load("700 40px new-science"),document.fonts.load("400 16px new-science"),document.fonts.load("700 40px new-science-extended")]).then(s=>s.every(a=>a.length>0)),new Promise(s=>setTimeout(()=>s(!1),1e4))])).catch(()=>!1)}document.fonts?.addEventListener?.("loadingdone",()=>Na());var tm=em().then(async r=>{if(r)return document.documentElement.classList.add("kit-ok"),!0;try{(await import("./pezzo-ZVLZWIN2.js")).installLettering()}catch(e){console.warn("Lettering:",e)}return document.documentElement.classList.add("kit-no"),!1}).finally(()=>Na());async function nm(){performance.mark("parco:avvio"),await new Promise(requestAnimationFrame);try{La(Math.floor(Aa));let r=qh(Fn),e=[];for(let s=0;s<Fn.length;s++)s>0&&await new Promise(requestAnimationFrame),e.push(Nh(ns,s,Gh(ns,s)));performance.mark("parco:modelli");let t=await r;Dt=Qh(ns,nt("view"),e,Xh,t,{first:Math.round(Aa),onOrbit:im}),Dt.setReducedMotion(wt),performance.mark("parco:vista"),Pi={partCounts:e.map(s=>s.parts.length),bounds:Dt.bounds.map(s=>[s.min.toArray(),s.max.toArray()]),webgl:!0},Dt.canvas.style.visibility="hidden";let[n,i]=await Promise.all([Dt.firstFinish,Dt.groundReady,Dt.warm()]);Pi.finishes=n,Pi.groundContact=i,performance.mark("parco:finitura"),rn(at,!0),Dt.canvas.style.visibility="visible",nt("loading").hidden=!0,performance.mark("parco:visibile"),requestAnimationFrame(()=>Dt.prepareTransitions().catch(()=>{}).then(()=>performance.mark("parco:passaggi-pronti"))),Dt.finishReady.then(s=>{Pi.finishes=s});for(let s=0;s<4;s++)Pa.has(s)||setTimeout(()=>Pl(s),400+s*250)}catch(r){console.error("Visualizzatore 3D:",r),Pi={webgl:!1,error:String(r)},nt("loading").textContent="Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.",nt("recenter").hidden=!0,rn(0)}await Promise.race([tm,new Promise(r=>setTimeout(r,1200))]),performance.mark("parco:pronta"),cu(Pi),Zp()}function im(r,e){let t=1+Math.min(.04,Math.abs(r)*.03+Math.abs(e)*.05);nt("backdrops").style.transform=Math.abs(r)+Math.abs(e)<1e-4?"":"translate3d("+(-r*14).toFixed(2)+"px,"+(e*8).toFixed(2)+"px,0) scale("+t.toFixed(4)+")"}nm();
