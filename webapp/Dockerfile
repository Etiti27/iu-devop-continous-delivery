# # Use the official Node.js image from the Docker Hub
# FROM node:14

# # Create and change to the app directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the app directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install
# # RUN ansible-galaxy collection install community.docker

# # Copy the rest of the application code to the app directory
# COPY . .

# # Expose the port the app runs on
# EXPOSE 3000

# # Define the command to run the application
# CMD ["node", "index.js"]
# First stage: Build the application
FROM node:14 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (if your app needs a build step)
# RUN npm run build

# Second stage: Create the final image with Distroless
FROM gcr.io/distroless/nodejs:14

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["app.js"]
