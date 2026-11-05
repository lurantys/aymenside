import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ALL_PROJECT_ITEMS, FEATURED_PROJECTS } from './ProjectItem';

const tabs = ['Projects', 'Experience', 'Education'];

function Projects() {
    const [activeTab, setActiveTab] = useState('Projects');
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activateProjects = () => {
            setActiveTab('Projects');
            requestAnimationFrame(() => {
                document.getElementById('Projects')?.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start',
                });
            });
        };
        const handleHash = () => {
            if (window.location.hash === '#Projects') activateProjects();
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        window.addEventListener('openProjects', activateProjects);
        return () => {
            window.removeEventListener('hashchange', handleHash);
            window.removeEventListener('openProjects', activateProjects);
        };
    }, []);

    const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        setActiveTab(tabs[next]);
        tabRefs.current[next]?.focus();
    };

    return (
        <section id="Projects" className="projects-section" aria-labelledby="work-title">
            <div className="section-heading">
                <h2 id="work-title">Things I've been building</h2>
                <p>Useful tools, side projects, and a few things made for fun.</p>
            </div>
            <div className="project-tabs" role="tablist" aria-label="Projects and background">
                {tabs.map((tab, index) => (
                    <button key={tab} type="button" role="tab" id={`tab-${tab}`} aria-selected={activeTab === tab}
                        aria-controls={`panel-${tab}`} tabIndex={activeTab === tab ? 0 : -1}
                        ref={element => { tabRefs.current[index] = element; }}
                        onKeyDown={event => handleTabKey(event, index)} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            {tabs.map(tab => (
                <div key={tab} role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}
                    hidden={activeTab !== tab} tabIndex={0}>
                    {tab === 'Projects' && <div className="featured-projects">{FEATURED_PROJECTS}</div>}
                    {tab === 'Projects' && <h3 className="more-projects-title">More projects</h3>}
                    <div className={`project-list ${tab === 'Projects' ? 'more-projects' : 'background-list'}`}>
                        {ALL_PROJECT_ITEMS.get(tab)}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects;
