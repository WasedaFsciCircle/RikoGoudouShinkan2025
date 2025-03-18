// カウントダウンタイマー
document.addEventListener('DOMContentLoaded', function() {
    // 開催日時設定（2025年4月3日 10:00 JST）
    var countDownDate = new Date("Apr 3, 2025 10:00:00 GMT+0900").getTime();
    
    // 1秒ごとにカウントダウンを更新
    var x = setInterval(function() {
        // 現在時刻を取得
        var now = new Date().getTime();
        
        // 残り時間を計算
        var distance = countDownDate - now;
        
        // 日、時、分、秒を計算
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 表示を更新
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        
        // カウントダウン終了時のメッセージ
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "<div class='countdown-expired'>開催中です！</div>";
        }
    }, 1000);
});
