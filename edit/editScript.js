var click = new Audio('../click.mp3');
var audio = new Audio('audio/edit_audio.mp3');

document.getElementById('volumeOff').addEventListener('click', function() {
    // home_audio.mp3 재생
    audio.play();

    // volumeOff 이미지 변경
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeUp').style.display = 'block';
});

document.getElementById('volumeUp').addEventListener('click', function() {
    // home_audio.mp3 중지
    audio.pause();

    // volumeUp 이미지 변경
    document.getElementById('volumeUp').style.display = 'none';
    document.getElementById('volumeOff').style.display = 'block';
});

document.getElementById('backButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('backButton').addEventListener('click', function() {
    history.back();
});

document.getElementById('startButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('modalCloseButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('modalCloseButton').addEventListener('click', function() {
    document.getElementById('okModal').style.display = 'none';
    
    audio.play();

    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeUp').style.display = 'block';

    document.getElementsByClassName('container')[0].style.pointerEvents = 'auto';
});

document.getElementById('startButton').addEventListener('click', function() {
    // batter1 ~ batter9의 값을 가져온다.
    var batter1 = document.getElementById('batter1').value;
    var batter2 = document.getElementById('batter2').value;
    var batter3 = document.getElementById('batter3').value;
    var batter4 = document.getElementById('batter4').value;
    var batter5 = document.getElementById('batter5').value;
    var batter6 = document.getElementById('batter6').value;
    var batter7 = document.getElementById('batter7').value;
    var batter8 = document.getElementById('batter8').value;
    var batter9 = document.getElementById('batter9').value;

    // batter1 ~ batter9의 값을 배열에 저장한다.
    var batters = [batter1, batter2, batter3, batter4, batter5, batter6, batter7, batter8, batter9];

    // batters의 있는 값들이 모두 2~4자리의 글자수를 가지고 있는지 확인한다.
    var isBattersValid = true;
    for (var i = 0; i < batters.length; i++) {
        if (batters[i].length < 2 || batters[i].length > 4) {
            isBattersValid = false;
            break;
        }
    }

    if (!isBattersValid) {
        alert('선수 이름은 2~4자리로 입력해주세요.');
        return;
    }

    // 팀 이름의 값을 가져온다.
    var teamName = document.getElementById('teamNameInput').value;

    // 팀 이름의 값이 2~10자리의 글자수를 가지고 있는지 확인한다.
    if (teamName.length < 2 || teamName.length > 10) {
        alert('팀 이름은 2~10자리로 입력해주세요.');
        return;
    }

    // 팀 약칭의 값을 가져온다.
    var teamNickname = document.getElementById('teamAcronymInput').value;

    // 팀 약칭의 값이 2~3자리의 글자수를 가지고 있는지 확인한다.
    if (teamNickname.length < 2 || teamNickname.length > 3) {
        alert('팀 약칭은 2~3자리로 입력해주세요.');
        return;
    }

    // sessionStorage에 팀 이름을 저장한다.
    sessionStorage.setItem('teamName', teamName);

    // sessionStorage에 팀 약칭을 저장한다.
    sessionStorage.setItem('teamNickname', teamNickname);

    // sessionStorage에 선수 이름을 저장한다.
    sessionStorage.setItem('batters', JSON.stringify(batters));

    // sessionStorage에 난이도를 저장한다.
    sessionStorage.setItem('difficulty', document.getElementById('difficulty').value);

    window.location.href = '../game/game.html';
});