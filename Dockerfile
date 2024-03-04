FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose the port your app runs on
EXPOSE 8888

# Command to run your app
CMD ["node", "dist/index.js"]
