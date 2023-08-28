// 이벤트란?
// 사용자들의 동작들을 의미한다.
// 이벤트가 발생했다는 것은 웹페이지에서 특정 동작이 발생하여, 웹 브라우저가 그 사실을 알려주는 것을 의미한다.

// 이벤트 핸들러
// 웹에서 발생하는 특정 요소들의 수많은 이벤트를 처리하기 위해서
// 이벤트 핸들러라는 함수를 작성하여 연결해야 한다.

$(document).ready(function(){
  $("button").on({ // 모든 버튼 요소에
    mouseenter: function(){ // mouseenter 이벤트를 설정함
      $("#text").append("마우스가 버튼 위로 진입했어요!<br>")
    },
    click: function(){
      $("#text").append("마우스가 버튼을 클릭했어요!<br>")
    },
    mouseleave: function(){ // mouseleave 이벤트를 설정함
      $("#text").append("마우스가 버튼 위에서 빠져나갔어요!<br>")
    }
  })
})