from twilio.rest import TwilioRestClient
import time
import re


account_sid = "" # Your Account SID from www.twilio.com/console

auth_token  = ""  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

input = open("C:/Users/Kateryna/Desktop/ihminen/data.asc","r")

while 1:
    where = input.tell()
    line=input.readline()
    if not line:
        time.sleep(1)
        input.seek(where)
    else:
        if "opened" in line:
            print "You just received some mail! Wow!"
            message = client.messages.create(body="You just received some mail. Please, check your mailbox.",
                to="your phone number",    
                from_="from phone") 

            print(message.sid)
