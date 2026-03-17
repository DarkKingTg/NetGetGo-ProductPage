function DashboardPreview() {
  const activityItems = [
    { team: 'Delivery', update: '3 milestones moved to ready for review', tone: 'bg-emerald-400' },
    { team: 'Sales', update: '2 deals need pricing approvals today', tone: 'bg-amber-400' },
    { team: 'Support', update: 'All priority tickets cleared before noon', tone: 'bg-blue-400' },
  ]

  return (
    <div className="relative animate-float-soft">
      <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-amber-300/40 blur-3xl lg:block" />
      <div className="absolute -right-4 bottom-6 hidden h-32 w-32 rounded-full bg-blue-400/20 blur-3xl lg:block" />
      <div className="relative overflow-hidden rounded-[36px] bg-slate-950 text-white shadow-[0_36px_120px_rgba(15,23,42,0.28)] ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-full bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/60">
            NetJetGo workspace
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">Revenue pulse</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">INR 4.2M</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  +18.4% this month
                </span>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {[42, 58, 47, 74, 63, 81, 70, 92].map((height, index) => (
                  <div key={height} className="flex h-28 items-end rounded-2xl bg-white/[0.03] p-2">
                    <div
                      className={`w-full rounded-xl ${index === 7 ? 'bg-amber-300' : 'bg-white/80'}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Clients live', '1,284'],
                ['Automation saves', '18 hrs/wk'],
                ['Team adoption', '94%'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm text-white/60">{label}</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Today&apos;s signal</p>
              <p className="mt-3 text-lg leading-7 text-white/88">
                Teams have cleared blockers early enough to ship client updates before 5 PM.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Live activity</p>
              <div className="mt-4 space-y-3">
                {activityItems.map((item) => (
                  <div key={item.team} className="flex items-start gap-3 rounded-2xl bg-black/20 p-3">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${item.tone}`} />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.team}</p>
                      <p className="mt-1 text-sm leading-6 text-white/65">{item.update}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
