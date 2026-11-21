/* Tedeschi, parco macchine nel tempo. Three.js r160 (MIT, vendor/THREE-LICENSE.txt). Sorgenti leggibili nella cartella superiore. */
import{a as Il}from"./pezzo-D32I6MI3.js";import{a as xu}from"./pezzo-6626GWO7.js";var ns={};xu(ns,{ACESFilmicToneMapping:()=>gl,Box3:()=>xn,BoxGeometry:()=>hi,BufferAttribute:()=>sn,BufferGeometry:()=>St,CanvasTexture:()=>ea,CatmullRomCurve3:()=>jr,CylinderGeometry:()=>gr,DataTexture:()=>$s,DepthTexture:()=>mr,DirectionalLight:()=>da,DoubleSide:()=>rh,EquirectangularReflectionMapping:()=>zr,ExtrudeGeometry:()=>Jr,Float32BufferAttribute:()=>Je,FloatType:()=>Dn,Group:()=>ri,HalfFloatType:()=>Ri,HemisphereLight:()=>ua,LatheGeometry:()=>fr,LinearFilter:()=>hn,LinearMipmapLinearFilter:()=>sr,MathUtils:()=>fh,Matrix4:()=>Qe,Mesh:()=>tn,MeshPhysicalMaterial:()=>la,MeshStandardMaterial:()=>es,NearestFilter:()=>Vt,NoColorSpace:()=>_n,OrthographicCamera:()=>dr,PCFSoftShadowMap:()=>fl,PMREMGenerator:()=>pr,Path:()=>Ci,PerspectiveCamera:()=>Qt,PlaneGeometry:()=>ur,Quaternion:()=>yn,RGBAFormat:()=>vn,RepeatWrapping:()=>kr,SRGBColorSpace:()=>Nt,Scene:()=>Qs,ShaderMaterial:()=>Rn,ShadowMaterial:()=>oa,Shape:()=>vr,SphereGeometry:()=>Kr,TextureLoader:()=>ca,TorusGeometry:()=>Qr,TubeGeometry:()=>$r,UnsignedByteType:()=>Yn,UnsignedIntType:()=>Un,Vector2:()=>Ce,Vector3:()=>H,WebGLRenderTarget:()=>An,WebGLRenderer:()=>Wr});var ih=1,fl=2,Xn=3,oi=0,nn=1,rh=2;var Mi=100;var vo=204,_o=205;var sh=0,Mu=1,bu=2,si=0,Su=1,wu=2,Eu=3,gl=4,Tu=5,Au=6;var ah=300,ir=301,rr=302,zr=303,yo=304,pa=306,kr=1e3,qn=1001,xo=1002,Vt=1003,Ul=1004;var Na=1005;var hn=1006,Ru=1007;var sr=1008;var Yn=1009;var vl=1012,oh=1013,Un=1014,Dn=1015,Ri=1016,lh=1017,ch=1018,Ei=1020;var vn=1023;var Ti=1026,ar=1027;var hh=1029;var uh=1031,dh=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,Dl=35840,Nl=35841,Ol=35842,Fl=35843,ph=36196,Bl=37492,zl=37496,kl=37808,Gl=37809,Vl=37810,Hl=37811,Wl=37812,Xl=37813,jl=37814,ql=37815,Yl=37816,Zl=37817,Jl=37818,Kl=37819,Ql=37820,$l=37821,ka=36492,ec=36494,tc=36495;var nc=36284,ic=36285,rc=36286;var Os=2300,Fs=2301,Ga=2302,sc=2400,ac=2401,oc=2402;var mh=3e3,Ai=3001;var _n="",Nt="srgb",Zn="srgb-linear",_l="display-p3",ma="display-p3-linear",Bs="linear",_t="srgb",zs="rec709",ks="p3";var Oi=7680;var lc=35044;var cc="300 es",Mo=1035,or=2e3,Gs=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,er=Math.PI/180,Gr=180/Math.PI;function Ii(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Xt[255&r]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[255&e]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[63&t|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[255&n]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function bo(r,e){return(r%e+e)%e}function Ur(r,e,t){return(1-t)*r+t*e}function So(r){return(r&r-1)==0&&r!==0}function Vs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var fh={DEG2RAD:er,RAD2DEG:Gr,generateUUID:Ii,clamp:Ot,euclideanModulo:bo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Ur,damp:function(r,e,t,n){return Ur(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(bo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*er},radToDeg:function(r){return r*Gr},isPowerOfTwo:So,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Vs,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*p,o*l);break;case"YZY":r.set(c*p,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*p,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Jt,denormalize:Qi},Ce=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],f=n[8],g=i[0],m=i[3],y=i[6],_=i[1],v=i[4],M=i[7],E=i[2],b=i[5],A=i[8];return s[0]=a*g+o*_+c*E,s[3]=a*m+o*v+c*b,s[6]=a*y+o*M+c*A,s[1]=l*g+h*_+u*E,s[4]=l*m+h*v+u*b,s[7]=l*y+h*M+u*A,s[2]=p*g+d*_+f*E,s[5]=p*m+d*v+f*b,s[8]=p*y+d*M+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*s,d=l*s-a*c,f=t*u+n*p+i*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Va=new it;function gh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cu(){let r=Vr("canvas");return r.style.display="block",r}var uc={};function Dr(r){r in uc||(uc[r]=!0,console.warn(r))}var dc=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pc=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Zn]:{transfer:Bs,primaries:zs,toReference:r=>r,fromReference:r=>r},[Nt]:{transfer:_t,primaries:zs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ma]:{transfer:Bs,primaries:ks,toReference:r=>r.applyMatrix3(pc),fromReference:r=>r.applyMatrix3(dc)},[_l]:{transfer:_t,primaries:ks,toReference:r=>r.convertSRGBToLinear().applyMatrix3(pc),fromReference:r=>r.applyMatrix3(dc).convertLinearToSRGB()}},Pu=new Set([Zn,ma]),dt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Pu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=os[e].toReference;return(0,os[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return os[r].primaries},getTransfer:function(r){return r===_n?Bs:os[r].transfer}};function tr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ha(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fi,Hs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=e.width,Fi.height=e.height;let n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*tr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*tr(t[n]/255)):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lu=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wa(i[a].image)):s.push(Wa(i[a]))}else s=Wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iu=0,rn=class r extends li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Ii(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?Nt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ai:mh}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Nt:_n}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=ah,rn.DEFAULT_ANISOTROPY=1;var Lt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],f=c[9],g=c[2],m=c[6],y=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(l+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(d+1)/2,E=(y+1)/2,b=(h+p)/4,A=(u+g)/4,W=(f+m)/4;return v>M&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=A/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=W/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=W/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-g)/_,this.z=(p-h)/_,this.w=Math.acos((l+d+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?Nt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=class extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],p=s[a+0],d=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=p,e[t+1]=d,e[t+2]=f,void(e[t+3]=g);if(u!==g||c!==p||l!==d||h!==f){let m=1-o,y=c*p+l*d+h*f+u*g,_=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let E=Math.sqrt(v),b=Math.atan2(E,y*_);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E}let M=o*_;if(c=c*m+p*M,l=l*m+d*M,h=h*m+f*M,u=u*m+g*M,m===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],p=s[a+1],d=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*d-l*p,e[t+1]=c*f+h*p+l*u-o*d,e[t+2]=l*f+h*d+o*p-c*u,e[t+3]=h*f-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),p=c(n/2),d=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=p*h*u+l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u-p*d*f;break;case"YXZ":this._x=p*h*u+l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u+p*d*f;break;case"ZXY":this._x=p*h*u-l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u-p*d*f;break;case"ZYX":this._x=p*h*u-l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u+p*d*f;break;case"YZX":this._x=p*h*u+l*d*f,this._y=l*d*u+p*h*f,this._z=l*h*f-p*d*u,this._w=l*h*u-p*d*f;break;case"XZY":this._x=p*h*u-l*d*f,this._y=l*d*u-p*h*f,this._z=l*h*f+p*d*u,this._w=l*h*u+p*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new H,mc=new yn,xn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),cs.subVectors(this.max,Rr),Bi.subVectors(e.a,Rr),zi.subVectors(e.b,Rr),ki.subVectors(e.c,Rr),$n.subVectors(zi,Bi),ei.subVectors(ki,zi),gi.subVectors(Bi,ki);let t=[0,-$n.z,$n.y,0,-ei.z,ei.y,0,-gi.z,gi.y,$n.z,0,-$n.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-$n.y,$n.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!!ja(t,Bi,zi,ki,cs)&&(t=[1,0,0,0,1,0,0,0,1],!!ja(t,Bi,zi,ki,cs)&&(hs.crossVectors($n,ei),t=[hs.x,hs.y,hs.z],ja(t,Bi,zi,ki,cs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Sn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},kn=[new H,new H,new H,new H,new H,new H,new H,new H],Sn=new H,ls=new xn,Bi=new H,zi=new H,ki=new H,$n=new H,ei=new H,gi=new H,Rr=new H,cs=new H,hs=new H,vi=new H;function ja(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){vi.fromArray(r,s);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Uu=new xn,Cr=new H,qa=new H,Nn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Uu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(qa)),this.expandByPoint(Cr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new H,Ya=new H,us=new H,ti=new H,Za=new H,ds=new H,Ja=new H,lr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ya);let s=.5*e.distanceTo(t),a=-this.direction.dot(us),o=ti.dot(this.direction),c=-ti.dot(us),l=ti.lengthSq(),h=Math.abs(1-a*a),u,p,d,f;if(h>0)if(u=a*c-o,p=a*o-c,f=s*h,u>=0)if(p>=-f)if(p<=f){let g=1/h;u*=g,p*=g,d=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-f?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l):p<=f?(u=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ya).addScaledVector(us,p),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){Za.subVectors(t,e),ds.subVectors(n,e),Ja.crossVectors(Za,ds);let a,o=this.direction.dot(Ja);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ti.subVectors(this.origin,e);let c=a*this.direction.dot(ds.crossVectors(ti,ds));if(c<0)return null;let l=a*this.direction.dot(Za.cross(ti));if(l<0||c+l>o)return null;let h=-a*ti.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,p,d,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,p,d,f,g,m)}set(e,t,n,i,s,a,o,c,l,h,u,p,d,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=u,y[14]=p,y[3]=d,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let p=a*h,d=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+f*l,t[5]=p-g*l,t[9]=-o*c,t[2]=g-p*l,t[6]=f+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,d=c*u,f=l*h,g=l*u;t[0]=p+g*o,t[4]=f*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=g+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,d=c*u,f=l*h,g=l*u;t[0]=p-g*o,t[4]=-a*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,d=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=f*l-d,t[8]=p*l+g,t[1]=c*u,t[5]=g*l+p,t[9]=d*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=g-p*u,t[8]=f*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+f,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*c,d=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+g,t[5]=a*h,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Nu)}lookAt(e,t,n){let i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ni.crossVectors(n,ln),ni.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ni.crossVectors(n,ln)),ni.normalize(),ps.crossVectors(ln,ni),i[0]=ni.x,i[4]=ps.x,i[8]=ln.x,i[1]=ni.y,i[5]=ps.y,i[9]=ln.y,i[2]=ni.z,i[6]=ps.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],f=n[2],g=n[6],m=n[10],y=n[14],_=n[3],v=n[7],M=n[11],E=n[15],b=i[0],A=i[4],W=i[8],L=i[12],O=i[1],te=i[5],C=i[9],K=i[13],q=i[2],ne=i[6],de=i[10],oe=i[14],$=i[3],ae=i[7],I=i[11],X=i[15];return s[0]=a*b+o*O+c*q+l*$,s[4]=a*A+o*te+c*ne+l*ae,s[8]=a*W+o*C+c*de+l*I,s[12]=a*L+o*K+c*oe+l*X,s[1]=h*b+u*O+p*q+d*$,s[5]=h*A+u*te+p*ne+d*ae,s[9]=h*W+u*C+p*de+d*I,s[13]=h*L+u*K+p*oe+d*X,s[2]=f*b+g*O+m*q+y*$,s[6]=f*A+g*te+m*ne+y*ae,s[10]=f*W+g*C+m*de+y*I,s[14]=f*L+g*K+m*oe+y*X,s[3]=_*b+v*O+M*q+E*$,s[7]=_*A+v*te+M*ne+E*ae,s[11]=_*W+v*C+M*de+E*I,s[15]=_*L+v*K+M*oe+E*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14];return e[3]*(+s*c*u-i*l*u-s*o*p+n*l*p+i*o*d-n*c*d)+e[7]*(+t*c*d-t*l*p+s*a*p-i*a*d+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*p+i*a*u-n*a*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],f=e[12],g=e[13],m=e[14],y=e[15],_=u*m*l-g*p*l+g*c*d-o*m*d-u*c*y+o*p*y,v=f*p*l-h*m*l-f*c*d+a*m*d+h*c*y-a*p*y,M=h*g*l-f*u*l+f*o*d-a*g*d-h*o*y+a*u*y,E=f*u*c-h*g*c-f*o*p+a*g*p+h*o*m-a*u*m,b=t*_+n*v+i*M+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=_*A,e[1]=(g*p*s-u*m*s-g*i*d+n*m*d+u*i*y-n*p*y)*A,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*y+n*c*y)*A,e[3]=(u*c*s-o*p*s-u*i*l+n*p*l+o*i*d-n*c*d)*A,e[4]=v*A,e[5]=(h*m*s-f*p*s+f*i*d-t*m*d-h*i*y+t*p*y)*A,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*y-t*c*y)*A,e[7]=(a*p*s-h*c*s+h*i*l-t*p*l-a*i*d+t*c*d)*A,e[8]=M*A,e[9]=(f*u*s-h*g*s-f*n*d+t*g*d+h*n*y-t*u*y)*A,e[10]=(a*g*s-f*o*s+f*n*l-t*g*l-a*n*y+t*o*y)*A,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*d-t*o*d)*A,e[12]=E*A,e[13]=(h*g*i-f*u*i+f*n*p-t*g*p-h*n*m+t*u*m)*A,e[14]=(f*o*i-a*g*i-f*n*c+t*g*c+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*p+t*o*p)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,p=s*l,d=s*h,f=s*u,g=a*h,m=a*u,y=o*u,_=c*l,v=c*h,M=c*u,E=n.x,b=n.y,A=n.z;return i[0]=(1-(g+y))*E,i[1]=(d+M)*E,i[2]=(f-v)*E,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(p+y))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(f+v)*A,i[9]=(m-_)*A,i[10]=(1-(p+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);let c=1/s,l=1/a,h=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=l,wn.elements[5]*=l,wn.elements[6]*=l,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i),d,f;if(o===or)d=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Gs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),p=(t+e)*l,d=(n+i)*h,f,g;if(o===or)f=(a+s)*u,g=-2*u;else{if(o!==Gs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new H,wn=new Qe,Du=new H(0,0,0),Nu=new H(1,1,1),ni=new H,ps=new H,ln=new H,fc=new Qe,gc=new yn,js=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Ou=0,vc=new H,Vi=new yn,Vn=new Qe,ms=new H,Pr=new H,Fu=new H,Bu=new yn,_c=new H(1,0,0),yc=new H(0,1,0),xc=new H(0,0,1),zu={type:"added"},ku={type:"removed"},$t=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new js,n=new yn,i=new H(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new it}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Pr,ms,this.up):Vn.lookAt(ms,Pr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};$t.DEFAULT_UP=new H(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new H,Hn=new H,Ka=new H,Wn=new H,Hi=new H,Wi=new H,Mc=new H,Qa=new H,$a=new H,eo=new H,fs=!1,wi=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){En.subVectors(i,t),Hn.subVectors(n,t),Ka.subVectors(e,t);let a=En.dot(En),o=En.dot(Hn),c=En.dot(Ka),l=Hn.dot(Hn),h=Hn.dot(Ka),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(l*c-o*h)*p,f=(a*h-o*c)*p;return s.set(1-d-f,f,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,n,i,s,a,o,c){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Hn.subVectors(e,t),En.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),.5*En.cross(Hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hi.subVectors(i,n),Wi.subVectors(s,n),Qa.subVectors(e,n);let c=Hi.dot(Qa),l=Wi.dot(Qa);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,i);let h=Hi.dot($a),u=Wi.dot($a);if(h>=0&&u<=h)return t.copy(i);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hi,a);eo.subVectors(e,s);let d=Hi.dot(eo),f=Wi.dot(eo);if(f>=0&&d<=f)return t.copy(s);let g=d*l-c*f;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Wi,o);let m=h*f-d*u;if(m<=0&&u-h>=0&&d-f>=0)return Mc.subVectors(s,i),o=(u-h)/(u-h+(d-f)),t.copy(i).addScaledVector(Mc,o);let y=1/(m+g+p);return a=g*y,o=p*y,t.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},gs={h:0,s:0,l:0};function to(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=bo(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=to(a,s,e+1/3),this.g=to(a,s,e),this.b=to(a,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return dt.fromWorkingColorSpace(jt.copy(this),e),65536*Math.round(Ot(255*jt.r,0,255))+256*Math.round(Ot(255*jt.g,0,255))+Math.round(Ot(255*jt.b,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,s=jt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Nt){dt.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(gs);let n=Ur(ii.h,gs.h,t),i=Ur(ii.s,gs.s,t),s=Ur(ii.l,gs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new et;et.NAMES=vh;var Gu=0,ci=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=1,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=_o,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ys=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xm=Vu();function Vu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(8388608&l)==0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Pt=new H,vs=new Ce,sn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}};var Zs=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Hu=0,gn=new Qe,no=new $t,Xi=new H,cn=new xn,Lr=new xn,kt=new H,St=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gh(e)?Js:Zs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new H,1/0);if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(cn.min,Lr.min),cn.expandByPoint(kt),kt.addVectors(cn.max,Lr.max),cn.expandByPoint(kt)):(cn.expandByPoint(Lr.min),cn.expandByPoint(Lr.max))}cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)kt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),kt.add(Xi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let O=0;O<o;O++)l[O]=new H,h[O]=new H;let u=new H,p=new H,d=new H,f=new Ce,g=new Ce,m=new Ce,y=new H,_=new H;function v(O,te,C){u.fromArray(i,3*O),p.fromArray(i,3*te),d.fromArray(i,3*C),f.fromArray(a,2*O),g.fromArray(a,2*te),m.fromArray(a,2*C),p.sub(u),d.sub(u),g.sub(f),m.sub(f);let K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(y.copy(p).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(K),_.copy(d).multiplyScalar(g.x).addScaledVector(p,-m.x).multiplyScalar(K),l[O].add(y),l[te].add(y),l[C].add(y),h[O].add(_),h[te].add(_),h[C].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let O=0,te=M.length;O<te;++O){let C=M[O],K=C.start;for(let q=K,ne=K+C.count;q<ne;q+=3)v(n[q+0],n[q+1],n[q+2])}let E=new H,b=new H,A=new H,W=new H;function L(O){A.fromArray(s,3*O),W.copy(A);let te=l[O];E.copy(te),E.sub(A.multiplyScalar(A.dot(te))).normalize(),b.crossVectors(W,te);let C=b.dot(h[O])<0?-1:1;c[4*O]=E.x,c[4*O+1]=E.y,c[4*O+2]=E.z,c[4*O+3]=C}for(let O=0,te=M.length;O<te;++O){let C=M[O],K=C.start;for(let q=K,ne=K+C.count;q<ne;q+=3)L(n[q+0]),L(n[q+1]),L(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new H,s=new H,a=new H,o=new H,c=new H,l=new H,h=new H,u=new H;if(e)for(let p=0,d=e.count;p<d;p+=3){let f=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h),d=0,f=0;for(let g=0,m=c.length;g<m;g++){d=o.isInterleavedBufferAttribute?c[g]*o.data.stride+o.offset:c[g]*h;for(let y=0;y<h;y++)p[f++]=l[d++]}return new sn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let p=e(l[h],n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bc=new Qe,_i=new lr,_s=new Nn,Sc=new H,ji=new H,qi=new H,Yi=new H,io=new H,ys=new H,xs=new Ce,Ms=new Ce,bs=new Ce,wc=new H,Ec=new H,Tc=new H,Ss=new H,ws=new H,tn=class extends $t{constructor(e=new St,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(io.fromBufferAttribute(u,e),a?ys.addScaledVector(io,h):ys.addScaledVector(io.sub(t),h))}t.add(ys)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),_i.copy(e.ray).recast(e.near),_s.containsPoint(_i.origin)===!1&&(_i.intersectSphere(_s,Sc)===null||_i.origin.distanceToSquared(Sc)>(e.far-e.near)**2))return;bc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(bc),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,_i)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){let m=p[f],y=a[m.materialIndex];for(let _=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));_<v;_+=3)i=Es(this,y,e,n,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);f<g;f+=3)i=Es(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){let m=p[f],y=a[m.materialIndex];for(let _=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));_<v;_+=3)i=Es(this,y,e,n,l,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);f<g;f+=3)i=Es(this,a,e,n,l,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function Es(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ji),r.getVertexPosition(c,qi),r.getVertexPosition(l,Yi);let h=(function(u,p,d,f,g,m,y,_){let v;if(v=p.side===nn?f.intersectTriangle(y,m,g,!0,_):f.intersectTriangle(g,m,y,p.side===oi,_),v===null)return null;ws.copy(_),ws.applyMatrix4(u.matrixWorld);let M=d.ray.origin.distanceTo(ws);return M<d.near||M>d.far?null:{distance:M,point:ws.clone(),object:u}})(r,e,t,n,ji,qi,Yi,Ss);if(h){i&&(xs.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,c),bs.fromBufferAttribute(i,l),h.uv=wi.getInterpolation(Ss,ji,qi,Yi,xs,Ms,bs,new Ce)),s&&(xs.fromBufferAttribute(s,o),Ms.fromBufferAttribute(s,c),bs.fromBufferAttribute(s,l),h.uv1=wi.getInterpolation(Ss,ji,qi,Yi,xs,Ms,bs,new Ce),h.uv2=h.uv1),a&&(wc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,c),Tc.fromBufferAttribute(a,l),h.normal=wi.getInterpolation(Ss,ji,qi,Yi,wc,Ec,Tc,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};wi.getNormal(ji,qi,Yi,u.normal),h.face=u}return h}var hi=class r extends St{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],p=0,d=0;function f(g,m,y,_,v,M,E,b,A,W,L){let O=M/A,te=E/W,C=M/2,K=E/2,q=b/2,ne=A+1,de=W+1,oe=0,$=0,ae=new H;for(let I=0;I<de;I++){let X=I*te-K;for(let we=0;we<ne;we++){let w=we*O-C;ae[g]=w*_,ae[m]=X*v,ae[y]=q,l.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[y]=b>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(we/A),u.push(1-I/W),oe+=1}}for(let I=0;I<W;I++)for(let X=0;X<A;X++){let we=p+X+ne*I,w=p+X+ne*(I+1),T=p+(X+1)+ne*(I+1),z=p+(X+1)+ne*I;c.push(we,w,z),c.push(w,T,z),$+=6}o.addGroup(d,$,L),d+=$,p+=oe}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){let e={};for(let t=0;t<r.length;t++){let n=cr(r[t]);for(let i in n)e[i]=n[i]}return e}function _h(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}var Wu={clone:cr,merge:Kt},Rn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hr=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qt=class extends Hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Gr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*er*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Gr*Math.atan(Math.tan(.5*er*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*er*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,To=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(Zi,1,e,t);i.layers=this.layers,this.add(i);let s=new Qt(Zi,1,e,t);s.layers=this.layers,this.add(s);let a=new Qt(Zi,1,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Zi,1,e,t);o.layers=this.layers,this.add(o);let c=new Qt(Zi,1,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Zi,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Gs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ks=class extends rn{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ir,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Nt:_n),this.texture=new Ks(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:0});s.uniforms.tEquirect.value=t;let a=new tn(i,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=hn),new To(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ro=new H,Xu=new H,ju=new it,jn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ro.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ju.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Nn,Ts=new H,hr=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],p=i[7],d=i[8],f=i[9],g=i[10],m=i[11],y=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,p-l,m-d,M-y).normalize(),n[1].setComponents(c+s,p+l,m+d,M+y).normalize(),n[2].setComponents(c+a,p+h,m+f,M+_).normalize(),n[3].setComponents(c-a,p-h,m-f,M-_).normalize(),n[4].setComponents(c-o,p-u,m-g,M-v).normalize(),t===or)n[5].setComponents(c+o,p+u,m+g,M+v).normalize();else{if(t!==Gs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qu(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,c){let l=o.array,h=o.usage,u=l.byteLength,p=r.createBuffer(),d;if(r.bindBuffer(c,p),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=r.HALF_FLOAT}else d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);d=r.UNSIGNED_BYTE}return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,u=c._updateRange,p=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&p.length===0&&r.bufferSubData(l,0,h),p.length!==0){for(let d=0,f=p.length;d<f;d++){let g=p[d];t?r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var ur=class r extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,p=t/c,d=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let _=y*p-a;for(let v=0;v<l;v++){let M=v*u-s;f.push(M,-_,0),g.push(0,0,1),m.push(v/o),m.push(1-y/c)}}for(let y=0;y<c;y++)for(let _=0;_<o;_++){let v=_+l*y,M=_+l*(y+1),E=_+1+l*(y+1),b=_+1+l*y;d.push(v,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},$e={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},In={basic:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Kt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Kt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Kt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Kt([Be.points,Be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Kt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Kt([Be.common,Be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Kt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Kt([Be.sprite,Be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Kt([Be.common,Be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Kt([Be.lights,Be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};In.physical={uniforms:Kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var As={r:0,b:0,g:0};function Yu(r,e,t,n,i,s,a){let o=new et(0),c,l,h=s===!0?0:1,u=null,p=0,d=null;function f(g,m){g.getRGB(As,_h(r)),n.buffers.color.setClear(As.r,As.g,As.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?f(o,h):_&&_.isColor&&(f(_,1),y=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===pa)?(l===void 0&&(l=new tn(new hi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:cr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=dt.getTransfer(_.colorSpace)!==_t,u===_&&p===_.version&&d===r.toneMapping||(l.material.needsUpdate=!0,u=_,p=_.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new tn(new ur(2,2),new Rn({name:"BackgroundMaterial",uniforms:cr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=dt.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&p===_.version&&d===r.toneMapping||(c.material.needsUpdate=!0,u=_,p=_.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}}}function Zu(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null),l=c,h=!1;function u(E){return n.isWebGL2?r.bindVertexArray(E):s.bindVertexArrayOES(E)}function p(E){return n.isWebGL2?r.deleteVertexArray(E):s.deleteVertexArrayOES(E)}function d(E){let b=[],A=[],W=[];for(let L=0;L<i;L++)b[L]=0,A[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:A,attributeDivisors:W,object:E,attributes:{},index:null}}function f(){let E=l.newAttributes;for(let b=0,A=E.length;b<A;b++)E[b]=0}function g(E){m(E,0)}function m(E,b){let A=l.newAttributes,W=l.enabledAttributes,L=l.attributeDivisors;A[E]=1,W[E]===0&&(r.enableVertexAttribArray(E),W[E]=1),L[E]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](E,b),L[E]=b)}function y(){let E=l.newAttributes,b=l.enabledAttributes;for(let A=0,W=b.length;A<W;A++)b[A]!==E[A]&&(r.disableVertexAttribArray(A),b[A]=0)}function _(E,b,A,W,L,O,te){te===!0?r.vertexAttribIPointer(E,b,A,L,O):r.vertexAttribPointer(E,b,A,W,L,O)}function v(){M(),h=!0,l!==c&&(l=c,u(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(E,b,A,W,L){let O=!1;if(a){let te=(function(C,K,q){let ne=q.wireframe===!0,de=o[C.id];de===void 0&&(de={},o[C.id]=de);let oe=de[K.id];oe===void 0&&(oe={},de[K.id]=oe);let $=oe[ne];return $===void 0&&($=d(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),oe[ne]=$),$})(W,A,b);l!==te&&(l=te,u(l.object)),O=(function(C,K,q,ne){let de=l.attributes,oe=K.attributes,$=0,ae=q.getAttributes();for(let I in ae)if(ae[I].location>=0){let X=de[I],we=oe[I];if(we===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(we=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(we=C.instanceColor)),X===void 0||X.attribute!==we||we&&X.data!==we.data)return!0;$++}return l.attributesNum!==$||l.index!==ne})(E,W,A,L),O&&(function(C,K,q,ne){let de={},oe=K.attributes,$=0,ae=q.getAttributes();for(let I in ae)if(ae[I].location>=0){let X=oe[I];X===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));let we={};we.attribute=X,X&&X.data&&(we.data=X.data),de[I]=we,$++}l.attributes=de,l.attributesNum=$,l.index=ne})(E,W,A,L)}else{let te=b.wireframe===!0;l.geometry===W.id&&l.program===A.id&&l.wireframe===te||(l.geometry=W.id,l.program=A.id,l.wireframe=te,O=!0)}L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,(function(te,C,K,q){if(n.isWebGL2===!1&&(te.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ne=q.attributes,de=K.getAttributes(),oe=C.defaultAttributeValues;for(let $ in de){let ae=de[$];if(ae.location>=0){let I=ne[$];if(I===void 0&&($==="instanceMatrix"&&te.instanceMatrix&&(I=te.instanceMatrix),$==="instanceColor"&&te.instanceColor&&(I=te.instanceColor)),I!==void 0){let X=I.normalized,we=I.itemSize,w=t.get(I);if(w===void 0)continue;let T=w.buffer,z=w.type,F=w.bytesPerElement,U=n.isWebGL2===!0&&(z===r.INT||z===r.UNSIGNED_INT||I.gpuType===oh);if(I.isInterleavedBufferAttribute){let j=I.data,V=j.stride,Y=I.offset;if(j.isInstancedInterleavedBuffer){for(let ie=0;ie<ae.locationSize;ie++)m(ae.location+ie,j.meshPerAttribute);te.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<ae.locationSize;ie++)g(ae.location+ie);r.bindBuffer(r.ARRAY_BUFFER,T);for(let ie=0;ie<ae.locationSize;ie++)_(ae.location+ie,we/ae.locationSize,z,X,V*F,(Y+we/ae.locationSize*ie)*F,U)}else{if(I.isInstancedBufferAttribute){for(let j=0;j<ae.locationSize;j++)m(ae.location+j,I.meshPerAttribute);te.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let j=0;j<ae.locationSize;j++)g(ae.location+j);r.bindBuffer(r.ARRAY_BUFFER,T);for(let j=0;j<ae.locationSize;j++)_(ae.location+j,we/ae.locationSize,z,X,we*F,we/ae.locationSize*j*F,U)}}else if(oe!==void 0){let X=oe[$];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(ae.location,X);break;case 3:r.vertexAttrib3fv(ae.location,X);break;case 4:r.vertexAttrib4fv(ae.location,X);break;default:r.vertexAttrib1fv(ae.location,X)}}}}y()})(E,b,A,W),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let E in o){let b=o[E];for(let A in b){let W=b[A];for(let L in W)p(W[L].object),delete W[L];delete b[A]}delete o[E]}},releaseStatesOfGeometry:function(E){if(o[E.id]===void 0)return;let b=o[E.id];for(let A in b){let W=b[A];for(let L in W)p(W[L].object),delete W[L];delete b[A]}delete o[E.id]},releaseStatesOfProgram:function(E){for(let b in o){let A=o[b];if(A[E.id]===void 0)continue;let W=A[E.id];for(let L in W)p(W[L].object),delete W[L];delete A[E.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function Ju(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,s,1)}}}function Ku(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:_&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Qu(r){let e=this,t=null,n=0,i=!1,s=!1,a=new jn,o=new it,c={value:null,needsUpdate:!1};function l(h,u,p,d){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=c.value,d!==!0||g===null){let m=p+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=p;_!==f;++_,v+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||d===null||d.length===0||s&&!g)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,_=4*y,v=m.clippingState||null;c.value=v,v=l(d,u,_,p);for(let M=0;M!==_;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function $u(r){let e=new WeakMap;function t(i,s){return s===zr?i.mapping=ir:s===yo&&(i.mapping=rr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===zr||s===yo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ao(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var dr=class extends Hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=[.125,.215,.35,.446,.526,.582],Ir=20,so=new dr,Rc=new et,ao=null,oo=0,lo=0,xi=(1+Math.sqrt(5))/2,Ji=1/xi,Cc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,xi,Ji),new H(0,xi,-Ji),new H(Ji,0,xi),new H(-Ji,0,xi),new H(xi,Ji,0),new H(-xi,Ji,0)],pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ri,format:vn,colorSpace:Zn,depthBuffer:!1},i=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Ac.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);c.push(d);let f=1/d;p>a-4?f=Ac[p-a+4-1]:p===0&&(f=0),l.push(f);let g=1/(d-2),m=-g,y=1+g,_=[m,m,y,m,y,y,m,m,y,y,m,y],v=6,M=6,E=3,b=2,A=1,W=new Float32Array(E*M*v),L=new Float32Array(b*M*v),O=new Float32Array(A*M*v);for(let C=0;C<v;C++){let K=C%3*2/3-1,q=C>2?0:-1,ne=[K,q,0,K+2/3,q,0,K+2/3,q+1,0,K,q,0,K+2/3,q+1,0,K,q+1,0];W.set(ne,E*M*C),L.set(_,b*M*C);let de=[C,C,C,C,C,C];O.set(de,A*M*C)}let te=new St;te.setAttribute("position",new sn(W,E)),te.setAttribute("uv",new sn(L,b)),te.setAttribute("faceIndex",new sn(O,A)),o.push(te),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Ir),h=new H(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:yl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){let s=new Qt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Rc),c.toneMapping=si,c.autoClear=!1;let u=new Ys({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),p=new tn(new hi,u),d=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,d=!0):(u.color.copy(Rc),d=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;Rs(i,m*y,g>2?y:0,y,y),c.setRenderTarget(i),d&&c.render(p,s),c.render(e,s)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Rs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cc[(i-1)%Cc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new tn(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,f=s/d,g=isFinite(s)?1+Math.floor(3*f):Ir;g>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let M=0;M<Ir;++M){let E=M/f,b=Math.exp(-E*E/2);m.push(b),M===0?y+=b:M<g&&(y+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-n;let v=this._sizeLods[i];Rs(t,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),c.setRenderTarget(t),c.render(h,so)}};function Pc(r,e,t){let n=new An(r,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Lc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ic(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function ed(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===zr||s===yo,o=s===ir||s===rr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new pr(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&(function(l){let h=0,u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u})(c)){t===null&&(t=new pr(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function td(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nd(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let p=l.morphAttributes[u];for(let d=0,f=p.length;d<f;d++)e.remove(p[d])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,p=0;if(h!==null){let g=h.array;p=h.version;for(let m=0,y=g.length;m<y;m+=3){let _=g[m+0],v=g[m+1],M=g[m+2];l.push(_,v,v,M,M,_)}}else{if(u===void 0)return;{let g=u.array;p=u.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let _=m+0,v=m+1,M=m+2;l.push(_,v,v,M,M,_)}}}let d=new(gh(l)?Js:Zs)(l,1);d.version=p;let f=s.get(c);f&&e.remove(f),s.set(c,d)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let p=h[u];for(let d=0,f=p.length;d<f;d++)e.update(p[d],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function id(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,p;if(i)u=r,p="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[p](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h;p++)this.render(c[p]/o,l[p]);else{u.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let p=0;for(let d=0;d<h;d++)p+=l[d];t.update(p,s,1)}}}function rd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function sd(r,e){return r[0]-e[0]}function ad(r,e){return Math.abs(e[1])-Math.abs(r[1])}function od(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=p!==void 0?p.length:0,f=s.get(l);if(f===void 0||f.count!==d){let K=function(){te.dispose(),s.delete(l),l.removeEventListener("dispose",K)};f!==void 0&&f.texture.dispose();let y=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],A=0;y===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let W=l.attributes.position.count*A,L=1;W>e.maxTextureSize&&(L=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);let O=new Float32Array(W*L*4*d),te=new Xs(O,W,L,d);te.type=Dn,te.needsUpdate=!0;let C=4*A;for(let q=0;q<d;q++){let ne=M[q],de=E[q],oe=b[q],$=W*L*4*q;for(let ae=0;ae<ne.count;ae++){let I=ae*C;y===!0&&(a.fromBufferAttribute(ne,ae),O[$+I+0]=a.x,O[$+I+1]=a.y,O[$+I+2]=a.z,O[$+I+3]=0),_===!0&&(a.fromBufferAttribute(de,ae),O[$+I+4]=a.x,O[$+I+5]=a.y,O[$+I+6]=a.z,O[$+I+7]=0),v===!0&&(a.fromBufferAttribute(oe,ae),O[$+I+8]=a.x,O[$+I+9]=a.y,O[$+I+10]=a.z,O[$+I+11]=oe.itemSize===4?a.w:1)}}f={count:d,texture:te,size:new Ce(W,L)},s.set(l,f),l.addEventListener("dispose",K)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];let m=l.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let p=u===void 0?0:u.length,d=n[l.id];if(d===void 0||d.length!==p){d=[];for(let _=0;_<p;_++)d[_]=[_,0];n[l.id]=d}for(let _=0;_<p;_++){let v=d[_];v[0]=_,v[1]=u[_]}d.sort(ad);for(let _=0;_<8;_++)_<p&&d[_][1]?(o[_][0]=d[_][0],o[_][1]=d[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(sd);let f=l.morphAttributes.position,g=l.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let v=o[_],M=v[0],E=v[1];M!==Number.MAX_SAFE_INTEGER&&E?(f&&l.getAttribute("morphTarget"+_)!==f[M]&&l.setAttribute("morphTarget"+_,f[M]),g&&l.getAttribute("morphNormal"+_)!==g[M]&&l.setAttribute("morphNormal"+_,g[M]),i[_]=E,m+=E):(f&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),g&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),i[_]=0)}let y=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function ld(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var mr=class extends rn{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:Ti)!==Ti&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=Un),n===void 0&&h===ar&&(n=Ei),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xh=new rn,Mh=new mr(1,1);Mh.compareFunction=515;var bh=new Xs,Sh=new Eo,wh=new Ks,Uc=[],Dc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),Fc=new Float32Array(4);function yr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Uc[i];if(s===void 0&&(s=new Float32Array(i),Uc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fa(r,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function ud(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function dd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function pd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Fc.set(n),r.uniformMatrix2fv(this.addr,!1,Fc),Bt(t,n)}}function md(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Oc.set(n),r.uniformMatrix3fv(this.addr,!1,Oc),Bt(t,n)}}function fd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Nc.set(n),r.uniformMatrix4fv(this.addr,!1,Nc),Bt(t,n)}}function gd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function _d(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function yd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function xd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function bd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function Sd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function wd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Mh:xh;t.setTexture2D(e||s,i)}function Ed(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sh,i)}function Td(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wh,i)}function Ad(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bh,i)}function Rd(r,e){r.uniform1fv(this.addr,e)}function Cd(r,e){let t=yr(e,this.size,2);r.uniform2fv(this.addr,t)}function Pd(r,e){let t=yr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ld(r,e){let t=yr(e,this.size,4);r.uniform4fv(this.addr,t)}function Id(r,e){let t=yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ud(r,e){let t=yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dd(r,e){let t=yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Nd(r,e){r.uniform1iv(this.addr,e)}function Od(r,e){r.uniform2iv(this.addr,e)}function Fd(r,e){r.uniform3iv(this.addr,e)}function Bd(r,e){r.uniform4iv(this.addr,e)}function zd(r,e){r.uniform1uiv(this.addr,e)}function kd(r,e){r.uniform2uiv(this.addr,e)}function Gd(r,e){r.uniform3uiv(this.addr,e)}function Vd(r,e){r.uniform4uiv(this.addr,e)}function Hd(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||xh,s[a])}function Wd(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sh,s[a])}function Xd(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wh,s[a])}function jd(r,e,t){let n=this.cache,i=e.length,s=fa(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bh,s[a])}var Ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return cd;case 35664:return hd;case 35665:return ud;case 35666:return dd;case 35674:return pd;case 35675:return md;case 35676:return fd;case 5124:case 35670:return gd;case 35667:case 35671:return vd;case 35668:case 35672:return _d;case 35669:case 35673:return yd;case 5125:return xd;case 36294:return Md;case 36295:return bd;case 36296:return Sd;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Ed;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Ad}})(t.type)}},Co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Rd;case 35664:return Cd;case 35665:return Pd;case 35666:return Ld;case 35674:return Id;case 35675:return Ud;case 35676:return Dd;case 5124:case 35670:return Nd;case 35667:case 35671:return Od;case 35668:case 35672:return Fd;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return kd;case 36295:return Gd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return jd}})(t.type)}},Po=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},co=/(\w+)(\])?(\[|\.)?/g;function Bc(r,e){r.seq.push(e),r.map[e.id]=e}function qd(r,e,t){let n=r.name,i=n.length;for(co.lastIndex=0;;){let s=co.exec(n),a=co.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Bc(t,l===void 0?new Ro(o,r,e):new Co(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Po(o),Bc(t,h)),t=h}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);qd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function zc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Yd=37297,Zd=0;function kc(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),p=Math.min(c+6,l.length);for(let d=u;d<p;d++){let f=d+1;h.push(`${f===c?">":" "} ${f}: ${l[d]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Jd(r,e){let t=(function(n){let i=dt.getPrimaries(dt.workingColorSpace),s=dt.getPrimaries(n),a;switch(i===s?a="":i===ks&&s===zs?a="LinearDisplayP3ToLinearSRGB":i===zs&&s===ks&&(a="LinearSRGBToLinearDisplayP3"),n){case Zn:case ma:return[a,"LinearTransferOETF"];case Nt:case _l:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kd(r,e){let t;switch(e){case Su:t="Linear";break;case wu:t="Reinhard";break;case Eu:t="OptimizedCineon";break;case gl:t="ACESFilmic";break;case Au:t="AgX";break;case Tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ki(r){return r!==""}function Gc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(r){return r.replace(Qd,ep)}var $d=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ep(r,e){let t=$e[e];if(t===void 0){let n=$d.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Lo(t)}var tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(r){return r.replace(tp,np)}function np(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ip(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(C){let K="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===ih?K="SHADOWMAP_TYPE_PCF":C.shadowMapType===fl?K="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===Xn&&(K="SHADOWMAP_TYPE_VSM"),K})(t),l=(function(C){let K="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ir:case rr:K="ENVMAP_TYPE_CUBE";break;case pa:K="ENVMAP_TYPE_CUBE_UV"}return K})(t),h=(function(C){let K="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===rr&&(K="ENVMAP_MODE_REFRACTION"),K})(t),u=(function(C){let K="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case sh:K="ENVMAP_BLENDING_MULTIPLY";break;case Mu:K="ENVMAP_BLENDING_MIX";break;case bu:K="ENVMAP_BLENDING_ADD"}return K})(t),p=(function(C){let K=C.envMapCubeUVHeight;if(K===null)return null;let q=Math.log2(K)-2,ne=1/K;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:ne,maxMip:q}})(t),d=t.isWebGL2?"":(function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)})(t),f=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)})(t),g=(function(C){let K=[];for(let q in C){let ne=C[q];ne!==!1&&K.push("#define "+q+" "+ne)}return K.join(`
`)})(s),m=i.createProgram(),y,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),y.length>0&&(y+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),_.length>0&&(_+=`
`)):(y=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),_=[d,Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?$e.tonemapping_pars_fragment:"",t.toneMapping!==si?Kd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Jd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Lo(a),a=Gc(a,t),a=Vc(a,t),o=Lo(o),o=Gc(o,t),o=Vc(o,t),a=Hc(a),o=Hc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+y+a,E=v+_+o,b=zc(i,i.VERTEX_SHADER,M),A=zc(i,i.FRAGMENT_SHADER,E);function W(C){if(r.debug.checkShaderErrors){let K=i.getProgramInfoLog(m).trim(),q=i.getShaderInfoLog(b).trim(),ne=i.getShaderInfoLog(A).trim(),de=!0,oe=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,A);else{let $=kc(i,b,"vertex"),ae=kc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+ae)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):q!==""&&ne!==""||(oe=!1);oe&&(C.diagnostics={runnable:de,programLog:K,vertexShader:{log:q,prefix:y},fragmentShader:{log:ne,prefix:_}})}i.deleteShader(b),i.deleteShader(A),L=new nr(i,m),O=(function(K,q){let ne={},de=K.getProgramParameter(q,K.ACTIVE_ATTRIBUTES);for(let oe=0;oe<de;oe++){let $=K.getActiveAttrib(q,oe),ae=$.name,I=1;$.type===K.FLOAT_MAT2&&(I=2),$.type===K.FLOAT_MAT3&&(I=3),$.type===K.FLOAT_MAT4&&(I=4),ne[ae]={type:$.type,location:K.getAttribLocation(q,ae),locationSize:I}}return ne})(i,m)}let L,O;i.attachShader(m,b),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return L===void 0&&W(this),L},this.getAttributes=function(){return O===void 0&&W(this),O};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=i.getProgramParameter(m,Yd)),te},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}var rp=0,Io=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uo(e),t.set(e,n)),n}},Uo=class{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}};function sp(r,e,t,n,i,s,a){let o=new qs,c=new Io,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,_,v,M){let E=v.fog,b=M.geometry,A=m.isMeshStandardMaterial?v.environment:null,W=(m.isMeshStandardMaterial?t:e).get(m.envMap||A),L=W&&W.mapping===pa?W.image.height:null,O=f[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let te=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,C=te!==void 0?te.length:0,K,q,ne,de,oe=0;if(b.morphAttributes.position!==void 0&&(oe=1),b.morphAttributes.normal!==void 0&&(oe=2),b.morphAttributes.color!==void 0&&(oe=3),O){let ot=In[O];K=ot.vertexShader,q=ot.fragmentShader}else K=m.vertexShader,q=m.fragmentShader,c.update(m),ne=c.getVertexShaderID(m),de=c.getFragmentShaderID(m);let $=r.getRenderTarget(),ae=M.isInstancedMesh===!0,I=M.isBatchedMesh===!0,X=!!m.map,we=!!m.matcap,w=!!W,T=!!m.aoMap,z=!!m.lightMap,F=!!m.bumpMap,U=!!m.normalMap,j=!!m.displacementMap,V=!!m.emissiveMap,Y=!!m.metalnessMap,ie=!!m.roughnessMap,ce=m.anisotropy>0,P=m.clearcoat>0,x=m.iridescence>0,J=m.sheen>0,k=m.transmission>0,B=ce&&!!m.anisotropyMap,Q=P&&!!m.clearcoatMap,se=P&&!!m.clearcoatNormalMap,re=P&&!!m.clearcoatRoughnessMap,ve=x&&!!m.iridescenceMap,_e=x&&!!m.iridescenceThicknessMap,Se=J&&!!m.sheenColorMap,be=J&&!!m.sheenRoughnessMap,Re=!!m.specularMap,ze=!!m.specularColorMap,Pe=!!m.specularIntensityMap,ke=k&&!!m.transmissionMap,He=k&&!!m.thicknessMap,Ye=!!m.gradientMap,rt=!!m.alphaMap,ft=m.alphaTest>0,pt=!!m.alphaHash,ut=!!m.extensions,It=!!b.attributes.uv1,ue=!!b.attributes.uv2,Ge=!!b.attributes.uv3,at=si;return m.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(at=r.toneMapping)),{isWebGL2:h,shaderID:O,shaderType:m.type,shaderName:m.name,vertexShader:K,fragmentShader:q,defines:m.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:I,instancing:ae,instancingColor:ae&&M.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zn,map:X,matcap:we,envMap:w,envMapMode:w&&W.mapping,envMapCubeUVHeight:L,aoMap:T,lightMap:z,bumpMap:F,normalMap:U,displacementMap:p&&j,emissiveMap:V,normalMapObjectSpace:U&&m.normalMapType===1,normalMapTangentSpace:U&&m.normalMapType===0,metalnessMap:Y,roughnessMap:ie,anisotropy:ce,anisotropyMap:B,clearcoat:P,clearcoatMap:Q,clearcoatNormalMap:se,clearcoatRoughnessMap:re,iridescence:x,iridescenceMap:ve,iridescenceThicknessMap:_e,sheen:J,sheenColorMap:Se,sheenRoughnessMap:be,specularMap:Re,specularColorMap:ze,specularIntensityMap:Pe,transmission:k,transmissionMap:ke,thicknessMap:He,gradientMap:Ye,opaque:m.transparent===!1&&m.blending===1,alphaMap:rt,alphaTest:ft,alphaHash:pt,combine:m.combine,mapUv:X&&g(m.map.channel),aoMapUv:T&&g(m.aoMap.channel),lightMapUv:z&&g(m.lightMap.channel),bumpMapUv:F&&g(m.bumpMap.channel),normalMapUv:U&&g(m.normalMap.channel),displacementMapUv:j&&g(m.displacementMap.channel),emissiveMapUv:V&&g(m.emissiveMap.channel),metalnessMapUv:Y&&g(m.metalnessMap.channel),roughnessMapUv:ie&&g(m.roughnessMap.channel),anisotropyMapUv:B&&g(m.anisotropyMap.channel),clearcoatMapUv:Q&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(m.sheenRoughnessMap.channel),specularMapUv:Re&&g(m.specularMap.channel),specularColorMapUv:ze&&g(m.specularColorMap.channel),specularIntensityMapUv:Pe&&g(m.specularIntensityMap.channel),transmissionMapUv:ke&&g(m.transmissionMap.channel),thicknessMapUv:He&&g(m.thicknessMap.channel),alphaMapUv:rt&&g(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(U||ce),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:ue,vertexUv3s:Ge,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(X||rt),fog:!!E,useFog:m.fog===!0,fogExp2:E&&E.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,useLegacyLights:r._useLegacyLights,decodeVideoTexture:X&&m.map.isVideoTexture===!0&&dt.getTransfer(m.map.colorSpace)===_t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===nn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:ut&&m.extensions.derivatives===!0,extensionFragDepth:ut&&m.extensions.fragDepth===!0,extensionDrawBuffers:ut&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)y.push(_),y.push(m.defines[_]);return m.isRawShaderMaterial===!1&&((function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)})(y,m),(function(_,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),_.push(o.mask)})(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],_;if(y){let v=In[y];_=Wu.clone(v.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,y){let _;for(let v=0,M=l.length;v<M;v++){let E=l[v];if(E.cacheKey===y){_=E,++_.usedTimes;break}}return _===void 0&&(_=new ip(r,y,m,s),l.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let y=l.indexOf(m);l[y]=l[l.length-1],l.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:l,dispose:function(){c.dispose()}}}function ap(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=c,p.groupOrder=l,p.renderOrder=a.renderOrder,p.z=h,p.group=u),e++,p}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.push(p):c.transparent===!0?i.push(p):t.push(p)},unshift:function(a,o,c,l,h,u){let p=s(a,o,c,l,h,u);c.transmission>0?n.unshift(p):c.transparent===!0?i.unshift(p):t.unshift(p)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||op),n.length>1&&n.sort(o||Xc),i.length>1&&i.sort(o||Xc)}}}function lp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new jc,r.set(e,[i])):t>=n.length?(i=new jc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function cp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H}}return r[e.id]=t,t}}}var hp=0;function up(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dp(r,e){let t=new cp,n=(function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,a=new Qe,o=new Qe;return{setup:function(c,l){let h=0,u=0,p=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,f=0,g=0,m=0,y=0,_=0,v=0,M=0,E=0,b=0,A=0;c.sort(up);let W=l===!0?Math.PI:1;for(let O=0,te=c.length;O<te;O++){let C=c[O],K=C.color,q=C.intensity,ne=C.distance,de=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=K.r*q*W,u+=K.g*q*W,p+=K.b*q*W;else if(C.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(C.sh.coefficients[oe],q);A++}else if(C.isDirectionalLight){let oe=t.get(C);if(oe.color.copy(C.color).multiplyScalar(C.intensity*W),C.castShadow){let $=C.shadow,ae=n.get(C);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,i.directionalShadow[d]=ae,i.directionalShadowMap[d]=de,i.directionalShadowMatrix[d]=C.shadow.matrix,_++}i.directional[d]=oe,d++}else if(C.isSpotLight){let oe=t.get(C);oe.position.setFromMatrixPosition(C.matrixWorld),oe.color.copy(K).multiplyScalar(q*W),oe.distance=ne,oe.coneCos=Math.cos(C.angle),oe.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),oe.decay=C.decay,i.spot[g]=oe;let $=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,$.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[g]=$.matrix,C.castShadow){let ae=n.get(C);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,i.spotShadow[g]=ae,i.spotShadowMap[g]=de,M++}g++}else if(C.isRectAreaLight){let oe=t.get(C);oe.color.copy(K).multiplyScalar(q),oe.halfWidth.set(.5*C.width,0,0),oe.halfHeight.set(0,.5*C.height,0),i.rectArea[m]=oe,m++}else if(C.isPointLight){let oe=t.get(C);if(oe.color.copy(C.color).multiplyScalar(C.intensity*W),oe.distance=C.distance,oe.decay=C.decay,C.castShadow){let $=C.shadow,ae=n.get(C);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,ae.shadowCameraNear=$.camera.near,ae.shadowCameraFar=$.camera.far,i.pointShadow[f]=ae,i.pointShadowMap[f]=de,i.pointShadowMatrix[f]=C.shadow.matrix,v++}i.point[f]=oe,f++}else if(C.isHemisphereLight){let oe=t.get(C);oe.skyColor.copy(C.color).multiplyScalar(q*W),oe.groundColor.copy(C.groundColor).multiplyScalar(q*W),i.hemi[y]=oe,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let L=i.hash;L.directionalLength===d&&L.pointLength===f&&L.spotLength===g&&L.rectAreaLength===m&&L.hemiLength===y&&L.numDirectionalShadows===_&&L.numPointShadows===v&&L.numSpotShadows===M&&L.numSpotMaps===E&&L.numLightProbes===A||(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,L.directionalLength=d,L.pointLength=f,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=y,L.numDirectionalShadows=_,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=E,L.numLightProbes=A,i.version=hp++)},setupView:function(c,l){let h=0,u=0,p=0,d=0,f=0,g=l.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let _=c[m];if(_.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(_.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let v=i.hemi[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),f++}}},state:i}}function qc(r,e){let t=new dp(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function pp(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new qc(r,e),t.set(n,[a])):i>=s.length?(a=new qc(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var Do=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mp(r,e,t){let n=new hr,i=new Ce,s=new Ce,a=new Lt,o=new Do({depthPacking:3201}),c=new No,l={},h=t.maxTextureSize,u={[oi]:nn,[nn]:oi,2:2},p=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:`void main() {
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new St;f.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tn(f,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let y=this.type;function _(b,A){let W=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new An(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,W,p,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,W,d,g,null)}function v(b,A,W,L){let O=null,te=W.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(te!==void 0)O=te;else if(O=W.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let C=O.uuid,K=A.uuid,q=l[C];q===void 0&&(q={},l[C]=q);let ne=q[K];ne===void 0&&(ne=O.clone(),q[K]=ne,A.addEventListener("dispose",E)),O=ne}return O.visible=A.visible,O.wireframe=A.wireframe,O.side=L===Xn?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,W.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(r.properties.get(O).light=W),O}function M(b,A,W,L,O){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&O===Xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld);let C=e.update(b),K=b.material;if(Array.isArray(K)){let q=C.groups;for(let ne=0,de=q.length;ne<de;ne++){let oe=q[ne],$=K[oe.materialIndex];if($&&$.visible){let ae=v(b,$,L,O);b.onBeforeShadow(r,b,A,W,C,ae,oe),r.renderBufferDirect(W,null,C,ae,b,oe),b.onAfterShadow(r,b,A,W,C,ae,oe)}}}else if(K.visible){let q=v(b,K,L,O);b.onBeforeShadow(r,b,A,W,C,q,null),r.renderBufferDirect(W,null,C,q,b,null),b.onAfterShadow(r,b,A,W,C,q,null)}}let te=b.children;for(let C=0,K=te.length;C<K;C++)M(te[C],A,W,L,O)}function E(b){b.target.removeEventListener("dispose",E);for(let A in l){let W=l[A],L=b.target.uuid;L in W&&(W[L].dispose(),delete W[L])}}this.render=function(b,A,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let L=r.getRenderTarget(),O=r.getActiveCubeFace(),te=r.getActiveMipmapLevel(),C=r.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let K=y!==Xn&&this.type===Xn,q=y===Xn&&this.type!==Xn;for(let ne=0,de=b.length;ne<de;ne++){let oe=b[ne],$=oe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let ae=$.getFrameExtents();if(i.multiply(ae),s.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,$.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,$.mapSize.y=s.y)),$.map===null||K===!0||q===!0){let X=this.type!==Xn?{minFilter:Vt,magFilter:Vt}:{};$.map!==null&&$.map.dispose(),$.map=new An(i.x,i.y,X),$.map.texture.name=oe.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();let I=$.getViewportCount();for(let X=0;X<I;X++){let we=$.getViewport(X);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),C.viewport(a),$.updateMatrices(oe,X),n=$.getFrustum(),M(A,W,$.camera,oe,this.type)}$.isPointLightShadow!==!0&&this.type===Xn&&_($,W),$.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(L,O,te)}}function fp(r,e,t){let n=t.isWebGL2,i=new function(){let x=!1,J=new Lt,k=null,B=new Lt(0,0,0,0);return{setMask:function(Q){k===Q||x||(r.colorMask(Q,Q,Q,Q),k=Q)},setLocked:function(Q){x=Q},setClear:function(Q,se,re,ve,_e){_e===!0&&(Q*=ve,se*=ve,re*=ve),J.set(Q,se,re,ve),B.equals(J)===!1&&(r.clearColor(Q,se,re,ve),B.copy(J))},reset:function(){x=!1,k=null,B.set(-1,0,0,0)}}},s=new function(){let x=!1,J=null,k=null,B=null;return{setTest:function(Q){Q?F(r.DEPTH_TEST):U(r.DEPTH_TEST)},setMask:function(Q){J===Q||x||(r.depthMask(Q),J=Q)},setFunc:function(Q){if(k!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}k=Q}},setLocked:function(Q){x=Q},setClear:function(Q){B!==Q&&(r.clearDepth(Q),B=Q)},reset:function(){x=!1,J=null,k=null,B=null}}},a=new function(){let x=!1,J=null,k=null,B=null,Q=null,se=null,re=null,ve=null,_e=null;return{setTest:function(Se){x||(Se?F(r.STENCIL_TEST):U(r.STENCIL_TEST))},setMask:function(Se){J===Se||x||(r.stencilMask(Se),J=Se)},setFunc:function(Se,be,Re){k===Se&&B===be&&Q===Re||(r.stencilFunc(Se,be,Re),k=Se,B=be,Q=Re)},setOp:function(Se,be,Re){se===Se&&re===be&&ve===Re||(r.stencilOp(Se,be,Re),se=Se,re=be,ve=Re)},setLocked:function(Se){x=Se},setClear:function(Se){_e!==Se&&(r.clearStencil(Se),_e=Se)},reset:function(){x=!1,J=null,k=null,B=null,Q=null,se=null,re=null,ve=null,_e=null}}},o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,p=[],d=null,f=!1,g=null,m=null,y=null,_=null,v=null,M=null,E=null,b=new et(0,0,0),A=0,W=!1,L=null,O=null,te=null,C=null,K=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,de=0,oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ne=de>=1):oe.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ne=de>=2);let $=null,ae={},I=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),we=new Lt().fromArray(I),w=new Lt().fromArray(X);function T(x,J,k,B){let Q=new Uint8Array(4),se=r.createTexture();r.bindTexture(x,se),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<k;re++)!n||x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY?r.texImage2D(J+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage3D(J,0,r.RGBA,1,1,B,0,r.RGBA,r.UNSIGNED_BYTE,Q);return se}let z={};function F(x){l[x]!==!0&&(r.enable(x),l[x]=!0)}function U(x){l[x]!==!1&&(r.disable(x),l[x]=!1)}z[r.TEXTURE_2D]=T(r.TEXTURE_2D,r.TEXTURE_2D,1),z[r.TEXTURE_CUBE_MAP]=T(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(z[r.TEXTURE_2D_ARRAY]=T(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),z[r.TEXTURE_3D]=T(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),F(r.DEPTH_TEST),s.setFunc(3),ie(!1),ce(1),F(r.CULL_FACE),Y(0);let j={[Mi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)j[103]=r.MIN,j[104]=r.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(j[103]=x.MIN_EXT,j[104]=x.MAX_EXT)}let V={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[vo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[_o]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function Y(x,J,k,B,Q,se,re,ve,_e,Se){if(x!==0){if(f===!1&&(F(r.BLEND),f=!0),x===5)Q=Q||J,se=se||k,re=re||B,J===m&&Q===v||(r.blendEquationSeparate(j[J],j[Q]),m=J,v=Q),k===y&&B===_&&se===M&&re===E||(r.blendFuncSeparate(V[k],V[B],V[se],V[re]),y=k,_=B,M=se,E=re),ve.equals(b)!==!1&&_e===A||(r.blendColor(ve.r,ve.g,ve.b,_e),b.copy(ve),A=_e),g=x,W=!1;else if(x!==g||Se!==W){if(m===Mi&&v===Mi||(r.blendEquation(r.FUNC_ADD),m=Mi,v=Mi),Se)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}y=null,_=null,M=null,E=null,b.set(0,0,0),A=0,g=x,W=Se}}else f===!0&&(U(r.BLEND),f=!1)}function ie(x){L!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),L=x)}function ce(x){x!==0?(F(r.CULL_FACE),x!==O&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):U(r.CULL_FACE),O=x}function P(x,J,k){x?(F(r.POLYGON_OFFSET_FILL),C===J&&K===k||(r.polygonOffset(J,k),C=J,K=k)):U(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:F,disable:U,bindFramebuffer:function(x,J){return h[x]!==J&&(r.bindFramebuffer(x,J),h[x]=J,n&&(x===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),x===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J)),!0)},drawBuffers:function(x,J){let k=p,B=!1;if(x)if(k=u.get(J),k===void 0&&(k=[],u.set(J,k)),x.isWebGLMultipleRenderTargets){let Q=x.texture;if(k.length!==Q.length||k[0]!==r.COLOR_ATTACHMENT0){for(let se=0,re=Q.length;se<re;se++)k[se]=r.COLOR_ATTACHMENT0+se;k.length=Q.length,B=!0}}else k[0]!==r.COLOR_ATTACHMENT0&&(k[0]=r.COLOR_ATTACHMENT0,B=!0);else k[0]!==r.BACK&&(k[0]=r.BACK,B=!0);B&&(t.isWebGL2?r.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))},useProgram:function(x){return d!==x&&(r.useProgram(x),d=x,!0)},setBlending:Y,setMaterial:function(x,J){x.side===2?U(r.CULL_FACE):F(r.CULL_FACE);let k=x.side===nn;J&&(k=!k),ie(k),x.blending===1&&x.transparent===!1?Y(0):Y(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);let B=x.stencilWrite;a.setTest(B),B&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),P(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?F(r.SAMPLE_ALPHA_TO_COVERAGE):U(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ie,setCullFace:ce,setLineWidth:function(x){x!==te&&(ne&&r.lineWidth(x),te=x)},setPolygonOffset:P,setScissorTest:function(x){x?F(r.SCISSOR_TEST):U(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+q-1),$!==x&&(r.activeTexture(x),$=x)},bindTexture:function(x,J,k){k===void 0&&(k=$===null?r.TEXTURE0+q-1:$);let B=ae[k];B===void 0&&(B={type:void 0,texture:void 0},ae[k]=B),B.type===x&&B.texture===J||($!==k&&(r.activeTexture(k),$=k),r.bindTexture(x,J||z[x]),B.type=x,B.texture=J)},unbindTexture:function(){let x=ae[$];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,J){let k=c.get(J);k===void 0&&(k=new WeakMap,c.set(J,k));let B=k.get(x);B===void 0&&(B=r.getUniformBlockIndex(J,x.name),k.set(x,B))},uniformBlockBinding:function(x,J){let k=c.get(J).get(x);o.get(J)!==k&&(r.uniformBlockBinding(J,k,x.__bindingPointIndex),o.set(J,k))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){we.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),we.copy(x))},viewport:function(x){w.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),w.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},$=null,ae={},h={},u=new WeakMap,p=[],d=null,f=!1,g=null,m=null,y=null,_=null,v=null,M=null,E=null,b=new et(0,0,0),A=0,W=!1,L=null,O=null,te=null,C=null,K=null,we.set(0,0,r.canvas.width,r.canvas.height),w.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function gp(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,T){return d?new OffscreenCanvas(w,T):Vr("canvas")}function g(w,T,z,F){let U=1;if((w.width>F||w.height>F)&&(U=F/Math.max(w.width,w.height)),U<1||T===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=T?Vs:Math.floor,V=j(U*w.width),Y=j(U*w.height);u===void 0&&(u=f(V,Y));let ie=z?f(V,Y):u;return ie.width=V,ie.height=Y,ie.getContext("2d").drawImage(w,0,0,V,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+V+"x"+Y+")."),ie}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function m(w){return So(w.width)&&So(w.height)}function y(w,T){return w.generateMipmaps&&T&&w.minFilter!==Vt&&w.minFilter!==hn}function _(w){r.generateMipmap(w)}function v(w,T,z,F,U=!1){if(o===!1)return T;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=T;if(T===r.RED&&(z===r.FLOAT&&(j=r.R32F),z===r.HALF_FLOAT&&(j=r.R16F),z===r.UNSIGNED_BYTE&&(j=r.R8)),T===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.R8UI),z===r.UNSIGNED_SHORT&&(j=r.R16UI),z===r.UNSIGNED_INT&&(j=r.R32UI),z===r.BYTE&&(j=r.R8I),z===r.SHORT&&(j=r.R16I),z===r.INT&&(j=r.R32I)),T===r.RG&&(z===r.FLOAT&&(j=r.RG32F),z===r.HALF_FLOAT&&(j=r.RG16F),z===r.UNSIGNED_BYTE&&(j=r.RG8)),T===r.RGBA){let V=U?Bs:dt.getTransfer(F);z===r.FLOAT&&(j=r.RGBA32F),z===r.HALF_FLOAT&&(j=r.RGBA16F),z===r.UNSIGNED_BYTE&&(j=V===_t?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return j!==r.R16F&&j!==r.R32F&&j!==r.RG16F&&j!==r.RG32F&&j!==r.RGBA16F&&j!==r.RGBA32F||e.get("EXT_color_buffer_float"),j}function M(w,T,z){return y(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function E(w){return w===Vt||w===Ul||w===Na?r.NEAREST:r.LINEAR}function b(w){let T=w.target;T.removeEventListener("dispose",b),(function(z){let F=n.get(z);if(F.__webglInit===void 0)return;let U=z.source,j=p.get(U);if(j){let V=j[F.__cacheKey];V.usedTimes--,V.usedTimes===0&&W(z),Object.keys(j).length===0&&p.delete(U)}n.remove(z)})(T),T.isVideoTexture&&h.delete(T)}function A(w){let T=w.target;T.removeEventListener("dispose",A),(function(z){let F=z.texture,U=n.get(z),j=n.get(F);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(U.__webglFramebuffer[V]))for(let Y=0;Y<U.__webglFramebuffer[V].length;Y++)r.deleteFramebuffer(U.__webglFramebuffer[V][Y]);else r.deleteFramebuffer(U.__webglFramebuffer[V]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[V])}else{if(Array.isArray(U.__webglFramebuffer))for(let V=0;V<U.__webglFramebuffer.length;V++)r.deleteFramebuffer(U.__webglFramebuffer[V]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let V=0;V<U.__webglColorRenderbuffer.length;V++)U.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[V]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let V=0,Y=F.length;V<Y;V++){let ie=n.get(F[V]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(F),n.remove(z)})(T)}function W(w){let T=n.get(w);r.deleteTexture(T.__webglTexture);let z=w.source;delete p.get(z)[T.__cacheKey],a.memory.textures--}let L=0;function O(w,T){let z=n.get(w);if(w.isVideoTexture&&(function(F){let U=a.render.frame;h.get(F)!==U&&(h.set(F,U),F.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let F=w.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void de(z,w,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+T)}let te={[kr]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[xo]:r.MIRRORED_REPEAT},C={[Vt]:r.NEAREST,[Ul]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Ru]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},K={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function q(w,T,z){if(z?(r.texParameteri(w,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,te[T.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,C[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,C[T.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),T.wrapS===qn&&T.wrapT===qn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,E(T.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Vt&&T.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Vt||T.minFilter!==Na&&T.minFilter!==sr||T.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ne(w,T){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",b));let F=T.source,U=p.get(F);U===void 0&&(U={},p.set(F,U));let j=(function(V){let Y=[];return Y.push(V.wrapS),Y.push(V.wrapT),Y.push(V.wrapR||0),Y.push(V.magFilter),Y.push(V.minFilter),Y.push(V.anisotropy),Y.push(V.internalFormat),Y.push(V.format),Y.push(V.type),Y.push(V.generateMipmaps),Y.push(V.premultiplyAlpha),Y.push(V.flipY),Y.push(V.unpackAlignment),Y.push(V.colorSpace),Y.join()})(T);if(j!==w.__cacheKey){U[j]===void 0&&(U[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),U[j].usedTimes++;let V=U[w.__cacheKey];V!==void 0&&(U[w.__cacheKey].usedTimes--,V.usedTimes===0&&W(T)),w.__cacheKey=j,w.__webglTexture=U[j].texture}return z}function de(w,T,z){let F=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(F=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(F=r.TEXTURE_3D);let U=ne(w,T),j=T.source;t.bindTexture(F,w.__webglTexture,r.TEXTURE0+z);let V=n.get(j);if(j.version!==V.__version||U===!0){t.activeTexture(r.TEXTURE0+z);let Y=dt.getPrimaries(dt.workingColorSpace),ie=T.colorSpace===_n?null:dt.getPrimaries(T.colorSpace),ce=T.colorSpace===_n||Y===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let P=(function(be){return!o&&(be.wrapS!==qn||be.wrapT!==qn||be.minFilter!==Vt&&be.minFilter!==hn)})(T)&&m(T.image)===!1,x=g(T.image,P,!1,i.maxTextureSize);x=we(T,x);let J=m(x)||o,k=s.convert(T.format,T.colorSpace),B,Q=s.convert(T.type),se=v(T.internalFormat,k,Q,T.colorSpace,T.isVideoTexture);q(F,T,J);let re=T.mipmaps,ve=o&&T.isVideoTexture!==!0&&se!==ph,_e=V.__version===void 0||U===!0,Se=M(T,x,J);if(T.isDepthTexture)se=r.DEPTH_COMPONENT,o?se=T.type===Dn?r.DEPTH_COMPONENT32F:T.type===Un?r.DEPTH_COMPONENT24:T.type===Ei?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:T.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ti&&se===r.DEPTH_COMPONENT&&T.type!==vl&&T.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Un,Q=s.convert(T.type)),T.format===ar&&se===r.DEPTH_COMPONENT&&(se=r.DEPTH_STENCIL,T.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ei,Q=s.convert(T.type))),_e&&(ve?t.texStorage2D(r.TEXTURE_2D,1,se,x.width,x.height):t.texImage2D(r.TEXTURE_2D,0,se,x.width,x.height,0,k,Q,null));else if(T.isDataTexture)if(re.length>0&&J){ve&&_e&&t.texStorage2D(r.TEXTURE_2D,Se,se,re[0].width,re[0].height);for(let be=0,Re=re.length;be<Re;be++)B=re[be],ve?t.texSubImage2D(r.TEXTURE_2D,be,0,0,B.width,B.height,k,Q,B.data):t.texImage2D(r.TEXTURE_2D,be,se,B.width,B.height,0,k,Q,B.data);T.generateMipmaps=!1}else ve?(_e&&t.texStorage2D(r.TEXTURE_2D,Se,se,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,k,Q,x.data)):t.texImage2D(r.TEXTURE_2D,0,se,x.width,x.height,0,k,Q,x.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,se,re[0].width,re[0].height,x.depth);for(let be=0,Re=re.length;be<Re;be++)B=re[be],T.format!==vn?k!==null?ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,B.width,B.height,x.depth,k,B.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,se,B.width,B.height,x.depth,0,B.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,B.width,B.height,x.depth,k,Q,B.data):t.texImage3D(r.TEXTURE_2D_ARRAY,be,se,B.width,B.height,x.depth,0,k,Q,B.data)}else{ve&&_e&&t.texStorage2D(r.TEXTURE_2D,Se,se,re[0].width,re[0].height);for(let be=0,Re=re.length;be<Re;be++)B=re[be],T.format!==vn?k!==null?ve?t.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,B.width,B.height,k,B.data):t.compressedTexImage2D(r.TEXTURE_2D,be,se,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(r.TEXTURE_2D,be,0,0,B.width,B.height,k,Q,B.data):t.texImage2D(r.TEXTURE_2D,be,se,B.width,B.height,0,k,Q,B.data)}else if(T.isDataArrayTexture)ve?(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,se,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,k,Q,x.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,x.width,x.height,x.depth,0,k,Q,x.data);else if(T.isData3DTexture)ve?(_e&&t.texStorage3D(r.TEXTURE_3D,Se,se,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,k,Q,x.data)):t.texImage3D(r.TEXTURE_3D,0,se,x.width,x.height,x.depth,0,k,Q,x.data);else if(T.isFramebufferTexture){if(_e)if(ve)t.texStorage2D(r.TEXTURE_2D,Se,se,x.width,x.height);else{let be=x.width,Re=x.height;for(let ze=0;ze<Se;ze++)t.texImage2D(r.TEXTURE_2D,ze,se,be,Re,0,k,Q,null),be>>=1,Re>>=1}}else if(re.length>0&&J){ve&&_e&&t.texStorage2D(r.TEXTURE_2D,Se,se,re[0].width,re[0].height);for(let be=0,Re=re.length;be<Re;be++)B=re[be],ve?t.texSubImage2D(r.TEXTURE_2D,be,0,0,k,Q,B):t.texImage2D(r.TEXTURE_2D,be,se,k,Q,B);T.generateMipmaps=!1}else ve?(_e&&t.texStorage2D(r.TEXTURE_2D,Se,se,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,k,Q,x)):t.texImage2D(r.TEXTURE_2D,0,se,k,Q,x);y(T,J)&&_(F),V.__version=j.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function oe(w,T,z,F,U,j){let V=s.convert(z.format,z.colorSpace),Y=s.convert(z.type),ie=v(z.internalFormat,V,Y,z.colorSpace);if(!n.get(T).__hasExternalTextures){let ce=Math.max(1,T.width>>j),P=Math.max(1,T.height>>j);U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?t.texImage3D(U,j,ie,ce,P,T.depth,0,V,Y,null):t.texImage2D(U,j,ie,ce,P,0,V,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),X(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,F,U,n.get(z).__webglTexture,0,I(T)):(U===r.TEXTURE_2D||U>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,F,U,n.get(z).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(w,T,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let F=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||X(T)){let U=T.depthTexture;U&&U.isDepthTexture&&(U.type===Dn?F=r.DEPTH_COMPONENT32F:U.type===Un&&(F=r.DEPTH_COMPONENT24));let j=I(T);X(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,F,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,j,F,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,F,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){let F=I(T);z&&X(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,r.DEPTH24_STENCIL8,T.width,T.height):X(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{let F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0;U<F.length;U++){let j=F[U],V=s.convert(j.format,j.colorSpace),Y=s.convert(j.type),ie=v(j.internalFormat,V,Y,j.colorSpace),ce=I(T);z&&X(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ie,T.width,T.height):X(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(w){let T=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");(function(F,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),O(U.depthTexture,0);let j=n.get(U.depthTexture).__webglTexture,V=I(U);if(U.depthTexture.format===Ti)X(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else{if(U.depthTexture.format!==ar)throw new Error("Unknown depthTexture format");X(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0)}})(T.__webglFramebuffer,w)}else if(z){T.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[F]),T.__webglDepthbuffer[F]=r.createRenderbuffer(),$(T.__webglDepthbuffer[F],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),$(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(w){return Math.min(i.maxSamples,w.samples)}function X(w){let T=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function we(w,T){let z=w.colorSpace,F=w.format,U=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Mo||z!==Zn&&z!==_n&&(dt.getTransfer(z)===_t?o===!1?e.has("EXT_sRGB")===!0&&F===vn?(w.format=Mo,w.minFilter=hn,w.generateMipmaps=!1):T=Hs.sRGBToLinear(T):F===vn&&U===Yn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}this.allocateTextureUnit=function(){let w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w},this.resetTextureUnits=function(){L=0},this.setTexture2D=O,this.setTexture2DArray=function(w,T){let z=n.get(w);w.version>0&&z.__version!==w.version?de(z,w,T):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(w,T){let z=n.get(w);w.version>0&&z.__version!==w.version?de(z,w,T):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(w,T){let z=n.get(w);w.version>0&&z.__version!==w.version?(function(F,U,j){if(U.image.length!==6)return;let V=ne(F,U),Y=U.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+j);let ie=n.get(Y);if(Y.version!==ie.__version||V===!0){t.activeTexture(r.TEXTURE0+j);let ce=dt.getPrimaries(dt.workingColorSpace),P=U.colorSpace===_n?null:dt.getPrimaries(U.colorSpace),x=U.colorSpace===_n||ce===P?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let J=U.isCompressedTexture||U.image[0].isCompressedTexture,k=U.image[0]&&U.image[0].isDataTexture,B=[];for(let Pe=0;Pe<6;Pe++)B[Pe]=J||k?k?U.image[Pe].image:U.image[Pe]:g(U.image[Pe],!1,!0,i.maxCubemapSize),B[Pe]=we(U,B[Pe]);let Q=B[0],se=m(Q)||o,re=s.convert(U.format,U.colorSpace),ve=s.convert(U.type),_e=v(U.internalFormat,re,ve,U.colorSpace),Se=o&&U.isVideoTexture!==!0,be=ie.__version===void 0||V===!0,Re,ze=M(U,Q,se);if(q(r.TEXTURE_CUBE_MAP,U,se),J){Se&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ze,_e,Q.width,Q.height);for(let Pe=0;Pe<6;Pe++){Re=B[Pe].mipmaps;for(let ke=0;ke<Re.length;ke++){let He=Re[ke];U.format!==vn?re!==null?Se?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke,0,0,He.width,He.height,re,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke,_e,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke,0,0,He.width,He.height,re,ve,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke,_e,He.width,He.height,0,re,ve,He.data)}}}else{Re=U.mipmaps,Se&&be&&(Re.length>0&&ze++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ze,_e,B[0].width,B[0].height));for(let Pe=0;Pe<6;Pe++)if(k){Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,B[Pe].width,B[Pe].height,re,ve,B[Pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,_e,B[Pe].width,B[Pe].height,0,re,ve,B[Pe].data);for(let ke=0;ke<Re.length;ke++){let He=Re[ke].image[Pe].image;Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke+1,0,0,He.width,He.height,re,ve,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke+1,_e,He.width,He.height,0,re,ve,He.data)}}else{Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,re,ve,B[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,_e,re,ve,B[Pe]);for(let ke=0;ke<Re.length;ke++){let He=Re[ke];Se?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke+1,0,0,re,ve,He.image[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke+1,_e,re,ve,He.image[Pe])}}}y(U,se)&&_(r.TEXTURE_CUBE_MAP),ie.__version=Y.version,U.onUpdate&&U.onUpdate(U)}F.__version=U.version})(z,w,T):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(w,T,z){let F=n.get(w);T!==void 0&&oe(F.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ae(w)},this.setupRenderTarget=function(w){let T=w.texture,z=n.get(w),F=n.get(T);w.addEventListener("dispose",A),w.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture()),F.__version=T.version,a.memory.textures++);let U=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,V=m(w)||o;if(U){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(o&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let ie=0;ie<T.mipmaps.length;ie++)z.__webglFramebuffer[Y][ie]=r.createFramebuffer()}else z.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<T.mipmaps.length;Y++)z.__webglFramebuffer[Y]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(j)if(i.drawBuffers){let Y=w.texture;for(let ie=0,ce=Y.length;ie<ce;ie++){let P=n.get(Y[ie]);P.__webglTexture===void 0&&(P.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&X(w)===!1){let Y=j?T:[T];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<Y.length;ie++){let ce=Y[ie];z.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);let P=s.convert(ce.format,ce.colorSpace),x=s.convert(ce.type),J=v(ce.internalFormat,P,x,ce.colorSpace,w.isXRRenderTarget===!0),k=I(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,k,J,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),$(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture),q(r.TEXTURE_CUBE_MAP,T,V);for(let Y=0;Y<6;Y++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)oe(z.__webglFramebuffer[Y][ie],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie);else oe(z.__webglFramebuffer[Y],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(T,V)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let Y=w.texture;for(let ie=0,ce=Y.length;ie<ce;ie++){let P=Y[ie],x=n.get(P);t.bindTexture(r.TEXTURE_2D,x.__webglTexture),q(r.TEXTURE_2D,P,V),oe(z.__webglFramebuffer,w,P,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),y(P,V)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?Y=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,F.__webglTexture),q(Y,T,V),o&&T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)oe(z.__webglFramebuffer[ie],w,T,r.COLOR_ATTACHMENT0,Y,ie);else oe(z.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,Y,0);y(T,V)&&_(Y),t.unbindTexture()}w.depthBuffer&&ae(w)},this.updateRenderTargetMipmap=function(w){let T=m(w)||o,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let F=0,U=z.length;F<U;F++){let j=z[F];if(y(j,T)){let V=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Y=n.get(j).__webglTexture;t.bindTexture(V,Y),_(V),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&X(w)===!1){let T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,F=w.height,U=r.COLOR_BUFFER_BIT,j=[],V=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=n.get(w),ie=w.isWebGLMultipleRenderTargets===!0;if(ie)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){j.push(r.COLOR_ATTACHMENT0+ce),w.depthBuffer&&j.push(V);let P=Y.__ignoreDepthValues!==void 0&&Y.__ignoreDepthValues;if(P===!1&&(w.depthBuffer&&(U|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(U|=r.STENCIL_BUFFER_BIT)),ie&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]),P===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[V]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[V])),ie){let x=n.get(T[ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0)}r.blitFramebuffer(0,0,z,F,0,0,z,F,U,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let P=n.get(T[ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,P,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=X}function vp(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=dt.getTransfer(s);if(i===Yn)return r.UNSIGNED_BYTE;if(i===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===vl)return r.UNSIGNED_SHORT;if(i===oh)return r.INT;if(i===Un)return r.UNSIGNED_INT;if(i===Dn)return r.FLOAT;if(i===Ri)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===vn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Ti)return r.DEPTH_COMPONENT;if(i===ar)return r.DEPTH_STENCIL;if(i===Mo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===hh)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===uh)return r.RG_INTEGER;if(i===dh)return r.RGBA_INTEGER;if(i===Oa||i===Fa||i===Ba||i===za)if(o===_t){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Dl||i===Nl||i===Ol||i===Fl){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===ph)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Bl||i===zl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===Bl)return o===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===jl||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===Ql||i===$l){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===kl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ka||i===ec||i===tc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===ka)return o===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===nc||i===ic||i===rc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Ei?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var Oo=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ri=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),y=this._getHandJoint(l,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,f=.005;l.inputState.pinching&&p>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fo=class extends li{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,f=null,g=t.getContextAttributes(),m=null,y=null,_=[],v=[],M=new Ce,E=null,b=new Qt;b.layers.enable(1),b.viewport=new Lt;let A=new Qt;A.layers.enable(2),A.viewport=new Lt;let W=[b,A],L=new Oo;L.layers.enable(1),L.layers.enable(2);let O=null,te=null;function C(I){let X=v.indexOf(I.inputSource);if(X===-1)return;let we=_[X];we!==void 0&&(we.update(I.inputSource,I.frame,l||a),we.dispatchEvent({type:I.type,data:I.inputSource}))}function K(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",q);for(let I=0;I<_.length;I++){let X=v[I];X!==null&&(v[I]=null,_[I].disconnect(X))}O=null,te=null,e.setRenderTarget(m),d=null,p=null,u=null,i=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function q(I){for(let X=0;X<I.removed.length;X++){let we=I.removed[X],w=v.indexOf(we);w>=0&&(v[w]=null,_[w].disconnect(we))}for(let X=0;X<I.added.length;X++){let we=I.added[X],w=v.indexOf(we);if(w===-1){for(let z=0;z<_.length;z++){if(z>=v.length){v.push(we),w=z;break}if(v[z]===null){v[z]=we,w=z;break}}if(w===-1)break}let T=_[w];T&&T.connect(we)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let X=_[I];return X===void 0&&(X=new Nr,_[I]=X),X.getTargetRaySpace()},this.getControllerGrip=function(I){let X=_[I];return X===void 0&&(X=new Nr,_[I]=X),X.getGripSpace()},this.getHand=function(I){let X=_[I];return X===void 0&&(X=new Nr,_[I]=X),X.getHandSpace()},this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",K),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new An(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,we=null,w=null;g.depth&&(w=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?ar:Ti,we=g.stencil?Ei:Un);let T={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(T),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new An(p.textureWidth,p.textureHeight,{format:vn,type:Yn,depthTexture:new mr(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let ne=new H,de=new H;function oe(I,X){X===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(X.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;L.near=A.near=b.near=I.near,L.far=A.far=b.far=I.far,O===L.near&&te===L.far||(i.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,te=L.far);let X=I.parent,we=L.cameras;oe(L,X);for(let w=0;w<we.length;w++)oe(we[w],X);we.length===2?(function(w,T,z){ne.setFromMatrixPosition(T.matrixWorld),de.setFromMatrixPosition(z.matrixWorld);let F=ne.distanceTo(de),U=T.projectionMatrix.elements,j=z.projectionMatrix.elements,V=U[14]/(U[10]-1),Y=U[14]/(U[10]+1),ie=(U[9]+1)/U[5],ce=(U[9]-1)/U[5],P=(U[8]-1)/U[0],x=(j[8]+1)/j[0],J=V*P,k=V*x,B=F/(-P+x),Q=B*-P;T.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Q),w.translateZ(B),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let se=V+B,re=Y+B,ve=J-Q,_e=k+(F-Q),Se=ie*Y/re*se,be=ce*Y/re*se;w.projectionMatrix.makePerspective(ve,_e,Se,be,se,re),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()})(L,b,A):L.projectionMatrix.copy(b.projectionMatrix),(function(w,T,z){z===null?w.matrix.copy(T.matrixWorld):(w.matrix.copy(z.matrixWorld),w.matrix.invert(),w.matrix.multiply(T.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Gr*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(I,L,X)},this.getCamera=function(){return L},this.getFoveation=function(){if(p!==null||d!==null)return c},this.setFoveation=function(I){c=I,p!==null&&(p.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let $=null,ae=new yh;ae.setAnimationLoop((function(I,X){if(h=X.getViewerPose(l||a),f=X,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let w=!1;we.length!==L.cameras.length&&(L.cameras.length=0,w=!0);for(let T=0;T<we.length;T++){let z=we[T],F=null;if(d!==null)F=d.getViewport(z);else{let j=u.getViewSubImage(p,z);F=j.viewport,T===0&&(e.setRenderTargetTextures(y,j.colorTexture,p.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(y))}let U=W[T];U===void 0&&(U=new Qt,U.layers.enable(T),U.viewport=new Lt,W[T]=U),U.matrix.fromArray(z.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(z.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(F.x,F.y,F.width,F.height),T===0&&(L.matrix.copy(U.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),w===!0&&L.cameras.push(U)}}for(let we=0;we<_.length;we++){let w=v[we],T=_[we];w!==null&&T!==void 0&&T.update(w,X,l||a)}$&&$(I,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),f=null})),this.setAnimationLoop=function(I){$=I},this.dispose=function(){}}};function yp(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===nn&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===nn&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,_h(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,p){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*p,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function xp(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,p,d,f){let g=u.value,m=p+"_"+d;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function l(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),p}function h(u){let p=u.target;p.removeEventListener("dispose",h);let d=a.indexOf(p.__bindingPointIndex);a.splice(d,1),r.deleteBuffer(i[p.id]),delete i[p.id],delete s[p.id]}return{bind:function(u,p){let d=p.program;n.uniformBlockBinding(u,d)},update:function(u,p){let d=i[u.id];d===void 0&&((function(m){let y=m.uniforms,_=0,v=16;for(let E=0,b=y.length;E<b;E++){let A=Array.isArray(y[E])?y[E]:[y[E]];for(let W=0,L=A.length;W<L;W++){let O=A[W],te=Array.isArray(O.value)?O.value:[O.value];for(let C=0,K=te.length;C<K;C++){let q=l(te[C]),ne=_%v;ne!==0&&v-ne<q.boundary&&(_+=v-ne),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=q.storage}}}let M=_%v;M>0&&(_+=v-M),m.__size=_,m.__cache={}})(u),d=(function(m){let y=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let _=r.createBuffer(),v=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_})(u),i[u.id]=d,u.addEventListener("dispose",h));let f=p.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let y=i[m.id],_=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,E=_.length;M<E;M++){let b=Array.isArray(_[M])?_[M]:[_[M]];for(let A=0,W=b.length;A<W;A++){let L=b[A];if(c(L,M,A,v)===!0){let O=L.__offset,te=Array.isArray(L.value)?L.value:[L.value],C=0;for(let K=0;K<te.length;K++){let q=te[K],ne=l(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,O+C,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,C),C+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Wr=class{constructor(e={}){let{canvas:t=Cu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,p;this.isWebGLRenderer=!0,p=n!==null?n.getContextAttributes().alpha:a;let d=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;let v=this,M=!1,E=0,b=0,A=null,W=-1,L=null,O=new Lt,te=new Lt,C=null,K=new et(0),q=0,ne=t.width,de=t.height,oe=1,$=null,ae=null,I=new Lt(0,0,ne,de),X=new Lt(0,0,ne,de),we=!1,w=new hr,T=!1,z=!1,F=null,U=new Qe,j=new Ce,V=new H,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return A===null?oe:1}let ce,P,x,J,k,B,Q,se,re,ve,_e,Se,be,Re,ze,Pe,ke,He,Ye,rt,ft,pt,ut,It,ue=n;function Ge(N,le){for(let pe=0;pe<N.length;pe++){let Me=N[pe],ge=t.getContext(Me,le);if(ge!==null)return ge}return null}try{let N={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Et,!1),ue===null){let le=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&le.shift(),ue=Ge(le,N),ue===null)throw Ge(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ue instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ue.getShaderPrecisionFormat===void 0&&(ue.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}function at(){ce=new td(ue),P=new Ku(ue,ce,e),ce.init(P),pt=new vp(ue,ce,P),x=new fp(ue,ce,P),J=new rd(ue),k=new ap,B=new gp(ue,ce,x,k,P,pt,J),Q=new $u(v),se=new ed(v),re=new qu(ue,P),ut=new Zu(ue,ce,re,P),ve=new nd(ue,re,J,ut),_e=new ld(ue,ve,re,J),Ye=new od(ue,P,B),Pe=new Qu(k),Se=new sp(v,Q,se,ce,P,ut,Pe),be=new yp(v,k),Re=new lp,ze=new pp(ce,P),He=new Yu(v,Q,se,x,_e,p,c),ke=new mp(v,_e,P),It=new xp(ue,J,P,x),rt=new Ju(ue,ce,J,P),ft=new id(ue,ce,J,P),J.programs=Se.programs,v.capabilities=P,v.extensions=ce,v.properties=k,v.renderLists=Re,v.shadowMap=ke,v.state=x,v.info=J}at();let ot=new Fo(v,ue);function qe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let N=J.autoReset,le=ke.enabled,pe=ke.autoUpdate,Me=ke.needsUpdate,ge=ke.type;at(),J.autoReset=N,ke.enabled=le,ke.autoUpdate=pe,ke.needsUpdate=Me,ke.type=ge}function Et(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function un(N){let le=N.target;le.removeEventListener("dispose",un),(function(pe){(function(Me){let ge=k.get(Me).programs;ge!==void 0&&(ge.forEach((function(Oe){Se.releaseProgram(Oe)})),Me.isShaderMaterial&&Se.releaseShaderCache(Me))})(pe),k.remove(pe)})(le)}function Ht(N,le,pe){N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,bt(N,le,pe),N.side=oi,N.needsUpdate=!0,bt(N,le,pe),N.side=2):bt(N,le,pe)}this.xr=ot,this.getContext=function(){return ue},this.getContextAttributes=function(){return ue.getContextAttributes()},this.forceContextLoss=function(){let N=ce.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ce.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(N){N!==void 0&&(oe=N,this.setSize(ne,de,!1))},this.getSize=function(N){return N.set(ne,de)},this.setSize=function(N,le,pe=!0){ot.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ne=N,de=le,t.width=Math.floor(N*oe),t.height=Math.floor(le*oe),pe===!0&&(t.style.width=N+"px",t.style.height=le+"px"),this.setViewport(0,0,N,le))},this.getDrawingBufferSize=function(N){return N.set(ne*oe,de*oe).floor()},this.setDrawingBufferSize=function(N,le,pe){ne=N,de=le,oe=pe,t.width=Math.floor(N*pe),t.height=Math.floor(le*pe),this.setViewport(0,0,N,le)},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(I)},this.setViewport=function(N,le,pe,Me){N.isVector4?I.set(N.x,N.y,N.z,N.w):I.set(N,le,pe,Me),x.viewport(O.copy(I).multiplyScalar(oe).floor())},this.getScissor=function(N){return N.copy(X)},this.setScissor=function(N,le,pe,Me){N.isVector4?X.set(N.x,N.y,N.z,N.w):X.set(N,le,pe,Me),x.scissor(te.copy(X).multiplyScalar(oe).floor())},this.getScissorTest=function(){return we},this.setScissorTest=function(N){x.setScissorTest(we=N)},this.setOpaqueSort=function(N){$=N},this.setTransparentSort=function(N){ae=N},this.getClearColor=function(N){return N.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(N=!0,le=!0,pe=!0){let Me=0;if(N){let ge=!1;if(A!==null){let Oe=A.texture.format;ge=Oe===dh||Oe===uh||Oe===hh}if(ge){let Oe=A.texture.type,Ve=Oe===Yn||Oe===Un||Oe===vl||Oe===Ei||Oe===lh||Oe===ch,We=He.getClearColor(),G=He.getClearAlpha(),S=We.r,D=We.g,Z=We.b;Ve?(d[0]=S,d[1]=D,d[2]=Z,d[3]=G,ue.clearBufferuiv(ue.COLOR,0,d)):(f[0]=S,f[1]=D,f[2]=Z,f[3]=G,ue.clearBufferiv(ue.COLOR,0,f))}else Me|=ue.COLOR_BUFFER_BIT}le&&(Me|=ue.DEPTH_BUFFER_BIT),pe&&(Me|=ue.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue.clear(Me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Re.dispose(),ze.dispose(),k.dispose(),Q.dispose(),se.dispose(),_e.dispose(),ut.dispose(),It.dispose(),Se.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",pn),ot.removeEventListener("sessionend",an),F&&(F.dispose(),F=null),zt.stop()},this.renderBufferDirect=function(N,le,pe,Me,ge,Oe){le===null&&(le=Y);let Ve=ge.isMesh&&ge.matrixWorld.determinant()<0,We=(function(Le,Ue,Ne,Ae,Fe){Ue.isScene!==!0&&(Ue=Y),B.resetTextureUnits();let Ze=Ue.fog,nt=Ae.isMeshStandardMaterial?Ue.environment:null,lt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,ct=(Ae.isMeshStandardMaterial?se:Q).get(Ae.envMap||nt),Ke=Ae.vertexColors===!0&&!!Ne.attributes.color&&Ne.attributes.color.itemSize===4,Dt=!!Ne.attributes.tangent&&(!!Ae.normalMap||Ae.anisotropy>0),Ct=!!Ne.morphAttributes.position,R=!!Ne.morphAttributes.normal,ee=!!Ne.morphAttributes.color,fe=si;Ae.toneMapped&&(A!==null&&A.isXRRenderTarget!==!0||(fe=v.toneMapping));let ye=Ne.morphAttributes.position||Ne.morphAttributes.normal||Ne.morphAttributes.color,xe=ye!==void 0?ye.length:0,Te=k.get(Ae),je=m.state.lights;if(T===!0&&(z===!0||Le!==L)){let fn=Le===L&&Ae.id===W;Pe.setState(Ae,Le,fn)}let Xe=!1;Ae.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==je.state.version||Te.outputColorSpace!==lt||Fe.isBatchedMesh&&Te.batching===!1?Xe=!0:Fe.isBatchedMesh||Te.batching!==!0?Fe.isInstancedMesh&&Te.instancing===!1?Xe=!0:Fe.isInstancedMesh||Te.instancing!==!0?Fe.isSkinnedMesh&&Te.skinning===!1?Xe=!0:Fe.isSkinnedMesh||Te.skinning!==!0?Fe.isInstancedMesh&&Te.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&Te.instancingColor===!1&&Fe.instanceColor!==null||Te.envMap!==ct||Ae.fog===!0&&Te.fog!==Ze?Xe=!0:Te.numClippingPlanes===void 0||Te.numClippingPlanes===Pe.numPlanes&&Te.numIntersection===Pe.numIntersection?(Te.vertexAlphas!==Ke||Te.vertexTangents!==Dt||Te.morphTargets!==Ct||Te.morphNormals!==R||Te.morphColors!==ee||Te.toneMapping!==fe||P.isWebGL2===!0&&Te.morphTargetsCount!==xe)&&(Xe=!0):Xe=!0:Xe=!0:Xe=!0:Xe=!0:(Xe=!0,Te.__version=Ae.version);let tt=Te.currentProgram;Xe===!0&&(tt=bt(Ae,Ue,Fe));let Gt=!1,Wt=!1,mn=!1,vt=tt.getUniforms(),on=Te.uniforms;if(x.useProgram(tt.program)&&(Gt=!0,Wt=!0,mn=!0),Ae.id!==W&&(W=Ae.id,Wt=!0),Gt||L!==Le){vt.setValue(ue,"projectionMatrix",Le.projectionMatrix),vt.setValue(ue,"viewMatrix",Le.matrixWorldInverse);let fn=vt.map.cameraPosition;fn!==void 0&&fn.setValue(ue,V.setFromMatrixPosition(Le.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(ue,"logDepthBufFC",2/(Math.log(Le.far+1)/Math.LN2)),(Ae.isMeshPhongMaterial||Ae.isMeshToonMaterial||Ae.isMeshLambertMaterial||Ae.isMeshBasicMaterial||Ae.isMeshStandardMaterial||Ae.isShaderMaterial)&&vt.setValue(ue,"isOrthographic",Le.isOrthographicCamera===!0),L!==Le&&(L=Le,Wt=!0,mn=!0)}if(Fe.isSkinnedMesh){vt.setOptional(ue,Fe,"bindMatrix"),vt.setOptional(ue,Fe,"bindMatrixInverse");let fn=Fe.skeleton;fn&&(P.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),vt.setValue(ue,"boneTexture",fn.boneTexture,B)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Fe.isBatchedMesh&&(vt.setOptional(ue,Fe,"batchingTexture"),vt.setValue(ue,"batchingTexture",Fe._matricesTexture,B));let Ni=Ne.morphAttributes;(Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0&&P.isWebGL2===!0)&&Ye.update(Fe,Ne,tt),(Wt||Te.receiveShadow!==Fe.receiveShadow)&&(Te.receiveShadow=Fe.receiveShadow,vt.setValue(ue,"receiveShadow",Fe.receiveShadow)),Ae.isMeshGouraudMaterial&&Ae.envMap!==null&&(on.envMap.value=ct,on.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),Wt&&(vt.setValue(ue,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&(bn=mn,(Ln=on).ambientLightColor.needsUpdate=bn,Ln.lightProbe.needsUpdate=bn,Ln.directionalLights.needsUpdate=bn,Ln.directionalLightShadows.needsUpdate=bn,Ln.pointLights.needsUpdate=bn,Ln.pointLightShadows.needsUpdate=bn,Ln.spotLights.needsUpdate=bn,Ln.spotLightShadows.needsUpdate=bn,Ln.rectAreaLights.needsUpdate=bn,Ln.hemisphereLights.needsUpdate=bn),Ze&&Ae.fog===!0&&be.refreshFogUniforms(on,Ze),be.refreshMaterialUniforms(on,Ae,oe,de,F),nr.upload(ue,Tt(Te),on,B));var Ln,bn;if(Ae.isShaderMaterial&&Ae.uniformsNeedUpdate===!0&&(nr.upload(ue,Tt(Te),on,B),Ae.uniformsNeedUpdate=!1),Ae.isSpriteMaterial&&vt.setValue(ue,"center",Fe.center),vt.setValue(ue,"modelViewMatrix",Fe.modelViewMatrix),vt.setValue(ue,"normalMatrix",Fe.normalMatrix),vt.setValue(ue,"modelMatrix",Fe.matrixWorld),Ae.isShaderMaterial||Ae.isRawShaderMaterial){let fn=Ae.uniformsGroups;for(let Da=0,yu=fn.length;Da<yu;Da++)if(P.isWebGL2){let Ll=fn[Da];It.update(Ll,tt),It.bind(Ll,tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tt})(N,le,pe,Me,ge);x.setMaterial(Me,Ve);let G=pe.index,S=1;if(Me.wireframe===!0){if(G=ve.getWireframeAttribute(pe),G===void 0)return;S=2}let D=pe.drawRange,Z=pe.attributes.position,he=D.start*S,me=(D.start+D.count)*S;Oe!==null&&(he=Math.max(he,Oe.start*S),me=Math.min(me,(Oe.start+Oe.count)*S)),G!==null?(he=Math.max(he,0),me=Math.min(me,G.count)):Z!=null&&(he=Math.max(he,0),me=Math.min(me,Z.count));let Ee=me-he;if(Ee<0||Ee===1/0)return;let De;ut.setup(ge,Me,We,pe,G);let Ie=rt;if(G!==null&&(De=re.get(G),Ie=ft,Ie.setIndex(De)),ge.isMesh)Me.wireframe===!0?(x.setLineWidth(Me.wireframeLinewidth*ie()),Ie.setMode(ue.LINES)):Ie.setMode(ue.TRIANGLES);else if(ge.isLine){let Le=Me.linewidth;Le===void 0&&(Le=1),x.setLineWidth(Le*ie()),ge.isLineSegments?Ie.setMode(ue.LINES):ge.isLineLoop?Ie.setMode(ue.LINE_LOOP):Ie.setMode(ue.LINE_STRIP)}else ge.isPoints?Ie.setMode(ue.POINTS):ge.isSprite&&Ie.setMode(ue.TRIANGLES);if(ge.isBatchedMesh)Ie.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else if(ge.isInstancedMesh)Ie.renderInstances(he,Ee,ge.count);else if(pe.isInstancedBufferGeometry){let Le=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ue=Math.min(pe.instanceCount,Le);Ie.renderInstances(he,Ee,Ue)}else Ie.render(he,Ee)},this.compile=function(N,le,pe=null){pe===null&&(pe=N),m=ze.get(pe),m.init(),_.push(m),pe.traverseVisible((function(ge){ge.isLight&&ge.layers.test(le.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))})),N!==pe&&N.traverseVisible((function(ge){ge.isLight&&ge.layers.test(le.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))})),m.setupLights(v._useLegacyLights);let Me=new Set;return N.traverse((function(ge){let Oe=ge.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let We=Oe[Ve];Ht(We,pe,ge),Me.add(We)}else Ht(Oe,pe,ge),Me.add(Oe)})),_.pop(),m=null,Me},this.compileAsync=function(N,le,pe=null){let Me=this.compile(N,le,pe);return new Promise((ge=>{function Oe(){Me.forEach((function(Ve){k.get(Ve).currentProgram.isReady()&&Me.delete(Ve)})),Me.size!==0?setTimeout(Oe,10):ge(N)}ce.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)}))};let dn=null;function pn(){zt.stop()}function an(){zt.start()}let zt=new yh;function gt(N,le,pe,Me){if(N.visible===!1)return;if(N.layers.test(le.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(le);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||w.intersectsSprite(N)){Me&&V.setFromMatrixPosition(N.matrixWorld).applyMatrix4(U);let Oe=_e.update(N),Ve=N.material;Ve.visible&&g.push(N,Oe,Ve,pe,V.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||w.intersectsObject(N))){let Oe=_e.update(N),Ve=N.material;if(Me&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),V.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),V.copy(Oe.boundingSphere.center)),V.applyMatrix4(N.matrixWorld).applyMatrix4(U)),Array.isArray(Ve)){let We=Oe.groups;for(let G=0,S=We.length;G<S;G++){let D=We[G],Z=Ve[D.materialIndex];Z&&Z.visible&&g.push(N,Oe,Z,pe,V.z,D)}}else Ve.visible&&g.push(N,Oe,Ve,pe,V.z,null)}}let ge=N.children;for(let Oe=0,Ve=ge.length;Oe<Ve;Oe++)gt(ge[Oe],le,pe,Me)}function Mt(N,le,pe,Me){let ge=N.opaque,Oe=N.transmissive,Ve=N.transparent;m.setupLightsView(pe),T===!0&&Pe.setGlobalState(v.clippingPlanes,pe),Oe.length>0&&(function(We,G,S,D){if((S.isScene===!0?S.overrideMaterial:null)!==null)return;let he=P.isWebGL2;F===null&&(F=new An(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Ri:Yn,minFilter:sr,samples:he?4:0})),v.getDrawingBufferSize(j),he?F.setSize(j.x,j.y):F.setSize(Vs(j.x),Vs(j.y));let me=v.getRenderTarget();v.setRenderTarget(F),v.getClearColor(K),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();let Ee=v.toneMapping;v.toneMapping=si,mt(We,S,D),B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F);let De=!1;for(let Ie=0,Le=G.length;Ie<Le;Ie++){let Ue=G[Ie],Ne=Ue.object,Ae=Ue.geometry,Fe=Ue.material,Ze=Ue.group;if(Fe.side===2&&Ne.layers.test(D.layers)){let nt=Fe.side;Fe.side=nn,Fe.needsUpdate=!0,Rt(Ne,S,D,Ae,Fe,Ze),Fe.side=nt,Fe.needsUpdate=!0,De=!0}}De===!0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),v.setRenderTarget(me),v.setClearColor(K,q),v.toneMapping=Ee})(ge,Oe,le,pe),Me&&x.viewport(O.copy(Me)),ge.length>0&&mt(ge,le,pe),Oe.length>0&&mt(Oe,le,pe),Ve.length>0&&mt(Ve,le,pe),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function mt(N,le,pe){let Me=le.isScene===!0?le.overrideMaterial:null;for(let ge=0,Oe=N.length;ge<Oe;ge++){let Ve=N[ge],We=Ve.object,G=Ve.geometry,S=Me===null?Ve.material:Me,D=Ve.group;We.layers.test(pe.layers)&&Rt(We,le,pe,G,S,D)}}function Rt(N,le,pe,Me,ge,Oe){N.onBeforeRender(v,le,pe,Me,ge,Oe),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ge.onBeforeRender(v,le,pe,Me,N,Oe),ge.transparent===!0&&ge.side===2&&ge.forceSinglePass===!1?(ge.side=nn,ge.needsUpdate=!0,v.renderBufferDirect(pe,le,Me,ge,N,Oe),ge.side=oi,ge.needsUpdate=!0,v.renderBufferDirect(pe,le,Me,ge,N,Oe),ge.side=2):v.renderBufferDirect(pe,le,Me,ge,N,Oe),N.onAfterRender(v,le,pe,Me,ge,Oe)}function bt(N,le,pe){le.isScene!==!0&&(le=Y);let Me=k.get(N),ge=m.state.lights,Oe=m.state.shadowsArray,Ve=ge.state.version,We=Se.getParameters(N,ge.state,Oe,le,pe),G=Se.getProgramCacheKey(We),S=Me.programs;Me.environment=N.isMeshStandardMaterial?le.environment:null,Me.fog=le.fog,Me.envMap=(N.isMeshStandardMaterial?se:Q).get(N.envMap||Me.environment),S===void 0&&(N.addEventListener("dispose",un),S=new Map,Me.programs=S);let D=S.get(G);if(D!==void 0){if(Me.currentProgram===D&&Me.lightsStateVersion===Ve)return Pn(N,We),D}else We.uniforms=Se.getUniforms(N),N.onBuild(pe,We,v),N.onBeforeCompile(We,v),D=Se.acquireProgram(We,G),S.set(G,D),Me.uniforms=We.uniforms;let Z=Me.uniforms;return(N.isShaderMaterial||N.isRawShaderMaterial)&&N.clipping!==!0||(Z.clippingPlanes=Pe.uniform),Pn(N,We),Me.needsLights=(function(he){return he.isMeshLambertMaterial||he.isMeshToonMaterial||he.isMeshPhongMaterial||he.isMeshStandardMaterial||he.isShadowMaterial||he.isShaderMaterial&&he.lights===!0})(N),Me.lightsStateVersion=Ve,Me.needsLights&&(Z.ambientLightColor.value=ge.state.ambient,Z.lightProbe.value=ge.state.probe,Z.directionalLights.value=ge.state.directional,Z.directionalLightShadows.value=ge.state.directionalShadow,Z.spotLights.value=ge.state.spot,Z.spotLightShadows.value=ge.state.spotShadow,Z.rectAreaLights.value=ge.state.rectArea,Z.ltc_1.value=ge.state.rectAreaLTC1,Z.ltc_2.value=ge.state.rectAreaLTC2,Z.pointLights.value=ge.state.point,Z.pointLightShadows.value=ge.state.pointShadow,Z.hemisphereLights.value=ge.state.hemi,Z.directionalShadowMap.value=ge.state.directionalShadowMap,Z.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Z.spotShadowMap.value=ge.state.spotShadowMap,Z.spotLightMatrix.value=ge.state.spotLightMatrix,Z.spotLightMap.value=ge.state.spotLightMap,Z.pointShadowMap.value=ge.state.pointShadowMap,Z.pointShadowMatrix.value=ge.state.pointShadowMatrix),Me.currentProgram=D,Me.uniformsList=null,D}function Tt(N){if(N.uniformsList===null){let le=N.currentProgram.getUniforms();N.uniformsList=nr.seqWithValue(le.seq,N.uniforms)}return N.uniformsList}function Pn(N,le){let pe=k.get(N);pe.outputColorSpace=le.outputColorSpace,pe.batching=le.batching,pe.instancing=le.instancing,pe.instancingColor=le.instancingColor,pe.skinning=le.skinning,pe.morphTargets=le.morphTargets,pe.morphNormals=le.morphNormals,pe.morphColors=le.morphColors,pe.morphTargetsCount=le.morphTargetsCount,pe.numClippingPlanes=le.numClippingPlanes,pe.numIntersection=le.numClipIntersection,pe.vertexAlphas=le.vertexAlphas,pe.vertexTangents=le.vertexTangents,pe.toneMapping=le.toneMapping}zt.setAnimationLoop((function(N){dn&&dn(N)})),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(N){dn=N,ot.setAnimationLoop(N),N===null?zt.stop():zt.start()},ot.addEventListener("sessionstart",pn),ot.addEventListener("sessionend",an),this.render=function(N,le){if(le!==void 0&&le.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(le),le=ot.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,le,A),m=ze.get(N,_.length),m.init(),_.push(m),U.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),w.setFromProjectionMatrix(U),z=this.localClippingEnabled,T=Pe.init(this.clippingPlanes,z),g=Re.get(N,y.length),g.init(),y.push(g),gt(N,le,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,ae),this.info.render.frame++,T===!0&&Pe.beginShadows();let pe=m.state.shadowsArray;if(ke.render(pe,N,le),T===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(g,N),m.setupLights(v._useLegacyLights),le.isArrayCamera){let Me=le.cameras;for(let ge=0,Oe=Me.length;ge<Oe;ge++){let Ve=Me[ge];Mt(g,N,Ve,Ve.viewport)}}else Mt(g,N,le);A!==null&&(B.updateMultisampleRenderTarget(A),B.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(v,N,le),ut.resetDefaultState(),W=-1,L=null,_.pop(),m=_.length>0?_[_.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,le,pe){k.get(N.texture).__webglTexture=le,k.get(N.depthTexture).__webglTexture=pe;let Me=k.get(N);Me.__hasExternalTextures=!0,Me.__hasExternalTextures&&(Me.__autoAllocateDepthBuffer=pe===void 0,Me.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Me.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,le){let pe=k.get(N);pe.__webglFramebuffer=le,pe.__useDefaultFramebuffer=le===void 0},this.setRenderTarget=function(N,le=0,pe=0){A=N,E=le,b=pe;let Me=!0,ge=null,Oe=!1,Ve=!1;if(N){let We=k.get(N);We.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(ue.FRAMEBUFFER,null),Me=!1):We.__webglFramebuffer===void 0?B.setupRenderTarget(N):We.__hasExternalTextures&&B.rebindTextures(N,k.get(N.texture).__webglTexture,k.get(N.depthTexture).__webglTexture);let G=N.texture;(G.isData3DTexture||G.isDataArrayTexture||G.isCompressedArrayTexture)&&(Ve=!0);let S=k.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(ge=Array.isArray(S[le])?S[le][pe]:S[le],Oe=!0):ge=P.isWebGL2&&N.samples>0&&B.useMultisampledRTT(N)===!1?k.get(N).__webglMultisampledFramebuffer:Array.isArray(S)?S[pe]:S,O.copy(N.viewport),te.copy(N.scissor),C=N.scissorTest}else O.copy(I).multiplyScalar(oe).floor(),te.copy(X).multiplyScalar(oe).floor(),C=we;if(x.bindFramebuffer(ue.FRAMEBUFFER,ge)&&P.drawBuffers&&Me&&x.drawBuffers(N,ge),x.viewport(O),x.scissor(te),x.setScissorTest(C),Oe){let We=k.get(N.texture);ue.framebufferTexture2D(ue.FRAMEBUFFER,ue.COLOR_ATTACHMENT0,ue.TEXTURE_CUBE_MAP_POSITIVE_X+le,We.__webglTexture,pe)}else if(Ve){let We=k.get(N.texture),G=le||0;ue.framebufferTextureLayer(ue.FRAMEBUFFER,ue.COLOR_ATTACHMENT0,We.__webglTexture,pe||0,G)}W=-1},this.readRenderTargetPixels=function(N,le,pe,Me,ge,Oe,Ve){if(!N||!N.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){x.bindFramebuffer(ue.FRAMEBUFFER,We);try{let G=N.texture,S=G.format,D=G.type;if(S!==vn&&pt.convert(S)!==ue.getParameter(ue.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Z=D===Ri&&(ce.has("EXT_color_buffer_half_float")||P.isWebGL2&&ce.has("EXT_color_buffer_float"));if(!(D===Yn||pt.convert(D)===ue.getParameter(ue.IMPLEMENTATION_COLOR_READ_TYPE)||D===Dn&&(P.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float"))||Z))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");le>=0&&le<=N.width-Me&&pe>=0&&pe<=N.height-ge&&ue.readPixels(le,pe,Me,ge,pt.convert(S),pt.convert(D),Oe)}finally{let G=A!==null?k.get(A).__webglFramebuffer:null;x.bindFramebuffer(ue.FRAMEBUFFER,G)}}},this.copyFramebufferToTexture=function(N,le,pe=0){let Me=Math.pow(2,-pe),ge=Math.floor(le.image.width*Me),Oe=Math.floor(le.image.height*Me);B.setTexture2D(le,0),ue.copyTexSubImage2D(ue.TEXTURE_2D,pe,0,0,N.x,N.y,ge,Oe),x.unbindTexture()},this.copyTextureToTexture=function(N,le,pe,Me=0){let ge=le.image.width,Oe=le.image.height,Ve=pt.convert(pe.format),We=pt.convert(pe.type);B.setTexture2D(pe,0),ue.pixelStorei(ue.UNPACK_FLIP_Y_WEBGL,pe.flipY),ue.pixelStorei(ue.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),ue.pixelStorei(ue.UNPACK_ALIGNMENT,pe.unpackAlignment),le.isDataTexture?ue.texSubImage2D(ue.TEXTURE_2D,Me,N.x,N.y,ge,Oe,Ve,We,le.image.data):le.isCompressedTexture?ue.compressedTexSubImage2D(ue.TEXTURE_2D,Me,N.x,N.y,le.mipmaps[0].width,le.mipmaps[0].height,Ve,le.mipmaps[0].data):ue.texSubImage2D(ue.TEXTURE_2D,Me,N.x,N.y,Ve,We,le.image),Me===0&&pe.generateMipmaps&&ue.generateMipmap(ue.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(N,le,pe,Me,ge=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Oe=N.max.x-N.min.x+1,Ve=N.max.y-N.min.y+1,We=N.max.z-N.min.z+1,G=pt.convert(Me.format),S=pt.convert(Me.type),D;if(Me.isData3DTexture)B.setTexture3D(Me,0),D=ue.TEXTURE_3D;else{if(!Me.isDataArrayTexture&&!Me.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");B.setTexture2DArray(Me,0),D=ue.TEXTURE_2D_ARRAY}ue.pixelStorei(ue.UNPACK_FLIP_Y_WEBGL,Me.flipY),ue.pixelStorei(ue.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Me.premultiplyAlpha),ue.pixelStorei(ue.UNPACK_ALIGNMENT,Me.unpackAlignment);let Z=ue.getParameter(ue.UNPACK_ROW_LENGTH),he=ue.getParameter(ue.UNPACK_IMAGE_HEIGHT),me=ue.getParameter(ue.UNPACK_SKIP_PIXELS),Ee=ue.getParameter(ue.UNPACK_SKIP_ROWS),De=ue.getParameter(ue.UNPACK_SKIP_IMAGES),Ie=pe.isCompressedTexture?pe.mipmaps[ge]:pe.image;ue.pixelStorei(ue.UNPACK_ROW_LENGTH,Ie.width),ue.pixelStorei(ue.UNPACK_IMAGE_HEIGHT,Ie.height),ue.pixelStorei(ue.UNPACK_SKIP_PIXELS,N.min.x),ue.pixelStorei(ue.UNPACK_SKIP_ROWS,N.min.y),ue.pixelStorei(ue.UNPACK_SKIP_IMAGES,N.min.z),pe.isDataTexture||pe.isData3DTexture?ue.texSubImage3D(D,ge,le.x,le.y,le.z,Oe,Ve,We,G,S,Ie.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ue.compressedTexSubImage3D(D,ge,le.x,le.y,le.z,Oe,Ve,We,G,Ie.data)):ue.texSubImage3D(D,ge,le.x,le.y,le.z,Oe,Ve,We,G,S,Ie),ue.pixelStorei(ue.UNPACK_ROW_LENGTH,Z),ue.pixelStorei(ue.UNPACK_IMAGE_HEIGHT,he),ue.pixelStorei(ue.UNPACK_SKIP_PIXELS,me),ue.pixelStorei(ue.UNPACK_SKIP_ROWS,Ee),ue.pixelStorei(ue.UNPACK_SKIP_IMAGES,De),ge===0&&Me.generateMipmaps&&ue.generateMipmap(D),x.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),x.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,x.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===ma?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ai:mh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Nt:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Bo=class extends Wr{};Bo.prototype.isWebGL1Renderer=!0;var Qs=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Mm=new H;var bm=new H,Sm=new H,wm=new H,Em=new Ce,Tm=new Ce,Am=new Qe,Rm=new H,Cm=new H,Pm=new H,Lm=new Ce,Im=new Ce,Um=new Ce;var Dm=new H,Nm=new H;var Om=new H,Fm=new Lt,Bm=new Lt,zm=new H,km=new Qe,Gm=new H,Vm=new Nn,Hm=new Qe,Wm=new lr;var $s=class extends rn{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,p){super(null,a,o,c,l,h,i,s,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xm=new Qe,jm=new Qe;var qm=new Qe,Ym=new Qe;var Zm=new xn,Jm=new Qe,Km=new tn,Qm=new Nn;var zo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var $m=new Qe,ef=new Qe,tf=new Qe,nf=new Qe,rf=new hr,sf=new xn,af=new Nn,of=new H,lf=new zo,cf=new tn;var hf=new H,uf=new H,df=new Qe,pf=new lr,mf=new Nn;var ff=new H,gf=new H;var vf=new Qe,_f=new lr,yf=new Nn,xf=new H;var ea=class extends rn{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Ce:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,i=[],s=[],a=[],o=new H,c=new Qe;for(let d=0;d<=e;d++){let f=d/e;i[d]=this.getTangentAt(f,new H)}s[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ot(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,f))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ot(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],d*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends Mn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Ce,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends Xr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,d*=h,i(a,o,p,d)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Cs=new H,ho=new xl,uo=new xl,po=new xl,jr=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),o=Cs);let u=i[l%s],p=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(c),d);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),ho.initNonuniformCatmullRom(o.x,u.x,p.x,c.x,f,g,m),uo.initNonuniformCatmullRom(o.y,u.y,p.y,c.y,f,g,m),po.initNonuniformCatmullRom(o.z,u.z,p.z,c.z,f,g,m)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(o.x,u.x,p.x,c.x,this.tension),uo.initCatmullRom(o.y,u.y,p.y,c.y,this.tension),po.initCatmullRom(o.z,u.z,p.z,c.z,this.tension));return n.set(ho.calc(h),uo.calc(h),po.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yc(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Or(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Fr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ta=class extends Mn{constructor(e=new Ce,t=new Ce,n=new Ce,i=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ce){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Mn{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,a.x,o.x),Fr(e,i.y,s.y,a.y,o.y),Fr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Mn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Mn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Mn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Mn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Or(e,i.x,s.x,a.x),Or(e,i.y,s.y,a.y),Or(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Yc(o,c.x,l.x,h.x,u.x),Yc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ce().fromArray(i))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:jr,CubicBezierCurve:ta,CubicBezierCurve3:Go,EllipseCurve:Xr,LineCurve:na,LineCurve3:Vo,QuadraticBezierCurve:ia,QuadraticBezierCurve3:ra,SplineCurve:sa}),Ho=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new aa[i.type]().fromJSON(i))}return this}},Ci=class extends Ho{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new na(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ia(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ta(this.currentPoint.clone(),new Ce(e,t),new Ce(n,i),new Ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Xr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fr=class r extends St{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ot(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new H,p=new Ce,d=new H,f=new H,g=new H,m=0,y=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,d.x=1*y,d.y=-m,d.z=0*y,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,d.x=1*y,d.y=-m,d.z=0*y,f.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(f)}for(let _=0;_<=t;_++){let v=n+_*h*i,M=Math.sin(v),E=Math.cos(v);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*E,a.push(u.x,u.y,u.z),p.x=_/t,p.y=b/(e.length-1),o.push(p.x,p.y);let A=c[3*b+0]*M,W=c[3*b+1],L=c[3*b+0]*E;l.push(A,W,L)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,E=M,b=M+e.length,A=M+e.length+1,W=M+1;s.push(E,b,W),s.push(A,W,b)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Wo=class r extends fr{constructor(e=1,t=1,n=4,i=8){let s=new Ci;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Xo=class r extends St{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new H,h=new Ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gr=class r extends St{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],d=[],f=0,g=[],m=n/2,y=0;function _(v){let M=f,E=new Ce,b=new H,A=0,W=v===!0?e:t,L=v===!0?1:-1;for(let te=1;te<=i;te++)u.push(0,m*L,0),p.push(0,L,0),d.push(.5,.5),f++;let O=f;for(let te=0;te<=i;te++){let C=te/i*c+o,K=Math.cos(C),q=Math.sin(C);b.x=W*q,b.y=m*L,b.z=W*K,u.push(b.x,b.y,b.z),p.push(0,L,0),E.x=.5*K+.5,E.y=.5*q*L+.5,d.push(E.x,E.y),f++}for(let te=0;te<i;te++){let C=M+te,K=O+te;v===!0?h.push(K,K+1,C):h.push(K+1,K,C),A+=3}l.addGroup(y,A,v===!0?1:2),y+=A}(function(){let v=new H,M=new H,E=0,b=(t-e)/n;for(let A=0;A<=s;A++){let W=[],L=A/s,O=L*(t-e)+e;for(let te=0;te<=i;te++){let C=te/i,K=C*c+o,q=Math.sin(K),ne=Math.cos(K);M.x=O*q,M.y=-L*n+m,M.z=O*ne,u.push(M.x,M.y,M.z),v.set(q,b,ne).normalize(),p.push(v.x,v.y,v.z),d.push(C,1-L),W.push(f++)}g.push(W)}for(let A=0;A<i;A++)for(let W=0;W<s;W++){let L=g[W][A],O=g[W+1][A],te=g[W+1][A+1],C=g[W][A+1];h.push(L,O,C),h.push(O,te,C),E+=6}l.addGroup(y,E,0),y+=E})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class r extends gr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pi=class r extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,d,f,g){let m=g+1,y=[];for(let _=0;_<=m;_++){y[_]=[];let v=p.clone().lerp(f,_/m),M=d.clone().lerp(f,_/m),E=m-_;for(let b=0;b<=E;b++)y[_][b]=b===0&&_===m?v:v.clone().lerp(M,b/E)}for(let _=0;_<m;_++)for(let v=0;v<2*(m-_)-1;v++){let M=Math.floor(v/2);v%2==0?(c(y[_][M+1]),c(y[_+1][M]),c(y[_][M])):(c(y[_][M+1]),c(y[_+1][M+1]),c(y[_+1][M]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,d){let f=3*p;d.x=e[f+0],d.y=e[f+1],d.z=e[f+2]}function h(p,d,f,g){g<0&&p.x===1&&(a[d]=p.x-1),f.x===0&&f.z===0&&(a[d]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}(function(p){let d=new H,f=new H,g=new H;for(let m=0;m<t.length;m+=3)l(t[m+0],d),l(t[m+1],f),l(t[m+2],g),o(d,f,g,p)})(i),(function(p){let d=new H;for(let f=0;f<s.length;f+=3)d.x=s[f+0],d.y=s[f+1],d.z=s[f+2],d.normalize().multiplyScalar(p),s[f+0]=d.x,s[f+1]=d.y,s[f+2]=d.z})(n),(function(){let p=new H;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let g=u(p)/2/Math.PI+.5,m=(d=p,Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))/Math.PI+.5);a.push(g,1-m)}var d;(function(){let f=new H,g=new H,m=new H,y=new H,_=new Ce,v=new Ce,M=new Ce;for(let E=0,b=0;E<s.length;E+=9,b+=6){f.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),m.set(s[E+6],s[E+7],s[E+8]),_.set(a[b+0],a[b+1]),v.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),y.copy(f).add(g).add(m).divideScalar(3);let A=u(y);h(_,b+0,f,A),h(v,b+2,g,A),h(M,b+4,m,A)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],_=Math.max(g,m,y),v=Math.min(g,m,y);_>.9&&v<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},qo=class r extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ps=new H,Ls=new H,mo=new H,Is=new wi,Yo=class extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(er*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:g,b:m,c:y}=Is;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),y.fromBufferAttribute(o,l[2]),Is.getNormal(mo),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,M=u[_],E=u[v],b=Is[h[_]],A=Is[h[v]],W=`${M}_${E}`,L=`${E}_${M}`;L in p&&p[L]?(mo.dot(p[L].normal)<=s&&(d.push(b.x,b.y,b.z),d.push(A.x,A.y,A.z)),p[L]=null):W in p||(p[W]={index0:l[_],index1:l[v],normal:mo.clone()})}}for(let f in p)if(p[f]){let{index0:g,index1:m}=p[f];Ps.fromBufferAttribute(o,g),Ls.fromBufferAttribute(o,m),d.push(Ps.x,Ps.y,Ps.z),d.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new Je(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vr=class extends Ci{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ci().fromJSON(i))}return this}},Mp=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Zc(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,p,d;if(n&&(s=(function(f,g,m,y){let _=[],v,M,E,b,A;for(v=0,M=g.length;v<M;v++)E=g[v]*y,b=v<M-1?g[v+1]*y:f.length,A=Zc(f,E,b,y,!1),A===A.next&&(A.steiner=!0),_.push(Cp(A));for(_.sort(Tp),v=0;v<_.length;v++)m=Ap(_[v],m);return m})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<i;f+=t)u=r[f],p=r[f+1],u<o&&(o=u),p<c&&(c=p),u>l&&(l=u),p>h&&(h=p);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return qr(s,a,t,o,c,d,0),a};function Zc(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let p=c,d=l-h;p<l;p+=h)u+=(o[d]-o[p])*(o[p+1]+o[d+1]),d=p;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Jc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Jc(s,r[s],r[s+1],a);return a&&ga(a,a.next)&&(Zr(a),a=a.next),a}function Li(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ga(n,n.next)&&xt(n.prev,n,n.next)!==0)n=n.next;else{if(Zr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,p,d){let f=h;do f.z===0&&(f.z=Zo(f.x,f.y,u,p,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,y,_,v,M,E,b,A,W=1;do{for(y=g,g=null,M=null,E=0;y;){for(E++,_=y,b=0,m=0;m<W&&(b++,_=_.nextZ,_);m++);for(A=W;b>0||A>0&&_;)b!==0&&(A===0||!_||y.z<=_.z)?(v=y,y=y.nextZ,b--):(v=_,_=_.nextZ,A--),M?M.nextZ=v:g=v,v.prevZ=M,M=v;y=_}M.nextZ=null,W*=2}while(E>1)})(f)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?Sp(r,n,i,s):bp(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zr(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?qr(r=wp(Li(r),e,t),e,t,n,i,s,2):a===2&&Ep(r,e,t,n,i,s):qr(Li(r),e,t,n,i,s,1);break}}function bp(r){let e=r.prev,t=r,n=r.next;if(xt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,p=i>s?i>a?i:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=u&&f.y<=d&&$i(i,o,s,c,a,l,f.x,f.y)&&xt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Sp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(xt(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,p=a.y,d=o<c?o<l?o:l:c<l?c:l,f=h<u?h<p?h:p:u<p?u:p,g=o>c?o>l?o:l:c>l?c:l,m=h>u?h>p?h:p:u>p?u:p,y=Zo(d,f,e,t,n),_=Zo(g,m,e,t,n),v=r.prevZ,M=r.nextZ;for(;v&&v.z>=y&&M&&M.z<=_;){if(v.x>=d&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&$i(o,h,c,u,l,p,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&$i(o,h,c,u,l,p,M.x,M.y)&&xt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=y;){if(v.x>=d&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&$i(o,h,c,u,l,p,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&$i(o,h,c,u,l,p,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function wp(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ga(i,s)&&Eh(i,n,n.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return Li(n)}function Ep(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pp(a,o)){let c=Th(a,o);return a=Li(a,a.next),c=Li(c,c.next),qr(a,e,t,n,i,s,0),void qr(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Tp(r,e){return r.x-e.x}function Ap(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,p=a.x,d=a.y,f,g=1/0;o=a;do l>=o.x&&o.x>=p&&l!==o.x&&$i(h<d?l:c,h,p,d,h<d?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),Yr(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Rp(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Th(t,r);return Li(n,n.next),Li(t,t.next)}function Rp(r,e){return xt(r.prev,r,e.prev)<0&&xt(e.next,r,r.next)<0}function Zo(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Cp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $i(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Pp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Eh(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Yr(r,e)&&Yr(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(xt(r.prev,r,e.prev)||xt(r,e.prev,e))||ga(r,e)&&xt(r.prev,r,r.next)>0&&xt(e.prev,e,e.next)>0)}function xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ga(r,e){return r.x===e.x&&r.y===e.y}function Eh(r,e,t,n){let i=Ds(xt(r,e,t)),s=Ds(xt(r,e,n)),a=Ds(xt(t,n,r)),o=Ds(xt(t,n,e));return i!==s&&a!==o||!(i!==0||!Us(r,t,e))||!(s!==0||!Us(r,n,e))||!(a!==0||!Us(t,r,n))||!(o!==0||!Us(t,e,n))}function Us(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ds(r){return r>0?1:r<0?-1:0}function Yr(r,e){return xt(r.prev,r,r.next)<0?xt(r,e,r.next)>=0&&xt(r,r.prev,e)>=0:xt(r,e,r.prev)<0||xt(r,r.next,e)<0}function Th(r,e){let t=new Jo(r.i,r.x,r.y),n=new Jo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jc(r,e,t,n){let i=new Jo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ai=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Kc(e),Qc(n,e);let a=e.length;t.forEach(Kc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Qc(n,t[c]);let o=Mp(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Kc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Qc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Jr=class r extends St{constructor(e=new vr([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Lp,v,M,E,b,A,W=!1;y&&(v=y.getSpacedPoints(h),W=!0,p=!1,M=y.computeFrenetFrames(h,!1),E=new H,b=new H,A=new H),p||(m=0,d=0,f=0,g=0);let L=o.extractPoints(l),O=L.shape,te=L.holes;if(!ai.isClockWise(O)){O=O.reverse();for(let V=0,Y=te.length;V<Y;V++){let ie=te[V];ai.isClockWise(ie)&&(te[V]=ie.reverse())}}let C=ai.triangulateShape(O,te),K=O;for(let V=0,Y=te.length;V<Y;V++){let ie=te[V];O=O.concat(ie)}function q(V,Y,ie){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(Y,ie)}let ne=O.length,de=C.length;function oe(V,Y,ie){let ce,P,x,J=V.x-Y.x,k=V.y-Y.y,B=ie.x-V.x,Q=ie.y-V.y,se=J*J+k*k,re=J*Q-k*B;if(Math.abs(re)>Number.EPSILON){let ve=Math.sqrt(se),_e=Math.sqrt(B*B+Q*Q),Se=Y.x-k/ve,be=Y.y+J/ve,Re=((ie.x-Q/_e-Se)*Q-(ie.y+B/_e-be)*B)/(J*Q-k*B);ce=Se+J*Re-V.x,P=be+k*Re-V.y;let ze=ce*ce+P*P;if(ze<=2)return new Ce(ce,P);x=Math.sqrt(ze/2)}else{let ve=!1;J>Number.EPSILON?B>Number.EPSILON&&(ve=!0):J<-Number.EPSILON?B<-Number.EPSILON&&(ve=!0):Math.sign(k)===Math.sign(Q)&&(ve=!0),ve?(ce=-k,P=J,x=Math.sqrt(se)):(ce=J,P=k,x=Math.sqrt(se/2))}return new Ce(ce/x,P/x)}let $=[];for(let V=0,Y=K.length,ie=Y-1,ce=V+1;V<Y;V++,ie++,ce++)ie===Y&&(ie=0),ce===Y&&(ce=0),$[V]=oe(K[V],K[ie],K[ce]);let ae=[],I,X=$.concat();for(let V=0,Y=te.length;V<Y;V++){let ie=te[V];I=[];for(let ce=0,P=ie.length,x=P-1,J=ce+1;ce<P;ce++,x++,J++)x===P&&(x=0),J===P&&(J=0),I[ce]=oe(ie[ce],ie[x],ie[J]);ae.push(I),X=X.concat(I)}for(let V=0;V<m;V++){let Y=V/m,ie=d*Math.cos(Y*Math.PI/2),ce=f*Math.sin(Y*Math.PI/2)+g;for(let P=0,x=K.length;P<x;P++){let J=q(K[P],$[P],ce);T(J.x,J.y,-ie)}for(let P=0,x=te.length;P<x;P++){let J=te[P];I=ae[P];for(let k=0,B=J.length;k<B;k++){let Q=q(J[k],I[k],ce);T(Q.x,Q.y,-ie)}}}let we=f+g;for(let V=0;V<ne;V++){let Y=p?q(O[V],X[V],we):O[V];W?(b.copy(M.normals[0]).multiplyScalar(Y.x),E.copy(M.binormals[0]).multiplyScalar(Y.y),A.copy(v[0]).add(b).add(E),T(A.x,A.y,A.z)):T(Y.x,Y.y,0)}for(let V=1;V<=h;V++)for(let Y=0;Y<ne;Y++){let ie=p?q(O[Y],X[Y],we):O[Y];W?(b.copy(M.normals[V]).multiplyScalar(ie.x),E.copy(M.binormals[V]).multiplyScalar(ie.y),A.copy(v[V]).add(b).add(E),T(A.x,A.y,A.z)):T(ie.x,ie.y,u/h*V)}for(let V=m-1;V>=0;V--){let Y=V/m,ie=d*Math.cos(Y*Math.PI/2),ce=f*Math.sin(Y*Math.PI/2)+g;for(let P=0,x=K.length;P<x;P++){let J=q(K[P],$[P],ce);T(J.x,J.y,u+ie)}for(let P=0,x=te.length;P<x;P++){let J=te[P];I=ae[P];for(let k=0,B=J.length;k<B;k++){let Q=q(J[k],I[k],ce);W?T(Q.x,Q.y+v[h-1].y,v[h-1].x+ie):T(Q.x,Q.y,u+ie)}}}function w(V,Y){let ie=V.length;for(;--ie>=0;){let ce=ie,P=ie-1;P<0&&(P=V.length-1);for(let x=0,J=h+2*m;x<J;x++){let k=ne*x,B=ne*(x+1);F(Y+ce+k,Y+P+k,Y+P+B,Y+ce+B)}}}function T(V,Y,ie){c.push(V),c.push(Y),c.push(ie)}function z(V,Y,ie){U(V),U(Y),U(ie);let ce=i.length/3,P=_.generateTopUV(n,i,ce-3,ce-2,ce-1);j(P[0]),j(P[1]),j(P[2])}function F(V,Y,ie,ce){U(V),U(Y),U(ce),U(Y),U(ie),U(ce);let P=i.length/3,x=_.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);j(x[0]),j(x[1]),j(x[3]),j(x[1]),j(x[2]),j(x[3])}function U(V){i.push(c[3*V+0]),i.push(c[3*V+1]),i.push(c[3*V+2])}function j(V){s.push(V.x),s.push(V.y)}(function(){let V=i.length/3;if(p){let Y=0,ie=ne*Y;for(let ce=0;ce<de;ce++){let P=C[ce];z(P[2]+ie,P[1]+ie,P[0]+ie)}Y=h+2*m,ie=ne*Y;for(let ce=0;ce<de;ce++){let P=C[ce];z(P[0]+ie,P[1]+ie,P[2]+ie)}}else{for(let Y=0;Y<de;Y++){let ie=C[Y];z(ie[2],ie[1],ie[0])}for(let Y=0;Y<de;Y++){let ie=C[Y];z(ie[0]+ne*h,ie[1]+ne*h,ie[2]+ne*h)}}n.addGroup(V,i.length/3-V,0)})(),(function(){let V=i.length/3,Y=0;w(K,Y),Y+=K.length;for(let ie=0,ce=te.length;ie<ce;ie++){let P=te[ie];w(P,Y),Y+=P.length}n.addGroup(V,i.length/3-V,1)})()}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new aa[i.type]().fromJSON(i)),new r(n,e.options)}},Lp={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new Ce(s,a),new Ce(o,c),new Ce(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],p=e[3*i],d=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ce(a,1-c),new Ce(l,1-u),new Ce(p,1-f),new Ce(g,1-y)]:[new Ce(o,1-c),new Ce(h,1-u),new Ce(d,1-f),new Ce(m,1-y)]}},Ko=class r extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qo=class r extends Pi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$o=class r extends St{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,p=(t-e)/(i=Math.max(1,i)),d=new H,f=new Ce;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let y=s+m/n*a;d.x=u*Math.cos(y),d.y=u*Math.sin(y),c.push(d.x,d.y,d.z),l.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}u+=p}for(let g=0;g<i;g++){let m=g*(n+1);for(let y=0;y<n;y++){let _=y+m,v=_,M=_+n+1,E=_+n+2,b=_+1;o.push(v,M,b),o.push(M,E,b)}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},el=class r extends St{constructor(e=new vr([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,p=h.extractPoints(t),d=p.shape,f=p.holes;ai.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,y=f.length;m<y;m++){let _=f[m];ai.isClockWise(_)===!0&&(f[m]=_.reverse())}let g=ai.triangulateShape(d,f);for(let m=0,y=f.length;m<y;m++){let _=f[m];d=d.concat(_)}for(let m=0,y=d.length;m<y;m++){let _=d[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,y=g.length;m<y;m++){let _=g[m],v=_[0]+u,M=_[1]+u,E=_[2]+u;n.push(v,M,E),c+=3}}this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Kr=class r extends St{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new H,p=new H,d=[],f=[],g=[],m=[];for(let y=0;y<=n;y++){let _=[],v=y/n,M=0;y===0&&a===0?M=.5/t:y===n&&c===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){let b=E/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),m.push(b+M,1-v),_.push(l++)}h.push(_)}for(let y=0;y<n;y++)for(let _=0;_<t;_++){let v=h[y][_+1],M=h[y][_],E=h[y+1][_],b=h[y+1][_+1];(y!==0||a>0)&&d.push(v,M,b),(y!==n-1||c<Math.PI)&&d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},tl=class r extends Pi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qr=class r extends St{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new H,u=new H,p=new H;for(let d=0;d<=n;d++)for(let f=0;f<=i;f++){let g=f/i*s,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(f/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=i;f++){let g=(i+1)*d+f-1,m=(i+1)*(d-1)+f-1,y=(i+1)*(d-1)+f,_=(i+1)*d+f;a.push(g,m,_),a.push(m,y,_)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},nl=class r extends St{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new H,p=new H,d=new H,f=new H,g=new H,m=new H,y=new H;for(let v=0;v<=n;++v){let M=v/n*s*Math.PI*2;_(M,s,a,e,d),_(M+.01,s,a,e,f),m.subVectors(f,d),y.addVectors(f,d),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let E=0;E<=i;++E){let b=E/i*Math.PI*2,A=-t*Math.cos(b),W=t*Math.sin(b);u.x=d.x+(A*y.x+W*g.x),u.y=d.y+(A*y.y+W*g.y),u.z=d.z+(A*y.z+W*g.z),c.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(v/n),h.push(E/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let E=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),A=(i+1)*v+M,W=(i+1)*(v-1)+M;o.push(E,b,W),o.push(b,A,W)}function _(v,M,E,b,A){let W=Math.cos(v),L=Math.sin(v),O=E/M*v,te=Math.cos(O);A.x=b*(2+te)*.5*W,A.y=b*(2+te)*L*.5,A.z=b*Math.sin(O)*.5}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},$r=class r extends St{constructor(e=new ra(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,c=new H,l=new Ce,h=new H,u=[],p=[],d=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],_=a.binormals[m];for(let v=0;v<=i;v++){let M=v/i*Math.PI*2,E=Math.sin(M),b=-Math.cos(M);c.x=b*y.x+E*_.x,c.y=b*y.y+E*_.y,c.z=b*y.z+E*_.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=i;y++)l.x=m/t,l.y=y/i,d.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=i;y++){let _=(i+1)*(m-1)+(y-1),v=(i+1)*m+(y-1),M=(i+1)*m+y,E=(i+1)*(m-1)+y;f.push(_,v,E),f.push(v,M,E)}})()})(),this.setIndex(f),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},il=class extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new H,s=new H;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],p=u.start;for(let d=p,f=p+u.count;d<f;d+=3)for(let g=0;g<3;g++){let m=o.getX(d+g),y=o.getX(d+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),$c(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),$c(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $c(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Mf=Object.freeze({__proto__:null,BoxGeometry:hi,CapsuleGeometry:Wo,CircleGeometry:Xo,ConeGeometry:jo,CylinderGeometry:gr,DodecahedronGeometry:qo,EdgesGeometry:Yo,ExtrudeGeometry:Jr,IcosahedronGeometry:Ko,LatheGeometry:fr,OctahedronGeometry:Qo,PlaneGeometry:ur,PolyhedronGeometry:Pi,RingGeometry:$o,ShapeGeometry:el,SphereGeometry:Kr,TetrahedronGeometry:tl,TorusGeometry:Qr,TorusKnotGeometry:nl,TubeGeometry:$r,WireframeGeometry:il}),oa=class extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new et(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var es=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ns(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ip(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var _r=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ac:s=e,o=2*t-n;break;case oc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ac:a=e,c=2*n-t;break;case oc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,y=-p*m+2*p*g-p*f,_=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*f+1,v=(-1-d)*m+(1.5+d)*g+.5*f,M=d*m-d*g;for(let E=0;E!==o;++E)s[E]=y*a[h+E]+_*a[l+E]+v*a[c+E]+M*a[u+E];return s}},sl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*u+a[c+p]*h;return s}},al=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ip(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ga,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,p=h+n;for(let d=0;d!==n;++d){let f=t[h+d];if(f!==t[u+d]||f!==t[p+d]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Tn.prototype.TimeBufferType=Float32Array,Tn.prototype.ValueBufferType=Float32Array,Tn.prototype.DefaultInterpolation=Fs;var bi=class extends Tn{};bi.prototype.ValueTypeName="bool",bi.prototype.ValueBufferType=Array,bi.prototype.DefaultInterpolation=Os,bi.prototype.InterpolantFactoryMethodLinear=void 0,bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Tn{};ol.prototype.ValueTypeName="color";var ll=class extends Tn{};ll.prototype.ValueTypeName="number";var cl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)yn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Br=class extends Tn{InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion",Br.prototype.DefaultInterpolation=Fs,Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Tn{};Si.prototype.ValueTypeName="string",Si.prototype.ValueBufferType=Array,Si.prototype.DefaultInterpolation=Os,Si.prototype.InterpolantFactoryMethodLinear=void 0,Si.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Tn{};hl.prototype.ValueTypeName="vector";var eh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ul=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let d=l[u],f=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null}}},Up=new ul,ts=class{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var dl=class extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=eh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Vr("img");function c(){h(),eh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ca=class extends ts{constructor(e){super(e)}load(e,t,n,i){let s=new rn,a=new dl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},ha=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ua=class extends ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fo=new Qe,th=new H,nh=new H,pl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bf=new Qe,Sf=new H,wf=new H;var ml=class extends pl{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ef=new Qe,Tf=new Qe,Af=new Qe;var Rf=new H,Cf=new yn,Pf=new H,Lf=new H;var If=new H,Uf=new yn,Df=new H,Nf=new H;var Ml="\\[\\]\\.:\\/",Dp=new RegExp("["+Ml+"]","g"),go="[^"+Ml+"]",Np="[^"+Ml.replace("\\.","")+"]",Op=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",go)+/(WCOD+)?/.source.replace("WCOD",Np)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go)+"$"),Fp=["material","materials","bones","map"],yt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(e){let t=Op.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Fp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=class{constructor(r,e,t){let n=t||yt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray],yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Of=new Float32Array(1);var Ff=new Ce;var Bf=new H,zf=new H;var kf=new H;var Gf=new H,Vf=new Qe,Hf=new Qe;var Wf=new H,Xf=new et,jf=new et;var qf=new H,Yf=new H,Zf=new H;var Jf=new H,Kf=new Hr;var Qf=new xn;var $f=new H;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Ah(r,e){let{V:t,plate:n,rod:i,disc:s,bar:a,pin:o,bolts:c,box:l,conduit:h,append:u,parts:p,identity:d,materials:f}=e,g=-.31,m=f.paint,y=f.edge.clone();y.color.setHex(11971473),y.roughness=.55;let _=m.clone();_.color.setHex(16772258),_.roughness=.54;let v=(F,U=g)=>t(F[0],F[1],U),M=[-.68,1.58],E=[4.36,4.25],b=[4.79,4.96],A=[4.14,1.15],W=[4.24,1.61],L=[5.17,1.49],O=[4.67,.892];function te(F,U,j,V,Y,ie){let ce=[],P=[],x=[],J=0;U.forEach(([se,re],ve)=>{if(ve&&(J+=Math.hypot(se-U[ve-1][0],re-U[ve-1][1])),ce.push(se,re,j,se,re,V),P.push(J*.42,0,J*.42,(V-j)*.42),ve){let _e=2*ve;x.push(_e-2,_e-1,_e,_e,_e-1,_e+1)}});let k=new r.BufferGeometry;k.setAttribute("position",new r.Float32BufferAttribute(ce,3)),k.setAttribute("uv",new r.Float32BufferAttribute(P,2)),k.setIndex(x),k.computeVertexNormals(),k.computeBoundingBox();let B=k.boundingBox.getCenter(t());k.translate(-B.x,-B.y,-B.z),k.name=F;let Q=Y.clone();Q.side=r.DoubleSide,u(k,Q,B,d,t(1,1,1),ie)}function C(F,U,j,V,Y){let ie=[...U,...j.slice(1,-1)],ce=V*.5-.024;for(let P of[-1,1])n(F+"-flank",ie,g+P*ce,.055,Y,"braccio",.01);te(F+"-lower",U,g-ce,g+ce,Y,"braccio"),te(F+"-upper",j,g-ce,g+ce,Y,"braccio");for(let[P,x]of[U,j].entries())for(let J of[-1,1])h(F+"-seam-"+P+"-"+J,x.map(k=>v(k,g+J*(ce+.012))),.0075,Y,"braccio",40)}C("320d-reach-boom",[[-.73,1.46],[-.44,1.55],[-.06,2.1],[.29,2.62],[.49,2.82],[.72,2.99],[1.14,3.17],[1.98,3.37],[2.98,3.58],[3.84,3.78],[4.19,3.9],[4.38,4.04],[4.49,4.17],[4.48,4.28],[4.4,4.355]],[[4.4,4.355],[4.29,4.373],[4.11,4.304],[3.8,4.251],[3.08,4.186],[2.26,4.08],[1.29,4.007],[.9,3.95],[.62,3.87],[.41,3.79],[.2,3.675],[.045,3.56],[-.105,3.415],[-.31,3.16],[-.6,2.72],[-.96,1.88],[-1.012,1.68],[-.949,1.53],[-.85,1.475],[-.73,1.46]],.494,m),C("320d-dipper",[[4.805,5.018],[4.875,4.992],[4.96,4.9],[5.15,4.62],[5.3,4.395],[5.325,4.305],[5.306,4.015],[5.331,3.885],[5.32,3.817],[5.245,3.79],[5.184,3.74],[5.073,3.51],[4.94,3.105],[4.775,2.65],[4.59,2.16],[4.437,1.64],[4.25,1.246],[4.215,1.151],[4.172,1.1],[4.117,1.072]],[[4.117,1.072],[4.055,1.08],[3.994,1.145],[3.98,1.23],[4.004,1.41],[4.05,1.81],[4.12,2.64],[4.17,3.34],[4.205,3.85],[4.211,4.19],[4.25,4.346],[4.365,4.54],[4.47,4.695],[4.59,4.84],[4.728,4.984],[4.77,5.013],[4.805,5.018]],.365,_);function oe(F,U,j,V=m,Y="braccio"){for(let ie of[-1,1])s(...F,g+ie*j*.5,U,.059,V,Y,32),s(...F,g+ie*(j*.5+.035),U*.68,.027,"iron",Y,24),c(...F,g+ie*(j*.5+.057),.021,ie);o(...F,g,U*.52,j+.09,Y)}oe(M,.193,.61),oe(E,.163,.534),oe(b,.102,.39),oe(A,.113,.41,m,"benna");for(let F of[-1,1])n("series-d-base-yoke",[[-1.14,1.345],[-.28,1.345],[-.41,1.59],[-.53,1.745],[-.71,1.78],[-.9,1.66]],g+F*.315,.107,m,"telaio",.022);function $(F,U,j,V,Y,ie,ce=g){let P=v(U,ce),x=v(j,ce),J=P.clone().lerp(x,Y),k=x.clone().sub(P).normalize();i(P,J,V,ie,"pistoni",28),i(P.clone().lerp(x,.027),P.clone().lerp(x,.073),V*1.065,"iron","pistoni",28),i(J.clone().addScaledVector(k,-.073),J,V*1.115,"iron","pistoni",28),i(J,x,V*.6,"chrome","pistoni",28);let B=re=>J.clone().addScaledVector(k,re);i(B(-.06),B(-.032),V*1.06,"iron","pistoni",12),i(B(-.029),B(-.01),V*.83,"edge","pistoni",24),i(B(-.008),B(.01),V*.67,"rubber","pistoni",24);let Q=x.clone().addScaledVector(k,-.13);i(Q,Q.clone().addScaledVector(k,.084),V*.78,"iron","pistoni",20);for(let re of[P,x])s(re.x,re.y,re.z,V*1.18,V*1.86,ie,"pistoni",28),s(re.x,re.y,re.z+V,V*.55,.03,"edge","pistoni",20);let se=P.clone().lerp(J,.22);i(se.clone().add(t(0,0,V*.6)),se.clone().add(t(.025,0,V*1.32)),.024,"bolt","tubazioni",10)}for(let F of[-1,1]){let U=g+F*.365,j=[-.3,1.47],V=[.25,3.58];$("lift",j,V,.115,.54,"black",U),s(...V,g+F*.256,.148,.181,m,"braccio",28)}let ae=[1.45,4.111];for(let F of[-1,1])n("320d-dipper-ram-saddle",[[1.27,4.018],[1.64,4.055],[1.56,4.167],[1.46,4.201],[1.38,4.167]],g+F*.118,.077,m,"braccio",.012);$("dipper",ae,b,.107,.575,"black");let I=[5.267,3.826];$("curl",I,L,.101,.595,"black"),oe(I,.098,.37,m,"braccio");let X;for(let F of[-1,1]){let U=g+F*.228,j=(V,Y,ie,ce,P,x)=>{let J=Math.hypot(ie[0]-Y[0],ie[1]-Y[1]),k=-(ie[1]-Y[1])/J,B=(ie[0]-Y[0])/J,Q=[[Y[0]+k*ce,Y[1]+B*ce],[ie[0]+k*ce,ie[1]+B*ce],[ie[0]-k*ce,ie[1]-B*ce],[Y[0]-k*ce,Y[1]-B*ce]];if(n(V,Q,x,P,m,"benna",.014),V==="320d-rocker-link"&&F===1){let se=v(Y,x+P*.5).lerp(v(ie,x+P*.5),.24);X={partIndex:p.length-1,point:se}}for(let se of[Y,ie])s(...se,x,ce,P,m,"benna",26)};j("320d-rocker-link",L,W,.071,.069,U),j("320d-bucket-link",L,O,.092,.079,U+F*.074)}for(let[F,U,j]of[[L,.078,.73],[W,.075,.61],[O,.084,.72]])o(...F,g,U,j,"benna");for(let F=0;F<4;F++){let U=g-.176+F*.097,j=F*.01,V=[[-.82,1.49],[-.88,1.74],[-.72,2.27],[-.37,3.04],[.05,3.66],[.45,3.93],[.9,4.046],[1.53,4.11],[2.9,4.235],[3.58,4.3],[3.85,4.32]];h("320d-pipe-"+F,V.map(([P,x])=>t(P,x+j,U)),.019,F%2?"paintDark":"paint","tubazioni",48);let Y=v(V.at(-1),U);Y.y+=j,i(Y.clone().add(t(-.06,-.006,0)),Y.clone().add(t(.05,.006,0)),.033,"edge","tubazioni",12);let ie=[Y,t(4.12,4.378+j,U),t(4.49,4.4+j,U+.055),t(4.72,4.3+j,U+.13),t(4.8,4.03+j,U+.146),t(4.74,3.85+j,U+.146),t(4.56,3.8+j,U+.146)];h("320d-curl-hose-"+F,ie,.025,"rubber","tubazioni",24);let ce=ie.at(-1);i(ce.clone().add(t(-.058,0,0)),ce.clone().add(t(.03,0,0)),.037,"edge","tubazioni",10)}for(let[F,U]of[[-.19,3.43],[.86,4.04],[2.22,4.17],[3.56,4.315]]){l(F,U,g,.065,.043,.446,"paintDark","tubazioni");for(let j of[-1,1])c(F,U,g+j*.23,.016,j)}for(let F of[-1,1]){let U=g+F*.212;for(let j=0;j<2;j++){let V=j*.08,Y=[[4.88+V,3.74],[4.81+V,3.65],[4.7+V,3.58],[4.65+V,3.38],[4.57+V,2.87],[4.43+V,2.45],[4.37+V,2.31]];h("320d-stick-pipe-"+F+"-"+j,Y.map(ie=>v(ie,U)),.0165,"paint","tubazioni",25);for(let ie of[Y[0],Y.at(-1)]){let ce=v(ie,U);i(ce,ce.clone().add(t(-.025,-.04,0)),.031,"edge","tubazioni",10)}}}let we=1.36,w=[[3.06,.067],[3.31,.034],[3.69,.02],[4.02,.02],[4.32,.027],[4.53,.057],[4.7,.112],[4.85,.207],[4.955,.333],[5.006,.472],[5.018,.602],[5,.719],[4.95,.818],[4.88,.866]],T=[...w,[4.67,.911],[4.57,.936],[4.41,.949],[4.28,.905],[4.211,.795],[4.13,.62],[4.04,.45],[3.91,.293],[3.74,.188],[3.55,.125],[3.15,.108]];te("320d-yellow-rolled-pan",w,g-we*.5,g+we*.5,_,"benna");for(let F of[-1,1]){let U=g+F*(we*.5-.026);n("320d-yellow-bucket-cheek",T,U,.059,_,"benna",.012),n("320d-direct-pin-lug",[[4.016,.753],[4.001,1.081],[4.049,1.188],[4.124,1.236],[4.204,1.23],[4.271,1.184],[4.357,1.07],[4.543,1.005],[4.666,1.002],[4.752,.956],[4.792,.88],[4.779,.779],[4.695,.727]],g+F*.257,.094,m,"benna",.016);for(let[V,Y]of[[A,.135],[O,.122]])s(...V,g+F*.299,Y,.05,"paintDark","benna",28);h("320d-cheek-weld-"+F,w.slice(1,-1).map(V=>v(V,U-F*.027)),.009,"paintDark","benna",30)}n("320d-full-width-edge",[[3.025,.054],[3.027,.028],[3.364,.025],[3.414,.048],[3.407,.084],[3.162,.079]],g,we+.046,y,"benna",.006);for(let F of[-1,0,1])i(t(3.38,.068,g+F*we*.315),t(3.38,.083,g+F*we*.315),.031,"bolt","bulloneria",6);return X}var Rh=new WeakMap;function Ch(r,e,t){let n=Rh.get(r);n||(n=new Map,Rh.set(r,n));let i=t+":"+e;if(n.has(i))return n.get(i);let s=384,a=s*s,o=new Uint8Array(a*4),c=new Uint8Array(a*4),l=new Float32Array(a),h=2745+e*390+t*1309;function u(){return h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296}function p(A){let W=Array.from({length:A*A},u);return(L,O)=>{let te=L*A,C=O*A,K=Math.floor(te),q=Math.floor(C),ne=te-K,de=C-q;ne*=ne*(3-2*ne),de*=de*(3-2*de);let oe=($,ae)=>W[(ae%A+A)%A*A+($%A+A)%A];return(oe(K,q)*(1-ne)+oe(K+1,q)*ne)*(1-de)+(oe(K,q+1)*(1-ne)+oe(K+1,q+1)*ne)*de}}let d=p(6),f=p(20),g=p(78),m=(A,W,L)=>{let O=Math.floor(A),te=Math.floor(W),C=A-O,K=W-te;for(let q=0;q<2;q++)for(let ne=0;ne<2;ne++){let de=(te+q+s*2)%s*s+(O+ne+s*2)%s;l[de]=Math.max(l[de],L*(ne?C:1-C)*(q?K:1-K))}},y=t===1?114:44;for(let A=0;A<y;A++){let W=u()*s,L=u()*s,O=(t===1?-.22:.11)+(u()-.5)*(t===1?.38:1.5),te=1+Math.floor(u()*(t===1?8:4));for(let C=0;C<te;C++){let K=(t===1?24:8)+u()*(t===1?116:48),q=(C-te/2)*(1.9+u()*.7),ne=(u()-.5)*8,de=.32+u()*.67,oe=u()*22;for(let $=0;$<K;$+=.55){let ae=$/K,I=$+oe;m(W+I*Math.cos(O)-q*Math.sin(O),L+I*Math.sin(O)+q*Math.cos(O)+ne*ae*ae,de*Math.sin(ae*Math.PI)**.4)}}}let _=t===1?e===1?[108,72,53]:e===2?[110,83,67]:[88,92,91]:e===1?[78,75,68]:[77,79,81];for(let A=0,W=0;A<s;A++)for(let L=0;L<s;L++,W++){let O=L/s,te=A/s,C=d(O,te),K=f(O,te),q=g(O,te),ne=u(),de=l[W],oe=W*4,$=t===1,ae=$?Math.pow(Math.max(0,(C*.6+K*.4-.39)*1.85),1.3):0,I=$?0:Math.max(0,Math.min(1,(K*.54+q*.35+ne*.11-.7)*10)),X=!$&&e===3?.1:!$&&e===1?.6:1,we=Math.min(1,(de*($?.98:.72)+ae*.29+I*.55)*X),w=(ne-.5)*($?7:3)+(C-.5)*($?35:14)+(K-.5)*9;for(let T=0;T<3;T++){let z=_[T]+w+($&&T===0?ae*14:0);o[oe+T]=Math.max(0,Math.min(255,z+([170,167,157][T]-z)*we))}o[oe+3]=255,c[oe]=Math.round(Math.max(0,Math.min(1,.57+(q-.5)*.19-de*.2-I*.1))*255),c[oe+1]=Math.round(Math.max(.14,Math.min(1,($?.68:.48)+(C-.5)*.19-we*.39))*255),c[oe+2]=Math.round(Math.min(1,($?e===3?.38:.25:.085)+we*($?.53:.85))*255),c[oe+3]=255}let v=(A,W)=>{let L=new r.DataTexture(A,s,s,r.RGBAFormat);return L.wrapS=L.wrapT=r.RepeatWrapping,L.generateMipmaps=!0,L.magFilter=r.LinearFilter,L.minFilter=r.LinearMipmapLinearFilter,L.colorSpace=W?r.SRGBColorSpace:r.NoColorSpace,L.needsUpdate=!0,L},M=v(o,!0),E=v(c,!1),b=new r.MeshPhysicalMaterial({name:t===1?"Acciaio abraso della benna":"Smalto grafite del braccio",map:M,roughnessMap:E,metalnessMap:E,bumpMap:E,bumpScale:t===1?.026:.014,roughness:1,metalness:1,clearcoat:t===1?.04:.21,clearcoatRoughness:.34,envMapIntensity:1.11});return n.set(i,b),b}function Ph(r,e,t){let n=null,{V:i,parts:s,materials:a,cache:o,append:c,box:l,bar:h,rod:u,disc:p,plate:d,quad:f,pin:g,bolts:m,machineScrew:y,conduit:_,round:v,identity:M}=t,E=e===1,b=e===2,A=e===3,W=i(1,1,1),L=(G,S,D)=>{let Z=a[S].clone();return Z.name=G,Z.color.setHex(D),Z},O=L("Montanti verniciati","black",E?7889728:2500907),te=L("Grafite minerale","black",E?3288874:4343366);te.roughness=.6,te.metalness=.4;let C=L("Acciaio verniciato arancio","paint",15102263),K=L("Base torretta ossidata","paintDark",13463871),q=a.rubber,ne=a.glass.clone();if(ne.color.setHex(E?3227963:b?4676441:4741718),ne.opacity=E?.57:b?.55:.62,ne.envMapIntensity=.9,ne.name="Vetratura fum\xE9 della cabina",E||b){let G=E?1.85:2.75;for(let S of new Set([a.paint.map,a.paint.roughnessMap,a.paint.bumpMap,a.paint.metalnessMap]))S&&S.repeat.set(G,G)}let de=b?null:Ch(r,e,0),oe=b?null:Ch(r,e,1),$=a.edge.clone();$.name="Bisello di taglio lucidato",$.color.setHex(16774614),$.roughness=.58,$.envMapIntensity=1.23;let ae=b?a.paintDark:te,I=E?-4.38:b?-4.02:-4.25,X=E?1.33:b?1.23:1.25,we=E?3.13:b?2.95:2.9,w=E?1.34:1.25,T=w+.085,z=E?2.37:b?2.17:2.31,F=E?-.27:-.31;function U(G,S,D,Z){let he=[],me=[],Ee=[];for(let[Ne,Ae,Fe,Ze]of S){let nt=Math.min(.12,(Ze-Fe)*.22,Ae*.24),lt=[[0,Ze],[-Ae*.72,Ze],[-Ae+nt,Ze-.014],[-Ae,Ze-nt],[-Ae,Fe+nt],[-Ae+nt,Fe],[0,Fe],[Ae-nt,Fe],[Ae,Fe+nt],[Ae,Ze-nt],[Ae-nt,Ze-.014],[Ae*.72,Ze]];for(let[ct,Ke]of lt)he.push(Ne,Ke,ct),me.push(Ne*.52,(ct+Ke)*.43)}for(let Ne=0;Ne<S.length-1;Ne++)for(let Ae=0;Ae<12;Ae++){let Fe=Ne*12+Ae,Ze=Ne*12+(Ae+1)%12;Ee.push(Fe,Fe+12,Ze,Ze,Fe+12,Ze+12)}let Ie=(S.length-1)*12;for(let Ne=1;Ne<11;Ne++)Ee.push(0,Ne,Ne+1,Ie,Ie+Ne+1,Ie+Ne);let Le=new r.BufferGeometry;Le.setAttribute("position",new r.Float32BufferAttribute(he,3)),Le.setAttribute("uv",new r.Float32BufferAttribute(me,2)),Le.setIndex(Ee),Le.computeVertexNormals(),Le.computeBoundingBox();let Ue=Le.boundingBox.getCenter(i());Le.translate(-Ue.x,-Ue.y,-Ue.z),Le.name=G,c(Le,D,Ue,M,W,Z)}function j(G,S,D,Z,he,me="lamierati",Ee=.014){d(G,S,D,Z,he,me,Ee)}function V(G,S,D,Z=a.paint,he=.043,me="lamierati"){j(G+"-gasket",S,D,he+.018,q,me,.018);let Ee=S.reduce((Le,Ue)=>Le+Ue[0],0)/S.length,De=S.reduce((Le,Ue)=>Le+Ue[1],0)/S.length,Ie=S.map(([Le,Ue])=>[Ee+(Le-Ee)*.976,De+(Ue-De)*.963]);j(G+"-skin",Ie,D+Math.sign(D)*.02,he,Z,me,.018)}U("revolving-bed",[[I+.1,X*.64,w-.18,w+.07],[I+.4,X-.08,w-.21,w+.09],[I+.68,X,w-.22,w+.08],[-.57,X,w-.22,w+.08],[.17,X-.04,w-.19,w+.07],[.3,X-.18,w-.12,w+.02]],E?K:b?a.paintDark:te,"telaio");let Y=E?[[I,.98,w+.02,z-.04],[I+.08,X-.07,w+.01,z],[I+.39,X,w+.01,z],[I+.55,X,w+.01,z-.014]]:b?[[I,.16,w-.17,z-.27],[I+.045,.53,w-.19,z-.22],[I+.13,.8,w-.21,z-.13],[I+.29,1.02,w-.21,z-.08],[I+.48,X-.025,w-.19,z-.03],[I+.72,X,w-.15,z+.008],[I+.9,X-.01,w-.11,z]]:[[I,.19,1.035,z-.31],[I+.03,.51,1.012,z-.27],[I+.12,.79,1.005,z-.22],[I+.26,1.035,1.008,z-.16],[I+.41,1.18,1.018,z-.1],[I+.62,X,1.045,z-.08],[I+.8,X,1.065,z-.06]];if(U("counterweight",Y,E?a.paintDark:b?a.paint:te,"lamierati"),U("engine-underframe",[[I+.49,X-.15,w+.06,z-.07],[-2.09,X-.13,w+.06,z-.04],[-1.86,X-.17,w+.07,z-.13]],E?a.paintDark:te,"motore"),b){let D=[[-1.95,w+.096],[.169,w+.096],[.221,w+.12],[.236,w+.163],[.236,w+.378],[.213,w+.413],[.157,w+.432],[-.05,w+.44],[-1.78,w+.454],[-1.95,w+.401]];j("320d-front-service-chest",D,-.73,.99,a.paint,"motore",.03),l(.236+.014,w+.246,-.73,.025,.229,.885,"rubber","lamierati"),l(.236+.033,w+.249,-.73,.026,.199,.86,"paint","lamierati"),l(.236+.046,w+.212,-.73,.02,.026,.814,"paintDark","lamierati");for(let me of[-.258,.233])l(.236+.049,w+.158,-.73+me,.024,.032,.108,"iron","lamierati"),u(i(.236+.066,w+.157,-.73+me-.049),i(.236+.066,w+.157,-.73+me+.049),.012,"edge","lamierati",12);let Z=-.73+.229;l(.236+.051,w+.281,Z,.031,.086,.07,"black","lamierati"),l(.236+.073,w+.285,Z,.013,.053,.039,"edge","lamierati");let he=-.73-.288;l(.236+.041,w+.349,he,.044,.078,.117,"rubber","lamierati"),l(.236+.065,w+.349,he,.012,.055,.09,"light","lamierati");for(let me of[-.023,0,.023])l(.236+.074,w+.349,he+me,.006,.052,.005,"edge","lamierati")}else j("far-hydraulic-reservoir",[[-2.08,w+.09],[.13,w+.09],[.23,1.81],[-.09,2.09],[-.83,2.17],[-1.72,z-.065],[-2.08,z-.18]],-.69,1.05,E?a.paint:te,"motore",.054);let ie=X+.005,ce=I+.56;for(let G of[-1,1]){let S=ie*G;if(E){V("classic-service"+G,[[I+.43,w+.12],[-1.38,w+.12],[-1.38,z-.07],[I+.43,z-.07]],S);let D=I+.38,Z=I+1,he=w+.21,me=z-.15;V("classic-radiator"+G,[[D-.035,he-.03],[Z+.035,he-.03],[Z+.035,me+.03],[D-.035,me+.03]],S+G*.035),l((D+Z)/2,(he+me)/2,S+G*.079,Z-D,me-he,.014,"interior","motore");for(let Ee=0;Ee<12;Ee++)l(D+.021+Ee*(Z-D-.042)/11,(he+me)/2,S+G*.094,.015,me-he,.02,"iron","motore");for(let Ee=0;Ee<11;Ee++)l((D+Z)/2,he+.016+Ee*(me-he-.032)/10,S+G*.1,Z-D,.012,.019,"edge","motore");for(let Ee of[D-.041,Z+.041])h(i(Ee,he-.03,S+G*.103),i(Ee,me+.03,S+G*.103),.039,"paint","lamierati");l(I+1.53,w+.15,S+G*.059,1,.059,.018,K,"lamierati");for(let Ee of[I+1.35,-1.47])y(Ee,z-.155,S+G*.058,.018,G)}else if(b){V("rear-service"+G,[[ce,w+.1],[-1.6,w+.1],[-1.53,z-.04],[-1.67,z+.11],[ce+.16,z+.1],[ce,z-.1]],S);for(let Z=0;Z<2;Z++)for(let he=0;he<4;he++)for(let me=0;me<(Z?7:4);me++)l(I+.75+Z*.57+me*.045,z+.005-he*.042,S+G*.05,.026,.025,.015,"interior","motore");let D=[[I+.36,w+.12],[-1.7,w+.12],[-1.63,w+.38],[-1.85,w+.51],[I+1.63,w+.61],[I+.45,w+.57]];j("charcoal-access-insert"+G,D,S+G*.059,.032,O,"lamierati",.012),l(I+1.41,w+.39,S+G*.093,.079,.14,.022,"black","lamierati");for(let Z of[I+.97,I+1.88])l(Z,w+.6,S+G*.081,.012,.74,.012,"rubber","motore")}else{V("yellow-service"+G,[[ce,w+.115],[-1.56,w+.115],[-1.6,z-.12],[-2.03,z-.044],[ce+.07,z-.044]],S);let D=[[ce+.1,z-.19],[-2.66,z-.19],[-2.63,z-.55],[ce+.25,w+.23],[ce+.09,w+.23]];j("triangular-intake"+G,D,S+G*.055,.027,te,"motore");let Z=ce+.15,he=-2.7,me=w+.31,Ee=z-.24;for(let Ie=0;Ie<10;Ie++){let Le=me+(Ee-me)*Ie/10,Ue=Z+(he-Z)*(.27+.73*(Le-me)/(Ee-me));for(let Ne=0;Ne<12;Ne++){let Ae=Z+(Ne+Ie%2*.5)*.105;if(Ae>=Ue-.02)break;p(Ae,Le,S+G*.074,.042,.016,"interior","motore",6)}}l(-2.12,z-.45,S+G*.06,.044,.16,.034,"rubber","lamierati");let De=I+.42;for(let Ie of[0,.1])l(De+.07,z-.33-Ie,S-G*.022,.31,.056,.03,"red","lamierati",Ie?.18:-.08)}}for(let[G,S]of[[I+1.02,.77],[I+1.82,.71]])l(G,z+.005,-.18,S,.1,1.42,"rubber","motore"),l(G,z+.063,-.18,S-.018,.092,1.41,E?"paint":b?"paintDark":te,"lamierati");for(let G=0;G<12;G++)l(I+.67+G*.062,z+.128,-.25,.024,.032,.72,"track","motore");if(b){let G=i(I+1.55,z+.19,-.5);u(G,G.clone().add(i(0,.23,0)),.075,"black","motore",24);let S=o("precleaner-cover",()=>new r.SphereGeometry(1,24,10,0,Math.PI*2,0,Math.PI*.58));c(S,"rubber",i(G.x,G.y+.21,G.z),M,i(.163,.132,.163),"motore")}let P=I+1.16;u(i(P,z+.11,-.48),i(P-.02,z+.41,-.48),.068,"track","motore",20),u(i(P-.02,z+.41,-.48),i(P-.13,z+.48,-.48),.072,"black","motore",18);for(let G of[I+.81,I+1.87])u(i(G,z+.12,.61),i(G,z+.16,.61),.084,"edge","motore",16);l(-2.84,1.79,-.17,1.18,.41,.66,"iron","motore");for(let G=0;G<6;G++){let S=-3.32+G*.187;l(S,2.06,-.17,.142,.15,.54,"black","motore"),u(i(S,2.03,.08),i(S+.053,1.94,.246),.041,"rust","motore",9)}l(-3.65,1.76,-.26,.15,.73,.91,"track","motore");for(let G=0;G<12;G++)l(-3.735,1.44+G*.055,-.26,.025,.018,.81,"edge","motore");let x=E?-1.84:-1.94,J=E?-.075:b?-.15:.1,k=E?.99:1.035,B=X-.022,Q=B-k,se=(B+Q)/2,re=J-(E?.13:b?.22:.24),ve=x+(E?.025:b?.012:.167),_e=we-.065,Se=J-.045,be=[[x,T],[Se,T],[J,T+.24],[J-.026,T+.54],[re+.042,_e-.17],[re,_e-.044],[ve+.052,_e-.009],[ve-.014,_e-.071],[x-.008,T+.36]],Re=T+(E?.56:b?.13:.11),ze=T+(E?.64:b?.72:.85),Pe=J-.1,ke=x+.066,He=[[x+.018,T+.04],[Se-.04,T+.04],[Pe,Re+.01],[ke,ze+.012],[x+.018,ze-.03]];for(let[G,S]of[B,Q].entries()){if(E){let De=x+(J-x)*.365;j("door-threshold"+G,[[x+.018,T+.04],[Se-.04,T+.04],[Pe,T+.255],[x+.018,T+.255]],S,.046,"paint","cabina",.014),j("rear-door-stile"+G,[[x+.018,T+.247],[De+.026,T+.247],[De+.026,ze+.015],[x+.018,ze+.015]],S,.046,"paint","cabina",.014),j("front-door-stile"+G,[[J-.16,T+.245],[Pe,T+.245],[Pe,Re+.01],[J-.16,Re+.01]],S,.046,"paint","cabina",.012)}else j("side-cab-sill"+G,He,S,.046,b?a.paint:te,"cabina",.02);let D=x+(J-x)*(E?.365:b?.415:.32),Z=D+.024,he=De=>ze+(Re-ze)*(De-ke)/(Pe-ke),me=[[ke+.036,he(ke+.036)+.044],[D-.032,he(D-.032)+.044],[Z-.042,_e-.073],[ve+.109,_e-.071],[ve+.026,_e-.159]],Ee=[[D+.037,he(D+.037)+.044],[Pe-.024,Re+.058],[J-.1,T+.5],[re-.014,_e-.19],[re-.082,_e-.091],[Z+.043,_e-.075]];j("rear-cab-glazing"+G,me,S,.018,ne,"vetri",.005),j("cab-door-glazing"+G,Ee,S,.018,ne,"vetri",.005);for(let De=0;De<be.length;De++){let Ie=be[De],Le=be[(De+1)%be.length];h(i(Ie[0],Ie[1],S),i(Le[0],Le[1],S),E?.06:.068,E?"paint":O,"cabina",.061)}if(h(i(ke,ze,S),i(Pe,Re,S),.058,E?"paint":O,"cabina",.054),h(i(D,he(D),S),i(Z,_e-.021,S),E?.06:.047,E?"paint":O,"cabina",.052),E){let De=[[D+.062,T+.31],[J-.16,T+.31],[J-.15,T+.52],[D+.062,T+.56]];j("lower-register"+G,De,S+.021,.016,ne,"vetri",.018);for(let Ie=0;Ie<4;Ie++){let Le=De[Ie],Ue=De[(Ie+1)%4];h(i(Le[0],Le[1],S+.037),i(Ue[0],Ue[1],S+.037),.033,"rubber","cabina")}h(i(D,ze,S+.031),i(J-.12,Re,S+.031),.055,"paint","cabina")}if(b){let De=x+.115;h(i(De,T+.81,S+.022),i(De+.012,_e-.14,S+.022),.039,O,"cabina",.034),l(x+.24,T+.442,S+.046,.093,.064,.035,"black","cabina")}if(A){let De=[[x+.016,T+.06],[x+.67,T+.06],[x+.82,T+.25],[x+.58,T+.54],[x+.025,T+.87]];j("yellow-trapezoid"+G,De,S+.022,.043,"paint","lamierati",.019),h(i(D+.034,T+.58,S+.047),i(J-.125,T+.64,S+.047),.035,O,"cabina")}}let Ye=(G,S)=>i(Se+(re-Se)*G,T+.13+(_e-T-.21)*G,S),rt=(G,S)=>i(x+.023+(ve-x)*G,T+.54+(_e-T-.65)*G,S);f("front-windscreen",[Ye(0,Q+.03),Ye(0,B-.03),Ye(1,B-.03),Ye(1,Q+.03)],ne,"vetri"),f("back-windscreen",[rt(0,B-.04),rt(0,Q+.04),rt(1,Q+.04),rt(1,B-.04)],ne,"vetri");for(let G of[0,E?.46:.31,1])h(Ye(G,Q),Ye(G,B),G===1?.069:.043,E?"paint":O,"cabina");if(l((x+J)/2,T,se,J-x-.052,.092,k,O,"cabina"),j("roof-brow",[[ve-.09,_e-.028],[re+.072,_e-.028],[re+.13,_e+.022],[re+.058,_e+.062],[ve-.073,_e+.056]],se,k+.095,E||A?"paint":O,"cabina",.024),l((ve+re)*.5,_e+.077,se,.64,.023,.58,"rubber","cabina"),l((ve+re)*.5,_e+.096,se,.6,.021,.54,b?"black":"paintDark","cabina"),b){let G=re+.075,S=_e+.106,D=_e+.302,Z=Q+.018,he=B-.018;for(let me of[Z,he])u(i(G,S,me),i(G+.035,D,me),.016,O,"cabina",10),h(i(G-.12,_e+.064,me),i(G,S,me),.025,O,"cabina");for(let me of[S+.015,D])u(i(G+.029,me,Z),i(G+.029,me,he),.017,O,"cabina",12);for(let me of[Z+.105,(Z+he)*.5,he-.105]){l(G+.021,S+.099,me,.071,.147,.157,O,"cabina"),l(G+.059,S+.099,me,.011,.116,.128,"light","cabina");for(let Ee of[-.03,.03])u(i(G+.068,S+.052,me+Ee),i(G+.068,S+.145,me+Ee),.004,"edge","cabina",6);l(G-.01,S+.007,me,.06,.044,.052,"iron","cabina")}}if(E){let G=a.paintDark.clone();G.color.setHex(12010529),G.roughness=.61;for(let S of[B+.043,Q-.043]){let D=T+.143;l((x+J)*.5,D,S,J-x-.074,.04,.011,G,"lamierati"),l((x+J)*.5,D-.058,S,J-x-.078,.014,.01,G,"lamierati")}for(let S of[T+.143,T+.085])l((I-.99)*.5,S,X+.052,-.99-I-.22,S>T+.1?.04:.014,.011,G,"lamierati")}let ft=x+.55;l(ft,T+.2,se,.33,.38,.39,"iron","cabina"),l(ft+.03,T+.4,se,.47,.12,.51,"interior","cabina"),l(ft-.19,T+.64,se,.12,.49,.47,"interior","cabina",.09),E||l(ft-.215,T+.91,se,.12,.16,.31,"interior","cabina",.09);for(let G of[-1,1])l(ft+.09,T+.48,se+G*.32,.33,.105,.119,"interior","cabina"),u(i(ft+.19,T+.5,se+G*.32),i(ft+.25,T+.68,se+G*.32),.016,"chrome","cabina",9),l(ft+.25,T+.71,se+G*.32,.054,.09,.044,"black","cabina",-.18),l(Se-.2,T+.078,se+G*.16,.15,.041,.105,"rubber","cabina",-.14);let pt=x+.36;l(pt,ze-.104,B+.044,.185,.065,.041,"black","cabina");for(let G of[B-.12,Q+.1])l(re+.032,_e+.006,G,.124,.098,.155,O,"cabina"),l(re+.099,_e+.004,G,.016,.07,.128,"light","cabina");let ut=Ye(.11,B-.105),It=Ye(.73,Q+.27);u(ut,It,.011,"black","cabina",8),u(It.clone().add(i(.008,-.17,-.045)),It.clone().add(i(.008,.11,.033)),.015,"black","cabina",8),_("cab-handle",[i(J-.07,T+.12,B+.04),i(J-.02,T+.16,B+.124),i(re+.09,_e-.32,B+.128),i(re+.087,_e-.26,B+.044)],.023,E?"paint":A?C:"edge","cabina",16);for(let[G,S,D]of[[-.72,w-.06,.74],[-.72,w-.28,.46]]){l(G,S,B+.144,D,.069,.218,"iron","telaio");for(let Z=0;Z<7;Z++)l(G-D*.41+Z*D*.136,S+.04,B+.144,.016,.012,.195,"edge","telaio")}if(!E){let G=i(re-.07,_e-.04,B),S=i(re+.14,_e+.09,B+.23);u(G,S,.018,O,"cabina"),l(S.x,S.y-.083,S.z,.061,.18,.13,"black","cabina"),l(S.x+.034,S.y-.083,S.z,.009,.15,.109,"chrome","cabina"),l(Se-.31,T+.77,Q+.135,.081,A?.25:.18,A?.35:.16,"black","cabina",-.13)}if(A){for(let S of[B-.24,-.82]){let D=z+.09,Z=we+.22;_("rail-arch-"+S,[i(-2.3,D,S),i(-2.3,Z-.07,S),i(-2.36,Z,S),i(-3.04,Z,S),i(-3.11,Z-.08,S),i(-3.11,D+.01,S)],.02,C,"cabina",22),h(i(-2.31,Z-.3,S),i(-3.1,Z-.3,S),.026,C,"cabina")}let G=o("roof-lamp",()=>new r.SphereGeometry(1,16,9,0,Math.PI*2,0,Math.PI/2));for(let[S,D,Z]of[[ve+.19,Q+.08,6309152],[ve+.18,B-.103,3172945]]){let he=L("Lente spia di tetto","light",Z),me=_e+.064;u(i(S,me,D),i(S,me+.049,D),.063,"black","cabina",16),u(i(S,me+.05,D),i(S,me+.13,D),.048,he,"cabina",18),c(G,he,i(S,me+.13,D),M,i(.049,.03,.049),"cabina")}l(I+.08,z-.28,0,.089,.107,.145,O,"motore"),l(I+.03,z-.28,0,.012,.062,.063,ne,"vetri")}if(b)return Ah(r,t);let ue=E?[-.88,1.58]:[-.61,1.72],Ge=E?[4.02,4.32]:[4.06,4.94],at=E?[3.32,1.28]:[4.13,1.45],ot=at[0]-Ge[0],qe=E?[.92,3.78]:[1.03,4.03],Ut=[ue,[ue[0]+.25,ue[1]+.54],[qe[0]-.31,qe[1]-.22],qe,[qe[0]+.67,qe[1]+.2],[Ge[0]-.68,Ge[1]-.1],[Ge[0]-.25,Ge[1]-.035],Ge],Et=E?[.18,.31,.335,.38,.32,.22,.177,.17]:[.164,.25,.358,.37,.321,.215,.171,.155];function un(G,S,D,Z,he){let me=new r.CatmullRomCurve3(S.map(Ae=>i(Ae[0],Ae[1],0)),!1,"centripetal"),Ee=new r.CatmullRomCurve3(S.map((Ae,Fe)=>i(Fe,D[Fe],0)),!1,"catmullrom",.32),De=[],Ie=[];for(let Ae=0;Ae<=25;Ae++){let Fe=Ae/25,Ze=me.getPoint(Fe),nt=me.getTangent(Fe),lt=Ee.getPoint(Fe).y;De.push([Ze.x-nt.y*lt,Ze.y+nt.x*lt]),Ie.push([Ze.x+nt.y*lt,Ze.y-nt.x*lt])}let Le=[...De,...Ie.reverse()],Ue=Z/2-.033;for(let Ae of[-1,1])j(G+"-flank",Le,F+Ae*Ue,.07,he,"braccio",.018);function Ne(Ae,Fe){let Ze=[],nt=[],lt=[],ct=Z/2-.068;Ae.forEach(([R,ee],fe)=>{if(Ze.push(R,ee,F-ct,R,ee,F+ct),nt.push(fe/Ae.length,0,fe/Ae.length,1),fe){let ye=fe*2;lt.push(ye-2,ye,ye-1,ye,ye+1,ye-1,ye-1,ye,ye-2,ye-1,ye+1,ye)}});let Ke=new r.BufferGeometry;Ke.setAttribute("position",new r.Float32BufferAttribute(Ze,3)),Ke.setAttribute("uv",new r.Float32BufferAttribute(nt,2)),Ke.setIndex(lt);let Dt=[];for(let R=0;R<Ae.length;R++){let ee=Ae[Math.max(R-1,0)],fe=Ae[Math.min(R+1,Ae.length-1)],ye=fe[0]-ee[0],xe=fe[1]-ee[1],Te=Math.hypot(ye,xe);Dt.push(-xe/Te,ye/Te,0,-xe/Te,ye/Te,0)}Ke.setAttribute("normal",new r.Float32BufferAttribute(Dt,3)),Ke.computeBoundingBox();let Ct=Ke.boundingBox.getCenter(i());Ke.translate(-Ct.x,-Ct.y,-Ct.z),c(Ke,he,Ct,M,W,"braccio");for(let R of[-1,1])_(G+"-weld"+Fe+R,Ae.map(ee=>i(ee[0],ee[1],F+R*(Z/2-.014))),.0105,ae,"braccio",29)}Ne(De,"upper"),Ne(Ie,"lower")}let Ht=[Ge[0]+(E?.23:.28),Ge[1]+(E?.69:.84)],dn=[Ht,[Ge[0]+.047,Ge[1]+.17],Ge,[Ge[0]+ot*.22+.06,Ge[1]-.51],[at[0]-.035,at[1]+.87],at];un("main-boom",Ut,Et,E?.49:.5,de),un("dipper",dn,[.093,.164,.19,.234,.152,.107],E?.358:.347,de);function pn(G,S,D,Z,he=de){for(let me of[-1,1])p(G,S,F+me*Z*.5,D,.092,he,"braccio",28),p(G,S,F+me*(Z*.5+.058),D*.78,.046,ae,"braccio",26),m(G,S,F+me*(Z*.5+.107),D*.26,me);g(G,S,F,D*.5,Z+.2,"braccio")}function an(G,S,D,Z,he=.5){let me=[[S-.16,D-.22],[S+.155,D-.22],[S+.133,D+.075],[S+.025,D+.14],[S-.095,D+.1]];for(let Ee of[-1,1])j(G,me,F+Ee*he*.5,.073,Z,"braccio",.014)}an("boom-pedestal",ue[0],ue[1],ae,.58),pn(ue[0],ue[1],.18,.6),pn(Ge[0],Ge[1],.153,.534);function zt(G,S,D,Z=ae,he=.63){let me=G.clone().lerp(S,he);u(G,me,D,Z,"pistoni",20),u(G.clone().lerp(S,.02),G.clone().lerp(S,.074),D*1.075,te,"pistoni",20),u(G.clone().lerp(S,he-.031),me.clone().lerp(S,.024),D*1.13,"iron","pistoni",22),u(me,S,D*.58,"chrome","pistoni",20);for(let De of[G,S])p(De.x,De.y,De.z,D*1.24,D*1.9,Z,"pistoni",22),p(De.x,De.y,De.z+D*1.09,D*.59,.035,"bolt","bulloneria",12);let Ee=G.clone().lerp(S,.15);u(Ee.clone().add(i(0,0,D*.6)),Ee.clone().add(i(.025,0,D*1.43)),D*.23,"edge","pistoni",8)}for(let G of[-1,1]){let S=F+G*.331;zt(i(ue[0]+.46,1.41,S),i(qe[0]-.38,qe[1]-.35,S),E?.113:.108);let D=[[ue[0]-.1,ue[1]-.088],[ue[0]-.097,ue[1]+.18],[ue[0]+.3,ue[1]+.55],[ue[0]+.46,ue[1]+.4],[ue[0]+.13,ue[1]-.045]];j("boom-root-facing",D,F+G*.257,.034,de,"braccio")}let gt=i(qe[0]+.2,qe[1]+(E?.49:.44),F);an("stick-pickup-clevis",gt.x,gt.y,ae,.23),zt(gt,i(Ht[0],Ht[1],F),.11,te,.586);let Mt=i(Ge[0]+(E?.32:.4),Ge[1]-.235,F+.032),mt=i(at[0]+(E?.56:.62),at[1]+.47,F+.032),Rt=i(at[0]+.18,at[1]+.085,F+.032),bt=[[Ge[0]+.06,Ge[1]-.035],[Ge[0]+.28,Ge[1]-.09],[Mt.x+.084,Mt.y+.05],[Mt.x+.067,Mt.y-.05],[Mt.x-.09,Mt.y-.09],[Ge[0]+.04,Ge[1]-.18]];for(let G of[-1,1])j("riser-for-bucket-ram",bt,F+G*.127,.092,de,"braccio",.015);zt(Mt,mt,.0885,de,.6);for(let G of[-1,1]){let S=i(0,0,G*.215),D=[[mt.x-.084,mt.y+.062],[mt.x+.052,mt.y+.1],[mt.x+.105,mt.y-.012],[Rt.x+.105,Rt.y-.012],[Rt.x+.031,Rt.y-.076],[Rt.x-.064,Rt.y-.046],[Rt.x-.042,Rt.y+.068]];j("curved-bucket-link",D,F+G*.212,.086,ae,"benna",.015),h(mt.clone().add(S),i(at[0]-.04,at[1]+.69,F+G*.215),.084,de,"benna",.06)}g(mt.x,mt.y,F,.074,.59,"benna"),g(Rt.x,Rt.y,F,.068,.59,"benna");for(let G=0;G<(A?5:3);G++){let S=F-.17+G*(A?.081:.145),D=G*.013,Z=[i(-1.18,1.64,S),i(-.82,1.97,S-.035),i(-.53,2.17,S),i(qe[0]-.33,qe[1]+.19+D,S),i(qe[0]+.15,qe[1]+.37+D,S),i(qe[0]+.69,qe[1]+.445+D,S),i(Ge[0]-.66,Ge[1]+.181+D,S)];_("hard-feed"+G,Z,.019,A?"track":"iron","tubazioni",25);let he=Z[Z.length-1],me=[he,i(Ge[0]-.31,Ge[1]+.251+D,S),i(Ge[0]-.048,Ge[1]+.19,S+.04),i(Ge[0]+.125,Ge[1]+.016,S+.075),i(Ge[0]+.17,Ge[1]-.32,S+.077)];_("flex-on-knuckle"+G,me,.021,"rubber","tubazioni",17);let Ee=me[me.length-1];_("dipper-line"+G,[Ee,i(Ge[0]+.2+ot*.14,Ge[1]-.64,S+.08),i(at[0]+.111,at[1]+.9,S+.066),i(at[0]+.14,at[1]+.6,S+.061)],.0148,A?"track":"rubber","tubazioni",15);let De=me[1].clone().sub(he).normalize(),Ie=Le=>he.clone().addScaledVector(De,Le);u(Ie(-.066),Ie(-.025),.035,"edge","tubazioni",6),u(Ie(-.025),Ie(.023),.029,"iron","tubazioni",18),u(Ie(.023),Ie(.064),.037,"edge","tubazioni",6);for(let Le of[.073,.086,.099])u(Ie(Le),Ie(Le+.005),.027,"iron","tubazioni",14)}for(let G of[.21,.51,.78]){let S=qe[0]+(Ge[0]-qe[0])*G;l(S,qe[1]+.4+(Ge[1]+.18-qe[1]-.4)*G,F,.063,.048,.464,ae,"tubazioni")}let Tt=F+.285;for(let[G,S]of[[0,0],[1,.057]]){let D=[i(qe[0]-.69,qe[1]-.47+S,Tt),i(qe[0]-.39,qe[1]-.12+S,Tt),i(qe[0]+.05,qe[1]+.12+S,Tt),i(qe[0]+.56,qe[1]+.15+S,Tt),i(qe[0]+1.13,qe[1]+.16+S,Tt)];_("outboard-pipe"+G,D,.017,G?"rubber":"edge","tubazioni",18);for(let Z of[0,4]){let he=D[Z];u(i(he.x-.037,he.y,he.z),i(he.x+.037,he.y,he.z),.028,"bolt","tubazioni",6)}}for(let[G,S]of[[qe[0]-.4,qe[1]-.105],[qe[0]+.56,qe[1]+.167]])l(G,S,Tt+.019,.052,.13,.039,ae,"tubazioni"),p(G,S+.039,Tt+.049,.015,.015,"bolt","bulloneria",6);let Pn=F+.235;for(let G=0;G<3;G++){let S=Pn+G*.032,D=G*.025,Z=[i(Ge[0]-.32,Ge[1]+.116+D,S-.025),i(Ge[0]-.13,Ge[1]+.187+D,S),i(Ge[0]+.125,Ge[1]+.1+D,S+.065),i(Ge[0]+.2,Ge[1]-.28-D,S+.11),i(Ge[0]+.07,Ge[1]-.56-D,S+.105),i(Ge[0]-.135,Ge[1]-.58-D,S+.039)];_("flexible-loop"+G,Z,.019,"rubber","tubazioni",23);let he=Z.at(-1);u(he,he.clone().add(i(-.018,-.066,0)),.029,"edge","tubazioni",8)}let N=F+.237;for(let G=0;G<(A?3:2);G++){let S=(G-1)*.055,D=Ge[0]+.12+S,Z=i(D,Ge[1]-.64,N+.042),he=i(at[0]+.11+S,at[1]+.85,N+.042);u(Z,he,.019,A?"edge":"iron","tubazioni",12);for(let me of[0,.27,.9]){let Ee=Z.clone().lerp(he,me);u(Ee,Ee.clone().add(i(0,-.07,0)),.027,"track","tubazioni",8)}}if(A){let G=Ge[0]+ot*.41+.053,S=Ge[1]+(at[1]-Ge[1])*.41;l(G,S,F+.202,.18,.083,.045,O,"braccio",-1.4);for(let D of[-.061,.061])m(G,S+D,F+.236,.014)}let le=at[0],pe=at[1]-(A?.21:.15),Me=E?1.2:1.26,ge=Math.max(.65,Math.min(1.26,pe-.045)),Oe=E?.99:.83,Ve=[[-Oe,-.86],[-.61,-.94],[-.34,-.987],[-.08,-1],[.19,-.962],[.41,-.85],[.56,-.67],[.66,-.44],[.67,-.23],[.61,-.067],[.54,.045],[.34,.17],[.14,.156],[-.035,.031],[-.15,-.15],[-.32,-.39],[-.54,-.62]],We=Ve.slice(0,12).map(([G,S])=>[le+G,pe+S*ge]);for(let G of[-1,1])j("dished-bucket-side",Ve.map(([Z,he])=>[le+Z,pe+he*ge]),F+G*Me*.48,.064,oe,"benna",.018),G===1&&(n={partIndex:s.length-1,point:i(le+.642,pe-.2*ge,F+Me*.48)}),j("bucket-side-wear",[[-.81,-.827],[-.58,-.92],[-.18,-.95],[.19,-.92],[.49,-.76],[.45,-.66],[.1,-.81],[-.46,-.8]].map(([Z,he])=>[le+Z,pe+he*ge]),F+G*(Me*.5+.03),.029,$,"benna",.008),j("linkage-pin-ear",[[-.25,-.075],[-.2,.141],[-.045,.232],[.145,.197],[.237,.057],[.17,-.11]].map(([Z,he])=>[le+Z,pe+he]),F+G*.198,.072,oe,"benna",.013);if(A)for(let G of[-1,1]){let S=F+G*(Me*.5+.041);for(let D=0;D<3;D++){let Z=-.43+D*.34,he=[[Z,-.8],[Z+.23,-.83],[Z+.31,-.59],[Z+.076,-.55]];j("lower-wear-pad"+D,he.map(([me,Ee])=>[le+me,pe+Ee*ge]),S,.031,oe,"benna",.015)}l(le+.105,pe-.337*ge,S+G*.018,.31,.056,.027,oe,"benna",-.055)}for(let G of[-1,1]){let S=F+G*(Me*.5+.053);j("bucket-side-cutter",[[-.76,-.79],[-.56,-.76],[-.28,-.47],[-.21,-.3],[-.3,-.32],[-.59,-.58]].map(([me,Ee])=>[le+me,pe+Ee*ge]),S,.071,oe,"benna",.014),j("side-cutter-ground-edge",[[-.76,-.8],[-.56,-.768],[-.27,-.463],[-.22,-.33],[-.283,-.452],[-.6,-.71]].map(([me,Ee])=>[le+me,pe+Ee*ge]),S+G*.039,.012,$,"benna",.004);for(let[me,Ee]of[[-.57,-.695],[-.402,-.51]])p(le+me,pe+Ee*ge,S+G*.042,.057,.01,"track","bulloneria",18),p(le+me,pe+Ee*ge,S+G*.054,.04,.025,"bolt","bulloneria",6);j("bucket-cheek-wear-pad",[[.13,-.74],[.34,-.63],[.48,-.46],[.52,-.26],[.45,-.16],[.41,-.37],[.28,-.57],[.09,-.68]].map(([me,Ee])=>[le+me,pe+Ee*ge]),S-G*.012,.034,oe,"benna",.012),_("wear-pad-weld"+G,[[.11,-.71],[.31,-.6],[.43,-.43],[.46,-.26]].map(([me,Ee])=>i(le+me,pe+Ee*ge,S+G*.012)),.012,"edge","benna",13)}for(let G=0;G<We.length-1;G++){let[S,D]=We[G],[Z,he]=We[G+1];h(i(S,D,F),i(Z,he,F),.066,oe,"benna",Me-.04)}for(let G of[-1,0,1]){let S=F+G*Me*.28;_("abrasion-rib"+G,We.slice(1,9).map(([D,Z])=>i(D+.03,Z-.032,S)),.031,"iron","benna",15)}h(i(le-Oe,pe-.86*ge,F-Me*.5),i(le-Oe,pe-.86*ge,F+Me*.5),.105,"edge","benna");for(let G=0;G<5;G++){let S=F-Me*.41+G*Me*.205;j("forged-tooth",[[le-.74,pe-.83*ge],[le-.92,pe-.84*ge],[le-1.107,pe-.908*ge],[le-1.13,pe-.955*ge],[le-1.006,pe-.958*ge],[le-.74,pe-.912*ge]],S,.118,$,"benna",.011),p(le-.872,pe-.888*ge,S+.064,.019,.014,"bolt","bulloneria",8)}return g(le,pe+.06,F,.096,.58,"benna"),n}function ui(r,e,t){let i=new Uint8Array(262144),s=new Uint8Array(256*256*4),a=(d,f,g)=>d+(f-d)*g,o=(d,f,g)=>{let m=Math.max(0,Math.min(1,(g-d)/(f-d)));return m*m*(3-2*m)};function c(d,f,g){let m=Math.imul(d^g,668265261)^Math.imul(f+17,374761393);return m=Math.imul(m^m>>>15,2246822507),((m^m>>>13)>>>0)/4294967295}let l=(d,f,g,m,y)=>{let _=d*g,v=f*m,M=Math.floor(_),E=Math.floor(v),b=(L,O)=>c((L%g+g)%g,(O%m+m)%m,y),A=o(0,1,_-M),W=o(0,1,v-E);return a(a(b(M,E),b(M+1,E),A),a(b(M,E+1),b(M+1,E+1),A),W)};for(let d=0;d<256;d++)for(let f=0;f<256;f++){let g=f/256,m=d/256,y=(d*256+f)*4,_=t.seed,v=l(g,m,4,3,_),M=l(g,m,14,11,_+4),E=c(f,d,_+7),b=l(g,m,49,27,_+2),A=l(g,m,73,6,_+19),W=v*.41+M*.23+b*.17+A*.15+E*.04,L=o(t.cut-.07,t.cut+.045,W),O=o(.49,.71,v*.37+b*.32+M*.2+E*.11),te=o(.72,.93,A)*(.25+.75*M);for(let C=0;C<3;C++){let K=t.paint[C]*(.84+.2*M+.09*E),q=a(t.metal[C],t.oxide[C],O)*(.88+.16*b+.08*E);i[y+C]=Math.min(255,a(a(K,q,L),t.metal[C],te*.17))}i[y+3]=255,s[y]=Math.round(255*(.56+.04*E+.035*b-.095*L+.04*O)),s[y+1]=Math.round(255*a(.6+.085*M,.39+.4*O+.1*b,L)),s[y+2]=Math.round(255*a(.11,.72-.4*O,L)),s[y+3]=255}function h(d,f){let g=new r.DataTexture(d,256,256,r.RGBAFormat);return g.wrapS=g.wrapT=r.RepeatWrapping,g.magFilter=r.LinearFilter,g.minFilter=r.LinearMipmapLinearFilter,g.generateMipmaps=!0,f&&(g.colorSpace=r.SRGBColorSpace),g.anisotropy=3,g.needsUpdate=!0,g}let u=h(i,!0),p=h(s,!1);return new r.MeshStandardMaterial({name:e,map:u,bumpMap:p,roughnessMap:p,metalnessMap:p,bumpScale:.021,metalness:1,roughness:1,envMapIntensity:.98})}function Lh(r,e,t){let{V:n,box:i,bar:s,rod:a,plate:o,disc:c,pin:l,ring:h,bolts:u,machineScrew:p,append:d,round:f,cache:g,identity:m,quad:y,conduit:_,parts:v}=e,M=-.37,E=(R,ee,fe)=>{let ye=R.clone();return ye.color.set(fe),ye.name=ee,ye},b=ui(r,"Ocra industriale invecchiato",{seed:53,paint:[211,158,48],metal:[130,123,101],oxide:[96,75,54],cut:.675}),A=ui(r,"Rosso ossidato e lamiera scoperta",{seed:71,paint:[124,44,46],metal:[125,111,96],oxide:[98,73,57],cut:.663}),W=ui(r,"Cassone del braccio in acciaio antracite",{seed:12,paint:[46,47,44],metal:[101,99,90],oxide:[87,65,49],cut:.63}),L=ui(r,"Asta di spinta e guide brunite",{seed:24,paint:[51,54,52],metal:[114,111,96],oxide:[90,68,43],cut:.605}),O=ui(r,"Fusione consumata della benna",{seed:39,paint:[117,113,96],metal:[111,109,96],oxide:[133,98,75],cut:.467}),te=ui(r,"Interno della benna segnato dalla terra",{seed:46,paint:[48,50,45],metal:[73,75,66],oxide:[83,64,53],cut:.47}),C=ui(r,"Pattini ossidati",{seed:44,paint:[75,69,59],metal:[124,118,100],oxide:[121,89,61],cut:.563}),K=ui(r,"Acciaio fuso del telaio",{seed:14,paint:[103,108,100],metal:[135,137,124],oxide:[111,83,66],cut:.518}),q=E(t.iron,"Battute di acciaio esposto",12764084),ne=b,de=t.glass.clone();de.name="Vetro storico neutro",de.color.set(4477529),de.opacity=.49,de.metalness=.13,de.clearcoat=.58,de.envMapIntensity=.76;let oe=(R,ee,fe,ye=1,xe=.019)=>{c(R,ee,fe,xe,.01,"iron","bulloneria",10),c(R,ee,fe+ye*.007,xe*.81,.012,"bolt","bulloneria",10)},$=(R,ee)=>R.map(([fe,ye])=>n(fe,ye,ee)),ae=(R,ee,fe,ye,xe,Te,je,Xe,tt,Gt="lamierati")=>y(R,[n(ee,Te,fe),n(ye,Te,xe),n(ye,Xe,xe),n(ee,je,fe)],tt,Gt),I=(R,ee,fe,ye,xe="telaio")=>a(R,ee,fe,ye,xe,10),X=(R,ee,fe,ye,xe,Te)=>{let je=new r.Shape(R.map(([Gt,Wt])=>new r.Vector2(Gt,Wt)));je.closePath(),ee.forEach(Gt=>{let Wt=new r.Path(Gt.map(([mn,vt])=>new r.Vector2(mn,vt)));Wt.closePath(),je.holes.push(Wt)});let Xe=new r.ExtrudeGeometry(je,{depth:ye,bevelEnabled:!1,curveSegments:3});Xe.computeBoundingBox();let tt=Xe.boundingBox.getCenter(n());Xe.translate(-tt.x,-tt.y,-tt.z),d(Xe,xe,n(tt.x,tt.y,fe),m,n(1,1,1),Te)},we=g("perforated-period-shoe",()=>{let R=new r.Shape;[[-.5,-.4],[-.43,-.5],[.42,-.5],[.5,-.42],[.5,.42],[.42,.5],[-.43,.5],[-.5,.4]].forEach(([ye,xe],Te)=>Te?R.lineTo(ye,xe):R.moveTo(ye,xe)),R.closePath();for(let ye of[-.275,.275]){let xe=new r.Path;xe.absellipse(.04,ye,.115,.052,0,2*Math.PI,!0,0),R.holes.push(xe)}let fe=new r.ExtrudeGeometry(R,{depth:.76,bevelEnabled:!0,bevelSize:.011,bevelThickness:.04,bevelSegments:1,curveSegments:6});return fe.translate(0,0,-.38),fe.rotateX(Math.PI*.5),fe});for(let R of v)R.group==="cingoli"&&R.scale.z>.53&&R.scale.z<.56&&(R.scale.y>.064?(R.geometry=we,R.material=C,R.scale.z*=1.22,R.scale.x*=1.055):(R.scale.z*=1.16,R.scale.y*=.57,R.material=C));for(let R of[-1,1]){let ee=R*1.112,fe=[[-3.56,.58],[-3.37,.78],[-2.91,.814],[-.33,.807],[-.064,.715],[.17,.642],[.12,.49],[-.18,.399],[-2.71,.34],[-3.46,.435]],ye=[-2.44,-1.43].map(xe=>Array.from({length:16},(Te,je)=>[xe+.059*Math.cos(je*Math.PI/8),.663+.057*Math.sin(je*Math.PI/8)]));X(fe,ye,ee,.074,K,"telaio");for(let xe of[-3.17,-2.93,-.39,-.16])s(n(xe,.6,ee+R*.032),n(xe+.25,.6,ee+R*.032),.027,"edge","telaio",.044);s(n(-3.2,.402,ee+R*.041),n(-.375,.402,ee+R*.041),.039,K,"telaio",.057)}let w=v.length,T=[[-2.88,-1.16],[-3.19,-1.135],[-3.46,-1.025],[-3.65,-.85],[-3.76,-.64],[-3.8,-.38],[-3.8,.38],[-3.76,.64],[-3.65,.85],[-3.46,1.025],[-3.19,1.135],[-2.88,1.16]],z=[[-3.81,3.33],[-3.55,3.4],[-3.2,3.51],[-2.89,3.59],[-2.32,3.72],[-1.7,3.79],[-1.1,3.82],[-.51,3.77],[-.17,3.64],[.02,3.48]];function F(R){let ee=z.findIndex(xe=>xe[0]>=R);if(ee<=0)return z[ee===0?0:z.length-1][1];let[fe,ye]=[z[ee-1],z[ee]];return fe[1]+(ye[1]-fe[1])*(R-fe[0])/(ye[0]-fe[0])}let U=1.48,j=2.34,V=3.27;i(-1.55,1.39,0,3.59,.18,2.39,K,"telaio"),i(-3.18,1.35,0,1.15,.24,1.93,"iron","telaio"),T.slice(0,-1).forEach(([R,ee],fe)=>{let[ye,xe]=T[fe+1],Te=(R+ye)/2;ae("rb-stern-deck-"+fe,R-.105,ee*1.04,ye-.105,xe*1.04,1.25,1.49,1.49,K,"telaio"),ae("rb-stern-low-"+fe,R,ee,ye,xe,U,j,j,A),ae("rb-stern-upper-"+fe,R,ee,ye,xe,j,V,V,b),ae("rb-stern-rim-"+fe,R,ee*1.005,ye,xe*1.005,V,F(R),F(ye),ne);let je=n(R,F(R),ee),Xe=n(ye,F(ye),xe);y("rb-rear-roof-"+fe,[je,Xe,n(-2.88,F(-2.88)+.035,0),n(Te,(F(R)+F(ye))*.5+.016,(ee+xe)*.3)],ne,"lamierati")});let Y=(R,ee,fe,ye,xe,Te,je)=>o(R,[[ee,ye],[fe,ye],[fe,xe],[ee,xe]],Te,.035,je,"lamierati",.006);for(let R of[-1,1]){let ee=R*1.16;i(-2.69,2.38,ee-R*.021,.6,1.78,.049,"interior","motore");for(let xe=0;xe<16;xe++){let Te=1.52+xe*.113;i(-2.69,Te,ee,.556,.053,.085,Te<j?A:b,"motore");for(let je of[-1,1])xe%5===0&&oe(-2.69+je*.307,Te,ee+R*.043,R,.014)}for(let xe of[-.325,.327])i(-2.69+xe,2.39,ee,.037,1.81,.048,K,"lamierati");let fe=[[-2.34,-1.84],[-1.824,-1.18]];R<0&&fe.push([-1.16,-.5],[-.48,.01]);for(let[xe,Te]of fe){Y("rb-plate-low"+xe,xe,Te,U,j,ee,A),Y("rb-plate-high"+xe,xe,Te,j+.006,V,ee,b),R===1&&xe===-2.34&&(v[v.length-1].captionPoint=n(xe+.125,V-.115,ee+.025));for(let je of[xe+.03,Te-.035])for(let Xe of[1.57,2.28,2.77,3.17])oe(je,Xe,ee+R*.027,R)}if(R<0){i(-1.78,2.76,ee-.037,.35,.25,.014,"interior","motore");for(let xe=0;xe<7;xe++)i(-1.78,2.66+xe*.035,ee-.051,.32,.014,.028,b,"motore")}let ye=[-2.89,-2.31,-1.66,-.93,-.37,-.17];for(let xe=0;xe<ye.length-1;xe++){let Te=ye[xe],je=ye[xe+1];ae("rb-gutter"+R+"-"+xe,Te,ee+R*.009,je,ee+R*.009,V,F(Te),F(je),ne);for(let Xe of[Te+.052,je-.048])oe(Xe,F(Xe)-.054,ee+R*.023,R,.015)}}let ie=[-2.89,-2.32,-1.7,-1.1,-.51,-.17];for(let R=0;R<ie.length-1;R++){let ee=ie[R],fe=ie[R+1],xe=(R>=3?[[-1.165,-1.145,-1.095,-.99,-.65],[.095,.99,1.095,1.145,1.165]]:[[-1.165,-1.145,-1.095,-.99,0,.99,1.095,1.145,1.165]]).flatMap(Te=>Te.slice(1).map((je,Xe)=>[Te[Xe],je]));for(let Te=0;Te<xe.length;Te++){let[je,Xe]=xe[Te],tt=Gt=>.108*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(Gt)/1.165,12)))+.025*(1-Math.abs(Gt)/1.165);y("rb-crown-"+R+"-"+Te,[n(ee,F(ee)+tt(je),je),n(fe,F(fe)+tt(je),je),n(fe,F(fe)+tt(Xe),Xe),n(ee,F(ee)+tt(Xe),Xe)],ne,"lamierati")}}o("rb-rolled-windscreen-brow",[[-.205,3.297],[-.205,3.648],[-.157,3.617],[-.099,3.556],[-.019,3.432],[.036,3.385],[.046,3.35],[-.069,3.338],[-.104,3.297]],.635,1.097,ne,"lamierati",.009);for(let R of[-2.31,-1.66,-1.03,-.47]){let ee=F(R),fe=[n(R,ee-.02,-1.135),n(R,ee+.057,-1.058),n(R,ee+.092,-.88),n(R,ee+.103,0),n(R,ee+.092,.88),n(R,ee+.057,1.058),n(R,ee-.02,1.135)];R<-1.05&&_("22rb-roof-hoop-"+R,fe,.021,K,"telaio",26);for(let ye of[-1,1])a(n(R,ee-.054,ye*1.116),n(R,ee+.027,ye*1.097),.018,"iron","bulloneria",10)}let P=1.161,x=[[-1.17,U],[.21,U],[.21,2.32],[-.13,3.29],[-1.17,3.29]],k=[[-1.105,2.66],[-1.01,2.53],[-.845,2.46],[-.65,2.435],[-.02,2.395],[.061,2.427],[.071,2.51],[-.155,3.15],[-.22,3.207],[-.39,3.223],[-.68,3.2],[-.865,3.144],[-1.018,3.046],[-1.09,2.91],[-1.116,2.77]].map(([R,ee])=>[.071+(R-.071)*.18,ee]);function B(){let R=new r.Shape($(x,0).map(xe=>new r.Vector2(xe.x,xe.y)));R.closePath();let ee=new r.Path($(k,0).map(xe=>new r.Vector2(xe.x,xe.y)));ee.closePath(),R.holes.push(ee);let fe=new r.ExtrudeGeometry(R,{depth:.026,bevelEnabled:!1,curveSegments:2});fe.computeBoundingBox();let ye=fe.boundingBox.getCenter(n());fe.translate(-ye.x,-ye.y,-ye.z),d(fe,b,n(ye.x,ye.y,P),m,n(1,1,1),"cabina")}let Q=v.length;B(),o("rb-door-lower",[[-1.16,1.488],[.2,1.488],[.2,2.315],[.192,j],[-1.16,j]],P+.021,.028,A,"cabina",.006),o("rb-cab-sideglass",k,P-.019,.014,de,"vetri",.001);for(let R=0;R<k.length;R++){let ee=k[R],fe=k[(R+1)%k.length];I(n(ee[0],ee[1],P+.025),n(fe[0],fe[1],P+.025),.023,"edge","cabina")}for(let[R,ee]of[[[-1.165,1.5],[-1.165,3.29]],[[.205,1.5],[.205,2.34]],[[.205,2.34],[-.14,3.29]]])I(n(...R,P+.035),n(...ee,P+.035),.018,K,"cabina");i(.124,2.18,P+.05,.052,.119,.028,"iron","cabina"),I(n(.13,2.13,P+.075),n(.13,2.22,P+.075),.015,"edge","cabina");let se=1;for(let R of v.slice(Q))R.position=R.position.clone().add(n(-se,0,.047));let re=P+.052;for(let R of[U+.018,3.292])s(n(-2.235,R,re),n(.002,R,re),.032,K,"cabina",.037);for(let R of[-2.05,-1.02])c(R,1.538,re+.012,.044,.046,"iron","trasmissione",16),u(R,1.538,re+.036,.016);i(-1.139,2.3,.69,.055,1.62,.96,"interior","cabina"),i(-.53,1.483,.7,1.29,.062,.93,K,"cabina");let ve=n(-.41,1.344,1.236);for(let R of[-.23,.23])s(n(ve.x+R,ve.y,ve.z),n(ve.x+R,1.49,1.089),.034,"iron","cabina",.043);s(n(ve.x-.26,ve.y,ve.z),n(ve.x+.27,ve.y,ve.z),.05,K,"cabina",.097);for(let[R,ee]of[[-2.34,-2.19],[-2.14,-.88]])for(let fe=0;fe<3;fe++)i((R+ee)/2,2.362+fe*.048,P+(R>=-2.14?.1:.027),ee-R,.022,.009,A,"lamierati");let _e=(R,ee,fe,ye,xe,Te)=>{let je=.24-Math.max(0,ye-2.31)*.36,Xe=.24-Math.max(0,xe-2.31)*.36;y(R,[n(je,ye,ee),n(je,ye,fe),n(Xe,xe,fe),n(Xe,xe,ee)],Te,"vetri")};_e("rb-front-main",.16,1.104,2.35,3.25,de),_e("rb-front-low",.2,1.07,1.91,2.24,de),i(.236,1.677,.631,.061,.379,1.045,A,"cabina");for(let R of[.168,1.097])I(n(.274,1.89,R),n(.274,2.258,R),.013,"edge","cabina"),I(n(.274,2.353,R),n(-.077,3.242,R),.015,"edge","cabina");for(let R of[1.898,2.26,2.347])I(n(.265,R,.162),n(.265,R,1.108),.013,"edge","cabina");for(let R of[.12,1.136])I(n(.25,1.53,R),n(.25,2.31,R),.035,b,"cabina"),I(n(.25,2.31,R),n(-.11,3.31,R),.036,b,"cabina");for(let R of[1.62,2.295,3.29]){let ee=.25-Math.max(0,R-2.31)*.36;I(n(ee,R,.11),n(ee,R,1.14),.037,b,"cabina")}i(-.14,3.31,.63,.12,.1,1.05,b,"cabina");let Se=n(-.21,3.41,1.05);i(Se.x,Se.y,.63,.36,.048,.85,"interior","cabina",-.04),i(-2.55,F(-2.55)+.151,-.33,.82,.045,.47,ne,"lamierati"),I(n(-2.8,F(-2.8)+.185,-.46),n(-2.29,F(-2.29)+.185,-.46),.019,K,"cabina"),a(n(-2.86,3.61,-.58),n(-2.03,3.61,-.58),.076,"iron","motore",18),_("rb-exhaust-tail",[n(-2.9,3.57,-.58),n(-2.92,3.65,-.58),n(-3.04,3.72,-.58)],.044,"track","motore",9),i(-.63,2.02,.126,1.12,.93,.036,"interior","cabina"),o("rb-driver-bulkhead",[[-1.15,2.485],[-.035,2.485],[-.2,3.18],[-1.15,3.235]],.126,.032,"interior","cabina",.004),i(-.91,1.82,.79,.23,.42,.23,"track","cabina"),i(-.81,2.045,.79,.53,.12,.47,"interior","cabina"),i(-1.029,2.294,.79,.101,.494,.429,"interior","cabina",.09);for(let R=0;R<4;R++){let ee=.32+R*.17,fe=n(-.36+R%2*.04,2.37+R%2*.075,ee);I(n(-.46,1.64,ee),fe,.019,"iron","cabina"),I(fe,fe.clone().add(n(-.027,.096,0)),.03,"interior","cabina"),i(-.23,1.56,ee,.161,.039,.075,"track","cabina")}o("rb-dash-side",[[-.58,2.36],[-.42,2.365],[-.28,2.51],[-.31,2.576],[-.57,2.55]],.235,.117,"track","cabina",.014);for(let R of[-.515,-.429])c(R,2.49,.304,.035,.013,"iron","cabina",22),c(R,2.49,.315,.026,.006,"light","cabina",16);a(n(-.16,1.561,.96),n(-.19,2.435,.88),.018,q,"cabina",14);let be=g("rb-lever-knob",()=>new r.SphereGeometry(1,14,9));d(be,t.rubber,n(-.19,2.435,.88),m,n(.047,.058,.046),"cabina");let Re=v.length;for(let[R,ee]of[[-2.21,-.16],[-2.42,-.39],[-2.69,-.16],[-2.91,-.39]])i(R,2.08,ee,.23,.56,.26,"iron","motore"),i(R,2.39,ee,.2,.125,.238,"track","motore");for(let[R,ee,fe]of[[0,-.57,.24],[1,-1.36,.31]]){let ye=2.02+R*.21;c(ee,ye,M,fe,.76,"iron","trasmissione");for(let xe=0;xe<14;xe++)h(ee,ye,M-.306+xe*.047,fe,.015,"edge","trasmissione");for(let xe of[-1,1])c(ee,ye,M+xe*.377,fe*1.21,.051,"track","trasmissione"),c(ee,ye,M+xe*.413,fe*.45,.083,"iron","trasmissione");h(ee,ye,M-.43,fe*.99,.032,"rust","trasmissione")}let ze=n(-.1,1.38,M),Pe=n(4.84,5.99,M),ke=Pe.clone().sub(ze).normalize(),He=n(-ke.y,ke.x,0),Ye=(R,ee=0)=>ze.clone().lerp(Pe,R).addScaledVector(He,ee*1.27),rt=R=>R.map(([ee,fe])=>{let ye=Ye(ee,fe);return[ye.x,ye.y]}),ft=(R,ee,fe,ye,xe=20)=>{let Te=n(-ee.y,ee.x,0);return Array.from({length:xe},(je,Xe)=>{let tt=Xe*2*Math.PI/xe;return[R.x+ee.x*fe*Math.cos(tt)+Te.x*ye*Math.sin(tt),R.y+ee.y*fe*Math.cos(tt)+Te.y*ye*Math.sin(tt)]})},pt=rt([[-.023,.12],[.025,.28],[.22,.385],[.47,.369],[.6,.27],[.82,.19],[.97,.148],[1.004,.08],[1.018,-.042],[.973,-.145],[.797,-.195],[.603,-.242],[.46,-.322],[.2,-.347],[.027,-.29],[-.023,-.184]]);for(let R of[-1,1]){o("rb-solid-boom-cheek",pt,M+R*.277,.071,W,"braccio",.012);let ee=rt([[.015,-.28],[.21,-.332],[.46,-.305],[.6,-.22],[.82,-.166],[.979,-.119],[.983,-.143],[.81,-.204],[.601,-.256],[.46,-.349],[.21,-.375],[.016,-.32]]);o("face-bottom-longitudinal-flange",ee,M+R*.323,.092,q,"braccio",.007);let fe=rt([[.045,.258],[.22,.369],[.46,.351],[.588,.267],[.82,.178],[.962,.15],[.964,.169],[.82,.205],[.589,.3],[.461,.394],[.222,.408],[.047,.299]]);o("face-top-longitudinal-flange",fe,M+R*.323,.086,q,"braccio",.006);let ye=rt([[.065,.155],[.347,.228],[.488,.232],[.502,.18],[.344,.161],[.069,.099]]);o("face-web-doubler",ye,M+R*.349,.031,W,"braccio",.007);for(let xe of[.07,.17,.28,.392,.48,.615,.731,.825,.919]){let Te=Ye(xe,.124);u(Te.x,Te.y,M+R*.371,.027,R)}}let ut=(R,ee)=>{for(let fe=1;fe<ee.length;fe++){let ye=Ye(...ee[fe-1]),xe=Ye(...ee[fe]);y(R+fe,[ye.clone().add(n(0,0,-.275)),xe.clone().add(n(0,0,-.275)),xe.clone().add(n(0,0,.275)),ye.clone().add(n(0,0,.275))],W,"braccio")}};ut("rb-closed-upper-web",[[.024,.255],[.22,.367],[.47,.35],[.6,.255],[.82,.175],[.958,.124]]),ut("rb-closed-lower-web",[[.025,-.273],[.2,-.332],[.46,-.304],[.603,-.225],[.797,-.181],[.973,-.129]]);for(let R of[.13,.229,.327,.575,.678,.775,.876,.951]){let ee=Ye(R,-.17);a(ee.clone().add(n(0,0,-.295)),ee.clone().add(n(0,0,.295)),.043,q,"braccio",14)}for(let R of[-1,1])o("face-main-cheek",[[ze.x-.31,1.26],[ze.x+.33,1.23],[ze.x+.3,1.48],[ze.x+.12,1.66],[ze.x-.17,1.65],[ze.x-.33,1.5]],M+R*.39,.102,W,"telaio",.026);l(ze.x,ze.y,M,.156,1.04);let It=.49;function ue(R,ee,fe,ye){let xe=(Te,je,Xe,tt,Gt)=>{let Wt="face-rim-"+Te+"-"+je+"-"+Xe,mn=g(Wt,()=>{let vt=new r.Shape;vt.absarc(0,0,Te,0,2*Math.PI,!1);let on=new r.Path;on.absarc(0,0,je,0,2*Math.PI,!0),vt.holes.push(on);let Ni=new r.ExtrudeGeometry(vt,{depth:Xe,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:22});return Ni.translate(0,0,-Xe*.5),Ni});d(mn,Gt,n(R.x,R.y,R.z+tt),m,n(1,1,1),"trasmissione")};xe(ee*.95,ee*.81,fe,0,W);for(let Te of[-1,1])xe(ee,ee*.88,.026,Te*fe*.49,q);c(R.x,R.y,R.z,ee*.235,fe*1.65,W,"trasmissione",28);for(let Te=0;Te<5;Te++){let je=Te*Math.PI*2/5+ye*.124+.18,Xe=Math.cos(je),tt=Math.sin(je),Gt=-tt,Wt=Xe,mn=(vt,on)=>[R.x+vt*Xe+on*Gt,R.y+vt*tt+on*Wt];o("head-spoke-"+ye+"-"+Te,[mn(ee*.16,-ee*.099),mn(ee*.88,-ee*.06),mn(ee*.88,ee*.076),mn(ee*.18,ee*.126)],R.z,fe*.57,W,"trasmissione",.009)}c(R.x,R.y,R.z+fe*.88,ee*.092,.052,"bolt","trasmissione",18)}[-.371,.371].forEach((R,ee)=>ue(Pe.clone().add(n(0,0,R)),It,.125,ee)),c(Pe.x,Pe.y,M,.103,1.045,q,"trasmissione",24);let at=Ye(.535,-.014),ot=n(.963,.269,0).normalize(),qe=n(-ot.y,ot.x,0),Ut=R=>at.clone().addScaledVector(ot,R),Et=4.51,un=Ut(-.79),Ht=Ut(Et),dn=R=>R.map(([ee,fe])=>{let ye=Ut(ee).addScaledVector(qe,fe);return[ye.x,ye.y]}),pn=dn([[-.81,-.077],[-.78,-.135],[Et-.23,-.15],[Et,-.09],[Et+.02,.082],[Et-.21,.155],[-.75,.125],[-.81,.072]]);o("crowd-handle-rack",pn,M,.279,L,"braccio",.014);let an=dn([[-.71,.055],[Et-.2,.086],[Et-.2,.111],[-.71,.085]]);for(let R of[-1,1])o("crowd-handle-rubbed-edge",an,M+R*.148,.013,q,"braccio",.003);for(let R=0;R<20;R++){let ee=Ut(-.71+R*.2).addScaledVector(qe,-.146);i(ee.x,ee.y,M,.059,.052,.214,q,"trasmissione",Math.atan2(ot.y,ot.x))}let zt=un.clone().addScaledVector(ot,.014);c(zt.x,zt.y,M,.103,.298,q,"trasmissione",20);for(let R of[-1,1]){let ee=dn([[-.29,-.269],[.24,-.267],[.348,-.155],[.34,.117],[.18,.237],[-.2,.237],[-.33,.09]]),fe=ft(at,ot,.193,.118,16);X(ee,[fe],M+R*.343,.081,W,"trasmissione");let ye=Ye(.53,.192);c(ye.x,ye.y,M+R*.421,.147,.071,W,"trasmissione",24),u(ye.x,ye.y,M+R*.466,.063,R)}for(let R of[-1,1]){let ee=Ut(-.2).addScaledVector(qe,R*.196),fe=Ut(.23).addScaledVector(qe,R*.196);s(ee,fe,.085,q,"trasmissione",.38)}let gt=1.49,Mt=Ht.x,mt=Ht.y,Rt=R=>R.map(([ee,fe])=>[Mt+ee,mt+fe]),bt=(R,ee,fe=0)=>n(Mt+R,mt+ee,M+fe),Tt=(R,ee,fe,ye,xe,Te=.008)=>o(R,Rt(ee),M+fe,ye,xe,"benna",Te),Pn=(R,ee,fe,ye,xe,Te)=>{y(R,[bt(...ee,ye),bt(...fe,ye),bt(...fe,xe),bt(...ee,xe)],Te,"benna")},N=[[-.21,-.15],[-.169,.005],[-.046,.12],[.216,.191],[.57,.16],[.974,.095],[1.302,.016],[1.373,-.044],[1.322,-.284],[1.26,-.61],[1.22,-.867],[1.188,-1.011],[1.056,-1.099],[.631,-1.071],[.237,-1.015],[-.03,-.906],[-.201,-.715],[-.272,-.499],[-.294,-.317]],le=[-.04,-.42],pe=[[-.192,-.403],[-.148,-.245],[-.038,-.195],[.119,-.24],[.224,-.4],[.392,-.517],[.793,-.619],[1.165,-.658],[1.208,-.748],[.968,-.761],[.585,-.695],[.293,-.607],[.113,-.538],[-.038,-.562],[-.151,-.522]];for(let R of[-1,1]){let ee=R*(gt*.5-.04);Tt("rb-dipper-side",N,ee,.092,O,.023),Tt("rb-dipper-brace",pe,ee+R*.062,.056,O,.012),Tt("rb-dipper-edge-strip",[[1.251,-.003],[1.361,-.048],[1.29,-.394],[1.19,-.941],[1.104,-.987],[1.133,-.752]],ee+R*.06,.042,q,.008),Tt("rb-dipper-welded-wear-pad",[[.878,-.114],[.98,-.136],[.839,-.633],[.762,-.608]],ee+R*.059,.044,O,.013),Tt("rb-dipper-door-side",[[.007,-.863],[.305,-.986],[.681,-1.024],[1.137,-1.027],[1.16,-.924],[.653,-.911],[.291,-.885],[.064,-.798]],ee+R*.066,.056,q);for(let[ye,xe]of[[-.053,-.386],[.2,-.461],[.895,-.203],[.794,-.536],[1.23,-.225],[1.12,-.843]])u(Mt+ye,mt+xe,M+ee+R*.104,.032,R)}let Me=[[-.293,-.308],[-.278,-.497],[-.209,-.69],[-.04,-.867],[.23,-.981]];for(let R=0;R<Me.length-1;R++)Pn("rb-heel-bend-"+R,Me[R],Me[R+1],-gt*.473,gt*.473,O);let ge=[[.1,-.906],[.3,-1.077],[.71,-1.177],[1.097,-1.189],[1.203,-1.023]];for(let R=0;R<ge.length-1;R++)Pn("rb-drop-door-"+R,ge[R],ge[R+1],-gt*.47,gt*.47,te);let Oe=[[1.166,-1.028],[1.23,-.815],[1.274,-.562],[1.326,-.26],[1.375,-.03],[1.405,.022]];for(let R=0;R<Oe.length-1;R++)Pn("rb-dipper-front-"+R,Oe[R],Oe[R+1],-gt*.49,gt*.49,O);s(bt(1.362,-.037,-gt*.5),bt(1.362,-.037,gt*.5),.094,q,"benna",.101);for(let R=0;R<4;R++){let ee=R/3,fe=gt*(-.43+.86*ee),ye=.59+.115*(1-Math.sin(ee*Math.PI)),xe=[[1.22,-.099],[1.403,-.1],[1.514,.147],[1.554,ye*.65],[1.584,ye],[1.544,ye-.011],[1.399,ye*.68],[1.245,.179]];Tt("rb-dipper-upturned-tooth-"+R,xe,fe,.183,q,.014),c(Mt+1.36,mt+.023,M+fe+.101,.037,.043,"iron","bulloneria",14)}for(let R of[-1,1]){let ee=R*.411;Tt("rb-open-back-socket",[[.116,.127],[.016,.199],[-.127,.157],[-.234,.021],[-.252,-.07],[-.188,-.156],[-.07,-.209],[.13,-.179],[.212,-.068],[.214,.024]],ee,.124,W,.016);let ye=Ut(Et-.38);ye.z=M+ee;let xe=bt(.31,-.401,ee);s(ye,xe,.078,W,"benna",.099)}l(Ht.x,Ht.y,M,.121,.995,"benna"),a(bt(-.04,-.425,-gt*.55),bt(-.04,-.425,gt*.55),.085,W,"benna",22);for(let R of[-1,1])c(Mt+le[0],mt+le[1],M+R*gt*.557,.124,.047,q,"benna",26);let Ve=bt(.285,.375);for(let R of[-1,1]){let fe=[[-.04,-.42],[-.108,-.244],[.018,.081],[.2,.353]].map(([xe,Te],je)=>bt(xe,Te,R*(gt*.51-je*.171)));for(let xe=1;xe<fe.length;xe++)s(fe[xe-1],fe[xe],.096,O,"benna",.075);o("rb-horizontal-hoist-block",[[-.263,.093],[-.208,.128],[.113,.13],[.238,.062],[.258,-.016],[.172,-.105],[-.158,-.118],[-.267,-.033]].map(([xe,Te])=>[Ve.x+xe,Ve.y+Te]),M+R*.116,.061,W,"trasmissione",.014),c(Ve.x,Ve.y,M+R*.165,.065,.05,q,"trasmissione",20)}c(Ve.x,Ve.y,M,.121,.208,"iron","trasmissione",22);function We(R,ee,fe,ye){let xe=fe.x-R.x,Te=fe.y-R.y,je=xe*xe+Te*Te,Xe=ee*ee/je,tt=ye*ee*Math.sqrt(Math.max(0,je-ee*ee))/je;return n(R.x+Xe*xe-tt*Te,R.y+Xe*Te+tt*xe,R.z)}let G=(R,ee,fe=.014)=>I(R,ee,fe,"track","tubazioni"),S=n(.205,3.78,M+.08);s(n(-.24,3.39,M+.08),S,.092,W,"telaio",.103),ue(S,.213,.079,3);let D=n(-.76,2.55,M+.11),Z=We(S,.209,D,-1);G(D,Z);for(let R of[-1,1]){let ee=Pe.clone().add(n(0,0,R*.371)),fe=Ve.clone().add(n(0,0,R*.107)),ye=We(ee,It-.027,S,-1),xe=We(S,.206,ye,1);G(xe,ye);let Te=We(ee,It-.027,fe,1),je=We(fe,.148,Te,R);G(Te,je,.016);let Xe=n(-2.02,3.5,M+R*.245),tt=Ye(.952,.152);tt.z=M+R*.338,G(Xe,tt,.014)}o("face-fairlead-cover",[[.11,1.48],[.95,1.45],[.88,1.63],[.57,2.51],[.22,2.69],[-.17,2.755]],M-.41,.165,b,"lamierati",.012);let he=n(.12,2.7,M-.65),me=n(.55,2.48,M-.65);s(he,me,.043,b,"lamierati",.64);let Ee=new Map,De=(R,ee)=>{let fe=R.uuid+"|"+ee.elements.map(xe=>Math.round(xe*1e7)).join(",");if(Ee.has(fe))return Ee.get(fe);let ye=R.clone();return ye.applyMatrix4(ee),Ee.set(fe,ye),ye},Ie=new r.Matrix4().makeScale(1,1.075,1),Le=new r.Matrix4,Ue=new r.Matrix4,Ne=new r.Matrix4;for(let R of v.slice(w,Re)){if(R.position=R.position.clone(),R.position.y=U+(R.position.y-U)*1.075,R.captionPoint&&(R.captionPoint.y=U+(R.captionPoint.y-U)*1.075),Math.abs(R.quaternion.x)+Math.abs(R.quaternion.y)+Math.abs(R.quaternion.z)<1e-5){R.scale=R.scale.clone(),R.scale.y*=1.075;continue}Le.compose(n(),R.quaternion,R.scale),Ue.copy(Le).invert(),Ne.copy(Ue).multiply(Ie).multiply(Le),R.geometry=De(R.geometry,Ne)}let Ae=new Set([b,A,ne,O,W,L]),Fe=n(),Ze=n();for(let R of v){if(!Ae.has(R.material)||!["lamierati","cabina","benna","braccio"].includes(R.group))continue;let ee=R.geometry.clone(),fe=ee.getAttribute("position"),ye=ee.getAttribute("normal"),xe=ee.getAttribute("uv");for(let Te=0;Te<fe.count;Te++){Fe.fromBufferAttribute(fe,Te).multiply(R.scale).applyQuaternion(R.quaternion).add(R.position),Ze.fromBufferAttribute(ye,Te).applyQuaternion(R.quaternion);let je=Math.abs(Ze.x),Xe=Math.abs(Ze.y),tt=Math.abs(Ze.z),Gt=je>Xe&&je>tt?Fe.z:Fe.x,Wt=Xe>je&&Xe>tt?Fe.z:Fe.y;xe.setXY(Te,Gt*.71+.143,Wt*.67+.323)}R.geometry=ee}let nt=.826,lt=new r.Quaternion().setFromAxisAngle(n(0,1,0),-.135),ct=new r.Quaternion().setFromAxisAngle(n(0,1,0),.345),Ke=n(-1.565,0,0),Dt=1.19,Ct=new r.Matrix4().makeScale(Dt,1,1);for(let R of v.slice(0,w)){let ee=R.position.x-Ke.x;R.position=R.position.clone(),R.position.x=Ke.x+ee*Dt+.32,Le.compose(n(),R.quaternion,R.scale),Ue.copy(Le).invert(),Ne.copy(Ue).multiply(Ct).multiply(Le),R.geometry=De(R.geometry,Ne),R.position.sub(Ke).applyQuaternion(ct).add(Ke),R.quaternion=ct.clone().multiply(R.quaternion)}for(let R of v)R.position.applyQuaternion(lt).multiplyScalar(nt),R.quaternion=lt.clone().multiply(R.quaternion),R.scale.multiplyScalar(nt),R.captionPoint&&R.captionPoint.applyQuaternion(lt).multiplyScalar(nt)}function Ih(r,e,t){let n=Math.max(0,Math.min(3,Math.round(e))),i=(P=0,x=0,J=0)=>new r.Vector3(P,x,J),s=i(0,1,0),a=i(0,0,1),o=new r.Quaternion,c=new r.Quaternion().setFromUnitVectors(s,a),l=P=>new r.Quaternion().setFromAxisAngle(a,P),h=[],u=new Map,p=(P,x)=>(u.has(P)||u.set(P,x()),u.get(P)),d=p("box",()=>new r.BoxGeometry(1,1,1)),f=P=>p("cyl"+P,()=>new r.CylinderGeometry(1,1,1,P,1,!1)),g=(P,x,J,k,B,Q)=>{let se=typeof x=="string"?t[x]:x;if(!se)throw new Error("Missing excavator material: "+x);h.push({geometry:P,material:se,position:J,quaternion:k,scale:B,group:Q})},m=(P,x,J,k,B,Q,se,re,ve=0)=>g(d,se,i(P,x,J),ve?l(ve):o,i(k,B,Q),re);function y(P,x,J,k,B,Q=12,se=J){let re=x.clone().sub(P),ve=re.length();if(!ve)return;let _e=new r.Quaternion().setFromUnitVectors(s,re.divideScalar(ve));g(f(Q),k,P.clone().lerp(x,.5),_e,i(J,ve,se),B)}function _(P,x,J,k,B,Q=J){let se=x.clone().sub(P),re=se.length();if(!re)return;let ve=new r.Quaternion().setFromUnitVectors(s,se.divideScalar(re));g(d,k,P.clone().lerp(x,.5),ve,i(J,re,Q),B)}let v=(P,x,J,k,B,Q,se,re=24)=>g(f(re),Q,i(P,x,J),c,i(k,B,k),se);function M(P,x,J,k){return p(P,()=>{let B=new r.Shape;B.moveTo(x[0][0],x[0][1]),x.slice(1).forEach(([Se,be])=>B.lineTo(Se,be)),B.closePath();let Q=new r.ExtrudeGeometry(B,{depth:Math.max(.003,J-2*k),bevelEnabled:k>0,bevelSize:k,bevelThickness:k,bevelSegments:2,curveSegments:3});Q.computeBoundingBox();let se=Q.boundingBox.getCenter(i());Q.translate(-se.x,-se.y,-se.z);let re=Q.attributes.normal,ve=Q.attributes.position,_e=Q.attributes.uv;for(let Se=0;Se<ve.count;Se++){let be=Math.abs(re.getX(Se)),Re=Math.abs(re.getY(Se)),ze=Math.abs(re.getZ(Se)),Pe=be>ze&&be>Re?ve.getZ(Se):ve.getX(Se),ke=Re>be&&Re>ze?ve.getZ(Se):ve.getY(Se);_e.setXY(Se,Pe*.42,ke*.42)}return{geometry:Q,centre:se}})}function E(P,x,J,k,B,Q,se=.018,re=0,ve=0){let _e=M(P,x,k,se);g(_e.geometry,B,i(re+_e.centre.x,ve+_e.centre.y,J),o,i(1,1,1),Q)}function b(P,x,J,k){let B=x.reduce((se,re)=>se.add(re),i()).multiplyScalar(.25),Q=p(P,()=>{let se=x.map(_e=>_e.clone().sub(B)),re=new r.BufferGeometry;re.setAttribute("position",new r.Float32BufferAttribute(se.flatMap(_e=>[_e.x,_e.y,_e.z]),3)),re.setAttribute("uv",new r.Float32BufferAttribute([0,0,1,0,1,1,0,1],2)),re.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);let ve=se[1].clone().sub(se[0]).cross(se[2].clone().sub(se[0])).normalize();return re.setAttribute("normal",new r.Float32BufferAttribute(Array.from({length:4},()=>ve.toArray()).flat(),3)),re});g(Q,J,B,o,i(1,1,1),k)}function A(P,x,J,k,B,Q="braccio"){v(P,x,J,k,B,"iron",Q);for(let se of[-1,1])v(P,x,J+se*(B/2+.01),k*.87,.038,"edge",Q,20),v(P,x,J+se*(B/2+.038),k*.39,.041,"bolt","bulloneria",6)}function W(P){return p(P?"slotted-screw":"hex-bolt",()=>{let x=[];function J(Re,ze,Pe,ke,He){let Ye=new r.CylinderGeometry(Re,ze,Pe,He);Ye.translate(0,ke,0),x.push(Ye)}J(.47,.41,1.95,-.965,10);let k=.36,B=4,Q=11,se=[];for(let Re=0;Re<B*Q;Re++){let ze=(pt,ut,It)=>{let ue=pt/Q*Math.PI*2;return[Math.cos(ue)*ut,-1.83+pt/Q*k+It,Math.sin(ue)*ut]},Pe=ze(Re,.45,0),ke=ze(Re,.55,.075),He=ze(Re,.45,.15),Ye=ze(Re+1,.45,0),rt=ze(Re+1,.55,.075),ft=ze(Re+1,.45,.15);se.push(...Pe,...rt,...Ye,...Pe,...ke,...rt,...ke,...ft,...rt,...ke,...He,...ft)}let re=new r.BufferGeometry;if(re.setAttribute("position",new r.Float32BufferAttribute(se,3)),re.computeVertexNormals(),x.push(re),P){J(.92,.51,.32,.06,16);for(let Re of[-1,1]){let ze=new r.Shape,Pe=.9,He=Math.asin(.15/Pe);for(let rt=0;rt<=16;rt++){let ft=He+(Math.PI-2*He)*rt/16,pt=Pe*Math.cos(ft),ut=Re*Pe*Math.sin(ft);rt===0?ze.moveTo(pt,ut):ze.lineTo(pt,ut)}ze.closePath();let Ye=new r.ExtrudeGeometry(ze,{depth:.19,bevelEnabled:!1});Ye.rotateX(-Math.PI/2),Ye.translate(0,.22,0),x.push(Ye)}}else J(1,1,.51,.182,6),J(.89,1,.08,.476,6);let ve=[],_e=[],Se=[];for(let Re of x){let ze=Re.index?Re.toNonIndexed():Re,Pe=ze.attributes.position,ke=ze.attributes.normal,He=ze.attributes.uv;for(let Ye=0;Ye<Pe.count;Ye++)ve.push(Pe.getX(Ye),Pe.getY(Ye),Pe.getZ(Ye)),_e.push(ke.getX(Ye),ke.getY(Ye),ke.getZ(Ye)),Se.push(He?He.getX(Ye):0,He?He.getY(Ye):0);ze!==Re&&ze.dispose(),Re.dispose()}let be=new r.BufferGeometry;return be.userData.threadPitch=k,be.userData.threadTurns=B,be.setAttribute("position",new r.Float32BufferAttribute(ve,3)),be.setAttribute("normal",new r.Float32BufferAttribute(_e,3)),be.setAttribute("uv",new r.Float32BufferAttribute(Se,2)),be})}let L=new r.Quaternion().setFromUnitVectors(s,i(0,0,-1));function O(P,x,J,k=.029,B=1){v(P,x,J,k*1.35,.014,"iron","bulloneria",12),g(W(!1),"bolt",i(P,x,J+B*.011),B>0?c:L,i(k,k,k),"bulloneria")}function te(P,x,J,k,B=1){g(W(!0),"bolt",i(P,x,J),B>0?c:L,i(k,k,k),"bulloneria")}let C=(P,x)=>p("ring"+P+"-"+x,()=>new r.TorusGeometry(P,x,6,28)),K=(P,x,J,k,B,Q,se)=>g(C(k,B),Q,i(P,x,J),o,i(1,1,1),se);function q(P,x,J,k,B,Q=18){let se=new r.CatmullRomCurve3(x),re=p(P,()=>{let ve=new r.TubeGeometry(se,Q,J,6,!1);ve.computeBoundingBox();let _e=ve.boundingBox.getCenter(i());return ve.translate(-_e.x,-_e.y,-_e.z),{g:ve,center:_e}});g(re.g,k,re.center.clone(),o,i(1,1,1),B)}let ne=[-3.47,-3.57,-3.365,-3.35][n],de=[.04,.28,.285,.31][n],oe=n<2?.54:.483,$=n<2?.445:.398,ae=(ne+de)*.5,I=de-ne,X=2*I+2*Math.PI*$,we=Math.round(X/.214),w=X/we;function T(P){if(P<I)return[ne+P,oe-$,0];if(P-=I,P<Math.PI*$){let J=P/$-Math.PI/2;return[de+Math.cos(J)*$,oe+Math.sin(J)*$,J+Math.PI/2]}if(P-=Math.PI*$,P<I)return[de-P,oe+$,Math.PI];let x=(P-I)/$+Math.PI/2;return[ne+Math.cos(x)*$,oe+Math.sin(x)*$,x+Math.PI/2]}let z=n>0?t.track.clone():t.track;if(n>0){z.name=["","Carro brunito e terra asciutta","Fiancata del carro con deposito di polvere","Carro contemporaneo grafite"][n];let P=n===1?[99,80,65]:n===2?[127,116,102]:[75,79,78],x=96,J=new Uint8Array(x*x*4),k=919+n*449;for(let Q=0;Q<x;Q++)for(let se=0;se<x;se++){k=Math.imul(k,1664525)+1013904223>>>0;let re=se/x*Math.PI*2,ve=Q/x*Math.PI*2,_e=(Q*x+se)*4,Se=(k/4294967296-.5)*6,be=3.1*Math.cos(2*re+Math.sin(ve))+2.9*Math.sin(3*ve+Math.sin(2*re))+.8*Math.sin(9*re-4*ve);for(let Re=0;Re<3;Re++)J[_e+Re]=P[Re]+be+Se;J[_e+3]=255}let B=new r.DataTexture(J,x,x,r.RGBAFormat);B.wrapS=B.wrapT=r.RepeatWrapping,B.magFilter=r.LinearFilter,B.minFilter=r.LinearMipmapLinearFilter,B.generateMipmaps=!0,B.colorSpace=r.SRGBColorSpace,B.needsUpdate=!0,z.map=B,z.color.setHex(16777215),z.metalness=n===2?.23:n===1?.3:.49,z.roughness=n===2?.87:.7,z.roughnessMap=null,z.metalnessMap=null,z.bumpScale=.006}let F=p("turned-bearing-race",()=>{let P=[[.62,-.51],[.92,-.51],[1,-.38],[1,.34],[.93,.48],[.71,.48],[.66,.34],[.62,-.31],[.62,-.51]];return new r.LatheGeometry(P.map(([x,J])=>new r.Vector2(x,J)),28)}),U=[.82,1.175,1.19,1.195][n],j=[.55,.65,.6,.6][n];for(let P of[-1,1]){let x=P*U,J=x+P*(j/2-(n===0?0:.18));E("hull-carriage",[[ne-.03,.32],[de-.035,.33],[de+.15,.51],[de-.24,.74],[ae+.24,.84],[ne+.29,.75],[ne-.13,.58]],x,.39,"track","telaio",.055);for(let Q=0;Q<we;Q++){let[se,re,ve]=T(Q*w),_e=-Math.sin(ve),Se=Math.cos(ve);if(m(se,re,x,w*.93,.068,j,"track","cingoli",ve),n===0)m(se-_e*.051,re-Se*.051,x,.046,.058,j*.985,"iron","cingoli",ve);else for(let be of[-.063,0,.063])m(se+Math.cos(ve)*be-_e*.046,re+Math.sin(ve)*be-Se*.046,x,.026,.048,j*.985,"iron","cingoli",ve);m(se+_e*.065,re+Se*.065,x,w*.75,.068,j*.42,"track","cingoli",ve),Q%2===0&&v(se+_e*.036,re+Se*.036,J-P*.017,.036,.046,"bolt","cingoli",8);for(let be of[-1,1]){let Re=i(se-_e*.042,re-Se*.042,x+be*j*.292),ze=i(-_e,-Se,0);g(f(6),Q%7===0&&n===0?"rust":"bolt",Re,new r.Quaternion().setFromUnitVectors(s,ze),i(.026,.025,.026),"bulloneria")}}let k=(Q,se,re,ve,_e=!1)=>{if(v(Q,se,x,re,j*.66,"iron","trasmissione",32),v(Q,se,J-P*.035,re*.85,.059,"track","trasmissione",28),K(Q,se,J+P*.003,re*.728,re*.049,"track","trasmissione"),v(Q,se,J+P*.02,re*.43,.073,"iron","trasmissione",22),v(Q,se,J+P*.077,re*.23,.059,n===0?"rust":"edge","trasmissione",16),_e&&n>0){let be=J+P*.116;v(Q,se,be,re*.64,.039,z,"trasmissione",28);let Re=n===2?14:10;for(let ze=0;ze<Re;ze++){let Pe=ze*Math.PI*2/Re,ke=Math.cos(Pe),He=Math.sin(Pe);_(i(Q+ke*re*.39,se+He*re*.39,be+P*.028),i(Q+ke*re*.63,se+He*re*.63,be+P*.028),.026,z,"trasmissione",.031)}v(Q,se,be+P*.031,re*.35,.044,z,"trasmissione",20)}if(ve)for(let be of[-1,1]){let Re=x+be*j*.218;g(F,"edge",i(Q,se,Re),c,i(re*.79,.091,re*.79),"trasmissione"),K(Q,se,Re+be*.05,re*.56,.014,"rubber","trasmissione"),K(Q,se,Re-be*.045,re*.66,.012,"iron","trasmissione")}let Se=ve?8:4;for(let be=0;be<Se;be++){let Re=2*Math.PI*be/Se;O(Q+re*.53*Math.cos(Re),se+re*.53*Math.sin(Re),J+P*.005,ve?.027:.022,P)}if(_e){let be=[];for(let Re=0;Re<16;Re++)for(let[ze,Pe]of[[0,.89],[.17,1],[.48,1],[.72,.89]]){let ke=(Re+ze)*Math.PI*2/16;be.push([Math.cos(ke)*re*Pe,Math.sin(ke)*re*Pe])}E("drive-sprocket",be,J-P*.105,.089,"iron","trasmissione",.009,Q,se)}};k(ne,oe,$*.93,!0,!0),k(de,oe,$*.9,!0);let B=n===0?5:7;for(let Q=0;Q<B;Q++){let se=ne+.58+Q*(I-1.16)/(B-1);k(se,n<2?.415:.367,n===0?.248:.225,!1)}for(let Q of[.27,.7])v(ne+Q*I,n<2?.83:.753,x,.117,.38,"iron","trasmissione",16);if(n>0){let Q=J+P*.054,se=n<2?.74:.7,re=.33,ve=n===1?[[ne+.24,se-.09],[ne+.49,se+.06],[de-.37,se+.06],[de-.1,se-.08],[de-.19,re+.082],[de-.56,re+.04],[ne+.54,re+.03],[ne+.22,re+.09]]:n===2?[[ne+.23,se-.08],[ne+.43,se+.067],[de-.28,se+.067],[de-.15,se-.12],[de-.17,re+.04],[de-.46,re-.017],[ne+.4,re-.017],[ne+.22,re+.045]]:[[ne+.22,se-.13],[ne+.46,se+.042],[de-.36,se+.042],[de-.13,se-.12],[de-.24,re+.05],[de-.53,re],[ne+.5,re],[ne+.21,re+.086]];if(E("track-box-beam",ve,Q,.139,z,"telaio",.022),n===1)for(let _e=0;_e<6;_e++){let Se=ne+.49+_e*(I-.95)/5;m(Se,re+.123,Q+P*.086,.29,.18,.057,z,"telaio",-.055);for(let be of[-.089,.089])O(Se+be,re+.146,Q+P*.119,.023,P)}else if(n===2){let _e=[[de-.28,re-.033],[de+.2,re-.033],[de+.24,re+.075],[de+.23,se-.09],[de+.105,se+.015],[de-.21,se+.015],[de-.29,se-.064]];E("front-guide-guard",_e,Q+P*.083,.091,z,"telaio",.026);for(let Se of[.28,.66]){let be=ne+I*Se;m(be,re+.125,Q+P*.078,.087,.087,.015,"interior","telaio")}_(i(ne+.41,re+.015,Q+P*.092),i(de-.25,re+.015,Q+P*.092),.022,"edge","telaio",.03)}else for(let _e of[.27,.72]){let Se=ne+I*_e;m(Se,se-.062,Q+P*.078,.394,.062,.023,"red","telaio"),m(Se,se-.026,Q+P*.079,.416,.017,.032,"edge","telaio");for(let be of[-.164,.164])O(Se+be,se-.061,Q+P*.093,.017,P)}}}m(ae,.7,0,2.74,.44,1.55,"track","telaio");for(let P of[-1,1])for(let x of[-1,1])_(i(ae,.86,0),i(ae+x*1.42,.59,P*U),.25,"iron","telaio",.28);let V=i(ae+.15,1.125,0);g(f(44),"iron",V,o,i(.864,.15,.864),"trasmissione"),g(f(48),"edge",i(V.x,1.235,0),o,i(.832,.08,.832),"trasmissione");for(let P=0;P<24;P++){let x=P*Math.PI*2/24;g(f(6),"bolt",i(V.x+Math.cos(x)*.756,1.29,Math.sin(x)*.756),o,i(.043,.047,.043),"bulloneria")}if(n===0)return Lh(r,{V:i,box:m,bar:_,rod:y,plate:E,disc:v,pin:A,ring:K,bolts:O,machineScrew:te,append:g,round:f,cache:p,identity:o,quad:b,conduit:q,parts:h},t),{parts:h,era:e,name:"Escavatore meccanico a pala frontale"};let Y=Ph(r,n,{V:i,parts:h,materials:t,cache:p,append:g,box:m,bar:_,rod:y,disc:v,plate:E,quad:b,pin:A,bolts:O,machineScrew:te,conduit:q,round:f,identity:o}),ie=new Set,ce=new WeakMap;for(let P of h){let x=P.geometry;if(!ie.has(x)){x.scale(-1,1,1),x.index||x.setIndex(Array.from({length:x.attributes.position.count},(B,Q)=>Q));let k=x.index.array;for(let B=0;B<k.length;B+=3){let Q=k[B+1];k[B+1]=k[B+2],k[B+2]=Q}x.index.needsUpdate=!0,x.computeBoundingBox(),x.computeBoundingSphere(),ie.add(x)}P.position=P.position.clone(),P.position.x*=-1;let J=P.quaternion;ce.has(J)||ce.set(J,new r.Quaternion(J.x,-J.y,-J.z,J.w)),P.quaternion=ce.get(J)}return Y.point.x*=-1,{parts:h,era:e,facing:-1,captionAnchor:Y,name:["","Escavatore idraulico anni Ottanta","Escavatore idraulico serie D","Escavatore elettroidraulico contemporaneo"][n]}}var Nh=[{enamel:[189,139,47],wear:1,rough:.56,coat:.18,coatRough:.38},{enamel:[217,154,36],wear:.6,rough:.47,coat:.27,coatRough:.3},{enamel:[235,169,28],wear:.32,rough:.42,coat:.35,coatRough:.25},{enamel:[245,186,31],wear:.13,rough:.36,coat:.44,coatRough:.21}],Uh=new WeakMap,qt=(r,e,t)=>r+(e-r)*t,va=r=>Math.max(0,Math.min(1,r));function en(r,e,t){let n=va((t-r)/(e-r));return n*n*(3-2*n)}function Oh(r){let e=r>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function di(r,e,t){let n=new Float32Array(r*e);for(let i=0;i<n.length;i++)n[i]=t();return(i,s)=>{let a=i*r,o=s*e,c=Math.floor(a),l=Math.floor(o),h=(c%r+r)%r,u=(l%e+e)%e,p=(h+1)%r,d=(u+1)%e,f=a-c,g=o-l,m=f*f*(3-2*f),y=g*g*(3-2*g);return qt(qt(n[u*r+h],n[u*r+p],m),qt(n[d*r+h],n[d*r+p],m),y)}}function _a(r){let e=document.createElement("canvas");e.width=r,e.height=r;let t=e.getContext("2d");return{canvas:e,ctx:t,pixels:t.createImageData(r,r)}}function Dh(r,e,t,n){e.ctx.putImageData(e.pixels,0,0);let i=new r.CanvasTexture(e.canvas);return i.name=t,i.colorSpace=n?r.SRGBColorSpace:r.NoColorSpace,i.wrapS=i.wrapT=r.RepeatWrapping,i.anisotropy=4,i}function Fh(r,e,t,n){let i=Dh(r,e,n+" \xB7 colore",!0),s=Dh(r,t,n+" \xB7 altezza / ruvidit\xE0 / metallo",!1);return{map:i,bumpMap:s,roughnessMap:s,metalnessMap:s}}function ya(r,e,t,n,i){r[e]=t,r[e+1]=n,r[e+2]=i,r[e+3]=255}function Bp(r,e,t){let n=new Float32Array(r*r),i=Math.round(1+11*e);for(let s=0;s<i;s++){let a=t()*r,o=t()*r,c=(.012+t()*.077)*(.43+e*.83)*r,l=c*(.27+t()*.74),h=t()*Math.PI,u=Math.cos(h),p=Math.sin(h),d=Math.ceil(1.65*Math.max(c,l));for(let f=Math.floor(o-d);f<=o+d;f++)for(let g=Math.floor(a-d);g<=a+d;g++){let m=g-a,y=f-o,_=(m*u+y*p)/c,v=(-m*p+y*u)/l,M=1.5-Math.sqrt(_*_+v*v);if(M<=0)continue;let E=(f+r)%r*r+(g+r)%r;n[E]=Math.max(n[E],M)}}return n}function zp(r,e,t){let n=new Uint8Array(r*r);for(let i=0;i<3+e*16;i++){let s=t()*r,a=t()*r,o=(t()-.5)*.92,c=Math.cos(o),l=Math.sin(o),h=1+Math.floor(t()*4);for(let u=0;u<h;u++){let p=u*(.0015+t()*.0045)*r,d=t()*r*.016,f=(.012+t()*.095)*r,g=Math.round((.28+t()*.65)*255);for(let m=0;m<f;m+=.67){if(t()<.05)continue;let y=Math.floor(s+c*(m+d)-l*p+r)%r,v=Math.floor(a+l*(m+d)+c*p+r)%r*r+y;n[v]=Math.max(n[v],g*en(0,.12,m/f)*en(0,.12,1-m/f))}}}return n}function kp(r,e,t){let n=Nh[e],i=n.wear,s=n.enamel,a=Oh(196600+e*9701),o=di(5,4,a),c=di(17,19,a),l=di(52,54,a),h=di(48,3,a),u=Bp(t,i,a),p=zp(t,i,a),d=di(83,18,a),f=_a(t),g=_a(t),m=f.pixels.data,y=g.pixels.data;for(let _=0,v=0;_<t;_++){let M=_/t;for(let E=0;E<t;E++,v++){let b=E/t,A=o(b,M),W=c(b,M),L=l(b,M),O=a(),te=Math.min(b,M,1-b,1-M),C=(1-en(0,.018,te))*en(.55,.91,W)*i,K=.33+.67*Math.max(en(.02,.37,u[v]),en(.59,.85,A)*.82),q=u[v]+((W-.5)*.84+(L-.5)*.69+(O-.5)*.13)*(.55+.45*i)*K+C-(1-i)*.12,ne=en(.47,.55,q),de=en(.29,.47,q),oe=(1-en(.03,.13,Math.abs(q-.56)))*en(.41,.68,W*.48+L*.52),$=va((1-i)*.56+en(.67,.81,L*.62+O*.13+A*.25)*(.43+.1*(1-i))+oe*.6),ae=p[v]/255*(.4+.43*i),I=d(b+.016*W,M+.034*L),X=(1-en(.012,.058,Math.abs(I-.48)))*en(.38,.65,W),we=va(.5+(W-.5)*1.22+(L-.5)*.75+(O-.5)*.38+(I-.5)*.26-X*.18),w=en(.69,.96,h(b,M))*i*.075,T=(A-.5)*(.035+.1*i)+(W-.5)*.025+(O-.5)*.012-w,z=de*(.12+.14*i),F=s[0]*(1+T)*(1-z),U=s[1]*(1+T)*(1-z*1.18),j=s[2]*(1+T)*(1-z*.42)+(A-.3)*i*7;F=qt(F,qt(50+103*we,138,$),ne),U=qt(U,qt(37+45*we,133,$),ne),j=qt(j,qt(27+21*we,118,$),ne),ya(m,v*4,qt(F,136,ae),qt(U,133,ae),qt(j,115,ae));let V=qt(qt(n.rough+(A-.5)*.12+(O-.5)*.036,.83-$*.52,ne),.49,ae),Y=qt(qt(.035,.12+$*.85,ne),.73,ae),ie=.6+(L-.5)*.025+(O-.5)*.025-ne*(.17-we*.07+X*.02)-ae*.055;ya(y,v*4,ie*255,V*255,Y*255)}}return Fh(r,f,g,"Smaltatura "+[1960,1980,2e3,2026][e])}function bl(r,e,t,n){let i=Oh(481516+n*779),s=di(8,9,i),a=di(39,33,i),o=di(105,3,i),c=_a(t),l=_a(t),h=c.pixels.data,u=l.pixels.data;for(let p=0,d=0;p<t;p++)for(let f=0;f<t;f++,d+=4){let g=f/t,m=p/t,y=s(g,m),_=a(g,m),v=i(),M,E,b,A,W,L;if(n===0){let O=en(.4,.84,y*.7+_*.3),te=47*O+13*_+7*v;M=53+te,E=48+te,b=40+te,A=.79-.39*O+(_-.5)*.07,W=.52+O*.42,L=.43+_*.12+v*.057}else if(n===1){let O=o(g,m),te=(O-.5)*7+(v-.5)*2;M=225+te,E=228+te,b=228+te,A=.126+O*.047+y*.024,W=.99,L=.49+O*.02}else{let O=va(.04+y*.49+_*.34+v*.12);M=48+O*94,E=30+O*42,b=22+O*20,A=.76+O*.19,W=.17+(1-O)*.14,L=.34+y*.16+_*.16+v*.105}ya(h,d,M,E,b),ya(u,d,L*255,A*255,W*255)}return Fh(r,c,l,e)}function Gp(r){let e=Uh.get(r);if(!e){let t=typeof matchMedia=="function"&&matchMedia("(max-width: 760px)").matches;e={paint:[],size:t?256:512,cast:bl(r,"Acciaio colato",256,0),polished:bl(r,"Cromatura rettificata",128,1),oxide:bl(r,"Ossido di ferro",256,2)},Uh.set(r,e)}return e}function Bh(r,e){let t=Math.max(0,Math.min(3,e|0)),n=Nh[t],i=Gp(r),s=i.paint[t]||(i.paint[t]=kp(r,t,i.size)),a=(d,f)=>new r.MeshStandardMaterial({name:d,...f}),o=(d,f)=>new r.MeshPhysicalMaterial({name:d,...f}),c={...s,roughness:1,metalness:1,bumpScale:.022+n.wear*.037,clearcoat:n.coat,clearcoatRoughness:n.coatRough,envMapIntensity:.95},l={...i.cast,roughness:1,metalness:1,bumpScale:.025,envMapIntensity:1.05},h=o("Smalto carrozzeria",c),u=o("Smalto telaio",{...c,color:t===0?12823947:13286034}),p=o("Vetro cabina",{color:t===0?2568234:2503470,transparent:!0,opacity:t===0?.48:.46,depthWrite:!1,roughness:.075+n.wear*.035,metalness:.025,clearcoat:.38,clearcoatRoughness:.055,ior:1.48,specularIntensity:.78,envMapIntensity:.77});return{paint:h,paintDark:u,glass:p,edge:a("Bordi esposti",{...l,color:15328990,roughness:.79,bumpScale:.012}),iron:a("Ghisa scura",{...l,color:t===0?10389363:11052192}),track:a("Pattini e ruote",{...l,roughness:t===0?1:.94}),rubber:a("Gomma e guaine",{color:2369319,roughness:.8,metalness:.018,envMapIntensity:.48}),chrome:a("Stelo cromato",{...i.polished,roughness:1,metalness:1,bumpScale:.002,envMapIntensity:1.18}),bolt:a("Bulloneria zincata",{...i.polished,color:t===0?9603189:11645607,roughnessMap:null,roughness:.31,metalness:.9,bumpScale:.0015}),interior:a("Sedile e interno cabina",{color:t===0?4340013:3423037,roughness:.85,metalness:.02}),rust:a("Ossido del ferro",{...i.oxide,roughness:1,metalness:1,bumpScale:.055}),black:a("Acciaio verniciato grafite",{color:2895920,roughness:.47,metalness:.46}),light:o("Vetro proiettore",{color:15196617,emissive:14536612,emissiveIntensity:.17,roughness:.22,metalness:.2,clearcoat:.9,clearcoatRoughness:.11}),red:o("Lente di segnalazione",{color:9972248,roughness:.29,metalness:.13,clearcoat:.74,clearcoatRoughness:.19}),pale:a("Dettagli avorio",{color:14800821,roughness:.58,metalness:.17})}}var Vp=Math.PI*2;function Hp(r,e,t){let n=[],i=new Map,s=null;e.parts.forEach((h,u)=>{h.group==="cingoli"&&((h.geometry.type==="BoxGeometry"||h.geometry.type==="ExtrudeGeometry")&&h.scale.x>2.7*h.scale.y&&h.scale.z>6.8*h.scale.y&&(s={p:h,indices:[]},n.push(s)),s&&s.indices.push(u))});let a=Math.floor(n.length/2),o=new r.Vector3(0,0,1);if(a<3)return{byPart:i,across:o};let c=n[a].p.position,l=n[0].p.position;o.subVectors(c,l).normalize();for(let h=0;h<2;h++){let u=n.slice(h*a,(h+1)*a),p=h?1:-1,d=new r.Vector3;for(let{p:g}of u)d.add(g.position);d.multiplyScalar(1/u.length);let f=0;u.forEach(({p:g},m)=>{g.position.y>u[f].p.position.y+1e-4&&(f=m)});for(let g=0;g<u.length;g++){let{p:m,indices:y}=u[g],_=(g-f+u.length)%u.length/u.length,v=new r.Vector3().subVectors(u[(g+1)%u.length].p.position,u[(g+u.length-1)%u.length].p.position).normalize(),M=new r.Vector3().crossVectors(v,o).normalize();M.dot(m.position.clone().sub(d))<0&&M.negate();let E=.4+.38*Math.sin(_*Math.PI),b=o.clone().multiplyScalar(p*t*E).addScaledVector(M,t*(.24+.46*Math.sin(_*Math.PI))).addScaledVector(v,t*(.33-.65*_));b.y=Math.max(-.11*t,b.y)+.13*t;let A=o.clone().multiplyScalar(p),W=m.position.clone().addScaledVector(v,-.105*t),L=o.clone().multiplyScalar(p*.23*t);for(let O of y)i.set(O,{t:_,side:p,axis:A,lead:L,extraction:b,offset:e.parts[O].position.clone().sub(W),seatTurn:(.11+.45*Math.sin(_*Math.PI))*p,featured:h===1&&O===y[0]&&g===f})}}return{byPart:i,across:o}}function Wp(r,e){let t=[];for(let n of e.parts){if(n.group!=="pistoni"||n.material.name!=="Stelo cromato"||n.scale.y<=3*n.scale.x)continue;let i=new r.Vector3(0,1,0).applyQuaternion(n.quaternion).normalize();t.push({p:n,axis:i,seal:n.position.clone().addScaledVector(i,-n.scale.y/2)})}return t}function Xp(r,e){let t=null,n=1/0;for(let i of e){let s=r.position.clone().sub(i.seal),a=s.dot(i.axis),c=s.addScaledVector(i.axis,-a).length()+Math.max(0,Math.abs(a)-i.p.scale.y*1.6)*.8;c<n&&(t=i,n=c)}return t}function zh(r,e,t,n){let{byPart:i,across:s}=Hp(r,e,t),a=e.era===0,o=Wp(r,e),c=e.parts.reduce((y,_)=>Math.max(y,_.position.y),0),l=a?e.parts.find(y=>y.group==="trasmissione"&&y.geometry.type==="CylinderGeometry"&&y.position.y>c*.88):null,h=e.parts.filter(y=>y.group==="bulloneria"&&y.geometry.type==="BufferGeometry"&&y.position.y>1.3*t),u=new Map,p=(y,_,v,M)=>{y&&u.set(y,{row:_,column:v,depth:M})},d=(y,_)=>e.parts.find(v=>v.group===y&&_(v));p(d("trasmissione",y=>y.geometry.type==="LatheGeometry"),.48,.5,.42);let f=d("trasmissione",y=>y.geometry.type==="ExtrudeGeometry"&&y.position.y<t);if(f){let y=M=>{let E=M.position.clone().sub(f.position),b=E.dot(s);return Math.abs(b)<.59*t&&E.addScaledVector(s,-b).length()<.025*t},_=d("trasmissione",M=>M.geometry.type==="TorusGeometry"&&y(M)),v=d("trasmissione",M=>M.geometry.type==="CylinderGeometry"&&M.scale.x>.1*t&&M.scale.x<.24*t&&y(M));for(let[M,E]of[[f,0],[_,1],[v,2]])M&&u.set(M,{row:-.09,column:.31,depth:.48,wheelAxis:s,layer:E*t*.22})}let g=[...i].find(([,y])=>y.featured);g&&p(e.parts[g[0]],-.56,.54,.29);let m=h.reduce((y,_)=>!y||_.scale.x>y.scale.x?_:y,null);return p(m,.26,.72,.12),a?p(d("trasmissione",y=>y.position.y>c*.88&&y.geometry.type==="ExtrudeGeometry"),.13,.61,.5):p(o[o.length-1]?.p,.07,.61,.56),{byPart:i,across:s,historical:a,rams:o,hub:l?.position,details:u,unit:t,center:n}}function kh(r,e,t,n,i){let{unit:s,across:a}=n,o=e.position,c=e.group,l=i.side,h=i.axis.clone(),u=new r.Vector3,p=new r.Vector3,d=.028*i.spin,f=0,g=i.row,m=.12,y=.041,_=.025,v=n.byPart.get(t);if(c==="bulloneria"){h.set(0,1,0).applyQuaternion(e.quaternion).normalize(),e.geometry.type!=="BufferGeometry"&&h.dot(o.clone().sub(n.center))<0&&h.negate();let te=Math.max(e.scale.x,e.scale.z);u.copy(h).multiplyScalar(s*.16+Math.min(.24,te*3.2));let{threadPitch:C,threadTurns:K}=e.geometry.userData;f=(K||.3)*Vp,C&&(i.threadRise=Math.abs(e.scale.y)*C*K,i.clearance=u.length()),d=f+.2,y=.076,_=.049,m=.15}else if(v)u.copy(v.lead),i.extraction.copy(v.extraction),h.copy(v.axis),p.copy(v.offset),g=v.t,d=v.seatTurn,y=.038,_=.017,m=.13;else if(c==="pistoni"&&n.rams.length){let te=Xp(e,n.rams);h.copy(te.axis);let C=e===te.p,q=o.clone().sub(te.seal).dot(te.axis)>te.p.scale.y*.63;u.copy(h).multiplyScalar(s*(C||q?.83:-.16)),i.extraction.copy(a).multiplyScalar(s*(l*.85+(C?.28:0))),i.extraction.y+=s*(.44+g*.41),d=C?.31:.075,y=.089,_=.06,m=.16}else if(c==="trasmissione"&&n.hub&&o.y>n.hub.y-s*.63){h.copy(a),p.copy(o).sub(n.hub),p.addScaledVector(a,-p.dot(a));let te=o.clone().sub(n.hub).dot(a)>.19*s?1:-1;u.copy(a).multiplyScalar(te*s*.29),i.extraction.copy(a).multiplyScalar(te*s*.86),i.extraction.y+=s*.48,g=.55,f=1.24,d=1.34,y=.095,_=.083,m=.18}else if(c==="trasmissione")h.copy(a),u.copy(a).multiplyScalar(s*l*.29),d=l*.61,i.extraction.copy(a).multiplyScalar(s*l*(.56+.26*g)),i.extraction.y+=.32*s;else if(c==="tubazioni")u.copy(a).multiplyScalar(s*l*(n.historical?.34:.21)),d=n.historical?.025:.12,n.historical&&(i.extraction.y+=s*.52);else if(c==="vetri")u.copy(a).multiplyScalar(s*l*.29),d=l*.15;else if(c==="benna"||c==="braccio"){let te=new r.Vector3(0,1,0).applyQuaternion(e.quaternion).normalize();e.geometry.type==="CylinderGeometry"&&Math.abs(te.dot(a))>.89?(te.dot(a)*l<0&&te.negate(),u.copy(te).multiplyScalar(s*(.23+Math.min(.41,e.scale.y*.68))),h.copy(te),f=.22,d=.53):(u.copy(a).multiplyScalar(s*.11*l),d=l*.089)}else u.copy(a).multiplyScalar(s*l*.12);let M=i.family,E=i.bulk,b=.006+M.order*.105+g*(v?.093:c==="bulloneria"?.054:.029)+(l<0?.009:0),A=b+m,W=Math.max(A+.014,.215+M.order*.092+g*(c==="bulloneria"?.144:v?.12:.054)+(l<0?.019:0)),L=n.details.get(e),O=L?.65:W+.192+(c==="bulloneria"?.048:0)-E*.027;Object.assign(i,{begin:b,seated:A,inspection:L,departure:L?Math.min(.36,W):W,end:O,leadEnd:b+y,fanBegin:b+_,seatAxis:h,lead:u,offset:p,screwTurn:f,seatTurn:d,row:g})}var Gh={bulloneria:{order:0,travel:.52,turns:2.3,bulk:0},cingoli:{order:.2,travel:.95,turns:.84,bulk:.12},tubazioni:{order:.28,travel:.85,turns:.55,bulk:.22},vetri:{order:.33,travel:1.05,turns:.37,bulk:.43},lamierati:{order:.38,travel:1.15,turns:.43,bulk:.49},pistoni:{order:.44,travel:1.2,turns:.49,bulk:.27},trasmissione:{order:.54,travel:1.08,turns:.64,bulk:.35},benna:{order:.61,travel:1.18,turns:.42,bulk:.69},motore:{order:.68,travel:1.18,turns:.38,bulk:.65},cabina:{order:.75,travel:1.28,turns:.34,bulk:.7},braccio:{order:.84,travel:1.42,turns:.29,bulk:.85},telaio:{order:.96,travel:1.2,turns:.24,bulk:1}},jp=Math.PI*2;function xr(r,e,t){return Math.min(t,Math.max(e,r))}function Jn(r,e,t){let n=xr((t-r)/(e-r),0,1);return n*n*(3-2*n)}function qp(r,e){let t=Math.imul(r+1,2246822519)^Math.imul(e+1,3266489917);return()=>{t+=1831565813;let n=Math.imul(t^t>>>15,1|t);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function Yp(r,e,t){let n=new r.Box3;for(let y of e.parts)n.expandByPoint(y.position);let i=n.getCenter(new r.Vector3),s=n.getSize(new r.Vector3),a=Math.max(1,s.x),o=Math.max(1,s.y),c=Math.max(1,s.z),l=a/9,h=e.parts.find(y=>y.group==="benna"),u=e.parts.find(y=>y.group==="cabina"),p=e.facing===-1||h&&u&&h.position.x<u.position.x?-1:1,d=new Map,f=new Map;e.parts.forEach((y,_)=>{if(y.group!=="bulloneria")return;let v=y.position,M=v.y<1.07,E=M?"track":v.x*p<-.8?"hood":"arm",b=v.z>=0?1:-1,A=M?v.y<.34?0:v.y<.72?1:2:Math.floor(v.y/.8),W=E+":"+b+":"+A;d.has(W)||d.set(W,[]),d.get(W).push({index:_,zone:E,face:b,level:A,x:v.x*p,y:v.y})});for(let y of d.values())y.sort((_,v)=>_.x-v.x||_.y-v.y||_.index-v.index),y.forEach((_,v)=>f.set(_.index,{..._,fraction:(v+.5)/y.length}));let g=zh(r,e,l,i),m=e.parts.map((y,_)=>{let v=qp(_,t),M=Gh[y.group]||Gh.lamierati,E=y.position,b=y.group,A=(E.x-i.x)*p/a,W=(E.y-i.y)/o,L=E.z>=0?1:-1,O=new r.Vector3(0,1,0).applyQuaternion(y.quaternion).normalize(),te=new r.Vector3(A,.2+W*.35,L);O.dot(te)<0&&O.negate();let C=new r.Vector3,K=xr(A+.5,0,1),q=A<-.12?-1:1,ne=xr(W*1.2,-.75,.75),de=-1.68*l,oe=.54*l,$=(E.x*p-de)/l,ae=(E.y-oe)/l,I=f.get(_);if(I)if(K=I.fraction,I.zone==="track"){let ce=l*(-4.58+5.83*I.fraction+L*.14),P=l*(-.02+.25*I.level+(L>0?0:.16)+.15*Math.sin(I.fraction*Math.PI));C.set(ce-E.x*p,P-E.y,L*l*(1.49+.23*I.level)),q=I.fraction<.6?-1:1,ne=-.8+.24*I.level+(L<0?.1:0)}else C.set(l*(I.zone==="hood"?-.97:.64),l*(.55+.31*I.level),L*l*(.71+.61*I.fraction)),q=I.zone==="hood"?-1:1,ne=.17+.14*I.level;else b==="cingoli"?(C.set(l*($*.36-.36+L*.16),l*(ae*.47+.09+.17*Math.sin(($/4.7+.5)*Math.PI)),L*l*(1.05+.11*Math.abs($))),K=xr($/5+.5,0,1),q=$<0?-1:1,ne=-.78+.35*ae+(L<0?.13:0)):b==="trasmissione"?(C.set(l*($*.16-.15),l*(ae*.23+.28),L*l*.6),q=E.x*p>-.62?1:-1,ne=-.52):b==="vetri"?(C.set(l*(.13+.3*A),l*(1.24+.22*W),L*l*.9),q=-1,ne=.78):b==="lamierati"?(C.set(l*(-1.62+.25*A),l*(.56+.34*W),L*l*.8),q=-1,ne=.39):b==="motore"?(C.set(l*(-1.06+.19*A),l*(.34+.31*W),-l*.65),q=-1,ne=.01):b==="cabina"?(C.set(l*(-.14+.28*A),l*(.85+.39*W),L*l*.41),q=-1,ne=.64):b==="pistoni"?(C.copy(O).multiplyScalar(l*.58).add(new r.Vector3(l*.54,l*.39,L*l*.32)),q=1,ne=.52):b==="benna"?(C.set(l*(1.14+.23*A),l*(.1+.25*W),L*l*.52),q=1,ne=-.61):b==="braccio"||b==="tubazioni"?(C.set(l*(.56+.61*A),l*((b==="braccio"?.71:1.11)+.35*W),L*l*.24),q=1,ne=b==="braccio"?.55:.87):(C.set(l*.26*A,l*.25,L*l*.16),q=A<0?-1:1,ne=-.24);b!=="pistoni"&&(C.x*=p);let X=y.geometry.boundingBox||(y.geometry.computeBoundingBox(),y.geometry.boundingBox),we=X.getSize(new r.Vector3).multiply(y.scale),w=[Math.abs(we.x),Math.abs(we.y),Math.abs(we.z)].sort((ce,P)=>P-ce),T=Jn(.49,1.84,Math.sqrt(w[0]*w[1])/l),z=Math.max(M.bulk*.48,T*(b==="tubazioni"?.48:1)),F=b==="bulloneria"?O:new r.Vector3(.11+v()*.13,.88+v()*.08,L*(.22+v()*.14)).normalize(),U=we.length()*.5+X.getCenter(new r.Vector3).multiply(y.scale).length(),j={part:y,extraction:C,axis:F,family:M,side:L,row:K,boundRadius:U,rest:new r.Matrix4().compose(E,y.quaternion,y.scale),spin:M.turns*jp*(I?.79:.62)*(L<0?-1:1)*(1-z*.59),bulk:z,lens:.16+.12*K+z*.3,laneX:q*(.72+.37*K+1.07*z),laneY:ne+(K-.5)*.32,arcX:q*l*(.67+1.31*z),arcY:l*(.2+.28*ne),defocus:.86+v()*.12};kh(r,y,_,g,j);let V=new r.Quaternion().setFromAxisAngle(j.seatAxis,j.seatTurn),Y=E.clone().add(j.lead).add(C).add(j.offset.clone().applyQuaternion(V)).sub(j.offset),ie=V.multiply(y.quaternion);return j.seatedPosition=Y,j.releasedRotation=ie,j.released=new r.Matrix4().compose(Y,ie,y.scale),j});return{parts:m,center:i,width:a,lastDeparture:Math.max(...m.map(y=>y.end))}}function Vh(r,e,t){let n=e.map((K,q)=>Yp(r,K,q)),i=new r.Vector3,s=new r.Vector3,a=new r.Vector3,o=new r.Vector3,c=new r.Vector3,l=new r.Vector3,h=new r.Vector3,u=new r.Vector3,p=new r.Vector3,d=new r.Quaternion,f=new r.Quaternion,g=new r.Quaternion,m=new r.Vector3,y=new r.Quaternion,_=new r.Matrix4,v=new r.Matrix4().makeTranslation(0,-1e5,0),M=.4,E=1,b=.1,A=.5,W=1.12;function L(K,q){u.subVectors(K,c);let ne=u.dot(o);return ne+q<b||Math.abs(u.dot(s))>ne*A+q*W+.04}function O(K,q,ne,de){if(!q&&de)return;let oe=n[K].parts;for(let $=0;$<oe.length;$++)ne(K,$,q?oe[$].rest:v,q?1:0,0,q)}function te(K,q,ne,de,oe){let $=n[K];if(oe&&q>=$.lastDeparture)return;let ae=Math.max($.width*.55,($.center.x-c.x)*o.x+($.center.y-c.y)*o.y+($.center.z-c.z)*o.z);for(let I=0;I<$.parts.length;I++){let X=$.parts[I];if(q<=X.begin){de(K,I,X.rest,1,0,!0);continue}if(q>=X.end){oe||de(K,I,v,0,0,!1);continue}if(q>=X.seated&&q<=X.departure){de(K,I,X.released,1,0,!0);continue}let we=X.part;if(q<X.seated){let P=Jn(X.begin,X.leadEnd,q),x=Jn(X.threadRise?X.leadEnd:X.fanBegin,X.seated,q),J=X.threadRise?(X.threadRise*P+(X.clearance-X.threadRise)*x)/X.clearance:P,k=X.screwTurn*P+(X.seatTurn-X.screwTurn)*x;g.setFromAxisAngle(X.seatAxis,k),m.copy(X.offset).applyQuaternion(g).sub(X.offset),i.copy(we.position).addScaledVector(X.lead,J).addScaledVector(X.extraction,x).add(m),y.multiplyQuaternions(g,we.quaternion),_.compose(i,y,we.scale),de(K,I,_,1,0,!1);continue}if(X.inspection){let P=X.inspection,x=Math.max(b*3,ae*P.depth),J=x*M,k=Jn(X.departure,.534,q),B=Jn(.487,X.end,q),Q=-ne,se=P.row+ne*.11;l.copy(c).addScaledVector(o,x).addScaledVector(s,Q*P.column*J*E).addScaledVector(a,se*J);let re=Math.max(b*3,x*.42);if(h.copy(c).addScaledVector(o,re).addScaledVector(s,Q*(re*A*1.085+X.boundRadius*W+Math.abs(P.layer||0)+.12)).addScaledVector(a,(se+.22)*re*M),P.wheelAxis&&(p.copy(o).multiplyScalar(-.72).addScaledVector(s,Q*.64).addScaledVector(a,.27).normalize(),l.addScaledVector(p,P.layer),h.addScaledVector(p,P.layer*.64)),i.copy(X.seatedPosition).lerp(l,k).addScaledVector(a,.38*k*(1-k)*ae*M).lerp(h,B),oe&&B>.7&&L(i,X.boundRadius))continue;if(P.wheelAxis)d.setFromUnitVectors(P.wheelAxis,p).multiply(we.quaternion),f.setFromAxisAngle(p,Q*(.75*k+1.45*B)),d.premultiply(f),y.slerpQuaternions(X.releasedRotation,d,k);else{let ve=1.05*k+1.76*B;f.setFromAxisAngle(X.axis,ve*Q),y.multiplyQuaternions(f,X.releasedRotation),f.setFromAxisAngle(a,Q*(.58*k+.26*B)),y.premultiply(f)}_.compose(i,y,we.scale),de(K,I,_,1,.36*k+.64*B);continue}let w=xr((q-X.departure)/(X.end-X.departure),0,1),T=Jn(0,1,w),z=4*T*(1-T),F=Math.max(b*3,ae*X.lens),U=F*M,j=X.laneX+ne*.047,V=U*E*1.055+X.boundRadius*W+.09,Y=Math.sign(j)*Math.max(Math.abs(j)*U*E,V);l.copy(c).addScaledVector(o,F).addScaledVector(s,Y).addScaledVector(a,X.laneY*U),i.copy(X.seatedPosition).lerp(l,T).addScaledVector(s,z*X.arcX).addScaledVector(a,z*X.arcY);let ie=Jn(0,.93-.11*X.bulk,w);if(i.addScaledVector(s,(ie-T)*u.subVectors(l,X.seatedPosition).dot(s)),oe&&w>.55&&L(i,X.boundRadius))continue;f.setFromAxisAngle(X.axis,X.spin*Jn(.031,.985,w)),y.multiplyQuaternions(f,X.releasedRotation),_.compose(i,y,we.scale);let ce=Jn(.29-X.bulk*.07,.92-X.bulk*.12,w)*X.defocus;de(K,I,_,1,ce)}}function C(K,q,ne,de,oe=t,$=!1){let ae=xr(ne,0,1);if(K===q){O(K,!0,de,$);return}if(ae===0||ae===1){O(K,ae===0,de,$),O(q,ae===1,de,$);return}oe.updateWorldMatrix(!0,!1);let I=oe.matrixWorld;c.setFromMatrixPosition(I),s.setFromMatrixColumn(I,0).normalize(),a.setFromMatrixColumn(I,1).normalize(),o.setFromMatrixColumn(I,2).normalize().negate(),M=Math.tan(oe.fov*Math.PI/360)/oe.zoom,E=oe.aspect,A=E*M,W=Math.hypot(1,A),b=oe.near;let X=q>K?1:-1;te(K,ae,X,de,$),te(q,1-ae,-X,de,$)}return{sample:C}}function Hh(r,e){let t={occlusion:{value:null},rows:{value:new r.Vector2},weights:{value:new r.Vector2(1,0)}},n=new r.ShaderMaterial({uniforms:t,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 atlasUV;
      void main(){atlasUV=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 atlasUV;
      uniform sampler2D occlusion;
      uniform vec2 rows,weights;
      void main(){
        vec2 rowY=(3.-rows+atlasUV.y)*.25;
        float a=texture2D(occlusion,vec2(atlasUV.x,rowY.x)).r;
        float b=texture2D(occlusion,vec2(atlasUV.x,rowY.y)).r;
        float shade=dot(vec2(a,b),weights);
        gl_FragColor=vec4(.009,.008,.006,shade);
      }`}),i=new r.Mesh(new r.PlaneGeometry(18,9),n);return i.rotation.x=-Math.PI/2,i.position.y=-.008,i.renderOrder=-1,i.visible=!1,e.add(i),{ready:new r.TextureLoader().loadAsync("media/ground-contact.webp").then(a=>(a.colorSpace=r.NoColorSpace,t.occlusion.value=a,i.visible=!0,!0)).catch(()=>!1),update(a,o,c){t.rows.value.set(a,o);let l=1-r.MathUtils.smoothstep(c,.08,.42),h=r.MathUtils.smoothstep(c,.59,.93);return t.weights.value.set(a===o?1:l,a===o?0:h),i.visible?1-t.weights.value.x-t.weights.value.y:1}}}async function Wh(r){return Promise.all(r.map(async({year:e})=>{try{let t=new Image;t.src="media/luce-"+e+".webp",await t.decode();let n=192,i=96,s=document.createElement("canvas");s.width=n,s.height=i;let a=s.getContext("2d",{willReadFrequently:!0});return a.drawImage(t,0,0,n,i),{width:n,height:i,data:a.getImageData(0,0,n,i).data}}catch{return null}}))}function Sl(r,e,t){let n=new r.PMREMGenerator(e),i=new r.Vector3(-.56,.65,.51).normalize(),s=[.66,.79,.99],a=[.16,.13,.09],o=[1.15,1.04,.91],c=new Float32Array(256);for(let h=0;h<256;h++){let u=h/255;c[h]=u<.04045?u/12.92:((u+.055)/1.055)**2.4}let l=t.map(h=>{let d=new Float32Array(131072);for(let m=0;m<128;m++){let y=Math.PI*(1-(m+.5)/128),_=Math.cos(y),v=Math.sin(y),M=h?Math.min(h.height-1,Math.max(0,Math.floor((.49-.54*_)*h.height))):0;for(let E=0;E<256;E++){let b=2*Math.PI*((E+.5)/256-.5),A=v*Math.cos(b),W=v*Math.sin(b),L=Math.max(0,A*i.x+_*i.y+W*i.z),O=Math.pow(L,30)*1.35+Math.pow(L,580)*12,te=(m*256+E)*4,C=_>=0,K=C?s:a,q=h?Math.min(h.width-1,Math.floor((.5-.497*Math.cos(b+.8))*h.width)):0,ne=h?(M*h.width+q)*4:0;for(let de=0;de<3;de++){let oe=K[de],$=h?c[h.data[ne+de]]*(C?2.25:1.17):oe;d[te+de]=oe*.34+$*.66+O*o[de]}d[te+3]=1}}let f=new r.DataTexture(d,256,128,r.RGBAFormat,r.FloatType);f.mapping=r.EquirectangularReflectionMapping,f.needsUpdate=!0;let g=n.fromEquirectangular(f);return f.dispose(),g});return n.dispose(),l}var Xh=[{matrix:[2.4478364321276365,-.023380387064896906,-.17944118153006983,-.17891992900565423,4316050766285288e-33,3.729765159790077,-.03509480028417401,-.03499285460433618,-.44543164272170555,-.12848517654695918,-.9861056544825697,-.9832411500396284,-4.96122696915129,-10.30737604961329,15.197104794722657,15.472494468521575],camera:[4.712854172070215,3.301588375545085,14.76111829948024],near:.16,far:110},{matrix:[2.467039577461867,.04010941082371933,.12956424081162915,.12918787409903185,0,3.719203136737135,-.08314626371200154,-.08290473498662172,.3225341377682208,-.30679389355647496,-.9910272199955115,-.9881484190659675,-.04992379279791016,-9.009382755433851,12.982231875287134,13.264055457348755],camera:[-1.6677143268888068,3.5053993899297815,12.911008645308971],near:.16,far:110},{matrix:[1.6606701188021726,-.06946891205825537,.746579143223588,.7444104311154585,0,3.7308846024332616,.02507022154010115,.024997395914712332,1.8526973048252362,.0622686426651454,-.6691981853934265,-.6672542545716591,2.794032187681068,-9.806610884050201,13.814691258498646,14.094096657892987],camera:[-11.290257193658855,2.2745366474587705,8.611962961172724],near:.16,far:110},{matrix:[2.428065909252463,.0683328737878362,.21809369445516938,.2174601615736729,-8632101532570577e-33,3.718891872504131,-.0841456827485498,-.0839012508451408,.5429626940362732,-.30557665038108867,-.9752895923529927,-.9724565071173995,1.121184321471704,-10.552804169335504,13.611439599955112,13.891435418110653],camera:[-3.4088301953890094,3.983154200105367,13.178953443723552],near:.16,far:110}];var Zp=["1960","1980","2000","2026"],Jp=Zp.map(r=>[()=>"media/finitura-"+r+(innerWidth<=760?"-960":"")+".webp","media/profondita-"+r+".webp"]),Kp=`
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
`,Qp=`
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
`,$p=`
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
`,em=`
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
`;function jh(r,e,t,n){let i=Xh[e],s={finishRest:{value:n},finishProjector:{value:new r.Matrix4().fromArray(i.matrix)},finishEye:{value:new r.Vector3().fromArray(i.camera)},finishPlanes:{value:new r.Vector2(i.near,i.far)},finishExposure:{value:t},finishAvailable:{value:0},finishPhoto:{value:null},finishDepth:{value:null}};return{configure(a,o){Object.assign(a.uniforms,s),a.uniforms.finishClearPane={value:o.transparent&&o.opacity<1?1:0},a.vertexShader=a.vertexShader.replace("#include <batching_pars_vertex>",`#include <batching_pars_vertex>
`+Kp).replace("#include <project_vertex>",Qp+`
#include <project_vertex>`),a.fragmentShader=$p+a.fragmentShader.replace("#include <opaque_fragment>",em+`
#include <opaque_fragment>`)},async load(){let a=new r.TextureLoader,[o,c]=Jp[e],[l,h]=await Promise.all([a.loadAsync(o()),a.loadAsync(c)]);return l.colorSpace=r.SRGBColorSpace,l.anisotropy=4,h.colorSpace=r.NoColorSpace,h.generateMipmaps=!1,h.magFilter=h.minFilter=r.NearestFilter,s.finishPhoto.value=l,s.finishDepth.value=h,s.finishAvailable.value=1,[l,h]}}}function wl(r){return Math.max(4,4*Math.ceil(Math.sqrt(4*r)/4))}function qh(r,e){let t=e.parts.length,n=wl(t),i=new Float32Array(n*n*4),s=new r.Matrix4;e.parts.forEach((o,c)=>{let l=s.compose(o.position,o.quaternion,o.scale).elements,h=16*c;for(let d=0;d<3;d++)for(let f=0;f<4;f++)i[h+4*d+f]=l[d+f*4];let u=(c+1)*.61803398875,p=(c+1)*.41421356237;i[h+12]=u-Math.floor(u),i[h+13]=p-Math.floor(p)});let a=new r.DataTexture(i,n,n,r.RGBAFormat,r.FloatType);return a.needsUpdate=!0,a}var tm=[/Intel(\(R\))?[^,]*\b(UHD|HD) Graphics/i,/Intel(\(R\))?[^,]*\bIris\b/i,/Intel(\(R\))?[^,]*\bXe Graphics/i,/Intel(\(R\))? Graphics\b/i,/Intel(\(R\))? Arc(\(TM\))? Graphics/i,/Radeon(\(TM\))? (Graphics|Vega)\b/i,/Radeon(\(TM\))? \d{3}M\b/i,/\bMali\b/i,/\bAdreno\b/i,/\bPowerVR\b/i,/SwiftShader|llvmpipe|Basic Render/i];function Yh(r){let e=String(r||"");return tm.some(t=>t.test(e))?"ridotto":"pieno"}function Zh({dpr:r=1,w:e,h:t,small:n=!1,tier:i="pieno"}){let s=Math.min(r||1,n?1.35:1.65),a=i==="ridotto"?8e5:22e5,o=Math.min(1,r||1);return Math.max(o,Math.min(s,Math.sqrt(a/Math.max(1,e*t))))}function Jh(r,e,t,n,i,s={}){let a=s.onOrbit||(()=>{}),o=innerWidth<=760,c=new r.WebGLRenderer({alpha:!0,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0});c.setClearColor(0,0),c.debug.checkShaderErrors=!1;let l=!1;c.outputColorSpace=r.SRGBColorSpace,c.toneMapping=r.ACESFilmicToneMapping,c.toneMappingExposure=.89,c.shadowMap.enabled=!0,c.shadowMap.type=r.PCFSoftShadowMap,c.shadowMap.autoUpdate=!1,c.domElement.setAttribute("aria-hidden","true");let h=(()=>{try{let S=c.getContext(),D=S.getExtension("WEBGL_debug_renderer_info");return D?String(S.getParameter(D.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),u=Yh(h),p={tier:u,integrated:u==="ridotto",pixelRatio:null};e.appendChild(c.domElement);let d=new r.Scene,f=new r.PerspectiveCamera(30,1,.16,110);performance.mark("r:gl");let g=Sl(r,c,i);performance.mark("r:probes"),d.environment=g[0].texture;let m=new r.HemisphereLight(14477556,9598542,.53);d.add(m);let y=new r.DirectionalLight(16772042,2.42);y.position.set(-7,10,4.5),y.castShadow=!0;let _=o?768:1536;y.shadow.mapSize.set(_,_),Object.assign(y.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:38}),y.shadow.camera.updateProjectionMatrix(),y.shadow.bias=-19e-5,y.shadow.normalBias=.014,y.shadow.radius=3,d.add(y),d.add(y.target);let v=new r.DirectionalLight(13952240,1.15);v.position.set(4,4,-7),d.add(v);let M=new r.Mesh(new r.PlaneGeometry(120,120),new r.ShadowMaterial({color:1513232,opacity:.31,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=-.018,M.receiveShadow=!0,M.renderOrder=-2,d.add(M);let E=Hh(r,d);function b(S,D){S.onBeforeCompile=Z=>{Z.vertexShader=Z.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
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
        #endif`),D.configure(Z,S)},S.customProgramCacheKey=()=>"tedeschi-photographic-part-v3"}let A=c.extensions.has("WEBGL_multi_draw");function W(S,D){let Z=0,he=0;for(let nt of D){let lt=S.parts[nt].geometry,ct=lt.attributes.position.count;Z+=ct,he+=lt.index?Math.min(lt.index.count-lt.drawRange.start,lt.drawRange.count):ct}let me=new Float32Array(Z*3),Ee=new Float32Array(Z*3),De=new Float32Array(Z*2),Ie=new Float32Array(Z),Le=new Uint32Array(he),Ue=new Int32Array(D.length),Ne=new Int32Array(D.length),Ae=0,Fe=0;D.forEach((nt,lt)=>{let ct=S.parts[nt].geometry,Ke=ct.attributes,Dt=Ke.position.count;if(me.set(Ke.position.array.subarray(0,Dt*3),Ae*3),Ke.normal&&Ee.set(Ke.normal.array.subarray(0,Dt*3),Ae*3),Ke.uv&&De.set(Ke.uv.array.subarray(0,Dt*2),Ae*2),Ie.fill(nt,Ae,Ae+Dt),Ue[lt]=Fe,ct.index){let Ct=ct.drawRange.start,R=Math.min(ct.index.count,Ct+ct.drawRange.count),ee=ct.index.array;for(let fe=Ct;fe<R;fe++)Le[Fe++]=ee[fe]+Ae}else for(let Ct=0;Ct<Dt;Ct++)Le[Fe++]=Ae+Ct;Ne[lt]=Fe-Ue[lt],Ae+=Dt});let Ze=new r.BufferGeometry;return Ze.setAttribute("position",new r.BufferAttribute(me,3)),Ze.setAttribute("normal",new r.BufferAttribute(Ee,3)),Ze.setAttribute("uv",new r.BufferAttribute(De,2)),Ze.setAttribute("batchId",new r.BufferAttribute(Ie,1)),Ze.setIndex(new r.BufferAttribute(Le,1)),{geometry:Ze,starts:Ue,counts:Ne,elements:he}}let L=t.map((S,D)=>{let Z=S.parts.length,he=wl(Z),me=new r.DataTexture(new Float32Array(he*he*4),he,he,r.RGBAFormat,r.FloatType),Ee=jh(r,D,c.toneMappingExposure,qh(r,S)),De=new Map;S.parts.forEach((Ne,Ae)=>{let Fe=De.get(Ne.material);Fe||De.set(Ne.material,Fe=[]),Fe.push(Ae)});let Ie=new r.Group;Ie.visible=!1,d.add(Ie);let Le=[],Ue=new Int32Array(Z);return De.forEach((Ne,Ae)=>{let{geometry:Fe,starts:Ze,counts:nt,elements:lt}=W(S,Ne),ct=Ae.clone();b(ct,Ee);let Ke=new r.Mesh(Fe,ct);Ke.isBatchedMesh=!0,Ke._matricesTexture=me,Ke._multiDrawStarts=new Int32Array(Ne.length),Ke._multiDrawCounts=new Int32Array(Ne.length),Ke._multiDrawCount=0,Ke.frustumCulled=!1,Ke.matrixAutoUpdate=!1,Ke.castShadow=!Ae.transparent,Ke.receiveShadow=!Ae.transparent,Ie.add(Ke);let Dt={mesh:Ke,parts:Int32Array.from(Ne),starts:Ze,counts:nt,elements:lt,changed:!0};Ne.forEach(Ct=>{Ue[Ct]=Le.length}),Le.push(Dt)}),{root:Ie,groups:Le,groupOf:Ue,poses:me,data:me.image.data,shown:new Uint8Array(Z),seen:new Uint32Array(Z),pose:new Array(Z),frame:0,dirty:!1,finish:Ee}});performance.mark("r:batches");let O=0,te=0,C=0,K=0,q=19,ne=new r.Vector3(0,2.1,0),de=0,oe=0,$=0,ae=0,I=0,X=0,we=n(r,t,f);performance.mark("r:transition");function w(S,D,Z,he,me,Ee=!1){if(he<=1e-4)return;let De=L[S];De.seen[D]=De.frame,!(Ee&&De.shown[D]&&De.pose[D]===Z)&&(Z.toArray(De.data,D*16),De.pose[D]=Ee?Z:null,De.shown[D]||(De.shown[D]=1,De.groups[De.groupOf[D]].changed=!0),De.dirty=!0)}function T(S){for(let Z=0;Z<S.seen.length;Z++)S.shown[Z]&&S.seen[Z]!==S.frame&&(S.shown[Z]=0,S.pose[Z]=null,S.groups[S.groupOf[Z]].changed=!0,A||(S.data.fill(0,Z*16,Z*16+16),S.dirty=!0));let D=!1;for(let Z of S.groups){if(Z.changed){Z.changed=!1;let he=Z.mesh,me=he._multiDrawStarts,Ee=he._multiDrawCounts,De=0,Ie=-1,Le=0,Ue=0;for(let Ne=0;Ne<Z.parts.length;Ne++){if(!S.shown[Z.parts[Ne]]){Ie=-1;continue}Ue++,A&&(Ie>=0&&Z.starts[Ne]===Le?Ee[Ie]+=Z.counts[Ne]:(Ie=De++,me[Ie]=Z.starts[Ne]*4,Ee[Ie]=Z.counts[Ne]),Le=Z.starts[Ne]+Z.counts[Ne])}!A&&Ue&&(me[0]=0,Ee[0]=Z.elements,De=1),he._multiDrawCount=Ue?De:0,he.visible=Ue>0}D=D||Z.mesh.visible}S.root.visible=D,S.dirty&&(S.poses.needsUpdate=!0,S.dirty=!1)}function z(S){let D=new r.WebGLRenderTarget(1,1,{type:c.extensions.has("EXT_color_buffer_float")?r.HalfFloatType:r.UnsignedByteType,format:r.RGBAFormat,depthBuffer:!0,stencilBuffer:!1});return D.depthTexture=new r.DepthTexture(1,1,r.UnsignedIntType),c.capabilities.isWebGL2&&(D.samples=Math.min(S,c.capabilities.maxSamples),D.texture.generateMipmaps=!0,D.texture.minFilter=r.LinearMipmapLinearFilter),D}let F=z(4),U=new r.WebGLRenderTarget(1,1,{type:F.texture.type,depthBuffer:!1,stencilBuffer:!1}),j=new r.Scene,V=new r.OrthographicCamera(-1,1,1,-1,0,1),Y={colorTex:{value:F.texture},depthTex:{value:F.depthTexture},blurTex:{value:U.texture},pixel:{value:new r.Vector2},focal:{value:q},nearZ:{value:f.near},farZ:{value:f.far},strength:{value:0},maxRadius:{value:16}},ie="varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ce=`varying vec2 vUv; uniform sampler2D colorTex,depthTex,blurTex; uniform vec2 pixel;
    uniform float focal,nearZ,farZ,strength,maxRadius;
    float viewDepth(float depth){return nearZ*farZ/(farZ-(farZ-nearZ)*depth);}
    float circle(float depth){return smoothstep(.075,.70,(focal-viewDepth(depth))/focal)*maxRadius*strength;}`,P=new r.ShaderMaterial({uniforms:Y,vertexShader:ie,depthTest:!1,depthWrite:!1,toneMapped:!1,fragmentShader:ce+`
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
      }`}),x=new r.ShaderMaterial({uniforms:Y,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,toneMapped:!0,vertexShader:ie,fragmentShader:ce+`
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
    }`}),J=new r.Mesh(new r.PlaneGeometry(2,2),x);j.add(J);let k=new r.Scene;k.add(new r.Mesh(J.geometry,P));let B=t.map(S=>{let D=new r.Box3,Z=new r.Vector3,he=new r.Matrix4,me=new r.Vector3,Ee=[],De=new Set;function Ie(){Z.applyMatrix4(he),D.expandByPoint(Z);let Le=(Math.round(Z.x*500)+16384)*1073741824+(Math.round(Z.y*500)+16384)*32768+Math.round(Z.z*500)+16384;De.has(Le)||(De.add(Le),Ee.push(Z.x,Z.y,Z.z))}for(let Le of S.parts){let Ue=Le.geometry;Ue.boundingBox||Ue.computeBoundingBox();let Ne=Ue.boundingBox;if(Ne.getSize(me).multiply(Le.scale),he.compose(Le.position,Le.quaternion,Le.scale),Math.max(me.x,me.y,me.z)>.72){let Ae=Ue.attributes.position;for(let Fe=0;Fe<Ae.count;Fe++)Z.fromBufferAttribute(Ae,Fe),Ie()}else for(let Ae=0;Ae<8;Ae++)Z.set(Ae&1?Ne.max.x:Ne.min.x,Ae&2?Ne.max.y:Ne.min.y,Ae&4?Ne.max.z:Ne.min.z),Ie()}return{bounds:D,points:Float32Array.from(Ee),center:D.getCenter(new r.Vector3),focus:new r.Vector3,distance:1,yaw:0,elevation:0}}),Q=B.map(S=>S.bounds);performance.mark("r:framing");let se=[.18,-.4,-.755,-.42],re=[.035,.105,.038,.108],ve=[.955,.92,.924,.923],_e=0;function Se(S){let D=B[S];if(D.revision===_e)return D;D.revision=_e;let he=Math.tan(f.fov*Math.PI/360)*ve[S],me=he*f.aspect;D.yaw=(se[S]??0)+C,D.elevation=r.MathUtils.clamp((re[S]??.1)+K,-.025,.66);let Ee=Math.sin(D.yaw),De=Math.cos(D.yaw),Ie=Math.sin(D.elevation),Le=Math.cos(D.elevation),Ue=-1/0,Ne=1/0,Ae=-1/0,Fe=1/0,Ze=D.points,nt=D.center;for(let Ke=0;Ke<Ze.length;Ke+=3){let Dt=Ze[Ke]-nt.x,Ct=Ze[Ke+1]-nt.y,R=Ze[Ke+2]-nt.z,ee=Ee*Dt+De*R,fe=Le*ee+Ie*Ct,ye=De*Dt-Ee*R,xe=Le*Ct-Ie*ee;Ue=Math.max(Ue,ye+me*fe),Ne=Math.min(Ne,ye-me*fe),Ae=Math.max(Ae,xe+he*fe),Fe=Math.min(Fe,xe-he*fe)}let lt=(Ue+Ne)*.5,ct=(Ae+Fe)*.5;return D.distance=Math.max((Ue-Ne)/(2*me),(Ae-Fe)/(2*he))+.03,D.focus.set(nt.x+lt*De-ct*Ee*Ie,nt.y+ct*Le,nt.z-lt*Ee-ct*De*Ie),D}function be(){let S=r.MathUtils.smootherstep(X,0,1),D=Se(ae),Z=Se(I),he=ae===I?0:16*X*X*(1-X)*(1-X);ne.copy(D.focus).lerp(Z.focus,S),q=r.MathUtils.lerp(D.distance,Z.distance,S)*(1+.067*he),O=r.MathUtils.lerp(D.yaw,Z.yaw,S)+.033*he,te=r.MathUtils.lerp(D.elevation,Z.elevation,S)+.027*he,f.position.set(ne.x+Math.sin(O)*Math.cos(te)*q,ne.y+Math.sin(te)*q,ne.z+Math.cos(O)*Math.cos(te)*q),f.lookAt(ne),f.updateMatrixWorld(),Y.focal.value=q}let Re=NaN,ze=NaN,Pe=NaN,ke=-1,He=[];function Ye(){let S=ae===I||X===0?ae:X===1?I:-1;if(!(S>=0&&S===ke)){ke=S,He.length=0;for(let D=0;D<L.length;D++)D===ae||D===I?(He.push(L[D]),L[D].frame++):L[D].root.visible=!1;we.sample(ae,I,X,w,f,!0);for(let D of He)T(D)}}function rt(){if(!l)return;Ye();let S=ae+(I-ae)*X;(!Number.isFinite(Re)||Math.abs(Re-S)>1/120||Number.isInteger(S)&&S!==Re||!Number.isInteger(S)&&(O!==ze||te!==Pe))&&(c.shadowMap.needsUpdate=!0,Re=S,ze=O,Pe=te);let Z=ae!==I&&X>.002&&X<.998,he=Z?r.MathUtils.smootherstep(X,.22,.4)*(1-r.MathUtils.smootherstep(X,.62,.78)):0;Y.strength.value=he;let me=Z?r.MathUtils.smootherstep(X,.28,.46)*(1-r.MathUtils.smootherstep(X,.55,.72)):0;Y.focal.value=q*(1-.47*me);let Ee=E.update(ae,I,X);M.material.opacity=Ee*(.22-.1*he),M.visible=M.material.opacity>1e-4;let De=he>.001;c.setRenderTarget(F),c.render(d,f),De&&(c.setRenderTarget(U),c.render(k,V)),c.setRenderTarget(null),c.render(j,V)}function ft(){let S=Math.max(1,e.clientWidth),D=Math.max(1,e.clientHeight),Z=devicePixelRatio||1;if(S===de&&D===oe&&Z===$)return;de=S,oe=D,$=Z,c.setPixelRatio(Zh({dpr:Z,w:S,h:D,small:o,tier:u})),p.pixelRatio=+c.getPixelRatio().toFixed(3),c.setSize(S,D,!1);let he=c.getPixelRatio(),me=Math.round(S*he),Ee=Math.round(D*he);F.setSize(me,Ee),U.setSize(Math.max(1,Math.ceil(me*.5)),Math.max(1,Math.ceil(Ee*.5))),Y.pixel.value.set(1/me,1/Ee),Y.maxRadius.value=o?9*he:15*he,f.aspect=S/D,f.updateProjectionMatrix(),_e++,be(),rt()}new ResizeObserver(ft).observe(e);let pt=null,ut=!1,It=0;function ue(){pt?.removeEventListener?.("change",Ge);try{pt=matchMedia("(resolution: "+(devicePixelRatio||1)+"dppx)"),pt.addEventListener("change",Ge)}catch{pt=null}}function Ge(){ue(),ut=!0,at()}function at(){if(ut){if(performance.now()-It<300){setTimeout(at,200);return}ut=!1,ft()}}ue(),setInterval(()=>{!ut&&de&&(devicePixelRatio||1)!==$&&Ge()},1e3),c.domElement.addEventListener("webglcontextlost",S=>{S.preventDefault()},!1),c.domElement.addEventListener("webglcontextrestored",()=>{let S=Sl(r,c,i);g.splice(0,g.length,...S),d.environment=g[X<.5?ae:I].texture;for(let D of L)D.poses.needsUpdate=!0;Re=NaN,ke=-2,de=0,ft(),rt()},!1);function ot(S,D){C=r.MathUtils.clamp(C+S,-1.15,1.15),K=r.MathUtils.clamp(K+D,-.1,.52),_e++,be(),rt(),a(C,K)}let qe=0,Ut=0,Et=0,un=0,Ht=matchMedia("(prefers-reduced-motion: reduce)").matches;function dn(S){Et=0;let D=un?Math.min(80,S-un):16.7,Z=qe-C,he=Ut-K,me=Ht||Math.max(Math.abs(Z),Math.abs(he))<5e-4,Ee=me?1:-Math.expm1(-D/(an!==null?39:95));ot(Ee*Z,Ee*he),un=me?0:S,me||(Et=requestAnimationFrame(dn))}function pn(S,D){qe=r.MathUtils.clamp(S,-1.15,1.15),Ut=r.MathUtils.clamp(D,-.1,.52),Et||(Et=requestAnimationFrame(dn))}let an=null,zt=0,gt=0,Mt=0,mt=0,Rt=0;e.addEventListener("pointerdown",S=>{S.button!==0||an!==null||(an=S.pointerId,zt=S.clientX,gt=S.clientY,Mt=mt=0,Rt=performance.now(),e.setPointerCapture(S.pointerId),e.classList.add("dragging"))}),e.addEventListener("pointermove",S=>{if(S.pointerId!==an)return;let D=performance.now(),Z=Math.max(1,D-Rt);Rt=D;let he=S.clientX-zt,me=S.clientY-gt;Mt=Mt*.6+he/Z*.4,mt=mt*.6+me/Z*.4,pn(qe-he*.005,Ut+me*.003),zt=S.clientX,gt=S.clientY});function bt(){an=null,e.classList.remove("dragging")}e.addEventListener("lostpointercapture",bt),e.addEventListener("pointercancel",bt),e.addEventListener("pointerup",S=>{e.hasPointerCapture(S.pointerId)&&e.releasePointerCapture(S.pointerId),!Ht&&performance.now()-Rt<90&&Math.abs(Mt)+Math.abs(mt)>.05&&pn(qe-Mt*.005*190,Ut+mt*.003*120),bt()}),e.addEventListener("keydown",S=>{(S.key==="ArrowLeft"||S.key==="ArrowRight")&&(S.preventDefault(),pn(qe+(S.key==="ArrowLeft"?-.09:.09),Ut))});function Tt(S){let D=c.getRenderTarget(),Z=[];if(S)for(let me of L){Z.push([me.root,me.root.visible]),me.root.visible=!0;for(let Ee of me.groups)Z.push([Ee.mesh,Ee.mesh.visible]),Ee.mesh.visible=!0}let he=[];try{c.setRenderTarget(F),he.push(c.compileAsync(d,f)),c.setRenderTarget(U),he.push(c.compileAsync(k,V)),c.setRenderTarget(null),he.push(c.compileAsync(j,V))}finally{c.setRenderTarget(D);for(let[me,Ee]of Z)me.visible=Ee}return Promise.all(he)}function Pn(S){let D=L[S],Z=t[S],he=[[M,M.visible]],me=d.environment,Ee=D.data.slice();M.visible=!0;for(let Ue of L)he.push([Ue.root,Ue.root.visible]),Ue.root.visible=Ue===D;let De=D.groups.map(Ue=>[Ue.mesh.visible,Ue.mesh._multiDrawCount,Ue.mesh._multiDrawStarts[0],Ue.mesh._multiDrawCounts[0]]),Ie=new r.Matrix4;Z.parts.forEach((Ue,Ne)=>Ie.compose(Ue.position,Ue.quaternion,Ue.scale).toArray(D.data,Ne*16));for(let Ue of D.groups)Ue.mesh.visible=!0,Ue.mesh._multiDrawCount=1,Ue.mesh._multiDrawStarts[0]=0,Ue.mesh._multiDrawCounts[0]=Ue.elements;D.poses.needsUpdate=!0;let Le=c.getRenderTarget();try{d.environment=g[S].texture,c.shadowMap.needsUpdate=!0,c.setRenderTarget(F),c.render(d,f),c.setRenderTarget(U),c.render(k,V)}finally{c.setRenderTarget(Le),d.environment=me;for(let[Ue,Ne]of he)Ue.visible=Ne;D.groups.forEach((Ue,Ne)=>{[Ue.mesh.visible,Ue.mesh._multiDrawCount,Ue.mesh._multiDrawStarts[0],Ue.mesh._multiDrawCounts[0]]=De[Ne]}),D.data.set(Ee),D.poses.needsUpdate=!0,Re=NaN}}async function N(){await Tt(!0);for(let S=0;S<L.length;S++)await new Promise(requestAnimationFrame),Pn(S)}async function le(){ke=-2,Ye(),be(),await Tt(!1),l=!0,ke=-2,rt()}d.updateMatrixWorld(!0),d.matrixWorldAutoUpdate=!1,ft(),performance.mark("r:primo-disegno");let pe=[s.first??0,0,1,2,3].filter((S,D,Z)=>Z.indexOf(S)===D),Me=new Array(L.length);async function ge(S){try{let D=await L[S].finish.load();for(let Z of D)c.initTexture(Z);return(S===ae||S===I)&&(ke=-2,rt()),!0}catch{return!1}}Me[pe[0]]=ge(pe[0]);let Oe=Me[pe[0]],Ve=Oe;for(let S of pe.slice(1))Ve=Me[S]=Ve.then(()=>ge(S));let We=Promise.all(Me);function G(){let S=B[ae],D=S.points,Z=new r.Vector3,he=e.getBoundingClientRect(),me=1/0,Ee=1/0,De=-1/0,Ie=-1/0;f.updateMatrixWorld();for(let Le=0;Le<D.length;Le+=3){Z.set(D[Le],D[Le+1],D[Le+2]).project(f);let Ue=(Z.x+1)/2*he.width,Ne=(1-Z.y)/2*he.height;Ue<me&&(me=Ue),Ue>De&&(De=Ue),Ne<Ee&&(Ee=Ne),Ne>Ie&&(Ie=Ne)}return{left:he.left+me,top:he.top+Ee,right:he.left+De,bottom:he.top+Ie}}return{quality:p,machineRect:G,canvas:c.domElement,bounds:Q,view:c,draw:rt,prepareTransitions:N,warm:le,finishReady:We,firstFinish:Oe,groundReady:E.ready,show(S,D,Z){S===ae&&D===I&&Z===X||(It=performance.now(),ae=S,I=D,X=Z,d.environment=g[Z<.5?S:D].texture,be(),rt())},setReducedMotion(S){Ht=!!S},reset(S=!1){if(S&&!Ht){pn(0,0);return}Et&&cancelAnimationFrame(Et),Et=un=qe=Ut=C=K=0,_e++,be(),rt()}}}var Kh=["1960","1980","2000","2026"];var Qh={apertura:{step:150,max:980,stagger:70,extra:160},cambio:{step:80,max:240,stagger:20,extra:100}},nm=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function im(r){let e=[];for(let h=19;h>=-10;h--)e.push((h%10+10)%10);let t=Array.from({length:4},()=>{let h=document.createElement("span");h.className="roll";let u=document.createElement("span");return u.className="roll-band",u.append(...e.map(p=>{let d=document.createElement("span");return d.textContent=String(p),d})),h.append(u),{col:h,band:u,value:0,from:0,to:0,start:0,dur:0,delay:0}}),n=document.createElement("span");n.className="roll-box",n.setAttribute("aria-hidden","true"),n.append(...t.map(h=>h.col));let i=document.createElement("span");i.className="sr",r.replaceChildren(n,i),r.style.setProperty("--pitch",1.25);let s=0,a=null;function o(h){let u=h.value;h.band.style.transform="translate3d(0,"+(-(19-u)*1.25).toFixed(4)+"em,0)"}function c(h){s=0;let u=!1;for(let p of t){if(p.dur<=0)continue;let d=Math.max(0,Math.min(1,(h-p.start-p.delay)/p.dur)),f=Math.abs(p.to-p.from),g=d*f,m=Math.min(f-1,Math.floor(g)),y=nm(Math.min(1,g-m));p.value=p.from+Math.sign(p.to-p.from)*(d>=1?f:m+y),o(p),d<1?u=!0:(p.value=(p.to%10+10)%10,p.dur=0,o(p))}u&&(s=requestAnimationFrame(c))}function l(h,u,p,d=Qh.cambio){let f=[...h].map(Number);i.textContent=h,s&&(cancelAnimationFrame(s),s=0);let g=performance.now(),m=0;t.forEach((y,_)=>{let v=y.value,M=f[_],E=(Math.round(v)%10+10)%10;if(!u){y.value=M,y.dur=0,o(y);return}let b=p>0?(M-E+10)%10:-((E-M+10)%10);if(b===0&&Math.abs(v-Math.round(v))<1e-4){y.value=M,y.dur=0,o(y);return}y.from=v,y.to=Math.round(v)+b,y.start=g,y.dur=Math.min(d.max,d.step*Math.max(1,Math.abs(b))+d.extra),y.delay=m++*d.stagger,b===0&&(y.to=Math.round(v),y.dur=Math.min(200,d.max))}),t.some(y=>y.dur>0)&&(s=requestAnimationFrame(c))}return{show(h,{animate:u=!1,direction:p=1,pace:d}={}){let f=Kh[h]||Kh[0];if(a===f&&!u)return;let g=a!==f;a=f,(g||!u)&&l(f,u&&g,p,d)},intro(h){t.forEach((u,p)=>{u.value=[1,9,0,0][p],u.dur=0,o(u)}),a=null,h?this.show(0,{animate:!0,direction:1,pace:Qh.apertura}):this.show(0)}}}var rm=110,sm=200,am=3;function $h(r){let e=im(r.querySelector(".year")),t=r.querySelector(".story-copy"),n=t.querySelector(".period"),i=t.querySelector(".era-title"),s=t.querySelector("p"),a=null,o=null,c=null;function l(u){u!==o&&(o=u,n.textContent=u.subtitle,i.textContent=u.title,s.textContent=u.body)}function h(){c&&(c.cancel(),c=null),a&&l(a)}return{show:e.show,intro:e.intro,settle:h,change(u,{animate:p=!1,direction:d=1}={}){if(u===a)return;if(a=u,!p||typeof t.animate!="function"||o===null){h();return}let f=c?Number(getComputedStyle(t).opacity):1;c&&c.cancel();let g=am*Math.sign(d||1),m=t.animate([{opacity:f,transform:"translate3d(0,0,0)"},{opacity:0,transform:"translate3d(0,"+-g+"px,0)"}],{duration:rm*f,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});c=m,m.onfinish=()=>{if(c!==m)return;l(a);let y=t.animate([{opacity:0,transform:"translate3d(0,"+g+"px,0)"},{opacity:1,transform:"translate3d(0,0,0)"}],{duration:sm,easing:"cubic-bezier(0,0,.2,1)"});m.cancel(),c=y,y.onfinish=()=>{c===y&&(c=null)}}}}}function tu(r){if(r<=0)return 0;if(r>=1)return 1;let e=.7,t=0,n=.2,i=1,s=3*e,a=3*(n-e)-s,o=1-s-a,c=r;for(let p=0;p<6;p++){let d=((o*c+a)*c+s)*c-r,f=(3*o*c+2*a)*c+s;if(Math.abs(d)<1e-5||!f)break;c-=d/f}c=Math.max(0,Math.min(1,c));let l=3*t,h=3*(i-t)-l;return(((1-l-h)*c+h)*c+l)*c}var Mr=[0,.0967,.158,.2112,.2785,.3284,.3624,.3918,.4221,.4588,.5069,.5511,.5843,.6124,.6395,.6697,.7104,.7794,.839,.9023,1],On=Mr.length-1,eu=(()=>{let r=1/On,e=Mr.slice(1).map((n,i)=>(n-Mr[i])/r),t=new Array(Mr.length);t[0]=e[0],t[On]=e[On-1];for(let n=1;n<On;n++)t[n]=e[n-1]*e[n]<=0?0:(e[n-1]+e[n])/2;for(let n=0;n<On;n++){if(e[n]===0){t[n]=t[n+1]=0;continue}let i=t[n]/e[n],s=t[n+1]/e[n],a=i*i+s*s;if(a>9){let o=3/Math.sqrt(a);t[n]=o*i*e[n],t[n+1]=o*s*e[n]}}return t[0]=t[On]=(t[0]+t[On])/2,t})();function nu(r){if(r<=0)return 0;if(r>=1)return 1;let e=r*On,t=Math.min(On-1,Math.floor(e)),n=e-t,i=1/On,s=n*n,a=s*n;return(2*a-3*s+1)*Mr[t]+(a-2*s+n)*i*eu[t]+(-2*a+3*s)*Mr[t+1]+(a-s)*i*eu[t+1]}var Bn=[{year:"1960",label:"Anni Sessanta",short:"La meccanica",subtitle:"Escavatore a funi",title:"Lo scavo frontale",body:"L\u2019asta spinge la benna nel terreno. La fune passa sulle pulegge e la solleva.",photo:"media/era-1960.jpg"},{year:"1980",label:"Anni Ottanta",short:"L\u2019idraulica",subtitle:"Escavatore idraulico",title:"Il braccio articolato",body:"I cilindri sollevano il braccio. I tubi flessibili seguono il bilanciere mentre la benna si chiude.",photo:"media/era-1980.jpg"},{year:"2000",label:"Primi Duemila",short:"La benna da finitura",subtitle:"Escavatore a carro lungo",title:"La benna da finitura",body:"La benna ha un bordo liscio per stendere il terreno. I due cingoli larghi sostengono la macchina durante lo scavo.",photo:"media/era-2000.jpg"},{year:"2026",label:"Oggi",short:"Il controllo di scavo",subtitle:"Escavatore elettroidraulico",title:"Il controllo di scavo",body:"Dalla cabina panoramica si vedono la benna e i raccordi esterni del bilanciere.",photo:"media/era-2026.jpg"}];function lu(r){let e=document.querySelector(".scene"),t=Math.max(innerWidth,(e?.clientHeight||innerHeight)*1.78)*Math.min(devicePixelRatio||1,2);return"media/fondale-"+Bn[r].year+(t<=1150?"-1100":"-1672")+".webp"}var cu=new URLSearchParams(location.search),Ar=cu.has("manuale"),wa=Math.max(0,Math.min(3,Number(cu.get("inizio"))||0));Ar&&document.documentElement.classList.add("td3-manuale");var ht=r=>document.getElementById(r),Yt={scrub:ht("scrub"),previous:ht("previous"),next:ht("next"),play:ht("play"),playSymbol:ht("play-symbol"),playLabel:ht("play-label"),count:ht("era-count"),current:ht("current-era"),backdrops:ht("backdrops")},ss=[],hu=[],mi=$h(ht("story")),wr=0,Fn=0,is=0,as=!1,At=null,st=0,Ea=0,Kn=null,fi=0,wt=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let r=localStorage.getItem("tedeschi-3d-motion");r!==null&&(wt=r==="ridotto")}catch{}Ar&&(wt=!0);for(let[r,e]of Bn.entries()){let t=document.createElement("div");t.className="photoscene",t.append(document.createElement("i")),ht("backdrops").append(t),ss.push(t);let n=document.createElement("button");n.type="button",n.className="stop",n.setAttribute("aria-label",e.label+", "+e.year+", "+e.short);let i=document.createElement("span");i.className="dot",i.setAttribute("aria-hidden","true");let s=document.createElement("span"),a=document.createElement("strong"),o=document.createElement("small");a.textContent=e.label,o.textContent=e.short,s.append(a,o),n.append(i,s),ht("stops").append(n),hu.push(n),n.addEventListener("click",()=>Er(r))}if(window.parent!==window||Ar){let r=document.createElement("div");r.className="scene-tools",r.append(ht("motion-switch"),ht("recenter")),document.querySelector(".scene").append(r)}var zn=document.createElement("div");zn.className="curtain-thread";zn.hidden=!0;var uu=document.createElement("i");zn.append(uu);ht("backdrops").append(zn);var Ta=new Set;function Aa(r){Ta.has(r)||(Ta.add(r),ss[r].firstChild.style.backgroundImage='url("'+lu(r)+'")')}function Al(r){if(Ta.has(r))return Promise.resolve();let e=new Image;return e.src=lu(r),e.decode().catch(()=>{}).then(()=>Aa(r))}var Ra=1,iu=1,Ca=0;function dm(){Ra=Yt.backdrops.clientWidth||1,iu=Yt.backdrops.clientHeight||1,Ca=Math.atan(16/100*Ra/iu)}var Pa=null;function Rl(r,e){let t=r.style,n=r.firstChild.style;if(e===Pa){t.transform&&(t.transform="",n.transform="");return}let i=(e/100-1)*Ra;t.transform="translate3d("+i.toFixed(2)+"px,0,0) skewX("+(-Ca).toFixed(5)+"rad)",n.transform="skewX("+Ca.toFixed(5)+"rad) translate3d("+(-i).toFixed(2)+"px,0,0)"}function du(r){uu.style.transform="translate3d("+(r*Ra/100-4).toFixed(2)+"px,0,0) skewX("+(-Ca).toFixed(5)+"rad)"}function pm(){if(wt)return;let r=[...ss.filter((e,t)=>Ta.has(t)&&t!==Math.floor(st)),zn];for(let e of r)e.hidden=!1,e.style.opacity=".002",e.style.zIndex="3",e!==zn&&Rl(e,Pa);du(50),requestAnimationFrame(()=>requestAnimationFrame(()=>{for(let e of r)e.style.opacity="",e.style.zIndex="";zn.hidden=!0,Cl="",Zt(st,!0)}))}var rs=-1,Ma=-1,Ia=ht("story").querySelector(".year"),Di=wt||wa>0;Di||(Ia.style.visibility="hidden");var br=null;function Pl(){Ia.style.visibility="",Di=!0,br?.disconnect(),br=null}function mm(){if(Di||wt||Math.round(st)!==0||!At){Pl();return}br=new IntersectionObserver(r=>{if(r.some(e=>e.isIntersecting)&&(br?.disconnect(),br=null,!Di)){if(Di=!0,Ia.style.visibility="",wt||Math.round(st)!==0){mi.show(Math.round(st));return}mi.intro(!0),Ma=0}},{threshold:.18}),br.observe(ht("view"))}function Qn(){fi&&cancelAnimationFrame(fi),fi=0,Kn=null,Fn&&(cancelAnimationFrame(Fn),Fn=0,Tr.following=!1,as=!1),La()}var ru=null;function La(){let r=!!Kn;r!==ru&&(Yt.playSymbol.textContent=r?"\u2161":"\u25B6",Yt.playLabel.textContent=r?"Pausa":"Riproduci",Yt.play.setAttribute("aria-label",r?"Metti in pausa":"Riproduci la transizione"),Yt.play.setAttribute("aria-pressed",String(r)),ru=r);let e=st<1e-4&&!r,t=st>2.9999&&!r;Yt.previous.disabled!==e&&(Yt.previous.disabled=e),Yt.next.disabled!==t&&(Yt.next.disabled=t)}var Cl="",ba="",su="",au="";function Zt(r,e=!1){let t=Math.max(0,Math.min(3,r));if(t===st&&rs!==-1&&!e){La();return}let n=st;st=t;let i=Math.floor(st),s=Math.min(i+1,3),a=st-i,o=Math.round(st),c=i+"-"+s,l=nu(a);if(c!==Cl){for(let d=0;d<4;d++){let f=ss[d];f.hidden=d!==i&&d!==s,f.hidden||((d===i||a>.05)&&Aa(d),f.style.zIndex=d===i?"0":"1",Rl(f,d===i?Pa:0))}Cl=c,ba=""}if(s!==i){let d=wt?a>=.5?1:0:tu((l-.33)/.38),f=d*118,g=d<=0?"chiusa":d>=1?"aperta":f.toFixed(2);if(g!==ba){Rl(ss[s],d>=1?Pa:d<=0?0:f),ba=g;let m=d>0&&d<1&&!wt;zn.hidden=!m,m&&du(f)}}else zn.hidden||(zn.hidden=!0);let h=as?Math.round(wr):o;if(rs!==h){let d=rs;rs=h;let f=Bn[h],g=d!==-1&&!wt&&document.visibilityState==="visible",m=h>d?1:-1;mi.change(f,{animate:g,direction:m}),hu.forEach((y,_)=>y.setAttribute("aria-current",String(_===h))),Yt.count.textContent=String(h+1).padStart(2,"0")+" / 04",Yt.current.textContent=[f.year,f.subtitle,f.title,f.body].join(". "),Di&&d!==-1&&Ma!==h?(mi.show(h,{animate:g,direction:m}),Ma=h):(Di||d===-1)&&(mi.show(h),Ma=h)}At&&(wt||a<=1e-5?At.show(o,o,0):At.show(i,s,l)),a>.05&&s!==i&&Aa(s),st>n&&s+1<=3&&a>.5&&Al(s+1),st<n&&i-1>=0&&a<.5&&Al(i-1);let u=(st*100/3).toFixed(3)+"%";Yt.scrub.value=String(st),u!==au&&(Yt.scrub.style.setProperty("--at",u),au=u);let p=a>.02&&a<.98?Bn[i].label+" verso "+Bn[s].label+", "+Math.round(a*100)+"%":Bn[o].year;p!==su&&(Yt.scrub.setAttribute("aria-valuetext",p),su=p),La()}function pu(r){Fn=0;let e=is?Math.min(64,r-is):16.7;is=r;let t=wr-st;if(wt||Math.abs(t)<6e-4||Math.abs(t)>1.6){Zt(wt?Math.round(wr):wr),is=0,Tr.following=!1,as=!1;return}Zt(st+t*(1-Math.exp(-e/78))),Fn=requestAnimationFrame(pu)}var mu=window.parent!==window&&!Ar,Sa=null;function fu(r){if(mu){Sa=Math.max(0,Math.min(3,r));return}if(fi&&(cancelAnimationFrame(fi),fi=0,Kn=null),wr=Math.max(0,Math.min(3,r)),!At||document.hidden){Fn&&(cancelAnimationFrame(Fn),Fn=0),Tr.following=!1,as=!1,Zt(wr);return}Tr.following=!0,as=!0,Fn||(is=0,Fn=requestAnimationFrame(pu))}var xa=0;function Er(r){r=Math.max(0,Math.min(3,r));let e=Kn?xa:0;if(Qn(),xa=0,Ea=r,wt||!At||Math.abs(r-st)<1e-4){Zt(r);return}let t=st,n=r-t,i=Math.abs(n),s=i<=1.0001&&e===0,a=s?Math.max(360,i*4600):Math.min(4600,Math.max(360,i*4600)),o=s?0:Math.max(0,Math.min(3,e*a/n)),c=d=>s?d:-2*d*d*d+3*d*d+o*(d*d*d-2*d*d+d);Kn={start:t,to:r};let l=null,h=0,u=t;function p(d){if(!Kn)return;let f=0;l!==null&&(f=Math.min(d-l,110),h+=f),l=d;let g=Math.min(1,h/a),m=t+n*c(g);f>0&&(xa=(m-u)/f),u=m,Zt(m),g<1?fi=requestAnimationFrame(p):(Qn(),xa=0,Zt(r))}La(),fi=requestAnimationFrame(p)}ht("scrub").addEventListener("input",r=>{Qn();let e=Number(r.target.value);Ea=Math.min(3,Math.floor(e)+1),Zt(wt?Math.round(e):e)});ht("scrub").addEventListener("change",r=>{let e=Number(r.target.value),t=Math.round(e);!wt&&Math.abs(e-t)<.09&&Math.abs(e-t)>5e-4&&Er(t)});ht("next").addEventListener("click",()=>Er(Math.min(3,Math.floor(st+.001)+1)));ht("previous").addEventListener("click",()=>Er(Math.max(0,Math.ceil(st-.001)-1)));ht("play").addEventListener("click",()=>{if(Kn){Qn();return}st>=2.999?(Zt(0),Er(1)):Er(Math.abs(st-Math.round(st))>.003&&Math.abs(Ea-st)>.001?Ea:Math.min(3,Math.floor(st+.002)+1))});function gu(){At?.setReducedMotion(wt),ht("motion-switch").setAttribute("aria-pressed",String(wt))}ht("motion-switch").addEventListener("click",r=>{if(r.isTrusted&&window.parent!==window)try{let e=window.parent.tedeschiParcoMovimento;if(typeof e=="function"){e();return}}catch{}wt=!wt,Qn();try{localStorage.setItem("tedeschi-3d-motion",wt?"ridotto":"completo")}catch{}gu(),wt&&(mi.settle(),mi.show(Math.round(st)),Pl()),Zt(Math.round(st),!0)});ht("recenter").addEventListener("click",()=>At?.reset(!0));document.addEventListener("visibilitychange",()=>{document.hidden&&Kn&&Qn()});var Cn=document.querySelector(".scene"),Sr=ht("story"),Ui=Sr.querySelector(".story-copy").cloneNode(!0);Ui.classList.add("story-probe");Ui.setAttribute("aria-hidden","true");Sr.append(Ui);function Tl(r){let e=document.createRange();e.selectNodeContents(r);let t=0;for(let n of e.getClientRects())t=Math.max(t,n.right);return t}function Ua(){Cn.style.removeProperty("--story-top"),Cn.style.removeProperty("--zona");let r=Cn.clientHeight;if(!r)return;let e=innerWidth<=640||r>Cn.clientWidth*.82;Cn.classList.toggle("impilata",e&&innerWidth>640);let t=Ui.querySelector(".period"),n=Ui.querySelector(".era-title"),i=Ui.querySelector("p"),s=0,a=0;for(let d of Bn)t.textContent=d.subtitle,n.textContent=d.title,i.textContent=d.body,s=Math.max(s,Ui.offsetHeight),a=Math.max(a,Tl(t),Tl(n),Tl(i));let o=Cn.getBoundingClientRect().left,c=Sr.getBoundingClientRect().left;a=Math.max(a,Ia.getBoundingClientRect().right),a>c&&!e&&Cn.style.setProperty("--zona",Math.ceil(a-c)+"px");let h=Sr.querySelector(".story-copy").offsetTop+s,u=Sr.offsetTop,p=Math.max(10,r*.025);e?Cn.style.setProperty("--story-top",Math.max(8,Math.floor(Math.max(r*.42,r-p-h)))+"px"):u+h>r-p&&Cn.style.setProperty("--story-top",Math.max(8,Math.floor(r-p-h))+"px"),Cn.dataset.fit=String(Sr.offsetTop+h<=r-p+1),dm(),ba="",rs!==-1&&Zt(st,!0)}new ResizeObserver(()=>Ua()).observe(Cn);Ua();gu();Zt(wa,!0);var vu,_u,fm=new Promise(r=>{_u=r}),Tr={ready:new Promise(r=>{vu=r}),eras:Bn,following:!1,seek(r){Qn(),Zt(Number(r)||0)},follow(r){fu(Number(r)||0)},halt(){Kn&&Qn()},seekIntro(r){Qn(),Zt(0,!0),Pl(),mi.show(0)},machineRect(){return At?.machineRect()??null},revealed(){_u?.()},get canvas(){return At?.canvas},get progress(){return st},get metrics(){return pi}},pi=null;window.tedeschiExperience=Tr;Ar||Il(Tr);function gm(){let r=document.getElementById("kit");r&&r.media!=="all"&&(r.media="all");let e=r?r.sheet?Promise.resolve(!0):new Promise(i=>{r.addEventListener("load",()=>i(!0),{once:!0}),r.addEventListener("error",()=>i(!1),{once:!0}),setTimeout(()=>i(!1),15e3)}):Promise.resolve(!1),t=()=>[...document.fonts].some(i=>/new-science/.test(i.family)),n=i=>i?new Promise(s=>{let a=performance.now();(function o(){getComputedStyle(document.body).fontFamily,t()?s(!0):performance.now()-a>2e3?s(!1):requestAnimationFrame(o)})()}):!1;return e.then(n).then(i=>i&&Promise.race([Promise.all([document.fonts.load("700 40px new-science"),document.fonts.load("400 16px new-science"),document.fonts.load("700 40px new-science-extended")]).then(s=>s.every(a=>a.length>0)),new Promise(s=>setTimeout(()=>s(!1),1e4))])).catch(()=>!1)}document.fonts?.addEventListener?.("loadingdone",()=>Ua());var vm=gm().then(async r=>{if(r)return document.documentElement.classList.add("kit-ok"),!0;try{(await import("./pezzo-ZVLZWIN2.js")).installLettering()}catch(e){console.warn("Lettering:",e)}return document.documentElement.classList.add("kit-no"),!1}).finally(()=>Ua());async function _m(){performance.mark("parco:avvio"),await new Promise(requestAnimationFrame);try{Aa(Math.floor(wa));let r=Wh(Bn),e=[];for(let s=0;s<Bn.length;s++)s>0&&await new Promise(requestAnimationFrame),e.push(Ih(ns,s,Bh(ns,s)));performance.mark("parco:modelli");let t=await r;At=Jh(ns,ht("view"),e,Vh,t,{first:Math.round(wa),onOrbit:ym}),At.setReducedMotion(wt),performance.mark("parco:vista"),pi={partCounts:e.map(s=>s.parts.length),bounds:At.bounds.map(s=>[s.min.toArray(),s.max.toArray()]),webgl:!0},At.canvas.style.visibility="hidden";let[n,i]=await Promise.all([At.firstFinish,At.groundReady,At.warm()]);pi.finishes=n,pi.quality=At.quality,pi.groundContact=i,performance.mark("parco:finitura"),Zt(st,!0),At.canvas.style.visibility="visible",ht("loading").hidden=!0,performance.mark("parco:visibile"),requestAnimationFrame(()=>At.prepareTransitions().catch(()=>{}).then(()=>performance.mark("parco:passaggi-pronti"))),At.finishReady.then(s=>{pi.finishes=s}),Promise.all([0,1,2,3].map(Al)).then(()=>requestAnimationFrame(pm))}catch(r){console.error("Visualizzatore 3D:",r),pi={webgl:!1,error:String(r)},ht("loading").textContent="Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.",ht("recenter").hidden=!0,Zt(0)}await Promise.race([vm,new Promise(r=>setTimeout(r,1200))]),performance.mark("parco:pronta"),vu(pi),window.parent!==window&&!Ar&&await Promise.race([fm,new Promise(r=>setTimeout(r,4e3))]),mu=!1,Sa!==null&&Math.abs(Sa-st)>6e-4&&fu(Sa),mm()}function ym(r,e){let t=1+Math.min(.04,Math.abs(r)*.03+Math.abs(e)*.05);Yt.backdrops.style.transform=Math.abs(r)+Math.abs(e)<1e-4?"":"translate3d("+(-r*14).toFixed(2)+"px,"+(e*8).toFixed(2)+"px,0) scale("+t.toFixed(4)+")"}_m();
