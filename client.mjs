import native from 'natives';
import alt from 'alt';

let ProgressUI = null

export function drawProgress(time, text, cb) {
    if(ProgressUI){return;}
    ProgressUI = new alt.WebView("http://resource/html/index.html")
    ProgressUI.on("ready", function(){
        ProgressUI.emit("start", time, text)    

        ProgressUI.on("finish", () => {
            cb();
            ProgressUI.destroy();
        })
    })
}
