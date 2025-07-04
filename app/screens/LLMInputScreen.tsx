import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import api from '../services/api';

export default function LLMInputScreen() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await api.get('/gay');
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse('Error parsing expense');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Describe your expense:</Text>
      <TextInput
        placeholder="e.g. John paid €50 for groceries"
        value={prompt}
        onChangeText={setPrompt}
        multiline
        style={{
          height: 100,
          borderWidth: 1,
          padding: 10,
          marginBottom: 12,
        }}
      />
      <Button title="Submit to LLM" onPress={handleSubmit} />
      {response && (
        <Text style={{ marginTop: 20 }}>{response}</Text>
      )}
    </View>
  );
}
