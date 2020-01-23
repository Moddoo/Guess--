let trials = document.getElementById("trials");
let inputs = document.getElementById("inputs");
let one    = document.getElementById("p1");
let hint   = document.getElementById("hint");
let next   = document.getElementById("next");
let put    = document.getElementById("put");


let app = {
    
    words:    [
        {
            w: "APPLE"
        },
        {
            w: "BEACH"  
        },
        {
            w: "WATER"  
        },
        {
            w: "WOMAN"
        },
        {
            w: "CLOUD"  
        },
        {
            w: "EARTH"  
        }
    ],
    
    index:    0,
    
    trial:    10,

    

    
    load:     function() {
        
        if(app.words[app.index].w.indexOf(put.value.trim().toUpperCase()) !== -1 && put.value.trim()) {
            y = one.value.split(" ");
            z = app.words[app.index].w.split("");

            for(i=0; i<z.length; i++) {
                 if(z[i] === put.value.trim().toUpperCase()) {
                    y[i] = z[i];
                }      
            };
            
            x = y.join(" ");
            one.value = x;
            console.log(y);
            console.log(x);
        } else {
            app.trial--;
            trials.textContent = "Trials: " + app.trial;
        }
        
        // put.value = "";
        
    } 
    
}
// one.value = "";
// for(i=0; i<app.words[app.index].w.length; i++) {
//     one.value += "_ "
// }
function load() {
    one.value = "";
    for(i=0; i<app.words[app.index].w.length; i++) {
        one.value += "_ "
    }
}
window.onload = load;
put.addEventListener("input", app.load);
trials.textContent = "Trials: " + app.trial;
// app.load();