
const studentsLang = {
  uz: {
    gpa: [
      {
        title: `GPA ballni hisoblash tartibi`,
        content: `GPA (Grade Point Average) — ta’lim oluvchining dastur bo‘yicha o‘zlashtirgan ballari o‘rtacha qiymati bo‘lib, u quyidagi formula yordamida hisoblanadi: <br/>
<b>GPA</b> =	(K1*U1+K2*U2+K3*U3…+Kn*Un)/(K1+K2+K3…+Kn),	bunda: </br>		
K — har bir fan/modulga ajratilgan kreditlar miqdori;</br>
U — har bir fan/modul bo‘yicha talaba to‘plagan baho. Fanni o‘zlashtirmagan bo‘lsa “0”ga teng bo‘ladi.</br>
<b>kredit</b> — ta’lim olish natijalariga ko‘ra talaba tomonidan muayyan fan bo‘yicha o‘zlashtirilgan o‘quv yuklamasining o‘lchov birligi. Kreditlar qoidaga muvofiq butun, kasr sonlarda ifodalanishi mumkin;</br>
<b>kreditlarni berish</b> — malaka yoki uning alohida qismlariga qo‘yilgan talablarga muvofiq erishilgan ta’lim olish natijalariga ko‘ra talaba yoki boshqa ta’lim oluvchilarga kreditlarni rasmiy taqdim etish jarayoni;</br>
<b>kreditlarni ko‘chirish</b> — talabalarning akademik mobilligini ta’minlash maqsadida bir oliy ta’lim muassasasi ta’lim dasturi bo‘yicha olingan kreditlarni boshqa oliy ta’lim muassasasiga ko‘chirish va tan olish;</br>
<b>kredit to‘plash</b> — ta’lim elementlarini o‘zlashtirish va boshqa yutuqlarga erishish natijasida taqdim etiladigan kredit birliklarini to‘plash;</br>
-	O‘quv yili davomiyligi 32-36 haftagacha bo‘lib, shundan 30 haftasi akademik davrga, 2 haftasi fanlarni tanlash uchun ro‘yxatdan o‘tishga, 6 haftasi attestatsiyalarga ajratiladi. O‘quv yili davomiyligi o‘quv jarayoni jadvaliga muvofiq Institut Kengashining qarori bilan belgilanishi mumkin.</br>
-	Kredit-modul tizimida 1 kredit o‘rtacha 24-30 akademik soatlik o‘quv yuklamasiga teng. Ya’ni, talaba muayyan fandan tegishli kreditlarni to‘plashi uchun ma’lum miqdordagi o‘quv yuklamasini o‘zlashtirishi zarur. O‘quv yuklamasi kunduzgi bakalavriatda — 40-50% auditoriya soati, 50-60% mustaqil ish soatiga, magistraturada — 30-40% auditoriya soati, 60-70% mustaqil ish soatiga (malakaviy amaliyot va bitiruv malakaviy ishlari bundan mustasno) bo‘linadi. Sirtqi ta’lim shaklida fanlarning o‘quv yuklamasida auditoriya soati ulushi kunduzgi ta’lim shaklining kamida 30 foizi miqdorida, kechki ta’lim shaklida haftasida 20 soat hajmida belgilanadi. Kreditning soatlardagi miqdori va o‘quv yuklamasi miqdori Institut Kengashi tomonidan belgilanadi va Institut veb-sahifasida shaffof tarzda joylashtiriladi.</br>
-	Har bir fanning hajmi butun sonli kreditlar bilan ifodalanadi. Davlat ta’lim standartida fan bir semestrda 4 yoki 6 kredit hajmda o‘qitilishi belgilab qo‘yilgan.</br>
Bakalavriat ta’lim yo‘nalishlari va magistratura mutaxassisliklarida talaba odatda bir semestrda 30 kredit, bir o‘quv yilida 60 kredit to‘plashi belgilanadi. Semestr davomida talaba tomonidan o‘zlashtirilishi lozim bo‘lgan kreditlar hajmi o‘quv rejasida ko‘rsatilgan majburiy va tanlov fanlarini o‘z ichiga oladi. </br>
Talaba bakalavriatda o‘qish muddati kamida 3 yil bo‘lganda 180 kredit (5400 akademik soat), o‘qish muddati kamida 4 yil bo‘lganda 240 kredit (7200 akademik soat) to‘plashi zarur. Magistraturada o‘qish muddati kamida 1 yil bo‘lganda 60 kredit (1800 akademik soat), o‘qish muddati kamida 2 yil bo‘lganda 120 kredit (3600 akademik soat) to‘plashi talab etiladi.</br>

`,
      },
      {
        title: `Kredit-modul tizimida talabalarning baholash mezonlari va baholarni konvertatsiya qilish`,
        content: `<b>Kredit-modul tizimida talabalarning baholash mezonlari va baholarni konvertatsiya qilish </b> <br/>
 Talabalar ta’lim dasturi doirasida o‘qitish shaklidan qat’i nazar, O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi tomonidan belgilangan baholash mezonlari asosida baholanadi.</br>
 Kredit-modul tizimida talabalar bilimini baholash 5 baholik tizimda amalga oshiriladi.</br>
 Talabaning ta’lim natijalari quyidagi mezonlar asosida baholanadi:</br>
 -	talaba mustakil xulosa va qaror qabul qiladi, ijodiy fikrlay oladi, mustaqil mushohada yuritadi, olgan bilimini amalda qo‘llay oladi, fanning (mavzuning) mohiyatini tushunadi, biladi, ifodalay oladi, aytib beradi hamda fan (mavzu) bo‘yicha tasavvurga ega deb topilganda - "5" (a’lo) baho;</br>
 -	talaba mustaqil mushohada yuritadi, olgan bilimini amalda qo‘llay oladi, fanning (mavzuning) mohiyatini tushunadi, biladi, ifodalay oladi, aytib beradi xamda fan (mavzu) bo‘yicha tasavvurga ega deb topilganda - "4" (yaxshi) baho;</br>
 -	talaba olgan bilimini amalda qo‘llay oladi, fanning (mavzuning) mohiyatini tushunadi, biladi, ifodalay oladi, aytib beradi hamda fan (mavzu) bo‘yicha tasavvurga ega deb topilganda - "3" (qoniqarli) baho; </br>
 -	talaba fan dasturini o‘zlashtirmagan, fanning (mavzuning) mohiyatini tushunmaydi hamda fan (mavzu) bo‘yicha tasavvurga ega emas, deb topilganda - "2" (qoniqarsiz) baho.</br>

`,
      },
      {
        title: `Baholarni konvertatsiya qilish jadvali (5 ballik tizimdan foizga)`,
        content: ` <table className="statistic__table" >
                        <tr>
                          <td>5 balli</td>
                          <td>100% shkala</td>
                          <td>5 balli</td>
                          <td>100% shkala</td>
                          <td>5 balli</td>
                          <td>100% shkala</td>
                        </tr>

                        
                        <tr>
                          <td>5,00-4,96</td>
                          <td>100</td>
                          <td>4,30-4,26</td>
                          <td>86</td>
                          <td>3,60-3,56</td>
                          <td>72</td>
                        </tr>

                        
                        <tr>
                          <td>4,95-4,91</td>
                          <td>99</td>
                          <td>4,25-4,21</td>
                          <td>85</td>
                          <td>3,55-3,51</td>
                          <td>71</td>
                        </tr>

                        
                        <tr>
                          <td>4,90-4,86</td>
                          <td>98</td>
                          <td>4,20-4,16</td>
                          <td>84</td>
                          <td>3,50-3,46</td>
                          <td>70</td>
                        </tr>

                        
                        <tr>
                          <td>4,85-4,81</td>
                          <td>97</td>
                          <td>4,15-4,11</td>
                          <td>83</td>
                          <td>3,45-3,41</td>
                          <td>69</td>
                        </tr>

                        
                        <tr>
                          <td>4,80-4,76</td>
                          <td>96</td>
                          <td>4,10-4,06</td>
                          <td>82</td>
                          <td>3,40-3,36</td>
                          <td>68</td>
                        </tr>
                      
                        <tr>
                          <td>4,75-4,71</td>
                          <td>95</td>
                          <td>4,05-4,01</td>
                          <td>81</td>
                          <td>3,35-3,31</td>
                          <td>67</td>
                        </tr>
                        
                        <tr>
                          <td>4,70-4,66</td>
                          <td>94</td>
                          <td>4,00-3,96</td>
                          <td>80</td>
                          <td>3,30-3,26</td>
                          <td>66</td>
                        </tr>
                      
                        <tr>
                          <td>4,65-4,61</td>
                          <td>93</td>
                          <td>3,95-3,91</td>
                          <td>79</td>
                          <td>3,25-3,21</td>
                          <td>65</td>
                        </tr>
                        
                        <tr>
                          <td>4,60-4,56</td>
                          <td>92</td>
                          <td>3,90-3,86</td>
                          <td>78</td>
                          <td>3,20-3,16</td>
                          <td>64</td>
                        </tr>
                        
                        <tr>
                          <td>4,55-4,51</td>
                          <td>91</td>
                          <td>4,05-4,01</td>
                          <td>77</td>
                          <td>3,85-3,81</td>
                          <td>63</td>
                        </tr>
                        
                        <tr>
                          <td>4,50-4,46</td>
                          <td>90</td>
                          <td>3,80-3,76</td>
                          <td>76</td>
                          <td>3,10-3,06</td>
                          <td>62</td>
                        </tr>
                        
                        <tr>
                          <td>4,45-4,41</td>
                          <td>89</td>
                          <td>3,75-3,71</td>
                          <td>75</td>
                          <td>3,05-3,01</td>
                          <td>61</td>
                        </tr>
                        
                        <tr>
                          <td>4,40-4,36</td>
                          <td>88</td>
                          <td>3,70-3,66</td>
                          <td>74</td>
                          <td>3,00</td>
                          <td>60</td>
                        </tr>
                        
                        <tr>
                          <td>4,35-4,31</td>
                          <td>87</td>
                          <td>3,65-3,61</td>
                          <td>73</td>
                          <td>3,0 dan kam</td>
                          <td>60 dan kam</td>
                        </tr>
                      </table>`,
      },
    ],
    title:`Batafsil`,
    students:{
      first:"O'qishning birinchi kunlarida tez-tez beriladigan savollar va boshqa foydali ma'lumotlar!",
      second: "Moliya",
      third: "Turar joy",
      fourth: "Tibbiyot bo'limi",
      fivth: "Iqtidorli talabalar",
      sixth: "Ijtimoiy yordam",
      seven: "Tanlovlar",
      eight: "Startup loyihalar ",
      nine: "Talabalarni baholash",
      ten: "Ko'proq ma'lumot olish",
    },
    financeInfo: {
      first:
        "Instititut talabalar uchun, davlat tomonidan stipendiya va turli xil moliyaviy yordam   imkoniyatlarini taklif etadi. Instititut tomonidan taqdim etilgan barcha imkoniyatlardan foydalaning!",
      second: "Stipendiya qachon toʻlanadi?",
      third:
        "07.04.2022 yildagi PQ-198 ga asosan stipendiyalar har oyning 5-sanasiga qadar toʻlanishi belgilangan. 31.01.2020 yildagi Vazirlar Mahkamasining 59-sonli qaroriga asosan davlat granti asosida tahsil oladigan talabalarga oʻzlashtirish baholariga koʻra stipendiya tayinlash buyruqlari chiqariladi. Ushbu buyruqlarga asosan bir semestr davomida talabalarga stipendiya toʻlab beriladi.",
      fourth:
        "Kontrakt mablagʻining qancha qismini toʻlanganimdan soʻng stipendiya beriladi?",
      fivth:
        "07.04.2022 yildagi PQ-198 ga asosan stipendiyalar har oyning 5-sanasiga qadar toʻlanishi belgilangan. Shu sababli har oyning birinchi ish kunida shu kunga qadar oʻquv yilining birinchi semestri uchun kamida 50%, ikkinchi semestri uchun 100% stipendiyali kontrakt toʻlagan talabalar roʻyxati fakultetlarga beriladi. Ushbu roʻyxat asosida mas'ul xodimlar tomonidan stipendiyali kontrakt miqdorini tegishli qismini toʻlagan talabalarga stipendiya tayinlash buyruqlari chiqariladi. Ushbu buyruqlarga asosan bir semestr davomida talabalarga stipendiya toʻlab beriladi.",
      sixth: "Kontrakt toʻlov rekvizitlari qanday?",
      seven:
        "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB TKTI shgʻhv: 400910860262777094100079001 MFO: 00014  STIR: 201053370  OKONX: 92110",
      eight: "Qoʻshma dastur boʻyicha kontrakt toʻlov rekvizitlari qanday?",
      nine: "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB  TKTI shgʻhv: 400910860262777094100079002 MFO: 00014  STIR: 201053370  OKONX: 92110",
      ten: "Stipendiyasiz  kontrakt shaklida oʻqiyman, kontraktning 50% qismini toʻladim, qishgi sementrda barcha fanlarni a'lo bahoga yopdim, bu semestrda stipendiya olamanmi?",
      eleven:
        "31.01.2020 yildagi Vazirlar Mahkamasining 59-sonli qaroriga asosan barcha fanlar boʻyicha oʻzlashtirish koʻrsatkichi faqat “a’lo” baho (reyting koʻrsatkichi — 86 ball va undan yuqori) boʻlgan talabalarga stipendiyaning bazaviy miqdori 20 foizga oshirilgan holda stipendiya toʻlab berilishi belgilangan. Ushbu tartib davlat granti asosida tahsil olayotgan talabalarga yangi semestr uchun stipendiya tayinlash buyruqlari bilan birgalikda tayinlanadi va toʻlanadi. Kontrakt asosida tahsil olayotgan talabalar esa stipendiyali yoki stipendiyasiz kontraktning semestrlar boʻyicha tegishli qismini (oʻquv yilining birinchi semestri uchun kamida 50%, ikkinchi semestri uchun 100%) toʻlaganda soʻng stipendiyaning bazaviy miqdori 20 foizga oshirilgan miqdorda stipendiya beriladi.",
    }
  },
  ru: {
    gpa: [
      {
        title: `Процедура расчета среднего балла`,
        content: `GPA (средний балл)— среднее значение набранных студентом баллов по программе, которое рассчитывается по следующей формуле:</br>
Средний балл =	(К1*У1+К2*У2+К3*У3…+Кн*Ун)/(К1+К2+К3…+Кн)	,	в котором:
K — количество кредитов, выделенных на каждый предмет/модуль;</br>
U — оценка, полученная учащимся по каждому предмету/модулю. Он равен «0», если предмет не освоен.</br>
кредит— единица измерения учебной нагрузки, освоенной студентом по конкретному предмету по результатам обучения. Ссуды могут быть выражены целыми, дробными числами по правилу;</br>
предоставление кредитов— процесс официального предоставления кредитов обучающимся или другим обучающимся на основе достигнутых образовательных результатов в соответствии с требованиями, установленными к квалификации или ее отдельным частям;</br>
перевод кредитов— перевод и признание кредитов, полученных по образовательной программе одного вуза, в другой вуз в целях обеспечения академической мобильности обучающихся;</br>
получить кредит— накопление кредитных единиц, предоставляемых в результате освоения элементов образования и достижения других достижений;</br>

-	Продолжительность учебного года составляет 32-36 недель, из них 30 недель отводится на академический период, 2 недели на регистрацию по выбору предметов, 6 недель на аттестацию. Продолжительность учебного года может быть определена решением Совета института в соответствии с графиком учебного процесса.</br>
-	В кредитно-модульной системе 1 кредит эквивалентен в среднем 24-30 академическим часам обучения. То есть для того, чтобы студент накопил соответствующие кредиты по конкретному предмету, необходимо освоить определенный объем учебной нагрузки. Учебная нагрузка в дневной форме бакалавриата составляет 40-50% аудиторных часов, 50-60% часов самостоятельной работы, в магистратуре - 30-40% аудиторных часов, 60-70% часов самостоятельной работы (кроме профессиональной практики и выпускных квалификационная работа). Доля аудиторных часов в учебной нагрузке по предметам при заочной форме обучения определяется не менее 30 процентов при дневной форме обучения и 20 часов в неделю при вечерней форме обучения. Количество кредитных часов и объем учебной нагрузки определяются Советом Института и в прозрачной форме размещаются на сайте Института.</br>
-	Объем каждого предмета представлен целым числом кредитов. Государственный образовательный стандарт предусматривает преподавание предмета в объеме 4 или 6 кредитов в семестр.</br>
На курсах бакалавриата и магистратуры от студента обычно требуется заработать 30 кредитов за семестр и 60 кредитов за учебный год. В объем кредитов, которые должен освоить студент в течение семестра, входят обязательные и факультативные предметы, указанные в учебном плане.</br>
Студент должен заработать 180 кредитов (5400 академических часов) как минимум за 3 года обучения в бакалавриате и 240 кредитов (7200 академических часов) как минимум за 4 года обучения. В магистратуре требуется 60 кредитов (1800 академических часов) не менее чем за 1 год обучения и 120 кредитов (3600 академических часов) не менее чем за 2 года обучения.</br>
Управление по академическим вопросам, регистратор и преподавателиДеканат подсчитывает средний балл студентов, обучавшихся в летнем семестре. Например, для студентов очной формы обучения показатель GPA при переводе с 1 курса на 2 курс равен 2,4; для перевода со 2 курса на 3 курс - 2,6; При переводе с 3-го курса на 4-й курс студенты с баллом выше 2,8 переводятся на следующий курс. Для студентов-заочников показатель GPA при переводе с 1 курса на 2 курс составляет 2,4; для перевода со 2 курса на 3 курс - 2,6; для перевода с 3 курса на 4 курс - 2,8; При переводе с 4-го курса на 5-й курс студенты с баллом выше 3.0 переводятся на следующий курс. При переводе с 1-го курса на 2-й курс студенты со средним баллом выше 2,4 будут переведены на следующий курс.</br>

`,
      },
      {
        title: `Критерии оценки студентов и конвертация оценок в кредитно-модульной системе`,
        content: `Обучающиеся оцениваются на основании критериев оценки, установленных Министерством высшего и среднего специального образования Республики Узбекистан, независимо от формы обучения в рамках образовательной программы. </br>
        	Оценка знаний обучающихся в кредитно-модульной системе осуществляется по 5-балльной системе.</br>
            Учебные результаты студента оцениваются по следующим критериям:</br>
            -	учащийся делает самостоятельные выводы и решения, может творчески мыслить, самостоятельно наблюдает, может применять полученные знания на практике, понимает сущность науки (предмет), знает, может выражать, рассказывать, считается имеющим представление о науке (предмет ) - "5" (отлично) оценка;</br>
            -	студент ведет самостоятельное наблюдение, может применять полученные знания на практике, понимает суть науки (темы), знает, может изложить, рассказать, а при обнаружении у него представления о науке (теме) - оценка "4" " (хороший);</br>
            -	когда студент умеет применять полученные знания на практике, понимает суть науки (предмета), знает, может выразить, рассказать и имеет представление о науке (предмете) - оценка «3» (удовлетворительно);</br>
            -	когда считается, что обучающийся не усвоил программу науки, не понимает сущности науки (предмета) и не имеет представления о науке (предмете) - оценка «2» (неудовлетворительно).</br>

        
        
        `,
      },
      {
        title: `
Таблица перевода оценок (из 5-бальной системы в проценты)
`,
        content: `
Таблица перевода оценок (из 5-бальной системы в проценты)</br>
 <table className="statistic__table">
                        <tr>
                          <td>5 баллов</td>
                          <td>100%
шкала
</td>
                          <td>5 баллов</td>
                          <td>100%
шкала
</td>
                          <td>5 баллов</td>
                          <td>100%
шкала
</td>
                        </tr>

                        
                        <tr>
                          <td>5,00-4,96</td>
                          <td>100</td>
                          <td>4,30-4,26</td>
                          <td>86</td>
                          <td>3,60-3,56</td>
                          <td>72</td>
                        </tr>

                        
                        <tr>
                          <td>4,95-4,91</td>
                          <td>99</td>
                          <td>4,25-4,21</td>
                          <td>85</td>
                          <td>3,55-3,51</td>
                          <td>71</td>
                        </tr>

                        
                        <tr>
                          <td>4,90-4,86</td>
                          <td>98</td>
                          <td>4,20-4,16</td>
                          <td>84</td>
                          <td>3,50-3,46</td>
                          <td>70</td>
                        </tr>

                        
                        <tr>
                          <td>4,85-4,81</td>
                          <td>97</td>
                          <td>4,15-4,11</td>
                          <td>83</td>
                          <td>3,45-3,41</td>
                          <td>69</td>
                        </tr>

                        
                        <tr>
                          <td>4,80-4,76</td>
                          <td>96</td>
                          <td>4,10-4,06</td>
                          <td>82</td>
                          <td>3,40-3,36</td>
                          <td>68</td>
                        </tr>
                      
                        <tr>
                          <td>4,75-4,71</td>
                          <td>95</td>
                          <td>4,05-4,01</td>
                          <td>81</td>
                          <td>3,35-3,31</td>
                          <td>67</td>
                        </tr>
                        
                        <tr>
                          <td>4,70-4,66</td>
                          <td>94</td>
                          <td>4,00-3,96</td>
                          <td>80</td>
                          <td>3,30-3,26</td>
                          <td>66</td>
                        </tr>
                      
                        <tr>
                          <td>4,65-4,61</td>
                          <td>93</td>
                          <td>3,95-3,91</td>
                          <td>79</td>
                          <td>3,25-3,21</td>
                          <td>65</td>
                        </tr>
                        
                        <tr>
                          <td>4,60-4,56</td>
                          <td>92</td>
                          <td>3,90-3,86</td>
                          <td>78</td>
                          <td>3,20-3,16</td>
                          <td>64</td>
                        </tr>
                        
                        <tr>
                          <td>4,55-4,51</td>
                          <td>91</td>
                          <td>4,05-4,01</td>
                          <td>77</td>
                          <td>3,85-3,81</td>
                          <td>63</td>
                        </tr>
                        
                        <tr>
                          <td>4,50-4,46</td>
                          <td>90</td>
                          <td>3,80-3,76</td>
                          <td>76</td>
                          <td>3,10-3,06</td>
                          <td>62</td>
                        </tr>
                        
                        <tr>
                          <td>4,45-4,41</td>
                          <td>89</td>
                          <td>3,75-3,71</td>
                          <td>75</td>
                          <td>3,05-3,01</td>
                          <td>61</td>
                        </tr>
                        
                        <tr>
                          <td>4,40-4,36</td>
                          <td>88</td>
                          <td>3,70-3,66</td>
                          <td>74</td>
                          <td>3,00</td>
                          <td>60</td>
                        </tr>
                        
                        <tr>
                          <td>4,35-4,31</td>
                          <td>87</td>
                          <td>3,65-3,61</td>
                          <td>73</td>
                          <td>менее 3,0</td>
                          <td>Менее 60</td>
                        </tr>
                      </table>`,
      },
    ],
    title:`Более`,
    students: {
      first:"Часто задаваемые вопросы и другая полезная информация для первых дней обучения!",
      second: "Финансы",
      third: "Проживание",
      fourth: "Медицинский отдел",
      fivth: "Талантливые студенты",
      sixth: "Социальная помощь",
      seven: "Выбор",
      eight: "Стартап проекты ",
      nine: "Оценка учащихся",
      ten: "Показать больше",
    },
    financeInfo: {
      first:
        "Институт предлагает студентам государственные стипендии и различные варианты финансовой помощи. Воспользуйтесь всеми возможностями, предлагаемыми институтом!",
      second: "Когда будет выплачена стипендия?",
      third:
        "На основании ПП-198 от 07.04.2022 установлено, что стипендии будут выплачиваться до 5 числа каждого месяца. Согласно постановлению Кабинета Министров № 59 от 31.01.2020 г. изданы приказы о присуждении стипендий обучающимся на основе государственных грантов на основании их успеваемости. На основании этих приказов выплачиваются стипендии студентам за один семестр.",
      fourth: "Какую часть после выплаты контракта я получу стипендию?",
      fivth:
        "Согласно ПП-198 от 07.04.2022, стипендии должны выплачиваться до 5 числа каждого месяца. По этой причине в первый рабочий день каждого месяца на факультеты выдается список студентов, которые  выплатили не менее 50% за первый семестр учебного года и 100% за второй семестр стипендиального контракта. На основании этого перечня ответственным персоналом издаются приказы о назначении стипендий студентам, уплатившим соответствующую часть суммы контракта на стипендию. В соответствии с этими приказами студентам выплачиваются стипендии в течение семестра.",
      sixth: "Каковы реквизиты платежа по контракту?",
      seven:
        "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB TKTI shgʻhv: 400910860262777094100079001 MFO: 00014  STIR: 201053370  OKONX: 92110",
      eight: "Каковы реквизиты для оплаты контракта по совместной программе?",
      nine: "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB  TKTI shgʻhv: 400910860262777094100079002 MFO: 00014  STIR: 201053370  OKONX: 92110",
      ten: "Я учусь по контракту без стипендии, оплатил 50% контракта, в зимнем семестре закончил все предметы на отлично, получу ли я стипендию в этом семестре?",
      eleven:
        "Согласно постановлению Кабинета Министров № 59 от 31.01.2020 базовый размер стипендии составляет 20% для обучающихся с оценкой «отлично» (рейтинговый показатель – 86 баллов и выше) по всем предметам определено, что стипендия будет выплачиваться с повышением. Этот порядок назначается и выплачивается студентам, обучающимся на основе государственного гранта, вместе с приказами о назначении стипендий на новый семестр. При оплате соответствующей части контракта по семестрам (не менее 50% за первый семестр учебного года, 100% за второй семестр) студентам, обучающимся по контракту, стипендия предоставляется в размере, увеличенном на 20% от базового размера стипендии.",
    }
  },
  en: {
    gpa: [
      {
        title: `The procedure for calculating the average score of GPA `,
        content: `
GPA (grade point average)- the average value of the points scored by the student in the program, which is calculated using the following formula:
 Average score    =	(K1*U1+K2*U2+K3*U3…+Kn*Un)/(K1+K2+K3…+Kn)	,	Wherein :</br>
 K - is the number of credits allocated for each subject/module;</br>
U -is the grade obtained by the student in each subject/module. It is equal to "0" if the subject is not mastered.</br>
credit- a unit of measurement of the teaching load mastered by a student in a particular subject based on learning outcomes. Loans can be expressed in whole, fractional numbers according to the rule;</br>
granting credits — the process of officially granting loans to students or other students based on the achieved educational results in accordance with the requirements established for the qualification or its individual parts;</br>
credit transfer— transfer and recognition of loans received under the educational program of one university to another university in order to ensure academic mobility of students;
collect credit- accumulation of credit units provided as a result of the development of elements of education and the achievement of other achievements;</br>
-	The duration of the academic year is 32-36 weeks, of which 30 weeks are allocated for the academic period, 2 weeks for registration for the choice of subjects, 6 weeks for certification. The duration of the academic year may be determined by the decision of the Council of the Institute in accordance with the schedule of the educational process.</br>
-	In the credit-modular system, 1 credit is equivalent to an average of 24-30 academic hours of study. That is, in order for a student to accumulate the appropriate credits in a particular subject, it is necessary to master a certain amount of the study load. The teaching load in the full-time bachelor's degree is 40-50% of classroom hours, 50-60% of hours of independent work, in the master's program - 30-40% of classroom hours, 60-70% of hours of independent work (except for professional practice and final qualifying work). The share of classroom hours in the teaching load in subjects in part-time education is determined to be at least 30 percent for full-time education and 20 hours a week for evening education. The number of credit hours and the volume of the study load are determined by the Council of the Institute and are posted in a transparent form on the website of the Institute.</br>
-	The volume of each subject is represented by an integer number of credits. The state educational standard provides for the teaching of a subject in the amount of 4 or 6 credits per semester.</br>



`,
      },
      {
        title: `Criteria for assessing students and converting grades in the credit-module system`,
        content: `Students are evaluated based on the assessment criteria established by the Ministry of Higher and Secondary Specialized Education of the Republic of Uzbekistan, regardless of the form of study within the educational program.</br>
	Assessment of students' knowledge in the credit-modular system is carried out according to a 5-point system.</br>
Student learning outcomes are evaluated according to the following criteria:</br>
-	the student makes independent conclusions and decisions, can think creatively, independently observes, can apply the acquired knowledge in practice, understands the essence of science (subject), knows, can express, tell, is considered to have an idea about science (subject) - "5" (excellent) grade;</br>
-	the student conducts independent observation, can apply the acquired knowledge in practice, understands the essence of science (theme), knows, can state, tell, and if he finds an idea about science (theme) - a mark of "4" "(good);</br>
-	when a student knows how to apply the acquired knowledge in practice, understands the essence of science (subject), knows, can express, tell and has an idea about science (subject) - grade "3" (satisfactory);</br>
-	when it is considered that the student has not mastered the program of science, does not understand the essence of science (subject) and has no idea about science (subject) - the mark is "2" (unsatisfactory).</br>
`,
      },
      {
        title: `Grades conversion table (from 5-point system to percentages)`,
        content: `Grades conversion table (from 5-point system to percentages) </br>
        <table className="statistic__table">
                        <tr>
                          <td>5 points </td>
                          <td>100%
                            scale
                            </td>
                          <td>5 points </td>
                          <td>100%
                scale
                </td>
                          <td>5 points </td>
                          <td>100%
scale
</td>
                        </tr>

                        
                        <tr>
                          <td>5,00-4,96</td>
                          <td>100</td>
                          <td>4,30-4,26</td>
                          <td>86</td>
                          <td>3,60-3,56</td>
                          <td>72</td>
                        </tr>

                        
                        <tr>
                          <td>4,95-4,91</td>
                          <td>99</td>
                          <td>4,25-4,21</td>
                          <td>85</td>
                          <td>3,55-3,51</td>
                          <td>71</td>
                        </tr>

                        
                        <tr>
                          <td>4,90-4,86</td>
                          <td>98</td>
                          <td>4,20-4,16</td>
                          <td>84</td>
                          <td>3,50-3,46</td>
                          <td>70</td>
                        </tr>

                        
                        <tr>
                          <td>4,85-4,81</td>
                          <td>97</td>
                          <td>4,15-4,11</td>
                          <td>83</td>
                          <td>3,45-3,41</td>
                          <td>69</td>
                        </tr>

                        
                        <tr>
                          <td>4,80-4,76</td>
                          <td>96</td>
                          <td>4,10-4,06</td>
                          <td>82</td>
                          <td>3,40-3,36</td>
                          <td>68</td>
                        </tr>
                      
                        <tr>
                          <td>4,75-4,71</td>
                          <td>95</td>
                          <td>4,05-4,01</td>
                          <td>81</td>
                          <td>3,35-3,31</td>
                          <td>67</td>
                        </tr>
                        
                        <tr>
                          <td>4,70-4,66</td>
                          <td>94</td>
                          <td>4,00-3,96</td>
                          <td>80</td>
                          <td>3,30-3,26</td>
                          <td>66</td>
                        </tr>
                      
                        <tr>
                          <td>4,65-4,61</td>
                          <td>93</td>
                          <td>3,95-3,91</td>
                          <td>79</td>
                          <td>3,25-3,21</td>
                          <td>65</td>
                        </tr>
                        
                        <tr>
                          <td>4,60-4,56</td>
                          <td>92</td>
                          <td>3,90-3,86</td>
                          <td>78</td>
                          <td>3,20-3,16</td>
                          <td>64</td>
                        </tr>
                        
                        <tr>
                          <td>4,55-4,51</td>
                          <td>91</td>
                          <td>4,05-4,01</td>
                          <td>77</td>
                          <td>3,85-3,81</td>
                          <td>63</td>
                        </tr>
                        
                        <tr>
                          <td>4,50-4,46</td>
                          <td>90</td>
                          <td>3,80-3,76</td>
                          <td>76</td>
                          <td>3,10-3,06</td>
                          <td>62</td>
                        </tr>
                        
                        <tr>
                          <td>4,45-4,41</td>
                          <td>89</td>
                          <td>3,75-3,71</td>
                          <td>75</td>
                          <td>3,05-3,01</td>
                          <td>61</td>
                        </tr>
                        
                        <tr>
                          <td>4,40-4,36</td>
                          <td>88</td>
                          <td>3,70-3,66</td>
                          <td>74</td>
                          <td>3,00</td>
                          <td>60</td>
                        </tr>
                        
                        <tr>
                          <td>4,35-4,31</td>
                          <td>87</td>
                          <td>3,65-3,61</td>
                          <td>73</td>
                          <td>less than 3.0</td>
                          <td>less than 60</td>
                        </tr>
</table>`,
      },
    ],
    title:`More`,
    students: {
      first: "FAQ  and other useful information for the first days of study!",
      second: "Finance",
      third: "Accommodation",
      fourth: "Medical department",
      fivth: "Talented students",
      sixth: "Social assistance",
      seven: "Choices ",
      eight: "Startup space ",
      nine: "Student assessment",
      ten: "Learn more",
    },
    financeInfo: {
      first:
        "The institute offers scholarships and various financial support opportunities for students. Take advantage of all the opportunities provided by the institute!",
      second:
        "The institute offers scholarships and various financial support opportunities for students. Take advantage of all the opportunities provided by the institute!",
      third:
        "When  the scholarship will be paid? According to  DP-198 dated 07.04.2022, it is established that scholarships must be paid by the 5th of each month. On the basis of the Resolution   of the Cabinet of Ministers No. 59 of 31.01.2020, orders are issued on the appointment  scholarships to students studying on the basis of state grants based on their mastery grades. In accordance with these orders  , scholarships are paid to students during the  semester.",
      fourth:
        "What part of the contract amount will I  receive  after  paying the scholarship?",
      fivth:
        "According to  on DP-198 dated 07.04.2022, it is established that scholarships must  be paid by the 5th of each month. For this reason , on the first working day of each  month, the faculties receive a list of students who have paid at least 50% for the first semester of the academic year and 100% for the second semester of the scholarship contract . On the basis of this list, the responsible staff issues orders to award scholarships to students who have paid the appropriate part of the scholarship contract amount. Based on these orders,  students are paid schoolarships during  the semester.",
      sixth: "TASHKENT INSTITUTE OF CHEMICAL TECHNOLOGY?",
      seven:
        "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB TKTI shgʻhv: 400910860262777094100079001 MFO: 00014  STIR: 201053370  OKONX: 92110",
      eight: "What are the joint program contract payment details?",
      nine: "TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI 100011 Toshkent shahri, Navoiy koʻchasi, 32-uy oʻz.Res. Moliya Vazirligi gʻaznachiligi h/r: 23402000300100001010  STIR: 201122919 Markaziy bank XKKM Toshkent shahar BB  TKTI shgʻhv: 400910860262777094100079002 MFO: 00014  STIR: 201053370  OKONX: 92110",
      ten: "I am studying under a contract without a scholarship, I have paid 50% of the contract, I completed all subjects with  perfectly  in the winter semester, will I receive a scholarship this semester?",
      eleven:
        "According to the Resolution  of the Cabinet of Ministers No. 59 dated 31.01.2020, schoolarships will be paid only to students with an excellent score in all subjects  (the rating indicator - 86 points and above) with an increase in the basis amount of the scholarship by 20%. This procedure is assigned and paid together with the scholarship assignment orders for the new semester to students studying on the basis of a state grant. Students studying under a contract, with or without a scholarship, will receive a stipend increased by 20% after paying the corresponding part of the contract by semester (at least 50% for the first semester, 100% for the second semester of the academic year).",
    }
  },
};
export default studentsLang;
