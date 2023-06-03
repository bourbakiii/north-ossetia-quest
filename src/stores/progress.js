import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useProgressStore = defineStore('progress', () => {
    const points = ref(0)
    const addPoint = ()=>points.value++;
    function getResults(){
        if(points.value<=3) return {title:'Турист', text:'О Северной Осетии вы знаете не слишком много. Мы рады, что наша игра познакомила вас поближе с этой прекрасной республикой. Осетия знаменита не только удивительно живописными пейзажами и культурными памятниками, но и большим гостеприимством. Обязательно посетите этот уютный уголок России и Включайтесь в Осетию!'}
        if(points.value<=6) return {title:'Почтенный гость осетина', text:'Вы кое-что знаете о Северной Осетии и, скорее всего, бывали там. Уверены, что узнав из нашей игры ещё больше об этой прекрасной республике, вы захотите побывать там снова. Тем более, что Осетия славится не только живописными пейзажами и культурными памятниками, но и большим гостеприимством. Так что не откладывайте поездку и Включайтесь в Осетию!'}
        else return {title:'Истинный горец', text:'Уæлахизимæ дын арфæ кæнæм! Вы прекрасно знаете Северную Осетию и, возможно, даже поняли, что первой фразой мы поздравили вас по-осетински с победой в игре. Вам не понаслышке знакомы живописные пейзажи республики и разновидности начинок осетинских пирогов. Приезжайте почаще в этот уютный и гостеприимный уголок России, берите с собой друзей и все вместе Включайтесь в Осетию!'}
    }
    return {points, addPoint, getResults}
});
