# BottomCrab

[Live](https://kallmeehkev.github.io/BottomCrab/)

This game was inspired by my interactions with my close group of friends.  This would be a saying any time one of us tries to stop another from coming ahead on anything. Enjoy.

BottomCrab is a simple game constructed with vanilla Javascript and HTML5 canvas for rendering. The goal of the game is to keep all the crabs from climbing out of the bucket by grabbing them with your claws to pull them back. The longer you can keep any crabs from leaving the bucket the higher your score. You also accumulate much more points the further out a crab is when you pull them back in. The game is over once one crab leaves the bucket.

## Functionality
* Gameplay is confined to four buttons.  
* Two buttons to rotate the BottomCrab in place and two more buttons to control each of it's claws.
* The BottomCrab is at the center of the bucket while the other crabs crawl away radially at increment times
* Game ends when one crab is allowed to escape the bucket
* Different sized crabs will be implemented and will determine the incremental speed at which the crabs crawl out

### Crabs crawl away randomly incrementally

All your "friend" crabs try to run away and the order is entirely randomized except the same crab cannot crawl away consecutively.  The distance, time between moves, and speed are all constants that can be tuned for difficulty in later stages.  The following code shows this movement pattern.

```js
      let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
      let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
      let differentCrab = lastrandom !== random;
      if (this.bottomCrabActiveCW || this.bottomCrabActiveCCW) {
          this.moveBottomCrab();
      }
      if ( this.clawActive || this.clawRetractActive ) {
          this.moveClaw();
      }
      if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
          this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
      } else {
          random = Math.floor(Math.random() * 8);
      }
```
```js
  movePeripheralCrab(timestamp, i, duration) {
      starttime = interval + CONSTANTS.moveDelay;
      if ((timestamp - starttime) <= duration) {
          this.peripheralCrabs[i].moveOut();
      } else {
          interval = timestamp;
          lastrandom = i;
          random = Math.floor(Math.random() * 8);
      }
  }
```
And here is the result

![gif](https://media.giphy.com/media/Thw9wdihkhkZosbg5D/giphy.gif)

### Smooth keyboard controls for user

The game has 4 controls.  2 arrow keys (left and right) to rotate the BottomCrab and 'a' and 'd' keys to extend each claw.  Initially, movement was choppy where each button press resulted in a quick 45deg turn.  Holding down the up arrow did extend the claw, but the DOM has a slight buffer time to differentiate between a long key stroke and an actual hold down.  I resolved these two issues by using booleans for each action.  Each keydown event would flip the boolean run the appropriate movement function.  Each keyup would flip back the boolean and stop the motion.  This resolved the choppy looking movement, while also simulating a holddown key press.  The result is shown below.
```js
keyup(e) {
  switch (e.key) {
      case "d":
          this.keys["d"] = false;
          this.rightClawRetractTog();
          break;
      case "a":
          this.keys["a"] = false;
          this.leftClawRetractTog();
          break;
      case "ArrowLeft":
          this.bottomCrabActiveCCW = false;
          break;
      case "ArrowRight":
          this.bottomCrabActiveCW = false;
          break;
  }
}

keydown(e) {
        if (this.keys["d"] && this.keys["a"]) { //currently two keys active
            this.peripheralCrabs.forEach(crab => {
                if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                    this.rightClawRetractTog();
                } 
                else if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                    this.leftClawRetractTog();
                }
                else {
                    this.rightClawTog();
                    this.leftClawTog();
                }
            });
            this.bottomCrabActiveCW = false;
            this.bottomCrabActiveCCW = false;
        }
        else {
            switch (e.key) {
                case "d":
                    this.keys["d"] = true; //needed for double claw action.
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                            this.rightClawRetractTog();
                        } else {
                            this.rightClawTog();
                        }
                    }); 
                    this.bottomCrabActiveCW = false;
                    this.bottomCrabActiveCCW = false;
                    break;
                case "a":
                    this.keys["a"] = true;
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                            this.leftClawRetractTog();
                        } else {
                            this.leftClawTog();
                        }
                    });
                    this.bottomCrabActiveCW = false;
                    this.bottomCrabActiveCCW = false;
                    break;
                case "ArrowLeft":
                    this.bottomCrabActiveCCW = true;
                    break;
                case "ArrowRight":
                    this.bottomCrabActiveCW = true;
                    break;
            }
        }
    }
```
```js
    moveBottomCrab() {
        if (this.bottomCrabActiveCW) {
            this.bottomCrab.moveBottomCrabCW();
            this.bottomCrab.rightClaw.moveClaw();
            this.bottomCrab.leftClaw.moveClaw();
        }
        if (this.bottomCrabActiveCCW) {
            this.bottomCrab.moveBottomCrabCCW();
            this.bottomCrab.rightClaw.moveClaw();
            this.bottomCrab.leftClaw.moveClaw();
        }
    }

    moveClaw() {
        if (this.rightClawActive) {
            this.bottomCrab.rightClaw.extendRightClaw();
            this.bottomCrab.leftClaw.moveClaw();
        } if (this.rightClawRetractActive) {
            this.bottomCrab.rightClaw.retractClaw();
            if (this.bottomCrab.rightClaw.r < 48) this.rightClawRetractActive = false;
        } 
        if (this.leftClawActive) {
            this.bottomCrab.leftClaw.extendLeftClaw();
            this.bottomCrab.rightClaw.moveClaw();
        } if (this.leftClawRetractActive) {
            this.bottomCrab.leftClaw.retractClaw();
            if (this.bottomCrab.leftClaw.r < 48) this.leftClawRetractActive = false;
        }
    }
```
![movementsmoothness](https://media.giphy.com/media/S5o8drNIZsoZvtw9P4/giphy.gif)

### Different Levels

There are currently 2/3 levels implemented, each fitting the crabs in a bucket motif and each more challenging than the level before.  A simple interpolation created the shadow effect as the lid goes on and off.  

```js
    drawLid(ctx) {
        ctx.fillStyle = `rgba(0,0,0,${this.lidX / 400 - 0.12})`
        ctx.beginPath();
        ctx.arc(400, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "rgba(210,37,41,1)"
        ctx.beginPath();
        ctx.arc(this.lidX, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        if (this.lidX <= -500) {
            this.lidOff = false;
        }
        if (this.lidX >= 400) {
            this.lidOff = true;
        }
        if (this.lidOff) {
            setTimeout(() => {
                this.lidX -= 2
            }, 1000)
        } else {
            if (this.lidX < 400) this.lidX += 10;
        }
    }
```

![gif](https://media.giphy.com/media/Tfv7t1Gl2daQFYLxwB/giphy.gif)


### Project Design
BottomCrab was broken down into 4 MVPs for a functional and visually appealing game.  Given the 4day timeframe to complete this project, most of the time was dedicated towards functionality and learning how to use html5 canvas.  Features to be coming in future updates: 3rd and final level with different game mechanics

## Technologies

* Vanilla JS for game logic
* HTML5 Canvas for rendering animations of cartoon crabs
* Webpack to bundle various scripts into a single source.

