let bgAudio = new Audio()
bgAudio.volume = 0.05
const generalAudio = new Audio("HBDaudio/bgAudio.mp3")
const monokumaBgAudio = new Audio("HBDaudio/monokuma.mp3")
const monomiBgAudio = new Audio("HBDaudio/monomi.mp3")
const error = document.getElementById("error")
error.classList.add("hidden")
const errorBtn = document.getElementById("errorBtn")
const upupu1 = new Audio("HBDaudio/upupu1.mp3")
upupu1.volume = 0.1
const upupu2 = new Audio("HBDaudio/upupu2.mp3")
upupu2.volume = 0.1
const monokuma_haha = new Audio("HBDaudio/ahaha_mono.mp3")
monokuma_haha.volume = 0.1
const nagito_haha = new Audio("HBDaudio/haha2.ogg")
nagito_haha.volume = 0.1
const nagito_ehh = new Audio("HBDaudio/ehh1.ogg")
nagito_ehh.volume = 0.1
const nagito_yamete = new Audio("HBDaudio/yameteyo.ogg")
nagito_yamete.volume = 0.1
const peko_ehh = new Audio("HBDaudio/ehh.mp3")
peko_ehh.volume = 0.1
const peko_heh = new Audio("HBDaudio/heh1.mp3")
peko_heh.volume = 0.1
const peko_masaka = new Audio("HBDaudio/masaka.mp3")
peko_masaka.volume = 0.1
const notif = new Audio("HBDaudio/notif.mp3")
notif.volume = 0.1
window.onload = function () {
  setTimeout(() => {
    notif.play()
    error.classList.remove("hidden")
    errorBtn.onclick = function () {
      const trans = document.createElement("div")
      trans.classList.add("transBlack")
      document.body.append(trans)
      setTimeout(() => trans.classList.add("hidden-slowly"), 500)
      setTimeout(() => trans.classList.add("hidden"), 4000)
      bgAudio = generalAudio
      bgAudio.play()
      bgAudio.volume = 0.05
      error.classList.add("hidden")
      buildGame("0")
    }
  }, 1500)
}

