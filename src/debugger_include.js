/* this is the full text easy to read debug.js */
window.log=function(){
    log.history=log.history||[];
    log.history.push(arguments);
    var message = Array.prototype.slice.call(arguments),
        args = JSON.stringify(message),
        img = document.createElement("img"),
        url = "http://127.0.0.1:8124/?console=" + escape(args);
        
    document.write(message);
    img.src = url;
    
    
    img.style.display = "none";
    document.body.appendChild(img);
    if(this.console){
        console.log(Array.prototype.slice.call(arguments));
    }
};

catchRemote = function(func){
    try{
        func();
    } catch(e){
        log({"error":e});
    }
};