import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import api from '../services/api';

export default function AddExpenseScreen() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    try {
      await api.post('/expenses', { description, amount: parseFloat(amount) });
      Alert.alert('Success', 'Expense added');
    } catch (err) {
      Alert.alert('Error', 'Failed to add expense');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Description</Text>
      <TextInput
        placeholder="e.g. Pizza"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Text>Amount</Text>
      <TextInput
        placeholder="e.g. 12.50"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Button title="Add Expense Loser" onPress={handleSubmit} />
    </View>
  );
}
