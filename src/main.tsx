import "./style/style.scss"
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";
import DesktopEnvironment from "./components/templates/DesktopEnvironment/DesktopEnvironment.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DesktopEnvironment/>
        <SpeedInsights/>
        <Analytics/>
    </StrictMode>
)
