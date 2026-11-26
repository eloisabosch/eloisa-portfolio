// Genera versiones livianas (webp, máx 2000px) de public/images en public/img.
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const src='public/images', out='public/img'; fs.mkdirSync(out,{recursive:true});
const crops={}; // ADV slides: remove header strip (top 9%) and page-number strip (bottom 6%)
for (const n of [10,11,12,13,14,15,16,17,18]) crops[`ADVYMB${n}.png`]={top:0.09,bottom:0.06};
crops['ADVYMB9.png']={top:0,bottom:0.06};
const jobs=[];
for (const f of fs.readdirSync(src)) { if(!/\.(png|jpe?g|avif)$/i.test(f)) continue; jobs.push([path.join(src,f), f]); }

let total=0;
for (const [p,f] of jobs){
  const files=fs.readdirSync(src); const stem=f.replace(/\.[^.]+$/,''); const dup=files.filter(x=>x.replace(/\.[^.]+$/,'')===stem).length>1; const base=dup?stem+'-'+f.split('.').pop().toLowerCase():stem; const dest=path.join(out, base+'.webp');
  let img=sharp(p,{limitInputPixels:false}).rotate(); const m=await img.metadata();
  const c=crops[f]; if(c){ const t=Math.round(m.height*c.top), b=Math.round(m.height*c.bottom); img=img.extract({left:0,top:t,width:m.width,height:m.height-t-b}); }
  await img.resize({width:2000,height:2000,fit:'inside',withoutEnlargement:true}).webp({quality:80}).toFile(dest);
  total+=fs.statSync(dest).size;
}
console.log(jobs.length,'files', (total/1048576).toFixed(1),'MB');

// Guarda el tamaño de cada imagen liviana (para ordenar la galería y evitar saltos al cargar).
const sizes = {};
for (const f of fs.readdirSync(out).filter((f) => f.endsWith('.webp')).sort()) {
  const m = await sharp(path.join(out, f)).metadata();
  sizes['/img/' + f] = [m.width, m.height];
}
fs.writeFileSync('data/imageSizes.json', JSON.stringify(sizes, null, 0).replace(/\],/g, '],\n'));
console.log('sizes:', Object.keys(sizes).length);
