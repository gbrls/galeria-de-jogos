import data from '../public/data.json';
import 'tailwindcss/tailwind.css'
import { useState } from 'react';

//@TODO: Fazer um menu com:
// About
// Instruções
// Jogos passados

function NavCard(props) {
    var style;
    if (props.current == true) {
        style = 'text-gray-300 bg-gray-900 px-3 py-2 rounded-md text-sm font-medium" aria-current="page"';
    } else {
        style = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
    }

    return (
        <a href={props.href} className={style}>{props.name}</a>
    )
}

export function NavBar(props) {
    return (
        <div className="">
            <div className="flex space-x-4">
                {
                    props.cards.map((card, idx) => (
                        <NavCard name={card[0]} href={card[1]} current={card[0] == props.current} />
                    ))
                }
            </div>
        </div>
    )
}

NavBar.defaultProps = {
    cards: [['Jogos', '/'], ['Sobre', '/about'], ['Instruções', '/instructions']],
}

function GameCard(props) {
    var web;
    if ('web' in props.game) {
        web =

                <a href={props.game.web} className="hover:underline text-base text-gray-50 bg-indigo-600 rounded-xl uppercase font-bold">
                    <div className="m-1 text-xs">
                        web
                    </div>
                </a>;
    } 

    var github;

    if ('github' in props.game) {
        github = 
            <div className="hover:animate-spin">
                <a href={props.game.github} className="fill-current text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
    }

    var summary;
    if('text' in props.game) {
        summary = 
        <div>
            <Expand data={props.game.text} /> 
        </div>
    }

    let hasHome = ('home' in props.game);

    return (

        <div className=" rounded-x1 shadow-md max-w-md mx-auto rounded-3xl shadow-md overflow-hidden bg-gray-50 ">
            <div className="p-8">
                <div className="flex space-x-20 items-center justify-start">
                    <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase text-lg">
                        {props.game.class}
                    </div>
                        {github}
                        {web}
                </div>
                <a href={props.game.home} className={`block mt-1 text-xl leading-tight font-semibold text-black ${ hasHome ? "hover:underline" : "" }`}>
                    {props.game.name}
                </a>
                <div className="mt-2  text-gray-500">
                    Autores: {props.game.team}
                </div>
            {summary}
            </div>
        </div>
    )
}

function Footer(props) {
    return (
        <div className="text-gray-500 bg-gray-800 p-2 flex justify-around mt-8">
            <div className="">
                Site criado pela monitoria de IP 
            </div>
            <div className="">
                CIn UFPE 2021
            </div>
        </div>
    )
}

function Expand(props) {
    const [isVisible, setisVisible] = useState(false);
    let children = props.data.substr(0, 5) + "...";
    return (
    <div className=""> 
        <div className="flex hover:animate-bounce">
            <div className={`${ !isVisible ? "" : "hidden" }`}> {children} </div>
            <div className={`${ isVisible ? "" : "" } cursor-pointer hover:underline font-medium italic`} onClick={() => setisVisible(!isVisible)}> {isVisible ? "Ler menos" : "Ler mais"} </div>
        </div>
        <div className={`${ isVisible ? "" : "hidden" }`}> {props.data} </div>
    </div>
    )
}

function Home() {
    return (

        <div className="space-y-5 bg-gray-800 min-h-screen">
            <NavBar current='Jogos' />
            <div>_</div>
            <div className="text-center mt-8 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-yellow-400">Jogos</div>
            {
                data.games.map((game) => (
                    <GameCard game={game} />
                ))
            }
        <Footer/>
        </div >
    )
}

export default Home;
