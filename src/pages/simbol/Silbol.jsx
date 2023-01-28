import React, { useContext, useState} from "react";
import Gerb from '../../assets/gerb.png'
import madhiya from '../../assets/madhiya.png'
import bayroq from '../../assets/bayroq.jpg'
import { Context } from "../../context";
import "./symbols.css";
const Silbol = () => {
    const {lang} = useContext(Context);
    const [hero] = useState({
        uz: {
            gerb:{
            first: "O'ZBEKISTON RESPUBLIKASI DAVLAT GERBI",
            second:
              "Davlat gerbi O`zbekiston Respublikasining 1992-yil 2-iyuldagi 616-XII-sonli «O`zbekiston Respublikasi Davlat gerbi to`g`risida»gi Qonuni bilan tasdiqlangan.",
            third:
              "O`zbekiston Respublikаsi Dаvlаt gerbi quyidаgi ko`rinishgа egа: tog`lаr, dаryolаr vа so`l tomoni bug`doy boshoqlаridаn, o`ng tomoni esа chаnoqlаri ochilgаn g`o`zа shoxlаridаn iborаt chаmbаrgа o`rаlgаn gullаgаn vodiy uzrа quyosh zаrrin nurlаrini sochib turаdi. Gerbning yuqori qismidа Respublikа hurligining rаmzi sifаtidа sаkkizburchаk tаsvirlаngаn bo`lib, uning ichki qismidа yarim oy vа yulduz tаsvirlаngаn. Gerbning mаrkаzidа bаxt vа erksevаrlik rаmzi — qаnotlаrini yozgаn Humo qushi tаsvirlаngаn. Gerbning pаstki qismidа O`zbekiston Respublikаsi Dаvlаt bаyrog`ini ifodа etuvchi chаmbаr lentаsining bаntidа «O'zbekiston» deb yozib qo`yilgаn.",
            fourth:
              "O`zbekiston Respublikаsi Dаvlаt gerbining rаngli ko`rinishidа: Humo qushi vа dаryolаr — kumush rаngidа; quyosh, boshoqlаr, pаxtа chаnoqlаri vа «O'zbekiston» yozuvi — oltin rаngidа; g`o`zа shoxlаri vа bаrglаri, tog`lаr vа vodiy — yashil rаngdа; chаnoqlаrdаgi pаxtа — oq rаngdа; lentа — O`zbekiston Respublikаsi Dаvlаt bаyrog`ining rаnglаrini аks ettiruvchi uch xil rаngdа; sаkkizburchаk — oltin zаrhаl bilаn hoshiyalаngаn holdа hаvo rаngdа; yarim oy vа yulduzlаr — oq rаngidа tаsvirlаngаn.",
        },  bayroq: {
            first: "O'ZBEKISTON RESPUBLIKАSINING DАVLАT BАYROG'I ",
            second:
              "Davlat bayrog`i O`zbekiston Respublikasining 1991-yil 18-noyabrdagi 407-XII-sonli «O`zbekiston Respublikasining Davlat bayrog`i to`g`risida»gi Qonuni bilan tasdiqlangan.",
            third:
              "O`zbekiston Respublikаsining Dаvlаt bаyrog`i O`zbekiston Respublikаsi dаvlаt suverenitetining rаmzidir.",
            fourth:
              "O`zbekiston Respublikаsining Dаvlаt bаyrog`i xаlqаro munosаbаtlаrdа O`zbekiston Respublikаsining timsoli bo`lаdi. ",
            fivth:
              "O`zbekiston Respublikаsining Dаvlаt bаyrog`i — bаyroqning butun uzunligi bo`ylаb o`tgаn to`q moviy rаng, oq rаng vа to`q yashil rаngli uchtа endаn tаrkib topgаn to`g`ri to`rtburchаk shаklidаgi mаtodir.",
          },
          madhiya: {
            first:
              "O`zbekiston Respublikasi Davlat madhiyasining matni va musiqasi O`zbekiston Respublikasining 1992-yil 10-dekabrdagi 768-XII-sonli «O`zbekiston Respublikasining Davlat madhiyasi to`g`risida»gi Qonuni bilan tasdiqlangan.",
            second:
              "O`zbekiston Respublikаsining Dаvlаt mаdhiyasi O`zbekiston Respublikаsi Dаvlаt suverenitetining rаmzidir.",
            third:
              "O`zbekiston Respublikаsining Dаvlаt mаdhiyasigа zo`r ehtirom bilаn qаrаsh O`zbekiston Respublikаsi hаr bir fuqаrosining vаtаnpаrvаrlik burchidir.",
            fourth: "Mutal Burhonov musiqasi ",
            fivth: "Abdulla Oripov so'zi",
            sixth: "Serquyosh hur o'lkam, elga baxt, najot,",
            seven: "Sen o'zing do'stlarga yo'ldosh, mehribon!",
            eight: "Yashnagay to abad ilmu fan, ijod,",
            nine: "Shuhrating porlasin toki bor jahon!",
            ten: "Naqarot:",
            eleven: "Oltin bu vodiylar - jon O'zbekiston,",
            twelve: "Ajdodlar mardona ruhi senga yor!",
            thirteen: "Ulug' xalq qudrati jo'sh urgan zamon,",
            fourteen: "Olamni mahliyo aylagan diyor!",
            fifteen: "Bag'ri keng o'zbekning o'chmas iymoni,",
            sixteen: "Erkin, yosh avlodlar senga zo'r qanot!",
            seventeen: "Istiqlol mash'ali tinchlik posboni,",
            eighteen: "Xaqsevar, ona yurt, mangu bo'l obod!",
          },
    },
        ru: {
            gerb: {
                first: "ГОСУДАРСТВЕННЫЙ ГЕРБ РЕСПУБЛИКИ УЗБЕКИСТАН",
                second:
                  "Государственный герб утвержден законом Республики Узбекистан «О Государственном гербе Республики Узбекистан» от 2 июля 1992 г. № 616-XII.",
                third:
                  "Государственный герб Республики Узбекистан представляет собой изображение восходящего солнца над горами, реками и цветущей долиной, окруженными венком, состоящим справа из колосьев пшеницы и слева — из веток хлопчатника с раскрытыми коробочками хлопка. В верхней части герба находится восьмигранник, символизирующий знак утверждения республики, внутри которого полумесяц со звездой. В центре герба изображена птица Хумо с раскрытыми крыльями — символ счастья и свободолюбия. Внизу на банте ленты венка, символизирующей Государственный флаг Республики Узбекистан, надпись «O'zbekiston».",
                fourth:
                  "В цветном изображении Государственного герба Республики Узбекистан птица Хумо и реки — серебристые; солнце, колосья, раскрытые коробочки хлопка и надпись «O'zbekiston» — золотистые; ветки, листья хлопчатника, горы и долины — зеленые, хлопок в раскрытых коробочках — белый; лента трехцветная, воспроизводящая цвета Государственного флага Республики Узбекистан; восьмигранник голубой, обрамленный золотистой каймой; полумесяц и звезда — белые.",
              },
              bayroq: {
                first: "ГОСУДАРСТВЕННЫЙ ФЛАГ РЕСПУБЛИКИ УЗБЕКИСТАН ",
                second:
                  "Государственный флаг Республики Узбекистан утвержден законом Республики Узбекистан «О государственном флаге Республики Узбекистан» от 18 ноября 1991 г. № 407-XII.",
                third:
                  "Государственный флаг Республики Узбекистан является символом государственного суверенитета Республики Узбекистан.",
                fourth:
                  "Государственный флаг Республики Узбекистан представляет Республику Узбекистан в международных отношениях.",
                fivth:
                  "Государственный флаг Республики Узбекистан представляет собой прямоугольное полотнище из трех горизонтальных полос насыщенного голубого, белого и насыщенного зеленого цветов во всю длину флага.",
              },
              bayroq: {
                first: "ГОСУДАРСТВЕННЫЙ ФЛАГ РЕСПУБЛИКИ УЗБЕКИСТАН ",
                second:
                  "Государственный флаг Республики Узбекистан утвержден законом Республики Узбекистан «О государственном флаге Республики Узбекистан» от 18 ноября 1991 г. № 407-XII.",
                third:
                  "Государственный флаг Республики Узбекистан является символом государственного суверенитета Республики Узбекистан.",
                fourth:
                  "Государственный флаг Республики Узбекистан представляет Республику Узбекистан в международных отношениях.",
                fivth:
                  "Государственный флаг Республики Узбекистан представляет собой прямоугольное полотнище из трех горизонтальных полос насыщенного голубого, белого и насыщенного зеленого цветов во всю длину флага.",
              },
        },
        en: {
            gerb: {
                first: "THE STATE EMBLEM",
                second:
                  'The law about "The State Emblem" was approved by the 10-th session of the Supreme Council of the Republic of Uzbekistan on July 2, 1992.',
                third:
                  "The new state emblem of the Republic of Uzbekistan was created to reflect the many centuries of experience of the Uzbek people, The state emblem of the Republic presents the image of the rising sun over a flourishing valley. Two rivers run through the valley, representing the Syrdarya and Amudarya. The emblem is bordered by wheat on the right side and branches of cotton with opened cotton bolls on the left side.",
                fourth:
                  'The eight-angle star is at the top of the emblem, symbolizing the unity and confirmation of the republic. The crescent and star inside the eight-pointed star are the sacred symbols of Islam. The mythical bird Semurg with outstretched wings is placed in the center of the emblem as the symbol of the national Renaissance. The entire composition aims to express to desire of the Uzbek people for peace, happiness and prosperity. At the bottom of the emblem inscribed the word "Uzbekistan" written in Uzbek on a ribbon in the national colors of the flag.',
              },
              bayroq: {
                first: "THE STATE FLAG OF THE REPUBLIC OF UZBEKISTAN",
                second:
                  'The law about "The State Flag of the Republic of Uzbekistan" was adopted on November 18 in 1991 in the 8th session of the Supreme Council of Uzbekistan. The flag of our country is a symbol of the sovereignty of the Republic. The national flag of the Republic represents the country internationally when official delegations from Uzbekistan visit foreign countries, as well as at conferences, world exhibition, and sports competitions.',
                third:
                  "The flag of our country is a symbol of the sovereignty of the Republic. The national flag of the Republic represents the country internationally when official delegations from Uzbekistan visit foreign countries, as well as at conferences, world exhibition, and sports competitions.",
                fourth:
                  'White is the traditional symbol of peace and good luck, as Uzbek people say "Ok yul". Green is the color of nature and new life and good harvest.      Two thin red stripes symbolize the power of life. There is a new moon, which symbolizes the newly independent Republic.',
                fivth:
                  'There are twelve stars, which stand for spiritual sign. The stars also signify the historical traditions of the Uzbek people, as well as ancient solar calendar. A particular attention to twelve stars in the flag is explained yet by another suggestion, that in the states previously existed in the territory of modern Uzbekistan the scientific thought as "Astrology" had seen its rise. The stars in the Uzbek flag also point to the ancient roots of local culture, the aspirations of Uzbek people towards perfection and loyalty',
              },
              bayroq: {
                first: "THE STATE FLAG OF THE REPUBLIC OF UZBEKISTAN",
                second:
                  'The law about "The State Flag of the Republic of Uzbekistan" was adopted on November 18 in 1991 in the 8th session of the Supreme Council of Uzbekistan. The flag of our country is a symbol of the sovereignty of the Republic. The national flag of the Republic represents the country internationally when official delegations from Uzbekistan visit foreign countries, as well as at conferences, world exhibition, and sports competitions.',
                third:
                  "The flag of our country is a symbol of the sovereignty of the Republic. The national flag of the Republic represents the country internationally when official delegations from Uzbekistan visit foreign countries, as well as at conferences, world exhibition, and sports competitions.",
                fourth:
                  'White is the traditional symbol of peace and good luck, as Uzbek people say "Ok yul". Green is the color of nature and new life and good harvest.      Two thin red stripes symbolize the power of life. There is a new moon, which symbolizes the newly independent Republic.',
                fivth:
                  'There are twelve stars, which stand for spiritual sign. The stars also signify the historical traditions of the Uzbek people, as well as ancient solar calendar. A particular attention to twelve stars in the flag is explained yet by another suggestion, that in the states previously existed in the territory of modern Uzbekistan the scientific thought as "Astrology" had seen its rise. The stars in the Uzbek flag also point to the ancient roots of local culture, the aspirations of Uzbek people towards perfection and loyalty',
              },
        },
      });
  return (
    <div className="wrapped mb-5">
      <div className="symbols">
              <div>
                <img className="symbol" alt="gerb" src={Gerb} />
                <br />
                <h4 className="symbol">{hero[lang].title}</h4>
              </div>
              <div className="ramz-title">
                <p>{hero[lang].gerb.second}</p>

                <p>{hero[lang].gerb.third}</p>
                <p>{hero[lang].gerb.fourth}</p>
              </div>

              <div>
              <img className="symbol  symbolImg" alt="gerb" src={bayroq} />
                <br />
                <h4 className="symbol">
                  <p>{hero[lang].bayroq.first}</p>
                </h4>
              </div>
              <br />
              <div className="ramz-title">
                <p>{hero[lang].bayroq.second}</p>

                <p>{hero[lang].bayroq.third}</p>
                <p>{hero[lang].bayroq.fourth}</p>

                <p>{hero[lang].bayroq.fivth}</p>
              </div>

              <div className="ramz-title">
                <h4>
                  <p className="symbol">{hero[lang].madhiya.first}</p>
                </h4>
                <p>{hero[lang].madhiya.second}</p>
                <p>{hero[lang].madhiya.third}</p>
              </div>
              <br />
              <div className="row ramz-title">
                <div className="col-lg-6 col-md-6">
                  <h5>{hero[lang].madhiya.fourth}</h5>
                  <h5>{hero[lang].madhiya.fivth}</h5>
                  <p>{hero[lang].madhiya.sixth}</p>
                  <p>{hero[lang].madhiya.seven}</p>
                  <p>{hero[lang].madhiya.eight}</p>
                  <p>{hero[lang].madhiya.nine}</p>
                  <p>{hero[lang].madhiya.ten}</p>
                  <p>{hero[lang].madhiya.eleven}</p>
                  <p>{hero[lang].madhiya.twelve}</p>
                  <p>{hero[lang].madhiya.thirteen}</p>
                  <p>{hero[lang].madhiya.fourteen}</p>
                  <p>{hero[lang].madhiya.fifteen}</p>
                  <p>{hero[lang].madhiya.sixteen}</p>
                  <p>{hero[lang].madhiya.seventeen}</p>
                  <p>{hero[lang].madhiya.eighteen}</p>
                  {/* naqorat */}
                  <p>{hero[lang].madhiya.ten}</p>
                  <p>{hero[lang].madhiya.eleven}</p>
                  <p>{hero[lang].madhiya.twelve}</p>{" "}
                  <p>{hero[lang].madhiya.thirteen}</p>
                  <p>{hero[lang].madhiya.fourteen}</p>
                </div>
                <div className="col-lg-6 col-md-6">
                <img className="symbol w-100" alt="gerb" src={madhiya} />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Silbol