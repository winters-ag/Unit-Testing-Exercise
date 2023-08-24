function greet(name){
    if(name === null){
        return "Hello There!";
    }
    else if(typeof name === "object"){
        let names = '';
        for(i=0;i<name.length;i++){
            if(i === name.length -1){
                names = names + name[i];
            }
            else{
                names = names + name[i]+ ", ";
            }
            
        }
        return "Hello, " + names;
    }
    else if(name === name.toUpperCase())
    {
        return "HELLO " + name + "!";
    }
    return "Hello, " + name;
}

module.exports = greet;