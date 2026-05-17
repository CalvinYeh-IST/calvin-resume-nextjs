const stats = [
  { num: '15', unit: '+', label: 'Power BI 自動化\n儀表板' },
  { num: '200', unit: '+', label: '人次技術培訓\n設計與交付' },
  { num: '70', unit: '%', label: '潛客成交率\n（35/50 人轉換）' },
  { num: '7', unit: 'yr', label: '三產業\n跨界實戰' },
]

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="wrap">
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.num + s.unit} className="stat-item">
              <span className="stat-num">
                {s.num}<span>{s.unit}</span>
              </span>
              <span className="stat-lbl">
                {s.label.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
