import Speaker from "../factory/Speaker";

export default class TabletSpeaker extends Speaker {
    constructor(minVolume: number, maxVolume: number) {
        super(minVolume, maxVolume)
    }

    check(): void {
        console.log('最小ボリューム: ' + this.minVolume + ', 最大ボリューム: ' + this.maxVolume);
    }
}