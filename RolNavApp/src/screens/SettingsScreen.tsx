import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export default function SettingsScreen(): React.JSX.Element {
  const { cerrarSesion } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>⚙️ Settings</Text>
      {/* Texto requerido por la tarea */}
      <Text style={styles.descripcion}>estas en Settings</Text>

      {/* Botón de logout */}
      <TouchableOpacity style={styles.botonLogout} onPress={cerrarSesion}>
        <Text style={styles.botonTexto}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1a202c',
  },
  descripcion: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 32,
  },
  botonLogout: {
    backgroundColor: '#e53e3e',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});