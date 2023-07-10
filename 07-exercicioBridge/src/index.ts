import IConsole from "./console/IConsole";
import PlayStation from "./console/PlayStation";
import XBox from "./console/XBox";
import AdvancedPlay from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";

function startPlay(consol: IConsole){
    const play = new Play(consol);
    play.playing();
    play.result();
    console.log("");
}

function startAdvancedPlay(consol: IConsole){
    const advancedPlay = new AdvancedPlay(consol);
    advancedPlay.playing();
    advancedPlay.challenge();
    advancedPlay.result();
    console.log("");
}

startPlay(new PlayStation());
startPlay(new XBox());

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new XBox());