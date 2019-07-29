# BottomCrab

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

![gif](https://media.giphy.com/media/Up887y3ChJfkSXqj35/giphy.gif)

### Smooth keyboard controls for user

The game only has 3 controls for now.  2 arrow keys (left and right) to rotate the BottomCrab and the up arrow to extend your claw.  Initially, movement was choppy where each button press resulted in a quick 45deg turn.  Holding down the up arrow did extend the claw, but the DOM has a slight buffer time to differentiate between a long key stroke and an actual hold down.  I resolved these two issues by using booleans for each action.  Each keydown event would flip the boolean run the appropriate movement function.  Each keyup would flip back the boolean and stop the motion.  This resolved the choppy looking movement, while also simulating a holddown key press.  The result is shown below.
```js
    keyup(e) {
        switch (e.key) {
            case "ArrowUp":
                this.clawRetractActive = true;
                this.clawActive = false;
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
        this.peripheralCrabs.forEach(crab => {
            if (!this.bottomCrab.claw.collidesWith(crab)) {
                switch (e.key) {
                    case "ArrowUp":
                        this.peripheralCrabs.forEach(crab => {
                            if (this.bottomCrab.claw.collidesWith(crab)) {
                                this.clawRetractActive = true;
                                this.clawActive = false;
                            } else {
                                this.clawRetractActive = false;
                                this.clawActive = true;
                            }
                        }); 
                        this.bottomCrabActiveCW = false;
                        this.bottomCrabActiveCCW = false;
                        break;
                    case "ArrowLeft":
                        this.bottomCrabActiveCCW = true;
                        this.clawActive = false;
                        break;
                    case "ArrowRight":
                        this.bottomCrabActiveCW = true;
                        this.clawActive = false;
                        break;
                    // case "ArrowDown":
                    //     this.clawActive = true;
                    //     this.bottomCrab.claw.retractClaw();
                    //     break;
                }
            }
        })
    }
```
```js
    moveBottomCrab() {
        if (this.bottomCrabActiveCW) {
            this.bottomCrab.moveBottomCrabCW();
        }
        if (this.bottomCrabActiveCCW) {
            this.bottomCrab.moveBottomCrabCCW();
        }
    }

    moveClaw() {
        if (this.clawActive) {
            this.bottomCrab.claw.extendClaw();
        } else {
            this.bottomCrab.claw.retractClaw();
            if (this.bottomCrab.claw.r <= 73) this.clawRetractActive = false;
        }
    }
```
![movementsmoothness](https://media.giphy.com/media/f4VidcNizChHO9Zod8/giphy.gif)

### Project Design
BottomCrab was broken down into 4 MVPs for a functional and visually appealing game.  Given the 4day timeframe to complete this project, most of the time was dedicated towards functionality and learning how to use html5 canvas.  Features to be coming in future updates: 1.  Different levels  2. Two claws

## Technologies

* Vanilla JS for game logic
* HTML5 Canvas for rendering animations of cartoon crabs
* Webpack to bundle various scripts into a single source.

