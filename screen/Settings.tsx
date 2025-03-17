import React, {useState} from 'react';
import {ScrollView, Switch, View} from 'react-native';

import {StyleSheet} from 'react-native';

import {IUHeader} from '../components';
import {Text} from 'react-native';
import {colors} from '../constants';
import IconStar from '../assets/icons/ic_star';

const Setting = () => {
  const [isEnabledLockApp, setIsEnabledLockApp] = useState(true);
  const [isUseFingerPrint, setUseFingerPrint] = useState(false);
  const [isEnabledChangePassWord, setIsEnabledChangePassWord] = useState(true);
  return (
    <View style={{}}>
      <IUHeader title={'Settings'} />
      <ScrollView>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16, paddingStart: 10}}>
            Common
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Language
          </Text>
          <View style={{flex: 1}}></View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingEnd: 10,
              paddingStart: 10,
              opacity: 0.6,
            }}>
            English
          </Text>
          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Enviroment
          </Text>
          <View style={{flex: 1}}></View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingEnd: 10,
              paddingStart: 10,
              opacity: 0.6,
            }}>
            Production
          </Text>
          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>

        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16, paddingStart: 10}}>
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Phone Number
          </Text>
          <View style={{flex: 1}}></View>

          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Email
          </Text>
          <View style={{flex: 1}}></View>

          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Sign out
          </Text>
          <View style={{flex: 1}}></View>
          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
          <View
            style={{
              height: 40,
              backgroundColor: 'rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}></View>
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16, paddingStart: 10}}>
            Security
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />

          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Log app in background
          </Text>
          <View style={{flex: 1}}></View>

          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsEnabledLockApp(!isEnabledLockApp);
            }}
            value={isEnabledLockApp}
            style={{marginEnd: 10}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Use Finger Print
          </Text>
          <View style={{flex: 1}}></View>

          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isUseFingerPrint ? colors.primary : colors.inactive}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setUseFingerPrint(!isUseFingerPrint);
            }}
            value={isUseFingerPrint}
            style={{marginEnd: 10}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />

          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Change passworld
          </Text>
          <View style={{flex: 1}}></View>

          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={
              isEnabledChangePassWord ? colors.primary : colors.inactive
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsEnabledChangePassWord(!isEnabledChangePassWord);
            }}
            value={isEnabledChangePassWord}
            style={{marginEnd: 10}}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 16, paddingStart: 10}}>
            Common
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Term of Service
          </Text>
          <View style={{flex: 1}}></View>
          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <IconStar style={{marginStart: 10}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingStart: 10,
            }}>
            Open Source Of licenses
          </Text>
          <View style={{flex: 1}}></View>
          <IconStar style={{marginEnd: 10, opacity: 0.6}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
