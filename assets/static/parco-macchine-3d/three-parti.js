// Solo le parti di three.js r160 che il parco usa davvero: il bundle (tools/parco-3d/build.mjs)
// scarta tutto il resto. Se un modulo del componente usa una classe nuova, va aggiunta qui.
export {
  ACESFilmicToneMapping, Box3, BoxGeometry, BufferGeometry, CanvasTexture, CatmullRomCurve3, CylinderGeometry,
  DataTexture, DepthTexture, DirectionalLight, DoubleSide, DynamicDrawUsage, EquirectangularReflectionMapping,
  ExtrudeGeometry, Float32BufferAttribute, FloatType, Group, HalfFloatType, HemisphereLight, InstancedBufferAttribute,
  InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, InterleavedBufferAttribute, LatheGeometry,
  LinearFilter, LinearMipmapLinearFilter, MathUtils, Matrix4, Mesh, MeshPhysicalMaterial, MeshStandardMaterial,
  NearestFilter, NoColorSpace, OrthographicCamera, Path, PCFSoftShadowMap, PerspectiveCamera, PlaneGeometry,
  PMREMGenerator, Quaternion, RepeatWrapping, RGBAFormat, Scene, ShaderMaterial, ShadowMaterial, Shape,
  SphereGeometry, SRGBColorSpace, TextureLoader, TorusGeometry, TubeGeometry, UnsignedByteType, UnsignedIntType,
  Vector2, Vector3, WebGLRenderer, WebGLRenderTarget,
} from './vendor/three.module.min.js';
