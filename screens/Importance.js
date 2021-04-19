import React, {Component} from 'react';
import { Touchable } from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native'
import AppDrawerNavigator from '../components/AppDrawerNavigator'
export default class Importance extends Component{
    render(){
      return(
          <View >
              <Text style = {{fontWeight: 'bold', fontSize: 30}}>
Use our password generator to generate passwords for you to use.
You can also save these password on our site.
This way, you can keep your passwords all in one place, and you won't forget them!
</Text>
<Text style = {{fontSize: 20, fontStyle: 'italic'}}>
Here is an article about why you should practice using secure passwords and the importance of it.
</Text>
<Text style = {{fontStyle: 'italic'}}>
One of the most common ways that hackers break into computers is by guessing passwords. 
Simple and commonly used passwords enable intruders to easily gain access and control of a computing device.
Conversely, a password that is difficult to guess makes it prohibitively difficult for common hackers to break into a machine and will force them to look for another target.
The more difficult the password, the lower the likelihood that one's computer will fall victim to an unwanted intrusion.
</Text>
<Text style = {{fontWeight: 'bold'}}>
Information Sharing & Security Issues
</Text>
<Text style = {{fontStyle: 'italic'}}>
Thanks to modern technology, computing devices come in many different forms, such as desktop machines, laptops, smartphones, music players, and tablets.
Any one of these devices may connect with other computing devices and share information, and in many cases, they may also connect with banks to conduct financial transactions.
All of these machines are potentially vulnerable to misuse by unauthorized users, and therefore, users should always protect them with passwords.
Passwords are a means by which a user proves that they are authorized to use a computing device. A single device may have multiple users, each with their own password.
Passwords are not unlike a lock-and-key system, in which only the right key will enable a person to have access.
The difference is that each person has a different key for the same door.

Some computing devices, such as desktop computers and laptops, also have a management-level user, or "superuser," who has the ability to control other users and modify the computing devices software, among other things.
This superuser account is also known as the "root" or "administrator" account. This is important to know because while hackers will try to acquire any password they can get, they will generally try to guess the superuser password first, as it gives them the most control over a device.
</Text>
<Text style = {{fontWeight: 'bold'}}>
Key points of Password Security
</Text>
<Text style = {{fontStyle: 'italic'}}>
There are key points of password security that users must know in order to reduce the likelihood of a hacker cracking their password and thus gaining access to their device.
Most importantly, passwords must be long and complex.
Long and complex passwords require more effort and time for a hacker to guess.
Passwords should contain at least ten characters and have a combination of characters such as commas, percent signs, and parentheses, as well as upper-case and lower-case letters and numbers.
Users should never write down their passwords, as that makes it easier for the passwords to be stolen and used by someone else.
Also, never use the same password for two or more devices, as hackers who break into one machine will try to use the same password to take control of others.
</Text>
<Text style = {{fontWeight: 'bold'}}>
Mobile Devices Security
</Text>
<Text style = {{fontStyle: 'italic'}}>
On mobile devices, a PIN or pass code is also needed.
This is like a password for a computer, but it may have a minimum of four characters or digits and be something that is not personal or easily guessed.
Pass codes for devices should also be set to time out after a short period of time.
Upon timing out, the code will then need to be re-entered.
Ideally, the timeout should occur in no more than 20 minutes, although shorter periods between time-outs are best.
</Text>
<Text style = {{fontWeight: 'bold'}}>
Importance of a Strong Password
</Text>
<Text style = {{fontStyle: 'italic'}}>
One of the concerns that people often have when it comes to creating complex passwords is a fear of forgetting them, particularly when there are several to remember.
Naturally, a person should try to think of something that will be easy for them to memorize.
One way to do that is to turn a sentence or phrase into something that is not easily recognized by others.
To do this, use the first letter of every word in the sentence, replacing certain words with numbers or symbols. For example, the word "for" may be replaced with the number 4 or the word "number" with the # symbol.
With this method, a password such as "Save the number for later in the year" may read St#4LITY.
</Text>
<Text style = {{fontWeight: 'bold'}}>
Password Security Measures
</Text>
<Text style = {{fontStyle: 'italic'}}>
Passwords are undoubtedly essential to security, but they are not the only method that can or should be used to protect one's computers and devices.
In addition to creating a good password, people should learn how to safeguard it and use it wisely.
This means never sharing it and, if unable to remember it, keeping the written copy in a secure location.
Other security measures outside of passwords include only providing personal information on websites that are encrypted.
An encrypted website can easily be recognized by the presence of https at the beginning of the Web address.
Computer security software is also critical when it comes to securing computers, and both security software and the firmware on mobile devices should be regularly updated.
Security measures such as passwords are critical when it comes to preventing the unauthorized access of one's computer and mobile devices.
In today's world, hackers and other cyber-criminals are continuously finding new ways to gain access to these devices in order to steal or exploit the information within.
Careless use of passwords, however, can be as bad as leaving one's computing devices unprotected.
For this reason, people should create and protect their passwords with care.
          </Text>
          <View>
          <TouchableOpacity style = {{backgroundColor:'orange', textAlign:'center'}} 
          onPress = {()=>{
              this.props.navigation.navigate('Generate')
          }}>
              <Text>
                  Ok, I Got It! Let's go generate some passwords!!
              </Text>
          </TouchableOpacity>
          </View>
          </View>
      )
    }
}