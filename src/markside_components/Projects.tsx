import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ALL_PROJECT_ITEMS } from "./ProjectItem";

const validTabs: string[] = ["Experience", "Education", "Projects & Achievements"];

// TODO: useEffect to re-render when active tab changes...? i.e. dependency array of [activeTab] I think?

function Projects() {
    // Parent projects component, handles clicking etc.
    // TODO: Better way than just relying on the string name?
    const [activeTab, setActiveTab] = useState("Experience")
    const projectListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash === "Projects") {
            setActiveTab("Projects & Achievements");
            // Scroll to the projects section
            setTimeout(() => {
                const projectsContainer = document.querySelector('.projects-container');
                if (projectsContainer) {
                    projectsContainer.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, []);

    useEffect(() => {
        // Set max-height with a transition for smooth shrinking and expanding
        if (projectListRef.current) {
            // Set to large value initially to allow content to render
            projectListRef.current.style.maxHeight = '2000px';
            
            // After content renders, measure actual height and animate to it
            setTimeout(() => {
                if (projectListRef.current) {
                    const newHeight = projectListRef.current.scrollHeight;
                    projectListRef.current.style.maxHeight = `${newHeight}px`;
                }
            }, 0);
        }
    }, [activeTab]);

    let isMobile: boolean = useMediaQuery( {query: "(max-width: 720px)"})

    // First we render all the possible tabs, making the active one have the 'active-tab-title' class
    // Then, given that information, we render all the projects who have the same tab name
    return (
        <div className='projects-container'>
            
                <div className='project-tabs'>
                {!isMobile ?
                    /* Simple text color nav bar for desktop */
                    // Sort out the tab titles
                    validTabs.map(el => {
                        const activeClass: string = el === activeTab ? 'active-tab-title' : 'inactive-tab-title'
                        return <div className={`project-tab-title ${activeClass}`} onClick={() => setActiveTab(el)}>{'↪ ' + el}</div>
                    })
                :
                    /* Background color changing selections for mobile */
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
                {/* <p className='project-subtext'>Project titles link to active pages (repositories, deployments, downloads).</p> */}
            </div>
        </div>
    )
}

export default Projects;