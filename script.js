const sounds = ["run-vine-sound-effect", "meme-de-creditos-finales", "crazy-realistic-knocking-sound-troll-twitch-streamers_small", "roblox-death-sound_1", "ladies-and-gentlemen-we-got-him-song", "tf_nemesis", "oh-no-no-no-no-laugh", "nani-meme-sound-effect"];

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSound(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}