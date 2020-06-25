if ('alt' in window) {



    function start(time, text) {

        var Remaining = 0;
        let PerPercent = 100 / time;
        $(".div_title").text(text)
        $(".div_progress").show();
        let Progress = setInterval(function () {
            Remaining = Remaining + 1;

            $(".div_progress_bar").animate({ "width": (PerPercent * Remaining).toString() + "%" });


            if (Remaining == (time + 1)) {
                alt.emit("finish")
                $(".div_progress").hide();
                clearInterval(Progress)

            }


        }, 1000)

    }



    alt.on("start", start)



}

