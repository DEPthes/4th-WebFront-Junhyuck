export default function CompleteYear({ startYear, duration }) {
  const finishYear = startYear + duration;

  return (
    <p className="center">
      투자 완료 예상 연도: <strong>{finishYear}년</strong>
    </p>
  );
}