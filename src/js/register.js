if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then(reg =>{
    console.log("it works!"+ reg.scope);
  })
  .catch(err =>{
    console.log("it failed :( " + err);
  })
}
