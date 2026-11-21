/* Tedeschi, parco macchine nel tempo. Three.js r160 (MIT, vendor/THREE-LICENSE.txt). Sorgenti leggibili nella cartella superiore. */
import{a as Ul}from"./pezzo-D32I6MI3.js";import{a as Su}from"./pezzo-6626GWO7.js";var ns={};Su(ns,{ACESFilmicToneMapping:()=>gl,Box3:()=>yn,BoxGeometry:()=>hi,BufferAttribute:()=>ln,BufferGeometry:()=>Et,CanvasTexture:()=>ea,CatmullRomCurve3:()=>jr,CylinderGeometry:()=>gr,DataTexture:()=>$s,DepthTexture:()=>fr,DirectionalLight:()=>da,DoubleSide:()=>sh,EquirectangularReflectionMapping:()=>zr,ExtrudeGeometry:()=>Jr,Float32BufferAttribute:()=>Ke,FloatType:()=>Dn,Group:()=>ri,HalfFloatType:()=>Ri,HemisphereLight:()=>ua,LatheGeometry:()=>mr,LinearFilter:()=>pn,LinearMipmapLinearFilter:()=>sr,MathUtils:()=>gh,Matrix4:()=>tt,Mesh:()=>sn,MeshPhysicalMaterial:()=>la,MeshStandardMaterial:()=>es,NearestFilter:()=>Gt,NoColorSpace:()=>_n,OrthographicCamera:()=>dr,PCFSoftShadowMap:()=>ml,PMREMGenerator:()=>pr,Path:()=>Ci,PerspectiveCamera:()=>Qt,PlaneGeometry:()=>ur,Quaternion:()=>xn,RGBAFormat:()=>vn,RepeatWrapping:()=>kr,SRGBColorSpace:()=>Dt,Scene:()=>Qs,ShaderMaterial:()=>Cn,ShadowMaterial:()=>oa,Shape:()=>vr,SphereGeometry:()=>Kr,TextureLoader:()=>ca,TorusGeometry:()=>Qr,TubeGeometry:()=>$r,UnsignedByteType:()=>Yn,UnsignedIntType:()=>Un,Vector2:()=>Ie,Vector3:()=>V,WebGLRenderTarget:()=>Rn,WebGLRenderer:()=>Wr});var rh=1,ml=2,Xn=3,oi=0,an=1,sh=2;var Mi=100;var vo=204,_o=205;var ah=0,wu=1,Eu=2,si=0,Tu=1,Au=2,Ru=3,gl=4,Cu=5,Pu=6;var oh=300,ir=301,rr=302,zr=303,xo=304,pa=306,kr=1e3,qn=1001,yo=1002,Gt=1003,Dl=1004;var Na=1005;var pn=1006,Lu=1007;var sr=1008;var Yn=1009;var vl=1012,lh=1013,Un=1014,Dn=1015,Ri=1016,ch=1017,hh=1018,Ei=1020;var vn=1023;var Ti=1026,ar=1027;var uh=1029;var dh=1031,ph=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,Nl=35840,Ol=35841,Fl=35842,Bl=35843,fh=36196,zl=37492,kl=37496,Gl=37808,Vl=37809,Hl=37810,Wl=37811,Xl=37812,jl=37813,ql=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,Ql=37819,$l=37820,ec=37821,ka=36492,tc=36494,nc=36495;var ic=36284,rc=36285,sc=36286;var Os=2300,Fs=2301,Ga=2302,ac=2400,oc=2401,lc=2402;var mh=3e3,Ai=3001;var _n="",Dt="srgb",Zn="srgb-linear",_l="display-p3",fa="display-p3-linear",Bs="linear",vt="srgb",zs="rec709",ks="p3";var Oi=7680;var cc=35044;var hc="300 es",Mo=1035,or=2e3,Gs=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=1234567,er=Math.PI/180,Gr=180/Math.PI;function Ii(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Wt[255&r]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[255&e]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[63&t|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[255&n]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function bo(r,e){return(r%e+e)%e}function Ur(r,e,t){return(1-t)*r+t*e}function So(r){return(r&r-1)==0&&r!==0}function Vs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var gh={DEG2RAD:er,RAD2DEG:Gr,generateUUID:Ii,clamp:Nt,euclideanModulo:bo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Ur,damp:function(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(bo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(uc=r);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*er},radToDeg:function(r){return r*Gr},isPowerOfTwo:So,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Vs,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*p,o*l);break;case"YZY":r.set(c*p,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*p,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Jt,denormalize:Qi},Ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],m=n[8],g=i[0],f=i[3],x=i[6],_=i[1],v=i[4],M=i[7],w=i[2],b=i[5],T=i[8];return s[0]=a*g+o*_+c*w,s[3]=a*f+o*v+c*b,s[6]=a*x+o*M+c*T,s[1]=l*g+h*_+u*w,s[4]=l*f+h*v+u*b,s[7]=l*x+h*M+u*T,s[2]=p*g+d*_+m*w,s[5]=p*f+d*v+m*b,s[8]=p*x+d*M+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*s,d=l*s-a*c,m=t*u+n*p+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Va=new st;function vh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Iu(){let r=Vr("canvas");return r.style.display="block",r}var dc={};function Dr(r){r in dc||(dc[r]=!0,console.warn(r))}var pc=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fc=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Zn]:{transfer:Bs,primaries:zs,toReference:r=>r,fromReference:r=>r},[Dt]:{transfer:vt,primaries:zs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fa]:{transfer:Bs,primaries:ks,toReference:r=>r.applyMatrix3(fc),fromReference:r=>r.applyMatrix3(pc)},[_l]:{transfer:vt,primaries:ks,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fc),fromReference:r=>r.applyMatrix3(pc).convertLinearToSRGB()}},Uu=new Set([Zn,fa]),pt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Uu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=os[e].toReference;return(0,os[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return os[r].primaries},getTransfer:function(r){return r===_n?Bs:os[r].transfer}};function tr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ha(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fi,Hs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=e.width,Fi.height=e.height;let n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*tr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*tr(t[n]/255)):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Du=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wa(i[a].image)):s.push(Wa(i[a]))}else s=Wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nu=0,on=class r extends li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ii(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?Dt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Ai:mh}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Dt:_n}};on.DEFAULT_IMAGE=null,on.DEFAULT_MAPPING=oh,on.DEFAULT_ANISOTROPY=1;var Pt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],m=c[9],g=c[2],f=c[6],x=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(m+f)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(d+1)/2,w=(x+1)/2,b=(h+p)/4,T=(u+g)/4,H=(m+f)/4;return v>M&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=T/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=H/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=H/s),this.set(n,i,s,t),this}let _=Math.sqrt((f-m)*(f-m)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(f-m)/_,this.y=(u-g)/_,this.z=(p-h)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?Dt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],p=s[a+0],d=s[a+1],m=s[a+2],g=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=p,e[t+1]=d,e[t+2]=m,void(e[t+3]=g);if(u!==g||c!==p||l!==d||h!==m){let f=1-o,x=c*p+l*d+h*m+u*g,_=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let w=Math.sqrt(v),b=Math.atan2(w,x*_);f=Math.sin(f*b)/w,o=Math.sin(o*b)/w}let M=o*_;if(c=c*f+p*M,l=l*f+d*M,h=h*f+m*M,u=u*f+g*M,f===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],p=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*d-l*p,e[t+1]=c*m+h*p+l*u-o*d,e[t+2]=l*m+h*d+o*p-c*u,e[t+3]=h*m-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),p=c(n/2),d=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=p*h*u+l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u-p*d*m;break;case"YXZ":this._x=p*h*u+l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u+p*d*m;break;case"ZXY":this._x=p*h*u-l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u-p*d*m;break;case"ZYX":this._x=p*h*u-l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u+p*d*m;break;case"YZX":this._x=p*h*u+l*d*m,this._y=l*d*u+p*h*m,this._z=l*h*m-p*d*u,this._w=l*h*u-p*d*m;break;case"XZY":this._x=p*h*u-l*d*m,this._y=l*d*u-p*h*m,this._z=l*h*m+p*d*u,this._w=l*h*u+p*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new V,mc=new xn,yn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),cs.subVectors(this.max,Rr),Bi.subVectors(e.a,Rr),zi.subVectors(e.b,Rr),ki.subVectors(e.c,Rr),$n.subVectors(zi,Bi),ei.subVectors(ki,zi),gi.subVectors(Bi,ki);let t=[0,-$n.z,$n.y,0,-ei.z,ei.y,0,-gi.z,gi.y,$n.z,0,-$n.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-$n.y,$n.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!!ja(t,Bi,zi,ki,cs)&&(t=[1,0,0,0,1,0,0,0,1],!!ja(t,Bi,zi,ki,cs)&&(hs.crossVectors($n,ei),t=[hs.x,hs.y,hs.z],ja(t,Bi,zi,ki,cs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(wn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},kn=[new V,new V,new V,new V,new V,new V,new V,new V],wn=new V,ls=new yn,Bi=new V,zi=new V,ki=new V,$n=new V,ei=new V,gi=new V,Rr=new V,cs=new V,hs=new V,vi=new V;function ja(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){vi.fromArray(r,s);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ou=new yn,Cr=new V,qa=new V,Nn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(qa)),this.expandByPoint(Cr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new V,Ya=new V,us=new V,ti=new V,Za=new V,ds=new V,Ja=new V,lr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ya);let s=.5*e.distanceTo(t),a=-this.direction.dot(us),o=ti.dot(this.direction),c=-ti.dot(us),l=ti.lengthSq(),h=Math.abs(1-a*a),u,p,d,m;if(h>0)if(u=a*c-o,p=a*o-c,m=s*h,u>=0)if(p>=-m)if(p<=m){let g=1/h;u*=g,p*=g,d=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-m?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l):p<=m?(u=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ya).addScaledVector(us,p),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){Za.subVectors(t,e),ds.subVectors(n,e),Ja.crossVectors(Za,ds);let a,o=this.direction.dot(Ja);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ti.subVectors(this.origin,e);let c=a*this.direction.dot(ds.crossVectors(ti,ds));if(c<0)return null;let l=a*this.direction.dot(Za.cross(ti));if(l<0||c+l>o)return null;let h=-a*ti.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,p,d,m,g,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,p,d,m,g,f)}set(e,t,n,i,s,a,o,c,l,h,u,p,d,m,g,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=p,x[3]=d,x[7]=m,x[11]=g,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=p-g*l,t[9]=-o*c,t[2]=g-p*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,d=c*u,m=l*h,g=l*u;t[0]=p+g*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=g+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,d=c*u,m=l*h,g=l*u;t[0]=p-g*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,d=a*u,m=o*h,g=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=p*l+g,t[1]=c*u,t[5]=g*l+p,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-p*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*c,d=a*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+g,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,Bu)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ni.crossVectors(n,un),ni.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ni.crossVectors(n,un)),ni.normalize(),ps.crossVectors(un,ni),i[0]=ni.x,i[4]=ps.x,i[8]=un.x,i[1]=ni.y,i[5]=ps.y,i[9]=un.y,i[2]=ni.z,i[6]=ps.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],m=n[2],g=n[6],f=n[10],x=n[14],_=n[3],v=n[7],M=n[11],w=n[15],b=i[0],T=i[4],H=i[8],P=i[12],D=i[1],ee=i[5],R=i[9],J=i[13],j=i[2],te=i[6],de=i[10],ae=i[14],Q=i[3],se=i[7],L=i[11],W=i[15];return s[0]=a*b+o*D+c*j+l*Q,s[4]=a*T+o*ee+c*te+l*se,s[8]=a*H+o*R+c*de+l*L,s[12]=a*P+o*J+c*ae+l*W,s[1]=h*b+u*D+p*j+d*Q,s[5]=h*T+u*ee+p*te+d*se,s[9]=h*H+u*R+p*de+d*L,s[13]=h*P+u*J+p*ae+d*W,s[2]=m*b+g*D+f*j+x*Q,s[6]=m*T+g*ee+f*te+x*se,s[10]=m*H+g*R+f*de+x*L,s[14]=m*P+g*J+f*ae+x*W,s[3]=_*b+v*D+M*j+w*Q,s[7]=_*T+v*ee+M*te+w*se,s[11]=_*H+v*R+M*de+w*L,s[15]=_*P+v*J+M*ae+w*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+s*c*u-i*l*u-s*o*p+n*l*p+i*o*d-n*c*d)+e[7]*(+t*c*d-t*l*p+s*a*p-i*a*d+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*p+i*a*u-n*a*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],m=e[12],g=e[13],f=e[14],x=e[15],_=u*f*l-g*p*l+g*c*d-o*f*d-u*c*x+o*p*x,v=m*p*l-h*f*l-m*c*d+a*f*d+h*c*x-a*p*x,M=h*g*l-m*u*l+m*o*d-a*g*d-h*o*x+a*u*x,w=m*u*c-h*g*c-m*o*p+a*g*p+h*o*f-a*u*f,b=t*_+n*v+i*M+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=_*T,e[1]=(g*p*s-u*f*s-g*i*d+n*f*d+u*i*x-n*p*x)*T,e[2]=(o*f*s-g*c*s+g*i*l-n*f*l-o*i*x+n*c*x)*T,e[3]=(u*c*s-o*p*s-u*i*l+n*p*l+o*i*d-n*c*d)*T,e[4]=v*T,e[5]=(h*f*s-m*p*s+m*i*d-t*f*d-h*i*x+t*p*x)*T,e[6]=(m*c*s-a*f*s-m*i*l+t*f*l+a*i*x-t*c*x)*T,e[7]=(a*p*s-h*c*s+h*i*l-t*p*l-a*i*d+t*c*d)*T,e[8]=M*T,e[9]=(m*u*s-h*g*s-m*n*d+t*g*d+h*n*x-t*u*x)*T,e[10]=(a*g*s-m*o*s+m*n*l-t*g*l-a*n*x+t*o*x)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*T,e[12]=w*T,e[13]=(h*g*i-m*u*i+m*n*p-t*g*p-h*n*f+t*u*f)*T,e[14]=(m*o*i-a*g*i-m*n*c+t*g*c+a*n*f-t*o*f)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*p+t*o*p)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,p=s*l,d=s*h,m=s*u,g=a*h,f=a*u,x=o*u,_=c*l,v=c*h,M=c*u,w=n.x,b=n.y,T=n.z;return i[0]=(1-(g+x))*w,i[1]=(d+M)*w,i[2]=(m-v)*w,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(p+x))*b,i[6]=(f+_)*b,i[7]=0,i[8]=(m+v)*T,i[9]=(f-_)*T,i[10]=(1-(p+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);let c=1/s,l=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=l,En.elements[5]*=l,En.elements[6]*=l,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i),d,m;if(o===or)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Gs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),m=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),p=(t+e)*l,d=(n+i)*h,m,g;if(o===or)m=(a+s)*u,g=-2*u;else{if(o!==Gs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,g=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new V,En=new tt,Fu=new V(0,0,0),Bu=new V(1,1,1),ni=new V,ps=new V,un=new V,gc=new tt,vc=new xn,js=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},zu=0,_c=new V,Vi=new xn,Vn=new tt,fs=new V,Pr=new V,ku=new V,Gu=new xn,xc=new V(1,0,0),yc=new V(0,1,0),Mc=new V(0,0,1),Vu={type:"added"},Hu={type:"removed"},$t=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new V,t=new js,n=new xn,i=new V(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new st}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Pr,fs,this.up):Vn.lookAt(fs,Pr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};$t.DEFAULT_UP=new V(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new V,Hn=new V,Ka=new V,Wn=new V,Hi=new V,Wi=new V,bc=new V,Qa=new V,$a=new V,eo=new V,ms=!1,wi=class r{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Tn.subVectors(i,t),Hn.subVectors(n,t),Ka.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Hn),c=Tn.dot(Ka),l=Hn.dot(Hn),h=Hn.dot(Ka),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(l*c-o*h)*p,m=(a*h-o*c)*p;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,i,s,a,o,c){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Hn.subVectors(e,t),Tn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),.5*Tn.cross(Hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hi.subVectors(i,n),Wi.subVectors(s,n),Qa.subVectors(e,n);let c=Hi.dot(Qa),l=Wi.dot(Qa);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,i);let h=Hi.dot($a),u=Wi.dot($a);if(h>=0&&u<=h)return t.copy(i);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hi,a);eo.subVectors(e,s);let d=Hi.dot(eo),m=Wi.dot(eo);if(m>=0&&d<=m)return t.copy(s);let g=d*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Wi,o);let f=h*m-d*u;if(f<=0&&u-h>=0&&d-m>=0)return bc.subVectors(s,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(bc,o);let x=1/(f+g+p);return a=g*x,o=p*x,t.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},gs={h:0,s:0,l:0};function to(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=bo(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=to(a,s,e+1/3),this.g=to(a,s,e),this.b=to(a,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=_h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return pt.fromWorkingColorSpace(Xt.copy(this),e),65536*Math.round(Nt(255*Xt.r,0,255))+256*Math.round(Nt(255*Xt.g,0,255))+Math.round(Nt(255*Xt.b,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,s=Xt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Dt){pt.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,i=Xt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(gs);let n=Ur(ii.h,gs.h,t),i=Ur(ii.s,gs.s,t),s=Ur(ii.l,gs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new rt;rt.NAMES=_h;var Wu=0,ci=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=1,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=_o,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ys=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wf=Xu();function Xu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(8388608&l)==0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Ct=new V,vs=new Ie,ln=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}};var Zs=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ju=0,gn=new tt,no=new $t,Xi=new V,dn=new yn,Lr=new yn,Bt=new V,Et=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Js:Zs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new V,1/0);if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(dn.min,Lr.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,Lr.max),dn.expandByPoint(Bt)):(dn.expandByPoint(Lr.min),dn.expandByPoint(Lr.max))}dn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),Bt.add(Xi)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<o;D++)l[D]=new V,h[D]=new V;let u=new V,p=new V,d=new V,m=new Ie,g=new Ie,f=new Ie,x=new V,_=new V;function v(D,ee,R){u.fromArray(i,3*D),p.fromArray(i,3*ee),d.fromArray(i,3*R),m.fromArray(a,2*D),g.fromArray(a,2*ee),f.fromArray(a,2*R),p.sub(u),d.sub(u),g.sub(m),f.sub(m);let J=1/(g.x*f.y-f.x*g.y);isFinite(J)&&(x.copy(p).multiplyScalar(f.y).addScaledVector(d,-g.y).multiplyScalar(J),_.copy(d).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(J),l[D].add(x),l[ee].add(x),l[R].add(x),h[D].add(_),h[ee].add(_),h[R].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,ee=M.length;D<ee;++D){let R=M[D],J=R.start;for(let j=J,te=J+R.count;j<te;j+=3)v(n[j+0],n[j+1],n[j+2])}let w=new V,b=new V,T=new V,H=new V;function P(D){T.fromArray(s,3*D),H.copy(T);let ee=l[D];w.copy(ee),w.sub(T.multiplyScalar(T.dot(ee))).normalize(),b.crossVectors(H,ee);let R=b.dot(h[D])<0?-1:1;c[4*D]=w.x,c[4*D+1]=w.y,c[4*D+2]=w.z,c[4*D+3]=R}for(let D=0,ee=M.length;D<ee;++D){let R=M[D],J=R.start;for(let j=J,te=J+R.count;j<te;j+=3)P(n[j+0]),P(n[j+1]),P(n[j+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new V,s=new V,a=new V,o=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let p=0,d=e.count;p<d;p+=3){let m=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h),d=0,m=0;for(let g=0,f=c.length;g<f;g++){d=o.isInterleavedBufferAttribute?c[g]*o.data.stride+o.offset:c[g]*h;for(let x=0;x<h;x++)p[m++]=l[d++]}return new ln(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let p=e(l[h],n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new tt,_i=new lr,_s=new Nn,wc=new V,ji=new V,qi=new V,Yi=new V,io=new V,xs=new V,ys=new Ie,Ms=new Ie,bs=new Ie,Ec=new V,Tc=new V,Ac=new V,Ss=new V,ws=new V,sn=class extends $t{constructor(e=new Et,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(io.fromBufferAttribute(u,e),a?xs.addScaledVector(io,h):xs.addScaledVector(io.sub(t),h))}t.add(xs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),_i.copy(e.ray).recast(e.near),_s.containsPoint(_i.origin)===!1&&(_i.intersectSphere(_s,wc)===null||_i.origin.distanceToSquared(wc)>(e.far-e.near)**2))return;Sc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Sc),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,_i)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=p.length;m<g;m++){let f=p[m],x=a[f.materialIndex];for(let _=Math.max(f.start,d.start),v=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));_<v;_+=3)i=Es(this,x,e,n,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);m<g;m+=3)i=Es(this,a,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=p.length;m<g;m++){let f=p[m],x=a[f.materialIndex];for(let _=Math.max(f.start,d.start),v=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));_<v;_+=3)i=Es(this,x,e,n,l,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);m<g;m+=3)i=Es(this,a,e,n,l,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function Es(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ji),r.getVertexPosition(c,qi),r.getVertexPosition(l,Yi);let h=(function(u,p,d,m,g,f,x,_){let v;if(v=p.side===an?m.intersectTriangle(x,f,g,!0,_):m.intersectTriangle(g,f,x,p.side===oi,_),v===null)return null;ws.copy(_),ws.applyMatrix4(u.matrixWorld);let M=d.ray.origin.distanceTo(ws);return M<d.near||M>d.far?null:{distance:M,point:ws.clone(),object:u}})(r,e,t,n,ji,qi,Yi,Ss);if(h){i&&(ys.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,c),bs.fromBufferAttribute(i,l),h.uv=wi.getInterpolation(Ss,ji,qi,Yi,ys,Ms,bs,new Ie)),s&&(ys.fromBufferAttribute(s,o),Ms.fromBufferAttribute(s,c),bs.fromBufferAttribute(s,l),h.uv1=wi.getInterpolation(Ss,ji,qi,Yi,ys,Ms,bs,new Ie),h.uv2=h.uv1),a&&(Ec.fromBufferAttribute(a,o),Tc.fromBufferAttribute(a,c),Ac.fromBufferAttribute(a,l),h.normal=wi.getInterpolation(Ss,ji,qi,Yi,Ec,Tc,Ac,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new V,materialIndex:0};wi.getNormal(ji,qi,Yi,u.normal),h.face=u}return h}var hi=class r extends Et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],p=0,d=0;function m(g,f,x,_,v,M,w,b,T,H,P){let D=M/T,ee=w/H,R=M/2,J=w/2,j=b/2,te=T+1,de=H+1,ae=0,Q=0,se=new V;for(let L=0;L<de;L++){let W=L*ee-J;for(let Ae=0;Ae<te;Ae++){let S=Ae*D-R;se[g]=S*_,se[f]=W*v,se[x]=j,l.push(se.x,se.y,se.z),se[g]=0,se[f]=0,se[x]=b>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ae/T),u.push(1-L/H),ae+=1}}for(let L=0;L<H;L++)for(let W=0;W<T;W++){let Ae=p+W+te*L,S=p+W+te*(L+1),E=p+(W+1)+te*(L+1),z=p+(W+1)+te*L;c.push(Ae,S,z),c.push(S,E,z),Q+=6}o.addGroup(d,Q,P),d+=Q,p+=ae}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){let e={};for(let t=0;t<r.length;t++){let n=cr(r[t]);for(let i in n)e[i]=n[i]}return e}function xh(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}var qu={clone:cr,merge:Kt},Cn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hr=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qt=class extends Hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Gr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*er*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Gr*Math.atan(Math.tan(.5*er*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*er*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,To=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(Zi,1,e,t);i.layers=this.layers,this.add(i);let s=new Qt(Zi,1,e,t);s.layers=this.layers,this.add(s);let a=new Qt(Zi,1,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Zi,1,e,t);o.layers=this.layers,this.add(o);let c=new Qt(Zi,1,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Zi,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Gs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ks=class extends on{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ir,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Dt:_n),this.texture=new Ks(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:0});s.uniforms.tEquirect.value=t;let a=new sn(i,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=pn),new To(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ro=new V,Yu=new V,Zu=new st,jn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ro.subVectors(n,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zu.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Nn,Ts=new V,hr=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],p=i[7],d=i[8],m=i[9],g=i[10],f=i[11],x=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,p-l,f-d,M-x).normalize(),n[1].setComponents(c+s,p+l,f+d,M+x).normalize(),n[2].setComponents(c+a,p+h,f+m,M+_).normalize(),n[3].setComponents(c-a,p-h,f-m,M-_).normalize(),n[4].setComponents(c-o,p-u,f-g,M-v).normalize(),t===or)n[5].setComponents(c+o,p+u,f+g,M+v).normalize();else{if(t!==Gs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ju(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,c){let l=o.array,h=o.usage,u=l.byteLength,p=r.createBuffer(),d;if(r.bindBuffer(c,p),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=r.HALF_FLOAT}else d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);d=r.UNSIGNED_BYTE}return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,u=c._updateRange,p=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&p.length===0&&r.bufferSubData(l,0,h),p.length!==0){for(let d=0,m=p.length;d<m;d++){let g=p[d];t?r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var ur=class r extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,p=t/c,d=[],m=[],g=[],f=[];for(let x=0;x<h;x++){let _=x*p-a;for(let v=0;v<l;v++){let M=v*u-s;m.push(M,-_,0),g.push(0,0,1),f.push(v/o),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let v=_+l*x,M=_+l*(x+1),w=_+1+l*(x+1),b=_+1+l*x;d.push(v,M,b),d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},it={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ze={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},In={basic:{uniforms:Kt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Kt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Kt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Kt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Kt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Kt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Kt([ze.points,ze.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Kt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Kt([ze.common,ze.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Kt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Kt([ze.sprite,ze.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Kt([ze.common,ze.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Kt([ze.lights,ze.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};In.physical={uniforms:Kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var As={r:0,b:0,g:0};function Ku(r,e,t,n,i,s,a){let o=new rt(0),c,l,h=s===!0?0:1,u=null,p=0,d=null;function m(g,f){g.getRGB(As,xh(r)),n.buffers.color.setClear(As.r,As.g,As.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),h=f,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,m(o,h)},render:function(g,f){let x=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?m(o,h):_&&_.isColor&&(m(_,1),x=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===pa)?(l===void 0&&(l=new sn(new hi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:cr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=pt.getTransfer(_.colorSpace)!==vt,u===_&&p===_.version&&d===r.toneMapping||(l.material.needsUpdate=!0,u=_,p=_.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new sn(new ur(2,2),new Cn({name:"BackgroundMaterial",uniforms:cr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=pt.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&p===_.version&&d===r.toneMapping||(c.material.needsUpdate=!0,u=_,p=_.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}}}function Qu(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null),l=c,h=!1;function u(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function p(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function d(w){let b=[],T=[],H=[];for(let P=0;P<i;P++)b[P]=0,T[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:T,attributeDivisors:H,object:w,attributes:{},index:null}}function m(){let w=l.newAttributes;for(let b=0,T=w.length;b<T;b++)w[b]=0}function g(w){f(w,0)}function f(w,b){let T=l.newAttributes,H=l.enabledAttributes,P=l.attributeDivisors;T[w]=1,H[w]===0&&(r.enableVertexAttribArray(w),H[w]=1),P[w]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,b),P[w]=b)}function x(){let w=l.newAttributes,b=l.enabledAttributes;for(let T=0,H=b.length;T<H;T++)b[T]!==w[T]&&(r.disableVertexAttribArray(T),b[T]=0)}function _(w,b,T,H,P,D,ee){ee===!0?r.vertexAttribIPointer(w,b,T,P,D):r.vertexAttribPointer(w,b,T,H,P,D)}function v(){M(),h=!0,l!==c&&(l=c,u(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(w,b,T,H,P){let D=!1;if(a){let ee=(function(R,J,j){let te=j.wireframe===!0,de=o[R.id];de===void 0&&(de={},o[R.id]=de);let ae=de[J.id];ae===void 0&&(ae={},de[J.id]=ae);let Q=ae[te];return Q===void 0&&(Q=d(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ae[te]=Q),Q})(H,T,b);l!==ee&&(l=ee,u(l.object)),D=(function(R,J,j,te){let de=l.attributes,ae=J.attributes,Q=0,se=j.getAttributes();for(let L in se)if(se[L].location>=0){let W=de[L],Ae=ae[L];if(Ae===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),W===void 0||W.attribute!==Ae||Ae&&W.data!==Ae.data)return!0;Q++}return l.attributesNum!==Q||l.index!==te})(w,H,T,P),D&&(function(R,J,j,te){let de={},ae=J.attributes,Q=0,se=j.getAttributes();for(let L in se)if(se[L].location>=0){let W=ae[L];W===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let Ae={};Ae.attribute=W,W&&W.data&&(Ae.data=W.data),de[L]=Ae,Q++}l.attributes=de,l.attributesNum=Q,l.index=te})(w,H,T,P)}else{let ee=b.wireframe===!0;l.geometry===H.id&&l.program===T.id&&l.wireframe===ee||(l.geometry=H.id,l.program=T.id,l.wireframe=ee,D=!0)}P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,(function(ee,R,J,j){if(n.isWebGL2===!1&&(ee.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let te=j.attributes,de=J.getAttributes(),ae=R.defaultAttributeValues;for(let Q in de){let se=de[Q];if(se.location>=0){let L=te[Q];if(L===void 0&&(Q==="instanceMatrix"&&ee.instanceMatrix&&(L=ee.instanceMatrix),Q==="instanceColor"&&ee.instanceColor&&(L=ee.instanceColor)),L!==void 0){let W=L.normalized,Ae=L.itemSize,S=t.get(L);if(S===void 0)continue;let E=S.buffer,z=S.type,N=S.bytesPerElement,I=n.isWebGL2===!0&&(z===r.INT||z===r.UNSIGNED_INT||L.gpuType===lh);if(L.isInterleavedBufferAttribute){let X=L.data,G=X.stride,q=L.offset;if(X.isInstancedInterleavedBuffer){for(let ne=0;ne<se.locationSize;ne++)f(se.location+ne,X.meshPerAttribute);ee.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<se.locationSize;ne++)g(se.location+ne);r.bindBuffer(r.ARRAY_BUFFER,E);for(let ne=0;ne<se.locationSize;ne++)_(se.location+ne,Ae/se.locationSize,z,W,G*N,(q+Ae/se.locationSize*ne)*N,I)}else{if(L.isInstancedBufferAttribute){for(let X=0;X<se.locationSize;X++)f(se.location+X,L.meshPerAttribute);ee.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let X=0;X<se.locationSize;X++)g(se.location+X);r.bindBuffer(r.ARRAY_BUFFER,E);for(let X=0;X<se.locationSize;X++)_(se.location+X,Ae/se.locationSize,z,W,Ae*N,Ae/se.locationSize*X*N,I)}}else if(ae!==void 0){let W=ae[Q];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(se.location,W);break;case 3:r.vertexAttrib3fv(se.location,W);break;case 4:r.vertexAttrib4fv(se.location,W);break;default:r.vertexAttrib1fv(se.location,W)}}}}x()})(w,b,T,H),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let w in o){let b=o[w];for(let T in b){let H=b[T];for(let P in H)p(H[P].object),delete H[P];delete b[T]}delete o[w]}},releaseStatesOfGeometry:function(w){if(o[w.id]===void 0)return;let b=o[w.id];for(let T in b){let H=b[T];for(let P in H)p(H[P].object),delete H[P];delete b[T]}delete o[w.id]},releaseStatesOfProgram:function(w){for(let b in o){let T=o[b];if(T[w.id]===void 0)continue;let H=T[w.id];for(let P in H)p(H[P].object),delete H[P];delete T[w.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function $u(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,s,1)}}}function ed(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:_&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function td(r){let e=this,t=null,n=0,i=!1,s=!1,a=new jn,o=new st,c={value:null,needsUpdate:!1};function l(h,u,p,d){let m=h!==null?h.length:0,g=null;if(m!==0){if(g=c.value,d!==!0||g===null){let f=p+4*m,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,v=p;_!==m;++_,v+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,f=r.get(h);if(!i||d===null||d.length===0||s&&!g)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let x=s?0:n,_=4*x,v=f.clippingState||null;c.value=v,v=l(d,u,_,p);for(let M=0;M!==_;++M)v[M]=t[M];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function nd(r){let e=new WeakMap;function t(i,s){return s===zr?i.mapping=ir:s===xo&&(i.mapping=rr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===zr||s===xo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ao(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var dr=class extends Hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=[.125,.215,.35,.446,.526,.582],Ir=20,so=new dr,Cc=new rt,ao=null,oo=0,lo=0,yi=(1+Math.sqrt(5))/2,Ji=1/yi,Pc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,yi,Ji),new V(0,yi,-Ji),new V(Ji,0,yi),new V(-Ji,0,yi),new V(yi,Ji,0),new V(-yi,Ji,0)],pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ri,format:vn,colorSpace:Zn,depthBuffer:!1},i=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Rc.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);c.push(d);let m=1/d;p>a-4?m=Rc[p-a+4-1]:p===0&&(m=0),l.push(m);let g=1/(d-2),f=-g,x=1+g,_=[f,f,x,f,x,x,f,f,x,x,f,x],v=6,M=6,w=3,b=2,T=1,H=new Float32Array(w*M*v),P=new Float32Array(b*M*v),D=new Float32Array(T*M*v);for(let R=0;R<v;R++){let J=R%3*2/3-1,j=R>2?0:-1,te=[J,j,0,J+2/3,j,0,J+2/3,j+1,0,J,j,0,J+2/3,j+1,0,J,j+1,0];H.set(te,w*M*R),P.set(_,b*M*R);let de=[R,R,R,R,R,R];D.set(de,T*M*R)}let ee=new Et;ee.setAttribute("position",new ln(H,w)),ee.setAttribute("uv",new ln(P,b)),ee.setAttribute("faceIndex",new ln(D,T)),o.push(ee),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Ir),h=new V(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:xl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){let s=new Qt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Cc),c.toneMapping=si,c.autoClear=!1;let u=new Ys({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),p=new sn(new hi,u),d=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,d=!0):(u.color.copy(Cc),d=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):f===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let x=this._cubeSize;Rs(i,f*x,g>2?x:0,x,x),c.setRenderTarget(i),d&&c.render(p,s),c.render(e,s)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Rs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Pc[(i-1)%Pc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new sn(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,m=s/d,g=isFinite(s)?1+Math.floor(3*m):Ir;g>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let f=[],x=0;for(let M=0;M<Ir;++M){let w=M/m,b=Math.exp(-w*w/2);f.push(b),M===0?x+=b:M<g&&(x+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-n;let v=this._sizeLods[i];Rs(t,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),c.setRenderTarget(t),c.render(h,so)}};function Lc(r,e,t){let n=new Rn(r,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ic(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function id(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===zr||s===xo,o=s===ir||s===rr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new pr(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&(function(l){let h=0,u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u})(c)){t===null&&(t=new pr(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function rd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sd(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let p=l.morphAttributes[u];for(let d=0,m=p.length;d<m;d++)e.remove(p[d])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,p=0;if(h!==null){let g=h.array;p=h.version;for(let f=0,x=g.length;f<x;f+=3){let _=g[f+0],v=g[f+1],M=g[f+2];l.push(_,v,v,M,M,_)}}else{if(u===void 0)return;{let g=u.array;p=u.version;for(let f=0,x=g.length/3-1;f<x;f+=3){let _=f+0,v=f+1,M=f+2;l.push(_,v,v,M,M,_)}}}let d=new(vh(l)?Js:Zs)(l,1);d.version=p;let m=s.get(c);m&&e.remove(m),s.set(c,d)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let p=h[u];for(let d=0,m=p.length;d<m;d++)e.update(p[d],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function ad(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,p;if(i)u=r,p="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[p](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h;p++)this.render(c[p]/o,l[p]);else{u.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let p=0;for(let d=0;d<h;d++)p+=l[d];t.update(p,s,1)}}}function od(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function ld(r,e){return r[0]-e[0]}function cd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function hd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=p!==void 0?p.length:0,m=s.get(l);if(m===void 0||m.count!==d){let J=function(){ee.dispose(),s.delete(l),l.removeEventListener("dispose",J)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],T=0;x===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let H=l.attributes.position.count*T,P=1;H>e.maxTextureSize&&(P=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);let D=new Float32Array(H*P*4*d),ee=new Xs(D,H,P,d);ee.type=Dn,ee.needsUpdate=!0;let R=4*T;for(let j=0;j<d;j++){let te=M[j],de=w[j],ae=b[j],Q=H*P*4*j;for(let se=0;se<te.count;se++){let L=se*R;x===!0&&(a.fromBufferAttribute(te,se),D[Q+L+0]=a.x,D[Q+L+1]=a.y,D[Q+L+2]=a.z,D[Q+L+3]=0),_===!0&&(a.fromBufferAttribute(de,se),D[Q+L+4]=a.x,D[Q+L+5]=a.y,D[Q+L+6]=a.z,D[Q+L+7]=0),v===!0&&(a.fromBufferAttribute(ae,se),D[Q+L+8]=a.x,D[Q+L+9]=a.y,D[Q+L+10]=a.z,D[Q+L+11]=ae.itemSize===4?a.w:1)}}m={count:d,texture:ee,size:new Ie(H,P)},s.set(l,m),l.addEventListener("dispose",J)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];let f=l.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let p=u===void 0?0:u.length,d=n[l.id];if(d===void 0||d.length!==p){d=[];for(let _=0;_<p;_++)d[_]=[_,0];n[l.id]=d}for(let _=0;_<p;_++){let v=d[_];v[0]=_,v[1]=u[_]}d.sort(cd);for(let _=0;_<8;_++)_<p&&d[_][1]?(o[_][0]=d[_][0],o[_][1]=d[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ld);let m=l.morphAttributes.position,g=l.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let v=o[_],M=v[0],w=v[1];M!==Number.MAX_SAFE_INTEGER&&w?(m&&l.getAttribute("morphTarget"+_)!==m[M]&&l.setAttribute("morphTarget"+_,m[M]),g&&l.getAttribute("morphNormal"+_)!==g[M]&&l.setAttribute("morphNormal"+_,g[M]),i[_]=w,f+=w):(m&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),g&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),i[_]=0)}let x=l.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function ud(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var fr=class extends on{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:Ti)!==Ti&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=Un),n===void 0&&h===ar&&(n=Ei),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mh=new on,bh=new fr(1,1);bh.compareFunction=515;var Sh=new Xs,wh=new Eo,Eh=new Ks,Dc=[],Nc=[],Oc=new Float32Array(16),Fc=new Float32Array(9),Bc=new Float32Array(4);function xr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Dc[i];if(s===void 0&&(s=new Float32Array(i),Dc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function fd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function gd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Bc.set(n),r.uniformMatrix2fv(this.addr,!1,Bc),Ft(t,n)}}function vd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Fc.set(n),r.uniformMatrix3fv(this.addr,!1,Fc),Ft(t,n)}}function _d(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Oc.set(n),r.uniformMatrix4fv(this.addr,!1,Oc),Ft(t,n)}}function xd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function Md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function bd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Sd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Ed(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Td(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Ad(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?bh:Mh;t.setTexture2D(e||s,i)}function Rd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wh,i)}function Cd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Eh,i)}function Pd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sh,i)}function Ld(r,e){r.uniform1fv(this.addr,e)}function Id(r,e){let t=xr(e,this.size,2);r.uniform2fv(this.addr,t)}function Ud(r,e){let t=xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Dd(r,e){let t=xr(e,this.size,4);r.uniform4fv(this.addr,t)}function Nd(r,e){let t=xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Od(r,e){let t=xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fd(r,e){let t=xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bd(r,e){r.uniform1iv(this.addr,e)}function zd(r,e){r.uniform2iv(this.addr,e)}function kd(r,e){r.uniform3iv(this.addr,e)}function Gd(r,e){r.uniform4iv(this.addr,e)}function Vd(r,e){r.uniform1uiv(this.addr,e)}function Hd(r,e){r.uniform2uiv(this.addr,e)}function Wd(r,e){r.uniform3uiv(this.addr,e)}function Xd(r,e){r.uniform4uiv(this.addr,e)}function jd(r,e,t){let n=this.cache,i=e.length,s=ma(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mh,s[a])}function qd(r,e,t){let n=this.cache,i=e.length,s=ma(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wh,s[a])}function Yd(r,e,t){let n=this.cache,i=e.length,s=ma(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Eh,s[a])}function Zd(r,e,t){let n=this.cache,i=e.length,s=ma(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sh,s[a])}var Ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return dd;case 35664:return pd;case 35665:return fd;case 35666:return md;case 35674:return gd;case 35675:return vd;case 35676:return _d;case 5124:case 35670:return xd;case 35667:case 35671:return yd;case 35668:case 35672:return Md;case 35669:case 35673:return bd;case 5125:return Sd;case 36294:return wd;case 36295:return Ed;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Rd;case 35680:case 36300:case 36308:case 36293:return Cd;case 36289:case 36303:case 36311:case 36292:return Pd}})(t.type)}},Co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Ld;case 35664:return Id;case 35665:return Ud;case 35666:return Dd;case 35674:return Nd;case 35675:return Od;case 35676:return Fd;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return kd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return Hd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Yd;case 36289:case 36303:case 36311:case 36292:return Zd}})(t.type)}},Po=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},co=/(\w+)(\])?(\[|\.)?/g;function zc(r,e){r.seq.push(e),r.map[e.id]=e}function Jd(r,e,t){let n=r.name,i=n.length;for(co.lastIndex=0;;){let s=co.exec(n),a=co.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){zc(t,l===void 0?new Ro(o,r,e):new Co(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Po(o),zc(t,h)),t=h}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Jd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function kc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Kd=37297,Qd=0;function Gc(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let d=u;d<p;d++){let m=d+1;h.push(`${m===c?">":" "} ${m}: ${l[d]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function $d(r,e){let t=(function(n){let i=pt.getPrimaries(pt.workingColorSpace),s=pt.getPrimaries(n),a;switch(i===s?a="":i===ks&&s===zs?a="LinearDisplayP3ToLinearSRGB":i===zs&&s===ks&&(a="LinearSRGBToLinearDisplayP3"),n){case Zn:case fa:return[a,"LinearTransferOETF"];case Dt:case _l:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ep(r,e){let t;switch(e){case Tu:t="Linear";break;case Au:t="Reinhard";break;case Ru:t="OptimizedCineon";break;case gl:t="ACESFilmic";break;case Pu:t="AgX";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ki(r){return r!==""}function Vc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(r){return r.replace(tp,ip)}var np=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(r,e){let t=it[e];if(t===void 0){let n=np.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Lo(t)}var rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(r){return r.replace(rp,sp)}function sp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ap(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(R){let J="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===rh?J="SHADOWMAP_TYPE_PCF":R.shadowMapType===ml?J="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===Xn&&(J="SHADOWMAP_TYPE_VSM"),J})(t),l=(function(R){let J="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case ir:case rr:J="ENVMAP_TYPE_CUBE";break;case pa:J="ENVMAP_TYPE_CUBE_UV"}return J})(t),h=(function(R){let J="ENVMAP_MODE_REFLECTION";return R.envMap&&R.envMapMode===rr&&(J="ENVMAP_MODE_REFRACTION"),J})(t),u=(function(R){let J="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case ah:J="ENVMAP_BLENDING_MULTIPLY";break;case wu:J="ENVMAP_BLENDING_MIX";break;case Eu:J="ENVMAP_BLENDING_ADD"}return J})(t),p=(function(R){let J=R.envMapCubeUVHeight;if(J===null)return null;let j=Math.log2(J)-2,te=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:te,maxMip:j}})(t),d=t.isWebGL2?"":(function(R){return[R.extensionDerivatives||R.envMapCubeUVHeight||R.bumpMap||R.normalMapTangentSpace||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap||R.transmission)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)})(t),m=(function(R){return[R.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)})(t),g=(function(R){let J=[];for(let j in R){let te=R[j];te!==!1&&J.push("#define "+j+" "+te)}return J.join(`
`)})(s),f=i.createProgram(),x,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),x.length>0&&(x+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),_.length>0&&(_+=`
`)):(x=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),_=[d,Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?it.tonemapping_pars_fragment:"",t.toneMapping!==si?ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,$d("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Lo(a),a=Vc(a,t),a=Hc(a,t),o=Lo(o),o=Vc(o,t),o=Hc(o,t),a=Wc(a),o=Wc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+x+a,w=v+_+o,b=kc(i,i.VERTEX_SHADER,M),T=kc(i,i.FRAGMENT_SHADER,w);function H(R){if(r.debug.checkShaderErrors){let J=i.getProgramInfoLog(f).trim(),j=i.getShaderInfoLog(b).trim(),te=i.getShaderInfoLog(T).trim(),de=!0,ae=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,T);else{let Q=Gc(i,b,"vertex"),se=Gc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Q+`
`+se)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):j!==""&&te!==""||(ae=!1);ae&&(R.diagnostics={runnable:de,programLog:J,vertexShader:{log:j,prefix:x},fragmentShader:{log:te,prefix:_}})}i.deleteShader(b),i.deleteShader(T),P=new nr(i,f),D=(function(J,j){let te={},de=J.getProgramParameter(j,J.ACTIVE_ATTRIBUTES);for(let ae=0;ae<de;ae++){let Q=J.getActiveAttrib(j,ae),se=Q.name,L=1;Q.type===J.FLOAT_MAT2&&(L=2),Q.type===J.FLOAT_MAT3&&(L=3),Q.type===J.FLOAT_MAT4&&(L=4),te[se]={type:Q.type,location:J.getAttribLocation(j,se),locationSize:L}}return te})(i,f)}let P,D;i.attachShader(f,b),i.attachShader(f,T),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return P===void 0&&H(this),P},this.getAttributes=function(){return D===void 0&&H(this),D};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=i.getProgramParameter(f,Kd)),ee},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qd++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=T,this}var op=0,Io=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uo(e),t.set(e,n)),n}},Uo=class{constructor(e){this.id=op++,this.code=e,this.usedTimes=0}};function lp(r,e,t,n,i,s,a){let o=new qs,c=new Io,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,x,_,v,M){let w=v.fog,b=M.geometry,T=f.isMeshStandardMaterial?v.environment:null,H=(f.isMeshStandardMaterial?t:e).get(f.envMap||T),P=H&&H.mapping===pa?H.image.height:null,D=m[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let ee=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,R=ee!==void 0?ee.length:0,J,j,te,de,ae=0;if(b.morphAttributes.position!==void 0&&(ae=1),b.morphAttributes.normal!==void 0&&(ae=2),b.morphAttributes.color!==void 0&&(ae=3),D){let lt=In[D];J=lt.vertexShader,j=lt.fragmentShader}else J=f.vertexShader,j=f.fragmentShader,c.update(f),te=c.getVertexShaderID(f),de=c.getFragmentShaderID(f);let Q=r.getRenderTarget(),se=M.isInstancedMesh===!0,L=M.isBatchedMesh===!0,W=!!f.map,Ae=!!f.matcap,S=!!H,E=!!f.aoMap,z=!!f.lightMap,N=!!f.bumpMap,I=!!f.normalMap,X=!!f.displacementMap,G=!!f.emissiveMap,q=!!f.metalnessMap,ne=!!f.roughnessMap,ce=f.anisotropy>0,C=f.clearcoat>0,y=f.iridescence>0,Y=f.sheen>0,k=f.transmission>0,O=ce&&!!f.anisotropyMap,K=C&&!!f.clearcoatMap,re=C&&!!f.clearcoatNormalMap,ie=C&&!!f.clearcoatRoughnessMap,_e=y&&!!f.iridescenceMap,Me=y&&!!f.iridescenceThicknessMap,we=Y&&!!f.sheenColorMap,Re=Y&&!!f.sheenRoughnessMap,Le=!!f.specularMap,ke=!!f.specularColorMap,Ue=!!f.specularIntensityMap,Ge=k&&!!f.transmissionMap,Xe=k&&!!f.thicknessMap,Je=!!f.gradientMap,ut=!!f.alphaMap,_t=f.alphaTest>0,ht=!!f.alphaHash,dt=!!f.extensions,Lt=!!b.attributes.uv1,le=!!b.attributes.uv2,Ve=!!b.attributes.uv3,ot=si;return f.toneMapped&&(Q!==null&&Q.isXRRenderTarget!==!0||(ot=r.toneMapping)),{isWebGL2:h,shaderID:D,shaderType:f.type,shaderName:f.name,vertexShader:J,fragmentShader:j,defines:f.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:L,instancing:se,instancingColor:se&&M.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zn,map:W,matcap:Ae,envMap:S,envMapMode:S&&H.mapping,envMapCubeUVHeight:P,aoMap:E,lightMap:z,bumpMap:N,normalMap:I,displacementMap:p&&X,emissiveMap:G,normalMapObjectSpace:I&&f.normalMapType===1,normalMapTangentSpace:I&&f.normalMapType===0,metalnessMap:q,roughnessMap:ne,anisotropy:ce,anisotropyMap:O,clearcoat:C,clearcoatMap:K,clearcoatNormalMap:re,clearcoatRoughnessMap:ie,iridescence:y,iridescenceMap:_e,iridescenceThicknessMap:Me,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Re,specularMap:Le,specularColorMap:ke,specularIntensityMap:Ue,transmission:k,transmissionMap:Ge,thicknessMap:Xe,gradientMap:Je,opaque:f.transparent===!1&&f.blending===1,alphaMap:ut,alphaTest:_t,alphaHash:ht,combine:f.combine,mapUv:W&&g(f.map.channel),aoMapUv:E&&g(f.aoMap.channel),lightMapUv:z&&g(f.lightMap.channel),bumpMapUv:N&&g(f.bumpMap.channel),normalMapUv:I&&g(f.normalMap.channel),displacementMapUv:X&&g(f.displacementMap.channel),emissiveMapUv:G&&g(f.emissiveMap.channel),metalnessMapUv:q&&g(f.metalnessMap.channel),roughnessMapUv:ne&&g(f.roughnessMap.channel),anisotropyMapUv:O&&g(f.anisotropyMap.channel),clearcoatMapUv:K&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(f.sheenRoughnessMap.channel),specularMapUv:Le&&g(f.specularMap.channel),specularColorMapUv:ke&&g(f.specularColorMap.channel),specularIntensityMapUv:Ue&&g(f.specularIntensityMap.channel),transmissionMapUv:Ge&&g(f.transmissionMap.channel),thicknessMapUv:Xe&&g(f.thicknessMap.channel),alphaMapUv:ut&&g(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(I||ce),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:le,vertexUv3s:Ve,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(W||ut),fog:!!w,useFog:f.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,useLegacyLights:r._useLegacyLights,decodeVideoTexture:W&&f.map.isVideoTexture===!0&&pt.getTransfer(f.map.colorSpace)===vt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===an,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:dt&&f.extensions.derivatives===!0,extensionFragDepth:dt&&f.extensions.fragDepth===!0,extensionDrawBuffers:dt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let _ in f.defines)x.push(_),x.push(f.defines[_]);return f.isRawShaderMaterial===!1&&((function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)})(x,f),(function(_,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),_.push(o.mask)})(x,f),x.push(r.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=m[f.type],_;if(x){let v=In[x];_=qu.clone(v.uniforms)}else _=f.uniforms;return _},acquireProgram:function(f,x){let _;for(let v=0,M=l.length;v<M;v++){let w=l[v];if(w.cacheKey===x){_=w,++_.usedTimes;break}}return _===void 0&&(_=new ap(r,x,f,s),l.push(_)),_},releaseProgram:function(f){if(--f.usedTimes==0){let x=l.indexOf(f);l[x]=l[l.length-1],l.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:l,dispose:function(){c.dispose()}}}function cp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function hp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=c,p.groupOrder=l,p.renderOrder=a.renderOrder,p.z=h,p.group=u),e++,p}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.push(p):c.transparent===!0?i.push(p):t.push(p)},unshift:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.unshift(p):c.transparent===!0?i.unshift(p):t.unshift(p)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||hp),n.length>1&&n.sort(o||jc),i.length>1&&i.sort(o||jc)}}}function up(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new qc,r.set(e,[i])):t>=n.length?(i=new qc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function dp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new rt};break;case"SpotLight":t={position:new V,direction:new V,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new V,halfWidth:new V,halfHeight:new V}}return r[e.id]=t,t}}}var pp=0;function fp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mp(r,e){let t=new dp,n=(function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new tt,o=new tt;return{setup:function(c,l){let h=0,u=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,g=0,f=0,x=0,_=0,v=0,M=0,w=0,b=0,T=0;c.sort(fp);let H=l===!0?Math.PI:1;for(let D=0,ee=c.length;D<ee;D++){let R=c[D],J=R.color,j=R.intensity,te=R.distance,de=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=J.r*j*H,u+=J.g*j*H,p+=J.b*j*H;else if(R.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(R.sh.coefficients[ae],j);T++}else if(R.isDirectionalLight){let ae=t.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity*H),R.castShadow){let Q=R.shadow,se=n.get(R);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=de,i.directionalShadowMatrix[d]=R.shadow.matrix,_++}i.directional[d]=ae,d++}else if(R.isSpotLight){let ae=t.get(R);ae.position.setFromMatrixPosition(R.matrixWorld),ae.color.copy(J).multiplyScalar(j*H),ae.distance=te,ae.coneCos=Math.cos(R.angle),ae.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ae.decay=R.decay,i.spot[g]=ae;let Q=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,Q.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[g]=Q.matrix,R.castShadow){let se=n.get(R);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=de,M++}g++}else if(R.isRectAreaLight){let ae=t.get(R);ae.color.copy(J).multiplyScalar(j),ae.halfWidth.set(.5*R.width,0,0),ae.halfHeight.set(0,.5*R.height,0),i.rectArea[f]=ae,f++}else if(R.isPointLight){let ae=t.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity*H),ae.distance=R.distance,ae.decay=R.decay,R.castShadow){let Q=R.shadow,se=n.get(R);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,se.shadowCameraNear=Q.camera.near,se.shadowCameraFar=Q.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=R.shadow.matrix,v++}i.point[m]=ae,m++}else if(R.isHemisphereLight){let ae=t.get(R);ae.skyColor.copy(R.color).multiplyScalar(j*H),ae.groundColor.copy(R.groundColor).multiplyScalar(j*H),i.hemi[x]=ae,x++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let P=i.hash;P.directionalLength===d&&P.pointLength===m&&P.spotLength===g&&P.rectAreaLength===f&&P.hemiLength===x&&P.numDirectionalShadows===_&&P.numPointShadows===v&&P.numSpotShadows===M&&P.numSpotMaps===w&&P.numLightProbes===T||(i.directional.length=d,i.spot.length=g,i.rectArea.length=f,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=d,P.pointLength=m,P.spotLength=g,P.rectAreaLength=f,P.hemiLength=x,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=w,P.numLightProbes=T,i.version=pp++)},setupView:function(c,l){let h=0,u=0,p=0,d=0,m=0,g=l.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){let _=c[f];if(_.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(_.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let v=i.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),m++}}},state:i}}function Yc(r,e){let t=new mp(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function gp(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new Yc(r,e),t.set(n,[a])):i>=s.length?(a=new Yc(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Do=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vp(r,e,t){let n=new hr,i=new Ie,s=new Ie,a=new Pt,o=new Do({depthPacking:3201}),c=new No,l={},h=t.maxTextureSize,u={[oi]:an,[an]:oi,2:2},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:`void main() {
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let m=new Et;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new sn(m,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let x=this.type;function _(b,T){let H=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,H,p,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,H,d,g,null)}function v(b,T,H,P){let D=null,ee=H.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(ee!==void 0)D=ee;else if(D=H.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let R=D.uuid,J=T.uuid,j=l[R];j===void 0&&(j={},l[R]=j);let te=j[J];te===void 0&&(te=D.clone(),j[J]=te,T.addEventListener("dispose",w)),D=te}return D.visible=T.visible,D.wireframe=T.wireframe,D.side=P===Xn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(r.properties.get(D).light=H),D}function M(b,T,H,P,D){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld);let R=e.update(b),J=b.material;if(Array.isArray(J)){let j=R.groups;for(let te=0,de=j.length;te<de;te++){let ae=j[te],Q=J[ae.materialIndex];if(Q&&Q.visible){let se=v(b,Q,P,D);b.onBeforeShadow(r,b,T,H,R,se,ae),r.renderBufferDirect(H,null,R,se,b,ae),b.onAfterShadow(r,b,T,H,R,se,ae)}}}else if(J.visible){let j=v(b,J,P,D);b.onBeforeShadow(r,b,T,H,R,j,null),r.renderBufferDirect(H,null,R,j,b,null),b.onAfterShadow(r,b,T,H,R,j,null)}}let ee=b.children;for(let R=0,J=ee.length;R<J;R++)M(ee[R],T,H,P,D)}function w(b){b.target.removeEventListener("dispose",w);for(let T in l){let H=l[T],P=b.target.uuid;P in H&&(H[P].dispose(),delete H[P])}}this.render=function(b,T,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let P=r.getRenderTarget(),D=r.getActiveCubeFace(),ee=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let J=x!==Xn&&this.type===Xn,j=x===Xn&&this.type!==Xn;for(let te=0,de=b.length;te<de;te++){let ae=b[te],Q=ae.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let se=Q.getFrameExtents();if(i.multiply(se),s.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/se.x),i.x=s.x*se.x,Q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/se.y),i.y=s.y*se.y,Q.mapSize.y=s.y)),Q.map===null||J===!0||j===!0){let W=this.type!==Xn?{minFilter:Gt,magFilter:Gt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Rn(i.x,i.y,W),Q.map.texture.name=ae.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();let L=Q.getViewportCount();for(let W=0;W<L;W++){let Ae=Q.getViewport(W);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),R.viewport(a),Q.updateMatrices(ae,W),n=Q.getFrustum(),M(T,H,Q.camera,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===Xn&&_(Q,H),Q.needsUpdate=!1}x=this.type,f.needsUpdate=!1,r.setRenderTarget(P,D,ee)}}function _p(r,e,t){let n=t.isWebGL2,i=new function(){let y=!1,Y=new Pt,k=null,O=new Pt(0,0,0,0);return{setMask:function(K){k===K||y||(r.colorMask(K,K,K,K),k=K)},setLocked:function(K){y=K},setClear:function(K,re,ie,_e,Me){Me===!0&&(K*=_e,re*=_e,ie*=_e),Y.set(K,re,ie,_e),O.equals(Y)===!1&&(r.clearColor(K,re,ie,_e),O.copy(Y))},reset:function(){y=!1,k=null,O.set(-1,0,0,0)}}},s=new function(){let y=!1,Y=null,k=null,O=null;return{setTest:function(K){K?N(r.DEPTH_TEST):I(r.DEPTH_TEST)},setMask:function(K){Y===K||y||(r.depthMask(K),Y=K)},setFunc:function(K){if(k!==K){switch(K){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}k=K}},setLocked:function(K){y=K},setClear:function(K){O!==K&&(r.clearDepth(K),O=K)},reset:function(){y=!1,Y=null,k=null,O=null}}},a=new function(){let y=!1,Y=null,k=null,O=null,K=null,re=null,ie=null,_e=null,Me=null;return{setTest:function(we){y||(we?N(r.STENCIL_TEST):I(r.STENCIL_TEST))},setMask:function(we){Y===we||y||(r.stencilMask(we),Y=we)},setFunc:function(we,Re,Le){k===we&&O===Re&&K===Le||(r.stencilFunc(we,Re,Le),k=we,O=Re,K=Le)},setOp:function(we,Re,Le){re===we&&ie===Re&&_e===Le||(r.stencilOp(we,Re,Le),re=we,ie=Re,_e=Le)},setLocked:function(we){y=we},setClear:function(we){Me!==we&&(r.clearStencil(we),Me=we)},reset:function(){y=!1,Y=null,k=null,O=null,K=null,re=null,ie=null,_e=null,Me=null}}},o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,p=[],d=null,m=!1,g=null,f=null,x=null,_=null,v=null,M=null,w=null,b=new rt(0,0,0),T=0,H=!1,P=null,D=null,ee=null,R=null,J=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,de=0,ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ae)[1]),te=de>=1):ae.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),te=de>=2);let Q=null,se={},L=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),Ae=new Pt().fromArray(L),S=new Pt().fromArray(W);function E(y,Y,k,O){let K=new Uint8Array(4),re=r.createTexture();r.bindTexture(y,re),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<k;ie++)!n||y!==r.TEXTURE_3D&&y!==r.TEXTURE_2D_ARRAY?r.texImage2D(Y+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,K):r.texImage3D(Y,0,r.RGBA,1,1,O,0,r.RGBA,r.UNSIGNED_BYTE,K);return re}let z={};function N(y){l[y]!==!0&&(r.enable(y),l[y]=!0)}function I(y){l[y]!==!1&&(r.disable(y),l[y]=!1)}z[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),z[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(z[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),z[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),N(r.DEPTH_TEST),s.setFunc(3),ne(!1),ce(1),N(r.CULL_FACE),q(0);let X={[Mi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)X[103]=r.MIN,X[104]=r.MAX;else{let y=e.get("EXT_blend_minmax");y!==null&&(X[103]=y.MIN_EXT,X[104]=y.MAX_EXT)}let G={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[vo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[_o]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function q(y,Y,k,O,K,re,ie,_e,Me,we){if(y!==0){if(m===!1&&(N(r.BLEND),m=!0),y===5)K=K||Y,re=re||k,ie=ie||O,Y===f&&K===v||(r.blendEquationSeparate(X[Y],X[K]),f=Y,v=K),k===x&&O===_&&re===M&&ie===w||(r.blendFuncSeparate(G[k],G[O],G[re],G[ie]),x=k,_=O,M=re,w=ie),_e.equals(b)!==!1&&Me===T||(r.blendColor(_e.r,_e.g,_e.b,Me),b.copy(_e),T=Me),g=y,H=!1;else if(y!==g||we!==H){if(f===Mi&&v===Mi||(r.blendEquation(r.FUNC_ADD),f=Mi,v=Mi),we)switch(y){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}x=null,_=null,M=null,w=null,b.set(0,0,0),T=0,g=y,H=we}}else m===!0&&(I(r.BLEND),m=!1)}function ne(y){P!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),P=y)}function ce(y){y!==0?(N(r.CULL_FACE),y!==D&&(y===1?r.cullFace(r.BACK):y===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):I(r.CULL_FACE),D=y}function C(y,Y,k){y?(N(r.POLYGON_OFFSET_FILL),R===Y&&J===k||(r.polygonOffset(Y,k),R=Y,J=k)):I(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:N,disable:I,bindFramebuffer:function(y,Y){return h[y]!==Y&&(r.bindFramebuffer(y,Y),h[y]=Y,n&&(y===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Y),y===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Y)),!0)},drawBuffers:function(y,Y){let k=p,O=!1;if(y)if(k=u.get(Y),k===void 0&&(k=[],u.set(Y,k)),y.isWebGLMultipleRenderTargets){let K=y.texture;if(k.length!==K.length||k[0]!==r.COLOR_ATTACHMENT0){for(let re=0,ie=K.length;re<ie;re++)k[re]=r.COLOR_ATTACHMENT0+re;k.length=K.length,O=!0}}else k[0]!==r.COLOR_ATTACHMENT0&&(k[0]=r.COLOR_ATTACHMENT0,O=!0);else k[0]!==r.BACK&&(k[0]=r.BACK,O=!0);O&&(t.isWebGL2?r.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))},useProgram:function(y){return d!==y&&(r.useProgram(y),d=y,!0)},setBlending:q,setMaterial:function(y,Y){y.side===2?I(r.CULL_FACE):N(r.CULL_FACE);let k=y.side===an;Y&&(k=!k),ne(k),y.blending===1&&y.transparent===!1?q(0):q(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),i.setMask(y.colorWrite);let O=y.stencilWrite;a.setTest(O),O&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),C(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?N(r.SAMPLE_ALPHA_TO_COVERAGE):I(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ne,setCullFace:ce,setLineWidth:function(y){y!==ee&&(te&&r.lineWidth(y),ee=y)},setPolygonOffset:C,setScissorTest:function(y){y?N(r.SCISSOR_TEST):I(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+j-1),Q!==y&&(r.activeTexture(y),Q=y)},bindTexture:function(y,Y,k){k===void 0&&(k=Q===null?r.TEXTURE0+j-1:Q);let O=se[k];O===void 0&&(O={type:void 0,texture:void 0},se[k]=O),O.type===y&&O.texture===Y||(Q!==k&&(r.activeTexture(k),Q=k),r.bindTexture(y,Y||z[y]),O.type=y,O.texture=Y)},unbindTexture:function(){let y=se[Q];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,Y){let k=c.get(Y);k===void 0&&(k=new WeakMap,c.set(Y,k));let O=k.get(y);O===void 0&&(O=r.getUniformBlockIndex(Y,y.name),k.set(y,O))},uniformBlockBinding:function(y,Y){let k=c.get(Y).get(y);o.get(Y)!==k&&(r.uniformBlockBinding(Y,k,y.__bindingPointIndex),o.set(Y,k))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){Ae.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),Ae.copy(y))},viewport:function(y){S.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),S.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},Q=null,se={},h={},u=new WeakMap,p=[],d=null,m=!1,g=null,f=null,x=null,_=null,v=null,M=null,w=null,b=new rt(0,0,0),T=0,H=!1,P=null,D=null,ee=null,R=null,J=null,Ae.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function xp(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,E){return d?new OffscreenCanvas(S,E):Vr("canvas")}function g(S,E,z,N){let I=1;if((S.width>N||S.height>N)&&(I=N/Math.max(S.width,S.height)),I<1||E===!0){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let X=E?Vs:Math.floor,G=X(I*S.width),q=X(I*S.height);u===void 0&&(u=m(G,q));let ne=z?m(G,q):u;return ne.width=G,ne.height=q,ne.getContext("2d").drawImage(S,0,0,G,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+G+"x"+q+")."),ne}return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S}return S}function f(S){return So(S.width)&&So(S.height)}function x(S,E){return S.generateMipmaps&&E&&S.minFilter!==Gt&&S.minFilter!==pn}function _(S){r.generateMipmap(S)}function v(S,E,z,N,I=!1){if(o===!1)return E;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=E;if(E===r.RED&&(z===r.FLOAT&&(X=r.R32F),z===r.HALF_FLOAT&&(X=r.R16F),z===r.UNSIGNED_BYTE&&(X=r.R8)),E===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.R8UI),z===r.UNSIGNED_SHORT&&(X=r.R16UI),z===r.UNSIGNED_INT&&(X=r.R32UI),z===r.BYTE&&(X=r.R8I),z===r.SHORT&&(X=r.R16I),z===r.INT&&(X=r.R32I)),E===r.RG&&(z===r.FLOAT&&(X=r.RG32F),z===r.HALF_FLOAT&&(X=r.RG16F),z===r.UNSIGNED_BYTE&&(X=r.RG8)),E===r.RGBA){let G=I?Bs:pt.getTransfer(N);z===r.FLOAT&&(X=r.RGBA32F),z===r.HALF_FLOAT&&(X=r.RGBA16F),z===r.UNSIGNED_BYTE&&(X=G===vt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return X!==r.R16F&&X!==r.R32F&&X!==r.RG16F&&X!==r.RG32F&&X!==r.RGBA16F&&X!==r.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(S,E,z){return x(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Gt&&S.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function w(S){return S===Gt||S===Dl||S===Na?r.NEAREST:r.LINEAR}function b(S){let E=S.target;E.removeEventListener("dispose",b),(function(z){let N=n.get(z);if(N.__webglInit===void 0)return;let I=z.source,X=p.get(I);if(X){let G=X[N.__cacheKey];G.usedTimes--,G.usedTimes===0&&H(z),Object.keys(X).length===0&&p.delete(I)}n.remove(z)})(E),E.isVideoTexture&&h.delete(E)}function T(S){let E=S.target;E.removeEventListener("dispose",T),(function(z){let N=z.texture,I=n.get(z),X=n.get(N);if(X.__webglTexture!==void 0&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(I.__webglFramebuffer[G]))for(let q=0;q<I.__webglFramebuffer[G].length;q++)r.deleteFramebuffer(I.__webglFramebuffer[G][q]);else r.deleteFramebuffer(I.__webglFramebuffer[G]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[G])}else{if(Array.isArray(I.__webglFramebuffer))for(let G=0;G<I.__webglFramebuffer.length;G++)r.deleteFramebuffer(I.__webglFramebuffer[G]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let G=0;G<I.__webglColorRenderbuffer.length;G++)I.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[G]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let G=0,q=N.length;G<q;G++){let ne=n.get(N[G]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(N[G])}n.remove(N),n.remove(z)})(E)}function H(S){let E=n.get(S);r.deleteTexture(E.__webglTexture);let z=S.source;delete p.get(z)[E.__cacheKey],a.memory.textures--}let P=0;function D(S,E){let z=n.get(S);if(S.isVideoTexture&&(function(N){let I=a.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())})(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void de(z,S,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+E)}let ee={[kr]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[yo]:r.MIRRORED_REPEAT},R={[Gt]:r.NEAREST,[Dl]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[Lu]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},J={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function j(S,E,z){if(z?(r.texParameteri(S,r.TEXTURE_WRAP_S,ee[E.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,ee[E.wrapT]),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,ee[E.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,R[E.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,R[E.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===qn&&E.wrapT===qn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Gt&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Gt||E.minFilter!==Na&&E.minFilter!==sr||E.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function te(S,E){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",b));let N=E.source,I=p.get(N);I===void 0&&(I={},p.set(N,I));let X=(function(G){let q=[];return q.push(G.wrapS),q.push(G.wrapT),q.push(G.wrapR||0),q.push(G.magFilter),q.push(G.minFilter),q.push(G.anisotropy),q.push(G.internalFormat),q.push(G.format),q.push(G.type),q.push(G.generateMipmaps),q.push(G.premultiplyAlpha),q.push(G.flipY),q.push(G.unpackAlignment),q.push(G.colorSpace),q.join()})(E);if(X!==S.__cacheKey){I[X]===void 0&&(I[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),I[X].usedTimes++;let G=I[S.__cacheKey];G!==void 0&&(I[S.__cacheKey].usedTimes--,G.usedTimes===0&&H(E)),S.__cacheKey=X,S.__webglTexture=I[X].texture}return z}function de(S,E,z){let N=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=r.TEXTURE_3D);let I=te(S,E),X=E.source;t.bindTexture(N,S.__webglTexture,r.TEXTURE0+z);let G=n.get(X);if(X.version!==G.__version||I===!0){t.activeTexture(r.TEXTURE0+z);let q=pt.getPrimaries(pt.workingColorSpace),ne=E.colorSpace===_n?null:pt.getPrimaries(E.colorSpace),ce=E.colorSpace===_n||q===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let C=(function(Re){return!o&&(Re.wrapS!==qn||Re.wrapT!==qn||Re.minFilter!==Gt&&Re.minFilter!==pn)})(E)&&f(E.image)===!1,y=g(E.image,C,!1,i.maxTextureSize);y=Ae(E,y);let Y=f(y)||o,k=s.convert(E.format,E.colorSpace),O,K=s.convert(E.type),re=v(E.internalFormat,k,K,E.colorSpace,E.isVideoTexture);j(N,E,Y);let ie=E.mipmaps,_e=o&&E.isVideoTexture!==!0&&re!==fh,Me=G.__version===void 0||I===!0,we=M(E,y,Y);if(E.isDepthTexture)re=r.DEPTH_COMPONENT,o?re=E.type===Dn?r.DEPTH_COMPONENT32F:E.type===Un?r.DEPTH_COMPONENT24:E.type===Ei?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ti&&re===r.DEPTH_COMPONENT&&E.type!==vl&&E.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Un,K=s.convert(E.type)),E.format===ar&&re===r.DEPTH_COMPONENT&&(re=r.DEPTH_STENCIL,E.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ei,K=s.convert(E.type))),Me&&(_e?t.texStorage2D(r.TEXTURE_2D,1,re,y.width,y.height):t.texImage2D(r.TEXTURE_2D,0,re,y.width,y.height,0,k,K,null));else if(E.isDataTexture)if(ie.length>0&&Y){_e&&Me&&t.texStorage2D(r.TEXTURE_2D,we,re,ie[0].width,ie[0].height);for(let Re=0,Le=ie.length;Re<Le;Re++)O=ie[Re],_e?t.texSubImage2D(r.TEXTURE_2D,Re,0,0,O.width,O.height,k,K,O.data):t.texImage2D(r.TEXTURE_2D,Re,re,O.width,O.height,0,k,K,O.data);E.generateMipmaps=!1}else _e?(Me&&t.texStorage2D(r.TEXTURE_2D,we,re,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,k,K,y.data)):t.texImage2D(r.TEXTURE_2D,0,re,y.width,y.height,0,k,K,y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_e&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,re,ie[0].width,ie[0].height,y.depth);for(let Re=0,Le=ie.length;Re<Le;Re++)O=ie[Re],E.format!==vn?k!==null?_e?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,O.width,O.height,y.depth,k,O.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,re,O.width,O.height,y.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,O.width,O.height,y.depth,k,K,O.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Re,re,O.width,O.height,y.depth,0,k,K,O.data)}else{_e&&Me&&t.texStorage2D(r.TEXTURE_2D,we,re,ie[0].width,ie[0].height);for(let Re=0,Le=ie.length;Re<Le;Re++)O=ie[Re],E.format!==vn?k!==null?_e?t.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,O.width,O.height,k,O.data):t.compressedTexImage2D(r.TEXTURE_2D,Re,re,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(r.TEXTURE_2D,Re,0,0,O.width,O.height,k,K,O.data):t.texImage2D(r.TEXTURE_2D,Re,re,O.width,O.height,0,k,K,O.data)}else if(E.isDataArrayTexture)_e?(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,re,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,y.width,y.height,y.depth,k,K,y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,y.width,y.height,y.depth,0,k,K,y.data);else if(E.isData3DTexture)_e?(Me&&t.texStorage3D(r.TEXTURE_3D,we,re,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,y.width,y.height,y.depth,k,K,y.data)):t.texImage3D(r.TEXTURE_3D,0,re,y.width,y.height,y.depth,0,k,K,y.data);else if(E.isFramebufferTexture){if(Me)if(_e)t.texStorage2D(r.TEXTURE_2D,we,re,y.width,y.height);else{let Re=y.width,Le=y.height;for(let ke=0;ke<we;ke++)t.texImage2D(r.TEXTURE_2D,ke,re,Re,Le,0,k,K,null),Re>>=1,Le>>=1}}else if(ie.length>0&&Y){_e&&Me&&t.texStorage2D(r.TEXTURE_2D,we,re,ie[0].width,ie[0].height);for(let Re=0,Le=ie.length;Re<Le;Re++)O=ie[Re],_e?t.texSubImage2D(r.TEXTURE_2D,Re,0,0,k,K,O):t.texImage2D(r.TEXTURE_2D,Re,re,k,K,O);E.generateMipmaps=!1}else _e?(Me&&t.texStorage2D(r.TEXTURE_2D,we,re,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,k,K,y)):t.texImage2D(r.TEXTURE_2D,0,re,k,K,y);x(E,Y)&&_(N),G.__version=X.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ae(S,E,z,N,I,X){let G=s.convert(z.format,z.colorSpace),q=s.convert(z.type),ne=v(z.internalFormat,G,q,z.colorSpace);if(!n.get(E).__hasExternalTextures){let ce=Math.max(1,E.width>>X),C=Math.max(1,E.height>>X);I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?t.texImage3D(I,X,ne,ce,C,E.depth,0,G,q,null):t.texImage2D(I,X,ne,ce,C,0,G,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),W(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,N,I,n.get(z).__webglTexture,0,L(E)):(I===r.TEXTURE_2D||I>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,N,I,n.get(z).__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(S,E,z){if(r.bindRenderbuffer(r.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let N=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||W(E)){let I=E.depthTexture;I&&I.isDepthTexture&&(I.type===Dn?N=r.DEPTH_COMPONENT32F:I.type===Un&&(N=r.DEPTH_COMPONENT24));let X=L(E);W(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,N,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,X,N,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,N,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){let N=L(E);z&&W(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,r.DEPTH24_STENCIL8,E.width,E.height):W(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{let N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let I=0;I<N.length;I++){let X=N[I],G=s.convert(X.format,X.colorSpace),q=s.convert(X.type),ne=v(X.internalFormat,G,q,X.colorSpace),ce=L(E);z&&W(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ne,E.width,E.height):W(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ne,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ne,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(S){let E=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),D(I.depthTexture,0);let X=n.get(I.depthTexture).__webglTexture,G=L(I);if(I.depthTexture.format===Ti)W(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else{if(I.depthTexture.format!==ar)throw new Error("Unknown depthTexture format");W(I)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0)}})(E.__webglFramebuffer,S)}else if(z){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]=r.createRenderbuffer(),Q(E.__webglDepthbuffer[N],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Q(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function L(S){return Math.min(i.maxSamples,S.samples)}function W(S){let E=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(S,E){let z=S.colorSpace,N=S.format,I=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Mo||z!==Zn&&z!==_n&&(pt.getTransfer(z)===vt?o===!1?e.has("EXT_sRGB")===!0&&N===vn?(S.format=Mo,S.minFilter=pn,S.generateMipmaps=!1):E=Hs.sRGBToLinear(E):N===vn&&I===Yn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=function(){let S=P;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),P+=1,S},this.resetTextureUnits=function(){P=0},this.setTexture2D=D,this.setTexture2DArray=function(S,E){let z=n.get(S);S.version>0&&z.__version!==S.version?de(z,S,E):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(S,E){let z=n.get(S);S.version>0&&z.__version!==S.version?de(z,S,E):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(S,E){let z=n.get(S);S.version>0&&z.__version!==S.version?(function(N,I,X){if(I.image.length!==6)return;let G=te(N,I),q=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+X);let ne=n.get(q);if(q.version!==ne.__version||G===!0){t.activeTexture(r.TEXTURE0+X);let ce=pt.getPrimaries(pt.workingColorSpace),C=I.colorSpace===_n?null:pt.getPrimaries(I.colorSpace),y=I.colorSpace===_n||ce===C?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,y);let Y=I.isCompressedTexture||I.image[0].isCompressedTexture,k=I.image[0]&&I.image[0].isDataTexture,O=[];for(let Ue=0;Ue<6;Ue++)O[Ue]=Y||k?k?I.image[Ue].image:I.image[Ue]:g(I.image[Ue],!1,!0,i.maxCubemapSize),O[Ue]=Ae(I,O[Ue]);let K=O[0],re=f(K)||o,ie=s.convert(I.format,I.colorSpace),_e=s.convert(I.type),Me=v(I.internalFormat,ie,_e,I.colorSpace),we=o&&I.isVideoTexture!==!0,Re=ne.__version===void 0||G===!0,Le,ke=M(I,K,re);if(j(r.TEXTURE_CUBE_MAP,I,re),Y){we&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,Me,K.width,K.height);for(let Ue=0;Ue<6;Ue++){Le=O[Ue].mipmaps;for(let Ge=0;Ge<Le.length;Ge++){let Xe=Le[Ge];I.format!==vn?ie!==null?we?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge,0,0,Xe.width,Xe.height,ie,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge,Me,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge,0,0,Xe.width,Xe.height,ie,_e,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge,Me,Xe.width,Xe.height,0,ie,_e,Xe.data)}}}else{Le=I.mipmaps,we&&Re&&(Le.length>0&&ke++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,Me,O[0].width,O[0].height));for(let Ue=0;Ue<6;Ue++)if(k){we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,O[Ue].width,O[Ue].height,ie,_e,O[Ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,O[Ue].width,O[Ue].height,0,ie,_e,O[Ue].data);for(let Ge=0;Ge<Le.length;Ge++){let Xe=Le[Ge].image[Ue].image;we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge+1,0,0,Xe.width,Xe.height,ie,_e,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge+1,Me,Xe.width,Xe.height,0,ie,_e,Xe.data)}}else{we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,ie,_e,O[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,ie,_e,O[Ue]);for(let Ge=0;Ge<Le.length;Ge++){let Xe=Le[Ge];we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge+1,0,0,ie,_e,Xe.image[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge+1,Me,ie,_e,Xe.image[Ue])}}}x(I,re)&&_(r.TEXTURE_CUBE_MAP),ne.__version=q.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version})(z,S,E):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(S,E,z){let N=n.get(S);E!==void 0&&ae(N.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&se(S)},this.setupRenderTarget=function(S){let E=S.texture,z=n.get(S),N=n.get(E);S.addEventListener("dispose",T),S.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=r.createTexture()),N.__version=E.version,a.memory.textures++);let I=S.isWebGLCubeRenderTarget===!0,X=S.isWebGLMultipleRenderTargets===!0,G=f(S)||o;if(I){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let ne=0;ne<E.mipmaps.length;ne++)z.__webglFramebuffer[q][ne]=r.createFramebuffer()}else z.__webglFramebuffer[q]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)z.__webglFramebuffer[q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(X)if(i.drawBuffers){let q=S.texture;for(let ne=0,ce=q.length;ne<ce;ne++){let C=n.get(q[ne]);C.__webglTexture===void 0&&(C.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&W(S)===!1){let q=X?E:[E];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<q.length;ne++){let ce=q[ne];z.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);let C=s.convert(ce.format,ce.colorSpace),y=s.convert(ce.type),Y=v(ce.internalFormat,C,y,ce.colorSpace,S.isXRRenderTarget===!0),k=L(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,k,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture),j(r.TEXTURE_CUBE_MAP,E,G);for(let q=0;q<6;q++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ae(z.__webglFramebuffer[q][ne],S,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ne);else ae(z.__webglFramebuffer[q],S,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);x(E,G)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let q=S.texture;for(let ne=0,ce=q.length;ne<ce;ne++){let C=q[ne],y=n.get(C);t.bindTexture(r.TEXTURE_2D,y.__webglTexture),j(r.TEXTURE_2D,C,G),ae(z.__webglFramebuffer,S,C,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),x(C,G)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?q=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,N.__webglTexture),j(q,E,G),o&&E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)ae(z.__webglFramebuffer[ne],S,E,r.COLOR_ATTACHMENT0,q,ne);else ae(z.__webglFramebuffer,S,E,r.COLOR_ATTACHMENT0,q,0);x(E,G)&&_(q),t.unbindTexture()}S.depthBuffer&&se(S)},this.updateRenderTargetMipmap=function(S){let E=f(S)||o,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let N=0,I=z.length;N<I;N++){let X=z[N];if(x(X,E)){let G=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,q=n.get(X).__webglTexture;t.bindTexture(G,q),_(G),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(o&&S.samples>0&&W(S)===!1){let E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,N=S.height,I=r.COLOR_BUFFER_BIT,X=[],G=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=n.get(S),ne=S.isWebGLMultipleRenderTargets===!0;if(ne)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){X.push(r.COLOR_ATTACHMENT0+ce),S.depthBuffer&&X.push(G);let C=q.__ignoreDepthValues!==void 0&&q.__ignoreDepthValues;if(C===!1&&(S.depthBuffer&&(I|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(I|=r.STENCIL_BUFFER_BIT)),ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,q.__webglColorRenderbuffer[ce]),C===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[G]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[G])),ne){let y=n.get(E[ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,y,0)}r.blitFramebuffer(0,0,z,N,0,0,z,N,I,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);let C=n.get(E[ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,C,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=W}function yp(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=pt.getTransfer(s);if(i===Yn)return r.UNSIGNED_BYTE;if(i===ch)return r.UNSIGNED_SHORT_4_4_4_4;if(i===hh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===vl)return r.UNSIGNED_SHORT;if(i===lh)return r.INT;if(i===Un)return r.UNSIGNED_INT;if(i===Dn)return r.FLOAT;if(i===Ri)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===vn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Ti)return r.DEPTH_COMPONENT;if(i===ar)return r.DEPTH_STENCIL;if(i===Mo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===uh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===dh)return r.RG_INTEGER;if(i===ph)return r.RGBA_INTEGER;if(i===Oa||i===Fa||i===Ba||i===za)if(o===vt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Nl||i===Ol||i===Fl||i===Bl){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===fh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===zl||i===kl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===zl)return o===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===jl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===Ql||i===$l||i===ec){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Gl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return o===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ka||i===tc||i===nc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===ka)return o===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===ic||i===rc||i===sc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Ei?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var Oo=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ri=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,n),x=this._getHandJoint(l,g);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=f.radius),x.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&p>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fo=class extends li{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,m=null,g=t.getContextAttributes(),f=null,x=null,_=[],v=[],M=new Ie,w=null,b=new Qt;b.layers.enable(1),b.viewport=new Pt;let T=new Qt;T.layers.enable(2),T.viewport=new Pt;let H=[b,T],P=new Oo;P.layers.enable(1),P.layers.enable(2);let D=null,ee=null;function R(L){let W=v.indexOf(L.inputSource);if(W===-1)return;let Ae=_[W];Ae!==void 0&&(Ae.update(L.inputSource,L.frame,l||a),Ae.dispatchEvent({type:L.type,data:L.inputSource}))}function J(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",j);for(let L=0;L<_.length;L++){let W=v[L];W!==null&&(v[L]=null,_[L].disconnect(W))}D=null,ee=null,e.setRenderTarget(f),d=null,p=null,u=null,i=null,x=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function j(L){for(let W=0;W<L.removed.length;W++){let Ae=L.removed[W],S=v.indexOf(Ae);S>=0&&(v[S]=null,_[S].disconnect(Ae))}for(let W=0;W<L.added.length;W++){let Ae=L.added[W],S=v.indexOf(Ae);if(S===-1){for(let z=0;z<_.length;z++){if(z>=v.length){v.push(Ae),S=z;break}if(v[z]===null){v[z]=Ae,S=z;break}}if(S===-1)break}let E=_[S];E&&E.connect(Ae)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=_[L];return W===void 0&&(W=new Nr,_[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=_[L];return W===void 0&&(W=new Nr,_[L]=W),W.getGripSpace()},this.getHand=function(L){let W=_[L];return W===void 0&&(W=new Nr,_[L]=W),W.getHandSpace()},this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",J),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Rn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,Ae=null,S=null;g.depth&&(S=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=g.stencil?ar:Ti,Ae=g.stencil?Ei:Un);let E={colorFormat:t.RGBA8,depthFormat:S,scaleFactor:s};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(E),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Rn(p.textureWidth,p.textureHeight,{format:vn,type:Yn,depthTexture:new fr(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=p.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let te=new V,de=new V;function ae(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;P.near=T.near=b.near=L.near,P.far=T.far=b.far=L.far,D===P.near&&ee===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,ee=P.far);let W=L.parent,Ae=P.cameras;ae(P,W);for(let S=0;S<Ae.length;S++)ae(Ae[S],W);Ae.length===2?(function(S,E,z){te.setFromMatrixPosition(E.matrixWorld),de.setFromMatrixPosition(z.matrixWorld);let N=te.distanceTo(de),I=E.projectionMatrix.elements,X=z.projectionMatrix.elements,G=I[14]/(I[10]-1),q=I[14]/(I[10]+1),ne=(I[9]+1)/I[5],ce=(I[9]-1)/I[5],C=(I[8]-1)/I[0],y=(X[8]+1)/X[0],Y=G*C,k=G*y,O=N/(-C+y),K=O*-C;E.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(K),S.translateZ(O),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();let re=G+O,ie=q+O,_e=Y-K,Me=k+(N-K),we=ne*q/ie*re,Re=ce*q/ie*re;S.projectionMatrix.makePerspective(_e,Me,we,Re,re,ie),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()})(P,b,T):P.projectionMatrix.copy(b.projectionMatrix),(function(S,E,z){z===null?S.matrix.copy(E.matrixWorld):(S.matrix.copy(z.matrixWorld),S.matrix.invert(),S.matrix.multiply(E.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(E.projectionMatrix),S.projectionMatrixInverse.copy(E.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*Gr*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(L,P,W)},this.getCamera=function(){return P},this.getFoveation=function(){if(p!==null||d!==null)return c},this.setFoveation=function(L){c=L,p!==null&&(p.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let Q=null,se=new yh;se.setAnimationLoop((function(L,W){if(h=W.getViewerPose(l||a),m=W,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let S=!1;Ae.length!==P.cameras.length&&(P.cameras.length=0,S=!0);for(let E=0;E<Ae.length;E++){let z=Ae[E],N=null;if(d!==null)N=d.getViewport(z);else{let X=u.getViewSubImage(p,z);N=X.viewport,E===0&&(e.setRenderTargetTextures(x,X.colorTexture,p.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(x))}let I=H[E];I===void 0&&(I=new Qt,I.layers.enable(E),I.viewport=new Pt,H[E]=I),I.matrix.fromArray(z.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(z.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(N.x,N.y,N.width,N.height),E===0&&(P.matrix.copy(I.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),S===!0&&P.cameras.push(I)}}for(let Ae=0;Ae<_.length;Ae++){let S=v[Ae],E=_[Ae];S!==null&&E!==void 0&&E.update(S,W,l||a)}Q&&Q(L,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null})),this.setAnimationLoop=function(L){Q=L},this.dispose=function(){}}};function bp(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===an&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===an&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,xh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Sp(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,p,d,m){let g=u.value,f=p+"_"+d;if(m[f]===void 0)return m[f]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=m[f];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return m[f]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function l(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(i[p.id]),delete i[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;n.uniformBlockBinding(u,d)},update:function(u,p){let d=i[u.id];d===void 0&&((function(f){let x=f.uniforms,_=0,v=16;for(let w=0,b=x.length;w<b;w++){let T=Array.isArray(x[w])?x[w]:[x[w]];for(let H=0,P=T.length;H<P;H++){let D=T[H],ee=Array.isArray(D.value)?D.value:[D.value];for(let R=0,J=ee.length;R<J;R++){let j=l(ee[R]),te=_%v;te!==0&&v-te<j.boundary&&(_+=v-te),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=j.storage}}}let M=_%v;M>0&&(_+=v-M),f.__size=_,f.__cache={}})(u),d=(function(f){let x=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=x;let _=r.createBuffer(),v=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_})(u),i[u.id]=d,u.addEventListener("dispose",h));let m=p.program;n.updateUBOMapping(u,m);let g=e.render.frame;s[u.id]!==g&&((function(f){let x=i[f.id],_=f.uniforms,v=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let M=0,w=_.length;M<w;M++){let b=Array.isArray(_[M])?_[M]:[_[M]];for(let T=0,H=b.length;T<H;T++){let P=b[T];if(c(P,M,T,v)===!0){let D=P.__offset,ee=Array.isArray(P.value)?P.value:[P.value],R=0;for(let J=0;J<ee.length;J++){let j=ee[J],te=l(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,D+R,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,R),R+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Wr=class{constructor(e={}){let{canvas:t=Iu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,p;this.isWebGLRenderer=!0,p=n!==null?n.getContextAttributes().alpha:a;let d=new Uint32Array(4),m=new Int32Array(4),g=null,f=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;let v=this,M=!1,w=0,b=0,T=null,H=-1,P=null,D=new Pt,ee=new Pt,R=null,J=new rt(0),j=0,te=t.width,de=t.height,ae=1,Q=null,se=null,L=new Pt(0,0,te,de),W=new Pt(0,0,te,de),Ae=!1,S=new hr,E=!1,z=!1,N=null,I=new tt,X=new Ie,G=new V,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return T===null?ae:1}let ce,C,y,Y,k,O,K,re,ie,_e,Me,we,Re,Le,ke,Ue,Ge,Xe,Je,ut,_t,ht,dt,Lt,le=n;function Ve(U,oe){for(let me=0;me<U.length;me++){let be=U[me],ve=t.getContext(be,oe);if(ve!==null)return ve}return null}try{let U={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",Yt,!1),t.addEventListener("webglcontextcreationerror",zt,!1),le===null){let oe=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&oe.shift(),le=Ve(oe,U),le===null)throw Ve(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&le instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),le.getShaderPrecisionFormat===void 0&&(le.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}function ot(){ce=new rd(le),C=new ed(le,ce,e),ce.init(C),ht=new yp(le,ce,C),y=new _p(le,ce,C),Y=new od(le),k=new cp,O=new xp(le,ce,y,k,C,ht,Y),K=new nd(v),re=new id(v),ie=new Ju(le,C),dt=new Qu(le,ce,ie,C),_e=new sd(le,ie,Y,dt),Me=new ud(le,_e,ie,Y),Je=new hd(le,C,O),Ue=new td(k),we=new lp(v,K,re,ce,C,dt,Ue),Re=new bp(v,k),Le=new up,ke=new gp(ce,C),Xe=new Ku(v,K,re,y,Me,p,c),Ge=new vp(v,Me,C),Lt=new Sp(le,Y,C,y),ut=new $u(le,ce,Y,C),_t=new ad(le,ce,Y,C),Y.programs=we.programs,v.capabilities=C,v.extensions=ce,v.properties=k,v.renderLists=Le,v.shadowMap=Ge,v.state=y,v.info=Y}ot();let lt=new Fo(v,le);function Qe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let U=Y.autoReset,oe=Ge.enabled,me=Ge.autoUpdate,be=Ge.needsUpdate,ve=Ge.type;ot(),Y.autoReset=U,Ge.enabled=oe,Ge.autoUpdate=me,Ge.needsUpdate=be,Ge.type=ve}function zt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pn(U){let oe=U.target;oe.removeEventListener("dispose",Pn),(function(me){(function(be){let ve=k.get(be).programs;ve!==void 0&&(ve.forEach((function(Fe){we.releaseProgram(Fe)})),be.isShaderMaterial&&we.releaseShaderCache(be))})(me),k.remove(me)})(oe)}function cn(U,oe,me){U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,St(U,oe,me),U.side=oi,U.needsUpdate=!0,St(U,oe,me),U.side=2):St(U,oe,me)}this.xr=lt,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){let U=ce.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=ce.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(U){U!==void 0&&(ae=U,this.setSize(te,de,!1))},this.getSize=function(U){return U.set(te,de)},this.setSize=function(U,oe,me=!0){lt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(te=U,de=oe,t.width=Math.floor(U*ae),t.height=Math.floor(oe*ae),me===!0&&(t.style.width=U+"px",t.style.height=oe+"px"),this.setViewport(0,0,U,oe))},this.getDrawingBufferSize=function(U){return U.set(te*ae,de*ae).floor()},this.setDrawingBufferSize=function(U,oe,me){te=U,de=oe,ae=me,t.width=Math.floor(U*me),t.height=Math.floor(oe*me),this.setViewport(0,0,U,oe)},this.getCurrentViewport=function(U){return U.copy(D)},this.getViewport=function(U){return U.copy(L)},this.setViewport=function(U,oe,me,be){U.isVector4?L.set(U.x,U.y,U.z,U.w):L.set(U,oe,me,be),y.viewport(D.copy(L).multiplyScalar(ae).floor())},this.getScissor=function(U){return U.copy(W)},this.setScissor=function(U,oe,me,be){U.isVector4?W.set(U.x,U.y,U.z,U.w):W.set(U,oe,me,be),y.scissor(ee.copy(W).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(U){y.setScissorTest(Ae=U)},this.setOpaqueSort=function(U){Q=U},this.setTransparentSort=function(U){se=U},this.getClearColor=function(U){return U.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(U=!0,oe=!0,me=!0){let be=0;if(U){let ve=!1;if(T!==null){let Fe=T.texture.format;ve=Fe===ph||Fe===dh||Fe===uh}if(ve){let Fe=T.texture.type,je=Fe===Yn||Fe===Un||Fe===vl||Fe===Ei||Fe===ch||Fe===hh,qe=Xe.getClearColor(),B=Xe.getClearAlpha(),F=qe.r,pe=qe.g,xe=qe.b;je?(d[0]=F,d[1]=pe,d[2]=xe,d[3]=B,le.clearBufferuiv(le.COLOR,0,d)):(m[0]=F,m[1]=pe,m[2]=xe,m[3]=B,le.clearBufferiv(le.COLOR,0,m))}else be|=le.COLOR_BUFFER_BIT}oe&&(be|=le.DEPTH_BUFFER_BIT),me&&(be|=le.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le.clear(be)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",Yt,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),Le.dispose(),ke.dispose(),k.dispose(),K.dispose(),re.dispose(),Me.dispose(),dt.dispose(),Lt.dispose(),we.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",nn),lt.removeEventListener("sessionend",Zt),N&&(N.dispose(),N=null),It.stop()},this.renderBufferDirect=function(U,oe,me,be,ve,Fe){oe===null&&(oe=q);let je=ve.isMesh&&ve.matrixWorld.determinant()<0,qe=(function(Se,Ne,Oe,Ee,De){Ne.isScene!==!0&&(Ne=q),O.resetTextureUnits();let He=Ne.fog,Be=Ee.isMeshStandardMaterial?Ne.environment:null,We=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zn,$e=(Ee.isMeshStandardMaterial?re:K).get(Ee.envMap||Be),nt=Ee.vertexColors===!0&&!!Oe.attributes.color&&Oe.attributes.color.itemSize===4,yt=!!Oe.attributes.tangent&&(!!Ee.normalMap||Ee.anisotropy>0),Mt=!!Oe.morphAttributes.position,A=!!Oe.morphAttributes.normal,Z=!!Oe.morphAttributes.color,ue=si;Ee.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(ue=v.toneMapping));let ge=Oe.morphAttributes.position||Oe.morphAttributes.normal||Oe.morphAttributes.color,ye=ge!==void 0?ge.length:0,Te=k.get(Ee),Ze=f.state.lights;if(E===!0&&(z===!0||Se!==P)){let mn=Se===P&&Ee.id===H;Ue.setState(Ee,Se,mn)}let Ye=!1;Ee.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Ze.state.version||Te.outputColorSpace!==We||De.isBatchedMesh&&Te.batching===!1?Ye=!0:De.isBatchedMesh||Te.batching!==!0?De.isInstancedMesh&&Te.instancing===!1?Ye=!0:De.isInstancedMesh||Te.instancing!==!0?De.isSkinnedMesh&&Te.skinning===!1?Ye=!0:De.isSkinnedMesh||Te.skinning!==!0?De.isInstancedMesh&&Te.instancingColor===!0&&De.instanceColor===null||De.isInstancedMesh&&Te.instancingColor===!1&&De.instanceColor!==null||Te.envMap!==$e||Ee.fog===!0&&Te.fog!==He?Ye=!0:Te.numClippingPlanes===void 0||Te.numClippingPlanes===Ue.numPlanes&&Te.numIntersection===Ue.numIntersection?(Te.vertexAlphas!==nt||Te.vertexTangents!==yt||Te.morphTargets!==Mt||Te.morphNormals!==A||Te.morphColors!==Z||Te.toneMapping!==ue||C.isWebGL2===!0&&Te.morphTargetsCount!==ye)&&(Ye=!0):Ye=!0:Ye=!0:Ye=!0:Ye=!0:(Ye=!0,Te.__version=Ee.version);let et=Te.currentProgram;Ye===!0&&(et=St(Ee,Ne,De));let kt=!1,Ht=!1,fn=!1,gt=et.getUniforms(),hn=Te.uniforms;if(y.useProgram(et.program)&&(kt=!0,Ht=!0,fn=!0),Ee.id!==H&&(H=Ee.id,Ht=!0),kt||P!==Se){gt.setValue(le,"projectionMatrix",Se.projectionMatrix),gt.setValue(le,"viewMatrix",Se.matrixWorldInverse);let mn=gt.map.cameraPosition;mn!==void 0&&mn.setValue(le,G.setFromMatrixPosition(Se.matrixWorld)),C.logarithmicDepthBuffer&&gt.setValue(le,"logDepthBufFC",2/(Math.log(Se.far+1)/Math.LN2)),(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial)&&gt.setValue(le,"isOrthographic",Se.isOrthographicCamera===!0),P!==Se&&(P=Se,Ht=!0,fn=!0)}if(De.isSkinnedMesh){gt.setOptional(le,De,"bindMatrix"),gt.setOptional(le,De,"bindMatrixInverse");let mn=De.skeleton;mn&&(C.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),gt.setValue(le,"boneTexture",mn.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}De.isBatchedMesh&&(gt.setOptional(le,De,"batchingTexture"),gt.setValue(le,"batchingTexture",De._matricesTexture,O));let Ni=Oe.morphAttributes;(Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0&&C.isWebGL2===!0)&&Je.update(De,Oe,et),(Ht||Te.receiveShadow!==De.receiveShadow)&&(Te.receiveShadow=De.receiveShadow,gt.setValue(le,"receiveShadow",De.receiveShadow)),Ee.isMeshGouraudMaterial&&Ee.envMap!==null&&(hn.envMap.value=$e,hn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ht&&(gt.setValue(le,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&(Sn=fn,(Ln=hn).ambientLightColor.needsUpdate=Sn,Ln.lightProbe.needsUpdate=Sn,Ln.directionalLights.needsUpdate=Sn,Ln.directionalLightShadows.needsUpdate=Sn,Ln.pointLights.needsUpdate=Sn,Ln.pointLightShadows.needsUpdate=Sn,Ln.spotLights.needsUpdate=Sn,Ln.spotLightShadows.needsUpdate=Sn,Ln.rectAreaLights.needsUpdate=Sn,Ln.hemisphereLights.needsUpdate=Sn),He&&Ee.fog===!0&&Re.refreshFogUniforms(hn,He),Re.refreshMaterialUniforms(hn,Ee,ae,de,N),nr.upload(le,wt(Te),hn,O));var Ln,Sn;if(Ee.isShaderMaterial&&Ee.uniformsNeedUpdate===!0&&(nr.upload(le,wt(Te),hn,O),Ee.uniformsNeedUpdate=!1),Ee.isSpriteMaterial&&gt.setValue(le,"center",De.center),gt.setValue(le,"modelViewMatrix",De.modelViewMatrix),gt.setValue(le,"normalMatrix",De.normalMatrix),gt.setValue(le,"modelMatrix",De.matrixWorld),Ee.isShaderMaterial||Ee.isRawShaderMaterial){let mn=Ee.uniformsGroups;for(let Da=0,bu=mn.length;Da<bu;Da++)if(C.isWebGL2){let Il=mn[Da];Lt.update(Il,et),Lt.bind(Il,et)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return et})(U,oe,me,be,ve);y.setMaterial(be,je);let B=me.index,F=1;if(be.wireframe===!0){if(B=_e.getWireframeAttribute(me),B===void 0)return;F=2}let pe=me.drawRange,xe=me.attributes.position,Ce=pe.start*F,Pe=(pe.start+pe.count)*F;Fe!==null&&(Ce=Math.max(Ce,Fe.start*F),Pe=Math.min(Pe,(Fe.start+Fe.count)*F)),B!==null?(Ce=Math.max(Ce,0),Pe=Math.min(Pe,B.count)):xe!=null&&(Ce=Math.max(Ce,0),Pe=Math.min(Pe,xe.count));let $=Pe-Ce;if($<0||$===1/0)return;let he;dt.setup(ve,be,qe,me,B);let fe=ut;if(B!==null&&(he=ie.get(B),fe=_t,fe.setIndex(he)),ve.isMesh)be.wireframe===!0?(y.setLineWidth(be.wireframeLinewidth*ne()),fe.setMode(le.LINES)):fe.setMode(le.TRIANGLES);else if(ve.isLine){let Se=be.linewidth;Se===void 0&&(Se=1),y.setLineWidth(Se*ne()),ve.isLineSegments?fe.setMode(le.LINES):ve.isLineLoop?fe.setMode(le.LINE_LOOP):fe.setMode(le.LINE_STRIP)}else ve.isPoints?fe.setMode(le.POINTS):ve.isSprite&&fe.setMode(le.TRIANGLES);if(ve.isBatchedMesh)fe.renderMultiDraw(ve._multiDrawStarts,ve._multiDrawCounts,ve._multiDrawCount);else if(ve.isInstancedMesh)fe.renderInstances(Ce,$,ve.count);else if(me.isInstancedBufferGeometry){let Se=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ne=Math.min(me.instanceCount,Se);fe.renderInstances(Ce,$,Ne)}else fe.render(Ce,$)},this.compile=function(U,oe,me=null){me===null&&(me=U),f=ke.get(me),f.init(),_.push(f),me.traverseVisible((function(ve){ve.isLight&&ve.layers.test(oe.layers)&&(f.pushLight(ve),ve.castShadow&&f.pushShadow(ve))})),U!==me&&U.traverseVisible((function(ve){ve.isLight&&ve.layers.test(oe.layers)&&(f.pushLight(ve),ve.castShadow&&f.pushShadow(ve))})),f.setupLights(v._useLegacyLights);let be=new Set;return U.traverse((function(ve){let Fe=ve.material;if(Fe)if(Array.isArray(Fe))for(let je=0;je<Fe.length;je++){let qe=Fe[je];cn(qe,me,ve),be.add(qe)}else cn(Fe,me,ve),be.add(Fe)})),_.pop(),f=null,be},this.compileAsync=function(U,oe,me=null){let be=this.compile(U,oe,me);return new Promise((ve=>{function Fe(){be.forEach((function(je){k.get(je).currentProgram.isReady()&&be.delete(je)})),be.size!==0?setTimeout(Fe,10):ve(U)}ce.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)}))};let Vt=null;function nn(){It.stop()}function Zt(){It.start()}let It=new yh;function ft(U,oe,me,be){if(U.visible===!1)return;if(U.layers.test(oe.layers)){if(U.isGroup)me=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(oe);else if(U.isLight)f.pushLight(U),U.castShadow&&f.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||S.intersectsSprite(U)){be&&G.setFromMatrixPosition(U.matrixWorld).applyMatrix4(I);let Fe=Me.update(U),je=U.material;je.visible&&g.push(U,Fe,je,me,G.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||S.intersectsObject(U))){let Fe=Me.update(U),je=U.material;if(be&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),G.copy(U.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),G.copy(Fe.boundingSphere.center)),G.applyMatrix4(U.matrixWorld).applyMatrix4(I)),Array.isArray(je)){let qe=Fe.groups;for(let B=0,F=qe.length;B<F;B++){let pe=qe[B],xe=je[pe.materialIndex];xe&&xe.visible&&g.push(U,Fe,xe,me,G.z,pe)}}else je.visible&&g.push(U,Fe,je,me,G.z,null)}}let ve=U.children;for(let Fe=0,je=ve.length;Fe<je;Fe++)ft(ve[Fe],oe,me,be)}function Ut(U,oe,me,be){let ve=U.opaque,Fe=U.transmissive,je=U.transparent;f.setupLightsView(me),E===!0&&Ue.setGlobalState(v.clippingPlanes,me),Fe.length>0&&(function(qe,B,F,pe){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let Ce=C.isWebGL2;N===null&&(N=new Rn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Ri:Yn,minFilter:sr,samples:Ce?4:0})),v.getDrawingBufferSize(X),Ce?N.setSize(X.x,X.y):N.setSize(Vs(X.x),Vs(X.y));let Pe=v.getRenderTarget();v.setRenderTarget(N),v.getClearColor(J),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();let $=v.toneMapping;v.toneMapping=si,mt(qe,F,pe),O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N);let he=!1;for(let fe=0,Se=B.length;fe<Se;fe++){let Ne=B[fe],Oe=Ne.object,Ee=Ne.geometry,De=Ne.material,He=Ne.group;if(De.side===2&&Oe.layers.test(pe.layers)){let Be=De.side;De.side=an,De.needsUpdate=!0,Rt(Oe,F,pe,Ee,De,He),De.side=Be,De.needsUpdate=!0,he=!0}}he===!0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),v.setRenderTarget(Pe),v.setClearColor(J,j),v.toneMapping=$})(ve,Fe,oe,me),be&&y.viewport(D.copy(be)),ve.length>0&&mt(ve,oe,me),Fe.length>0&&mt(Fe,oe,me),je.length>0&&mt(je,oe,me),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function mt(U,oe,me){let be=oe.isScene===!0?oe.overrideMaterial:null;for(let ve=0,Fe=U.length;ve<Fe;ve++){let je=U[ve],qe=je.object,B=je.geometry,F=be===null?je.material:be,pe=je.group;qe.layers.test(me.layers)&&Rt(qe,oe,me,B,F,pe)}}function Rt(U,oe,me,be,ve,Fe){U.onBeforeRender(v,oe,me,be,ve,Fe),U.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ve.onBeforeRender(v,oe,me,be,U,Fe),ve.transparent===!0&&ve.side===2&&ve.forceSinglePass===!1?(ve.side=an,ve.needsUpdate=!0,v.renderBufferDirect(me,oe,be,ve,U,Fe),ve.side=oi,ve.needsUpdate=!0,v.renderBufferDirect(me,oe,be,ve,U,Fe),ve.side=2):v.renderBufferDirect(me,oe,be,ve,U,Fe),U.onAfterRender(v,oe,me,be,ve,Fe)}function St(U,oe,me){oe.isScene!==!0&&(oe=q);let be=k.get(U),ve=f.state.lights,Fe=f.state.shadowsArray,je=ve.state.version,qe=we.getParameters(U,ve.state,Fe,oe,me),B=we.getProgramCacheKey(qe),F=be.programs;be.environment=U.isMeshStandardMaterial?oe.environment:null,be.fog=oe.fog,be.envMap=(U.isMeshStandardMaterial?re:K).get(U.envMap||be.environment),F===void 0&&(U.addEventListener("dispose",Pn),F=new Map,be.programs=F);let pe=F.get(B);if(pe!==void 0){if(be.currentProgram===pe&&be.lightsStateVersion===je)return rn(U,qe),pe}else qe.uniforms=we.getUniforms(U),U.onBuild(me,qe,v),U.onBeforeCompile(qe,v),pe=we.acquireProgram(qe,B),F.set(B,pe),be.uniforms=qe.uniforms;let xe=be.uniforms;return(U.isShaderMaterial||U.isRawShaderMaterial)&&U.clipping!==!0||(xe.clippingPlanes=Ue.uniform),rn(U,qe),be.needsLights=(function(Ce){return Ce.isMeshLambertMaterial||Ce.isMeshToonMaterial||Ce.isMeshPhongMaterial||Ce.isMeshStandardMaterial||Ce.isShadowMaterial||Ce.isShaderMaterial&&Ce.lights===!0})(U),be.lightsStateVersion=je,be.needsLights&&(xe.ambientLightColor.value=ve.state.ambient,xe.lightProbe.value=ve.state.probe,xe.directionalLights.value=ve.state.directional,xe.directionalLightShadows.value=ve.state.directionalShadow,xe.spotLights.value=ve.state.spot,xe.spotLightShadows.value=ve.state.spotShadow,xe.rectAreaLights.value=ve.state.rectArea,xe.ltc_1.value=ve.state.rectAreaLTC1,xe.ltc_2.value=ve.state.rectAreaLTC2,xe.pointLights.value=ve.state.point,xe.pointLightShadows.value=ve.state.pointShadow,xe.hemisphereLights.value=ve.state.hemi,xe.directionalShadowMap.value=ve.state.directionalShadowMap,xe.directionalShadowMatrix.value=ve.state.directionalShadowMatrix,xe.spotShadowMap.value=ve.state.spotShadowMap,xe.spotLightMatrix.value=ve.state.spotLightMatrix,xe.spotLightMap.value=ve.state.spotLightMap,xe.pointShadowMap.value=ve.state.pointShadowMap,xe.pointShadowMatrix.value=ve.state.pointShadowMatrix),be.currentProgram=pe,be.uniformsList=null,pe}function wt(U){if(U.uniformsList===null){let oe=U.currentProgram.getUniforms();U.uniformsList=nr.seqWithValue(oe.seq,U.uniforms)}return U.uniformsList}function rn(U,oe){let me=k.get(U);me.outputColorSpace=oe.outputColorSpace,me.batching=oe.batching,me.instancing=oe.instancing,me.instancingColor=oe.instancingColor,me.skinning=oe.skinning,me.morphTargets=oe.morphTargets,me.morphNormals=oe.morphNormals,me.morphColors=oe.morphColors,me.morphTargetsCount=oe.morphTargetsCount,me.numClippingPlanes=oe.numClippingPlanes,me.numIntersection=oe.numClipIntersection,me.vertexAlphas=oe.vertexAlphas,me.vertexTangents=oe.vertexTangents,me.toneMapping=oe.toneMapping}It.setAnimationLoop((function(U){Vt&&Vt(U)})),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(U){Vt=U,lt.setAnimationLoop(U),U===null?It.stop():It.start()},lt.addEventListener("sessionstart",nn),lt.addEventListener("sessionend",Zt),this.render=function(U,oe){if(oe!==void 0&&oe.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(oe),oe=lt.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,oe,T),f=ke.get(U,_.length),f.init(),_.push(f),I.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),S.setFromProjectionMatrix(I),z=this.localClippingEnabled,E=Ue.init(this.clippingPlanes,z),g=Le.get(U,x.length),g.init(),x.push(g),ft(U,oe,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Q,se),this.info.render.frame++,E===!0&&Ue.beginShadows();let me=f.state.shadowsArray;if(Ge.render(me,U,oe),E===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(g,U),f.setupLights(v._useLegacyLights),oe.isArrayCamera){let be=oe.cameras;for(let ve=0,Fe=be.length;ve<Fe;ve++){let je=be[ve];Ut(g,U,je,je.viewport)}}else Ut(g,U,oe);T!==null&&(O.updateMultisampleRenderTarget(T),O.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(v,U,oe),dt.resetDefaultState(),H=-1,P=null,_.pop(),f=_.length>0?_[_.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,oe,me){k.get(U.texture).__webglTexture=oe,k.get(U.depthTexture).__webglTexture=me;let be=k.get(U);be.__hasExternalTextures=!0,be.__hasExternalTextures&&(be.__autoAllocateDepthBuffer=me===void 0,be.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),be.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,oe){let me=k.get(U);me.__webglFramebuffer=oe,me.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(U,oe=0,me=0){T=U,w=oe,b=me;let be=!0,ve=null,Fe=!1,je=!1;if(U){let qe=k.get(U);qe.__useDefaultFramebuffer!==void 0?(y.bindFramebuffer(le.FRAMEBUFFER,null),be=!1):qe.__webglFramebuffer===void 0?O.setupRenderTarget(U):qe.__hasExternalTextures&&O.rebindTextures(U,k.get(U.texture).__webglTexture,k.get(U.depthTexture).__webglTexture);let B=U.texture;(B.isData3DTexture||B.isDataArrayTexture||B.isCompressedArrayTexture)&&(je=!0);let F=k.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(ve=Array.isArray(F[oe])?F[oe][me]:F[oe],Fe=!0):ve=C.isWebGL2&&U.samples>0&&O.useMultisampledRTT(U)===!1?k.get(U).__webglMultisampledFramebuffer:Array.isArray(F)?F[me]:F,D.copy(U.viewport),ee.copy(U.scissor),R=U.scissorTest}else D.copy(L).multiplyScalar(ae).floor(),ee.copy(W).multiplyScalar(ae).floor(),R=Ae;if(y.bindFramebuffer(le.FRAMEBUFFER,ve)&&C.drawBuffers&&be&&y.drawBuffers(U,ve),y.viewport(D),y.scissor(ee),y.setScissorTest(R),Fe){let qe=k.get(U.texture);le.framebufferTexture2D(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,le.TEXTURE_CUBE_MAP_POSITIVE_X+oe,qe.__webglTexture,me)}else if(je){let qe=k.get(U.texture),B=oe||0;le.framebufferTextureLayer(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,qe.__webglTexture,me||0,B)}H=-1},this.readRenderTargetPixels=function(U,oe,me,be,ve,Fe,je){if(!U||!U.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=k.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){y.bindFramebuffer(le.FRAMEBUFFER,qe);try{let B=U.texture,F=B.format,pe=B.type;if(F!==vn&&ht.convert(F)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let xe=pe===Ri&&(ce.has("EXT_color_buffer_half_float")||C.isWebGL2&&ce.has("EXT_color_buffer_float"));if(!(pe===Yn||ht.convert(pe)===le.getParameter(le.IMPLEMENTATION_COLOR_READ_TYPE)||pe===Dn&&(C.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float"))||xe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");oe>=0&&oe<=U.width-be&&me>=0&&me<=U.height-ve&&le.readPixels(oe,me,be,ve,ht.convert(F),ht.convert(pe),Fe)}finally{let B=T!==null?k.get(T).__webglFramebuffer:null;y.bindFramebuffer(le.FRAMEBUFFER,B)}}},this.copyFramebufferToTexture=function(U,oe,me=0){let be=Math.pow(2,-me),ve=Math.floor(oe.image.width*be),Fe=Math.floor(oe.image.height*be);O.setTexture2D(oe,0),le.copyTexSubImage2D(le.TEXTURE_2D,me,0,0,U.x,U.y,ve,Fe),y.unbindTexture()},this.copyTextureToTexture=function(U,oe,me,be=0){let ve=oe.image.width,Fe=oe.image.height,je=ht.convert(me.format),qe=ht.convert(me.type);O.setTexture2D(me,0),le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,me.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,me.unpackAlignment),oe.isDataTexture?le.texSubImage2D(le.TEXTURE_2D,be,U.x,U.y,ve,Fe,je,qe,oe.image.data):oe.isCompressedTexture?le.compressedTexSubImage2D(le.TEXTURE_2D,be,U.x,U.y,oe.mipmaps[0].width,oe.mipmaps[0].height,je,oe.mipmaps[0].data):le.texSubImage2D(le.TEXTURE_2D,be,U.x,U.y,je,qe,oe.image),be===0&&me.generateMipmaps&&le.generateMipmap(le.TEXTURE_2D),y.unbindTexture()},this.copyTextureToTexture3D=function(U,oe,me,be,ve=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Fe=U.max.x-U.min.x+1,je=U.max.y-U.min.y+1,qe=U.max.z-U.min.z+1,B=ht.convert(be.format),F=ht.convert(be.type),pe;if(be.isData3DTexture)O.setTexture3D(be,0),pe=le.TEXTURE_3D;else{if(!be.isDataArrayTexture&&!be.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");O.setTexture2DArray(be,0),pe=le.TEXTURE_2D_ARRAY}le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,be.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,be.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,be.unpackAlignment);let xe=le.getParameter(le.UNPACK_ROW_LENGTH),Ce=le.getParameter(le.UNPACK_IMAGE_HEIGHT),Pe=le.getParameter(le.UNPACK_SKIP_PIXELS),$=le.getParameter(le.UNPACK_SKIP_ROWS),he=le.getParameter(le.UNPACK_SKIP_IMAGES),fe=me.isCompressedTexture?me.mipmaps[ve]:me.image;le.pixelStorei(le.UNPACK_ROW_LENGTH,fe.width),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,fe.height),le.pixelStorei(le.UNPACK_SKIP_PIXELS,U.min.x),le.pixelStorei(le.UNPACK_SKIP_ROWS,U.min.y),le.pixelStorei(le.UNPACK_SKIP_IMAGES,U.min.z),me.isDataTexture||me.isData3DTexture?le.texSubImage3D(pe,ve,oe.x,oe.y,oe.z,Fe,je,qe,B,F,fe.data):me.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),le.compressedTexSubImage3D(pe,ve,oe.x,oe.y,oe.z,Fe,je,qe,B,fe.data)):le.texSubImage3D(pe,ve,oe.x,oe.y,oe.z,Fe,je,qe,B,F,fe),le.pixelStorei(le.UNPACK_ROW_LENGTH,xe),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,Ce),le.pixelStorei(le.UNPACK_SKIP_PIXELS,Pe),le.pixelStorei(le.UNPACK_SKIP_ROWS,$),le.pixelStorei(le.UNPACK_SKIP_IMAGES,he),ve===0&&be.generateMipmaps&&le.generateMipmap(pe),y.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?O.setTextureCube(U,0):U.isData3DTexture?O.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?O.setTexture2DArray(U,0):O.setTexture2D(U,0),y.unbindTexture()},this.resetState=function(){w=0,b=0,T=null,y.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Ai:mh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Dt:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Bo=class extends Wr{};Bo.prototype.isWebGL1Renderer=!0;var Qs=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ef=new V;var Tf=new V,Af=new V,Rf=new V,Cf=new Ie,Pf=new Ie,Lf=new tt,If=new V,Uf=new V,Df=new V,Nf=new Ie,Of=new Ie,Ff=new Ie;var Bf=new V,zf=new V;var kf=new V,Gf=new Pt,Vf=new Pt,Hf=new V,Wf=new tt,Xf=new V,jf=new Nn,qf=new tt,Yf=new lr;var $s=class extends on{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,p){super(null,a,o,c,l,h,i,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new tt,Jf=new tt;var Kf=new tt,Qf=new tt;var $f=new yn,em=new tt,tm=new sn,nm=new Nn;var zo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var im=new tt,rm=new tt,sm=new tt,am=new tt,om=new hr,lm=new yn,cm=new Nn,hm=new V,um=new zo,dm=new sn;var pm=new V,fm=new V,mm=new tt,gm=new lr,vm=new Nn;var _m=new V,xm=new V;var ym=new tt,Mm=new lr,bm=new Nn,Sm=new V;var ea=class extends on{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Ie:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,i=[],s=[],a=[],o=new V,c=new tt;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new V)}s[0]=new V,a[0]=new V;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Nt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Nt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends Mn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ie,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends Xr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,d*=h,i(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Cs=new V,ho=new yl,uo=new yl,po=new yl,jr=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),o=Cs);let u=i[l%s],p=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(p),d),f=Math.pow(p.distanceToSquared(c),d);g<1e-4&&(g=1),m<1e-4&&(m=g),f<1e-4&&(f=g),ho.initNonuniformCatmullRom(o.x,u.x,p.x,c.x,m,g,f),uo.initNonuniformCatmullRom(o.y,u.y,p.y,c.y,m,g,f),po.initNonuniformCatmullRom(o.z,u.z,p.z,c.z,m,g,f)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(o.x,u.x,p.x,c.x,this.tension),uo.initCatmullRom(o.y,u.y,p.y,c.y,this.tension),po.initCatmullRom(o.z,u.z,p.z,c.z,this.tension));return n.set(ho.calc(h),uo.calc(h),po.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zc(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Or(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Fr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ta=class extends Mn{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Mn{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y),Fr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Mn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Mn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Mn{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Mn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y),Or(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Zc(o,c.x,l.x,h.x,u.x),Zc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:jr,CubicBezierCurve:ta,CubicBezierCurve3:Go,EllipseCurve:Xr,LineCurve:na,LineCurve3:Vo,QuadraticBezierCurve:ia,QuadraticBezierCurve3:ra,SplineCurve:sa}),Ho=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new aa[i.type]().fromJSON(i))}return this}},Ci=class extends Ho{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new na(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ia(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ta(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Xr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mr=class r extends Et{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Nt(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new V,p=new Ie,d=new V,m=new V,g=new V,f=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:f=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=1*x,d.y=-f,d.z=0*x,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:f=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,d.x=1*x,d.y=-f,d.z=0*x,m.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(m)}for(let _=0;_<=t;_++){let v=n+_*h*i,M=Math.sin(v),w=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*w,a.push(u.x,u.y,u.z),p.x=_/t,p.y=b/(e.length-1),o.push(p.x,p.y);let T=c[3*b+0]*M,H=c[3*b+1],P=c[3*b+0]*w;l.push(T,H,P)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,w=M,b=M+e.length,T=M+e.length+1,H=M+1;s.push(w,b,H),s.push(T,H,b)}this.setIndex(s),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Wo=class r extends mr{constructor(e=1,t=1,n=4,i=8){let s=new Ci;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Xo=class r extends Et{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new V,h=new Ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gr=class r extends Et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],d=[],m=0,g=[],f=n/2,x=0;function _(v){let M=m,w=new Ie,b=new V,T=0,H=v===!0?e:t,P=v===!0?1:-1;for(let ee=1;ee<=i;ee++)u.push(0,f*P,0),p.push(0,P,0),d.push(.5,.5),m++;let D=m;for(let ee=0;ee<=i;ee++){let R=ee/i*c+o,J=Math.cos(R),j=Math.sin(R);b.x=H*j,b.y=f*P,b.z=H*J,u.push(b.x,b.y,b.z),p.push(0,P,0),w.x=.5*J+.5,w.y=.5*j*P+.5,d.push(w.x,w.y),m++}for(let ee=0;ee<i;ee++){let R=M+ee,J=D+ee;v===!0?h.push(J,J+1,R):h.push(J+1,J,R),T+=3}l.addGroup(x,T,v===!0?1:2),x+=T}(function(){let v=new V,M=new V,w=0,b=(t-e)/n;for(let T=0;T<=s;T++){let H=[],P=T/s,D=P*(t-e)+e;for(let ee=0;ee<=i;ee++){let R=ee/i,J=R*c+o,j=Math.sin(J),te=Math.cos(J);M.x=D*j,M.y=-P*n+f,M.z=D*te,u.push(M.x,M.y,M.z),v.set(j,b,te).normalize(),p.push(v.x,v.y,v.z),d.push(R,1-P),H.push(m++)}g.push(H)}for(let T=0;T<i;T++)for(let H=0;H<s;H++){let P=g[H][T],D=g[H+1][T],ee=g[H+1][T+1],R=g[H][T+1];h.push(P,D,R),h.push(D,ee,R),w+=6}l.addGroup(x,w,0),x+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class r extends gr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pi=class r extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,d,m,g){let f=g+1,x=[];for(let _=0;_<=f;_++){x[_]=[];let v=p.clone().lerp(m,_/f),M=d.clone().lerp(m,_/f),w=f-_;for(let b=0;b<=w;b++)x[_][b]=b===0&&_===f?v:v.clone().lerp(M,b/w)}for(let _=0;_<f;_++)for(let v=0;v<2*(f-_)-1;v++){let M=Math.floor(v/2);v%2==0?(c(x[_][M+1]),c(x[_+1][M]),c(x[_][M])):(c(x[_][M+1]),c(x[_+1][M+1]),c(x[_+1][M]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,d){let m=3*p;d.x=e[m+0],d.y=e[m+1],d.z=e[m+2]}function h(p,d,m,g){g<0&&p.x===1&&(a[d]=p.x-1),m.x===0&&m.z===0&&(a[d]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new V,m=new V,g=new V;for(let f=0;f<t.length;f+=3)l(t[f+0],d),l(t[f+1],m),l(t[f+2],g),o(d,m,g,p)})(i),(function(p){let d=new V;for(let m=0;m<s.length;m+=3)d.x=s[m+0],d.y=s[m+1],d.z=s[m+2],d.normalize().multiplyScalar(p),s[m+0]=d.x,s[m+1]=d.y,s[m+2]=d.z})(n),(function(){let p=new V;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let g=u(p)/2/Math.PI+.5,f=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);a.push(g,1-f)}var d;(function(){let m=new V,g=new V,f=new V,x=new V,_=new Ie,v=new Ie,M=new Ie;for(let w=0,b=0;w<s.length;w+=9,b+=6){m.set(s[w+0],s[w+1],s[w+2]),g.set(s[w+3],s[w+4],s[w+5]),f.set(s[w+6],s[w+7],s[w+8]),_.set(a[b+0],a[b+1]),v.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),x.copy(m).add(g).add(f).divideScalar(3);let T=u(x);h(_,b+0,m,T),h(v,b+2,g,T),h(M,b+4,f,T)}})(),(function(){for(let m=0;m<a.length;m+=6){let g=a[m+0],f=a[m+2],x=a[m+4],_=Math.max(g,f,x),v=Math.min(g,f,x);_>.9&&v<.1&&(g<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),x<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},qo=class r extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ps=new V,Ls=new V,fo=new V,Is=new wi,Yo=class extends Et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(er*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:g,b:f,c:x}=Is;if(g.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),x.fromBufferAttribute(o,l[2]),Is.getNormal(fo),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,M=u[_],w=u[v],b=Is[h[_]],T=Is[h[v]],H=`${M}_${w}`,P=`${w}_${M}`;P in p&&p[P]?(fo.dot(p[P].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(T.x,T.y,T.z)),p[P]=null):H in p||(p[H]={index0:l[_],index1:l[v],normal:fo.clone()})}}for(let m in p)if(p[m]){let{index0:g,index1:f}=p[m];Ps.fromBufferAttribute(o,g),Ls.fromBufferAttribute(o,f),d.push(Ps.x,Ps.y,Ps.z),d.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new Ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vr=class extends Ci{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ci().fromJSON(i))}return this}},wp=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Jc(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,p,d;if(n&&(s=(function(m,g,f,x){let _=[],v,M,w,b,T;for(v=0,M=g.length;v<M;v++)w=g[v]*x,b=v<M-1?g[v+1]*x:m.length,T=Jc(m,w,b,x,!1),T===T.next&&(T.steiner=!0),_.push(Ip(T));for(_.sort(Cp),v=0;v<_.length;v++)f=Pp(_[v],f);return f})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let m=t;m<i;m+=t)u=r[m],p=r[m+1],u<o&&(o=u),p<c&&(c=p),u>l&&(l=u),p>h&&(h=p);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return qr(s,a,t,o,c,d,0),a};function Jc(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let p=c,d=l-h;p<l;p+=h)u+=(o[d]-o[p])*(o[p+1]+o[d+1]),d=p;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Kc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Kc(s,r[s],r[s+1],a);return a&&ga(a,a.next)&&(Zr(a),a=a.next),a}function Li(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ga(n,n.next)&&bt(n.prev,n,n.next)!==0)n=n.next;else{if(Zr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,p,d){let m=h;do m.z===0&&(m.z=Zo(m.x,m.y,u,p,d)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(g){let f,x,_,v,M,w,b,T,H=1;do{for(x=g,g=null,M=null,w=0;x;){for(w++,_=x,b=0,f=0;f<H&&(b++,_=_.nextZ,_);f++);for(T=H;b>0||T>0&&_;)b!==0&&(T===0||!_||x.z<=_.z)?(v=x,x=x.nextZ,b--):(v=_,_=_.nextZ,T--),M?M.nextZ=v:g=v,v.prevZ=M,M=v;x=_}M.nextZ=null,H*=2}while(w>1)})(m)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?Tp(r,n,i,s):Ep(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zr(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?qr(r=Ap(Li(r),e,t),e,t,n,i,s,2):a===2&&Rp(r,e,t,n,i,s):qr(Li(r),e,t,n,i,s,1);break}}function Ep(r){let e=r.prev,t=r,n=r.next;if(bt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,p=i>s?i>a?i:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=p&&m.y>=u&&m.y<=d&&$i(i,o,s,c,a,l,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(bt(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,p=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<u?h<p?h:p:u<p?u:p,g=o>c?o>l?o:l:c>l?c:l,f=h>u?h>p?h:p:u>p?u:p,x=Zo(d,m,e,t,n),_=Zo(g,f,e,t,n),v=r.prevZ,M=r.nextZ;for(;v&&v.z>=x&&M&&M.z<=_;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=f&&v!==i&&v!==a&&$i(o,h,c,u,l,p,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=g&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&$i(o,h,c,u,l,p,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=x;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=f&&v!==i&&v!==a&&$i(o,h,c,u,l,p,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=g&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&$i(o,h,c,u,l,p,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ap(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ga(i,s)&&Th(i,n,n.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return Li(n)}function Rp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Up(a,o)){let c=Ah(a,o);return a=Li(a,a.next),c=Li(c,c.next),qr(a,e,t,n,i,s,0),void qr(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Cp(r,e){return r.x-e.x}function Pp(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=l&&f>c&&(c=f,a=o.x<o.next.x?o:o.next,f===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,p=a.x,d=a.y,m,g=1/0;o=a;do l>=o.x&&o.x>=p&&l!==o.x&&$i(h<d?l:c,h,p,d,h<d?c:l,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(l-o.x),Yr(o,i)&&(m<g||m===g&&(o.x>a.x||o.x===a.x&&Lp(a,o)))&&(a=o,g=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Ah(t,r);return Li(n,n.next),Li(t,t.next)}function Lp(r,e){return bt(r.prev,r,e.prev)<0&&bt(e.next,r,r.next)<0}function Zo(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ip(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $i(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Up(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Th(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Yr(r,e)&&Yr(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(bt(r.prev,r,e.prev)||bt(r,e.prev,e))||ga(r,e)&&bt(r.prev,r,r.next)>0&&bt(e.prev,e,e.next)>0)}function bt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ga(r,e){return r.x===e.x&&r.y===e.y}function Th(r,e,t,n){let i=Ds(bt(r,e,t)),s=Ds(bt(r,e,n)),a=Ds(bt(t,n,r)),o=Ds(bt(t,n,e));return i!==s&&a!==o||!(i!==0||!Us(r,t,e))||!(s!==0||!Us(r,n,e))||!(a!==0||!Us(t,r,n))||!(o!==0||!Us(t,e,n))}function Us(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ds(r){return r>0?1:r<0?-1:0}function Yr(r,e){return bt(r.prev,r,r.next)<0?bt(r,e,r.next)>=0&&bt(r,r.prev,e)>=0:bt(r,e,r.prev)<0||bt(r,r.next,e)<0}function Ah(r,e){let t=new Jo(r.i,r.x,r.y),n=new Jo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Kc(r,e,t,n){let i=new Jo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ai=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Qc(e),$c(n,e);let a=e.length;t.forEach(Qc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,$c(n,t[c]);let o=wp(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Qc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function $c(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Jr=class r extends Et{constructor(e=new vr([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Dp,v,M,w,b,T,H=!1;x&&(v=x.getSpacedPoints(h),H=!0,p=!1,M=x.computeFrenetFrames(h,!1),w=new V,b=new V,T=new V),p||(f=0,d=0,m=0,g=0);let P=o.extractPoints(l),D=P.shape,ee=P.holes;if(!ai.isClockWise(D)){D=D.reverse();for(let G=0,q=ee.length;G<q;G++){let ne=ee[G];ai.isClockWise(ne)&&(ee[G]=ne.reverse())}}let R=ai.triangulateShape(D,ee),J=D;for(let G=0,q=ee.length;G<q;G++){let ne=ee[G];D=D.concat(ne)}function j(G,q,ne){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(q,ne)}let te=D.length,de=R.length;function ae(G,q,ne){let ce,C,y,Y=G.x-q.x,k=G.y-q.y,O=ne.x-G.x,K=ne.y-G.y,re=Y*Y+k*k,ie=Y*K-k*O;if(Math.abs(ie)>Number.EPSILON){let _e=Math.sqrt(re),Me=Math.sqrt(O*O+K*K),we=q.x-k/_e,Re=q.y+Y/_e,Le=((ne.x-K/Me-we)*K-(ne.y+O/Me-Re)*O)/(Y*K-k*O);ce=we+Y*Le-G.x,C=Re+k*Le-G.y;let ke=ce*ce+C*C;if(ke<=2)return new Ie(ce,C);y=Math.sqrt(ke/2)}else{let _e=!1;Y>Number.EPSILON?O>Number.EPSILON&&(_e=!0):Y<-Number.EPSILON?O<-Number.EPSILON&&(_e=!0):Math.sign(k)===Math.sign(K)&&(_e=!0),_e?(ce=-k,C=Y,y=Math.sqrt(re)):(ce=Y,C=k,y=Math.sqrt(re/2))}return new Ie(ce/y,C/y)}let Q=[];for(let G=0,q=J.length,ne=q-1,ce=G+1;G<q;G++,ne++,ce++)ne===q&&(ne=0),ce===q&&(ce=0),Q[G]=ae(J[G],J[ne],J[ce]);let se=[],L,W=Q.concat();for(let G=0,q=ee.length;G<q;G++){let ne=ee[G];L=[];for(let ce=0,C=ne.length,y=C-1,Y=ce+1;ce<C;ce++,y++,Y++)y===C&&(y=0),Y===C&&(Y=0),L[ce]=ae(ne[ce],ne[y],ne[Y]);se.push(L),W=W.concat(L)}for(let G=0;G<f;G++){let q=G/f,ne=d*Math.cos(q*Math.PI/2),ce=m*Math.sin(q*Math.PI/2)+g;for(let C=0,y=J.length;C<y;C++){let Y=j(J[C],Q[C],ce);E(Y.x,Y.y,-ne)}for(let C=0,y=ee.length;C<y;C++){let Y=ee[C];L=se[C];for(let k=0,O=Y.length;k<O;k++){let K=j(Y[k],L[k],ce);E(K.x,K.y,-ne)}}}let Ae=m+g;for(let G=0;G<te;G++){let q=p?j(D[G],W[G],Ae):D[G];H?(b.copy(M.normals[0]).multiplyScalar(q.x),w.copy(M.binormals[0]).multiplyScalar(q.y),T.copy(v[0]).add(b).add(w),E(T.x,T.y,T.z)):E(q.x,q.y,0)}for(let G=1;G<=h;G++)for(let q=0;q<te;q++){let ne=p?j(D[q],W[q],Ae):D[q];H?(b.copy(M.normals[G]).multiplyScalar(ne.x),w.copy(M.binormals[G]).multiplyScalar(ne.y),T.copy(v[G]).add(b).add(w),E(T.x,T.y,T.z)):E(ne.x,ne.y,u/h*G)}for(let G=f-1;G>=0;G--){let q=G/f,ne=d*Math.cos(q*Math.PI/2),ce=m*Math.sin(q*Math.PI/2)+g;for(let C=0,y=J.length;C<y;C++){let Y=j(J[C],Q[C],ce);E(Y.x,Y.y,u+ne)}for(let C=0,y=ee.length;C<y;C++){let Y=ee[C];L=se[C];for(let k=0,O=Y.length;k<O;k++){let K=j(Y[k],L[k],ce);H?E(K.x,K.y+v[h-1].y,v[h-1].x+ne):E(K.x,K.y,u+ne)}}}function S(G,q){let ne=G.length;for(;--ne>=0;){let ce=ne,C=ne-1;C<0&&(C=G.length-1);for(let y=0,Y=h+2*f;y<Y;y++){let k=te*y,O=te*(y+1);N(q+ce+k,q+C+k,q+C+O,q+ce+O)}}}function E(G,q,ne){c.push(G),c.push(q),c.push(ne)}function z(G,q,ne){I(G),I(q),I(ne);let ce=i.length/3,C=_.generateTopUV(n,i,ce-3,ce-2,ce-1);X(C[0]),X(C[1]),X(C[2])}function N(G,q,ne,ce){I(G),I(q),I(ce),I(q),I(ne),I(ce);let C=i.length/3,y=_.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);X(y[0]),X(y[1]),X(y[3]),X(y[1]),X(y[2]),X(y[3])}function I(G){i.push(c[3*G+0]),i.push(c[3*G+1]),i.push(c[3*G+2])}function X(G){s.push(G.x),s.push(G.y)}(function(){let G=i.length/3;if(p){let q=0,ne=te*q;for(let ce=0;ce<de;ce++){let C=R[ce];z(C[2]+ne,C[1]+ne,C[0]+ne)}q=h+2*f,ne=te*q;for(let ce=0;ce<de;ce++){let C=R[ce];z(C[0]+ne,C[1]+ne,C[2]+ne)}}else{for(let q=0;q<de;q++){let ne=R[q];z(ne[2],ne[1],ne[0])}for(let q=0;q<de;q++){let ne=R[q];z(ne[0]+te*h,ne[1]+te*h,ne[2]+te*h)}}n.addGroup(G,i.length/3-G,0)})(),(function(){let G=i.length/3,q=0;S(J,q),q+=J.length;for(let ne=0,ce=ee.length;ne<ce;ne++){let C=ee[ne];S(C,q),q+=C.length}n.addGroup(G,i.length/3-G,1)})()}this.setAttribute("position",new Ke(i,3)),this.setAttribute("uv",new Ke(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new aa[i.type]().fromJSON(i)),new r(n,e.options)}},Dp={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new Ie(s,a),new Ie(o,c),new Ie(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],p=e[3*i],d=e[3*i+1],m=e[3*i+2],g=e[3*s],f=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ie(a,1-c),new Ie(l,1-u),new Ie(p,1-m),new Ie(g,1-x)]:[new Ie(o,1-c),new Ie(h,1-u),new Ie(d,1-m),new Ie(f,1-x)]}},Ko=class r extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qo=class r extends Pi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$o=class r extends Et{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,p=(t-e)/(i=Math.max(1,i)),d=new V,m=new Ie;for(let g=0;g<=i;g++){for(let f=0;f<=n;f++){let x=s+f/n*a;d.x=u*Math.cos(x),d.y=u*Math.sin(x),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=p}for(let g=0;g<i;g++){let f=g*(n+1);for(let x=0;x<n;x++){let _=x+f,v=_,M=_+n+1,w=_+n+2,b=_+1;o.push(v,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},el=class r extends Et{constructor(e=new vr([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,p=h.extractPoints(t),d=p.shape,m=p.holes;ai.isClockWise(d)===!1&&(d=d.reverse());for(let f=0,x=m.length;f<x;f++){let _=m[f];ai.isClockWise(_)===!0&&(m[f]=_.reverse())}let g=ai.triangulateShape(d,m);for(let f=0,x=m.length;f<x;f++){let _=m[f];d=d.concat(_)}for(let f=0,x=d.length;f<x;f++){let _=d[f];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let f=0,x=g.length;f<x;f++){let _=g[f],v=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(v,M,w),c+=3}}this.setIndex(n),this.setAttribute("position",new Ke(i,3)),this.setAttribute("normal",new Ke(s,3)),this.setAttribute("uv",new Ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Kr=class r extends Et{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new V,p=new V,d=[],m=[],g=[],f=[];for(let x=0;x<=n;x++){let _=[],v=x/n,M=0;x===0&&a===0?M=.5/t:x===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let b=w/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(b+M,1-v),_.push(l++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let v=h[x][_+1],M=h[x][_],w=h[x+1][_],b=h[x+1][_+1];(x!==0||a>0)&&d.push(v,M,b),(x!==n-1||c<Math.PI)&&d.push(M,w,b)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},tl=class r extends Pi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qr=class r extends Et{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new V,u=new V,p=new V;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let g=m/i*s,f=d/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let g=(i+1)*d+m-1,f=(i+1)*(d-1)+m-1,x=(i+1)*(d-1)+m,_=(i+1)*d+m;a.push(g,f,_),a.push(f,x,_)}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},nl=class r extends Et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new V,p=new V,d=new V,m=new V,g=new V,f=new V,x=new V;for(let v=0;v<=n;++v){let M=v/n*s*Math.PI*2;_(M,s,a,e,d),_(M+.01,s,a,e,m),f.subVectors(m,d),x.addVectors(m,d),g.crossVectors(f,x),x.crossVectors(g,f),g.normalize(),x.normalize();for(let w=0;w<=i;++w){let b=w/i*Math.PI*2,T=-t*Math.cos(b),H=t*Math.sin(b);u.x=d.x+(T*x.x+H*g.x),u.y=d.y+(T*x.y+H*g.y),u.z=d.z+(T*x.z+H*g.z),c.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(v/n),h.push(w/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let w=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),T=(i+1)*v+M,H=(i+1)*(v-1)+M;o.push(w,b,H),o.push(b,T,H)}function _(v,M,w,b,T){let H=Math.cos(v),P=Math.sin(v),D=w/M*v,ee=Math.cos(D);T.x=b*(2+ee)*.5*H,T.y=b*(2+ee)*P*.5,T.z=b*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$r=class r extends Et{constructor(e=new ra(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,c=new V,l=new Ie,h=new V,u=[],p=[],d=[],m=[];function g(f){h=e.getPointAt(f/t,h);let x=a.normals[f],_=a.binormals[f];for(let v=0;v<=i;v++){let M=v/i*Math.PI*2,w=Math.sin(M),b=-Math.cos(M);c.x=b*x.x+w*_.x,c.y=b*x.y+w*_.y,c.z=b*x.z+w*_.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)g(f);g(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let x=0;x<=i;x++)l.x=f/t,l.y=x/i,d.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let x=1;x<=i;x++){let _=(i+1)*(f-1)+(x-1),v=(i+1)*f+(x-1),M=(i+1)*f+x,w=(i+1)*(f-1)+x;m.push(_,v,w),m.push(v,M,w)}})()})(),this.setIndex(m),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},il=class extends Et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new V,s=new V;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],p=u.start;for(let d=p,m=p+u.count;d<m;d+=3)for(let g=0;g<3;g++){let f=o.getX(d+g),x=o.getX(d+(g+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,x),eh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),eh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var wm=Object.freeze({__proto__:null,BoxGeometry:hi,CapsuleGeometry:Wo,CircleGeometry:Xo,ConeGeometry:jo,CylinderGeometry:gr,DodecahedronGeometry:qo,EdgesGeometry:Yo,ExtrudeGeometry:Jr,IcosahedronGeometry:Ko,LatheGeometry:mr,OctahedronGeometry:Qo,PlaneGeometry:ur,PolyhedronGeometry:Pi,RingGeometry:$o,ShapeGeometry:el,SphereGeometry:Kr,TetrahedronGeometry:tl,TorusGeometry:Qr,TorusKnotGeometry:nl,TubeGeometry:$r,WireframeGeometry:il}),oa=class extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var es=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ns(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Np(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var _r=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:s=e,o=2*t-n;break;case lc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=e,c=2*n-t;break;case lc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),g=m*m,f=g*m,x=-p*f+2*p*g-p*m,_=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*m+1,v=(-1-d)*f+(1.5+d)*g+.5*m,M=d*f-d*g;for(let w=0;w!==o;++w)s[w]=x*a[h+w]+_*a[l+w]+v*a[c+w]+M*a[u+w];return s}},sl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*u+a[c+p]*h;return s}},al=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Np(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ga,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,p=h+n;for(let d=0;d!==n;++d){let m=t[h+d];if(m!==t[u+d]||m!==t[p+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};An.prototype.TimeBufferType=Float32Array,An.prototype.ValueBufferType=Float32Array,An.prototype.DefaultInterpolation=Fs;var bi=class extends An{};bi.prototype.ValueTypeName="bool",bi.prototype.ValueBufferType=Array,bi.prototype.DefaultInterpolation=Os,bi.prototype.InterpolantFactoryMethodLinear=void 0,bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends An{};ol.prototype.ValueTypeName="color";var ll=class extends An{};ll.prototype.ValueTypeName="number";var cl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)xn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Br=class extends An{InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion",Br.prototype.DefaultInterpolation=Fs,Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends An{};Si.prototype.ValueTypeName="string",Si.prototype.ValueBufferType=Array,Si.prototype.DefaultInterpolation=Os,Si.prototype.InterpolantFactoryMethodLinear=void 0,Si.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends An{};hl.prototype.ValueTypeName="vector";var th={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ul=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Op=new ul,ts=class{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var dl=class extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=th.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Vr("img");function c(){h(),th.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ca=class extends ts{constructor(e){super(e)}load(e,t,n,i){let s=new on,a=new dl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},ha=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ua=class extends ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mo=new tt,nh=new V,ih=new V,pl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Em=new tt,Tm=new V,Am=new V;var fl=class extends pl{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rm=new tt,Cm=new tt,Pm=new tt;var Lm=new V,Im=new xn,Um=new V,Dm=new V;var Nm=new V,Om=new xn,Fm=new V,Bm=new V;var Ml="\\[\\]\\.:\\/",Fp=new RegExp("["+Ml+"]","g"),go="[^"+Ml+"]",Bp="[^"+Ml.replace("\\.","")+"]",zp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",go)+/(WCOD+)?/.source.replace("WCOD",Bp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go)+"$"),kp=["material","materials","bones","map"],xt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(e){let t=zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);kp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=class{constructor(r,e,t){let n=t||xt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray],xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zm=new Float32Array(1);var km=new Ie;var Gm=new V,Vm=new V;var Hm=new V;var Wm=new V,Xm=new tt,jm=new tt;var qm=new V,Ym=new rt,Zm=new rt;var Jm=new V,Km=new V,Qm=new V;var $m=new V,e0=new Hr;var t0=new yn;var n0=new V;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Rh(r,e){let{V:t,plate:n,rod:i,disc:s,bar:a,pin:o,bolts:c,box:l,conduit:h,append:u,parts:p,identity:d,materials:m}=e,g=-.31,f=m.paint,x=m.edge.clone();x.color.setHex(11971473),x.roughness=.55;let _=f.clone();_.color.setHex(16772258),_.roughness=.54;let v=(N,I=g)=>t(N[0],N[1],I),M=[-.68,1.58],w=[4.36,4.25],b=[4.79,4.96],T=[4.14,1.15],H=[4.24,1.61],P=[5.17,1.49],D=[4.67,.892];function ee(N,I,X,G,q,ne){let ce=[],C=[],y=[],Y=0;I.forEach(([re,ie],_e)=>{if(_e&&(Y+=Math.hypot(re-I[_e-1][0],ie-I[_e-1][1])),ce.push(re,ie,X,re,ie,G),C.push(Y*.42,0,Y*.42,(G-X)*.42),_e){let Me=2*_e;y.push(Me-2,Me-1,Me,Me,Me-1,Me+1)}});let k=new r.BufferGeometry;k.setAttribute("position",new r.Float32BufferAttribute(ce,3)),k.setAttribute("uv",new r.Float32BufferAttribute(C,2)),k.setIndex(y),k.computeVertexNormals(),k.computeBoundingBox();let O=k.boundingBox.getCenter(t());k.translate(-O.x,-O.y,-O.z),k.name=N;let K=q.clone();K.side=r.DoubleSide,u(k,K,O,d,t(1,1,1),ne)}function R(N,I,X,G,q){let ne=[...I,...X.slice(1,-1)],ce=G*.5-.024;for(let C of[-1,1])n(N+"-flank",ne,g+C*ce,.055,q,"braccio",.01);ee(N+"-lower",I,g-ce,g+ce,q,"braccio"),ee(N+"-upper",X,g-ce,g+ce,q,"braccio");for(let[C,y]of[I,X].entries())for(let Y of[-1,1])h(N+"-seam-"+C+"-"+Y,y.map(k=>v(k,g+Y*(ce+.012))),.0075,q,"braccio",40)}R("320d-reach-boom",[[-.73,1.46],[-.44,1.55],[-.06,2.1],[.29,2.62],[.49,2.82],[.72,2.99],[1.14,3.17],[1.98,3.37],[2.98,3.58],[3.84,3.78],[4.19,3.9],[4.38,4.04],[4.49,4.17],[4.48,4.28],[4.4,4.355]],[[4.4,4.355],[4.29,4.373],[4.11,4.304],[3.8,4.251],[3.08,4.186],[2.26,4.08],[1.29,4.007],[.9,3.95],[.62,3.87],[.41,3.79],[.2,3.675],[.045,3.56],[-.105,3.415],[-.31,3.16],[-.6,2.72],[-.96,1.88],[-1.012,1.68],[-.949,1.53],[-.85,1.475],[-.73,1.46]],.494,f),R("320d-dipper",[[4.805,5.018],[4.875,4.992],[4.96,4.9],[5.15,4.62],[5.3,4.395],[5.325,4.305],[5.306,4.015],[5.331,3.885],[5.32,3.817],[5.245,3.79],[5.184,3.74],[5.073,3.51],[4.94,3.105],[4.775,2.65],[4.59,2.16],[4.437,1.64],[4.25,1.246],[4.215,1.151],[4.172,1.1],[4.117,1.072]],[[4.117,1.072],[4.055,1.08],[3.994,1.145],[3.98,1.23],[4.004,1.41],[4.05,1.81],[4.12,2.64],[4.17,3.34],[4.205,3.85],[4.211,4.19],[4.25,4.346],[4.365,4.54],[4.47,4.695],[4.59,4.84],[4.728,4.984],[4.77,5.013],[4.805,5.018]],.365,_);function ae(N,I,X,G=f,q="braccio"){for(let ne of[-1,1])s(...N,g+ne*X*.5,I,.059,G,q,32),s(...N,g+ne*(X*.5+.035),I*.68,.027,"iron",q,24),c(...N,g+ne*(X*.5+.057),.021,ne);o(...N,g,I*.52,X+.09,q)}ae(M,.193,.61),ae(w,.163,.534),ae(b,.102,.39),ae(T,.113,.41,f,"benna");for(let N of[-1,1])n("series-d-base-yoke",[[-1.14,1.345],[-.28,1.345],[-.41,1.59],[-.53,1.745],[-.71,1.78],[-.9,1.66]],g+N*.315,.107,f,"telaio",.022);function Q(N,I,X,G,q,ne,ce=g){let C=v(I,ce),y=v(X,ce),Y=C.clone().lerp(y,q),k=y.clone().sub(C).normalize();i(C,Y,G,ne,"pistoni",28),i(C.clone().lerp(y,.027),C.clone().lerp(y,.073),G*1.065,"iron","pistoni",28),i(Y.clone().addScaledVector(k,-.073),Y,G*1.115,"iron","pistoni",28),i(Y,y,G*.6,"chrome","pistoni",28);let O=ie=>Y.clone().addScaledVector(k,ie);i(O(-.06),O(-.032),G*1.06,"iron","pistoni",12),i(O(-.029),O(-.01),G*.83,"edge","pistoni",24),i(O(-.008),O(.01),G*.67,"rubber","pistoni",24);let K=y.clone().addScaledVector(k,-.13);i(K,K.clone().addScaledVector(k,.084),G*.78,"iron","pistoni",20);for(let ie of[C,y])s(ie.x,ie.y,ie.z,G*1.18,G*1.86,ne,"pistoni",28),s(ie.x,ie.y,ie.z+G,G*.55,.03,"edge","pistoni",20);let re=C.clone().lerp(Y,.22);i(re.clone().add(t(0,0,G*.6)),re.clone().add(t(.025,0,G*1.32)),.024,"bolt","tubazioni",10)}for(let N of[-1,1]){let I=g+N*.365,X=[-.3,1.47],G=[.25,3.58];Q("lift",X,G,.115,.54,"black",I),s(...G,g+N*.256,.148,.181,f,"braccio",28)}let se=[1.45,4.111];for(let N of[-1,1])n("320d-dipper-ram-saddle",[[1.27,4.018],[1.64,4.055],[1.56,4.167],[1.46,4.201],[1.38,4.167]],g+N*.118,.077,f,"braccio",.012);Q("dipper",se,b,.107,.575,"black");let L=[5.267,3.826];Q("curl",L,P,.101,.595,"black"),ae(L,.098,.37,f,"braccio");let W;for(let N of[-1,1]){let I=g+N*.228,X=(G,q,ne,ce,C,y)=>{let Y=Math.hypot(ne[0]-q[0],ne[1]-q[1]),k=-(ne[1]-q[1])/Y,O=(ne[0]-q[0])/Y,K=[[q[0]+k*ce,q[1]+O*ce],[ne[0]+k*ce,ne[1]+O*ce],[ne[0]-k*ce,ne[1]-O*ce],[q[0]-k*ce,q[1]-O*ce]];if(n(G,K,y,C,f,"benna",.014),G==="320d-rocker-link"&&N===1){let re=v(q,y+C*.5).lerp(v(ne,y+C*.5),.24);W={partIndex:p.length-1,point:re}}for(let re of[q,ne])s(...re,y,ce,C,f,"benna",26)};X("320d-rocker-link",P,H,.071,.069,I),X("320d-bucket-link",P,D,.092,.079,I+N*.074)}for(let[N,I,X]of[[P,.078,.73],[H,.075,.61],[D,.084,.72]])o(...N,g,I,X,"benna");for(let N=0;N<4;N++){let I=g-.176+N*.097,X=N*.01,G=[[-.82,1.49],[-.88,1.74],[-.72,2.27],[-.37,3.04],[.05,3.66],[.45,3.93],[.9,4.046],[1.53,4.11],[2.9,4.235],[3.58,4.3],[3.85,4.32]];h("320d-pipe-"+N,G.map(([C,y])=>t(C,y+X,I)),.019,N%2?"paintDark":"paint","tubazioni",48);let q=v(G.at(-1),I);q.y+=X,i(q.clone().add(t(-.06,-.006,0)),q.clone().add(t(.05,.006,0)),.033,"edge","tubazioni",12);let ne=[q,t(4.12,4.378+X,I),t(4.49,4.4+X,I+.055),t(4.72,4.3+X,I+.13),t(4.8,4.03+X,I+.146),t(4.74,3.85+X,I+.146),t(4.56,3.8+X,I+.146)];h("320d-curl-hose-"+N,ne,.025,"rubber","tubazioni",24);let ce=ne.at(-1);i(ce.clone().add(t(-.058,0,0)),ce.clone().add(t(.03,0,0)),.037,"edge","tubazioni",10)}for(let[N,I]of[[-.19,3.43],[.86,4.04],[2.22,4.17],[3.56,4.315]]){l(N,I,g,.065,.043,.446,"paintDark","tubazioni");for(let X of[-1,1])c(N,I,g+X*.23,.016,X)}for(let N of[-1,1]){let I=g+N*.212;for(let X=0;X<2;X++){let G=X*.08,q=[[4.88+G,3.74],[4.81+G,3.65],[4.7+G,3.58],[4.65+G,3.38],[4.57+G,2.87],[4.43+G,2.45],[4.37+G,2.31]];h("320d-stick-pipe-"+N+"-"+X,q.map(ne=>v(ne,I)),.0165,"paint","tubazioni",25);for(let ne of[q[0],q.at(-1)]){let ce=v(ne,I);i(ce,ce.clone().add(t(-.025,-.04,0)),.031,"edge","tubazioni",10)}}}let Ae=1.36,S=[[3.06,.067],[3.31,.034],[3.69,.02],[4.02,.02],[4.32,.027],[4.53,.057],[4.7,.112],[4.85,.207],[4.955,.333],[5.006,.472],[5.018,.602],[5,.719],[4.95,.818],[4.88,.866]],E=[...S,[4.67,.911],[4.57,.936],[4.41,.949],[4.28,.905],[4.211,.795],[4.13,.62],[4.04,.45],[3.91,.293],[3.74,.188],[3.55,.125],[3.15,.108]];ee("320d-yellow-rolled-pan",S,g-Ae*.5,g+Ae*.5,_,"benna");for(let N of[-1,1]){let I=g+N*(Ae*.5-.026);n("320d-yellow-bucket-cheek",E,I,.059,_,"benna",.012),n("320d-direct-pin-lug",[[4.016,.753],[4.001,1.081],[4.049,1.188],[4.124,1.236],[4.204,1.23],[4.271,1.184],[4.357,1.07],[4.543,1.005],[4.666,1.002],[4.752,.956],[4.792,.88],[4.779,.779],[4.695,.727]],g+N*.257,.094,f,"benna",.016);for(let[G,q]of[[T,.135],[D,.122]])s(...G,g+N*.299,q,.05,"paintDark","benna",28);h("320d-cheek-weld-"+N,S.slice(1,-1).map(G=>v(G,I-N*.027)),.009,"paintDark","benna",30)}n("320d-full-width-edge",[[3.025,.054],[3.027,.028],[3.364,.025],[3.414,.048],[3.407,.084],[3.162,.079]],g,Ae+.046,x,"benna",.006);for(let N of[-1,0,1])i(t(3.38,.068,g+N*Ae*.315),t(3.38,.083,g+N*Ae*.315),.031,"bolt","bulloneria",6);return W}var Ch=new WeakMap;function Ph(r,e,t){let n=Ch.get(r);n||(n=new Map,Ch.set(r,n));let i=t+":"+e;if(n.has(i))return n.get(i);let s=384,a=s*s,o=new Uint8Array(a*4),c=new Uint8Array(a*4),l=new Float32Array(a),h=2745+e*390+t*1309;function u(){return h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296}function p(T){let H=Array.from({length:T*T},u);return(P,D)=>{let ee=P*T,R=D*T,J=Math.floor(ee),j=Math.floor(R),te=ee-J,de=R-j;te*=te*(3-2*te),de*=de*(3-2*de);let ae=(Q,se)=>H[(se%T+T)%T*T+(Q%T+T)%T];return(ae(J,j)*(1-te)+ae(J+1,j)*te)*(1-de)+(ae(J,j+1)*(1-te)+ae(J+1,j+1)*te)*de}}let d=p(6),m=p(20),g=p(78),f=(T,H,P)=>{let D=Math.floor(T),ee=Math.floor(H),R=T-D,J=H-ee;for(let j=0;j<2;j++)for(let te=0;te<2;te++){let de=(ee+j+s*2)%s*s+(D+te+s*2)%s;l[de]=Math.max(l[de],P*(te?R:1-R)*(j?J:1-J))}},x=t===1?114:44;for(let T=0;T<x;T++){let H=u()*s,P=u()*s,D=(t===1?-.22:.11)+(u()-.5)*(t===1?.38:1.5),ee=1+Math.floor(u()*(t===1?8:4));for(let R=0;R<ee;R++){let J=(t===1?24:8)+u()*(t===1?116:48),j=(R-ee/2)*(1.9+u()*.7),te=(u()-.5)*8,de=.32+u()*.67,ae=u()*22;for(let Q=0;Q<J;Q+=.55){let se=Q/J,L=Q+ae;f(H+L*Math.cos(D)-j*Math.sin(D),P+L*Math.sin(D)+j*Math.cos(D)+te*se*se,de*Math.sin(se*Math.PI)**.4)}}}let _=t===1?e===1?[108,72,53]:e===2?[110,83,67]:[88,92,91]:e===1?[78,75,68]:[77,79,81];for(let T=0,H=0;T<s;T++)for(let P=0;P<s;P++,H++){let D=P/s,ee=T/s,R=d(D,ee),J=m(D,ee),j=g(D,ee),te=u(),de=l[H],ae=H*4,Q=t===1,se=Q?Math.pow(Math.max(0,(R*.6+J*.4-.39)*1.85),1.3):0,L=Q?0:Math.max(0,Math.min(1,(J*.54+j*.35+te*.11-.7)*10)),W=!Q&&e===3?.1:!Q&&e===1?.6:1,Ae=Math.min(1,(de*(Q?.98:.72)+se*.29+L*.55)*W),S=(te-.5)*(Q?7:3)+(R-.5)*(Q?35:14)+(J-.5)*9;for(let E=0;E<3;E++){let z=_[E]+S+(Q&&E===0?se*14:0);o[ae+E]=Math.max(0,Math.min(255,z+([170,167,157][E]-z)*Ae))}o[ae+3]=255,c[ae]=Math.round(Math.max(0,Math.min(1,.57+(j-.5)*.19-de*.2-L*.1))*255),c[ae+1]=Math.round(Math.max(.14,Math.min(1,(Q?.68:.48)+(R-.5)*.19-Ae*.39))*255),c[ae+2]=Math.round(Math.min(1,(Q?e===3?.38:.25:.085)+Ae*(Q?.53:.85))*255),c[ae+3]=255}let v=(T,H)=>{let P=new r.DataTexture(T,s,s,r.RGBAFormat);return P.wrapS=P.wrapT=r.RepeatWrapping,P.generateMipmaps=!0,P.magFilter=r.LinearFilter,P.minFilter=r.LinearMipmapLinearFilter,P.colorSpace=H?r.SRGBColorSpace:r.NoColorSpace,P.needsUpdate=!0,P},M=v(o,!0),w=v(c,!1),b=new r.MeshPhysicalMaterial({name:t===1?"Acciaio abraso della benna":"Smalto grafite del braccio",map:M,roughnessMap:w,metalnessMap:w,bumpMap:w,bumpScale:t===1?.026:.014,roughness:1,metalness:1,clearcoat:t===1?.04:.21,clearcoatRoughness:.34,envMapIntensity:1.11});return n.set(i,b),b}function Lh(r,e,t){let n=null,{V:i,parts:s,materials:a,cache:o,append:c,box:l,bar:h,rod:u,disc:p,plate:d,quad:m,pin:g,bolts:f,machineScrew:x,conduit:_,round:v,identity:M}=t,w=e===1,b=e===2,T=e===3,H=i(1,1,1),P=(B,F,pe)=>{let xe=a[F].clone();return xe.name=B,xe.color.setHex(pe),xe},D=P("Montanti verniciati","black",w?7889728:2500907),ee=P("Grafite minerale","black",w?3288874:4343366);ee.roughness=.6,ee.metalness=.4;let R=P("Acciaio verniciato arancio","paint",15102263),J=P("Base torretta ossidata","paintDark",13463871),j=a.rubber,te=a.glass.clone();if(te.color.setHex(w?3227963:b?4676441:4741718),te.opacity=w?.57:b?.55:.62,te.envMapIntensity=.9,te.name="Vetratura fum\xE9 della cabina",w||b){let B=w?1.85:2.75;for(let F of new Set([a.paint.map,a.paint.roughnessMap,a.paint.bumpMap,a.paint.metalnessMap]))F&&F.repeat.set(B,B)}let de=b?null:Ph(r,e,0),ae=b?null:Ph(r,e,1),Q=a.edge.clone();Q.name="Bisello di taglio lucidato",Q.color.setHex(16774614),Q.roughness=.58,Q.envMapIntensity=1.23;let se=b?a.paintDark:ee,L=w?-4.38:b?-4.02:-4.25,W=w?1.33:b?1.23:1.25,Ae=w?3.13:b?2.95:2.9,S=w?1.34:1.25,E=S+.085,z=w?2.37:b?2.17:2.31,N=w?-.27:-.31;function I(B,F,pe,xe){let Ce=[],Pe=[],$=[];for(let[Oe,Ee,De,He]of F){let Be=Math.min(.12,(He-De)*.22,Ee*.24),We=[[0,He],[-Ee*.72,He],[-Ee+Be,He-.014],[-Ee,He-Be],[-Ee,De+Be],[-Ee+Be,De],[0,De],[Ee-Be,De],[Ee,De+Be],[Ee,He-Be],[Ee-Be,He-.014],[Ee*.72,He]];for(let[$e,nt]of We)Ce.push(Oe,nt,$e),Pe.push(Oe*.52,($e+nt)*.43)}for(let Oe=0;Oe<F.length-1;Oe++)for(let Ee=0;Ee<12;Ee++){let De=Oe*12+Ee,He=Oe*12+(Ee+1)%12;$.push(De,De+12,He,He,De+12,He+12)}let fe=(F.length-1)*12;for(let Oe=1;Oe<11;Oe++)$.push(0,Oe,Oe+1,fe,fe+Oe+1,fe+Oe);let Se=new r.BufferGeometry;Se.setAttribute("position",new r.Float32BufferAttribute(Ce,3)),Se.setAttribute("uv",new r.Float32BufferAttribute(Pe,2)),Se.setIndex($),Se.computeVertexNormals(),Se.computeBoundingBox();let Ne=Se.boundingBox.getCenter(i());Se.translate(-Ne.x,-Ne.y,-Ne.z),Se.name=B,c(Se,pe,Ne,M,H,xe)}function X(B,F,pe,xe,Ce,Pe="lamierati",$=.014){d(B,F,pe,xe,Ce,Pe,$)}function G(B,F,pe,xe=a.paint,Ce=.043,Pe="lamierati"){X(B+"-gasket",F,pe,Ce+.018,j,Pe,.018);let $=F.reduce((Se,Ne)=>Se+Ne[0],0)/F.length,he=F.reduce((Se,Ne)=>Se+Ne[1],0)/F.length,fe=F.map(([Se,Ne])=>[$+(Se-$)*.976,he+(Ne-he)*.963]);X(B+"-skin",fe,pe+Math.sign(pe)*.02,Ce,xe,Pe,.018)}I("revolving-bed",[[L+.1,W*.64,S-.18,S+.07],[L+.4,W-.08,S-.21,S+.09],[L+.68,W,S-.22,S+.08],[-.57,W,S-.22,S+.08],[.17,W-.04,S-.19,S+.07],[.3,W-.18,S-.12,S+.02]],w?J:b?a.paintDark:ee,"telaio");let q=w?[[L,.98,S+.02,z-.04],[L+.08,W-.07,S+.01,z],[L+.39,W,S+.01,z],[L+.55,W,S+.01,z-.014]]:b?[[L,.16,S-.17,z-.27],[L+.045,.53,S-.19,z-.22],[L+.13,.8,S-.21,z-.13],[L+.29,1.02,S-.21,z-.08],[L+.48,W-.025,S-.19,z-.03],[L+.72,W,S-.15,z+.008],[L+.9,W-.01,S-.11,z]]:[[L,.19,1.035,z-.31],[L+.03,.51,1.012,z-.27],[L+.12,.79,1.005,z-.22],[L+.26,1.035,1.008,z-.16],[L+.41,1.18,1.018,z-.1],[L+.62,W,1.045,z-.08],[L+.8,W,1.065,z-.06]];if(I("counterweight",q,w?a.paintDark:b?a.paint:ee,"lamierati"),I("engine-underframe",[[L+.49,W-.15,S+.06,z-.07],[-2.09,W-.13,S+.06,z-.04],[-1.86,W-.17,S+.07,z-.13]],w?a.paintDark:ee,"motore"),b){let pe=[[-1.95,S+.096],[.169,S+.096],[.221,S+.12],[.236,S+.163],[.236,S+.378],[.213,S+.413],[.157,S+.432],[-.05,S+.44],[-1.78,S+.454],[-1.95,S+.401]];X("320d-front-service-chest",pe,-.73,.99,a.paint,"motore",.03),l(.236+.014,S+.246,-.73,.025,.229,.885,"rubber","lamierati"),l(.236+.033,S+.249,-.73,.026,.199,.86,"paint","lamierati"),l(.236+.046,S+.212,-.73,.02,.026,.814,"paintDark","lamierati");for(let Pe of[-.258,.233])l(.236+.049,S+.158,-.73+Pe,.024,.032,.108,"iron","lamierati"),u(i(.236+.066,S+.157,-.73+Pe-.049),i(.236+.066,S+.157,-.73+Pe+.049),.012,"edge","lamierati",12);let xe=-.73+.229;l(.236+.051,S+.281,xe,.031,.086,.07,"black","lamierati"),l(.236+.073,S+.285,xe,.013,.053,.039,"edge","lamierati");let Ce=-.73-.288;l(.236+.041,S+.349,Ce,.044,.078,.117,"rubber","lamierati"),l(.236+.065,S+.349,Ce,.012,.055,.09,"light","lamierati");for(let Pe of[-.023,0,.023])l(.236+.074,S+.349,Ce+Pe,.006,.052,.005,"edge","lamierati")}else X("far-hydraulic-reservoir",[[-2.08,S+.09],[.13,S+.09],[.23,1.81],[-.09,2.09],[-.83,2.17],[-1.72,z-.065],[-2.08,z-.18]],-.69,1.05,w?a.paint:ee,"motore",.054);let ne=W+.005,ce=L+.56;for(let B of[-1,1]){let F=ne*B;if(w){G("classic-service"+B,[[L+.43,S+.12],[-1.38,S+.12],[-1.38,z-.07],[L+.43,z-.07]],F);let pe=L+.38,xe=L+1,Ce=S+.21,Pe=z-.15;G("classic-radiator"+B,[[pe-.035,Ce-.03],[xe+.035,Ce-.03],[xe+.035,Pe+.03],[pe-.035,Pe+.03]],F+B*.035),l((pe+xe)/2,(Ce+Pe)/2,F+B*.079,xe-pe,Pe-Ce,.014,"interior","motore");for(let $=0;$<12;$++)l(pe+.021+$*(xe-pe-.042)/11,(Ce+Pe)/2,F+B*.094,.015,Pe-Ce,.02,"iron","motore");for(let $=0;$<11;$++)l((pe+xe)/2,Ce+.016+$*(Pe-Ce-.032)/10,F+B*.1,xe-pe,.012,.019,"edge","motore");for(let $ of[pe-.041,xe+.041])h(i($,Ce-.03,F+B*.103),i($,Pe+.03,F+B*.103),.039,"paint","lamierati");l(L+1.53,S+.15,F+B*.059,1,.059,.018,J,"lamierati");for(let $ of[L+1.35,-1.47])x($,z-.155,F+B*.058,.018,B)}else if(b){G("rear-service"+B,[[ce,S+.1],[-1.6,S+.1],[-1.53,z-.04],[-1.67,z+.11],[ce+.16,z+.1],[ce,z-.1]],F);for(let xe=0;xe<2;xe++)for(let Ce=0;Ce<4;Ce++)for(let Pe=0;Pe<(xe?7:4);Pe++)l(L+.75+xe*.57+Pe*.045,z+.005-Ce*.042,F+B*.05,.026,.025,.015,"interior","motore");let pe=[[L+.36,S+.12],[-1.7,S+.12],[-1.63,S+.38],[-1.85,S+.51],[L+1.63,S+.61],[L+.45,S+.57]];X("charcoal-access-insert"+B,pe,F+B*.059,.032,D,"lamierati",.012),l(L+1.41,S+.39,F+B*.093,.079,.14,.022,"black","lamierati");for(let xe of[L+.97,L+1.88])l(xe,S+.6,F+B*.081,.012,.74,.012,"rubber","motore")}else{G("yellow-service"+B,[[ce,S+.115],[-1.56,S+.115],[-1.6,z-.12],[-2.03,z-.044],[ce+.07,z-.044]],F);let pe=[[ce+.1,z-.19],[-2.66,z-.19],[-2.63,z-.55],[ce+.25,S+.23],[ce+.09,S+.23]];X("triangular-intake"+B,pe,F+B*.055,.027,ee,"motore");let xe=ce+.15,Ce=-2.7,Pe=S+.31,$=z-.24;for(let fe=0;fe<10;fe++){let Se=Pe+($-Pe)*fe/10,Ne=xe+(Ce-xe)*(.27+.73*(Se-Pe)/($-Pe));for(let Oe=0;Oe<12;Oe++){let Ee=xe+(Oe+fe%2*.5)*.105;if(Ee>=Ne-.02)break;p(Ee,Se,F+B*.074,.042,.016,"interior","motore",6)}}l(-2.12,z-.45,F+B*.06,.044,.16,.034,"rubber","lamierati");let he=L+.42;for(let fe of[0,.1])l(he+.07,z-.33-fe,F-B*.022,.31,.056,.03,"red","lamierati",fe?.18:-.08)}}for(let[B,F]of[[L+1.02,.77],[L+1.82,.71]])l(B,z+.005,-.18,F,.1,1.42,"rubber","motore"),l(B,z+.063,-.18,F-.018,.092,1.41,w?"paint":b?"paintDark":ee,"lamierati");for(let B=0;B<12;B++)l(L+.67+B*.062,z+.128,-.25,.024,.032,.72,"track","motore");if(b){let B=i(L+1.55,z+.19,-.5);u(B,B.clone().add(i(0,.23,0)),.075,"black","motore",24);let F=o("precleaner-cover",()=>new r.SphereGeometry(1,24,10,0,Math.PI*2,0,Math.PI*.58));c(F,"rubber",i(B.x,B.y+.21,B.z),M,i(.163,.132,.163),"motore")}let C=L+1.16;u(i(C,z+.11,-.48),i(C-.02,z+.41,-.48),.068,"track","motore",20),u(i(C-.02,z+.41,-.48),i(C-.13,z+.48,-.48),.072,"black","motore",18);for(let B of[L+.81,L+1.87])u(i(B,z+.12,.61),i(B,z+.16,.61),.084,"edge","motore",16);l(-2.84,1.79,-.17,1.18,.41,.66,"iron","motore");for(let B=0;B<6;B++){let F=-3.32+B*.187;l(F,2.06,-.17,.142,.15,.54,"black","motore"),u(i(F,2.03,.08),i(F+.053,1.94,.246),.041,"rust","motore",9)}l(-3.65,1.76,-.26,.15,.73,.91,"track","motore");for(let B=0;B<12;B++)l(-3.735,1.44+B*.055,-.26,.025,.018,.81,"edge","motore");let y=w?-1.84:-1.94,Y=w?-.075:b?-.15:.1,k=w?.99:1.035,O=W-.022,K=O-k,re=(O+K)/2,ie=Y-(w?.13:b?.22:.24),_e=y+(w?.025:b?.012:.167),Me=Ae-.065,we=Y-.045,Re=[[y,E],[we,E],[Y,E+.24],[Y-.026,E+.54],[ie+.042,Me-.17],[ie,Me-.044],[_e+.052,Me-.009],[_e-.014,Me-.071],[y-.008,E+.36]],Le=E+(w?.56:b?.13:.11),ke=E+(w?.64:b?.72:.85),Ue=Y-.1,Ge=y+.066,Xe=[[y+.018,E+.04],[we-.04,E+.04],[Ue,Le+.01],[Ge,ke+.012],[y+.018,ke-.03]];for(let[B,F]of[O,K].entries()){if(w){let he=y+(Y-y)*.365;X("door-threshold"+B,[[y+.018,E+.04],[we-.04,E+.04],[Ue,E+.255],[y+.018,E+.255]],F,.046,"paint","cabina",.014),X("rear-door-stile"+B,[[y+.018,E+.247],[he+.026,E+.247],[he+.026,ke+.015],[y+.018,ke+.015]],F,.046,"paint","cabina",.014),X("front-door-stile"+B,[[Y-.16,E+.245],[Ue,E+.245],[Ue,Le+.01],[Y-.16,Le+.01]],F,.046,"paint","cabina",.012)}else X("side-cab-sill"+B,Xe,F,.046,b?a.paint:ee,"cabina",.02);let pe=y+(Y-y)*(w?.365:b?.415:.32),xe=pe+.024,Ce=he=>ke+(Le-ke)*(he-Ge)/(Ue-Ge),Pe=[[Ge+.036,Ce(Ge+.036)+.044],[pe-.032,Ce(pe-.032)+.044],[xe-.042,Me-.073],[_e+.109,Me-.071],[_e+.026,Me-.159]],$=[[pe+.037,Ce(pe+.037)+.044],[Ue-.024,Le+.058],[Y-.1,E+.5],[ie-.014,Me-.19],[ie-.082,Me-.091],[xe+.043,Me-.075]];X("rear-cab-glazing"+B,Pe,F,.018,te,"vetri",.005),X("cab-door-glazing"+B,$,F,.018,te,"vetri",.005);for(let he=0;he<Re.length;he++){let fe=Re[he],Se=Re[(he+1)%Re.length];h(i(fe[0],fe[1],F),i(Se[0],Se[1],F),w?.06:.068,w?"paint":D,"cabina",.061)}if(h(i(Ge,ke,F),i(Ue,Le,F),.058,w?"paint":D,"cabina",.054),h(i(pe,Ce(pe),F),i(xe,Me-.021,F),w?.06:.047,w?"paint":D,"cabina",.052),w){let he=[[pe+.062,E+.31],[Y-.16,E+.31],[Y-.15,E+.52],[pe+.062,E+.56]];X("lower-register"+B,he,F+.021,.016,te,"vetri",.018);for(let fe=0;fe<4;fe++){let Se=he[fe],Ne=he[(fe+1)%4];h(i(Se[0],Se[1],F+.037),i(Ne[0],Ne[1],F+.037),.033,"rubber","cabina")}h(i(pe,ke,F+.031),i(Y-.12,Le,F+.031),.055,"paint","cabina")}if(b){let he=y+.115;h(i(he,E+.81,F+.022),i(he+.012,Me-.14,F+.022),.039,D,"cabina",.034),l(y+.24,E+.442,F+.046,.093,.064,.035,"black","cabina")}if(T){let he=[[y+.016,E+.06],[y+.67,E+.06],[y+.82,E+.25],[y+.58,E+.54],[y+.025,E+.87]];X("yellow-trapezoid"+B,he,F+.022,.043,"paint","lamierati",.019),h(i(pe+.034,E+.58,F+.047),i(Y-.125,E+.64,F+.047),.035,D,"cabina")}}let Je=(B,F)=>i(we+(ie-we)*B,E+.13+(Me-E-.21)*B,F),ut=(B,F)=>i(y+.023+(_e-y)*B,E+.54+(Me-E-.65)*B,F);m("front-windscreen",[Je(0,K+.03),Je(0,O-.03),Je(1,O-.03),Je(1,K+.03)],te,"vetri"),m("back-windscreen",[ut(0,O-.04),ut(0,K+.04),ut(1,K+.04),ut(1,O-.04)],te,"vetri");for(let B of[0,w?.46:.31,1])h(Je(B,K),Je(B,O),B===1?.069:.043,w?"paint":D,"cabina");if(l((y+Y)/2,E,re,Y-y-.052,.092,k,D,"cabina"),X("roof-brow",[[_e-.09,Me-.028],[ie+.072,Me-.028],[ie+.13,Me+.022],[ie+.058,Me+.062],[_e-.073,Me+.056]],re,k+.095,w||T?"paint":D,"cabina",.024),l((_e+ie)*.5,Me+.077,re,.64,.023,.58,"rubber","cabina"),l((_e+ie)*.5,Me+.096,re,.6,.021,.54,b?"black":"paintDark","cabina"),b){let B=ie+.075,F=Me+.106,pe=Me+.302,xe=K+.018,Ce=O-.018;for(let Pe of[xe,Ce])u(i(B,F,Pe),i(B+.035,pe,Pe),.016,D,"cabina",10),h(i(B-.12,Me+.064,Pe),i(B,F,Pe),.025,D,"cabina");for(let Pe of[F+.015,pe])u(i(B+.029,Pe,xe),i(B+.029,Pe,Ce),.017,D,"cabina",12);for(let Pe of[xe+.105,(xe+Ce)*.5,Ce-.105]){l(B+.021,F+.099,Pe,.071,.147,.157,D,"cabina"),l(B+.059,F+.099,Pe,.011,.116,.128,"light","cabina");for(let $ of[-.03,.03])u(i(B+.068,F+.052,Pe+$),i(B+.068,F+.145,Pe+$),.004,"edge","cabina",6);l(B-.01,F+.007,Pe,.06,.044,.052,"iron","cabina")}}if(w){let B=a.paintDark.clone();B.color.setHex(12010529),B.roughness=.61;for(let F of[O+.043,K-.043]){let pe=E+.143;l((y+Y)*.5,pe,F,Y-y-.074,.04,.011,B,"lamierati"),l((y+Y)*.5,pe-.058,F,Y-y-.078,.014,.01,B,"lamierati")}for(let F of[E+.143,E+.085])l((L-.99)*.5,F,W+.052,-.99-L-.22,F>E+.1?.04:.014,.011,B,"lamierati")}let _t=y+.55;l(_t,E+.2,re,.33,.38,.39,"iron","cabina"),l(_t+.03,E+.4,re,.47,.12,.51,"interior","cabina"),l(_t-.19,E+.64,re,.12,.49,.47,"interior","cabina",.09),w||l(_t-.215,E+.91,re,.12,.16,.31,"interior","cabina",.09);for(let B of[-1,1])l(_t+.09,E+.48,re+B*.32,.33,.105,.119,"interior","cabina"),u(i(_t+.19,E+.5,re+B*.32),i(_t+.25,E+.68,re+B*.32),.016,"chrome","cabina",9),l(_t+.25,E+.71,re+B*.32,.054,.09,.044,"black","cabina",-.18),l(we-.2,E+.078,re+B*.16,.15,.041,.105,"rubber","cabina",-.14);let ht=y+.36;l(ht,ke-.104,O+.044,.185,.065,.041,"black","cabina");for(let B of[O-.12,K+.1])l(ie+.032,Me+.006,B,.124,.098,.155,D,"cabina"),l(ie+.099,Me+.004,B,.016,.07,.128,"light","cabina");let dt=Je(.11,O-.105),Lt=Je(.73,K+.27);u(dt,Lt,.011,"black","cabina",8),u(Lt.clone().add(i(.008,-.17,-.045)),Lt.clone().add(i(.008,.11,.033)),.015,"black","cabina",8),_("cab-handle",[i(Y-.07,E+.12,O+.04),i(Y-.02,E+.16,O+.124),i(ie+.09,Me-.32,O+.128),i(ie+.087,Me-.26,O+.044)],.023,w?"paint":T?R:"edge","cabina",16);for(let[B,F,pe]of[[-.72,S-.06,.74],[-.72,S-.28,.46]]){l(B,F,O+.144,pe,.069,.218,"iron","telaio");for(let xe=0;xe<7;xe++)l(B-pe*.41+xe*pe*.136,F+.04,O+.144,.016,.012,.195,"edge","telaio")}if(!w){let B=i(ie-.07,Me-.04,O),F=i(ie+.14,Me+.09,O+.23);u(B,F,.018,D,"cabina"),l(F.x,F.y-.083,F.z,.061,.18,.13,"black","cabina"),l(F.x+.034,F.y-.083,F.z,.009,.15,.109,"chrome","cabina"),l(we-.31,E+.77,K+.135,.081,T?.25:.18,T?.35:.16,"black","cabina",-.13)}if(T){for(let F of[O-.24,-.82]){let pe=z+.09,xe=Ae+.22;_("rail-arch-"+F,[i(-2.3,pe,F),i(-2.3,xe-.07,F),i(-2.36,xe,F),i(-3.04,xe,F),i(-3.11,xe-.08,F),i(-3.11,pe+.01,F)],.02,R,"cabina",22),h(i(-2.31,xe-.3,F),i(-3.1,xe-.3,F),.026,R,"cabina")}let B=o("roof-lamp",()=>new r.SphereGeometry(1,16,9,0,Math.PI*2,0,Math.PI/2));for(let[F,pe,xe]of[[_e+.19,K+.08,6309152],[_e+.18,O-.103,3172945]]){let Ce=P("Lente spia di tetto","light",xe),Pe=Me+.064;u(i(F,Pe,pe),i(F,Pe+.049,pe),.063,"black","cabina",16),u(i(F,Pe+.05,pe),i(F,Pe+.13,pe),.048,Ce,"cabina",18),c(B,Ce,i(F,Pe+.13,pe),M,i(.049,.03,.049),"cabina")}l(L+.08,z-.28,0,.089,.107,.145,D,"motore"),l(L+.03,z-.28,0,.012,.062,.063,te,"vetri")}if(b)return Rh(r,t);let le=w?[-.88,1.58]:[-.61,1.72],Ve=w?[4.02,4.32]:[4.06,4.94],ot=w?[3.32,1.28]:[4.13,1.45],lt=ot[0]-Ve[0],Qe=w?[.92,3.78]:[1.03,4.03],Yt=[le,[le[0]+.25,le[1]+.54],[Qe[0]-.31,Qe[1]-.22],Qe,[Qe[0]+.67,Qe[1]+.2],[Ve[0]-.68,Ve[1]-.1],[Ve[0]-.25,Ve[1]-.035],Ve],zt=w?[.18,.31,.335,.38,.32,.22,.177,.17]:[.164,.25,.358,.37,.321,.215,.171,.155];function Pn(B,F,pe,xe,Ce){let Pe=new r.CatmullRomCurve3(F.map(Ee=>i(Ee[0],Ee[1],0)),!1,"centripetal"),$=new r.CatmullRomCurve3(F.map((Ee,De)=>i(De,pe[De],0)),!1,"catmullrom",.32),he=[],fe=[];for(let Ee=0;Ee<=25;Ee++){let De=Ee/25,He=Pe.getPoint(De),Be=Pe.getTangent(De),We=$.getPoint(De).y;he.push([He.x-Be.y*We,He.y+Be.x*We]),fe.push([He.x+Be.y*We,He.y-Be.x*We])}let Se=[...he,...fe.reverse()],Ne=xe/2-.033;for(let Ee of[-1,1])X(B+"-flank",Se,N+Ee*Ne,.07,Ce,"braccio",.018);function Oe(Ee,De){let He=[],Be=[],We=[],$e=xe/2-.068;Ee.forEach(([A,Z],ue)=>{if(He.push(A,Z,N-$e,A,Z,N+$e),Be.push(ue/Ee.length,0,ue/Ee.length,1),ue){let ge=ue*2;We.push(ge-2,ge,ge-1,ge,ge+1,ge-1,ge-1,ge,ge-2,ge-1,ge+1,ge)}});let nt=new r.BufferGeometry;nt.setAttribute("position",new r.Float32BufferAttribute(He,3)),nt.setAttribute("uv",new r.Float32BufferAttribute(Be,2)),nt.setIndex(We);let yt=[];for(let A=0;A<Ee.length;A++){let Z=Ee[Math.max(A-1,0)],ue=Ee[Math.min(A+1,Ee.length-1)],ge=ue[0]-Z[0],ye=ue[1]-Z[1],Te=Math.hypot(ge,ye);yt.push(-ye/Te,ge/Te,0,-ye/Te,ge/Te,0)}nt.setAttribute("normal",new r.Float32BufferAttribute(yt,3)),nt.computeBoundingBox();let Mt=nt.boundingBox.getCenter(i());nt.translate(-Mt.x,-Mt.y,-Mt.z),c(nt,Ce,Mt,M,H,"braccio");for(let A of[-1,1])_(B+"-weld"+De+A,Ee.map(Z=>i(Z[0],Z[1],N+A*(xe/2-.014))),.0105,se,"braccio",29)}Oe(he,"upper"),Oe(fe,"lower")}let cn=[Ve[0]+(w?.23:.28),Ve[1]+(w?.69:.84)],Vt=[cn,[Ve[0]+.047,Ve[1]+.17],Ve,[Ve[0]+lt*.22+.06,Ve[1]-.51],[ot[0]-.035,ot[1]+.87],ot];Pn("main-boom",Yt,zt,w?.49:.5,de),Pn("dipper",Vt,[.093,.164,.19,.234,.152,.107],w?.358:.347,de);function nn(B,F,pe,xe,Ce=de){for(let Pe of[-1,1])p(B,F,N+Pe*xe*.5,pe,.092,Ce,"braccio",28),p(B,F,N+Pe*(xe*.5+.058),pe*.78,.046,se,"braccio",26),f(B,F,N+Pe*(xe*.5+.107),pe*.26,Pe);g(B,F,N,pe*.5,xe+.2,"braccio")}function Zt(B,F,pe,xe,Ce=.5){let Pe=[[F-.16,pe-.22],[F+.155,pe-.22],[F+.133,pe+.075],[F+.025,pe+.14],[F-.095,pe+.1]];for(let $ of[-1,1])X(B,Pe,N+$*Ce*.5,.073,xe,"braccio",.014)}Zt("boom-pedestal",le[0],le[1],se,.58),nn(le[0],le[1],.18,.6),nn(Ve[0],Ve[1],.153,.534);function It(B,F,pe,xe=se,Ce=.63){let Pe=B.clone().lerp(F,Ce);u(B,Pe,pe,xe,"pistoni",20),u(B.clone().lerp(F,.02),B.clone().lerp(F,.074),pe*1.075,ee,"pistoni",20),u(B.clone().lerp(F,Ce-.031),Pe.clone().lerp(F,.024),pe*1.13,"iron","pistoni",22),u(Pe,F,pe*.58,"chrome","pistoni",20);for(let he of[B,F])p(he.x,he.y,he.z,pe*1.24,pe*1.9,xe,"pistoni",22),p(he.x,he.y,he.z+pe*1.09,pe*.59,.035,"bolt","bulloneria",12);let $=B.clone().lerp(F,.15);u($.clone().add(i(0,0,pe*.6)),$.clone().add(i(.025,0,pe*1.43)),pe*.23,"edge","pistoni",8)}for(let B of[-1,1]){let F=N+B*.331;It(i(le[0]+.46,1.41,F),i(Qe[0]-.38,Qe[1]-.35,F),w?.113:.108);let pe=[[le[0]-.1,le[1]-.088],[le[0]-.097,le[1]+.18],[le[0]+.3,le[1]+.55],[le[0]+.46,le[1]+.4],[le[0]+.13,le[1]-.045]];X("boom-root-facing",pe,N+B*.257,.034,de,"braccio")}let ft=i(Qe[0]+.2,Qe[1]+(w?.49:.44),N);Zt("stick-pickup-clevis",ft.x,ft.y,se,.23),It(ft,i(cn[0],cn[1],N),.11,ee,.586);let Ut=i(Ve[0]+(w?.32:.4),Ve[1]-.235,N+.032),mt=i(ot[0]+(w?.56:.62),ot[1]+.47,N+.032),Rt=i(ot[0]+.18,ot[1]+.085,N+.032),St=[[Ve[0]+.06,Ve[1]-.035],[Ve[0]+.28,Ve[1]-.09],[Ut.x+.084,Ut.y+.05],[Ut.x+.067,Ut.y-.05],[Ut.x-.09,Ut.y-.09],[Ve[0]+.04,Ve[1]-.18]];for(let B of[-1,1])X("riser-for-bucket-ram",St,N+B*.127,.092,de,"braccio",.015);It(Ut,mt,.0885,de,.6);for(let B of[-1,1]){let F=i(0,0,B*.215),pe=[[mt.x-.084,mt.y+.062],[mt.x+.052,mt.y+.1],[mt.x+.105,mt.y-.012],[Rt.x+.105,Rt.y-.012],[Rt.x+.031,Rt.y-.076],[Rt.x-.064,Rt.y-.046],[Rt.x-.042,Rt.y+.068]];X("curved-bucket-link",pe,N+B*.212,.086,se,"benna",.015),h(mt.clone().add(F),i(ot[0]-.04,ot[1]+.69,N+B*.215),.084,de,"benna",.06)}g(mt.x,mt.y,N,.074,.59,"benna"),g(Rt.x,Rt.y,N,.068,.59,"benna");for(let B=0;B<(T?5:3);B++){let F=N-.17+B*(T?.081:.145),pe=B*.013,xe=[i(-1.18,1.64,F),i(-.82,1.97,F-.035),i(-.53,2.17,F),i(Qe[0]-.33,Qe[1]+.19+pe,F),i(Qe[0]+.15,Qe[1]+.37+pe,F),i(Qe[0]+.69,Qe[1]+.445+pe,F),i(Ve[0]-.66,Ve[1]+.181+pe,F)];_("hard-feed"+B,xe,.019,T?"track":"iron","tubazioni",25);let Ce=xe[xe.length-1],Pe=[Ce,i(Ve[0]-.31,Ve[1]+.251+pe,F),i(Ve[0]-.048,Ve[1]+.19,F+.04),i(Ve[0]+.125,Ve[1]+.016,F+.075),i(Ve[0]+.17,Ve[1]-.32,F+.077)];_("flex-on-knuckle"+B,Pe,.021,"rubber","tubazioni",17);let $=Pe[Pe.length-1];_("dipper-line"+B,[$,i(Ve[0]+.2+lt*.14,Ve[1]-.64,F+.08),i(ot[0]+.111,ot[1]+.9,F+.066),i(ot[0]+.14,ot[1]+.6,F+.061)],.0148,T?"track":"rubber","tubazioni",15);let he=Pe[1].clone().sub(Ce).normalize(),fe=Se=>Ce.clone().addScaledVector(he,Se);u(fe(-.066),fe(-.025),.035,"edge","tubazioni",6),u(fe(-.025),fe(.023),.029,"iron","tubazioni",18),u(fe(.023),fe(.064),.037,"edge","tubazioni",6);for(let Se of[.073,.086,.099])u(fe(Se),fe(Se+.005),.027,"iron","tubazioni",14)}for(let B of[.21,.51,.78]){let F=Qe[0]+(Ve[0]-Qe[0])*B;l(F,Qe[1]+.4+(Ve[1]+.18-Qe[1]-.4)*B,N,.063,.048,.464,se,"tubazioni")}let wt=N+.285;for(let[B,F]of[[0,0],[1,.057]]){let pe=[i(Qe[0]-.69,Qe[1]-.47+F,wt),i(Qe[0]-.39,Qe[1]-.12+F,wt),i(Qe[0]+.05,Qe[1]+.12+F,wt),i(Qe[0]+.56,Qe[1]+.15+F,wt),i(Qe[0]+1.13,Qe[1]+.16+F,wt)];_("outboard-pipe"+B,pe,.017,B?"rubber":"edge","tubazioni",18);for(let xe of[0,4]){let Ce=pe[xe];u(i(Ce.x-.037,Ce.y,Ce.z),i(Ce.x+.037,Ce.y,Ce.z),.028,"bolt","tubazioni",6)}}for(let[B,F]of[[Qe[0]-.4,Qe[1]-.105],[Qe[0]+.56,Qe[1]+.167]])l(B,F,wt+.019,.052,.13,.039,se,"tubazioni"),p(B,F+.039,wt+.049,.015,.015,"bolt","bulloneria",6);let rn=N+.235;for(let B=0;B<3;B++){let F=rn+B*.032,pe=B*.025,xe=[i(Ve[0]-.32,Ve[1]+.116+pe,F-.025),i(Ve[0]-.13,Ve[1]+.187+pe,F),i(Ve[0]+.125,Ve[1]+.1+pe,F+.065),i(Ve[0]+.2,Ve[1]-.28-pe,F+.11),i(Ve[0]+.07,Ve[1]-.56-pe,F+.105),i(Ve[0]-.135,Ve[1]-.58-pe,F+.039)];_("flexible-loop"+B,xe,.019,"rubber","tubazioni",23);let Ce=xe.at(-1);u(Ce,Ce.clone().add(i(-.018,-.066,0)),.029,"edge","tubazioni",8)}let U=N+.237;for(let B=0;B<(T?3:2);B++){let F=(B-1)*.055,pe=Ve[0]+.12+F,xe=i(pe,Ve[1]-.64,U+.042),Ce=i(ot[0]+.11+F,ot[1]+.85,U+.042);u(xe,Ce,.019,T?"edge":"iron","tubazioni",12);for(let Pe of[0,.27,.9]){let $=xe.clone().lerp(Ce,Pe);u($,$.clone().add(i(0,-.07,0)),.027,"track","tubazioni",8)}}if(T){let B=Ve[0]+lt*.41+.053,F=Ve[1]+(ot[1]-Ve[1])*.41;l(B,F,N+.202,.18,.083,.045,D,"braccio",-1.4);for(let pe of[-.061,.061])f(B,F+pe,N+.236,.014)}let oe=ot[0],me=ot[1]-(T?.21:.15),be=w?1.2:1.26,ve=Math.max(.65,Math.min(1.26,me-.045)),Fe=w?.99:.83,je=[[-Fe,-.86],[-.61,-.94],[-.34,-.987],[-.08,-1],[.19,-.962],[.41,-.85],[.56,-.67],[.66,-.44],[.67,-.23],[.61,-.067],[.54,.045],[.34,.17],[.14,.156],[-.035,.031],[-.15,-.15],[-.32,-.39],[-.54,-.62]],qe=je.slice(0,12).map(([B,F])=>[oe+B,me+F*ve]);for(let B of[-1,1])X("dished-bucket-side",je.map(([xe,Ce])=>[oe+xe,me+Ce*ve]),N+B*be*.48,.064,ae,"benna",.018),B===1&&(n={partIndex:s.length-1,point:i(oe+.642,me-.2*ve,N+be*.48)}),X("bucket-side-wear",[[-.81,-.827],[-.58,-.92],[-.18,-.95],[.19,-.92],[.49,-.76],[.45,-.66],[.1,-.81],[-.46,-.8]].map(([xe,Ce])=>[oe+xe,me+Ce*ve]),N+B*(be*.5+.03),.029,Q,"benna",.008),X("linkage-pin-ear",[[-.25,-.075],[-.2,.141],[-.045,.232],[.145,.197],[.237,.057],[.17,-.11]].map(([xe,Ce])=>[oe+xe,me+Ce]),N+B*.198,.072,ae,"benna",.013);if(T)for(let B of[-1,1]){let F=N+B*(be*.5+.041);for(let pe=0;pe<3;pe++){let xe=-.43+pe*.34,Ce=[[xe,-.8],[xe+.23,-.83],[xe+.31,-.59],[xe+.076,-.55]];X("lower-wear-pad"+pe,Ce.map(([Pe,$])=>[oe+Pe,me+$*ve]),F,.031,ae,"benna",.015)}l(oe+.105,me-.337*ve,F+B*.018,.31,.056,.027,ae,"benna",-.055)}for(let B of[-1,1]){let F=N+B*(be*.5+.053);X("bucket-side-cutter",[[-.76,-.79],[-.56,-.76],[-.28,-.47],[-.21,-.3],[-.3,-.32],[-.59,-.58]].map(([Pe,$])=>[oe+Pe,me+$*ve]),F,.071,ae,"benna",.014),X("side-cutter-ground-edge",[[-.76,-.8],[-.56,-.768],[-.27,-.463],[-.22,-.33],[-.283,-.452],[-.6,-.71]].map(([Pe,$])=>[oe+Pe,me+$*ve]),F+B*.039,.012,Q,"benna",.004);for(let[Pe,$]of[[-.57,-.695],[-.402,-.51]])p(oe+Pe,me+$*ve,F+B*.042,.057,.01,"track","bulloneria",18),p(oe+Pe,me+$*ve,F+B*.054,.04,.025,"bolt","bulloneria",6);X("bucket-cheek-wear-pad",[[.13,-.74],[.34,-.63],[.48,-.46],[.52,-.26],[.45,-.16],[.41,-.37],[.28,-.57],[.09,-.68]].map(([Pe,$])=>[oe+Pe,me+$*ve]),F-B*.012,.034,ae,"benna",.012),_("wear-pad-weld"+B,[[.11,-.71],[.31,-.6],[.43,-.43],[.46,-.26]].map(([Pe,$])=>i(oe+Pe,me+$*ve,F+B*.012)),.012,"edge","benna",13)}for(let B=0;B<qe.length-1;B++){let[F,pe]=qe[B],[xe,Ce]=qe[B+1];h(i(F,pe,N),i(xe,Ce,N),.066,ae,"benna",be-.04)}for(let B of[-1,0,1]){let F=N+B*be*.28;_("abrasion-rib"+B,qe.slice(1,9).map(([pe,xe])=>i(pe+.03,xe-.032,F)),.031,"iron","benna",15)}h(i(oe-Fe,me-.86*ve,N-be*.5),i(oe-Fe,me-.86*ve,N+be*.5),.105,"edge","benna");for(let B=0;B<5;B++){let F=N-be*.41+B*be*.205;X("forged-tooth",[[oe-.74,me-.83*ve],[oe-.92,me-.84*ve],[oe-1.107,me-.908*ve],[oe-1.13,me-.955*ve],[oe-1.006,me-.958*ve],[oe-.74,me-.912*ve]],F,.118,Q,"benna",.011),p(oe-.872,me-.888*ve,F+.064,.019,.014,"bolt","bulloneria",8)}return g(oe,me+.06,N,.096,.58,"benna"),n}function ui(r,e,t){let i=new Uint8Array(262144),s=new Uint8Array(256*256*4),a=(d,m,g)=>d+(m-d)*g,o=(d,m,g)=>{let f=Math.max(0,Math.min(1,(g-d)/(m-d)));return f*f*(3-2*f)};function c(d,m,g){let f=Math.imul(d^g,668265261)^Math.imul(m+17,374761393);return f=Math.imul(f^f>>>15,2246822507),((f^f>>>13)>>>0)/4294967295}let l=(d,m,g,f,x)=>{let _=d*g,v=m*f,M=Math.floor(_),w=Math.floor(v),b=(P,D)=>c((P%g+g)%g,(D%f+f)%f,x),T=o(0,1,_-M),H=o(0,1,v-w);return a(a(b(M,w),b(M+1,w),T),a(b(M,w+1),b(M+1,w+1),T),H)};for(let d=0;d<256;d++)for(let m=0;m<256;m++){let g=m/256,f=d/256,x=(d*256+m)*4,_=t.seed,v=l(g,f,4,3,_),M=l(g,f,14,11,_+4),w=c(m,d,_+7),b=l(g,f,49,27,_+2),T=l(g,f,73,6,_+19),H=v*.41+M*.23+b*.17+T*.15+w*.04,P=o(t.cut-.07,t.cut+.045,H),D=o(.49,.71,v*.37+b*.32+M*.2+w*.11),ee=o(.72,.93,T)*(.25+.75*M);for(let R=0;R<3;R++){let J=t.paint[R]*(.84+.2*M+.09*w),j=a(t.metal[R],t.oxide[R],D)*(.88+.16*b+.08*w);i[x+R]=Math.min(255,a(a(J,j,P),t.metal[R],ee*.17))}i[x+3]=255,s[x]=Math.round(255*(.56+.04*w+.035*b-.095*P+.04*D)),s[x+1]=Math.round(255*a(.6+.085*M,.39+.4*D+.1*b,P)),s[x+2]=Math.round(255*a(.11,.72-.4*D,P)),s[x+3]=255}function h(d,m){let g=new r.DataTexture(d,256,256,r.RGBAFormat);return g.wrapS=g.wrapT=r.RepeatWrapping,g.magFilter=r.LinearFilter,g.minFilter=r.LinearMipmapLinearFilter,g.generateMipmaps=!0,m&&(g.colorSpace=r.SRGBColorSpace),g.anisotropy=3,g.needsUpdate=!0,g}let u=h(i,!0),p=h(s,!1);return new r.MeshStandardMaterial({name:e,map:u,bumpMap:p,roughnessMap:p,metalnessMap:p,bumpScale:.021,metalness:1,roughness:1,envMapIntensity:.98})}function Ih(r,e,t){let{V:n,box:i,bar:s,rod:a,plate:o,disc:c,pin:l,ring:h,bolts:u,machineScrew:p,append:d,round:m,cache:g,identity:f,quad:x,conduit:_,parts:v}=e,M=-.37,w=(A,Z,ue)=>{let ge=A.clone();return ge.color.set(ue),ge.name=Z,ge},b=ui(r,"Ocra industriale invecchiato",{seed:53,paint:[211,158,48],metal:[130,123,101],oxide:[96,75,54],cut:.675}),T=ui(r,"Rosso ossidato e lamiera scoperta",{seed:71,paint:[124,44,46],metal:[125,111,96],oxide:[98,73,57],cut:.663}),H=ui(r,"Cassone del braccio in acciaio antracite",{seed:12,paint:[46,47,44],metal:[101,99,90],oxide:[87,65,49],cut:.63}),P=ui(r,"Asta di spinta e guide brunite",{seed:24,paint:[51,54,52],metal:[114,111,96],oxide:[90,68,43],cut:.605}),D=ui(r,"Fusione consumata della benna",{seed:39,paint:[117,113,96],metal:[111,109,96],oxide:[133,98,75],cut:.467}),ee=ui(r,"Interno della benna segnato dalla terra",{seed:46,paint:[48,50,45],metal:[73,75,66],oxide:[83,64,53],cut:.47}),R=ui(r,"Pattini ossidati",{seed:44,paint:[75,69,59],metal:[124,118,100],oxide:[121,89,61],cut:.563}),J=ui(r,"Acciaio fuso del telaio",{seed:14,paint:[103,108,100],metal:[135,137,124],oxide:[111,83,66],cut:.518}),j=w(t.iron,"Battute di acciaio esposto",12764084),te=b,de=t.glass.clone();de.name="Vetro storico neutro",de.color.set(4477529),de.opacity=.49,de.metalness=.13,de.clearcoat=.58,de.envMapIntensity=.76;let ae=(A,Z,ue,ge=1,ye=.019)=>{c(A,Z,ue,ye,.01,"iron","bulloneria",10),c(A,Z,ue+ge*.007,ye*.81,.012,"bolt","bulloneria",10)},Q=(A,Z)=>A.map(([ue,ge])=>n(ue,ge,Z)),se=(A,Z,ue,ge,ye,Te,Ze,Ye,et,kt="lamierati")=>x(A,[n(Z,Te,ue),n(ge,Te,ye),n(ge,Ye,ye),n(Z,Ze,ue)],et,kt),L=(A,Z,ue,ge,ye="telaio")=>a(A,Z,ue,ge,ye,10),W=(A,Z,ue,ge,ye,Te)=>{let Ze=new r.Shape(A.map(([kt,Ht])=>new r.Vector2(kt,Ht)));Ze.closePath(),Z.forEach(kt=>{let Ht=new r.Path(kt.map(([fn,gt])=>new r.Vector2(fn,gt)));Ht.closePath(),Ze.holes.push(Ht)});let Ye=new r.ExtrudeGeometry(Ze,{depth:ge,bevelEnabled:!1,curveSegments:3});Ye.computeBoundingBox();let et=Ye.boundingBox.getCenter(n());Ye.translate(-et.x,-et.y,-et.z),d(Ye,ye,n(et.x,et.y,ue),f,n(1,1,1),Te)},Ae=g("perforated-period-shoe",()=>{let A=new r.Shape;[[-.5,-.4],[-.43,-.5],[.42,-.5],[.5,-.42],[.5,.42],[.42,.5],[-.43,.5],[-.5,.4]].forEach(([ge,ye],Te)=>Te?A.lineTo(ge,ye):A.moveTo(ge,ye)),A.closePath();for(let ge of[-.275,.275]){let ye=new r.Path;ye.absellipse(.04,ge,.115,.052,0,2*Math.PI,!0,0),A.holes.push(ye)}let ue=new r.ExtrudeGeometry(A,{depth:.76,bevelEnabled:!0,bevelSize:.011,bevelThickness:.04,bevelSegments:1,curveSegments:6});return ue.translate(0,0,-.38),ue.rotateX(Math.PI*.5),ue});for(let A of v)A.group==="cingoli"&&A.scale.z>.53&&A.scale.z<.56&&(A.scale.y>.064?(A.geometry=Ae,A.material=R,A.scale.z*=1.22,A.scale.x*=1.055):(A.scale.z*=1.16,A.scale.y*=.57,A.material=R));for(let A of[-1,1]){let Z=A*1.112,ue=[[-3.56,.58],[-3.37,.78],[-2.91,.814],[-.33,.807],[-.064,.715],[.17,.642],[.12,.49],[-.18,.399],[-2.71,.34],[-3.46,.435]],ge=[-2.44,-1.43].map(ye=>Array.from({length:16},(Te,Ze)=>[ye+.059*Math.cos(Ze*Math.PI/8),.663+.057*Math.sin(Ze*Math.PI/8)]));W(ue,ge,Z,.074,J,"telaio");for(let ye of[-3.17,-2.93,-.39,-.16])s(n(ye,.6,Z+A*.032),n(ye+.25,.6,Z+A*.032),.027,"edge","telaio",.044);s(n(-3.2,.402,Z+A*.041),n(-.375,.402,Z+A*.041),.039,J,"telaio",.057)}let S=v.length,E=[[-2.88,-1.16],[-3.19,-1.135],[-3.46,-1.025],[-3.65,-.85],[-3.76,-.64],[-3.8,-.38],[-3.8,.38],[-3.76,.64],[-3.65,.85],[-3.46,1.025],[-3.19,1.135],[-2.88,1.16]],z=[[-3.81,3.33],[-3.55,3.4],[-3.2,3.51],[-2.89,3.59],[-2.32,3.72],[-1.7,3.79],[-1.1,3.82],[-.51,3.77],[-.17,3.64],[.02,3.48]];function N(A){let Z=z.findIndex(ye=>ye[0]>=A);if(Z<=0)return z[Z===0?0:z.length-1][1];let[ue,ge]=[z[Z-1],z[Z]];return ue[1]+(ge[1]-ue[1])*(A-ue[0])/(ge[0]-ue[0])}let I=1.48,X=2.34,G=3.27;i(-1.55,1.39,0,3.59,.18,2.39,J,"telaio"),i(-3.18,1.35,0,1.15,.24,1.93,"iron","telaio"),E.slice(0,-1).forEach(([A,Z],ue)=>{let[ge,ye]=E[ue+1],Te=(A+ge)/2;se("rb-stern-deck-"+ue,A-.105,Z*1.04,ge-.105,ye*1.04,1.25,1.49,1.49,J,"telaio"),se("rb-stern-low-"+ue,A,Z,ge,ye,I,X,X,T),se("rb-stern-upper-"+ue,A,Z,ge,ye,X,G,G,b),se("rb-stern-rim-"+ue,A,Z*1.005,ge,ye*1.005,G,N(A),N(ge),te);let Ze=n(A,N(A),Z),Ye=n(ge,N(ge),ye);x("rb-rear-roof-"+ue,[Ze,Ye,n(-2.88,N(-2.88)+.035,0),n(Te,(N(A)+N(ge))*.5+.016,(Z+ye)*.3)],te,"lamierati")});let q=(A,Z,ue,ge,ye,Te,Ze)=>o(A,[[Z,ge],[ue,ge],[ue,ye],[Z,ye]],Te,.035,Ze,"lamierati",.006);for(let A of[-1,1]){let Z=A*1.16;i(-2.69,2.38,Z-A*.021,.6,1.78,.049,"interior","motore");for(let ye=0;ye<16;ye++){let Te=1.52+ye*.113;i(-2.69,Te,Z,.556,.053,.085,Te<X?T:b,"motore");for(let Ze of[-1,1])ye%5===0&&ae(-2.69+Ze*.307,Te,Z+A*.043,A,.014)}for(let ye of[-.325,.327])i(-2.69+ye,2.39,Z,.037,1.81,.048,J,"lamierati");let ue=[[-2.34,-1.84],[-1.824,-1.18]];A<0&&ue.push([-1.16,-.5],[-.48,.01]);for(let[ye,Te]of ue){q("rb-plate-low"+ye,ye,Te,I,X,Z,T),q("rb-plate-high"+ye,ye,Te,X+.006,G,Z,b),A===1&&ye===-2.34&&(v[v.length-1].captionPoint=n(ye+.125,G-.115,Z+.025));for(let Ze of[ye+.03,Te-.035])for(let Ye of[1.57,2.28,2.77,3.17])ae(Ze,Ye,Z+A*.027,A)}if(A<0){i(-1.78,2.76,Z-.037,.35,.25,.014,"interior","motore");for(let ye=0;ye<7;ye++)i(-1.78,2.66+ye*.035,Z-.051,.32,.014,.028,b,"motore")}let ge=[-2.89,-2.31,-1.66,-.93,-.37,-.17];for(let ye=0;ye<ge.length-1;ye++){let Te=ge[ye],Ze=ge[ye+1];se("rb-gutter"+A+"-"+ye,Te,Z+A*.009,Ze,Z+A*.009,G,N(Te),N(Ze),te);for(let Ye of[Te+.052,Ze-.048])ae(Ye,N(Ye)-.054,Z+A*.023,A,.015)}}let ne=[-2.89,-2.32,-1.7,-1.1,-.51,-.17];for(let A=0;A<ne.length-1;A++){let Z=ne[A],ue=ne[A+1],ye=(A>=3?[[-1.165,-1.145,-1.095,-.99,-.65],[.095,.99,1.095,1.145,1.165]]:[[-1.165,-1.145,-1.095,-.99,0,.99,1.095,1.145,1.165]]).flatMap(Te=>Te.slice(1).map((Ze,Ye)=>[Te[Ye],Ze]));for(let Te=0;Te<ye.length;Te++){let[Ze,Ye]=ye[Te],et=kt=>.108*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(kt)/1.165,12)))+.025*(1-Math.abs(kt)/1.165);x("rb-crown-"+A+"-"+Te,[n(Z,N(Z)+et(Ze),Ze),n(ue,N(ue)+et(Ze),Ze),n(ue,N(ue)+et(Ye),Ye),n(Z,N(Z)+et(Ye),Ye)],te,"lamierati")}}o("rb-rolled-windscreen-brow",[[-.205,3.297],[-.205,3.648],[-.157,3.617],[-.099,3.556],[-.019,3.432],[.036,3.385],[.046,3.35],[-.069,3.338],[-.104,3.297]],.635,1.097,te,"lamierati",.009);for(let A of[-2.31,-1.66,-1.03,-.47]){let Z=N(A),ue=[n(A,Z-.02,-1.135),n(A,Z+.057,-1.058),n(A,Z+.092,-.88),n(A,Z+.103,0),n(A,Z+.092,.88),n(A,Z+.057,1.058),n(A,Z-.02,1.135)];A<-1.05&&_("22rb-roof-hoop-"+A,ue,.021,J,"telaio",26);for(let ge of[-1,1])a(n(A,Z-.054,ge*1.116),n(A,Z+.027,ge*1.097),.018,"iron","bulloneria",10)}let C=1.161,y=[[-1.17,I],[.21,I],[.21,2.32],[-.13,3.29],[-1.17,3.29]],k=[[-1.105,2.66],[-1.01,2.53],[-.845,2.46],[-.65,2.435],[-.02,2.395],[.061,2.427],[.071,2.51],[-.155,3.15],[-.22,3.207],[-.39,3.223],[-.68,3.2],[-.865,3.144],[-1.018,3.046],[-1.09,2.91],[-1.116,2.77]].map(([A,Z])=>[.071+(A-.071)*.18,Z]);function O(){let A=new r.Shape(Q(y,0).map(ye=>new r.Vector2(ye.x,ye.y)));A.closePath();let Z=new r.Path(Q(k,0).map(ye=>new r.Vector2(ye.x,ye.y)));Z.closePath(),A.holes.push(Z);let ue=new r.ExtrudeGeometry(A,{depth:.026,bevelEnabled:!1,curveSegments:2});ue.computeBoundingBox();let ge=ue.boundingBox.getCenter(n());ue.translate(-ge.x,-ge.y,-ge.z),d(ue,b,n(ge.x,ge.y,C),f,n(1,1,1),"cabina")}let K=v.length;O(),o("rb-door-lower",[[-1.16,1.488],[.2,1.488],[.2,2.315],[.192,X],[-1.16,X]],C+.021,.028,T,"cabina",.006),o("rb-cab-sideglass",k,C-.019,.014,de,"vetri",.001);for(let A=0;A<k.length;A++){let Z=k[A],ue=k[(A+1)%k.length];L(n(Z[0],Z[1],C+.025),n(ue[0],ue[1],C+.025),.023,"edge","cabina")}for(let[A,Z]of[[[-1.165,1.5],[-1.165,3.29]],[[.205,1.5],[.205,2.34]],[[.205,2.34],[-.14,3.29]]])L(n(...A,C+.035),n(...Z,C+.035),.018,J,"cabina");i(.124,2.18,C+.05,.052,.119,.028,"iron","cabina"),L(n(.13,2.13,C+.075),n(.13,2.22,C+.075),.015,"edge","cabina");let re=1;for(let A of v.slice(K))A.position=A.position.clone().add(n(-re,0,.047));let ie=C+.052;for(let A of[I+.018,3.292])s(n(-2.235,A,ie),n(.002,A,ie),.032,J,"cabina",.037);for(let A of[-2.05,-1.02])c(A,1.538,ie+.012,.044,.046,"iron","trasmissione",16),u(A,1.538,ie+.036,.016);i(-1.139,2.3,.69,.055,1.62,.96,"interior","cabina"),i(-.53,1.483,.7,1.29,.062,.93,J,"cabina");let _e=n(-.41,1.344,1.236);for(let A of[-.23,.23])s(n(_e.x+A,_e.y,_e.z),n(_e.x+A,1.49,1.089),.034,"iron","cabina",.043);s(n(_e.x-.26,_e.y,_e.z),n(_e.x+.27,_e.y,_e.z),.05,J,"cabina",.097);for(let[A,Z]of[[-2.34,-2.19],[-2.14,-.88]])for(let ue=0;ue<3;ue++)i((A+Z)/2,2.362+ue*.048,C+(A>=-2.14?.1:.027),Z-A,.022,.009,T,"lamierati");let Me=(A,Z,ue,ge,ye,Te)=>{let Ze=.24-Math.max(0,ge-2.31)*.36,Ye=.24-Math.max(0,ye-2.31)*.36;x(A,[n(Ze,ge,Z),n(Ze,ge,ue),n(Ye,ye,ue),n(Ye,ye,Z)],Te,"vetri")};Me("rb-front-main",.16,1.104,2.35,3.25,de),Me("rb-front-low",.2,1.07,1.91,2.24,de),i(.236,1.677,.631,.061,.379,1.045,T,"cabina");for(let A of[.168,1.097])L(n(.274,1.89,A),n(.274,2.258,A),.013,"edge","cabina"),L(n(.274,2.353,A),n(-.077,3.242,A),.015,"edge","cabina");for(let A of[1.898,2.26,2.347])L(n(.265,A,.162),n(.265,A,1.108),.013,"edge","cabina");for(let A of[.12,1.136])L(n(.25,1.53,A),n(.25,2.31,A),.035,b,"cabina"),L(n(.25,2.31,A),n(-.11,3.31,A),.036,b,"cabina");for(let A of[1.62,2.295,3.29]){let Z=.25-Math.max(0,A-2.31)*.36;L(n(Z,A,.11),n(Z,A,1.14),.037,b,"cabina")}i(-.14,3.31,.63,.12,.1,1.05,b,"cabina");let we=n(-.21,3.41,1.05);i(we.x,we.y,.63,.36,.048,.85,"interior","cabina",-.04),i(-2.55,N(-2.55)+.151,-.33,.82,.045,.47,te,"lamierati"),L(n(-2.8,N(-2.8)+.185,-.46),n(-2.29,N(-2.29)+.185,-.46),.019,J,"cabina"),a(n(-2.86,3.61,-.58),n(-2.03,3.61,-.58),.076,"iron","motore",18),_("rb-exhaust-tail",[n(-2.9,3.57,-.58),n(-2.92,3.65,-.58),n(-3.04,3.72,-.58)],.044,"track","motore",9),i(-.63,2.02,.126,1.12,.93,.036,"interior","cabina"),o("rb-driver-bulkhead",[[-1.15,2.485],[-.035,2.485],[-.2,3.18],[-1.15,3.235]],.126,.032,"interior","cabina",.004),i(-.91,1.82,.79,.23,.42,.23,"track","cabina"),i(-.81,2.045,.79,.53,.12,.47,"interior","cabina"),i(-1.029,2.294,.79,.101,.494,.429,"interior","cabina",.09);for(let A=0;A<4;A++){let Z=.32+A*.17,ue=n(-.36+A%2*.04,2.37+A%2*.075,Z);L(n(-.46,1.64,Z),ue,.019,"iron","cabina"),L(ue,ue.clone().add(n(-.027,.096,0)),.03,"interior","cabina"),i(-.23,1.56,Z,.161,.039,.075,"track","cabina")}o("rb-dash-side",[[-.58,2.36],[-.42,2.365],[-.28,2.51],[-.31,2.576],[-.57,2.55]],.235,.117,"track","cabina",.014);for(let A of[-.515,-.429])c(A,2.49,.304,.035,.013,"iron","cabina",22),c(A,2.49,.315,.026,.006,"light","cabina",16);a(n(-.16,1.561,.96),n(-.19,2.435,.88),.018,j,"cabina",14);let Re=g("rb-lever-knob",()=>new r.SphereGeometry(1,14,9));d(Re,t.rubber,n(-.19,2.435,.88),f,n(.047,.058,.046),"cabina");let Le=v.length;for(let[A,Z]of[[-2.21,-.16],[-2.42,-.39],[-2.69,-.16],[-2.91,-.39]])i(A,2.08,Z,.23,.56,.26,"iron","motore"),i(A,2.39,Z,.2,.125,.238,"track","motore");for(let[A,Z,ue]of[[0,-.57,.24],[1,-1.36,.31]]){let ge=2.02+A*.21;c(Z,ge,M,ue,.76,"iron","trasmissione");for(let ye=0;ye<14;ye++)h(Z,ge,M-.306+ye*.047,ue,.015,"edge","trasmissione");for(let ye of[-1,1])c(Z,ge,M+ye*.377,ue*1.21,.051,"track","trasmissione"),c(Z,ge,M+ye*.413,ue*.45,.083,"iron","trasmissione");h(Z,ge,M-.43,ue*.99,.032,"rust","trasmissione")}let ke=n(-.1,1.38,M),Ue=n(4.84,5.99,M),Ge=Ue.clone().sub(ke).normalize(),Xe=n(-Ge.y,Ge.x,0),Je=(A,Z=0)=>ke.clone().lerp(Ue,A).addScaledVector(Xe,Z*1.27),ut=A=>A.map(([Z,ue])=>{let ge=Je(Z,ue);return[ge.x,ge.y]}),_t=(A,Z,ue,ge,ye=20)=>{let Te=n(-Z.y,Z.x,0);return Array.from({length:ye},(Ze,Ye)=>{let et=Ye*2*Math.PI/ye;return[A.x+Z.x*ue*Math.cos(et)+Te.x*ge*Math.sin(et),A.y+Z.y*ue*Math.cos(et)+Te.y*ge*Math.sin(et)]})},ht=ut([[-.023,.12],[.025,.28],[.22,.385],[.47,.369],[.6,.27],[.82,.19],[.97,.148],[1.004,.08],[1.018,-.042],[.973,-.145],[.797,-.195],[.603,-.242],[.46,-.322],[.2,-.347],[.027,-.29],[-.023,-.184]]);for(let A of[-1,1]){o("rb-solid-boom-cheek",ht,M+A*.277,.071,H,"braccio",.012);let Z=ut([[.015,-.28],[.21,-.332],[.46,-.305],[.6,-.22],[.82,-.166],[.979,-.119],[.983,-.143],[.81,-.204],[.601,-.256],[.46,-.349],[.21,-.375],[.016,-.32]]);o("face-bottom-longitudinal-flange",Z,M+A*.323,.092,j,"braccio",.007);let ue=ut([[.045,.258],[.22,.369],[.46,.351],[.588,.267],[.82,.178],[.962,.15],[.964,.169],[.82,.205],[.589,.3],[.461,.394],[.222,.408],[.047,.299]]);o("face-top-longitudinal-flange",ue,M+A*.323,.086,j,"braccio",.006);let ge=ut([[.065,.155],[.347,.228],[.488,.232],[.502,.18],[.344,.161],[.069,.099]]);o("face-web-doubler",ge,M+A*.349,.031,H,"braccio",.007);for(let ye of[.07,.17,.28,.392,.48,.615,.731,.825,.919]){let Te=Je(ye,.124);u(Te.x,Te.y,M+A*.371,.027,A)}}let dt=(A,Z)=>{for(let ue=1;ue<Z.length;ue++){let ge=Je(...Z[ue-1]),ye=Je(...Z[ue]);x(A+ue,[ge.clone().add(n(0,0,-.275)),ye.clone().add(n(0,0,-.275)),ye.clone().add(n(0,0,.275)),ge.clone().add(n(0,0,.275))],H,"braccio")}};dt("rb-closed-upper-web",[[.024,.255],[.22,.367],[.47,.35],[.6,.255],[.82,.175],[.958,.124]]),dt("rb-closed-lower-web",[[.025,-.273],[.2,-.332],[.46,-.304],[.603,-.225],[.797,-.181],[.973,-.129]]);for(let A of[.13,.229,.327,.575,.678,.775,.876,.951]){let Z=Je(A,-.17);a(Z.clone().add(n(0,0,-.295)),Z.clone().add(n(0,0,.295)),.043,j,"braccio",14)}for(let A of[-1,1])o("face-main-cheek",[[ke.x-.31,1.26],[ke.x+.33,1.23],[ke.x+.3,1.48],[ke.x+.12,1.66],[ke.x-.17,1.65],[ke.x-.33,1.5]],M+A*.39,.102,H,"telaio",.026);l(ke.x,ke.y,M,.156,1.04);let Lt=.49;function le(A,Z,ue,ge){let ye=(Te,Ze,Ye,et,kt)=>{let Ht="face-rim-"+Te+"-"+Ze+"-"+Ye,fn=g(Ht,()=>{let gt=new r.Shape;gt.absarc(0,0,Te,0,2*Math.PI,!1);let hn=new r.Path;hn.absarc(0,0,Ze,0,2*Math.PI,!0),gt.holes.push(hn);let Ni=new r.ExtrudeGeometry(gt,{depth:Ye,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:22});return Ni.translate(0,0,-Ye*.5),Ni});d(fn,kt,n(A.x,A.y,A.z+et),f,n(1,1,1),"trasmissione")};ye(Z*.95,Z*.81,ue,0,H);for(let Te of[-1,1])ye(Z,Z*.88,.026,Te*ue*.49,j);c(A.x,A.y,A.z,Z*.235,ue*1.65,H,"trasmissione",28);for(let Te=0;Te<5;Te++){let Ze=Te*Math.PI*2/5+ge*.124+.18,Ye=Math.cos(Ze),et=Math.sin(Ze),kt=-et,Ht=Ye,fn=(gt,hn)=>[A.x+gt*Ye+hn*kt,A.y+gt*et+hn*Ht];o("head-spoke-"+ge+"-"+Te,[fn(Z*.16,-Z*.099),fn(Z*.88,-Z*.06),fn(Z*.88,Z*.076),fn(Z*.18,Z*.126)],A.z,ue*.57,H,"trasmissione",.009)}c(A.x,A.y,A.z+ue*.88,Z*.092,.052,"bolt","trasmissione",18)}[-.371,.371].forEach((A,Z)=>le(Ue.clone().add(n(0,0,A)),Lt,.125,Z)),c(Ue.x,Ue.y,M,.103,1.045,j,"trasmissione",24);let ot=Je(.535,-.014),lt=n(.963,.269,0).normalize(),Qe=n(-lt.y,lt.x,0),Yt=A=>ot.clone().addScaledVector(lt,A),zt=4.51,Pn=Yt(-.79),cn=Yt(zt),Vt=A=>A.map(([Z,ue])=>{let ge=Yt(Z).addScaledVector(Qe,ue);return[ge.x,ge.y]}),nn=Vt([[-.81,-.077],[-.78,-.135],[zt-.23,-.15],[zt,-.09],[zt+.02,.082],[zt-.21,.155],[-.75,.125],[-.81,.072]]);o("crowd-handle-rack",nn,M,.279,P,"braccio",.014);let Zt=Vt([[-.71,.055],[zt-.2,.086],[zt-.2,.111],[-.71,.085]]);for(let A of[-1,1])o("crowd-handle-rubbed-edge",Zt,M+A*.148,.013,j,"braccio",.003);for(let A=0;A<20;A++){let Z=Yt(-.71+A*.2).addScaledVector(Qe,-.146);i(Z.x,Z.y,M,.059,.052,.214,j,"trasmissione",Math.atan2(lt.y,lt.x))}let It=Pn.clone().addScaledVector(lt,.014);c(It.x,It.y,M,.103,.298,j,"trasmissione",20);for(let A of[-1,1]){let Z=Vt([[-.29,-.269],[.24,-.267],[.348,-.155],[.34,.117],[.18,.237],[-.2,.237],[-.33,.09]]),ue=_t(ot,lt,.193,.118,16);W(Z,[ue],M+A*.343,.081,H,"trasmissione");let ge=Je(.53,.192);c(ge.x,ge.y,M+A*.421,.147,.071,H,"trasmissione",24),u(ge.x,ge.y,M+A*.466,.063,A)}for(let A of[-1,1]){let Z=Yt(-.2).addScaledVector(Qe,A*.196),ue=Yt(.23).addScaledVector(Qe,A*.196);s(Z,ue,.085,j,"trasmissione",.38)}let ft=1.49,Ut=cn.x,mt=cn.y,Rt=A=>A.map(([Z,ue])=>[Ut+Z,mt+ue]),St=(A,Z,ue=0)=>n(Ut+A,mt+Z,M+ue),wt=(A,Z,ue,ge,ye,Te=.008)=>o(A,Rt(Z),M+ue,ge,ye,"benna",Te),rn=(A,Z,ue,ge,ye,Te)=>{x(A,[St(...Z,ge),St(...ue,ge),St(...ue,ye),St(...Z,ye)],Te,"benna")},U=[[-.21,-.15],[-.169,.005],[-.046,.12],[.216,.191],[.57,.16],[.974,.095],[1.302,.016],[1.373,-.044],[1.322,-.284],[1.26,-.61],[1.22,-.867],[1.188,-1.011],[1.056,-1.099],[.631,-1.071],[.237,-1.015],[-.03,-.906],[-.201,-.715],[-.272,-.499],[-.294,-.317]],oe=[-.04,-.42],me=[[-.192,-.403],[-.148,-.245],[-.038,-.195],[.119,-.24],[.224,-.4],[.392,-.517],[.793,-.619],[1.165,-.658],[1.208,-.748],[.968,-.761],[.585,-.695],[.293,-.607],[.113,-.538],[-.038,-.562],[-.151,-.522]];for(let A of[-1,1]){let Z=A*(ft*.5-.04);wt("rb-dipper-side",U,Z,.092,D,.023),wt("rb-dipper-brace",me,Z+A*.062,.056,D,.012),wt("rb-dipper-edge-strip",[[1.251,-.003],[1.361,-.048],[1.29,-.394],[1.19,-.941],[1.104,-.987],[1.133,-.752]],Z+A*.06,.042,j,.008),wt("rb-dipper-welded-wear-pad",[[.878,-.114],[.98,-.136],[.839,-.633],[.762,-.608]],Z+A*.059,.044,D,.013),wt("rb-dipper-door-side",[[.007,-.863],[.305,-.986],[.681,-1.024],[1.137,-1.027],[1.16,-.924],[.653,-.911],[.291,-.885],[.064,-.798]],Z+A*.066,.056,j);for(let[ge,ye]of[[-.053,-.386],[.2,-.461],[.895,-.203],[.794,-.536],[1.23,-.225],[1.12,-.843]])u(Ut+ge,mt+ye,M+Z+A*.104,.032,A)}let be=[[-.293,-.308],[-.278,-.497],[-.209,-.69],[-.04,-.867],[.23,-.981]];for(let A=0;A<be.length-1;A++)rn("rb-heel-bend-"+A,be[A],be[A+1],-ft*.473,ft*.473,D);let ve=[[.1,-.906],[.3,-1.077],[.71,-1.177],[1.097,-1.189],[1.203,-1.023]];for(let A=0;A<ve.length-1;A++)rn("rb-drop-door-"+A,ve[A],ve[A+1],-ft*.47,ft*.47,ee);let Fe=[[1.166,-1.028],[1.23,-.815],[1.274,-.562],[1.326,-.26],[1.375,-.03],[1.405,.022]];for(let A=0;A<Fe.length-1;A++)rn("rb-dipper-front-"+A,Fe[A],Fe[A+1],-ft*.49,ft*.49,D);s(St(1.362,-.037,-ft*.5),St(1.362,-.037,ft*.5),.094,j,"benna",.101);for(let A=0;A<4;A++){let Z=A/3,ue=ft*(-.43+.86*Z),ge=.59+.115*(1-Math.sin(Z*Math.PI)),ye=[[1.22,-.099],[1.403,-.1],[1.514,.147],[1.554,ge*.65],[1.584,ge],[1.544,ge-.011],[1.399,ge*.68],[1.245,.179]];wt("rb-dipper-upturned-tooth-"+A,ye,ue,.183,j,.014),c(Ut+1.36,mt+.023,M+ue+.101,.037,.043,"iron","bulloneria",14)}for(let A of[-1,1]){let Z=A*.411;wt("rb-open-back-socket",[[.116,.127],[.016,.199],[-.127,.157],[-.234,.021],[-.252,-.07],[-.188,-.156],[-.07,-.209],[.13,-.179],[.212,-.068],[.214,.024]],Z,.124,H,.016);let ge=Yt(zt-.38);ge.z=M+Z;let ye=St(.31,-.401,Z);s(ge,ye,.078,H,"benna",.099)}l(cn.x,cn.y,M,.121,.995,"benna"),a(St(-.04,-.425,-ft*.55),St(-.04,-.425,ft*.55),.085,H,"benna",22);for(let A of[-1,1])c(Ut+oe[0],mt+oe[1],M+A*ft*.557,.124,.047,j,"benna",26);let je=St(.285,.375);for(let A of[-1,1]){let ue=[[-.04,-.42],[-.108,-.244],[.018,.081],[.2,.353]].map(([ye,Te],Ze)=>St(ye,Te,A*(ft*.51-Ze*.171)));for(let ye=1;ye<ue.length;ye++)s(ue[ye-1],ue[ye],.096,D,"benna",.075);o("rb-horizontal-hoist-block",[[-.263,.093],[-.208,.128],[.113,.13],[.238,.062],[.258,-.016],[.172,-.105],[-.158,-.118],[-.267,-.033]].map(([ye,Te])=>[je.x+ye,je.y+Te]),M+A*.116,.061,H,"trasmissione",.014),c(je.x,je.y,M+A*.165,.065,.05,j,"trasmissione",20)}c(je.x,je.y,M,.121,.208,"iron","trasmissione",22);function qe(A,Z,ue,ge){let ye=ue.x-A.x,Te=ue.y-A.y,Ze=ye*ye+Te*Te,Ye=Z*Z/Ze,et=ge*Z*Math.sqrt(Math.max(0,Ze-Z*Z))/Ze;return n(A.x+Ye*ye-et*Te,A.y+Ye*Te+et*ye,A.z)}let B=(A,Z,ue=.014)=>L(A,Z,ue,"track","tubazioni"),F=n(.205,3.78,M+.08);s(n(-.24,3.39,M+.08),F,.092,H,"telaio",.103),le(F,.213,.079,3);let pe=n(-.76,2.55,M+.11),xe=qe(F,.209,pe,-1);B(pe,xe);for(let A of[-1,1]){let Z=Ue.clone().add(n(0,0,A*.371)),ue=je.clone().add(n(0,0,A*.107)),ge=qe(Z,Lt-.027,F,-1),ye=qe(F,.206,ge,1);B(ye,ge);let Te=qe(Z,Lt-.027,ue,1),Ze=qe(ue,.148,Te,A);B(Te,Ze,.016);let Ye=n(-2.02,3.5,M+A*.245),et=Je(.952,.152);et.z=M+A*.338,B(Ye,et,.014)}o("face-fairlead-cover",[[.11,1.48],[.95,1.45],[.88,1.63],[.57,2.51],[.22,2.69],[-.17,2.755]],M-.41,.165,b,"lamierati",.012);let Ce=n(.12,2.7,M-.65),Pe=n(.55,2.48,M-.65);s(Ce,Pe,.043,b,"lamierati",.64);let $=new Map,he=(A,Z)=>{let ue=A.uuid+"|"+Z.elements.map(ye=>Math.round(ye*1e7)).join(",");if($.has(ue))return $.get(ue);let ge=A.clone();return ge.applyMatrix4(Z),$.set(ue,ge),ge},fe=new r.Matrix4().makeScale(1,1.075,1),Se=new r.Matrix4,Ne=new r.Matrix4,Oe=new r.Matrix4;for(let A of v.slice(S,Le)){if(A.position=A.position.clone(),A.position.y=I+(A.position.y-I)*1.075,A.captionPoint&&(A.captionPoint.y=I+(A.captionPoint.y-I)*1.075),Math.abs(A.quaternion.x)+Math.abs(A.quaternion.y)+Math.abs(A.quaternion.z)<1e-5){A.scale=A.scale.clone(),A.scale.y*=1.075;continue}Se.compose(n(),A.quaternion,A.scale),Ne.copy(Se).invert(),Oe.copy(Ne).multiply(fe).multiply(Se),A.geometry=he(A.geometry,Oe)}let Ee=new Set([b,T,te,D,H,P]),De=n(),He=n();for(let A of v){if(!Ee.has(A.material)||!["lamierati","cabina","benna","braccio"].includes(A.group))continue;let Z=A.geometry.clone(),ue=Z.getAttribute("position"),ge=Z.getAttribute("normal"),ye=Z.getAttribute("uv");for(let Te=0;Te<ue.count;Te++){De.fromBufferAttribute(ue,Te).multiply(A.scale).applyQuaternion(A.quaternion).add(A.position),He.fromBufferAttribute(ge,Te).applyQuaternion(A.quaternion);let Ze=Math.abs(He.x),Ye=Math.abs(He.y),et=Math.abs(He.z),kt=Ze>Ye&&Ze>et?De.z:De.x,Ht=Ye>Ze&&Ye>et?De.z:De.y;ye.setXY(Te,kt*.71+.143,Ht*.67+.323)}A.geometry=Z}let Be=.826,We=new r.Quaternion().setFromAxisAngle(n(0,1,0),-.135),$e=new r.Quaternion().setFromAxisAngle(n(0,1,0),.345),nt=n(-1.565,0,0),yt=1.19,Mt=new r.Matrix4().makeScale(yt,1,1);for(let A of v.slice(0,S)){let Z=A.position.x-nt.x;A.position=A.position.clone(),A.position.x=nt.x+Z*yt+.32,Se.compose(n(),A.quaternion,A.scale),Ne.copy(Se).invert(),Oe.copy(Ne).multiply(Mt).multiply(Se),A.geometry=he(A.geometry,Oe),A.position.sub(nt).applyQuaternion($e).add(nt),A.quaternion=$e.clone().multiply(A.quaternion)}for(let A of v)A.position.applyQuaternion(We).multiplyScalar(Be),A.quaternion=We.clone().multiply(A.quaternion),A.scale.multiplyScalar(Be),A.captionPoint&&A.captionPoint.applyQuaternion(We).multiplyScalar(Be)}function Uh(r,e,t){let n=Math.max(0,Math.min(3,Math.round(e))),i=(C=0,y=0,Y=0)=>new r.Vector3(C,y,Y),s=i(0,1,0),a=i(0,0,1),o=new r.Quaternion,c=new r.Quaternion().setFromUnitVectors(s,a),l=C=>new r.Quaternion().setFromAxisAngle(a,C),h=[],u=new Map,p=(C,y)=>(u.has(C)||u.set(C,y()),u.get(C)),d=p("box",()=>new r.BoxGeometry(1,1,1)),m=C=>p("cyl"+C,()=>new r.CylinderGeometry(1,1,1,C,1,!1)),g=(C,y,Y,k,O,K)=>{let re=typeof y=="string"?t[y]:y;if(!re)throw new Error("Missing excavator material: "+y);h.push({geometry:C,material:re,position:Y,quaternion:k,scale:O,group:K})},f=(C,y,Y,k,O,K,re,ie,_e=0)=>g(d,re,i(C,y,Y),_e?l(_e):o,i(k,O,K),ie);function x(C,y,Y,k,O,K=12,re=Y){let ie=y.clone().sub(C),_e=ie.length();if(!_e)return;let Me=new r.Quaternion().setFromUnitVectors(s,ie.divideScalar(_e));g(m(K),k,C.clone().lerp(y,.5),Me,i(Y,_e,re),O)}function _(C,y,Y,k,O,K=Y){let re=y.clone().sub(C),ie=re.length();if(!ie)return;let _e=new r.Quaternion().setFromUnitVectors(s,re.divideScalar(ie));g(d,k,C.clone().lerp(y,.5),_e,i(Y,ie,K),O)}let v=(C,y,Y,k,O,K,re,ie=24)=>g(m(ie),K,i(C,y,Y),c,i(k,O,k),re);function M(C,y,Y,k){return p(C,()=>{let O=new r.Shape;O.moveTo(y[0][0],y[0][1]),y.slice(1).forEach(([we,Re])=>O.lineTo(we,Re)),O.closePath();let K=new r.ExtrudeGeometry(O,{depth:Math.max(.003,Y-2*k),bevelEnabled:k>0,bevelSize:k,bevelThickness:k,bevelSegments:2,curveSegments:3});K.computeBoundingBox();let re=K.boundingBox.getCenter(i());K.translate(-re.x,-re.y,-re.z);let ie=K.attributes.normal,_e=K.attributes.position,Me=K.attributes.uv;for(let we=0;we<_e.count;we++){let Re=Math.abs(ie.getX(we)),Le=Math.abs(ie.getY(we)),ke=Math.abs(ie.getZ(we)),Ue=Re>ke&&Re>Le?_e.getZ(we):_e.getX(we),Ge=Le>Re&&Le>ke?_e.getZ(we):_e.getY(we);Me.setXY(we,Ue*.42,Ge*.42)}return{geometry:K,centre:re}})}function w(C,y,Y,k,O,K,re=.018,ie=0,_e=0){let Me=M(C,y,k,re);g(Me.geometry,O,i(ie+Me.centre.x,_e+Me.centre.y,Y),o,i(1,1,1),K)}function b(C,y,Y,k){let O=y.reduce((re,ie)=>re.add(ie),i()).multiplyScalar(.25),K=p(C,()=>{let re=y.map(Me=>Me.clone().sub(O)),ie=new r.BufferGeometry;ie.setAttribute("position",new r.Float32BufferAttribute(re.flatMap(Me=>[Me.x,Me.y,Me.z]),3)),ie.setAttribute("uv",new r.Float32BufferAttribute([0,0,1,0,1,1,0,1],2)),ie.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);let _e=re[1].clone().sub(re[0]).cross(re[2].clone().sub(re[0])).normalize();return ie.setAttribute("normal",new r.Float32BufferAttribute(Array.from({length:4},()=>_e.toArray()).flat(),3)),ie});g(K,Y,O,o,i(1,1,1),k)}function T(C,y,Y,k,O,K="braccio"){v(C,y,Y,k,O,"iron",K);for(let re of[-1,1])v(C,y,Y+re*(O/2+.01),k*.87,.038,"edge",K,20),v(C,y,Y+re*(O/2+.038),k*.39,.041,"bolt","bulloneria",6)}function H(C){return p(C?"slotted-screw":"hex-bolt",()=>{let y=[];function Y(Le,ke,Ue,Ge,Xe){let Je=new r.CylinderGeometry(Le,ke,Ue,Xe);Je.translate(0,Ge,0),y.push(Je)}Y(.47,.41,1.95,-.965,10);let k=.36,O=4,K=11,re=[];for(let Le=0;Le<O*K;Le++){let ke=(ht,dt,Lt)=>{let le=ht/K*Math.PI*2;return[Math.cos(le)*dt,-1.83+ht/K*k+Lt,Math.sin(le)*dt]},Ue=ke(Le,.45,0),Ge=ke(Le,.55,.075),Xe=ke(Le,.45,.15),Je=ke(Le+1,.45,0),ut=ke(Le+1,.55,.075),_t=ke(Le+1,.45,.15);re.push(...Ue,...ut,...Je,...Ue,...Ge,...ut,...Ge,..._t,...ut,...Ge,...Xe,..._t)}let ie=new r.BufferGeometry;if(ie.setAttribute("position",new r.Float32BufferAttribute(re,3)),ie.computeVertexNormals(),y.push(ie),C){Y(.92,.51,.32,.06,16);for(let Le of[-1,1]){let ke=new r.Shape,Ue=.9,Xe=Math.asin(.15/Ue);for(let ut=0;ut<=16;ut++){let _t=Xe+(Math.PI-2*Xe)*ut/16,ht=Ue*Math.cos(_t),dt=Le*Ue*Math.sin(_t);ut===0?ke.moveTo(ht,dt):ke.lineTo(ht,dt)}ke.closePath();let Je=new r.ExtrudeGeometry(ke,{depth:.19,bevelEnabled:!1});Je.rotateX(-Math.PI/2),Je.translate(0,.22,0),y.push(Je)}}else Y(1,1,.51,.182,6),Y(.89,1,.08,.476,6);let _e=[],Me=[],we=[];for(let Le of y){let ke=Le.index?Le.toNonIndexed():Le,Ue=ke.attributes.position,Ge=ke.attributes.normal,Xe=ke.attributes.uv;for(let Je=0;Je<Ue.count;Je++)_e.push(Ue.getX(Je),Ue.getY(Je),Ue.getZ(Je)),Me.push(Ge.getX(Je),Ge.getY(Je),Ge.getZ(Je)),we.push(Xe?Xe.getX(Je):0,Xe?Xe.getY(Je):0);ke!==Le&&ke.dispose(),Le.dispose()}let Re=new r.BufferGeometry;return Re.userData.threadPitch=k,Re.userData.threadTurns=O,Re.setAttribute("position",new r.Float32BufferAttribute(_e,3)),Re.setAttribute("normal",new r.Float32BufferAttribute(Me,3)),Re.setAttribute("uv",new r.Float32BufferAttribute(we,2)),Re})}let P=new r.Quaternion().setFromUnitVectors(s,i(0,0,-1));function D(C,y,Y,k=.029,O=1){v(C,y,Y,k*1.35,.014,"iron","bulloneria",12),g(H(!1),"bolt",i(C,y,Y+O*.011),O>0?c:P,i(k,k,k),"bulloneria")}function ee(C,y,Y,k,O=1){g(H(!0),"bolt",i(C,y,Y),O>0?c:P,i(k,k,k),"bulloneria")}let R=(C,y)=>p("ring"+C+"-"+y,()=>new r.TorusGeometry(C,y,6,28)),J=(C,y,Y,k,O,K,re)=>g(R(k,O),K,i(C,y,Y),o,i(1,1,1),re);function j(C,y,Y,k,O,K=18){let re=new r.CatmullRomCurve3(y),ie=p(C,()=>{let _e=new r.TubeGeometry(re,K,Y,6,!1);_e.computeBoundingBox();let Me=_e.boundingBox.getCenter(i());return _e.translate(-Me.x,-Me.y,-Me.z),{g:_e,center:Me}});g(ie.g,k,ie.center.clone(),o,i(1,1,1),O)}let te=[-3.47,-3.57,-3.365,-3.35][n],de=[.04,.28,.285,.31][n],ae=n<2?.54:.483,Q=n<2?.445:.398,se=(te+de)*.5,L=de-te,W=2*L+2*Math.PI*Q,Ae=Math.round(W/.214),S=W/Ae;function E(C){if(C<L)return[te+C,ae-Q,0];if(C-=L,C<Math.PI*Q){let Y=C/Q-Math.PI/2;return[de+Math.cos(Y)*Q,ae+Math.sin(Y)*Q,Y+Math.PI/2]}if(C-=Math.PI*Q,C<L)return[de-C,ae+Q,Math.PI];let y=(C-L)/Q+Math.PI/2;return[te+Math.cos(y)*Q,ae+Math.sin(y)*Q,y+Math.PI/2]}let z=n>0?t.track.clone():t.track;if(n>0){z.name=["","Carro brunito e terra asciutta","Fiancata del carro con deposito di polvere","Carro contemporaneo grafite"][n];let C=n===1?[99,80,65]:n===2?[127,116,102]:[75,79,78],y=96,Y=new Uint8Array(y*y*4),k=919+n*449;for(let K=0;K<y;K++)for(let re=0;re<y;re++){k=Math.imul(k,1664525)+1013904223>>>0;let ie=re/y*Math.PI*2,_e=K/y*Math.PI*2,Me=(K*y+re)*4,we=(k/4294967296-.5)*6,Re=3.1*Math.cos(2*ie+Math.sin(_e))+2.9*Math.sin(3*_e+Math.sin(2*ie))+.8*Math.sin(9*ie-4*_e);for(let Le=0;Le<3;Le++)Y[Me+Le]=C[Le]+Re+we;Y[Me+3]=255}let O=new r.DataTexture(Y,y,y,r.RGBAFormat);O.wrapS=O.wrapT=r.RepeatWrapping,O.magFilter=r.LinearFilter,O.minFilter=r.LinearMipmapLinearFilter,O.generateMipmaps=!0,O.colorSpace=r.SRGBColorSpace,O.needsUpdate=!0,z.map=O,z.color.setHex(16777215),z.metalness=n===2?.23:n===1?.3:.49,z.roughness=n===2?.87:.7,z.roughnessMap=null,z.metalnessMap=null,z.bumpScale=.006}let N=p("turned-bearing-race",()=>{let C=[[.62,-.51],[.92,-.51],[1,-.38],[1,.34],[.93,.48],[.71,.48],[.66,.34],[.62,-.31],[.62,-.51]];return new r.LatheGeometry(C.map(([y,Y])=>new r.Vector2(y,Y)),28)}),I=[.82,1.175,1.19,1.195][n],X=[.55,.65,.6,.6][n];for(let C of[-1,1]){let y=C*I,Y=y+C*(X/2-(n===0?0:.18));w("hull-carriage",[[te-.03,.32],[de-.035,.33],[de+.15,.51],[de-.24,.74],[se+.24,.84],[te+.29,.75],[te-.13,.58]],y,.39,"track","telaio",.055);for(let K=0;K<Ae;K++){let[re,ie,_e]=E(K*S),Me=-Math.sin(_e),we=Math.cos(_e);if(f(re,ie,y,S*.93,.068,X,"track","cingoli",_e),n===0)f(re-Me*.051,ie-we*.051,y,.046,.058,X*.985,"iron","cingoli",_e);else for(let Re of[-.063,0,.063])f(re+Math.cos(_e)*Re-Me*.046,ie+Math.sin(_e)*Re-we*.046,y,.026,.048,X*.985,"iron","cingoli",_e);f(re+Me*.065,ie+we*.065,y,S*.75,.068,X*.42,"track","cingoli",_e),K%2===0&&v(re+Me*.036,ie+we*.036,Y-C*.017,.036,.046,"bolt","cingoli",8);for(let Re of[-1,1]){let Le=i(re-Me*.042,ie-we*.042,y+Re*X*.292),ke=i(-Me,-we,0);g(m(6),K%7===0&&n===0?"rust":"bolt",Le,new r.Quaternion().setFromUnitVectors(s,ke),i(.026,.025,.026),"bulloneria")}}let k=(K,re,ie,_e,Me=!1)=>{if(v(K,re,y,ie,X*.66,"iron","trasmissione",32),v(K,re,Y-C*.035,ie*.85,.059,"track","trasmissione",28),J(K,re,Y+C*.003,ie*.728,ie*.049,"track","trasmissione"),v(K,re,Y+C*.02,ie*.43,.073,"iron","trasmissione",22),v(K,re,Y+C*.077,ie*.23,.059,n===0?"rust":"edge","trasmissione",16),Me&&n>0){let Re=Y+C*.116;v(K,re,Re,ie*.64,.039,z,"trasmissione",28);let Le=n===2?14:10;for(let ke=0;ke<Le;ke++){let Ue=ke*Math.PI*2/Le,Ge=Math.cos(Ue),Xe=Math.sin(Ue);_(i(K+Ge*ie*.39,re+Xe*ie*.39,Re+C*.028),i(K+Ge*ie*.63,re+Xe*ie*.63,Re+C*.028),.026,z,"trasmissione",.031)}v(K,re,Re+C*.031,ie*.35,.044,z,"trasmissione",20)}if(_e)for(let Re of[-1,1]){let Le=y+Re*X*.218;g(N,"edge",i(K,re,Le),c,i(ie*.79,.091,ie*.79),"trasmissione"),J(K,re,Le+Re*.05,ie*.56,.014,"rubber","trasmissione"),J(K,re,Le-Re*.045,ie*.66,.012,"iron","trasmissione")}let we=_e?8:4;for(let Re=0;Re<we;Re++){let Le=2*Math.PI*Re/we;D(K+ie*.53*Math.cos(Le),re+ie*.53*Math.sin(Le),Y+C*.005,_e?.027:.022,C)}if(Me){let Re=[];for(let Le=0;Le<16;Le++)for(let[ke,Ue]of[[0,.89],[.17,1],[.48,1],[.72,.89]]){let Ge=(Le+ke)*Math.PI*2/16;Re.push([Math.cos(Ge)*ie*Ue,Math.sin(Ge)*ie*Ue])}w("drive-sprocket",Re,Y-C*.105,.089,"iron","trasmissione",.009,K,re)}};k(te,ae,Q*.93,!0,!0),k(de,ae,Q*.9,!0);let O=n===0?5:7;for(let K=0;K<O;K++){let re=te+.58+K*(L-1.16)/(O-1);k(re,n<2?.415:.367,n===0?.248:.225,!1)}for(let K of[.27,.7])v(te+K*L,n<2?.83:.753,y,.117,.38,"iron","trasmissione",16);if(n>0){let K=Y+C*.054,re=n<2?.74:.7,ie=.33,_e=n===1?[[te+.24,re-.09],[te+.49,re+.06],[de-.37,re+.06],[de-.1,re-.08],[de-.19,ie+.082],[de-.56,ie+.04],[te+.54,ie+.03],[te+.22,ie+.09]]:n===2?[[te+.23,re-.08],[te+.43,re+.067],[de-.28,re+.067],[de-.15,re-.12],[de-.17,ie+.04],[de-.46,ie-.017],[te+.4,ie-.017],[te+.22,ie+.045]]:[[te+.22,re-.13],[te+.46,re+.042],[de-.36,re+.042],[de-.13,re-.12],[de-.24,ie+.05],[de-.53,ie],[te+.5,ie],[te+.21,ie+.086]];if(w("track-box-beam",_e,K,.139,z,"telaio",.022),n===1)for(let Me=0;Me<6;Me++){let we=te+.49+Me*(L-.95)/5;f(we,ie+.123,K+C*.086,.29,.18,.057,z,"telaio",-.055);for(let Re of[-.089,.089])D(we+Re,ie+.146,K+C*.119,.023,C)}else if(n===2){let Me=[[de-.28,ie-.033],[de+.2,ie-.033],[de+.24,ie+.075],[de+.23,re-.09],[de+.105,re+.015],[de-.21,re+.015],[de-.29,re-.064]];w("front-guide-guard",Me,K+C*.083,.091,z,"telaio",.026);for(let we of[.28,.66]){let Re=te+L*we;f(Re,ie+.125,K+C*.078,.087,.087,.015,"interior","telaio")}_(i(te+.41,ie+.015,K+C*.092),i(de-.25,ie+.015,K+C*.092),.022,"edge","telaio",.03)}else for(let Me of[.27,.72]){let we=te+L*Me;f(we,re-.062,K+C*.078,.394,.062,.023,"red","telaio"),f(we,re-.026,K+C*.079,.416,.017,.032,"edge","telaio");for(let Re of[-.164,.164])D(we+Re,re-.061,K+C*.093,.017,C)}}}f(se,.7,0,2.74,.44,1.55,"track","telaio");for(let C of[-1,1])for(let y of[-1,1])_(i(se,.86,0),i(se+y*1.42,.59,C*I),.25,"iron","telaio",.28);let G=i(se+.15,1.125,0);g(m(44),"iron",G,o,i(.864,.15,.864),"trasmissione"),g(m(48),"edge",i(G.x,1.235,0),o,i(.832,.08,.832),"trasmissione");for(let C=0;C<24;C++){let y=C*Math.PI*2/24;g(m(6),"bolt",i(G.x+Math.cos(y)*.756,1.29,Math.sin(y)*.756),o,i(.043,.047,.043),"bulloneria")}if(n===0)return Ih(r,{V:i,box:f,bar:_,rod:x,plate:w,disc:v,pin:T,ring:J,bolts:D,machineScrew:ee,append:g,round:m,cache:p,identity:o,quad:b,conduit:j,parts:h},t),{parts:h,era:e,name:"Escavatore meccanico a pala frontale"};let q=Lh(r,n,{V:i,parts:h,materials:t,cache:p,append:g,box:f,bar:_,rod:x,disc:v,plate:w,quad:b,pin:T,bolts:D,machineScrew:ee,conduit:j,round:m,identity:o}),ne=new Set,ce=new WeakMap;for(let C of h){let y=C.geometry;if(!ne.has(y)){y.scale(-1,1,1),y.index||y.setIndex(Array.from({length:y.attributes.position.count},(O,K)=>K));let k=y.index.array;for(let O=0;O<k.length;O+=3){let K=k[O+1];k[O+1]=k[O+2],k[O+2]=K}y.index.needsUpdate=!0,y.computeBoundingBox(),y.computeBoundingSphere(),ne.add(y)}C.position=C.position.clone(),C.position.x*=-1;let Y=C.quaternion;ce.has(Y)||ce.set(Y,new r.Quaternion(Y.x,-Y.y,-Y.z,Y.w)),C.quaternion=ce.get(Y)}return q.point.x*=-1,{parts:h,era:e,facing:-1,captionAnchor:q,name:["","Escavatore idraulico anni Ottanta","Escavatore idraulico serie D","Escavatore elettroidraulico contemporaneo"][n]}}var Oh=[{enamel:[189,139,47],wear:1,rough:.56,coat:.18,coatRough:.38},{enamel:[217,154,36],wear:.6,rough:.47,coat:.27,coatRough:.3},{enamel:[235,169,28],wear:.32,rough:.42,coat:.35,coatRough:.25},{enamel:[245,186,31],wear:.13,rough:.36,coat:.44,coatRough:.21}],Dh=new WeakMap,jt=(r,e,t)=>r+(e-r)*t,va=r=>Math.max(0,Math.min(1,r));function en(r,e,t){let n=va((t-r)/(e-r));return n*n*(3-2*n)}function Fh(r){let e=r>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function di(r,e,t){let n=new Float32Array(r*e);for(let i=0;i<n.length;i++)n[i]=t();return(i,s)=>{let a=i*r,o=s*e,c=Math.floor(a),l=Math.floor(o),h=(c%r+r)%r,u=(l%e+e)%e,p=(h+1)%r,d=(u+1)%e,m=a-c,g=o-l,f=m*m*(3-2*m),x=g*g*(3-2*g);return jt(jt(n[u*r+h],n[u*r+p],f),jt(n[d*r+h],n[d*r+p],f),x)}}function _a(r){let e=document.createElement("canvas");e.width=r,e.height=r;let t=e.getContext("2d");return{canvas:e,ctx:t,pixels:t.createImageData(r,r)}}function Nh(r,e,t,n){e.ctx.putImageData(e.pixels,0,0);let i=new r.CanvasTexture(e.canvas);return i.name=t,i.colorSpace=n?r.SRGBColorSpace:r.NoColorSpace,i.wrapS=i.wrapT=r.RepeatWrapping,i.anisotropy=4,i}function Bh(r,e,t,n){let i=Nh(r,e,n+" \xB7 colore",!0),s=Nh(r,t,n+" \xB7 altezza / ruvidit\xE0 / metallo",!1);return{map:i,bumpMap:s,roughnessMap:s,metalnessMap:s}}function xa(r,e,t,n,i){r[e]=t,r[e+1]=n,r[e+2]=i,r[e+3]=255}function Gp(r,e,t){let n=new Float32Array(r*r),i=Math.round(1+11*e);for(let s=0;s<i;s++){let a=t()*r,o=t()*r,c=(.012+t()*.077)*(.43+e*.83)*r,l=c*(.27+t()*.74),h=t()*Math.PI,u=Math.cos(h),p=Math.sin(h),d=Math.ceil(1.65*Math.max(c,l));for(let m=Math.floor(o-d);m<=o+d;m++)for(let g=Math.floor(a-d);g<=a+d;g++){let f=g-a,x=m-o,_=(f*u+x*p)/c,v=(-f*p+x*u)/l,M=1.5-Math.sqrt(_*_+v*v);if(M<=0)continue;let w=(m+r)%r*r+(g+r)%r;n[w]=Math.max(n[w],M)}}return n}function Vp(r,e,t){let n=new Uint8Array(r*r);for(let i=0;i<3+e*16;i++){let s=t()*r,a=t()*r,o=(t()-.5)*.92,c=Math.cos(o),l=Math.sin(o),h=1+Math.floor(t()*4);for(let u=0;u<h;u++){let p=u*(.0015+t()*.0045)*r,d=t()*r*.016,m=(.012+t()*.095)*r,g=Math.round((.28+t()*.65)*255);for(let f=0;f<m;f+=.67){if(t()<.05)continue;let x=Math.floor(s+c*(f+d)-l*p+r)%r,v=Math.floor(a+l*(f+d)+c*p+r)%r*r+x;n[v]=Math.max(n[v],g*en(0,.12,f/m)*en(0,.12,1-f/m))}}}return n}function Hp(r,e,t){let n=Oh[e],i=n.wear,s=n.enamel,a=Fh(196600+e*9701),o=di(5,4,a),c=di(17,19,a),l=di(52,54,a),h=di(48,3,a),u=Gp(t,i,a),p=Vp(t,i,a),d=di(83,18,a),m=_a(t),g=_a(t),f=m.pixels.data,x=g.pixels.data;for(let _=0,v=0;_<t;_++){let M=_/t;for(let w=0;w<t;w++,v++){let b=w/t,T=o(b,M),H=c(b,M),P=l(b,M),D=a(),ee=Math.min(b,M,1-b,1-M),R=(1-en(0,.018,ee))*en(.55,.91,H)*i,J=.33+.67*Math.max(en(.02,.37,u[v]),en(.59,.85,T)*.82),j=u[v]+((H-.5)*.84+(P-.5)*.69+(D-.5)*.13)*(.55+.45*i)*J+R-(1-i)*.12,te=en(.47,.55,j),de=en(.29,.47,j),ae=(1-en(.03,.13,Math.abs(j-.56)))*en(.41,.68,H*.48+P*.52),Q=va((1-i)*.56+en(.67,.81,P*.62+D*.13+T*.25)*(.43+.1*(1-i))+ae*.6),se=p[v]/255*(.4+.43*i),L=d(b+.016*H,M+.034*P),W=(1-en(.012,.058,Math.abs(L-.48)))*en(.38,.65,H),Ae=va(.5+(H-.5)*1.22+(P-.5)*.75+(D-.5)*.38+(L-.5)*.26-W*.18),S=en(.69,.96,h(b,M))*i*.075,E=(T-.5)*(.035+.1*i)+(H-.5)*.025+(D-.5)*.012-S,z=de*(.12+.14*i),N=s[0]*(1+E)*(1-z),I=s[1]*(1+E)*(1-z*1.18),X=s[2]*(1+E)*(1-z*.42)+(T-.3)*i*7;N=jt(N,jt(50+103*Ae,138,Q),te),I=jt(I,jt(37+45*Ae,133,Q),te),X=jt(X,jt(27+21*Ae,118,Q),te),xa(f,v*4,jt(N,136,se),jt(I,133,se),jt(X,115,se));let G=jt(jt(n.rough+(T-.5)*.12+(D-.5)*.036,.83-Q*.52,te),.49,se),q=jt(jt(.035,.12+Q*.85,te),.73,se),ne=.6+(P-.5)*.025+(D-.5)*.025-te*(.17-Ae*.07+W*.02)-se*.055;xa(x,v*4,ne*255,G*255,q*255)}}return Bh(r,m,g,"Smaltatura "+[1960,1980,2e3,2026][e])}function bl(r,e,t,n){let i=Fh(481516+n*779),s=di(8,9,i),a=di(39,33,i),o=di(105,3,i),c=_a(t),l=_a(t),h=c.pixels.data,u=l.pixels.data;for(let p=0,d=0;p<t;p++)for(let m=0;m<t;m++,d+=4){let g=m/t,f=p/t,x=s(g,f),_=a(g,f),v=i(),M,w,b,T,H,P;if(n===0){let D=en(.4,.84,x*.7+_*.3),ee=47*D+13*_+7*v;M=53+ee,w=48+ee,b=40+ee,T=.79-.39*D+(_-.5)*.07,H=.52+D*.42,P=.43+_*.12+v*.057}else if(n===1){let D=o(g,f),ee=(D-.5)*7+(v-.5)*2;M=225+ee,w=228+ee,b=228+ee,T=.126+D*.047+x*.024,H=.99,P=.49+D*.02}else{let D=va(.04+x*.49+_*.34+v*.12);M=48+D*94,w=30+D*42,b=22+D*20,T=.76+D*.19,H=.17+(1-D)*.14,P=.34+x*.16+_*.16+v*.105}xa(h,d,M,w,b),xa(u,d,P*255,T*255,H*255)}return Bh(r,c,l,e)}function Wp(r){let e=Dh.get(r);if(!e){let t=typeof matchMedia=="function"&&matchMedia("(max-width: 760px)").matches;e={paint:[],size:t?256:512,cast:bl(r,"Acciaio colato",256,0),polished:bl(r,"Cromatura rettificata",128,1),oxide:bl(r,"Ossido di ferro",256,2)},Dh.set(r,e)}return e}function zh(r,e){let t=Math.max(0,Math.min(3,e|0)),n=Oh[t],i=Wp(r),s=i.paint[t]||(i.paint[t]=Hp(r,t,i.size)),a=(d,m)=>new r.MeshStandardMaterial({name:d,...m}),o=(d,m)=>new r.MeshPhysicalMaterial({name:d,...m}),c={...s,roughness:1,metalness:1,bumpScale:.022+n.wear*.037,clearcoat:n.coat,clearcoatRoughness:n.coatRough,envMapIntensity:.95},l={...i.cast,roughness:1,metalness:1,bumpScale:.025,envMapIntensity:1.05},h=o("Smalto carrozzeria",c),u=o("Smalto telaio",{...c,color:t===0?12823947:13286034}),p=o("Vetro cabina",{color:t===0?2568234:2503470,transparent:!0,opacity:t===0?.48:.46,depthWrite:!1,roughness:.075+n.wear*.035,metalness:.025,clearcoat:.38,clearcoatRoughness:.055,ior:1.48,specularIntensity:.78,envMapIntensity:.77});return{paint:h,paintDark:u,glass:p,edge:a("Bordi esposti",{...l,color:15328990,roughness:.79,bumpScale:.012}),iron:a("Ghisa scura",{...l,color:t===0?10389363:11052192}),track:a("Pattini e ruote",{...l,roughness:t===0?1:.94}),rubber:a("Gomma e guaine",{color:2369319,roughness:.8,metalness:.018,envMapIntensity:.48}),chrome:a("Stelo cromato",{...i.polished,roughness:1,metalness:1,bumpScale:.002,envMapIntensity:1.18}),bolt:a("Bulloneria zincata",{...i.polished,color:t===0?9603189:11645607,roughnessMap:null,roughness:.31,metalness:.9,bumpScale:.0015}),interior:a("Sedile e interno cabina",{color:t===0?4340013:3423037,roughness:.85,metalness:.02}),rust:a("Ossido del ferro",{...i.oxide,roughness:1,metalness:1,bumpScale:.055}),black:a("Acciaio verniciato grafite",{color:2895920,roughness:.47,metalness:.46}),light:o("Vetro proiettore",{color:15196617,emissive:14536612,emissiveIntensity:.17,roughness:.22,metalness:.2,clearcoat:.9,clearcoatRoughness:.11}),red:o("Lente di segnalazione",{color:9972248,roughness:.29,metalness:.13,clearcoat:.74,clearcoatRoughness:.19}),pale:a("Dettagli avorio",{color:14800821,roughness:.58,metalness:.17})}}var Xp=Math.PI*2;function jp(r,e,t){let n=[],i=new Map,s=null;e.parts.forEach((h,u)=>{h.group==="cingoli"&&((h.geometry.type==="BoxGeometry"||h.geometry.type==="ExtrudeGeometry")&&h.scale.x>2.7*h.scale.y&&h.scale.z>6.8*h.scale.y&&(s={p:h,indices:[]},n.push(s)),s&&s.indices.push(u))});let a=Math.floor(n.length/2),o=new r.Vector3(0,0,1);if(a<3)return{byPart:i,across:o};let c=n[a].p.position,l=n[0].p.position;o.subVectors(c,l).normalize();for(let h=0;h<2;h++){let u=n.slice(h*a,(h+1)*a),p=h?1:-1,d=new r.Vector3;for(let{p:g}of u)d.add(g.position);d.multiplyScalar(1/u.length);let m=0;u.forEach(({p:g},f)=>{g.position.y>u[m].p.position.y+1e-4&&(m=f)});for(let g=0;g<u.length;g++){let{p:f,indices:x}=u[g],_=(g-m+u.length)%u.length/u.length,v=new r.Vector3().subVectors(u[(g+1)%u.length].p.position,u[(g+u.length-1)%u.length].p.position).normalize(),M=new r.Vector3().crossVectors(v,o).normalize();M.dot(f.position.clone().sub(d))<0&&M.negate();let w=.4+.38*Math.sin(_*Math.PI),b=o.clone().multiplyScalar(p*t*w).addScaledVector(M,t*(.24+.46*Math.sin(_*Math.PI))).addScaledVector(v,t*(.33-.65*_));b.y=Math.max(-.11*t,b.y)+.13*t;let T=o.clone().multiplyScalar(p),H=f.position.clone().addScaledVector(v,-.105*t),P=o.clone().multiplyScalar(p*.23*t);for(let D of x)i.set(D,{t:_,side:p,axis:T,lead:P,extraction:b,offset:e.parts[D].position.clone().sub(H),seatTurn:(.11+.45*Math.sin(_*Math.PI))*p,featured:h===1&&D===x[0]&&g===m})}}return{byPart:i,across:o}}function qp(r,e){let t=[];for(let n of e.parts){if(n.group!=="pistoni"||n.material.name!=="Stelo cromato"||n.scale.y<=3*n.scale.x)continue;let i=new r.Vector3(0,1,0).applyQuaternion(n.quaternion).normalize();t.push({p:n,axis:i,seal:n.position.clone().addScaledVector(i,-n.scale.y/2)})}return t}function Yp(r,e){let t=null,n=1/0;for(let i of e){let s=r.position.clone().sub(i.seal),a=s.dot(i.axis),c=s.addScaledVector(i.axis,-a).length()+Math.max(0,Math.abs(a)-i.p.scale.y*1.6)*.8;c<n&&(t=i,n=c)}return t}function kh(r,e,t,n){let{byPart:i,across:s}=jp(r,e,t),a=e.era===0,o=qp(r,e),c=e.parts.reduce((x,_)=>Math.max(x,_.position.y),0),l=a?e.parts.find(x=>x.group==="trasmissione"&&x.geometry.type==="CylinderGeometry"&&x.position.y>c*.88):null,h=e.parts.filter(x=>x.group==="bulloneria"&&x.geometry.type==="BufferGeometry"&&x.position.y>1.3*t),u=new Map,p=(x,_,v,M)=>{x&&u.set(x,{row:_,column:v,depth:M})},d=(x,_)=>e.parts.find(v=>v.group===x&&_(v));p(d("trasmissione",x=>x.geometry.type==="LatheGeometry"),.48,.5,.42);let m=d("trasmissione",x=>x.geometry.type==="ExtrudeGeometry"&&x.position.y<t);if(m){let x=M=>{let w=M.position.clone().sub(m.position),b=w.dot(s);return Math.abs(b)<.59*t&&w.addScaledVector(s,-b).length()<.025*t},_=d("trasmissione",M=>M.geometry.type==="TorusGeometry"&&x(M)),v=d("trasmissione",M=>M.geometry.type==="CylinderGeometry"&&M.scale.x>.1*t&&M.scale.x<.24*t&&x(M));for(let[M,w]of[[m,0],[_,1],[v,2]])M&&u.set(M,{row:-.09,column:.31,depth:.48,wheelAxis:s,layer:w*t*.22})}let g=[...i].find(([,x])=>x.featured);g&&p(e.parts[g[0]],-.56,.54,.29);let f=h.reduce((x,_)=>!x||_.scale.x>x.scale.x?_:x,null);return p(f,.26,.72,.12),a?p(d("trasmissione",x=>x.position.y>c*.88&&x.geometry.type==="ExtrudeGeometry"),.13,.61,.5):p(o[o.length-1]?.p,.07,.61,.56),{byPart:i,across:s,historical:a,rams:o,hub:l?.position,details:u,unit:t,center:n}}function Gh(r,e,t,n,i){let{unit:s,across:a}=n,o=e.position,c=e.group,l=i.side,h=i.axis.clone(),u=new r.Vector3,p=new r.Vector3,d=.028*i.spin,m=0,g=i.row,f=.12,x=.041,_=.025,v=n.byPart.get(t);if(c==="bulloneria"){h.set(0,1,0).applyQuaternion(e.quaternion).normalize(),e.geometry.type!=="BufferGeometry"&&h.dot(o.clone().sub(n.center))<0&&h.negate();let ee=Math.max(e.scale.x,e.scale.z);u.copy(h).multiplyScalar(s*.16+Math.min(.24,ee*3.2));let{threadPitch:R,threadTurns:J}=e.geometry.userData;m=(J||.3)*Xp,R&&(i.threadRise=Math.abs(e.scale.y)*R*J,i.clearance=u.length()),d=m+.2,x=.076,_=.049,f=.15}else if(v)u.copy(v.lead),i.extraction.copy(v.extraction),h.copy(v.axis),p.copy(v.offset),g=v.t,d=v.seatTurn,x=.038,_=.017,f=.13;else if(c==="pistoni"&&n.rams.length){let ee=Yp(e,n.rams);h.copy(ee.axis);let R=e===ee.p,j=o.clone().sub(ee.seal).dot(ee.axis)>ee.p.scale.y*.63;u.copy(h).multiplyScalar(s*(R||j?.83:-.16)),i.extraction.copy(a).multiplyScalar(s*(l*.85+(R?.28:0))),i.extraction.y+=s*(.44+g*.41),d=R?.31:.075,x=.089,_=.06,f=.16}else if(c==="trasmissione"&&n.hub&&o.y>n.hub.y-s*.63){h.copy(a),p.copy(o).sub(n.hub),p.addScaledVector(a,-p.dot(a));let ee=o.clone().sub(n.hub).dot(a)>.19*s?1:-1;u.copy(a).multiplyScalar(ee*s*.29),i.extraction.copy(a).multiplyScalar(ee*s*.86),i.extraction.y+=s*.48,g=.55,m=1.24,d=1.34,x=.095,_=.083,f=.18}else if(c==="trasmissione")h.copy(a),u.copy(a).multiplyScalar(s*l*.29),d=l*.61,i.extraction.copy(a).multiplyScalar(s*l*(.56+.26*g)),i.extraction.y+=.32*s;else if(c==="tubazioni")u.copy(a).multiplyScalar(s*l*(n.historical?.34:.21)),d=n.historical?.025:.12,n.historical&&(i.extraction.y+=s*.52);else if(c==="vetri")u.copy(a).multiplyScalar(s*l*.29),d=l*.15;else if(c==="benna"||c==="braccio"){let ee=new r.Vector3(0,1,0).applyQuaternion(e.quaternion).normalize();e.geometry.type==="CylinderGeometry"&&Math.abs(ee.dot(a))>.89?(ee.dot(a)*l<0&&ee.negate(),u.copy(ee).multiplyScalar(s*(.23+Math.min(.41,e.scale.y*.68))),h.copy(ee),m=.22,d=.53):(u.copy(a).multiplyScalar(s*.11*l),d=l*.089)}else u.copy(a).multiplyScalar(s*l*.12);let M=i.family,w=i.bulk,b=.006+M.order*.105+g*(v?.093:c==="bulloneria"?.054:.029)+(l<0?.009:0),T=b+f,H=Math.max(T+.014,.215+M.order*.092+g*(c==="bulloneria"?.144:v?.12:.054)+(l<0?.019:0)),P=n.details.get(e),D=P?.65:H+.192+(c==="bulloneria"?.048:0)-w*.027;Object.assign(i,{begin:b,seated:T,inspection:P,departure:P?Math.min(.36,H):H,end:D,leadEnd:b+x,fanBegin:b+_,seatAxis:h,lead:u,offset:p,screwTurn:m,seatTurn:d,row:g})}var Vh={bulloneria:{order:0,travel:.52,turns:2.3,bulk:0},cingoli:{order:.2,travel:.95,turns:.84,bulk:.12},tubazioni:{order:.28,travel:.85,turns:.55,bulk:.22},vetri:{order:.33,travel:1.05,turns:.37,bulk:.43},lamierati:{order:.38,travel:1.15,turns:.43,bulk:.49},pistoni:{order:.44,travel:1.2,turns:.49,bulk:.27},trasmissione:{order:.54,travel:1.08,turns:.64,bulk:.35},benna:{order:.61,travel:1.18,turns:.42,bulk:.69},motore:{order:.68,travel:1.18,turns:.38,bulk:.65},cabina:{order:.75,travel:1.28,turns:.34,bulk:.7},braccio:{order:.84,travel:1.42,turns:.29,bulk:.85},telaio:{order:.96,travel:1.2,turns:.24,bulk:1}},Zp=Math.PI*2;function yr(r,e,t){return Math.min(t,Math.max(e,r))}function Jn(r,e,t){let n=yr((t-r)/(e-r),0,1);return n*n*(3-2*n)}function Jp(r,e){let t=Math.imul(r+1,2246822519)^Math.imul(e+1,3266489917);return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function Kp(r,e,t){let n=new r.Box3;for(let x of e.parts)n.expandByPoint(x.position);let i=n.getCenter(new r.Vector3),s=n.getSize(new r.Vector3),a=Math.max(1,s.x),o=Math.max(1,s.y),c=Math.max(1,s.z),l=a/9,h=e.parts.find(x=>x.group==="benna"),u=e.parts.find(x=>x.group==="cabina"),p=e.facing===-1||h&&u&&h.position.x<u.position.x?-1:1,d=new Map,m=new Map;e.parts.forEach((x,_)=>{if(x.group!=="bulloneria")return;let v=x.position,M=v.y<1.07,w=M?"track":v.x*p<-.8?"hood":"arm",b=v.z>=0?1:-1,T=M?v.y<.34?0:v.y<.72?1:2:Math.floor(v.y/.8),H=w+":"+b+":"+T;d.has(H)||d.set(H,[]),d.get(H).push({index:_,zone:w,face:b,level:T,x:v.x*p,y:v.y})});for(let x of d.values())x.sort((_,v)=>_.x-v.x||_.y-v.y||_.index-v.index),x.forEach((_,v)=>m.set(_.index,{..._,fraction:(v+.5)/x.length}));let g=kh(r,e,l,i),f=e.parts.map((x,_)=>{let v=Jp(_,t),M=Vh[x.group]||Vh.lamierati,w=x.position,b=x.group,T=(w.x-i.x)*p/a,H=(w.y-i.y)/o,P=w.z>=0?1:-1,D=new r.Vector3(0,1,0).applyQuaternion(x.quaternion).normalize(),ee=new r.Vector3(T,.2+H*.35,P);D.dot(ee)<0&&D.negate();let R=new r.Vector3,J=yr(T+.5,0,1),j=T<-.12?-1:1,te=yr(H*1.2,-.75,.75),de=-1.68*l,ae=.54*l,Q=(w.x*p-de)/l,se=(w.y-ae)/l,L=m.get(_);if(L)if(J=L.fraction,L.zone==="track"){let ce=l*(-4.58+5.83*L.fraction+P*.14),C=l*(-.02+.25*L.level+(P>0?0:.16)+.15*Math.sin(L.fraction*Math.PI));R.set(ce-w.x*p,C-w.y,P*l*(1.49+.23*L.level)),j=L.fraction<.6?-1:1,te=-.8+.24*L.level+(P<0?.1:0)}else R.set(l*(L.zone==="hood"?-.97:.64),l*(.55+.31*L.level),P*l*(.71+.61*L.fraction)),j=L.zone==="hood"?-1:1,te=.17+.14*L.level;else b==="cingoli"?(R.set(l*(Q*.36-.36+P*.16),l*(se*.47+.09+.17*Math.sin((Q/4.7+.5)*Math.PI)),P*l*(1.05+.11*Math.abs(Q))),J=yr(Q/5+.5,0,1),j=Q<0?-1:1,te=-.78+.35*se+(P<0?.13:0)):b==="trasmissione"?(R.set(l*(Q*.16-.15),l*(se*.23+.28),P*l*.6),j=w.x*p>-.62?1:-1,te=-.52):b==="vetri"?(R.set(l*(.13+.3*T),l*(1.24+.22*H),P*l*.9),j=-1,te=.78):b==="lamierati"?(R.set(l*(-1.62+.25*T),l*(.56+.34*H),P*l*.8),j=-1,te=.39):b==="motore"?(R.set(l*(-1.06+.19*T),l*(.34+.31*H),-l*.65),j=-1,te=.01):b==="cabina"?(R.set(l*(-.14+.28*T),l*(.85+.39*H),P*l*.41),j=-1,te=.64):b==="pistoni"?(R.copy(D).multiplyScalar(l*.58).add(new r.Vector3(l*.54,l*.39,P*l*.32)),j=1,te=.52):b==="benna"?(R.set(l*(1.14+.23*T),l*(.1+.25*H),P*l*.52),j=1,te=-.61):b==="braccio"||b==="tubazioni"?(R.set(l*(.56+.61*T),l*((b==="braccio"?.71:1.11)+.35*H),P*l*.24),j=1,te=b==="braccio"?.55:.87):(R.set(l*.26*T,l*.25,P*l*.16),j=T<0?-1:1,te=-.24);b!=="pistoni"&&(R.x*=p);let W=x.geometry.boundingBox||(x.geometry.computeBoundingBox(),x.geometry.boundingBox),Ae=W.getSize(new r.Vector3).multiply(x.scale),S=[Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(Ae.z)].sort((ce,C)=>C-ce),E=Jn(.49,1.84,Math.sqrt(S[0]*S[1])/l),z=Math.max(M.bulk*.48,E*(b==="tubazioni"?.48:1)),N=b==="bulloneria"?D:new r.Vector3(.11+v()*.13,.88+v()*.08,P*(.22+v()*.14)).normalize(),I=Ae.length()*.5+W.getCenter(new r.Vector3).multiply(x.scale).length(),X={part:x,extraction:R,axis:N,family:M,side:P,row:J,boundRadius:I,rest:new r.Matrix4().compose(w,x.quaternion,x.scale),spin:M.turns*Zp*(L?.79:.62)*(P<0?-1:1)*(1-z*.59),bulk:z,lens:.16+.12*J+z*.3,laneX:j*(.72+.37*J+1.07*z),laneY:te+(J-.5)*.32,arcX:j*l*(.67+1.31*z),arcY:l*(.2+.28*te),defocus:.86+v()*.12};Gh(r,x,_,g,X);let G=new r.Quaternion().setFromAxisAngle(X.seatAxis,X.seatTurn),q=w.clone().add(X.lead).add(R).add(X.offset.clone().applyQuaternion(G)).sub(X.offset),ne=G.multiply(x.quaternion);return X.seatedPosition=q,X.releasedRotation=ne,X.released=new r.Matrix4().compose(q,ne,x.scale),X});return{parts:f,center:i,width:a,lastDeparture:Math.max(...f.map(x=>x.end))}}function Hh(r,e,t){let n=e.map((J,j)=>Kp(r,J,j)),i=new r.Vector3,s=new r.Vector3,a=new r.Vector3,o=new r.Vector3,c=new r.Vector3,l=new r.Vector3,h=new r.Vector3,u=new r.Vector3,p=new r.Vector3,d=new r.Quaternion,m=new r.Quaternion,g=new r.Quaternion,f=new r.Vector3,x=new r.Quaternion,_=new r.Matrix4,v=new r.Matrix4().makeTranslation(0,-1e5,0),M=.4,w=1,b=.1,T=.5,H=1.12;function P(J,j){u.subVectors(J,c);let te=u.dot(o);return te+j<b||Math.abs(u.dot(s))>te*T+j*H+.04}function D(J,j,te,de){if(!j&&de)return;let ae=n[J].parts;for(let Q=0;Q<ae.length;Q++)te(J,Q,j?ae[Q].rest:v,j?1:0,0,j)}function ee(J,j,te,de,ae){let Q=n[J];if(ae&&j>=Q.lastDeparture)return;let se=Math.max(Q.width*.55,(Q.center.x-c.x)*o.x+(Q.center.y-c.y)*o.y+(Q.center.z-c.z)*o.z);for(let L=0;L<Q.parts.length;L++){let W=Q.parts[L];if(j<=W.begin){de(J,L,W.rest,1,0,!0);continue}if(j>=W.end){ae||de(J,L,v,0,0,!1);continue}if(j>=W.seated&&j<=W.departure){de(J,L,W.released,1,0,!0);continue}let Ae=W.part;if(j<W.seated){let C=Jn(W.begin,W.leadEnd,j),y=Jn(W.threadRise?W.leadEnd:W.fanBegin,W.seated,j),Y=W.threadRise?(W.threadRise*C+(W.clearance-W.threadRise)*y)/W.clearance:C,k=W.screwTurn*C+(W.seatTurn-W.screwTurn)*y;g.setFromAxisAngle(W.seatAxis,k),f.copy(W.offset).applyQuaternion(g).sub(W.offset),i.copy(Ae.position).addScaledVector(W.lead,Y).addScaledVector(W.extraction,y).add(f),x.multiplyQuaternions(g,Ae.quaternion),_.compose(i,x,Ae.scale),de(J,L,_,1,0,!1);continue}if(W.inspection){let C=W.inspection,y=Math.max(b*3,se*C.depth),Y=y*M,k=Jn(W.departure,.534,j),O=Jn(.487,W.end,j),K=-te,re=C.row+te*.11;l.copy(c).addScaledVector(o,y).addScaledVector(s,K*C.column*Y*w).addScaledVector(a,re*Y);let ie=Math.max(b*3,y*.42);if(h.copy(c).addScaledVector(o,ie).addScaledVector(s,K*(ie*T*1.085+W.boundRadius*H+Math.abs(C.layer||0)+.12)).addScaledVector(a,(re+.22)*ie*M),C.wheelAxis&&(p.copy(o).multiplyScalar(-.72).addScaledVector(s,K*.64).addScaledVector(a,.27).normalize(),l.addScaledVector(p,C.layer),h.addScaledVector(p,C.layer*.64)),i.copy(W.seatedPosition).lerp(l,k).addScaledVector(a,.38*k*(1-k)*se*M).lerp(h,O),ae&&O>.7&&P(i,W.boundRadius))continue;if(C.wheelAxis)d.setFromUnitVectors(C.wheelAxis,p).multiply(Ae.quaternion),m.setFromAxisAngle(p,K*(.75*k+1.45*O)),d.premultiply(m),x.slerpQuaternions(W.releasedRotation,d,k);else{let _e=1.05*k+1.76*O;m.setFromAxisAngle(W.axis,_e*K),x.multiplyQuaternions(m,W.releasedRotation),m.setFromAxisAngle(a,K*(.58*k+.26*O)),x.premultiply(m)}_.compose(i,x,Ae.scale),de(J,L,_,1,.36*k+.64*O);continue}let S=yr((j-W.departure)/(W.end-W.departure),0,1),E=Jn(0,1,S),z=4*E*(1-E),N=Math.max(b*3,se*W.lens),I=N*M,X=W.laneX+te*.047,G=I*w*1.055+W.boundRadius*H+.09,q=Math.sign(X)*Math.max(Math.abs(X)*I*w,G);l.copy(c).addScaledVector(o,N).addScaledVector(s,q).addScaledVector(a,W.laneY*I),i.copy(W.seatedPosition).lerp(l,E).addScaledVector(s,z*W.arcX).addScaledVector(a,z*W.arcY);let ne=Jn(0,.93-.11*W.bulk,S);if(i.addScaledVector(s,(ne-E)*u.subVectors(l,W.seatedPosition).dot(s)),ae&&S>.55&&P(i,W.boundRadius))continue;m.setFromAxisAngle(W.axis,W.spin*Jn(.031,.985,S)),x.multiplyQuaternions(m,W.releasedRotation),_.compose(i,x,Ae.scale);let ce=Jn(.29-W.bulk*.07,.92-W.bulk*.12,S)*W.defocus;de(J,L,_,1,ce)}}function R(J,j,te,de,ae=t,Q=!1){let se=yr(te,0,1);if(J===j){D(J,!0,de,Q);return}if(se===0||se===1){D(J,se===0,de,Q),D(j,se===1,de,Q);return}ae.updateWorldMatrix(!0,!1);let L=ae.matrixWorld;c.setFromMatrixPosition(L),s.setFromMatrixColumn(L,0).normalize(),a.setFromMatrixColumn(L,1).normalize(),o.setFromMatrixColumn(L,2).normalize().negate(),M=Math.tan(ae.fov*Math.PI/360)/ae.zoom,w=ae.aspect,T=w*M,H=Math.hypot(1,T),b=ae.near;let W=j>J?1:-1;ee(J,se,W,de,Q),ee(j,1-se,-W,de,Q)}return{sample:R}}function Wh(r,e){let t={occlusion:{value:null},rows:{value:new r.Vector2},weights:{value:new r.Vector2(1,0)}},n=new r.ShaderMaterial({uniforms:t,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 atlasUV;
      void main(){atlasUV=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 atlasUV;
      uniform sampler2D occlusion;
      uniform vec2 rows,weights;
      void main(){
        vec2 rowY=(3.-rows+atlasUV.y)*.25;
        float a=texture2D(occlusion,vec2(atlasUV.x,rowY.x)).r;
        float b=texture2D(occlusion,vec2(atlasUV.x,rowY.y)).r;
        float shade=dot(vec2(a,b),weights);
        gl_FragColor=vec4(.009,.008,.006,shade);
      }`}),i=new r.Mesh(new r.PlaneGeometry(18,9),n);return i.rotation.x=-Math.PI/2,i.position.y=-.008,i.renderOrder=-1,i.visible=!1,e.add(i),{ready:new r.TextureLoader().loadAsync("media/ground-contact.webp").then(a=>(a.colorSpace=r.NoColorSpace,t.occlusion.value=a,i.visible=!0,!0)).catch(()=>!1),update(a,o,c){t.rows.value.set(a,o);let l=1-r.MathUtils.smoothstep(c,.08,.42),h=r.MathUtils.smoothstep(c,.59,.93);return t.weights.value.set(a===o?1:l,a===o?0:h),i.visible?1-t.weights.value.x-t.weights.value.y:1}}}async function Xh(r){return Promise.all(r.map(async({year:e})=>{try{let t=new Image;t.src="media/luce-"+e+".webp",await t.decode();let n=192,i=96,s=document.createElement("canvas");s.width=n,s.height=i;let a=s.getContext("2d",{willReadFrequently:!0});return a.drawImage(t,0,0,n,i),{width:n,height:i,data:a.getImageData(0,0,n,i).data}}catch{return null}}))}function Sl(r,e,t){let n=new r.PMREMGenerator(e),i=new r.Vector3(-.56,.65,.51).normalize(),s=[.66,.79,.99],a=[.16,.13,.09],o=[1.15,1.04,.91],c=new Float32Array(256);for(let h=0;h<256;h++){let u=h/255;c[h]=u<.04045?u/12.92:((u+.055)/1.055)**2.4}let l=t.map(h=>{let d=new Float32Array(131072);for(let f=0;f<128;f++){let x=Math.PI*(1-(f+.5)/128),_=Math.cos(x),v=Math.sin(x),M=h?Math.min(h.height-1,Math.max(0,Math.floor((.49-.54*_)*h.height))):0;for(let w=0;w<256;w++){let b=2*Math.PI*((w+.5)/256-.5),T=v*Math.cos(b),H=v*Math.sin(b),P=Math.max(0,T*i.x+_*i.y+H*i.z),D=Math.pow(P,30)*1.35+Math.pow(P,580)*12,ee=(f*256+w)*4,R=_>=0,J=R?s:a,j=h?Math.min(h.width-1,Math.floor((.5-.497*Math.cos(b+.8))*h.width)):0,te=h?(M*h.width+j)*4:0;for(let de=0;de<3;de++){let ae=J[de],Q=h?c[h.data[te+de]]*(R?2.25:1.17):ae;d[ee+de]=ae*.34+Q*.66+D*o[de]}d[ee+3]=1}}let m=new r.DataTexture(d,256,128,r.RGBAFormat,r.FloatType);m.mapping=r.EquirectangularReflectionMapping,m.needsUpdate=!0;let g=n.fromEquirectangular(m);return m.dispose(),g});return n.dispose(),l}var jh=[{matrix:[2.4478364321276365,-.023380387064896906,-.17944118153006983,-.17891992900565423,4316050766285288e-33,3.729765159790077,-.03509480028417401,-.03499285460433618,-.44543164272170555,-.12848517654695918,-.9861056544825697,-.9832411500396284,-4.96122696915129,-10.30737604961329,15.197104794722657,15.472494468521575],camera:[4.712854172070215,3.301588375545085,14.76111829948024],near:.16,far:110},{matrix:[2.467039577461867,.04010941082371933,.12956424081162915,.12918787409903185,0,3.719203136737135,-.08314626371200154,-.08290473498662172,.3225341377682208,-.30679389355647496,-.9910272199955115,-.9881484190659675,-.04992379279791016,-9.009382755433851,12.982231875287134,13.264055457348755],camera:[-1.6677143268888068,3.5053993899297815,12.911008645308971],near:.16,far:110},{matrix:[1.6606701188021726,-.06946891205825537,.746579143223588,.7444104311154585,0,3.7308846024332616,.02507022154010115,.024997395914712332,1.8526973048252362,.0622686426651454,-.6691981853934265,-.6672542545716591,2.794032187681068,-9.806610884050201,13.814691258498646,14.094096657892987],camera:[-11.290257193658855,2.2745366474587705,8.611962961172724],near:.16,far:110},{matrix:[2.428065909252463,.0683328737878362,.21809369445516938,.2174601615736729,-8632101532570577e-33,3.718891872504131,-.0841456827485498,-.0839012508451408,.5429626940362732,-.30557665038108867,-.9752895923529927,-.9724565071173995,1.121184321471704,-10.552804169335504,13.611439599955112,13.891435418110653],camera:[-3.4088301953890094,3.983154200105367,13.178953443723552],near:.16,far:110}];var Qp=["1960","1980","2000","2026"],$p=Qp.map(r=>[()=>"media/finitura-"+r+(innerWidth<=760?"-960":"")+".webp","media/profondita-"+r+".webp"]),ef=`
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
`,tf=`
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
`,nf=`
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
`,rf=`
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
`;function qh(r,e,t,n){let i=jh[e],s={finishRest:{value:n},finishProjector:{value:new r.Matrix4().fromArray(i.matrix)},finishEye:{value:new r.Vector3().fromArray(i.camera)},finishPlanes:{value:new r.Vector2(i.near,i.far)},finishExposure:{value:t},finishAvailable:{value:0},finishPhoto:{value:null},finishDepth:{value:null}};return{configure(a,o){Object.assign(a.uniforms,s),a.uniforms.finishClearPane={value:o.transparent&&o.opacity<1?1:0},a.vertexShader=a.vertexShader.replace("#include <batching_pars_vertex>",`#include <batching_pars_vertex>
`+ef).replace("#include <project_vertex>",tf+`
#include <project_vertex>`),a.fragmentShader=nf+a.fragmentShader.replace("#include <opaque_fragment>",rf+`
#include <opaque_fragment>`)},async load(){let a=new r.TextureLoader,[o,c]=$p[e],[l,h]=await Promise.all([a.loadAsync(o()),a.loadAsync(c)]);return l.colorSpace=r.SRGBColorSpace,l.anisotropy=4,h.colorSpace=r.NoColorSpace,h.generateMipmaps=!1,h.magFilter=h.minFilter=r.NearestFilter,s.finishPhoto.value=l,s.finishDepth.value=h,s.finishAvailable.value=1,[l,h]}}}function wl(r){return Math.max(4,4*Math.ceil(Math.sqrt(4*r)/4))}function Yh(r,e){let t=e.parts.length,n=wl(t),i=new Float32Array(n*n*4),s=new r.Matrix4;e.parts.forEach((o,c)=>{let l=s.compose(o.position,o.quaternion,o.scale).elements,h=16*c;for(let d=0;d<3;d++)for(let m=0;m<4;m++)i[h+4*d+m]=l[d+m*4];let u=(c+1)*.61803398875,p=(c+1)*.41421356237;i[h+12]=u-Math.floor(u),i[h+13]=p-Math.floor(p)});let a=new r.DataTexture(i,n,n,r.RGBAFormat,r.FloatType);return a.needsUpdate=!0,a}var sf=[/Intel(\(R\))?[^,]*\b(UHD|HD) Graphics/i,/Intel(\(R\))?[^,]*\bIris\b/i,/Intel(\(R\))?[^,]*\bXe Graphics/i,/Intel(\(R\))? Graphics\b/i,/Intel(\(R\))? Arc(\(TM\))? Graphics/i,/Radeon(\(TM\))? (Graphics|Vega)\b/i,/Radeon(\(TM\))? \d{3}M\b/i,/\bMali\b/i,/\bAdreno\b/i,/\bPowerVR\b/i,/SwiftShader|llvmpipe|Basic Render/i];function Zh(r){let e=String(r||"");return sf.some(t=>t.test(e))?"ridotto":"pieno"}function Jh({dpr:r=1,w:e,h:t,small:n=!1,tier:i="pieno"}){let s=Math.min(r||1,n?1.35:1.65),a=i==="ridotto"?8e5:22e5,o=Math.min(1,r||1);return Math.max(o,Math.min(s,Math.sqrt(a/Math.max(1,e*t))))}function Kh(r,e,t,n,i,s={}){let a=s.onOrbit||(()=>{}),o=innerWidth<=760,c=new r.WebGLRenderer({alpha:!0,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0});c.setClearColor(0,0),c.debug.checkShaderErrors=!1;let l=!1;c.outputColorSpace=r.SRGBColorSpace,c.toneMapping=r.ACESFilmicToneMapping,c.toneMappingExposure=.89,c.shadowMap.enabled=!0,c.shadowMap.type=r.PCFSoftShadowMap,c.shadowMap.autoUpdate=!1,c.domElement.setAttribute("aria-hidden","true");let h=(()=>{try{let $=c.getContext(),he=$.getExtension("WEBGL_debug_renderer_info");return he?String($.getParameter(he.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),u=Zh(h),p={tier:u,integrated:u==="ridotto",pixelRatio:null};e.appendChild(c.domElement);let d=new r.Scene,m=new r.PerspectiveCamera(30,1,.16,110);performance.mark("r:gl");let g=Sl(r,c,i);performance.mark("r:probes"),d.environment=g[0].texture;let f=new r.HemisphereLight(14477556,9598542,.53);d.add(f);let x=new r.DirectionalLight(16772042,2.42);x.position.set(-7,10,4.5),x.castShadow=!0;let _=o?768:1536;x.shadow.mapSize.set(_,_),Object.assign(x.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:38}),x.shadow.camera.updateProjectionMatrix(),x.shadow.bias=-19e-5,x.shadow.normalBias=.014,x.shadow.radius=3,d.add(x),d.add(x.target);let v=new r.DirectionalLight(13952240,1.15);v.position.set(4,4,-7),d.add(v);let M=new r.Mesh(new r.PlaneGeometry(120,120),new r.ShadowMaterial({color:1513232,opacity:.31,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=-.018,M.receiveShadow=!0,M.renderOrder=-2,d.add(M);let w=Wh(r,d);function b($,he){$.onBeforeCompile=fe=>{fe.vertexShader=fe.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
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
        #endif`),he.configure(fe,$)},$.customProgramCacheKey=()=>"tedeschi-photographic-part-v3"}let T=c.extensions.has("WEBGL_multi_draw");function H($,he){let fe=0,Se=0;for(let Mt of he){let A=$.parts[Mt].geometry,Z=A.attributes.position.count;fe+=Z,Se+=A.index?Math.min(A.index.count-A.drawRange.start,A.drawRange.count):Z}let Ne=new Float32Array(fe*3),Oe=new Float32Array(fe*3),Ee=new Float32Array(fe*2),De=new Float32Array(fe),He=new Uint32Array(Se),Be=new Int32Array(he.length),We=new Int32Array(he.length),$e=0,nt=0;he.forEach((Mt,A)=>{let Z=$.parts[Mt].geometry,ue=Z.attributes,ge=ue.position.count;if(Ne.set(ue.position.array.subarray(0,ge*3),$e*3),ue.normal&&Oe.set(ue.normal.array.subarray(0,ge*3),$e*3),ue.uv&&Ee.set(ue.uv.array.subarray(0,ge*2),$e*2),De.fill(Mt,$e,$e+ge),Be[A]=nt,Z.index){let ye=Z.drawRange.start,Te=Math.min(Z.index.count,ye+Z.drawRange.count),Ze=Z.index.array;for(let Ye=ye;Ye<Te;Ye++)He[nt++]=Ze[Ye]+$e}else for(let ye=0;ye<ge;ye++)He[nt++]=$e+ye;We[A]=nt-Be[A],$e+=ge});let yt=new r.BufferGeometry;return yt.setAttribute("position",new r.BufferAttribute(Ne,3)),yt.setAttribute("normal",new r.BufferAttribute(Oe,3)),yt.setAttribute("uv",new r.BufferAttribute(Ee,2)),yt.setAttribute("batchId",new r.BufferAttribute(De,1)),yt.setIndex(new r.BufferAttribute(He,1)),{geometry:yt,starts:Be,counts:We,elements:Se}}let P=t.map(($,he)=>{let fe=$.parts.length,Se=wl(fe),Ne=new r.DataTexture(new Float32Array(Se*Se*4),Se,Se,r.RGBAFormat,r.FloatType),Oe=qh(r,he,c.toneMappingExposure,Yh(r,$)),Ee=new Map;$.parts.forEach((We,$e)=>{let nt=Ee.get(We.material);nt||Ee.set(We.material,nt=[]),nt.push($e)});let De=new r.Group;De.visible=!1,d.add(De);let He=[],Be=new Int32Array(fe);return Ee.forEach((We,$e)=>{let{geometry:nt,starts:yt,counts:Mt,elements:A}=H($,We),Z=$e.clone();b(Z,Oe);let ue=new r.Mesh(nt,Z);ue.isBatchedMesh=!0,ue._matricesTexture=Ne,ue._multiDrawStarts=new Int32Array(We.length),ue._multiDrawCounts=new Int32Array(We.length),ue._multiDrawCount=0,ue.frustumCulled=!1,ue.matrixAutoUpdate=!1,ue.castShadow=!$e.transparent,ue.receiveShadow=!$e.transparent,De.add(ue);let ge={mesh:ue,parts:Int32Array.from(We),starts:yt,counts:Mt,elements:A,changed:!0};We.forEach(ye=>{Be[ye]=He.length}),He.push(ge)}),{root:De,groups:He,groupOf:Be,poses:Ne,data:Ne.image.data,shown:new Uint8Array(fe),seen:new Uint32Array(fe),pose:new Array(fe),frame:0,dirty:!1,finish:Oe}});performance.mark("r:batches");let D=0,ee=0,R=0,J=0,j=19,te=new r.Vector3(0,2.1,0),de=0,ae=0,Q=0,se=0,L=0,W=0,Ae=n(r,t,m);performance.mark("r:transition");function S($,he,fe,Se,Ne,Oe=!1){if(Se<=1e-4)return;let Ee=P[$];Ee.seen[he]=Ee.frame,!(Oe&&Ee.shown[he]&&Ee.pose[he]===fe)&&(fe.toArray(Ee.data,he*16),Ee.pose[he]=Oe?fe:null,Ee.shown[he]||(Ee.shown[he]=1,Ee.groups[Ee.groupOf[he]].changed=!0),Ee.dirty=!0)}function E($){for(let fe=0;fe<$.seen.length;fe++)$.shown[fe]&&$.seen[fe]!==$.frame&&($.shown[fe]=0,$.pose[fe]=null,$.groups[$.groupOf[fe]].changed=!0,T||($.data.fill(0,fe*16,fe*16+16),$.dirty=!0));let he=!1;for(let fe of $.groups){if(fe.changed){fe.changed=!1;let Se=fe.mesh,Ne=Se._multiDrawStarts,Oe=Se._multiDrawCounts,Ee=0,De=-1,He=0,Be=0;for(let We=0;We<fe.parts.length;We++){if(!$.shown[fe.parts[We]]){De=-1;continue}Be++,T&&(De>=0&&fe.starts[We]===He?Oe[De]+=fe.counts[We]:(De=Ee++,Ne[De]=fe.starts[We]*4,Oe[De]=fe.counts[We]),He=fe.starts[We]+fe.counts[We])}!T&&Be&&(Ne[0]=0,Oe[0]=fe.elements,Ee=1),Se._multiDrawCount=Be?Ee:0,Se.visible=Be>0}he=he||fe.mesh.visible}$.root.visible=he,$.dirty&&($.poses.needsUpdate=!0,$.dirty=!1)}function z($){let he=new r.WebGLRenderTarget(1,1,{type:c.extensions.has("EXT_color_buffer_float")?r.HalfFloatType:r.UnsignedByteType,format:r.RGBAFormat,depthBuffer:!0,stencilBuffer:!1});return he.depthTexture=new r.DepthTexture(1,1,r.UnsignedIntType),c.capabilities.isWebGL2&&(he.samples=Math.min($,c.capabilities.maxSamples),he.texture.generateMipmaps=!0,he.texture.minFilter=r.LinearMipmapLinearFilter),he}let N=z(4),I=new r.WebGLRenderTarget(1,1,{type:N.texture.type,depthBuffer:!1,stencilBuffer:!1}),X=new r.Scene,G=new r.OrthographicCamera(-1,1,1,-1,0,1),q={colorTex:{value:N.texture},depthTex:{value:N.depthTexture},blurTex:{value:I.texture},pixel:{value:new r.Vector2},focal:{value:j},nearZ:{value:m.near},farZ:{value:m.far},strength:{value:0},maxRadius:{value:16}},ne="varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ce=`varying vec2 vUv; uniform sampler2D colorTex,depthTex,blurTex; uniform vec2 pixel;
    uniform float focal,nearZ,farZ,strength,maxRadius;
    float viewDepth(float depth){return nearZ*farZ/(farZ-(farZ-nearZ)*depth);}
    float circle(float depth){return smoothstep(.075,.70,(focal-viewDepth(depth))/focal)*maxRadius*strength;}`,C=new r.ShaderMaterial({uniforms:q,vertexShader:ne,depthTest:!1,depthWrite:!1,toneMapped:!1,fragmentShader:ce+`
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
      }`}),y=new r.ShaderMaterial({uniforms:q,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,toneMapped:!0,vertexShader:ne,fragmentShader:ce+`
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
    }`}),Y=new r.Mesh(new r.PlaneGeometry(2,2),y);X.add(Y);let k=new r.Scene;k.add(new r.Mesh(Y.geometry,C));let O=t.map($=>{let he=new r.Box3,fe=new r.Vector3,Se=new r.Matrix4,Ne=new r.Vector3,Oe=[],Ee=new Set;function De(){fe.applyMatrix4(Se),he.expandByPoint(fe);let He=(Math.round(fe.x*500)+16384)*1073741824+(Math.round(fe.y*500)+16384)*32768+Math.round(fe.z*500)+16384;Ee.has(He)||(Ee.add(He),Oe.push(fe.x,fe.y,fe.z))}for(let He of $.parts){let Be=He.geometry;Be.boundingBox||Be.computeBoundingBox();let We=Be.boundingBox;if(We.getSize(Ne).multiply(He.scale),Se.compose(He.position,He.quaternion,He.scale),Math.max(Ne.x,Ne.y,Ne.z)>.72){let $e=Be.attributes.position;for(let nt=0;nt<$e.count;nt++)fe.fromBufferAttribute($e,nt),De()}else for(let $e=0;$e<8;$e++)fe.set($e&1?We.max.x:We.min.x,$e&2?We.max.y:We.min.y,$e&4?We.max.z:We.min.z),De()}return{bounds:he,points:Float32Array.from(Oe),center:he.getCenter(new r.Vector3),focus:new r.Vector3,distance:1,yaw:0,elevation:0}}),K=O.map($=>$.bounds);performance.mark("r:framing");let re=[.18,-.4,-.755,-.42],ie=[.035,.105,.038,.108],_e=[.955,.92,.924,.923],Me=0,we=r.MathUtils.clamp(s.grounding||0,0,1),Re=[-.8,-.45,-.2,-.4],Le=1.3,ke=!!s.forzaYaw;function Ue($,he,fe,Se,Ne){let Oe=O[$],Ee=Math.sin(he),De=Math.cos(he),He=Math.sin(fe),Be=Math.cos(fe),We=-1/0,$e=1/0,nt=-1/0,yt=1/0,Mt=Oe.points,A=Oe.center;for(let Z=0;Z<Mt.length;Z+=3){let ue=Mt[Z]-A.x,ge=Mt[Z+1]-A.y,ye=Mt[Z+2]-A.z,Te=Ee*ue+De*ye,Ze=Be*Te+He*ge,Ye=De*ue-Ee*ye,et=Be*ge-He*Te;We=Math.max(We,Ye+Se*Ze),$e=Math.min($e,Ye-Se*Ze),nt=Math.max(nt,et+Ne*Ze),yt=Math.min(yt,et-Ne*Ze)}return{xhi:We,xlo:$e,yhi:nt,ylo:yt,distance:Math.max((We-$e)/(2*Se),(nt-yt)/(2*Ne))+.03}}function Ge($){let he=O[$];if(he.revision===Me)return he;he.revision=Me;let Se=Math.tan(m.fov*Math.PI/360)*_e[$],Ne=Se*m.aspect,Oe=ie[$]??.1,Ee=ke||we>0&&m.aspect<=Le?Re[$]:0;he.yaw=(re[$]??0)+Ee+R,he.elevation=r.MathUtils.clamp(Oe+J,-.025,.66);let De=Math.sin(he.yaw),He=Math.cos(he.yaw),Be=Math.sin(he.elevation),We=Math.cos(he.elevation),{xhi:$e,xlo:nt,yhi:yt,ylo:Mt,distance:A}=Ue($,he.yaw,he.elevation,Ne,Se),Z=he.center,ue=($e+nt)*.5,ge=(yt+Mt)*.5;return he.distance=A,we>0&&(ge+=we*(Mt+Se*he.distance-ge)),he.focus.set(Z.x+ue*He-ge*De*Be,Z.y+ge*We,Z.z-ue*De-ge*He*Be),he}function Xe(){let $=r.MathUtils.smootherstep(W,0,1),he=Ge(se),fe=Ge(L),Se=se===L?0:16*W*W*(1-W)*(1-W);te.copy(he.focus).lerp(fe.focus,$),j=r.MathUtils.lerp(he.distance,fe.distance,$)*(1+.067*Se),D=r.MathUtils.lerp(he.yaw,fe.yaw,$)+.033*Se,ee=r.MathUtils.lerp(he.elevation,fe.elevation,$)+.027*Se,m.position.set(te.x+Math.sin(D)*Math.cos(ee)*j,te.y+Math.sin(ee)*j,te.z+Math.cos(D)*Math.cos(ee)*j),m.lookAt(te),m.updateMatrixWorld(),q.focal.value=j}let Je=NaN,ut=NaN,_t=NaN,ht=-1,dt=[];function Lt(){let $=se===L||W===0?se:W===1?L:-1;if(!($>=0&&$===ht)){ht=$,dt.length=0;for(let he=0;he<P.length;he++)he===se||he===L?(dt.push(P[he]),P[he].frame++):P[he].root.visible=!1;Ae.sample(se,L,W,S,m,!0);for(let he of dt)E(he)}}function le(){if(!l)return;Lt();let $=se+(L-se)*W;(!Number.isFinite(Je)||Math.abs(Je-$)>1/120||Number.isInteger($)&&$!==Je||!Number.isInteger($)&&(D!==ut||ee!==_t))&&(c.shadowMap.needsUpdate=!0,Je=$,ut=D,_t=ee);let fe=se!==L&&W>.002&&W<.998,Se=fe?r.MathUtils.smootherstep(W,.22,.4)*(1-r.MathUtils.smootherstep(W,.62,.78)):0;q.strength.value=Se;let Ne=fe?r.MathUtils.smootherstep(W,.28,.46)*(1-r.MathUtils.smootherstep(W,.55,.72)):0;q.focal.value=j*(1-.47*Ne);let Oe=w.update(se,L,W);M.material.opacity=Oe*(.22-.1*Se),M.visible=M.material.opacity>1e-4;let Ee=Se>.001;c.setRenderTarget(N),c.render(d,m),Ee&&(c.setRenderTarget(I),c.render(k,G)),c.setRenderTarget(null),c.render(X,G)}function Ve(){let $=Math.max(1,e.clientWidth),he=Math.max(1,e.clientHeight),fe=devicePixelRatio||1;if($===de&&he===ae&&fe===Q)return;de=$,ae=he,Q=fe,c.setPixelRatio(Jh({dpr:fe,w:$,h:he,small:o,tier:u})),p.pixelRatio=+c.getPixelRatio().toFixed(3),c.setSize($,he,!1);let Se=c.getPixelRatio(),Ne=Math.round($*Se),Oe=Math.round(he*Se);N.setSize(Ne,Oe),I.setSize(Math.max(1,Math.ceil(Ne*.5)),Math.max(1,Math.ceil(Oe*.5))),q.pixel.value.set(1/Ne,1/Oe),q.maxRadius.value=o?9*Se:15*Se,m.aspect=$/he,m.updateProjectionMatrix(),Me++,Xe(),le()}new ResizeObserver(Ve).observe(e);let ot=null,lt=!1,Qe=0;function Yt(){ot?.removeEventListener?.("change",zt);try{ot=matchMedia("(resolution: "+(devicePixelRatio||1)+"dppx)"),ot.addEventListener("change",zt)}catch{ot=null}}function zt(){Yt(),lt=!0,Pn()}function Pn(){if(lt){if(performance.now()-Qe<300){setTimeout(Pn,200);return}lt=!1,Ve()}}Yt(),setInterval(()=>{!lt&&de&&(devicePixelRatio||1)!==Q&&zt()},1e3),c.domElement.addEventListener("webglcontextlost",$=>{$.preventDefault()},!1),c.domElement.addEventListener("webglcontextrestored",()=>{let $=Sl(r,c,i);g.splice(0,g.length,...$),d.environment=g[W<.5?se:L].texture;for(let he of P)he.poses.needsUpdate=!0;Je=NaN,ht=-2,de=0,Ve(),le()},!1);function cn($,he){R=r.MathUtils.clamp(R+$,-1.15,1.15),J=r.MathUtils.clamp(J+he,-.1,.52),Me++,Xe(),le(),a(R,J)}let Vt=0,nn=0,Zt=0,It=0,ft=matchMedia("(prefers-reduced-motion: reduce)").matches;function Ut($){Zt=0;let he=It?Math.min(80,$-It):16.7,fe=Vt-R,Se=nn-J,Ne=ft||Math.max(Math.abs(fe),Math.abs(Se))<5e-4,Oe=Ne?1:-Math.expm1(-he/(Rt!==null?39:95));cn(Oe*fe,Oe*Se),It=Ne?0:$,Ne||(Zt=requestAnimationFrame(Ut))}function mt($,he){Vt=r.MathUtils.clamp($,-1.15,1.15),nn=r.MathUtils.clamp(he,-.1,.52),Zt||(Zt=requestAnimationFrame(Ut))}let Rt=null,St=0,wt=0,rn=0,U=0,oe=0;e.addEventListener("pointerdown",$=>{$.button!==0||Rt!==null||(Rt=$.pointerId,St=$.clientX,wt=$.clientY,rn=U=0,oe=performance.now(),e.setPointerCapture($.pointerId),e.classList.add("dragging"))}),e.addEventListener("pointermove",$=>{if($.pointerId!==Rt)return;let he=performance.now(),fe=Math.max(1,he-oe);oe=he;let Se=$.clientX-St,Ne=$.clientY-wt;rn=rn*.6+Se/fe*.4,U=U*.6+Ne/fe*.4,mt(Vt-Se*.005,nn+Ne*.003),St=$.clientX,wt=$.clientY});function me(){Rt=null,e.classList.remove("dragging")}e.addEventListener("lostpointercapture",me),e.addEventListener("pointercancel",me),e.addEventListener("pointerup",$=>{e.hasPointerCapture($.pointerId)&&e.releasePointerCapture($.pointerId),!ft&&performance.now()-oe<90&&Math.abs(rn)+Math.abs(U)>.05&&mt(Vt-rn*.005*190,nn+U*.003*120),me()}),e.addEventListener("keydown",$=>{($.key==="ArrowLeft"||$.key==="ArrowRight")&&($.preventDefault(),mt(Vt+($.key==="ArrowLeft"?-.09:.09),nn))});function be($){let he=c.getRenderTarget(),fe=[];if($)for(let Ne of P){fe.push([Ne.root,Ne.root.visible]),Ne.root.visible=!0;for(let Oe of Ne.groups)fe.push([Oe.mesh,Oe.mesh.visible]),Oe.mesh.visible=!0}let Se=[];try{c.setRenderTarget(N),Se.push(c.compileAsync(d,m)),c.setRenderTarget(I),Se.push(c.compileAsync(k,G)),c.setRenderTarget(null),Se.push(c.compileAsync(X,G))}finally{c.setRenderTarget(he);for(let[Ne,Oe]of fe)Ne.visible=Oe}return Promise.all(Se)}function ve($){let he=P[$],fe=t[$],Se=[[M,M.visible]],Ne=d.environment,Oe=he.data.slice();M.visible=!0;for(let Be of P)Se.push([Be.root,Be.root.visible]),Be.root.visible=Be===he;let Ee=he.groups.map(Be=>[Be.mesh.visible,Be.mesh._multiDrawCount,Be.mesh._multiDrawStarts[0],Be.mesh._multiDrawCounts[0]]),De=new r.Matrix4;fe.parts.forEach((Be,We)=>De.compose(Be.position,Be.quaternion,Be.scale).toArray(he.data,We*16));for(let Be of he.groups)Be.mesh.visible=!0,Be.mesh._multiDrawCount=1,Be.mesh._multiDrawStarts[0]=0,Be.mesh._multiDrawCounts[0]=Be.elements;he.poses.needsUpdate=!0;let He=c.getRenderTarget();try{d.environment=g[$].texture,c.shadowMap.needsUpdate=!0,c.setRenderTarget(N),c.render(d,m),c.setRenderTarget(I),c.render(k,G)}finally{c.setRenderTarget(He),d.environment=Ne;for(let[Be,We]of Se)Be.visible=We;he.groups.forEach((Be,We)=>{[Be.mesh.visible,Be.mesh._multiDrawCount,Be.mesh._multiDrawStarts[0],Be.mesh._multiDrawCounts[0]]=Ee[We]}),he.data.set(Oe),he.poses.needsUpdate=!0,Je=NaN}}async function Fe(){await be(!0);for(let $=0;$<P.length;$++)await new Promise(requestAnimationFrame),ve($)}async function je(){ht=-2,Lt(),Xe(),await be(!1),l=!0,ht=-2,le()}d.updateMatrixWorld(!0),d.matrixWorldAutoUpdate=!1,Ve(),performance.mark("r:primo-disegno");let qe=[s.first??0,0,1,2,3].filter(($,he,fe)=>fe.indexOf($)===he),B=new Array(P.length);async function F($){try{let he=await P[$].finish.load();for(let fe of he)c.initTexture(fe);return($===se||$===L)&&(ht=-2,le()),!0}catch{return!1}}B[qe[0]]=F(qe[0]);let pe=B[qe[0]],xe=pe;for(let $ of qe.slice(1))xe=B[$]=xe.then(()=>F($));let Ce=Promise.all(B);function Pe(){let $=O[se],he=$.points,fe=new r.Vector3,Se=e.getBoundingClientRect(),Ne=1/0,Oe=1/0,Ee=-1/0,De=-1/0;m.updateMatrixWorld();for(let He=0;He<he.length;He+=3){fe.set(he[He],he[He+1],he[He+2]).project(m);let Be=(fe.x+1)/2*Se.width,We=(1-fe.y)/2*Se.height;Be<Ne&&(Ne=Be),Be>Ee&&(Ee=Be),We<Oe&&(Oe=We),We>De&&(De=We)}return{left:Se.left+Ne,top:Se.top+Oe,right:Se.left+Ee,bottom:Se.top+De}}return{quality:p,machineRect:Pe,canvas:c.domElement,bounds:K,view:c,draw:le,prepareTransitions:Fe,warm:je,finishReady:Ce,firstFinish:pe,groundReady:w.ready,show($,he,fe){$===se&&he===L&&fe===W||(Qe=performance.now(),se=$,L=he,W=fe,d.environment=g[fe<.5?$:he].texture,Xe(),le())},setReducedMotion($){ft=!!$},setGrounding($){let he=r.MathUtils.clamp(Number($)||0,0,1);he!==we&&(we=he,Me++,Xe(),le())},reset($=!1){if($&&!ft){mt(0,0);return}Zt&&cancelAnimationFrame(Zt),Zt=It=Vt=nn=R=J=0,Me++,Xe(),le()}}}var Qh=["1960","1980","2000","2026"];var $h={apertura:{step:150,max:980,stagger:70,extra:160},cambio:{step:80,max:240,stagger:20,extra:100}},af=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function of(r){let e=[];for(let h=19;h>=-10;h--)e.push((h%10+10)%10);let t=Array.from({length:4},()=>{let h=document.createElement("span");h.className="roll";let u=document.createElement("span");return u.className="roll-band",u.append(...e.map(p=>{let d=document.createElement("span");return d.textContent=String(p),d})),h.append(u),{col:h,band:u,value:0,from:0,to:0,start:0,dur:0,delay:0}}),n=document.createElement("span");n.className="roll-box",n.setAttribute("aria-hidden","true"),n.append(...t.map(h=>h.col));let i=document.createElement("span");i.className="sr",r.replaceChildren(n,i),r.style.setProperty("--pitch",1.25);let s=0,a=null;function o(h){let u=h.value;h.band.style.transform="translate3d(0,"+(-(19-u)*1.25).toFixed(4)+"em,0)"}function c(h){s=0;let u=!1;for(let p of t){if(p.dur<=0)continue;let d=Math.max(0,Math.min(1,(h-p.start-p.delay)/p.dur)),m=Math.abs(p.to-p.from),g=d*m,f=Math.min(m-1,Math.floor(g)),x=af(Math.min(1,g-f));p.value=p.from+Math.sign(p.to-p.from)*(d>=1?m:f+x),o(p),d<1?u=!0:(p.value=(p.to%10+10)%10,p.dur=0,o(p))}u&&(s=requestAnimationFrame(c))}function l(h,u,p,d=$h.cambio){let m=[...h].map(Number);i.textContent=h,s&&(cancelAnimationFrame(s),s=0);let g=performance.now(),f=0;t.forEach((x,_)=>{let v=x.value,M=m[_],w=(Math.round(v)%10+10)%10;if(!u){x.value=M,x.dur=0,o(x);return}let b=p>0?(M-w+10)%10:-((w-M+10)%10);if(b===0&&Math.abs(v-Math.round(v))<1e-4){x.value=M,x.dur=0,o(x);return}x.from=v,x.to=Math.round(v)+b,x.start=g,x.dur=Math.min(d.max,d.step*Math.max(1,Math.abs(b))+d.extra),x.delay=f++*d.stagger,b===0&&(x.to=Math.round(v),x.dur=Math.min(200,d.max))}),t.some(x=>x.dur>0)&&(s=requestAnimationFrame(c))}return{show(h,{animate:u=!1,direction:p=1,pace:d}={}){let m=Qh[h]||Qh[0];if(a===m&&!u)return;let g=a!==m;a=m,(g||!u)&&l(m,u&&g,p,d)},intro(h){t.forEach((u,p)=>{u.value=[1,9,0,0][p],u.dur=0,o(u)}),a=null,h?this.show(0,{animate:!0,direction:1,pace:$h.apertura}):this.show(0)}}}var lf=110,cf=200,hf=3;function eu(r){let e=of(r.querySelector(".year")),t=r.querySelector(".story-copy"),n=t.querySelector(".period"),i=t.querySelector(".era-title"),s=t.querySelector("p"),a=null,o=null,c=null;function l(u){u!==o&&(o=u,n.textContent=u.subtitle,i.textContent=u.title,s.textContent=u.body)}function h(){c&&(c.cancel(),c=null),a&&l(a)}return{show:e.show,intro:e.intro,settle:h,change(u,{animate:p=!1,direction:d=1}={}){if(u===a)return;if(a=u,!p||typeof t.animate!="function"||o===null){h();return}let m=c?Number(getComputedStyle(t).opacity):1;c&&c.cancel();let g=hf*Math.sign(d||1),f=t.animate([{opacity:m,transform:"translate3d(0,0,0)"},{opacity:0,transform:"translate3d(0,"+-g+"px,0)"}],{duration:lf*m,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});c=f,f.onfinish=()=>{if(c!==f)return;l(a);let x=t.animate([{opacity:0,transform:"translate3d(0,"+g+"px,0)"},{opacity:1,transform:"translate3d(0,0,0)"}],{duration:cf,easing:"cubic-bezier(0,0,.2,1)"});f.cancel(),c=x,x.onfinish=()=>{c===x&&(c=null)}}}}}function nu(r){if(r<=0)return 0;if(r>=1)return 1;let e=.7,t=0,n=.2,i=1,s=3*e,a=3*(n-e)-s,o=1-s-a,c=r;for(let p=0;p<6;p++){let d=((o*c+a)*c+s)*c-r,m=(3*o*c+2*a)*c+s;if(Math.abs(d)<1e-5||!m)break;c-=d/m}c=Math.max(0,Math.min(1,c));let l=3*t,h=3*(i-t)-l;return(((1-l-h)*c+h)*c+l)*c}var Mr=[0,.0967,.158,.2112,.2785,.3284,.3624,.3918,.4221,.4588,.5069,.5511,.5843,.6124,.6395,.6697,.7104,.7794,.839,.9023,1],On=Mr.length-1,tu=(()=>{let r=1/On,e=Mr.slice(1).map((n,i)=>(n-Mr[i])/r),t=new Array(Mr.length);t[0]=e[0],t[On]=e[On-1];for(let n=1;n<On;n++)t[n]=e[n-1]*e[n]<=0?0:(e[n-1]+e[n])/2;for(let n=0;n<On;n++){if(e[n]===0){t[n]=t[n+1]=0;continue}let i=t[n]/e[n],s=t[n+1]/e[n],a=i*i+s*s;if(a>9){let o=3/Math.sqrt(a);t[n]=o*i*e[n],t[n+1]=o*s*e[n]}}return t[0]=t[On]=(t[0]+t[On])/2,t})();function iu(r){if(r<=0)return 0;if(r>=1)return 1;let e=r*On,t=Math.min(On-1,Math.floor(e)),n=e-t,i=1/On,s=n*n,a=s*n;return(2*a-3*s+1)*Mr[t]+(a-2*s+n)*i*tu[t]+(-2*a+3*s)*Mr[t+1]+(a-s)*i*tu[t+1]}var Bn=[{year:"1960",label:"Anni Sessanta",short:"La meccanica",subtitle:"Escavatore a funi",title:"Lo scavo frontale",body:"L\u2019asta spinge la benna nel terreno. La fune passa sulle pulegge e la solleva.",photo:"media/era-1960.jpg"},{year:"1980",label:"Anni Ottanta",short:"L\u2019idraulica",subtitle:"Escavatore idraulico",title:"Il braccio articolato",body:"I cilindri sollevano il braccio. I tubi flessibili seguono il bilanciere mentre la benna si chiude.",photo:"media/era-1980.jpg"},{year:"2000",label:"Primi Duemila",short:"La benna da finitura",subtitle:"Escavatore a carro lungo",title:"La benna da finitura",body:"La benna ha un bordo liscio per stendere il terreno. I due cingoli larghi sostengono la macchina durante lo scavo.",photo:"media/era-2000.jpg"},{year:"2026",label:"Oggi",short:"Il controllo di scavo",subtitle:"Escavatore elettroidraulico",title:"Il controllo di scavo",body:"Dalla cabina panoramica si vedono la benna e i raccordi esterni del bilanciere.",photo:"media/era-2026.jpg"}];function hu(r){let e=document.querySelector(".scene"),t=Math.max(innerWidth,(e?.clientHeight||innerHeight)*1.78)*Math.min(devicePixelRatio||1,2);return"media/fondale-"+Bn[r].year+(t<=1150?"-1100":"-1672")+".webp"}var Pl=new URLSearchParams(location.search),Ar=Pl.has("manuale"),wa=Math.max(0,Math.min(3,Number(Pl.get("inizio"))||0));Ar&&document.documentElement.classList.add("td3-manuale");var ct=r=>document.getElementById(r),tn={scrub:ct("scrub"),previous:ct("previous"),next:ct("next"),play:ct("play"),playLabel:ct("play-label"),count:ct("era-count"),current:ct("current-era"),backdrops:ct("backdrops")},ss=[],uu=[],fi=eu(ct("story")),wr=0,Fn=0,is=0,as=!1,Tt=null,at=0,Ea=0,Kn=null,mi=0,At=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let r=localStorage.getItem("tedeschi-3d-motion");r!==null&&(At=r==="ridotto")}catch{}Ar&&(At=!0);for(let[r,e]of Bn.entries()){let t=document.createElement("div");t.className="photoscene",t.append(document.createElement("i")),ct("backdrops").append(t),ss.push(t);let n=document.createElement("button");n.type="button",n.className="stop",n.setAttribute("aria-label",e.label+", "+e.year+", "+e.short);let i=document.createElement("span");i.className="dot",i.setAttribute("aria-hidden","true");let s=document.createElement("span"),a=document.createElement("strong"),o=document.createElement("small");a.textContent=e.label,o.textContent=e.short,s.append(a,o),n.append(i,s),ct("stops").append(n),uu.push(n),n.addEventListener("click",()=>Er(r))}if(window.parent!==window||Ar){let r=document.createElement("div");r.className="scene-tools",r.append(ct("motion-switch"),ct("recenter")),document.querySelector(".scene").append(r)}var zn=document.createElement("div");zn.className="curtain-thread";zn.hidden=!0;var du=document.createElement("i");zn.append(du);ct("backdrops").append(zn);var Ta=new Set;function Aa(r){Ta.has(r)||(Ta.add(r),ss[r].firstChild.style.backgroundImage='url("'+hu(r)+'")')}function Al(r){if(Ta.has(r))return Promise.resolve();let e=new Image;return e.src=hu(r),e.decode().catch(()=>{}).then(()=>Aa(r))}var Ra=1,ru=1,Ca=0;function gf(){Ra=tn.backdrops.clientWidth||1,ru=tn.backdrops.clientHeight||1,Ca=Math.atan(16/100*Ra/ru)}var Pa=null;function Rl(r,e){let t=r.style,n=r.firstChild.style;if(e===Pa){t.transform&&(t.transform="",n.transform="");return}let i=(e/100-1)*Ra;t.transform="translate3d("+i.toFixed(2)+"px,0,0) skewX("+(-Ca).toFixed(5)+"rad)",n.transform="skewX("+Ca.toFixed(5)+"rad) translate3d("+(-i).toFixed(2)+"px,0,0)"}function pu(r){du.style.transform="translate3d("+(r*Ra/100-4).toFixed(2)+"px,0,0) skewX("+(-Ca).toFixed(5)+"rad)"}function vf(){if(At)return;let r=[...ss.filter((e,t)=>Ta.has(t)&&t!==Math.floor(at)),zn];for(let e of r)e.hidden=!1,e.style.opacity=".002",e.style.zIndex="3",e!==zn&&Rl(e,Pa);pu(50),requestAnimationFrame(()=>requestAnimationFrame(()=>{for(let e of r)e.style.opacity="",e.style.zIndex="";zn.hidden=!0,Cl="",qt(at,!0)}))}var rs=-1,Ma=-1,Ia=ct("story").querySelector(".year"),Di=At||wa>0;Di||(Ia.style.visibility="hidden");var br=null;function Ll(){Ia.style.visibility="",Di=!0,br?.disconnect(),br=null}function _f(){if(Di||At||Math.round(at)!==0||!Tt){Ll();return}br=new IntersectionObserver(r=>{if(r.some(e=>e.isIntersecting)&&(br?.disconnect(),br=null,!Di)){if(Di=!0,Ia.style.visibility="",At||Math.round(at)!==0){fi.show(Math.round(at));return}fi.intro(!0),Ma=0}},{threshold:.18}),br.observe(ct("view"))}function Qn(){mi&&cancelAnimationFrame(mi),mi=0,Kn=null,Fn&&(cancelAnimationFrame(Fn),Fn=0,Tr.following=!1,as=!1),La()}var su=null;function La(){let r=!!Kn;r!==su&&(tn.playLabel.textContent=r?"Pausa":"Riproduci",tn.play.setAttribute("aria-label",r?"Metti in pausa":"Riproduci la transizione"),tn.play.setAttribute("aria-pressed",String(r)),su=r);let e=at<1e-4&&!r,t=at>2.9999&&!r;tn.previous.disabled!==e&&(tn.previous.disabled=e),tn.next.disabled!==t&&(tn.next.disabled=t)}var Cl="",ba="",au="",ou="";function qt(r,e=!1){let t=Math.max(0,Math.min(3,r));if(t===at&&rs!==-1&&!e){La();return}let n=at;at=t;let i=Math.floor(at),s=Math.min(i+1,3),a=at-i,o=Math.round(at),c=i+"-"+s,l=iu(a);if(c!==Cl){for(let d=0;d<4;d++){let m=ss[d];m.hidden=d!==i&&d!==s,m.hidden||((d===i||a>.05)&&Aa(d),m.style.zIndex=d===i?"0":"1",Rl(m,d===i?Pa:0))}Cl=c,ba=""}if(s!==i){let d=At?a>=.5?1:0:nu((l-.33)/.38),m=d*118,g=d<=0?"chiusa":d>=1?"aperta":m.toFixed(2);if(g!==ba){Rl(ss[s],d>=1?Pa:d<=0?0:m),ba=g;let f=d>0&&d<1&&!At;zn.hidden=!f,f&&pu(m)}}else zn.hidden||(zn.hidden=!0);let h=as?Math.round(wr):o;if(rs!==h){let d=rs;rs=h;let m=Bn[h],g=d!==-1&&!At&&document.visibilityState==="visible",f=h>d?1:-1;fi.change(m,{animate:g,direction:f}),uu.forEach((x,_)=>x.setAttribute("aria-current",String(_===h))),tn.count.textContent=String(h+1).padStart(2,"0")+" / 04",tn.current.textContent=[m.year,m.subtitle,m.title,m.body].join(". "),Di&&d!==-1&&Ma!==h?(fi.show(h,{animate:g,direction:f}),Ma=h):(Di||d===-1)&&(fi.show(h),Ma=h)}Tt&&(At||a<=1e-5?Tt.show(o,o,0):Tt.show(i,s,l)),a>.05&&s!==i&&Aa(s),at>n&&s+1<=3&&a>.5&&Al(s+1),at<n&&i-1>=0&&a<.5&&Al(i-1);let u=(at*100/3).toFixed(3)+"%";tn.scrub.value=String(at),u!==ou&&(tn.scrub.style.setProperty("--at",u),ou=u);let p=a>.02&&a<.98?Bn[i].label+" verso "+Bn[s].label+", "+Math.round(a*100)+"%":Bn[o].year;p!==au&&(tn.scrub.setAttribute("aria-valuetext",p),au=p),La()}function fu(r){Fn=0;let e=is?Math.min(64,r-is):16.7;is=r;let t=wr-at;if(At||Math.abs(t)<6e-4||Math.abs(t)>1.6){qt(At?Math.round(wr):wr),is=0,Tr.following=!1,as=!1;return}qt(at+t*(1-Math.exp(-e/78))),Fn=requestAnimationFrame(fu)}var mu=window.parent!==window&&!Ar,Sa=null;function gu(r){if(mu){Sa=Math.max(0,Math.min(3,r));return}if(mi&&(cancelAnimationFrame(mi),mi=0,Kn=null),wr=Math.max(0,Math.min(3,r)),!Tt||document.hidden){Fn&&(cancelAnimationFrame(Fn),Fn=0),Tr.following=!1,as=!1,qt(wr);return}Tr.following=!0,as=!0,Fn||(is=0,Fn=requestAnimationFrame(fu))}var ya=0;function Er(r){r=Math.max(0,Math.min(3,r));let e=Kn?ya:0;if(Qn(),ya=0,Ea=r,At||!Tt||Math.abs(r-at)<1e-4){qt(r);return}let t=at,n=r-t,i=Math.abs(n),s=i<=1.0001&&e===0,a=s?Math.max(360,i*4600):Math.min(4600,Math.max(360,i*4600)),o=s?0:Math.max(0,Math.min(3,e*a/n)),c=d=>s?d:-2*d*d*d+3*d*d+o*(d*d*d-2*d*d+d);Kn={start:t,to:r};let l=null,h=0,u=t;function p(d){if(!Kn)return;let m=0;l!==null&&(m=Math.min(d-l,110),h+=m),l=d;let g=Math.min(1,h/a),f=t+n*c(g);m>0&&(ya=(f-u)/m),u=f,qt(f),g<1?mi=requestAnimationFrame(p):(Qn(),ya=0,qt(r))}La(),mi=requestAnimationFrame(p)}ct("scrub").addEventListener("input",r=>{Qn();let e=Number(r.target.value);Ea=Math.min(3,Math.floor(e)+1),qt(At?Math.round(e):e)});ct("scrub").addEventListener("change",r=>{let e=Number(r.target.value),t=Math.round(e);!At&&Math.abs(e-t)<.09&&Math.abs(e-t)>5e-4&&Er(t)});ct("next").addEventListener("click",()=>Er(Math.min(3,Math.floor(at+.001)+1)));ct("previous").addEventListener("click",()=>Er(Math.max(0,Math.ceil(at-.001)-1)));ct("play").addEventListener("click",()=>{if(Kn){Qn();return}at>=2.999?(qt(0),Er(1)):Er(Math.abs(at-Math.round(at))>.003&&Math.abs(Ea-at)>.001?Ea:Math.min(3,Math.floor(at+.002)+1))});function vu(){Tt?.setReducedMotion(At),ct("motion-switch").setAttribute("aria-pressed",String(At))}ct("motion-switch").addEventListener("click",r=>{if(r.isTrusted&&window.parent!==window)try{let e=window.parent.tedeschiParcoMovimento;if(typeof e=="function"){e();return}}catch{}At=!At,Qn();try{localStorage.setItem("tedeschi-3d-motion",At?"ridotto":"completo")}catch{}vu(),At&&(fi.settle(),fi.show(Math.round(at)),Ll()),qt(Math.round(at),!0)});ct("recenter").addEventListener("click",()=>Tt?.reset(!0));document.addEventListener("visibilitychange",()=>{document.hidden&&Kn&&Qn()});var bn=document.querySelector(".scene"),Sr=ct("story"),Ui=Sr.querySelector(".story-copy").cloneNode(!0);Ui.classList.add("story-probe");Ui.setAttribute("aria-hidden","true");Sr.append(Ui);function Tl(r){let e=document.createRange();e.selectNodeContents(r);let t=0;for(let n of e.getClientRects())t=Math.max(t,n.right);return t}var _u=.8,xu=!1;function Ua(){bn.style.removeProperty("--story-top"),bn.style.removeProperty("--zona");let r=bn.clientHeight;if(!r)return;let e=innerWidth<=640||r>bn.clientWidth*.82;xu=e,Tt?.setGrounding(e?_u:0),bn.classList.toggle("impilata",e&&innerWidth>640);let t=Ui.querySelector(".period"),n=Ui.querySelector(".era-title"),i=Ui.querySelector("p"),s=0,a=0;for(let d of Bn)t.textContent=d.subtitle,n.textContent=d.title,i.textContent=d.body,s=Math.max(s,Ui.offsetHeight),a=Math.max(a,Tl(t),Tl(n),Tl(i));let o=bn.getBoundingClientRect().left,c=Sr.getBoundingClientRect().left;a=Math.max(a,Ia.getBoundingClientRect().right),a>c&&!e&&bn.style.setProperty("--zona",Math.ceil(a-c)+"px");let h=Sr.querySelector(".story-copy").offsetTop+s,u=Sr.offsetTop,p=Math.max(10,r*.025);e?bn.style.setProperty("--story-top",Math.max(8,Math.floor(Math.max(r*.42,r-p-h)))+"px"):u+h>r-p&&bn.style.setProperty("--story-top",Math.max(8,Math.floor(r-p-h))+"px"),bn.dataset.fit=String(Sr.offsetTop+h<=r-p+1),gf(),ba="",rs!==-1&&qt(at,!0)}new ResizeObserver(()=>Ua()).observe(bn);Ua();vu();qt(wa,!0);var yu,Mu,xf=new Promise(r=>{Mu=r}),Tr={ready:new Promise(r=>{yu=r}),eras:Bn,following:!1,seek(r){Qn(),qt(Number(r)||0)},follow(r){gu(Number(r)||0)},halt(){Kn&&Qn()},seekIntro(r){Qn(),qt(0,!0),Ll(),fi.show(0)},machineRect(){return Tt?.machineRect()??null},revealed(){Mu?.()},get canvas(){return Tt?.canvas},get progress(){return at},get metrics(){return pi}},pi=null;window.tedeschiExperience=Tr;Ar||Ul(Tr);function yf(){let r=document.getElementById("kit");r&&r.media!=="all"&&(r.media="all");let e=r?r.sheet?Promise.resolve(!0):new Promise(i=>{r.addEventListener("load",()=>i(!0),{once:!0}),r.addEventListener("error",()=>i(!1),{once:!0}),setTimeout(()=>i(!1),15e3)}):Promise.resolve(!1),t=()=>[...document.fonts].some(i=>/new-science/.test(i.family)),n=i=>i?new Promise(s=>{let a=performance.now();(function o(){getComputedStyle(document.body).fontFamily,t()?s(!0):performance.now()-a>2e3?s(!1):requestAnimationFrame(o)})()}):!1;return e.then(n).then(i=>i&&Promise.race([Promise.all([document.fonts.load("700 40px new-science"),document.fonts.load("400 16px new-science"),document.fonts.load("700 40px new-science-extended")]).then(s=>s.every(a=>a.length>0)),new Promise(s=>setTimeout(()=>s(!1),1e4))])).catch(()=>!1)}document.fonts?.addEventListener?.("loadingdone",()=>Ua());var Mf=yf().then(async r=>{if(r)return document.documentElement.classList.add("kit-ok"),!0;try{(await import("./pezzo-ZVLZWIN2.js")).installLettering()}catch(e){console.warn("Lettering:",e)}return document.documentElement.classList.add("kit-no"),!1}).finally(()=>Ua());async function bf(){performance.mark("parco:avvio"),await new Promise(requestAnimationFrame);try{Aa(Math.floor(wa));let r=Xh(Bn),e=[];for(let s=0;s<Bn.length;s++)s>0&&await new Promise(requestAnimationFrame),e.push(Uh(ns,s,zh(ns,s)));performance.mark("parco:modelli");let t=await r;Tt=Kh(ns,ct("view"),e,Hh,t,{first:Math.round(wa),onOrbit:Sf,grounding:xu?_u:0,forzaYaw:Pl.has("impilata")}),Tt.setReducedMotion(At),performance.mark("parco:vista"),pi={partCounts:e.map(s=>s.parts.length),bounds:Tt.bounds.map(s=>[s.min.toArray(),s.max.toArray()]),webgl:!0},Tt.canvas.style.visibility="hidden";let[n,i]=await Promise.all([Tt.firstFinish,Tt.groundReady,Tt.warm()]);pi.finishes=n,pi.quality=Tt.quality,pi.groundContact=i,performance.mark("parco:finitura"),qt(at,!0),Tt.canvas.style.visibility="visible",ct("loading").hidden=!0,performance.mark("parco:visibile"),requestAnimationFrame(()=>Tt.prepareTransitions().catch(()=>{}).then(()=>performance.mark("parco:passaggi-pronti"))),Tt.finishReady.then(s=>{pi.finishes=s}),Promise.all([0,1,2,3].map(Al)).then(()=>requestAnimationFrame(vf))}catch(r){console.error("Visualizzatore 3D:",r),pi={webgl:!1,error:String(r)},ct("loading").textContent="Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.",ct("recenter").hidden=!0,qt(0)}await Promise.race([Mf,new Promise(r=>setTimeout(r,1200))]),performance.mark("parco:pronta"),yu(pi),window.parent!==window&&!Ar&&await Promise.race([xf,new Promise(r=>setTimeout(r,4e3))]),mu=!1,Sa!==null&&Math.abs(Sa-at)>6e-4&&gu(Sa),_f()}var lu=!1;function Sf(r,e){let t=Math.abs(r)+Math.abs(e)>.002;t!==lu&&(lu=t,!t&&document.activeElement===ct("recenter")&&ct("motion-switch").focus({preventScroll:!0}),bn.classList.toggle("ruotata",t));let n=1+Math.min(.04,Math.abs(r)*.03+Math.abs(e)*.05);tn.backdrops.style.transform=Math.abs(r)+Math.abs(e)<1e-4?"":"translate3d("+(-r*14).toFixed(2)+"px,"+(e*8).toFixed(2)+"px,0) scale("+n.toFixed(4)+")"}bf();
