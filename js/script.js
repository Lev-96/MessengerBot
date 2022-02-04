function setMsg(input){
    let content = document.getElementById('content')
    let song = document.getElementById('song')

    content.innerHTML += `
        <div class="from">${input.value}</div>
    `

    setTimeout(() =>{
        fetch('bot.json')
        .then(bots => bots.json())
        .then(bots =>{
            let botsKeys = Object.keys(bots[0])

            for(let i = 0; i < botsKeys.length;i++){

                if(botsKeys[i] == input.value.toLowerCase()){

                content.innerHTML +=`
                
                    <div class="to">${JSON.stringify(Object.values(bots[0][botsKeys[i]]))}</div>
                `
                song.play()
                }
            }  
            input.value = ''
        })
      
    },3000)
}