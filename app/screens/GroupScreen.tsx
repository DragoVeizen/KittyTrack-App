import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import api from '../services/api';

export default function GroupScreen() {
  const { id } = useLocalSearchParams();
  const [group, setGroup] = useState<any>(null);

  useEffect(() => {
    if (id) {
      api.get(`/groups/${id}`)
        .then(res => setGroup(res.data))
        .catch(console.error);
    }
  }, [id]);

  if (!group) return <Text>Loading ...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{group.name}</Text>
      <Text style={{ marginTop: 12 }}>Expenses will go here...</Text>
    </View>
  );
}
