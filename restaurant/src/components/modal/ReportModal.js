import React, { useState, useEffect } from 'react';
import '../modal/ReportModal.css';
import ReportDropDown from '../../dropdown/ReportDropDown';

const ReportModal = ({ isOpen, onClose }) => {
    const [selectedReport, setSelectedReport] = useState("");

    const handleSelectReport = (selectedValue) => {
        setSelectedReport(selectedValue);
    };

    // 선택된 신고 내용을 데이터베이스에 저장하는 함수
    const handleReportSubmit  = () => {
        // 여기에 데이터베이스에 저장하는 로직을 구현합니다.
        alert(`신고 접수 완료 : ${selectedReport}`);
        onClose(); // 모달 창 닫기
    };

    return (
        <div className={isOpen ? 'modal-background' : 'modal-background hidden'}>
            <div className="modal">
                <div className='modalTitle'>리뷰를 신고하는 이유를 알려주세요!</div>
                <div className='modalContent'>타당한 근거 없이 신고된 내용은 관리자 확인 후 반영되지 않을 수 있습니다.</div>
                <ReportDropDown onSelect={handleSelectReport}/>
                <div className="ReportModalBtnGroup">
                    <button onClick={handleReportSubmit} className='ReportBtn'>신고</button>
                    <button onClick={onClose} className='closeBtn'>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default ReportModal;
