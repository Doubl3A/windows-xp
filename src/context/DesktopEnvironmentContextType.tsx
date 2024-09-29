import {createContext, FC, ReactNode, useState} from "react";
import {IApplication} from "../interfaces/IApplication.ts";

export type DesktopEnvironmentContextType = {
    applications: IApplication[],
    addApplication: (application: IApplication) => void,
    removeApplication: (application: IApplication) => void,
}

export const DesktopEnvironmentContext = createContext<DesktopEnvironmentContextType | null>(null);

const DesktopEnvironmentProvider: FC<{ children: ReactNode }> = ({children}) => {
    // List of applications currently open
    const [applications, setApplications] = useState<IApplication[]>([]);

    const addApplication = (application: IApplication) => {
        setApplications(prevState => [...prevState, application]);

        console.log(`Adding app:`)
        console.log(application)
        console.log("Application list:")
        console.log(applications)
    }

    const removeApplication = (application: IApplication) => {
        setApplications(prevState => prevState.filter(activeApp => activeApp.name !== application.name));
        
        console.log(`Removing app:`)
        console.log(application)
        console.log("Application list:")
        console.log(applications)
    }

    return (
        <DesktopEnvironmentContext.Provider value={{
            applications: applications,
            addApplication: addApplication,
            removeApplication: removeApplication,
        }}>
            {children}
        </DesktopEnvironmentContext.Provider>
    )
}

export default DesktopEnvironmentProvider;