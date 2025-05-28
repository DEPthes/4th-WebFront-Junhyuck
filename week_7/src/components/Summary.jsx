export default function Summary( {input} ) {
    return (
        <div className = "summary">
            <h1>투자 요약</h1>
            <ul>
                <li>초기 투자금 : {input.initialInvestment}원</li>
                <li>연간 투자금 : {input.annualInvestment}원</li>
                <li>기대 수익률 : {input.expectedReturn}원%</li>
                <li>투자 기간 : {input.duration}년</li>
            </ul>
        </div>
    )
}