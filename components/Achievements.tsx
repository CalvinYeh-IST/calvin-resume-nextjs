const metrics = [
  { n: '33×', l: '海外流量成長\n6K → 200K 工作階段' },
  { n: '70%', l: '潛在客戶成交率\n50 潛客 → 35 付費學員' },
  { n: '66%', l: '後勤流程效率提升\n3 週週轉縮短至 1 週' },
]

const awards = [
  { yr: '2019', name: '第十六屆 TAA 校園創意提案競賽', rank: '全國第二名' },
  { yr: '2018', name: '第十六屆 ATCC 全國大專院校商業個案大賽', rank: '全國前十強' },
  { yr: '2018', name: '第二十七屆時報金犢獎', rank: '優選' },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">03</span>
          <h2 className="sec-title">量化成果</h2>
          <span className="sec-line" />
        </div>
        <div className="metrics-row reveal">
          {metrics.map((m) => (
            <div key={m.n} className="metric-cell">
              <span className="metric-n">{m.n}</span>
              <span className="metric-l">
                {m.l.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className="awards reveal">
          {awards.map((a) => (
            <div key={a.name} className="award">
              <span className="award-yr">{a.yr}</span>
              <span className="award-name">{a.name}</span>
              <span className="award-rank">{a.rank}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
