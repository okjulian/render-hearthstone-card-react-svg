Based on the work of http://hearthstonelabs.com/sunwell
var cardObj = {
    "id":"EX1_116",
    "set":"EXPERT1",
    "type":"MINION",
    "attack":6,
    "health":2,
    "rarity":"LEGENDARY",
    "cost":5,
    "name":"Leeroy Jenkins",
    "text":"<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
    "texture":"wow_penny_003_D"
};

## HS Images

* neutral frame: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/mNeutral.png
* gem: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/gem.png
* attack: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/attack.png
* health: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/health.png
* title: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/title.png
* rarity: common https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/rarity-common.png
* background gvg: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/bg-gvg.png
* race: https://cdn.rawgit.com/Paratron/sunwell/0ea7277de2a41314eb75d5d8f82cc8376067abbb/assets/race.png
* Piloted shredder: http://hearthstonelabs.com/lib/img/artwork/full/GVG_096.jpg

# Title

## Text alongside title

* Used svg textPath
  Another option was CSS shape-outside like Alice HTML5 demo, but it did not work https://www.html5rocks.com/en/tutorials/shapes/getting-started/

## Dynamic text size

* Used react Measure
  Saw options in http://stackoverflow.com/questions/28177075/draw-svg-text-with-size-and-lengthadjust-based-on-the-specific-path
* Depend only on text-length and stretch automatically svg

  TODO: Find title width formula
  It should depend on the amount of letters and title width
  titleWidth = numberOfLetters * letterWidth -> letterWidth = titleWidth / numberOfLetters
  TODO: Stretch font to title!
  SOLUTION: 60px font-size because svg stretches automatically!!!
  width = 60 - textLength
  16 -> 60px
  25 -> 40px
  POST-SOLUTION: Had to adjust solution to names of different length.
  Tested with 16 letters and 25 letters and realized that font-size decreases linearly.
  Came to the formula font-size = 60px - text.length

# Image

* Stack images on top of each other: `position: relative;` in parent and `position: absolute;` in children http://stackoverflow.com/questions/21344074/i-need-to-stack-these-two-divs-on-top-of-each-other-while-maintaining-the-conten
* Find a better way to clip than clip-path: ellipse(33% 45% at 52%);. Clipping based on the frame would be perfect.

# Styled JSX

Why cant you target react elements? I have to create wrapper divs only to add them style
```
      <div className="gem">
        <Gem value={cost} />
      </div>
      <style jsx>{`
        .gem {
          position: absolute;
          top: 8%;
          left: 3%;
          width: 24%;
          height: 24%;
        }
      `}</style>
```

I'd prefer to just do
```
      <Gem value={cost} />
      <style jsx>{`
        Gem {
          position: absolute;
          top: 8%;
          left: 3%;
          width: 24%;
          height: 24%;
        }
      `}</style>
```

Even adding a class to a react element does not work
```
      <Gem className="gem" value={cost} />
      <style jsx>{`
        .gem {
          position: absolute;
          top: 8%;
          left: 3%;
          width: 24%;
          height: 24%;
        }
      `}</style>
```

Hmmmm maybe I can add gem className and set .gem in <style/> and make <Gem /> pass down its className. This would work if styled jsx used cascading. TODO: Try this!

* styled jsx :global rules!

# SVG vs React

Making an svg in sketch and parametrizing it in react seems to be the best option. Why? Because my first try is buggy. If you set display: flex; to its container everything looks wonky, or if you make the cards width too small, everything looks wonky.


/*
  TODO -> DONE NOW
  * Why is textPath not working?
  * Position text in sketch to generate text placeholders so then replace it with real text
  * Figure out how to clip -> clipPath + ellipse

 */

# How to render a hearthstone card using React and SVG

## Data and assets
* Spare parts -> Final result
* JSON
* Images

## How to layout card elements
* using an svg editor to layout with precision
* creating svg components with exported svg markup

## How to round the card image
* using clip path

## How to show dynamic content
* JSX + SVG

## How to style hearthstone text
* Belwe and font attrs

## How to flow title non-horizontally
* textPath

## How to fit card text
* foreignObject

## Conclusion
* SVG and React are a powerful combination to declaratively make visual content
* SVG has great tooling
* React blends seamlessly with SVG to add it dynamism
* Fun!