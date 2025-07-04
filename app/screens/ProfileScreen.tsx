import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import api from '../services/api';

export default function ProfileScreen() {
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    api.get('')
      .then(res => setUser(res.data))
      .catch(err => {
        console.error(err);
        Alert.alert('Error', 'Failed to load profile');
      });
  }, []);

  const handleLogout = () => {
    Alert.alert('Logged out');
    // clear token, redirect, etc.
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>User Profile</Text>

      {user ? (
        <Text style={{ marginVertical: 12 }}>Username: {user.username}</Text>
      ) : (
        <Text>Loading...</Text>
      )}

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
