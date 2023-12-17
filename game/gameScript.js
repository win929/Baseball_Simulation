// 클릭 효과음
var click = new Audio("../click.mp3");

// game.html 배경음악
var audio = new Audio("audio/game_audio.mp3");

// 안타 효과음
var hitSound = new Audio("audio/hit_sound.mp3");

// 함성 효과음
var yellSound = new Audio("audio/yell_sound.mp3");

// 게임 시작 효과음
var playballSound = new Audio("audio/playball_sound.mp3");

// 스트라이크 효과음
var strikeSound = new Audio("audio/strike_sound.mp3");

// 볼 효과음
var ballSound = new Audio("audio/ball_sound.mp3");

// 버튼에 마우스를 올릴 때
function mouseOver() {
    // 클릭 효과음 재생
    click.play();
}

// 게임시작
document.getElementById("playButton").addEventListener("click", function () {
    // 배경음악 재생
    audio.play();

    // volumeOff -> volumeOn 이미지 변경
    document.getElementById("volumeOff").style.display = "none";
    document.getElementById("volumeOn").style.display = "block";

    // 게임 시작 버튼 숨기기
    document.getElementById("play").style.display = "none";
    document.getElementById("playButton").style.display = "none";

    // 게임 시작 효과음 재생
    playballSound.play();

    // 해설 추가
    addCommentary("(스트라이크나 볼을 선택하면 게임이 시작됩니다.)\n");
    addCommentary("[PC] " + pcScore.textContent + " : " + userScore.textContent + " " + "[" + teamName + "]");
    addCommentary("- 9회말 무사 만루 -\n");
    addCommentary("[" + (batterIndex + 1) + "번타자 " + batters[batterIndex] + "]");

    // 타자 선택
    document.getElementById("batter" + batterIndex).style.border = "1px solid yellow";
    document.getElementById("batter" + batterIndex).style.color = "white";

    // 스트라이크, 볼 존 클릭 가능
    document.getElementById("zone").style.pointerEvents = "auto";
});

// 설정 버튼 클릭 시
document.getElementById("setting").addEventListener("click", function () {
    // 설정 모달창 보이기
    document.getElementById("settingModal").style.display = "block";
});

// restartButton 클릭 시
document.getElementById("restartButton").addEventListener("click", function () {
    // 게임 재시작
    window.location.reload();
});

// homeButton 클릭 시
document.getElementById("homeButton").addEventListener("click", function () {
    // home.html로 이동
    window.location.href = "../home/home.html";
});

// closeButton 클릭 시
document.getElementById("closeButton").addEventListener("click", function () {
    // 설정 모달창 닫기
    var modal = document.getElementById("settingModal");
    modal.style.display = "none";
});

// restartButton2 클릭 시
document.getElementById("restartButton2").addEventListener("click", function () {
    // 게임 재시작
    window.location.reload();
});

// homeButton2 클릭 시
document.getElementById("homeButton2").addEventListener("click", function () {
    // home.html로 이동
    window.location.href = "../home/home.html";
});

// volumeOff 클릭 시
document.getElementById("volumeOff").addEventListener("click", function () {
    // 배경음악 재생
    audio.play();

    // volumeOff -> volumeOn 이미지 변경
    document.getElementById("volumeOff").style.display = "none";
    document.getElementById("volumeOn").style.display = "block";
});

// volumeOn 클릭 시
document.getElementById("volumeOn").addEventListener("click", function () {
    // 배경음악 중지
    audio.pause();

    // volumeOn -> volumeOff 이미지 변경
    document.getElementById("volumeOn").style.display = "none";
    document.getElementById("volumeOff").style.display = "block";
});

// 현재 루 상황 (홈, 1루, 2루, 3루)
// 루 상황이 바뀔 때마다 field 이미지를 변경 (현재 0111.png)
var base = [0, 1, 1, 1]; // 초기는 만루 상황

// 타자 인덱스
var batterIndex = 0;

// 볼카운트
var ballCount = 0;
var strikeCount = 0;
var outCount = 0;

// 팀 이름
var teamName = sessionStorage.getItem("teamName");

// 팀 약자
var teamNickname = sessionStorage.getItem("teamNickname");
var teamNicknameElement = document.getElementById("teamNickname");
teamNicknameElement.textContent = teamNickname;

