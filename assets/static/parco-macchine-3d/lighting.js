// Approximate the light reflected by each illustrated site. The source is a
// normal photograph, so only its sky, horizon and ground bands are projected.
// I campioni 192×96 si leggono da media/luce-AAAA.webp: è il JPG di Mattia ridotto dal browser con lo
// stesso drawImage e salvato senza perdita (tools/parco-3d/media.py), quindi la luce è identica alla
// sua ma non serve scaricare i quattro fondali interi all'avvio.
export async function sampleBackdrops(eras) {
  return Promise.all(eras.map(async ({year}) => {
    try {
      const image = new Image();
      image.src = 'media/luce-' + year + '.webp';
      await image.decode();
      const width = 192, height = 96;
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      const context = canvas.getContext('2d', {willReadFrequently:true});
      context.drawImage(image,0,0,width,height);
      return {width,height,data:context.getImageData(0,0,width,height).data};
    } catch {
      return null;
    }
  }));
}

export function createLightProbes(T, renderer, samples) {
  const generator = new T.PMREMGenerator(renderer);
  const sun = new T.Vector3(-.56,.65,.51).normalize();
  const skyColour=[.66,.79,.99], groundColour=[.16,.13,.09], sunColour=[1.15,1.04,.91];
  const levels = new Float32Array(256);
  for (let i=0;i<256;i++) {
    const v=i/255;
    levels[i]=v<.04045?v/12.92:((v+.055)/1.055)**2.4;
  }
  const result=samples.map(sample=>{
    const width=256, height=128;
    const pixels=new Float32Array(width*height*4);
    for(let y=0;y<height;y++){
      const polar=Math.PI*(1-(y+.5)/height);
      const elevation=Math.cos(polar), radius=Math.sin(polar);
      const inputY=sample?Math.min(sample.height-1,Math.max(0,Math.floor((.49-.54*elevation)*sample.height))):0;
      for(let x=0;x<width;x++){
        const azimuth=2*Math.PI*((x+.5)/width-.5);
        const dx=radius*Math.cos(azimuth), dz=radius*Math.sin(azimuth);
        const direction=Math.max(0,dx*sun.x+elevation*sun.y+dz*sun.z);
        const sunlight=Math.pow(direction,30)*1.35+Math.pow(direction,580)*12;
        const px=(y*width+x)*4;
        const sky=elevation>=0;
        const base=sky?skyColour:groundColour;
        const inputX=sample?Math.min(sample.width-1,Math.floor((.5-.497*Math.cos(azimuth+.8))*sample.width)):0;
        const ip=sample?(inputY*sample.width+inputX)*4:0;
        for(let channel=0;channel<3;channel++){
          const outdoor=base[channel];
          const reflected=sample?levels[sample.data[ip+channel]]*(sky?2.25:1.17):outdoor;
          pixels[px+channel]=outdoor*.34+reflected*.66+sunlight*sunColour[channel];
        }
        pixels[px+3]=1;
      }
    }
    const map=new T.DataTexture(pixels,width,height,T.RGBAFormat,T.FloatType);
    map.mapping=T.EquirectangularReflectionMapping;map.needsUpdate=true;
    const target=generator.fromEquirectangular(map);map.dispose();
    return target;
  });
  generator.dispose();
  return result;
}
