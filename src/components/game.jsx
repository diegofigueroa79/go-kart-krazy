import React from "react"
import { Unity, useUnityContext } from "react-unity-webgl"

export default function Game() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "https://diegofigueroa79.github.io/go-kart-krazy/build/go-kart-crazy-build.loader.js",
        dataUrl: "https://diegofigueroa79.github.io/go-kart-krazy/build/go-kart-crazy-build.data.unityweb",
        frameworkUrl: "https://diegofigueroa79.github.io/go-kart-krazy/build/go-kart-crazy-build.framework.js.unityweb",
        codeUrl: "https://diegofigueroa79.github.io/go-kart-krazy/build/go-kart-crazy-build.wasm.unityweb"
    })

    console.log(unityProvider)

    const loadingPercentage = Math.round(loadingProgression * 100);
    
    return (
      <div className="game">
        {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    )
}