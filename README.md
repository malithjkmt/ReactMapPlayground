# ReactMapPlayground

original doc -- https://github.com/lelandrichardson/react-native-maps/blob/master/docs/installation.md

**************installation************************
npm install react-native-maps --save
react-native link

************************make the code*********************
create a new file Home.js

put this

import MapView from 'react-native-maps';

import React, {
  Component,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }

}

export default Home;
then 
In your index file, for android -> index.android.js put this code:

import Home from './Home';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

class AwesomeProject extends Component {

  render() {
    return (
      <Home />
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


#######################################################################
getting the API key by making SH1 finger print (your app's digital certificate), here we get the A debug certificate, not the release certificate
#######################################################################
go to C:\Users\your_user_name\.android\
run
 keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android

or 
keytool -list -v -keystore c:\users\Malith\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android

You should see output similar to this:

Alias name: androiddebugkey
Creation date: Jan 01, 2013
Entry type: PrivateKeyEntry
Certificate chain length: 1
Certificate[1]:
Owner: CN=Android Debug, O=Android, C=US
Issuer: CN=Android Debug, O=Android, C=US
Serial number: 4aa9b300
Valid from: Mon Jan 01 08:04:04 UTC 2013 until: Mon Jan 01 18:04:04 PST 2033
Certificate fingerprints:
     MD5:  AE:9F:95:D0:A6:86:89:BC:A8:70:BA:34:FF:6A:AC:F9
     SHA1: BB:0D:AC:74:D3:21:E1:43:07:71:9B:62:90:AF:A1:66:6E:44:5D:75
     Signature algorithm name: SHA1withRSA
     Version: 3


The line that begins with SHA1 contains the certificate's SHA-1 fingerprint. The fingerprint is the sequence of 20 two-digit hexadecimal numbers separated by colons.

Go to the Google API Console. https://console.developers.google.com/flows/enableapi?apiid=maps_android_backend&reusekey=true 

Create or select a project.
Click Continue to enable the Google Maps Android API.
On the Credentials page, get an API key. 
Note: If you have an existing API key with Android restrictions, you may use that key.
From the dialog displaying the API key, select Restrict key to set an Android restriction on the API key.
In the Restrictions section, select Android apps, then enter your app's SHA-1 fingerprint and package name. For example:
BB:0D:AC:74:D3:21:E1:43:67:71:9B:62:91:AF:A1:66:6E:44:5D:75
com.myapp
save
get the key like
AIzaSyBdVl-cTICSwYKrZ95SuvNw7dbMuDt1KG0

###############################################################

Add your Android API key to your manifest file:

<application>
    <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
    <meta-data
        android:name="com.google.android.maps.v2.API_KEY"
        android:value="ANDROID_GOOGLE_MAPS_API_KEY">
</application>

########################### setup the environment##############

Run "android" and make sure every packages is updated.
If not installed yet, you have to install the following packages :
Extras / Google Play services
Extras / Google Repository
Android 6.0 (API 23) / Google APIs Intel x86 Atom System Image Rev. 13


Clean the cache :
watchman watch-del-all
npm cache clean

at last react-native run-android!! :D
###############################################################

////////////////trouble shooting/////////////////
https://github.com/lelandrichardson/react-native-maps/issues/118

