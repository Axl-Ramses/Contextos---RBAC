import React, { createContext, useState } from 'react';


type Rol = 'admin' | 'common' | null;

interface AuthContextType {
  sesionActiva: boolean;
  rol: Rol;
  iniciarSesion: (rol: Rol) => void;
  cerrarSesion: () => void;
}


export const AuthContext = createContext<AuthContextType>({
  sesionActiva: false,
  rol: null,
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [sesionActiva, setSesionActiva] = useState<boolean>(false);
  const [rol, setRol] = useState<Rol>(null);


  const iniciarSesion = (rolSeleccionado: Rol): void => {
    setRol(rolSeleccionado);
    setSesionActiva(true);
  };

  
  const cerrarSesion = (): void => {
    setRol(null);
    setSesionActiva(false);
  };

  return (
    <AuthContext.Provider value={{ sesionActiva, rol, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}