function buildGame(startId) {
  const clickArea = document.getElementById("ramka")
  clickArea.classList.remove("hidden")
  const mainDiv = document.getElementById("mainDiv")
  mainDiv.classList.remove("hidden")
  let textWrapper = document.createElement("div")
  textWrapper.className = "textWrapper"
  clickArea.append(textWrapper)
  let nameDiv = document.createElement("div")
  textWrapper.append(nameDiv)
  nameDiv.className = "name"
  let speechDiv = document.createElement("div")
  textWrapper.append(speechDiv)
  speechDiv.className = "speech"
  let speech = document.createElement("a")
  speechDiv.append(speech)

  let optionsWrapper = document.createElement("div")
  clickArea.append(optionsWrapper)
  optionsWrapper.className = "optionsWrapper hidden"

  const spriteElem = document.createElement("div")
  mainDiv.append(spriteElem)
  spriteElem.classList.add("spriteElem")

  let sprite = document.createElement("img")
  spriteElem.append(sprite)
  sprite.className = "sprite"

  const soundEffect1 = new Audio("HBDaudio/click1.wav") // звуковые эффекты
  const soundEffect2 = new Audio("HBDaudio/click2.wav")

  showTextInfo(startId)

  function showTextInfo(textIndex) {
    let currentScene = allScenesInfo.find((item) => item.id === textIndex)
    // if (currentScene.world === "danganronpa") {
    //   spriteElem.classList.add("spriteElemRonpa")
    // } else {
    //   spriteElem.classList.remove("spriteElemRonpa")
    // }
    bgAudio.pause()

    if (currentScene.name === "Монокума") {
      bgAudio = monokumaBgAudio
      bgAudio.volume = 0.05
    }
    if (currentScene.name === "Мономи") {
      bgAudio = monomiBgAudio
      bgAudio.volume = 0.05
    }

    // if (currentScene.world === "danganronpa") {
    //   if ((currentScene.bgMusic = "teatr")) {
    //     bgAudio = bgAudioDanganronpaTeatr
    //   } else if ((currentScene.bgMusic = "distrust")) {
    //     bgAudio = bgAudioDanganronpaDistrust
    //   } else if ((currentScene.bgMusic = "execution")) {
    //     bgAudio = bgAudioDanganronpaExecution
    //   } else if ((currentScene.bgMusic = "free_time")) {
    //     bgAudio = bgAudioDanganronpaFreeTime
    //   } else if ((currentScene.bgMusic = "investigation1")) {
    //     bgAudio = bgAudioDanganronpaInvestigation1
    //   } else if ((currentScene.bgMusic = "investigation2")) {
    //     bgAudio = bgAudioDanganronpaInvestigation2
    //   } else if ((currentScene.bgMusic = "main")) {
    //     bgAudio = bgAudioDanganronpaMain
    //   } else if ((currentScene.bgMusic = "monomi")) {
    //     bgAudio = bgAudioDanganronpaMonomi
    //   } else if ((currentScene.bgMusic = "oof")) {
    //     bgAudio = bgAudioDanganronpaOof
    //   } else if ((currentScene.bgMusic = "investigation1")) {
    //     bgAudio = bgAudioDanganronpaInvestigation1
    //   }
    // }
    bgAudio.play()

    // if (currentScene.bgMusic === "STOP") {
    //   bgAudio.pause()
    // }

    if (currentScene.name) {
      nameDiv.classList.remove("opacity")
      nameDiv.innerHTML = currentScene.name
    } else {
      nameDiv.classList.add("opacity")
    }

    showImg(currentScene)

    function showImg(currentScene) {
      bgAudio.loop = true

      if (currentScene.isSprite) {
        sprite.classList.remove("hidden")

        if (currentScene.name === "Тая" && !currentScene.spriteName) {
          sprite.classList.remove("cat-sprite")

          sprite.src = "sprites/t.gif"
        }
        if (currentScene.name === "Дашочек") {
          sprite.src = "sprites/d.gif"
        }
        if (currentScene.name === "Чернушка") {
          sprite.src = "sprites/ch.gif"
        }
        if (currentScene.name === "Кристина") {
          sprite.src = "sprites/k.gif"
        }
        if (currentScene.name === "Фортуна") {
          sprite.src = "sprites/fo.gif"
        }
        if (currentScene.name === "Фиона") {
          sprite.src = "sprites/fi.gif"
        }
        if (currentScene.name === "Нагито") {
          if (currentScene.sound === "ehh") {
            nagito_ehh.play()
          } else if (currentScene.sound === "haha") {
            nagito_haha.play()
          } else if (currentScene.sound === "yamete") {
            nagito_yamete.play()
          }
          sprite.classList.add("spriteRonpa")
          if (currentScene.sprite === "1") {
            sprite.src = "sprites/nagito1.png"
          } else if (currentScene.sprite === "2") {
            sprite.src = "sprites/nagito2.png"
          } else if (currentScene.sprite === "3") {
            sprite.src = "sprites/nagito3.png"
          } else if (currentScene.sprite === "4") {
            sprite.src = "sprites/nagito4.png"
          }
        } else if (currentScene.name === "Пеко") {
          if (currentScene.sound === "ehh") {
            peko_ehh.play()
          } else if (currentScene.sound === "heh") {
            peko_heh.play()
          } else if (currentScene.sound === "masaka") {
            peko_masaka.play()
          }
          sprite.classList.add("spriteRonpa")
          if (currentScene.sprite === "1") {
            sprite.src = "sprites/peko1.png"
          } else if (currentScene.sprite === "2") {
            sprite.src = "sprites/peko2.png"
          } else if (currentScene.sprite === "3") {
            sprite.src = "sprites/peko3.png"
          } else if (currentScene.sprite === "4") {
            sprite.src = "sprites/peko4.png"
          } else if (currentScene.sprite === "5") {
            sprite.src = "sprites/peko5.png"
          }
        } else if (currentScene.name === "Монокума") {
          if (currentScene.sound === "upupu1") {
            upupu1.play()
          } else if (currentScene.sound === "upupu2") {
            upupu2.play()
          } else if (currentScene.sound === "haha") {
            monokuma_haha.play()
          }

          sprite.classList.add("spriteRonpa")
          if (currentScene.spriteTransition) {
            sprite.src = "sprites/monokuma.gif"
            setTimeout(function () {
              sprite.src = "sprites/monokuma.png"
            }, 1000)
          } else if (currentScene.sprite === "ok") {
            sprite.src = "sprites/monokuma.png"
          } else if (currentScene.sprite === "angry") {
            sprite.src = "sprites/monokuma_angry.png"
          } else if (currentScene.sprite === "pupu") {
            sprite.src = "sprites/monokuma_pupu.png"
          } else if (currentScene.sprite === "he") {
            sprite.src = "sprites/monokuma_he.png"
          } else if (currentScene.sprite === "haha") {
            sprite.src = "sprites/monokuma_haha.png"
          }
        } else if (currentScene.name === "Мономи") {
          sprite.classList.add("spriteRonpa")
          if (currentScene.spriteTransition) {
            sprite.src = "sprites/monomi.gif"
            setTimeout(function () {
              sprite.src = "sprites/monomi_hi.png"
            }, 1000)
          } else if (currentScene.sprite === "1") {
            sprite.src = "sprites/monomi.png"
          } else if (currentScene.sprite === "2") {
            sprite.src = "sprites/monomi_what.png"
          }
        } else {
          sprite.classList.remove("spriteRonpa")
        }
      } else if (!currentScene.isSprite) {
        sprite.classList.add("hidden")
      }
    }

    while (optionsWrapper.firstChild) {
      // удаляем предыдущие опции
      optionsWrapper.removeChild(optionsWrapper.firstChild)
    }
    if (currentScene.reveal) {
      console.log("ревил")
      if (!currentScene.transition) {
        if (currentScene.name === "Тая") {
          sprite.src = "sprites/t_s.gif"
        } else if (currentScene.name === "Дашочек") {
          sprite.src = "sprites/d_s.gif"
        } else if (currentScene.name === "Чернушка") {
          sprite.src = "sprites/ch_s.gif"
        } else if (currentScene.name === "Кристина") {
          sprite.src = "sprites/k_s.gif"
        } else if (currentScene.name === "Фортуна") {
          sprite.src = "sprites/fo_s.gif"
        } else if (currentScene.name === "Фиона") {
          sprite.src = "sprites/fi_s.gif"
        }
      }
      if (currentScene.transition) {
        sprite.src = "sprites/t.gif"
        while (speech.firstChild) {
          speech.removeChild(speech.firstChild)
        }
        setTimeout(revealingText, 3800)
      } else {
        revealingText()
      }
    } else if (currentScene.options) {
      console.log("выбор")
      optionsWrapper.classList.remove("hidden")
      // варианты выборов
      currentScene.options.forEach(function (option) {
        const optionBtn = document.createElement("button")

        optionBtn.innerHTML = option.text
        optionBtn.classList.add("optionBtn")
        optionBtn.addEventListener("click", () => selectOption(option))
        optionsWrapper.appendChild(optionBtn)
      })
    } else {
      textWrapper.onclick = function () {
        console.log("клик")
        nextScene(currentScene)
      }
    }
    if (!currentScene.options) {
      console.log("нет выбора")
      optionsWrapper.classList.add("hidden")
    }
    if (!currentScene.reveal) {
      console.log("нет ревила")
      speech.innerHTML = currentScene.text
    }

    if (currentScene.close) {
      const ending = document.createElement("div")
      ending.classList.add("ending")
      document.body.append(ending)
      setTimeout(function () {
        mainDiv.classList.add("hidden")
        textWrapper.classList.add("hidden")
        clickArea.classList.add("hidden")
        ending.classList.add("opa")
      }, 1500)
      setTimeout(function () {
        bgAudio.volume = 0.04
      }, 2000)
      setTimeout(function () {
        bgAudio.volume = 0.03
      }, 2500)
      setTimeout(function () {
        bgAudio.volume = 0.02
      }, 3000)
      setTimeout(function () {
        bgAudio.volume = 0.01
      }, 3500)
      setTimeout(function () {
        bgAudio.volume = 0.005
      }, 4000)

      setTimeout(function () {
        bgAudio.volume = 0.004
      }, 4500)
      setTimeout(function () {
        bgAudio.volume = 0.003
      }, 5000)
      setTimeout(function () {
        bgAudio.volume = 0.002
      }, 5500)
      setTimeout(function () {
        bgAudio.volume = 0.001
      }, 6000)
      setTimeout(function () {
        bgAudio.volume = 0.0005
      }, 6500)
      setTimeout(function () {
        bgAudio.volume = 0.0004
      }, 7000)
      setTimeout(function () {
        bgAudio.volume = 0.0003
      }, 7500)
      setTimeout(function () {
        bgAudio.volume = 0.0002
      }, 8000)
      setTimeout(function () {
        bgAudio.volume = 0.0001
      }, 8500)
      setTimeout(function () {
        bgAudio.pause()
      }, 9000)
    }

    // if (currentScene.transition) {
    //   while (speech.firstChild) {
    //     speech.removeChild(speech.firstChild)
    //   }
    //   setTimeout(revealingText, 1100)
    // } else {
    //   revealingText()
    // }

    function revealingText() {
      speech.innerHTML = ""
      var i = 0
      if (currentScene.text) {
        var text = currentScene.text
        typingText()
      }

      function typingText() {
        if (!currentScene.reveal) {
          speech.innerHTML = currentScene.text
        }
        if (i < text.length) {
          speech.innerHTML += text.charAt(i)
          i++
          let timer = setTimeout(typingText, 35)
          textWrapper.onclick = function () {
            if (currentScene.name === "Тая") {
              sprite.src = "sprites/t.gif"
            }
            if (currentScene.name === "Дашочек") {
              console.log("клик до")
              sprite.src = "sprites/d.gif"
            }
            if (currentScene.name === "Чернушка") {
              sprite.src = "sprites/ch.gif"
            }
            if (currentScene.name === "Кристина") {
              sprite.src = "sprites/k.gif"
            }
            if (currentScene.name === "Фортуна") {
              sprite.src = "sprites/fo.gif"
            }
            if (currentScene.name === "Фиона") {
              sprite.src = "sprites/fi.gif"
            }

            soundEffect1.play()
            clearTimeout(timer)
            speech.innerHTML = currentScene.text
            textWrapper.onclick = function () {
              console.log("клик после ревила всего")
              while (speechDiv.firstChild) {
                speechDiv.removeChild(speechDiv.firstChild)
              }
              speechDiv.append(speech)

              nextScene(currentScene)
            }
          }
        } else if (i >= text.length) {
          if (currentScene.name === "Тая") {
            sprite.src = "sprites/t.gif"
          }
          if (currentScene.name === "Дашочек") {
            sprite.src = "sprites/d.gif"
          }
          if (currentScene.name === "Чернушка") {
            sprite.src = "sprites/ch.gif"
          }
          if (currentScene.name === "Кристина") {
            sprite.src = "sprites/k.gif"
          }
          if (currentScene.name === "Фортуна") {
            sprite.src = "sprites/fo.gif"
          }
          if (currentScene.name === "Фиона") {
            sprite.src = "sprites/fi.gif"
          }

          textWrapper.onclick = function () {
            while (speechDiv.firstChild) {
              speechDiv.removeChild(speechDiv.firstChild)
            }
            speechDiv.append(speech)
            nextScene(currentScene)
          }
        }
      }
    }
    // if (!currentScene.options) {
    //   // если нет ничего, просто кликаем дальше
    //   clickArea.onclick = function () {
    //     nextScene(currentScene)
    //   }
    // }
  }
  function selectOption(option) {
    soundEffect2.play()
    console.log(option.nextText)
    let nextSceneId = option.nextText
    showTextInfo(nextSceneId)
  }
  function nextScene(currentScene) {
    soundEffect1.play()
    let nextSceneId = currentScene.nextText
    showTextInfo(nextSceneId)
  }
}

