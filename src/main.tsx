import "./style/style.scss"
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";
import Default from "./components/templates/Default/Default.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Default/>
        <SpeedInsights/>
        <Analytics/>
    </StrictMode>
)
