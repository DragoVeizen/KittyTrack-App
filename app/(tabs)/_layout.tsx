import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Groups' }} />
      <Tabs.Screen name="group" options={{ title: 'Group' }} />
      <Tabs.Screen name="add-expense" options={{ title: 'Add Expense' }} />
      <Tabs.Screen name="llm" options={{ title: 'Smart Input' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
