import React from 'react';  // import react 라이브러리

// React 안의 Component 또는 PureComponent 상속하여 컴포넌트(클래스) 생성
export default class MyComponent extends React.PureComponent {
    // DOM을 만들어 결과를 반환한다.
    render() {
        // this.props = { title: "저의 이름은", name: "홍길동" }
        console.dir(this.props);

        return <h1>안녕하세요 {this.props.title} {this.props.name} 입니다</h1>
    }
}