import native from 'natives';
import alt from 'alt';

const ProgressUI = new alt.WebView("http://resource/html/index.html")

export function drawProgress(time, text, cb) {

    ProgressUI.emit("start", time, text)    

    ProgressUI.on("finish", () => {
        cb();
    })

}