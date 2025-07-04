import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import api from '../services/api';

export default function HomeScreen() {
  const router = useRouter();
  const [groups, setGroups] = useState<any[]>([]);

  useEffect(() => {
    api.get('/groups')
      .then(res => setGroups(res.data))
      .catch(console.error);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Groups</Text>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({ pathname: '/group', params: { id: item.id } })}>
            <Text style={{ padding: 12, fontSize: 18 }}>{item.name}</Text>
        </Pressable>
        )}
      />
    </View>
  );
}
