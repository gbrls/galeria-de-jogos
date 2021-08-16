
import { NavBar } from "./index";


function Instructions() {
    return (
        <div className="space-y-5 bg-gray-800 min-h-screen">
            <div>
                <NavBar current='Instruções' />
                <div className="container mx-auto my-5 lg:pl-60 lg:pr-60">
                    <div className="rounded-xl  shadow-xl">
                        <div className="p-8 pr-14 pl-14 py-12 mx-2 mx-0 h-full bg-white rounded-lg rounded-l-lg shadow-xl shadow-none">
                            <h3 className="block font-bold text-2xl text-gray-700">
                                Instruções
                            </h3>
                            <p className="text-gray-600 text-justify">
                                As equipes serão de 6 alunos, o código do jogo precisa ser elaborado por todos,
                                a arte não precisa ter sido feita pela equipe, o jogo deverá ser escrito em C usando
                                a biblioteca Raylib.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Instructions;
