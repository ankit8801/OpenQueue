import { useOrders }  from '../hooks/useOrders'
import QueueBoard     from '../components/display/QueueBoard'

export default function DisplayPage() {
  const { preparing, ready } = useOrders()

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display overflow-hidden">
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Header */}
      <header className="w-full bg-white dark:bg-[#152e15] border-b border-[#dbe6db] dark:border-[#2a4a2a] py-6 shadow-sm z-10">
        <div className="px-8 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center gap-2">
          <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black tracking-tight uppercase">
            Cafe Twenty Twenty
          </h1>
          <div className="flex items-center gap-2 text-primary dark:text-primary mt-2">
            <span className="material-symbols-outlined text-4xl animate-pulse">restaurant</span>
            <p className="text-2xl md:text-3xl font-medium tracking-wide uppercase">Now Serving</p>
          </div>
        </div>
      </header>

      <QueueBoard preparing={preparing} ready={ready} />

      {/* Marquee footer */}
      <footer className="bg-slate-900 text-white py-3 px-6 overflow-hidden whitespace-nowrap">
        <div className="inline-block" style={{ animation: 'slide 20s linear infinite' }}>
          <span className="mx-4 text-lg font-medium">Please have your receipt ready for collection.</span>
          <span className="mx-4 text-primary text-lg font-black">•</span>
          <span className="mx-4 text-lg font-medium">Fresh food prepared fresh every day.</span>
          <span className="mx-4 text-primary text-lg font-black">•</span>
          <span className="mx-4 text-lg font-medium">Try our new seasonal specials!</span>
          <span className="mx-4 text-primary text-lg font-black">•</span>
          <span className="mx-4 text-lg font-medium">Please have your receipt ready for collection.</span>
          <span className="mx-4 text-primary text-lg font-black">•</span>
          <span className="mx-4 text-lg font-medium">Fresh food prepared fresh every day.</span>
          <span className="mx-4 text-primary text-lg font-black">•</span>
        </div>
      </footer>
    </div>
  )
}