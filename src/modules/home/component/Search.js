import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RippleEffect, Spinner, Text} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Color, Constants, Device, Styles} from '../../../common';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}
      <RippleEffect style={styles.searchBar}>
        <AntDesign
          name="search1"
          size={21}
          color={Color.Primary}
          style={{paddingLeft: 5, paddingRight: 10}}
        />
        <Text style={styles.searchTxt}>Search here...</Text>
      </RippleEffect>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background,
    paddingTop: Device.isIOS ? 45 : 0,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Color.Primary,
    padding: 8,
    margin: 15,
    borderRadius: 5,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchTxt: {
    fontFamily: Constants.fontFamilyRegular,
    fontSize: Constants.fontXL,
    color: Color.Primary,
    position: 'relative',
    top: 5,
  },
});

export default SearchScreen;
