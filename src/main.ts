import {GameManager} from "./game-manager";

const gameManagerInst = new GameManager();
module.exports.loop = () => {
    gameManagerInst.loop();
};
