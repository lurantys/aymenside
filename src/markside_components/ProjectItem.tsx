interface ProjectItemProps {
    title: string
    description: string[]
    subtext: string | undefined
    link: string
}

function ProjectItem(props: ProjectItemProps): JSX.Element {
    const descriptionParts: JSX.Element[] = []

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

// Items ordered most recent first.
export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Experience", [
        <ProjectItem
            title="Data Science Intern"
            description={["Built", "AI models", "for", "accident prevention", "using machine learning and data analysis to improve safety systems"]}
            subtext={undefined}
            link="https://www.hiroden.co.jp/"
        />,
        <ProjectItem
            title="Hack Club Neighborhood"
            description={["Created and showcased", "coding projects", "in a global student community, focusing on", "rapid prototyping, problem-solving,", "and", "peer-to-peer learning"]}
            subtext={undefined}
            link="https://hackclub.com/"
        />
    ]], 
    ["Projects & Achievements", [
        <ProjectItem
            title="StackGPT"
            description={["Never lose a good chat again.", "Save snippets across every AI platform."]}
            subtext="Built to organize your AI conversations."
            link="https://lurantys.github.io/stackgpt/"
        />,
<ProjectItem
            title="Hana"
            description={["Designed, built, and deployed a production-grade full-stack manga reading application serving 20+ active users", "Engineered multi-source content aggregation, unifying MangaDex, Atsu, and MangaKatana into a single searchable interface", "Implemented third-party sync integrations with AniList and MyAnimeList for seamless reading progress and library tracking across platforms", "Shipped a cross-platform desktop client using Tauri, extending the web app to native desktop environments", "Iterated on product features based on direct user feedback, improving usability and reliability post-launch"]}
            subtext={undefined}
            link="https://hanamanga.online"
/>,
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
            title="Eikei University of Hiroshima"
            description={["Exchange", "Program"]}
            subtext={undefined}
            link="https://eikei.ac.jp/english/"
        />,
        <ProjectItem
            title="Al Akhawayn University"
            description={["Bachelor's degree in", "Computer Science"]}
            subtext={undefined}
            link="https://www.aui.ma/"
        />
    ]],
    ["Games", []]
]);
