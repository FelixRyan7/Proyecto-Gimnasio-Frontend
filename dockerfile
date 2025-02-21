# Usa una imagen oficial de Node.js como base
FROM node:18-alpine 

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json antes de instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto 3000 para acceder a la app
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "dev"]
