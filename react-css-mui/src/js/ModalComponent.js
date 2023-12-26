import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
    Modal : 웹페이지에서 특정 작업을 수행하기 위해 표시되는 작은 창
    import {Modal, Button} from 'react-bootstrap';
        -> bootstrap 스타일을 아예 함수(컴포넌트)로 만들어서 제공
    import 'bootstrap/dist/css/bootstrap.min.css';
        -> 함수에 넣어주는 css로, className에 bootstrap이 지정한 형식이 들어간다
*/

const ModalComponent = () => {

    //Model의 상태를 관리해줄 useState 사용
    const [showModal, setShowModal] = useState(false);

    //모달을 열고 닫는 함수를 표현
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="m-2">
            {/*Modal을 열기 위한 버튼 생성
               variant : bootstrap에서 버튼 등 다양한 요소에 스타일 변형을 주기 위해 지정해주는 속성
            */}
            <Button variant='primary' onClick={handleShow}>
                Modal 열기
            </Button>
            {/*Modal 함수(컴포넌트) 생성*/}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>Modal 제목</Modal.Header>
                <Modal.Body>
                    <p>안녕하세요. Modal body입니다</p>
                    <p>님이 요청하신 사항을 확인해주세요</p>
                    <ul>
                        <li>시급 100만원</li>
                        <li>롯데월드 매직패스 무제한</li>
                        <li>하와이 항공권</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='success' onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant='danger' onClick={handleClose}>
                        Home
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComponent;