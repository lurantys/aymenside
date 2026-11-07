import { useEffect, useState, type CSSProperties } from "react";
import wooper_img from "../img/wooper.png";

// Picks a random Pokémon from Gen 5 (Unova) on every load
const NORMAL_SPRITE_BASE: string = "https://img.pokemondb.net/sprites/black-white/anim/normal";
const SHINY_SPRITE_BASE: string = "https://img.pokemondb.net/sprites/black-white/anim/shiny";
const dexterBase: string = "https://pokemondb.net/pokedex";

const GEN5_START: number = 494;
const GEN5_COUNT: number = 156;

interface DailyDex {
    dexNo: number
    name: string
    spriteUrl: string
    shiny: boolean
    types: string[]
    flavor: string
    versionLabel: string
}

// Standard Pokémon type colors, used for the little dot in each chip
const TYPE_COLORS: Map<string, string> = new Map<string, string>([
    ["normal", "#A8A77A"], ["fire", "#EE8130"], ["water", "#6390F0"],
    ["electric", "#F7D02C"], ["grass", "#7AC74C"], ["ice", "#96D9D6"],
    ["fighting", "#C22E28"], ["poison", "#A33EA1"], ["ground", "#E2BF65"],
    ["flying", "#A98FF3"], ["psychic", "#F95587"], ["bug", "#A6B91A"],
    ["rock", "#B6A136"], ["ghost", "#735797"], ["dragon", "#6F35FC"],
    ["dark", "#705746"], ["steel", "#B7B7CE"], ["fairy", "#D685AD"]
]);

// Picks a random Pokémon on every load (not per day)
function getRandomGen5Id(): number {
    return GEN5_START + Math.floor(Math.random() * GEN5_COUNT);
}

function isWeekend(): boolean {
    const weekday: number = new Date().getUTCDay();
    return weekday === 6 || weekday === 0;
}

async function fetchDailyDex(dexNo: number): Promise<DailyDex> {
    // Flavor text lives on the species endpoint, types on the pokemon endpoint
    const [speciesResp, pokemonResp] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexNo}/`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${dexNo}/`)
    ]);
    if (!speciesResp.ok || !pokemonResp.ok) {
        throw new Error("PokeAPI request failed");
    }

    const species: any = await speciesResp.json();
    const pokemon: any = await pokemonResp.json();

    // Prefer Gen 5 flavor text (Black/White/Black 2/White 2, English)
    const englishGen5 = species.flavor_text_entries.filter((e: any) =>
        e.language.name === "en" && ["black", "white", "black-2", "white-2"].includes(e.version.name)
    );
    const englishAny = species.flavor_text_entries.filter((e: any) => e.language.name === "en");
    const chosen = englishGen5[0] ?? englishAny[0];
    if (chosen === undefined) {
        throw new Error("No flavor text found");
    }

    const shiny: boolean = isWeekend();
    return {
        dexNo: dexNo,
        name: species.name,
        spriteUrl: shiny ? `${SHINY_SPRITE_BASE}/${species.name}.gif` : `${NORMAL_SPRITE_BASE}/${species.name}.gif`,
        shiny: shiny,
        types: pokemon.types.map((t: any) => t.type.name as string),
        // Flavor text is full of \n and \f breaks from the original games
        flavor: chosen.flavor_text.replace(/[\n\f]+/g, " "),
        versionLabel: chosen.version.name
    };
}

// Fallback entry if PokeAPI is unreachable — the site mascot takes over
const WOOPER_FALLBACK: DailyDex = {
    dexNo: 194,
    name: "wooper",
    spriteUrl: wooper_img,
    shiny: false,
    types: ["water", "ground"],
    flavor: "When the Pokédex signal is lost, this Wooper emerges instead. It was last seen schwoping for the site.",
    versionLabel: "offline"
};

function Wooperdex(): JSX.Element {
    const [dex, setDex] = useState<DailyDex | null>(null);
    const [spriteError, setSpriteError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled: boolean = false;
        setSpriteError(null);
        fetchDailyDex(getRandomGen5Id())
            .then((dexData) => { if (!cancelled) setDex(dexData); })
            .catch(() => { if (!cancelled) setDex(WOOPER_FALLBACK); });
        return () => { cancelled = true; };
    }, []);

    // Loading state
    if (dex === null) {
        return (
            <div className='wooperdex-container'>
                <h1 className='blue-league-title'>Taste of Unova</h1>
                <div className='wooperdex-card wooperdex-boot'>
                    <p className='wooperdex-boot-line'>&gt; schwoping through the unova pokédex<span className='wooperdex-cursor'>▌</span></p>
                </div>
            </div>
        );
    }

    const fallbackActive: boolean = dex.name === WOOPER_FALLBACK.name;
    const displaySpriteUrl: string =
        spriteError === "shiny" ? `${NORMAL_SPRITE_BASE}/${dex.name}.gif` :
        spriteError !== null ? wooper_img :
        dex.spriteUrl;

    return (
        <div className='wooperdex-container'>
            <h1 className='blue-league-title'>Taste of Unova</h1>
            <div className='wooperdex-card'>
                <div className='wooperdex-dexnum' aria-hidden='true'>{`#${dex.dexNo}`}</div>

            <div className='wooperdex-entry' aria-live='polite'>
                <div className='wooperdex-frame-col'>
                    <div className='wooperdex-frame'>
                        {fallbackActive ?
                            <img src={displaySpriteUrl} alt={dex.name} className='wooperdex-sprite' /> :
                            <a href={`${dexterBase}/${dex.name}`} target='_blank' rel='noreferrer' title={`View ${dex.name} on PokémonDB`}>
                                <img
                                    src={displaySpriteUrl}
                                    alt={dex.name}
                                    onError={() => setSpriteError(dex.shiny && spriteError === null ? "shiny" : "sprite")}
                                    className='wooperdex-sprite'
                                />
                            </a>
                        }
                    </div>
                    <p className='wooperdex-counter'>No. {String(dex.dexNo).padStart(4, '0')}</p>
                </div>

                <div className='wooperdex-data'>
                    <div className='wooperdex-name-row'>
                        <span className='wooperdex-name'>
                            {fallbackActive ?
                                dex.name.charAt(0).toUpperCase() + dex.name.slice(1) :
                                <a className='wooperdex-name-link' href={`${dexterBase}/${dex.name}`} target='_blank' rel='noreferrer'>{dex.name.charAt(0).toUpperCase() + dex.name.slice(1)}</a>
                            }
                        </span>
                    </div>
                    <div className='wooperdex-types-list'>
                        {dex.types.map((type) => {
                            const chipStyle = { '--type-color': TYPE_COLORS.get(type) ?? '#325199' } as CSSProperties;
                            return <span key={type} className='wooperdex-type' style={chipStyle}>{type}</span>;
                        })}
                    </div>
                    <div className='wooperdex-flavor gray-league-paragraph'>{dex.flavor}</div>
                </div>
            </div>

            <div className='wooperdex-footline'>unova regional dex · entry {String(dex.dexNo - GEN5_START + 1).padStart(3, '0')} of {GEN5_COUNT}</div>
            </div>
        </div>
    );
}

export default Wooperdex;
