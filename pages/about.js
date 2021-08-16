import { NavBar } from "./index";


function About() {
    return (
        <div className="space-y-5 bg-gray-800 min-h-screen">
            <div>
                <NavBar current='Sobre' />
                <div className="container mx-auto my-5 lg:pl-60 lg:pr-60">
                    <div className="rounded-xl  shadow-xl">
                        <div className="p-8 pr-14 pl-14 py-12 mx-2 mx-0 h-full bg-white rounded-lg rounded-l-lg shadow-xl shadow-none">
                            <h3 className="block font-bold text-2xl text-gray-700">
                                O que é este site?
                            </h3>
                            <p className="text-gray-600 text-justify">
                                Este site é um repositório dos jogos da cadeira de Intrução à Programação
                                para Engenharia da Computação no CIn, Ministrada pelo professor
                                Alexandre Cabral. O projeto final da cadeira é elaborar em equipes um jogo em C,
                                durate muitos anos dezenas de jogos foram elaborados, este site foi feito para abrigar 
                                todos esses jogos.
                            </p>

                            <h3 className="block font-bold text-2xl text-gray-700 mt-5">
                                Contribuindo
                            </h3>
                            <p className="text-gray-600 text-justify">
                            <a href="https://forms.gle/neNHZESL6ZVCXALD7" className="hover:underline">Furmulário para colocar o jogo no site</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default About;
