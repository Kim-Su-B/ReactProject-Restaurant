import './ReportDropDown.css';
import React, { useState } from 'react';

const ReportDropDown = ({ onSelect }) => {
    const [selectedReport, setSelectedReport] = useState("");
    const [isOtherSelected, setIsOtherSelected] = useState(false);

    const handleRegionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedReport(selectedValue);

        if (selectedValue === "기타(하단 내용 작성)") {
            setIsOtherSelected(true);
        } else {
            setIsOtherSelected(false);
        }

        onSelect(selectedValue); // 선택된 신고 내용을 부모 Modal 컴포넌트로 전달
    };

    return (
        <div className='ReportDropDownContainer'>
            <div className='ReportCustomSelectContainer'>
                <CustomSelect
                    value={selectedReport}
                    onChange={handleRegionChange}
                    options={[
                        "관련없는 내용",
                        "음란성, 욕설 등 부적절한 내용",
                        "부적절한 홍보 또는 광고",
                        "개인정보 유출 위험",
                        "리뷰 작성 취지에 맞지 않는 내용(복사글 등)",
                        "저작권 도용 의심(사진 등)",
                        "기타(하단 내용 작성)"
                    ]}
                    className="ReportList"
                />
                {/* isOtherSelected가 true이면 input을 렌더링 */}
                <div className='ReportInputBoxContainer'>
                    {isOtherSelected && (
                        <input type="text" placeholder="기타 사유를 작성해주세요" className='ReportInputBox' />
                    )}
                </div>
            </div>
        </div>
    )
}

const CustomSelect = ({ value, onChange, options }) => {
    return (
        <div>
            <select value={value} onChange={onChange} className='ReportCustomSelectList'>
                <option value="">신고 사유를 선택해주세요</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ReportDropDown;
