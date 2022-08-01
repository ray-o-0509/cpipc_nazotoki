let portal_count = 0;

function portal_clicked() {
    portal_count++;
    if (portal_count == 8) {
        setTimeout(() => {
            if (portal_count == 8) {
                location.href = '334fr3qw.html';
            }
        }, 1000);
    }

}

function clicked_star() {
    location.href = '../923bdi.html';
}