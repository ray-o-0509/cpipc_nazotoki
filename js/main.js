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

const mahoujin_answers = ['8', '5', '7', '4', '20', '3', '2', '9'];

function check_answer() {
    for (let index = 0; index < mahoujin_answers.length; index++) {
        let data = $('.input_' + index).val();
        console.log(data);
        if (data != mahoujin_answers[index]) {
            alert('答えが間違っています。※半角で入力してない場合も表示されます。');
            return;
        }
    }
    alert('正解！');
    location.href = 'index.html';
}