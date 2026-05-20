// ============================================
// Fases / Fases de Anatomia - Dados do Quiz
// ============================================
const phases = {
    cranio: {
        anterior: {
            image: "https://i.imgur.com/JlM0A6A.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "260px", left: "200px", name: "Glabela" },
                { top: "400px", left: "140px", name: "Maxila" },
                { top: "380px", left: "200px", size: "large", name: "Abertura piriforme" },
                { top: "405px", left: "175px", size: "small", name: "Concha nasal inferior" },
                { top: "365px", left: "175px", size: "small", name: "Conha nasal média" },
                { top: "140px", left: "200px", size: "large", name: "Osso frontal" },
                { top: "500px", left: "200px", size: "large", name: "Processos alveolares" },
                { top: "420px", left: "200px", size: "small", name: "Septo nasal" },
                { top: "240px", left: "330px", name: "Supercílio" },
                { top: "300px", left: "100px", size: "large", name: "Órbita" },
                { top: "380px", left: "50px", name: "Osso zigmático" },
            ]
        },
        orbital: {
            image: "https://i.imgur.com/ufGdxRu.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "230px", left: "140px", name: "Fissura orbital inferior" },
                { top: "130px", left: "160px", name: "Fissura orbital superior" },
                { top: "80px", left: "200px", name: "Face orbital do osso frontal" },
                { top: "160px", left: "120px", name: "Face orbital do osso esfenoide" },
                { top: "150px", left: "230px", name: "Lâmina orbital do osso etmóide" },
                { top: "230px", left: "80px", name: "Face orbital do osso zigomático" },
                { top: "210px", left: "200px", name: "Face orbital da maxila" },
                { top: "140px", left: "261px", size: "small", name: "Osso lacrimal" },
                { top: "180px", left: "270px", size: "small", name: "Ducto lacrimal" },
            ]
        },
        lateral: {
            image: "https://i.imgur.com/KLwGBRj.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "80px", left: "90px", size: "large", name: "Osso parietal" },
                { top: "220px", left: "130px", size: "large", name: "Osso temporal" },
                { top: "270px", left: "270px", name: "Osso zigomático" },
                { top: "275px", left: "200px", size: "small", name: "Arco zigomático" },
                { top: "200px", left: "220px", name: "Asa maior do esfenoide" },
                { top: "300px", left: "110px", size: "small", name: "Processo mastóide do temporal" },
                { top: "275px", left: "130px", size: "small", name: "Meato acústico externo" },
                { top: "80px", left: "280px", size: "large", name: "Osso frontal" },
                { top: "80px", left: "160px", size: "small", name: "Sutura coronal" },
                { top: "180px", left: "220px", size: "small", name: "Sutura esfeno-frontal" },
                { top: "180px", left: "190px", size: "small", name: "Sutura esfeno-parietal" },
                { top: "180px", left: "130px", size: "small", name: "Sutura escamosa" },
                { top: "200px", left: "190px", size: "small", name: "Sutura esfeno-temporal" },
            ]
        },
        mandibula: {
            image: "https://i.imgur.com/8cbQjSf.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "270px", left: "170px", name: "Ângulo da mandíbula" },
                { top: "200px", left: "120px", name: "Ramo da mandíbula" },
                { top: "80px", left: "50px", name: "Processo condilar da mandíbula" },
                { top: "250px", left: "300px", name: "Corpo da mandíbula" },
                { top: "250px", left: "450px", name: "Mento" },
            ]
        },
        posterior: {
            image: "https://i.imgur.com/kO3G1Ew.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "168px", left: "140px", size: "small", name: "Protuberância occipital externa" },
                { top: "175px", left: "125px", size: "small", name: "Íneo" },
                { top: "110px", left: "120px", size: "large", name: "Osso occipital" },
                { top: "40px", left: "180px", size: "large", name: "Osso parietal" },
                { top: "165px", left: "50px", size: "small", name: "Linha superior da nuca" },
            ]
        },
        inferior: {
            image: "https://i.imgur.com/YRnucHu.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "110px", left: "230px", size: "small", name: "Osso palatino" },
                { top: "155px", left: "160px", size: "small", name: "Osso esfenoide" },
                { top: "220px", left: "130px", name: "Osso temporal" },
                { top: "310px", left: "220px", size: "large", name: "Osso occipital" },
                { top: "135px", left: "205px", size: "small", name: "Coano" },
                { top: "145px", left: "218px", size: "small", name: "Vômer" },
                { top: "180px", left: "300px", size: "small", name: "Fossa mandibular" },
                { top: "225px", left: "180px", size: "small", name: "Canal do nervo hipoglosso" },
                { top: "235px", left: "255px", size: "small", name: "Côndilo occipital" },
                { top: "145px", left: "261px", size: "small", name: "Lâmina lateral do processo pterigoide do esfenoide" },
                { top: "145px", left: "243px", size: "small", name: "Lâmina medial do processo pterigoide do esfenoide" },
                { top: "210px", left: "295px", size: "small", name: "Processo estiloide do temporal" },
                { top: "240px", left: "320px", size: "small", name: "Processo mastoide do temporal" },
                { top: "170px", left: "175px", size: "small", name: "Forame oval" },
                { top: "175px", left: "196px", size: "small", name: "Forame lácero" },
                { top: "180px", left: "160px", size: "small", name: "Forame espinhoso" },
                { top: "205px", left: "167px", size: "small", name: "Forame carotídeo" },
                { top: "215px", left: "270px", size: "small", name: "Forame jugular" },
                { top: "240px", left: "220px", name: "Forame magno" },
                { top: "52px", left: "215px", size: "small", name: "Sutura palatina mediana" },
                { top: "95px", left: "200px", size: "small", name: "Sutura palatina transversa" },
                { top: "60px", left: "190px", name: "Processo palatino da maxila" },
                { top: "120px", left: "218px", size: "small", name: "Espinha nasal posterior" },
            ]
        },
        superior: {
            image: "https://i.imgur.com/xNVouFu.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "100px", left: "220px", size: "small", name: "Vértix" },
                { top: "50px", left: "210px", size: "small", name: "Drégma" },
                { top: "280px", left: "240px", size: "small", name: "Lâmbda" },
                { top: "150px", left: "230px", name: "Sutura sagital" },
                { top: "150px", left: "280px", size: "large", name: "Eminência parietal" },
            ]
        },
        calota_craniana: {
            image: "https://i.imgur.com/pEk7trI.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points:[
                { top: "200px", left: "200px", size: "small", name: "Sulco sagital" },
                { top: "175px", left: "180px", size: "small", name: "Fóvea granular" },
                { top: "240px", left: "90px", size: "small", name: "Sulco vascular" },
            ]
        },
        interior: {
            image: "https://i.imgur.com/VTlPdSn.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "100px", left: "190px", size: "small", name: "Crista etmoidal" },
                { top: "110px", left: "200px", size: "small", name: "Lâmina crivosa do etmoide" },
                { top: "160px", left: "225px", size: "small", name: "Processo clinoide anterior da sela turca" },
                { top: "145px", left: "235px", size: "small", name: "Asa menor do esfenoide" },
                { top: "160px", left: "170px", size: "small", name: "Forame óptico" },
                { top: "175px", left: "160px", size: "small", name: "Forame redondo" },
                { top: "160px", left: "260px", size: "small", name: "Asa maior do esfenoide" },
                { top: "200px", left: "143px", size: "small", name: "Forame oval" },
                { top: "215px", left: "135px", size: "small", name: "Forame espinhoso" },
                { top: "200px", left: "220px", size: "small", name: "Forame lácero" },
                { top: "195px", left: "200px", size: "small", name: "Processo clinoide posterior da sela turca" },
                { top: "270px", left: "190px", name: "Forame magno" },
                { top: "258px", left: "140px", size: "small", name: "Forame jugular" },
                { top: "240px", left: "140px", size: "small", name: "Meato acústico interno" },
                { top: "205px", left: "170px", size: "small", name: "Impressão trigeminal" },
                { top: "100px", left: "120px", size: "large", name: "Fossa craniana anterior" },
                { top: "215px", left: "70px", size: "large", name: "Fossa craniana média" },
                { top: "350px", left: "120px", size: "large", name: "Fossa craniana posterior" },
                { top: "258px", left: "100px", size: "small", name: "Rochedo temporal" },
                { top: "225px", left: "300px", size: "small", name: "Corpo do esfenoide" },
                { top: "350px", left: "250px", name: "Fossa cerebelar" },
                { top: "400px", left: "220px", size: "small", name: "Sulco transverso" },
                { top: "290px", left: "290px", size: "small", name: "Sulco do seio sigmóide" },
                { top: "235px", left: "190px", size: "small", name: "Clivo" },
                { top: "220px", left: "200px", size: "small", name: "Dorso do esfenoide" },
                { top: "180px", left: "190px", size: "small", name: "Fossa hipofisária" },
                { top: "150px", left: "120px", size: "small", name: "Fissura orbital superior" },
            ]
        }
    },

    medula: {
        coluna_espinal_completa: {
            image: "https://i.imgur.com/ZDKJLSM.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "100px", left: "200px", size: 'small', name: "Radículas sensitivas" },
                { top: "200px", left: "210px", size: 'small', name: "Gânglio sensitivo" },
                { top: "240px", left: "215px", size: 'small', name: "Gânglio motor" },
                { top: "207px", left: "240px", size: 'small', name: "Nervo espinal" },
                { top: "230px", left: "190px", size: 'small', name: "Plexo venoso vertebral" },
                { top: "403px", left: "190px", size: 'small', name: "Cone medular" },
                { top: "430px", left: "210px", size: 'small', name: "Segunda vertebra lombar" },
                { top: "430px", left: "193px", size: 'small', name: "Filamento terminal" },
                { top: "500px", left: "190px", name: "Cauda equina" },
                { top: "550px", left: "190px", size: 'small', name: "Fundo de saco dural" },
                { top: "327px", left: "200px", size: 'small', name: "Forame intervertebral" },
                { top: "380px", left: "200px", size: 'small', name: "Bainha da duramater" },
            ]
        },
        vista_superior: {
            image: "https://i.imgur.com/MnS2XJg.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "100px", left: "270px", name: "Fissura mediana anterior" },
                { top: "300px", left: "270px", name: "Sulco mediano posterior" },
                { top: "80px", left: "310px", size: 'large', name: "Funículo anterior" },
                { top: "87px", left: "140px", name: "Sulco lateral anterior" },
                { top: "350px", left: "210px", name: "Sulco intermédio posterior" },
                { top: "356px", left: "410px", name: "Sulco lateral posterior" },
                { top: "200px", left: "450px", size: 'large', name: "Funiculo lateral" },
                { top: "350px", left: "290px", name: "Fascículo gráceo" },
                { top: "350px", left: "360px", name: "Fascículo cuneiforme" },
                { top: "110px", left: "200px", name: "Corno anterior" },
                { top: "180px", left: "120px", name: "Corno lateral" },
                { top: "300px", left: "140px", name: "Corno posterior" },
                { top: "200px", left: "240px", name: "Substância cinzenta intermédia central" },
                { top: "190px", left: "180px", name: "Substância cinzenta intermédia lateral" },
                { top: "250px", left: "310px", name: "Comissura branca posterior" },
                { top: "176px", left: "300px", size: 'small', name: "Comissura branca anterior" },
                { top: "200px", left: "270px", size: 'small', name: "Canal central da medula" },
            ]
        },
        vista_anterior_nervos: {
            image: "https://i.imgur.com/aUarpkr.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "250px", left: "360px", name: "Artéria e veia espinal anterior" },
                { top: "50px", left: "500px", name: "Radículas sensitivas" },
                { top: "220px", left: "150px", name: "Raíz anterior" },
                { top: "207px", left: "206px", size: 'small', name: "Raíz posterior" },
                { top: "200px", left: "160px", name: "Gânglio sensitivo" },
                { top: "100px", left: "655px", name: "Nervo espinal" },
            ]
        },
        vista_posterior_sem_nervos: {
            image: "https://i.imgur.com/HQpThdt.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "340px", left: "355px", size: "small", name: "Ligamento denticulado" },
                { top: "350px", left: "250px", size: "large", name: "Pia-máter" },
                { top: "430px", left: "220px", size: "large", name: "Aracnoide" },
                { top: "490px", left: "220px", size: "large", name: "Dura-máter" },
                { top: "470px", left: "200px", size: "small", name: "Espaço sub-dural" },
                { top: "400px", left: "200px", size: "small", name: "Espaço sub-aracnoideo" },
                { top: "250px", left: "230px", name: "Sulco mediano posterior" },
                { top: "250px", left: "290px", name: "Sulco intermédio posterior" },
                { top: "250px", left: "360px", name: "Sulco lateral posterior" },
            ]
        }
    },

    vértebra: {
        vertebra_atlas: {
            image: "https://i.imgur.com/FRrJ4BQ.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "10px", left: "250px", name: "Tubérculo anterior" },
                { top: "20px", left: "290px", name: "Arco anterior do atlas" },
                { top: "100px", left: "30px", name: "Processo transverso do atlas" },
                { top: "110px", left: "80px", name: "Forame transverso" },
                { top: "200px", left: "150px", name: "Arco posterior" },
                { top: "50px", left: "150px", size: "large", name: "Face articular do processo articular superior" },
                { top: "270px", left: "260px", name: "Tubérculo posterior" },
                { top: "150px", left: "260px", size: "large", name: "Forame vertebral" }
            ]
        },
        vertebra_axis: {
            image: "https://i.imgur.com/mitBolx.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "50px", left: "240px", size: "large", name: "Dente do axis" },
                { top: "150px", left: "400px", size: "large", name: "Processo articular superior" },
                { top: "375px", left: "250px", name: "Arco do axis" },
                { top: "445px", left: "250px", size: "large", name: "Processo espinhoso" },
            ]
        },
        vertebra_axis_inferior: {
            image: "https://i.imgur.com/NARdJmW.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "80px", left: "240px", size: "large", name: "Corpo da vértebra" },
                { top: "110px", left: "350px", size: "large", name: "Forame transverso" },
                { top: "110px", left: "420px", name: "Processo transverso" },
                { top: "340px", left: "230px", size: "large", name: "Processo espinhoso" },
                { top: "210px", left: "100px", size: "large", name: "Processos articulares inferiores" },
            ]
        },
        vertebra_tipica: {
            image: "https://i.imgur.com/fTDuE73.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "280px", left: "250px", size: "large", name: "Processo espinhoso" },
                { top: "130px", left: "100px", size: "large", name: "Processo transverso" },
                { top: "60px", left: "250px", size: "large", name: "Corpo da vértebra" },
                { top: "200px", left: "200px", size: "large", name: "Lâmina" },
                { top: "80px", left: "170px", size: "large", name: "Face articular superior" },
                { top: "120px", left: "240px", size: "large", name: "Forame intervertebral" },
            ]
        },
        vertebra_tipica_inferior: {
            image: "https://i.imgur.com/XVPCB5M.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "250px", left: "250px", size: "large", name: "Corpo" },
                { top: "130px", left: "190px", name: "Pedículo" },
                { top: "90px", left: "50px", size: "large", name: "Fóvea costal do processo transverso" },
                { top: "150px", left: "250px", size: "large", name: "Forame intervertebral" },
                { top: "160px", left: "185px", size: "small", name: "Fóvea costal superior" },
                { top: "100px", left: "240px", size: "large", name: "Ângulo da face articular" },
                { top: "100px", left: "180px", name: "Processo articular superior" },
            ]
        },
        vertebra_sacral: {
            image: "https://i.imgur.com/etzNCs6.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "30px", left: "250px", size: "large", name: "Promontório" },
                { top: "20px", left: "330px", size: "small", name: "Processo articular superior" },
                { top: "50px", left: "430px", size: "large", name: "Asa" },
                { top: "90px", left: "360px", name: "Parte sacral da margem pélvica" },
                { top: "260px", left: "310px", name: "Forame sacral anterior" },
                { top: "225px", left: "250px", name: "Cristas transversas" },
                { top: "340px", left: "250px", size: "large", name: "Ápice do Sacro" },
                { top: "400px", left: "290px", name: "Processo transverso do cóccix" },
            ]
        },
        vertebra_sacral_posterior: {
            image: "https://i.imgur.com/G5G9Gcq.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "40px", left: "340px", size: "large", name: "Faces dos processos articulares superiores" },
                { top: "100px", left: "50px", size: "large", name: "Superfície auricular" },
                { top: "300px", left: "150px", size: "large", name: "Forame sacral posterior" },
                { top: "250px", left: "60px", size: "large", name: "Crista sacral lateral" },
                { top: "250px", left: "230px", size: "large", name: "Crista sacral mediana" },
                { top: "450px", left: "200px", name: "Corno sacral" },
                { top: "250px", left: "190px", name: "Crista sacral intermédia" },
                { top: "490px", left: "220px", name: "Corno coccígeo" },
                { top: "500px", left: "200px", name: "Processo transverso do cóccix" },
            ]
        },
    },

    tronco_encefálico: {
        vista_anterior_tronco: {
            image: "https://i.imgur.com/Qle6FDp.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "280px", left: "150px", name: "Pirâmide" },
                { top: "320px", left: "130px", name: "Fissura mediana anterior" },
                { top: "350px", left: "100px", name: "Sulco lateral anterior" },
                { top: "280px", left: "190px", size: 'small', name: "Oliva" },
                { top: "360px", left: "140px", size: 'small', name: "Decussação das pirâmides" },
                { top: "250px", left: "145px", size: 'small', name: "Nervo abducente" },
                { top: "140px", left: "235px", size: 'small', name: "Nervo trigêmeo" },
                { top: "160px", left: "120px", size: 'small', name: "Sulco basilar" },
                { top: "255px", left: "100px", size: 'small', name: "Sulco bulbo pontíneo" },
                { top: "260px", left: "130px", size: 'small', name: "Forame cego" },
                { top: "90px", left: "190px", name: "Pedúnculo cerebral" },
                { top: "90px", left: "120px", size: 'small', name: "Fossa interpeduncular" },
                { top: "200px", left: "230px", size: 'small', name: "Pedúnculo cerebelar médio" },
                { top: "178px", left: "160px", size: 'small', name: "Estrias transversais da ponte" },
                { top: "300px", left: "180px", size: 'small', name: "Nervo hipoglosso" },
                { top: "390px", left: "175px", size: 'small', name: "Radículas anteriores do primeiro nervo espinal cervical" },
            ]
        },
        vista_posterior_tronco: {
            image: "https://i.imgur.com/t25DOiR.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "400px", left: "255px", size: 'small', name: "Sulco mediano posterior" },
                { top: "410px", left: "283px", size: 'small', name: "Sulco intermédio posterior" },
                { top: "420px", left: "245px", size: 'small', name: "Fascículo gráceo" },
                { top: "380px", left: "265px", size: 'small', name: "Tubérculo do núcleo gráceo" },
                { top: "270px", left: "193px", size: 'small', name: "Pedúnculo cerebelar inferior" },
                { top: "210px", left: "230px", size: 'small', name: "Locus cerúleos" },
                { top: "250px", left: "270px", size: 'small', name: "Eminência medial" },
                { top: "300px", left: "200px", size: 'small', name: "Recesso lateral" },
                { top: "340px", left: "240px", size: 'small', name: "Trígono do vago" },
                { top: "320px", left: "246px", size: 'small', name: "Trígono do hipoglosso" },
                { top: "310px", left: "230px", size: 'small', name: "Fóvea inferior" },
                { top: "250px", left: "230px", size: 'small', name: "Fóvea superior" },
                { top: "230px", left: "280px", size: 'small', name: "Sulco limitante" },
                { top: "290px", left: "240px", size: 'small', name: "Estrias transversas" },
                { top: "230px", left: "200px", size: 'small', name: "Pedúnculo cerebelar superior" },
                { top: "250px", left: "160px", name: "Pedúnculo cerebelar médio" },
                { top: "265px", left: "280px", size: 'small', name: "Colículo fascial" },
                { top: "130px", left: "230px", name: "Colículo inferior" },
                { top: "90px", left: "210px", name: "Colículo superior" },
                { top: "50px", left: "250px", name: "Corpo pineal" },
            ]
        },
        vista_lateral_tronco: {
            image: "https://i.imgur.com/xGIugTG.png",
            background: "https://i.imgur.com/PUf8wJf.jpg",
            points: [
                { top: "300px", left: "100px", size: 'large', name: "Pedúnculo cerebelar médio" },
                { top: "450px", left: "50px", size: 'large', name: "Oliva" },
                { top: "570px", left: "140px", size: 'small', name: "Sulco lateral posterior" },
                { top: "530px", left: "90px", size: 'large', name: "Funículo lateral" },
                { top: "620px", left: "140px", size: 'small', name: "Nervo acessório" },
                { top: "460px", left: "140px", size: 'large', name: "Nervo glossofaríngeo" },
                { top: "530px", left: "140px", name: "Nervo vago" },
                { top: "230px", left: "230px", size: 'small', name: "Nervo troclear" },
            ]
        },
        mesencéfalo: {
                        image: "https://i.imgur.com/GcGaMUA.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "220px", left: "120px", size: 'small', name: "Aqueduto mesencefálico" },
                        { top: "370px", left: "120px", size: 'small', name: "Substância negra" },
                        { top: "420px", left: "140px", size: 'large', name: "Base do pedúnculo cerebral" },
                        { top: "300px", left: "100px", size: 'large', name: "Tegmento" },
                        { top: "380px", left: "270px", size: 'small', name: "Nervo troclear" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },
                 },

                 cerebelo: {
                    vista_anterior_cerebelo: {
                        image: "https://i.imgur.com/y0yoNeO.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "80px", left: "330px", size: 'large', name: "Vermis cerebelar" },
                        { top: "320px", left: "200px", size: 'small', name: "Flóculo" },
                        { top: "145px", left: "340px", name: "Nódulo cerebelar" },
                        { top: "280px", left: "270px", name: "Pedúnculo cerebelar inferior" },
                        { top: "180px", left: "300px", name: "Pedúnculo cerebelar superior" },
                        { top: "260px", left: "220px", size: 'large', name: "Pedúnculo cerebelar médio" },
                        { top: "260px", left: "400px", name: "Tonsila" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },

                    vista_posterior_cerebelo: {
                        image: "https://i.imgur.com/Z3wf9hM.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "200px", left: "450px", size: 'small', name: "Fissura prima" },
                        { top: "200px", left: "300px", size: 'large', name: "Zona vermiana" },
                        { top: "200px", left: "210px", size: 'large', name: "Zona paravermiana" },
                        { top: "200px", left: "50px", size: 'large', name: "Zona lateral" },
                        { top: "290px", left: "200px", size: 'small', name: "Folha" },
                        { top: "130px", left: "430px", size: 'large', name: "Lobo anterior" },
                        { top: "290px", left: "430px", size: 'large', name: "Lobo posterior" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },

                    vista_interior_cerebelo: {
                        image: "https://i.imgur.com/jBHcY5K.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "290px", left: "180px", size: 'small', name: "Núcleo fastigial" },
                        { top: "270px", left: "210px", size: 'small', name: "Núcleo globoso" },
                        { top: "240px", left: "210px", size: 'small', name: "Núcleo emboliforme" },
                        { top: "230px", left: "230px", size: 'small', name: "Núcleo denteado" },
                        { top: "230px", left: "300px", size: 'large', name: "Corpo medular" },
                        { top: "120px", left: "230px", size: 'large', name: "Córtex cerebelar" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },
                 },

                    nervos_cranianos: {

                        vista_superior_nervos: {
                        image: "https://i.imgur.com/cihTDU1.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "90px", left: "245px", size: 'small', name: "Bulbo do nervo olfatório" },
                        { top: "120px", left: "246px", size: 'small', name: "Trato olfatório" },
                        { top: "130px", left: "230px", size: 'small', name: "Nervo olfatório" },
                        { top: "145px", left: "200px", size: 'small', name: "Estria olfatória medial" },
                        { top: "145px", left: "180px", size: 'small', name: "Estria olfatória lateral" },
                        { top: "190px", left: "200px", size: 'small', name: "Nervo óptico" },
                        { top: "190px", left: "220px", size: 'small', name: "Quiasma óptico" },
                        { top: "250px", left: "280px", size: 'small', name: "Nervo trigeminal" },
                        { top: "300px", left: "270px", size: 'micro', name: "Nervo fascial" },
                        { top: "310px", left: "280px", size: 'micro', name: "Nervo vestibulococlear" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },

                    vista_lateral_nervos: {
                        image: "https://i.imgur.com/anuzO0u.png", // Link da imagem da vista anterior
                        background: "https://i.imgur.com/PUf8wJf.jpg", // Background da fase
                        points: [
                        { top: "120px", left: "220px", size: 'small', name: "Nervo óptico" },
                        { top: "165px", left: "220px", size: 'small', name: "Raíz óptica do nervo trigêmeo" },
                        { top: "150px", left: "250px", size: 'micro', name: "Nervo troclear" },
                        { top: "155px", left: "270px", size: 'micro', name: "Nervo abducente" },
                        { top: "160px", left: "240px", size: 'micro', name: "Nervo oculomotor" },
                        { top: "170px", left: "270px", size: 'small', name: "Nervo trigeminal" },
                        { top: "190px", left: "260px", size: 'small', name: "Ganglio trigeminal" },
                        { top: "220px", left: "250px", size: 'small', name: "Raíz mandibular do nervo trigemeo" },
                        { top: "190px", left: "220px", size: 'small', name: "Raíz maxilar do nervo trigemeo" },
                        // Adicione mais pontos conforme necessário
                        ]
                    },
                }
             }