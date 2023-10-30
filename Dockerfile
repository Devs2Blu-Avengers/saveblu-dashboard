# ---- Stage 1: Build the Angular app ----
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy the rest of the application
COPY . .

# Build the app
RUN ng build --prod

# ---- Stage 2: Serve the app using Nginx ----
FROM nginx:alpine

# Copy the built app to the Nginx web directory
COPY --from=build /usr/src/app/dist/saveblu-front /usr/share/nginx/html

# Copy the Nginx configuration file
COPY default.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80

# Command to run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
