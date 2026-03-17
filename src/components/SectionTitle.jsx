function SectionTitle({ label, title, subtitle, align = 'left', dark = false }) {
  const isCentered = align === 'center'
  const wrapperClasses = isCentered
    ? 'mx-auto flex max-w-3xl flex-col items-center text-center'
    : 'flex max-w-3xl flex-col items-start text-left'
  const labelClasses = dark
    ? 'bg-white/10 text-white/80 ring-white/15'
    : 'bg-white/70 text-slate-600 ring-slate-900/8'
  const titleClasses = dark ? 'text-white' : 'text-ink'
  const subtitleClasses = dark ? 'text-white/70' : 'text-slate-600'

  return (
    <div className={wrapperClasses}>
      {label ? (
        <span
          className={`mb-5 inline-flex rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ring-1 ${labelClasses}`}
        >
          {label}
        </span>
      ) : null}

      <h2 className={`font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${titleClasses}`}>
        {title}
      </h2>

      {subtitle ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${subtitleClasses}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle
