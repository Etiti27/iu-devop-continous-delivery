# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the app directory
COPY webapp/package*.json ./

# Install dependencies
RUN npm install
# RUN ansible-galaxy collection install community.docker

# Copy the rest of the application code to the app directory
COPY webapp/* .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "webapp/index.js"]
