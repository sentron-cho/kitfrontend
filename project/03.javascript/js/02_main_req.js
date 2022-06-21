// 데이터베이스의 데이터르 임으로 만들자(JSON)...

// 메인 화면의 CARD 형식의 광고 데이터
const mains = [
  {
    id: 'M001',
    icon: '../images/edu_icon.png',
    title: '에듀윌 1',
    label:
      '🚨기간한정 특별 이벤트 1🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수1위 #에듀윌 #공인중개사',
    company: 'EDUWILL.NET',
    text: '입문교재 선착순 무료신청☞\n합격자 수 1위 에듀윌 공인중개사',
    img: '../images/sample-image-1.jpg',
  },
  {
    id: 'M002',
    icon: '../images/edu_icon.png',
    title: '에듀윌 2',
    label:
      '🚨기간한정 특별 이벤트 2🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수1위 #에듀윌 #공인중개사',
    company: 'EDUWILL.NET',
    text: '입문교재 선착순 무료신청☞\n합격자 수 1위 에듀윌 공인중개사',
    img: '../images/sample-image-2.jpg',
  },
  {
    id: 'M003',
    icon: '../images/edu_icon.png',
    title: '에듀윌 3',
    label:
      '🚨기간한정 특별 이벤트 3🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수1위 #에듀윌 #공인중개사',
    company: 'EDUWILL.NET',
    text: '입문교재 선착순 무료신청☞\n합격자 수 1위 에듀윌 공인중개사',
    img: '../images/sample-image-3.jpg',
  },
  {
    id: 'M004',
    icon: '../images/edu_icon.png',
    title: '에듀윌 4',
    label:
      '🚨기간한정 특별 이벤트 4🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수1위 #에듀윌 #공인중개사',
    company: 'EDUWILL.NET',
    text: '입문교재 선착순 무료신청☞\n합격자 수 1위 에듀윌 공인중개사',
    img: '../images/sample-image-4.jpg',
  },
  {
    id: 'M005',
    icon: '../images/edu_icon.png',
    title: '에듀윌 5',
    label:
      '🚨기간한정 특별 이벤트 5🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수1위 #에듀윌 #공인중개사',
    company: 'EDUWILL.NET',
    text: '입문교재 선착순 무료신청☞\n합격자 수 1위 에듀윌 공인중개사',
    img: '../images/sample-image-5.jpg',
  },
]

// 메인 화면의 CARD 형식의 광고 데이터
const comments = [
  {
    id: 'C001',
    pid: 'M001',
    userid: 'sentron',
    title: '댓글 1',
    text: '정말 에듀윌 교육은 최고입니다.',
  },
  {
    id: 'C002',
    pid: 'M001',
    title: '댓글 2',
    text: '정말 에듀윌 교육은 최고입니다.',
  },
  {
    id: 'C003',
    pid: 'M001',
    title: '댓글 3',
    text: '정말 에듀윌 교육은 최고입니다.',
  },
]

// request 객체를 만들어 가상의 통신을 구현하자..
const request = {
  mainlist: function () {
    return mains
  },
  commentlist: function () {
    let list = []
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].pid === id) list.push(comments[i])
    }
  },
}