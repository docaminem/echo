import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ValveForm } from './src/components/ValveForm';
import { DiagnosisResults } from './src/components/DiagnosisResults';
import { DiagnosisResult } from './src/types/valve';

export default function App() {
  const [results, setResults] = useState<DiagnosisResult[]>([]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ValveForm onResults={setResults} />
          <DiagnosisResults results={results} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});