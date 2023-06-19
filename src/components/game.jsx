import React from "react"
import { Unity, useUnityContext } from "react-unity-webgl"

export default function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "go-kart-krazy/build/go-kart-crazy-build.loader.js",
        dataUrl: "go-kart-krazy/build/go-kart-crazy-build.data.unityweb",
        frameworkUrl: "go-kart-krazy/build/go-kart-crazy-build.framework.js.unityweb",
        codeUrl: "go-kart-krazy/build/go-kart-crazy-build.wasm.unityweb"
    })

    const loadingPercentage = Math.round(loadingProgression * 100);
    
    return (
      <div className="container">
        {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    )
}