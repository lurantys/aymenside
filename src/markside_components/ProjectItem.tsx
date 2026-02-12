interface ProjectItemProps {
    title: string
    description: string[]
    subtext: string | undefined
    link: string
}

function ProjectItem(props: ProjectItemProps): JSX.Element {
    // Defines a project component.
    // Takes in a title and an array for the description.
    // Every other element in the array will be bolded.
    const descriptionParts: JSX.Element[] = []

    // We act on assumption that odd elements are bolded.
    // And for the spaces, that the last element is not bolded.
    props.description.forEach((el, i) => {
        if (i % 2 !== 0) {
            descriptionParts.push(<span key={i} className='league-p-bold'> {el} </span>)
        } else {
            descriptionParts.push(<span key={i}>{el}</span>)
        }
    });

    return (
        <div className='project-section'>
            <div className='project-title'><a className='project-title-link' href={props.link}>{props.title}</a></div>
            <div className='project-desc'>{descriptionParts}</div>
            {props.subtext !== undefined ? <div className='project-subtext'>{props.subtext}</div> : null}
            <hr className='project-divide'></hr>
        </div>
        
    )
}

export default ProjectItem;

// I'm not pulling information from a backend so... it's just all here.
// I do have a backend, so I could toss this all there just as easily, but for now I'll keep the data chilling on the frontend
// since it's all static information anyway.
// Keys are the tab title (Enum type would be useful here) for retrieval in Projects tab.
export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Experience", [
        <ProjectItem
            title="Hack Club Neighborhood"
            description={["Created and showcased", "coding projects", "in a global student community, focusing on", "rapid prototyping, problem-solving,", "and", "peer-to-peer learning"]}
            subtext="Hack Club · Internship | May 2025 – Aug 2025 | San Francisco Bay Area · Hybrid"
            link="https://hackclub.com/"
        />,
        <ProjectItem
            title="Data Science Intern"
            description={["Built", "AI models", "for", "accident prevention", "using machine learning and data analysis to improve safety systems"]}
            subtext="Hiroshima Electric Railway · Internship"
            link="https://www.hiroden.co.jp/"
        />
    ]], 
    ["Projects & Achievements",[
        <ProjectItem
            title="PokeDoro"
            description={["A", "Pokémon-inspired Pomodoro web app", "that gamifies focus and productivity, pairing", "timed work sessions", "with tasks, streaks, and", "progression mechanics"]}
            subtext="The core timer and task system are live, with badges, Pokédex progression, and additional gamified features in development."
            link="https://pokedorosf.vercel.app/"
        />,
        <ProjectItem
            title="Yoshi"
            description={["A", "mood-driven web app", "that generates", "personalized Spotify playlists", "based on how you're feeling, what you're doing, or the vibe you want"]}
            subtext="Users can describe their mood in natural language or choose quick presets, with the app handling playlist creation through Spotify integration."
            link="https://yoshi-red.vercel.app/"
        />,
        <ProjectItem
            title="QuoteThat"
            description={["A", "Python-based Discord bot", "that generates", "styled quote images", "using Discord.py and Pillow, allowing users to create and share inspirational quote graphics directly within their server"]}
            subtext="The core quote image generation and Discord integration are implemented, with plans to expand customization options and quote sources."
            link="https://github.com/lurantys/quotethat"
        />
    ]], 
    ["Education", [
        <ProjectItem
            title="Al Akhawayn University"
            description={["Bachelor's degree in", "Computer Science"]}
            subtext="Aug 2024 – Aug 2028"
            link="https://www.aui.ma/"
        />,
        <ProjectItem
            title="Eikei University of Hiroshima"
            description={["Exchange", "Program"]}
            subtext="January 2026 – June 2026"
            link="https://eikei.ac.jp/english/"
        />
    ]],
    ["Games", []]
]);

