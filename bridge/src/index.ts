import Facebook from "./plataforms/Facebook";
import IPlataform from "./plataforms/IPlataform";
import Twitch from "./plataforms/Twitch";
import Youtube from "./plataforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(plataform: IPlataform){
    console.log("Aguarde...");
    const live = new Live(plataform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(plataform: IPlataform){
    console.log("Aguarde...");
    const live = new AdvancedLive(plataform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
}

startLive(new Youtube());
startLive(new Twitch());
startLive(new Facebook());

startAdvancedLive(new Youtube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());