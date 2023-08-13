import '../globals.css'
import NetworkInfo from './_components/network_info'
import Link from 'next/link'
import HeavyButton from './_components/heavy_button'
import HeavyJsonView from './_components/heavy_json_view'
export default function PrefetchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
        {children}
        <span>hoge</span>
        <div id="network">
          <NetworkInfo />
        </div>
        <div id="heavy">
          <HeavyButton />
          <HeavyJsonView />
        </div>
    </div>
  )
}
