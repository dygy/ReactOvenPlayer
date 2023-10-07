# Getting Started with ReactOvenPlayer
## Setup
```bash
npm i react-ovenplayer
```
## Usage
```typescript jsx
"use client"
import React, {useEffect, useState} from "react";
import ReactOvenPlayer, {OvenPlayerState} from "react-ovenplayer"

export const Player = () => {
    const [state, setState] = useState<OvenPlayerState | null>(null)

    useEffect(()=>{
        state?.instance.pause()
    }, [state])

    return (
      <div>
          <ReactOvenPlayer
              setState={setState}
              config={{
                  autoStart: true,
                  autoFallback: true,
                  controls: true,
                  showBigPlayButton: false,
                  mute: true,
                  webrtcConfig: {
                      timeoutMaxRetry: 5, 
                      connectionTimeout: 10000,
                  }, 
                  sources: [
                      {
                          label: 'ap-webrtc', 
                          type: 'webrtc',
                          file: `wss://url/webrtc`,
                      }, 
                      {
                          label: 'eu-webrtc', 
                          type: 'webrtc', 
                          file: `wss://url2/webrtc`,
                      },
                  ],
              }
          }
          />
      </div>
    )
}
```
