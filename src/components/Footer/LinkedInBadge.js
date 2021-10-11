import React, { useEffect } from "react"

export default function App() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://platform.linkedin.com/badges/js/profile.js"
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="talha-abbasi"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://pk.linkedin.com/in/talha-abbasi?trk=profile-badge"
        />
      </div>
    </div>
  )
}
