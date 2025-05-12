import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
import { useEffect } from "react"

export const Signup = () => {
    useEffect(() => {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://agent.d-id.com/v1/index.js"
    script.setAttribute("data-name", "did-agent")
    script.setAttribute("data-mode", "fabio")
    script.setAttribute("data-client-key", "Z29vZ2xlLW9hdXRoMnwxMTQzMDk3NzA4NTg1Mzc3MTgyODM6dnc3cXRVMUtUdUJEd3hRZnlvOUlR")
    script.setAttribute("data-agent-id", "agt_jEaYPX-q")
    script.setAttribute("data-monitor", "true")
    document.body.appendChild(script)

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <Auth type="signup"/>
        <div className="hidden lg:block">
            <Quote />
        </div>
    </div>
  </div>
}
