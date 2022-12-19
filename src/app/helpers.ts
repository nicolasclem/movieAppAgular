export function toBase64( file: File){
  return new Promise ((res,rej)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload= ()=>res(reader.result);
      reader.onerror = (err)=>rej(err);
      })
}
