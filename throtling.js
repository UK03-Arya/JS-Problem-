function throttle(fn,delay){
  let run =true;
  return function(...args){
    if(!run) return
    fn(...args)
    run=false
    setTimeout(function(){run=true},delay)
  }
}
const Fast=throttle(function(){console.log("selected")},1000)

setInterval(Fast,100)