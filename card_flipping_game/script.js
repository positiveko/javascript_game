var width = 4;
var height = 3;

function cardSet(width, height) {
  for (var i = 0; i < width * height; i += 1) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    (function (c) {
      card.addEventListener('click', function () {
        c.classList.toggle('flipped');
      });
    })(card); // 즉시 실행 함수를 c라는 함수로 감싸면 새로운 function 스코프가 생김.
    // card가 c로 복사가 됨. 클로저 문제 해결.
    var gameTable = document.getElementById('gameTable');
    gameTable.appendChild(card);
    //document.body.appendChild(card); // 한번 더 div 감싸서 가로 고정
  }
}

cardSet(width, height);
