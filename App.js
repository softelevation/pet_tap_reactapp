import React, {useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';
import Routes from './src/routes';
import * as NavigationService from './src/routes/NavigationService';
import {RouteConstants} from './src/utils/constants';
import {PersistGate} from 'redux-persist/integration/react';
import {sagaMiddleware, store, persistor} from './src/redux/store';
import rootSaga from './src/redux/saga';
import {Provider} from 'react-redux';
sagaMiddleware.run(rootSaga);
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
        NavigationService.navigate(RouteConstants.PET_DETAILS, {
          profile_id: 30,
        });
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
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
