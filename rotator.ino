*import processing.serial.*;
PrintWriter output;

int sensorPin = 0;
int counter=0;
void setup()
{
  Serial.begin(9600);
  output=createWriter("data.txt");
}
void loop(){
float sensorValueInit = analogRead(sensorPin);//read the value from the sensor
 delay(5000);
 float sensorValueOut = analogRead(sensorPin);
 float  movement = abs(sensorValueOut - sensorValueInit);
 if (movement>500 and counter==0)
 {
  Serial.println("opened");
  output.println("opened");
  counter=1;  
  }
  else 
  {
    if (movement>500 and counter==1)  
  {
    counter=0;
    Serial.println("was just locked");    
    }
    else
  {
    Serial.println("was not touched!");
    }
}
} 

