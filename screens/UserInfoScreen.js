import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInfo from '../components/UserInfo';

export default function UserInfoScreen({route}) {
    console.log(route.params.clickedUser);
    const userInfo = route.params.clickedUser
    return (
        <View>
            <UserInfo
            item={userInfo}
          />
        </View>
    )
}

const styles = StyleSheet.create({})
