import { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth }         from '../firebase/config'
import { useOrders }    from '../hooks/useOrders'
import { useAuthState } from '../hooks/useAuthState'
import OrderList        from '../components/admin/OrderList'
import StatsBar         from '../components/admin/StatsBar'

const TABS = ['All', 'Pending', 'Preparing', 'Ready']

export default function AdminPage() {
  const { user, loading: authLoading } = useAuthState()
  const { orders, pending, preparing, ready, done, loading } = useOrders()
  const [activeTab, setActiveTab] = useState('All')

  async function handleLogin() {
    try { await signInWithPopup(auth, new GoogleAuthProvider()) }
    catch (e) { console.error(e) }
  }

  // Auth loading spinner
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
      </div>
    )
  }

  // Google login gate
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-light gap-6 px-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[28px]">coffee</span>
          </div>
          <h1 className="text-2xl font-black text-text-main">Cafe Twenty Twenty</h1>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-light p-8 w-full max-w-sm flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-text-main">Admin Sign In</h2>
          <p className="text-text-sub text-sm text-center">Sign in with your Google account to access the dashboard.</p>
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-light rounded-xl px-5 py-3 font-bold text-text-main shadow-sm hover:bg-[#f4f2f1] transition-colors"
          >
            <svg className="size-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    )
  }

  const tabOrders = { All: orders, Pending: pending, Preparing: preparing, Ready: ready }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main font-display">
      <div className="layout-container flex h-full grow flex-col">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-neutral-light dark:border-neutral-dark px-4 py-3 md:px-10 lg:px-40 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-[24px]">coffee</span>
            </div>
            <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Admin Dashboard</h2>
          </div>
          <div className="flex gap-2 items-center">
            <button className="hidden sm:flex min-w-[84px] items-center justify-center rounded-xl h-9 px-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold border border-green-200 dark:border-green-800">
              <span className="material-symbols-outlined text-[16px] mr-1">fiber_manual_record</span>
              Online
            </button>
            <div className="sm:hidden size-3 bg-green-500 rounded-full animate-pulse" />
            {user.photoURL && (
              <img src={user.photoURL} alt={user.displayName} className="size-8 rounded-full border-2 border-neutral-light" />
            )}
            <button
              onClick={() => signOut(auth)}
              title="Sign out"
              className="flex items-center justify-center rounded-xl h-9 w-9 bg-neutral-light/50 dark:bg-neutral-dark hover:bg-neutral-light dark:hover:bg-neutral-dark/80 text-text-main dark:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">

            {/* Tabs */}
            <div className="sticky top-[61px] z-40 bg-background-light dark:bg-background-dark pb-2 pt-1 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto scrollbar-hide">
              <div className="flex border-b border-neutral-light dark:border-neutral-dark w-full min-w-max">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-6 flex-1 transition-colors ${
                      activeTab === tab
                        ? 'border-primary text-text-main dark:text-white'
                        : 'border-transparent text-text-sub dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
                  </button>
                ))}
              </div>
            </div>

            <StatsBar
              pending={pending.length}
              preparing={preparing.length}
              ready={ready.length}
              done={done.length}
            />

            <OrderList orders={tabOrders[activeTab]} loading={loading} />
          </div>
        </div>
      </div>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button className="flex items-center justify-center size-14 rounded-full bg-primary text-text-main shadow-lg hover:bg-primary/90 transition-all active:scale-90">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>
    </div>
  )
}