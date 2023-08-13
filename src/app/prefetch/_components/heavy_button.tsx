"use client";

import moment from "moment";
import { useState } from "react";


export default function HeavyButton() {
    const [str, setStr] = useState("");
    const momentNow = () => {
        const now = moment().format();
        setStr(now)
    }

    return (
        <div>
        <button onClick={momentNow} >
          heavy
        </button>
        <label>{str}</label>
      </div>
    )
  }
  