// 타순
var batters = JSON.parse(sessionStorage.getItem("batters"));
var battersElement = document.getElementById("batters");
for (var i = 0; i < batters.length; i++) {
    var batter = batters[i];

    var batterbox = document.createElement("div");
    batterbox.id = "batter" + i;
    batterbox.style.display = "flex";
    batterbox.style.flexDirection = "row";

    var orderElement = document.createElement("div");
    orderElement.style.width = "50px";
    orderElement.textContent = i + 1;

    var batterElement = document.createElement("div");
    batterElement.textContent = batter;
    batterElement.style.width = "150px";

    batterbox.appendChild(orderElement);
    batterbox.appendChild(batterElement);

    battersElement.appendChild(batterbox);
}

// 스코어보드
var difficulty = sessionStorage.getItem("difficulty");
var pcScore = document.getElementById("pcScore");
if (difficulty == "easy") {
    pcScore.textContent = 1;
} else if (difficulty == "normal") {
    pcScore.textContent = 3;
} else if (difficulty == "hard") {
    pcScore.textContent = 5;
}
var userScore = document.getElementById("userScore");
var score = Number(userScore.textContent);

// 해설창
var commentaryBox = document.getElementById("commentary");

// 해설 추가 함수
function addCommentary(text) {
    commentaryBox.value += text + "\n";
    commentaryBox.scrollTop = commentaryBox.scrollHeight;
}

// 게임 종료 조건
function isgameover() {
    // 3아웃이거나 역전했을 때
    if (outCount == 3 || score > Number(pcScore.textContent)) {
        setTimeout(() => {
            // ball 이미지 숨기기
            var allBall = document.getElementsByClassName("ball_img");
            for (var i = 0; i < allBall.length; i++) {
                allBall[i].style.display = "none";
            }

            // bat 이미지 숨기기
            var allbat = document.getElementsByClassName("bat_img");
            for (var i = 0; i < allbat.length; i++) {
                allbat[i].style.display = "none";
            }

            // 게임 종료 모달창 보이기
            document.getElementById("gameover").style.display = "block";
            document.getElementById("result_pitcher").style.display = "block";
            document.getElementById("result_batter").style.display = "block";

            // 게임 결과 계산
            var result = document.getElementById("result");
            if (score > Number(pcScore.textContent)) {
                result.textContent = "WIN";
            } else if (score == Number(pcScore.textContent)) {
                result.textContent = "DRAW";
            } else {
                result.textContent = "LOSE";
            }

            // 게임 결과 모달창에 표시
            document.getElementById("finalScorePc").textContent = pcScore.textContent;
            document.getElementById("finalScoreUser").textContent = userScore.textContent;
            document.getElementById("UserName").textContent = teamName;
        }, 1000);
    }
}

// ball 이미지 함수
function ballImg(location) {
    // 모든 공 이미지 숨기기
    var allBall = document.getElementsByClassName("ball_img");
    for (var i = 0; i < allBall.length; i++) {
        allBall[i].style.display = "none";
    }

    // pc가 선택한 공 이미지 보이기
    var ball = document.getElementById("ball_img_" + location);
    ball.style.display = "block";
}

// bat 이미지 함수
function batImg(location) {
    // 모든 배트 이미지 숨기기
    var allbat = document.getElementsByClassName("bat_img");
    for (var i = 0; i < allbat.length; i++) {
        allbat[i].style.display = "none";
    }

    // 사용자가 선택한 배트 이미지 보이기
    var bat = document.getElementById("bat_img_" + location);
    bat.style.display = "block";
}

// 스트라이크 존 클릭 이벤트
document.getElementById("strikeZone").addEventListener("click", function (e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; // x 좌표
    var y = e.clientY - rect.top; // y 좌표

    var width = rect.right - rect.left;
    var height = rect.bottom - rect.top;

    // strikeZone을 대각선으로 4등분 했을 때, 각 영역에 대한 클릭을 처리
    if (y < (height / width) * x && y < height - (height / width) * x) {
        batImg("top");
        batting("top");
    } else if (y > (height / width) * x && y < height - (height / width) * x) {
        batImg("left");
        batting("left");
    } else if (y > (height / width) * x && y > height - (height / width) * x) {
        batImg("bottom");
        batting("bottom");
    } else if (y < (height / width) * x && y > height - (height / width) * x) {
        batImg("right");
        batting("right");
    }
});

