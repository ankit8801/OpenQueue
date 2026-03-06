import QueueTicket from './QueueTicket'

export default function QueueBoard({ preparing, ready }) {
  return (
    <main className="flex-1 w-full h-full flex flex-row overflow-hidden">

      {/* Preparing — left */}
      <section className="w-1/2 flex flex-col border-r border-[#dbe6db] dark:border-[#2a4a2a] bg-background-light dark:bg-background-dark">
        <div className="bg-[#eef2ee] dark:bg-[#1a331a] py-6 px-8 border-b border-[#dbe6db] dark:border-[#2a4a2a] flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-4xl">soup_kitchen</span>
          <h2 className="text-slate-500 dark:text-slate-400 text-3xl md:text-4xl font-bold tracking-wider uppercase">Preparing</h2>
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          {preparing.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-sub gap-3 opacity-50">
              <span className="material-symbols-outlined text-5xl">hourglass_empty</span>
              <p className="font-medium">No orders preparing</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
              {preparing.map(o => (
                <QueueTicket key={o.id} token={o.tokenNumber} size="sm" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Ready — right */}
      <section className="w-1/2 flex flex-col bg-white dark:bg-[#0c1a0c]">
        <div className="bg-primary/10 dark:bg-primary/20 py-6 px-8 border-b border-primary/20 dark:border-primary/30 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black tracking-wider uppercase">Ready</h2>
        </div>
        <div className="flex-1 p-8 overflow-y-auto bg-white dark:bg-[#0c1a0c]">
          {ready.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-sub gap-3 opacity-50">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
              <p className="font-medium">No orders ready yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {ready.map((o, i) => (
                <QueueTicket key={o.id} token={o.tokenNumber} highlight={i === 0} size="lg" />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}