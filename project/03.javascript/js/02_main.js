// import req from "./00_request";
// const req = require("./00_request");

window.onload = function() {
    console.log("메인 화면 로딩 완료....");
    
    // 일단 template 태그를 가져와보자...
    const tcard = document.querySelector("#temp-card");
    console.dir(tcard.innerHTML);

    const li = document.createElement("li");
    li.innerHTML = tcard.innerHTML
    console.dir(li.innerHTML);

    // 그리고 화면에 추가해보자
    const frame = document.querySelector("#ul-frame");
    // 이대로 사용하면 tcard 노드를 이동하는 것이므로 자식엔 무조건 하나만 존재한다.
    // frame.appendChild(tcard);
    // frame.appendChild(tcard);

    // 따라서 tcard를 깊은(deep) 복제하여 자식노드에 추가해야 한다.
    // frame.appendChild(li.cloneNode(true));
    // frame.appendChild(li.cloneNode(true));

    // 이제 본격적으로 json(request) 데이터를 이용해 작업해보자...
    const list = request.mainlist();

    for (let i = 0; i < list.length; i++) {
        // 리스트에서 하나의 데이터를 가져오고
        const data = list[i];
        // console.dir(data);  // 데이터 확인

        // <li> : card(template)을 하나 복제
        const element = li.cloneNode(true);
        // console.dir(element.innerHTML); // 내부의 HTML을 확인

        // 일단 임시 변수(메모리공간)에 innerHTML(text)를 저장
        let html = element.innerHTML;
        
        // 그리고 해당하는 데이터를 교체(변환후 다시 자신의 변수에 저장)

        // 아이콘 교체
        html = html.replace("{icon}", data.icon);
        // 타이틀 교체
        html = html.replace("{title}", data.title);
        // 레이블 교체
        html = html.replace("{label}", data.label);

        // 회사명 교체. 텍스트 교체. 이미지 교체 (체이닝 방식)
        html = html.replace("{company}", data.company).replace("{text}", data.text).replace("{img}", data.img);
        
        // 수정된 HTML을 다시 DOM element(요소)에 반영
        element.innerHTML = html
        // console.dir(element.innerHTML); // 데이터 확인

        // 부모의 자식 요소로 추가
        frame.appendChild(element);
    }
}