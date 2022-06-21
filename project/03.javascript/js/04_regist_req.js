// 데이터베이스의 데이터르 임으로 만들자(JSON)...

// 사용자 정보 데이터
const users = [
  { id: 'sentron', name: '조병호', password: '1234' },
  { id: 'hong', name: 'hong', password: 'abcd' },
  { id: 'kim', name: 'kim', password: '0000' },
]

// request 객체를 만들어 가상의 통신을 구현하자..
const request = {
  regist: function (json) {
    users.push(json);
    console.dir(users);
  }
}