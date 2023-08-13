"use client";

import { useEffect, useMemo, useState } from "react";

type Connection = {
  downlink: string
  downlinkMax: number
  effectiveType: string
  onchange?: unknown
  ontypechange?: unknown
  rtt: number
  saveData?: boolean
  type: string
}

export default function NetworkInfo() {
  const [networkInfo, setNetworkInfo] = useState(""); 
  useEffect(() => {
    console.log('naviga', (window.navigator as any).connection, JSON.stringify((window.navigator as any).connection, null, 2))
    const network: any = (window.navigator as any).connection
    const object: Connection = {
      downlink: network.downlink,
      downlinkMax: network.downlinkMax,
      effectiveType: network.effectiveType,
      rtt: network.rtt,
      type: network.type
    }
    setNetworkInfo(JSON.stringify(object, null, 2))
  }, [])

  return (
    <div id="network_info">
      <label>ネットワークinfo</label>
      <div>
        {networkInfo}
      </div>
    </div>
  )
}
  