import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import Routes from './src/routes';

const App = () => {
  const LinkingNavigation = async () => {
    // This is call when app is in kill state & open from Deeplik URL
    const url = await Linking.getInitialURL();
    console.log(' get Initial URL : ' + JSON.stringify(url));

    if (url != null) {
      setTimeout(() => {
        var url1 = url;

        console.log('URL 1 = ' + url1);
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
          params = {},
          match;
        while ((match = regex.exec(url1))) {
          params[match[1]] = match[2];
        }
        console.log('URL PARAM ID : ' + params.userid);
        // NavigationService.navigate('UserProfile', { profile_id: UserCardID })
      }, 3500);
    }
  };
  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
    LinkingNavigation();
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  const handleDeepLink = e => {
    console.log(' Initial URL is : ' + JSON.stringify(e.url));
    // alert(e.url)

    if (e != null) {
      const route = e.url.replace(/.*?:\/\//g, '');
      // use route to navigate
      // ...
      console.log(' Route is : ' + route);

      var url1 = e.url;

      console.log('URL 1 = ' + url1);
      var regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
      while ((match = regex.exec(url1))) {
        params[match[1]] = match[2];
      }
      console.log('URL PARAM ID : ' + params.userid);

      // if(this.state.appState.match(/inactive|background/)){
      //   console.log('App is in background or Inactive : '+this.state.appState)
      // }else{
      //   NavigationService.navigate('UserProfile', { profile_id: params.userid })
      // }
    }
  };
  return <Routes />;
};

export default App;
