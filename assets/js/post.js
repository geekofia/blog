function ago(date) {
    function render(n, unit) {
        return n + " " + unit + ((n == 1) ? "" : "s") + " ago";
    }

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / (60 * 60 * 24 * 30 * 365));
    if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
        return render(interval, "year");
    }
    interval = Math.floor(seconds / (60 * 60 * 24 * 30));
    if (interval >= 1) {
        return render(interval, "month");
    }
    interval = Math.floor(seconds / (60 * 60 * 24));
    if (interval >= 1) {
        return render(interval, "day");
    }
    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
        return render(interval, "hour");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return render(interval, "minute");
    }
    interval = Math.floor(seconds);
    return render(interval, "second");
}

var related_posts = document.getElementsByClassName("postedon");

for(var i = 0, length = related_posts.length; i < length; i++) {
    var date = Date.parse(related_posts[i].getAttribute("datetime"));
    related_posts[i].getElementsByClassName("postedago")[0].innerHTML = ago(date);
}