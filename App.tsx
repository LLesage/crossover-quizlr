import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './src/navigators/RootNavigator';

const App: React.FC<any> = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default App;
