"use client";

import Image from 'next/image';

export default function LCP() {

  return (
    <div style={{
      "width": "300px",
      "height": "auto"
    }}>
      <Image src="/waterfall.jpg" alt="waterfall" width={500}
  height={500} priority={true} />
    </div>
  )
}
  