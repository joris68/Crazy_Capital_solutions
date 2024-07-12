
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install 

# Copy the entire project directory
COPY . .

# Expose the port where your React app runs (usually 3000)
EXPOSE 3000

# Start the application using a process manager (like serve)
CMD [ "npm", "start" ]
