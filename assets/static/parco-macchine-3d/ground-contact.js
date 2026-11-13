// Each atlas row records the sky occluded at ground level by one complete
// machine, integrated from 48 sky directions and 48 samples of the broad key light.
// The darkest areas follow
// the actual contact patches of the tread shoes and bucket.
export function createGroundContact(T, scene) {
  const uniforms = {
    occlusion: {value:null},
    rows: {value:new T.Vector2()},
    weights: {value:new T.Vector2(1,0)}
  };
  const material = new T.ShaderMaterial({
    uniforms, transparent:true, depthWrite:false, toneMapped:false,
    vertexShader:`varying vec2 atlasUV;
      void main(){atlasUV=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 atlasUV;
      uniform sampler2D occlusion;
      uniform vec2 rows,weights;
      void main(){
        vec2 rowY=(3.-rows+atlasUV.y)*.25;
        float a=texture2D(occlusion,vec2(atlasUV.x,rowY.x)).r;
        float b=texture2D(occlusion,vec2(atlasUV.x,rowY.y)).r;
        float shade=dot(vec2(a,b),weights);
        gl_FragColor=vec4(.009,.008,.006,shade);
      }`
  });
  const ground = new T.Mesh(new T.PlaneGeometry(18,9), material);
  ground.rotation.x=-Math.PI/2;
  ground.position.y=-.008;
  ground.renderOrder=-1;
  ground.visible=false;
  scene.add(ground);
  const ready = new T.TextureLoader().loadAsync('media/ground-contact.webp').then(texture=>{
    texture.colorSpace=T.NoColorSpace;
    uniforms.occlusion.value=texture;
    ground.visible=true;
    return true;
  }).catch(()=>false);
  return {ready, update(a,b,t){
    uniforms.rows.value.set(a,b);
    const depart=1-T.MathUtils.smoothstep(t,.08,.42);
    const arrive=T.MathUtils.smoothstep(t,.59,.93);
    uniforms.weights.value.set(a===b?1:depart,a===b?0:arrive);
    return ground.visible ? 1-uniforms.weights.value.x-uniforms.weights.value.y : 1;
  }};
}