var allScenesInfo = [
  {
    id: "0",
    transition: true,
    name: "Тая",
    reveal: true,
    isSprite: true,
    text: ":З",
    nextText: "1"
  },
  {
    id: "1",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: 'Ну что, "Я" с обратной стороны экрана, с Днём Рождения нас!',
    nextText: "2"
  },
  {
    id: "2",
    name: "Тая",
    isSprite: true,
    text: 'Ну что, "Я" с обратной стороны экрана, с Днём Рождения нас!',
    options: [
      { text: "Спасибки :3", nextText: "6" },
      { text: "Ты кто?", nextText: "3" }
    ]
  },
  {
    id: "3",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Я это ты, только 2D - в формате персонажа визуальной новеллки, ты ж сама видишь.",
    nextText: "4"
  },
  {
    id: "4",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Меня создали, чтобы поздравить тебя с др. Но раз я это ты, то это и мой др тоже.",
    nextText: "5"
  },
  {
    id: "5",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "В любом случае...",
    nextText: "6"
  },
  {
    id: "6",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Поздравляшки! Хочу пожелать себе оставаться такой же охуенной.",
    nextText: "7"
  },
  {
    id: "7",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "А еще хочу почитать поздравления от других.",
    nextText: "ch_1"
  },
  {
    id: "ch_1",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Ну, я тогда начну!",
    nextText: "ch_2"
  },
  {
    id: "ch_2",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Итак...",
    nextText: "ch_3"
  },
  {
    id: "ch_3",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Моя любимая, самая-самая лучшая Таиса!",
    nextText: "ch_4"
  },
  {
    id: "ch_4",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Поздравляю тебя с Днём Рождения!",
    nextText: "ch_5"
  },
  {
    id: "ch_5",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Желаю вечного счастья, вечного здоровья и кучу баблишка - это никогда не помешает.",
    nextText: "ch_6"
  },
  {
    id: "ch_6",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Я очень рада и очень благодарна, ...",
    nextText: "ch_7"
  },
  {
    id: "ch_7",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "... что в моей жизни есть такой прекрасный, светлый, дружелюбный, тёплый и заботливый человек. ",
    nextText: "ch_8"
  },
  {
    id: "ch_8",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Вот это вот твоё понимание, твоя любовь... ",
    nextText: "ch_9"
  },
  {
    id: "ch_9",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "... это просто бесценно.",
    nextText: "ch_11"
  },
  {
    id: "ch_11",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Потому что ты реально ОФИГЕННЕЙШИЙ человек.",
    nextText: "ch_12"
  },
  {
    id: "ch_12",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "Так что...",
    nextText: "ch_13"
  },
  {
    id: "ch_13",
    reveal: true,
    name: "Чернушка",
    isSprite: true,
    text: "ХЭППИ БЁЗДИК, МОЙ ПУПСИК! <3",
    nextText: "ch_14"
  },
  {
    id: "ch_14",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Спасибки <3",
    nextText: "k_1"
  },
  {
    id: "k_1",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "Хэй!",
    nextText: "k_2"
  },
  {
    id: "k_2",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "Поздравляю Тайсона с Днём Рождения от души душевно прямо в душу.",
    nextText: "k_3"
  },
  {
    id: "k_3",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "Желаю, чтобы под звуки дружного кошачьего мурлыканья каждый день ты цвела и пахла.",
    nextText: "k_4"
  },
  {
    id: "k_4",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "И чтобы где бы тебя лихая не поносила, свои корни помнила.",
    nextText: "k_5"
  },
  {
    id: "k_5",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "И чтобы мы всегда могли к этим корням вернуться и снова встретиться.",
    nextText: "k_6"
  },
  {
    id: "k_6",
    reveal: true,
    name: "Кристина",
    isSprite: true,
    text: "Ура!",
    nextText: "k_7"
  },
  {
    id: "k_7",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Ура! Спасибки :З",
    nextText: "d_1"
  },
  {
    id: "d_1",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Ну что, Таисюся???",
    nextText: "d_2"
  },
  {
    id: "d_2",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Что??? :З",
    nextText: "d_3"
  },
  {
    id: "d_3",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "С ДНЁМ РОЖДЕНИЯ!!!",
    nextText: "d_4"
  },
  {
    id: "d_4",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Поздравляю от всей души эту прекрасную даму!",
    nextText: "d_5"
  },
  {
    id: "d_5",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Самую красивую, умную, чудесную, превосходную и замечательную!",
    nextText: "d_6"
  },
  {
    id: "d_6",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Самую любимую, единственную и неповторимую!",
    nextText: "d_7"
  },
  {
    id: "d_7",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Желаю не переставать быть... Таей. Ведь что значит имя Тая? Загуглим.",
    nextText: "d_8"
  },

  {
    id: "d_8",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: '"Имя Тая имеет различные значения, но чаще всего встречаются трактовки «принцесса» и «богиня»."',
    nextText: "d_9"
  },
  {
    id: "d_9",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Сделаем вид, что это не было очевидно и что мы уже об этом и так не знали.",
    nextText: "d_10"
  },
  {
    id: "d_10",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "И на правах Дашочка-пирожочка хочу пожелать, шоб жизнь была сладкая как этот самый пирожок.",
    nextText: "d_11"
  },
  {
    id: "d_11",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Миллион пирожков.",
    nextText: "d_12"
  },
  {
    id: "d_12",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Шоб жизнь была насыщенная, как брауни насыщен шоколадом.",
    nextText: "d_13"
  },
  {
    id: "d_13",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Шоб была зажигательной, как музыка появления Мономи.",
    nextText: "d_14"
  },
  {
    id: "d_14",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Шоб была пьянящей и уносящей, как гранатовый сок.",
    nextText: "d_15"
  },
  {
    id: "d_15",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Еще желаю бесконечного запаса мёда.",
    nextText: "d_16"
  },
  {
    id: "d_16",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Лучшего срамашкового чая.",
    nextText: "d_17"
  },
  {
    id: "d_17",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Вкуснейшего кофе.",
    nextText: "d_18"
  },
  {
    id: "d_18",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Наиприятнейших лежаний в ванне.",
    nextText: "d_19"
  },
  {
    id: "d_19",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "И чтоб вселялись в тебя самые лучшие хуебесы.",
    nextText: "d_20"
  },
  {
    id: "d_20",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы была самая ахуэнная жопа.",
    nextText: "d_21"
  },
  {
    id: "d_21",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы ты могла отличать лестницу от стремянки.",
    nextText: "d_22"
  },
  {
    id: "d_22",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы твои хлопики хрустели и хлопали, хлоп-хлоп.",
    nextText: "d_23"
  },
  {
    id: "d_23",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы было как можно больше интересных книг с отлично прописанными персонажами и вселенными.",
    nextText: "d_24"
  },
  {
    id: "d_24",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы не отправляли тебя на соляные шахты.",
    nextText: "d_25"
  },
  {
    id: "d_25",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Чтобы было меньше любовных треугольников.",
    nextText: "d_26"
  },
  {
    id: "d_26",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "И меньше кринжа позорного.",
    nextText: "d_27"
  },
  {
    id: "d_27",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "В общем...",
    nextText: "d_28"
  },
  {
    id: "d_28",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "Помни, что я всегда с тобой и всегда люблю тебя безмерно <3",
    nextText: "d_29"
  },
  {
    id: "d_29",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "С ДНЁМ РОЖДЕНИЯ-Я-Я-Я, ТАЯ-Я-Я-Я!!!!!",
    nextText: "d_30"
  },
  {
    id: "d_30",
    reveal: true,
    name: "Дашочек",
    isSprite: true,
    text: "ЛОВА-ЛОВА!",
    nextText: "d_31"
  },
  {
    id: "d_31",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "А-А-А, СПАСИБА-А-А-А!!! :ЗЗЗ",
    nextText: "fo_1"
  },
  {
    id: "fo_1",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Мама!",
    nextText: "fo_2"
  },
  {
    id: "fo_2",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "А, блять!",
    nextText: "fo_3"
  },
  {
    id: "fo_3",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Кошкозавры заговорили!",
    nextText: "fo_4"
  },
  {
    id: "fo_4",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "МАМА!",
    nextText: "fo_5"
  },
  {
    id: "fo_5",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Успокойся!",
    nextText: "fo_6"
  },
  {
    id: "fo_6",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Мы и не такое умеем на самом деле.",
    nextText: "fo_7"
  },
  {
    id: "fo_7",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Но сейчас мы просто хотим тоже тебя поздравить.",
    nextText: "fo_8"
  },
  {
    id: "fo_8",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "Дя, ты же наша любимая мамуля!",
    nextText: "fo_9"
  },
  {
    id: "fo_9",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "С Днём Рождения!",
    nextText: "fo_10"
  },
  {
    id: "fo_10",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "Мы тебя очень-очень-очень любим!",
    nextText: "fo_11"
  },
  {
    id: "fo_11",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Ты самое лучшее, что случилось в нашей жизни.",
    nextText: "fo_12"
  },
  {
    id: "fo_12",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "Хотим пожелать счастья!",
    nextText: "fo_13"
  },
  {
    id: "fo_13",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "И здоровья.",
    nextText: "fo_14"
  },
  {
    id: "fo_14",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "И чтобы твои обьятия и дальше были самыми ласковыми!",
    nextText: "fo_15"
  },
  {
    id: "fo_15",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "И чтобы на тебе и дальше было удобненько лежать.",
    nextText: "fo_16"
  },
  {
    id: "fo_16",
    reveal: true,
    name: "Фиона",
    isSprite: true,
    text: "Спасибо тебе, что ты наша мама!",
    nextText: "fo_17"
  },
  {
    id: "fo_17",
    reveal: true,
    name: "Фортуна",
    isSprite: true,
    text: "Поздравляем!",
    nextText: "fo_18"
  },
  {
    id: "fo_18",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Спасибо, мои хорошие! :З",
    nextText: "fo_19"
  },
  {
    id: "fo_19",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Как приятненько, даже легкие галюцинации решили поздравить.",
    nextText: "fo_20"
  },
  {
    id: "fo_20",
    reveal: true,
    name: "Тая",
    isSprite: true,
    text: "Ну что ж, думаю на этом всё...",
    nextText: "dang_1"
  },
  {
    id: "dang_1",
    reveal: true,
    sound: "upupu1",
    world: "danganronpa",
    spriteTransition: true,
    name: "Монокума",
    isSprite: true,
    text: "ХЕ-ХЕ, ПРИВЕТИК! НУ ЧТО...",
    nextText: "dang_2"
  },
  {
    id: "dang_2",
    reveal: true,
    spriteTransition: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Стоять, Монокума! Сначала я!",
    nextText: "dang_3"
  },
  {
    id: "dang_3",
    reveal: true,
    sprite: "2",
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Таисия, позволь поздравить тебя с Днём Рождения! ",
    nextText: "dang_4"
  },
  {
    id: "dang_4",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Хочу пожелать самых лучших друзей и подружек.",
    nextText: "dang_5"
  },
  {
    id: "dang_5",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Чтобы вы могли быть друг для друга опорой и переживать и радость, и трудности, и что угодно.",
    nextText: "dang_6"
  },
  {
    id: "dang_6",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Дружба - это лучшее и самое ценное, что есть в мире! Помни об этом.",
    nextText: "dang_7"
  },
  {
    id: "dang_7",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "И в такой чудесный день мы решили дать тебе возможность свободно поболтать с другими учениками.",
    nextText: "dang_8"
  },
  {
    id: "dang_8",
    sprite: "1",
    reveal: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Уверена, они хотят сказать тебе что-то приятное.",
    nextText: "dang_9"
  },
  {
    id: "dang_9",
    sprite: "1",
    reveal: true,
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Хочешь их послушать?",
    nextText: "dang_10"
  },
  {
    id: "dang_10",
    sprite: "1",
    world: "danganronpa",
    name: "Мономи",
    isSprite: true,
    text: "Хочешь их послушать?",
    options: [
      { text: "Да", nextText: "peko_0" },
      { text: "Нет", nextText: "net" }
    ]
  },
  {
    id: "net",
    reveal: true,
    world: "danganronpa",
    name: "Тая",
    isSprite: true,
    text: "Что значит нет? Да, хочу.",
    nextText: "peko_0"
  },
  {
    id: "peko_0",
    reveal: true,
    sound: "masaka",
    sprite: "2",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "О, ты хочешь послушать меня?",
    nextText: "peko_1_1"
  },
  {
    id: "peko_1_1",
    reveal: true,
    sprite: "2",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Что ж, с чего бы начать...",
    nextText: "peko_1"
  },
  {
    id: "peko_1",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Я знаю, что ты боец.",
    nextText: "peko_2"
  },
  {
    id: "peko_2",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "За то время, что мы были в игре, я заметила в тебе эту черту.",
    nextText: "peko_3"
  },
  {
    id: "peko_3",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Поэтому, поздравляя тебя, хочу пожелать оставаться таким же бойцом.",
    nextText: "peko_4"
  },
  {
    id: "peko_4",
    reveal: true,
    sprite: "5",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Такой же сильной.",
    nextText: "peko_5"
  },
  {
    id: "peko_5",
    reveal: true,
    sprite: "5",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Способной постоять за себя и защитить дорогих тебе людей.",
    nextText: "peko_6"
  },
  {
    id: "peko_6",
    reveal: true,
    sprite: "3",
    sound: "heh",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Также хочу пожелать... улыбаться. ",
    nextText: "peko_6_1"
  },
  {
    id: "peko_6_1",
    reveal: true,
    world: "danganronpa",
    name: "Пеко",
    sprite: "3",
    isSprite: true,
    text: "Для меня улыбка - это непривычное явление, но, надеюсь, ты будешь улыбаться как можно чаще и искреннее.",
    nextText: "peko_7"
  },
  {
    id: "peko_7",
    world: "danganronpa",
    name: "Пеко",
    sprite: "3",
    isSprite: true,
    text: "Для меня улыбка - это непривычное явление, но, надеюсь, ты будешь улыбаться как можно чаще и искреннее.",
    options: [
      { text: "Надеюсь, ты тоже...", nextText: "peko_8" },
      { text: "/промолчать/", nextText: "peko_16" }
    ]
  },
  {
    id: "peko_8",
    reveal: true,
    world: "danganronpa",
    spriteName: "Пеко",
    name: "Тая",
    sprite: "3",
    isSprite: true,
    text: "Надеюсь, ты тоже сможешь искренне улыбаться как можно чаще.",
    nextText: "peko_9"
  },
  {
    id: "peko_9",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "...",
    nextText: "peko_10"
  },
  {
    id: "peko_10",
    reveal: true,
    sound: "ehh",
    sprite: "4",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Спасибо...",
    nextText: "peko_11"
  },
  {
    id: "peko_11",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "У тебя доброе сердце.",
    nextText: "peko_12"
  },
  {
    id: "peko_12",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Кто-то скажет, что это слабость, но... на самом деле - наоборот.",
    nextText: "peko_13"
  },
  {
    id: "peko_13",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Только поистине сильные люди могут быть добрыми.",
    nextText: "peko_14"
  },
  {
    id: "peko_14",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "Надеюсь, ты сможешь сохранить эту часть себя.",
    nextText: "peko_15"
  },
  {
    id: "peko_15",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "И...",
    nextText: "peko_16"
  },
  {
    id: "peko_16",
    reveal: true,
    world: "danganronpa",
    name: "Пеко",
    sprite: "4",
    isSprite: true,
    text: "Надеюсь, твоя судьба сложится хорошо. Ты этого заслуживаешь.",
    nextText: "peko_17"
  },
  {
    id: "peko_17",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    name: "Пеко",
    isSprite: true,
    text: "С Днём Рождения.",
    nextText: "peko_18"
  },
  {
    id: "peko_18",
    reveal: true,
    world: "danganronpa",
    spriteName: "Пеко",
    name: "Тая",
    isSprite: true,
    text: "Спасибо большое :3",
    nextText: "peko_19"
  },
  {
    id: "peko_19",
    world: "danganronpa",
    name: "Тая",
    isSprite: true,
    text: "Теперь слушаем Нагито?",
    options: [
      { text: "Да", nextText: "nagito_1" },
      { text: "Нет", nextText: "netN" }
    ]
  },
  {
    id: "netN",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Тая",
    isSprite: true,
    text: "Что значит нет? Да, слушаем.",
    nextText: "netN2"
  },
  {
    id: "netN2",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Тая",
    isSprite: true,
    text: "Типичная иллюзия выбора :З",
    nextText: "nagito_1"
  },
  {
    id: "nagito_1",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Ох, неужели ты и правда хочешь послушать меня?",
    nextText: "nagito_2"
  },
  {
    id: "nagito_2",
    reveal: true,
    sound: "ehh",
    sprite: "3",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Это такая честь.",
    nextText: "nagito_3"
  },
  {
    id: "nagito_3",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Поздравлять такую Абсолютную...",
    nextText: "nagito_4"
  },
  {
    id: "nagito_4",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Поздравлять такую Абсолютную...",
    options: [
      { text: "У меня нет Абсолютного таланта...", nextText: "nagito_5" },
      { text: "Да, я Абсолютная :З", nextText: "nagito_8" }
    ]
  },
  {
    id: "nagito_5",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    spriteName: "Нагито",
    name: "Тая",
    isSprite: true,
    text: "Ну, я всё-таки не из вашей ебанутой школы, так что Абсолютного таланта у меня нет.",
    nextText: "nagito_6"
  },
  {
    id: "nagito_6",
    reveal: true,
    sound: "haha",
    sprite: "2",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Ха-ха, ну что ты. Конечно есть.",
    nextText: "nagito_7"
  },
  {
    id: "nagito_7",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "А если ты его не помнишь или еще не знаешь, то не страшно.",
    nextText: "nagito_8"
  },
  {
    id: "nagito_8",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Очевидно, что он у тебя есть.",
    nextText: "nagito_9"
  },
  {
    id: "nagito_9",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Одного взгяда на тебя достаточно, чтобы понять, что ты исключительная и невероятная личность.",
    nextText: "nagito_10"
  },
  {
    id: "nagito_10",
    reveal: true,
    sprite: "3",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Такая как ты ни за что не сдастся отчаянию.",
    nextText: "nagito_11"
  },
  {
    id: "nagito_10",
    sprite: "3",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Такая как ты полна надежды.",
    nextText: "nagito_11"
  },
  {
    id: "nagito_11",
    sprite: "3",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Такая как ты будет бороться до конца.",
    nextText: "nagito_12"
  },
  {
    id: "nagito_12",
    reveal: true,
    sprite: "4",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "И обязательно победит.",
    nextText: "nagito_13"
  },
  {
    id: "nagito_13",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Я в этом уверен.",
    nextText: "nagito_14"
  },
  {
    id: "nagito_14",
    reveal: true,
    sprite: "1",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Ведь даже проиграв можно победить...",
    nextText: "nagito_15"
  },
  {
    id: "nagito_15",
    reveal: true,
    sprite: "2",
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Желаю тебе всегда добиваться победы.",
    nextText: "nagito_16"
  },
  {
    id: "nagito_16",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Не уступать отчаянию.",
    nextText: "nagito_17"
  },
  {
    id: "nagito_17",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "И верить в надежду.",
    nextText: "nagito_18"
  },
  {
    id: "nagito_18",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "Оставайся таким же совершенством.",
    nextText: "nagito_19"
  },
  {
    id: "nagito_19",
    sprite: "2",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "И становись только лучше. Ведь нет предела совершенству.",
    nextText: "nagito_20"
  },
  {
    id: "nagito_20",
    sprite: "4",
    reveal: true,
    world: "danganronpa",
    name: "Нагито",
    isSprite: true,
    text: "С Днём Рождения!",
    nextText: "nagito_21"
  },
  {
    id: "nagito_21",
    sprite: "4",
    reveal: true,
    world: "danganronpa",
    spriteName: "Нагито",
    name: "Тая",
    isSprite: true,
    text: "Спасибо большое :3",
    nextText: "monokuma_1"
  },
  {
    id: "monokuma_1",
    reveal: true,
    world: "danganronpa",
    spriteTransition: true,
    name: "Монокума",
    isSprite: true,
    text: "Алё! Про меня забыли, что ли?",
    nextText: "monokuma_2"
  },
  {
    id: "monokuma_2",
    reveal: true,
    sprite: "angry",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Хули эта тупорылая крольчиха себе позволяет перебивать меня?",
    nextText: "monokuma_3"
  },
  {
    id: "monokuma_3",
    sprite: "ok",
    reveal: true,
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Ладно, потом с ней разберусь.",
    nextText: "monokuma_4"
  },
  {
    id: "monokuma_4",
    reveal: true,
    sprite: "pupu",
    sound: "upupu2",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "А сейчас будем разбираться с тобой.",
    nextText: "monokuma_5"
  },
  {
    id: "monokuma_5",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "У тебя ведь День Рождения.",
    nextText: "monokuma_6"
  },
  {
    id: "monokuma_6",
    reveal: true,
    sprite: "he",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Чего бы тебе такого пожелать...",
    nextText: "monokuma_7"
  },
  {
    id: "monokuma_7",
    reveal: true,
    sprite: "haha",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Кровожадности? Беспощадности? Садизма?",
    nextText: "monokuma_8"
  },
  {
    id: "monokuma_8",
    reveal: true,
    sprite: "he",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Нет, нельзя, иначе меня уберут отсюда и вернут обратно в свою игру...",
    nextText: "monokuma_9"
  },
  {
    id: "monokuma_9",
    reveal: true,
    sprite: "haha",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Ну-у-у, тогда желаю не ходить в школу больше никогда! Там происходят ебанутые вещи.",
    nextText: "monokuma_10"
  },
  {
    id: "monokuma_10",
    sprite: "haha",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Ну-у-у, тогда желаю не ходить в школу больше никогда! Там происходят ебанутые вещи.",
    options: [
      {
        text: "Бесполезное пожелание, я и так в неё никогда не пойду.",
        nextText: "monokuma_10_1"
      },
      {
        text: "Хорошее пожелание, как раз ненавижу школу.",
        nextText: "monokuma_13"
      }
    ]
  },
  {
    id: "monokuma_10_1",
    reveal: true,
    sprite: "haha",
    world: "danganronpa",
    name: "Тая",
    isSprite: true,
    text: "Да я и так никогда больше не попаду в школу, слава богу.",
    nextText: "monokuma_11"
  },
  {
    id: "monokuma_11",
    reveal: true,
    sound: "haha",
    sprite: "haha",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Я бы на твоём месте не был бы так уверен.",
    nextText: "monokuma_12"
  },
  {
    id: "monokuma_12",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Никогда не знаешь, что тебя ждёт и что может внезапно произойти.",
    nextText: "monokuma_13"
  },
  {
    id: "monokuma_13",
    reveal: true,
    sprite: "angry",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Еще желаю не быть скучной. Я люблю тех, кто может меня хорошенько повеселить.",
    nextText: "monokuma_14"
  },
  {
    id: "monokuma_14",
    reveal: true,
    sprite: "haha",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Веселья! Больше веселья! Приколов! Безбашенности!",
    nextText: "monokuma_15"
  },
  {
    id: "monokuma_15",
    reveal: true,
    sprite: "angry",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "И не тупи, не люблю тупых.",
    nextText: "monokuma_16"
  },
  {
    id: "monokuma_16",
    reveal: true,
    sprite: "ok",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Но ты кажешься довольно умной, так что продолжай в том же духе.",
    nextText: "monokuma_17"
  },
  {
    id: "monokuma_17",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "В общем желаю развлечений.",
    nextText: "monokuma_18"
  },
  {
    id: "monokuma_18",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "И не быть куклововом..",
    nextText: "monokuma_19"
  },
  {
    id: "monokuma_19",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Кукодов...",
    nextText: "monokuma_20"
  },
  {
    id: "monokuma_20",
    reveal: true,
    sprite: "angry",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Куколдом короче не быть!",
    nextText: "monokuma_21"
  },
  {
    id: "monokuma_21",
    reveal: true,
    sprite: "ok",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Всё, хватит тут няшкаться с этими поздравлениями! Достало!",
    nextText: "monokuma_22"
  },
  {
    id: "monokuma_22",
    reveal: true,
    sprite: "ok",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Мне пора дальше кошмарить школьников.",
    nextText: "monokuma_23"
  },
  {
    id: "monokuma_23",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "Но с тобой мы еще увидимся.",
    nextText: "monokuma_24"
  },
  {
    id: "monokuma_24",
    reveal: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "С Днём Рожденьица!",
    nextText: "monokuma_25"
  },
  {
    id: "monokuma_25",
    close: true,
    sprite: "pupu",
    world: "danganronpa",
    name: "Монокума",
    isSprite: true,
    text: "С Днём Рожденьица!"
  }
]
