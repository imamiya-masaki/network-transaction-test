"use client";

import moment from "moment";
import { useMemo, useState } from "react";
import {getBig} from "./get-big"
export default function HeavyJsonView() {

    const big: string = useMemo(() => {
        
        const a = getBig() as any
        return a.data[0].number
    }, [])

    return (
        <div>
            {big}
      </div>
    )
  }
  