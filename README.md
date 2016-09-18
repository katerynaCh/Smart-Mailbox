# Smart Mailbox

<h3>Track 1: Human Upgrade</h3>

Have you ever spent the whole day running to the mailbox and back to check if the package you are waiting for arrived? Have you ever missed an important letter because of forgetting to check your mailbox? Are you frustrated about tons of spam and advertisement that you find during your daily mailbox check?

If you answered 'yes' to at least one of the above questions, then our product will diminish your pain. The Smart Mailbox is your best friend in the world of constant hurry. Just place a sensor inside your mailbox and get SMS notifications when something arrives there. You can also receive notifications and keep track of received items using the web interface.

Machine vision technologies will scan the delivered item and tell you what exactly you received. Adjust your settings to be notified only on important deliveries - machine vision will keep the spam out! (machine vision is still under development)

<b>How it works:</b> An Arduino board is placed inside your mailbox and a rotation sensor is placed on the door. As soon as your mailbox is opened and something is placed inside, the sensor will generate a signal and send it to the Arduino board, which in turn will send it to the web server using the WiFi (or GSM) Shield. Web server will notify you by SMS that something was delivered to your mailbox and will as well update the web interface information. If a camera and machine vision are applied, the image of the delivered item will be detected, processed and classified, telling you what exactly is in your mailbox and if it is spam. 

<h4>Technologies used:</h4>
- [Arduino](https://en.wikipedia.org/wiki/Arduino) - programmable electronic board and a rotation sensor. The sensor is placed on the door of the mailbox to catch the moment when the door is opened and mail is put inside
- [Twilio](https://en.wikipedia.org/wiki/Twilio) - cloud communications platform for building Voice & Messaging applications. We use it to send SMS to your phones and data about package to your web interface
- [C++](https://en.wikipedia.org/wiki/C%2B%2B), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Node.js](https://en.wikipedia.org/wiki/Node.js) -  to program Arduino, data processing and server programming
- Carton box, yellow paper and tones of tape - to show you an awesome demo
- Our brains - to create an idea and make it possible!

![alt tag](https://github.com/katerynaCh/Smart-Mailbox/blob/master/zqjm2a-ys9s.jpg)
<img src="https://github.com/katerynaCh/Smart-Mailbox/blob/master/In0RYvTB4qY.jpg" alt="Drawing" style="width: 50px;"/>
