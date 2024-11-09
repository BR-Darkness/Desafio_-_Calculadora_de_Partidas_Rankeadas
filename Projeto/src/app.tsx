import { ChangeEvent, useEffect, useState } from "react";
import { AboutSection } from "./components/about";
import { CalculatorIcon } from "lucide-react";

export function App() {

    const [playerVictories, setPlayerVictories] = useState(0);
    const [playerDefeats, setPlayerDefeats] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerRank, setPlayerRank] = useState('Ferro');

    function handlePlayerVictoriesChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.valueAsNumber;
        setPlayerVictories(value);
    }

    function handlePlayerDefeatsChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.valueAsNumber;
        setPlayerDefeats(value)
    }

    function handlePlayerRank(Score: number) {
        const root = document.querySelector(':root') as HTMLElement;

        if(Score <= 10 || isNaN(Score)) { 
            setPlayerRank('Ferro'); 
            root.style.setProperty('--rankColor', '#545554');
        } 
        else if(Score >= 11 && Score <= 20) { 
            setPlayerRank('Bronze'); 
            root.style.setProperty('--rankColor', '#966b18');
        } 
        else if(Score >= 21 && Score <= 50) { 
            setPlayerRank('Prata'); 
            root.style.setProperty('--rankColor', '#8c9291');
        } 
        else if(Score >= 51 && Score <= 80) { 
            setPlayerRank('Ouro'); 
            root.style.setProperty('--rankColor', '#FFB904');
        } 
        else if(Score >= 81 && Score <= 90) { 
            setPlayerRank('Diamante');
            root.style.setProperty('--rankColor', '#297184');
        } 
        else if(Score >= 91 && Score <= 100) { 
            setPlayerRank('Lendário');
            root.style.setProperty('--rankColor', '#6bce9a');
        } 
        else { 
            setPlayerRank('Imortal');
            root.style.setProperty('--rankColor', '#b02639');
        }
    }

    useEffect(() => {
        setPlayerScore(playerVictories - playerDefeats);
        handlePlayerRank(playerVictories - playerDefeats);
    }, [playerDefeats, playerVictories])

    return (
    <div className="flex justify-center mx-4 max-w-full">
    <main className="max-w-[1376px] w-full mx-4 my-12 ">
        <div className="flex-1 flex flex-wrap justify-between gap-12">
            <div className="flex flex-wrap flex-1 gap-16 md:gap-32">
                <h1 className="font-[450] text-white text-5xl xl:text-6xl leading-[85px] max-w-96 xl:max-w-xl">Calculadora de partidas <span className="text-[var(--rankColor)]">Rankeadas</span></h1>
                <form action="" className="flex flex-wrap gap-6 ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="playerVictories">Quantidade de <span className="text-legendary">Vitórias</span> :</label>
                        <input className="select-none w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4 placeholder:text-borderColor" 
                            name="playerVictories" id="playerVictories" 
                            type="number"
                            min={0}
                            max={250}
                            title="Quantidade de Vitórias"
                            value={playerVictories}
                            onChange={handlePlayerVictoriesChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="playerDefeats">Quantidade de <span className="text-immortal">Derrotas</span> :</label>
                        <input className="select-none w-fit rounded-[8px] bg-inputColor border-2 border-borderColor h-12 px-4 placeholder:text-borderColor" 
                            name="playerDefeats" id="playerDefeats" 
                            type="number"
                            min={0}
                            max={250}
                            title="Quantidade de Derrotas"
                            value={playerDefeats}
                            onChange={handlePlayerDefeatsChange}
                        />
                    </div>
                </form>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-12 my-6 md:min-w-72">
                <div className="size-36 md:size-48 border-4 border-borderColor bg-[var(--rankColor)] rounded-full flex justify-center items-center"> 
                    <CalculatorIcon color="#0c0c0c" size={64} strokeWidth={1.5}/>
                </div>
                
                <p className="text-xl text-balance text-center max-w-96">O Herói tem saldo de 
                    <span id="playerScore" className="text-[var(--rankColor)]"> {playerScore || 'indefinido'}</span> vitória(s) e está no nível  
                    <span id="playerRank" className="text-[var(--rankColor)]"> {playerRank || 'indefinido'}</span>
                </p>
            </div>
        </div>

        <div className="border-2 border-borderColor rounded-md mt-16 mb-12" />

        <AboutSection />
    </main>
    </div>
    )
}