
Component.md

컴포넌트 :
    재사용이 가능한 각각의 독립된 모듈(function, class)
    
재사용 :
    반복되는 내용을 하나의 함수로 압축시켜 함수를 불러와서 사용하는 행위

++++++++++++++++++++++++++++++

종류

1. 함수형 컴포넌트 :
        간단하게 함수로 정의 가능하고, Hook을 많이 사용
        ex) NewComponent.js
        import React from 'react';
        function FuncComponent() {
            return (
                <div>
                    Hello World !
                </div>
            )
        }

2. 클래스형 컴포넌트 :
        class 키워드를 사용하며, 상태(state)와 같은 라이프사이클 메서드를 활용 가능
        ex) OldComponent.js
        import React, {Component} from 'react';
        calss ClassComponent extends Component {
            render() {
                return (
                    <div>
                        Hello World !
                    </div>
                )
            }
        }