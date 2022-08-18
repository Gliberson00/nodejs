const { error } = require('console');
const fs =  require('fs');



//if(!fs.existsSync('./public')){
 //   fs.mkdirSync('./public', (err)=>{
    //  //   //    throw err;
       // }
       // console.log('pasta criada com sucesso!');

    //});
//}else{
    //console.log('a pasta ja existe');
//}
//fs.existsSync('/.public') || fs.existsSync('./public');


//if(fs.existsSync('./public')){
   // fs.renameSync('./public','./dimitri', (err)=>{
      //  if(err){
       //      throw err;
       // }
      //  console.log('pasta renomeada com sucesso!');

    //});
//}else{//
   // console.log('Impossivel renomear porque "public" não existe"');
//}

if(fs.existsSync('./dimitri')){
    fs.rmdir('./dimitri',{recursive:true},(err)=>{
        if(err){
             throw err;
        }
        console.log('pasta deletada com sucesso!');

    });
}else{
    console.log('Impossivel deletar dimitri porque "public" não existe"');
}