// 볼 존 클릭 이벤트
document.getElementById("ballZone").addEventListener("click", function (e) {
    if (e.target.id === "ballZone") {
        batImg("ball");
        batting("ball");
    }
});

// 투수 피칭 계산 함수
function pitching() {
    var pitch = Math.floor(Math.random() * 100) + 1; // 1~100
    if (pitch <= 40) {
        ballImg("ball");
        return "ball";
    } else if (40 < pitch && pitch <= 55) {
        ballImg("top");
        return "top";
    } else if (55 < pitch && pitch <= 70) {
        ballImg("left");
        return "left";
    } else if (70 < pitch && pitch <= 85) {
        ballImg("bottom");
        return "bottom";
    } else if (85 < pitch && pitch <= 100) {
        ballImg("right");
        return "right";
    }
}

// 타자 스윙 계산 함수
function batting(select) {
    if (select == pitching()) {
        var bat = Math.floor(Math.random() * 100) + 1; // 1~100
        if (select == "ball") {
            // 볼을 클릭했을 때
            // 볼
            addCommentary("볼!");
            ballSound.play();
            ballCount++;
        } else {
            // 스트라이크를 스윙했을 때
            if (batterIndex < 2) {
                // 1~2번 타자일 때
                if (bat <= 5) {
                    // 5% 헛스윙
                    addCommentary("헛스윙!");
                    strikeSound.play();
                    strikeCount++;
                } else if (5 < bat && bat <= 65) {
                    // 60% 안타
                    addCommentary("안타!");
                    baseCount("안타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (65 < bat && bat <= 85) {
                    // 20% 2루타
                    addCommentary("2루타!");
                    baseCount("2루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (85 < bat && bat <= 95) {
                    // 10% 3루타
                    addCommentary("3루타!");
                    baseCount("3루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (95 < bat && bat <= 100) {
                    // 5% 홈런
                    addCommentary("홈런!");
                    baseCount("홈런");
                    strikeCount = 0;
                    ballCount = 0;
                }
            } else if (batterIndex >= 2 && batterIndex < 5) {
                // 3~5번 타자일 때
                if (bat <= 10) {
                    // 10% 헛스윙
                    strikeCount++;
                    strikeSound.play();
                    addCommentary("헛스윙!");
                } else if (10 < bat && bat <= 60) {
                    // 50% 안타
                    addCommentary("안타!");
                    baseCount("안타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (60 < bat && bat <= 85) {
                    // 25% 2루타
                    addCommentary("2루타!");
                    baseCount("2루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (85 < bat && bat <= 90) {
                    // 5% 3루타
                    addCommentary("3루타!");
                    baseCount("3루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (90 < bat && bat <= 100) {
                    // 10% 홈런
                    addCommentary("홈런!");
                    baseCount("홈런");
                    strikeCount = 0;
                    ballCount = 0;
                }
            } else if (batterIndex >= 5 && batterIndex < 9) {
                // 6~9번 타자일 때
                if (bat <= 10) {
                    // 10% 헛스윙
                    strikeCount++;
                    strikeSound.play();
                    addCommentary("헛스윙!");
                } else if (10 < bat && bat <= 65) {
                    // 55% 안타
                    addCommentary("안타!");
                    baseCount("안타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (65 < bat && bat <= 90) {
                    // 25% 2루타
                    addCommentary("2루타!");
                    baseCount("2루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (90 < bat && bat <= 95) {
                    // 5% 3루타
                    addCommentary("3루타!");
                    baseCount("3루타");
                    strikeCount = 0;
                    ballCount = 0;
                } else if (95 < bat && bat <= 100) {
                    // 5% 홈런
                    addCommentary("홈런!");
                    baseCount("홈런");
                    strikeCount = 0;
                    ballCount = 0;
                }
            }
        }
    } else {
        // 스트라이크
        strikeCount++;
        strikeSound.play();
        addCommentary("스트라이크!");
    }
    count();
}

// 볼 카운트 계산 함수
function count() {
    if (ballCount == 4) {
        // 볼넷
        addCommentary("볼넷!");
        baseCount("볼넷");
        strikeCount = 0;
        ballCount = 0;
    } else if (strikeCount == 3) {
        // 아웃
        addCommentary("삼진 아웃!");
        strikeCount = 0;
        ballCount = 0;
        outCount++;
        if (outCount != 3) {
            changeBatter();
        }

        var strikeOut = document.getElementById('strikeOut');
        strikeOut.style.opacity = "1"; // fade in
        setTimeout(function () {
            strikeOut.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    }

    if (outCount == 3) {
        // 게임 종료
        addCommentary("3아웃!");
        isgameover();
    }

    display();
}

// field 이미지 변경 함수
function fieldChange(fst, snd, trd) {
    var field = document.getElementById("field");
    field.src = "field/" + "0" + fst + snd + trd + ".png";
}

// 루 상황 계산
function baseCount(hit) {
    var runCount;
    if (hit == "볼넷") {
        runCount = 1;

        var fourBall = document.getElementById('fourBall');
        fourBall.style.opacity = "1"; // fade in
        setTimeout(function () {
            fourBall.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    } else if (hit == "안타") {
        hitSound.play();
        yellSound.play();
        runCount = 1;

        var hit = document.getElementById('hit');
        hit.style.opacity = "1"; // fade in
        setTimeout(function () {
            hit.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    } else if (hit == "2루타") {
        hitSound.play();
        yellSound.play();
        runCount = 2;

        var double = document.getElementById('double');
        double.style.opacity = "1"; // fade in
        setTimeout(function () {
            double.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    } else if (hit == "3루타") {
        hitSound.play();
        yellSound.play();
        runCount = 3;

        var triple = document.getElementById('triple');
        triple.style.opacity = "1"; // fade in
        setTimeout(function () {
            triple.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    } else if (hit == "홈런") {
        hitSound.play();
        yellSound.play();
        base[0]++;
        runCount = 4;

        var homerun = document.getElementById('homerun');
        homerun.style.opacity = "1"; // fade in
        setTimeout(function () {
            homerun.style.opacity = "0"; // fade out
        }, 1500); // 2초 후 fade out
    }

    // 루 상황 계산
    for (var i = 3; i > 0; i--) {
        if (base[i] == 1) {
            if (i + runCount > 3) {
                base[i] = 0;
                base[0]++;
            } else {
                base[i] = 0;
                base[i + runCount] = 1;
            }
        }
    }

    // 현재 타자의 루 상황 계산
    if (runCount != 4) {
        base[runCount] = 1;
    }

    // 점수 계산
    if (base[0] != 0) {
        score += base[0];
        userScore.textContent = score;
        base[0] = 0;
    }

    // field 이미지 변경
    fieldChange(base[1], base[2], base[3]);

    // 게임 종료 확인
    isgameover();

    // 타자 변경
    changeBatter();
}

// 디스플레이 계산 함수
function display() {
    // 볼 카운트 디스플레이
    if (ballCount != 0) {
        document.getElementById("b" + ballCount).style.backgroundColor = "green";
    } else {
        for (var i = 1; i <= 3; i++) {
            document.getElementById("b" + i).style.backgroundColor = "black";
        }
    }

    // 스트라이크 카운트 디스플레이
    if (strikeCount != 0) {
        document.getElementById("s" + strikeCount).style.backgroundColor = "yellow";
    } else {
        for (var i = 1; i <= 2; i++) {
            document.getElementById("s" + i).style.backgroundColor = "black";
        }
    }

    // 아웃 카운트 디스플레이
    if (outCount != 0) {
        document.getElementById("o" + outCount).style.backgroundColor = "red";
    } else {
        for (var i = 1; i <= 2; i++) {
            document.getElementById("o" + i).style.backgroundColor = "black";
        }
    }
}

// 타자 변경 함수
function changeBatter() {
    // 이전 타자 선택 해제
    document.getElementById("batter" + batterIndex).style.border = "none";
    document.getElementById("batter" + batterIndex).style.color = "rgba(255, 255, 255, 0.3)";

    // 다음 타자
    batterIndex++;
    if (batterIndex == 9) {
        batterIndex = 0;
    }

    // 해설 추가
    addCommentary("\n[" + (batterIndex + 1) + "번타자 " + batters[batterIndex] + "]");

    // 타자 선택
    document.getElementById("batter" + batterIndex).style.border = "1px solid yellow";
    document.getElementById("batter" + batterIndex).style.color = "white";
}
