import { ButtonColor } from 'enums';

const applause = require('sounds/applause.wav');
const aww = require('sounds/aww.wav');
const a_sharp = require('sounds/a_sharp.wav');
const c_sharp = require('sounds/c_sharp.wav');
const f_sharp = require('sounds/f_sharp.wav');
const g_sharp = require('sounds/g_sharp.wav');

function getButtonSound(buttonColor: ButtonColor) {
    switch (buttonColor) {
        case ButtonColor.Red:
            return a_sharp;
        case ButtonColor.Blue:
            return c_sharp;
        case ButtonColor.Yellow:
            return g_sharp;
        case ButtonColor.Green:
            return f_sharp;
        default:
            return f_sharp;
    }
}

function playSound(file: string) {
    const audio = new Audio(file);
    audio.volume = 0.5;
    audio.play();
}

export function playButtonSound(buttonColor: ButtonColor) {
    const sound = getButtonSound(buttonColor);
    playSound(sound);
}

type CrowdSounds = 'applause' | 'aww';
export function playCrowdSound(sound: CrowdSounds) {
    const soundToPlay = sound === 'applause' ? applause : aww;
    playSound(soundToPlay);
}
