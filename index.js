const dbd = require("dbd.js")

const bot = new dbd.Bot({
sharding: true,
shardAmount: 2,
token: process.env.TOKEN, 
prefix: "$getServerVar[prefix]" 
})

bot.onMessage()

bot.variables({
  prefix: "s*",
  bl: "false"
})

bot.status({
  text: "Me mencione para ver meu prefixo!",
  type: "PLAYING",
  time: 12
})

bot.command({
name: "<@823723350534389761>",
aliases: ["<@!823723350534389761>"],
nonPrefixed: true,
code: `
$title[]
$description[**Meu prefixo nesse servidor é \`$getServerVar[prefix]\` digite \`$getServerVar[prefix]help\` para ver minha lista de comandos!!

Caso precise de ajuda entre no meu servidor de [\suporte\\](https://discord.gg/euw3vdCkYx)**]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "ping", 
code: `
$title[Meu ping está:]
$description[
**<a:Ping:829036828651683900> Delay Ping:** \`$pingms\`
**<:Cronometro:831246364221767730> Última atualização hà:** \`$uptime\`
**📡 Guild shard:** \`$shardID/2\`]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
` 
})

bot.command({
name: "help",
aliases: ["ajuda"],
code: `
$title[****Shinobu help****]
$description[
<:Staff:829036903860535378> **Moderação:**
\`clear, setprefix\`

<a:Musica:829038632722628638> **Música:**
\`play/p, skip/s, queue/q, loopqueue, volume, stop, resume/r, leave\`

<a:Lupa:831531677405806622> **Utilidades:**
\`botinfo/bi, ping, invite, avatar/av\`]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "botinfo",
aliases: ["bi"],
code: `
$title[****Shinobu info****]
$description[<a:Bot:831243406872412160> ****Bot info:
<:Indentidade:829034266012418048> Tag: \`Seu bot\`
<:Formulario:829038594811363399> ID: \`Id do bot\`
<:Calendario:831853638400999425> Fui criada em: \`23/03/2021 às 22:02\`

<:Staff:829036903860535378> Dev info:
<:Indentidade:829034266012418048>  Tag: \`ydroxz.π#4547\`
<:Formulario:829038594811363399> ID: \`817160910871330836\`

<a:Carregando:831246443116363777> Status e informações:
Servidores: \`$serverCount\`
Usuários: \`$allMembersCount\`
<a:Ping:829036828651683900> Ping: \`$pingms\`
<:Cronometro:831246364221767730> Uptime: \`$uptime\`
<:Ram:829034327094329410> Ram: \`$ram\`
<:Cpu:829038737555062834> Cpu: \`$cpu\`
<:DBDjs:829034372148494448> Linguagem: \`DBD.js\`
<:ReplIt:829038857831841812> Hospedagem: \`Repl.it\`****]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "setprefix",
code: `
$title[]
$description[
Prefixo alterado para: \`$message[1]\`]
$footer[]
$color[8282FF]
$setServerVar[prefix;$message[1]]
$onlyPerms[manageserver;❌ **Você não tem permissão de \`gerenciar servidor\` para executar esse comando!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "play",
aliases: ["p"],
code: `
$title[]
$description[****Adicionado a fila:**** $playSong[$message;1m;yes;yes;Houve um erro ao tentar reproduzir a musica, tente novamente!]]
$footer[]
$color[8282FF]
$onlyIf[$voiceID!=;❌ **Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "leave",
code: `
$stopSong
$title[]
$description[Estou me retirando do canal de voz...]
$footer[]
$color[8382FF]
$onlyIf[$voiceID!=;❌ **Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "skip",
aliases: ["s"],
code: `
$skipSong
$title[]
$description[<:Skip:831253127436435496> <@$authorID> pulou uma música.]
$footer[]
$color[8282FF]
$onlyIf[queueLenght!=0;❌ **Você não tem músicas na fila!!**]
$onlyIf[$voiceID!=;❌ **Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "volume", 
code: `
$volume[$message[1]]
$title[]
$description[
<:Volume:831253053474734101> Volume setado para **$message[1]%**
**Autor: \`$username\`**]
$color[8282FF]
$onlyIf[$message<=100;**O volume maximo é \`100%\`**!!]
$onlyIf[$message=>4;**O volume mínimo é \`4%\`**!!]
$onlyIf[$message!=;**Você precisa dizer algum volume!!**]
$onlyIf[$queueLength!=0;❌ **Você não tem músicas na fila!!**]
$onlyIf[$voiceID!=;❌ **Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "invite",
code: `
$title[]
$description[
**Gostou de mim? Caso queira me ajudar me adicione em seu servidor clicando [\aqui\\](https://discord.com/api/oauth2/authorize?client_id=823723350534389761&permissions=8&scope=bot%20applications.commands)**]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "clear",
code: `
$deleteIn[5s]
$deletecommand
$title[]
$description[
**O chat teve \`$message[1]\` mensagens apagadas por <@$authorID>**]
$footer[]
$color[8282FF]
$clear[$message[1]]
$onlyPerms[managemessages;❌ **Você não tem permissão de \`gerenciar mensagens\` para executar esse comando!!**]
$onlyIf[$isNumber[$message[1]]==true;❌ **Utilize somente números!!**]
$onlyIf[$checkContains[$message[1];-]==false;❌ **Use somente números válidos!!**]
$onlyIf[$message[1]<=500;❌ **Digite um número de \`2\` a \`500\`!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "queue",
aliases: ["q"],
code: `
$title[]
$description[$queue]
$footer[]
$color[8282FF]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "resume",
aliases: ["r"],
code: `
$resumeSong
$title[]
$description[<@$authorID> deu play na música novamente!!]
$footer[]
$color[8282FF]
$onlyIf[$queueLength!=0;❌ **Você não tem músicas nq fila!!**]
$onlyIf[$voiceID!=;❌ **Você não está conectado a um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "stop",
code: `
$pauseSong
$title[]
$description[**Música pausada por \`$username\`**]
$footer[]
$color[8282FF]
$onlyIf[$queueLenght!=0;❌ **Você não tem músicas na fila!!**]
$onlyIf[$voiceID!=;❌ **Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "loopqueue",
code: `
$title[]
$description[**Loop da \`Queue\` $replaceText[$replaceText[$loopQueue;true;ativado];false;desativado]**]
$footer[]
$color[8282FF]
$onlyIf[$queueLenght!=0;❌ **Você não tem músicas na fila!!**]
$onlyIf[$voiceID!=;❌ ** Você não está conectado à um canal de voz!!**]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "avatar",
aliases: ["av"],
code: `
$title[**Avatar de $username**]
$description[]
$footer[]
$color[8282FF]
$image[$userAvatar[$authorID]]
$argsCheck[0;]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "avatar",
aliases: ["av"],
code: `
$title[Avatar de $username[$mentioned[1]]]
$description[]
$footer[]
$color[8282FF]
$image[$userAvatar[$mentioned[1]]]
$argsCheck[>1;]
$onlyIf[$checkContains[$message[1];@]==true;]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.command({
name: "avatar",
aliases: ["av"],
code: `
$title[Avatar de $username[$message[1]]]
$description[]
$footer[]
$color[8282FF]
$image[$userAvatar[$message[1]]]
$argsCheck[>1;]
$onlyIf[$checkContains[$message[1];@]==false;]
$onlyIf[$getGlobalUserVar[bl]!=true;❌ **Você está na blacklist!!**]
`
})

bot.musicStartCommand({
channel: "$channelID", 
code: `
$thumbnail[$songInfo[thumbnail]]
$title[]
$description[<a:Musica:829038632722628638> **Tocando agora:** $songInfo[title]
Duração: \`$songInfo[duration]\`
Pedido por: <@$songInfo[userID]>
]
$footer[]
$color[8282FF]
`
})

bot.musicEndCommand({
channel: "$channelID",
code: `
$title[]
$description[**Não tem mais nenhuma música tocando, irei me retirar.**]
$footer[]
$color[8282FF]
`
}) 

bot.command({
  name: "blacklist",
  aliases: ["bl"],
  code: `$description[O usuário \`$username[$message[1]]\` entrou para a blacklist.]
  $setGlobalUserVar[bl;true;$message[1]] 
$color[8282FF]
$onlyForIDs[817160910871330836;❌ **Somente meu desenvolver pode executar esse comando!!**]
  `
})

bot.command({
  name: "whitelist",
  aliases: ["wl"],
  code: `$description[O usuário \`$username[$message[1]]\` saiu da blacklist.]
  $setGlobalUserVar[bl;false;$message[1]]
$color[8282FF]
$onlyForIDs[817160910871330836;❌ **Somente meu desenvolvedor pode executar esse comando!!**]
`
})

bot.command({
name: "eval",
aliases: ["e"],
code: `
$eval[$message]
$onlyForIDs[817160910871330836;]
$onlyIf[$authorID==817160910871330836;]
`
})
