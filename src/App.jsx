import { useState } from 'react'
import './styles/App.css'
import Slaider from './components/Slaider'

function App() {
  const [image, setImage] = useState([
    'https://images.wallpaperscraft.ru/image/single/rozy_kustarnik_nebo_52724_3840x2160.jpg',
    'https://img5.goodfon.ru/wallpaper/nbig/1/cf/pole-leto-kosmos-tsvety-fon-poliana-mnogo-boke-kosmeia-kos-2.jpg',
    'https://wallpapershome.com/images/wallpapers/pink-1920x1080-4k-hd-wallpaper-flower-summer-12002.jpg',
    'https://img2.akspic.ru/attachments/crops/4/1/6/7/4/147614/147614-rozovyj-rozovye_cvety-tsvetok-vaza-srezannye_cvety-2560x1440.jpg',
    'https://images.wallpaperscraft.ru/image/single/tiulpany_tsvety_rozovyj_113710_3840x2160.jpg',
    'https://img5.badfon.ru/original/3000x2000/4/af/rozovyy-vishnya-sakura-makro.jpg',
    'https://img3.akspic.ru/attachments/crops/2/7/9/9/3/139972/139972-rastenie-chereshnya-vetv-rastsvet-siren-1920x1080.jpg',
    'https://catherineasquithgallery.com/uploads/posts/2021-12/1639706236_191-catherineasquithgallery-com-p-fon-tsveti-rozovie-499.jpg',
    'https://w-dog.ru/wallpapers/0/7/347696827934399/krupnaya-vetka-belyx-cvetov.jpg',
    'https://img.youtube.com/vi/8kQ3GNaf7IA/maxresdefault.jpg'
  ])

  return (
    <>
    <Slaider image={image}/>
    </>
  )
}

export default App