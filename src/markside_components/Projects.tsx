import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ALL_PROJECT_ITEMS } from "./ProjectItem";

const validTabs: string[] = ["Experience", "Education", "Projects & Achievements"];

function Projects() {
    const [activeTab, setActiveTab] = useState("Experience")
    const projectListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activateProjects = () => {
            setActiveTab("Projects & Achievements");
            setTimeout(() => {
                const projectsContainer = document.querySelector('.projects-container');
                if (projectsContainer) {
                    projectsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        };

        const handleHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash === "Projects") {
                activateProjects();
            }
        };

        handleHash();
        window.addEventListener('hashchange', handleHash);
        window.addEventListener('openProjects', activateProjects);
        return () => {
            window.removeEventListener('hashchange', handleHash);
            window.removeEventListener('openProjects', activateProjects);
        };
    }, []);

    useEffect(() => {
        if (projectListRef.current) {
            projectListRef.current.style.maxHeight = '2000px';
            setTimeout(() => {
                if (projectListRef.current) {
                    const newHeight = projectListRef.current.scrollHeight;
                    projectListRef.current.style.maxHeight = `${newHeight}px`;
                }
            }, 0);
        }
    }, [activeTab]);

    let isMobile: boolean = useMediaQuery( {query: "(max-width: 720px)"})

    return (
        <div className='projects-container'>
            
                <div className='project-tabs'>
                {!isMobile ?
                    validTabs.map(el => {
                        const activeClass: string = el === activeTab ? 'active-tab-title' : 'inactive-tab-title'
                        return <div className={`project-tab-title ${activeClass}`} onClick={() => setActiveTab(el)}>{'↪ ' + el}</div>
                    })
                :
                    validTabs.map(el => {
                        const mobileActiveClass: string = el === activeTab ? 'mobile-active-tab-selection' : 'mobile-inactive-tab-selection'
                        return (
                            <div className={`mobile-project-tab-title ${mobileActiveClass}`} onClick={() => setActiveTab(el)}>
                                {el}
                            </div>
                        )
                    })
                }
                </div>
            <div className='project-list' key={activeTab} ref={projectListRef}>
                {ALL_PROJECT_ITEMS.get(activeTab)}
            </div>
        </div>
    )
}

export default Projects;
