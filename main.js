$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide()
            .css("font-size", "1.35em") // Ukuran lebih kecil
            .html("Selamat ulang tahun, Mega Merlina ❤️ Kehadiranmu hadiah terindah. Maaf jika belum sempurna, cintaku abadi untukmu selamanya.🥰😘😍❤️💋🌹")
            .delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        let audio = $("#music-player")[0];
        audio.volume = 0.6;  // Volume 60%
        audio.play();        
        }
    });
});});