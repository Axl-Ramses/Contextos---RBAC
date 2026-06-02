import React, { useState, useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from "../context/AuthContext";

type Rol = "admin" | "common" | null;

export default function LoginScreen(): React.JSX.Element {
  const [rolSeleccionado, setRolSeleccionado] = useState<Rol>(null);
  const { iniciarSesion } = useContext(AuthContext);

  const handleIngresar = (): void => {
    if (!rolSeleccionado) return;
    iniciarSesion(rolSeleccionado);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <Text style={styles.subtitulo}>Selecciona tu rol:</Text>

      
      <TouchableOpacity
        style={styles.opcion}
        onPress={() => setRolSeleccionado("admin")}
      >
        <View style={styles.radio}>
          {rolSeleccionado === "admin" && <View style={styles.radioRelleno} />}
        </View>
        <Text style={styles.opcionTexto}>Admin</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.opcion}
        onPress={() => setRolSeleccionado("common")}
      >
        <View style={styles.radio}>
          {rolSeleccionado === "common" && <View style={styles.radioRelleno} />}
        </View>
        <Text style={styles.opcionTexto}>Common</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={[styles.boton, !rolSeleccionado && styles.botonDeshabilitado]}
        onPress={handleIngresar}
        disabled={!rolSeleccionado}
      >
        <Text style={styles.botonTexto}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a202c",
  },
  subtitulo: {
    fontSize: 16,
    color: "#4a5568",
    marginBottom: 24,
  },
  opcion: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#3182ce",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  radioRelleno: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3182ce",
  },
  opcionTexto: {
    fontSize: 16,
    color: "#2d3748",
    fontWeight: "500",
  },
  boton: {
    marginTop: 24,
    backgroundColor: "#3182ce",
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  botonDeshabilitado: {
    backgroundColor: "#a0aec0",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
